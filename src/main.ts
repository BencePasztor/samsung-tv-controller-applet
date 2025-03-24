const { IconApplet } = imports.ui.applet
const { PopupMenuManager } = imports.ui.popupMenu
import { Settings } from "settings"
import { RemoteMenu } from "ui"
import { Controller } from "controller"

type PopupMenuManager = imports.ui.popupMenu.PopupMenuManager
import type { Metadata } from "types"

export class MainApplet extends IconApplet {
  private metadata: Metadata
  private uuid: string
  private orientation: imports.gi.St.Side
  private panelHeight: number
  private instanceId: number
  private settings: Settings
  private menuManager: PopupMenuManager
  private remoteMenu: RemoteMenu
  private controller: Controller

  constructor(metadata: Metadata, orientation: imports.gi.St.Side, panelHeight: number, instanceId: number) {
    super(orientation, panelHeight, instanceId)

    this.metadata = metadata
    this.uuid = metadata.uuid
    this.orientation = orientation
    this.panelHeight = panelHeight
    this.instanceId = instanceId
    
    this.settings = new Settings(metadata.uuid, instanceId)
    this.menuManager = new PopupMenuManager(this)
    this.controller = new Controller(this.settings)
    this.remoteMenu = new RemoteMenu(this, this.orientation, this.controller)
    this.menuManager.addMenu(this.remoteMenu);

    this.set_applet_icon_name("cs-screen");
  }

  public override on_applet_clicked(_: imports.gi.Clutter.Event): boolean {
    this.remoteMenu.toggle();
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