const { IconApplet } = imports.ui.applet
type Metadata = imports.ui.applet.AppletMetadata

export class MainApplet extends IconApplet {
  private metadata: Metadata
  private uuid: string
  private orientation: imports.gi.St.Side
  private panelHeight: number
  private instanceId: number

  constructor(metadata: Metadata, orientation: imports.gi.St.Side, panelHeight: number, instanceId: number) {
    super(orientation, panelHeight, instanceId)

    this.metadata = metadata
    this.uuid = metadata.uuid
    this.orientation = orientation
    this.panelHeight = panelHeight
    this.instanceId = instanceId

    this.set_applet_icon_name("cs-screen");
    this.set_applet_tooltip('Click here to change the tooltip to "Hello world!"');
  }

  public override on_applet_clicked(_: imports.gi.Clutter.Event): boolean {
    this.set_applet_tooltip("Hello world!");

    return false
  }

}

export function main(
  metadata: Metadata,
  orientation: imports.gi.St.Side,
  panelHeight: number,
  instanceId: number,
): MainApplet {
  return new MainApplet(metadata, orientation, panelHeight, instanceId)
}