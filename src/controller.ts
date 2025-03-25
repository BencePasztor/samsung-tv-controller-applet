import { Settings } from "settings"
import { WebSocket, WebSocketReadyState } from "lib/websocket"
import { ControllerKey } from "types"

/** A class that handles connection to the device and sending keys */
export class Controller {
    private settings: Settings
    private websocket: WebSocket | null = null

    constructor(settings: Settings) {
        this.settings = settings
    }

    /** Returns the websocket url */
    private buildUrl(): string {
        const { host, port, name, token } = this.settings.state

        let url = `wss://${host}:${port}/api/v2/channels/samsung.remote.control?name=${btoa(name ?? "")}`

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
            this.websocket.close()
        }

        const url = this.buildUrl()
        this.websocket = new WebSocket(url, { onConnect: callback, checkCertificate: false })
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

        /** Check the websocket state before sending and reconnect if needed. 
         * If the socket needs to reconnect we use the connect callback to send the key
         * so that we don't send anything before the connection is ready. */
        if (this.settings.changed || this.websocket === null || this.websocket.readyState !== WebSocketReadyState.OPEN) {
            this.connect(() => {
                this.settings.changed = false
                this.websocket?.send(data)
            })
        } else if (this.websocket !== null && this.websocket.readyState === WebSocketReadyState.OPEN) {
            this.websocket.send(data)
        }
    }
}