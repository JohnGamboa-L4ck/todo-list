/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --light92: hsl(0, 0%, 92%);\n    --light88: hsl(0, 0%, 88%);\n    --dark: hsl(0, 0%, 12%);\n    --malibu: hsl(192, 93%, 72%);\n    --auburn: hsl(0, 75%, 65%);\n    --mariner: hsl(216, 75%, 51%);\n    --laurel: hsl(120, 100%, 25%);\n    --purple: hsl(264, 61%, 47%);\n    --sun: hsl(34, 93%, 48%);\n    --transparent1: rgba(0,0,0,.1);\n    --transparent2: rgba(0,0,0,.2);\n\n    --background: var(--light92);\n    --foreground: var(--malibu);\n}\n\n*, *:before, *:after {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;  \n}\n\nhtml,\nbody {\n    overflow-x: hidden;\n}\n\nbody {\n    min-height: 100vh;\n    background-color: var(--background);\n    font-family:sans-serif;\n    color: var(--dark);\n}\n\nbutton,\n.search-input {\n    outline: none;\n    border: none;\n    border-radius: 3px;\n    font-family:sans-serif;\n}\n\nbutton {\n    padding: .125rem;\n    color: var(--dark);\n    background-color: transparent;\n}\n\nbutton,\n.ic-div {\n    cursor: pointer;\n}\n\nspan.mid {\n    vertical-align: middle;\n}\n\nspan,\nh1 {\n    user-select: none;\n}\n\n.app {\n    display: flex;\n    flex-direction: column;\n    width: 100vw;\n    height: 100vh;\n}\n\n.nav-comp ,\n.nc-left,\n.search-div,\n.nc-right {\n    display: inline-flex;\n}\n\n.nav-comp {\n    justify-content: space-between;\n    width: 100%;\n    padding: .5rem 3rem .5rem 3rem;\n    background-color: var(--foreground);\n}\n\n.nc-left > * {\n    margin: 0 .25rem 0 0;\n}\n\n.nc-right > * {\n    margin: 0 0 0 .25rem;\n}\n\n.nc-right button:first-child {\n    margin: 0;\n}\n\n.search-div {\n    height: 100%;\n    background-color: var(--foreground);\n}\n\n.search-div > span:first-child {\n    align-self: center;\n    cursor: text;\n    margin: .1rem;\n    font-size: 1.6rem;\n    z-index: 2;\n}\n\n.search-div button {\n    margin: .2rem 0 .2rem -1.5rem;\n    height: 20px;\n    width: 20px;\n    align-self: center;\n    display: none;\n}\n\n.search-div button:hover,\n.search-div button:focus-visible {\n    color: var(--auburn);\n}\n\n.search-input {\n    padding: 0 1.6rem 0 1.8rem;\n    margin-left: -1.9rem;\n    background-color: var(--transparent1);\n}\n\n.search-input::-webkit-search-cancel-button {\n    -webkit-appearance: none;\n}\n\n.search-input:not(:placeholder-shown) + button {\n    display: block;\n}\n\n.search-div:focus-within .search-input,\n.search-div:hover .search-input,\n.search-input:not(:placeholder-shown){\n    background-color: var(--light92);\n}\n\n.search-div button span {\n    font-size: 1rem;\n}\n\n.app-body {\n    display: flex;\n    flex: 1;\n    max-height: calc(100% - 46.59px);\n    overflow-y: hidden;\n}\n\n.wrapper {\n    height: 100%;\n    width: 100%;\n    display: flex;\n}\n\n.info-comp {\n    display: flex;\n    flex-direction: column;\n    padding: 2rem .25rem 0 2.8rem;\n    background-color: var(--light88);\n    overflow-y: auto;\n}\n\n.info-comp > * {\n    text-align: left;\n    font-size: .9rem;\n    width: 294px;\n    padding: 5px;\n}\n\n.info-comp > * > samp {\n    float: right;\n    opacity: .5;\n    margin: 4px 1rem 4px 0;\n}\n\n.ic-div {\n    margin: .25rem 0 0 0;\n}\n\n.info-comp > div:first-of-type{\n    margin: 1rem 0 0 0;\n}\n\n.ic-span {\n    margin: 0 .25rem 0 0;\n}\n\n.info-comp > button:first-child span {\n    color: var(--mariner);\n}\n\n.info-comp > button:nth-child(2) span {\n    color: var(--laurel);\n}\n\n.info-comp > button:nth-child(3) span {\n    color: var(--purple);\n}\n\n.info-comp .active {\n    background-color: var(--malibu);\n}\n\n.opa {\n    opacity: .5;\n}\n\n.ic-add-btn {\n    float: right;\n    margin: 0px .5rem 0 0;\n    padding: 0;\n    display: none;\n}\n\n.ic-add-btn:hover + strong,\n.ic-add-btn:focus-visible + strong {\n    text-decoration: underline;\n    text-underline-offset: 30%;\n}\n\n.info-comp:focus-within .ic-add-btn,\n.info-comp:hover .ic-add-btn{\n    display: inherit;\n}\n\n.ic-div > div {\n    display: none;\n}\n\n.ic-div > div.show {\n    display: flex;\n    flex-direction: column;\n}\n\n.ic-project > span.rotate,\n.ic-label > span.rotate {\n    transform: rotate(90deg);\n}\n\n\n.show {\n    margin: .75rem 0 0 0;\n}\n\n.show > div {\n    text-align: left;\n    display: flex;\n    padding: .5rem .5rem .5rem .5rem;\n    height: 34px;\n    font-size: .9rem;\n    align-items: center;\n    border-radius: 3px;\n}\n\nspan.unique {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    align-self: center;\n    margin-right: .2rem;\n}\n\n.show button {\n    padding: 0;\n    visibility: hidden;\n}\n\n.show > div:hover,\n.show > div:focus-visible {\n    background-color: var(--transparent2);\n}\n\n.show > div:hover button,\n.show > div:focus-visible button,\n.show > div:focus-within button{\n    visibility: visible;\n    margin-left: auto;\n}\n\n.show button:hover,\n.show button:focus-visible {\n    background-color: transparent!important;\n}\n\n.bullet {\n    min-width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    margin: 0 .7rem 0 .5rem;\n    background-color: var(--transparent2);\n}\n\n.tag {\n    transform: scale(.8);\n    margin: 0 .2rem 0 .2rem;\n    color: var(--transparent2);\n}\n\n.container {\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    overflow-y: auto;\n    padding: 0 2rem 0 2rem;\n\n}\n\n.container > * {\n    max-width: 800px;\n    width: 100%;\n}\n\n.container > footer {\n    margin-top: auto;\n}\n\n.container > header {\n    padding: 2rem 0 1rem 0;\n    position: sticky;\n    top: 0;\n    background-color: var(--light92);\n    z-index: 3;\n}\n\nh1 {\n    font-size: 1.3rem;\n}\n\n.todo {\n    display: flex;\n    padding: 2px 0;\n    margin: .5rem 0 .5rem 0;\n    justify-content: flex-start;\n    flex-direction: row;\n    border-bottom: 1px solid var(--transparent1);\n}\n\n.todo,\n.todo * {\n    cursor: pointer;\n}\n\n.checkbox-btn { \n    height: 18px;\n    max-width: 18px;\n    width: 100%;\n    margin: .27rem .7rem 0 0;\n    z-index: 2;\n    position: relative;\n}\n\n.checkbox-btn.prio1 {\n    border: 2px solid var(--auburn);\n}\n\n.checkbox-btn.prio2 {\n    border: 2px solid var(--sun);\n}\n\n.checkbox-btn.prio3 {\n    border: 2px solid var(--mariner);\n}\n\n.checkbox-btn.prio4 {\n    border: 2px solid var(--transparent2);\n}\n\n.checkbox-btn:hover,\n.checkbox-btn:focus-visible {\n    border-color: transparent;\n    background-color: var(--transparent1);\n}\n\n.checkbox-btn + span {\n    padding: 0;\n    line-height: 1rem;\n    font-size: 2rem;\n    position: relative;\n    color: var(--transparent2);\n    visibility: hidden;\n    float: right;\n    margin: -.9rem 0 0 -1rem;    \n}\n\n.checkbox-btn:hover + span,\n.checkbox-btn:focus-visible + span {\n    visibility: visible;\n}\n\n.checkbox-btn:active + span{\n    color: var(--laurel);\n}\n\n.todo-text {\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n}\n\n.todo-text > label {\n    line-height: 1.4rem;\n}\n\n.todo-text-note {\n    text-indent: 1rem;\n    font-size: .9rem;\n    margin: 0 0 .25rem 0;\n}\n\n.todo-text-note,\n.todo-text-note > span,\n.todo-text small {\n    color: gray;\n}\n\n.todo-text-note > span,\nem,\nem > span {\n    font-size: .9rem!important;\n}\n\n.todo-text small:hover,\n.todo-text small:focus-visible {\n    text-decoration: underline;\n}\n\nem {\n    width: 100%;\n}\n\n.sched-due {\n    color: var(--auburn);\n}\n\n.sched-today {\n    color: var(--laurel);\n}\n\n.sched-upcom {\n    color: var(--purple);\n}\n\n.todo-tools-container {\n    display: flex;\n    justify-content: flex-end;\n    align-items: flex-end;\n    margin: -20px 0 0 0;\n    visibility: hidden;\n}\n\n.todo-tools-container * {\n    color: gray;\n}\n\n.tool-span {\n    font-size: 1.2rem;\n}\n\n.todo:hover .todo-tools-container,\n.todo:focus-within .todo-tools-container {\n    visibility: visible;\n}\n\nbutton:hover,\nbutton:focus-visible {\n    background-color: var(--transparent2);\n}\n\nbutton:focus-visible {\n    outline: auto;\n}\n\n.add-task-btn {\n    text-align: left;\n    color: gray;\n}\n\n.add-task-btn * {\n    padding: .1rem;\n}\n\n.add-task-btn span {\n    border-radius: 50%;\n    padding: 0;\n    color: var(--auburn);\n}\n\n.add-task-btn:hover,\n.add-task-btn:focus-visible,\n.add-task-btn span {\n    background-color: transparent;\n}\n\n.add-task-btn:hover span,\n.add-task-btn:focus-visible span {\n    color: var(--mariner);\n}\n\n.empty-state-div {\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    justify-content: center;\n    align-items: center;\n}\n\n.empty-state-div img {\n    max-width: 180px;\n    \n    height: auto;\n}\n\n.empty-state-div h4 {\n    font-weight: normal;\n    color: gray;\n}\n\n.empty-state-div *:nth-child(n+2) {\n    margin: .25rem 0 0 0;\n}\n\n.empty-state-div *:nth-child(n+2),\n.container footer p {\n    text-align: center;\n}\n\n.empty-state-div p {\n    font-size: .9rem;\n    color: darkgray;\n}\n\n.container footer {\n    color: var(--auburn);\n    font-size: .9rem!important;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: .25rem 0 .75rem 0;\n}\n\n.container footer span {\n    font-size: 1.25rem!important;\n}\n\n.container footer p {\n    text-decoration: underline;\n    cursor: pointer;\n}\n\n.container:not(.empty) .empty-state-div,\n.container:not(.empty) footer {\n    display: none;\n}\n\n.add-task-div {\n    border: 1px solid var(--transparent2);\n    border-radius: 3px;\n    padding: 0 .5rem .5rem .5rem;\n    height: 68.48px;\n    margin-top: 1rem;\n}\n\n.add-task-div > * {\n    margin-top: .5rem;\n}\n\n.add-task-div input,\n.quick-add-todo input {\n    width: 100%;\n    outline: none;\n    border: none;\n    font-size: .9rem;\n    background-color: var(--light92);\n}\n\n.add-task-btns-container {\n    display: flex;\n    justify-content: space-between;\n}\n\n.add-task-btns-container div > button {\n    border: 1px solid var(--transparent2);\n    padding: .25rem;\n}\n\n.add-task-btns-container button > span {\n    font-size: .9rem!important;\n}\n\n.add-task-btns-container > button:nth-child(2) span {\n    color: var(--mariner);\n}\n\n.select-project-btn {\n    max-width: 75px;\n    overflow: hidden;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.scheduler,\n.carrier {\n    max-width: 210px;\n    width: 100%;    \n}\n\n.scheduler,\n.carrier,\n.labeler,\n.prio-setter {\n    background-color: var(--light92);\n    border-radius: 3px;\n    z-index: 2;\n    position: relative;\n    margin: 0 0 0 0;\n    box-shadow: 0 1px 8px 0 rgb(0 0 0 / 8%),\n        0 0 1px 0 rgb(0 0 0 / 30%);\n    display: none;\n}\n\n.scheduler > *,\n.carrier > * {\n    width: 100%;\n    text-align: left;\n    padding: .5rem .5rem .5rem .5rem;\n}\n\n.sched {\n    display: flex;\n    justify-content: space-between;\n}\n\n.sched span:nth-child(2) {\n    text-align: right;\n    color: gray;\n}\n\n.scheduler input[type=\"date\"]::-webkit-calendar-picker-indicator {\n    opacity: .4;\n    cursor: pointer;\n}\n\n.scheduler input[type=\"date\"]::-webkit-calendar-picker-indicator:hover {\n    opacity: 1;\n}\n\n.scheduler .sched-custom {\n    display: flex;\n}\n\n.scheduler .sched-custom button {\n    border: 1px solid var(--transparent1);\n}\n\n.scheduler .sched-custom input {\n    background: transparent;\n}\n\n.scheduler .sched-custom button > span,\n.carrier span,\n.labeler span,\n.prio-setter span {\n    font-size: .9rem!important;\n}\n\n.prio-setter button:first-child span {\n    color: var(--auburn);\n}\n\n.prio-setter button:nth-child(2) span {\n    color: var(--sun);\n}\n\n.prio-setter button:nth-child(3) span {\n    color: var(--mariner);\n}\n\n.prio-setter button:nth-child(4) span {\n    color: gray;\n}\n\n.carrier {\n    margin: 0 0 0 -.7rem;\n    max-width: 160px;\n    width: 100%;\n}\n\n.carrier button,\n.labeler button,\n.prio-setter button {\n    display: flex;\n    align-items: center;\n}\n\n.carrier u,\n.labeler u,\n.prio-setter u {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    margin: 0 0 0 .25rem;\n}\n\n.labeler,\n.prio-setter {\n    background-color: transparent;\n    border: none;\n    box-shadow: none;\n}\n\n.labeler div,\n.prio-setter div {\n    max-width: 160px;\n    width: 100%; \n    display: flex;\n    flex-direction: column;\n    margin: 0 1.8rem 0 auto;\n    background-color: var(--light92);\n    box-shadow: 0 1px 8px 0 rgb(0 0 0 / 8%),\n        0 0 1px 0 rgb(0 0 0 / 30%);\n    border-radius: 3px;\n}\n\n.prio-setter div {\n    margin: 0 0 0 auto;\n    max-width: 88px;\n}\n\n.prio-setter u {\n    text-decoration: none;\n}\n\n.labeler button,\n.prio-setter button {\n    text-align: left;\n    padding: .5rem;\n}\n\n.scheduler .sched-custom button:hover > span,\n.scheduler .sched-custom button:focus-visible > span {\n    color: var(--laurel);\n}\n\n.add-task-div.display-scheduler .scheduler {\n    display: inherit;\n}\n\n.add-task-div.display-carrier .carrier,\n.add-task-div.display-labeler .labeler,\n.add-task-div.display-prio-setter .prio-setter {\n    display: block;\n}\n\n.add-task-div .selected,\n.add-task-div .active {\n    background-color: var(--transparent1);\n}\n\n.add-task-main-btns-container {\n    padding: .5rem 0 .5rem 0;\n}\n\n.add-task-main-btns-container button {\n    padding: .25rem;\n}\n\n.add-task-main-btns-container button:first-child {\n    background-color: var(--malibu);\n    border: 1px solid var(--transparent2);\n}\n\n.container.add-triggered .add-task-btn-div {\n    display: none;\n}\n\n.container:not(.add-triggered) .add-task-div,\n.container:not(.add-triggered) .add-task-main-btns-container {\n    display: none;\n}\n\n.quick-add-todo,\n.project-creator,\n.label-creator,\n.todo-editor,\n.project-editor,\n.label-editor {\n    display: none;\n    position: absolute;\n    place-items: center;\n    height: 100%;\n    width: 100%;\n    background-color: var(--transparent2);\n    z-index: 999;\n}\n\n.quick-add-todo > *,\n.quick-add-todo input {\n    width: 100%;\n}\n\n.quick-add-todo > div {\n    background-color: var(--light92);\n    max-width: 480px;\n    width: 100%;\n    border-radius: 3px;\n    padding: .5rem .5rem .5rem .5rem;\n}\n\n.quick-add-todo > div > *:not(:first-child) {\n    margin: .5rem 0 0 0;\n}\n\n.quick-add-todo button {\n    padding: .25rem;\n}\n\n.quick-add-todo button:first-child {\n    background-color: var(--mariner);\n}\n\n.quick-add-todo button:hover,\n.quick-add-todo button:focus-visible {\n    color: var(--light92);\n}\n\n.quick-add-todo.on {\n    display: grid;\n}\n\n.notifications {\n    display: none;\n    position: absolute;\n    inset: 0;\n    background-color: transparent;\n    z-index: 999;\n}\n\n.notif-container {\n    display: flex;\n    flex-direction: column;\n    background-color: var(--light92);\n    margin: 40px 0 auto auto;\n    padding: .5rem;\n    max-width: 420px;\n    width: 100%;\n    max-height: 320px;\n    overflow-x: hidden;\n    overflow-y: auto;\n    box-shadow: 0 1px 8px 0 rgb(0 0 0 / 8%),\n        0 0 1px 0 rgb(0 0 0 / 30%);\n    border-radius: 3px;\n}\n\n.notif-container nav {\n    display: flex;\n    align-items: center;\n    padding: 0 0 .25rem 0;\n    border-bottom: 1px solid var(--transparent2);\n}\n\n.notif-container nav > * {\n    font-size: .9rem;\n    cursor: pointer;\n}\n\n.notif-container button:first-of-type{\n    margin: 0 0 0 .5rem;\n}\n\n.nav-btn-notification small {\n    position: absolute; \n    color: var(--auburn);\n    margin-left: -.85rem; \n    background-color: var(--malibu);\n    padding: 0 1px;\n}\n\n.nav-btn-notification:hover small,\n.nav-btn-notification:focus-visible small {\n    background-color: transparent!important;\n    color: var(--light92)!important;\n    font-weight: bold;\n}\n\n.read-all-btn {\n    margin: 0 0 0 auto!important;\n}\n\n.read-all-btn span {\n    font-size: 1.2rem;\n}\n\n.notif-output {\n    margin: 0 .25rem;\n    overflow-y: auto;\n    /* overflow-x: hidden; */\n}\n\n.notif-output > * {\n    margin: .25rem 0 0 0;\n    border-bottom: 1px solid var(--transparent1);\n    padding: 0 0 .25rem 0;\n    \n}\n\n.notif {\n    display: flex;\n    flex-direction: column;\n}\n\n.notif > *,\n.notif-extra button span{\n    font-size: .9rem;  \n}\n\n.notif > span {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.notif-extra {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.notif small {\n    color: var(--auburn);\n}\n\n.notifications.on {\n    display: flex;\n\n}\n\n.app.search .add-task-btn-div{\n    display: none;\n}\n\n.project-creator > div,\n.label-creator > div,\n.todo-editor > div,\n.project-editor > div,\n.label-editor > div {\n    background-color: var(--light92);\n    max-width: 420px;\n    width: 100%;\n    border-radius: 3px;\n}\n\n.project-creator > div > *,\n.label-creator > div > *,\n.todo-editor > div > *,\n.project-editor > div > *,\n.label-editor > div > * {\n    padding: .5rem;\n    margin: 0 0 .25rem 0;\n}\n\n.project-creator > div > *:first-child, \n.project-creator > div > *:nth-child(2),\n.label-creator > div > *:first-child, \n.label-creator > div > *:nth-child(2),\n.todo-editor > div > *:first-child, \n.todo-editor > div > *:nth-child(2),\n.project-editor > div > *:first-child,\n.project-editor > div > *:nth-child(2),\n.label-editor > div > *:first-child,\n.label-editor > div > *:nth-child(2) {\n    border-bottom: 1px solid var(--transparent1);\n}\n\n.project-creator > div,\n.project-input,\n.label-creator > div,\n.label-input,\n.todo-editor > div,\n.todo-editor-input,\n.project-editor > div,\n.project-editor-input,\n.label-editor > div,\n.label-editor-input {\n    display: flex;\n    flex-direction: column;\n}\n\n.project-input > *,\n.label-input > *,\n.todo-editor-input > *,\n.project-editor-input > *,\n.label-editor-input > * {\n    margin: 0 0 .25rem 0;\n}\n\n.project-input input,\n.label-input input,\n.todo-editor-input input,\n.todo-editor-input select,\n.project-editor-input input,\n.label-editor-input input {\n    border: none;\n    outline: none;\n    border-radius: 2px;\n    padding: .25rem;\n}\n\n.todo-editor-input {\n    overflow-y: auto;\n}\n\n.todo-editor-input {\n    padding-top: 0!important;\n}\n\n.todo-editor-input label {\n    margin: .25rem 0 .1rem 0;\n}\n\n.project-buttons,\n.label-buttons,\n.todo-editor-buttons,\n.update-project-buttons,\n.update-label-buttons {\n    display: flex;\n    justify-content: flex-end;    \n    margin-bottom: 0!important;\n}\n\n.project-creator button,\n.label-creator button,\n.todo-editor button,\n.project-editor button,\n.label-editor button {\n    padding: .25rem;\n    margin: 0 0 0 .25rem;\n    background-color: var(--transparent1);\n}\n\n.project-creator button:first-child,\n.label-creator button:first-child,\n.todo-editor button:first-child,\n.project-editor button:first-child,\n.label-editor button:first-child {\n    background-color: var(--mariner);\n}\n\n.update-project-buttons button:nth-child(3),\n.update-label-buttons button:nth-child(3) {\n    background-color: var(--auburn);\n}\n\n.project-creator.on,\n.label-creator.on,\n.todo-editor.on,\n.project-editor.on,\n.label-editor.on {\n    display: grid;\n}\n\n.project-input input:focus-visible,\n.label-input input:focus-visible,\n.todo-editor-input input:focus-visible,\n.project-editor-input input:focus-visible,\n.label-editor-input input:focus-visible {\n    outline: 1px solid var(--transparent2);\n}\n\n@media only screen and (max-width: 750px) {\n    .nav-comp {\n        padding: .5rem .5rem .5rem .5rem;\n    }\n    .info-comp {\n        padding: 1rem .25rem .25rem .25rem;\n        position: absolute;\n        z-index: 1000;\n        top: 47.59px;\n        bottom: 0;\n        display: none;\n    }\n    .info-comp.show-nav {\n        display: flex;\n    }\n    .info-comp > * {\n        width: 294px;\n    }\n    .container > header {\n        padding: 1rem 0 .5rem 0;\n    }\n    .container {\n        padding: 0 1rem 0 1rem;\n    }\n    .quick-add-todo > div {\n        max-width: 400px;\n    }\n}\n\n@media only screen and (max-width: 550px) {\n    .info-comp > * {\n        width: 242px;\n    }\n    .search-input {\n        width: 180px;\n    }\n    .search-input:focus {\n        width: 180px;\n    }\n    .quick-add-todo > div {\n        max-width: 300px;\n    }\n    .notif-container {\n        max-width: 310px;\n    }\n}\n\n@media only screen and (max-width: 321px) {\n    .search-input {\n        max-width: 135px;\n    }\n    .search-input:focus {\n        max-width: 135px;\n    }\n    .quick-add-todo > div {\n        max-width: 270px;\n    }\n    .notif-container {\n        max-width: 270px;\n    }\n}\n\n@media only screen and (max-height: 420px) {\n    .todo-editor-input {\n        max-height: 180px;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --light92: hsl(0, 0%, 92%);\n    --light88: hsl(0, 0%, 88%);\n    --dark: hsl(0, 0%, 12%);\n    --malibu: hsl(192, 93%, 72%);\n    --auburn: hsl(0, 75%, 65%);\n    --mariner: hsl(216, 75%, 51%);\n    --laurel: hsl(120, 100%, 25%);\n    --purple: hsl(264, 61%, 47%);\n    --sun: hsl(34, 93%, 48%);\n    --transparent1: rgba(0,0,0,.1);\n    --transparent2: rgba(0,0,0,.2);\n\n    --background: var(--light92);\n    --foreground: var(--malibu);\n}\n\n*, *:before, *:after {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;  \n}\n\nhtml,\nbody {\n    overflow-x: hidden;\n}\n\nbody {\n    min-height: 100vh;\n    background-color: var(--background);\n    font-family:sans-serif;\n    color: var(--dark);\n}\n\nbutton,\n.search-input {\n    outline: none;\n    border: none;\n    border-radius: 3px;\n    font-family:sans-serif;\n}\n\nbutton {\n    padding: .125rem;\n    color: var(--dark);\n    background-color: transparent;\n}\n\nbutton,\n.ic-div {\n    cursor: pointer;\n}\n\nspan.mid {\n    vertical-align: middle;\n}\n\nspan,\nh1 {\n    user-select: none;\n}\n\n.app {\n    display: flex;\n    flex-direction: column;\n    width: 100vw;\n    height: 100vh;\n}\n\n.nav-comp ,\n.nc-left,\n.search-div,\n.nc-right {\n    display: inline-flex;\n}\n\n.nav-comp {\n    justify-content: space-between;\n    width: 100%;\n    padding: .5rem 3rem .5rem 3rem;\n    background-color: var(--foreground);\n}\n\n.nc-left > * {\n    margin: 0 .25rem 0 0;\n}\n\n.nc-right > * {\n    margin: 0 0 0 .25rem;\n}\n\n.nc-right button:first-child {\n    margin: 0;\n}\n\n.search-div {\n    height: 100%;\n    background-color: var(--foreground);\n}\n\n.search-div > span:first-child {\n    align-self: center;\n    cursor: text;\n    margin: .1rem;\n    font-size: 1.6rem;\n    z-index: 2;\n}\n\n.search-div button {\n    margin: .2rem 0 .2rem -1.5rem;\n    height: 20px;\n    width: 20px;\n    align-self: center;\n    display: none;\n}\n\n.search-div button:hover,\n.search-div button:focus-visible {\n    color: var(--auburn);\n}\n\n.search-input {\n    padding: 0 1.6rem 0 1.8rem;\n    margin-left: -1.9rem;\n    background-color: var(--transparent1);\n}\n\n.search-input::-webkit-search-cancel-button {\n    -webkit-appearance: none;\n}\n\n.search-input:not(:placeholder-shown) + button {\n    display: block;\n}\n\n.search-div:focus-within .search-input,\n.search-div:hover .search-input,\n.search-input:not(:placeholder-shown){\n    background-color: var(--light92);\n}\n\n.search-div button span {\n    font-size: 1rem;\n}\n\n.app-body {\n    display: flex;\n    flex: 1;\n    max-height: calc(100% - 46.59px);\n    overflow-y: hidden;\n}\n\n.wrapper {\n    height: 100%;\n    width: 100%;\n    display: flex;\n}\n\n.info-comp {\n    display: flex;\n    flex-direction: column;\n    padding: 2rem .25rem 0 2.8rem;\n    background-color: var(--light88);\n    overflow-y: auto;\n}\n\n.info-comp > * {\n    text-align: left;\n    font-size: .9rem;\n    width: 294px;\n    padding: 5px;\n}\n\n.info-comp > * > samp {\n    float: right;\n    opacity: .5;\n    margin: 4px 1rem 4px 0;\n}\n\n.ic-div {\n    margin: .25rem 0 0 0;\n}\n\n.info-comp > div:first-of-type{\n    margin: 1rem 0 0 0;\n}\n\n.ic-span {\n    margin: 0 .25rem 0 0;\n}\n\n.info-comp > button:first-child span {\n    color: var(--mariner);\n}\n\n.info-comp > button:nth-child(2) span {\n    color: var(--laurel);\n}\n\n.info-comp > button:nth-child(3) span {\n    color: var(--purple);\n}\n\n.info-comp .active {\n    background-color: var(--malibu);\n}\n\n.opa {\n    opacity: .5;\n}\n\n.ic-add-btn {\n    float: right;\n    margin: 0px .5rem 0 0;\n    padding: 0;\n    display: none;\n}\n\n.ic-add-btn:hover + strong,\n.ic-add-btn:focus-visible + strong {\n    text-decoration: underline;\n    text-underline-offset: 30%;\n}\n\n.info-comp:focus-within .ic-add-btn,\n.info-comp:hover .ic-add-btn{\n    display: inherit;\n}\n\n.ic-div > div {\n    display: none;\n}\n\n.ic-div > div.show {\n    display: flex;\n    flex-direction: column;\n}\n\n.ic-project > span.rotate,\n.ic-label > span.rotate {\n    transform: rotate(90deg);\n}\n\n\n.show {\n    margin: .75rem 0 0 0;\n}\n\n.show > div {\n    text-align: left;\n    display: flex;\n    padding: .5rem .5rem .5rem .5rem;\n    height: 34px;\n    font-size: .9rem;\n    align-items: center;\n    border-radius: 3px;\n}\n\nspan.unique {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    align-self: center;\n    margin-right: .2rem;\n}\n\n.show button {\n    padding: 0;\n    visibility: hidden;\n}\n\n.show > div:hover,\n.show > div:focus-visible {\n    background-color: var(--transparent2);\n}\n\n.show > div:hover button,\n.show > div:focus-visible button,\n.show > div:focus-within button{\n    visibility: visible;\n    margin-left: auto;\n}\n\n.show button:hover,\n.show button:focus-visible {\n    background-color: transparent!important;\n}\n\n.bullet {\n    min-width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    margin: 0 .7rem 0 .5rem;\n    background-color: var(--transparent2);\n}\n\n.tag {\n    transform: scale(.8);\n    margin: 0 .2rem 0 .2rem;\n    color: var(--transparent2);\n}\n\n.container {\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    overflow-y: auto;\n    padding: 0 2rem 0 2rem;\n\n}\n\n.container > * {\n    max-width: 800px;\n    width: 100%;\n}\n\n.container > footer {\n    margin-top: auto;\n}\n\n.container > header {\n    padding: 2rem 0 1rem 0;\n    position: sticky;\n    top: 0;\n    background-color: var(--light92);\n    z-index: 3;\n}\n\nh1 {\n    font-size: 1.3rem;\n}\n\n.todo {\n    display: flex;\n    padding: 2px 0;\n    margin: .5rem 0 .5rem 0;\n    justify-content: flex-start;\n    flex-direction: row;\n    border-bottom: 1px solid var(--transparent1);\n}\n\n.todo,\n.todo * {\n    cursor: pointer;\n}\n\n.checkbox-btn { \n    height: 18px;\n    max-width: 18px;\n    width: 100%;\n    margin: .27rem .7rem 0 0;\n    z-index: 2;\n    position: relative;\n}\n\n.checkbox-btn.prio1 {\n    border: 2px solid var(--auburn);\n}\n\n.checkbox-btn.prio2 {\n    border: 2px solid var(--sun);\n}\n\n.checkbox-btn.prio3 {\n    border: 2px solid var(--mariner);\n}\n\n.checkbox-btn.prio4 {\n    border: 2px solid var(--transparent2);\n}\n\n.checkbox-btn:hover,\n.checkbox-btn:focus-visible {\n    border-color: transparent;\n    background-color: var(--transparent1);\n}\n\n.checkbox-btn + span {\n    padding: 0;\n    line-height: 1rem;\n    font-size: 2rem;\n    position: relative;\n    color: var(--transparent2);\n    visibility: hidden;\n    float: right;\n    margin: -.9rem 0 0 -1rem;    \n}\n\n.checkbox-btn:hover + span,\n.checkbox-btn:focus-visible + span {\n    visibility: visible;\n}\n\n.checkbox-btn:active + span{\n    color: var(--laurel);\n}\n\n.todo-text {\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n}\n\n.todo-text > label {\n    line-height: 1.4rem;\n}\n\n.todo-text-note {\n    text-indent: 1rem;\n    font-size: .9rem;\n    margin: 0 0 .25rem 0;\n}\n\n.todo-text-note,\n.todo-text-note > span,\n.todo-text small {\n    color: gray;\n}\n\n.todo-text-note > span,\nem,\nem > span {\n    font-size: .9rem!important;\n}\n\n.todo-text small:hover,\n.todo-text small:focus-visible {\n    text-decoration: underline;\n}\n\nem {\n    width: 100%;\n}\n\n.sched-due {\n    color: var(--auburn);\n}\n\n.sched-today {\n    color: var(--laurel);\n}\n\n.sched-upcom {\n    color: var(--purple);\n}\n\n.todo-tools-container {\n    display: flex;\n    justify-content: flex-end;\n    align-items: flex-end;\n    margin: -20px 0 0 0;\n    visibility: hidden;\n}\n\n.todo-tools-container * {\n    color: gray;\n}\n\n.tool-span {\n    font-size: 1.2rem;\n}\n\n.todo:hover .todo-tools-container,\n.todo:focus-within .todo-tools-container {\n    visibility: visible;\n}\n\nbutton:hover,\nbutton:focus-visible {\n    background-color: var(--transparent2);\n}\n\nbutton:focus-visible {\n    outline: auto;\n}\n\n.add-task-btn {\n    text-align: left;\n    color: gray;\n}\n\n.add-task-btn * {\n    padding: .1rem;\n}\n\n.add-task-btn span {\n    border-radius: 50%;\n    padding: 0;\n    color: var(--auburn);\n}\n\n.add-task-btn:hover,\n.add-task-btn:focus-visible,\n.add-task-btn span {\n    background-color: transparent;\n}\n\n.add-task-btn:hover span,\n.add-task-btn:focus-visible span {\n    color: var(--mariner);\n}\n\n.empty-state-div {\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    justify-content: center;\n    align-items: center;\n}\n\n.empty-state-div img {\n    max-width: 180px;\n    \n    height: auto;\n}\n\n.empty-state-div h4 {\n    font-weight: normal;\n    color: gray;\n}\n\n.empty-state-div *:nth-child(n+2) {\n    margin: .25rem 0 0 0;\n}\n\n.empty-state-div *:nth-child(n+2),\n.container footer p {\n    text-align: center;\n}\n\n.empty-state-div p {\n    font-size: .9rem;\n    color: darkgray;\n}\n\n.container footer {\n    color: var(--auburn);\n    font-size: .9rem!important;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: .25rem 0 .75rem 0;\n}\n\n.container footer span {\n    font-size: 1.25rem!important;\n}\n\n.container footer p {\n    text-decoration: underline;\n    cursor: pointer;\n}\n\n.container:not(.empty) .empty-state-div,\n.container:not(.empty) footer {\n    display: none;\n}\n\n.add-task-div {\n    border: 1px solid var(--transparent2);\n    border-radius: 3px;\n    padding: 0 .5rem .5rem .5rem;\n    height: 68.48px;\n    margin-top: 1rem;\n}\n\n.add-task-div > * {\n    margin-top: .5rem;\n}\n\n.add-task-div input,\n.quick-add-todo input {\n    width: 100%;\n    outline: none;\n    border: none;\n    font-size: .9rem;\n    background-color: var(--light92);\n}\n\n.add-task-btns-container {\n    display: flex;\n    justify-content: space-between;\n}\n\n.add-task-btns-container div > button {\n    border: 1px solid var(--transparent2);\n    padding: .25rem;\n}\n\n.add-task-btns-container button > span {\n    font-size: .9rem!important;\n}\n\n.add-task-btns-container > button:nth-child(2) span {\n    color: var(--mariner);\n}\n\n.select-project-btn {\n    max-width: 75px;\n    overflow: hidden;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.scheduler,\n.carrier {\n    max-width: 210px;\n    width: 100%;    \n}\n\n.scheduler,\n.carrier,\n.labeler,\n.prio-setter {\n    background-color: var(--light92);\n    border-radius: 3px;\n    z-index: 2;\n    position: relative;\n    margin: 0 0 0 0;\n    box-shadow: 0 1px 8px 0 rgb(0 0 0 / 8%),\n        0 0 1px 0 rgb(0 0 0 / 30%);\n    display: none;\n}\n\n.scheduler > *,\n.carrier > * {\n    width: 100%;\n    text-align: left;\n    padding: .5rem .5rem .5rem .5rem;\n}\n\n.sched {\n    display: flex;\n    justify-content: space-between;\n}\n\n.sched span:nth-child(2) {\n    text-align: right;\n    color: gray;\n}\n\n.scheduler input[type=\"date\"]::-webkit-calendar-picker-indicator {\n    opacity: .4;\n    cursor: pointer;\n}\n\n.scheduler input[type=\"date\"]::-webkit-calendar-picker-indicator:hover {\n    opacity: 1;\n}\n\n.scheduler .sched-custom {\n    display: flex;\n}\n\n.scheduler .sched-custom button {\n    border: 1px solid var(--transparent1);\n}\n\n.scheduler .sched-custom input {\n    background: transparent;\n}\n\n.scheduler .sched-custom button > span,\n.carrier span,\n.labeler span,\n.prio-setter span {\n    font-size: .9rem!important;\n}\n\n.prio-setter button:first-child span {\n    color: var(--auburn);\n}\n\n.prio-setter button:nth-child(2) span {\n    color: var(--sun);\n}\n\n.prio-setter button:nth-child(3) span {\n    color: var(--mariner);\n}\n\n.prio-setter button:nth-child(4) span {\n    color: gray;\n}\n\n.carrier {\n    margin: 0 0 0 -.7rem;\n    max-width: 160px;\n    width: 100%;\n}\n\n.carrier button,\n.labeler button,\n.prio-setter button {\n    display: flex;\n    align-items: center;\n}\n\n.carrier u,\n.labeler u,\n.prio-setter u {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    margin: 0 0 0 .25rem;\n}\n\n.labeler,\n.prio-setter {\n    background-color: transparent;\n    border: none;\n    box-shadow: none;\n}\n\n.labeler div,\n.prio-setter div {\n    max-width: 160px;\n    width: 100%; \n    display: flex;\n    flex-direction: column;\n    margin: 0 1.8rem 0 auto;\n    background-color: var(--light92);\n    box-shadow: 0 1px 8px 0 rgb(0 0 0 / 8%),\n        0 0 1px 0 rgb(0 0 0 / 30%);\n    border-radius: 3px;\n}\n\n.prio-setter div {\n    margin: 0 0 0 auto;\n    max-width: 88px;\n}\n\n.prio-setter u {\n    text-decoration: none;\n}\n\n.labeler button,\n.prio-setter button {\n    text-align: left;\n    padding: .5rem;\n}\n\n.scheduler .sched-custom button:hover > span,\n.scheduler .sched-custom button:focus-visible > span {\n    color: var(--laurel);\n}\n\n.add-task-div.display-scheduler .scheduler {\n    display: inherit;\n}\n\n.add-task-div.display-carrier .carrier,\n.add-task-div.display-labeler .labeler,\n.add-task-div.display-prio-setter .prio-setter {\n    display: block;\n}\n\n.add-task-div .selected,\n.add-task-div .active {\n    background-color: var(--transparent1);\n}\n\n.add-task-main-btns-container {\n    padding: .5rem 0 .5rem 0;\n}\n\n.add-task-main-btns-container button {\n    padding: .25rem;\n}\n\n.add-task-main-btns-container button:first-child {\n    background-color: var(--malibu);\n    border: 1px solid var(--transparent2);\n}\n\n.container.add-triggered .add-task-btn-div {\n    display: none;\n}\n\n.container:not(.add-triggered) .add-task-div,\n.container:not(.add-triggered) .add-task-main-btns-container {\n    display: none;\n}\n\n.quick-add-todo,\n.project-creator,\n.label-creator,\n.todo-editor,\n.project-editor,\n.label-editor {\n    display: none;\n    position: absolute;\n    place-items: center;\n    height: 100%;\n    width: 100%;\n    background-color: var(--transparent2);\n    z-index: 999;\n}\n\n.quick-add-todo > *,\n.quick-add-todo input {\n    width: 100%;\n}\n\n.quick-add-todo > div {\n    background-color: var(--light92);\n    max-width: 480px;\n    width: 100%;\n    border-radius: 3px;\n    padding: .5rem .5rem .5rem .5rem;\n}\n\n.quick-add-todo > div > *:not(:first-child) {\n    margin: .5rem 0 0 0;\n}\n\n.quick-add-todo button {\n    padding: .25rem;\n}\n\n.quick-add-todo button:first-child {\n    background-color: var(--mariner);\n}\n\n.quick-add-todo button:hover,\n.quick-add-todo button:focus-visible {\n    color: var(--light92);\n}\n\n.quick-add-todo.on {\n    display: grid;\n}\n\n.notifications {\n    display: none;\n    position: absolute;\n    inset: 0;\n    background-color: transparent;\n    z-index: 999;\n}\n\n.notif-container {\n    display: flex;\n    flex-direction: column;\n    background-color: var(--light92);\n    margin: 40px 0 auto auto;\n    padding: .5rem;\n    max-width: 420px;\n    width: 100%;\n    max-height: 320px;\n    overflow-x: hidden;\n    overflow-y: auto;\n    box-shadow: 0 1px 8px 0 rgb(0 0 0 / 8%),\n        0 0 1px 0 rgb(0 0 0 / 30%);\n    border-radius: 3px;\n}\n\n.notif-container nav {\n    display: flex;\n    align-items: center;\n    padding: 0 0 .25rem 0;\n    border-bottom: 1px solid var(--transparent2);\n}\n\n.notif-container nav > * {\n    font-size: .9rem;\n    cursor: pointer;\n}\n\n.notif-container button:first-of-type{\n    margin: 0 0 0 .5rem;\n}\n\n.nav-btn-notification small {\n    position: absolute; \n    color: var(--auburn);\n    margin-left: -.85rem; \n    background-color: var(--malibu);\n    padding: 0 1px;\n}\n\n.nav-btn-notification:hover small,\n.nav-btn-notification:focus-visible small {\n    background-color: transparent!important;\n    color: var(--light92)!important;\n    font-weight: bold;\n}\n\n.read-all-btn {\n    margin: 0 0 0 auto!important;\n}\n\n.read-all-btn span {\n    font-size: 1.2rem;\n}\n\n.notif-output {\n    margin: 0 .25rem;\n    overflow-y: auto;\n    /* overflow-x: hidden; */\n}\n\n.notif-output > * {\n    margin: .25rem 0 0 0;\n    border-bottom: 1px solid var(--transparent1);\n    padding: 0 0 .25rem 0;\n    \n}\n\n.notif {\n    display: flex;\n    flex-direction: column;\n}\n\n.notif > *,\n.notif-extra button span{\n    font-size: .9rem;  \n}\n\n.notif > span {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.notif-extra {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.notif small {\n    color: var(--auburn);\n}\n\n.notifications.on {\n    display: flex;\n\n}\n\n.app.search .add-task-btn-div{\n    display: none;\n}\n\n.project-creator > div,\n.label-creator > div,\n.todo-editor > div,\n.project-editor > div,\n.label-editor > div {\n    background-color: var(--light92);\n    max-width: 420px;\n    width: 100%;\n    border-radius: 3px;\n}\n\n.project-creator > div > *,\n.label-creator > div > *,\n.todo-editor > div > *,\n.project-editor > div > *,\n.label-editor > div > * {\n    padding: .5rem;\n    margin: 0 0 .25rem 0;\n}\n\n.project-creator > div > *:first-child, \n.project-creator > div > *:nth-child(2),\n.label-creator > div > *:first-child, \n.label-creator > div > *:nth-child(2),\n.todo-editor > div > *:first-child, \n.todo-editor > div > *:nth-child(2),\n.project-editor > div > *:first-child,\n.project-editor > div > *:nth-child(2),\n.label-editor > div > *:first-child,\n.label-editor > div > *:nth-child(2) {\n    border-bottom: 1px solid var(--transparent1);\n}\n\n.project-creator > div,\n.project-input,\n.label-creator > div,\n.label-input,\n.todo-editor > div,\n.todo-editor-input,\n.project-editor > div,\n.project-editor-input,\n.label-editor > div,\n.label-editor-input {\n    display: flex;\n    flex-direction: column;\n}\n\n.project-input > *,\n.label-input > *,\n.todo-editor-input > *,\n.project-editor-input > *,\n.label-editor-input > * {\n    margin: 0 0 .25rem 0;\n}\n\n.project-input input,\n.label-input input,\n.todo-editor-input input,\n.todo-editor-input select,\n.project-editor-input input,\n.label-editor-input input {\n    border: none;\n    outline: none;\n    border-radius: 2px;\n    padding: .25rem;\n}\n\n.todo-editor-input {\n    overflow-y: auto;\n}\n\n.todo-editor-input {\n    padding-top: 0!important;\n}\n\n.todo-editor-input label {\n    margin: .25rem 0 .1rem 0;\n}\n\n.project-buttons,\n.label-buttons,\n.todo-editor-buttons,\n.update-project-buttons,\n.update-label-buttons {\n    display: flex;\n    justify-content: flex-end;    \n    margin-bottom: 0!important;\n}\n\n.project-creator button,\n.label-creator button,\n.todo-editor button,\n.project-editor button,\n.label-editor button {\n    padding: .25rem;\n    margin: 0 0 0 .25rem;\n    background-color: var(--transparent1);\n}\n\n.project-creator button:first-child,\n.label-creator button:first-child,\n.todo-editor button:first-child,\n.project-editor button:first-child,\n.label-editor button:first-child {\n    background-color: var(--mariner);\n}\n\n.update-project-buttons button:nth-child(3),\n.update-label-buttons button:nth-child(3) {\n    background-color: var(--auburn);\n}\n\n.project-creator.on,\n.label-creator.on,\n.todo-editor.on,\n.project-editor.on,\n.label-editor.on {\n    display: grid;\n}\n\n.project-input input:focus-visible,\n.label-input input:focus-visible,\n.todo-editor-input input:focus-visible,\n.project-editor-input input:focus-visible,\n.label-editor-input input:focus-visible {\n    outline: 1px solid var(--transparent2);\n}\n\n@media only screen and (max-width: 750px) {\n    .nav-comp {\n        padding: .5rem .5rem .5rem .5rem;\n    }\n    .info-comp {\n        padding: 1rem .25rem .25rem .25rem;\n        position: absolute;\n        z-index: 1000;\n        top: 47.59px;\n        bottom: 0;\n        display: none;\n    }\n    .info-comp.show-nav {\n        display: flex;\n    }\n    .info-comp > * {\n        width: 294px;\n    }\n    .container > header {\n        padding: 1rem 0 .5rem 0;\n    }\n    .container {\n        padding: 0 1rem 0 1rem;\n    }\n    .quick-add-todo > div {\n        max-width: 400px;\n    }\n}\n\n@media only screen and (max-width: 550px) {\n    .info-comp > * {\n        width: 242px;\n    }\n    .search-input {\n        width: 180px;\n    }\n    .search-input:focus {\n        width: 180px;\n    }\n    .quick-add-todo > div {\n        max-width: 300px;\n    }\n    .notif-container {\n        max-width: 310px;\n    }\n}\n\n@media only screen and (max-width: 321px) {\n    .search-input {\n        max-width: 135px;\n    }\n    .search-input:focus {\n        max-width: 135px;\n    }\n    .quick-add-todo > div {\n        max-width: 270px;\n    }\n    .notif-container {\n        max-width: 270px;\n    }\n}\n\n@media only screen and (max-height: 420px) {\n    .todo-editor-input {\n        max-height: 180px;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/getTarget.js */ "./node_modules/style-loader/dist/runtime/getTarget.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = function(css, style){
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
      while (style.firstChild) {
        style.removeChild(style.firstChild);
      }

      style.appendChild(document.createTextNode(css));
    }
  };
options.setAttributes = function(style) {
        var nonce =
           true ? __webpack_require__.nc : 0;

        if (nonce) {
          style.setAttribute("nonce", nonce);
        }
      };
options.insert = function(style){
    var target = _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default()("head");

    if (!target) {
      throw new Error(
        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
      );
    }

    target.appendChild(style);
  };
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/getTarget.js":
/*!*************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/getTarget.js ***!
  \*************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}

module.exports = getTarget;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./src/chilling.svg":
/*!**************************!*\
  !*** ./src/chilling.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "341c5fc4ce220f13bb15.svg";

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "embedLocalStorage": () => (/* binding */ embedLocalStorage),
/* harmony export */   "isEmptyToDoList": () => (/* binding */ isEmptyToDoList),
/* harmony export */   "test": () => (/* binding */ test),
/* harmony export */   "push": () => (/* binding */ push),
/* harmony export */   "dateString": () => (/* binding */ dateString)
/* harmony export */ });


