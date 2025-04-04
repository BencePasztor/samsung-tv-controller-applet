var applet;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 16:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * @param {boolean} fatal If true, decoding errors raise an exception.
 * @param {number=} opt_code_point Override the standard fallback code point.
 * @return {number} The code point to insert on a decoding error.
 */
function decoderError(fatal, opt_code_point) {
    if (opt_code_point === void 0) { opt_code_point = undefined; }
    if (fatal)
        throw TypeError("Decoder error");
    return opt_code_point || 0xfffd;
}
exports.decoderError = decoderError;
/**
 * @param {number} code_point The code point that could not be encoded.
 * @return {number} Always throws, no value is actually returned.
 */
function encoderError(code_point) {
    throw TypeError("The code point " + code_point + " could not be encoded.");
}
exports.encoderError = encoderError;
// 5.2 Names and labels
// TODO: Define @typedef for Encoding: {name:string,labels:Array.<string>}
// https://github.com/google/closure-compiler/issues/247
/**
 * @param {string} label The encoding label.
 * @return {?{name:string,labels:Array.<string>}}
 */
function getEncoding(label) {
    // 1. Remove any leading and trailing ASCII whitespace from label.
    var keyLabel = String(label).trim().toLowerCase();
    // 2. If label is an ASCII case-insensitive match for any of the
    // labels listed in the table below, return the corresponding
    // encoding, and failure otherwise.
    if (keyLabel in label_to_encoding) {
        return label_to_encoding[keyLabel];
    }
    return null;
}
exports.getEncoding = getEncoding;
/**
 * Encodings table: https://encoding.spec.whatwg.org/encodings.json
 * @const
 * @type {!Array.<{
 *          heading: string,
 *          encodings: Array.<{name:string,labels:Array.<string>}>
 *        }>}
 */
var encodings = [
    {
        encodings: [
            {
                labels: ["unicode-1-1-utf-8", "utf-8", "utf8"],
                name: "UTF-8",
            },
        ],
        heading: "The Encoding",
    },
    {
        encodings: [
            {
                labels: ["866", "cp866", "csibm866", "ibm866"],
                name: "IBM866",
            },
            {
                labels: [
                    "csisolatin2",
                    "iso-8859-2",
                    "iso-ir-101",
                    "iso8859-2",
                    "iso88592",
                    "iso_8859-2",
                    "iso_8859-2:1987",
                    "l2",
                    "latin2",
                ],
                name: "ISO-8859-2",
            },
            {
                labels: [
                    "csisolatin3",
                    "iso-8859-3",
                    "iso-ir-109",
                    "iso8859-3",
                    "iso88593",
                    "iso_8859-3",
                    "iso_8859-3:1988",
                    "l3",
                    "latin3",
                ],
                name: "ISO-8859-3",
            },
            {
                labels: [
                    "csisolatin4",
                    "iso-8859-4",
                    "iso-ir-110",
                    "iso8859-4",
                    "iso88594",
                    "iso_8859-4",
                    "iso_8859-4:1988",
                    "l4",
                    "latin4",
                ],
                name: "ISO-8859-4",
            },
            {
                labels: [
                    "csisolatincyrillic",
                    "cyrillic",
                    "iso-8859-5",
                    "iso-ir-144",
                    "iso8859-5",
                    "iso88595",
                    "iso_8859-5",
                    "iso_8859-5:1988",
                ],
                name: "ISO-8859-5",
            },
            {
                labels: [
                    "arabic",
                    "asmo-708",
                    "csiso88596e",
                    "csiso88596i",
                    "csisolatinarabic",
                    "ecma-114",
                    "iso-8859-6",
                    "iso-8859-6-e",
                    "iso-8859-6-i",
                    "iso-ir-127",
                    "iso8859-6",
                    "iso88596",
                    "iso_8859-6",
                    "iso_8859-6:1987",
                ],
                name: "ISO-8859-6",
            },
            {
                labels: [
                    "csisolatingreek",
                    "ecma-118",
                    "elot_928",
                    "greek",
                    "greek8",
                    "iso-8859-7",
                    "iso-ir-126",
                    "iso8859-7",
                    "iso88597",
                    "iso_8859-7",
                    "iso_8859-7:1987",
                    "sun_eu_greek",
                ],
                name: "ISO-8859-7",
            },
            {
                labels: [
                    "csiso88598e",
                    "csisolatinhebrew",
                    "hebrew",
                    "iso-8859-8",
                    "iso-8859-8-e",
                    "iso-ir-138",
                    "iso8859-8",
                    "iso88598",
                    "iso_8859-8",
                    "iso_8859-8:1988",
                    "visual",
                ],
                name: "ISO-8859-8",
            },
            {
                labels: ["csiso88598i", "iso-8859-8-i", "logical"],
                name: "ISO-8859-8-I",
            },
            {
                labels: [
                    "csisolatin6",
                    "iso-8859-10",
                    "iso-ir-157",
                    "iso8859-10",
                    "iso885910",
                    "l6",
                    "latin6",
                ],
                name: "ISO-8859-10",
            },
            {
                labels: ["iso-8859-13", "iso8859-13", "iso885913"],
                name: "ISO-8859-13",
            },
            {
                labels: ["iso-8859-14", "iso8859-14", "iso885914"],
                name: "ISO-8859-14",
            },
            {
                labels: [
                    "csisolatin9",
                    "iso-8859-15",
                    "iso8859-15",
                    "iso885915",
                    "iso_8859-15",
                    "l9",
                ],
                name: "ISO-8859-15",
            },
            {
                labels: ["iso-8859-16"],
                name: "ISO-8859-16",
            },
            {
                labels: ["cskoi8r", "koi", "koi8", "koi8-r", "koi8_r"],
                name: "KOI8-R",
            },
            {
                labels: ["koi8-ru", "koi8-u"],
                name: "KOI8-U",
            },
            {
                labels: ["csmacintosh", "mac", "macintosh", "x-mac-roman"],
                name: "macintosh",
            },
            {
                labels: [
                    "dos-874",
                    "iso-8859-11",
                    "iso8859-11",
                    "iso885911",
                    "tis-620",
                    "windows-874",
                ],
                name: "windows-874",
            },
            {
                labels: ["cp1250", "windows-1250", "x-cp1250"],
                name: "windows-1250",
            },
            {
                labels: ["cp1251", "windows-1251", "x-cp1251"],
                name: "windows-1251",
            },
            {
                labels: [
                    "ansi_x3.4-1968",
                    "cp1252",
                    "cp819",
                    "ibm819",
                    "iso-ir-100",
                    "windows-1252",
                    "x-cp1252",
                ],
                name: "windows-1252",
            },
            {
                labels: [
                    "ascii",
                    "us-ascii",
                    "iso-8859-1",
                    "iso8859-1",
                    "iso88591",
                    "iso_8859-1",
                    "iso_8859-1:1987",
                    "l1",
                    "latin1",
                    "csisolatin1",
                ],
                name: "iso-8859-1",
            },
            {
                labels: ["cp1253", "windows-1253", "x-cp1253"],
                name: "windows-1253",
            },
            {
                labels: [
                    "cp1254",
                    "csisolatin5",
                    "iso-8859-9",
                    "iso-ir-148",
                    "iso8859-9",
                    "iso88599",
                    "iso_8859-9",
                    "iso_8859-9:1989",
                    "l5",
                    "latin5",
                    "windows-1254",
                    "x-cp1254",
                ],
                name: "windows-1254",
            },
            {
                labels: ["cp1255", "windows-1255", "x-cp1255"],
                name: "windows-1255",
            },
            {
                labels: ["cp1256", "windows-1256", "x-cp1256"],
                name: "windows-1256",
            },
            {
                labels: ["cp1257", "windows-1257", "x-cp1257"],
                name: "windows-1257",
            },
            {
                labels: ["cp1258", "windows-1258", "x-cp1258"],
                name: "windows-1258",
            },
            {
                labels: ["x-mac-cyrillic", "x-mac-ukrainian"],
                name: "x-mac-cyrillic",
            },
        ],
        heading: "Legacy single-byte encodings",
    },
    {
        encodings: [
            {
                labels: [
                    "chinese",
                    "csgb2312",
                    "csiso58gb231280",
                    "gb2312",
                    "gb_2312",
                    "gb_2312-80",
                    "gbk",
                    "iso-ir-58",
                    "x-gbk",
                ],
                name: "GBK",
            },
            {
                labels: ["gb18030"],
                name: "gb18030",
            },
        ],
        heading: "Legacy multi-byte Chinese (simplified) encodings",
    },
    {
        encodings: [
            {
                labels: ["big5", "big5-hkscs", "cn-big5", "csbig5", "x-x-big5"],
                name: "Big5",
            },
        ],
        heading: "Legacy multi-byte Chinese (traditional) encodings",
    },
    {
        encodings: [
            {
                labels: ["cseucpkdfmtjapanese", "euc-jp", "x-euc-jp"],
                name: "EUC-JP",
            },
            {
                labels: ["csiso2022jp", "iso-2022-jp"],
                name: "ISO-2022-JP",
            },
            {
                labels: [
                    "csshiftjis",
                    "ms932",
                    "ms_kanji",
                    "shift-jis",
                    "shift_jis",
                    "sjis",
                    "windows-31j",
                    "x-sjis",
                ],
                name: "Shift_JIS",
            },
        ],
        heading: "Legacy multi-byte Japanese encodings",
    },
    {
        encodings: [
            {
                labels: [
                    "cseuckr",
                    "csksc56011987",
                    "euc-kr",
                    "iso-ir-149",
                    "korean",
                    "ks_c_5601-1987",
                    "ks_c_5601-1989",
                    "ksc5601",
                    "ksc_5601",
                    "windows-949",
                ],
                name: "EUC-KR",
            },
        ],
        heading: "Legacy multi-byte Korean encodings",
    },
    {
        encodings: [
            {
                labels: [
                    "csiso2022kr",
                    "hz-gb-2312",
                    "iso-2022-cn",
                    "iso-2022-cn-ext",
                    "iso-2022-kr",
                ],
                name: "replacement",
            },
            {
                labels: ["utf-16be"],
                name: "UTF-16BE",
            },
            {
                labels: ["utf-16", "utf-16le"],
                name: "UTF-16LE",
            },
            {
                labels: ["x-user-defined"],
                name: "x-user-defined",
            },
        ],
        heading: "Legacy miscellaneous encodings",
    },
];
exports.encodings = encodings;
// Label to encoding registry.
/** @type {Object.<string,{name:string,labels:Array.<string>}>} */
var label_to_encoding = {};
encodings.forEach(function (category) {
    category.encodings.forEach(function (encoding) {
        encoding.labels.forEach(function (label) {
            label_to_encoding[label] = encoding;
        });
    });
});
//# sourceMappingURL=encodings.js.map

/***/ }),

/***/ 19:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var encodings_1 = __webpack_require__(16);
var finished_1 = __webpack_require__(870);
var indexes_1 = __webpack_require__(638);
var terminology_1 = __webpack_require__(205);
var utilities_1 = __webpack_require__(257);
/**
 * @constructor
 * @implements {Decoder}
 * @param {{fatal: boolean}} options
 */
var EUCJPDecoder = /** @class */ (function () {
    function EUCJPDecoder(options) {
        this.fatal = options.fatal;
        // euc-jp's decoder has an associated euc-jp jis0212 flag
        // (initially unset) and euc-jp lead (initially 0x00).
        /** @type {boolean} */ this.eucjp_jis0212_flag = false,
            /** @type {number} */ this.eucjp_lead = 0x00;
    }
    /**
     * @param {Stream} stream The stream of bytes being decoded.
     * @param {number} bite The next byte read from the stream.
     * @return {?(number|!Array.<number>)} The next code point(s)
     *     decoded, or null if not enough data exists in the input
     *     stream to decode a complete code point.
     */
    EUCJPDecoder.prototype.handler = function (stream, bite) {
        // 1. If byte is end-of-stream and euc-jp lead is not 0x00, set
        // euc-jp lead to 0x00, and return error.
        if (bite === terminology_1.end_of_stream && this.eucjp_lead !== 0x00) {
            this.eucjp_lead = 0x00;
            return encodings_1.decoderError(this.fatal);
        }
        // 2. If byte is end-of-stream and euc-jp lead is 0x00, return
        // finished.
        if (bite === terminology_1.end_of_stream && this.eucjp_lead === 0x00)
            return finished_1.finished;
        // 3. If euc-jp lead is 0x8E and byte is in the range 0xA1 to
        // 0xDF, inclusive, set euc-jp lead to 0x00 and return a code
        // point whose value is 0xFF61 − 0xA1 + byte.
        if (this.eucjp_lead === 0x8E && utilities_1.inRange(bite, 0xA1, 0xDF)) {
            this.eucjp_lead = 0x00;
            return 0xFF61 - 0xA1 + bite;
        }
        // 4. If euc-jp lead is 0x8F and byte is in the range 0xA1 to
        // 0xFE, inclusive, set the euc-jp jis0212 flag, set euc-jp lead
        // to byte, and return continue.
        if (this.eucjp_lead === 0x8F && utilities_1.inRange(bite, 0xA1, 0xFE)) {
            this.eucjp_jis0212_flag = true;
            this.eucjp_lead = bite;
            return null;
        }
        // 5. If euc-jp lead is not 0x00, let lead be euc-jp lead, set
        // euc-jp lead to 0x00, and run these substeps:
        if (this.eucjp_lead !== 0x00) {
            var lead = this.eucjp_lead;
            this.eucjp_lead = 0x00;
            // 1. Let code point be null.
            var code_point = null;
            // 2. If lead and byte are both in the range 0xA1 to 0xFE,
            // inclusive, set code point to the index code point for (lead
            // − 0xA1) × 94 + byte − 0xA1 in index jis0208 if the euc-jp
            // jis0212 flag is unset and in index jis0212 otherwise.
            if (utilities_1.inRange(lead, 0xA1, 0xFE) && utilities_1.inRange(bite, 0xA1, 0xFE)) {
                code_point = indexes_1.indexCodePointFor((lead - 0xA1) * 94 + (bite - 0xA1), indexes_1.index(!this.eucjp_jis0212_flag ? 'jis0208' : 'jis0212'));
            }
            // 3. Unset the euc-jp jis0212 flag.
            this.eucjp_jis0212_flag = false;
            // 4. If byte is not in the range 0xA1 to 0xFE, inclusive,
            // prepend byte to stream.
            if (!utilities_1.inRange(bite, 0xA1, 0xFE))
                stream.prepend(bite);
            // 5. If code point is null, return error.
            if (code_point === null)
                return encodings_1.decoderError(this.fatal);
            // 6. Return a code point whose value is code point.
            return code_point;
        }
        // 6. If byte is an ASCII byte, return a code point whose value
        // is byte.
        if (terminology_1.isASCIIByte(bite))
            return bite;
        // 7. If byte is 0x8E, 0x8F, or in the range 0xA1 to 0xFE,
        // inclusive, set euc-jp lead to byte and return continue.
        if (bite === 0x8E || bite === 0x8F || utilities_1.inRange(bite, 0xA1, 0xFE)) {
            this.eucjp_lead = bite;
            return null;
        }
        // 8. Return error.
        return encodings_1.decoderError(this.fatal);
    };
    return EUCJPDecoder;
}());
exports.EUCJPDecoder = EUCJPDecoder;
//# sourceMappingURL=EUCJPDecoder.js.map

/***/ }),

/***/ 51:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function getArrayVal(idxVal) {
    return Array.isArray(idxVal) ? idxVal : [idxVal];
}
exports.getArrayVal = getArrayVal;
//# sourceMappingURL=getArrayVal.js.map

/***/ }),

/***/ 61:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var encodings_1 = __webpack_require__(16);
var finished_1 = __webpack_require__(870);
var terminology_1 = __webpack_require__(205);
/**
 * @constructor
 * @implements {Decoder}
 * @param {!Array.<number>} index The encoding index.
 * @param {{fatal: boolean}} options
 */
var SingleByteDecoder = /** @class */ (function () {
    function SingleByteDecoder(index, options) {
        this.index = index;
        this.fatal = options.fatal;
    }
    /**
     * @param {Stream} stream The stream of bytes being decoded.
     * @param {number} bite The next byte read from the stream.
     * @return {?(number|!Array.<number>)} The next code point(s)
     *     decoded, or null if not enough data exists in the input
     *     stream to decode a complete code point.
     */
    SingleByteDecoder.prototype.handler = function (stream, bite) {
        // 1. If byte is end-of-stream, return finished.
        if (bite === terminology_1.end_of_stream)
            return finished_1.finished;
        // 2. If byte is an ASCII byte, return a code point whose value
        // is byte.
        if (terminology_1.isASCIIByte(bite))
            return bite;
        // 3. Let code point be the index code point for byte − 0x80 in
        // index single-byte.
        var code_point = this.index[bite - 0x80];
        // 4. If code point is null, return error.
        if (!code_point)
            return encodings_1.decoderError(this.fatal);
        // 5. Return a code point whose value is code point.
        return code_point;
    };
    return SingleByteDecoder;
}());
exports.SingleByteDecoder = SingleByteDecoder;
//# sourceMappingURL=SingleByteDecoder.js.map

/***/ }),

/***/ 67:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", ({ value: true }));
__export(__webpack_require__(632));
__export(__webpack_require__(888));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 81:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
var TextDecoder_1 = __webpack_require__(723);
exports.Ay = TextDecoder_1.TextDecoder;
var TextEncoder_1 = __webpack_require__(419);
__webpack_unused_export__ = TextEncoder_1.TextEncoder;
// Polyfills browser
if (typeof window !== 'undefined') {
    var checkUndefined = function (key) { return !(key in window)
        || typeof window[key] === 'undefined'
        || window[key] === null; };
    if (checkUndefined('TextDecoder'))
        window['TextDecoder'] = TextDecoder_1.TextDecoder;
    if (checkUndefined('TextEncoder'))
        window['TextEncoder'] = TextEncoder_1.TextEncoder;
}
//# sourceMappingURL=encoding.js.map

