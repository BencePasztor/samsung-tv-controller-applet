declare namespace imports.gi.GLib {
    interface Bytes {
        toArray: () => ArrayBuffer | ArrayLike<number> | Uint8Array
    }

    function base64_encode(data: number[] | null | string): string
}