const embedLocalStorage = (() => {
    if(!localStorage.getItem('todos'))
    localStorage.setItem('todos', JSON.stringify({todolist: [], projects: [], labels: []}));
})();

const Todo = function( id, title, dueDate, note, priority, project, label, dueDateNotifSent ){
    return { id, title, dueDate, note, priority, project, label, dueDateNotifSent }
};

const isEmptyToDoList = () => {
    let data = JSON.parse(localStorage.getItem('todos'));
    return !data.todolist.length ? true : false;
};

const push = (() => {
    let _data = JSON.parse(localStorage.getItem('todos'));

    const _embed = () => {
        localStorage.setItem('todos', JSON.stringify(_data));
    };

    const generateId = () => {
        let id = _data.todolist.length + 1;

        if(_data.todolist.length){
            let counter = 0;
            _data.todolist.forEach(() => {
                if(_data.todolist[counter].id == id) { id++; }
            });
        }
        return id;
    };

    const quick = (value) => {
        let todo = Todo(
            generateId(),
            value,
            '',
            '',
            'priority 4',
            'inbox',
            '',
            'none'
        );
        _data.todolist.push(todo);
        _embed();
    };

    const project = (value) => {
        _data.projects.push(value)
        _embed();
    };

    const label = (value) => {
        _data.labels.push(value)
        _embed();
    };

    const task = (title, date = '', priority = 'priority 4', projectName = 'inbox', 
      labelName = '') => {
        let todo = Todo(
            generateId(),
            title,
            date,
            '',
            priority,
            projectName,
            labelName,
            'none'
        );

        _data.todolist.push(todo);
        _embed();
    };

    return {
        quick,
        project,
        label,
        task
    }
})();

const dateString = (() => {
    let dateNow;
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 
        'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    const getString = (target) => {
        let date = target().getDate().toString();
        if(date.length == 2){
            return `${target().getFullYear()}-${target().getMonth()+1}-${target().getDate()}`;
        } else {
            return `${target().getFullYear()}-${target().getMonth()+1}-0${target().getDate()}`;
        }
    };

    const today = () => {
        dateNow = new Date();
        dateNow.setHours(0,0,0,0);
        return dateNow;
    };

    const todayString = () => getString(today);
    const todayName = () => days[today().getDay()];

    const tomorrow = () => {
        dateNow = new Date();
        dateNow.setDate(dateNow.getDate() + 1)
        dateNow.setHours(0,0,0,0);
        return dateNow;
    };

    const twmString = () => getString(tomorrow);
    const tomorrowName = () => days[tomorrow().getDay()];

    const nextWeek = () => {
        dateNow = new Date();
        dateNow.setDate(dateNow.getDate() + 7)
        dateNow.setHours(0,0,0,0);
        return dateNow;
    };

    const nextWeekString = () => getString(nextWeek);

    const nextWeekName = () => {
        return `${days[nextWeek().getDay()]} ${nextWeek().getDate()} ${months[nextWeek().getMonth()]}`;
    };

    return {
        today, todayName,
        tomorrow, tomorrowName,
        nextWeek, nextWeekName,
        todayString, twmString, nextWeekString
    };
})();


const test = (function(){
    // console.log(dateString.todayString())
    // console.log(Date.parse(dateString.todayString()))
    // const todo = Todo(
    //     1,
    //     'finish todo',
    //     '2021-07-31',
    //     '',
    //     'priority 1',
    //     'inbox',
    //     '',
    //     'none'
    // );
    // let array = JSON.parse(localStorage.getItem('todos'));
    // if(!array.length){
    //     array.push(todo);
    //     localStorage.setItem('todos', JSON.stringify(array));
    // }
    // console.log(todo)

    // var dateControl = document.querySelector('input[type="date"]');
    // dateControl.value = '2017-06-01';
    // console.log(dateControl.value); // prints "2017-06-01"
    // console.log(dateControl.valueAsNumber); // prints 1496275200000, a JavaScript timestamp (ms)

    // const datax = '2021-08-8';
    // console.log(datax);
    // console.log(Date.parse(datax))
    // // console.log(datax.valueAsNumber)

    // const today = new Date();
    // today.setHours(0,0,0,0);
    // console.log('today', today);
    // console.log('today number', Date.parse(today));

    // const tomorrow = new Date()
    // tomorrow.setDate(tomorrow.getDate() + 1)
    // tomorrow.setHours(0,0,0,0);
    // console.log(tomorrow);
    // console.log(Date.parse(tomorrow))

    // let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    // let d = new Date(); //or dateString
    // let dayName = days[d.getDay()];
    // console.log(dayName)

    // console.log(dateString.nextWeek());
})();




/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _chilling_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chilling.svg */ "./src/chilling.svg");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.js */ "./src/data.js");



'use strict';

const setLanguage = () => document.querySelector('html').setAttribute('lang', 'en');

const setupHeadTag = () => {
    const headElement = document.querySelector('head');
    const titleElement = document.querySelector('title');

    const newMetaEdge = document.createElement('meta');
    const newLinkMaterialIcon = document.createElement('link');
    const newLinkFavicon = document.createElement('link');

    newMetaEdge.setAttribute('http-equiv','X-UA-Compatible');
    newMetaEdge.setAttribute('content','IE=edge');
    newLinkMaterialIcon.setAttribute('rel', 'stylesheet');
    newLinkMaterialIcon
        .setAttribute('href', 'https://fonts.googleapis.com/icon?family=Material+Icons+Outlined');
    newLinkFavicon.setAttribute('rel', 'icon');
    newLinkFavicon.setAttribute('type', 'image/png');
    newLinkFavicon.setAttribute('href', 'https://openclipart.org/image/400px/303254');

    headElement.insertBefore(newMetaEdge, titleElement);
    headElement.insertBefore(newLinkMaterialIcon, titleElement);
    headElement.appendChild(newLinkFavicon);
};

const createAppDiv = () => {
    const bodyElement = document.querySelector('body');
    const bodyScript = document.querySelector('body script');
    const app = document.createElement('div');

    app.setAttribute('class', 'app');
    bodyElement.insertBefore(app, bodyScript);
};

const createAppNav = () => {
    const nav = document.createElement('nav');
    nav.setAttribute('class', 'nav-comp');
    nav.innerHTML = `
        <div class = "nc-left">
            <button id = "navBtnMenu">
                <span class="material-icons-outlined mid">menu</span>
            </button>
            <button id = "navBtnHome">
                <span class="material-icons-outlined mid">home</span>
            </button>
            <form id = "formSearch">
                <div class = "search-div">
                    <span class="material-icons-outlined mid">search</span>
                    <input type="search" aria-label="Search through all todos" 
                        class = "search-input" placeholder="Search"
                        id = "navInputSearch">
                    <button type = "reset">
                        <span class="material-icons-outlined mid">close</span>
                    </button>
                </div>
            </form>
        </div>
        <div class = "nc-right">
            <button id = "navBtnQuickAdd">
                <span class="material-icons-outlined mid">add</span>
            </button>
            <button class = "nav-btn-notification" id = "navBtnNotification">
                <span class="material-icons-outlined mid">notifications</span>
                <small id = "navBtnNotificationCount"></small>
            </button>
        </div>
    `;
    
    document.querySelector('.app').appendChild(nav);
};

const createAppBody = () => {
    const appBody = document.createElement('div');
    const wrapper = document.createElement('div');

    appBody.setAttribute('class', 'app-body');
    wrapper.setAttribute('class', 'wrapper');

    appBody.appendChild(wrapper);
    document.querySelector('.app').appendChild(appBody);
};

const createSidebarNav = () => {
    const nav = document.createElement('nav');

    nav.setAttribute('class', 'info-comp');
    nav.setAttribute('id', 'navInfoComp');
    nav.innerHTML = `
        <button id = "sbnavInboxBtn">
            <span class="material-icons-outlined mid ic-span">inbox</span>
            Inbox<samp></samp>
        </button>
        <button id = "sbnavTodayBtn" class = "active">
            <span class="material-icons-outlined mid ic-span">calendar_today</span>
            Today<samp></samp>
        </button>
        <button id = "sbnavUpcomBtn">
            <span class="material-icons-outlined mid ic-span">upcoming</span>
            Upcoming<samp></samp>
        </button>
        <div class = "ic-div ic-project" tabindex="0" id = "sbnavProjectsDiv">
            <span class="material-icons-outlined mid ic-span opa">chevron_right</span>
            <button class = "ic-add-btn opa" id = "sbnavProjectAddBtn">
                <span class="material-icons-outlined mid">add</span>
            </button>
            <strong>Projects</strong>
            <div id = "projectListContainer">
            </div>
        </div>
        <div class = "ic-div ic-label" tabindex="0" id = "sbnavLabelsDiv">
            <span class="material-icons-outlined mid ic-span opa">chevron_right</span>
            <button class = "ic-add-btn opa" id = "sbnavLabelAddBtn">
                <span class="material-icons-outlined mid">add</span>
            </button>
            <strong>Labels</strong>
            <div id = "labelListContainer">
            </div>
        </div>
    `;

    document.querySelector('.wrapper').appendChild(nav);

    let data = JSON.parse(localStorage.getItem('todos'));

    if (data.projects.length){
        data.projects.forEach((project) => {
            const div = document.createElement('div');
            div.innerHTML = `
                <div class = "bullet"></div>
                    <span class = "unique">${project}</span>
                <button>
                    <span class="material-icons-outlined mid">more_horiz</span>
                </button>
            `;
            div.setAttribute('tabindex', '0');
            document.querySelector('#projectListContainer').appendChild(div);  
        });
    }
    
    if (data.labels.length){
        data.labels.forEach((label)=> {
            const div = document.createElement('div');
            div.innerHTML = `
                <span class="material-icons-outlined mid tag">label</span>
                    <span class = "unique">${label}</span>
                <button>
                    <span class="material-icons-outlined mid">more_horiz</span>
                </button>
            `;
            div.setAttribute('tabindex', '0');
            document.querySelector('#labelListContainer').appendChild(div);   
        });
    }
};

const createContainer = () => {
    const container = document.createElement('div');
    const header = document.createElement('header');
    const main = document.createElement('main');
    const div = document.createElement('div');

    container.setAttribute('class', 'container');
    container.setAttribute('id', 'container');

    if((0,_data_js__WEBPACK_IMPORTED_MODULE_1__.isEmptyToDoList)()){//fix using dates since it defends on today's data
        container.classList.add('empty');
    }

    header.innerHTML = `
        <h1 id = "header">Today</h1>
    `;
    div.setAttribute('class', 'add-task-btn-div');
    div.setAttribute('id', 'addTaskBtnDiv');
    div.innerHTML = `
        <button class = "add-task-btn" id = "addTaskBtn">
            <span class="material-icons-outlined mid tool-span">add</span>
            Add task
        </button>
    `;

    container.appendChild(header);
    container.appendChild(main);
    container.appendChild(div);
    document.querySelector('.wrapper').appendChild(container);
};

const createAddTaskDiv = () => {
    const div = document.createElement('div');

    div.setAttribute('class', 'add-task-div');
    div.setAttribute('id', 'addTaskDiv');
    div.innerHTML = `
        <input type = "text" placeholder="Task name" id = "addTaskInput">
        <div class = "add-task-btns-container">
            <div>
                <button id = "selectScheduleBtn" data-value = "">
                    <span class="material-icons-outlined mid">event</span> Schedule
                </button>
                <button id = "selectProjectBtn" class = "select-project-btn" data-value = "inbox">
                    <span class="material-icons-outlined mid">inbox</span> Inbox
                </button>
            </div>
            <div>
                <button id = "selectLabelBtn" data-value = "">
                    <span class="material-icons-outlined mid">label</span>
                </button>
                <button id = "selectPriorityBtn" data-value = "priority 4">
                    <span class="material-icons-outlined mid">flag</span>
                </button>
            </div>
        </div>
        <div class = "scheduler">
            <button class = "sched" id = "schedulerTodayBtn">
                <span>Today</span>
                <span id = "schedulerTodaySpan"></span>
            </button>
            <button class = "sched" id = "schedulerTwmBtn">
                <span>Tomorrow</span>
                <span id = "schedulerTwmSpan"></span>
            </button>
            <button class = "sched" id = "schedulerNextWeekBtn">
                <span>Next Week</span>
                <span id = "schedulerNextWeekSpan"></span>
            </button>
            <div class = "sched-custom" id = "schedulerCustomDiv">
                <input type = "date" id = "schedulerCustomInput">
                <button id = "schedulerCustomBtn">
                    <span class="material-icons-outlined mid">done</span>
                </button>
            </div>
            <button class = "sched" id = "schedulerNoDateBtn">
                <span>No Date</span>
                <span id = "schedulerNoDateSpan">&#x2205;</span>
            </button>
        </div>
        <div class = "carrier" id = "projectSelector">
            <button id = "projectDefaultInbox">
                <span class="material-icons-outlined mid">inbox</span>
                <u>Inbox</u>
            </button>
        </div>
        <div class = "labeler">
            <div id = "labelContainer">
            </div>
        </div>
        <div class = "prio-setter">
            <div id = "priorityBtnContainer">
                <button id = "priorityOne">
                    <span class="material-icons-outlined mid">flag</span>
                    <u>Priority 1</u>
                </button>
                <button id = "priorityTwo">
                    <span class="material-icons-outlined mid">flag</span>
                    <u>Priority 2</u>
                </button>
                <button id = "priorityThree">
                    <span class="material-icons-outlined mid">flag</span>
                    <u>Priority 3</u>
                </button>
                <button id = "priorityDefault">
                    <span class="material-icons-outlined mid">flag</span>
                    <u>Priority 4</u>
                </button>
            </div>
        </div>
    `;

    document.querySelector('.container').appendChild(div);
};

const createMoreContainerItems = () => {
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const footer = document.createElement('footer');

    div1.setAttribute('class', 'add-task-main-btns-container');
    div2.setAttribute('class', 'empty-state-div');
    div2.setAttribute('id', 'emptyStateDiv');
    footer.setAttribute('id', 'footer');

    div1.innerHTML = `
        <button id = "addTaskMainBtn">
            Add task
        </button>
        <button id = "addTaskCancelBtn">
            Cancel
        </button>
    `;
    div2.innerHTML = `
        <img src="${_chilling_svg__WEBPACK_IMPORTED_MODULE_0__}" draggable="false">
        <h4>All clear</h4>
        <p>Looks like everything's organized in the right place.</p>
    `;
    footer.innerHTML = `
        <span class="material-icons-outlined mid">help_outline</span>
        <p id = "help">How to best use this App</p>
    `;

    document.querySelector('.container').appendChild(div1);
    document.querySelector('.container').appendChild(div2);
    document.querySelector('.container').appendChild(footer);
};

const createHiddenModals = () => {
    document.querySelector('.app').innerHTML += `
        <div class = "quick-add-todo" id = "quickAddTodo">
            <div id = "quickAddContainer">
                <input type = "text" placeholder="Task name" id = "quickAddInput">
                <div>
                    <button id = "quickAddSubmit">Add task</button>
                    <button id = "quickAddCancel">Cancel</button>
                </div>
            </div>
        </div>
        <div class = "notifications" id = "notifications">
            <div class = "notif-container" id = "notifContainer">
                <nav>
                    <strong>Notifications</strong>
                    <button class = "read-all-btn" id = "notifReadAllBtn">
                        <span class="material-icons-outlined mid">done_all</span>
                    </button>
                </nav>
                <div class = "notif-output" id = "notifOutput">
                </div>
            </div>
        </div>
        <div class = "project-creator" id = "projectCreator">
            <div>
                <strong>Add project</strong>
                <div class = "project-input">
                    <label for="newProjectName">Name</label>
                    <input type = "text" id = "newProjectName">
                </div>
                <div class = "project-buttons">
                    <button id = "projectAddButton">Add</button>
                    <button id = "projectCancelButton">Cancel</button>
                </div>
            </div>
        </div>
        <div class = "project-editor" id = "projectEditor">
            <div>
                <strong id = "projectName">Project Name</strong>
                <div class = "project-editor-input">
                    <label for="updatedProjectName">Rename to</label>
                    <input type = "text" id = "updatedProjectName">
                </div>
                <div class = "update-project-buttons">
                    <button id = "updateProjectBtn">Update</button>
                    <button id = "cancelProjectBtn">Cancel</button>
                    <button id = "deleteProjectBtn">Delete</button>
                </div>
            </div>
        </div>
        <div class = "label-creator" id = "labelCreator">
            <div>
                <strong>Add label</strong>
                <div class = "label-input">
                    <label for="addLabelInput">Name</label>
                    <input type = "text" id = "addLabelInput">
                </div>
                <div class = "label-buttons">
                    <button id = "addNewLabelBtn">Add</button>
                    <button id = "cancelAddLabelBtn">Cancel</button>
                </div>
            </div>
        </div>
        <div class = "label-editor" id = "labelEditor">
            <div>
                <strong id = "editLabelName">label Name</strong>
                <div class = "label-editor-input">
                    <label for="updatedLabelName">Rename to</label>
                    <input type = "text" id = "updatedLabelName">
                </div>
                <div class = "update-label-buttons">
                    <button id = "updateLabelBtn">Update</button>
                    <button id = "cancelUpdateBtn">Cancel</button>
                    <button id = "deleteLabelBtn">Delete</button>
                </div>
            </div>
        </div>
        <div class = "todo-editor" id = "taskEditor">
            <div>
                <strong>Edit Task</strong>
                <div class = "todo-editor-input">
                    <label for="updatedTaskName">Task Name</label>
                    <input type = "text" id = "updatedTaskName">
                    <label for="updatedTaskNote">Task Note</label>
                    <input type = "text" id = "updatedTaskNote">
                    <label for="updatedTaskSchedule">Schedule</label>
                    <select id="updatedTaskSchedule">
                        <option value="today">Today</option>
                        <option value="tomorrow">Tomorrow</option>
                        <option value="next-week">Next Week</option>
                        <option value="custom">Custom</option>
                        <option value="no-date">No Date</option>
                    </select>
                    <label for="updatedTaskProject">Project</label>
                    <select id="updatedTaskProject">
                        <option value="Inbox">Inbox</option>
                    </select>
                    <label for="updatedTaskLabel">Label</label>
                    <select id="updatedTaskLabel">
                        <option value="none">None</option>
                    </select>
                    <label for="updatedTaskPriority">Priority</label>
                    <select id="updatedTaskPriority">
                        <option value="priority1">Priority 1</option>
                        <option value="priority2">Priority 2</option>
                        <option value="priority3">Priority 3</option>
                        <option value="priority4">Priority 4</option>
                    </select>
                </div>
                <div class = "todo-editor-buttons">
                    <button id = "updateTodo">Update</button>
                    <button id = "cancelUpdateTodo">Cancel</button>
                </div>
            </div>
        </div>
    `;
};

const createApp = (() => {
    setLanguage();
    setupHeadTag();
    createAppDiv();
    createAppNav();
    createAppBody();
    createSidebarNav();
    createContainer();
    createAddTaskDiv();
    createMoreContainerItems();
    createHiddenModals();
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createApp);

/***/ }),

/***/ "./src/event.js":
/*!**********************!*\
  !*** ./src/event.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _selector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selector.js */ "./src/selector.js");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.js */ "./src/data.js");



'use strict';

const element = (() => {
    let firstFocusableElement;
    let lastFocusableElement;
    let modalToggler;
    return { 
        firstFocusableElement, 
        lastFocusableElement,
        modalToggler
    };
})();

const tabEvent = (e) => {
    let isTabPressed = e.key === 'Tab';

    if (!isTabPressed) { return; }

    if (e.shiftKey) {
        if (document.activeElement === element.firstFocusableElement) {
            element.lastFocusableElement.focus();
            e.preventDefault();
            }
    } else {
        if (document.activeElement === element.lastFocusableElement) {
            element.firstFocusableElement.focus();
            e.preventDefault();
        }
    } 
};

const trapFocus = (modal, toggler) => {
    const focusableElements = 
        modal.querySelectorAll('button, input, select, [tabindex]:not([tabindex="-1"])');
    element.firstFocusableElement = focusableElements[0];
    element.lastFocusableElement = focusableElements[focusableElements.length-1];
    element.modalToggler = toggler;
    
    if((window.innerWidth <= 750) && _selector_js__WEBPACK_IMPORTED_MODULE_0__.vNav.nav.contains(element.modalToggler)) {
        _selector_js__WEBPACK_IMPORTED_MODULE_0__.vNav.nav.classList.remove('show-nav');
    }

    document.addEventListener('keydown', tabEvent);
    element.firstFocusableElement.focus(); 
};

const removeTrapFocus = () => {
    document.removeEventListener('keydown', tabEvent);
    if((window.innerWidth <= 750) && _selector_js__WEBPACK_IMPORTED_MODULE_0__.vNav.nav.contains(element.modalToggler)) {
        _selector_js__WEBPACK_IMPORTED_MODULE_0__.vNav.nav.classList.add('show-nav');
        _selector_js__WEBPACK_IMPORTED_MODULE_0__.vNav.projects.focus();
    }
    element.modalToggler.focus();
};

const toggle = (() => {
    const menu = (e) => {
        if(window.innerWidth > 750){
            if(_selector_js__WEBPACK_IMPORTED_MODULE_0__.vNav.nav.hasAttribute('style')) 
            { _selector_js__WEBPACK_IMPORTED_MODULE_0__.vNav.nav.removeAttribute('style'); }
            else { _selector_js__WEBPACK_IMPORTED_MODULE_0__.vNav.nav.style.display = 'none'; }
        } else { 
            _selector_js__WEBPACK_IMPORTED_MODULE_0__.vNav.nav.classList.toggle('show-nav'); 
        }
        e.stopPropagation();
    };

    const quickAddTask = () => {
        _selector_js__WEBPACK_IMPORTED_MODULE_0__.modal.quickAddTask.classList.toggle('on');
        if(_selector_js__WEBPACK_IMPORTED_MODULE_0__.modal.quickAddTask.classList.contains('on')) {
            _selector_js__WEBPACK_IMPORTED_MODULE_0__.modal.quickAddTaskInput.value = '';
            trapFocus(_selector_js__WEBPACK_IMPORTED_MODULE_0__.modal.quickAddContainer, _selector_js__WEBPACK_IMPORTED_MODULE_0__.hNav.plus);
        } else {
            removeTrapFocus();
        }
    };

    const notification = () => {
        _selector_js__WEBPACK_IMPORTED_MODULE_0__.modal.notification.classList.toggle('on');
        if(_selector_js__WEBPACK_IMPORTED_MODULE_0__.modal.notification.classList.contains('on')) {
            trapFocus(_selector_js__WEBPACK_IMPORTED_MODULE_0__.modal.notifContainer, _selector_js__WEBPACK_IMPORTED_MODULE_0__.hNav.notification);
        } else {
            removeTrapFocus();
        }
    };

    const projects = () => {
        _selector_js__WEBPACK_IMPORTED_MODULE_0__.vNav.projectListContainer.classList.toggle('show');
        _selector_js__WEBPACK_IMPORTED_MODULE_0__.vNav.projectChevron.classList.toggle('rotate');
    };

    const addProject = (e) => {
        e.stopImmediatePropagation();
        _selector_js__WEBPACK_IMPORTED_MODULE_0__.modal.projectCreator.classList.toggle('on');
        
        if(_selector_js__WEBPACK_IMPORTED_MODULE_0__.modal.projectCreator.classList.contains('on')){
            _selector_js__WEBPACK_IMPORTED_MODULE_0__.modal.newProjectName.value = '';
            trapFocus(_selector_js__WEBPACK_IMPORTED_MODULE_0__.modal.projectCreator, _selector_js__WEBPACK_IMPORTED_MODULE_0__.vNav.addProject);
        } else {
            _selector_js__WEBPACK_IMPORTED_MODULE_0__.vNav.projects.focus();
            removeTrapFocus();
        }
    };

    const labels = () => {
        _selector_js__WEBPACK_IMPORTED_MODULE_0__.vNav.labelListContainer.classList.toggle('show');
        _selector_js__WEBPACK_IMPORTED_MODULE_0__.vNav.labelChevron.classList.toggle('rotate');
    };

    const addLabel = (e) => {
        e.stopImmediatePropagation();
        _selector_js__WEBPACK_IMPORTED_MODULE_0__.modal.labelCreator.classList.toggle('on');

        if(_selector_js__WEBPACK_IMPORTED_MODULE_0__.modal.labelCreator.classList.contains('on')){
            _selector_js__WEBPACK_IMPORTED_MODULE_0__.modal.addLabelInput.value = '';
            trapFocus(_selector_js__WEBPACK_IMPORTED_MODULE_0__.modal.labelCreator, _selector_js__WEBPACK_IMPORTED_MODULE_0__.vNav.addLabel);
        } else {
            _selector_js__WEBPACK_IMPORTED_MODULE_0__.vNav.labels.focus();
            removeTrapFocus();
        }
    };

    const taskCreator = () => {
        _selector_js__WEBPACK_IMPORTED_MODULE_0__.container.div.classList.toggle('add-triggered');
        if (_selector_js__WEBPACK_IMPORTED_MODULE_0__.container.div.classList.contains('add-triggered')){
            _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.input.value = '';
            select.reset();
        }
    };

    const _itemManager = (newClass) => {
        _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.addDiv.classList.toggle(newClass);
        if(_selector_js__WEBPACK_IMPORTED_MODULE_0__.task.addDiv.classList.contains('add-task-div') 
        && _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.addDiv.classList.contains(newClass)){
            _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.addDiv.className = `add-task-div ${newClass}`;
        }
    };

    const taskScheduler = () => {
        _itemManager('display-scheduler');
        if (_selector_js__WEBPACK_IMPORTED_MODULE_0__.task.addDiv.classList.contains('display-scheduler')) {
            refresh.schedule();
        }
    };

    const taskProjectSelector = () => {
        _itemManager('display-carrier');
        if (_selector_js__WEBPACK_IMPORTED_MODULE_0__.task.addDiv.classList.contains('display-carrier')){
            display.taskProjectList();
        }
    };

    const taskLabeler = () => {
        _itemManager('display-labeler');
        if (_selector_js__WEBPACK_IMPORTED_MODULE_0__.task.addDiv.classList.contains('display-labeler')){
            display.taskLabelList();
        }
    };

    const taskPrioritySetter = () => {
        _itemManager('display-prio-setter');
        if (_selector_js__WEBPACK_IMPORTED_MODULE_0__.task.addDiv.classList.contains('display-prio-setter')){
            display.taskPriorityList();
        }
    };

    return {
        menu,
        quickAddTask,
        notification,
        projects, addProject,
        labels, addLabel,
        taskCreator, taskScheduler, taskProjectSelector, taskLabeler, taskPrioritySetter
    };
})();

