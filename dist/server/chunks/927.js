exports.id = 927;
exports.ids = [927];
exports.modules = {

/***/ 3925:
/***/ ((module) => {

// Exports
module.exports = {
	"loader": "Loader_loader__dLubz",
	"lds-dual-ring": "Loader_lds-dual-ring__C4TFw"
};


/***/ }),

/***/ 3476:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logo.e4618bfb.png","height":231,"width":180,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAAiUlEQVR42jXNPQ6CQBCG4clewFjaeAo7L+ApLLyMlbsWZimsrA1WUtBQ8ROyGxJK6LkH7xDY5NmZyZfJSPDWxMQJdtHbW0jsD1chUHuGD/LoXYd0C04MPRr6dAn4XgxfasCEEpkGNSoUGFdvPfqgydn644kjDsLBM0GLgf6iN/XphrrrOgQmemdmYuFxvY/d5nYAAAAASUVORK5CYII="});

/***/ }),

/***/ 2513:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var _styles_Loader_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3925);
/* harmony import */ var _styles_Loader_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Loader_module_css__WEBPACK_IMPORTED_MODULE_2__);



const Results = ({ loading , responseData  })=>{
    const imageSrc = responseData ? '/success.svg' : '/close.svg';
    const result = responseData ? "You're a real one" : "GUESS YOU’RE NOT THE REALEST ";
    console.log("Results: ", responseData);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            loading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-row flex-wrap items-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_Loader_module_css__WEBPACK_IMPORTED_MODULE_2___default().loader)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "mx-2 text-lg text-green-500",
                        children: "Checking you out"
                    })
                ]
            }) : '',
            responseData === null || responseData === undefined ? '' : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-row flex-wrap items-center bg-slate-200 py-2 px-3 rounded-sm shadow-lg",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
                        src: imageSrc,
                        width: "24",
                        height: "24",
                        alt: "result"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-slate-600 text-xl mx-2",
                        children: result
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Results);


/***/ }),

/***/ 3133:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);


const Seo = ({ ogTitle ='Face Compare' , description ='Detect and compare images' , ogImage ='/vercel.svg' ,  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                charSet: "utf-8"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "viewport",
                content: "width=device-width, initial-scale=1.0"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                children: "Face Compare"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "robots",
                content: "index, follow"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "icon",
                href: "/vercel.svg"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "author",
                content: "Charan"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "description",
                content: "Detect and compare images"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "keyword",
                content: "face recognition,face detection,aws rekognition,code example,face compare,Image recognition,Image detection"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:title",
                content: ogTitle
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:description",
                content: description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:image",
                content: ogImage
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:url",
                content: ""
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:type",
                content: "website"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:card",
                content: "summary"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:title",
                content: ogTitle
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:description",
                content: description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:image",
                content: ogImage
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Seo);


/***/ }),

/***/ 1487:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Instructions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2449);
/* harmony import */ var _utils_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2881);



const imageExt = [
    'jpg',
    'jpeg',
    'png'
];
const useFile = ()=>{
    const { 0: uploadFile , 1: setUploadFile  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        image: [],
        previewImage: [],
        responseData: null
    });
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const { image , previewImage , responseData  } = uploadFile;
    const setImage = (cardId, file)=>{
        const imageSrc = URL.createObjectURL(file);
        const images = [
            ...image
        ];
        const previewImages = [
            ...previewImage
        ];
        previewImages[cardId] = imageSrc;
        images[cardId] = file;
        setUploadFile((files)=>({
                ...files,
                image: images,
                previewImage: previewImages
            })
        );
    };
    const onHandleFileChange = (e, cardId)=>{
        var ref;
        if (loading) return;
        const file = e.target.files;
        // check file exists
        if (!file || !(file === null || file === void 0 ? void 0 : file.length)) {
            return;
        }
        // check valid ext
        const fileExtension = file[0].type.split('/')[1];
        if (!imageExt.includes(fileExtension)) {
            return (0,_utils_toast__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)('Invalid file');
        }
        // check image < 2.5MB
        const sizeInMB = (((ref = file[0]) === null || ref === void 0 ? void 0 : ref.size) / (1024 * 1024)).toFixed(2);
        if (sizeInMB > 2.5) return (0,_utils_toast__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)('Image should be less than 2.5 MB');
        setImage(cardId, file[0]);
    };
    const fetchImage = (url, cardId)=>{
        if (loading) return;
        fetch(url).then((res)=>{
            if (!res.headers.get('content-type').startsWith('image')) {
                return (0,_utils_toast__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)('Invalid Image URL');
            }
            return res.blob();
        }).then((res)=>{
            const file = new File([
                res
            ], 'imageSrc.jpg', {
                type: 'images/jpeg'
            });
            setImage(cardId, file);
        }).catch(()=>{
            (0,_utils_toast__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)('Unable to fetch image from provided URL');
        });
    };
    const onHandleReset = ()=>{
        setUploadFile((files)=>({
                ...files,
                image: [],
                previewImage: [],
                responseData: null
            })
        );
        document.querySelectorAll('input[type="file"]').forEach((input)=>{
            input.value = '';
        });
    };
    const compareImage = async ()=>{
        if (loading) return;
        try {
            if (!image.length || image.length < 2) {
                return (0,_utils_toast__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)('Please Select Image');
            }
            // loading to true
            setLoading((loader)=>!loader
            );
            const formData = new FormData();
            image.forEach((img)=>formData.append('image', img)
            );
            // set prev responseData to null
            if (responseData) setUploadFile((files)=>({
                    ...files,
                    responseData: null
                })
            );
            // close existing toaster
            (0,_utils_toast__WEBPACK_IMPORTED_MODULE_2__/* .closeNotify */ .r)();
            const res = await fetch('/api/compare-image', {
                method: 'POST',
                body: formData
            });
            // handle if payload too long
            if (res.status === 413) {
                throw new Error('Image too large Please upload image which is less than 2.5MB');
            }
            const data = await (res === null || res === void 0 ? void 0 : res.json());
            // handle face detection comparison error
            if (!(res === null || res === void 0 ? void 0 : res.ok)) {
                throw new Error((data === null || data === void 0 ? void 0 : data.message) || 'SomethiNg went wrong');
            }
            setUploadFile((files)=>{
                var ref;
                return {
                    ...files,
                    responseData: !!(data === null || data === void 0 ? void 0 : (ref = data.matchedFaces) === null || ref === void 0 ? void 0 : ref.length)
                };
            });
            setLoading((loader)=>!loader
            );
        } catch (error) {
            (0,_utils_toast__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(error === null || error === void 0 ? void 0 : error.message);
            setLoading((loader)=>!loader
            );
        }
    };
    return [
        previewImage,
        onHandleFileChange,
        onHandleReset,
        fetchImage,
        compareImage,
        loading,
        responseData, 
    ];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useFile);


/***/ }),

/***/ 2881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ closeNotify),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_0__);

const notify = (message, error = true, warning = false)=>react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast[warning ? 'warn' : error ? 'error' : 'success'](message, {
        theme: 'colored'
    })
;
const closeNotify = ()=>react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.dismiss()
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (notify);


/***/ })

};
;