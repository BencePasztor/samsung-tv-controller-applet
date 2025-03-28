import CONFIG from "../config"

const { UUID } = CONFIG

/** Logger class that includes the UUID at the start of the messages */
export class Logger {
    private contructor() { }

    public static log(msg: string) {
        global.log(`[${UUID}]: ${msg}`)
    }

    public static logError(msg: string) {
        global.logError(`[${UUID}]: ${msg}`)
    }
    public static logWarning(msg: string) {
        global.logWarning(`[${UUID}]: ${msg}`)
    }
}