/***/ }),

/***/ 103:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var encodings_1 = __webpack_require__(16);
var finished_1 = __webpack_require__(870);
var terminology_1 = __webpack_require__(205);
var utilities_1 = __webpack_require__(257);
var converCodeUnitToBytes_1 = __webpack_require__(499);
/**
 * @constructor
 * @implements {Decoder}
 * @param {boolean} utf16_be True if big-endian, false if little-endian.
 * @param {{fatal: boolean}} options
 */
var UTF16Decoder = /** @class */ (function () {
    function UTF16Decoder(utf16_be, options) {
        this.utf16_be = utf16_be;
        this.fatal = options.fatal;
        /** @type {?number} */ this.utf16_lead_byte = null;
        /** @type {?number} */ this.utf16_lead_surrogate = null;
    }
    /**
     * @param {Stream} stream The stream of bytes being decoded.
     * @param {number} bite The next byte read from the stream.
     * @return {?(number|!Array.<number>)} The next code point(s)
     *     decoded, or null if not enough data exists in the input
     *     stream to decode a complete code point.
     */
    UTF16Decoder.prototype.handler = function (stream, bite) {
        // 1. If byte is end-of-stream and either utf-16 lead byte or
        // utf-16 lead surrogate is not null, set utf-16 lead byte and
        // utf-16 lead surrogate to null, and return error.
        if (bite === terminology_1.end_of_stream && (this.utf16_lead_byte !== null ||
            this.utf16_lead_surrogate !== null)) {
            return encodings_1.decoderError(this.fatal);
        }
        // 2. If byte is end-of-stream and utf-16 lead byte and utf-16
        // lead surrogate are null, return finished.
        if (bite === terminology_1.end_of_stream && this.utf16_lead_byte === null &&
            this.utf16_lead_surrogate === null) {
            return finished_1.finished;
        }
        // 3. If utf-16 lead byte is null, set utf-16 lead byte to byte
        // and return continue.
        if (this.utf16_lead_byte === null) {
            this.utf16_lead_byte = bite;
            return null;
        }
        // 4. Let code unit be the result of:
        var code_unit;
        if (this.utf16_be) {
            // utf-16be decoder flag is set
            //   (utf-16 lead byte << 8) + byte.
            code_unit = (this.utf16_lead_byte << 8) + bite;
        }
        else {
            // utf-16be decoder flag is unset
            //   (byte << 8) + utf-16 lead byte.
            code_unit = (bite << 8) + this.utf16_lead_byte;
        }
        // Then set utf-16 lead byte to null.
        this.utf16_lead_byte = null;
        // 5. If utf-16 lead surrogate is not null, let lead surrogate
        // be utf-16 lead surrogate, set utf-16 lead surrogate to null,
        // and then run these substeps:
        if (this.utf16_lead_surrogate !== null) {
            var lead_surrogate = this.utf16_lead_surrogate;
            this.utf16_lead_surrogate = null;
            // 1. If code unit is in the range U+DC00 to U+DFFF,
            // inclusive, return a code point whose value is 0x10000 +
            // ((lead surrogate − 0xD800) << 10) + (code unit − 0xDC00).
            if (utilities_1.inRange(code_unit, 0xDC00, 0xDFFF)) {
                return 0x10000 + (lead_surrogate - 0xD800) * 0x400 +
                    (code_unit - 0xDC00);
            }
            // 2. Prepend the sequence resulting of converting code unit
            // to bytes using utf-16be decoder flag to stream and return
            // error.
            stream.prepend(converCodeUnitToBytes_1.convertCodeUnitToBytes(code_unit, this.utf16_be));
            return encodings_1.decoderError(this.fatal);
        }
        // 6. If code unit is in the range U+D800 to U+DBFF, inclusive,
        // set utf-16 lead surrogate to code unit and return continue.
        if (utilities_1.inRange(code_unit, 0xD800, 0xDBFF)) {
            this.utf16_lead_surrogate = code_unit;
            return null;
        }
        // 7. If code unit is in the range U+DC00 to U+DFFF, inclusive,
        // return error.
        if (utilities_1.inRange(code_unit, 0xDC00, 0xDFFF))
            return encodings_1.decoderError(this.fatal);
        // 8. Return code point code unit.
        return code_unit;
    };
    return UTF16Decoder;
}());
exports.UTF16Decoder = UTF16Decoder;
//# sourceMappingURL=UTF16Decoder.js.map

/***/ }),

/***/ 104:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var encodings_1 = __webpack_require__(16);
var finished_1 = __webpack_require__(870);
var indexes_1 = __webpack_require__(638);
var terminology_1 = __webpack_require__(205);
/**
 * @constructor
 * @implements {Encoder}
 * @param {{fatal: boolean}} options
 */
var EUCKREncoder = /** @class */ (function () {
    function EUCKREncoder(options) {
        this.fatal = options.fatal;
    }
    /**
     * @param {Stream} stream Input stream.
     * @param {number} code_point Next code point read from the stream.
     * @return {(number|!Array.<number>)} Byte(s) to emit.
     */
    EUCKREncoder.prototype.handler = function (stream, code_point) {
        // 1. If code point is end-of-stream, return finished.
        if (code_point === terminology_1.end_of_stream)
            return finished_1.finished;
        // 2. If code point is an ASCII code point, return a byte whose
        // value is code point.
        if (terminology_1.isASCIICodePoint(code_point))
            return code_point;
        // 3. Let pointer be the index pointer for code point in index
        // euc-kr.
        var pointer = indexes_1.indexPointerFor(code_point, indexes_1.index('euc-kr'));
        // 4. If pointer is null, return error with code point.
        if (pointer === null)
            return encodings_1.encoderError(code_point);
        // 5. Let lead be Math.floor(pointer / 190) + 0x81.
        var lead = Math.floor(pointer / 190) + 0x81;
        // 6. Let trail be pointer % 190 + 0x41.
        var trail = (pointer % 190) + 0x41;
        // 7. Return two bytes whose values are lead and trail.
        return [lead, trail];
    };
    return EUCKREncoder;
}());
exports.EUCKREncoder = EUCKREncoder;
//# sourceMappingURL=EUCKREncoder.js.map

/***/ }),

/***/ 205:
/***/ ((__unused_webpack_module, exports) => {


//
// Implementation of Encoding specification
// https://encoding.spec.whatwg.org/
//
Object.defineProperty(exports, "__esModule", ({ value: true }));
//
// 4. Terminology
//
/**
 * An ASCII byte is a byte in the range 0x00 to 0x7F, inclusive.
 * @param {number} a The number to test.
 * @return {boolean} True if a is in the range 0x00 to 0x7F, inclusive.
 */
function isASCIIByte(a) {
    return 0x00 <= a && a <= 0x7F;
}
exports.isASCIIByte = isASCIIByte;
/**
 * An ASCII code point is a code point in the range U+0000 to
 * U+007F, inclusive.
 */
exports.isASCIICodePoint = isASCIIByte;
/**
 * End-of-stream is a special token that signifies no more tokens
 * are in the stream.
 * @const
 */ exports.end_of_stream = -1;
//# sourceMappingURL=terminology.js.map

/***/ }),

/***/ 232:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var terminology_1 = __webpack_require__(205);
/**
 * A stream represents an ordered sequence of tokens.
 */
var Stream = /** @class */ (function () {
    /**
     *
     * @constructor
     * @param {!(Array.<number>|Uint8Array)} tokens Array of tokens that provide
     * the stream.
     */
    function Stream(tokens) {
        /** @type {!Array.<number>} */
        this.tokens = Array.from(tokens);
        // Reversed as push/pop is more efficient than shift/unshift.
        this.tokens.reverse();
    }
    /**
     * @return {boolean} True if end-of-stream has been hit.
     */
    Stream.prototype.endOfStream = function () {
        return !this.tokens.length;
    };
    /**
     * When a token is read from a stream, the first token in the
     * stream must be returned and subsequently removed, and
     * end-of-stream must be returned otherwise.
     *
     * @return {number} Get the next token from the stream, or
     * end_of_stream.
     */
    Stream.prototype.read = function () {
        if (!this.tokens.length)
            return terminology_1.end_of_stream;
        return this.tokens.pop();
    };
    /**
     * When one or more tokens are prepended to a stream, those tokens
     * must be inserted, in given order, before the first token in the
     * stream.
     *
     * @param {(number|!Array.<number>)} token The token(s) to prepend to the
     * stream.
     */
    Stream.prototype.prepend = function (token) {
        if (Array.isArray(token)) {
            var tokens = (token);
            while (tokens.length)
                this.tokens.push(tokens.pop());
        }
        else {
            this.tokens.push(token);
        }
    };
    /**
     * When one or more tokens are pushed to a stream, those tokens
     * must be inserted, in given order, after the last token in the
     * stream.
     *
     * @param {(number|!Array.<number>)} token The tokens(s) to push to the
     * stream.
     */
    Stream.prototype.push = function (token) {
        if (Array.isArray(token)) {
            var tokens = (token);
            while (tokens.length)
                this.tokens.unshift(tokens.shift());
        }
        else {
            this.tokens.unshift(token);
        }
    };
    return Stream;
}());
exports.Stream = Stream;
//# sourceMappingURL=Stream.js.map

/***/ }),

/***/ 233:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", ({ value: true }));
__export(__webpack_require__(595));
__export(__webpack_require__(104));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 246:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// This is free and unencumbered software released into the public domain.
// See LICENSE.md for more information.
Object.defineProperty(exports, "__esModule", ({ value: true }));
var big5_1 = __webpack_require__(67);
var euc_jp_1 = __webpack_require__(646);
var euc_kr_1 = __webpack_require__(233);
var gb18030_1 = __webpack_require__(637);
var iso_2022_jp_1 = __webpack_require__(301);
var shift_jis_1 = __webpack_require__(817);
var single_byte_1 = __webpack_require__(623);
var utf_16_1 = __webpack_require__(821);
var utf_8_1 = __webpack_require__(962);
var x_user_defined_1 = __webpack_require__(702);
var encodings_1 = __webpack_require__(16);
var indexes_1 = __webpack_require__(638);
var encoding_indexes_provider_1 = __webpack_require__(460);
//
// Utilities
//
// import './encoding/utilities';
//
// Implementation of Encoding specification
// https://encoding.spec.whatwg.org/
//
//
// 4. Terminology
//
// import './encoding/terminology';
//
// 5. Encodings
//
// import "./encoding/encodings";
//
// 6. Indexes
//
// import './encoding/indexes';
var encodingIndexes = encoding_indexes_provider_1.getEncodingIndexes();
// Registry of of encoder/decoder factories, by encoding name.
/** @type {Object.<string, function({fatal:boolean}): Encoder>} */
// const encoders: Encoders = {};
/** @type {Object.<string, function({fatal:boolean}): Decoder>} */
// const decoders: Decoders = {};
//
// 10. Legacy single-byte encodings
//
// 10.1 single-byte decoder
// 10.2 single-byte encoder
exports.encoders = {
    // 9.1 utf-8
    // 9.1.1 utf-8 decoder
    // 9.1.2 utf-8 encoder
    /** @param {{fatal: boolean}} options */
    'UTF-8': function (options) { return new utf_8_1.UTF8Encoder(options); },
    //
    // 11. Legacy multi-byte Chinese (simplified) encodings
    //
    // 11.1 gbk
    // 11.1.1 gbk decoder
    // gbk's decoder is gb18030's decoder.
    // 11.1.2 gbk encoder
    // gbk's encoder is gb18030's encoder with its gbk flag set.
    /** @param {{fatal: boolean}} options */
    'GBK': function (options) { return new gb18030_1.GB18030Encoder(options, true); },
    // 11.2 gb18030
    // 11.2.1 gb18030 decoder
    // 11.2.2 gb18030 encoder
    /** @param {{fatal: boolean}} options */
    'gb18030': function (options) { return new gb18030_1.GB18030Encoder(options); },
    //
    // 12. Legacy multi-byte Chinese (traditional) encodings
    //
    // 12.1 Big5
    // 12.1.1 Big5 decoder
    // 12.1.2 Big5 encoder
    /** @param {{fatal: boolean}} options */
    'Big5': function (options) { return new big5_1.Big5Encoder(options); },
    //
    // 13. Legacy multi-byte Japanese encodings
    //
    // 13.1 euc-jp
    // 13.1.1 euc-jp decoder
    // 13.1.2 euc-jp encoder
    /** @param {{fatal: boolean}} options */
    'EUC-JP': function (options) { return new euc_jp_1.EUCJPEncoder(options); },
    // 13.2 iso-2022-jp
    // 13.2.1 iso-2022-jp decoder
    // 13.2.2 iso-2022-jp encoder
    /** @param {{fatal: boolean}} options */
    'ISO-2022-JP': function (options) { return new iso_2022_jp_1.ISO2022JPEncoder(options); },
    // 13.3 Shift_JIS
    // 13.3.1 Shift_JIS decoder
    // 13.3.2 Shift_JIS encoder
    /** @param {{fatal: boolean}} options */
    'Shift_JIS': function (options) { return new shift_jis_1.ShiftJISEncoder(options); },
    //
    // 14. Legacy multi-byte Korean encodings
    //
    // 14.1 euc-kr
    // 14.1.1 euc-kr decoder
    // 14.1.2 euc-kr encoder
    /** @param {{fatal: boolean}} options */
    'EUC-KR': function (options) { return new euc_kr_1.EUCKREncoder(options); },
    //
    // 15. Legacy miscellaneous encodings
    //
    // 15.1 replacement
    // Not needed - API throws RangeError
    // 15.2 Common infrastructure for utf-16be and utf-16le
    // 15.2.1 shared utf-16 decoder
    // 15.2.2 shared utf-16 encoder
    // 15.3 utf-16be
    // 15.3.1 utf-16be decoder
    /** @param {{fatal: boolean}} options */
    'UTF-16BE': function (options) { return new utf_16_1.UTF16Encoder(true, options); },
    // 15.3.2 utf-16be encoder
    // 15.4 utf-16le
    // 15.4.1 utf-16le decoder
    /** @param {{fatal: boolean}} options */
    'UTF-16LE': function (options) { return new utf_16_1.UTF16Encoder(false, options); },
    // 15.4.2 utf-16le encoder
    // 15.5 x-user-defined
    // 15.5.1 x-user-defined decoder
    // 15.5.2 x-user-defined encoder
    /** @param {{fatal: boolean}} options */
    'x-user-defined': function (options) { return new x_user_defined_1.XUserDefinedEncoder(options); },
};
exports.decoders = {
    /** @param {{fatal: boolean}} options */
    'UTF-8': function (options) { return new utf_8_1.UTF8Decoder(options); },
    /** @param {{fatal: boolean}} options */
    'GBK': function (options) { return new gb18030_1.GB18030Decoder(options); },
    /** @param {{fatal: boolean}} options */
    'gb18030': function (options) { return new gb18030_1.GB18030Decoder(options); },
    /** @param {{fatal: boolean}} options */
    'Big5': function (options) { return new big5_1.Big5Decoder(options); },
    /** @param {{fatal: boolean}} options */
    'EUC-JP': function (options) { return new euc_jp_1.EUCJPDecoder(options); },
    /** @param {{fatal: boolean}} options */
    'ISO-2022-JP': function (options) { return new iso_2022_jp_1.ISO2022JPDecoder(options); },
    /** @param {{fatal: boolean}} options */
    'Shift_JIS': function (options) { return new shift_jis_1.ShiftJISDecoder(options); },
    /** @param {{fatal: boolean}} options */
    'EUC-KR': function (options) { return new euc_kr_1.EUCKRDecoder(options); },
    /** @param {{fatal: boolean}} options */
    'UTF-16BE': function (options) { return new utf_16_1.UTF16Decoder(true, options); },
    /** @param {{fatal: boolean}} options */
    'UTF-16LE': function (options) { return new utf_16_1.UTF16Decoder(false, options); },
    /** @param {{fatal: boolean}} options */
    'x-user-defined': function (options) { return new x_user_defined_1.XUserDefinedDecoder(options); },
};
if (encodingIndexes) {
    encodings_1.encodings.forEach(function (category) {
        if (category.heading !== 'Legacy single-byte encodings')
            return;
        category.encodings.forEach(function (encoding) {
            var name = encoding.name;
            var idx = indexes_1.index(name.toLowerCase());
            /** @param {{fatal: boolean}} options */
            exports.decoders[name] = function (options) {
                return new single_byte_1.SingleByteDecoder(idx, options);
            };
            /** @param {{fatal: boolean}} options */
            exports.encoders[name] = function (options) {
                return new single_byte_1.SingleByteEncoder(idx, options);
            };
        });
    });
}
//# sourceMappingURL=encoding-factory.js.map

/***/ }),

/***/ 247:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var encodings_1 = __webpack_require__(16);
var finished_1 = __webpack_require__(870);
var indexes_1 = __webpack_require__(638);
var terminology_1 = __webpack_require__(205);
var utilities_1 = __webpack_require__(257);
/**
 * @constructor
 * @implements {Decoder}
 * @param {{fatal: boolean}} options
 */
