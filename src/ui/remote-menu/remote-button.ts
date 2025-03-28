const St = imports.gi.St
const { GObject } = imports.gi
import { ControllerKey } from "types"
import { Controller } from "controller"

type ButtonInitOptions = imports.gi.St.ButtonInitOptions

interface RemoteButtonParams extends Partial<ButtonInitOptions> {
    controller?: Controller
}

interface RemoteKeyButtonParams extends RemoteButtonParams {
    key: ControllerKey
}

/** Note: I could not make an abstract class and use extension because of the GObject.registerClass function */

/** A remote button that sends a key to the device */
export const RemoteKeyButton = GObject.registerClass(class RemoteKeyButton extends St.Button {
    private key: ControllerKey
    private controller?: Controller

    constructor(params: RemoteKeyButtonParams) {
        const { style_class, controller, key, ...options } = params
        super(options)
        if (controller) {
            this.controller = controller
        }
        this.key = key
        this.connect("clicked", () => {
            if (this.controller) {
                this.controller.sendKey(this.key)
            }
        })

        this.set_x_expand(true)
        this.set_style_class_name(`remote-menu__button ${style_class ?? ''}`)
    }

    setController(controller: Controller) {
        this.controller = controller
    }
})

/** A remote button that wakes the device up */
export const RemoteWakeButton = GObject.registerClass(class RemoteWakeButton extends St.Button {
    private controller?: Controller

    constructor(params: RemoteButtonParams) {
        const { style_class, controller, ...options } = params
        super(options)
        if (controller) {
            this.controller = controller
        }
        this.connect("clicked", () => {
            if (this.controller) {
                this.controller.wakeUpDevice()
            }
        })

        this.set_x_expand(true)
        this.set_style_class_name(`remote-menu__button ${style_class ?? ''}`)
    }

    setController(controller: Controller) {
        this.controller = controller
    }
})