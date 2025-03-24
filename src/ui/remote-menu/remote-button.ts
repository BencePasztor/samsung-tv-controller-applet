import { ControllerKey as ControllerKey } from "types"
const St = imports.gi.St
const { GObject } = imports.gi

type ButtonInitOptions = imports.gi.St.ButtonInitOptions

interface RemoteButtonParams extends Partial<ButtonInitOptions> {
    key: ControllerKey
    style_class?: string
}

/** A class that makes creating controller buttons easier */
export const RemoteButton = GObject.registerClass(class RemoteButton extends St.Button {
    public key: ControllerKey

    constructor(params: RemoteButtonParams) {
        const {key, style_class, ...options} = params
        super(options)
        this.key = key
        this.set_x_expand(true)
        this.set_style_class_name(`remote-menu__button ${style_class ?? ''}`)
    }
})