var ShiftJISDecoder = /** @class */ (function () {
    function ShiftJISDecoder(options) {
        this.fatal = options.fatal;
        // Shift_JIS's decoder has an associated Shift_JIS lead (initially
        // 0x00).
        /** @type {number} */ this.Shift_JIS_lead = 0x00;
    }
    /**
     * @param {Stream} stream The stream of bytes being decoded.
     * @param {number} bite The next byte read from the stream.
     * @return {?(number|!Array.<number>)} The next code point(s)
     *     decoded, or null if not enough data exists in the input
     *     stream to decode a complete code point.
     */
    ShiftJISDecoder.prototype.handler = function (stream, bite) {
        // 1. If byte is end-of-stream and Shift_JIS lead is not 0x00,
        // set Shift_JIS lead to 0x00 and return error.
        if (bite === terminology_1.end_of_stream && this.Shift_JIS_lead !== 0x00) {
            this.Shift_JIS_lead = 0x00;
            return encodings_1.decoderError(this.fatal);
        }
        // 2. If byte is end-of-stream and Shift_JIS lead is 0x00,
        // return finished.
        if (bite === terminology_1.end_of_stream && this.Shift_JIS_lead === 0x00)
            return finished_1.finished;
        // 3. If Shift_JIS lead is not 0x00, let lead be Shift_JIS lead,
        // let pointer be null, set Shift_JIS lead to 0x00, and then run
        // these substeps:
        if (this.Shift_JIS_lead !== 0x00) {
            var lead = this.Shift_JIS_lead;
            var pointer = null;
            this.Shift_JIS_lead = 0x00;
            // 1. Let offset be 0x40, if byte is less than 0x7F, and 0x41
            // otherwise.
            var offset = (bite < 0x7F) ? 0x40 : 0x41;
            // 2. Let lead offset be 0x81, if lead is less than 0xA0, and
            // 0xC1 otherwise.
            var lead_offset = (lead < 0xA0) ? 0x81 : 0xC1;
            // 3. If byte is in the range 0x40 to 0x7E, inclusive, or 0x80
            // to 0xFC, inclusive, set pointer to (lead − lead offset) ×
            // 188 + byte − offset.
            if (utilities_1.inRange(bite, 0x40, 0x7E) || utilities_1.inRange(bite, 0x80, 0xFC))
                pointer = (lead - lead_offset) * 188 + bite - offset;
            // 4. If pointer is in the range 8836 to 10715, inclusive,
            // return a code point whose value is 0xE000 − 8836 + pointer.
            if (utilities_1.inRange(pointer, 8836, 10715))
                return 0xE000 - 8836 + pointer;
            // 5. Let code point be null, if pointer is null, and the
            // index code point for pointer in index jis0208 otherwise.
            var code_point = (pointer === null) ? null :
                indexes_1.indexCodePointFor(pointer, indexes_1.index('jis0208'));
            // 6. If code point is null and byte is an ASCII byte, prepend
            // byte to stream.
            if (code_point === null && terminology_1.isASCIIByte(bite))
                stream.prepend(bite);
            // 7. If code point is null, return error.
            if (code_point === null)
                return encodings_1.decoderError(this.fatal);
            // 8. Return a code point whose value is code point.
            return code_point;
        }
        // 4. If byte is an ASCII byte or 0x80, return a code point
        // whose value is byte.
        if (terminology_1.isASCIIByte(bite) || bite === 0x80)
            return bite;
        // 5. If byte is in the range 0xA1 to 0xDF, inclusive, return a
        // code point whose value is 0xFF61 − 0xA1 + byte.
        if (utilities_1.inRange(bite, 0xA1, 0xDF))
            return 0xFF61 - 0xA1 + bite;
        // 6. If byte is in the range 0x81 to 0x9F, inclusive, or 0xE0
        // to 0xFC, inclusive, set Shift_JIS lead to byte and return
        // continue.
        if (utilities_1.inRange(bite, 0x81, 0x9F) || utilities_1.inRange(bite, 0xE0, 0xFC)) {
            this.Shift_JIS_lead = bite;
            return null;
        }
        // 7. Return error.
        return encodings_1.decoderError(this.fatal);
    };
    return ShiftJISDecoder;
}());
exports.ShiftJISDecoder = ShiftJISDecoder;
//# sourceMappingURL=ShiftJISDecoder.js.map

/***/ }),

/***/ 257:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * @param {number} a The number to test.
 * @param {number} min The minimum value in the range, inclusive.
 * @param {number} max The maximum value in the range, inclusive.
 * @return {boolean} True if a >= min and a <= max.
 */
function inRange(a, min, max) {
    return min <= a && a <= max;
}
exports.inRange = inRange;
/**
 * @param {!Array.<*>} array The array to check.
 * @param {*} item The item to look for in the array.
 * @return {boolean} True if the item appears in the array.
 */
function includes(array, item) {
    return array.indexOf(item) !== -1;
}
exports.includes = includes;
/**
 * @param {*} o
 * @return {Object}
 */
function ToDictionary(o) {
    if (o === undefined || o === null)
        return {};
    if (o === Object(o))
        return o;
    throw TypeError('Could not convert argument to dictionary');
}
exports.ToDictionary = ToDictionary;
/**
 * @param {string} string Input string of UTF-16 code units.
 * @return {!Array.<number>} Code points.
 */
function stringToCodePoints(string) {
    // https://heycam.github.io/webidl/#dfn-obtain-unicode
    // 1. Let S be the DOMString value.
    var s = String(string);
    // 2. Let n be the length of S.
    var n = s.length;
    // 3. Initialize i to 0.
    var i = 0;
    // 4. Initialize U to be an empty sequence of Unicode characters.
    var u = [];
    // 5. While i < n:
    while (i < n) {
        // 1. Let c be the code unit in S at index i.
        var c = s.charCodeAt(i);
        // 2. Depending on the value of c:
        // c < 0xD800 or c > 0xDFFF
        if (c < 0xD800 || c > 0xDFFF) {
            // Append to U the Unicode character with code point c.
            u.push(c);
        }
        // 0xDC00 ≤ c ≤ 0xDFFF
        else if (0xDC00 <= c && c <= 0xDFFF) {
            // Append to U a U+FFFD REPLACEMENT CHARACTER.
            u.push(0xFFFD);
        }
        // 0xD800 ≤ c ≤ 0xDBFF
        else if (0xD800 <= c && c <= 0xDBFF) {
            // 1. If i = n−1, then append to U a U+FFFD REPLACEMENT
            // CHARACTER.
            if (i === n - 1) {
                u.push(0xFFFD);
            }
            // 2. Otherwise, i < n−1:
            else {
                // 1. Let d be the code unit in S at index i+1.
                var d = s.charCodeAt(i + 1);
                // 2. If 0xDC00 ≤ d ≤ 0xDFFF, then:
                if (0xDC00 <= d && d <= 0xDFFF) {
                    // 1. Let a be c & 0x3FF.
                    var a = c & 0x3FF;
                    // 2. Let b be d & 0x3FF.
                    var b = d & 0x3FF;
                    // 3. Append to U the Unicode character with code point
                    // 2^16+2^10*a+b.
                    u.push(0x10000 + (a << 10) + b);
                    // 4. Set i to i+1.
                    i += 1;
                }
                // 3. Otherwise, d < 0xDC00 or d > 0xDFFF. Append to U a
                // U+FFFD REPLACEMENT CHARACTER.
                else {
                    u.push(0xFFFD);
                }
            }
        }
        // 3. Set i to i+1.
        i += 1;
    }
    // 6. Return U.
    return u;
}
exports.stringToCodePoints = stringToCodePoints;
/**
 * @param {!Array.<number>} code_points Array of code points.
 * @return {string} string String of UTF-16 code units.
 */
function codePointsToString(code_points) {
    var s = '';
    for (var i = 0; i < code_points.length; ++i) {
        var cp = code_points[i];
        if (cp <= 0xFFFF) {
            s += String.fromCharCode(cp);
        }
        else {
            cp -= 0x10000;
            s += String.fromCharCode((cp >> 10) + 0xD800, (cp & 0x3FF) + 0xDC00);
        }
    }
    return s;
}
exports.codePointsToString = codePointsToString;
//# sourceMappingURL=utilities.js.map

/***/ }),

/***/ 266:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/** @const */ exports.DEFAULT_ENCODING = 'utf-8';
//# sourceMappingURL=defaultEncoding.js.map

/***/ }),

/***/ 301:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", ({ value: true }));
__export(__webpack_require__(898));
__export(__webpack_require__(718));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 400:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var encodings_1 = __webpack_require__(16);
var finished_1 = __webpack_require__(870);
var indexes_1 = __webpack_require__(638);
var terminology_1 = __webpack_require__(205);
var utilities_1 = __webpack_require__(257);
/**
 * @constructor
 * @implements {Encoder}
 * @param {{fatal: boolean}} options
 */
var EUCJPEncoder = /** @class */ (function () {
    function EUCJPEncoder(options) {
        this.fatal = options.fatal;
    }
    /**
     * @param {Stream} stream Input stream.
     * @param {number} code_point Next code point read from the stream.
     * @return {(number|!Array.<number>)} Byte(s) to emit.
     */
    EUCJPEncoder.prototype.handler = function (stream, code_point) {
        // 1. If code point is end-of-stream, return finished.
        if (code_point === terminology_1.end_of_stream)
            return finished_1.finished;
        // 2. If code point is an ASCII code point, return a byte whose
        // value is code point.
        if (terminology_1.isASCIICodePoint(code_point))
            return code_point;
        // 3. If code point is U+00A5, return byte 0x5C.
        if (code_point === 0x00A5)
            return 0x5C;
        // 4. If code point is U+203E, return byte 0x7E.
        if (code_point === 0x203E)
            return 0x7E;
        // 5. If code point is in the range U+FF61 to U+FF9F, inclusive,
        // return two bytes whose values are 0x8E and code point −
        // 0xFF61 + 0xA1.
        if (utilities_1.inRange(code_point, 0xFF61, 0xFF9F))
            return [0x8E, code_point - 0xFF61 + 0xA1];
        // 6. If code point is U+2212, set it to U+FF0D.
        if (code_point === 0x2212)
            code_point = 0xFF0D;
        // 7. Let pointer be the index pointer for code point in index
        // jis0208.
        var pointer = indexes_1.indexPointerFor(code_point, indexes_1.index('jis0208'));
        // 8. If pointer is null, return error with code point.
        if (pointer === null)
            return encodings_1.encoderError(code_point);
        // 9. Let lead be Math.floor(pointer / 94) + 0xA1.
        var lead = Math.floor(pointer / 94) + 0xA1;
        // 10. Let trail be pointer % 94 + 0xA1.
        var trail = pointer % 94 + 0xA1;
        // 11. Return two bytes whose values are lead and trail.
        return [lead, trail];
    };
    return EUCJPEncoder;
}());
exports.EUCJPEncoder = EUCJPEncoder;
//# sourceMappingURL=EUCJPEncoder.js.map

/***/ }),

/***/ 419:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var defaultEncoding_1 = __webpack_require__(266);
var encoding_factory_1 = __webpack_require__(246);
var encodings_1 = __webpack_require__(16);
var finished_1 = __webpack_require__(870);
var terminology_1 = __webpack_require__(205);
var utilities_1 = __webpack_require__(257);
var getGlobalScope_1 = __webpack_require__(494);
var Stream_1 = __webpack_require__(232);
/**
 * @constructor
 * @param {string=} label The label of the encoding. NONSTANDARD.
 * @param {Object=} options NONSTANDARD.
 */
var TextEncoder = /** @class */ (function () {
    function TextEncoder(label, options) {
        var optionsMap = utilities_1.ToDictionary(options);
        // A TextEncoder object has an associated encoding and encoder.
        /** @private */
        this._encoding = null;
        /** @private @type {?Encoder} */
        this._encoder = null;
        // Non-standard
        /** @private @type {boolean} */
        this._do_not_flush = false;
        /** @private @type {string} */
        this._fatal = Boolean(optionsMap['fatal']) ? 'fatal' : 'replacement';
        // 1. Let enc be a new TextEncoder object.
        // const enc = this;
        // no need to do this as this is a proper class 
        // now and TSC will handle transpilation to older platforms
        // 2. Set enc's encoding to UTF-8's encoder.
        if (Boolean(optionsMap['NONSTANDARD_allowLegacyEncoding'])) {
            // NONSTANDARD behavior.
            label = !!label ? String(label) : defaultEncoding_1.DEFAULT_ENCODING;
            var encoding = encodings_1.getEncoding(label);
            if (encoding === null || encoding.name === 'replacement')
                throw RangeError('Unknown encoding: ' + label);
            if (!encoding_factory_1.encoders[encoding.name]) {
                throw Error('Encoder not present.' +
                    ' Did you forget to include encoding-indexes.js first?');
            }
            this._encoding = encoding;
            // EXPERIMENTAL_CODE
            // } else if (["iso-8859-1", "ISO-8859-1", "latin-1", "latin1", "LATIN-1", "LATIN1"].indexOf(label) !== -1) {
            //   this._encoding = getEncoding('iso-8859-1');
        }
        else {
            // Standard behavior.
            this._encoding = encodings_1.getEncoding('utf-8');
            var glo = getGlobalScope_1.getGlobalScope() || {};
            if (label !== undefined && 'console' in glo) {
                console.warn('TextEncoder constructor called with encoding label, '
                    + 'which is ignored.');
            }
        }
        // For pre-ES5 runtimes:
        // if (!Object.defineProperty)
        // this.encoding = enc._encoding.name.toLowerCase();
        // 3. Return enc.
        // return enc;
    }
    Object.defineProperty(TextEncoder.prototype, "encoding", {
        // if(Object.defineProperty) {
        //  // The encoding attribute's getter must return encoding's name.
        //   Object.defineProperty(TextEncoder.prototype, 'encoding', {
        //     /** @this {TextEncoder} */
        //     get: function () { return this._encoding.name.toLowerCase(); }
        //   });
        // }
        get: function () {
            return this._encoding.name.toLowerCase();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {string=} opt_string The string to encode.
     * @param {Object=} options
     * @return {!Uint8Array} Encoded bytes, as a Uint8Array.
     */
    TextEncoder.prototype.encode = function (opt_string, options) {
        opt_string = opt_string === undefined ? '' : String(opt_string);
        var optionsMap = utilities_1.ToDictionary(options);
        // NOTE: This option is nonstandard. None of the encodings
        // permitted for encoding (i.e. UTF-8, UTF-16) are stateful when
        // the input is a USVString so streaming is not necessary.
        if (!this._do_not_flush)
            this._encoder = encoding_factory_1.encoders[this._encoding.name]({
                fatal: this._fatal === 'fatal'
            });
        this._do_not_flush = Boolean(optionsMap['stream']);
        // 1. Convert input to a stream.
        var input = new Stream_1.Stream(utilities_1.stringToCodePoints(opt_string));
        // 2. Let output be a new stream
        var output = [];
        /** @type {?(number|!Array.<number>)} */
        var result;
        // 3. While true, run these substeps:
        while (true) {
            // 1. Let token be the result of reading from input.
            var token = input.read();
            if (token === terminology_1.end_of_stream)
                break;
            // 2. Let result be the result of processing token for encoder,
            // input, output.
            result = this._encoder.handler(input, token);
            if (result === finished_1.finished)
                break;
            if (Array.isArray(result))
                output.push.apply(output, /**@type {!Array.<number>}*/ (result));
            else
                output.push(result);
        }
        // TODO: Align with spec algorithm.
        if (!this._do_not_flush) {
            while (true) {
                result = this._encoder.handler(input, input.read());
                if (result === finished_1.finished)
                    break;
                if (Array.isArray(result))
                    output.push.apply(output, /**@type {!Array.<number>}*/ (result));
                else
                    output.push(result);
            }
            this._encoder = null;
        }
        // 3. If result is finished, convert output into a byte sequence,
        // and then return a Uint8Array object wrapping an ArrayBuffer
        // containing output.
        return new Uint8Array(output);
    };
    return TextEncoder;
}());
exports.TextEncoder = TextEncoder;
//# sourceMappingURL=TextEncoder.js.map

/***/ }),

/***/ 420:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var encodings_1 = __webpack_require__(16);
var finished_1 = __webpack_require__(870);
var indexes_1 = __webpack_require__(638);
var terminology_1 = __webpack_require__(205);
/**
 * @constructor
 * @implements {Encoder}
 * @param {{fatal: boolean}} options
 * @param {boolean=} gbk_flag
 */
var GB18030Encoder = /** @class */ (function () {
    function GB18030Encoder(options, gbk_flag) {
        if (gbk_flag === void 0) { gbk_flag = undefined; }
        this.gbk_flag = gbk_flag;
        this.fatal = options.fatal;
        // gb18030's decoder has an associated gbk flag (initially unset).
    }
    /**
     * @param {Stream} stream Input stream.
     * @param {number} code_point Next code point read from the stream.
     * @return {(number|!Array.<number>)} Byte(s) to emit.
     */
    GB18030Encoder.prototype.handler = function (stream, code_point) {
        // 1. If code point is end-of-stream, return finished.
        if (code_point === terminology_1.end_of_stream)
            return finished_1.finished;
        // 2. If code point is an ASCII code point, return a byte whose
        // value is code point.
        if (terminology_1.isASCIICodePoint(code_point))
            return code_point;
        // 3. If code point is U+E5E5, return error with code point.
        if (code_point === 0xE5E5)
            return encodings_1.encoderError(code_point);
        // 4. If the gbk flag is set and code point is U+20AC, return
        // byte 0x80.
        if (this.gbk_flag && code_point === 0x20AC)
            return 0x80;
        // 5. Let pointer be the index pointer for code point in index
        // gb18030.
        var pointer = indexes_1.indexPointerFor(code_point, indexes_1.index('gb18030'));
        // 6. If pointer is not null, run these substeps:
        if (pointer !== null) {
            // 1. Let lead be Math.floor(pointer / 190) + 0x81.
            var lead = Math.floor(pointer / 190) + 0x81;
            // 2. Let trail be pointer % 190.
            var trail = pointer % 190;
            // 3. Let offset be 0x40 if trail is less than 0x3F and 0x41 otherwise.
            var offset = trail < 0x3F ? 0x40 : 0x41;
            // 4. Return two bytes whose values are lead and trail + offset.
            return [lead, trail + offset];
        }
        // 7. If gbk flag is set, return error with code point.
        if (this.gbk_flag)
            return encodings_1.encoderError(code_point);
        // 8. Set pointer to the index gb18030 ranges pointer for code
        // point.
        pointer = indexes_1.indexGB18030RangesPointerFor(code_point);
        // 9. Let byte1 be Math.floor(pointer / 10 / 126 / 10).
        var byte1 = Math.floor(pointer / 10 / 126 / 10);
        // 10. Set pointer to pointer − byte1 × 10 × 126 × 10.
        pointer = pointer - byte1 * 10 * 126 * 10;
        // 11. Let byte2 be Math.floor(pointer / 10 / 126).
        var byte2 = Math.floor(pointer / 10 / 126);
        // 12. Set pointer to pointer − byte2 × 10 × 126.
        pointer = pointer - byte2 * 10 * 126;
        // 13. Let byte3 be Math.floor(pointer / 10).
        var byte3 = Math.floor(pointer / 10);
        // 14. Let byte4 be pointer − byte3 × 10.
        var byte4 = pointer - byte3 * 10;
        // 15. Return four bytes whose values are byte1 + 0x81, byte2 +
        // 0x30, byte3 + 0x81, byte4 + 0x30.
        return [byte1 + 0x81,
            byte2 + 0x30,
            byte3 + 0x81,
            byte4 + 0x30];
    };
    return GB18030Encoder;
}());
exports.GB18030Encoder = GB18030Encoder;
//# sourceMappingURL=GB18030Encoder.js.map

/***/ }),

