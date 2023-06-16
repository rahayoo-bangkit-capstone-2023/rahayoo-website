"use strict";
(() => {
var exports = {};
exports.id = 471;
exports.ids = [471];
exports.modules = {

/***/ 6845:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ employees)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "@nextui-org/react"
var react_ = __webpack_require__(6735);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/breadcrumb/breadcrumb.styled.ts

const Breadcrumbs = (0,react_.styled)("ul", {
    listStyle: "none",
    display: "flex",
    gap: "$4",
    padding: 0,
    mx: 0
});
const CrumbLink = (0,react_.styled)(react_.Link, {
    color: "$accents8"
});
const Crumb = (0,react_.styled)("li", {
    "display": "flex",
    "flexDirection": "row",
    "alignItems": "center",
    "gap": "$2",
    "&:last-of-type:after": {
        content: "",
        padding: 0
    },
    "&:last-child": {
        "& > a": {
            color: "$accents9",
            cursor: "default",
            pointerEvents: "none"
        }
    }
});

// EXTERNAL MODULE: ./components/styles/svg.ts
var svg = __webpack_require__(5086);
;// CONCATENATED MODULE: ./components/icons/accounts/dots-icon.tsx



const DotsIcon = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(svg/* Svg */.n, {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        css: {
            "& path": {
                fill: "$accents6"
            }
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z",
            fill: "#969696"
        })
    });
};

;// CONCATENATED MODULE: ./components/icons/accounts/export-icon.tsx



const ExportIcon = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(svg/* Svg */.n, {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        css: {
            "& path": {
                fill: "white"
            }
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M12 9H16C16.55 9 17 8.55 17 8C17 7.45 16.55 7 16 7H12C11.45 7 11 7.45 11 8C11 8.55 11.45 9 12 9ZM12 13H16C16.55 13 17 12.55 17 12C17 11.45 16.55 11 16 11H12C11.45 11 11 11.45 11 12C11 12.55 11.45 13 12 13ZM12 17H16C16.55 17 17 16.55 17 16C17 15.45 16.55 15 16 15H12C11.45 15 11 15.45 11 16C11 16.55 11.45 17 12 17ZM7 7H9V9H7V7ZM7 11H9V13H7V11ZM7 15H9V17H7V15ZM20 3H4C3.45 3 3 3.45 3 4V20C3 20.55 3.45 21 4 21H20C20.55 21 21 20.55 21 20V4C21 3.45 20.55 3 20 3ZM19 19H5V5H19V19Z",
            fill: "#969696"
        })
    });
};

;// CONCATENATED MODULE: ./components/icons/accounts/info-icon.tsx



const InfoIcon = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(svg/* Svg */.n, {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        css: {
            "& path": {
                fill: "$accents6"
            }
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 17C11.45 17 11 16.55 11 16V12C11 11.45 11.45 11 12 11C12.55 11 13 11.45 13 12V16C13 16.55 12.55 17 12 17ZM13 9H11V7H13V9Z",
            fill: "#969696"
        })
    });
};

;// CONCATENATED MODULE: ./components/icons/accounts/trash-icon.tsx



const TrashIcon = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(svg/* Svg */.n, {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        css: {
            "& path": {
                fill: "$accents6"
            }
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V9C18 7.9 17.1 7 16 7H8C6.9 7 6 7.9 6 9V19ZM11.65 10.35C11.85 10.15 12.16 10.15 12.36 10.35L16 14H14V18H10V14H8L11.65 10.35ZM15.5 4L14.79 3.29C14.61 3.11 14.35 3 14.09 3H9.91C9.65 3 9.39 3.11 9.21 3.29L8.5 4H6C5.45 4 5 4.45 5 5C5 5.55 5.45 6 6 6H18C18.55 6 19 5.55 19 5C19 4.45 18.55 4 18 4H15.5Z",
            fill: "#969696"
        })
    });
};

;// CONCATENATED MODULE: ./components/icons/breadcrumb/house-icon.tsx



