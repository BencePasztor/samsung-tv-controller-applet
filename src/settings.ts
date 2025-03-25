const { AppletSettings, BindingDirection } = imports.ui.settings
import type { Metadata } from "types"

type AppletSettings = imports.ui.settings.AppletSettings
type State = Partial<{
    readonly host: string,
    readonly port: string,
    readonly name: string,
    token: string
    readonly mac: string,
}>

/** Handles the settings of the applet */
export class Settings {
    /** The settings object */
    private settings: AppletSettings
    /** The state of settings */
    public state: State = {}
    /** A boolean that's set to true whenever the settings change (can be set from outside the class, to acknowledge changes) */
    public changed: boolean = false
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
        this.settings.bindProperty(BindingDirection.IN, 'mac', 'mac', undefined, "");
    }

    /** Callback function that's called when the settings change */
    private onSettingsChanged(arg: any) {
        this.changed = true
        if (typeof this.handleOnSettingsChanged === "function") {
            this.handleOnSettingsChanged(arg)
        }
    }
}