/***/ 435:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var encodings_1 = __webpack_require__(16);
var finished_1 = __webpack_require__(870);
var terminology_1 = __webpack_require__(205);
var utilities_1 = __webpack_require__(257);
/**
 * @constructor
 * @implements {Decoder}
 * @param {{fatal: boolean}} options
 */
var UTF8Decoder = /** @class */ (function () {
    function UTF8Decoder(options) {
        this.fatal = options.fatal;
        // utf-8's decoder's has an associated utf-8 code point, utf-8
        // bytes seen, and utf-8 bytes needed (all initially 0), a utf-8
        // lower boundary (initially 0x80), and a utf-8 upper boundary
        // (initially 0xBF).
        /** @type {number} */ this.utf8_code_point = 0,
            /** @type {number} */ this.utf8_bytes_seen = 0,
            /** @type {number} */ this.utf8_bytes_needed = 0,
            /** @type {number} */ this.utf8_lower_boundary = 0x80,
            /** @type {number} */ this.utf8_upper_boundary = 0xBF;
    }
    /**
     * @param {Stream} stream The stream of bytes being decoded.
     * @param {number} bite The next byte read from the stream.
     * @return {?(number|!Array.<number>)} The next code point(s)
     *     decoded, or null if not enough data exists in the input
     *     stream to decode a complete code point.
     */
    UTF8Decoder.prototype.handler = function (stream, bite) {
        // 1. If byte is end-of-stream and utf-8 bytes needed is not 0,
        // set utf-8 bytes needed to 0 and return error.
        if (bite === terminology_1.end_of_stream && this.utf8_bytes_needed !== 0) {
            this.utf8_bytes_needed = 0;
            return encodings_1.decoderError(this.fatal);
        }
        // 2. If byte is end-of-stream, return finished.
        if (bite === terminology_1.end_of_stream)
            return finished_1.finished;
        // 3. If utf-8 bytes needed is 0, based on byte:
        if (this.utf8_bytes_needed === 0) {
            // 0x00 to 0x7F
            if (utilities_1.inRange(bite, 0x00, 0x7F)) {
                // Return a code point whose value is byte.
                return bite;
            }
            // 0xC2 to 0xDF
            else if (utilities_1.inRange(bite, 0xC2, 0xDF)) {
                // 1. Set utf-8 bytes needed to 1.
                this.utf8_bytes_needed = 1;
                // 2. Set UTF-8 code point to byte & 0x1F.
                this.utf8_code_point = bite & 0x1F;
            }
            // 0xE0 to 0xEF
            else if (utilities_1.inRange(bite, 0xE0, 0xEF)) {
                // 1. If byte is 0xE0, set utf-8 lower boundary to 0xA0.
                if (bite === 0xE0)
                    this.utf8_lower_boundary = 0xA0;
                // 2. If byte is 0xED, set utf-8 upper boundary to 0x9F.
                if (bite === 0xED)
                    this.utf8_upper_boundary = 0x9F;
                // 3. Set utf-8 bytes needed to 2.
                this.utf8_bytes_needed = 2;
                // 4. Set UTF-8 code point to byte & 0xF.
                this.utf8_code_point = bite & 0xF;
            }
            // 0xF0 to 0xF4
            else if (utilities_1.inRange(bite, 0xF0, 0xF4)) {
                // 1. If byte is 0xF0, set utf-8 lower boundary to 0x90.
                if (bite === 0xF0)
                    this.utf8_lower_boundary = 0x90;
                // 2. If byte is 0xF4, set utf-8 upper boundary to 0x8F.
                if (bite === 0xF4)
                    this.utf8_upper_boundary = 0x8F;
                // 3. Set utf-8 bytes needed to 3.
                this.utf8_bytes_needed = 3;
                // 4. Set UTF-8 code point to byte & 0x7.
                this.utf8_code_point = bite & 0x7;
            }
            // Otherwise
            else {
                // Return error.
                return encodings_1.decoderError(this.fatal);
            }
            // Return continue.
            return null;
        }
        // 4. If byte is not in the range utf-8 lower boundary to utf-8
        // upper boundary, inclusive, run these substeps:
        if (!utilities_1.inRange(bite, this.utf8_lower_boundary, this.utf8_upper_boundary)) {
            // 1. Set utf-8 code point, utf-8 bytes needed, and utf-8
            // bytes seen to 0, set utf-8 lower boundary to 0x80, and set
            // utf-8 upper boundary to 0xBF.
            this.utf8_code_point = this.utf8_bytes_needed = this.utf8_bytes_seen = 0;
            this.utf8_lower_boundary = 0x80;
            this.utf8_upper_boundary = 0xBF;
            // 2. Prepend byte to stream.
            stream.prepend(bite);
            // 3. Return error.
            return encodings_1.decoderError(this.fatal);
        }
        // 5. Set utf-8 lower boundary to 0x80 and utf-8 upper boundary
        // to 0xBF.
        this.utf8_lower_boundary = 0x80;
        this.utf8_upper_boundary = 0xBF;
        // 6. Set UTF-8 code point to (UTF-8 code point << 6) | (byte &
        // 0x3F)
        this.utf8_code_point = (this.utf8_code_point << 6) | (bite & 0x3F);
        // 7. Increase utf-8 bytes seen by one.
        this.utf8_bytes_seen += 1;
        // 8. If utf-8 bytes seen is not equal to utf-8 bytes needed,
        // continue.
        if (this.utf8_bytes_seen !== this.utf8_bytes_needed)
            return null;
        // 9. Let code point be utf-8 code point.
        var code_point = this.utf8_code_point;
        // 10. Set utf-8 code point, utf-8 bytes needed, and utf-8 bytes
        // seen to 0.
        this.utf8_code_point = this.utf8_bytes_needed = this.utf8_bytes_seen = 0;
        // 11. Return a code point whose value is code point.
        return code_point;
    };
    return UTF8Decoder;
}());
exports.UTF8Decoder = UTF8Decoder;
//# sourceMappingURL=UTF8Decoder.js.map

/***/ }),

/***/ 454:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var finished_1 = __webpack_require__(870);
var terminology_1 = __webpack_require__(205);
/**
 * @constructor
 * @implements {Decoder}
 * @param {{fatal: boolean}} options
 */
var XUserDefinedDecoder = /** @class */ (function () {
    function XUserDefinedDecoder(options) {
        this.fatal = options.fatal;
    }
    /**
     * @param {Stream} stream The stream of bytes being decoded.
     * @param {number} bite The next byte read from the stream.
     * @return {?(number|!Array.<number>)} The next code point(s)
     *     decoded, or null if not enough data exists in the input
     *     stream to decode a complete code point.
     */
    XUserDefinedDecoder.prototype.handler = function (stream, bite) {
        // 1. If byte is end-of-stream, return finished.
        if (bite === terminology_1.end_of_stream)
            return finished_1.finished;
        // 2. If byte is an ASCII byte, return a code point whose value
        // is byte.
        if (terminology_1.isASCIIByte(bite))
            return bite;
        // 3. Return a code point whose value is 0xF780 + byte − 0x80.
        return 0xF780 + bite - 0x80;
    };
    return XUserDefinedDecoder;
}());
exports.XUserDefinedDecoder = XUserDefinedDecoder;
//# sourceMappingURL=XUserDefinedDecoder.js.map

/***/ }),

/***/ 460:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var getGlobalScope_1 = __webpack_require__(494);
var _encodingIndexes;
function checkForEncodingIndexes() {
    if (typeof TextEncodingIndexes !== 'undefined')
        return TextEncodingIndexes.encodingIndexes;
    var glo = getGlobalScope_1.getGlobalScope();
    if (!glo)
        return null;
    if ('TextEncodingIndexes' in glo)
        return global['TextEncodingIndexes']['encodingIndexes'];
    if ('encoding-indexes' in glo)
        return global['encodingIndexes'];
    return null;
}
function getEncodingIndexes() {
    if (_encodingIndexes) {
        return _encodingIndexes;
    }
    var indexes = checkForEncodingIndexes();
    if (!indexes) {
        return null;
    }
    _encodingIndexes = indexes;
    return indexes;
}
exports.getEncodingIndexes = getEncodingIndexes;
//# sourceMappingURL=encoding-indexes-provider.js.map

/***/ }),

/***/ 494:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function getGlobalScope() {
    if (typeof global !== 'undefined')
        return global;
    if (typeof window !== 'undefined')
        return window;
    if (typeof self !== 'undefined')
        return self;
    return;
}
exports.getGlobalScope = getGlobalScope;
//# sourceMappingURL=getGlobalScope.js.map

/***/ }),

/***/ 499:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * @param {number} code_unit
 * @param {boolean} utf16be
 * @return {!Array.<number>} bytes
 */
function convertCodeUnitToBytes(code_unit, utf16be) {
    // 1. Let byte1 be code unit >> 8.
    var byte1 = code_unit >> 8;
    // 2. Let byte2 be code unit & 0x00FF.
    var byte2 = code_unit & 0x00FF;
    // 3. Then return the bytes in order:
    // utf-16be flag is set: byte1, then byte2.
    if (utf16be)
        return [byte1, byte2];
    // utf-16be flag is unset: byte2, then byte1.
    return [byte2, byte1];
}
exports.convertCodeUnitToBytes = convertCodeUnitToBytes;
//# sourceMappingURL=converCodeUnitToBytes.js.map

/***/ }),

/***/ 535:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var finished_1 = __webpack_require__(870);
var terminology_1 = __webpack_require__(205);
var utilities_1 = __webpack_require__(257);
var converCodeUnitToBytes_1 = __webpack_require__(499);
/**
 * @constructor
 * @implements {Encoder}
 * @param {boolean} utf16_be True if big-endian, false if little-endian.
 * @param {{fatal: boolean}} options
 */
var UTF16Encoder = /** @class */ (function () {
    function UTF16Encoder(utf16_be, options) {
        this.utf16_be = utf16_be;
        this.fatal = options.fatal;
    }
    /**
     * @param {Stream} stream Input stream.
     * @param {number} code_point Next code point read from the stream.
     * @return {(number|!Array.<number>)} Byte(s) to emit.
     */
    UTF16Encoder.prototype.handler = function (stream, code_point) {
        // 1. If code point is end-of-stream, return finished.
        if (code_point === terminology_1.end_of_stream)
            return finished_1.finished;
        // 2. If code point is in the range U+0000 to U+FFFF, inclusive,
        // return the sequence resulting of converting code point to
        // bytes using utf-16be encoder flag.
        if (utilities_1.inRange(code_point, 0x0000, 0xFFFF))
            return converCodeUnitToBytes_1.convertCodeUnitToBytes(code_point, this.utf16_be);
        // 3. Let lead be ((code point − 0x10000) >> 10) + 0xD800,
        // converted to bytes using utf-16be encoder flag.
        var lead = converCodeUnitToBytes_1.convertCodeUnitToBytes(((code_point - 0x10000) >> 10) + 0xD800, this.utf16_be);
        // 4. Let trail be ((code point − 0x10000) & 0x3FF) + 0xDC00,
        // converted to bytes using utf-16be encoder flag.
        var trail = converCodeUnitToBytes_1.convertCodeUnitToBytes(((code_point - 0x10000) & 0x3FF) + 0xDC00, this.utf16_be);
        // 5. Return a byte sequence of lead followed by trail.
        return lead.concat(trail);
    };
    return UTF16Encoder;
}());
exports.UTF16Encoder = UTF16Encoder;
//# sourceMappingURL=UTF16Encoder.js.map

/***/ }),

/***/ 555:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var finished_1 = __webpack_require__(870);
var terminology_1 = __webpack_require__(205);
var utilities_1 = __webpack_require__(257);
/**
 * @constructor
 * @implements {Encoder}
 * @param {{fatal: boolean}} options
 */
var UTF8Encoder = /** @class */ (function () {
    function UTF8Encoder(options) {
        this.fatal = options.fatal;
    }
    /**
     * @param {Stream} stream Input stream.
     * @param {number} code_point Next code point read from the stream.
     * @return {(number|!Array.<number>)} Byte(s) to emit.
     */
    UTF8Encoder.prototype.handler = function (stream, code_point) {
        // 1. If code point is end-of-stream, return finished.
        if (code_point === terminology_1.end_of_stream)
            return finished_1.finished;
        // 2. If code point is an ASCII code point, return a byte whose
        // value is code point.
        if (terminology_1.isASCIICodePoint(code_point))
            return code_point;
        // 3. Set count and offset based on the range code point is in:
        var count, offset;
        // U+0080 to U+07FF, inclusive:
        if (utilities_1.inRange(code_point, 0x0080, 0x07FF)) {
            // 1 and 0xC0
            count = 1;
            offset = 0xC0;
        }
        // U+0800 to U+FFFF, inclusive:
        else if (utilities_1.inRange(code_point, 0x0800, 0xFFFF)) {
            // 2 and 0xE0
            count = 2;
            offset = 0xE0;
        }
        // U+10000 to U+10FFFF, inclusive:
        else if (utilities_1.inRange(code_point, 0x10000, 0x10FFFF)) {
            // 3 and 0xF0
            count = 3;
            offset = 0xF0;
        }
        // 4. Let bytes be a byte sequence whose first byte is (code
        // point >> (6 × count)) + offset.
        var bytes = [(code_point >> (6 * count)) + offset];
        // 5. Run these substeps while count is greater than 0:
        while (count > 0) {
            // 1. Set temp to code point >> (6 × (count − 1)).
            var temp = code_point >> (6 * (count - 1));
            // 2. Append to bytes 0x80 | (temp & 0x3F).
            bytes.push(0x80 | (temp & 0x3F));
            // 3. Decrease count by one.
            count -= 1;
        }
        // 6. Return bytes bytes, in order.
        return bytes;
    };
    return UTF8Encoder;
}());
exports.UTF8Encoder = UTF8Encoder;
//# sourceMappingURL=UTF8Encoder.js.map

/***/ }),

/***/ 595:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var encodings_1 = __webpack_require__(16);
var finished_1 = __webpack_require__(870);
var indexes_1 = __webpack_require__(638);
var terminology_1 = __webpack_require__(205);
var utilities_1 = __webpack_require__(257);
/**
 * @constructor
 * @implements {Decoder}
 * @param {{fatal: boolean}} options
 */
var EUCKRDecoder = /** @class */ (function () {
    function EUCKRDecoder(options) {
        this.fatal = options.fatal;
        // euc-kr's decoder has an associated euc-kr lead (initially 0x00).
        /** @type {number} */ this.euckr_lead = 0x00;
    }
    /**
     * @param {Stream} stream The stream of bytes being decoded.
     * @param {number} bite The next byte read from the stream.
     * @return {?(number|!Array.<number>)} The next code point(s)
     *     decoded, or null if not enough data exists in the input
     *     stream to decode a complete code point.
     */
    EUCKRDecoder.prototype.handler = function (stream, bite) {
        // 1. If byte is end-of-stream and euc-kr lead is not 0x00, set
        // euc-kr lead to 0x00 and return error.
        if (bite === terminology_1.end_of_stream && this.euckr_lead !== 0) {
            this.euckr_lead = 0x00;
            return encodings_1.decoderError(this.fatal);
        }
        // 2. If byte is end-of-stream and euc-kr lead is 0x00, return
        // finished.
        if (bite === terminology_1.end_of_stream && this.euckr_lead === 0)
            return finished_1.finished;
        // 3. If euc-kr lead is not 0x00, let lead be euc-kr lead, let
        // pointer be null, set euc-kr lead to 0x00, and then run these
        // substeps:
        if (this.euckr_lead !== 0x00) {
            var lead = this.euckr_lead;
            var pointer = null;
            this.euckr_lead = 0x00;
            // 1. If byte is in the range 0x41 to 0xFE, inclusive, set
            // pointer to (lead − 0x81) × 190 + (byte − 0x41).
            if (utilities_1.inRange(bite, 0x41, 0xFE))
                pointer = (lead - 0x81) * 190 + (bite - 0x41);
            // 2. Let code point be null, if pointer is null, and the
            // index code point for pointer in index euc-kr otherwise.
            var code_point = (pointer === null)
                ? null : indexes_1.indexCodePointFor(pointer, indexes_1.index('euc-kr'));
            // 3. If code point is null and byte is an ASCII byte, prepend
            // byte to stream.
            if (pointer === null && terminology_1.isASCIIByte(bite))
                stream.prepend(bite);
            // 4. If code point is null, return error.
            if (code_point === null)
                return encodings_1.decoderError(this.fatal);
            // 5. Return a code point whose value is code point.
            return code_point;
        }
        // 4. If byte is an ASCII byte, return a code point whose value
        // is byte.
        if (terminology_1.isASCIIByte(bite))
            return bite;
        // 5. If byte is in the range 0x81 to 0xFE, inclusive, set
        // euc-kr lead to byte and return continue.
        if (utilities_1.inRange(bite, 0x81, 0xFE)) {
            this.euckr_lead = bite;
            return null;
        }
        // 6. Return error.
        return encodings_1.decoderError(this.fatal);
    };
    return EUCKRDecoder;
}());
exports.EUCKRDecoder = EUCKRDecoder;
//# sourceMappingURL=EUCKRDecoder.js.map