const HouseIcon = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(svg/* Svg */.n, {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        css: {
            "& path": {
                fill: "$accents6"
            }
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M10.0001 19.0002V14.0002H14.0001V19.0002C14.0001 19.5502 14.4501 20.0002 15.0001 20.0002H18.0001C18.5501 20.0002 19.0001 19.5502 19.0001 19.0002V12.0002H20.7001C21.1601 12.0002 21.3801 11.4302 21.0301 11.1302L12.6701 3.60021C12.2901 3.26021 11.7101 3.26021 11.3301 3.60021L2.9701 11.1302C2.6301 11.4302 2.8401 12.0002 3.3001 12.0002H5.0001V19.0002C5.0001 19.5502 5.4501 20.0002 6.0001 20.0002H9.0001C9.5501 20.0002 10.0001 19.5502 10.0001 19.0002Z",
            fill: "#969696"
        })
    });
};

;// CONCATENATED MODULE: ./components/icons/breadcrumb/users-icon.tsx



const UsersIcon = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(svg/* Svg */.n, {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        css: {
            "& path": {
                fill: "$accents6"
            }
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M16.5 12C17.88 12 18.99 10.88 18.99 9.5C18.99 8.12 17.88 7 16.5 7C15.12 7 14 8.12 14 9.5C14 10.88 15.12 12 16.5 12ZM9 11C10.66 11 11.99 9.66 11.99 8C11.99 6.34 10.66 5 9 5C7.34 5 6 6.34 6 8C6 9.66 7.34 11 9 11ZM16.5 14C14.67 14 11 14.92 11 16.75V18C11 18.55 11.45 19 12 19H21C21.55 19 22 18.55 22 18V16.75C22 14.92 18.33 14 16.5 14ZM9 13C6.67 13 2 14.17 2 16.5V18C2 18.55 2.45 19 3 19H9V16.75C9 15.9 9.33 14.41 11.37 13.28C10.5 13.1 9.66 13 9 13Z",
            fill: "#969696"
        })
    });
};

