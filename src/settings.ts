const { AppletSettings, BindingDirection } = imports.ui.settings
import type { Metadata } from "types"

type AppletSettings = imports.ui.settings.AppletSettings
type State = Partial<{
    readonly host: string,
    readonly port: string,
    readonly name: string,
    token: string
}>

/** Handles the settings of the applet */
export class Settings {
    /** The settings object */
    private settings: AppletSettings
    /** The state of settings */
    public state: State = {}
    /** A function that's called when the settings change */
    public handle_on_settings_changed?: (arg?: any) => void

    constructor(uuid: Metadata["uuid"], instanceId: number) {
        this.settings = new AppletSettings(this.state, uuid, instanceId)
        this.bind_settings()
    }

    /** Binds the settings properties */
    private bind_settings() {
        this.settings.bindProperty(BindingDirection.IN, 'host', 'host', (arg) => this.on_settings_changed(arg), "");
        this.settings.bindProperty(BindingDirection.IN, 'port', 'port', (arg) => this.on_settings_changed(arg), "8002");
        this.settings.bindProperty(BindingDirection.IN, 'name', 'name', (arg) => this.on_settings_changed(arg), "SamsungTvRemote");
        this.settings.bindProperty(BindingDirection.BIDIRECTIONAL, 'token', 'token', (arg) => this.on_settings_changed(arg), "");
    }

    /** Callback function that's called when the settings change */
    private on_settings_changed(arg: any) {
        if (typeof this.handle_on_settings_changed === "function") {
            this.handle_on_settings_changed(arg)
        }
    }
}