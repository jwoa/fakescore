"use strict";
(() => {
var exports = {};
exports.id = 266;
exports.ids = [266];
exports.modules = {

/***/ 6365:
/***/ ((module) => {

module.exports = require("@aws-sdk/client-rekognition");

/***/ }),

/***/ 5616:
/***/ ((module) => {

module.exports = import("next-connect");;

/***/ }),

/***/ 669:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ multer)
});

;// CONCATENATED MODULE: external "multer"
const external_multer_namespaceObject = require("multer");
var external_multer_default = /*#__PURE__*/__webpack_require__.n(external_multer_namespaceObject);
;// CONCATENATED MODULE: external "path"
const external_path_namespaceObject = require("path");
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_namespaceObject);
;// CONCATENATED MODULE: ./lib/multer.js


function checkFileType(file, cb) {
    const filetypes = /jpeg|jpg|png/;
    const extname = filetypes.test(external_path_default().extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
    if (mimetype && extname) {
        return cb(null, true);
    } else {
        return cb(new Error('Invalid File Type'));
    }
}
const uploadFile = external_multer_default()({
    fileFilter: (req, file, cb)=>{
        checkFileType(file, cb);
    }
});
/* harmony default export */ const multer = (uploadFile);


/***/ }),

/***/ 9448:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _aws_sdk_client_rekognition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6365);
/* harmony import */ var _aws_sdk_client_rekognition__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_aws_sdk_client_rekognition__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5616);
/* harmony import */ var _lib_multer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(669);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_1__]);
next_connect__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const faceRecognition = new _aws_sdk_client_rekognition__WEBPACK_IMPORTED_MODULE_0__.RekognitionClient({
    region: 'ap-south-1',
    credentials: {
        accessKeyId: process.env.ACCESS_KEY_ID,
        secretAccessKey: process.env.SECRET_ACCESS_KEY
    }
});
const handler = (0,next_connect__WEBPACK_IMPORTED_MODULE_1__["default"])({
    onError: (err, _, res)=>{
        return res.status(400).json({
            message: (err === null || err === void 0 ? void 0 : err.message) || 'Something went wrong'
        });
    }
});
const config = {
    api: {
        bodyParser: false
    }
};
handler.use(_lib_multer__WEBPACK_IMPORTED_MODULE_2__/* ["default"].array */ .Z.array('image', 2));
handler.post(async (req, res)=>{
    try {
        const files = req.files;
        const data = await faceRecognition.send(new _aws_sdk_client_rekognition__WEBPACK_IMPORTED_MODULE_0__.CompareFacesCommand({
            SourceImage: {
                Bytes: files[0].buffer
            },
            TargetImage: {
                Bytes: files[1].buffer
            }
        }));
        return res.status(200).json({
            matchedFaces: data === null || data === void 0 ? void 0 : data.FaceMatches
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Unable to detect faces' || 0
        });
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9448));
module.exports = __webpack_exports__;

})();