/***/ }),

/***/ 623:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", ({ value: true }));
__export(__webpack_require__(61));
__export(__webpack_require__(705));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 632:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var encodings_1 = __webpack_require__(16);
var finished_1 = __webpack_require__(870);
var indexes_1 = __webpack_require__(638);
var terminology_1 = __webpack_require__(205);
var utilities_1 = __webpack_require__(257);
/**
  * @constructor
  * @implements {Decoder}
  * @param {{fatal: boolean}} options
  */
var Big5Decoder = /** @class */ (function () {
    function Big5Decoder(options) {
        this.fatal = options.fatal;
        // Big5's decoder has an associated Big5 lead (initially 0x00).
        /** @type {number} */ this.Big5_lead = 0x00;
    }
    /**
     * @param {Stream} stream The stream of bytes being decoded.
     * @param {number} bite The next byte read from the stream.
     * @return {?(number|!Array.<number>)} The next code point(s)
     *     decoded, or null if not enough data exists in the input
     *     stream to decode a complete code point.
     */
    Big5Decoder.prototype.handler = function (stream, bite) {
        // 1. If byte is end-of-stream and Big5 lead is not 0x00, set
        // Big5 lead to 0x00 and return error.
        if (bite === terminology_1.end_of_stream && this.Big5_lead !== 0x00) {
            this.Big5_lead = 0x00;
            return encodings_1.decoderError(this.fatal);
        }
        // 2. If byte is end-of-stream and Big5 lead is 0x00, return
        // finished.
        if (bite === terminology_1.end_of_stream && this.Big5_lead === 0x00)
            return finished_1.finished;
        // 3. If Big5 lead is not 0x00, let lead be Big5 lead, let
        // pointer be null, set Big5 lead to 0x00, and then run these
        // substeps:
        if (this.Big5_lead !== 0x00) {
            var lead = this.Big5_lead;
            var pointer = null;
            this.Big5_lead = 0x00;
            // 1. Let offset be 0x40 if byte is less than 0x7F and 0x62
            // otherwise.
            var offset = bite < 0x7F ? 0x40 : 0x62;
            // 2. If byte is in the range 0x40 to 0x7E, inclusive, or 0xA1
            // to 0xFE, inclusive, set pointer to (lead − 0x81) × 157 +
            // (byte − offset).
            if (utilities_1.inRange(bite, 0x40, 0x7E) || utilities_1.inRange(bite, 0xA1, 0xFE))
                pointer = (lead - 0x81) * 157 + (bite - offset);
            // 3. If there is a row in the table below whose first column
            // is pointer, return the two code points listed in its second
            // column
            // Pointer | Code points
            // --------+--------------
            // 1133    | U+00CA U+0304
            // 1135    | U+00CA U+030C
            // 1164    | U+00EA U+0304
            // 1166    | U+00EA U+030C
            switch (pointer) {
                case 1133: return [0x00CA, 0x0304];
                case 1135: return [0x00CA, 0x030C];
                case 1164: return [0x00EA, 0x0304];
                case 1166: return [0x00EA, 0x030C];
            }
            // 4. Let code point be null if pointer is null and the index
            // code point for pointer in index Big5 otherwise.
            var code_point = (pointer === null) ? null :
                indexes_1.indexCodePointFor(pointer, indexes_1.index('big5'));
            // 5. If code point is null and byte is an ASCII byte, prepend
            // byte to stream.
            if (code_point === null && terminology_1.isASCIIByte(bite))
                stream.prepend(bite);
            // 6. If code point is null, return error.
            if (code_point === null)
                return encodings_1.decoderError(this.fatal);
            // 7. Return a code point whose value is code point.
            return code_point;
        }
        // 4. If byte is an ASCII byte, return a code point whose value
        // is byte.
        if (terminology_1.isASCIIByte(bite))
            return bite;
        // 5. If byte is in the range 0x81 to 0xFE, inclusive, set Big5
        // lead to byte and return continue.
        if (utilities_1.inRange(bite, 0x81, 0xFE)) {
            this.Big5_lead = bite;
            return null;
        }
        // 6. Return error.
        return encodings_1.decoderError(this.fatal);
    };
    return Big5Decoder;
}());
exports.Big5Decoder = Big5Decoder;
//# sourceMappingURL=Big5Decoder.js.map

/***/ }),

/***/ 637:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", ({ value: true }));
__export(__webpack_require__(812));
__export(__webpack_require__(420));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 638:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var getArrayVal_1 = __webpack_require__(51);
var utilities_1 = __webpack_require__(257);
var encoding_indexes_provider_1 = __webpack_require__(460);
/**
 * @param {number} pointer The |pointer| to search for.
 * @param {(!Array.<?number>|undefined)} index The |index| to search within.
 * @return {?number} The code point corresponding to |pointer| in |index|,
 *     or null if |code point| is not in |index|.
 */
function indexCodePointFor(pointer, index) {
    if (!index)
        return null;
    return index[pointer] || null;
}
exports.indexCodePointFor = indexCodePointFor;
/**
 * @param {number} code_point The |code point| to search for.
 * @param {!Array.<?number>} index The |index| to search within.
 * @return {?number} The first pointer corresponding to |code point| in
 *     |index|, or null if |code point| is not in |index|.
 */
function indexPointerFor(code_point, index) {
    var pointer = index.indexOf(code_point);
    return pointer === -1 ? null : pointer;
}
exports.indexPointerFor = indexPointerFor;
/**
 * @param {string} name Name of the index.
 * @return {(!Array.<number>|!Array.<Array.<number>>)}
 *  */
function index(name) {
    var encodingIndexes = encoding_indexes_provider_1.getEncodingIndexes();
    if (!encodingIndexes) {
        throw Error("Indexes missing." +
            " Did you forget to include encoding-indexes.js first?");
    }
    return encodingIndexes[name];
}
exports.index = index;
/**
 * @param {number} pointer The |pointer| to search for in the gb18030 index.
 * @return {?number} The code point corresponding to |pointer| in |index|,
 *     or null if |code point| is not in the gb18030 index.
 */
function indexGB18030RangesCodePointFor(pointer) {
    // 1. If pointer is greater than 39419 and less than 189000, or
    // pointer is greater than 1237575, return null.
    if ((pointer > 39419 && pointer < 189000) || (pointer > 1237575))
        return null;
    // 2. If pointer is 7457, return code point U+E7C7.
    if (pointer === 7457)
        return 0xE7C7;
    // 3. Let offset be the last pointer in index gb18030 ranges that
    // is equal to or less than pointer and let code point offset be
    // its corresponding code point.
    var offset = 0;
    var code_point_offset = 0;
    var idx = index('gb18030-ranges');
    for (var i = 0; i < idx.length; ++i) {
        /** @type {!Array.<number>} */
        var entry = getArrayVal_1.getArrayVal(idx[i]);
        if (entry[0] <= pointer) {
            offset = entry[0];
            code_point_offset = entry[1];
        }
        else {
            break;
        }
    }
    // 4. Return a code point whose value is code point offset +
    // pointer − offset.
    return code_point_offset + pointer - offset;
}
exports.indexGB18030RangesCodePointFor = indexGB18030RangesCodePointFor;
/**
 * @param {number} code_point The |code point| to locate in the gb18030 index.
 * @return {number} The first pointer corresponding to |code point| in the
 *     gb18030 index.
 */
function indexGB18030RangesPointerFor(code_point) {
    // 1. If code point is U+E7C7, return pointer 7457.
    if (code_point === 0xE7C7)
        return 7457;
    // 2. Let offset be the last code point in index gb18030 ranges
    // that is equal to or less than code point and let pointer offset
    // be its corresponding pointer.
    var offset = 0;
    var pointer_offset = 0;
    var idx = index('gb18030-ranges');
    for (var i = 0; i < idx.length; ++i) {
        var idxVal = idx[i];
        /** @type {!Array.<number>} */
        var entry = getArrayVal_1.getArrayVal(idxVal);
        if (entry[1] <= code_point) {
            offset = entry[1];
            pointer_offset = entry[0];
        }
        else {
            break;
        }
    }
    // 3. Return a pointer whose value is pointer offset + code point
    // − offset.
    return pointer_offset + code_point - offset;
}
exports.indexGB18030RangesPointerFor = indexGB18030RangesPointerFor;
/**
 * @param {number} code_point The |code_point| to search for in the Shift_JIS
 *     index.
 * @return {?number} The code point corresponding to |pointer| in |index|,
 *     or null if |code point| is not in the Shift_JIS index.
 */
function indexShiftJISPointerFor(code_point) {
    // 1. Let index be index jis0208 excluding all entries whose
    // pointer is in the range 8272 to 8835, inclusive.
    shift_jis_index = shift_jis_index ||
        index('jis0208').map(function (code_point, pointer) {
            return utilities_1.inRange(pointer, 8272, 8835) ? null : code_point;
        });
    var index_ = shift_jis_index;
    // 2. Return the index pointer for code point in index.
    return index_.indexOf(code_point);
}
exports.indexShiftJISPointerFor = indexShiftJISPointerFor;
var shift_jis_index;
/**
 * @param {number} code_point The |code_point| to search for in the big5
 *     index.
 * @return {?number} The code point corresponding to |pointer| in |index|,
 *     or null if |code point| is not in the big5 index.
 */
function indexBig5PointerFor(code_point) {
    // 1. Let index be index Big5 excluding all entries whose pointer
    big5_index_no_hkscs = big5_index_no_hkscs ||
        index('big5').map(function (code_point, pointer) {
            return (pointer < (0xA1 - 0x81) * 157) ? null : code_point;
        });
    var index_ = big5_index_no_hkscs;
    // 2. If code point is U+2550, U+255E, U+2561, U+256A, U+5341, or
    // U+5345, return the last pointer corresponding to code point in
    // index.
    if (code_point === 0x2550 || code_point === 0x255E ||
        code_point === 0x2561 || code_point === 0x256A ||
        code_point === 0x5341 || code_point === 0x5345) {
        return index_.lastIndexOf(code_point);
    }
    // 3. Return the index pointer for code point in index.
    return indexPointerFor(code_point, index_);
}
exports.indexBig5PointerFor = indexBig5PointerFor;
var big5_index_no_hkscs;
//# sourceMappingURL=indexes.js.map

/***/ }),

/***/ 646:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", ({ value: true }));
__export(__webpack_require__(19));
__export(__webpack_require__(400));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 702:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", ({ value: true }));
__export(__webpack_require__(454));
__export(__webpack_require__(954));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 705:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var encodings_1 = __webpack_require__(16);
var finished_1 = __webpack_require__(870);
var indexes_1 = __webpack_require__(638);
var terminology_1 = __webpack_require__(205);
/**
 * @constructor
 * @implements {Encoder}
 * @param {!Array.<?number>} index The encoding index.
 * @param {{fatal: boolean}} options
 */
var SingleByteEncoder = /** @class */ (function () {
    function SingleByteEncoder(index, options) {
        this.index = index;
        this.fatal = options.fatal;
    }
    /**
     * @param {Stream} stream Input stream.
     * @param {number} code_point Next code point read from the stream.
     * @return {(number|!Array.<number>)} Byte(s) to emit.
     */
    SingleByteEncoder.prototype.handler = function (stream, code_point) {
        // 1. If code point is end-of-stream, return finished.
        if (code_point === terminology_1.end_of_stream)
            return finished_1.finished;
        // 2. If code point is an ASCII code point, return a byte whose
        // value is code point.
        if (terminology_1.isASCIICodePoint(code_point))
            return code_point;
        // 3. Let pointer be the index pointer for code point in index
        // single-byte.
        var pointer = indexes_1.indexPointerFor(code_point, this.index);
        // 4. If pointer is null, return error with code point.
        if (pointer === null)
            encodings_1.encoderError(code_point);
        // 5. Return a byte whose value is pointer + 0x80.
        return pointer + 0x80;
    };
    return SingleByteEncoder;
}());
exports.SingleByteEncoder = SingleByteEncoder;
//# sourceMappingURL=SingleByteEncoder.js.map

/***/ }),

/***/ 718:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var encodings_1 = __webpack_require__(16);
var finished_1 = __webpack_require__(870);
var indexes_1 = __webpack_require__(638);
var terminology_1 = __webpack_require__(205);
var states;
(function (states) {
    states[states["ASCII"] = 0] = "ASCII";
    states[states["Roman"] = 1] = "Roman";
    states[states["jis0208"] = 2] = "jis0208";
})(states || (states = {}));
/**
 * @constructor
 * @implements {Encoder}
 * @param {{fatal: boolean}} options
 */
var ISO2022JPEncoder = /** @class */ (function () {
    function ISO2022JPEncoder(options) {
        this.fatal = options.fatal;
        // iso-2022-jp's encoder has an associated iso-2022-jp encoder
        // state which is one of ASCII, Roman, and jis0208 (initially
        // ASCII).
        /** @type {number} */ this.iso2022jp_state = states.ASCII;
    }
    /**
     * @param {Stream} stream Input stream.
     * @param {number} code_point Next code point read from the stream.
     * @return {(number|!Array.<number>)} Byte(s) to emit.
     */
    ISO2022JPEncoder.prototype.handler = function (stream, code_point) {
        // 1. If code point is end-of-stream and iso-2022-jp encoder
        // state is not ASCII, prepend code point to stream, set
        // iso-2022-jp encoder state to ASCII, and return three bytes
        // 0x1B 0x28 0x42.
        if (code_point === terminology_1.end_of_stream &&
            this.iso2022jp_state !== states.ASCII) {
            stream.prepend(code_point);
            this.iso2022jp_state = states.ASCII;
            return [0x1B, 0x28, 0x42];
        }
        // 2. If code point is end-of-stream and iso-2022-jp encoder
        // state is ASCII, return finished.
        if (code_point === terminology_1.end_of_stream && this.iso2022jp_state === states.ASCII)
            return finished_1.finished;
        // 3. If ISO-2022-JP encoder state is ASCII or Roman, and code
        // point is U+000E, U+000F, or U+001B, return error with U+FFFD.
        if ((this.iso2022jp_state === states.ASCII ||
            this.iso2022jp_state === states.Roman) &&
            (code_point === 0x000E || code_point === 0x000F ||
                code_point === 0x001B)) {
            return encodings_1.encoderError(0xFFFD);
        }
        // 4. If iso-2022-jp encoder state is ASCII and code point is an
        // ASCII code point, return a byte whose value is code point.
        if (this.iso2022jp_state === states.ASCII &&
            terminology_1.isASCIICodePoint(code_point))
            return code_point;
        // 5. If iso-2022-jp encoder state is Roman and code point is an
        // ASCII code point, excluding U+005C and U+007E, or is U+00A5
        // or U+203E, run these substeps:
        if (this.iso2022jp_state === states.Roman &&
            ((terminology_1.isASCIICodePoint(code_point) &&
                code_point !== 0x005C && code_point !== 0x007E) ||
                (code_point == 0x00A5 || code_point == 0x203E))) {
            // 1. If code point is an ASCII code point, return a byte
            // whose value is code point.
            if (terminology_1.isASCIICodePoint(code_point))
                return code_point;
            // 2. If code point is U+00A5, return byte 0x5C.
            if (code_point === 0x00A5)
                return 0x5C;
            // 3. If code point is U+203E, return byte 0x7E.
            if (code_point === 0x203E)
                return 0x7E;
        }
        // 6. If code point is an ASCII code point, and iso-2022-jp
        // encoder state is not ASCII, prepend code point to stream, set
        // iso-2022-jp encoder state to ASCII, and return three bytes
        // 0x1B 0x28 0x42.
        if (terminology_1.isASCIICodePoint(code_point) &&
            this.iso2022jp_state !== states.ASCII) {
            stream.prepend(code_point);
            this.iso2022jp_state = states.ASCII;
            return [0x1B, 0x28, 0x42];
        }
        // 7. If code point is either U+00A5 or U+203E, and iso-2022-jp
        // encoder state is not Roman, prepend code point to stream, set
        // iso-2022-jp encoder state to Roman, and return three bytes
        // 0x1B 0x28 0x4A.
        if ((code_point === 0x00A5 || code_point === 0x203E) &&
            this.iso2022jp_state !== states.Roman) {
            stream.prepend(code_point);
            this.iso2022jp_state = states.Roman;
            return [0x1B, 0x28, 0x4A];
        }
        // 8. If code point is U+2212, set it to U+FF0D.
        if (code_point === 0x2212)
            code_point = 0xFF0D;
        // 9. Let pointer be the index pointer for code point in index
        // jis0208.
        var pointer = indexes_1.indexPointerFor(code_point, indexes_1.index('jis0208'));
        // 10. If pointer is null, return error with code point.
        if (pointer === null)
            return encodings_1.encoderError(code_point);
        // 11. If iso-2022-jp encoder state is not jis0208, prepend code
        // point to stream, set iso-2022-jp encoder state to jis0208,
        // and return three bytes 0x1B 0x24 0x42.
        if (this.iso2022jp_state !== states.jis0208) {
            stream.prepend(code_point);
            this.iso2022jp_state = states.jis0208;
            return [0x1B, 0x24, 0x42];
        }
        // 12. Let lead be Math.floor(pointer / 94) + 0x21.
        var lead = Math.floor(pointer / 94) + 0x21;
        // 13. Let trail be pointer % 94 + 0x21.
        var trail = pointer % 94 + 0x21;
        // 14. Return two bytes whose values are lead and trail.
        return [lead, trail];
    };
    return ISO2022JPEncoder;
}());
exports.ISO2022JPEncoder = ISO2022JPEncoder;
//# sourceMappingURL=ISO2022JPEncoder.js.map

