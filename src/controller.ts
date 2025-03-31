const Main = imports.ui.main
const { base64_encode } = imports.gi.GLib
import { Settings } from "settings"
import { WebSocket, WebSocketReadyState } from "lib/websocket"
import { WakeOnLan } from "lib/wakeonlan"
import { ControllerKey } from "types"
import { Logger } from "utils/logger"

/** A class that handles the connection and control of the device */
export class Controller {
    private settings: Settings
    private websocket: WebSocket | null = null

    constructor(settings: Settings) {
        this.settings = settings
    }

    /** Returns the websocket url or null on error */
    private buildUrl(): string | null {
        const { host, port, name, token } = this.settings.state

        // Show a warning to the user if the address is not valid
        const ipPort = `${host}:${port}`
        const ipPortRegex = /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d):([0-9]{1,5})$/
        if (!ipPortRegex.test(ipPort)) {
            Main.notifyError('Invalid MAC address!', 'The IP address or port is invalid or missing. Please provide a valid address in the settings!')
            Logger.logWarning('Invalid IP or port!')
            return null
        }

        let url = `wss://${host}:${port}/api/v2/channels/samsung.remote.control?name=${base64_encode(name ?? "SamsungTvRemote")}`
        if (token !== "") {
            url = url + `&token=${token}`
        }

        return url
    }

    /** 
     * Sets up the websocket connection
     * @param {function} callback - A function that's called when the websocket is connected
     * */
    private connect(callback?: () => void) {
        if (this.websocket !== null) {
            Logger.log('Closing previous connection....')
            this.websocket.close()
        }

        Logger.log('Building URL....')
        const url = this.buildUrl()
        if (url === null) {
            return
        }
        Logger.log('URL is: ' + url)

        this.websocket = new WebSocket(url, {
            checkCertificate: false,
            onConnect: callback,
            onMessage: (message) => {
                Logger.log('Message recieved: ' + message)
                const parsedMessage = JSON.parse(message)

                if (parsedMessage?.event === 'ms.channel.connect' && parsedMessage?.data?.token) {
                    Logger.log('Token recieved. Saving to settings.')
                    this.settings.state.token = parsedMessage.data.token
                }
            }
        })
    }

    /** Sends a keypress to the device */
    public sendKey(key: ControllerKey) {
        const data = JSON.stringify({
            'method': 'ms.remote.control',
            'params': {
                'Cmd': 'Click',
                'DataOfCmd': key,
                'Option': 'false',
                'TypeOfRemote': 'SendRemoteKey'
            }
        })

        Logger.log('Sending key...')

        /** Check the websocket state before sending and reconnect if needed. 
         * If the socket needs to reconnect we use the connect callback to send the key
         * so that we don't send anything before the connection is ready. */
        if (this.settings.changed || this.websocket === null || this.websocket.readyState !== WebSocketReadyState.OPEN) {
            Logger.log('Reconnect needed, reason:')

            if (this.settings.changed) {
                Logger.log('-settings changed')
            }

            if (this.websocket === null) {
                Logger.log('-websocket was not initialized')
            }

            if (this.websocket !== null && this.websocket.readyState !== WebSocketReadyState.OPEN) {
                Logger.log('-websocket state was: ' + this.websocket.readyState)
            }

            this.connect(() => {
                Logger.log('Controller connected, sending key...')
                this.settings.changed = false
                this.websocket?.send(data)
            })
        } else if (this.websocket !== null && this.websocket.readyState === WebSocketReadyState.OPEN) {
            this.websocket.send(data)
        }
    }

    /** Turns on the tv */
    public wakeUpDevice() {
        // Validate address
        const macAddress = this.settings.state.mac
        const macRegex = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/

        if (macAddress !== undefined && macRegex.test(macAddress)) {
            Logger.log('Sending magic packet to device...')
            WakeOnLan.sendMagicPacket(macAddress)
        } else {
            Main.notifyError('Invalid MAC address!', 'The MAC address is invalid or missing. Please provide a valid MAC address in the settings!')
            Logger.logWarning('Invalid MAC address!')
        }
    }
}