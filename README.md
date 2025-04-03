# Samsung TV Controller Applet
## Description
This is a Linux Mint/Cinnamon applet that lets you control certain Samsung TVs using a Websocket API and Wakeonlan.

![Screenshot from 2025-03-31 20-30-23](https://github.com/user-attachments/assets/30d82d11-3957-46ba-8876-d1b22ae0d9b8)

https://github.com/user-attachments/assets/207e2e11-75fd-4c5f-9504-8da2899c9976


## Installation
1. Download the files
2. Copy the `samsung-tv-controller@BencePasztor` from the files directory to `~/.local/share/cinnamon/applets/`
3. Add the applet by right clicking your panel > selecting Applets > select the Remote Controll Applet > and click the add(+) button
4. After it appears on your panel, right click the screen icon > select Configure and enter the device's local ip and its MAC address(needed for turning on the device using magic packets)
## Inspired by These Projects
[samsung-tv-ws-api](https://github.com/xchwarze/samsung-tv-ws-api "samsung-tv-ws-api") and [samsung-tv-api](http://https://github.com/marysieek/samsung-tv-api "samsung-tv-api") (these helped me understand how the api works)
[cinnamon-spice-applets](https://github.com/linuxmint/cinnamon-spices-appletshttp:// "cinnamon-spice-applets") (I learned a lot from the code examples, especially from the weather applet)