const clicker = (e) => {
    if(e.key === 'Enter' && e.target.classList.contains('ic-div')){
        e.target.click();
    }
};

const viewManager = (e) => {
    if (_selector_js__WEBPACK_IMPORTED_MODULE_0__.vNav.nav.classList.contains('show-nav') && (window.innerWidth <= 750)){
        if(!_selector_js__WEBPACK_IMPORTED_MODULE_0__.vNav.nav.contains(document.activeElement)) { 
            _selector_js__WEBPACK_IMPORTED_MODULE_0__.vNav.nav.classList.toggle('show-nav'); 
        }
    }

    if(_selector_js__WEBPACK_IMPORTED_MODULE_0__.task.addDiv.className != 'add-task-div'){
        if(!_selector_js__WEBPACK_IMPORTED_MODULE_0__.task.addDiv.contains(document.activeElement)){
            _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.addDiv.className = 'add-task-div';
        }
    }
};
// here here here here
const changeMain = (tag, value, condition = '') => {
    console.log(tag, value, condition)
    _selector_js__WEBPACK_IMPORTED_MODULE_0__.container.main.innerHTML = '';
    let data = JSON.parse(localStorage.getItem('todos'));
    let array = [];


    if (tag == 'dueDate') {
        if(condition == 'today'){
            data.todolist.forEach((task) => {
                if(Date.parse(task.dueDate) == Date.parse(value)){
                    array.push(task);
                }
            });
        } else if (condition == 'upcoming'){
            data.todolist.forEach((task) => {
                if(Date.parse(task.dueDate) > Date.parse(value)){
                    array.push(task);
                }
            });
        } else if (condition == 'due'){
            data.todolist.forEach((task) => {
                if(Date.parse(task.dueDate) < Date.parse(value)){
                    array.push(task);
                }
            });
        }
    }
    
    if (tag == 'project') {
        data.todolist.forEach((task) => {
            if(task.project == value){
                array.push(task);
            }
        });
    } 
    
    if (tag == 'label') {
        data.todolist.forEach((task) => {
            if(task.label == value){
                array.push(task);
            }
        });
    }
    
    if (array.length){
        array.forEach((task) => {
            const div = document.createElement('div');
            div.classList.add('todo');
            div.setAttribute('tabindex', '0');
            div.setAttribute('data-id', task.id);

            let priorityClass;
            if(task.priority == 'priority 4'){
                priorityClass = 'prio4';
            } else if (task.priority == 'priority 3'){
                priorityClass = 'prio3';
            } else if (task.priority == 'priority 2'){
                priorityClass = 'prio2';
            } else {
                priorityClass = 'prio1';
            }

            const divCheckbox = document.createElement('div');
            
            const buttonCheck = document.createElement('button');
            buttonCheck.setAttribute('class', `checkbox-btn ${priorityClass}`);
            buttonCheck.setAttribute('tabindex', '0');
            divCheckbox.appendChild(buttonCheck);
            const span = document.createElement('span');
            span.setAttribute('draggable', 'false');
            span.innerHTML = '&#x2714;';
            divCheckbox.appendChild(span);

            const divBody = document.createElement('div');
            divBody.classList.add('todo-text');
            const label = document.createElement('label');
            label.innerText = task.title;
            const labelDiv = document.createElement('div');

            if (task.label){
                labelDiv.innerHTML = `<small tabindex="0">${task.label}</small>`;
            } else {
                labelDiv.innerHTML = `<small>${task.label}</small>`;
            }

            const para = document.createElement('p');
            para.classList.add('todo-text-note');

            if (task.note){
                para.innerHTML = `
                <span class="material-icons-outlined mid tool-span">note</span>
                ${task.note}
                `;
            }

            const em = document.createElement('em');
            if (Date.parse(task.dueDate) > Date.parse(_data_js__WEBPACK_IMPORTED_MODULE_1__.dateString.todayString())){
                em.classList.add('sched-upcom');
                em.innerHTML = `
                <span class="material-icons-outlined mid">event</span> Upcoming
                `;
            } else if (Date.parse(task.dueDate) < Date.parse(_data_js__WEBPACK_IMPORTED_MODULE_1__.dateString.todayString())){
                em.classList.add('sched-due');
                em.innerHTML = `
                <span class="material-icons-outlined mid">event</span> Past due
                `;
            } else if (Date.parse(task.dueDate) == Date.parse(_data_js__WEBPACK_IMPORTED_MODULE_1__.dateString.todayString())) {
                em.classList.add('sched-today');
                em.innerHTML = `
                <span class="material-icons-outlined mid">event</span> Today
                `;
            } else {
                em.innerHTML = `
                <span class="material-icons-outlined mid">event</span> No Date
                `;
            }

            const divTool = document.createElement('div');
            divTool.classList.add('todo-tools-container');
            const buttonEdit = document.createElement('button');
            buttonEdit.innerHTML = `
            <span class="material-icons-outlined mid tool-span">edit</span>
            `;
            const buttonDelete = document.createElement('button');
            buttonDelete.innerHTML = `
            <span class="material-icons-outlined mid tool-span">delete</span>
            `;

            div.appendChild(divCheckbox);
            div.appendChild(divBody);
            divBody.appendChild(label);
            divBody.appendChild(labelDiv);
            divBody.appendChild(para);
            divBody.appendChild(em);
            divBody.appendChild(divTool);
            divTool.appendChild(buttonEdit);
            divTool.appendChild(buttonDelete);
            // here here // buttonCheck, buttonEdit, buttonDelete. add onclick

            _selector_js__WEBPACK_IMPORTED_MODULE_0__.container.main.appendChild(div);
        });
    }
};

const display = (() => {
    changeMain('dueDate', _data_js__WEBPACK_IMPORTED_MODULE_1__.dateString.todayString(), 'today');
    // changeMain('label', 'jesus'); //here here

    const _getLastWord = (string) => {
        let word = string.split(" ");
        return word[word.length - 1];
    };

    const todolist = (e) => {
        _selector_js__WEBPACK_IMPORTED_MODULE_0__.container.header.innerText = _getLastWord(e.target.innerText);
        document.querySelector('.info-comp .active').classList.remove('active');
        e.target.classList.add('active');

        if(window.innerWidth <= 750){
            _selector_js__WEBPACK_IMPORTED_MODULE_0__.hNav.menu.click();l
        }
        // insert the logic here, load the list of selected display
    };

    const home = () => {
        _selector_js__WEBPACK_IMPORTED_MODULE_0__.container.header.innerText = 'Today';
        document.querySelector('.info-comp .active').classList.remove('active');
        _selector_js__WEBPACK_IMPORTED_MODULE_0__.vNav.today.classList.add('active');
    };

    const taskProjectList = () => {
        _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.projectSelector.innerHTML = '';
        _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.projectSelector.innerHTML = `
            <button id = "projectDefaultInbox">
                <span class="material-icons-outlined mid">inbox</span>
                <u>Inbox</u>
            </button>
        `;
        document.querySelector('#projectDefaultInbox').onclick = select.inbox;
        if(_selector_js__WEBPACK_IMPORTED_MODULE_0__.task.project.dataset.value == 'inbox'){
            document.querySelector('#projectDefaultInbox').classList.add('active')
        }

        let data = JSON.parse(localStorage.getItem('todos'));

        data.projects.forEach((project) => {
            const button = document.createElement('button');
            button.innerHTML = `
                <span class="material-icons-outlined mid">circle</span>
                <u>${project}</u>
            `;
            _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.projectSelector.appendChild(button);
            if(_selector_js__WEBPACK_IMPORTED_MODULE_0__.task.project.dataset.value == project){
                button.classList.add('active')
            }
            button.onclick = select.project;            
        });
    };

    const taskLabelList = () => {
        _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.labelContainer.innerHTML = '';
        _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.labelContainer.innerHTML = `
            <button id = "labelNone">
                <u>No Label</u>
            </button>
        `;

        document.querySelector('#labelNone').onclick = select.noLabel;
        if(_selector_js__WEBPACK_IMPORTED_MODULE_0__.task.label.dataset.value == ''){
            document.querySelector('#labelNone').classList.add('active')
        }

        let data = JSON.parse(localStorage.getItem('todos'));

        data.labels.forEach((label) => {
            const button = document.createElement('button');
            button.innerHTML = `
                <span class="material-icons-outlined mid">label</span>
                <u>${label}</u>
            `;
            _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.labelContainer.appendChild(button);
            if(_selector_js__WEBPACK_IMPORTED_MODULE_0__.task.label.dataset.value == label){
                button.classList.add('active')
            }
            button.onclick = select.label;            
        });
    };

    const taskPriorityList = () => {
        _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.priorityContainer.querySelectorAll('button').forEach((button) => {
            button.classList.remove('active');
        });

        if (_selector_js__WEBPACK_IMPORTED_MODULE_0__.task.priority.dataset.value == 'priority 4'){
            _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.priorityFour.classList.add('active');
        } else if (_selector_js__WEBPACK_IMPORTED_MODULE_0__.task.priority.dataset.value == 'priority 3'){
            _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.priorityThree.classList.add('active');
        } else if (_selector_js__WEBPACK_IMPORTED_MODULE_0__.task.priority.dataset.value == 'priority 2'){
            _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.priorityTwo.classList.add('active');
        } else {
            _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.priorityOne.classList.add('active');
        }
    };

    return {
        todolist,
        home,
        taskProjectList,
        taskLabelList,
        taskPriorityList
    };
})();

const refresh = (() => {
    let data;

    const projectList = () => {
        data = JSON.parse(localStorage.getItem('todos'));

        if (data.projects.length){
            document.querySelector('#projectListContainer').innerHTML = '';

            data.projects.forEach((project)=> {
                const div = document.createElement('div');
                div.innerHTML = `
                    <div class = "bullet"></div>
                        <span class = "unique">${project}</span>
                    <button>
                        <span class="material-icons-outlined mid">more_horiz</span>
                    </button>
                `;
                div.setAttribute('tabindex', '0');
                document.querySelector('#projectListContainer').appendChild(div);  
            });
        }
    };

    const labelList = () => {
        data = JSON.parse(localStorage.getItem('todos'));

        if (data.labels.length){
            document.querySelector('#labelListContainer').innerHTML = '';

            data.labels.forEach((label)=> {
                const div = document.createElement('div');
                div.innerHTML = `
                    <span class="material-icons-outlined mid tag">label</span>
                        <span class = "unique">${label}</span>
                    <button>
                        <span class="material-icons-outlined mid">more_horiz</span>
                    </button>
                `;
                div.setAttribute('tabindex', '0');
                document.querySelector('#labelListContainer').appendChild(div);   
            });
        }
    };

    const schedule = () => {
        _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.spanToday.innerText = _data_js__WEBPACK_IMPORTED_MODULE_1__.dateString.todayName();
        _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.spanTwm.innerText = _data_js__WEBPACK_IMPORTED_MODULE_1__.dateString.tomorrowName();
        _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.spanNextWeek.innerText = _data_js__WEBPACK_IMPORTED_MODULE_1__.dateString.nextWeekName();

        document.querySelectorAll('.add-task-div .active').forEach((element)=> {
            element.classList.remove('active');
        });

        if (_selector_js__WEBPACK_IMPORTED_MODULE_0__.task.schedule.dataset.value == ''){
            _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.schedNoDate.classList.add('active');
        } else if (_selector_js__WEBPACK_IMPORTED_MODULE_0__.task.schedule.innerText == 'Today'){
            _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.schedToday.classList.add('active');
        } else if (_selector_js__WEBPACK_IMPORTED_MODULE_0__.task.schedule.innerText == 'Tomorrow'){
            _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.schedTwm.classList.add('active');
        } else if (_selector_js__WEBPACK_IMPORTED_MODULE_0__.task.schedule.innerText == 'Next Week'){
            _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.schedNextWeek.classList.add('active');
        } else {
            _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.schedCustomDiv.classList.add('active');
        }
    };

    return {
        projectList,
        labelList,
        schedule
    };
})();

const add = (() => {
    const quick = () => {
        if(!_selector_js__WEBPACK_IMPORTED_MODULE_0__.modal.quickAddTaskInput.value){
            alert('Task name required!')
            return;
        }
        _data_js__WEBPACK_IMPORTED_MODULE_1__.push.quick(_selector_js__WEBPACK_IMPORTED_MODULE_0__.modal.quickAddTaskInput.value);
        toggle.quickAddTask();
        setTimeout(()=> alert('Added to Inbox!'), 500);
    };

    const project = () => {
        if(!_selector_js__WEBPACK_IMPORTED_MODULE_0__.modal.newProjectName.value){
            alert('Project name required!')
            return;
        }
        _data_js__WEBPACK_IMPORTED_MODULE_1__.push.project(_selector_js__WEBPACK_IMPORTED_MODULE_0__.modal.newProjectName.value);
        _selector_js__WEBPACK_IMPORTED_MODULE_0__.modal.projectCreator.classList.toggle('on');
        setTimeout(()=> alert('Added to Projects!'), 500);
        refresh.projectList();
    };

    const label = () => {
        if(!_selector_js__WEBPACK_IMPORTED_MODULE_0__.modal.addLabelInput.value){
            alert('Label name required!')
            return;
        }
        _data_js__WEBPACK_IMPORTED_MODULE_1__.push.label(_selector_js__WEBPACK_IMPORTED_MODULE_0__.modal.addLabelInput.value);
        _selector_js__WEBPACK_IMPORTED_MODULE_0__.modal.labelCreator.classList.toggle('on');
        setTimeout(()=> alert('Added to Labels!'), 500);
        refresh.labelList();
    };

    const todo = function() {
        if(!_selector_js__WEBPACK_IMPORTED_MODULE_0__.task.input.value){
            alert('Task name required!')
            return;
        }

        _data_js__WEBPACK_IMPORTED_MODULE_1__.push.task(
            _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.input.value,
            _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.schedule.dataset.value,
            _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.priority.dataset.value,
            _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.project.dataset.value,
            _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.label.dataset.value
        );

        let project = _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.project.dataset.value.toUpperCase();
        alert(`Added to ${project}!`);
        toggle.taskCreator();
    };

    return {
        quick,
        project,
        label,
        todo
    };
})();

const select = (() => {
    const reset = () => {
        _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.schedule.innerHTML = `
            <span class="material-icons-outlined mid">event</span> Schedule
        `;
        _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.schedCustomInput.value = '';
        _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.schedule.dataset.value = '';
        _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.project.dataset.value = 'inbox';
        _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.project.innerHTML = `
            <span class="material-icons-outlined mid">inbox</span> Inbox
        `;
        _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.label.dataset.value = '';
        _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.priority.dataset.value = 'priority 4';
    };

    const schedule = (e) => {
        if(e.currentTarget.innerText.includes('Today')){
            _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.schedule.innerText = 'Today';
            _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.schedule.dataset.value = _data_js__WEBPACK_IMPORTED_MODULE_1__.dateString.todayString();
        } else if (e.currentTarget.innerText.includes('Tomorrow')){
            _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.schedule.innerText = 'Tomorrow';
            _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.schedule.dataset.value = _data_js__WEBPACK_IMPORTED_MODULE_1__.dateString.twmString();
        } else if (e.currentTarget.innerText.includes('Week')){
            _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.schedule.innerText = 'Next Week';
            _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.schedule.dataset.value = _data_js__WEBPACK_IMPORTED_MODULE_1__.dateString.nextWeekString();
        } else {
            _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.schedule.innerText = 'No Date';
            _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.schedule.dataset.value = '';
        }
        toggle.taskScheduler();
    };

    const customSched = () => {
        if(!_selector_js__WEBPACK_IMPORTED_MODULE_0__.task.schedCustomInput.value){
            alert('Date required!')
        } else {
            let newDate = new Date(_selector_js__WEBPACK_IMPORTED_MODULE_0__.task.schedCustomInput.value);
            newDate.setHours(0,0,0,0);

            let date = newDate.getDate().toString();

            if(date.length == 2){
                newDate = `${newDate.getFullYear()}-${newDate.getMonth()+1}-${newDate.getDate()}`;
            } else {
                newDate = `${newDate.getFullYear()}-${newDate.getMonth()+1}-0${newDate.getDate()}`;
            }

            _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.schedule.innerText = newDate;
            _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.schedule.dataset.value = newDate;
            toggle.taskScheduler();
        }
    };

    const inbox = (e) => {
        _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.project.innerHTML = `
            <span class="material-icons-outlined mid">inbox</span> Inbox
        `;
        _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.project.dataset.value = 'inbox';
        toggle.taskProjectSelector();
    };

    const project = (e) => {
        _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.project.innerText = e.currentTarget.outerText.substring(7);
        _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.project.dataset.value = _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.project.innerText;
        toggle.taskProjectSelector();
    };

    const label = (e) => {
        _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.label.dataset.value = e.currentTarget.outerText.substring(6);
        toggle.taskLabeler();
    };

    const noLabel = () => {
        _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.label.dataset.value = '';
        toggle.taskLabeler();
    };

    const priority = (e) => {
        let data = e.currentTarget.outerText.substring(5).toLowerCase();
        _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.priority.dataset.value = data;
        toggle.taskPrioritySetter();
    };

    return {
        reset,
        schedule, customSched,
        inbox, project, label, noLabel, priority
    };
})();

const viewportListener = () => {
    _selector_js__WEBPACK_IMPORTED_MODULE_0__.vNav.nav.hasAttribute('style')
        ? _selector_js__WEBPACK_IMPORTED_MODULE_0__.vNav.nav.removeAttribute('style') : _selector_js__WEBPACK_IMPORTED_MODULE_0__.vNav.nav.classList.remove('display-nav');
};

const event = (() => {
    _selector_js__WEBPACK_IMPORTED_MODULE_0__.hNav.menu.addEventListener('click', toggle.menu);

    _selector_js__WEBPACK_IMPORTED_MODULE_0__.hNav.plus.addEventListener('click', toggle.quickAddTask);
    _selector_js__WEBPACK_IMPORTED_MODULE_0__.modal.quickAddTaskCancel.addEventListener('click',  toggle.quickAddTask);

    _selector_js__WEBPACK_IMPORTED_MODULE_0__.hNav.notification.addEventListener('click', toggle.notification);
    _selector_js__WEBPACK_IMPORTED_MODULE_0__.modal.notifReadAll.addEventListener('click', toggle.notification);

    _selector_js__WEBPACK_IMPORTED_MODULE_0__.vNav.projects.addEventListener('click', toggle.projects);
    _selector_js__WEBPACK_IMPORTED_MODULE_0__.vNav.projects.addEventListener('keyup', clicker);
    _selector_js__WEBPACK_IMPORTED_MODULE_0__.vNav.addProject.addEventListener('click', toggle.addProject);
    _selector_js__WEBPACK_IMPORTED_MODULE_0__.modal.cancelProjectCreator.addEventListener('click', toggle.addProject);

    _selector_js__WEBPACK_IMPORTED_MODULE_0__.vNav.labels.addEventListener('click', toggle.labels);
    _selector_js__WEBPACK_IMPORTED_MODULE_0__.vNav.labels.addEventListener('keyup', clicker);
    _selector_js__WEBPACK_IMPORTED_MODULE_0__.vNav.addLabel.addEventListener('click', toggle.addLabel);
    _selector_js__WEBPACK_IMPORTED_MODULE_0__.modal.cancelLabelCreator.addEventListener('click', toggle.addLabel);

    _selector_js__WEBPACK_IMPORTED_MODULE_0__.container.addTaskBtn.addEventListener('click', toggle.taskCreator);
    _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.cancel.addEventListener('click', toggle.taskCreator);
    _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.schedule.addEventListener('click', toggle.taskScheduler);
    _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.project.addEventListener('click', toggle.taskProjectSelector);
    _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.label.addEventListener('click', toggle.taskLabeler);
    _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.priority.addEventListener('click', toggle.taskPrioritySetter);

    _selector_js__WEBPACK_IMPORTED_MODULE_0__.vNav.inbox.addEventListener('click', display.todolist);
    _selector_js__WEBPACK_IMPORTED_MODULE_0__.vNav.today.addEventListener('click', display.todolist);
    _selector_js__WEBPACK_IMPORTED_MODULE_0__.hNav.home.addEventListener('click', display.home);
    _selector_js__WEBPACK_IMPORTED_MODULE_0__.vNav.upcoming.addEventListener('click', display.todolist);

    _selector_js__WEBPACK_IMPORTED_MODULE_0__.modal.quickAddTaskSubmit.addEventListener('click', add.quick);
    _selector_js__WEBPACK_IMPORTED_MODULE_0__.modal.projectAdd.addEventListener('click', add.project);
    _selector_js__WEBPACK_IMPORTED_MODULE_0__.modal.addNewLabel.addEventListener('click', add.label);

    _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.add.addEventListener('click', add.todo);
    _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.schedToday.addEventListener('click', select.schedule);
    _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.schedTwm.addEventListener('click', select.schedule);
    _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.schedNextWeek.addEventListener('click', select.schedule);
    _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.schedNoDate.addEventListener('click', select.schedule);
    _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.schedCustomBtn.addEventListener('click', select.customSched);

    _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.priorityContainer.querySelectorAll('button').forEach((button) => {
        button.addEventListener('click', select.priority);
    });

    //fix data.js first before adding events in label, project, and todo editor

    window.onclick = viewManager;
    window.onresize = viewportListener;

    //esc keyup that closes modals will be cool

})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (event);

/***/ }),

/***/ "./src/selector.js":
/*!*************************!*\
  !*** ./src/selector.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hNav": () => (/* binding */ hNav),
/* harmony export */   "vNav": () => (/* binding */ vNav),
/* harmony export */   "container": () => (/* binding */ container),
/* harmony export */   "task": () => (/* binding */ task),
/* harmony export */   "modal": () => (/* binding */ modal)
/* harmony export */ });


const hNav = (() => {
    const menu = document.querySelector('#navBtnMenu');
    const home = document.querySelector('#navBtnHome');
    const formSearch = document.querySelector('#formSearch');
    const search = document.querySelector('#navInputSearch');
    const plus = document.querySelector('#navBtnQuickAdd');
    const notification = document.querySelector('#navBtnNotification');
    const notifCount = document.querySelector('#navBtnNotificationCount');

    return { 
        menu, home, 
        formSearch, search, 
        plus, notification, notifCount };
})();

const vNav = (() => {
    const nav = document.querySelector('#navInfoComp');
    const inbox = document.querySelector('#sbnavInboxBtn');
    const inboxCounter = document.querySelector('#sbnavInboxBtn > samp');
    const today = document.querySelector('#sbnavTodayBtn');
    const todayCounter = document.querySelector('#sbnavTodayBtn > samp');
    const upcoming = document.querySelector('#sbnavUpcomBtn');
    const upcomingCounter = document.querySelector('#sbnavUpcomBtn > samp');
    const projects = document.querySelector('#sbnavProjectsDiv');
    const projectChevron = document.querySelector('#sbnavProjectsDiv > span');
    const addProject = document.querySelector('#sbnavProjectAddBtn');
    const projectListContainer = document.querySelector('#projectListContainer');
    const labels = document.querySelector('#sbnavLabelsDiv');
    const labelChevron = document.querySelector('#sbnavLabelsDiv > span');
    const addLabel = document.querySelector('#sbnavLabelAddBtn');
    const labelListContainer = document.querySelector('#labelListContainer');

    return { 
        nav,
        inbox, inboxCounter,
        today, todayCounter,
        upcoming, upcomingCounter,
        projects, projectChevron, addProject, projectListContainer,
        labels, labelChevron, addLabel, labelListContainer
    };
})();

const container = (() => {
    const div = document.querySelector('#container');
    const header = document.querySelector('#header');
    const main = document.querySelector('main');
    const addTaskBtnDiv = document.querySelector('#addTaskBtnDiv');
    const addTaskBtn = document.querySelector('#addTaskBtn');
    const emptyStateDiv = document.querySelector('#emptyStateDiv');
    const footer = document.querySelector('#footer');
    const help = document.querySelector('#help');

    return {
        div,
        header,
        main,
        addTaskBtnDiv, addTaskBtn,
        emptyStateDiv, footer, help
    };
})();

const task = (() => {
    const addDiv = document.querySelector('#addTaskDiv');
    const input = document.querySelector('#addTaskInput');
    const schedule = document.querySelector('#selectScheduleBtn');
    const project = document.querySelector('#selectProjectBtn');
    const label = document.querySelector('#selectLabelBtn');
    const priority = document.querySelector('#selectPriorityBtn');
    const add = document.querySelector('#addTaskMainBtn');
    const cancel = document.querySelector('#addTaskCancelBtn');

    const schedToday = document.querySelector('#schedulerTodayBtn');
    const spanToday = document.querySelector('#schedulerTodaySpan');
    const schedTwm = document.querySelector('#schedulerTwmBtn');
    const spanTwm = document.querySelector('#schedulerTwmSpan');
    const schedNextWeek = document.querySelector('#schedulerNextWeekBtn');
    const spanNextWeek = document.querySelector('#schedulerNextWeekSpan');
    const schedCustomInput = document.querySelector('#schedulerCustomInput');
    const schedCustomDiv = document.querySelector('#schedulerCustomDiv');
    const schedCustomBtn = document.querySelector('#schedulerCustomBtn');
    const schedNoDate = document.querySelector('#schedulerNoDateBtn');
    const projectSelector = document.querySelector('#projectSelector');
    const labelContainer = document.querySelector('#labelContainer');
    const priorityContainer = document.querySelector('#priorityBtnContainer');
    const priorityOne = document.querySelector('#priorityOne');
    const priorityTwo = document.querySelector('#priorityTwo');
    const priorityThree = document.querySelector('#priorityThree');
    const priorityFour = document.querySelector('#priorityDefault');

    return {
        input,
        schedule, project,
        label, priority,
        addDiv, add, cancel,
        schedToday, spanToday,
        schedTwm, spanTwm,
        schedNextWeek, spanNextWeek,
        schedCustomInput, schedCustomDiv, schedCustomBtn,
        schedNoDate,
        projectSelector,
        labelContainer,
        priorityContainer, priorityOne, priorityTwo, priorityThree, priorityFour
    }
})();

const modal = (() => {
    const quickAddTask = document.querySelector('#quickAddTodo');
    const quickAddContainer = document.querySelector('#quickAddContainer');
    const quickAddTaskInput = document.querySelector('#quickAddInput');
    const quickAddTaskSubmit = document.querySelector('#quickAddSubmit');
    const quickAddTaskCancel = document.querySelector('#quickAddCancel');
    const notification = document.querySelector('#notifications');
    const notifContainer = document.querySelector('#notifContainer');
    const notifReadAll = document.querySelector('#notifReadAllBtn');
    const notifOutput = document.querySelector('notifOutput');
    const projectCreator = document.querySelector('#projectCreator');
    const newProjectName = document.querySelector('#newProjectName');
    const projectAdd = document.querySelector('#projectAddButton');
    const cancelProjectCreator = document.querySelector('#projectCancelButton');
    const projectEditor = document.querySelector('#projectEditor');
    const projectName = document.querySelector('#projectName');
    const updatedProjectName = document.querySelector('#updatedProjectName');
    const updateProject = document.querySelector('#updateProjectBtn');
    const cancelProjectEditor = document.querySelector('#cancelProjectBtn');
    const deleteProject = document.querySelector('#deleteProjectBtn');
    const labelCreator = document.querySelector('#labelCreator');
    const addLabelInput = document.querySelector('#addLabelInput');
    const addNewLabel = document.querySelector('#addNewLabelBtn');
    const cancelLabelCreator = document.querySelector('#cancelAddLabelBtn');
    const labelEditor = document.querySelector('#labelEditor');
    const editLabelName = document.querySelector('#editLabelName');
    const updatedLabelName = document.querySelector('#updatedLabelName');
    const updateLabel = document.querySelector('#updateLabelBtn');
    const cancelLabelEditor = document.querySelector('#cancelUpdateBtn');
    const deleteLabel = document.querySelector('#deleteLabelBtn');
    const taskEditor = document.querySelector('#taskEditor');
    const updatedTaskName = document.querySelector('#updatedTaskName');
    const updatedTaskNote = document.querySelector('#updatedTaskNote');
    const updatedTaskSched = document.querySelector('#updatedTaskSchedule');
    const updatedTaskProject = document.querySelector('#updatedTaskProject');
    const updatedTaskLabel = document.querySelector('#updatedTaskLabel');
    const updatedTaskPriority = document.querySelector('#updatedTaskPriority');
    const updateTask = document.querySelector('#updateTodo');
    const cancelTaskEditor = document.querySelector('#cancelUpdateTodo');

    return {
        quickAddTask, quickAddContainer, quickAddTaskInput, quickAddTaskSubmit, quickAddTaskCancel,
        notification, notifContainer, notifReadAll, notifOutput,
        projectCreator, newProjectName, projectAdd, cancelProjectCreator,
        projectEditor, projectName, updatedProjectName, updateProject,
            cancelProjectEditor, deleteProject,
        labelCreator, addLabelInput, addNewLabel, cancelLabelCreator,
        labelEditor, editLabelName, updatedLabelName, updateLabel,
            cancelLabelEditor, deleteLabel,
        taskEditor, updatedTaskName, updatedTaskNote, updatedTaskSched, updatedTaskProject,
            updatedTaskLabel, updatedTaskPriority, updateTask, cancelTaskEditor
    }
})();



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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.js */ "./src/data.js");
/* harmony import */ var _selector_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selector.js */ "./src/selector.js");
/* harmony import */ var _event_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./event.js */ "./src/event.js");






'use strict';

// vNav.inbox.onclick = function(){
//     console.log(1)
// }