// EXTERNAL MODULE: ./components/icons/sidebar/settings-icon.tsx
var settings_icon = __webpack_require__(7197);
// EXTERNAL MODULE: ./components/styles/flex.ts
var flex = __webpack_require__(7600);
// EXTERNAL MODULE: ./components/styles/box.ts
var box = __webpack_require__(4660);
;// CONCATENATED MODULE: ./components/table/data.ts
const columns = [
    {
        name: "NAME",
        uid: "name"
    },
    {
        name: "STRESSLEVEL",
        uid: "stressLevel"
    },
    {
        name: "MOOD",
        uid: "mood"
    },
    {
        name: "ROLE",
        uid: "role"
    },
    {
        name: "STATUS",
        uid: "status"
    },
    {
        name: "ACTIONS",
        uid: "actions"
    }, 
];
const users = [
    {
        id: 1,
        name: "Tony Reichert",
        role: "CEO",
        team: "Management",
        status: "active",
        age: "29",
        mood: "\uD83D\uDE0C",
        stressLevel: "low",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        email: "tony.reichert@example.com"
    },
    {
        id: 2,
        name: "Zoey Lang",
        role: "Technical Lead",
        team: "Development",
        status: "paused",
        age: "25",
        mood: "\uD83D\uDE0C",
        stressLevel: "Moderate",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
        email: "zoey.lang@example.com"
    },
    {
        id: 3,
        name: "Jane Fisher",
        role: "Senior Developer",
        team: "Development",
        status: "active",
        age: "22",
        mood: "\uD83D\uDE0C",
        stressLevel: "low",
        avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
        email: "jane.fisher@example.com"
    },
    {
        id: 4,
        name: "William Howard",
        role: "Community Manager",
        team: "Marketing",
        status: "vacation",
        age: "28",
        mood: "\uD83D\uDE0C",
        stressLevel: "low",
        avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
        email: "william.howard@example.com"
    },
    {
        id: 5,
        name: "Kristen Copper",
        role: "Sales Manager",
        team: "Sales",
        status: "active",
        age: "24",
        mood: "\uD83D\uDE0C",
        stressLevel: "low",
        avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
        email: "kristen.cooper@example.com"
    },
    {
        id: 6,
        name: "Tony Reichert",
        role: "CEO",
        team: "Management",
        status: "active",
        age: "29",
        mood: "\uD83D\uDE0C",
        stressLevel: "low",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        email: "tony.reichert@example.com"
    },
    {
        id: 10,
        name: "Kristen Copper",
        role: "Sales Manager",
        team: "Sales",
        status: "active",
        age: "24",
        mood: "\uD83D\uDE0C",
        stressLevel: "low",
        avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
        email: "kristen.cooper@example.com"
    },
    {
        id: 8,
        name: "Jane Fisher",
        role: "Senior Developer",
        team: "Development",
        status: "active",
        age: "22",
        mood: "\uD83D\uDE0C",
        stressLevel: "low",
        avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
        email: "jane.fisher@example.com"
    },
    {
        id: 7,
        name: "Zoey Lang",
        role: "Technical Lead",
        team: "Development",
        status: "paused",
        age: "25",
        mood: "\uD83D\uDE0C",
        stressLevel: "moderate",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
        email: "zoey.lang@example.com"
    },
    {
        id: 9,
        name: "William Howard",
        role: "Community Manager",
        team: "Marketing",
        status: "vacation",
        age: "28",
        mood: "\uD83D\uDE0C",
        stressLevel: "moderate",
        avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
        email: "william.howard@example.com"
    },
    {
        id: 11,
        name: "Tony Reichert",
        role: "CEO",
        team: "Management",
        status: "active",
        age: "29",
        mood: "\uD83D\uDE0C",
        stressLevel: "moderate",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        email: "tony.reichert@example.com"
    },
    {
        id: 12,
        name: "Kristen Copper",
        role: "Sales Manager",
        team: "Sales",
        status: "active",
        age: "24",
        mood: "\uD83D\uDE0C",
        stressLevel: "moderate",
        avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
        email: "kristen.cooper@example.com"
    },
    {
        id: 13,
        name: "Jane Fisher",
        role: "Senior Developer",
        team: "Development",
        status: "active",
        age: "22",
        mood: "\uD83D\uDE0C",
        stressLevel: "moderate",
        avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
        email: "jane.fisher@example.com"
    },
    {
        id: 14,
        name: "Zoey Lang",
        role: "Technical Lead",
        team: "Development",
        status: "paused",
        age: "25",
        mood: "\uD83D\uDE0C",
        stressLevel: "moderate",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
        email: "zoey.lang@example.com"
    },
    {
        id: 15,
        name: "Tony Reichert",
        role: "CEO",
        team: "Management",
        status: "active",
        age: "29",
        mood: "\uD83D\uDE0C",
        stressLevel: "moderate",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        email: "tony.reichert@example.com"
    },
    {
        id: 16,
        name: "Kristen Copper",
        role: "Sales Manager",
        team: "Sales",
        status: "active",
        age: "24",
        mood: "\uD83D\uDE0C",
        stressLevel: "moderate",
        avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
        email: "kristen.cooper@example.com"
    }, 
];

;// CONCATENATED MODULE: ./components/icons/table/delete-icon.tsx

const DeleteIcon = ({ fill , size , height , width , ...props })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        width: size || width || 24,
        height: size || height || 24,
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M17.5 4.98332C14.725 4.70832 11.9333 4.56665 9.15 4.56665C7.5 4.56665 5.85 4.64998 4.2 4.81665L2.5 4.98332",
                stroke: fill,
                strokeWidth: 1.5,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M7.08331 4.14169L7.26665 3.05002C7.39998 2.25835 7.49998 1.66669 8.90831 1.66669H11.0916C12.5 1.66669 12.6083 2.29169 12.7333 3.05835L12.9166 4.14169",
                stroke: fill,
                strokeWidth: 1.5,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M15.7084 7.61664L15.1667 16.0083C15.075 17.3166 15 18.3333 12.675 18.3333H7.32502C5.00002 18.3333 4.92502 17.3166 4.83335 16.0083L4.29169 7.61664",
                stroke: fill,
                strokeWidth: 1.5,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M8.60834 13.75H11.3833",
                stroke: fill,
                strokeWidth: 1.5,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M7.91669 10.4167H12.0834",
                stroke: fill,
                strokeWidth: 1.5,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/icons/table/edit-icon.tsx

