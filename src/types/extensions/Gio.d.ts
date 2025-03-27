declare namespace imports.gi.Gio {
    interface Socket {
        send_to(address: SocketAddress | null, buffer: number[] | Uint8Array<ArrayBuffer>, cancellable?: Cancellable | null): number
    }
}