// hNav.formSearch.onsubmit = function(e){
//     e.preventDefault();
//     hNav.search.blur();
//     console.log(2);
// }

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFRhcmdldC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kYXRhLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2V2ZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNzSDtBQUM3QjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsaURBQWlELGlDQUFpQyxpQ0FBaUMsOEJBQThCLG1DQUFtQyxpQ0FBaUMsb0NBQW9DLG9DQUFvQyxtQ0FBbUMsK0JBQStCLHFDQUFxQyxxQ0FBcUMscUNBQXFDLGtDQUFrQyxHQUFHLDBCQUEwQiw2QkFBNkIsaUJBQWlCLGdCQUFnQixLQUFLLGlCQUFpQix5QkFBeUIsR0FBRyxVQUFVLHdCQUF3QiwwQ0FBMEMsNkJBQTZCLHlCQUF5QixHQUFHLDRCQUE0QixvQkFBb0IsbUJBQW1CLHlCQUF5Qiw2QkFBNkIsR0FBRyxZQUFZLHVCQUF1Qix5QkFBeUIsb0NBQW9DLEdBQUcsc0JBQXNCLHNCQUFzQixHQUFHLGNBQWMsNkJBQTZCLEdBQUcsZUFBZSx3QkFBd0IsR0FBRyxVQUFVLG9CQUFvQiw2QkFBNkIsbUJBQW1CLG9CQUFvQixHQUFHLHFEQUFxRCwyQkFBMkIsR0FBRyxlQUFlLHFDQUFxQyxrQkFBa0IscUNBQXFDLDBDQUEwQyxHQUFHLGtCQUFrQiwyQkFBMkIsR0FBRyxtQkFBbUIsMkJBQTJCLEdBQUcsa0NBQWtDLGdCQUFnQixHQUFHLGlCQUFpQixtQkFBbUIsMENBQTBDLEdBQUcsb0NBQW9DLHlCQUF5QixtQkFBbUIsb0JBQW9CLHdCQUF3QixpQkFBaUIsR0FB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QUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxRQUFRLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxPQUFPLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsY0FBYyxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLE9BQU8sVUFBVSxNQUFNLE9BQU8sWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sT0FBTyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLFdBQVcsTUFBTSxRQUFRLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxLQUFLLE9BQU8sV0FBVyxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxRQUFRLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sT0FBTyxVQUFVLFlBQVksT0FBTyxPQUFPLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLE9BQU8sTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLE9BQU8sYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLFdBQVcsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxPQUFPLFVBQVUsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLE1BQU0sVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxPQUFPLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxjQUFjLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLFNBQVMsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLFNBQVMsVUFBVSxZQUFZLE9BQU8sY0FBYyxZQUFZLE9BQU8sY0FBYyxVQUFVLFlBQVksT0FBTyxTQUFTLFlBQVksT0FBTyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxTQUFTLFVBQVUsWUFBWSxhQUFhLE9BQU8sU0FBUyxVQUFVLFlBQVksYUFBYSxPQUFPLFNBQVMsWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLFNBQVMsVUFBVSxPQUFPLFNBQVMsWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxL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QixHQUFHLG1CQUFtQjtBQUM1RixTQUFTO0FBQ1Qsc0JBQXNCLHVCQUF1QixHQUFHLHNCQUFzQixJQUFJLG1CQUFtQjtBQUM3RjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxrQkFBa0IsMEJBQTBCLEdBQUcscUJBQXFCLEdBQUcsOEJBQThCO0FBQ3JHOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEMsOENBQThDOztBQUU5QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQVFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BNdUM7QUFDc0I7O0FBRS9EOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxRQUFRO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2RTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLE1BQU07QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJFO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLE9BQU8seURBQWUsSUFBSTtBQUMxQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwwQ0FBVyxDQUFDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7O1VDL0pEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGO1dBQ0E7V0FDQSxDQUFDLEk7Ozs7O1dDUEQsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esa0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmcUI7QUFDWTtBQUNKO0FBQ3NDO0FBQ3BDOztBQUUvQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJpbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1saWdodDkyOiBoc2woMCwgMCUsIDkyJSk7XFxuICAgIC0tbGlnaHQ4ODogaHNsKDAsIDAlLCA4OCUpO1xcbiAgICAtLWRhcms6IGhzbCgwLCAwJSwgMTIlKTtcXG4gICAgLS1tYWxpYnU6IGhzbCgxOTIsIDkzJSwgNzIlKTtcXG4gICAgLS1hdWJ1cm46IGhzbCgwLCA3NSUsIDY1JSk7XFxuICAgIC0tbWFyaW5lcjogaHNsKDIxNiwgNzUlLCA1MSUpO1xcbiAgICAtLWxhdXJlbDogaHNsKDEyMCwgMTAwJSwgMjUlKTtcXG4gICAgLS1wdXJwbGU6IGhzbCgyNjQsIDYxJSwgNDclKTtcXG4gICAgLS1zdW46IGhzbCgzNCwgOTMlLCA0OCUpO1xcbiAgICAtLXRyYW5zcGFyZW50MTogcmdiYSgwLDAsMCwuMSk7XFxuICAgIC0tdHJhbnNwYXJlbnQyOiByZ2JhKDAsMCwwLC4yKTtcXG5cXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1saWdodDkyKTtcXG4gICAgLS1mb3JlZ3JvdW5kOiB2YXIoLS1tYWxpYnUpO1xcbn1cXG5cXG4qLCAqOmJlZm9yZSwgKjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDsgIFxcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbmJvZHkge1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxuICAgIGZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrKTtcXG59XFxuXFxuYnV0dG9uLFxcbi5zZWFyY2gtaW5wdXQge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgZm9udC1mYW1pbHk6c2Fucy1zZXJpZjtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgcGFkZGluZzogLjEyNXJlbTtcXG4gICAgY29sb3I6IHZhcigtLWRhcmspO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuYnV0dG9uLFxcbi5pYy1kaXYge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbnNwYW4ubWlkIHtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuc3BhbixcXG5oMSB7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4uYXBwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4ubmF2LWNvbXAgLFxcbi5uYy1sZWZ0LFxcbi5zZWFyY2gtZGl2LFxcbi5uYy1yaWdodCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbn1cXG5cXG4ubmF2LWNvbXAge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAuNXJlbSAzcmVtIC41cmVtIDNyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvcmVncm91bmQpO1xcbn1cXG5cXG4ubmMtbGVmdCA+ICoge1xcbiAgICBtYXJnaW46IDAgLjI1cmVtIDAgMDtcXG59XFxuXFxuLm5jLXJpZ2h0ID4gKiB7XFxuICAgIG1hcmdpbjogMCAwIDAgLjI1cmVtO1xcbn1cXG5cXG4ubmMtcmlnaHQgYnV0dG9uOmZpcnN0LWNoaWxkIHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uc2VhcmNoLWRpdiB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9yZWdyb3VuZCk7XFxufVxcblxcbi5zZWFyY2gtZGl2ID4gc3BhbjpmaXJzdC1jaGlsZCB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgY3Vyc29yOiB0ZXh0O1xcbiAgICBtYXJnaW46IC4xcmVtO1xcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXG4gICAgei1pbmRleDogMjtcXG59XFxuXFxuLnNlYXJjaC1kaXYgYnV0dG9uIHtcXG4gICAgbWFyZ2luOiAuMnJlbSAwIC4ycmVtIC0xLjVyZW07XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnNlYXJjaC1kaXYgYnV0dG9uOmhvdmVyLFxcbi5zZWFyY2gtZGl2IGJ1dHRvbjpmb2N1cy12aXNpYmxlIHtcXG4gICAgY29sb3I6IHZhcigtLWF1YnVybik7XFxufVxcblxcbi5zZWFyY2gtaW5wdXQge1xcbiAgICBwYWRkaW5nOiAwIDEuNnJlbSAwIDEuOHJlbTtcXG4gICAgbWFyZ2luLWxlZnQ6IC0xLjlyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50MSk7XFxufVxcblxcbi5zZWFyY2gtaW5wdXQ6Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi5zZWFyY2gtaW5wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bikgKyBidXR0b24ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnNlYXJjaC1kaXY6Zm9jdXMtd2l0aGluIC5zZWFyY2gtaW5wdXQsXFxuLnNlYXJjaC1kaXY6aG92ZXIgLnNlYXJjaC1pbnB1dCxcXG4uc2VhcmNoLWlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pe1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodDkyKTtcXG59XFxuXFxuLnNlYXJjaC1kaXYgYnV0dG9uIHNwYW4ge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5hcHAtYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXg6IDE7XFxuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDQ2LjU5cHgpO1xcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XFxufVxcblxcbi53cmFwcGVyIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmluZm8tY29tcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDJyZW0gLjI1cmVtIDAgMi44cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodDg4KTtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLmluZm8tY29tcCA+ICoge1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBmb250LXNpemU6IC45cmVtO1xcbiAgICB3aWR0aDogMjk0cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLmluZm8tY29tcCA+ICogPiBzYW1wIHtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBvcGFjaXR5OiAuNTtcXG4gICAgbWFyZ2luOiA0cHggMXJlbSA0cHggMDtcXG59XFxuXFxuLmljLWRpdiB7XFxuICAgIG1hcmdpbjogLjI1cmVtIDAgMCAwO1xcbn1cXG5cXG4uaW5mby1jb21wID4gZGl2OmZpcnN0LW9mLXR5cGV7XFxuICAgIG1hcmdpbjogMXJlbSAwIDAgMDtcXG59XFxuXFxuLmljLXNwYW4ge1xcbiAgICBtYXJnaW46IDAgLjI1cmVtIDAgMDtcXG59XFxuXFxuLmluZm8tY29tcCA+IGJ1dHRvbjpmaXJzdC1jaGlsZCBzcGFuIHtcXG4gICAgY29sb3I6IHZhcigtLW1hcmluZXIpO1xcbn1cXG5cXG4uaW5mby1jb21wID4gYnV0dG9uOm50aC1jaGlsZCgyKSBzcGFuIHtcXG4gICAgY29sb3I6IHZhcigtLWxhdXJlbCk7XFxufVxcblxcbi5pbmZvLWNvbXAgPiBidXR0b246bnRoLWNoaWxkKDMpIHNwYW4ge1xcbiAgICBjb2xvcjogdmFyKC0tcHVycGxlKTtcXG59XFxuXFxuLmluZm8tY29tcCAuYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFsaWJ1KTtcXG59XFxuXFxuLm9wYSB7XFxuICAgIG9wYWNpdHk6IC41O1xcbn1cXG5cXG4uaWMtYWRkLWJ0biB7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgbWFyZ2luOiAwcHggLjVyZW0gMCAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaWMtYWRkLWJ0bjpob3ZlciArIHN0cm9uZyxcXG4uaWMtYWRkLWJ0bjpmb2N1cy12aXNpYmxlICsgc3Ryb25nIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIHRleHQtdW5kZXJsaW5lLW9mZnNldDogMzAlO1xcbn1cXG5cXG4uaW5mby1jb21wOmZvY3VzLXdpdGhpbiAuaWMtYWRkLWJ0bixcXG4uaW5mby1jb21wOmhvdmVyIC5pYy1hZGQtYnRue1xcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xcbn1cXG5cXG4uaWMtZGl2ID4gZGl2IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmljLWRpdiA+IGRpdi5zaG93IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmljLXByb2plY3QgPiBzcGFuLnJvdGF0ZSxcXG4uaWMtbGFiZWwgPiBzcGFuLnJvdGF0ZSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59XFxuXFxuXFxuLnNob3cge1xcbiAgICBtYXJnaW46IC43NXJlbSAwIDAgMDtcXG59XFxuXFxuLnNob3cgPiBkaXYge1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAuNXJlbSAuNXJlbSAuNXJlbSAuNXJlbTtcXG4gICAgaGVpZ2h0OiAzNHB4O1xcbiAgICBmb250LXNpemU6IC45cmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbnNwYW4udW5pcXVlIHtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXJpZ2h0OiAuMnJlbTtcXG59XFxuXFxuLnNob3cgYnV0dG9uIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uc2hvdyA+IGRpdjpob3ZlcixcXG4uc2hvdyA+IGRpdjpmb2N1cy12aXNpYmxlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQyKTtcXG59XFxuXFxuLnNob3cgPiBkaXY6aG92ZXIgYnV0dG9uLFxcbi5zaG93ID4gZGl2OmZvY3VzLXZpc2libGUgYnV0dG9uLFxcbi5zaG93ID4gZGl2OmZvY3VzLXdpdGhpbiBidXR0b257XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4uc2hvdyBidXR0b246aG92ZXIsXFxuLnNob3cgYnV0dG9uOmZvY3VzLXZpc2libGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCFpbXBvcnRhbnQ7XFxufVxcblxcbi5idWxsZXQge1xcbiAgICBtaW4td2lkdGg6IDEwcHg7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBtYXJnaW46IDAgLjdyZW0gMCAuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQyKTtcXG59XFxuXFxuLnRhZyB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoLjgpO1xcbiAgICBtYXJnaW46IDAgLjJyZW0gMCAuMnJlbTtcXG4gICAgY29sb3I6IHZhcigtLXRyYW5zcGFyZW50Mik7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiAxO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIHBhZGRpbmc6IDAgMnJlbSAwIDJyZW07XFxuXFxufVxcblxcbi5jb250YWluZXIgPiAqIHtcXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jb250YWluZXIgPiBmb290ZXIge1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbn1cXG5cXG4uY29udGFpbmVyID4gaGVhZGVyIHtcXG4gICAgcGFkZGluZzogMnJlbSAwIDFyZW0gMDtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodDkyKTtcXG4gICAgei1pbmRleDogMztcXG59XFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLnRvZG8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAycHggMDtcXG4gICAgbWFyZ2luOiAuNXJlbSAwIC41cmVtIDA7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXRyYW5zcGFyZW50MSk7XFxufVxcblxcbi50b2RvLFxcbi50b2RvICoge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jaGVja2JveC1idG4geyBcXG4gICAgaGVpZ2h0OiAxOHB4O1xcbiAgICBtYXgtd2lkdGg6IDE4cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46IC4yN3JlbSAuN3JlbSAwIDA7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmNoZWNrYm94LWJ0bi5wcmlvMSB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWF1YnVybik7XFxufVxcblxcbi5jaGVja2JveC1idG4ucHJpbzIge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1zdW4pO1xcbn1cXG5cXG4uY2hlY2tib3gtYnRuLnByaW8zIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbWFyaW5lcik7XFxufVxcblxcbi5jaGVja2JveC1idG4ucHJpbzQge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS10cmFuc3BhcmVudDIpO1xcbn1cXG5cXG4uY2hlY2tib3gtYnRuOmhvdmVyLFxcbi5jaGVja2JveC1idG46Zm9jdXMtdmlzaWJsZSB7XFxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50MSk7XFxufVxcblxcbi5jaGVja2JveC1idG4gKyBzcGFuIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbGluZS1oZWlnaHQ6IDFyZW07XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBjb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQyKTtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIG1hcmdpbjogLS45cmVtIDAgMCAtMXJlbTsgICAgXFxufVxcblxcbi5jaGVja2JveC1idG46aG92ZXIgKyBzcGFuLFxcbi5jaGVja2JveC1idG46Zm9jdXMtdmlzaWJsZSArIHNwYW4ge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4uY2hlY2tib3gtYnRuOmFjdGl2ZSArIHNwYW57XFxuICAgIGNvbG9yOiB2YXIoLS1sYXVyZWwpO1xcbn1cXG5cXG4udG9kby10ZXh0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleDogMTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRvZG8tdGV4dCA+IGxhYmVsIHtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNHJlbTtcXG59XFxuXFxuLnRvZG8tdGV4dC1ub3RlIHtcXG4gICAgdGV4dC1pbmRlbnQ6IDFyZW07XFxuICAgIGZvbnQtc2l6ZTogLjlyZW07XFxuICAgIG1hcmdpbjogMCAwIC4yNXJlbSAwO1xcbn1cXG5cXG4udG9kby10ZXh0LW5vdGUsXFxuLnRvZG8tdGV4dC1ub3RlID4gc3BhbixcXG4udG9kby10ZXh0IHNtYWxsIHtcXG4gICAgY29sb3I6IGdyYXk7XFxufVxcblxcbi50b2RvLXRleHQtbm90ZSA+IHNwYW4sXFxuZW0sXFxuZW0gPiBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAuOXJlbSFpbXBvcnRhbnQ7XFxufVxcblxcbi50b2RvLXRleHQgc21hbGw6aG92ZXIsXFxuLnRvZG8tdGV4dCBzbWFsbDpmb2N1cy12aXNpYmxlIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbmVtIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5zY2hlZC1kdWUge1xcbiAgICBjb2xvcjogdmFyKC0tYXVidXJuKTtcXG59XFxuXFxuLnNjaGVkLXRvZGF5IHtcXG4gICAgY29sb3I6IHZhcigtLWxhdXJlbCk7XFxufVxcblxcbi5zY2hlZC11cGNvbSB7XFxuICAgIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xcbn1cXG5cXG4udG9kby10b29scy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIG1hcmdpbjogLTIwcHggMCAwIDA7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLnRvZG8tdG9vbHMtY29udGFpbmVyICoge1xcbiAgICBjb2xvcjogZ3JheTtcXG59XFxuXFxuLnRvb2wtc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4udG9kbzpob3ZlciAudG9kby10b29scy1jb250YWluZXIsXFxuLnRvZG86Zm9jdXMtd2l0aGluIC50b2RvLXRvb2xzLWNvbnRhaW5lciB7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbmJ1dHRvbjpob3ZlcixcXG5idXR0b246Zm9jdXMtdmlzaWJsZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50Mik7XFxufVxcblxcbmJ1dHRvbjpmb2N1cy12aXNpYmxlIHtcXG4gICAgb3V0bGluZTogYXV0bztcXG59XFxuXFxuLmFkZC10YXNrLWJ0biB7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGNvbG9yOiBncmF5O1xcbn1cXG5cXG4uYWRkLXRhc2stYnRuICoge1xcbiAgICBwYWRkaW5nOiAuMXJlbTtcXG59XFxuXFxuLmFkZC10YXNrLWJ0biBzcGFuIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBjb2xvcjogdmFyKC0tYXVidXJuKTtcXG59XFxuXFxuLmFkZC10YXNrLWJ0bjpob3ZlcixcXG4uYWRkLXRhc2stYnRuOmZvY3VzLXZpc2libGUsXFxuLmFkZC10YXNrLWJ0biBzcGFuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5hZGQtdGFzay1idG46aG92ZXIgc3BhbixcXG4uYWRkLXRhc2stYnRuOmZvY3VzLXZpc2libGUgc3BhbiB7XFxuICAgIGNvbG9yOiB2YXIoLS1tYXJpbmVyKTtcXG59XFxuXFxuLmVtcHR5LXN0YXRlLWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXg6IDE7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZW1wdHktc3RhdGUtZGl2IGltZyB7XFxuICAgIG1heC13aWR0aDogMTgwcHg7XFxuICAgIFxcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi5lbXB0eS1zdGF0ZS1kaXYgaDQge1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBjb2xvcjogZ3JheTtcXG59XFxuXFxuLmVtcHR5LXN0YXRlLWRpdiAqOm50aC1jaGlsZChuKzIpIHtcXG4gICAgbWFyZ2luOiAuMjVyZW0gMCAwIDA7XFxufVxcblxcbi5lbXB0eS1zdGF0ZS1kaXYgKjpudGgtY2hpbGQobisyKSxcXG4uY29udGFpbmVyIGZvb3RlciBwIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZW1wdHktc3RhdGUtZGl2IHAge1xcbiAgICBmb250LXNpemU6IC45cmVtO1xcbiAgICBjb2xvcjogZGFya2dyYXk7XFxufVxcblxcbi5jb250YWluZXIgZm9vdGVyIHtcXG4gICAgY29sb3I6IHZhcigtLWF1YnVybik7XFxuICAgIGZvbnQtc2l6ZTogLjlyZW0haW1wb3J0YW50O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogLjI1cmVtIDAgLjc1cmVtIDA7XFxufVxcblxcbi5jb250YWluZXIgZm9vdGVyIHNwYW4ge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW0haW1wb3J0YW50O1xcbn1cXG5cXG4uY29udGFpbmVyIGZvb3RlciBwIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNvbnRhaW5lcjpub3QoLmVtcHR5KSAuZW1wdHktc3RhdGUtZGl2LFxcbi5jb250YWluZXI6bm90KC5lbXB0eSkgZm9vdGVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmFkZC10YXNrLWRpdiB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRyYW5zcGFyZW50Mik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgcGFkZGluZzogMCAuNXJlbSAuNXJlbSAuNXJlbTtcXG4gICAgaGVpZ2h0OiA2OC40OHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG4uYWRkLXRhc2stZGl2ID4gKiB7XFxuICAgIG1hcmdpbi10b3A6IC41cmVtO1xcbn1cXG5cXG4uYWRkLXRhc2stZGl2IGlucHV0LFxcbi5xdWljay1hZGQtdG9kbyBpbnB1dCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogLjlyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0OTIpO1xcbn1cXG5cXG4uYWRkLXRhc2stYnRucy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5hZGQtdGFzay1idG5zLWNvbnRhaW5lciBkaXYgPiBidXR0b24ge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10cmFuc3BhcmVudDIpO1xcbiAgICBwYWRkaW5nOiAuMjVyZW07XFxufVxcblxcbi5hZGQtdGFzay1idG5zLWNvbnRhaW5lciBidXR0b24gPiBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAuOXJlbSFpbXBvcnRhbnQ7XFxufVxcblxcbi5hZGQtdGFzay1idG5zLWNvbnRhaW5lciA+IGJ1dHRvbjpudGgtY2hpbGQoMikgc3BhbiB7XFxuICAgIGNvbG9yOiB2YXIoLS1tYXJpbmVyKTtcXG59XFxuXFxuLnNlbGVjdC1wcm9qZWN0LWJ0biB7XFxuICAgIG1heC13aWR0aDogNzVweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcblxcbi5zY2hlZHVsZXIsXFxuLmNhcnJpZXIge1xcbiAgICBtYXgtd2lkdGg6IDIxMHB4O1xcbiAgICB3aWR0aDogMTAwJTsgICAgXFxufVxcblxcbi5zY2hlZHVsZXIsXFxuLmNhcnJpZXIsXFxuLmxhYmVsZXIsXFxuLnByaW8tc2V0dGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQ5Mik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgei1pbmRleDogMjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW46IDAgMCAwIDA7XFxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDhweCAwIHJnYigwIDAgMCAvIDglKSxcXG4gICAgICAgIDAgMCAxcHggMCByZ2IoMCAwIDAgLyAzMCUpO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc2NoZWR1bGVyID4gKixcXG4uY2FycmllciA+ICoge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgcGFkZGluZzogLjVyZW0gLjVyZW0gLjVyZW0gLjVyZW07XFxufVxcblxcbi5zY2hlZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnNjaGVkIHNwYW46bnRoLWNoaWxkKDIpIHtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIGNvbG9yOiBncmF5O1xcbn1cXG5cXG4uc2NoZWR1bGVyIGlucHV0W3R5cGU9XFxcImRhdGVcXFwiXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcXG4gICAgb3BhY2l0eTogLjQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNjaGVkdWxlciBpbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvcjpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5zY2hlZHVsZXIgLnNjaGVkLWN1c3RvbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5zY2hlZHVsZXIgLnNjaGVkLWN1c3RvbSBidXR0b24ge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10cmFuc3BhcmVudDEpO1xcbn1cXG5cXG4uc2NoZWR1bGVyIC5zY2hlZC1jdXN0b20gaW5wdXQge1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnNjaGVkdWxlciAuc2NoZWQtY3VzdG9tIGJ1dHRvbiA+IHNwYW4sXFxuLmNhcnJpZXIgc3BhbixcXG4ubGFiZWxlciBzcGFuLFxcbi5wcmlvLXNldHRlciBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAuOXJlbSFpbXBvcnRhbnQ7XFxufVxcblxcbi5wcmlvLXNldHRlciBidXR0b246Zmlyc3QtY2hpbGQgc3BhbiB7XFxuICAgIGNvbG9yOiB2YXIoLS1hdWJ1cm4pO1xcbn1cXG5cXG4ucHJpby1zZXR0ZXIgYnV0dG9uOm50aC1jaGlsZCgyKSBzcGFuIHtcXG4gICAgY29sb3I6IHZhcigtLXN1bik7XFxufVxcblxcbi5wcmlvLXNldHRlciBidXR0b246bnRoLWNoaWxkKDMpIHNwYW4ge1xcbiAgICBjb2xvcjogdmFyKC0tbWFyaW5lcik7XFxufVxcblxcbi5wcmlvLXNldHRlciBidXR0b246bnRoLWNoaWxkKDQpIHNwYW4ge1xcbiAgICBjb2xvcjogZ3JheTtcXG59XFxuXFxuLmNhcnJpZXIge1xcbiAgICBtYXJnaW46IDAgMCAwIC0uN3JlbTtcXG4gICAgbWF4LXdpZHRoOiAxNjBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jYXJyaWVyIGJ1dHRvbixcXG4ubGFiZWxlciBidXR0b24sXFxuLnByaW8tc2V0dGVyIGJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jYXJyaWVyIHUsXFxuLmxhYmVsZXIgdSxcXG4ucHJpby1zZXR0ZXIgdSB7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICBtYXJnaW46IDAgMCAwIC4yNXJlbTtcXG59XFxuXFxuLmxhYmVsZXIsXFxuLnByaW8tc2V0dGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLmxhYmVsZXIgZGl2LFxcbi5wcmlvLXNldHRlciBkaXYge1xcbiAgICBtYXgtd2lkdGg6IDE2MHB4O1xcbiAgICB3aWR0aDogMTAwJTsgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbjogMCAxLjhyZW0gMCBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodDkyKTtcXG4gICAgYm94LXNoYWRvdzogMCAxcHggOHB4IDAgcmdiKDAgMCAwIC8gOCUpLFxcbiAgICAgICAgMCAwIDFweCAwIHJnYigwIDAgMCAvIDMwJSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuLnByaW8tc2V0dGVyIGRpdiB7XFxuICAgIG1hcmdpbjogMCAwIDAgYXV0bztcXG4gICAgbWF4LXdpZHRoOiA4OHB4O1xcbn1cXG5cXG4ucHJpby1zZXR0ZXIgdSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmxhYmVsZXIgYnV0dG9uLFxcbi5wcmlvLXNldHRlciBidXR0b24ge1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG59XFxuXFxuLnNjaGVkdWxlciAuc2NoZWQtY3VzdG9tIGJ1dHRvbjpob3ZlciA+IHNwYW4sXFxuLnNjaGVkdWxlciAuc2NoZWQtY3VzdG9tIGJ1dHRvbjpmb2N1cy12aXNpYmxlID4gc3BhbiB7XFxuICAgIGNvbG9yOiB2YXIoLS1sYXVyZWwpO1xcbn1cXG5cXG4uYWRkLXRhc2stZGl2LmRpc3BsYXktc2NoZWR1bGVyIC5zY2hlZHVsZXIge1xcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xcbn1cXG5cXG4uYWRkLXRhc2stZGl2LmRpc3BsYXktY2FycmllciAuY2FycmllcixcXG4uYWRkLXRhc2stZGl2LmRpc3BsYXktbGFiZWxlciAubGFiZWxlcixcXG4uYWRkLXRhc2stZGl2LmRpc3BsYXktcHJpby1zZXR0ZXIgLnByaW8tc2V0dGVyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5hZGQtdGFzay1kaXYgLnNlbGVjdGVkLFxcbi5hZGQtdGFzay1kaXYgLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50MSk7XFxufVxcblxcbi5hZGQtdGFzay1tYWluLWJ0bnMtY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogLjVyZW0gMCAuNXJlbSAwO1xcbn1cXG5cXG4uYWRkLXRhc2stbWFpbi1idG5zLWNvbnRhaW5lciBidXR0b24ge1xcbiAgICBwYWRkaW5nOiAuMjVyZW07XFxufVxcblxcbi5hZGQtdGFzay1tYWluLWJ0bnMtY29udGFpbmVyIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1hbGlidSk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRyYW5zcGFyZW50Mik7XFxufVxcblxcbi5jb250YWluZXIuYWRkLXRyaWdnZXJlZCAuYWRkLXRhc2stYnRuLWRpdiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jb250YWluZXI6bm90KC5hZGQtdHJpZ2dlcmVkKSAuYWRkLXRhc2stZGl2LFxcbi5jb250YWluZXI6bm90KC5hZGQtdHJpZ2dlcmVkKSAuYWRkLXRhc2stbWFpbi1idG5zLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5xdWljay1hZGQtdG9kbyxcXG4ucHJvamVjdC1jcmVhdG9yLFxcbi5sYWJlbC1jcmVhdG9yLFxcbi50b2RvLWVkaXRvcixcXG4ucHJvamVjdC1lZGl0b3IsXFxuLmxhYmVsLWVkaXRvciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQyKTtcXG4gICAgei1pbmRleDogOTk5O1xcbn1cXG5cXG4ucXVpY2stYWRkLXRvZG8gPiAqLFxcbi5xdWljay1hZGQtdG9kbyBpbnB1dCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucXVpY2stYWRkLXRvZG8gPiBkaXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodDkyKTtcXG4gICAgbWF4LXdpZHRoOiA0ODBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgcGFkZGluZzogLjVyZW0gLjVyZW0gLjVyZW0gLjVyZW07XFxufVxcblxcbi5xdWljay1hZGQtdG9kbyA+IGRpdiA+ICo6bm90KDpmaXJzdC1jaGlsZCkge1xcbiAgICBtYXJnaW46IC41cmVtIDAgMCAwO1xcbn1cXG5cXG4ucXVpY2stYWRkLXRvZG8gYnV0dG9uIHtcXG4gICAgcGFkZGluZzogLjI1cmVtO1xcbn1cXG5cXG4ucXVpY2stYWRkLXRvZG8gYnV0dG9uOmZpcnN0LWNoaWxkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFyaW5lcik7XFxufVxcblxcbi5xdWljay1hZGQtdG9kbyBidXR0b246aG92ZXIsXFxuLnF1aWNrLWFkZC10b2RvIGJ1dHRvbjpmb2N1cy12aXNpYmxlIHtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0OTIpO1xcbn1cXG5cXG4ucXVpY2stYWRkLXRvZG8ub24ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4ubm90aWZpY2F0aW9ucyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaW5zZXQ6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICB6LWluZGV4OiA5OTk7XFxufVxcblxcbi5ub3RpZi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodDkyKTtcXG4gICAgbWFyZ2luOiA0MHB4IDAgYXV0byBhdXRvO1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG4gICAgbWF4LXdpZHRoOiA0MjBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC1oZWlnaHQ6IDMyMHB4O1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDhweCAwIHJnYigwIDAgMCAvIDglKSxcXG4gICAgICAgIDAgMCAxcHggMCByZ2IoMCAwIDAgLyAzMCUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi5ub3RpZi1jb250YWluZXIgbmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMCAwIC4yNXJlbSAwO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tdHJhbnNwYXJlbnQyKTtcXG59XFxuXFxuLm5vdGlmLWNvbnRhaW5lciBuYXYgPiAqIHtcXG4gICAgZm9udC1zaXplOiAuOXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubm90aWYtY29udGFpbmVyIGJ1dHRvbjpmaXJzdC1vZi10eXBle1xcbiAgICBtYXJnaW46IDAgMCAwIC41cmVtO1xcbn1cXG5cXG4ubmF2LWJ0bi1ub3RpZmljYXRpb24gc21hbGwge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxcbiAgICBjb2xvcjogdmFyKC0tYXVidXJuKTtcXG4gICAgbWFyZ2luLWxlZnQ6IC0uODVyZW07IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWxpYnUpO1xcbiAgICBwYWRkaW5nOiAwIDFweDtcXG59XFxuXFxuLm5hdi1idG4tbm90aWZpY2F0aW9uOmhvdmVyIHNtYWxsLFxcbi5uYXYtYnRuLW5vdGlmaWNhdGlvbjpmb2N1cy12aXNpYmxlIHNtYWxsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQhaW1wb3J0YW50O1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQ5MikhaW1wb3J0YW50O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnJlYWQtYWxsLWJ0biB7XFxuICAgIG1hcmdpbjogMCAwIDAgYXV0byFpbXBvcnRhbnQ7XFxufVxcblxcbi5yZWFkLWFsbC1idG4gc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4ubm90aWYtb3V0cHV0IHtcXG4gICAgbWFyZ2luOiAwIC4yNXJlbTtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgLyogb3ZlcmZsb3cteDogaGlkZGVuOyAqL1xcbn1cXG5cXG4ubm90aWYtb3V0cHV0ID4gKiB7XFxuICAgIG1hcmdpbjogLjI1cmVtIDAgMCAwO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tdHJhbnNwYXJlbnQxKTtcXG4gICAgcGFkZGluZzogMCAwIC4yNXJlbSAwO1xcbiAgICBcXG59XFxuXFxuLm5vdGlmIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm5vdGlmID4gKixcXG4ubm90aWYtZXh0cmEgYnV0dG9uIHNwYW57XFxuICAgIGZvbnQtc2l6ZTogLjlyZW07ICBcXG59XFxuXFxuLm5vdGlmID4gc3BhbiB7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG5cXG4ubm90aWYtZXh0cmEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ub3RpZiBzbWFsbCB7XFxuICAgIGNvbG9yOiB2YXIoLS1hdWJ1cm4pO1xcbn1cXG5cXG4ubm90aWZpY2F0aW9ucy5vbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuXFxufVxcblxcbi5hcHAuc2VhcmNoIC5hZGQtdGFzay1idG4tZGl2e1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucHJvamVjdC1jcmVhdG9yID4gZGl2LFxcbi5sYWJlbC1jcmVhdG9yID4gZGl2LFxcbi50b2RvLWVkaXRvciA+IGRpdixcXG4ucHJvamVjdC1lZGl0b3IgPiBkaXYsXFxuLmxhYmVsLWVkaXRvciA+IGRpdiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0OTIpO1xcbiAgICBtYXgtd2lkdGg6IDQyMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4ucHJvamVjdC1jcmVhdG9yID4gZGl2ID4gKixcXG4ubGFiZWwtY3JlYXRvciA+IGRpdiA+ICosXFxuLnRvZG8tZWRpdG9yID4gZGl2ID4gKixcXG4ucHJvamVjdC1lZGl0b3IgPiBkaXYgPiAqLFxcbi5sYWJlbC1lZGl0b3IgPiBkaXYgPiAqIHtcXG4gICAgcGFkZGluZzogLjVyZW07XFxuICAgIG1hcmdpbjogMCAwIC4yNXJlbSAwO1xcbn1cXG5cXG4ucHJvamVjdC1jcmVhdG9yID4gZGl2ID4gKjpmaXJzdC1jaGlsZCwgXFxuLnByb2plY3QtY3JlYXRvciA+IGRpdiA+ICo6bnRoLWNoaWxkKDIpLFxcbi5sYWJlbC1jcmVhdG9yID4gZGl2ID4gKjpmaXJzdC1jaGlsZCwgXFxuLmxhYmVsLWNyZWF0b3IgPiBkaXYgPiAqOm50aC1jaGlsZCgyKSxcXG4udG9kby1lZGl0b3IgPiBkaXYgPiAqOmZpcnN0LWNoaWxkLCBcXG4udG9kby1lZGl0b3IgPiBkaXYgPiAqOm50aC1jaGlsZCgyKSxcXG4ucHJvamVjdC1lZGl0b3IgPiBkaXYgPiAqOmZpcnN0LWNoaWxkLFxcbi5wcm9qZWN0LWVkaXRvciA+IGRpdiA+ICo6bnRoLWNoaWxkKDIpLFxcbi5sYWJlbC1lZGl0b3IgPiBkaXYgPiAqOmZpcnN0LWNoaWxkLFxcbi5sYWJlbC1lZGl0b3IgPiBkaXYgPiAqOm50aC1jaGlsZCgyKSB7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS10cmFuc3BhcmVudDEpO1xcbn1cXG5cXG4ucHJvamVjdC1jcmVhdG9yID4gZGl2LFxcbi5wcm9qZWN0LWlucHV0LFxcbi5sYWJlbC1jcmVhdG9yID4gZGl2LFxcbi5sYWJlbC1pbnB1dCxcXG4udG9kby1lZGl0b3IgPiBkaXYsXFxuLnRvZG8tZWRpdG9yLWlucHV0LFxcbi5wcm9qZWN0LWVkaXRvciA+IGRpdixcXG4ucHJvamVjdC1lZGl0b3ItaW5wdXQsXFxuLmxhYmVsLWVkaXRvciA+IGRpdixcXG4ubGFiZWwtZWRpdG9yLWlucHV0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnByb2plY3QtaW5wdXQgPiAqLFxcbi5sYWJlbC1pbnB1dCA+ICosXFxuLnRvZG8tZWRpdG9yLWlucHV0ID4gKixcXG4ucHJvamVjdC1lZGl0b3ItaW5wdXQgPiAqLFxcbi5sYWJlbC1lZGl0b3ItaW5wdXQgPiAqIHtcXG4gICAgbWFyZ2luOiAwIDAgLjI1cmVtIDA7XFxufVxcblxcbi5wcm9qZWN0LWlucHV0IGlucHV0LFxcbi5sYWJlbC1pbnB1dCBpbnB1dCxcXG4udG9kby1lZGl0b3ItaW5wdXQgaW5wdXQsXFxuLnRvZG8tZWRpdG9yLWlucHV0IHNlbGVjdCxcXG4ucHJvamVjdC1lZGl0b3ItaW5wdXQgaW5wdXQsXFxuLmxhYmVsLWVkaXRvci1pbnB1dCBpbnB1dCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICBwYWRkaW5nOiAuMjVyZW07XFxufVxcblxcbi50b2RvLWVkaXRvci1pbnB1dCB7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi50b2RvLWVkaXRvci1pbnB1dCB7XFxuICAgIHBhZGRpbmctdG9wOiAwIWltcG9ydGFudDtcXG59XFxuXFxuLnRvZG8tZWRpdG9yLWlucHV0IGxhYmVsIHtcXG4gICAgbWFyZ2luOiAuMjVyZW0gMCAuMXJlbSAwO1xcbn1cXG5cXG4ucHJvamVjdC1idXR0b25zLFxcbi5sYWJlbC1idXR0b25zLFxcbi50b2RvLWVkaXRvci1idXR0b25zLFxcbi51cGRhdGUtcHJvamVjdC1idXR0b25zLFxcbi51cGRhdGUtbGFiZWwtYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7ICAgIFxcbiAgICBtYXJnaW4tYm90dG9tOiAwIWltcG9ydGFudDtcXG59XFxuXFxuLnByb2plY3QtY3JlYXRvciBidXR0b24sXFxuLmxhYmVsLWNyZWF0b3IgYnV0dG9uLFxcbi50b2RvLWVkaXRvciBidXR0b24sXFxuLnByb2plY3QtZWRpdG9yIGJ1dHRvbixcXG4ubGFiZWwtZWRpdG9yIGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IC4yNXJlbTtcXG4gICAgbWFyZ2luOiAwIDAgMCAuMjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50MSk7XFxufVxcblxcbi5wcm9qZWN0LWNyZWF0b3IgYnV0dG9uOmZpcnN0LWNoaWxkLFxcbi5sYWJlbC1jcmVhdG9yIGJ1dHRvbjpmaXJzdC1jaGlsZCxcXG4udG9kby1lZGl0b3IgYnV0dG9uOmZpcnN0LWNoaWxkLFxcbi5wcm9qZWN0LWVkaXRvciBidXR0b246Zmlyc3QtY2hpbGQsXFxuLmxhYmVsLWVkaXRvciBidXR0b246Zmlyc3QtY2hpbGQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYXJpbmVyKTtcXG59XFxuXFxuLnVwZGF0ZS1wcm9qZWN0LWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCgzKSxcXG4udXBkYXRlLWxhYmVsLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCgzKSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWF1YnVybik7XFxufVxcblxcbi5wcm9qZWN0LWNyZWF0b3Iub24sXFxuLmxhYmVsLWNyZWF0b3Iub24sXFxuLnRvZG8tZWRpdG9yLm9uLFxcbi5wcm9qZWN0LWVkaXRvci5vbixcXG4ubGFiZWwtZWRpdG9yLm9uIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLnByb2plY3QtaW5wdXQgaW5wdXQ6Zm9jdXMtdmlzaWJsZSxcXG4ubGFiZWwtaW5wdXQgaW5wdXQ6Zm9jdXMtdmlzaWJsZSxcXG4udG9kby1lZGl0b3ItaW5wdXQgaW5wdXQ6Zm9jdXMtdmlzaWJsZSxcXG4ucHJvamVjdC1lZGl0b3ItaW5wdXQgaW5wdXQ6Zm9jdXMtdmlzaWJsZSxcXG4ubGFiZWwtZWRpdG9yLWlucHV0IGlucHV0OmZvY3VzLXZpc2libGUge1xcbiAgICBvdXRsaW5lOiAxcHggc29saWQgdmFyKC0tdHJhbnNwYXJlbnQyKTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xcbiAgICAubmF2LWNvbXAge1xcbiAgICAgICAgcGFkZGluZzogLjVyZW0gLjVyZW0gLjVyZW0gLjVyZW07XFxuICAgIH1cXG4gICAgLmluZm8tY29tcCB7XFxuICAgICAgICBwYWRkaW5nOiAxcmVtIC4yNXJlbSAuMjVyZW0gLjI1cmVtO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgei1pbmRleDogMTAwMDtcXG4gICAgICAgIHRvcDogNDcuNTlweDtcXG4gICAgICAgIGJvdHRvbTogMDtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG4gICAgLmluZm8tY29tcC5zaG93LW5hdiB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB9XFxuICAgIC5pbmZvLWNvbXAgPiAqIHtcXG4gICAgICAgIHdpZHRoOiAyOTRweDtcXG4gICAgfVxcbiAgICAuY29udGFpbmVyID4gaGVhZGVyIHtcXG4gICAgICAgIHBhZGRpbmc6IDFyZW0gMCAuNXJlbSAwO1xcbiAgICB9XFxuICAgIC5jb250YWluZXIge1xcbiAgICAgICAgcGFkZGluZzogMCAxcmVtIDAgMXJlbTtcXG4gICAgfVxcbiAgICAucXVpY2stYWRkLXRvZG8gPiBkaXYge1xcbiAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XFxuICAgIC5pbmZvLWNvbXAgPiAqIHtcXG4gICAgICAgIHdpZHRoOiAyNDJweDtcXG4gICAgfVxcbiAgICAuc2VhcmNoLWlucHV0IHtcXG4gICAgICAgIHdpZHRoOiAxODBweDtcXG4gICAgfVxcbiAgICAuc2VhcmNoLWlucHV0OmZvY3VzIHtcXG4gICAgICAgIHdpZHRoOiAxODBweDtcXG4gICAgfVxcbiAgICAucXVpY2stYWRkLXRvZG8gPiBkaXYge1xcbiAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcXG4gICAgfVxcbiAgICAubm90aWYtY29udGFpbmVyIHtcXG4gICAgICAgIG1heC13aWR0aDogMzEwcHg7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjFweCkge1xcbiAgICAuc2VhcmNoLWlucHV0IHtcXG4gICAgICAgIG1heC13aWR0aDogMTM1cHg7XFxuICAgIH1cXG4gICAgLnNlYXJjaC1pbnB1dDpmb2N1cyB7XFxuICAgICAgICBtYXgtd2lkdGg6IDEzNXB4O1xcbiAgICB9XFxuICAgIC5xdWljay1hZGQtdG9kbyA+IGRpdiB7XFxuICAgICAgICBtYXgtd2lkdGg6IDI3MHB4O1xcbiAgICB9XFxuICAgIC5ub3RpZi1jb250YWluZXIge1xcbiAgICAgICAgbWF4LXdpZHRoOiAyNzBweDtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA0MjBweCkge1xcbiAgICAudG9kby1lZGl0b3ItaW5wdXQge1xcbiAgICAgICAgbWF4LWhlaWdodDogMTgwcHg7XFxuICAgIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFDMUIsdUJBQXVCO0lBQ3ZCLDRCQUE0QjtJQUM1QiwwQkFBMEI7SUFDMUIsNkJBQTZCO0lBQzdCLDZCQUE2QjtJQUM3Qiw0QkFBNEI7SUFDNUIsd0JBQXdCO0lBQ3hCLDhCQUE4QjtJQUM5Qiw4QkFBOEI7O0lBRTlCLDRCQUE0QjtJQUM1QiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTs7SUFFSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsbUNBQW1DO0lBQ25DLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQiw2QkFBNkI7QUFDakM7O0FBRUE7O0lBRUksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTs7SUFFSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBOzs7O0lBSUksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLFdBQVc7SUFDWCw4QkFBOEI7SUFDOUIsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsb0JBQW9CO0lBQ3BCLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7OztJQUdJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsT0FBTztJQUNQLGdDQUFnQztJQUNoQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3QixnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSwwQkFBMEI7SUFDMUIsMEJBQTBCO0FBQzlCOztBQUVBOztJQUVJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBOztJQUVJLHdCQUF3QjtBQUM1Qjs7O0FBR0E7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGdDQUFnQztJQUNoQyxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxxQ0FBcUM7QUFDekM7O0FBRUE7OztJQUdJLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQix1QkFBdUI7SUFDdkIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLE9BQU87SUFDUCxzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsc0JBQXNCOztBQUUxQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLE1BQU07SUFDTixnQ0FBZ0M7SUFDaEMsVUFBVTtBQUNkOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQiw0Q0FBNEM7QUFDaEQ7O0FBRUE7O0lBRUksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsV0FBVztJQUNYLHdCQUF3QjtJQUN4QixVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0kscUNBQXFDO0FBQ3pDOztBQUVBOztJQUVJLHlCQUF5QjtJQUN6QixxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osd0JBQXdCO0FBQzVCOztBQUVBOztJQUVJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixPQUFPO0lBQ1Asc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixvQkFBb0I7QUFDeEI7O0FBRUE7OztJQUdJLFdBQVc7QUFDZjs7QUFFQTs7O0lBR0ksMEJBQTBCO0FBQzlCOztBQUVBOztJQUVJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysb0JBQW9CO0FBQ3hCOztBQUVBOzs7SUFHSSw2QkFBNkI7QUFDakM7O0FBRUE7O0lBRUkscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixPQUFPO0lBQ1AsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjs7SUFFaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7O0lBRUksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsMEJBQTBCO0lBQzFCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixlQUFlO0FBQ25COztBQUVBOztJQUVJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsa0JBQWtCO0lBQ2xCLDRCQUE0QjtJQUM1QixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCOztBQUVBOztJQUVJLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBRUE7Ozs7SUFJSSxnQ0FBZ0M7SUFDaEMsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmO2tDQUM4QjtJQUM5QixhQUFhO0FBQ2pCOztBQUVBOztJQUVJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7Ozs7SUFJSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFFQTs7O0lBR0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTs7O0lBR0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsb0JBQW9CO0FBQ3hCOztBQUVBOztJQUVJLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsZ0NBQWdDO0lBQ2hDO2tDQUM4QjtJQUM5QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTs7SUFFSSxnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQTs7SUFFSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7OztJQUdJLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUkscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBOztJQUVJLGFBQWE7QUFDakI7O0FBRUE7Ozs7OztJQU1JLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixXQUFXO0lBQ1gscUNBQXFDO0lBQ3JDLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7O0lBRUkscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLDZCQUE2QjtJQUM3QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixnQ0FBZ0M7SUFDaEMsd0JBQXdCO0lBQ3hCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCO2tDQUM4QjtJQUM5QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQiw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLCtCQUErQjtJQUMvQixjQUFjO0FBQ2xCOztBQUVBOztJQUVJLHVDQUF1QztJQUN2QywrQkFBK0I7SUFDL0IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsNENBQTRDO0lBQzVDLHFCQUFxQjs7QUFFekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBOztJQUVJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhOztBQUVqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7Ozs7O0lBS0ksZ0NBQWdDO0lBQ2hDLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBOzs7OztJQUtJLGNBQWM7SUFDZCxvQkFBb0I7QUFDeEI7O0FBRUE7Ozs7Ozs7Ozs7SUFVSSw0Q0FBNEM7QUFDaEQ7O0FBRUE7Ozs7Ozs7Ozs7SUFVSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBOzs7OztJQUtJLG9CQUFvQjtBQUN4Qjs7QUFFQTs7Ozs7O0lBTUksWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTs7Ozs7SUFLSSxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLDBCQUEwQjtBQUM5Qjs7QUFFQTs7Ozs7SUFLSSxlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLHFDQUFxQztBQUN6Qzs7QUFFQTs7Ozs7SUFLSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7O0lBRUksK0JBQStCO0FBQ25DOztBQUVBOzs7OztJQUtJLGFBQWE7QUFDakI7O0FBRUE7Ozs7O0lBS0ksc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0k7UUFDSSxnQ0FBZ0M7SUFDcEM7SUFDQTtRQUNJLGtDQUFrQztRQUNsQyxrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLFlBQVk7UUFDWixTQUFTO1FBQ1QsYUFBYTtJQUNqQjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksdUJBQXVCO0lBQzNCO0lBQ0E7UUFDSSxzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLWxpZ2h0OTI6IGhzbCgwLCAwJSwgOTIlKTtcXG4gICAgLS1saWdodDg4OiBoc2woMCwgMCUsIDg4JSk7XFxuICAgIC0tZGFyazogaHNsKDAsIDAlLCAxMiUpO1xcbiAgICAtLW1hbGlidTogaHNsKDE5MiwgOTMlLCA3MiUpO1xcbiAgICAtLWF1YnVybjogaHNsKDAsIDc1JSwgNjUlKTtcXG4gICAgLS1tYXJpbmVyOiBoc2woMjE2LCA3NSUsIDUxJSk7XFxuICAgIC0tbGF1cmVsOiBoc2woMTIwLCAxMDAlLCAyNSUpO1xcbiAgICAtLXB1cnBsZTogaHNsKDI2NCwgNjElLCA0NyUpO1xcbiAgICAtLXN1bjogaHNsKDM0LCA5MyUsIDQ4JSk7XFxuICAgIC0tdHJhbnNwYXJlbnQxOiByZ2JhKDAsMCwwLC4xKTtcXG4gICAgLS10cmFuc3BhcmVudDI6IHJnYmEoMCwwLDAsLjIpO1xcblxcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWxpZ2h0OTIpO1xcbiAgICAtLWZvcmVncm91bmQ6IHZhcigtLW1hbGlidSk7XFxufVxcblxcbiosICo6YmVmb3JlLCAqOmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwOyAgXFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG4gICAgZm9udC1mYW1pbHk6c2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHZhcigtLWRhcmspO1xcbn1cXG5cXG5idXR0b24sXFxuLnNlYXJjaC1pbnB1dCB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBmb250LWZhbWlseTpzYW5zLXNlcmlmO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBwYWRkaW5nOiAuMTI1cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tZGFyayk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG5idXR0b24sXFxuLmljLWRpdiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuc3Bhbi5taWQge1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG5zcGFuLFxcbmgxIHtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5hcHAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi5uYXYtY29tcCAsXFxuLm5jLWxlZnQsXFxuLnNlYXJjaC1kaXYsXFxuLm5jLXJpZ2h0IHtcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxufVxcblxcbi5uYXYtY29tcCB7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IC41cmVtIDNyZW0gLjVyZW0gM3JlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9yZWdyb3VuZCk7XFxufVxcblxcbi5uYy1sZWZ0ID4gKiB7XFxuICAgIG1hcmdpbjogMCAuMjVyZW0gMCAwO1xcbn1cXG5cXG4ubmMtcmlnaHQgPiAqIHtcXG4gICAgbWFyZ2luOiAwIDAgMCAuMjVyZW07XFxufVxcblxcbi5uYy1yaWdodCBidXR0b246Zmlyc3QtY2hpbGQge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi5zZWFyY2gtZGl2IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb3JlZ3JvdW5kKTtcXG59XFxuXFxuLnNlYXJjaC1kaXYgPiBzcGFuOmZpcnN0LWNoaWxkIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBjdXJzb3I6IHRleHQ7XFxuICAgIG1hcmdpbjogLjFyZW07XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG4uc2VhcmNoLWRpdiBidXR0b24ge1xcbiAgICBtYXJnaW46IC4ycmVtIDAgLjJyZW0gLTEuNXJlbTtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc2VhcmNoLWRpdiBidXR0b246aG92ZXIsXFxuLnNlYXJjaC1kaXYgYnV0dG9uOmZvY3VzLXZpc2libGUge1xcbiAgICBjb2xvcjogdmFyKC0tYXVidXJuKTtcXG59XFxuXFxuLnNlYXJjaC1pbnB1dCB7XFxuICAgIHBhZGRpbmc6IDAgMS42cmVtIDAgMS44cmVtO1xcbiAgICBtYXJnaW4tbGVmdDogLTEuOXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQxKTtcXG59XFxuXFxuLnNlYXJjaC1pbnB1dDo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbiB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLnNlYXJjaC1pbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSArIGJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uc2VhcmNoLWRpdjpmb2N1cy13aXRoaW4gLnNlYXJjaC1pbnB1dCxcXG4uc2VhcmNoLWRpdjpob3ZlciAuc2VhcmNoLWlucHV0LFxcbi5zZWFyY2gtaW5wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bil7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0OTIpO1xcbn1cXG5cXG4uc2VhcmNoLWRpdiBidXR0b24gc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmFwcC1ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleDogMTtcXG4gICAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gNDYuNTlweCk7XFxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uaW5mby1jb21wIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMnJlbSAuMjVyZW0gMCAyLjhyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ODgpO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4uaW5mby1jb21wID4gKiB7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGZvbnQtc2l6ZTogLjlyZW07XFxuICAgIHdpZHRoOiAyOTRweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4uaW5mby1jb21wID4gKiA+IHNhbXAge1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIG9wYWNpdHk6IC41O1xcbiAgICBtYXJnaW46IDRweCAxcmVtIDRweCAwO1xcbn1cXG5cXG4uaWMtZGl2IHtcXG4gICAgbWFyZ2luOiAuMjVyZW0gMCAwIDA7XFxufVxcblxcbi5pbmZvLWNvbXAgPiBkaXY6Zmlyc3Qtb2YtdHlwZXtcXG4gICAgbWFyZ2luOiAxcmVtIDAgMCAwO1xcbn1cXG5cXG4uaWMtc3BhbiB7XFxuICAgIG1hcmdpbjogMCAuMjVyZW0gMCAwO1xcbn1cXG5cXG4uaW5mby1jb21wID4gYnV0dG9uOmZpcnN0LWNoaWxkIHNwYW4ge1xcbiAgICBjb2xvcjogdmFyKC0tbWFyaW5lcik7XFxufVxcblxcbi5pbmZvLWNvbXAgPiBidXR0b246bnRoLWNoaWxkKDIpIHNwYW4ge1xcbiAgICBjb2xvcjogdmFyKC0tbGF1cmVsKTtcXG59XFxuXFxuLmluZm8tY29tcCA+IGJ1dHRvbjpudGgtY2hpbGQoMykgc3BhbiB7XFxuICAgIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xcbn1cXG5cXG4uaW5mby1jb21wIC5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWxpYnUpO1xcbn1cXG5cXG4ub3BhIHtcXG4gICAgb3BhY2l0eTogLjU7XFxufVxcblxcbi5pYy1hZGQtYnRuIHtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBtYXJnaW46IDBweCAuNXJlbSAwIDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5pYy1hZGQtYnRuOmhvdmVyICsgc3Ryb25nLFxcbi5pYy1hZGQtYnRuOmZvY3VzLXZpc2libGUgKyBzdHJvbmcge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgdGV4dC11bmRlcmxpbmUtb2Zmc2V0OiAzMCU7XFxufVxcblxcbi5pbmZvLWNvbXA6Zm9jdXMtd2l0aGluIC5pYy1hZGQtYnRuLFxcbi5pbmZvLWNvbXA6aG92ZXIgLmljLWFkZC1idG57XFxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XFxufVxcblxcbi5pYy1kaXYgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaWMtZGl2ID4gZGl2LnNob3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uaWMtcHJvamVjdCA+IHNwYW4ucm90YXRlLFxcbi5pYy1sYWJlbCA+IHNwYW4ucm90YXRlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG5cXG5cXG4uc2hvdyB7XFxuICAgIG1hcmdpbjogLjc1cmVtIDAgMCAwO1xcbn1cXG5cXG4uc2hvdyA+IGRpdiB7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IC41cmVtIC41cmVtIC41cmVtIC41cmVtO1xcbiAgICBoZWlnaHQ6IDM0cHg7XFxuICAgIGZvbnQtc2l6ZTogLjlyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuc3Bhbi51bmlxdWUge1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBtYXJnaW4tcmlnaHQ6IC4ycmVtO1xcbn1cXG5cXG4uc2hvdyBidXR0b24ge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5zaG93ID4gZGl2OmhvdmVyLFxcbi5zaG93ID4gZGl2OmZvY3VzLXZpc2libGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudDIpO1xcbn1cXG5cXG4uc2hvdyA+IGRpdjpob3ZlciBidXR0b24sXFxuLnNob3cgPiBkaXY6Zm9jdXMtdmlzaWJsZSBidXR0b24sXFxuLnNob3cgPiBkaXY6Zm9jdXMtd2l0aGluIGJ1dHRvbntcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5zaG93IGJ1dHRvbjpob3ZlcixcXG4uc2hvdyBidXR0b246Zm9jdXMtdmlzaWJsZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50IWltcG9ydGFudDtcXG59XFxuXFxuLmJ1bGxldCB7XFxuICAgIG1pbi13aWR0aDogMTBweDtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIG1hcmdpbjogMCAuN3JlbSAwIC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudDIpO1xcbn1cXG5cXG4udGFnIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSguOCk7XFxuICAgIG1hcmdpbjogMCAuMnJlbSAwIC4ycmVtO1xcbiAgICBjb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQyKTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXg6IDE7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgcGFkZGluZzogMCAycmVtIDAgMnJlbTtcXG5cXG59XFxuXFxuLmNvbnRhaW5lciA+ICoge1xcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNvbnRhaW5lciA+IGZvb3RlciB7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxufVxcblxcbi5jb250YWluZXIgPiBoZWFkZXIge1xcbiAgICBwYWRkaW5nOiAycmVtIDAgMXJlbSAwO1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB0b3A6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0OTIpO1xcbiAgICB6LWluZGV4OiAzO1xcbn1cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4udG9kbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDJweCAwO1xcbiAgICBtYXJnaW46IC41cmVtIDAgLjVyZW0gMDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tdHJhbnNwYXJlbnQxKTtcXG59XFxuXFxuLnRvZG8sXFxuLnRvZG8gKiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNoZWNrYm94LWJ0biB7IFxcbiAgICBoZWlnaHQ6IDE4cHg7XFxuICAgIG1heC13aWR0aDogMThweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogLjI3cmVtIC43cmVtIDAgMDtcXG4gICAgei1pbmRleDogMjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uY2hlY2tib3gtYnRuLnByaW8xIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYXVidXJuKTtcXG59XFxuXFxuLmNoZWNrYm94LWJ0bi5wcmlvMiB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXN1bik7XFxufVxcblxcbi5jaGVja2JveC1idG4ucHJpbzMge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1tYXJpbmVyKTtcXG59XFxuXFxuLmNoZWNrYm94LWJ0bi5wcmlvNCB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXRyYW5zcGFyZW50Mik7XFxufVxcblxcbi5jaGVja2JveC1idG46aG92ZXIsXFxuLmNoZWNrYm94LWJ0bjpmb2N1cy12aXNpYmxlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQxKTtcXG59XFxuXFxuLmNoZWNrYm94LWJ0biArIHNwYW4ge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBsaW5lLWhlaWdodDogMXJlbTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGNvbG9yOiB2YXIoLS10cmFuc3BhcmVudDIpO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgbWFyZ2luOiAtLjlyZW0gMCAwIC0xcmVtOyAgICBcXG59XFxuXFxuLmNoZWNrYm94LWJ0bjpob3ZlciArIHNwYW4sXFxuLmNoZWNrYm94LWJ0bjpmb2N1cy12aXNpYmxlICsgc3BhbiB7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi5jaGVja2JveC1idG46YWN0aXZlICsgc3BhbntcXG4gICAgY29sb3I6IHZhcigtLWxhdXJlbCk7XFxufVxcblxcbi50b2RvLXRleHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiAxO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udG9kby10ZXh0ID4gbGFiZWwge1xcbiAgICBsaW5lLWhlaWdodDogMS40cmVtO1xcbn1cXG5cXG4udG9kby10ZXh0LW5vdGUge1xcbiAgICB0ZXh0LWluZGVudDogMXJlbTtcXG4gICAgZm9udC1zaXplOiAuOXJlbTtcXG4gICAgbWFyZ2luOiAwIDAgLjI1cmVtIDA7XFxufVxcblxcbi50b2RvLXRleHQtbm90ZSxcXG4udG9kby10ZXh0LW5vdGUgPiBzcGFuLFxcbi50b2RvLXRleHQgc21hbGwge1xcbiAgICBjb2xvcjogZ3JheTtcXG59XFxuXFxuLnRvZG8tdGV4dC1ub3RlID4gc3BhbixcXG5lbSxcXG5lbSA+IHNwYW4ge1xcbiAgICBmb250LXNpemU6IC45cmVtIWltcG9ydGFudDtcXG59XFxuXFxuLnRvZG8tdGV4dCBzbWFsbDpob3ZlcixcXG4udG9kby10ZXh0IHNtYWxsOmZvY3VzLXZpc2libGUge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuZW0ge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnNjaGVkLWR1ZSB7XFxuICAgIGNvbG9yOiB2YXIoLS1hdWJ1cm4pO1xcbn1cXG5cXG4uc2NoZWQtdG9kYXkge1xcbiAgICBjb2xvcjogdmFyKC0tbGF1cmVsKTtcXG59XFxuXFxuLnNjaGVkLXVwY29tIHtcXG4gICAgY29sb3I6IHZhcigtLXB1cnBsZSk7XFxufVxcblxcbi50b2RvLXRvb2xzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgbWFyZ2luOiAtMjBweCAwIDAgMDtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4udG9kby10b29scy1jb250YWluZXIgKiB7XFxuICAgIGNvbG9yOiBncmF5O1xcbn1cXG5cXG4udG9vbC1zcGFuIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi50b2RvOmhvdmVyIC50b2RvLXRvb2xzLWNvbnRhaW5lcixcXG4udG9kbzpmb2N1cy13aXRoaW4gLnRvZG8tdG9vbHMtY29udGFpbmVyIHtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuYnV0dG9uOmhvdmVyLFxcbmJ1dHRvbjpmb2N1cy12aXNpYmxlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQyKTtcXG59XFxuXFxuYnV0dG9uOmZvY3VzLXZpc2libGUge1xcbiAgICBvdXRsaW5lOiBhdXRvO1xcbn1cXG5cXG4uYWRkLXRhc2stYnRuIHtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgY29sb3I6IGdyYXk7XFxufVxcblxcbi5hZGQtdGFzay1idG4gKiB7XFxuICAgIHBhZGRpbmc6IC4xcmVtO1xcbn1cXG5cXG4uYWRkLXRhc2stYnRuIHNwYW4ge1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGNvbG9yOiB2YXIoLS1hdWJ1cm4pO1xcbn1cXG5cXG4uYWRkLXRhc2stYnRuOmhvdmVyLFxcbi5hZGQtdGFzay1idG46Zm9jdXMtdmlzaWJsZSxcXG4uYWRkLXRhc2stYnRuIHNwYW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmFkZC10YXNrLWJ0bjpob3ZlciBzcGFuLFxcbi5hZGQtdGFzay1idG46Zm9jdXMtdmlzaWJsZSBzcGFuIHtcXG4gICAgY29sb3I6IHZhcigtLW1hcmluZXIpO1xcbn1cXG5cXG4uZW1wdHktc3RhdGUtZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleDogMTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5lbXB0eS1zdGF0ZS1kaXYgaW1nIHtcXG4gICAgbWF4LXdpZHRoOiAxODBweDtcXG4gICAgXFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuXFxuLmVtcHR5LXN0YXRlLWRpdiBoNCB7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIGNvbG9yOiBncmF5O1xcbn1cXG5cXG4uZW1wdHktc3RhdGUtZGl2ICo6bnRoLWNoaWxkKG4rMikge1xcbiAgICBtYXJnaW46IC4yNXJlbSAwIDAgMDtcXG59XFxuXFxuLmVtcHR5LXN0YXRlLWRpdiAqOm50aC1jaGlsZChuKzIpLFxcbi5jb250YWluZXIgZm9vdGVyIHAge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5lbXB0eS1zdGF0ZS1kaXYgcCB7XFxuICAgIGZvbnQtc2l6ZTogLjlyZW07XFxuICAgIGNvbG9yOiBkYXJrZ3JheTtcXG59XFxuXFxuLmNvbnRhaW5lciBmb290ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tYXVidXJuKTtcXG4gICAgZm9udC1zaXplOiAuOXJlbSFpbXBvcnRhbnQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAuMjVyZW0gMCAuNzVyZW0gMDtcXG59XFxuXFxuLmNvbnRhaW5lciBmb290ZXIgc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbSFpbXBvcnRhbnQ7XFxufVxcblxcbi5jb250YWluZXIgZm9vdGVyIHAge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY29udGFpbmVyOm5vdCguZW1wdHkpIC5lbXB0eS1zdGF0ZS1kaXYsXFxuLmNvbnRhaW5lcjpub3QoLmVtcHR5KSBmb290ZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uYWRkLXRhc2stZGl2IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdHJhbnNwYXJlbnQyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBwYWRkaW5nOiAwIC41cmVtIC41cmVtIC41cmVtO1xcbiAgICBoZWlnaHQ6IDY4LjQ4cHg7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcbi5hZGQtdGFzay1kaXYgPiAqIHtcXG4gICAgbWFyZ2luLXRvcDogLjVyZW07XFxufVxcblxcbi5hZGQtdGFzay1kaXYgaW5wdXQsXFxuLnF1aWNrLWFkZC10b2RvIGlucHV0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAuOXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQ5Mik7XFxufVxcblxcbi5hZGQtdGFzay1idG5zLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmFkZC10YXNrLWJ0bnMtY29udGFpbmVyIGRpdiA+IGJ1dHRvbiB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRyYW5zcGFyZW50Mik7XFxuICAgIHBhZGRpbmc6IC4yNXJlbTtcXG59XFxuXFxuLmFkZC10YXNrLWJ0bnMtY29udGFpbmVyIGJ1dHRvbiA+IHNwYW4ge1xcbiAgICBmb250LXNpemU6IC45cmVtIWltcG9ydGFudDtcXG59XFxuXFxuLmFkZC10YXNrLWJ0bnMtY29udGFpbmVyID4gYnV0dG9uOm50aC1jaGlsZCgyKSBzcGFuIHtcXG4gICAgY29sb3I6IHZhcigtLW1hcmluZXIpO1xcbn1cXG5cXG4uc2VsZWN0LXByb2plY3QtYnRuIHtcXG4gICAgbWF4LXdpZHRoOiA3NXB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuXFxuLnNjaGVkdWxlcixcXG4uY2FycmllciB7XFxuICAgIG1heC13aWR0aDogMjEwcHg7XFxuICAgIHdpZHRoOiAxMDAlOyAgICBcXG59XFxuXFxuLnNjaGVkdWxlcixcXG4uY2FycmllcixcXG4ubGFiZWxlcixcXG4ucHJpby1zZXR0ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodDkyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbjogMCAwIDAgMDtcXG4gICAgYm94LXNoYWRvdzogMCAxcHggOHB4IDAgcmdiKDAgMCAwIC8gOCUpLFxcbiAgICAgICAgMCAwIDFweCAwIHJnYigwIDAgMCAvIDMwJSk7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5zY2hlZHVsZXIgPiAqLFxcbi5jYXJyaWVyID4gKiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBwYWRkaW5nOiAuNXJlbSAuNXJlbSAuNXJlbSAuNXJlbTtcXG59XFxuXFxuLnNjaGVkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uc2NoZWQgc3BhbjpudGgtY2hpbGQoMikge1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgY29sb3I6IGdyYXk7XFxufVxcblxcbi5zY2hlZHVsZXIgaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xcbiAgICBvcGFjaXR5OiAuNDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2NoZWR1bGVyIGlucHV0W3R5cGU9XFxcImRhdGVcXFwiXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnNjaGVkdWxlciAuc2NoZWQtY3VzdG9tIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnNjaGVkdWxlciAuc2NoZWQtY3VzdG9tIGJ1dHRvbiB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRyYW5zcGFyZW50MSk7XFxufVxcblxcbi5zY2hlZHVsZXIgLnNjaGVkLWN1c3RvbSBpbnB1dCB7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uc2NoZWR1bGVyIC5zY2hlZC1jdXN0b20gYnV0dG9uID4gc3BhbixcXG4uY2FycmllciBzcGFuLFxcbi5sYWJlbGVyIHNwYW4sXFxuLnByaW8tc2V0dGVyIHNwYW4ge1xcbiAgICBmb250LXNpemU6IC45cmVtIWltcG9ydGFudDtcXG59XFxuXFxuLnByaW8tc2V0dGVyIGJ1dHRvbjpmaXJzdC1jaGlsZCBzcGFuIHtcXG4gICAgY29sb3I6IHZhcigtLWF1YnVybik7XFxufVxcblxcbi5wcmlvLXNldHRlciBidXR0b246bnRoLWNoaWxkKDIpIHNwYW4ge1xcbiAgICBjb2xvcjogdmFyKC0tc3VuKTtcXG59XFxuXFxuLnByaW8tc2V0dGVyIGJ1dHRvbjpudGgtY2hpbGQoMykgc3BhbiB7XFxuICAgIGNvbG9yOiB2YXIoLS1tYXJpbmVyKTtcXG59XFxuXFxuLnByaW8tc2V0dGVyIGJ1dHRvbjpudGgtY2hpbGQoNCkgc3BhbiB7XFxuICAgIGNvbG9yOiBncmF5O1xcbn1cXG5cXG4uY2FycmllciB7XFxuICAgIG1hcmdpbjogMCAwIDAgLS43cmVtO1xcbiAgICBtYXgtd2lkdGg6IDE2MHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNhcnJpZXIgYnV0dG9uLFxcbi5sYWJlbGVyIGJ1dHRvbixcXG4ucHJpby1zZXR0ZXIgYnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNhcnJpZXIgdSxcXG4ubGFiZWxlciB1LFxcbi5wcmlvLXNldHRlciB1IHtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIG1hcmdpbjogMCAwIDAgLjI1cmVtO1xcbn1cXG5cXG4ubGFiZWxlcixcXG4ucHJpby1zZXR0ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4ubGFiZWxlciBkaXYsXFxuLnByaW8tc2V0dGVyIGRpdiB7XFxuICAgIG1heC13aWR0aDogMTYwcHg7XFxuICAgIHdpZHRoOiAxMDAlOyBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luOiAwIDEuOHJlbSAwIGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0OTIpO1xcbiAgICBib3gtc2hhZG93OiAwIDFweCA4cHggMCByZ2IoMCAwIDAgLyA4JSksXFxuICAgICAgICAwIDAgMXB4IDAgcmdiKDAgMCAwIC8gMzAlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4ucHJpby1zZXR0ZXIgZGl2IHtcXG4gICAgbWFyZ2luOiAwIDAgMCBhdXRvO1xcbiAgICBtYXgtd2lkdGg6IDg4cHg7XFxufVxcblxcbi5wcmlvLXNldHRlciB1IHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4ubGFiZWxlciBidXR0b24sXFxuLnByaW8tc2V0dGVyIGJ1dHRvbiB7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIHBhZGRpbmc6IC41cmVtO1xcbn1cXG5cXG4uc2NoZWR1bGVyIC5zY2hlZC1jdXN0b20gYnV0dG9uOmhvdmVyID4gc3BhbixcXG4uc2NoZWR1bGVyIC5zY2hlZC1jdXN0b20gYnV0dG9uOmZvY3VzLXZpc2libGUgPiBzcGFuIHtcXG4gICAgY29sb3I6IHZhcigtLWxhdXJlbCk7XFxufVxcblxcbi5hZGQtdGFzay1kaXYuZGlzcGxheS1zY2hlZHVsZXIgLnNjaGVkdWxlciB7XFxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XFxufVxcblxcbi5hZGQtdGFzay1kaXYuZGlzcGxheS1jYXJyaWVyIC5jYXJyaWVyLFxcbi5hZGQtdGFzay1kaXYuZGlzcGxheS1sYWJlbGVyIC5sYWJlbGVyLFxcbi5hZGQtdGFzay1kaXYuZGlzcGxheS1wcmlvLXNldHRlciAucHJpby1zZXR0ZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmFkZC10YXNrLWRpdiAuc2VsZWN0ZWQsXFxuLmFkZC10YXNrLWRpdiAuYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQxKTtcXG59XFxuXFxuLmFkZC10YXNrLW1haW4tYnRucy1jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAuNXJlbSAwIC41cmVtIDA7XFxufVxcblxcbi5hZGQtdGFzay1tYWluLWJ0bnMtY29udGFpbmVyIGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IC4yNXJlbTtcXG59XFxuXFxuLmFkZC10YXNrLW1haW4tYnRucy1jb250YWluZXIgYnV0dG9uOmZpcnN0LWNoaWxkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFsaWJ1KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdHJhbnNwYXJlbnQyKTtcXG59XFxuXFxuLmNvbnRhaW5lci5hZGQtdHJpZ2dlcmVkIC5hZGQtdGFzay1idG4tZGl2IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNvbnRhaW5lcjpub3QoLmFkZC10cmlnZ2VyZWQpIC5hZGQtdGFzay1kaXYsXFxuLmNvbnRhaW5lcjpub3QoLmFkZC10cmlnZ2VyZWQpIC5hZGQtdGFzay1tYWluLWJ0bnMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnF1aWNrLWFkZC10b2RvLFxcbi5wcm9qZWN0LWNyZWF0b3IsXFxuLmxhYmVsLWNyZWF0b3IsXFxuLnRvZG8tZWRpdG9yLFxcbi5wcm9qZWN0LWVkaXRvcixcXG4ubGFiZWwtZWRpdG9yIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudDIpO1xcbiAgICB6LWluZGV4OiA5OTk7XFxufVxcblxcbi5xdWljay1hZGQtdG9kbyA+ICosXFxuLnF1aWNrLWFkZC10b2RvIGlucHV0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5xdWljay1hZGQtdG9kbyA+IGRpdiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0OTIpO1xcbiAgICBtYXgtd2lkdGg6IDQ4MHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBwYWRkaW5nOiAuNXJlbSAuNXJlbSAuNXJlbSAuNXJlbTtcXG59XFxuXFxuLnF1aWNrLWFkZC10b2RvID4gZGl2ID4gKjpub3QoOmZpcnN0LWNoaWxkKSB7XFxuICAgIG1hcmdpbjogLjVyZW0gMCAwIDA7XFxufVxcblxcbi5xdWljay1hZGQtdG9kbyBidXR0b24ge1xcbiAgICBwYWRkaW5nOiAuMjVyZW07XFxufVxcblxcbi5xdWljay1hZGQtdG9kbyBidXR0b246Zmlyc3QtY2hpbGQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYXJpbmVyKTtcXG59XFxuXFxuLnF1aWNrLWFkZC10b2RvIGJ1dHRvbjpob3ZlcixcXG4ucXVpY2stYWRkLXRvZG8gYnV0dG9uOmZvY3VzLXZpc2libGUge1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQ5Mik7XFxufVxcblxcbi5xdWljay1hZGQtdG9kby5vbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5ub3RpZmljYXRpb25zIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBpbnNldDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIHotaW5kZXg6IDk5OTtcXG59XFxuXFxuLm5vdGlmLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0OTIpO1xcbiAgICBtYXJnaW46IDQwcHggMCBhdXRvIGF1dG87XFxuICAgIHBhZGRpbmc6IC41cmVtO1xcbiAgICBtYXgtd2lkdGg6IDQyMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LWhlaWdodDogMzIwcHg7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgYm94LXNoYWRvdzogMCAxcHggOHB4IDAgcmdiKDAgMCAwIC8gOCUpLFxcbiAgICAgICAgMCAwIDFweCAwIHJnYigwIDAgMCAvIDMwJSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuLm5vdGlmLWNvbnRhaW5lciBuYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwIDAgLjI1cmVtIDA7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS10cmFuc3BhcmVudDIpO1xcbn1cXG5cXG4ubm90aWYtY29udGFpbmVyIG5hdiA+ICoge1xcbiAgICBmb250LXNpemU6IC45cmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5ub3RpZi1jb250YWluZXIgYnV0dG9uOmZpcnN0LW9mLXR5cGV7XFxuICAgIG1hcmdpbjogMCAwIDAgLjVyZW07XFxufVxcblxcbi5uYXYtYnRuLW5vdGlmaWNhdGlvbiBzbWFsbCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXFxuICAgIGNvbG9yOiB2YXIoLS1hdWJ1cm4pO1xcbiAgICBtYXJnaW4tbGVmdDogLS44NXJlbTsgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1hbGlidSk7XFxuICAgIHBhZGRpbmc6IDAgMXB4O1xcbn1cXG5cXG4ubmF2LWJ0bi1ub3RpZmljYXRpb246aG92ZXIgc21hbGwsXFxuLm5hdi1idG4tbm90aWZpY2F0aW9uOmZvY3VzLXZpc2libGUgc21hbGwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCFpbXBvcnRhbnQ7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodDkyKSFpbXBvcnRhbnQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ucmVhZC1hbGwtYnRuIHtcXG4gICAgbWFyZ2luOiAwIDAgMCBhdXRvIWltcG9ydGFudDtcXG59XFxuXFxuLnJlYWQtYWxsLWJ0biBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5ub3RpZi1vdXRwdXQge1xcbiAgICBtYXJnaW46IDAgLjI1cmVtO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICAvKiBvdmVyZmxvdy14OiBoaWRkZW47ICovXFxufVxcblxcbi5ub3RpZi1vdXRwdXQgPiAqIHtcXG4gICAgbWFyZ2luOiAuMjVyZW0gMCAwIDA7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS10cmFuc3BhcmVudDEpO1xcbiAgICBwYWRkaW5nOiAwIDAgLjI1cmVtIDA7XFxuICAgIFxcbn1cXG5cXG4ubm90aWYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubm90aWYgPiAqLFxcbi5ub3RpZi1leHRyYSBidXR0b24gc3BhbntcXG4gICAgZm9udC1zaXplOiAuOXJlbTsgIFxcbn1cXG5cXG4ubm90aWYgPiBzcGFuIHtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcblxcbi5ub3RpZi1leHRyYSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm5vdGlmIHNtYWxsIHtcXG4gICAgY29sb3I6IHZhcigtLWF1YnVybik7XFxufVxcblxcbi5ub3RpZmljYXRpb25zLm9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG5cXG59XFxuXFxuLmFwcC5zZWFyY2ggLmFkZC10YXNrLWJ0bi1kaXZ7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0LWNyZWF0b3IgPiBkaXYsXFxuLmxhYmVsLWNyZWF0b3IgPiBkaXYsXFxuLnRvZG8tZWRpdG9yID4gZGl2LFxcbi5wcm9qZWN0LWVkaXRvciA+IGRpdixcXG4ubGFiZWwtZWRpdG9yID4gZGl2IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQ5Mik7XFxuICAgIG1heC13aWR0aDogNDIwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi5wcm9qZWN0LWNyZWF0b3IgPiBkaXYgPiAqLFxcbi5sYWJlbC1jcmVhdG9yID4gZGl2ID4gKixcXG4udG9kby1lZGl0b3IgPiBkaXYgPiAqLFxcbi5wcm9qZWN0LWVkaXRvciA+IGRpdiA+ICosXFxuLmxhYmVsLWVkaXRvciA+IGRpdiA+ICoge1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG4gICAgbWFyZ2luOiAwIDAgLjI1cmVtIDA7XFxufVxcblxcbi5wcm9qZWN0LWNyZWF0b3IgPiBkaXYgPiAqOmZpcnN0LWNoaWxkLCBcXG4ucHJvamVjdC1jcmVhdG9yID4gZGl2ID4gKjpudGgtY2hpbGQoMiksXFxuLmxhYmVsLWNyZWF0b3IgPiBkaXYgPiAqOmZpcnN0LWNoaWxkLCBcXG4ubGFiZWwtY3JlYXRvciA+IGRpdiA+ICo6bnRoLWNoaWxkKDIpLFxcbi50b2RvLWVkaXRvciA+IGRpdiA+ICo6Zmlyc3QtY2hpbGQsIFxcbi50b2RvLWVkaXRvciA+IGRpdiA+ICo6bnRoLWNoaWxkKDIpLFxcbi5wcm9qZWN0LWVkaXRvciA+IGRpdiA+ICo6Zmlyc3QtY2hpbGQsXFxuLnByb2plY3QtZWRpdG9yID4gZGl2ID4gKjpudGgtY2hpbGQoMiksXFxuLmxhYmVsLWVkaXRvciA+IGRpdiA+ICo6Zmlyc3QtY2hpbGQsXFxuLmxhYmVsLWVkaXRvciA+IGRpdiA+ICo6bnRoLWNoaWxkKDIpIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXRyYW5zcGFyZW50MSk7XFxufVxcblxcbi5wcm9qZWN0LWNyZWF0b3IgPiBkaXYsXFxuLnByb2plY3QtaW5wdXQsXFxuLmxhYmVsLWNyZWF0b3IgPiBkaXYsXFxuLmxhYmVsLWlucHV0LFxcbi50b2RvLWVkaXRvciA+IGRpdixcXG4udG9kby1lZGl0b3ItaW5wdXQsXFxuLnByb2plY3QtZWRpdG9yID4gZGl2LFxcbi5wcm9qZWN0LWVkaXRvci1pbnB1dCxcXG4ubGFiZWwtZWRpdG9yID4gZGl2LFxcbi5sYWJlbC1lZGl0b3ItaW5wdXQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucHJvamVjdC1pbnB1dCA+ICosXFxuLmxhYmVsLWlucHV0ID4gKixcXG4udG9kby1lZGl0b3ItaW5wdXQgPiAqLFxcbi5wcm9qZWN0LWVkaXRvci1pbnB1dCA+ICosXFxuLmxhYmVsLWVkaXRvci1pbnB1dCA+ICoge1xcbiAgICBtYXJnaW46IDAgMCAuMjVyZW0gMDtcXG59XFxuXFxuLnByb2plY3QtaW5wdXQgaW5wdXQsXFxuLmxhYmVsLWlucHV0IGlucHV0LFxcbi50b2RvLWVkaXRvci1pbnB1dCBpbnB1dCxcXG4udG9kby1lZGl0b3ItaW5wdXQgc2VsZWN0LFxcbi5wcm9qZWN0LWVkaXRvci1pbnB1dCBpbnB1dCxcXG4ubGFiZWwtZWRpdG9yLWlucHV0IGlucHV0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgIHBhZGRpbmc6IC4yNXJlbTtcXG59XFxuXFxuLnRvZG8tZWRpdG9yLWlucHV0IHtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLnRvZG8tZWRpdG9yLWlucHV0IHtcXG4gICAgcGFkZGluZy10b3A6IDAhaW1wb3J0YW50O1xcbn1cXG5cXG4udG9kby1lZGl0b3ItaW5wdXQgbGFiZWwge1xcbiAgICBtYXJnaW46IC4yNXJlbSAwIC4xcmVtIDA7XFxufVxcblxcbi5wcm9qZWN0LWJ1dHRvbnMsXFxuLmxhYmVsLWJ1dHRvbnMsXFxuLnRvZG8tZWRpdG9yLWJ1dHRvbnMsXFxuLnVwZGF0ZS1wcm9qZWN0LWJ1dHRvbnMsXFxuLnVwZGF0ZS1sYWJlbC1idXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsgICAgXFxuICAgIG1hcmdpbi1ib3R0b206IDAhaW1wb3J0YW50O1xcbn1cXG5cXG4ucHJvamVjdC1jcmVhdG9yIGJ1dHRvbixcXG4ubGFiZWwtY3JlYXRvciBidXR0b24sXFxuLnRvZG8tZWRpdG9yIGJ1dHRvbixcXG4ucHJvamVjdC1lZGl0b3IgYnV0dG9uLFxcbi5sYWJlbC1lZGl0b3IgYnV0dG9uIHtcXG4gICAgcGFkZGluZzogLjI1cmVtO1xcbiAgICBtYXJnaW46IDAgMCAwIC4yNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQxKTtcXG59XFxuXFxuLnByb2plY3QtY3JlYXRvciBidXR0b246Zmlyc3QtY2hpbGQsXFxuLmxhYmVsLWNyZWF0b3IgYnV0dG9uOmZpcnN0LWNoaWxkLFxcbi50b2RvLWVkaXRvciBidXR0b246Zmlyc3QtY2hpbGQsXFxuLnByb2plY3QtZWRpdG9yIGJ1dHRvbjpmaXJzdC1jaGlsZCxcXG4ubGFiZWwtZWRpdG9yIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1hcmluZXIpO1xcbn1cXG5cXG4udXBkYXRlLXByb2plY3QtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDMpLFxcbi51cGRhdGUtbGFiZWwtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDMpIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXVidXJuKTtcXG59XFxuXFxuLnByb2plY3QtY3JlYXRvci5vbixcXG4ubGFiZWwtY3JlYXRvci5vbixcXG4udG9kby1lZGl0b3Iub24sXFxuLnByb2plY3QtZWRpdG9yLm9uLFxcbi5sYWJlbC1lZGl0b3Iub24ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4ucHJvamVjdC1pbnB1dCBpbnB1dDpmb2N1cy12aXNpYmxlLFxcbi5sYWJlbC1pbnB1dCBpbnB1dDpmb2N1cy12aXNpYmxlLFxcbi50b2RvLWVkaXRvci1pbnB1dCBpbnB1dDpmb2N1cy12aXNpYmxlLFxcbi5wcm9qZWN0LWVkaXRvci1pbnB1dCBpbnB1dDpmb2N1cy12aXNpYmxlLFxcbi5sYWJlbC1lZGl0b3ItaW5wdXQgaW5wdXQ6Zm9jdXMtdmlzaWJsZSB7XFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCB2YXIoLS10cmFuc3BhcmVudDIpO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XFxuICAgIC5uYXYtY29tcCB7XFxuICAgICAgICBwYWRkaW5nOiAuNXJlbSAuNXJlbSAuNXJlbSAuNXJlbTtcXG4gICAgfVxcbiAgICAuaW5mby1jb21wIHtcXG4gICAgICAgIHBhZGRpbmc6IDFyZW0gLjI1cmVtIC4yNXJlbSAuMjVyZW07XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB6LWluZGV4OiAxMDAwO1xcbiAgICAgICAgdG9wOiA0Ny41OXB4O1xcbiAgICAgICAgYm90dG9tOiAwO1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbiAgICAuaW5mby1jb21wLnNob3ctbmF2IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIH1cXG4gICAgLmluZm8tY29tcCA+ICoge1xcbiAgICAgICAgd2lkdGg6IDI5NHB4O1xcbiAgICB9XFxuICAgIC5jb250YWluZXIgPiBoZWFkZXIge1xcbiAgICAgICAgcGFkZGluZzogMXJlbSAwIC41cmVtIDA7XFxuICAgIH1cXG4gICAgLmNvbnRhaW5lciB7XFxuICAgICAgICBwYWRkaW5nOiAwIDFyZW0gMCAxcmVtO1xcbiAgICB9XFxuICAgIC5xdWljay1hZGQtdG9kbyA+IGRpdiB7XFxuICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcXG4gICAgLmluZm8tY29tcCA+ICoge1xcbiAgICAgICAgd2lkdGg6IDI0MnB4O1xcbiAgICB9XFxuICAgIC5zZWFyY2gtaW5wdXQge1xcbiAgICAgICAgd2lkdGg6IDE4MHB4O1xcbiAgICB9XFxuICAgIC5zZWFyY2gtaW5wdXQ6Zm9jdXMge1xcbiAgICAgICAgd2lkdGg6IDE4MHB4O1xcbiAgICB9XFxuICAgIC5xdWljay1hZGQtdG9kbyA+IGRpdiB7XFxuICAgICAgICBtYXgtd2lkdGg6IDMwMHB4O1xcbiAgICB9XFxuICAgIC5ub3RpZi1jb250YWluZXIge1xcbiAgICAgICAgbWF4LXdpZHRoOiAzMTBweDtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMXB4KSB7XFxuICAgIC5zZWFyY2gtaW5wdXQge1xcbiAgICAgICAgbWF4LXdpZHRoOiAxMzVweDtcXG4gICAgfVxcbiAgICAuc2VhcmNoLWlucHV0OmZvY3VzIHtcXG4gICAgICAgIG1heC13aWR0aDogMTM1cHg7XFxuICAgIH1cXG4gICAgLnF1aWNrLWFkZC10b2RvID4gZGl2IHtcXG4gICAgICAgIG1heC13aWR0aDogMjcwcHg7XFxuICAgIH1cXG4gICAgLm5vdGlmLWNvbnRhaW5lciB7XFxuICAgICAgICBtYXgtd2lkdGg6IDI3MHB4O1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQyMHB4KSB7XFxuICAgIC50b2RvLWVkaXRvci1pbnB1dCB7XFxuICAgICAgICBtYXgtaGVpZ2h0OiAxODBweDtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGdldFRhcmdldCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFRhcmdldC5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBmdW5jdGlvbihjc3MsIHN0eWxlKXtcbiAgICAgIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICAgIH1cblxuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gICAgfVxuICB9O1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gZnVuY3Rpb24oc3R5bGUpIHtcbiAgICAgICAgdmFyIG5vbmNlID1cbiAgICAgICAgICB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICAgICAgaWYgKG5vbmNlKSB7XG4gICAgICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICAgICAgICB9XG4gICAgICB9O1xub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihzdHlsZSl7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChcImhlYWRcIik7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIlxuICAgICAgKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9O1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VGFyZ2V0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVtYmVkTG9jYWxTdG9yYWdlID0gKCgpID0+IHtcbiAgICBpZighbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJykpXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zJywgSlNPTi5zdHJpbmdpZnkoe3RvZG9saXN0OiBbXSwgcHJvamVjdHM6IFtdLCBsYWJlbHM6IFtdfSkpO1xufSkoKTtcblxuY29uc3QgVG9kbyA9IGZ1bmN0aW9uKCBpZCwgdGl0bGUsIGR1ZURhdGUsIG5vdGUsIHByaW9yaXR5LCBwcm9qZWN0LCBsYWJlbCwgZHVlRGF0ZU5vdGlmU2VudCApe1xuICAgIHJldHVybiB7IGlkLCB0aXRsZSwgZHVlRGF0ZSwgbm90ZSwgcHJpb3JpdHksIHByb2plY3QsIGxhYmVsLCBkdWVEYXRlTm90aWZTZW50IH1cbn07XG5cbmNvbnN0IGlzRW1wdHlUb0RvTGlzdCA9ICgpID0+IHtcbiAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJykpO1xuICAgIHJldHVybiAhZGF0YS50b2RvbGlzdC5sZW5ndGggPyB0cnVlIDogZmFsc2U7XG59O1xuXG5jb25zdCBwdXNoID0gKCgpID0+IHtcbiAgICBsZXQgX2RhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpKTtcblxuICAgIGNvbnN0IF9lbWJlZCA9ICgpID0+IHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zJywgSlNPTi5zdHJpbmdpZnkoX2RhdGEpKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2VuZXJhdGVJZCA9ICgpID0+IHtcbiAgICAgICAgbGV0IGlkID0gX2RhdGEudG9kb2xpc3QubGVuZ3RoICsgMTtcblxuICAgICAgICBpZihfZGF0YS50b2RvbGlzdC5sZW5ndGgpe1xuICAgICAgICAgICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgICAgICAgICAgX2RhdGEudG9kb2xpc3QuZm9yRWFjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoX2RhdGEudG9kb2xpc3RbY291bnRlcl0uaWQgPT0gaWQpIHsgaWQrKzsgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlkO1xuICAgIH07XG5cbiAgICBjb25zdCBxdWljayA9ICh2YWx1ZSkgPT4ge1xuICAgICAgICBsZXQgdG9kbyA9IFRvZG8oXG4gICAgICAgICAgICBnZW5lcmF0ZUlkKCksXG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICcnLFxuICAgICAgICAgICAgJycsXG4gICAgICAgICAgICAncHJpb3JpdHkgNCcsXG4gICAgICAgICAgICAnaW5ib3gnLFxuICAgICAgICAgICAgJycsXG4gICAgICAgICAgICAnbm9uZSdcbiAgICAgICAgKTtcbiAgICAgICAgX2RhdGEudG9kb2xpc3QucHVzaCh0b2RvKTtcbiAgICAgICAgX2VtYmVkKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHByb2plY3QgPSAodmFsdWUpID0+IHtcbiAgICAgICAgX2RhdGEucHJvamVjdHMucHVzaCh2YWx1ZSlcbiAgICAgICAgX2VtYmVkKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGxhYmVsID0gKHZhbHVlKSA9PiB7XG4gICAgICAgIF9kYXRhLmxhYmVscy5wdXNoKHZhbHVlKVxuICAgICAgICBfZW1iZWQoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgdGFzayA9ICh0aXRsZSwgZGF0ZSA9ICcnLCBwcmlvcml0eSA9ICdwcmlvcml0eSA0JywgcHJvamVjdE5hbWUgPSAnaW5ib3gnLCBcbiAgICAgIGxhYmVsTmFtZSA9ICcnKSA9PiB7XG4gICAgICAgIGxldCB0b2RvID0gVG9kbyhcbiAgICAgICAgICAgIGdlbmVyYXRlSWQoKSxcbiAgICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgICAgZGF0ZSxcbiAgICAgICAgICAgICcnLFxuICAgICAgICAgICAgcHJpb3JpdHksXG4gICAgICAgICAgICBwcm9qZWN0TmFtZSxcbiAgICAgICAgICAgIGxhYmVsTmFtZSxcbiAgICAgICAgICAgICdub25lJ1xuICAgICAgICApO1xuXG4gICAgICAgIF9kYXRhLnRvZG9saXN0LnB1c2godG9kbyk7XG4gICAgICAgIF9lbWJlZCgpO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBxdWljayxcbiAgICAgICAgcHJvamVjdCxcbiAgICAgICAgbGFiZWwsXG4gICAgICAgIHRhc2tcbiAgICB9XG59KSgpO1xuXG5jb25zdCBkYXRlU3RyaW5nID0gKCgpID0+IHtcbiAgICBsZXQgZGF0ZU5vdztcbiAgICBsZXQgZGF5cyA9IFsnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0J107XG4gICAgbGV0IG1vbnRocyA9IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgXG4gICAgICAgICdBdWcnLCAnU2VwJywgJ09jdCcsICdOb3YnLCAnRGVjJ107XG4gICAgXG4gICAgY29uc3QgZ2V0U3RyaW5nID0gKHRhcmdldCkgPT4ge1xuICAgICAgICBsZXQgZGF0ZSA9IHRhcmdldCgpLmdldERhdGUoKS50b1N0cmluZygpO1xuICAgICAgICBpZihkYXRlLmxlbmd0aCA9PSAyKXtcbiAgICAgICAgICAgIHJldHVybiBgJHt0YXJnZXQoKS5nZXRGdWxsWWVhcigpfS0ke3RhcmdldCgpLmdldE1vbnRoKCkrMX0tJHt0YXJnZXQoKS5nZXREYXRlKCl9YDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBgJHt0YXJnZXQoKS5nZXRGdWxsWWVhcigpfS0ke3RhcmdldCgpLmdldE1vbnRoKCkrMX0tMCR7dGFyZ2V0KCkuZ2V0RGF0ZSgpfWA7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgdG9kYXkgPSAoKSA9PiB7XG4gICAgICAgIGRhdGVOb3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBkYXRlTm93LnNldEhvdXJzKDAsMCwwLDApO1xuICAgICAgICByZXR1cm4gZGF0ZU5vdztcbiAgICB9O1xuXG4gICAgY29uc3QgdG9kYXlTdHJpbmcgPSAoKSA9PiBnZXRTdHJpbmcodG9kYXkpO1xuICAgIGNvbnN0IHRvZGF5TmFtZSA9ICgpID0+IGRheXNbdG9kYXkoKS5nZXREYXkoKV07XG5cbiAgICBjb25zdCB0b21vcnJvdyA9ICgpID0+IHtcbiAgICAgICAgZGF0ZU5vdyA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGRhdGVOb3cuc2V0RGF0ZShkYXRlTm93LmdldERhdGUoKSArIDEpXG4gICAgICAgIGRhdGVOb3cuc2V0SG91cnMoMCwwLDAsMCk7XG4gICAgICAgIHJldHVybiBkYXRlTm93O1xuICAgIH07XG5cbiAgICBjb25zdCB0d21TdHJpbmcgPSAoKSA9PiBnZXRTdHJpbmcodG9tb3Jyb3cpO1xuICAgIGNvbnN0IHRvbW9ycm93TmFtZSA9ICgpID0+IGRheXNbdG9tb3Jyb3coKS5nZXREYXkoKV07XG5cbiAgICBjb25zdCBuZXh0V2VlayA9ICgpID0+IHtcbiAgICAgICAgZGF0ZU5vdyA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGRhdGVOb3cuc2V0RGF0ZShkYXRlTm93LmdldERhdGUoKSArIDcpXG4gICAgICAgIGRhdGVOb3cuc2V0SG91cnMoMCwwLDAsMCk7XG4gICAgICAgIHJldHVybiBkYXRlTm93O1xuICAgIH07XG5cbiAgICBjb25zdCBuZXh0V2Vla1N0cmluZyA9ICgpID0+IGdldFN0cmluZyhuZXh0V2Vlayk7XG5cbiAgICBjb25zdCBuZXh0V2Vla05hbWUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBgJHtkYXlzW25leHRXZWVrKCkuZ2V0RGF5KCldfSAke25leHRXZWVrKCkuZ2V0RGF0ZSgpfSAke21vbnRoc1tuZXh0V2VlaygpLmdldE1vbnRoKCldfWA7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHRvZGF5LCB0b2RheU5hbWUsXG4gICAgICAgIHRvbW9ycm93LCB0b21vcnJvd05hbWUsXG4gICAgICAgIG5leHRXZWVrLCBuZXh0V2Vla05hbWUsXG4gICAgICAgIHRvZGF5U3RyaW5nLCB0d21TdHJpbmcsIG5leHRXZWVrU3RyaW5nXG4gICAgfTtcbn0pKCk7XG5cblxuY29uc3QgdGVzdCA9IChmdW5jdGlvbigpe1xuICAgIC8vIGNvbnNvbGUubG9nKGRhdGVTdHJpbmcudG9kYXlTdHJpbmcoKSlcbiAgICAvLyBjb25zb2xlLmxvZyhEYXRlLnBhcnNlKGRhdGVTdHJpbmcudG9kYXlTdHJpbmcoKSkpXG4gICAgLy8gY29uc3QgdG9kbyA9IFRvZG8oXG4gICAgLy8gICAgIDEsXG4gICAgLy8gICAgICdmaW5pc2ggdG9kbycsXG4gICAgLy8gICAgICcyMDIxLTA3LTMxJyxcbiAgICAvLyAgICAgJycsXG4gICAgLy8gICAgICdwcmlvcml0eSAxJyxcbiAgICAvLyAgICAgJ2luYm94JyxcbiAgICAvLyAgICAgJycsXG4gICAgLy8gICAgICdub25lJ1xuICAgIC8vICk7XG4gICAgLy8gbGV0IGFycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MnKSk7XG4gICAgLy8gaWYoIWFycmF5Lmxlbmd0aCl7XG4gICAgLy8gICAgIGFycmF5LnB1c2godG9kbyk7XG4gICAgLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvcycsIEpTT04uc3RyaW5naWZ5KGFycmF5KSk7XG4gICAgLy8gfVxuICAgIC8vIGNvbnNvbGUubG9nKHRvZG8pXG5cbiAgICAvLyB2YXIgZGF0ZUNvbnRyb2wgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwiZGF0ZVwiXScpO1xuICAgIC8vIGRhdGVDb250cm9sLnZhbHVlID0gJzIwMTctMDYtMDEnO1xuICAgIC8vIGNvbnNvbGUubG9nKGRhdGVDb250cm9sLnZhbHVlKTsgLy8gcHJpbnRzIFwiMjAxNy0wNi0wMVwiXG4gICAgLy8gY29uc29sZS5sb2coZGF0ZUNvbnRyb2wudmFsdWVBc051bWJlcik7IC8vIHByaW50cyAxNDk2Mjc1MjAwMDAwLCBhIEphdmFTY3JpcHQgdGltZXN0YW1wIChtcylcblxuICAgIC8vIGNvbnN0IGRhdGF4ID0gJzIwMjEtMDgtOCc7XG4gICAgLy8gY29uc29sZS5sb2coZGF0YXgpO1xuICAgIC8vIGNvbnNvbGUubG9nKERhdGUucGFyc2UoZGF0YXgpKVxuICAgIC8vIC8vIGNvbnNvbGUubG9nKGRhdGF4LnZhbHVlQXNOdW1iZXIpXG5cbiAgICAvLyBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgLy8gdG9kYXkuc2V0SG91cnMoMCwwLDAsMCk7XG4gICAgLy8gY29uc29sZS5sb2coJ3RvZGF5JywgdG9kYXkpO1xuICAgIC8vIGNvbnNvbGUubG9nKCd0b2RheSBudW1iZXInLCBEYXRlLnBhcnNlKHRvZGF5KSk7XG5cbiAgICAvLyBjb25zdCB0b21vcnJvdyA9IG5ldyBEYXRlKClcbiAgICAvLyB0b21vcnJvdy5zZXREYXRlKHRvbW9ycm93LmdldERhdGUoKSArIDEpXG4gICAgLy8gdG9tb3Jyb3cuc2V0SG91cnMoMCwwLDAsMCk7XG4gICAgLy8gY29uc29sZS5sb2codG9tb3Jyb3cpO1xuICAgIC8vIGNvbnNvbGUubG9nKERhdGUucGFyc2UodG9tb3Jyb3cpKVxuXG4gICAgLy8gbGV0IGRheXMgPSBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddO1xuICAgIC8vIGxldCBkID0gbmV3IERhdGUoKTsgLy9vciBkYXRlU3RyaW5nXG4gICAgLy8gbGV0IGRheU5hbWUgPSBkYXlzW2QuZ2V0RGF5KCldO1xuICAgIC8vIGNvbnNvbGUubG9nKGRheU5hbWUpXG5cbiAgICAvLyBjb25zb2xlLmxvZyhkYXRlU3RyaW5nLm5leHRXZWVrKCkpO1xufSkoKTtcblxuZXhwb3J0IHsgXG4gICAgZW1iZWRMb2NhbFN0b3JhZ2UsXG4gICAgaXNFbXB0eVRvRG9MaXN0LFxuICAgIHRlc3QsXG4gICAgcHVzaCxcbiAgICBkYXRlU3RyaW5nXG59O1xuIiwiaW1wb3J0IGNoaWxsaW5nSW1nIGZyb20gJy4vY2hpbGxpbmcuc3ZnJztcbmltcG9ydCB7IGVtYmVkTG9jYWxTdG9yYWdlLCBpc0VtcHR5VG9Eb0xpc3QgfSBmcm9tICcuL2RhdGEuanMnO1xuXG4ndXNlIHN0cmljdCc7XG5cbmNvbnN0IHNldExhbmd1YWdlID0gKCkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCcpLnNldEF0dHJpYnV0ZSgnbGFuZycsICdlbicpO1xuXG5jb25zdCBzZXR1cEhlYWRUYWcgPSAoKSA9PiB7XG4gICAgY29uc3QgaGVhZEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkJyk7XG4gICAgY29uc3QgdGl0bGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGl0bGUnKTtcblxuICAgIGNvbnN0IG5ld01ldGFFZGdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWV0YScpO1xuICAgIGNvbnN0IG5ld0xpbmtNYXRlcmlhbEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgY29uc3QgbmV3TGlua0Zhdmljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG5cbiAgICBuZXdNZXRhRWRnZS5zZXRBdHRyaWJ1dGUoJ2h0dHAtZXF1aXYnLCdYLVVBLUNvbXBhdGlibGUnKTtcbiAgICBuZXdNZXRhRWRnZS5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnLCdJRT1lZGdlJyk7XG4gICAgbmV3TGlua01hdGVyaWFsSWNvbi5zZXRBdHRyaWJ1dGUoJ3JlbCcsICdzdHlsZXNoZWV0Jyk7XG4gICAgbmV3TGlua01hdGVyaWFsSWNvblxuICAgICAgICAuc2V0QXR0cmlidXRlKCdocmVmJywgJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vaWNvbj9mYW1pbHk9TWF0ZXJpYWwrSWNvbnMrT3V0bGluZWQnKTtcbiAgICBuZXdMaW5rRmF2aWNvbi5zZXRBdHRyaWJ1dGUoJ3JlbCcsICdpY29uJyk7XG4gICAgbmV3TGlua0Zhdmljb24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2ltYWdlL3BuZycpO1xuICAgIG5ld0xpbmtGYXZpY29uLnNldEF0dHJpYnV0ZSgnaHJlZicsICdodHRwczovL29wZW5jbGlwYXJ0Lm9yZy9pbWFnZS80MDBweC8zMDMyNTQnKTtcblxuICAgIGhlYWRFbGVtZW50Lmluc2VydEJlZm9yZShuZXdNZXRhRWRnZSwgdGl0bGVFbGVtZW50KTtcbiAgICBoZWFkRWxlbWVudC5pbnNlcnRCZWZvcmUobmV3TGlua01hdGVyaWFsSWNvbiwgdGl0bGVFbGVtZW50KTtcbiAgICBoZWFkRWxlbWVudC5hcHBlbmRDaGlsZChuZXdMaW5rRmF2aWNvbik7XG59O1xuXG5jb25zdCBjcmVhdGVBcHBEaXYgPSAoKSA9PiB7XG4gICAgY29uc3QgYm9keUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgY29uc3QgYm9keVNjcmlwdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHkgc2NyaXB0Jyk7XG4gICAgY29uc3QgYXBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBhcHAuc2V0QXR0cmlidXRlKCdjbGFzcycsICdhcHAnKTtcbiAgICBib2R5RWxlbWVudC5pbnNlcnRCZWZvcmUoYXBwLCBib2R5U2NyaXB0KTtcbn07XG5cbmNvbnN0IGNyZWF0ZUFwcE5hdiA9ICgpID0+IHtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgICBuYXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICduYXYtY29tcCcpO1xuICAgIG5hdi5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3MgPSBcIm5jLWxlZnRcIj5cbiAgICAgICAgICAgIDxidXR0b24gaWQgPSBcIm5hdkJ0bk1lbnVcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIG1pZFwiPm1lbnU8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gaWQgPSBcIm5hdkJ0bkhvbWVcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIG1pZFwiPmhvbWU8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxmb3JtIGlkID0gXCJmb3JtU2VhcmNoXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwic2VhcmNoLWRpdlwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIG1pZFwiPnNlYXJjaDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzZWFyY2hcIiBhcmlhLWxhYmVsPVwiU2VhcmNoIHRocm91Z2ggYWxsIHRvZG9zXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcyA9IFwic2VhcmNoLWlucHV0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQgPSBcIm5hdklucHV0U2VhcmNoXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZSA9IFwicmVzZXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWlkXCI+Y2xvc2U8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcyA9IFwibmMtcmlnaHRcIj5cbiAgICAgICAgICAgIDxidXR0b24gaWQgPSBcIm5hdkJ0blF1aWNrQWRkXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWRcIj5hZGQ8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3MgPSBcIm5hdi1idG4tbm90aWZpY2F0aW9uXCIgaWQgPSBcIm5hdkJ0bk5vdGlmaWNhdGlvblwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWlkXCI+bm90aWZpY2F0aW9uczwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c21hbGwgaWQgPSBcIm5hdkJ0bk5vdGlmaWNhdGlvbkNvdW50XCI+PC9zbWFsbD5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICBgO1xuICAgIFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcHAnKS5hcHBlbmRDaGlsZChuYXYpO1xufTtcblxuY29uc3QgY3JlYXRlQXBwQm9keSA9ICgpID0+IHtcbiAgICBjb25zdCBhcHBCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgYXBwQm9keS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FwcC1ib2R5Jyk7XG4gICAgd3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3dyYXBwZXInKTtcblxuICAgIGFwcEJvZHkuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFwcCcpLmFwcGVuZENoaWxkKGFwcEJvZHkpO1xufTtcblxuY29uc3QgY3JlYXRlU2lkZWJhck5hdiA9ICgpID0+IHtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcblxuICAgIG5hdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2luZm8tY29tcCcpO1xuICAgIG5hdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25hdkluZm9Db21wJyk7XG4gICAgbmF2LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGJ1dHRvbiBpZCA9IFwic2JuYXZJbmJveEJ0blwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWQgaWMtc3BhblwiPmluYm94PC9zcGFuPlxuICAgICAgICAgICAgSW5ib3g8c2FtcD48L3NhbXA+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGlkID0gXCJzYm5hdlRvZGF5QnRuXCIgY2xhc3MgPSBcImFjdGl2ZVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWQgaWMtc3BhblwiPmNhbGVuZGFyX3RvZGF5PC9zcGFuPlxuICAgICAgICAgICAgVG9kYXk8c2FtcD48L3NhbXA+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGlkID0gXCJzYm5hdlVwY29tQnRuXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIG1pZCBpYy1zcGFuXCI+dXBjb21pbmc8L3NwYW4+XG4gICAgICAgICAgICBVcGNvbWluZzxzYW1wPjwvc2FtcD5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxkaXYgY2xhc3MgPSBcImljLWRpdiBpYy1wcm9qZWN0XCIgdGFiaW5kZXg9XCIwXCIgaWQgPSBcInNibmF2UHJvamVjdHNEaXZcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWlkIGljLXNwYW4gb3BhXCI+Y2hldnJvbl9yaWdodDwvc3Bhbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3MgPSBcImljLWFkZC1idG4gb3BhXCIgaWQgPSBcInNibmF2UHJvamVjdEFkZEJ0blwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWlkXCI+YWRkPC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8c3Ryb25nPlByb2plY3RzPC9zdHJvbmc+XG4gICAgICAgICAgICA8ZGl2IGlkID0gXCJwcm9qZWN0TGlzdENvbnRhaW5lclwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzID0gXCJpYy1kaXYgaWMtbGFiZWxcIiB0YWJpbmRleD1cIjBcIiBpZCA9IFwic2JuYXZMYWJlbHNEaXZcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWlkIGljLXNwYW4gb3BhXCI+Y2hldnJvbl9yaWdodDwvc3Bhbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3MgPSBcImljLWFkZC1idG4gb3BhXCIgaWQgPSBcInNibmF2TGFiZWxBZGRCdG5cIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIG1pZFwiPmFkZDwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPHN0cm9uZz5MYWJlbHM8L3N0cm9uZz5cbiAgICAgICAgICAgIDxkaXYgaWQgPSBcImxhYmVsTGlzdENvbnRhaW5lclwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGA7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3JhcHBlcicpLmFwcGVuZENoaWxkKG5hdik7XG5cbiAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJykpO1xuXG4gICAgaWYgKGRhdGEucHJvamVjdHMubGVuZ3RoKXtcbiAgICAgICAgZGF0YS5wcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGRpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwiYnVsbGV0XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzID0gXCJ1bmlxdWVcIj4ke3Byb2plY3R9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxidXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWlkXCI+bW9yZV9ob3Jpejwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIGA7XG4gICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdExpc3RDb250YWluZXInKS5hcHBlbmRDaGlsZChkaXYpOyAgXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBpZiAoZGF0YS5sYWJlbHMubGVuZ3RoKXtcbiAgICAgICAgZGF0YS5sYWJlbHMuZm9yRWFjaCgobGFiZWwpPT4ge1xuICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWlkIHRhZ1wiPmxhYmVsPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcyA9IFwidW5pcXVlXCI+JHtsYWJlbH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWRcIj5tb3JlX2hvcml6PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgYDtcbiAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsYWJlbExpc3RDb250YWluZXInKS5hcHBlbmRDaGlsZChkaXYpOyAgIFxuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG5jb25zdCBjcmVhdGVDb250YWluZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NvbnRhaW5lcicpO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhaW5lcicpO1xuXG4gICAgaWYoaXNFbXB0eVRvRG9MaXN0KCkpey8vZml4IHVzaW5nIGRhdGVzIHNpbmNlIGl0IGRlZmVuZHMgb24gdG9kYXkncyBkYXRhXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdlbXB0eScpO1xuICAgIH1cblxuICAgIGhlYWRlci5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxoMSBpZCA9IFwiaGVhZGVyXCI+VG9kYXk8L2gxPlxuICAgIGA7XG4gICAgZGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWRkLXRhc2stYnRuLWRpdicpO1xuICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZFRhc2tCdG5EaXYnKTtcbiAgICBkaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICA8YnV0dG9uIGNsYXNzID0gXCJhZGQtdGFzay1idG5cIiBpZCA9IFwiYWRkVGFza0J0blwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWQgdG9vbC1zcGFuXCI+YWRkPC9zcGFuPlxuICAgICAgICAgICAgQWRkIHRhc2tcbiAgICAgICAgPC9idXR0b24+XG4gICAgYDtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3JhcHBlcicpLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG59O1xuXG5jb25zdCBjcmVhdGVBZGRUYXNrRGl2ID0gKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgZGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWRkLXRhc2stZGl2Jyk7XG4gICAgZGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkVGFza0RpdicpO1xuICAgIGRpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxpbnB1dCB0eXBlID0gXCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJUYXNrIG5hbWVcIiBpZCA9IFwiYWRkVGFza0lucHV0XCI+XG4gICAgICAgIDxkaXYgY2xhc3MgPSBcImFkZC10YXNrLWJ0bnMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQgPSBcInNlbGVjdFNjaGVkdWxlQnRuXCIgZGF0YS12YWx1ZSA9IFwiXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWlkXCI+ZXZlbnQ8L3NwYW4+IFNjaGVkdWxlXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZCA9IFwic2VsZWN0UHJvamVjdEJ0blwiIGNsYXNzID0gXCJzZWxlY3QtcHJvamVjdC1idG5cIiBkYXRhLXZhbHVlID0gXCJpbmJveFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIG1pZFwiPmluYm94PC9zcGFuPiBJbmJveFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQgPSBcInNlbGVjdExhYmVsQnRuXCIgZGF0YS12YWx1ZSA9IFwiXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWlkXCI+bGFiZWw8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZCA9IFwic2VsZWN0UHJpb3JpdHlCdG5cIiBkYXRhLXZhbHVlID0gXCJwcmlvcml0eSA0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWlkXCI+ZmxhZzwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcyA9IFwic2NoZWR1bGVyXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzID0gXCJzY2hlZFwiIGlkID0gXCJzY2hlZHVsZXJUb2RheUJ0blwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPlRvZGF5PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGlkID0gXCJzY2hlZHVsZXJUb2RheVNwYW5cIj48L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3MgPSBcInNjaGVkXCIgaWQgPSBcInNjaGVkdWxlclR3bUJ0blwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPlRvbW9ycm93PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGlkID0gXCJzY2hlZHVsZXJUd21TcGFuXCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzID0gXCJzY2hlZFwiIGlkID0gXCJzY2hlZHVsZXJOZXh0V2Vla0J0blwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPk5leHQgV2Vlazwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBpZCA9IFwic2NoZWR1bGVyTmV4dFdlZWtTcGFuXCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJzY2hlZC1jdXN0b21cIiBpZCA9IFwic2NoZWR1bGVyQ3VzdG9tRGl2XCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcImRhdGVcIiBpZCA9IFwic2NoZWR1bGVyQ3VzdG9tSW5wdXRcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkID0gXCJzY2hlZHVsZXJDdXN0b21CdG5cIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWRcIj5kb25lPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzID0gXCJzY2hlZFwiIGlkID0gXCJzY2hlZHVsZXJOb0RhdGVCdG5cIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5ObyBEYXRlPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGlkID0gXCJzY2hlZHVsZXJOb0RhdGVTcGFuXCI+JiN4MjIwNTs8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3MgPSBcImNhcnJpZXJcIiBpZCA9IFwicHJvamVjdFNlbGVjdG9yXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGlkID0gXCJwcm9qZWN0RGVmYXVsdEluYm94XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWRcIj5pbmJveDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8dT5JbmJveDwvdT5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcyA9IFwibGFiZWxlclwiPlxuICAgICAgICAgICAgPGRpdiBpZCA9IFwibGFiZWxDb250YWluZXJcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcyA9IFwicHJpby1zZXR0ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgaWQgPSBcInByaW9yaXR5QnRuQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZCA9IFwicHJpb3JpdHlPbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWRcIj5mbGFnPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8dT5Qcmlvcml0eSAxPC91PlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQgPSBcInByaW9yaXR5VHdvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWlkXCI+ZmxhZzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHU+UHJpb3JpdHkgMjwvdT5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkID0gXCJwcmlvcml0eVRocmVlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWlkXCI+ZmxhZzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHU+UHJpb3JpdHkgMzwvdT5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkID0gXCJwcmlvcml0eURlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWRcIj5mbGFnPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8dT5Qcmlvcml0eSA0PC91PlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGA7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJykuYXBwZW5kQ2hpbGQoZGl2KTtcbn07XG5cbmNvbnN0IGNyZWF0ZU1vcmVDb250YWluZXJJdGVtcyA9ICgpID0+IHtcbiAgICBjb25zdCBkaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuXG4gICAgZGl2MS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FkZC10YXNrLW1haW4tYnRucy1jb250YWluZXInKTtcbiAgICBkaXYyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZW1wdHktc3RhdGUtZGl2Jyk7XG4gICAgZGl2Mi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2VtcHR5U3RhdGVEaXYnKTtcbiAgICBmb290ZXIuc2V0QXR0cmlidXRlKCdpZCcsICdmb290ZXInKTtcblxuICAgIGRpdjEuaW5uZXJIVE1MID0gYFxuICAgICAgICA8YnV0dG9uIGlkID0gXCJhZGRUYXNrTWFpbkJ0blwiPlxuICAgICAgICAgICAgQWRkIHRhc2tcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gaWQgPSBcImFkZFRhc2tDYW5jZWxCdG5cIj5cbiAgICAgICAgICAgIENhbmNlbFxuICAgICAgICA8L2J1dHRvbj5cbiAgICBgO1xuICAgIGRpdjIuaW5uZXJIVE1MID0gYFxuICAgICAgICA8aW1nIHNyYz1cIiR7Y2hpbGxpbmdJbWd9XCIgZHJhZ2dhYmxlPVwiZmFsc2VcIj5cbiAgICAgICAgPGg0PkFsbCBjbGVhcjwvaDQ+XG4gICAgICAgIDxwPkxvb2tzIGxpa2UgZXZlcnl0aGluZydzIG9yZ2FuaXplZCBpbiB0aGUgcmlnaHQgcGxhY2UuPC9wPlxuICAgIGA7XG4gICAgZm9vdGVyLmlubmVySFRNTCA9IGBcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWRcIj5oZWxwX291dGxpbmU8L3NwYW4+XG4gICAgICAgIDxwIGlkID0gXCJoZWxwXCI+SG93IHRvIGJlc3QgdXNlIHRoaXMgQXBwPC9wPlxuICAgIGA7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJykuYXBwZW5kQ2hpbGQoZGl2MSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpLmFwcGVuZENoaWxkKGRpdjIpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKS5hcHBlbmRDaGlsZChmb290ZXIpO1xufTtcblxuY29uc3QgY3JlYXRlSGlkZGVuTW9kYWxzID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcHAnKS5pbm5lckhUTUwgKz0gYFxuICAgICAgICA8ZGl2IGNsYXNzID0gXCJxdWljay1hZGQtdG9kb1wiIGlkID0gXCJxdWlja0FkZFRvZG9cIj5cbiAgICAgICAgICAgIDxkaXYgaWQgPSBcInF1aWNrQWRkQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInRleHRcIiBwbGFjZWhvbGRlcj1cIlRhc2sgbmFtZVwiIGlkID0gXCJxdWlja0FkZElucHV0XCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZCA9IFwicXVpY2tBZGRTdWJtaXRcIj5BZGQgdGFzazwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkID0gXCJxdWlja0FkZENhbmNlbFwiPkNhbmNlbDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzID0gXCJub3RpZmljYXRpb25zXCIgaWQgPSBcIm5vdGlmaWNhdGlvbnNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcIm5vdGlmLWNvbnRhaW5lclwiIGlkID0gXCJub3RpZkNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxuYXY+XG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+Tm90aWZpY2F0aW9uczwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzID0gXCJyZWFkLWFsbC1idG5cIiBpZCA9IFwibm90aWZSZWFkQWxsQnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIG1pZFwiPmRvbmVfYWxsPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJub3RpZi1vdXRwdXRcIiBpZCA9IFwibm90aWZPdXRwdXRcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcyA9IFwicHJvamVjdC1jcmVhdG9yXCIgaWQgPSBcInByb2plY3RDcmVhdG9yXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+QWRkIHByb2plY3Q8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJwcm9qZWN0LWlucHV0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJuZXdQcm9qZWN0TmFtZVwiPk5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9IFwidGV4dFwiIGlkID0gXCJuZXdQcm9qZWN0TmFtZVwiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcInByb2plY3QtYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkID0gXCJwcm9qZWN0QWRkQnV0dG9uXCI+QWRkPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQgPSBcInByb2plY3RDYW5jZWxCdXR0b25cIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcyA9IFwicHJvamVjdC1lZGl0b3JcIiBpZCA9IFwicHJvamVjdEVkaXRvclwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8c3Ryb25nIGlkID0gXCJwcm9qZWN0TmFtZVwiPlByb2plY3QgTmFtZTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcInByb2plY3QtZWRpdG9yLWlucHV0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ1cGRhdGVkUHJvamVjdE5hbWVcIj5SZW5hbWUgdG88L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9IFwidGV4dFwiIGlkID0gXCJ1cGRhdGVkUHJvamVjdE5hbWVcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJ1cGRhdGUtcHJvamVjdC1idXR0b25zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQgPSBcInVwZGF0ZVByb2plY3RCdG5cIj5VcGRhdGU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZCA9IFwiY2FuY2VsUHJvamVjdEJ0blwiPkNhbmNlbDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkID0gXCJkZWxldGVQcm9qZWN0QnRuXCI+RGVsZXRlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3MgPSBcImxhYmVsLWNyZWF0b3JcIiBpZCA9IFwibGFiZWxDcmVhdG9yXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+QWRkIGxhYmVsPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwibGFiZWwtaW5wdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImFkZExhYmVsSW5wdXRcIj5OYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInRleHRcIiBpZCA9IFwiYWRkTGFiZWxJbnB1dFwiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImxhYmVsLWJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZCA9IFwiYWRkTmV3TGFiZWxCdG5cIj5BZGQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZCA9IFwiY2FuY2VsQWRkTGFiZWxCdG5cIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcyA9IFwibGFiZWwtZWRpdG9yXCIgaWQgPSBcImxhYmVsRWRpdG9yXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzdHJvbmcgaWQgPSBcImVkaXRMYWJlbE5hbWVcIj5sYWJlbCBOYW1lPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwibGFiZWwtZWRpdG9yLWlucHV0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ1cGRhdGVkTGFiZWxOYW1lXCI+UmVuYW1lIHRvPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInRleHRcIiBpZCA9IFwidXBkYXRlZExhYmVsTmFtZVwiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcInVwZGF0ZS1sYWJlbC1idXR0b25zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQgPSBcInVwZGF0ZUxhYmVsQnRuXCI+VXBkYXRlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQgPSBcImNhbmNlbFVwZGF0ZUJ0blwiPkNhbmNlbDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkID0gXCJkZWxldGVMYWJlbEJ0blwiPkRlbGV0ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzID0gXCJ0b2RvLWVkaXRvclwiIGlkID0gXCJ0YXNrRWRpdG9yXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+RWRpdCBUYXNrPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwidG9kby1lZGl0b3ItaW5wdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInVwZGF0ZWRUYXNrTmFtZVwiPlRhc2sgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJ0ZXh0XCIgaWQgPSBcInVwZGF0ZWRUYXNrTmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidXBkYXRlZFRhc2tOb3RlXCI+VGFzayBOb3RlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInRleHRcIiBpZCA9IFwidXBkYXRlZFRhc2tOb3RlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ1cGRhdGVkVGFza1NjaGVkdWxlXCI+U2NoZWR1bGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwidXBkYXRlZFRhc2tTY2hlZHVsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInRvZGF5XCI+VG9kYXk8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ0b21vcnJvd1wiPlRvbW9ycm93PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibmV4dC13ZWVrXCI+TmV4dCBXZWVrPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiY3VzdG9tXCI+Q3VzdG9tPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibm8tZGF0ZVwiPk5vIERhdGU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ1cGRhdGVkVGFza1Byb2plY3RcIj5Qcm9qZWN0PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cInVwZGF0ZWRUYXNrUHJvamVjdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkluYm94XCI+SW5ib3g8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ1cGRhdGVkVGFza0xhYmVsXCI+TGFiZWw8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwidXBkYXRlZFRhc2tMYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm5vbmVcIj5Ob25lPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidXBkYXRlZFRhc2tQcmlvcml0eVwiPlByaW9yaXR5PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cInVwZGF0ZWRUYXNrUHJpb3JpdHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwcmlvcml0eTFcIj5Qcmlvcml0eSAxPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicHJpb3JpdHkyXCI+UHJpb3JpdHkgMjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInByaW9yaXR5M1wiPlByaW9yaXR5IDM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwcmlvcml0eTRcIj5Qcmlvcml0eSA0PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcInRvZG8tZWRpdG9yLWJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZCA9IFwidXBkYXRlVG9kb1wiPlVwZGF0ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkID0gXCJjYW5jZWxVcGRhdGVUb2RvXCI+Q2FuY2VsPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYDtcbn07XG5cbmNvbnN0IGNyZWF0ZUFwcCA9ICgoKSA9PiB7XG4gICAgc2V0TGFuZ3VhZ2UoKTtcbiAgICBzZXR1cEhlYWRUYWcoKTtcbiAgICBjcmVhdGVBcHBEaXYoKTtcbiAgICBjcmVhdGVBcHBOYXYoKTtcbiAgICBjcmVhdGVBcHBCb2R5KCk7XG4gICAgY3JlYXRlU2lkZWJhck5hdigpO1xuICAgIGNyZWF0ZUNvbnRhaW5lcigpO1xuICAgIGNyZWF0ZUFkZFRhc2tEaXYoKTtcbiAgICBjcmVhdGVNb3JlQ29udGFpbmVySXRlbXMoKTtcbiAgICBjcmVhdGVIaWRkZW5Nb2RhbHMoKTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUFwcDsiLCJpbXBvcnQgeyBoTmF2LCB2TmF2LCBjb250YWluZXIsIHRhc2ssIG1vZGFsIH0gZnJvbSAnLi9zZWxlY3Rvci5qcyc7XG5pbXBvcnQgeyBwdXNoLCBkYXRlU3RyaW5nIH0gZnJvbSAnLi9kYXRhLmpzJztcblxuJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlbGVtZW50ID0gKCgpID0+IHtcbiAgICBsZXQgZmlyc3RGb2N1c2FibGVFbGVtZW50O1xuICAgIGxldCBsYXN0Rm9jdXNhYmxlRWxlbWVudDtcbiAgICBsZXQgbW9kYWxUb2dnbGVyO1xuICAgIHJldHVybiB7IFxuICAgICAgICBmaXJzdEZvY3VzYWJsZUVsZW1lbnQsIFxuICAgICAgICBsYXN0Rm9jdXNhYmxlRWxlbWVudCxcbiAgICAgICAgbW9kYWxUb2dnbGVyXG4gICAgfTtcbn0pKCk7XG5cbmNvbnN0IHRhYkV2ZW50ID0gKGUpID0+IHtcbiAgICBsZXQgaXNUYWJQcmVzc2VkID0gZS5rZXkgPT09ICdUYWInO1xuXG4gICAgaWYgKCFpc1RhYlByZXNzZWQpIHsgcmV0dXJuOyB9XG5cbiAgICBpZiAoZS5zaGlmdEtleSkge1xuICAgICAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gZWxlbWVudC5maXJzdEZvY3VzYWJsZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQubGFzdEZvY3VzYWJsZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gZWxlbWVudC5sYXN0Rm9jdXNhYmxlRWxlbWVudCkge1xuICAgICAgICAgICAgZWxlbWVudC5maXJzdEZvY3VzYWJsZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH0gXG59O1xuXG5jb25zdCB0cmFwRm9jdXMgPSAobW9kYWwsIHRvZ2dsZXIpID0+IHtcbiAgICBjb25zdCBmb2N1c2FibGVFbGVtZW50cyA9IFxuICAgICAgICBtb2RhbC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24sIGlucHV0LCBzZWxlY3QsIFt0YWJpbmRleF06bm90KFt0YWJpbmRleD1cIi0xXCJdKScpO1xuICAgIGVsZW1lbnQuZmlyc3RGb2N1c2FibGVFbGVtZW50ID0gZm9jdXNhYmxlRWxlbWVudHNbMF07XG4gICAgZWxlbWVudC5sYXN0Rm9jdXNhYmxlRWxlbWVudCA9IGZvY3VzYWJsZUVsZW1lbnRzW2ZvY3VzYWJsZUVsZW1lbnRzLmxlbmd0aC0xXTtcbiAgICBlbGVtZW50Lm1vZGFsVG9nZ2xlciA9IHRvZ2dsZXI7XG4gICAgXG4gICAgaWYoKHdpbmRvdy5pbm5lcldpZHRoIDw9IDc1MCkgJiYgdk5hdi5uYXYuY29udGFpbnMoZWxlbWVudC5tb2RhbFRvZ2dsZXIpKSB7XG4gICAgICAgIHZOYXYubmF2LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3ctbmF2Jyk7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRhYkV2ZW50KTtcbiAgICBlbGVtZW50LmZpcnN0Rm9jdXNhYmxlRWxlbWVudC5mb2N1cygpOyBcbn07XG5cbmNvbnN0IHJlbW92ZVRyYXBGb2N1cyA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGFiRXZlbnQpO1xuICAgIGlmKCh3aW5kb3cuaW5uZXJXaWR0aCA8PSA3NTApICYmIHZOYXYubmF2LmNvbnRhaW5zKGVsZW1lbnQubW9kYWxUb2dnbGVyKSkge1xuICAgICAgICB2TmF2Lm5hdi5jbGFzc0xpc3QuYWRkKCdzaG93LW5hdicpO1xuICAgICAgICB2TmF2LnByb2plY3RzLmZvY3VzKCk7XG4gICAgfVxuICAgIGVsZW1lbnQubW9kYWxUb2dnbGVyLmZvY3VzKCk7XG59O1xuXG5jb25zdCB0b2dnbGUgPSAoKCkgPT4ge1xuICAgIGNvbnN0IG1lbnUgPSAoZSkgPT4ge1xuICAgICAgICBpZih3aW5kb3cuaW5uZXJXaWR0aCA+IDc1MCl7XG4gICAgICAgICAgICBpZih2TmF2Lm5hdi5oYXNBdHRyaWJ1dGUoJ3N0eWxlJykpIFxuICAgICAgICAgICAgeyB2TmF2Lm5hdi5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7IH1cbiAgICAgICAgICAgIGVsc2UgeyB2TmF2Lm5hdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyB9XG4gICAgICAgIH0gZWxzZSB7IFxuICAgICAgICAgICAgdk5hdi5uYXYuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdy1uYXYnKTsgXG4gICAgICAgIH1cbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcXVpY2tBZGRUYXNrID0gKCkgPT4ge1xuICAgICAgICBtb2RhbC5xdWlja0FkZFRhc2suY2xhc3NMaXN0LnRvZ2dsZSgnb24nKTtcbiAgICAgICAgaWYobW9kYWwucXVpY2tBZGRUYXNrLmNsYXNzTGlzdC5jb250YWlucygnb24nKSkge1xuICAgICAgICAgICAgbW9kYWwucXVpY2tBZGRUYXNrSW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgIHRyYXBGb2N1cyhtb2RhbC5xdWlja0FkZENvbnRhaW5lciwgaE5hdi5wbHVzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlbW92ZVRyYXBGb2N1cygpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IG5vdGlmaWNhdGlvbiA9ICgpID0+IHtcbiAgICAgICAgbW9kYWwubm90aWZpY2F0aW9uLmNsYXNzTGlzdC50b2dnbGUoJ29uJyk7XG4gICAgICAgIGlmKG1vZGFsLm5vdGlmaWNhdGlvbi5jbGFzc0xpc3QuY29udGFpbnMoJ29uJykpIHtcbiAgICAgICAgICAgIHRyYXBGb2N1cyhtb2RhbC5ub3RpZkNvbnRhaW5lciwgaE5hdi5ub3RpZmljYXRpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVtb3ZlVHJhcEZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgcHJvamVjdHMgPSAoKSA9PiB7XG4gICAgICAgIHZOYXYucHJvamVjdExpc3RDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpO1xuICAgICAgICB2TmF2LnByb2plY3RDaGV2cm9uLmNsYXNzTGlzdC50b2dnbGUoJ3JvdGF0ZScpO1xuICAgIH07XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gKGUpID0+IHtcbiAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgbW9kYWwucHJvamVjdENyZWF0b3IuY2xhc3NMaXN0LnRvZ2dsZSgnb24nKTtcbiAgICAgICAgXG4gICAgICAgIGlmKG1vZGFsLnByb2plY3RDcmVhdG9yLmNsYXNzTGlzdC5jb250YWlucygnb24nKSl7XG4gICAgICAgICAgICBtb2RhbC5uZXdQcm9qZWN0TmFtZS52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgdHJhcEZvY3VzKG1vZGFsLnByb2plY3RDcmVhdG9yLCB2TmF2LmFkZFByb2plY3QpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdk5hdi5wcm9qZWN0cy5mb2N1cygpO1xuICAgICAgICAgICAgcmVtb3ZlVHJhcEZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgbGFiZWxzID0gKCkgPT4ge1xuICAgICAgICB2TmF2LmxhYmVsTGlzdENvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7XG4gICAgICAgIHZOYXYubGFiZWxDaGV2cm9uLmNsYXNzTGlzdC50b2dnbGUoJ3JvdGF0ZScpO1xuICAgIH07XG5cbiAgICBjb25zdCBhZGRMYWJlbCA9IChlKSA9PiB7XG4gICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgIG1vZGFsLmxhYmVsQ3JlYXRvci5jbGFzc0xpc3QudG9nZ2xlKCdvbicpO1xuXG4gICAgICAgIGlmKG1vZGFsLmxhYmVsQ3JlYXRvci5jbGFzc0xpc3QuY29udGFpbnMoJ29uJykpe1xuICAgICAgICAgICAgbW9kYWwuYWRkTGFiZWxJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgdHJhcEZvY3VzKG1vZGFsLmxhYmVsQ3JlYXRvciwgdk5hdi5hZGRMYWJlbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2TmF2LmxhYmVscy5mb2N1cygpO1xuICAgICAgICAgICAgcmVtb3ZlVHJhcEZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgdGFza0NyZWF0b3IgPSAoKSA9PiB7XG4gICAgICAgIGNvbnRhaW5lci5kaXYuY2xhc3NMaXN0LnRvZ2dsZSgnYWRkLXRyaWdnZXJlZCcpO1xuICAgICAgICBpZiAoY29udGFpbmVyLmRpdi5jbGFzc0xpc3QuY29udGFpbnMoJ2FkZC10cmlnZ2VyZWQnKSl7XG4gICAgICAgICAgICB0YXNrLmlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICBzZWxlY3QucmVzZXQoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBfaXRlbU1hbmFnZXIgPSAobmV3Q2xhc3MpID0+IHtcbiAgICAgICAgdGFzay5hZGREaXYuY2xhc3NMaXN0LnRvZ2dsZShuZXdDbGFzcyk7XG4gICAgICAgIGlmKHRhc2suYWRkRGl2LmNsYXNzTGlzdC5jb250YWlucygnYWRkLXRhc2stZGl2JykgXG4gICAgICAgICYmIHRhc2suYWRkRGl2LmNsYXNzTGlzdC5jb250YWlucyhuZXdDbGFzcykpe1xuICAgICAgICAgICAgdGFzay5hZGREaXYuY2xhc3NOYW1lID0gYGFkZC10YXNrLWRpdiAke25ld0NsYXNzfWA7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgdGFza1NjaGVkdWxlciA9ICgpID0+IHtcbiAgICAgICAgX2l0ZW1NYW5hZ2VyKCdkaXNwbGF5LXNjaGVkdWxlcicpO1xuICAgICAgICBpZiAodGFzay5hZGREaXYuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNwbGF5LXNjaGVkdWxlcicpKSB7XG4gICAgICAgICAgICByZWZyZXNoLnNjaGVkdWxlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgdGFza1Byb2plY3RTZWxlY3RvciA9ICgpID0+IHtcbiAgICAgICAgX2l0ZW1NYW5hZ2VyKCdkaXNwbGF5LWNhcnJpZXInKTtcbiAgICAgICAgaWYgKHRhc2suYWRkRGl2LmNsYXNzTGlzdC5jb250YWlucygnZGlzcGxheS1jYXJyaWVyJykpe1xuICAgICAgICAgICAgZGlzcGxheS50YXNrUHJvamVjdExpc3QoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCB0YXNrTGFiZWxlciA9ICgpID0+IHtcbiAgICAgICAgX2l0ZW1NYW5hZ2VyKCdkaXNwbGF5LWxhYmVsZXInKTtcbiAgICAgICAgaWYgKHRhc2suYWRkRGl2LmNsYXNzTGlzdC5jb250YWlucygnZGlzcGxheS1sYWJlbGVyJykpe1xuICAgICAgICAgICAgZGlzcGxheS50YXNrTGFiZWxMaXN0KCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgdGFza1ByaW9yaXR5U2V0dGVyID0gKCkgPT4ge1xuICAgICAgICBfaXRlbU1hbmFnZXIoJ2Rpc3BsYXktcHJpby1zZXR0ZXInKTtcbiAgICAgICAgaWYgKHRhc2suYWRkRGl2LmNsYXNzTGlzdC5jb250YWlucygnZGlzcGxheS1wcmlvLXNldHRlcicpKXtcbiAgICAgICAgICAgIGRpc3BsYXkudGFza1ByaW9yaXR5TGlzdCgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIG1lbnUsXG4gICAgICAgIHF1aWNrQWRkVGFzayxcbiAgICAgICAgbm90aWZpY2F0aW9uLFxuICAgICAgICBwcm9qZWN0cywgYWRkUHJvamVjdCxcbiAgICAgICAgbGFiZWxzLCBhZGRMYWJlbCxcbiAgICAgICAgdGFza0NyZWF0b3IsIHRhc2tTY2hlZHVsZXIsIHRhc2tQcm9qZWN0U2VsZWN0b3IsIHRhc2tMYWJlbGVyLCB0YXNrUHJpb3JpdHlTZXR0ZXJcbiAgICB9O1xufSkoKTtcblxuY29uc3QgY2xpY2tlciA9IChlKSA9PiB7XG4gICAgaWYoZS5rZXkgPT09ICdFbnRlcicgJiYgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpYy1kaXYnKSl7XG4gICAgICAgIGUudGFyZ2V0LmNsaWNrKCk7XG4gICAgfVxufTtcblxuY29uc3Qgdmlld01hbmFnZXIgPSAoZSkgPT4ge1xuICAgIGlmICh2TmF2Lm5hdi5jbGFzc0xpc3QuY29udGFpbnMoJ3Nob3ctbmF2JykgJiYgKHdpbmRvdy5pbm5lcldpZHRoIDw9IDc1MCkpe1xuICAgICAgICBpZighdk5hdi5uYXYuY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpIHsgXG4gICAgICAgICAgICB2TmF2Lm5hdi5jbGFzc0xpc3QudG9nZ2xlKCdzaG93LW5hdicpOyBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmKHRhc2suYWRkRGl2LmNsYXNzTmFtZSAhPSAnYWRkLXRhc2stZGl2Jyl7XG4gICAgICAgIGlmKCF0YXNrLmFkZERpdi5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KSl7XG4gICAgICAgICAgICB0YXNrLmFkZERpdi5jbGFzc05hbWUgPSAnYWRkLXRhc2stZGl2JztcbiAgICAgICAgfVxuICAgIH1cbn07XG4vLyBoZXJlIGhlcmUgaGVyZSBoZXJlXG5jb25zdCBjaGFuZ2VNYWluID0gKHRhZywgdmFsdWUsIGNvbmRpdGlvbiA9ICcnKSA9PiB7XG4gICAgY29uc29sZS5sb2codGFnLCB2YWx1ZSwgY29uZGl0aW9uKVxuICAgIGNvbnRhaW5lci5tYWluLmlubmVySFRNTCA9ICcnO1xuICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MnKSk7XG4gICAgbGV0IGFycmF5ID0gW107XG5cblxuICAgIGlmICh0YWcgPT0gJ2R1ZURhdGUnKSB7XG4gICAgICAgIGlmKGNvbmRpdGlvbiA9PSAndG9kYXknKXtcbiAgICAgICAgICAgIGRhdGEudG9kb2xpc3QuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICAgICAgICAgIGlmKERhdGUucGFyc2UodGFzay5kdWVEYXRlKSA9PSBEYXRlLnBhcnNlKHZhbHVlKSl7XG4gICAgICAgICAgICAgICAgICAgIGFycmF5LnB1c2godGFzayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoY29uZGl0aW9uID09ICd1cGNvbWluZycpe1xuICAgICAgICAgICAgZGF0YS50b2RvbGlzdC5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoRGF0ZS5wYXJzZSh0YXNrLmR1ZURhdGUpID4gRGF0ZS5wYXJzZSh2YWx1ZSkpe1xuICAgICAgICAgICAgICAgICAgICBhcnJheS5wdXNoKHRhc2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKGNvbmRpdGlvbiA9PSAnZHVlJyl7XG4gICAgICAgICAgICBkYXRhLnRvZG9saXN0LmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICAgICAgICBpZihEYXRlLnBhcnNlKHRhc2suZHVlRGF0ZSkgPCBEYXRlLnBhcnNlKHZhbHVlKSl7XG4gICAgICAgICAgICAgICAgICAgIGFycmF5LnB1c2godGFzayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgaWYgKHRhZyA9PSAncHJvamVjdCcpIHtcbiAgICAgICAgZGF0YS50b2RvbGlzdC5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICBpZih0YXNrLnByb2plY3QgPT0gdmFsdWUpe1xuICAgICAgICAgICAgICAgIGFycmF5LnB1c2godGFzayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0gXG4gICAgXG4gICAgaWYgKHRhZyA9PSAnbGFiZWwnKSB7XG4gICAgICAgIGRhdGEudG9kb2xpc3QuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICAgICAgaWYodGFzay5sYWJlbCA9PSB2YWx1ZSl7XG4gICAgICAgICAgICAgICAgYXJyYXkucHVzaCh0YXNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIGlmIChhcnJheS5sZW5ndGgpe1xuICAgICAgICBhcnJheS5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCd0b2RvJyk7XG4gICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJyk7XG4gICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgdGFzay5pZCk7XG5cbiAgICAgICAgICAgIGxldCBwcmlvcml0eUNsYXNzO1xuICAgICAgICAgICAgaWYodGFzay5wcmlvcml0eSA9PSAncHJpb3JpdHkgNCcpe1xuICAgICAgICAgICAgICAgIHByaW9yaXR5Q2xhc3MgPSAncHJpbzQnO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0YXNrLnByaW9yaXR5ID09ICdwcmlvcml0eSAzJyl7XG4gICAgICAgICAgICAgICAgcHJpb3JpdHlDbGFzcyA9ICdwcmlvMyc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRhc2sucHJpb3JpdHkgPT0gJ3ByaW9yaXR5IDInKXtcbiAgICAgICAgICAgICAgICBwcmlvcml0eUNsYXNzID0gJ3ByaW8yJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJpb3JpdHlDbGFzcyA9ICdwcmlvMSc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGRpdkNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbkNoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBidXR0b25DaGVjay5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYGNoZWNrYm94LWJ0biAke3ByaW9yaXR5Q2xhc3N9YCk7XG4gICAgICAgICAgICBidXR0b25DaGVjay5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcbiAgICAgICAgICAgIGRpdkNoZWNrYm94LmFwcGVuZENoaWxkKGJ1dHRvbkNoZWNrKTtcbiAgICAgICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICBzcGFuLnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgJ2ZhbHNlJyk7XG4gICAgICAgICAgICBzcGFuLmlubmVySFRNTCA9ICcmI3gyNzE0Oyc7XG4gICAgICAgICAgICBkaXZDaGVja2JveC5hcHBlbmRDaGlsZChzcGFuKTtcblxuICAgICAgICAgICAgY29uc3QgZGl2Qm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGl2Qm9keS5jbGFzc0xpc3QuYWRkKCd0b2RvLXRleHQnKTtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgIGxhYmVsLmlubmVyVGV4dCA9IHRhc2sudGl0bGU7XG4gICAgICAgICAgICBjb25zdCBsYWJlbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICBpZiAodGFzay5sYWJlbCl7XG4gICAgICAgICAgICAgICAgbGFiZWxEaXYuaW5uZXJIVE1MID0gYDxzbWFsbCB0YWJpbmRleD1cIjBcIj4ke3Rhc2subGFiZWx9PC9zbWFsbD5gO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsYWJlbERpdi5pbm5lckhUTUwgPSBgPHNtYWxsPiR7dGFzay5sYWJlbH08L3NtYWxsPmA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBwYXJhLmNsYXNzTGlzdC5hZGQoJ3RvZG8tdGV4dC1ub3RlJyk7XG5cbiAgICAgICAgICAgIGlmICh0YXNrLm5vdGUpe1xuICAgICAgICAgICAgICAgIHBhcmEuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWlkIHRvb2wtc3BhblwiPm5vdGU8L3NwYW4+XG4gICAgICAgICAgICAgICAgJHt0YXNrLm5vdGV9XG4gICAgICAgICAgICAgICAgYDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdlbScpO1xuICAgICAgICAgICAgaWYgKERhdGUucGFyc2UodGFzay5kdWVEYXRlKSA+IERhdGUucGFyc2UoZGF0ZVN0cmluZy50b2RheVN0cmluZygpKSl7XG4gICAgICAgICAgICAgICAgZW0uY2xhc3NMaXN0LmFkZCgnc2NoZWQtdXBjb20nKTtcbiAgICAgICAgICAgICAgICBlbS5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWRcIj5ldmVudDwvc3Bhbj4gVXBjb21pbmdcbiAgICAgICAgICAgICAgICBgO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChEYXRlLnBhcnNlKHRhc2suZHVlRGF0ZSkgPCBEYXRlLnBhcnNlKGRhdGVTdHJpbmcudG9kYXlTdHJpbmcoKSkpe1xuICAgICAgICAgICAgICAgIGVtLmNsYXNzTGlzdC5hZGQoJ3NjaGVkLWR1ZScpO1xuICAgICAgICAgICAgICAgIGVtLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIG1pZFwiPmV2ZW50PC9zcGFuPiBQYXN0IGR1ZVxuICAgICAgICAgICAgICAgIGA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKERhdGUucGFyc2UodGFzay5kdWVEYXRlKSA9PSBEYXRlLnBhcnNlKGRhdGVTdHJpbmcudG9kYXlTdHJpbmcoKSkpIHtcbiAgICAgICAgICAgICAgICBlbS5jbGFzc0xpc3QuYWRkKCdzY2hlZC10b2RheScpO1xuICAgICAgICAgICAgICAgIGVtLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIG1pZFwiPmV2ZW50PC9zcGFuPiBUb2RheVxuICAgICAgICAgICAgICAgIGA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVtLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIG1pZFwiPmV2ZW50PC9zcGFuPiBObyBEYXRlXG4gICAgICAgICAgICAgICAgYDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgZGl2VG9vbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGl2VG9vbC5jbGFzc0xpc3QuYWRkKCd0b2RvLXRvb2xzLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uRWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgYnV0dG9uRWRpdC5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIG1pZCB0b29sLXNwYW5cIj5lZGl0PC9zcGFuPlxuICAgICAgICAgICAgYDtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbkRlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgYnV0dG9uRGVsZXRlLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWlkIHRvb2wtc3BhblwiPmRlbGV0ZTwvc3Bhbj5cbiAgICAgICAgICAgIGA7XG5cbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChkaXZDaGVja2JveCk7XG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZGl2Qm9keSk7XG4gICAgICAgICAgICBkaXZCb2R5LmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgICAgIGRpdkJvZHkuYXBwZW5kQ2hpbGQobGFiZWxEaXYpO1xuICAgICAgICAgICAgZGl2Qm9keS5hcHBlbmRDaGlsZChwYXJhKTtcbiAgICAgICAgICAgIGRpdkJvZHkuYXBwZW5kQ2hpbGQoZW0pO1xuICAgICAgICAgICAgZGl2Qm9keS5hcHBlbmRDaGlsZChkaXZUb29sKTtcbiAgICAgICAgICAgIGRpdlRvb2wuYXBwZW5kQ2hpbGQoYnV0dG9uRWRpdCk7XG4gICAgICAgICAgICBkaXZUb29sLmFwcGVuZENoaWxkKGJ1dHRvbkRlbGV0ZSk7XG4gICAgICAgICAgICAvLyBoZXJlIGhlcmUgLy8gYnV0dG9uQ2hlY2ssIGJ1dHRvbkVkaXQsIGJ1dHRvbkRlbGV0ZS4gYWRkIG9uY2xpY2tcblxuICAgICAgICAgICAgY29udGFpbmVyLm1haW4uYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxuY29uc3QgZGlzcGxheSA9ICgoKSA9PiB7XG4gICAgY2hhbmdlTWFpbignZHVlRGF0ZScsIGRhdGVTdHJpbmcudG9kYXlTdHJpbmcoKSwgJ3RvZGF5Jyk7XG4gICAgLy8gY2hhbmdlTWFpbignbGFiZWwnLCAnamVzdXMnKTsgLy9oZXJlIGhlcmVcblxuICAgIGNvbnN0IF9nZXRMYXN0V29yZCA9IChzdHJpbmcpID0+IHtcbiAgICAgICAgbGV0IHdvcmQgPSBzdHJpbmcuc3BsaXQoXCIgXCIpO1xuICAgICAgICByZXR1cm4gd29yZFt3b3JkLmxlbmd0aCAtIDFdO1xuICAgIH07XG5cbiAgICBjb25zdCB0b2RvbGlzdCA9IChlKSA9PiB7XG4gICAgICAgIGNvbnRhaW5lci5oZWFkZXIuaW5uZXJUZXh0ID0gX2dldExhc3RXb3JkKGUudGFyZ2V0LmlubmVyVGV4dCk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvLWNvbXAgLmFjdGl2ZScpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblxuICAgICAgICBpZih3aW5kb3cuaW5uZXJXaWR0aCA8PSA3NTApe1xuICAgICAgICAgICAgaE5hdi5tZW51LmNsaWNrKCk7bFxuICAgICAgICB9XG4gICAgICAgIC8vIGluc2VydCB0aGUgbG9naWMgaGVyZSwgbG9hZCB0aGUgbGlzdCBvZiBzZWxlY3RlZCBkaXNwbGF5XG4gICAgfTtcblxuICAgIGNvbnN0IGhvbWUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnRhaW5lci5oZWFkZXIuaW5uZXJUZXh0ID0gJ1RvZGF5JztcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZm8tY29tcCAuYWN0aXZlJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIHZOYXYudG9kYXkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgfTtcblxuICAgIGNvbnN0IHRhc2tQcm9qZWN0TGlzdCA9ICgpID0+IHtcbiAgICAgICAgdGFzay5wcm9qZWN0U2VsZWN0b3IuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHRhc2sucHJvamVjdFNlbGVjdG9yLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxidXR0b24gaWQgPSBcInByb2plY3REZWZhdWx0SW5ib3hcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIG1pZFwiPmluYm94PC9zcGFuPlxuICAgICAgICAgICAgICAgIDx1PkluYm94PC91PlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIGA7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0RGVmYXVsdEluYm94Jykub25jbGljayA9IHNlbGVjdC5pbmJveDtcbiAgICAgICAgaWYodGFzay5wcm9qZWN0LmRhdGFzZXQudmFsdWUgPT0gJ2luYm94Jyl7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdERlZmF1bHRJbmJveCcpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJykpO1xuXG4gICAgICAgIGRhdGEucHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWlkXCI+Y2lyY2xlPC9zcGFuPlxuICAgICAgICAgICAgICAgIDx1PiR7cHJvamVjdH08L3U+XG4gICAgICAgICAgICBgO1xuICAgICAgICAgICAgdGFzay5wcm9qZWN0U2VsZWN0b3IuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICAgICAgICAgIGlmKHRhc2sucHJvamVjdC5kYXRhc2V0LnZhbHVlID09IHByb2plY3Qpe1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnV0dG9uLm9uY2xpY2sgPSBzZWxlY3QucHJvamVjdDsgICAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHRhc2tMYWJlbExpc3QgPSAoKSA9PiB7XG4gICAgICAgIHRhc2subGFiZWxDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHRhc2subGFiZWxDb250YWluZXIuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGJ1dHRvbiBpZCA9IFwibGFiZWxOb25lXCI+XG4gICAgICAgICAgICAgICAgPHU+Tm8gTGFiZWw8L3U+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgYDtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGFiZWxOb25lJykub25jbGljayA9IHNlbGVjdC5ub0xhYmVsO1xuICAgICAgICBpZih0YXNrLmxhYmVsLmRhdGFzZXQudmFsdWUgPT0gJycpe1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xhYmVsTm9uZScpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJykpO1xuXG4gICAgICAgIGRhdGEubGFiZWxzLmZvckVhY2goKGxhYmVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWRcIj5sYWJlbDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8dT4ke2xhYmVsfTwvdT5cbiAgICAgICAgICAgIGA7XG4gICAgICAgICAgICB0YXNrLmxhYmVsQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgICAgICAgICBpZih0YXNrLmxhYmVsLmRhdGFzZXQudmFsdWUgPT0gbGFiZWwpe1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnV0dG9uLm9uY2xpY2sgPSBzZWxlY3QubGFiZWw7ICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCB0YXNrUHJpb3JpdHlMaXN0ID0gKCkgPT4ge1xuICAgICAgICB0YXNrLnByaW9yaXR5Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGFzay5wcmlvcml0eS5kYXRhc2V0LnZhbHVlID09ICdwcmlvcml0eSA0Jyl7XG4gICAgICAgICAgICB0YXNrLnByaW9yaXR5Rm91ci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgfSBlbHNlIGlmICh0YXNrLnByaW9yaXR5LmRhdGFzZXQudmFsdWUgPT0gJ3ByaW9yaXR5IDMnKXtcbiAgICAgICAgICAgIHRhc2sucHJpb3JpdHlUaHJlZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgfSBlbHNlIGlmICh0YXNrLnByaW9yaXR5LmRhdGFzZXQudmFsdWUgPT0gJ3ByaW9yaXR5IDInKXtcbiAgICAgICAgICAgIHRhc2sucHJpb3JpdHlUd28uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXNrLnByaW9yaXR5T25lLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHRvZG9saXN0LFxuICAgICAgICBob21lLFxuICAgICAgICB0YXNrUHJvamVjdExpc3QsXG4gICAgICAgIHRhc2tMYWJlbExpc3QsXG4gICAgICAgIHRhc2tQcmlvcml0eUxpc3RcbiAgICB9O1xufSkoKTtcblxuY29uc3QgcmVmcmVzaCA9ICgoKSA9PiB7XG4gICAgbGV0IGRhdGE7XG5cbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9ICgpID0+IHtcbiAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJykpO1xuXG4gICAgICAgIGlmIChkYXRhLnByb2plY3RzLmxlbmd0aCl7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdExpc3RDb250YWluZXInKS5pbm5lckhUTUwgPSAnJztcblxuICAgICAgICAgICAgZGF0YS5wcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KT0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBkaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJidWxsZXRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzID0gXCJ1bmlxdWVcIj4ke3Byb2plY3R9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWRcIj5tb3JlX2hvcml6PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICBgO1xuICAgICAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdExpc3RDb250YWluZXInKS5hcHBlbmRDaGlsZChkaXYpOyAgXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBsYWJlbExpc3QgPSAoKSA9PiB7XG4gICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpKTtcblxuICAgICAgICBpZiAoZGF0YS5sYWJlbHMubGVuZ3RoKXtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsYWJlbExpc3RDb250YWluZXInKS5pbm5lckhUTUwgPSAnJztcblxuICAgICAgICAgICAgZGF0YS5sYWJlbHMuZm9yRWFjaCgobGFiZWwpPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGRpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWlkIHRhZ1wiPmxhYmVsPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3MgPSBcInVuaXF1ZVwiPiR7bGFiZWx9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWRcIj5tb3JlX2hvcml6PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICBgO1xuICAgICAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGFiZWxMaXN0Q29udGFpbmVyJykuYXBwZW5kQ2hpbGQoZGl2KTsgICBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHNjaGVkdWxlID0gKCkgPT4ge1xuICAgICAgICB0YXNrLnNwYW5Ub2RheS5pbm5lclRleHQgPSBkYXRlU3RyaW5nLnRvZGF5TmFtZSgpO1xuICAgICAgICB0YXNrLnNwYW5Ud20uaW5uZXJUZXh0ID0gZGF0ZVN0cmluZy50b21vcnJvd05hbWUoKTtcbiAgICAgICAgdGFzay5zcGFuTmV4dFdlZWsuaW5uZXJUZXh0ID0gZGF0ZVN0cmluZy5uZXh0V2Vla05hbWUoKTtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWRkLXRhc2stZGl2IC5hY3RpdmUnKS5mb3JFYWNoKChlbGVtZW50KT0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0YXNrLnNjaGVkdWxlLmRhdGFzZXQudmFsdWUgPT0gJycpe1xuICAgICAgICAgICAgdGFzay5zY2hlZE5vRGF0ZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgfSBlbHNlIGlmICh0YXNrLnNjaGVkdWxlLmlubmVyVGV4dCA9PSAnVG9kYXknKXtcbiAgICAgICAgICAgIHRhc2suc2NoZWRUb2RheS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgfSBlbHNlIGlmICh0YXNrLnNjaGVkdWxlLmlubmVyVGV4dCA9PSAnVG9tb3Jyb3cnKXtcbiAgICAgICAgICAgIHRhc2suc2NoZWRUd20uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGFzay5zY2hlZHVsZS5pbm5lclRleHQgPT0gJ05leHQgV2Vlaycpe1xuICAgICAgICAgICAgdGFzay5zY2hlZE5leHRXZWVrLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFzay5zY2hlZEN1c3RvbURpdi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9qZWN0TGlzdCxcbiAgICAgICAgbGFiZWxMaXN0LFxuICAgICAgICBzY2hlZHVsZVxuICAgIH07XG59KSgpO1xuXG5jb25zdCBhZGQgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHF1aWNrID0gKCkgPT4ge1xuICAgICAgICBpZighbW9kYWwucXVpY2tBZGRUYXNrSW5wdXQudmFsdWUpe1xuICAgICAgICAgICAgYWxlcnQoJ1Rhc2sgbmFtZSByZXF1aXJlZCEnKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHB1c2gucXVpY2sobW9kYWwucXVpY2tBZGRUYXNrSW5wdXQudmFsdWUpO1xuICAgICAgICB0b2dnbGUucXVpY2tBZGRUYXNrKCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCk9PiBhbGVydCgnQWRkZWQgdG8gSW5ib3ghJyksIDUwMCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHByb2plY3QgPSAoKSA9PiB7XG4gICAgICAgIGlmKCFtb2RhbC5uZXdQcm9qZWN0TmFtZS52YWx1ZSl7XG4gICAgICAgICAgICBhbGVydCgnUHJvamVjdCBuYW1lIHJlcXVpcmVkIScpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcHVzaC5wcm9qZWN0KG1vZGFsLm5ld1Byb2plY3ROYW1lLnZhbHVlKTtcbiAgICAgICAgbW9kYWwucHJvamVjdENyZWF0b3IuY2xhc3NMaXN0LnRvZ2dsZSgnb24nKTtcbiAgICAgICAgc2V0VGltZW91dCgoKT0+IGFsZXJ0KCdBZGRlZCB0byBQcm9qZWN0cyEnKSwgNTAwKTtcbiAgICAgICAgcmVmcmVzaC5wcm9qZWN0TGlzdCgpO1xuICAgIH07XG5cbiAgICBjb25zdCBsYWJlbCA9ICgpID0+IHtcbiAgICAgICAgaWYoIW1vZGFsLmFkZExhYmVsSW5wdXQudmFsdWUpe1xuICAgICAgICAgICAgYWxlcnQoJ0xhYmVsIG5hbWUgcmVxdWlyZWQhJylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBwdXNoLmxhYmVsKG1vZGFsLmFkZExhYmVsSW5wdXQudmFsdWUpO1xuICAgICAgICBtb2RhbC5sYWJlbENyZWF0b3IuY2xhc3NMaXN0LnRvZ2dsZSgnb24nKTtcbiAgICAgICAgc2V0VGltZW91dCgoKT0+IGFsZXJ0KCdBZGRlZCB0byBMYWJlbHMhJyksIDUwMCk7XG4gICAgICAgIHJlZnJlc2gubGFiZWxMaXN0KCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHRvZG8gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYoIXRhc2suaW5wdXQudmFsdWUpe1xuICAgICAgICAgICAgYWxlcnQoJ1Rhc2sgbmFtZSByZXF1aXJlZCEnKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcHVzaC50YXNrKFxuICAgICAgICAgICAgdGFzay5pbnB1dC52YWx1ZSxcbiAgICAgICAgICAgIHRhc2suc2NoZWR1bGUuZGF0YXNldC52YWx1ZSxcbiAgICAgICAgICAgIHRhc2sucHJpb3JpdHkuZGF0YXNldC52YWx1ZSxcbiAgICAgICAgICAgIHRhc2sucHJvamVjdC5kYXRhc2V0LnZhbHVlLFxuICAgICAgICAgICAgdGFzay5sYWJlbC5kYXRhc2V0LnZhbHVlXG4gICAgICAgICk7XG5cbiAgICAgICAgbGV0IHByb2plY3QgPSB0YXNrLnByb2plY3QuZGF0YXNldC52YWx1ZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICBhbGVydChgQWRkZWQgdG8gJHtwcm9qZWN0fSFgKTtcbiAgICAgICAgdG9nZ2xlLnRhc2tDcmVhdG9yKCk7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHF1aWNrLFxuICAgICAgICBwcm9qZWN0LFxuICAgICAgICBsYWJlbCxcbiAgICAgICAgdG9kb1xuICAgIH07XG59KSgpO1xuXG5jb25zdCBzZWxlY3QgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHJlc2V0ID0gKCkgPT4ge1xuICAgICAgICB0YXNrLnNjaGVkdWxlLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWlkXCI+ZXZlbnQ8L3NwYW4+IFNjaGVkdWxlXG4gICAgICAgIGA7XG4gICAgICAgIHRhc2suc2NoZWRDdXN0b21JbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICB0YXNrLnNjaGVkdWxlLmRhdGFzZXQudmFsdWUgPSAnJztcbiAgICAgICAgdGFzay5wcm9qZWN0LmRhdGFzZXQudmFsdWUgPSAnaW5ib3gnO1xuICAgICAgICB0YXNrLnByb2plY3QuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWRcIj5pbmJveDwvc3Bhbj4gSW5ib3hcbiAgICAgICAgYDtcbiAgICAgICAgdGFzay5sYWJlbC5kYXRhc2V0LnZhbHVlID0gJyc7XG4gICAgICAgIHRhc2sucHJpb3JpdHkuZGF0YXNldC52YWx1ZSA9ICdwcmlvcml0eSA0JztcbiAgICB9O1xuXG4gICAgY29uc3Qgc2NoZWR1bGUgPSAoZSkgPT4ge1xuICAgICAgICBpZihlLmN1cnJlbnRUYXJnZXQuaW5uZXJUZXh0LmluY2x1ZGVzKCdUb2RheScpKXtcbiAgICAgICAgICAgIHRhc2suc2NoZWR1bGUuaW5uZXJUZXh0ID0gJ1RvZGF5JztcbiAgICAgICAgICAgIHRhc2suc2NoZWR1bGUuZGF0YXNldC52YWx1ZSA9IGRhdGVTdHJpbmcudG9kYXlTdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIGlmIChlLmN1cnJlbnRUYXJnZXQuaW5uZXJUZXh0LmluY2x1ZGVzKCdUb21vcnJvdycpKXtcbiAgICAgICAgICAgIHRhc2suc2NoZWR1bGUuaW5uZXJUZXh0ID0gJ1RvbW9ycm93JztcbiAgICAgICAgICAgIHRhc2suc2NoZWR1bGUuZGF0YXNldC52YWx1ZSA9IGRhdGVTdHJpbmcudHdtU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZS5jdXJyZW50VGFyZ2V0LmlubmVyVGV4dC5pbmNsdWRlcygnV2VlaycpKXtcbiAgICAgICAgICAgIHRhc2suc2NoZWR1bGUuaW5uZXJUZXh0ID0gJ05leHQgV2Vlayc7XG4gICAgICAgICAgICB0YXNrLnNjaGVkdWxlLmRhdGFzZXQudmFsdWUgPSBkYXRlU3RyaW5nLm5leHRXZWVrU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXNrLnNjaGVkdWxlLmlubmVyVGV4dCA9ICdObyBEYXRlJztcbiAgICAgICAgICAgIHRhc2suc2NoZWR1bGUuZGF0YXNldC52YWx1ZSA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIHRvZ2dsZS50YXNrU2NoZWR1bGVyKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGN1c3RvbVNjaGVkID0gKCkgPT4ge1xuICAgICAgICBpZighdGFzay5zY2hlZEN1c3RvbUlucHV0LnZhbHVlKXtcbiAgICAgICAgICAgIGFsZXJ0KCdEYXRlIHJlcXVpcmVkIScpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgbmV3RGF0ZSA9IG5ldyBEYXRlKHRhc2suc2NoZWRDdXN0b21JbnB1dC52YWx1ZSk7XG4gICAgICAgICAgICBuZXdEYXRlLnNldEhvdXJzKDAsMCwwLDApO1xuXG4gICAgICAgICAgICBsZXQgZGF0ZSA9IG5ld0RhdGUuZ2V0RGF0ZSgpLnRvU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIGlmKGRhdGUubGVuZ3RoID09IDIpe1xuICAgICAgICAgICAgICAgIG5ld0RhdGUgPSBgJHtuZXdEYXRlLmdldEZ1bGxZZWFyKCl9LSR7bmV3RGF0ZS5nZXRNb250aCgpKzF9LSR7bmV3RGF0ZS5nZXREYXRlKCl9YDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV3RGF0ZSA9IGAke25ld0RhdGUuZ2V0RnVsbFllYXIoKX0tJHtuZXdEYXRlLmdldE1vbnRoKCkrMX0tMCR7bmV3RGF0ZS5nZXREYXRlKCl9YDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGFzay5zY2hlZHVsZS5pbm5lclRleHQgPSBuZXdEYXRlO1xuICAgICAgICAgICAgdGFzay5zY2hlZHVsZS5kYXRhc2V0LnZhbHVlID0gbmV3RGF0ZTtcbiAgICAgICAgICAgIHRvZ2dsZS50YXNrU2NoZWR1bGVyKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgaW5ib3ggPSAoZSkgPT4ge1xuICAgICAgICB0YXNrLnByb2plY3QuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWRcIj5pbmJveDwvc3Bhbj4gSW5ib3hcbiAgICAgICAgYDtcbiAgICAgICAgdGFzay5wcm9qZWN0LmRhdGFzZXQudmFsdWUgPSAnaW5ib3gnO1xuICAgICAgICB0b2dnbGUudGFza1Byb2plY3RTZWxlY3RvcigpO1xuICAgIH07XG5cbiAgICBjb25zdCBwcm9qZWN0ID0gKGUpID0+IHtcbiAgICAgICAgdGFzay5wcm9qZWN0LmlubmVyVGV4dCA9IGUuY3VycmVudFRhcmdldC5vdXRlclRleHQuc3Vic3RyaW5nKDcpO1xuICAgICAgICB0YXNrLnByb2plY3QuZGF0YXNldC52YWx1ZSA9IHRhc2sucHJvamVjdC5pbm5lclRleHQ7XG4gICAgICAgIHRvZ2dsZS50YXNrUHJvamVjdFNlbGVjdG9yKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGxhYmVsID0gKGUpID0+IHtcbiAgICAgICAgdGFzay5sYWJlbC5kYXRhc2V0LnZhbHVlID0gZS5jdXJyZW50VGFyZ2V0Lm91dGVyVGV4dC5zdWJzdHJpbmcoNik7XG4gICAgICAgIHRvZ2dsZS50YXNrTGFiZWxlcigpO1xuICAgIH07XG5cbiAgICBjb25zdCBub0xhYmVsID0gKCkgPT4ge1xuICAgICAgICB0YXNrLmxhYmVsLmRhdGFzZXQudmFsdWUgPSAnJztcbiAgICAgICAgdG9nZ2xlLnRhc2tMYWJlbGVyKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHByaW9yaXR5ID0gKGUpID0+IHtcbiAgICAgICAgbGV0IGRhdGEgPSBlLmN1cnJlbnRUYXJnZXQub3V0ZXJUZXh0LnN1YnN0cmluZyg1KS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB0YXNrLnByaW9yaXR5LmRhdGFzZXQudmFsdWUgPSBkYXRhO1xuICAgICAgICB0b2dnbGUudGFza1ByaW9yaXR5U2V0dGVyKCk7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHJlc2V0LFxuICAgICAgICBzY2hlZHVsZSwgY3VzdG9tU2NoZWQsXG4gICAgICAgIGluYm94LCBwcm9qZWN0LCBsYWJlbCwgbm9MYWJlbCwgcHJpb3JpdHlcbiAgICB9O1xufSkoKTtcblxuY29uc3Qgdmlld3BvcnRMaXN0ZW5lciA9ICgpID0+IHtcbiAgICB2TmF2Lm5hdi5oYXNBdHRyaWJ1dGUoJ3N0eWxlJylcbiAgICAgICAgPyB2TmF2Lm5hdi5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJykgOiB2TmF2Lm5hdi5jbGFzc0xpc3QucmVtb3ZlKCdkaXNwbGF5LW5hdicpO1xufTtcblxuY29uc3QgZXZlbnQgPSAoKCkgPT4ge1xuICAgIGhOYXYubWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZS5tZW51KTtcblxuICAgIGhOYXYucGx1cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZS5xdWlja0FkZFRhc2spO1xuICAgIG1vZGFsLnF1aWNrQWRkVGFza0NhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICB0b2dnbGUucXVpY2tBZGRUYXNrKTtcblxuICAgIGhOYXYubm90aWZpY2F0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlLm5vdGlmaWNhdGlvbik7XG4gICAgbW9kYWwubm90aWZSZWFkQWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlLm5vdGlmaWNhdGlvbik7XG5cbiAgICB2TmF2LnByb2plY3RzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlLnByb2plY3RzKTtcbiAgICB2TmF2LnByb2plY3RzLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgY2xpY2tlcik7XG4gICAgdk5hdi5hZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlLmFkZFByb2plY3QpO1xuICAgIG1vZGFsLmNhbmNlbFByb2plY3RDcmVhdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlLmFkZFByb2plY3QpO1xuXG4gICAgdk5hdi5sYWJlbHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGUubGFiZWxzKTtcbiAgICB2TmF2LmxhYmVscy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGNsaWNrZXIpO1xuICAgIHZOYXYuYWRkTGFiZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGUuYWRkTGFiZWwpO1xuICAgIG1vZGFsLmNhbmNlbExhYmVsQ3JlYXRvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZS5hZGRMYWJlbCk7XG5cbiAgICBjb250YWluZXIuYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZS50YXNrQ3JlYXRvcik7XG4gICAgdGFzay5jYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGUudGFza0NyZWF0b3IpO1xuICAgIHRhc2suc2NoZWR1bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGUudGFza1NjaGVkdWxlcik7XG4gICAgdGFzay5wcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlLnRhc2tQcm9qZWN0U2VsZWN0b3IpO1xuICAgIHRhc2subGFiZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGUudGFza0xhYmVsZXIpO1xuICAgIHRhc2sucHJpb3JpdHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGUudGFza1ByaW9yaXR5U2V0dGVyKTtcblxuICAgIHZOYXYuaW5ib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5LnRvZG9saXN0KTtcbiAgICB2TmF2LnRvZGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheS50b2RvbGlzdCk7XG4gICAgaE5hdi5ob21lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheS5ob21lKTtcbiAgICB2TmF2LnVwY29taW5nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheS50b2RvbGlzdCk7XG5cbiAgICBtb2RhbC5xdWlja0FkZFRhc2tTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGQucXVpY2spO1xuICAgIG1vZGFsLnByb2plY3RBZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGQucHJvamVjdCk7XG4gICAgbW9kYWwuYWRkTmV3TGFiZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGQubGFiZWwpO1xuXG4gICAgdGFzay5hZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGQudG9kbyk7XG4gICAgdGFzay5zY2hlZFRvZGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VsZWN0LnNjaGVkdWxlKTtcbiAgICB0YXNrLnNjaGVkVHdtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VsZWN0LnNjaGVkdWxlKTtcbiAgICB0YXNrLnNjaGVkTmV4dFdlZWsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWxlY3Quc2NoZWR1bGUpO1xuICAgIHRhc2suc2NoZWROb0RhdGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWxlY3Quc2NoZWR1bGUpO1xuICAgIHRhc2suc2NoZWRDdXN0b21CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWxlY3QuY3VzdG9tU2NoZWQpO1xuXG4gICAgdGFzay5wcmlvcml0eUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKS5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VsZWN0LnByaW9yaXR5KTtcbiAgICB9KTtcblxuICAgIC8vZml4IGRhdGEuanMgZmlyc3QgYmVmb3JlIGFkZGluZyBldmVudHMgaW4gbGFiZWwsIHByb2plY3QsIGFuZCB0b2RvIGVkaXRvclxuXG4gICAgd2luZG93Lm9uY2xpY2sgPSB2aWV3TWFuYWdlcjtcbiAgICB3aW5kb3cub25yZXNpemUgPSB2aWV3cG9ydExpc3RlbmVyO1xuXG4gICAgLy9lc2Mga2V5dXAgdGhhdCBjbG9zZXMgbW9kYWxzIHdpbGwgYmUgY29vbFxuXG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBldmVudDsiLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGhOYXYgPSAoKCkgPT4ge1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2QnRuTWVudScpO1xuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2QnRuSG9tZScpO1xuICAgIGNvbnN0IGZvcm1TZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybVNlYXJjaCcpO1xuICAgIGNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYXZJbnB1dFNlYXJjaCcpO1xuICAgIGNvbnN0IHBsdXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2QnRuUXVpY2tBZGQnKTtcbiAgICBjb25zdCBub3RpZmljYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2QnRuTm90aWZpY2F0aW9uJyk7XG4gICAgY29uc3Qgbm90aWZDb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYXZCdG5Ob3RpZmljYXRpb25Db3VudCcpO1xuXG4gICAgcmV0dXJuIHsgXG4gICAgICAgIG1lbnUsIGhvbWUsIFxuICAgICAgICBmb3JtU2VhcmNoLCBzZWFyY2gsIFxuICAgICAgICBwbHVzLCBub3RpZmljYXRpb24sIG5vdGlmQ291bnQgfTtcbn0pKCk7XG5cbmNvbnN0IHZOYXYgPSAoKCkgPT4ge1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYXZJbmZvQ29tcCcpO1xuICAgIGNvbnN0IGluYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NibmF2SW5ib3hCdG4nKTtcbiAgICBjb25zdCBpbmJveENvdW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2JuYXZJbmJveEJ0biA+IHNhbXAnKTtcbiAgICBjb25zdCB0b2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzYm5hdlRvZGF5QnRuJyk7XG4gICAgY29uc3QgdG9kYXlDb3VudGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NibmF2VG9kYXlCdG4gPiBzYW1wJyk7XG4gICAgY29uc3QgdXBjb21pbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2JuYXZVcGNvbUJ0bicpO1xuICAgIGNvbnN0IHVwY29taW5nQ291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzYm5hdlVwY29tQnRuID4gc2FtcCcpO1xuICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NibmF2UHJvamVjdHNEaXYnKTtcbiAgICBjb25zdCBwcm9qZWN0Q2hldnJvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzYm5hdlByb2plY3RzRGl2ID4gc3BhbicpO1xuICAgIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2JuYXZQcm9qZWN0QWRkQnRuJyk7XG4gICAgY29uc3QgcHJvamVjdExpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdExpc3RDb250YWluZXInKTtcbiAgICBjb25zdCBsYWJlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2JuYXZMYWJlbHNEaXYnKTtcbiAgICBjb25zdCBsYWJlbENoZXZyb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2JuYXZMYWJlbHNEaXYgPiBzcGFuJyk7XG4gICAgY29uc3QgYWRkTGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2JuYXZMYWJlbEFkZEJ0bicpO1xuICAgIGNvbnN0IGxhYmVsTGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsYWJlbExpc3RDb250YWluZXInKTtcblxuICAgIHJldHVybiB7IFxuICAgICAgICBuYXYsXG4gICAgICAgIGluYm94LCBpbmJveENvdW50ZXIsXG4gICAgICAgIHRvZGF5LCB0b2RheUNvdW50ZXIsXG4gICAgICAgIHVwY29taW5nLCB1cGNvbWluZ0NvdW50ZXIsXG4gICAgICAgIHByb2plY3RzLCBwcm9qZWN0Q2hldnJvbiwgYWRkUHJvamVjdCwgcHJvamVjdExpc3RDb250YWluZXIsXG4gICAgICAgIGxhYmVscywgbGFiZWxDaGV2cm9uLCBhZGRMYWJlbCwgbGFiZWxMaXN0Q29udGFpbmVyXG4gICAgfTtcbn0pKCk7XG5cbmNvbnN0IGNvbnRhaW5lciA9ICgoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhaW5lcicpO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoZWFkZXInKTtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICAgIGNvbnN0IGFkZFRhc2tCdG5EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkVGFza0J0bkRpdicpO1xuICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkVGFza0J0bicpO1xuICAgIGNvbnN0IGVtcHR5U3RhdGVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW1wdHlTdGF0ZURpdicpO1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb290ZXInKTtcbiAgICBjb25zdCBoZWxwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hlbHAnKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGRpdixcbiAgICAgICAgaGVhZGVyLFxuICAgICAgICBtYWluLFxuICAgICAgICBhZGRUYXNrQnRuRGl2LCBhZGRUYXNrQnRuLFxuICAgICAgICBlbXB0eVN0YXRlRGl2LCBmb290ZXIsIGhlbHBcbiAgICB9O1xufSkoKTtcblxuY29uc3QgdGFzayA9ICgoKSA9PiB7XG4gICAgY29uc3QgYWRkRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFRhc2tEaXYnKTtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRUYXNrSW5wdXQnKTtcbiAgICBjb25zdCBzY2hlZHVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWxlY3RTY2hlZHVsZUJ0bicpO1xuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VsZWN0UHJvamVjdEJ0bicpO1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlbGVjdExhYmVsQnRuJyk7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VsZWN0UHJpb3JpdHlCdG4nKTtcbiAgICBjb25zdCBhZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkVGFza01haW5CdG4nKTtcbiAgICBjb25zdCBjYW5jZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkVGFza0NhbmNlbEJ0bicpO1xuXG4gICAgY29uc3Qgc2NoZWRUb2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzY2hlZHVsZXJUb2RheUJ0bicpO1xuICAgIGNvbnN0IHNwYW5Ub2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzY2hlZHVsZXJUb2RheVNwYW4nKTtcbiAgICBjb25zdCBzY2hlZFR3bSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzY2hlZHVsZXJUd21CdG4nKTtcbiAgICBjb25zdCBzcGFuVHdtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NjaGVkdWxlclR3bVNwYW4nKTtcbiAgICBjb25zdCBzY2hlZE5leHRXZWVrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NjaGVkdWxlck5leHRXZWVrQnRuJyk7XG4gICAgY29uc3Qgc3Bhbk5leHRXZWVrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NjaGVkdWxlck5leHRXZWVrU3BhbicpO1xuICAgIGNvbnN0IHNjaGVkQ3VzdG9tSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2NoZWR1bGVyQ3VzdG9tSW5wdXQnKTtcbiAgICBjb25zdCBzY2hlZEN1c3RvbURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzY2hlZHVsZXJDdXN0b21EaXYnKTtcbiAgICBjb25zdCBzY2hlZEN1c3RvbUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzY2hlZHVsZXJDdXN0b21CdG4nKTtcbiAgICBjb25zdCBzY2hlZE5vRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzY2hlZHVsZXJOb0RhdGVCdG4nKTtcbiAgICBjb25zdCBwcm9qZWN0U2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdFNlbGVjdG9yJyk7XG4gICAgY29uc3QgbGFiZWxDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGFiZWxDb250YWluZXInKTtcbiAgICBjb25zdCBwcmlvcml0eUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eUJ0bkNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHByaW9yaXR5T25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5T25lJyk7XG4gICAgY29uc3QgcHJpb3JpdHlUd28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHlUd28nKTtcbiAgICBjb25zdCBwcmlvcml0eVRocmVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5VGhyZWUnKTtcbiAgICBjb25zdCBwcmlvcml0eUZvdXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHlEZWZhdWx0Jyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBpbnB1dCxcbiAgICAgICAgc2NoZWR1bGUsIHByb2plY3QsXG4gICAgICAgIGxhYmVsLCBwcmlvcml0eSxcbiAgICAgICAgYWRkRGl2LCBhZGQsIGNhbmNlbCxcbiAgICAgICAgc2NoZWRUb2RheSwgc3BhblRvZGF5LFxuICAgICAgICBzY2hlZFR3bSwgc3BhblR3bSxcbiAgICAgICAgc2NoZWROZXh0V2Vlaywgc3Bhbk5leHRXZWVrLFxuICAgICAgICBzY2hlZEN1c3RvbUlucHV0LCBzY2hlZEN1c3RvbURpdiwgc2NoZWRDdXN0b21CdG4sXG4gICAgICAgIHNjaGVkTm9EYXRlLFxuICAgICAgICBwcm9qZWN0U2VsZWN0b3IsXG4gICAgICAgIGxhYmVsQ29udGFpbmVyLFxuICAgICAgICBwcmlvcml0eUNvbnRhaW5lciwgcHJpb3JpdHlPbmUsIHByaW9yaXR5VHdvLCBwcmlvcml0eVRocmVlLCBwcmlvcml0eUZvdXJcbiAgICB9XG59KSgpO1xuXG5jb25zdCBtb2RhbCA9ICgoKSA9PiB7XG4gICAgY29uc3QgcXVpY2tBZGRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3F1aWNrQWRkVG9kbycpO1xuICAgIGNvbnN0IHF1aWNrQWRkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3F1aWNrQWRkQ29udGFpbmVyJyk7XG4gICAgY29uc3QgcXVpY2tBZGRUYXNrSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcXVpY2tBZGRJbnB1dCcpO1xuICAgIGNvbnN0IHF1aWNrQWRkVGFza1N1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNxdWlja0FkZFN1Ym1pdCcpO1xuICAgIGNvbnN0IHF1aWNrQWRkVGFza0NhbmNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNxdWlja0FkZENhbmNlbCcpO1xuICAgIGNvbnN0IG5vdGlmaWNhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNub3RpZmljYXRpb25zJyk7XG4gICAgY29uc3Qgbm90aWZDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbm90aWZDb250YWluZXInKTtcbiAgICBjb25zdCBub3RpZlJlYWRBbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbm90aWZSZWFkQWxsQnRuJyk7XG4gICAgY29uc3Qgbm90aWZPdXRwdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdub3RpZk91dHB1dCcpO1xuICAgIGNvbnN0IHByb2plY3RDcmVhdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RDcmVhdG9yJyk7XG4gICAgY29uc3QgbmV3UHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3UHJvamVjdE5hbWUnKTtcbiAgICBjb25zdCBwcm9qZWN0QWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RBZGRCdXR0b24nKTtcbiAgICBjb25zdCBjYW5jZWxQcm9qZWN0Q3JlYXRvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0Q2FuY2VsQnV0dG9uJyk7XG4gICAgY29uc3QgcHJvamVjdEVkaXRvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0RWRpdG9yJyk7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdE5hbWUnKTtcbiAgICBjb25zdCB1cGRhdGVkUHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXBkYXRlZFByb2plY3ROYW1lJyk7XG4gICAgY29uc3QgdXBkYXRlUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1cGRhdGVQcm9qZWN0QnRuJyk7XG4gICAgY29uc3QgY2FuY2VsUHJvamVjdEVkaXRvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW5jZWxQcm9qZWN0QnRuJyk7XG4gICAgY29uc3QgZGVsZXRlUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZWxldGVQcm9qZWN0QnRuJyk7XG4gICAgY29uc3QgbGFiZWxDcmVhdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xhYmVsQ3JlYXRvcicpO1xuICAgIGNvbnN0IGFkZExhYmVsSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkTGFiZWxJbnB1dCcpO1xuICAgIGNvbnN0IGFkZE5ld0xhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZE5ld0xhYmVsQnRuJyk7XG4gICAgY29uc3QgY2FuY2VsTGFiZWxDcmVhdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbmNlbEFkZExhYmVsQnRuJyk7XG4gICAgY29uc3QgbGFiZWxFZGl0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGFiZWxFZGl0b3InKTtcbiAgICBjb25zdCBlZGl0TGFiZWxOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXRMYWJlbE5hbWUnKTtcbiAgICBjb25zdCB1cGRhdGVkTGFiZWxOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VwZGF0ZWRMYWJlbE5hbWUnKTtcbiAgICBjb25zdCB1cGRhdGVMYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1cGRhdGVMYWJlbEJ0bicpO1xuICAgIGNvbnN0IGNhbmNlbExhYmVsRWRpdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbmNlbFVwZGF0ZUJ0bicpO1xuICAgIGNvbnN0IGRlbGV0ZUxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RlbGV0ZUxhYmVsQnRuJyk7XG4gICAgY29uc3QgdGFza0VkaXRvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrRWRpdG9yJyk7XG4gICAgY29uc3QgdXBkYXRlZFRhc2tOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VwZGF0ZWRUYXNrTmFtZScpO1xuICAgIGNvbnN0IHVwZGF0ZWRUYXNrTm90ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1cGRhdGVkVGFza05vdGUnKTtcbiAgICBjb25zdCB1cGRhdGVkVGFza1NjaGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VwZGF0ZWRUYXNrU2NoZWR1bGUnKTtcbiAgICBjb25zdCB1cGRhdGVkVGFza1Byb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXBkYXRlZFRhc2tQcm9qZWN0Jyk7XG4gICAgY29uc3QgdXBkYXRlZFRhc2tMYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1cGRhdGVkVGFza0xhYmVsJyk7XG4gICAgY29uc3QgdXBkYXRlZFRhc2tQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1cGRhdGVkVGFza1ByaW9yaXR5Jyk7XG4gICAgY29uc3QgdXBkYXRlVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1cGRhdGVUb2RvJyk7XG4gICAgY29uc3QgY2FuY2VsVGFza0VkaXRvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW5jZWxVcGRhdGVUb2RvJyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBxdWlja0FkZFRhc2ssIHF1aWNrQWRkQ29udGFpbmVyLCBxdWlja0FkZFRhc2tJbnB1dCwgcXVpY2tBZGRUYXNrU3VibWl0LCBxdWlja0FkZFRhc2tDYW5jZWwsXG4gICAgICAgIG5vdGlmaWNhdGlvbiwgbm90aWZDb250YWluZXIsIG5vdGlmUmVhZEFsbCwgbm90aWZPdXRwdXQsXG4gICAgICAgIHByb2plY3RDcmVhdG9yLCBuZXdQcm9qZWN0TmFtZSwgcHJvamVjdEFkZCwgY2FuY2VsUHJvamVjdENyZWF0b3IsXG4gICAgICAgIHByb2plY3RFZGl0b3IsIHByb2plY3ROYW1lLCB1cGRhdGVkUHJvamVjdE5hbWUsIHVwZGF0ZVByb2plY3QsXG4gICAgICAgICAgICBjYW5jZWxQcm9qZWN0RWRpdG9yLCBkZWxldGVQcm9qZWN0LFxuICAgICAgICBsYWJlbENyZWF0b3IsIGFkZExhYmVsSW5wdXQsIGFkZE5ld0xhYmVsLCBjYW5jZWxMYWJlbENyZWF0b3IsXG4gICAgICAgIGxhYmVsRWRpdG9yLCBlZGl0TGFiZWxOYW1lLCB1cGRhdGVkTGFiZWxOYW1lLCB1cGRhdGVMYWJlbCxcbiAgICAgICAgICAgIGNhbmNlbExhYmVsRWRpdG9yLCBkZWxldGVMYWJlbCxcbiAgICAgICAgdGFza0VkaXRvciwgdXBkYXRlZFRhc2tOYW1lLCB1cGRhdGVkVGFza05vdGUsIHVwZGF0ZWRUYXNrU2NoZWQsIHVwZGF0ZWRUYXNrUHJvamVjdCxcbiAgICAgICAgICAgIHVwZGF0ZWRUYXNrTGFiZWwsIHVwZGF0ZWRUYXNrUHJpb3JpdHksIHVwZGF0ZVRhc2ssIGNhbmNlbFRhc2tFZGl0b3JcbiAgICB9XG59KSgpO1xuXG5leHBvcnQgeyBcbiAgICBoTmF2LFxuICAgIHZOYXYsXG4gICAgY29udGFpbmVyLFxuICAgIHRhc2ssXG4gICAgbW9kYWxcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBjcmVhdGVBcHAgZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHRlc3QgZnJvbSAnLi9kYXRhLmpzJztcbmltcG9ydCB7IGhOYXYsIHZOYXYsIGNvbnRhaW5lciwgdGFzaywgbW9kYWwgfSBmcm9tICcuL3NlbGVjdG9yLmpzJztcbmltcG9ydCBldmVudCBmcm9tICcuL2V2ZW50LmpzJztcblxuJ3VzZSBzdHJpY3QnO1xuXG4vLyB2TmF2LmluYm94Lm9uY2xpY2sgPSBmdW5jdGlvbigpe1xuLy8gICAgIGNvbnNvbGUubG9nKDEpXG4vLyB9XG5cbi8vIGhOYXYuZm9ybVNlYXJjaC5vbnN1Ym1pdCA9IGZ1bmN0aW9uKGUpe1xuLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcbi8vICAgICBoTmF2LnNlYXJjaC5ibHVyKCk7XG4vLyAgICAgY29uc29sZS5sb2coMik7XG4vLyB9XG4iXSwic291cmNlUm9vdCI6IiJ9