const EditIcon = ({ fill , size , height , width , ...props })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        width: size || width || 24,
        height: size || height || 24,
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M11.05 3.00002L4.20835 10.2417C3.95002 10.5167 3.70002 11.0584 3.65002 11.4334L3.34169 14.1334C3.23335 15.1084 3.93335 15.775 4.90002 15.6084L7.58335 15.15C7.95835 15.0834 8.48335 14.8084 8.74168 14.525L15.5834 7.28335C16.7667 6.03335 17.3 4.60835 15.4583 2.86668C13.625 1.14168 12.2334 1.75002 11.05 3.00002Z",
                stroke: fill,
                strokeWidth: 1.5,
                strokeMiterlimit: 10,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M9.90833 4.20831C10.2667 6.50831 12.1333 8.26665 14.45 8.49998",
                stroke: fill,
                strokeWidth: 1.5,
                strokeMiterlimit: 10,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M2.5 18.3333H17.5",
                stroke: fill,
                strokeWidth: 1.5,
                strokeMiterlimit: 10,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/icons/table/eye-icon.tsx

const EyeIcon = ({ fill , size , height , width , ...props })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        width: size || width || 24,
        height: size || height || 24,
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M12.9833 10C12.9833 11.65 11.65 12.9833 10 12.9833C8.35 12.9833 7.01666 11.65 7.01666 10C7.01666 8.35 8.35 7.01666 10 7.01666C11.65 7.01666 12.9833 8.35 12.9833 10Z",
                stroke: fill,
                strokeWidth: 1.5,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M9.99999 16.8916C12.9417 16.8916 15.6833 15.1583 17.5917 12.1583C18.3417 10.9833 18.3417 9.00831 17.5917 7.83331C15.6833 4.83331 12.9417 3.09998 9.99999 3.09998C7.05833 3.09998 4.31666 4.83331 2.40833 7.83331C1.65833 9.00831 1.65833 10.9833 2.40833 12.1583C4.31666 15.1583 7.05833 16.8916 9.99999 16.8916Z",
                stroke: fill,
                strokeWidth: 1.5,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/table/table.styled.ts

const IconButton = (0,react_.styled)("button", {
    "dflex": "center",
    "border": "none",
    "outline": "none",
    "cursor": "pointer",
    "padding": "0",
    "margin": "0",
    "bg": "transparent",
    "transition": "$default",
    "&:hover": {
        opacity: "0.8"
    },
    "&:active": {
        opacity: "0.6"
    }
});
const StyledBadge = (0,react_.styled)("span", {
    display: "inline-block",
    textTransform: "uppercase",
    padding: "$2 $3",
    margin: "0 2px",
    fontSize: "10px",
    fontWeight: "$bold",
    borderRadius: "14px",
    letterSpacing: "0.6px",
    lineHeight: 1,
    boxShadow: "1px 2px 5px 0px rgb(0 0 0 / 5%)",
    alignItems: "center",
    alignSelf: "center",
    color: "$white",
    variants: {
        type: {
            active: {
                bg: "$successLight",
                color: "$successLightContrast"
            },
            paused: {
                bg: "$errorLight",
                color: "$errorLightContrast"
            },
            vacation: {
                bg: "$warningLight",
                color: "$warningLightContrast"
            }
        }
    },
    defaultVariants: {
        type: "active"
    }
});

;// CONCATENATED MODULE: ./components/table/render-cell.tsx







