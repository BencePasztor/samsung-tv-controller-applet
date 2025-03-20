declare namespace imports.gi.GLib {
    interface Bytes {
        toArray: () => ArrayBuffer | ArrayLike<number> | Uint8Array
    }
}