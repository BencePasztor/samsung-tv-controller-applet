#!/bin/bash
set -e

echo "Running build..."
npm run build || { echo "Build failed. Exiting."; exit 1; }
echo "Build completed successfully."

echo "Copying build to local applet folder..."
mkdir -p ~/.local/share/cinnamon/applets/samsung-tv-controller@BencePasztor/
cp -arf ./files/samsung-tv-controller@BencePasztor/* ~/.local/share/cinnamon/applets/samsung-tv-controller@BencePasztor/
echo "Copy completed successfully."

export DISPLAY=:0; cinnamon --replace > /dev/null 2>&1 &