/***/ }),

/***/ 723:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var defaultEncoding_1 = __webpack_require__(266);
var encoding_factory_1 = __webpack_require__(246);
var encodings_1 = __webpack_require__(16);
var finished_1 = __webpack_require__(870);
var terminology_1 = __webpack_require__(205);
var utilities_1 = __webpack_require__(257);
var Stream_1 = __webpack_require__(232);
/**
 * @constructor
 * @param {string=} label The label of the encoding;
 *     defaults to 'utf-8'.
 * @param {Object=} options
 */
var TextDecoder = /** @class */ (function () {
    function TextDecoder(label, options) {
        label = label !== undefined ? String(label) : defaultEncoding_1.DEFAULT_ENCODING;
        var optionsMap = utilities_1.ToDictionary(options);
        // A TextDecoder object has an associated encoding, decoder,
        // stream, ignore BOM flag (initially unset), BOM seen flag
        // (initially unset), error mode (initially replacement), and do
        // not flush flag (initially unset).
        /** @private */
        this._encoding = null;
        /** @private @type {?Decoder} */
        this._decoder = null;
        /** @private @type {boolean} */
        this._ignoreBOM = false;
        /** @private @type {boolean} */
        this._BOMseen = false;
        /** @private @type {string} */
        this._error_mode = 'replacement';
        /** @private @type {boolean} */
        this._do_not_flush = false;
        // 1. Let encoding be the result of getting an encoding from
        // label.
        var encoding = encodings_1.getEncoding(label);
        // 2. If encoding is failure or replacement, throw a RangeError.
        if (encoding === null || encoding.name === 'replacement')
            throw RangeError('Unknown encoding: ' + label);
        if (!encoding_factory_1.decoders[encoding.name]) {
            throw Error('Decoder not present.' +
                ' Did you forget to include encoding-indexes.js first?');
        }
        // 3. Let dec be a new TextDecoder object.
        // const dec = this;
        // no need to do this as this is a proper class 
        // now and TSC will handle transpilation to older platforms
        // 4. Set dec's encoding to encoding.
        this._encoding = encoding;
        // 5. If options's fatal member is true, set dec's error mode to
        // fatal.
        if (Boolean(optionsMap['fatal']))
            this._error_mode = 'fatal';
        // 6. If options's ignoreBOM member is true, set dec's ignore BOM
        // flag.
        if (Boolean(optionsMap['ignoreBOM']))
            this._ignoreBOM = true;
        // For pre-ES5 runtimes:
        // if (!Object.defineProperty) {
        //   this.encoding = dec._encoding.name.toLowerCase();
        //   this.fatal = dec._error_mode === 'fatal';
        //   this.ignoreBOM = dec._ignoreBOM;
        // }
        // 7. Return dec.
        // return dec;
    }
    Object.defineProperty(TextDecoder.prototype, "encoding", {
        // if (Object.defineProperty) {
        // The encoding attribute's getter must return encoding's name.
        //   Object.defineProperty(TextDecoder.prototype, 'encoding', {
        //     /** @this {TextDecoder} */
        //     get: function () { return this._encoding.name.toLowerCase(); }
        //   });
        get: function () {
            return this._encoding.name.toLowerCase();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextDecoder.prototype, "fatal", {
        // The fatal attribute's getter must return true if error mode
        // is fatal, and false otherwise.
        //   Object.defineProperty(TextDecoder.prototype, 'fatal', {
        //     /** @this {TextDecoder} */
        //     get: function () { return this._error_mode === 'fatal'; }
        //   });
        get: function () {
            return this._error_mode === 'fatal';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextDecoder.prototype, "ignoreBOM", {
        // The ignoreBOM attribute's getter must return true if ignore
        // BOM flag is set, and false otherwise.
        //   Object.defineProperty(TextDecoder.prototype, 'ignoreBOM', {
        //     /** @this {TextDecoder} */
        //     get: function () { return this._ignoreBOM; }
        //   });
        get: function () {
            return this._ignoreBOM;
        },
        enumerable: true,
        configurable: true
    });
    // }
    /**
     * @param {BufferSource=} input The buffer of bytes to decode.
     * @param {Object=} options
     * @return {string} The decoded string.
     */
    TextDecoder.prototype.decode = function (input, options) {
        var bytes = getBytesFromInput(input);
        var optionsMap = utilities_1.ToDictionary(options);
        // 1. If the do not flush flag is unset, set decoder to a new
        // encoding's decoder, set stream to a new stream, and unset the
        // BOM seen flag.
        if (!this._do_not_flush) {
            this._decoder = encoding_factory_1.decoders[this._encoding.name]({
                fatal: this._error_mode === 'fatal'
            });
            this._BOMseen = false;
        }
        // 2. If options's stream is true, set the do not flush flag, and
        // unset the do not flush flag otherwise.
        this._do_not_flush = Boolean(optionsMap['stream']);
        // 3. If input is given, push a copy of input to stream.
        // TODO: Align with spec algorithm - maintain stream on instance.
        var input_stream = new Stream_1.Stream(bytes);
        // 4. Let output be a new stream.
        var output = [];
        /** @type {?(number|!Array.<number>)} */
        var result;
        // 5. While true:
        while (true) {
            // 1. Let token be the result of reading from stream.
            var token = input_stream.read();
            // 2. If token is end-of-stream and the do not flush flag is
            // set, return output, serialized.
            // TODO: Align with spec algorithm.
            if (token === terminology_1.end_of_stream)
                break;
            // 3. Otherwise, run these subsubsteps:
            // 1. Let result be the result of processing token for decoder,
            // stream, output, and error mode.
            result = this._decoder.handler(input_stream, token);
            // 2. If result is finished, return output, serialized.
            if (result === finished_1.finished)
                break;
            if (result !== null) {
                if (Array.isArray(result))
                    output.push.apply(output, /**@type {!Array.<number>}*/ (result));
                else
                    output.push(result);
            }
            // 3. Otherwise, if result is error, throw a TypeError.
            // (Thrown in handler)
            // 4. Otherwise, do nothing.
        }
        // TODO: Align with spec algorithm.
        if (!this._do_not_flush) {
            do {
                result = this._decoder.handler(input_stream, input_stream.read());
                if (result === finished_1.finished)
                    break;
                if (!result)
                    continue;
                if (Array.isArray(result))
                    output.push.apply(output, /**@type {!Array.<number>}*/ (result));
                else
                    output.push(result);
            } while (!input_stream.endOfStream());
            this._decoder = null;
        }
        return this.serializeStream(output);
    };
    // A TextDecoder object also has an associated serialize stream
    // algorithm...
    /**
     * @param {!Array.<number>} stream
     * @return {string}
     * @this {TextDecoder}
     */
    TextDecoder.prototype.serializeStream = function (stream) {
        // 1. Let token be the result of reading from stream.
        // (Done in-place on array, rather than as a stream)
        // 2. If encoding is UTF-8, UTF-16BE, or UTF-16LE, and ignore
        // BOM flag and BOM seen flag are unset, run these subsubsteps:
        if (utilities_1.includes(['UTF-8', 'UTF-16LE', 'UTF-16BE'], this._encoding.name) &&
            !this._ignoreBOM && !this._BOMseen) {
            if (stream.length > 0 && stream[0] === 0xFEFF) {
                // 1. If token is U+FEFF, set BOM seen flag.
                this._BOMseen = true;
                stream.shift();
            }
            else if (stream.length > 0) {
                // 2. Otherwise, if token is not end-of-stream, set BOM seen
                // flag and append token to stream.
                this._BOMseen = true;
            }
            else {
                // 3. Otherwise, if token is not end-of-stream, append token
                // to output.
                // (no-op)
            }
        }
        // 4. Otherwise, return output.
        return utilities_1.codePointsToString(stream);
    };
    return TextDecoder;
}());
exports.TextDecoder = TextDecoder;
function isBufferInstance(input) {
    try {
        return input instanceof ArrayBuffer;
    }
    catch (e) {
        console.error(e);
        return false;
    }
}
function getBytesFromInput(input) {
    if (typeof input !== 'object')
        return new Uint8Array(0);
    if (isBufferInstance(input)) {
        return new Uint8Array(input);
    }
    if ('buffer' in input && isBufferInstance(input.buffer)) {
        return new Uint8Array(input.buffer, input.byteOffset, input.byteLength);
    }
    return new Uint8Array(0);
}
//# sourceMappingURL=TextDecoder.js.map

/***/ }),

/***/ 812:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var encodings_1 = __webpack_require__(16);
var finished_1 = __webpack_require__(870);
var indexes_1 = __webpack_require__(638);
var terminology_1 = __webpack_require__(205);
var utilities_1 = __webpack_require__(257);
/**
 * @constructor
 * @implements {Decoder}
 * @param {{fatal: boolean}} options
 */
var GB18030Decoder = /** @class */ (function () {
    function GB18030Decoder(options) {
        this.fatal = options.fatal;
        // gb18030's decoder has an associated gb18030 first, gb18030
        // second, and gb18030 third (all initially 0x00).
        /** @type {number} */ this.gb18030_first = 0x00,
            /** @type {number} */ this.gb18030_second = 0x00,
            /** @type {number} */ this.gb18030_third = 0x00;
    }
    /**
     * @param {Stream} stream The stream of bytes being decoded.
     * @param {number} bite The next byte read from the stream.
     * @return {?(number|!Array.<number>)} The next code point(s)
     *     decoded, or null if not enough data exists in the input
     *     stream to decode a complete code point.
     */
    GB18030Decoder.prototype.handler = function (stream, bite) {
        // 1. If byte is end-of-stream and gb18030 first, gb18030
        // second, and gb18030 third are 0x00, return finished.
        if (bite === terminology_1.end_of_stream && this.gb18030_first === 0x00 &&
            this.gb18030_second === 0x00 && this.gb18030_third === 0x00) {
            return finished_1.finished;
        }
        // 2. If byte is end-of-stream, and gb18030 first, gb18030
        // second, or gb18030 third is not 0x00, set gb18030 first,
        // gb18030 second, and gb18030 third to 0x00, and return error.
        if (bite === terminology_1.end_of_stream &&
            (this.gb18030_first !== 0x00 || this.gb18030_second !== 0x00 ||
                this.gb18030_third !== 0x00)) {
            this.gb18030_first = 0x00;
            this.gb18030_second = 0x00;
            this.gb18030_third = 0x00;
            encodings_1.decoderError(this.fatal);
        }
        var code_point;
        // 3. If gb18030 third is not 0x00, run these substeps:
        if (this.gb18030_third !== 0x00) {
            // 1. Let code point be null.
            code_point = null;
            // 2. If byte is in the range 0x30 to 0x39, inclusive, set
            // code point to the index gb18030 ranges code point for
            // (((gb18030 first − 0x81) × 10 + gb18030 second − 0x30) ×
            // 126 + gb18030 third − 0x81) × 10 + byte − 0x30.
            if (utilities_1.inRange(bite, 0x30, 0x39)) {
                code_point = indexes_1.indexGB18030RangesCodePointFor((((this.gb18030_first - 0x81) * 10 + this.gb18030_second - 0x30) * 126 +
                    this.gb18030_third - 0x81) * 10 + bite - 0x30);
            }
            // 3. Let buffer be a byte sequence consisting of gb18030
            // second, gb18030 third, and byte, in order.
            var buffer = [this.gb18030_second, this.gb18030_third, bite];
            // 4. Set gb18030 first, gb18030 second, and gb18030 third to
            // 0x00.
            this.gb18030_first = 0x00;
            this.gb18030_second = 0x00;
            this.gb18030_third = 0x00;
            // 5. If code point is null, prepend buffer to stream and
            // return error.
            if (code_point === null) {
                stream.prepend(buffer);
                return encodings_1.decoderError(this.fatal);
            }
            // 6. Return a code point whose value is code point.
            return code_point;
        }
        // 4. If gb18030 second is not 0x00, run these substeps:
        if (this.gb18030_second !== 0x00) {
            // 1. If byte is in the range 0x81 to 0xFE, inclusive, set
            // gb18030 third to byte and return continue.
            if (utilities_1.inRange(bite, 0x81, 0xFE)) {
                this.gb18030_third = bite;
                return null;
            }
            // 2. Prepend gb18030 second followed by byte to stream, set
            // gb18030 first and gb18030 second to 0x00, and return error.
            stream.prepend([this.gb18030_second, bite]);
            this.gb18030_first = 0x00;
            this.gb18030_second = 0x00;
            return encodings_1.decoderError(this.fatal);
        }
        // 5. If gb18030 first is not 0x00, run these substeps:
        if (this.gb18030_first !== 0x00) {
            // 1. If byte is in the range 0x30 to 0x39, inclusive, set
            // gb18030 second to byte and return continue.
            if (utilities_1.inRange(bite, 0x30, 0x39)) {
                this.gb18030_second = bite;
                return null;
            }
            // 2. Let lead be gb18030 first, let pointer be null, and set
            // gb18030 first to 0x00.
            var lead = this.gb18030_first;
            var pointer = null;
            this.gb18030_first = 0x00;
            // 3. Let offset be 0x40 if byte is less than 0x7F and 0x41
            // otherwise.
            var offset = bite < 0x7F ? 0x40 : 0x41;
            // 4. If byte is in the range 0x40 to 0x7E, inclusive, or 0x80
            // to 0xFE, inclusive, set pointer to (lead − 0x81) × 190 +
            // (byte − offset).
            if (utilities_1.inRange(bite, 0x40, 0x7E) || utilities_1.inRange(bite, 0x80, 0xFE))
                pointer = (lead - 0x81) * 190 + (bite - offset);
            // 5. Let code point be null if pointer is null and the index
            // code point for pointer in index gb18030 otherwise.
            code_point = pointer === null ? null :
                indexes_1.indexCodePointFor(pointer, indexes_1.index('gb18030'));
            // 6. If code point is null and byte is an ASCII byte, prepend
            // byte to stream.
            if (code_point === null && terminology_1.isASCIIByte(bite))
                stream.prepend(bite);
            // 7. If code point is null, return error.
            if (code_point === null)
                return encodings_1.decoderError(this.fatal);
            // 8. Return a code point whose value is code point.
            return code_point;
        }
        // 6. If byte is an ASCII byte, return a code point whose value
        // is byte.
        if (terminology_1.isASCIIByte(bite))
            return bite;
        // 7. If byte is 0x80, return code point U+20AC.
        if (bite === 0x80)
            return 0x20AC;
        // 8. If byte is in the range 0x81 to 0xFE, inclusive, set
        // gb18030 first to byte and return continue.
        if (utilities_1.inRange(bite, 0x81, 0xFE)) {
            this.gb18030_first = bite;
            return null;
        }
        // 9. Return error.
        return encodings_1.decoderError(this.fatal);
    };
    return GB18030Decoder;
}());
exports.GB18030Decoder = GB18030Decoder;
//# sourceMappingURL=GB18030Decoder.js.map

/***/ }),

/***/ 817:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", ({ value: true }));
__export(__webpack_require__(247));
__export(__webpack_require__(911));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 821:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", ({ value: true }));
__export(__webpack_require__(103));
__export(__webpack_require__(535));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 870:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
// 5.1 Encoders and decoders
/** @const */
exports.finished = -1;
//# sourceMappingURL=finished.js.map

/***/ }),

/***/ 888:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var encodings_1 = __webpack_require__(16);
var finished_1 = __webpack_require__(870);
var indexes_1 = __webpack_require__(638);
var terminology_1 = __webpack_require__(205);
/**
   * @constructor
   * @implements {Encoder}
   * @param {{fatal: boolean}} options
   */
var Big5Encoder = /** @class */ (function () {
    function Big5Encoder(options) {
        this.fatal = options.fatal;
    }
    /**
     * @param {Stream} stream Input stream.
     * @param {number} code_point Next code point read from the stream.
     * @return {(number|!Array.<number>)} Byte(s) to emit.
     */
    Big5Encoder.prototype.handler = function (stream, code_point) {
        // 1. If code point is end-of-stream, return finished.
        if (code_point === terminology_1.end_of_stream)
            return finished_1.finished;
        // 2. If code point is an ASCII code point, return a byte whose
        // value is code point.
        if (terminology_1.isASCIICodePoint(code_point))
            return code_point;
        // 3. Let pointer be the index Big5 pointer for code point.
        var pointer = indexes_1.indexBig5PointerFor(code_point);
        // 4. If pointer is null, return error with code point.
        if (pointer === null)
            return encodings_1.encoderError(code_point);
        // 5. Let lead be Math.floor(pointer / 157) + 0x81.
        var lead = Math.floor(pointer / 157) + 0x81;
        // 6. If lead is less than 0xA1, return error with code point.
        if (lead < 0xA1)
            return encodings_1.encoderError(code_point);
        // 7. Let trail be pointer % 157.
        var trail = pointer % 157;
        // 8. Let offset be 0x40 if trail is less than 0x3F and 0x62
        // otherwise.
        var offset = trail < 0x3F ? 0x40 : 0x62;
        // Return two bytes whose values are lead and trail + offset.
        return [lead, trail + offset];
    };
    return Big5Encoder;
}());
exports.Big5Encoder = Big5Encoder;
//# sourceMappingURL=Big5Encoder.js.map

/***/ }),

