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
    public handleOnSettingsChanged?: (arg?: any) => void

    constructor(uuid: Metadata["uuid"], instanceId: number) {
        this.settings = new AppletSettings(this.state, uuid, instanceId)
        this.bindSettings()
    }

    /** Binds the settings properties */
    private bindSettings() {
        this.settings.bindProperty(BindingDirection.IN, 'host', 'host', (arg) => this.onSettingsChanged(arg), "");
        this.settings.bindProperty(BindingDirection.IN, 'port', 'port', (arg) => this.onSettingsChanged(arg), "8002");
        this.settings.bindProperty(BindingDirection.IN, 'name', 'name', (arg) => this.onSettingsChanged(arg), "SamsungTvRemote");
        this.settings.bindProperty(BindingDirection.BIDIRECTIONAL, 'token', 'token', (arg) => this.onSettingsChanged(arg), "");
    }

    /** Callback function that's called when the settings change */
    private onSettingsChanged(arg: any) {
        if (typeof this.handleOnSettingsChanged === "function") {
            this.handleOnSettingsChanged(arg)
        }
    }
}