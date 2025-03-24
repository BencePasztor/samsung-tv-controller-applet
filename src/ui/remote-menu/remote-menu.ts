const { AppletPopupMenu } = imports.ui.applet
const St = imports.gi.St
const Clutter = imports.gi.Clutter
import { Controller } from "controller"
import { BUTTON_LAYOUT } from "./remote-layout"

type Applet = imports.ui.applet.Applet
type Side = imports.gi.St.Side

/** A popup menu that shows a tv remote */
export class RemoteMenu extends AppletPopupMenu {
    private controller: Controller

    constructor(launcher: Applet, side: Side, controller: Controller) {
        super(launcher, side)
        this.controller = controller
        this.setupUI()
    }

    /** Sets up the UI of the remote */
    private setupUI() {
        // Container for rows
        const container = new St.Widget({
            layout_manager: new Clutter.BoxLayout({
                orientation: Clutter.Orientation.VERTICAL,
                spacing: 4
            }),
            style_class: 'remote-menu'
        })

        for (let buttons of BUTTON_LAYOUT) {
            // Row for buttons
            const row = new Clutter.Actor({
                layout_manager: new Clutter.BoxLayout({
                    orientation: Clutter.Orientation.HORIZONTAL,
                    homogeneous: true,
                    spacing: 4
                }),
                x_expand: true,
            })

            // Add the element to the current row
            for (let button of buttons) {
                // If the button is null, add spacing instead
                if (button === null) {
                    row.add_child(new Clutter.Actor())
                    continue
                }

                // Else, add a button
                button.connect("clicked", () => {
                    this.controller.sendKey(button.key)
                })
                row.add_child(button)
            }

            // Add row to container
            container.add_child(row)
        }

        // After the rows are ready we add the container to the menu
        this.addActor(container)
    }
}