const RenderCell = ({ user , columnKey  })=>{
    // @ts-ignore
    const cellValue = user[columnKey];
    switch(columnKey){
        case "name":
            return /*#__PURE__*/ jsx_runtime_.jsx(react_.User, {
                squared: true,
                src: user.avatar,
                name: cellValue,
                css: {
                    p: 0
                },
                children: user.email
            });
        case "stressLevel":
            return /*#__PURE__*/ jsx_runtime_.jsx(react_.Row, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                    b: true,
                    size: 13,
                    css: {
                        tt: "capitalize",
                        color: "$accents7"
                    },
                    children: user.stressLevel
                })
            });
        case "stressLevel":
            return /*#__PURE__*/ jsx_runtime_.jsx(react_.Row, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                    b: true,
                    size: 13,
                    css: {
                        tt: "capitalize",
                        color: "$accents7"
                    },
                    children: user.mood
                })
            });
        case "role":
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Col, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Row, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                            b: true,
                            size: 14,
                            css: {
                                tt: "capitalize"
                            },
                            children: cellValue
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Row, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                            b: true,
                            size: 13,
                            css: {
                                tt: "capitalize",
                                color: "$accents7"
                            },
                            children: user.team
                        })
                    })
                ]
            });
        case "status":
            return(// @ts-ignore
            /*#__PURE__*/ jsx_runtime_.jsx(StyledBadge, {
                type: String(user.status),
                children: cellValue
            }));
        case "actions":
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Row, {
                justify: "center",
                align: "center",
                css: {
                    "gap": "$8",
                    "@md": {
                        gap: 0
                    }
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Col, {
                        css: {
                            d: "flex"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Tooltip, {
                            content: "Details",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(IconButton, {
                                onClick: ()=>console.log("View user", user.id),
                                children: /*#__PURE__*/ jsx_runtime_.jsx(EyeIcon, {
                                    size: 20,
                                    fill: "#979797"
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Col, {
                        css: {
                            d: "flex"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Tooltip, {
                            content: "Edit user",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(IconButton, {
                                onClick: ()=>console.log("Edit user", user.id),
                                children: /*#__PURE__*/ jsx_runtime_.jsx(EditIcon, {
                                    size: 20,
                                    fill: "#979797"
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Col, {
                        css: {
                            d: "flex"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Tooltip, {
                            content: "Delete user",
                            color: "error",
                            onClick: ()=>console.log("Delete user", user.id),
                            children: /*#__PURE__*/ jsx_runtime_.jsx(IconButton, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(DeleteIcon, {
                                    size: 20,
                                    fill: "#FF0080"
                                })
                            })
                        })
                    })
                ]
            });
        default:
            return cellValue;
    }
};

;// CONCATENATED MODULE: ./components/table/table.tsx






const TableWrapper = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(box/* Box */.x, {
        css: {
            "& .nextui-table-container": {
                boxShadow: "none"
            }
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Table, {
            "aria-label": "Example table with custom cells",
            css: {
                height: "auto",
                minWidth: "100%",
                boxShadow: "none",
                width: "100%",
                px: 0
            },
            selectionMode: "multiple",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Table.Header, {
                    columns: columns,
                    children: (column)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.Table.Column, {
                            hideHeader: column.uid === "actions",
                            align: column.uid === "actions" ? "center" : "start",
                            children: column.name
                        }, column.uid)
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Table.Body, {
                    items: users,
                    children: (item)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.Table.Row, {
                            children: (columnKey)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.Table.Cell, {
                                    children: RenderCell({
                                        user: item,
                                        columnKey: columnKey
                                    })
                                })
                        })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Table.Pagination, {
                    shadow: true,
                    noMargin: true,
                    align: "center",
                    rowsPerPage: 8,
                    onPageChange: (page)=>console.log({
                            page
                        })
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./components/accounts/add-user.tsx




const AddUser = ()=>{
    const [visible, setVisible] = external_react_default().useState(false);
    const handler = ()=>setVisible(true);
    const closeHandler = ()=>{
        setVisible(false);
        console.log("closed");
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                auto: true,
                onClick: handler,
                children: "Add User"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Modal, {
                closeButton: true,
                "aria-labelledby": "modal-title",
                width: "600px",
                open: visible,
                onClose: closeHandler,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Modal.Header, {
                        css: {
                            justifyContent: "start"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                            id: "modal-title",
                            h4: true,
                            children: "Add new user"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Divider, {
                        css: {
                            my: "$5"
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Modal.Body, {
                        css: {
                            py: "$10"
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(flex/* Flex */.k, {
                            direction: "column",
                            css: {
                                "flexWrap": "wrap",
                                "gap": "$8",
                                "@lg": {
                                    flexWrap: "nowrap",
                                    gap: "$12"
                                }
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(flex/* Flex */.k, {
                                    css: {
                                        "gap": "$10",
                                        "flexWrap": "wrap",
                                        "@lg": {
                                            flexWrap: "nowrap"
                                        }
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Input, {
                                            label: "First Name",
                                            bordered: true,
                                            clearable: true,
                                            fullWidth: true,
                                            size: "lg",
                                            placeholder: "First Name"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Input, {
                                            label: "Last Name",
                                            clearable: true,
                                            bordered: true,
                                            fullWidth: true,
                                            size: "lg",
                                            placeholder: "Last Name"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(flex/* Flex */.k, {
                                    css: {
                                        "gap": "$10",
                                        "flexWrap": "wrap",
                                        "@lg": {
                                            flexWrap: "nowrap"
                                        }
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Input, {
                                            label: "Email",
                                            clearable: true,
                                            bordered: true,
                                            fullWidth: true,
                                            size: "lg",
                                            placeholder: "Email"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Input, {
                                            label: "Phone Number",
                                            clearable: true,
                                            bordered: true,
                                            fullWidth: true,
                                            size: "lg",
                                            placeholder: "Phone Number"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(flex/* Flex */.k, {
                                    css: {
                                        "gap": "$10",
                                        "flexWrap": "wrap",
                                        "@lg": {
                                            flexWrap: "nowrap"
                                        }
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Input, {
                                            label: "Department",
                                            clearable: true,
                                            bordered: true,
                                            fullWidth: true,
                                            size: "lg",
                                            placeholder: "Department"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Input, {
                                            label: "Company",
                                            clearable: true,
                                            bordered: true,
                                            fullWidth: true,
                                            size: "lg",
                                            placeholder: "Company"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Divider, {
                        css: {
                            my: "$5"
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Modal.Footer, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                            auto: true,
                            onClick: closeHandler,
                            children: "Add User"
                        })
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/accounts/index.tsx















const Accounts = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(flex/* Flex */.k, {
        css: {
            "mt": "$5",
            "px": "$6",
            "@sm": {
                mt: "$10",
                px: "$16"
            }
        },
        justify: "center",
        direction: "column",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Breadcrumbs, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Crumb, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(HouseIcon, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(CrumbLink, {
                                    href: "#",
                                    children: "Home"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                children: "/"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Crumb, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(UsersIcon, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(CrumbLink, {
                                href: "#",
                                children: "Users"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                children: "/"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Crumb, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(CrumbLink, {
                            href: "#",
                            children: "List"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                h3: true,
                children: "All Accounts"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(flex/* Flex */.k, {
                css: {
                    gap: "$8"
                },
                align: "center",
                justify: "between",
                wrap: "wrap",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(flex/* Flex */.k, {
                        css: {
                            "gap": "$6",
                            "flexWrap": "wrap",
                            "@sm": {
                                flexWrap: "nowrap"
                            }
                        },
                        align: "center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Input, {
                                css: {
                                    width: "100%",
                                    maxW: "410px"
                                },
                                placeholder: "Search users"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(settings_icon/* SettingsIcon */.e, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(TrashIcon, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(InfoIcon, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(DotsIcon, {})
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(flex/* Flex */.k, {
                        direction: "row",
                        css: {
                            gap: "$6"
                        },
                        wrap: "wrap",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(AddUser, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                auto: true,
                                iconRight: /*#__PURE__*/ jsx_runtime_.jsx(ExportIcon, {}),
                                children: "Export to CSV"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(TableWrapper, {})
        ]
    });
};

;// CONCATENATED MODULE: ./pages/employees.tsx



const accounts = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(Accounts, {});
};
/* harmony default export */ const employees = (accounts);


/***/ }),

/***/ 6735:
/***/ ((module) => {

module.exports = require("@nextui-org/react");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,965,197], () => (__webpack_exec__(6845)));
module.exports = __webpack_exports__;

})();