/***/ 898:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var encodings_1 = __webpack_require__(16);
var finished_1 = __webpack_require__(870);
var indexes_1 = __webpack_require__(638);
var terminology_1 = __webpack_require__(205);
var utilities_1 = __webpack_require__(257);
var states;
(function (states) {
    states[states["ASCII"] = 0] = "ASCII";
    states[states["Roman"] = 1] = "Roman";
    states[states["Katakana"] = 2] = "Katakana";
    states[states["LeadByte"] = 3] = "LeadByte";
    states[states["TrailByte"] = 4] = "TrailByte";
    states[states["EscapeStart"] = 5] = "EscapeStart";
    states[states["Escape"] = 6] = "Escape";
})(states || (states = {}));
var ISO2022JPDecoder = /** @class */ (function () {
    /**
     * @constructor
     * @implements {Decoder}
     * @param {{fatal: boolean}} options
     */
    function ISO2022JPDecoder(options) {
        this.fatal = options.fatal;
        // iso-2022-jp's decoder has an associated iso-2022-jp decoder
        // state (initially ASCII), iso-2022-jp decoder output state
        // (initially ASCII), iso-2022-jp lead (initially 0x00), and
        // iso-2022-jp output flag (initially unset).
        /** @type {number} */ this.iso2022jp_decoder_state = states.ASCII,
            /** @type {number} */ this.iso2022jp_decoder_output_state = states.ASCII,
            /** @type {number} */ this.iso2022jp_lead = 0x00,
            /** @type {boolean} */ this.iso2022jp_output_flag = false;
    }
    /**
     * @param {Stream} stream The stream of bytes being decoded.
     * @param {number} bite The next byte read from the stream.
     * @return {?(number|!Array.<number>)} The next code point(s)
     *     decoded, or null if not enough data exists in the input
     *     stream to decode a complete code point.
     */
    ISO2022JPDecoder.prototype.handler = function (stream, bite) {
        // switching on iso-2022-jp decoder state:
        switch (this.iso2022jp_decoder_state) {
            default:
            case states.ASCII:
                // ASCII
                // Based on byte:
                // 0x1B
                if (bite === 0x1B) {
                    // Set iso-2022-jp decoder state to escape start and return
                    // continue.
                    this.iso2022jp_decoder_state = states.EscapeStart;
                    return null;
                }
                // 0x00 to 0x7F, excluding 0x0E, 0x0F, and 0x1B
                if (utilities_1.inRange(bite, 0x00, 0x7F) && bite !== 0x0E
                    && bite !== 0x0F && bite !== 0x1B) {
                    // Unset the iso-2022-jp output flag and return a code point
                    // whose value is byte.
                    this.iso2022jp_output_flag = false;
                    return bite;
                }
                // end-of-stream
                if (bite === terminology_1.end_of_stream) {
                    // Return finished.
                    return finished_1.finished;
                }
                // Otherwise
                // Unset the iso-2022-jp output flag and return error.
                this.iso2022jp_output_flag = false;
                return encodings_1.decoderError(this.fatal);
            case states.Roman:
                // Roman
                // Based on byte:
                // 0x1B
                if (bite === 0x1B) {
                    // Set iso-2022-jp decoder state to escape start and return
                    // continue.
                    this.iso2022jp_decoder_state = states.EscapeStart;
                    return null;
                }
                // 0x5C
                if (bite === 0x5C) {
                    // Unset the iso-2022-jp output flag and return code point
                    // U+00A5.
                    this.iso2022jp_output_flag = false;
                    return 0x00A5;
                }
                // 0x7E
                if (bite === 0x7E) {
                    // Unset the iso-2022-jp output flag and return code point
                    // U+203E.
                    this.iso2022jp_output_flag = false;
                    return 0x203E;
                }
                // 0x00 to 0x7F, excluding 0x0E, 0x0F, 0x1B, 0x5C, and 0x7E
                if (utilities_1.inRange(bite, 0x00, 0x7F) && bite !== 0x0E && bite !== 0x0F
                    && bite !== 0x1B && bite !== 0x5C && bite !== 0x7E) {
                    // Unset the iso-2022-jp output flag and return a code point
                    // whose value is byte.
                    this.iso2022jp_output_flag = false;
                    return bite;
                }
                // end-of-stream
                if (bite === terminology_1.end_of_stream) {
                    // Return finished.
                    return finished_1.finished;
                }
                // Otherwise
                // Unset the iso-2022-jp output flag and return error.
                this.iso2022jp_output_flag = false;
                return encodings_1.decoderError(this.fatal);
            case states.Katakana:
                // Katakana
                // Based on byte:
                // 0x1B
                if (bite === 0x1B) {
                    // Set iso-2022-jp decoder state to escape start and return
                    // continue.
                    this.iso2022jp_decoder_state = states.EscapeStart;
                    return null;
                }
                // 0x21 to 0x5F
                if (utilities_1.inRange(bite, 0x21, 0x5F)) {
                    // Unset the iso-2022-jp output flag and return a code point
                    // whose value is 0xFF61 − 0x21 + byte.
                    this.iso2022jp_output_flag = false;
                    return 0xFF61 - 0x21 + bite;
                }
                // end-of-stream
                if (bite === terminology_1.end_of_stream) {
                    // Return finished.
                    return finished_1.finished;
                }
                // Otherwise
                // Unset the iso-2022-jp output flag and return error.
                this.iso2022jp_output_flag = false;
                return encodings_1.decoderError(this.fatal);
            case states.LeadByte:
                // Lead byte
                // Based on byte:
                // 0x1B
                if (bite === 0x1B) {
                    // Set iso-2022-jp decoder state to escape start and return
                    // continue.
                    this.iso2022jp_decoder_state = states.EscapeStart;
                    return null;
                }
                // 0x21 to 0x7E
                if (utilities_1.inRange(bite, 0x21, 0x7E)) {
                    // Unset the iso-2022-jp output flag, set iso-2022-jp lead
                    // to byte, iso-2022-jp decoder state to trail byte, and
                    // return continue.
                    this.iso2022jp_output_flag = false;
                    this.iso2022jp_lead = bite;
                    this.iso2022jp_decoder_state = states.TrailByte;
                    return null;
                }
                // end-of-stream
                if (bite === terminology_1.end_of_stream) {
                    // Return finished.
                    return finished_1.finished;
                }
                // Otherwise
                // Unset the iso-2022-jp output flag and return error.
                this.iso2022jp_output_flag = false;
                return encodings_1.decoderError(this.fatal);
            case states.TrailByte:
                // Trail byte
                // Based on byte:
                // 0x1B
                if (bite === 0x1B) {
                    // Set iso-2022-jp decoder state to escape start and return
                    // continue.
                    this.iso2022jp_decoder_state = states.EscapeStart;
                    return encodings_1.decoderError(this.fatal);
                }
                // 0x21 to 0x7E
                if (utilities_1.inRange(bite, 0x21, 0x7E)) {
                    // 1. Set the iso-2022-jp decoder state to lead byte.
                    this.iso2022jp_decoder_state = states.LeadByte;
                    // 2. Let pointer be (iso-2022-jp lead − 0x21) × 94 + byte − 0x21.
                    var pointer = (this.iso2022jp_lead - 0x21) * 94 + bite - 0x21;
                    // 3. Let code point be the index code point for pointer in
                    // index jis0208.
                    var code_point = indexes_1.indexCodePointFor(pointer, indexes_1.index('jis0208'));
                    // 4. If code point is null, return error.
                    if (code_point === null)
                        return encodings_1.decoderError(this.fatal);
                    // 5. Return a code point whose value is code point.
                    return code_point;
                }
                // end-of-stream
                if (bite === terminology_1.end_of_stream) {
                    // Set the iso-2022-jp decoder state to lead byte, prepend
                    // byte to stream, and return error.
                    this.iso2022jp_decoder_state = states.LeadByte;
                    stream.prepend(bite);
                    return encodings_1.decoderError(this.fatal);
                }
                // Otherwise
                // Set iso-2022-jp decoder state to lead byte and return
                // error.
                this.iso2022jp_decoder_state = states.LeadByte;
                return encodings_1.decoderError(this.fatal);
            case states.EscapeStart:
                // Escape start
                // 1. If byte is either 0x24 or 0x28, set iso-2022-jp lead to
                // byte, iso-2022-jp decoder state to escape, and return
                // continue.
                if (bite === 0x24 || bite === 0x28) {
                    this.iso2022jp_lead = bite;
                    this.iso2022jp_decoder_state = states.Escape;
                    return null;
                }
                // 2. Prepend byte to stream.
                stream.prepend(bite);
                // 3. Unset the iso-2022-jp output flag, set iso-2022-jp
                // decoder state to iso-2022-jp decoder output state, and
                // return error.
                this.iso2022jp_output_flag = false;
                this.iso2022jp_decoder_state = this.iso2022jp_decoder_output_state;
                return encodings_1.decoderError(this.fatal);
            case states.Escape:
                // Escape
                // 1. Let lead be iso-2022-jp lead and set iso-2022-jp lead to
                // 0x00.
                var lead = this.iso2022jp_lead;
                this.iso2022jp_lead = 0x00;
                // 2. Let state be null.
                var state = null;
                // 3. If lead is 0x28 and byte is 0x42, set state to ASCII.
                if (lead === 0x28 && bite === 0x42)
                    state = states.ASCII;
                // 4. If lead is 0x28 and byte is 0x4A, set state to Roman.
                if (lead === 0x28 && bite === 0x4A)
                    state = states.Roman;
                // 5. If lead is 0x28 and byte is 0x49, set state to Katakana.
                if (lead === 0x28 && bite === 0x49)
                    state = states.Katakana;
                // 6. If lead is 0x24 and byte is either 0x40 or 0x42, set
                // state to lead byte.
                if (lead === 0x24 && (bite === 0x40 || bite === 0x42))
                    state = states.LeadByte;
                // 7. If state is non-null, run these substeps:
                if (state !== null) {
                    // 1. Set iso-2022-jp decoder state and iso-2022-jp decoder
                    // output state to states.
                    this.iso2022jp_decoder_state = this.iso2022jp_decoder_state = state;
                    // 2. Let output flag be the iso-2022-jp output flag.
                    var output_flag = this.iso2022jp_output_flag;
                    // 3. Set the iso-2022-jp output flag.
                    this.iso2022jp_output_flag = true;
                    // 4. Return continue, if output flag is unset, and error
                    // otherwise.
                    return !output_flag ? null : encodings_1.decoderError(this.fatal);
                }
                // 8. Prepend lead and byte to stream.
                stream.prepend([lead, bite]);
                // 9. Unset the iso-2022-jp output flag, set iso-2022-jp
                // decoder state to iso-2022-jp decoder output state and
                // return error.
                this.iso2022jp_output_flag = false;
                this.iso2022jp_decoder_state = this.iso2022jp_decoder_output_state;
                return encodings_1.decoderError(this.fatal);
        }
    };
    return ISO2022JPDecoder;
}());
exports.ISO2022JPDecoder = ISO2022JPDecoder;
//# sourceMappingURL=ISO2022JPDecoder.js.map

/***/ }),

/***/ 911:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var encodings_1 = __webpack_require__(16);
var finished_1 = __webpack_require__(870);
var indexes_1 = __webpack_require__(638);
var terminology_1 = __webpack_require__(205);
var utilities_1 = __webpack_require__(257);
/**
 * @constructor
 * @implements {Encoder}
 * @param {{fatal: boolean}} options
 */
var ShiftJISEncoder = /** @class */ (function () {
    function ShiftJISEncoder(options) {
        this.fatal = options.fatal;
    }
    /**
     * @param {Stream} stream Input stream.
     * @param {number} code_point Next code point read from the stream.
     * @return {(number|!Array.<number>)} Byte(s) to emit.
     */
    ShiftJISEncoder.prototype.handler = function (stream, code_point) {
        // 1. If code point is end-of-stream, return finished.
        if (code_point === terminology_1.end_of_stream)
            return finished_1.finished;
        // 2. If code point is an ASCII code point or U+0080, return a
        // byte whose value is code point.
        if (terminology_1.isASCIICodePoint(code_point) || code_point === 0x0080)
            return code_point;
        // 3. If code point is U+00A5, return byte 0x5C.
        if (code_point === 0x00A5)
            return 0x5C;
        // 4. If code point is U+203E, return byte 0x7E.
        if (code_point === 0x203E)
            return 0x7E;
        // 5. If code point is in the range U+FF61 to U+FF9F, inclusive,
        // return a byte whose value is code point − 0xFF61 + 0xA1.
        if (utilities_1.inRange(code_point, 0xFF61, 0xFF9F))
            return code_point - 0xFF61 + 0xA1;
        // 6. If code point is U+2212, set it to U+FF0D.
        if (code_point === 0x2212)
            code_point = 0xFF0D;
        // 7. Let pointer be the index Shift_JIS pointer for code point.
        var pointer = indexes_1.indexShiftJISPointerFor(code_point);
        // 8. If pointer is null, return error with code point.
        if (pointer === null)
            return encodings_1.encoderError(code_point);
        // 9. Let lead be Math.floor(pointer / 188).
        var lead = Math.floor(pointer / 188);
        // 10. Let lead offset be 0x81, if lead is less than 0x1F, and
        // 0xC1 otherwise.
        var lead_offset = (lead < 0x1F) ? 0x81 : 0xC1;
        // 11. Let trail be pointer % 188.
        var trail = pointer % 188;
        // 12. Let offset be 0x40, if trail is less than 0x3F, and 0x41
        // otherwise.
        var offset = (trail < 0x3F) ? 0x40 : 0x41;
        // 13. Return two bytes whose values are lead + lead offset and
        // trail + offset.
        return [lead + lead_offset, trail + offset];
    };
    return ShiftJISEncoder;
}());
exports.ShiftJISEncoder = ShiftJISEncoder;
//# sourceMappingURL=ShiftJISEncoder.js.map

/***/ }),

/***/ 954:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var encodings_1 = __webpack_require__(16);
var finished_1 = __webpack_require__(870);
var terminology_1 = __webpack_require__(205);
var utilities_1 = __webpack_require__(257);
/**
 * @constructor
 * @implements {Encoder}
 * @param {{fatal: boolean}} options
 */
var XUserDefinedEncoder = /** @class */ (function () {
    function XUserDefinedEncoder(options) {
        this.fatal = options.fatal;
    }
    /**
     * @param {Stream} stream Input stream.
     * @param {number} code_point Next code point read from the stream.
     * @return {(number|!Array.<number>)} Byte(s) to emit.
     */
    XUserDefinedEncoder.prototype.handler = function (stream, code_point) {
        // 1.If code point is end-of-stream, return finished.
        if (code_point === terminology_1.end_of_stream)
            return finished_1.finished;
        // 2. If code point is an ASCII code point, return a byte whose
        // value is code point.
        if (terminology_1.isASCIICodePoint(code_point))
            return code_point;
        // 3. If code point is in the range U+F780 to U+F7FF, inclusive,
        // return a byte whose value is code point − 0xF780 + 0x80.
        if (utilities_1.inRange(code_point, 0xF780, 0xF7FF))
            return code_point - 0xF780 + 0x80;
        // 4. Return error with code point.
        return encodings_1.encoderError(code_point);
    };
    return XUserDefinedEncoder;
}());
exports.XUserDefinedEncoder = XUserDefinedEncoder;
//# sourceMappingURL=XUserDefinedEncoder.js.map

/***/ }),

/***/ 962:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", ({ value: true }));
__export(__webpack_require__(435));
__export(__webpack_require__(555));
//# sourceMappingURL=index.js.map

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  MainApplet: () => (/* binding */ MainApplet),
  main: () => (/* binding */ main)
});

;// ./src/settings.ts
const { AppletSettings, BindingDirection } = imports.ui.settings;
class Settings {
    constructor(uuid, instanceId) {
        this.state = {};
        this.changed = false;
        this.settings = new AppletSettings(this.state, uuid, instanceId);
        this.bindSettings();
    }
    bindSettings() {
        this.settings.bindProperty(BindingDirection.IN, 'host', 'host', (arg) => this.onSettingsChanged(arg), "");
        this.settings.bindProperty(BindingDirection.IN, 'port', 'port', (arg) => this.onSettingsChanged(arg), "8002");
        this.settings.bindProperty(BindingDirection.IN, 'name', 'name', (arg) => this.onSettingsChanged(arg), "SamsungTvRemote");
        this.settings.bindProperty(BindingDirection.BIDIRECTIONAL, 'token', 'token', (arg) => this.onSettingsChanged(arg), "");
        this.settings.bindProperty(BindingDirection.IN, 'mac', 'mac', undefined, "");
    }
    onSettingsChanged(arg) {
        this.changed = true;
        if (typeof this.handleOnSettingsChanged === "function") {
            this.handleOnSettingsChanged(arg);
        }
    }
}

;// ./src/ui/remote-menu/remote-button.ts
const St = imports.gi.St;
const { GObject } = imports.gi;
const RemoteKeyButton = GObject.registerClass(class RemoteKeyButton extends St.Button {
    constructor(params) {
        const { style_class, controller, key, ...options } = params;
        super(options);
        if (controller) {
            this.controller = controller;
        }
        this.key = key;
        this.connect("clicked", () => {
            if (this.controller) {
                this.controller.sendKey(this.key);
            }
        });
        this.set_x_expand(true);
        this.set_style_class_name(`remote-menu__button ${style_class !== null && style_class !== void 0 ? style_class : ''}`);
    }
    setController(controller) {
        this.controller = controller;
    }
});
const RemoteWakeButton = GObject.registerClass(class RemoteWakeButton extends St.Button {
    constructor(params) {
        const { style_class, controller, ...options } = params;
        super(options);
        if (controller) {
            this.controller = controller;
        }
        this.connect("clicked", () => {
            if (this.controller) {
                this.controller.wakeUpDevice();
            }
        });
        this.set_x_expand(true);
        this.set_style_class_name(`remote-menu__button ${style_class !== null && style_class !== void 0 ? style_class : ''}`);
    }
    setController(controller) {
        this.controller = controller;
    }
});

