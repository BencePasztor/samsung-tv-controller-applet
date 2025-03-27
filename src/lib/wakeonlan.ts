const { Socket, SocketFamily, SocketType, SocketProtocol, InetSocketAddress } = imports.gi.Gio

/** A class that can send magic packets to wake up devices */
export class WakeOnLan {
    /** Sends a magic packet to specified mac address */
    static sendMagicPacket(macAddress: string) {
        const socket = Socket.new(SocketFamily.IPV4, SocketType.DATAGRAM, SocketProtocol.UDP,)
        socket.set_broadcast(true)
        const address = InetSocketAddress.new_from_string('255.255.255.255', 9)
        const packet = this.createPacket(macAddress)
        socket.send_to(address, packet, null)
    }

    /** Creates a magic packet from the mac address */
    private static createPacket(macAddress: string) {
        // Remove - and :
        macAddress = macAddress.replace(/[:-]/g, '')

        // We need 6 bytes for "0xFF" and 6 bytes for the mac address repeated 16 times: (6 + 6 * 16) = 102
        const magicPacket = new Uint8Array(102)

        // The first 6 bytes need to be 0xFF
        for (let i = 0; i < 6; i++) {
            magicPacket[i] = 0xFF
        }

        // Convert MAC address
        const macArray = [];
        for (let i = 0; i < macAddress.length; i += 2) {
            // parseInt("A", 16) == 10, hexadecimal to decimal
            macArray.push(parseInt(macAddress.slice(i, i + 2), 16))
        }

        // Append the MAC address 16 times
        for (let i = 6; i < magicPacket.length; i += 6) {
            magicPacket.set(macArray, i)
        }

        return magicPacket
    }
}