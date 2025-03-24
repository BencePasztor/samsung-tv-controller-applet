const { Session, WebsocketConnection, Message, WebsocketDataType, WebsocketCloseCode } = imports.gi.Soup
const { UriFlags, Uri } = imports.gi.GLib
import { TextDecoder } from "@zxing/text-encoding"

type WebsocketConnection = imports.gi.Soup.WebsocketConnection
type Session = imports.gi.Soup.Session
type Message = imports.gi.Soup.Message

/** Options for the WebSocket client */
export interface WebSocketOptions {
    /** Whether or not the websocket should check the TLS certificate, defaults to true */
    checkCertificate?: boolean,
    /** Event handler for connect */
    onConnect?: () => void,
    /** Event handler for close */
    onClose?: () => void,
    /** Event handler for error */
    onError?: (error: string) => void
    /** Event handler for message */
    onMessage?: (message: string) => void
}

/** The possible states of the WebSocket connection */
export enum WebSocketReadyState {
    CONNECTING = 0,
    OPEN = 1,
    CLOSING = 2,
    CLOSED = 3
}

/** WebSocket client */
export class WebSocket {
    private session: Session
    private connection: WebsocketConnection | null = null
    public readyState: WebSocketReadyState
    private url: string
    private checkCertificate: boolean
    public onConnect: WebSocketOptions["onConnect"]
    public onClose: WebSocketOptions["onClose"]
    public onError: WebSocketOptions["onError"]
    public onMessage: WebSocketOptions["onMessage"]

    /**
    * Creates a new WebSocket client.
    * @param {string} url - the url of the websocket server
    * @param {WebSocketOptions} options - options for the websocketclient
    */
    constructor(url: string, options?: WebSocketOptions) {
        this.session = new Session({timeout: 30})
        this.readyState = WebSocketReadyState.CONNECTING
        this.url = url
        this.checkCertificate = options?.checkCertificate ?? true
        this.onConnect = options?.onConnect
        this.onClose = options?.onClose
        this.onError = options?.onError
        this.onMessage = options?.onMessage
        this.connect()
    }

    /** Sets up the websocket connection and registers the even handlers */
    private connect() {
        const message = new Message({
            method: 'GET',
            uri: Uri.parse(this.url, UriFlags.NONE),
        })

        if (this.checkCertificate === false) {
            message.connect("accept-certificate", function () {
                return true
            })
        }

        // Establishing connection
        this.session.websocket_connect_async(message, null, [], 1, null, (_, result) => {
            try {
                global.log('Opening connection...')
                this.connection = this.session.websocket_connect_finish(result)
                if (this.connection) {
                    this.readyState = WebSocketReadyState.OPEN
                    global.log('Connection opened!')

                    // onConnect
                    if (this.onConnect) {
                        this.onConnect()
                    }
                }
            } catch (error) {
                global.logError(error)

                if (this.onError && error instanceof Error) {
                    this.onError(error.message)
                }
                return
            }

            // Connect event handlers
            this.connectEventHandlers(this.connection)
        })
    }

    /** Connects event handlers with the exception of onConnect. Is called in the connect function. */
    private connectEventHandlers(connection: WebsocketConnection) {
        // * closing
        connection.connect('closing', () => {
            this.readyState = WebSocketReadyState.CLOSING
            global.log('Closing connection...')
        })

        // onClose
        connection.connect('closed', () => {
            this.readyState = WebSocketReadyState.CLOSED
            global.log('Connection closed.')

            if (this.onClose) {
                this.onClose()
            }
        })

        // onError
        connection.connect('error', (_, err) => {
            global.logError(err)

            if (this.onError) {
                this.onError(err.toString())
            }
        })

        // onMessage
        connection.connect('message', (_, type, data) => {
            if (type !== WebsocketDataType.TEXT) {
                return
            }

            const decoder = new TextDecoder()
            const str = decoder.decode(data.toArray())

            if (this.onMessage) {
                this.onMessage(str)
            }
        })
    }

    /** 
     * Sends data to the websocket
     * @param {string} data - the data to send to the websocket
     * @throws {Error} - if the connection is not set
     */
    public send(data: string) {
        if (this.connection && this.readyState === WebSocketReadyState.OPEN) {
            this.connection.send_text(data)
        } else {
            throw new Error('WebSocket is not connected')
        }
    }

    /** Closes the websocket connection */
    public close() {
        if (this.connection) {
            this.connection.close(WebsocketCloseCode.NORMAL)
            this.connection = null
        }
    }
}