;// ./src/types/index.ts
var ControllerKey;
(function (ControllerKey) {
    ControllerKey["POWER"] = "KEY_POWER";
    ControllerKey["HOME"] = "KEY_HOME";
    ControllerKey["MENU"] = "KEY_MENU";
    ControllerKey["SOURCE"] = "KEY_SOURCE";
    ControllerKey["GUIDE"] = "KEY_GUIDE";
    ControllerKey["TOOLS"] = "KEY_TOOLS";
    ControllerKey["INFO"] = "KEY_INFO";
    ControllerKey["UP"] = "KEY_UP";
    ControllerKey["DOWN"] = "KEY_DOWN";
    ControllerKey["LEFT"] = "KEY_LEFT";
    ControllerKey["RIGHT"] = "KEY_RIGHT";
    ControllerKey["ENTER"] = "KEY_ENTER";
    ControllerKey["BACK"] = "KEY_RETURN";
    ControllerKey["EXIT"] = "KEY_EXIT";
    ControllerKey["CH_LIST"] = "KEY_CH_LIST";
    ControllerKey["CH_UP"] = "KEY_CHUP";
    ControllerKey["CH_DOWN"] = "KEY_CHDOWN";
    ControllerKey["VOL_UP"] = "KEY_VOLUP";
    ControllerKey["VOL_DOWN"] = "KEY_VOLDOWN";
    ControllerKey["MUTE"] = "KEY_MUTE";
    ControllerKey["RED"] = "KEY_RED";
    ControllerKey["GREEN"] = "KEY_GREEN";
    ControllerKey["YELLOW"] = "KEY_YELLOW";
    ControllerKey["BLUE"] = "KEY_BLUE";
    ControllerKey["D_0"] = "KEY_0";
    ControllerKey["D_1"] = "KEY_1";
    ControllerKey["D_2"] = "KEY_2";
    ControllerKey["D_3"] = "KEY_3";
    ControllerKey["D_4"] = "KEY_4";
    ControllerKey["D_5"] = "KEY_5";
    ControllerKey["D_6"] = "KEY_6";
    ControllerKey["D_7"] = "KEY_7";
    ControllerKey["D_8"] = "KEY_8";
    ControllerKey["D_9"] = "KEY_9";
})(ControllerKey || (ControllerKey = {}));

;// ./src/ui/remote-menu/remote-layout.ts


const BUTTONS = {
    ON: new RemoteWakeButton({ label: "ON", style_class: 'remote-menu__button--green' }),
    OFF: new RemoteKeyButton({ key: ControllerKey.POWER, label: "OFF", style_class: 'remote-menu__button--red' }),
    SOURCE: new RemoteKeyButton({ key: ControllerKey.SOURCE, label: "SOURCE" }),
    DIGIT_1: new RemoteKeyButton({ key: ControllerKey.D_1, label: "1" }),
    DIGIT_2: new RemoteKeyButton({ key: ControllerKey.D_2, label: "2" }),
    DIGIT_3: new RemoteKeyButton({ key: ControllerKey.D_3, label: "3" }),
    DIGIT_4: new RemoteKeyButton({ key: ControllerKey.D_4, label: "4" }),
    DIGIT_5: new RemoteKeyButton({ key: ControllerKey.D_5, label: "5" }),
    DIGIT_6: new RemoteKeyButton({ key: ControllerKey.D_6, label: "6" }),
    DIGIT_7: new RemoteKeyButton({ key: ControllerKey.D_7, label: "7" }),
    DIGIT_8: new RemoteKeyButton({ key: ControllerKey.D_8, label: "8" }),
    DIGIT_9: new RemoteKeyButton({ key: ControllerKey.D_9, label: "9" }),
    DIGIT_0: new RemoteKeyButton({ key: ControllerKey.D_0, label: "0" }),
    VOL_UP: new RemoteKeyButton({ key: ControllerKey.VOL_UP, label: "VOL +" }),
    MUTE: new RemoteKeyButton({ key: ControllerKey.MUTE, label: "MUTE" }),
    CH_UP: new RemoteKeyButton({ key: ControllerKey.CH_UP, label: "CH +" }),
    VOL_DOWN: new RemoteKeyButton({ key: ControllerKey.VOL_DOWN, label: "VOL -" }),
    CH_LIST: new RemoteKeyButton({ key: ControllerKey.CH_LIST, label: "CH LIST" }),
    CH_DOWN: new RemoteKeyButton({ key: ControllerKey.CH_DOWN, label: "CH -" }),
    MENU: new RemoteKeyButton({ key: ControllerKey.MENU, label: "MENU" }),
    HOME: new RemoteKeyButton({ key: ControllerKey.HOME, label: "HOME" }),
    GUIDE: new RemoteKeyButton({ key: ControllerKey.GUIDE, label: "GUIDE" }),
    TOOLS: new RemoteKeyButton({ key: ControllerKey.TOOLS, label: "TOOLS" }),
    UP: new RemoteKeyButton({ key: ControllerKey.UP, label: "▲" }),
    INFO: new RemoteKeyButton({ key: ControllerKey.INFO, label: "INFO" }),
    LEFT: new RemoteKeyButton({ key: ControllerKey.LEFT, label: "◄" }),
    OK: new RemoteKeyButton({ key: ControllerKey.ENTER, label: "ENTER" }),
    RIGHT: new RemoteKeyButton({ key: ControllerKey.RIGHT, label: "►" }),
    RETURN: new RemoteKeyButton({ key: ControllerKey.BACK, label: "BACK" }),
    DOWN: new RemoteKeyButton({ key: ControllerKey.DOWN, label: "▼" }),
    EXIT: new RemoteKeyButton({ key: ControllerKey.EXIT, label: "EXIT" }),
    A: new RemoteKeyButton({ key: ControllerKey.RED, label: "A", style_class: 'remote-menu__button--red' }),
    B: new RemoteKeyButton({ key: ControllerKey.GREEN, label: "B", style_class: 'remote-menu__button--green' }),
    C: new RemoteKeyButton({ key: ControllerKey.YELLOW, label: "C", style_class: 'remote-menu__button--yellow' }),
    D: new RemoteKeyButton({ key: ControllerKey.BLUE, label: "D", style_class: 'remote-menu__button--blue' }),
};
const BUTTON_LAYOUT = [
    [BUTTONS.ON, BUTTONS.OFF, BUTTONS.SOURCE],
    [BUTTONS.DIGIT_1, BUTTONS.DIGIT_2, BUTTONS.DIGIT_3],
    [BUTTONS.DIGIT_4, BUTTONS.DIGIT_5, BUTTONS.DIGIT_6],
    [BUTTONS.DIGIT_7, BUTTONS.DIGIT_8, BUTTONS.DIGIT_9],
    [null, BUTTONS.DIGIT_0, null],
    [BUTTONS.VOL_UP, BUTTONS.MUTE, BUTTONS.CH_UP],
    [BUTTONS.VOL_DOWN, BUTTONS.CH_LIST, BUTTONS.CH_DOWN],
    [BUTTONS.MENU, BUTTONS.HOME, BUTTONS.GUIDE],
    [BUTTONS.TOOLS, BUTTONS.UP, BUTTONS.INFO],
    [BUTTONS.LEFT, BUTTONS.OK, BUTTONS.RIGHT],
    [BUTTONS.RETURN, BUTTONS.DOWN, BUTTONS.EXIT],
    [BUTTONS.A, BUTTONS.B, BUTTONS.C, BUTTONS.D],
];

;// ./src/ui/remote-menu/remote-menu.ts
const { AppletPopupMenu } = imports.ui.applet;
const remote_menu_St = imports.gi.St;
const Clutter = imports.gi.Clutter;

class RemoteMenu extends AppletPopupMenu {
    constructor(launcher, side, controller) {
        super(launcher, side);
        this.controller = controller;
        this.setupUI();
    }
    setupUI() {
        this.box.set_style_class_name('remote-menu');
        const container = new remote_menu_St.Widget({
            layout_manager: new Clutter.BoxLayout({
                orientation: Clutter.Orientation.VERTICAL,
                spacing: 4
            })
        });
        for (let buttons of BUTTON_LAYOUT) {
            const row = new Clutter.Actor({
                layout_manager: new Clutter.BoxLayout({
                    orientation: Clutter.Orientation.HORIZONTAL,
                    homogeneous: true,
                    spacing: 4
                }),
                x_expand: true,
            });
            for (let button of buttons) {
                if (button === null) {
                    row.add_child(new Clutter.Actor());
                    continue;
                }
                button.setController(this.controller);
                row.add_child(button);
            }
            container.add_child(row);
        }
        this.addActor(container);
    }
}

;// ./src/ui/remote-menu/index.ts


;// ./src/ui/index.ts


// EXTERNAL MODULE: ./node_modules/@zxing/text-encoding/cjs/encoding.js
var encoding = __webpack_require__(81);
;// ./src/config.ts
const CONFIG = {
    UUID: 'samsung-tv-controller@BencePasztor'
};
/* harmony default export */ const config = (CONFIG);

;// ./src/utils/logger.ts

const { UUID } = config;
class Logger {
    contructor() { }
    static log(msg) {
        global.log(`[${UUID}]: ${msg}`);
    }
    static logError(msg) {
        global.logError(`[${UUID}]: ${msg}`);
    }
    static logWarning(msg) {
        global.logWarning(`[${UUID}]: ${msg}`);
    }
}

;// ./src/lib/websocket.ts
const { Session, WebsocketConnection, Message, WebsocketDataType, WebsocketCloseCode } = imports.gi.Soup;
const { UriFlags, Uri } = imports.gi.GLib;


var WebSocketReadyState;
(function (WebSocketReadyState) {
    WebSocketReadyState[WebSocketReadyState["CONNECTING"] = 0] = "CONNECTING";
    WebSocketReadyState[WebSocketReadyState["OPEN"] = 1] = "OPEN";
    WebSocketReadyState[WebSocketReadyState["CLOSING"] = 2] = "CLOSING";
    WebSocketReadyState[WebSocketReadyState["CLOSED"] = 3] = "CLOSED";
})(WebSocketReadyState || (WebSocketReadyState = {}));
class WebSocket {
    constructor(url, options) {
        var _a;
        this.connection = null;
        this.session = new Session({ timeout: 30 });
        this.readyState = WebSocketReadyState.CONNECTING;
        this.url = url;
        this.checkCertificate = (_a = options === null || options === void 0 ? void 0 : options.checkCertificate) !== null && _a !== void 0 ? _a : true;
        this.onConnect = options === null || options === void 0 ? void 0 : options.onConnect;
        this.onClose = options === null || options === void 0 ? void 0 : options.onClose;
        this.onError = options === null || options === void 0 ? void 0 : options.onError;
        this.onMessage = options === null || options === void 0 ? void 0 : options.onMessage;
        this.connect();
    }
    connect() {
        const message = new Message({
            method: 'GET',
            uri: Uri.parse(this.url, UriFlags.NONE),
        });
        if (this.checkCertificate === false) {
            message.connect("accept-certificate", function () {
                return true;
            });
        }
        this.session.websocket_connect_async(message, null, [], 1, null, (_, result) => {
            try {
                Logger.log('Websocket: Opening connection...');
                this.connection = this.session.websocket_connect_finish(result);
                if (this.connection) {
                    this.readyState = WebSocketReadyState.OPEN;
                    Logger.log('Websocket: Connection opened!');
                    if (this.onConnect) {
                        this.onConnect();
                    }
                }
            }
            catch (error) {
                Logger.logError('Websocket error: ' + error);
                if (this.onError && error instanceof Error) {
                    this.onError(error.message);
                }
                return;
            }
            this.connectEventHandlers(this.connection);
        });
    }
    connectEventHandlers(connection) {
        connection.connect('closing', () => {
            this.readyState = WebSocketReadyState.CLOSING;
            Logger.log('Websocket: Closing connection...');
        });
        connection.connect('closed', () => {
            this.readyState = WebSocketReadyState.CLOSED;
            Logger.log('Websocket: Connection closed.');
            if (this.onClose) {
                this.onClose();
            }
        });
        connection.connect('error', (_, err) => {
            Logger.logError('Websocket error: ' + err);
            if (this.onError) {
                this.onError(err.toString());
            }
        });
        connection.connect('message', (_, type, data) => {
            if (type !== WebsocketDataType.TEXT) {
                return;
            }
            const decoder = new encoding/* TextDecoder */.Ay();
            const str = decoder.decode(data.toArray());
            if (this.onMessage) {
                this.onMessage(str);
            }
        });
    }
    send(data) {
        if (this.connection && this.readyState === WebSocketReadyState.OPEN) {
            this.connection.send_text(data);
        }
        else {
            throw new Error('WebSocket is not connected');
        }
    }
    close() {
        if (this.connection) {
            this.connection.close(WebsocketCloseCode.NORMAL);
            this.connection = null;
        }
    }
}

;// ./src/lib/wakeonlan.ts
const { Socket, SocketFamily, SocketType, SocketProtocol, InetSocketAddress } = imports.gi.Gio;
class WakeOnLan {
    static sendMagicPacket(macAddress) {
        const socket = Socket.new(SocketFamily.IPV4, SocketType.DATAGRAM, SocketProtocol.UDP);
        socket.set_broadcast(true);
        const address = InetSocketAddress.new_from_string('255.255.255.255', 9);
        const packet = this.createPacket(macAddress);
        socket.send_to(address, packet, null);
    }
    static createPacket(macAddress) {
        macAddress = macAddress.replace(/[:-]/g, '');
        const magicPacket = new Uint8Array(102);
        for (let i = 0; i < 6; i++) {
            magicPacket[i] = 0xFF;
        }
        const macArray = [];
        for (let i = 0; i < macAddress.length; i += 2) {
            macArray.push(parseInt(macAddress.slice(i, i + 2), 16));
        }
        for (let i = 6; i < magicPacket.length; i += 6) {
            magicPacket.set(macArray, i);
        }
        return magicPacket;
    }
}

;// ./src/controller.ts
const Main = imports.ui.main;
const { base64_encode } = imports.gi.GLib;



class Controller {
    constructor(settings) {
        this.websocket = null;
        this.settings = settings;
    }
    buildUrl() {
        const { host, port, name, token } = this.settings.state;
        const ipPort = `${host}:${port}`;
        const ipPortRegex = /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d):([0-9]{1,5})$/;
        if (!ipPortRegex.test(ipPort)) {
            Main.notifyError('Invalid MAC address!', 'The IP address or port is invalid or missing. Please provide a valid address in the settings!');
            Logger.logWarning('Invalid IP or port!');
            return null;
        }
        let url = `wss://${host}:${port}/api/v2/channels/samsung.remote.control?name=${base64_encode(name !== null && name !== void 0 ? name : "SamsungTvRemote")}`;
        if (token !== "") {
            url = url + `&token=${token}`;
        }
        return url;
    }
    connect(callback) {
        if (this.websocket !== null) {
            Logger.log('Closing previous connection....');
            this.websocket.close();
        }
        Logger.log('Building URL....');
        const url = this.buildUrl();
        if (url === null) {
            return;
        }
        Logger.log('URL is: ' + url);
        this.websocket = new WebSocket(url, {
            checkCertificate: false,
            onConnect: callback,
            onMessage: (message) => {
                var _a;
                Logger.log('Message recieved: ' + message);
                const parsedMessage = JSON.parse(message);
                if ((parsedMessage === null || parsedMessage === void 0 ? void 0 : parsedMessage.event) === 'ms.channel.connect' && ((_a = parsedMessage === null || parsedMessage === void 0 ? void 0 : parsedMessage.data) === null || _a === void 0 ? void 0 : _a.token)) {
                    Logger.log('Token recieved. Saving to settings.');
                    this.settings.state.token = parsedMessage.data.token;
                }
            }
        });
    }
    sendKey(key) {
        const data = JSON.stringify({
            'method': 'ms.remote.control',
            'params': {
                'Cmd': 'Click',
                'DataOfCmd': key,
                'Option': 'false',
                'TypeOfRemote': 'SendRemoteKey'
            }
        });
        Logger.log('Sending key...');
        if (this.settings.changed || this.websocket === null || this.websocket.readyState !== WebSocketReadyState.OPEN) {
            Logger.log('Reconnect needed, reason:');
            if (this.settings.changed) {
                Logger.log('-settings changed');
            }
            if (this.websocket === null) {
                Logger.log('-websocket was not initialized');
            }
            if (this.websocket !== null && this.websocket.readyState !== WebSocketReadyState.OPEN) {
                Logger.log('-websocket state was: ' + this.websocket.readyState);
            }
            this.connect(() => {
                var _a;
                Logger.log('Controller connected, sending key...');
                this.settings.changed = false;
                (_a = this.websocket) === null || _a === void 0 ? void 0 : _a.send(data);
            });
        }
        else if (this.websocket !== null && this.websocket.readyState === WebSocketReadyState.OPEN) {
            this.websocket.send(data);
        }
    }
    wakeUpDevice() {
        const macAddress = this.settings.state.mac;
        const macRegex = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/;
        if (macAddress !== undefined && macRegex.test(macAddress)) {
            Logger.log('Sending magic packet to device...');
            WakeOnLan.sendMagicPacket(macAddress);
        }
        else {
            Main.notifyError('Invalid MAC address!', 'The MAC address is invalid or missing. Please provide a valid MAC address in the settings!');
            Logger.logWarning('Invalid MAC address!');
        }
    }
}

;// ./src/main.ts
const { IconApplet } = imports.ui.applet;
const { PopupMenuManager } = imports.ui.popupMenu;



class MainApplet extends IconApplet {
    constructor(metadata, orientation, panelHeight, instanceId) {
        super(orientation, panelHeight, instanceId);
        this.metadata = metadata;
        this.uuid = metadata.uuid;
        this.orientation = orientation;
        this.panelHeight = panelHeight;
        this.instanceId = instanceId;
        this.settings = new Settings(metadata.uuid, instanceId);
        this.menuManager = new PopupMenuManager(this);
        this.controller = new Controller(this.settings);
        this.remoteMenu = new RemoteMenu(this, this.orientation, this.controller);
        this.menuManager.addMenu(this.remoteMenu);
        this.set_applet_icon_name("cs-screen");
    }
    on_applet_clicked(_) {
        this.remoteMenu.toggle();
        return false;
    }
}
function main(metadata, orientation, panelHeight, instanceId) {
    return new MainApplet(metadata, orientation, panelHeight, instanceId);
}

applet = __webpack_exports__;
/******/ })()
;