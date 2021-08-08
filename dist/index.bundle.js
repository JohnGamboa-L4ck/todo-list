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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --light92: hsl(0, 0%, 92%);\n    --light88: hsl(0, 0%, 88%);\n    --dark: hsl(0, 0%, 12%);\n    --malibu: hsl(192, 93%, 72%);\n    --auburn: hsl(0, 75%, 65%);\n    --mariner: hsl(216, 75%, 51%);\n    --laurel: hsl(120, 100%, 25%);\n    --purple: hsl(264, 61%, 47%);\n    --sun: hsl(34, 93%, 48%);\n    --transparent1: rgba(0,0,0,.1);\n    --transparent2: rgba(0,0,0,.2);\n\n    --background: var(--light92);\n    --foreground: var(--malibu);\n}\n\n*, *:before, *:after {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;  \n}\n\nhtml,\nbody {\n    overflow-x: hidden;\n}\n\nbody {\n    min-height: 100vh;\n    background-color: var(--background);\n    font-family:sans-serif;\n    color: var(--dark);\n}\n\nbutton,\n.search-input {\n    outline: none;\n    border: none;\n    border-radius: 3px;\n    font-family:sans-serif;\n}\n\nbutton {\n    padding: .125rem;\n    color: var(--dark);\n    background-color: transparent;\n}\n\nbutton,\n.ic-div {\n    cursor: pointer;\n}\n\nspan.mid {\n    vertical-align: middle;\n}\n\nspan,\nh1 {\n    user-select: none;\n}\n\n.app {\n    display: flex;\n    flex-direction: column;\n    width: 100vw;\n    height: 100vh;\n}\n\n.nav-comp ,\n.nc-left,\n.search-div,\n.nc-right {\n    display: inline-flex;\n}\n\n.nav-comp {\n    justify-content: space-between;\n    width: 100%;\n    padding: .5rem 3rem .5rem 3rem;\n    background-color: var(--foreground);\n}\n\n.nc-left > * {\n    margin: 0 .25rem 0 0;\n}\n\n.nc-right > * {\n    margin: 0 0 0 .25rem;\n}\n\n.nc-right button:first-child {\n    margin: 0;\n}\n\n.search-div {\n    height: 100%;\n    background-color: var(--foreground);\n}\n\n.search-div > span:first-child {\n    align-self: center;\n    cursor: text;\n    margin: .1rem;\n    font-size: 1.6rem;\n    z-index: 2;\n}\n\n.search-div button {\n    margin: .2rem 0 .2rem -1.5rem;\n    height: 20px;\n    width: 20px;\n    align-self: center;\n    display: none;\n}\n\n.search-div button:hover,\n.search-div button:focus-visible {\n    color: var(--auburn);\n}\n\n.search-input {\n    padding: 0 1.6rem 0 1.8rem;\n    margin-left: -1.9rem;\n    background-color: var(--transparent1);\n}\n\n.search-input::-webkit-search-cancel-button {\n    -webkit-appearance: none;\n}\n\n.search-input:not(:placeholder-shown) + button {\n    display: block;\n}\n\n.search-div:focus-within .search-input,\n.search-div:hover .search-input,\n.search-input:not(:placeholder-shown){\n    background-color: var(--light92);\n}\n\n.search-div button span {\n    font-size: 1rem;\n}\n\n.app-body {\n    display: flex;\n    flex: 1;\n    max-height: calc(100% - 46.59px);\n    overflow-y: hidden;\n}\n\n.wrapper {\n    height: 100%;\n    width: 100%;\n    display: flex;\n}\n\n.info-comp {\n    display: flex;\n    flex-direction: column;\n    padding: 2rem .25rem 0 2.8rem;\n    background-color: var(--light88);\n    overflow-y: auto;\n}\n\n.info-comp > * {\n    text-align: left;\n    font-size: .9rem;\n    width: 294px;\n    padding: 5px;\n}\n\n.info-comp > * > samp {\n    float: right;\n    opacity: .5;\n    margin: 4px 1rem 4px 0;\n}\n\n.ic-div {\n    margin: .25rem 0 0 0;\n}\n\n.info-comp > div:first-of-type{\n    margin: 1rem 0 0 0;\n}\n\n.ic-span {\n    margin: 0 .25rem 0 0;\n}\n\n.info-comp > button:first-child span {\n    color: var(--mariner);\n}\n\n.info-comp > button:nth-child(2) span {\n    color: var(--laurel);\n}\n\n.info-comp > button:nth-child(3) span {\n    color: var(--purple);\n}\n\n.info-comp .active {\n    background-color: var(--malibu);\n}\n\n.opa {\n    opacity: .5;\n}\n\n.ic-add-btn {\n    float: right;\n    margin: 0px .5rem 0 0;\n    padding: 0;\n    display: none;\n}\n\n.ic-add-btn:hover + strong,\n.ic-add-btn:focus-visible + strong {\n    text-decoration: underline;\n    text-underline-offset: 30%;\n}\n\n.info-comp:focus-within .ic-add-btn,\n.info-comp:hover .ic-add-btn{\n    display: inherit;\n}\n\n.ic-div > div {\n    display: none;\n}\n\n.ic-div > div.show {\n    display: flex;\n    flex-direction: column;\n}\n\n.ic-project > span.rotate,\n.ic-label > span.rotate {\n    transform: rotate(90deg);\n}\n\n\n.show {\n    margin: .75rem 0 0 0;\n}\n\n.show > div {\n    text-align: left;\n    display: flex;\n    padding: .5rem .5rem .5rem .5rem;\n    height: 34px;\n    font-size: .9rem;\n    align-items: center;\n    border-radius: 3px;\n}\n\nspan.unique {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    align-self: center;\n    margin-right: .2rem;\n}\n\n.show button {\n    padding: 0;\n    visibility: hidden;\n}\n\n.show > div:hover,\n.show > div:focus-visible {\n    background-color: var(--transparent2);\n}\n\n.show > div:hover button,\n.show > div:focus-visible button,\n.show > div:focus-within button{\n    visibility: visible;\n    margin-left: auto;\n}\n\n.show button:hover,\n.show button:focus-visible {\n    background-color: transparent!important;\n}\n\n.bullet {\n    min-width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    margin: 0 .7rem 0 .5rem;\n    background-color: var(--transparent2);\n}\n\n.tag {\n    transform: scale(.8);\n    margin: 0 .2rem 0 .2rem;\n    color: var(--transparent2);\n}\n\n.container {\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    overflow-y: auto;\n    padding: 0 2rem 0 2rem;\n\n}\n\n.container > * {\n    max-width: 800px;\n    width: 100%;\n}\n\n.container > footer {\n    margin-top: auto;\n}\n\n.container > header {\n    padding: 2rem 0 1rem 0;\n    position: sticky;\n    top: 0;\n    background-color: var(--light92);\n    z-index: 3;\n}\n\nh1 {\n    font-size: 1.3rem;\n}\n\n.todo {\n    display: flex;\n    padding: 2px 0;\n    margin: .5rem 0 .5rem 0;\n    justify-content: flex-start;\n    flex-direction: row;\n    border-bottom: 1px solid var(--transparent1);\n}\n\n.todo,\n.todo * {\n    cursor: pointer;\n}\n\n.checkbox-btn { \n    height: 18px;\n    max-width: 18px;\n    width: 100%;\n    margin: .27rem .7rem 0 0;\n    z-index: 2;\n    position: relative;\n}\n\n.checkbox-btn.prio1 {\n    border: 2px solid var(--auburn);\n}\n\n.checkbox-btn.prio2 {\n    border: 2px solid var(--sun);\n}\n\n.checkbox-btn.prio3 {\n    border: 2px solid var(--mariner);\n}\n\n.checkbox-btn.prio4 {\n    border: 2px solid var(--transparent2);\n}\n\n.checkbox-btn:hover,\n.checkbox-btn:focus-visible {\n    border-color: transparent;\n    background-color: var(--transparent1);\n}\n\n.checkbox-btn + span {\n    padding: 0;\n    line-height: 1rem;\n    font-size: 2rem;\n    position: relative;\n    color: var(--transparent2);\n    visibility: hidden;\n    float: right;\n    margin: -.9rem 0 0 -1rem;    \n}\n\n.checkbox-btn:hover + span,\n.checkbox-btn:focus-visible + span {\n    visibility: visible;\n}\n\n.checkbox-btn:active + span{\n    color: var(--laurel);\n}\n\n.todo-text {\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n}\n\n.todo-text > label {\n    line-height: 1.4rem;\n}\n\n.todo-text-note {\n    text-indent: 1rem;\n    font-size: .9rem;\n    margin: 0 0 .25rem 0;\n}\n\n.todo-text-note,\n.todo-text-note > span,\n.todo-text small {\n    color: gray;\n}\n\n.todo-text-note > span,\nem,\nem > span {\n    font-size: .9rem!important;\n}\n\n.todo-text small:hover,\n.todo-text small:focus-visible {\n    text-decoration: underline;\n}\n\nem {\n    width: 100%;\n}\n\n.sched-due {\n    color: var(--auburn);\n}\n\n.sched-today {\n    color: var(--laurel);\n}\n\n.sched-upcom {\n    color: var(--purple);\n}\n\n.todo-tools-container {\n    display: flex;\n    justify-content: flex-end;\n    align-items: flex-end;\n    margin: -20px 0 0 0;\n    visibility: hidden;\n}\n\n.todo-tools-container * {\n    color: gray;\n}\n\n.tool-span {\n    font-size: 1.2rem;\n}\n\n.todo:hover .todo-tools-container,\n.todo:focus-within .todo-tools-container {\n    visibility: visible;\n}\n\nbutton:hover,\nbutton:focus-visible {\n    background-color: var(--transparent2);\n}\n\nbutton:focus-visible {\n    outline: auto;\n}\n\n.add-task-btn {\n    text-align: left;\n    color: gray;\n}\n\n.add-task-btn * {\n    padding: .1rem;\n}\n\n.add-task-btn span {\n    border-radius: 50%;\n    padding: 0;\n    color: var(--auburn);\n}\n\n.add-task-btn:hover,\n.add-task-btn:focus-visible,\n.add-task-btn span {\n    background-color: transparent;\n}\n\n.add-task-btn:hover span,\n.add-task-btn:focus-visible span {\n    color: var(--mariner);\n}\n\n.empty-state-div {\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    justify-content: center;\n    align-items: center;\n}\n\n.empty-state-div img {\n    max-width: 180px;\n    \n    height: auto;\n}\n\n.empty-state-div h4 {\n    font-weight: normal;\n    color: gray;\n}\n\n.empty-state-div *:nth-child(n+2) {\n    margin: .25rem 0 0 0;\n}\n\n.empty-state-div *:nth-child(n+2),\n.container footer p {\n    text-align: center;\n}\n\n.empty-state-div p {\n    font-size: .9rem;\n    color: darkgray;\n}\n\n.container footer {\n    color: var(--auburn);\n    font-size: .9rem!important;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: .25rem 0 .75rem 0;\n}\n\n.container footer span {\n    font-size: 1.25rem!important;\n}\n\n.container footer p {\n    text-decoration: underline;\n    cursor: pointer;\n}\n\n.container:not(.empty) .empty-state-div,\n.container:not(.empty) footer {\n    display: none;\n}\n\n.add-task-div {\n    border: 1px solid var(--transparent2);\n    border-radius: 3px;\n    padding: 0 .5rem .5rem .5rem;\n    height: 68.48px;\n    margin-top: 1rem;\n}\n\n.add-task-div > * {\n    margin-top: .5rem;\n}\n\n.add-task-div input,\n.quick-add-todo input {\n    width: 100%;\n    outline: none;\n    border: none;\n    font-size: .9rem;\n    background-color: var(--light92);\n}\n\n.add-task-btns-container {\n    display: flex;\n    justify-content: space-between;\n}\n\n.add-task-btns-container div > button {\n    border: 1px solid var(--transparent2);\n    padding: .25rem;\n}\n\n.add-task-btns-container button > span {\n    font-size: .9rem!important;\n}\n\n.add-task-btns-container > button:nth-child(2) span {\n    color: var(--mariner);\n}\n\n.select-project-btn {\n    max-width: 75px;\n    overflow: hidden;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.scheduler,\n.carrier {\n    max-width: 210px;\n    width: 100%;    \n}\n\n.scheduler,\n.carrier,\n.labeler,\n.prio-setter {\n    background-color: var(--light92);\n    border-radius: 3px;\n    z-index: 2;\n    position: relative;\n    margin: 0 0 0 0;\n    box-shadow: 0 1px 8px 0 rgb(0 0 0 / 8%),\n        0 0 1px 0 rgb(0 0 0 / 30%);\n    display: none;\n}\n\n.scheduler > *,\n.carrier > * {\n    width: 100%;\n    text-align: left;\n    padding: .5rem .5rem .5rem .5rem;\n}\n\n.sched {\n    display: flex;\n    justify-content: space-between;\n}\n\n.sched span:nth-child(2) {\n    text-align: right;\n    color: gray;\n}\n\n.scheduler input[type=\"date\"]::-webkit-calendar-picker-indicator {\n    opacity: .4;\n    cursor: pointer;\n}\n\n.scheduler input[type=\"date\"]::-webkit-calendar-picker-indicator:hover {\n    opacity: 1;\n}\n\n.scheduler .sched-custom {\n    display: flex;\n}\n\n.scheduler .sched-custom button {\n    border: 1px solid var(--transparent1);\n}\n\n.scheduler .sched-custom input {\n    background: transparent;\n}\n\n.scheduler .sched-custom button > span,\n.carrier span,\n.labeler span,\n.prio-setter span {\n    font-size: .9rem!important;\n}\n\n.prio-setter button:first-child span {\n    color: var(--auburn);\n}\n\n.prio-setter button:nth-child(2) span {\n    color: var(--sun);\n}\n\n.prio-setter button:nth-child(3) span {\n    color: var(--mariner);\n}\n\n.prio-setter button:nth-child(4) span {\n    color: gray;\n}\n\n.carrier {\n    margin: 0 0 0 -.7rem;\n    max-width: 160px;\n    width: 100%;\n}\n\n.carrier button,\n.labeler button,\n.prio-setter button {\n    display: flex;\n    align-items: center;\n}\n\n.carrier u,\n.labeler u,\n.prio-setter u {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    margin: 0 0 0 .25rem;\n}\n\n.labeler,\n.prio-setter {\n    background-color: transparent;\n    border: none;\n    box-shadow: none;\n}\n\n.labeler div,\n.prio-setter div {\n    max-width: 160px;\n    width: 100%; \n    display: flex;\n    flex-direction: column;\n    margin: 0 1.8rem 0 auto;\n    background-color: var(--light92);\n    box-shadow: 0 1px 8px 0 rgb(0 0 0 / 8%),\n        0 0 1px 0 rgb(0 0 0 / 30%);\n    border-radius: 3px;\n}\n\n.prio-setter div {\n    margin: 0 0 0 auto;\n    max-width: 88px;\n}\n\n.prio-setter u {\n    text-decoration: none;\n}\n\n.labeler button,\n.prio-setter button {\n    text-align: left;\n    padding: .5rem;\n}\n\n.scheduler .sched-custom button:hover > span,\n.scheduler .sched-custom button:focus-visible > span {\n    color: var(--laurel);\n}\n\n.add-task-div.display-scheduler .scheduler {\n    display: inherit;\n}\n\n.add-task-div.display-carrier .carrier,\n.add-task-div.display-labeler .labeler,\n.add-task-div.display-prio-setter .prio-setter {\n    display: block;\n}\n\n.add-task-div .selected,\n.add-task-div .active {\n    background-color: var(--transparent1);\n}\n\n.add-task-main-btns-container {\n    padding: .5rem 0 .5rem 0;\n}\n\n.add-task-main-btns-container button {\n    padding: .25rem;\n}\n\n.add-task-main-btns-container button:first-child {\n    background-color: var(--malibu);\n    border: 1px solid var(--transparent2);\n}\n\n.container.add-triggered .add-task-btn-div {\n    display: none;\n}\n\n.container:not(.add-triggered) .add-task-div,\n.container:not(.add-triggered) .add-task-main-btns-container {\n    display: none;\n}\n\n.quick-add-todo,\n.project-creator,\n.label-creator,\n.todo-editor,\n.project-editor,\n.label-editor {\n    display: none;\n    position: absolute;\n    place-items: center;\n    height: 100%;\n    width: 100%;\n    background-color: var(--transparent2);\n    z-index: 999;\n}\n\n.quick-add-todo > *,\n.quick-add-todo input {\n    width: 100%;\n}\n\n.quick-add-todo > div {\n    background-color: var(--light92);\n    max-width: 480px;\n    width: 100%;\n    border-radius: 3px;\n    padding: .5rem .5rem .5rem .5rem;\n}\n\n.quick-add-todo > div > *:not(:first-child) {\n    margin: .5rem 0 0 0;\n}\n\n.quick-add-todo button {\n    padding: .25rem;\n}\n\n.quick-add-todo button:first-child {\n    background-color: var(--mariner);\n}\n\n.quick-add-todo button:hover,\n.quick-add-todo button:focus-visible {\n    color: var(--light92);\n}\n\n.quick-add-todo.on {\n    display: grid;\n}\n\n.notifications {\n    display: none;\n    position: absolute;\n    inset: 0;\n    background-color: transparent;\n    z-index: 999;\n}\n\n.notif-container {\n    display: flex;\n    flex-direction: column;\n    background-color: var(--light92);\n    margin: 40px 0 auto auto;\n    padding: .5rem;\n    max-width: 420px;\n    width: 100%;\n    max-height: 320px;\n    overflow-x: hidden;\n    overflow-y: auto;\n    box-shadow: 0 1px 8px 0 rgb(0 0 0 / 8%),\n        0 0 1px 0 rgb(0 0 0 / 30%);\n    border-radius: 3px;\n}\n\n.notif-container nav {\n    display: flex;\n    align-items: center;\n    padding: 0 0 .25rem 0;\n    border-bottom: 1px solid var(--transparent2);\n}\n\n.notif-container nav > * {\n    font-size: .9rem;\n    cursor: pointer;\n}\n\n.notif-container button:first-of-type{\n    margin: 0 0 0 .5rem;\n}\n\n.nav-btn-notification small {\n    position: absolute; \n    color: var(--auburn);\n    margin-left: -.85rem; \n    background-color: var(--malibu);\n    padding: 0 1px;\n}\n\n.nav-btn-notification:hover small,\n.nav-btn-notification:focus-visible small {\n    background-color: transparent!important;\n    color: var(--light92)!important;\n    font-weight: bold;\n}\n\n.read-all-btn {\n    margin: 0 0 0 auto!important;\n}\n\n.read-all-btn span {\n    font-size: 1.2rem;\n}\n\n.notif-output {\n    margin: 0 .25rem;\n    overflow-y: auto;\n    /* overflow-x: hidden; */\n}\n\n.notif-output > * {\n    margin: .25rem 0 0 0;\n    border-bottom: 1px solid var(--transparent1);\n    padding: 0 0 .25rem 0;\n    \n}\n\n.notif {\n    display: flex;\n    flex-direction: column;\n}\n\n.notif > *,\n.notif-extra button span{\n    font-size: .9rem;  \n}\n\n.notif > span {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.notif-extra {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.notif small {\n    color: var(--auburn);\n}\n\n.notifications.on {\n    display: flex;\n\n}\n\n.app.search .add-task-btn-div{\n    display: none;\n}\n\n.project-creator > div,\n.label-creator > div,\n.todo-editor > div,\n.project-editor > div,\n.label-editor > div {\n    background-color: var(--light92);\n    max-width: 420px;\n    width: 100%;\n    border-radius: 3px;\n}\n\n.project-creator > div > *,\n.label-creator > div > *,\n.todo-editor > div > *,\n.project-editor > div > *,\n.label-editor > div > * {\n    padding: .5rem;\n    margin: 0 0 .25rem 0;\n}\n\n.project-creator > div > *:first-child, \n.project-creator > div > *:nth-child(2),\n.label-creator > div > *:first-child, \n.label-creator > div > *:nth-child(2),\n.todo-editor > div > *:first-child, \n.todo-editor > div > *:nth-child(2),\n.project-editor > div > *:first-child,\n.project-editor > div > *:nth-child(2),\n.label-editor > div > *:first-child,\n.label-editor > div > *:nth-child(2) {\n    border-bottom: 1px solid var(--transparent1);\n}\n\n.project-creator > div,\n.project-input,\n.label-creator > div,\n.label-input,\n.todo-editor > div,\n.todo-editor-input,\n.project-editor > div,\n.project-editor-input,\n.label-editor > div,\n.label-editor-input {\n    display: flex;\n    flex-direction: column;\n}\n\n.project-input > *,\n.label-input > *,\n.todo-editor-input > *,\n.project-editor-input > *,\n.label-editor-input > * {\n    margin: 0 0 .25rem 0;\n}\n\n.project-input input,\n.label-input input,\n.todo-editor-input input,\n.todo-editor-input select,\n.project-editor-input input,\n.label-editor-input input {\n    border: none;\n    outline: none;\n    border-radius: 2px;\n    padding: .25rem;\n}\n\n.todo-editor-input {\n    overflow-y: auto;\n}\n\n.todo-editor-input {\n    padding-top: 0!important;\n}\n\n.todo-editor-input label {\n    margin: .25rem 0 .1rem 0;\n}\n\n.project-buttons,\n.label-buttons,\n.todo-editor-buttons,\n.update-project-buttons,\n.update-label-buttons {\n    display: flex;\n    justify-content: flex-end;    \n    margin-bottom: 0!important;\n}\n\n.project-creator button,\n.label-creator button,\n.todo-editor button,\n.project-editor button,\n.label-editor button {\n    padding: .25rem;\n    margin: 0 0 0 .25rem;\n    background-color: var(--transparent1);\n}\n\n.project-creator button:first-child,\n.label-creator button:first-child,\n.todo-editor button:first-child,\n.project-editor button:first-child,\n.label-editor button:first-child {\n    background-color: var(--mariner);\n}\n\n.update-project-buttons button:nth-child(3),\n.update-label-buttons button:nth-child(3) {\n    background-color: var(--auburn);\n}\n\n.project-creator.on,\n.label-creator.on,\n.todo-editor.on,\n.project-editor.on,\n.label-editor.on {\n    display: grid;\n}\n\n.project-input input:focus-visible,\n.label-input input:focus-visible,\n.todo-editor-input input:focus-visible,\n.project-editor-input input:focus-visible,\n.label-editor-input input:focus-visible {\n    outline: 1px solid var(--transparent2);\n}\n\n@media only screen and (max-width: 750px) {\n    .nav-comp {\n        padding: .5rem .5rem .5rem .5rem;\n    }\n    .info-comp {\n        padding: 1rem .25rem .25rem .25rem;\n        position: absolute;\n        z-index: 1000;\n        top: 47.59px;\n        bottom: 0;\n        display: none;\n    }\n    .info-comp.show-nav {\n        display: flex;\n    }\n    .info-comp > * {\n        width: 294px;\n    }\n    .container > header {\n        padding: 1rem 0 .5rem 0;\n    }\n    .container {\n        padding: 0 1rem 0 1rem;\n    }\n    .quick-add-todo > div {\n        max-width: 400px;\n    }\n}\n\n@media only screen and (max-width: 550px) {\n    .info-comp > * {\n        width: 242px;\n    }\n    .search-input {\n        width: 180px;\n    }\n    .search-input:focus {\n        width: 180px;\n    }\n    .quick-add-todo > div {\n        max-width: 300px;\n    }\n    .notif-container {\n        max-width: 310px;\n    }\n}\n\n@media only screen and (max-width: 321px) {\n    .search-input {\n        max-width: 135px;\n    }\n    .search-input:focus {\n        max-width: 135px;\n    }\n    .quick-add-todo > div {\n        max-width: 270px;\n    }\n    .notif-container {\n        max-width: 270px;\n    }\n}\n\n@media only screen and (max-height: 420px) {\n    .todo-editor-input {\n        max-height: 180px;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,0BAA0B;IAC1B,0BAA0B;IAC1B,uBAAuB;IACvB,4BAA4B;IAC5B,0BAA0B;IAC1B,6BAA6B;IAC7B,6BAA6B;IAC7B,4BAA4B;IAC5B,wBAAwB;IACxB,8BAA8B;IAC9B,8BAA8B;;IAE9B,4BAA4B;IAC5B,2BAA2B;AAC/B;;AAEA;IACI,sBAAsB;IACtB,UAAU;IACV,SAAS;AACb;;AAEA;;IAEI,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,mCAAmC;IACnC,sBAAsB;IACtB,kBAAkB;AACtB;;AAEA;;IAEI,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,6BAA6B;AACjC;;AAEA;;IAEI,eAAe;AACnB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;;IAEI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ,aAAa;AACjB;;AAEA;;;;IAII,oBAAoB;AACxB;;AAEA;IACI,8BAA8B;IAC9B,WAAW;IACX,8BAA8B;IAC9B,mCAAmC;AACvC;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,mCAAmC;AACvC;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,iBAAiB;IACjB,UAAU;AACd;;AAEA;IACI,6BAA6B;IAC7B,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,aAAa;AACjB;;AAEA;;IAEI,oBAAoB;AACxB;;AAEA;IACI,0BAA0B;IAC1B,oBAAoB;IACpB,qCAAqC;AACzC;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,cAAc;AAClB;;AAEA;;;IAGI,gCAAgC;AACpC;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,OAAO;IACP,gCAAgC;IAChC,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,gCAAgC;IAChC,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,sBAAsB;AAC1B;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,qBAAqB;IACrB,UAAU;IACV,aAAa;AACjB;;AAEA;;IAEI,0BAA0B;IAC1B,0BAA0B;AAC9B;;AAEA;;IAEI,gBAAgB;AACpB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;;IAEI,wBAAwB;AAC5B;;;AAGA;IACI,oBAAoB;AACxB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,gCAAgC;IAChC,YAAY;IACZ,gBAAgB;IAChB,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;IACnB,gBAAgB;IAChB,uBAAuB;IACvB,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,UAAU;IACV,kBAAkB;AACtB;;AAEA;;IAEI,qCAAqC;AACzC;;AAEA;;;IAGI,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;;IAEI,uCAAuC;AAC3C;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,kBAAkB;IAClB,uBAAuB;IACvB,qCAAqC;AACzC;;AAEA;IACI,oBAAoB;IACpB,uBAAuB;IACvB,0BAA0B;AAC9B;;AAEA;IACI,aAAa;IACb,OAAO;IACP,sBAAsB;IACtB,2BAA2B;IAC3B,mBAAmB;IACnB,gBAAgB;IAChB,sBAAsB;;AAE1B;;AAEA;IACI,gBAAgB;IAChB,WAAW;AACf;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,sBAAsB;IACtB,gBAAgB;IAChB,MAAM;IACN,gCAAgC;IAChC,UAAU;AACd;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,cAAc;IACd,uBAAuB;IACvB,2BAA2B;IAC3B,mBAAmB;IACnB,4CAA4C;AAChD;;AAEA;;IAEI,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,WAAW;IACX,wBAAwB;IACxB,UAAU;IACV,kBAAkB;AACtB;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,qCAAqC;AACzC;;AAEA;;IAEI,yBAAyB;IACzB,qCAAqC;AACzC;;AAEA;IACI,UAAU;IACV,iBAAiB;IACjB,eAAe;IACf,kBAAkB;IAClB,0BAA0B;IAC1B,kBAAkB;IAClB,YAAY;IACZ,wBAAwB;AAC5B;;AAEA;;IAEI,mBAAmB;AACvB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,OAAO;IACP,sBAAsB;AAC1B;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,oBAAoB;AACxB;;AAEA;;;IAGI,WAAW;AACf;;AAEA;;;IAGI,0BAA0B;AAC9B;;AAEA;;IAEI,0BAA0B;AAC9B;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,yBAAyB;IACzB,qBAAqB;IACrB,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,iBAAiB;AACrB;;AAEA;;IAEI,mBAAmB;AACvB;;AAEA;;IAEI,qCAAqC;AACzC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,gBAAgB;IAChB,WAAW;AACf;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,oBAAoB;AACxB;;AAEA;;;IAGI,6BAA6B;AACjC;;AAEA;;IAEI,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,OAAO;IACP,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;;IAEhB,YAAY;AAChB;;AAEA;IACI,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,oBAAoB;AACxB;;AAEA;;IAEI,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,oBAAoB;IACpB,0BAA0B;IAC1B,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,0BAA0B;AAC9B;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,0BAA0B;IAC1B,eAAe;AACnB;;AAEA;;IAEI,aAAa;AACjB;;AAEA;IACI,qCAAqC;IACrC,kBAAkB;IAClB,4BAA4B;IAC5B,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;;IAEI,WAAW;IACX,aAAa;IACb,YAAY;IACZ,gBAAgB;IAChB,gCAAgC;AACpC;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,qCAAqC;IACrC,eAAe;AACnB;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,mBAAmB;IACnB,gBAAgB;IAChB,uBAAuB;AAC3B;;AAEA;;IAEI,gBAAgB;IAChB,WAAW;AACf;;AAEA;;;;IAII,gCAAgC;IAChC,kBAAkB;IAClB,UAAU;IACV,kBAAkB;IAClB,eAAe;IACf;kCAC8B;IAC9B,aAAa;AACjB;;AAEA;;IAEI,WAAW;IACX,gBAAgB;IAChB,gCAAgC;AACpC;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,iBAAiB;IACjB,WAAW;AACf;;AAEA;IACI,WAAW;IACX,eAAe;AACnB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,qCAAqC;AACzC;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;;;;IAII,0BAA0B;AAC9B;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,oBAAoB;IACpB,gBAAgB;IAChB,WAAW;AACf;;AAEA;;;IAGI,aAAa;IACb,mBAAmB;AACvB;;AAEA;;;IAGI,mBAAmB;IACnB,gBAAgB;IAChB,uBAAuB;IACvB,oBAAoB;AACxB;;AAEA;;IAEI,6BAA6B;IAC7B,YAAY;IACZ,gBAAgB;AACpB;;AAEA;;IAEI,gBAAgB;IAChB,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,gCAAgC;IAChC;kCAC8B;IAC9B,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;;IAEI,gBAAgB;IAChB,cAAc;AAClB;;AAEA;;IAEI,oBAAoB;AACxB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;;;IAGI,cAAc;AAClB;;AAEA;;IAEI,qCAAqC;AACzC;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,+BAA+B;IAC/B,qCAAqC;AACzC;;AAEA;IACI,aAAa;AACjB;;AAEA;;IAEI,aAAa;AACjB;;AAEA;;;;;;IAMI,aAAa;IACb,kBAAkB;IAClB,mBAAmB;IACnB,YAAY;IACZ,WAAW;IACX,qCAAqC;IACrC,YAAY;AAChB;;AAEA;;IAEI,WAAW;AACf;;AAEA;IACI,gCAAgC;IAChC,gBAAgB;IAChB,WAAW;IACX,kBAAkB;IAClB,gCAAgC;AACpC;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,gCAAgC;AACpC;;AAEA;;IAEI,qBAAqB;AACzB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,QAAQ;IACR,6BAA6B;IAC7B,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,gCAAgC;IAChC,wBAAwB;IACxB,cAAc;IACd,gBAAgB;IAChB,WAAW;IACX,iBAAiB;IACjB,kBAAkB;IAClB,gBAAgB;IAChB;kCAC8B;IAC9B,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,qBAAqB;IACrB,4CAA4C;AAChD;;AAEA;IACI,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,oBAAoB;IACpB,oBAAoB;IACpB,+BAA+B;IAC/B,cAAc;AAClB;;AAEA;;IAEI,uCAAuC;IACvC,+BAA+B;IAC/B,iBAAiB;AACrB;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,wBAAwB;AAC5B;;AAEA;IACI,oBAAoB;IACpB,4CAA4C;IAC5C,qBAAqB;;AAEzB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;;IAEI,gBAAgB;AACpB;;AAEA;IACI,mBAAmB;IACnB,gBAAgB;IAChB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,aAAa;;AAEjB;;AAEA;IACI,aAAa;AACjB;;AAEA;;;;;IAKI,gCAAgC;IAChC,gBAAgB;IAChB,WAAW;IACX,kBAAkB;AACtB;;AAEA;;;;;IAKI,cAAc;IACd,oBAAoB;AACxB;;AAEA;;;;;;;;;;IAUI,4CAA4C;AAChD;;AAEA;;;;;;;;;;IAUI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;;;;;IAKI,oBAAoB;AACxB;;AAEA;;;;;;IAMI,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;;;;;IAKI,aAAa;IACb,yBAAyB;IACzB,0BAA0B;AAC9B;;AAEA;;;;;IAKI,eAAe;IACf,oBAAoB;IACpB,qCAAqC;AACzC;;AAEA;;;;;IAKI,gCAAgC;AACpC;;AAEA;;IAEI,+BAA+B;AACnC;;AAEA;;;;;IAKI,aAAa;AACjB;;AAEA;;;;;IAKI,sCAAsC;AAC1C;;AAEA;IACI;QACI,gCAAgC;IACpC;IACA;QACI,kCAAkC;QAClC,kBAAkB;QAClB,aAAa;QACb,YAAY;QACZ,SAAS;QACT,aAAa;IACjB;IACA;QACI,aAAa;IACjB;IACA;QACI,YAAY;IAChB;IACA;QACI,uBAAuB;IAC3B;IACA;QACI,sBAAsB;IAC1B;IACA;QACI,gBAAgB;IACpB;AACJ;;AAEA;IACI;QACI,YAAY;IAChB;IACA;QACI,YAAY;IAChB;IACA;QACI,YAAY;IAChB;IACA;QACI,gBAAgB;IACpB;IACA;QACI,gBAAgB;IACpB;AACJ;;AAEA;IACI;QACI,gBAAgB;IACpB;IACA;QACI,gBAAgB;IACpB;IACA;QACI,gBAAgB;IACpB;IACA;QACI,gBAAgB;IACpB;AACJ;;AAEA;IACI;QACI,iBAAiB;IACrB;AACJ","sourcesContent":[":root {\n    --light92: hsl(0, 0%, 92%);\n    --light88: hsl(0, 0%, 88%);\n    --dark: hsl(0, 0%, 12%);\n    --malibu: hsl(192, 93%, 72%);\n    --auburn: hsl(0, 75%, 65%);\n    --mariner: hsl(216, 75%, 51%);\n    --laurel: hsl(120, 100%, 25%);\n    --purple: hsl(264, 61%, 47%);\n    --sun: hsl(34, 93%, 48%);\n    --transparent1: rgba(0,0,0,.1);\n    --transparent2: rgba(0,0,0,.2);\n\n    --background: var(--light92);\n    --foreground: var(--malibu);\n}\n\n*, *:before, *:after {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;  \n}\n\nhtml,\nbody {\n    overflow-x: hidden;\n}\n\nbody {\n    min-height: 100vh;\n    background-color: var(--background);\n    font-family:sans-serif;\n    color: var(--dark);\n}\n\nbutton,\n.search-input {\n    outline: none;\n    border: none;\n    border-radius: 3px;\n    font-family:sans-serif;\n}\n\nbutton {\n    padding: .125rem;\n    color: var(--dark);\n    background-color: transparent;\n}\n\nbutton,\n.ic-div {\n    cursor: pointer;\n}\n\nspan.mid {\n    vertical-align: middle;\n}\n\nspan,\nh1 {\n    user-select: none;\n}\n\n.app {\n    display: flex;\n    flex-direction: column;\n    width: 100vw;\n    height: 100vh;\n}\n\n.nav-comp ,\n.nc-left,\n.search-div,\n.nc-right {\n    display: inline-flex;\n}\n\n.nav-comp {\n    justify-content: space-between;\n    width: 100%;\n    padding: .5rem 3rem .5rem 3rem;\n    background-color: var(--foreground);\n}\n\n.nc-left > * {\n    margin: 0 .25rem 0 0;\n}\n\n.nc-right > * {\n    margin: 0 0 0 .25rem;\n}\n\n.nc-right button:first-child {\n    margin: 0;\n}\n\n.search-div {\n    height: 100%;\n    background-color: var(--foreground);\n}\n\n.search-div > span:first-child {\n    align-self: center;\n    cursor: text;\n    margin: .1rem;\n    font-size: 1.6rem;\n    z-index: 2;\n}\n\n.search-div button {\n    margin: .2rem 0 .2rem -1.5rem;\n    height: 20px;\n    width: 20px;\n    align-self: center;\n    display: none;\n}\n\n.search-div button:hover,\n.search-div button:focus-visible {\n    color: var(--auburn);\n}\n\n.search-input {\n    padding: 0 1.6rem 0 1.8rem;\n    margin-left: -1.9rem;\n    background-color: var(--transparent1);\n}\n\n.search-input::-webkit-search-cancel-button {\n    -webkit-appearance: none;\n}\n\n.search-input:not(:placeholder-shown) + button {\n    display: block;\n}\n\n.search-div:focus-within .search-input,\n.search-div:hover .search-input,\n.search-input:not(:placeholder-shown){\n    background-color: var(--light92);\n}\n\n.search-div button span {\n    font-size: 1rem;\n}\n\n.app-body {\n    display: flex;\n    flex: 1;\n    max-height: calc(100% - 46.59px);\n    overflow-y: hidden;\n}\n\n.wrapper {\n    height: 100%;\n    width: 100%;\n    display: flex;\n}\n\n.info-comp {\n    display: flex;\n    flex-direction: column;\n    padding: 2rem .25rem 0 2.8rem;\n    background-color: var(--light88);\n    overflow-y: auto;\n}\n\n.info-comp > * {\n    text-align: left;\n    font-size: .9rem;\n    width: 294px;\n    padding: 5px;\n}\n\n.info-comp > * > samp {\n    float: right;\n    opacity: .5;\n    margin: 4px 1rem 4px 0;\n}\n\n.ic-div {\n    margin: .25rem 0 0 0;\n}\n\n.info-comp > div:first-of-type{\n    margin: 1rem 0 0 0;\n}\n\n.ic-span {\n    margin: 0 .25rem 0 0;\n}\n\n.info-comp > button:first-child span {\n    color: var(--mariner);\n}\n\n.info-comp > button:nth-child(2) span {\n    color: var(--laurel);\n}\n\n.info-comp > button:nth-child(3) span {\n    color: var(--purple);\n}\n\n.info-comp .active {\n    background-color: var(--malibu);\n}\n\n.opa {\n    opacity: .5;\n}\n\n.ic-add-btn {\n    float: right;\n    margin: 0px .5rem 0 0;\n    padding: 0;\n    display: none;\n}\n\n.ic-add-btn:hover + strong,\n.ic-add-btn:focus-visible + strong {\n    text-decoration: underline;\n    text-underline-offset: 30%;\n}\n\n.info-comp:focus-within .ic-add-btn,\n.info-comp:hover .ic-add-btn{\n    display: inherit;\n}\n\n.ic-div > div {\n    display: none;\n}\n\n.ic-div > div.show {\n    display: flex;\n    flex-direction: column;\n}\n\n.ic-project > span.rotate,\n.ic-label > span.rotate {\n    transform: rotate(90deg);\n}\n\n\n.show {\n    margin: .75rem 0 0 0;\n}\n\n.show > div {\n    text-align: left;\n    display: flex;\n    padding: .5rem .5rem .5rem .5rem;\n    height: 34px;\n    font-size: .9rem;\n    align-items: center;\n    border-radius: 3px;\n}\n\nspan.unique {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    align-self: center;\n    margin-right: .2rem;\n}\n\n.show button {\n    padding: 0;\n    visibility: hidden;\n}\n\n.show > div:hover,\n.show > div:focus-visible {\n    background-color: var(--transparent2);\n}\n\n.show > div:hover button,\n.show > div:focus-visible button,\n.show > div:focus-within button{\n    visibility: visible;\n    margin-left: auto;\n}\n\n.show button:hover,\n.show button:focus-visible {\n    background-color: transparent!important;\n}\n\n.bullet {\n    min-width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    margin: 0 .7rem 0 .5rem;\n    background-color: var(--transparent2);\n}\n\n.tag {\n    transform: scale(.8);\n    margin: 0 .2rem 0 .2rem;\n    color: var(--transparent2);\n}\n\n.container {\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    overflow-y: auto;\n    padding: 0 2rem 0 2rem;\n\n}\n\n.container > * {\n    max-width: 800px;\n    width: 100%;\n}\n\n.container > footer {\n    margin-top: auto;\n}\n\n.container > header {\n    padding: 2rem 0 1rem 0;\n    position: sticky;\n    top: 0;\n    background-color: var(--light92);\n    z-index: 3;\n}\n\nh1 {\n    font-size: 1.3rem;\n}\n\n.todo {\n    display: flex;\n    padding: 2px 0;\n    margin: .5rem 0 .5rem 0;\n    justify-content: flex-start;\n    flex-direction: row;\n    border-bottom: 1px solid var(--transparent1);\n}\n\n.todo,\n.todo * {\n    cursor: pointer;\n}\n\n.checkbox-btn { \n    height: 18px;\n    max-width: 18px;\n    width: 100%;\n    margin: .27rem .7rem 0 0;\n    z-index: 2;\n    position: relative;\n}\n\n.checkbox-btn.prio1 {\n    border: 2px solid var(--auburn);\n}\n\n.checkbox-btn.prio2 {\n    border: 2px solid var(--sun);\n}\n\n.checkbox-btn.prio3 {\n    border: 2px solid var(--mariner);\n}\n\n.checkbox-btn.prio4 {\n    border: 2px solid var(--transparent2);\n}\n\n.checkbox-btn:hover,\n.checkbox-btn:focus-visible {\n    border-color: transparent;\n    background-color: var(--transparent1);\n}\n\n.checkbox-btn + span {\n    padding: 0;\n    line-height: 1rem;\n    font-size: 2rem;\n    position: relative;\n    color: var(--transparent2);\n    visibility: hidden;\n    float: right;\n    margin: -.9rem 0 0 -1rem;    \n}\n\n.checkbox-btn:hover + span,\n.checkbox-btn:focus-visible + span {\n    visibility: visible;\n}\n\n.checkbox-btn:active + span{\n    color: var(--laurel);\n}\n\n.todo-text {\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n}\n\n.todo-text > label {\n    line-height: 1.4rem;\n}\n\n.todo-text-note {\n    text-indent: 1rem;\n    font-size: .9rem;\n    margin: 0 0 .25rem 0;\n}\n\n.todo-text-note,\n.todo-text-note > span,\n.todo-text small {\n    color: gray;\n}\n\n.todo-text-note > span,\nem,\nem > span {\n    font-size: .9rem!important;\n}\n\n.todo-text small:hover,\n.todo-text small:focus-visible {\n    text-decoration: underline;\n}\n\nem {\n    width: 100%;\n}\n\n.sched-due {\n    color: var(--auburn);\n}\n\n.sched-today {\n    color: var(--laurel);\n}\n\n.sched-upcom {\n    color: var(--purple);\n}\n\n.todo-tools-container {\n    display: flex;\n    justify-content: flex-end;\n    align-items: flex-end;\n    margin: -20px 0 0 0;\n    visibility: hidden;\n}\n\n.todo-tools-container * {\n    color: gray;\n}\n\n.tool-span {\n    font-size: 1.2rem;\n}\n\n.todo:hover .todo-tools-container,\n.todo:focus-within .todo-tools-container {\n    visibility: visible;\n}\n\nbutton:hover,\nbutton:focus-visible {\n    background-color: var(--transparent2);\n}\n\nbutton:focus-visible {\n    outline: auto;\n}\n\n.add-task-btn {\n    text-align: left;\n    color: gray;\n}\n\n.add-task-btn * {\n    padding: .1rem;\n}\n\n.add-task-btn span {\n    border-radius: 50%;\n    padding: 0;\n    color: var(--auburn);\n}\n\n.add-task-btn:hover,\n.add-task-btn:focus-visible,\n.add-task-btn span {\n    background-color: transparent;\n}\n\n.add-task-btn:hover span,\n.add-task-btn:focus-visible span {\n    color: var(--mariner);\n}\n\n.empty-state-div {\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    justify-content: center;\n    align-items: center;\n}\n\n.empty-state-div img {\n    max-width: 180px;\n    \n    height: auto;\n}\n\n.empty-state-div h4 {\n    font-weight: normal;\n    color: gray;\n}\n\n.empty-state-div *:nth-child(n+2) {\n    margin: .25rem 0 0 0;\n}\n\n.empty-state-div *:nth-child(n+2),\n.container footer p {\n    text-align: center;\n}\n\n.empty-state-div p {\n    font-size: .9rem;\n    color: darkgray;\n}\n\n.container footer {\n    color: var(--auburn);\n    font-size: .9rem!important;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: .25rem 0 .75rem 0;\n}\n\n.container footer span {\n    font-size: 1.25rem!important;\n}\n\n.container footer p {\n    text-decoration: underline;\n    cursor: pointer;\n}\n\n.container:not(.empty) .empty-state-div,\n.container:not(.empty) footer {\n    display: none;\n}\n\n.add-task-div {\n    border: 1px solid var(--transparent2);\n    border-radius: 3px;\n    padding: 0 .5rem .5rem .5rem;\n    height: 68.48px;\n    margin-top: 1rem;\n}\n\n.add-task-div > * {\n    margin-top: .5rem;\n}\n\n.add-task-div input,\n.quick-add-todo input {\n    width: 100%;\n    outline: none;\n    border: none;\n    font-size: .9rem;\n    background-color: var(--light92);\n}\n\n.add-task-btns-container {\n    display: flex;\n    justify-content: space-between;\n}\n\n.add-task-btns-container div > button {\n    border: 1px solid var(--transparent2);\n    padding: .25rem;\n}\n\n.add-task-btns-container button > span {\n    font-size: .9rem!important;\n}\n\n.add-task-btns-container > button:nth-child(2) span {\n    color: var(--mariner);\n}\n\n.select-project-btn {\n    max-width: 75px;\n    overflow: hidden;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.scheduler,\n.carrier {\n    max-width: 210px;\n    width: 100%;    \n}\n\n.scheduler,\n.carrier,\n.labeler,\n.prio-setter {\n    background-color: var(--light92);\n    border-radius: 3px;\n    z-index: 2;\n    position: relative;\n    margin: 0 0 0 0;\n    box-shadow: 0 1px 8px 0 rgb(0 0 0 / 8%),\n        0 0 1px 0 rgb(0 0 0 / 30%);\n    display: none;\n}\n\n.scheduler > *,\n.carrier > * {\n    width: 100%;\n    text-align: left;\n    padding: .5rem .5rem .5rem .5rem;\n}\n\n.sched {\n    display: flex;\n    justify-content: space-between;\n}\n\n.sched span:nth-child(2) {\n    text-align: right;\n    color: gray;\n}\n\n.scheduler input[type=\"date\"]::-webkit-calendar-picker-indicator {\n    opacity: .4;\n    cursor: pointer;\n}\n\n.scheduler input[type=\"date\"]::-webkit-calendar-picker-indicator:hover {\n    opacity: 1;\n}\n\n.scheduler .sched-custom {\n    display: flex;\n}\n\n.scheduler .sched-custom button {\n    border: 1px solid var(--transparent1);\n}\n\n.scheduler .sched-custom input {\n    background: transparent;\n}\n\n.scheduler .sched-custom button > span,\n.carrier span,\n.labeler span,\n.prio-setter span {\n    font-size: .9rem!important;\n}\n\n.prio-setter button:first-child span {\n    color: var(--auburn);\n}\n\n.prio-setter button:nth-child(2) span {\n    color: var(--sun);\n}\n\n.prio-setter button:nth-child(3) span {\n    color: var(--mariner);\n}\n\n.prio-setter button:nth-child(4) span {\n    color: gray;\n}\n\n.carrier {\n    margin: 0 0 0 -.7rem;\n    max-width: 160px;\n    width: 100%;\n}\n\n.carrier button,\n.labeler button,\n.prio-setter button {\n    display: flex;\n    align-items: center;\n}\n\n.carrier u,\n.labeler u,\n.prio-setter u {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    margin: 0 0 0 .25rem;\n}\n\n.labeler,\n.prio-setter {\n    background-color: transparent;\n    border: none;\n    box-shadow: none;\n}\n\n.labeler div,\n.prio-setter div {\n    max-width: 160px;\n    width: 100%; \n    display: flex;\n    flex-direction: column;\n    margin: 0 1.8rem 0 auto;\n    background-color: var(--light92);\n    box-shadow: 0 1px 8px 0 rgb(0 0 0 / 8%),\n        0 0 1px 0 rgb(0 0 0 / 30%);\n    border-radius: 3px;\n}\n\n.prio-setter div {\n    margin: 0 0 0 auto;\n    max-width: 88px;\n}\n\n.prio-setter u {\n    text-decoration: none;\n}\n\n.labeler button,\n.prio-setter button {\n    text-align: left;\n    padding: .5rem;\n}\n\n.scheduler .sched-custom button:hover > span,\n.scheduler .sched-custom button:focus-visible > span {\n    color: var(--laurel);\n}\n\n.add-task-div.display-scheduler .scheduler {\n    display: inherit;\n}\n\n.add-task-div.display-carrier .carrier,\n.add-task-div.display-labeler .labeler,\n.add-task-div.display-prio-setter .prio-setter {\n    display: block;\n}\n\n.add-task-div .selected,\n.add-task-div .active {\n    background-color: var(--transparent1);\n}\n\n.add-task-main-btns-container {\n    padding: .5rem 0 .5rem 0;\n}\n\n.add-task-main-btns-container button {\n    padding: .25rem;\n}\n\n.add-task-main-btns-container button:first-child {\n    background-color: var(--malibu);\n    border: 1px solid var(--transparent2);\n}\n\n.container.add-triggered .add-task-btn-div {\n    display: none;\n}\n\n.container:not(.add-triggered) .add-task-div,\n.container:not(.add-triggered) .add-task-main-btns-container {\n    display: none;\n}\n\n.quick-add-todo,\n.project-creator,\n.label-creator,\n.todo-editor,\n.project-editor,\n.label-editor {\n    display: none;\n    position: absolute;\n    place-items: center;\n    height: 100%;\n    width: 100%;\n    background-color: var(--transparent2);\n    z-index: 999;\n}\n\n.quick-add-todo > *,\n.quick-add-todo input {\n    width: 100%;\n}\n\n.quick-add-todo > div {\n    background-color: var(--light92);\n    max-width: 480px;\n    width: 100%;\n    border-radius: 3px;\n    padding: .5rem .5rem .5rem .5rem;\n}\n\n.quick-add-todo > div > *:not(:first-child) {\n    margin: .5rem 0 0 0;\n}\n\n.quick-add-todo button {\n    padding: .25rem;\n}\n\n.quick-add-todo button:first-child {\n    background-color: var(--mariner);\n}\n\n.quick-add-todo button:hover,\n.quick-add-todo button:focus-visible {\n    color: var(--light92);\n}\n\n.quick-add-todo.on {\n    display: grid;\n}\n\n.notifications {\n    display: none;\n    position: absolute;\n    inset: 0;\n    background-color: transparent;\n    z-index: 999;\n}\n\n.notif-container {\n    display: flex;\n    flex-direction: column;\n    background-color: var(--light92);\n    margin: 40px 0 auto auto;\n    padding: .5rem;\n    max-width: 420px;\n    width: 100%;\n    max-height: 320px;\n    overflow-x: hidden;\n    overflow-y: auto;\n    box-shadow: 0 1px 8px 0 rgb(0 0 0 / 8%),\n        0 0 1px 0 rgb(0 0 0 / 30%);\n    border-radius: 3px;\n}\n\n.notif-container nav {\n    display: flex;\n    align-items: center;\n    padding: 0 0 .25rem 0;\n    border-bottom: 1px solid var(--transparent2);\n}\n\n.notif-container nav > * {\n    font-size: .9rem;\n    cursor: pointer;\n}\n\n.notif-container button:first-of-type{\n    margin: 0 0 0 .5rem;\n}\n\n.nav-btn-notification small {\n    position: absolute; \n    color: var(--auburn);\n    margin-left: -.85rem; \n    background-color: var(--malibu);\n    padding: 0 1px;\n}\n\n.nav-btn-notification:hover small,\n.nav-btn-notification:focus-visible small {\n    background-color: transparent!important;\n    color: var(--light92)!important;\n    font-weight: bold;\n}\n\n.read-all-btn {\n    margin: 0 0 0 auto!important;\n}\n\n.read-all-btn span {\n    font-size: 1.2rem;\n}\n\n.notif-output {\n    margin: 0 .25rem;\n    overflow-y: auto;\n    /* overflow-x: hidden; */\n}\n\n.notif-output > * {\n    margin: .25rem 0 0 0;\n    border-bottom: 1px solid var(--transparent1);\n    padding: 0 0 .25rem 0;\n    \n}\n\n.notif {\n    display: flex;\n    flex-direction: column;\n}\n\n.notif > *,\n.notif-extra button span{\n    font-size: .9rem;  \n}\n\n.notif > span {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.notif-extra {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.notif small {\n    color: var(--auburn);\n}\n\n.notifications.on {\n    display: flex;\n\n}\n\n.app.search .add-task-btn-div{\n    display: none;\n}\n\n.project-creator > div,\n.label-creator > div,\n.todo-editor > div,\n.project-editor > div,\n.label-editor > div {\n    background-color: var(--light92);\n    max-width: 420px;\n    width: 100%;\n    border-radius: 3px;\n}\n\n.project-creator > div > *,\n.label-creator > div > *,\n.todo-editor > div > *,\n.project-editor > div > *,\n.label-editor > div > * {\n    padding: .5rem;\n    margin: 0 0 .25rem 0;\n}\n\n.project-creator > div > *:first-child, \n.project-creator > div > *:nth-child(2),\n.label-creator > div > *:first-child, \n.label-creator > div > *:nth-child(2),\n.todo-editor > div > *:first-child, \n.todo-editor > div > *:nth-child(2),\n.project-editor > div > *:first-child,\n.project-editor > div > *:nth-child(2),\n.label-editor > div > *:first-child,\n.label-editor > div > *:nth-child(2) {\n    border-bottom: 1px solid var(--transparent1);\n}\n\n.project-creator > div,\n.project-input,\n.label-creator > div,\n.label-input,\n.todo-editor > div,\n.todo-editor-input,\n.project-editor > div,\n.project-editor-input,\n.label-editor > div,\n.label-editor-input {\n    display: flex;\n    flex-direction: column;\n}\n\n.project-input > *,\n.label-input > *,\n.todo-editor-input > *,\n.project-editor-input > *,\n.label-editor-input > * {\n    margin: 0 0 .25rem 0;\n}\n\n.project-input input,\n.label-input input,\n.todo-editor-input input,\n.todo-editor-input select,\n.project-editor-input input,\n.label-editor-input input {\n    border: none;\n    outline: none;\n    border-radius: 2px;\n    padding: .25rem;\n}\n\n.todo-editor-input {\n    overflow-y: auto;\n}\n\n.todo-editor-input {\n    padding-top: 0!important;\n}\n\n.todo-editor-input label {\n    margin: .25rem 0 .1rem 0;\n}\n\n.project-buttons,\n.label-buttons,\n.todo-editor-buttons,\n.update-project-buttons,\n.update-label-buttons {\n    display: flex;\n    justify-content: flex-end;    \n    margin-bottom: 0!important;\n}\n\n.project-creator button,\n.label-creator button,\n.todo-editor button,\n.project-editor button,\n.label-editor button {\n    padding: .25rem;\n    margin: 0 0 0 .25rem;\n    background-color: var(--transparent1);\n}\n\n.project-creator button:first-child,\n.label-creator button:first-child,\n.todo-editor button:first-child,\n.project-editor button:first-child,\n.label-editor button:first-child {\n    background-color: var(--mariner);\n}\n\n.update-project-buttons button:nth-child(3),\n.update-label-buttons button:nth-child(3) {\n    background-color: var(--auburn);\n}\n\n.project-creator.on,\n.label-creator.on,\n.todo-editor.on,\n.project-editor.on,\n.label-editor.on {\n    display: grid;\n}\n\n.project-input input:focus-visible,\n.label-input input:focus-visible,\n.todo-editor-input input:focus-visible,\n.project-editor-input input:focus-visible,\n.label-editor-input input:focus-visible {\n    outline: 1px solid var(--transparent2);\n}\n\n@media only screen and (max-width: 750px) {\n    .nav-comp {\n        padding: .5rem .5rem .5rem .5rem;\n    }\n    .info-comp {\n        padding: 1rem .25rem .25rem .25rem;\n        position: absolute;\n        z-index: 1000;\n        top: 47.59px;\n        bottom: 0;\n        display: none;\n    }\n    .info-comp.show-nav {\n        display: flex;\n    }\n    .info-comp > * {\n        width: 294px;\n    }\n    .container > header {\n        padding: 1rem 0 .5rem 0;\n    }\n    .container {\n        padding: 0 1rem 0 1rem;\n    }\n    .quick-add-todo > div {\n        max-width: 400px;\n    }\n}\n\n@media only screen and (max-width: 550px) {\n    .info-comp > * {\n        width: 242px;\n    }\n    .search-input {\n        width: 180px;\n    }\n    .search-input:focus {\n        width: 180px;\n    }\n    .quick-add-todo > div {\n        max-width: 300px;\n    }\n    .notif-container {\n        max-width: 310px;\n    }\n}\n\n@media only screen and (max-width: 321px) {\n    .search-input {\n        max-width: 135px;\n    }\n    .search-input:focus {\n        max-width: 135px;\n    }\n    .quick-add-todo > div {\n        max-width: 270px;\n    }\n    .notif-container {\n        max-width: 270px;\n    }\n}\n\n@media only screen and (max-height: 420px) {\n    .todo-editor-input {\n        max-height: 180px;\n    }\n}"],"sourceRoot":""}]);
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
  
    let today = new Date();
    today.setHours(0,0,0,0);
    today = Date.parse(today);
    console.log('test', today);

    let data = JSON.parse(localStorage.getItem('todos'));

    data.todolist.forEach((task) => {
        if(today == Date.parse(task.dueDate)){
            // fill main with task that is scheduled for today
            console.log('1')
        }
    });
    // here
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

const display = (() => {

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
    const addTaskBtnDiv = document.querySelector('#addTaskBtnDiv');
    const addTaskBtn = document.querySelector('#addTaskBtn');
    const emptyStateDiv = document.querySelector('#emptyStateDiv');
    const footer = document.querySelector('#footer');
    const help = document.querySelector('#help');

    return {
        div,
        header,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFRhcmdldC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kYXRhLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2V2ZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNzSDtBQUM3QjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsaURBQWlELGlDQUFpQyxpQ0FBaUMsOEJBQThCLG1DQUFtQyxpQ0FBaUMsb0NBQW9DLG9DQUFvQyxtQ0FBbUMsK0JBQStCLHFDQUFxQyxxQ0FBcUMscUNBQXFDLGtDQUFrQyxHQUFHLDBCQUEwQiw2QkFBNkIsaUJBQWlCLGdCQUFnQixLQUFLLGlCQUFpQix5QkFBeUIsR0FBRyxVQUFVLHdCQUF3QiwwQ0FBMEMsNkJBQTZCLHlCQUF5QixHQUFHLDRCQUE0QixvQkFBb0IsbUJBQW1CLHlCQUF5Qiw2QkFBNkIsR0FBRyxZQUFZLHVCQUF1Qix5QkFBeUIsb0NBQW9DLEdBQUcsc0JBQXNCLHNCQUFzQixHQUFHLGNBQWMsNkJBQTZCLEdBQUcsZUFBZSx3QkFBd0IsR0FBRyxVQUFVLG9CQUFvQiw2QkFBNkIsbUJBQW1CLG9CQUFvQixHQUFHLHFEQUFxRCwyQkFBMkIsR0FBRyxlQUFlLHFDQUFxQyxrQkFBa0IscUNBQXFDLDBDQUEwQyxHQUFHLGtCQUFrQiwyQkFBMkIsR0FBRyxtQkFBbUIsMkJBQTJCLEdBQUcsa0NBQWtDLGdCQUFnQixHQUFHLGlCQUFpQixtQkFBbUIsMENBQTBDLEdBQUcsb0NBQW9DLHlCQUF5QixtQkFBbUIsb0JBQW9CLHdCQUF3QixpQkFBaUIsR0FB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QUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxRQUFRLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxPQUFPLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsY0FBYyxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLE9BQU8sVUFBVSxNQUFNLE9BQU8sWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sT0FBTyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLFdBQVcsTUFBTSxRQUFRLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxLQUFLLE9BQU8sV0FBVyxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxRQUFRLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sT0FBTyxVQUFVLFlBQVksT0FBTyxPQUFPLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLE9BQU8sTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLE9BQU8sYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLFdBQVcsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxPQUFPLFVBQVUsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLE1BQU0sVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxPQUFPLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxjQUFjLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLFNBQVMsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLFNBQVMsVUFBVSxZQUFZLE9BQU8sY0FBYyxZQUFZLE9BQU8sY0FBYyxVQUFVLFlBQVksT0FBTyxTQUFTLFlBQVksT0FBTyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxTQUFTLFVBQVUsWUFBWSxhQUFhLE9BQU8sU0FBUyxVQUFVLFlBQVksYUFBYSxPQUFPLFNBQVMsWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLFNBQVMsVUFBVSxPQUFPLFNBQVMsWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxL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QixHQUFHLG1CQUFtQjtBQUM1RixTQUFTO0FBQ1Qsc0JBQXNCLHVCQUF1QixHQUFHLHNCQUFzQixJQUFJLG1CQUFtQjtBQUM3RjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxrQkFBa0IsMEJBQTBCLEdBQUcscUJBQXFCLEdBQUcsOEJBQThCO0FBQ3JHOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEMsOENBQThDOztBQUU5QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQVFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BNdUM7QUFDc0I7O0FBRS9EOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxRQUFRO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2RTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLE1BQU07QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJFO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLE9BQU8seURBQWUsSUFBSTtBQUMxQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDBDQUFXLENBQUM7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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O0FBQ0E7QUFDQTtBQUNBOztBQUVBLFk7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7OztVQzdKRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBO1dBQ0EsQ0FBQyxJOzs7OztXQ1BELHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGtDOzs7Ozs7Ozs7Ozs7Ozs7O0FDZnFCO0FBQ1k7QUFDSjtBQUNzQztBQUNwQzs7QUFFL0I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tbGlnaHQ5MjogaHNsKDAsIDAlLCA5MiUpO1xcbiAgICAtLWxpZ2h0ODg6IGhzbCgwLCAwJSwgODglKTtcXG4gICAgLS1kYXJrOiBoc2woMCwgMCUsIDEyJSk7XFxuICAgIC0tbWFsaWJ1OiBoc2woMTkyLCA5MyUsIDcyJSk7XFxuICAgIC0tYXVidXJuOiBoc2woMCwgNzUlLCA2NSUpO1xcbiAgICAtLW1hcmluZXI6IGhzbCgyMTYsIDc1JSwgNTElKTtcXG4gICAgLS1sYXVyZWw6IGhzbCgxMjAsIDEwMCUsIDI1JSk7XFxuICAgIC0tcHVycGxlOiBoc2woMjY0LCA2MSUsIDQ3JSk7XFxuICAgIC0tc3VuOiBoc2woMzQsIDkzJSwgNDglKTtcXG4gICAgLS10cmFuc3BhcmVudDE6IHJnYmEoMCwwLDAsLjEpO1xcbiAgICAtLXRyYW5zcGFyZW50MjogcmdiYSgwLDAsMCwuMik7XFxuXFxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0tbGlnaHQ5Mik7XFxuICAgIC0tZm9yZWdyb3VuZDogdmFyKC0tbWFsaWJ1KTtcXG59XFxuXFxuKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7ICBcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcbiAgICBmb250LWZhbWlseTpzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogdmFyKC0tZGFyayk7XFxufVxcblxcbmJ1dHRvbixcXG4uc2VhcmNoLWlucHV0IHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IC4xMjVyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbmJ1dHRvbixcXG4uaWMtZGl2IHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5zcGFuLm1pZCB7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbnNwYW4sXFxuaDEge1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLmFwcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLm5hdi1jb21wICxcXG4ubmMtbGVmdCxcXG4uc2VhcmNoLWRpdixcXG4ubmMtcmlnaHQge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG59XFxuXFxuLm5hdi1jb21wIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogLjVyZW0gM3JlbSAuNXJlbSAzcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb3JlZ3JvdW5kKTtcXG59XFxuXFxuLm5jLWxlZnQgPiAqIHtcXG4gICAgbWFyZ2luOiAwIC4yNXJlbSAwIDA7XFxufVxcblxcbi5uYy1yaWdodCA+ICoge1xcbiAgICBtYXJnaW46IDAgMCAwIC4yNXJlbTtcXG59XFxuXFxuLm5jLXJpZ2h0IGJ1dHRvbjpmaXJzdC1jaGlsZCB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLnNlYXJjaC1kaXYge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvcmVncm91bmQpO1xcbn1cXG5cXG4uc2VhcmNoLWRpdiA+IHNwYW46Zmlyc3QtY2hpbGQge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGN1cnNvcjogdGV4dDtcXG4gICAgbWFyZ2luOiAuMXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxuICAgIHotaW5kZXg6IDI7XFxufVxcblxcbi5zZWFyY2gtZGl2IGJ1dHRvbiB7XFxuICAgIG1hcmdpbjogLjJyZW0gMCAuMnJlbSAtMS41cmVtO1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5zZWFyY2gtZGl2IGJ1dHRvbjpob3ZlcixcXG4uc2VhcmNoLWRpdiBidXR0b246Zm9jdXMtdmlzaWJsZSB7XFxuICAgIGNvbG9yOiB2YXIoLS1hdWJ1cm4pO1xcbn1cXG5cXG4uc2VhcmNoLWlucHV0IHtcXG4gICAgcGFkZGluZzogMCAxLjZyZW0gMCAxLjhyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiAtMS45cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudDEpO1xcbn1cXG5cXG4uc2VhcmNoLWlucHV0Ojotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4uc2VhcmNoLWlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pICsgYnV0dG9uIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5zZWFyY2gtZGl2OmZvY3VzLXdpdGhpbiAuc2VhcmNoLWlucHV0LFxcbi5zZWFyY2gtZGl2OmhvdmVyIC5zZWFyY2gtaW5wdXQsXFxuLnNlYXJjaC1pbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQ5Mik7XFxufVxcblxcbi5zZWFyY2gtZGl2IGJ1dHRvbiBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uYXBwLWJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiAxO1xcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSA0Ni41OXB4KTtcXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5pbmZvLWNvbXAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAycmVtIC4yNXJlbSAwIDIuOHJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQ4OCk7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi5pbmZvLWNvbXAgPiAqIHtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgZm9udC1zaXplOiAuOXJlbTtcXG4gICAgd2lkdGg6IDI5NHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5pbmZvLWNvbXAgPiAqID4gc2FtcCB7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgb3BhY2l0eTogLjU7XFxuICAgIG1hcmdpbjogNHB4IDFyZW0gNHB4IDA7XFxufVxcblxcbi5pYy1kaXYge1xcbiAgICBtYXJnaW46IC4yNXJlbSAwIDAgMDtcXG59XFxuXFxuLmluZm8tY29tcCA+IGRpdjpmaXJzdC1vZi10eXBle1xcbiAgICBtYXJnaW46IDFyZW0gMCAwIDA7XFxufVxcblxcbi5pYy1zcGFuIHtcXG4gICAgbWFyZ2luOiAwIC4yNXJlbSAwIDA7XFxufVxcblxcbi5pbmZvLWNvbXAgPiBidXR0b246Zmlyc3QtY2hpbGQgc3BhbiB7XFxuICAgIGNvbG9yOiB2YXIoLS1tYXJpbmVyKTtcXG59XFxuXFxuLmluZm8tY29tcCA+IGJ1dHRvbjpudGgtY2hpbGQoMikgc3BhbiB7XFxuICAgIGNvbG9yOiB2YXIoLS1sYXVyZWwpO1xcbn1cXG5cXG4uaW5mby1jb21wID4gYnV0dG9uOm50aC1jaGlsZCgzKSBzcGFuIHtcXG4gICAgY29sb3I6IHZhcigtLXB1cnBsZSk7XFxufVxcblxcbi5pbmZvLWNvbXAgLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1hbGlidSk7XFxufVxcblxcbi5vcGEge1xcbiAgICBvcGFjaXR5OiAuNTtcXG59XFxuXFxuLmljLWFkZC1idG4ge1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIG1hcmdpbjogMHB4IC41cmVtIDAgMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmljLWFkZC1idG46aG92ZXIgKyBzdHJvbmcsXFxuLmljLWFkZC1idG46Zm9jdXMtdmlzaWJsZSArIHN0cm9uZyB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICB0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDMwJTtcXG59XFxuXFxuLmluZm8tY29tcDpmb2N1cy13aXRoaW4gLmljLWFkZC1idG4sXFxuLmluZm8tY29tcDpob3ZlciAuaWMtYWRkLWJ0bntcXG4gICAgZGlzcGxheTogaW5oZXJpdDtcXG59XFxuXFxuLmljLWRpdiA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5pYy1kaXYgPiBkaXYuc2hvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5pYy1wcm9qZWN0ID4gc3Bhbi5yb3RhdGUsXFxuLmljLWxhYmVsID4gc3Bhbi5yb3RhdGUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcblxcblxcbi5zaG93IHtcXG4gICAgbWFyZ2luOiAuNzVyZW0gMCAwIDA7XFxufVxcblxcbi5zaG93ID4gZGl2IHtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogLjVyZW0gLjVyZW0gLjVyZW0gLjVyZW07XFxuICAgIGhlaWdodDogMzRweDtcXG4gICAgZm9udC1zaXplOiAuOXJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG5zcGFuLnVuaXF1ZSB7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1yaWdodDogLjJyZW07XFxufVxcblxcbi5zaG93IGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLnNob3cgPiBkaXY6aG92ZXIsXFxuLnNob3cgPiBkaXY6Zm9jdXMtdmlzaWJsZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50Mik7XFxufVxcblxcbi5zaG93ID4gZGl2OmhvdmVyIGJ1dHRvbixcXG4uc2hvdyA+IGRpdjpmb2N1cy12aXNpYmxlIGJ1dHRvbixcXG4uc2hvdyA+IGRpdjpmb2N1cy13aXRoaW4gYnV0dG9ue1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLnNob3cgYnV0dG9uOmhvdmVyLFxcbi5zaG93IGJ1dHRvbjpmb2N1cy12aXNpYmxlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQhaW1wb3J0YW50O1xcbn1cXG5cXG4uYnVsbGV0IHtcXG4gICAgbWluLXdpZHRoOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgbWFyZ2luOiAwIC43cmVtIDAgLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50Mik7XFxufVxcblxcbi50YWcge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC44KTtcXG4gICAgbWFyZ2luOiAwIC4ycmVtIDAgLjJyZW07XFxuICAgIGNvbG9yOiB2YXIoLS10cmFuc3BhcmVudDIpO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleDogMTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBwYWRkaW5nOiAwIDJyZW0gMCAycmVtO1xcblxcbn1cXG5cXG4uY29udGFpbmVyID4gKiB7XFxuICAgIG1heC13aWR0aDogODAwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY29udGFpbmVyID4gZm9vdGVyIHtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG59XFxuXFxuLmNvbnRhaW5lciA+IGhlYWRlciB7XFxuICAgIHBhZGRpbmc6IDJyZW0gMCAxcmVtIDA7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHRvcDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQ5Mik7XFxuICAgIHotaW5kZXg6IDM7XFxufVxcblxcbmgxIHtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi50b2RvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMnB4IDA7XFxuICAgIG1hcmdpbjogLjVyZW0gMCAuNXJlbSAwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS10cmFuc3BhcmVudDEpO1xcbn1cXG5cXG4udG9kbyxcXG4udG9kbyAqIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2hlY2tib3gtYnRuIHsgXFxuICAgIGhlaWdodDogMThweDtcXG4gICAgbWF4LXdpZHRoOiAxOHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAuMjdyZW0gLjdyZW0gMCAwO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5jaGVja2JveC1idG4ucHJpbzEge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1hdWJ1cm4pO1xcbn1cXG5cXG4uY2hlY2tib3gtYnRuLnByaW8yIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tc3VuKTtcXG59XFxuXFxuLmNoZWNrYm94LWJ0bi5wcmlvMyB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLW1hcmluZXIpO1xcbn1cXG5cXG4uY2hlY2tib3gtYnRuLnByaW80IHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tdHJhbnNwYXJlbnQyKTtcXG59XFxuXFxuLmNoZWNrYm94LWJ0bjpob3ZlcixcXG4uY2hlY2tib3gtYnRuOmZvY3VzLXZpc2libGUge1xcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudDEpO1xcbn1cXG5cXG4uY2hlY2tib3gtYnRuICsgc3BhbiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgY29sb3I6IHZhcigtLXRyYW5zcGFyZW50Mik7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBtYXJnaW46IC0uOXJlbSAwIDAgLTFyZW07ICAgIFxcbn1cXG5cXG4uY2hlY2tib3gtYnRuOmhvdmVyICsgc3BhbixcXG4uY2hlY2tib3gtYnRuOmZvY3VzLXZpc2libGUgKyBzcGFuIHtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLmNoZWNrYm94LWJ0bjphY3RpdmUgKyBzcGFue1xcbiAgICBjb2xvcjogdmFyKC0tbGF1cmVsKTtcXG59XFxuXFxuLnRvZG8tdGV4dCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXg6IDE7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50b2RvLXRleHQgPiBsYWJlbCB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjRyZW07XFxufVxcblxcbi50b2RvLXRleHQtbm90ZSB7XFxuICAgIHRleHQtaW5kZW50OiAxcmVtO1xcbiAgICBmb250LXNpemU6IC45cmVtO1xcbiAgICBtYXJnaW46IDAgMCAuMjVyZW0gMDtcXG59XFxuXFxuLnRvZG8tdGV4dC1ub3RlLFxcbi50b2RvLXRleHQtbm90ZSA+IHNwYW4sXFxuLnRvZG8tdGV4dCBzbWFsbCB7XFxuICAgIGNvbG9yOiBncmF5O1xcbn1cXG5cXG4udG9kby10ZXh0LW5vdGUgPiBzcGFuLFxcbmVtLFxcbmVtID4gc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogLjlyZW0haW1wb3J0YW50O1xcbn1cXG5cXG4udG9kby10ZXh0IHNtYWxsOmhvdmVyLFxcbi50b2RvLXRleHQgc21hbGw6Zm9jdXMtdmlzaWJsZSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG5lbSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uc2NoZWQtZHVlIHtcXG4gICAgY29sb3I6IHZhcigtLWF1YnVybik7XFxufVxcblxcbi5zY2hlZC10b2RheSB7XFxuICAgIGNvbG9yOiB2YXIoLS1sYXVyZWwpO1xcbn1cXG5cXG4uc2NoZWQtdXBjb20ge1xcbiAgICBjb2xvcjogdmFyKC0tcHVycGxlKTtcXG59XFxuXFxuLnRvZG8tdG9vbHMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICBtYXJnaW46IC0yMHB4IDAgMCAwO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi50b2RvLXRvb2xzLWNvbnRhaW5lciAqIHtcXG4gICAgY29sb3I6IGdyYXk7XFxufVxcblxcbi50b29sLXNwYW4ge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLnRvZG86aG92ZXIgLnRvZG8tdG9vbHMtY29udGFpbmVyLFxcbi50b2RvOmZvY3VzLXdpdGhpbiAudG9kby10b29scy1jb250YWluZXIge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG5idXR0b246aG92ZXIsXFxuYnV0dG9uOmZvY3VzLXZpc2libGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudDIpO1xcbn1cXG5cXG5idXR0b246Zm9jdXMtdmlzaWJsZSB7XFxuICAgIG91dGxpbmU6IGF1dG87XFxufVxcblxcbi5hZGQtdGFzay1idG4ge1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBjb2xvcjogZ3JheTtcXG59XFxuXFxuLmFkZC10YXNrLWJ0biAqIHtcXG4gICAgcGFkZGluZzogLjFyZW07XFxufVxcblxcbi5hZGQtdGFzay1idG4gc3BhbiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgY29sb3I6IHZhcigtLWF1YnVybik7XFxufVxcblxcbi5hZGQtdGFzay1idG46aG92ZXIsXFxuLmFkZC10YXNrLWJ0bjpmb2N1cy12aXNpYmxlLFxcbi5hZGQtdGFzay1idG4gc3BhbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uYWRkLXRhc2stYnRuOmhvdmVyIHNwYW4sXFxuLmFkZC10YXNrLWJ0bjpmb2N1cy12aXNpYmxlIHNwYW4ge1xcbiAgICBjb2xvcjogdmFyKC0tbWFyaW5lcik7XFxufVxcblxcbi5lbXB0eS1zdGF0ZS1kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4OiAxO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmVtcHR5LXN0YXRlLWRpdiBpbWcge1xcbiAgICBtYXgtd2lkdGg6IDE4MHB4O1xcbiAgICBcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uZW1wdHktc3RhdGUtZGl2IGg0IHtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgY29sb3I6IGdyYXk7XFxufVxcblxcbi5lbXB0eS1zdGF0ZS1kaXYgKjpudGgtY2hpbGQobisyKSB7XFxuICAgIG1hcmdpbjogLjI1cmVtIDAgMCAwO1xcbn1cXG5cXG4uZW1wdHktc3RhdGUtZGl2ICo6bnRoLWNoaWxkKG4rMiksXFxuLmNvbnRhaW5lciBmb290ZXIgcCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmVtcHR5LXN0YXRlLWRpdiBwIHtcXG4gICAgZm9udC1zaXplOiAuOXJlbTtcXG4gICAgY29sb3I6IGRhcmtncmF5O1xcbn1cXG5cXG4uY29udGFpbmVyIGZvb3RlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1hdWJ1cm4pO1xcbiAgICBmb250LXNpemU6IC45cmVtIWltcG9ydGFudDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IC4yNXJlbSAwIC43NXJlbSAwO1xcbn1cXG5cXG4uY29udGFpbmVyIGZvb3RlciBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtIWltcG9ydGFudDtcXG59XFxuXFxuLmNvbnRhaW5lciBmb290ZXIgcCB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jb250YWluZXI6bm90KC5lbXB0eSkgLmVtcHR5LXN0YXRlLWRpdixcXG4uY29udGFpbmVyOm5vdCguZW1wdHkpIGZvb3RlciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5hZGQtdGFzay1kaXYge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10cmFuc3BhcmVudDIpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIHBhZGRpbmc6IDAgLjVyZW0gLjVyZW0gLjVyZW07XFxuICAgIGhlaWdodDogNjguNDhweDtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuXFxuLmFkZC10YXNrLWRpdiA+ICoge1xcbiAgICBtYXJnaW4tdG9wOiAuNXJlbTtcXG59XFxuXFxuLmFkZC10YXNrLWRpdiBpbnB1dCxcXG4ucXVpY2stYWRkLXRvZG8gaW5wdXQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IC45cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodDkyKTtcXG59XFxuXFxuLmFkZC10YXNrLWJ0bnMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uYWRkLXRhc2stYnRucy1jb250YWluZXIgZGl2ID4gYnV0dG9uIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdHJhbnNwYXJlbnQyKTtcXG4gICAgcGFkZGluZzogLjI1cmVtO1xcbn1cXG5cXG4uYWRkLXRhc2stYnRucy1jb250YWluZXIgYnV0dG9uID4gc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogLjlyZW0haW1wb3J0YW50O1xcbn1cXG5cXG4uYWRkLXRhc2stYnRucy1jb250YWluZXIgPiBidXR0b246bnRoLWNoaWxkKDIpIHNwYW4ge1xcbiAgICBjb2xvcjogdmFyKC0tbWFyaW5lcik7XFxufVxcblxcbi5zZWxlY3QtcHJvamVjdC1idG4ge1xcbiAgICBtYXgtd2lkdGg6IDc1cHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG5cXG4uc2NoZWR1bGVyLFxcbi5jYXJyaWVyIHtcXG4gICAgbWF4LXdpZHRoOiAyMTBweDtcXG4gICAgd2lkdGg6IDEwMCU7ICAgIFxcbn1cXG5cXG4uc2NoZWR1bGVyLFxcbi5jYXJyaWVyLFxcbi5sYWJlbGVyLFxcbi5wcmlvLXNldHRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0OTIpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luOiAwIDAgMCAwO1xcbiAgICBib3gtc2hhZG93OiAwIDFweCA4cHggMCByZ2IoMCAwIDAgLyA4JSksXFxuICAgICAgICAwIDAgMXB4IDAgcmdiKDAgMCAwIC8gMzAlKTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnNjaGVkdWxlciA+ICosXFxuLmNhcnJpZXIgPiAqIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIHBhZGRpbmc6IC41cmVtIC41cmVtIC41cmVtIC41cmVtO1xcbn1cXG5cXG4uc2NoZWQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5zY2hlZCBzcGFuOm50aC1jaGlsZCgyKSB7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICBjb2xvcjogZ3JheTtcXG59XFxuXFxuLnNjaGVkdWxlciBpbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XFxuICAgIG9wYWNpdHk6IC40O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zY2hlZHVsZXIgaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3I6aG92ZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uc2NoZWR1bGVyIC5zY2hlZC1jdXN0b20ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uc2NoZWR1bGVyIC5zY2hlZC1jdXN0b20gYnV0dG9uIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdHJhbnNwYXJlbnQxKTtcXG59XFxuXFxuLnNjaGVkdWxlciAuc2NoZWQtY3VzdG9tIGlucHV0IHtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5zY2hlZHVsZXIgLnNjaGVkLWN1c3RvbSBidXR0b24gPiBzcGFuLFxcbi5jYXJyaWVyIHNwYW4sXFxuLmxhYmVsZXIgc3BhbixcXG4ucHJpby1zZXR0ZXIgc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogLjlyZW0haW1wb3J0YW50O1xcbn1cXG5cXG4ucHJpby1zZXR0ZXIgYnV0dG9uOmZpcnN0LWNoaWxkIHNwYW4ge1xcbiAgICBjb2xvcjogdmFyKC0tYXVidXJuKTtcXG59XFxuXFxuLnByaW8tc2V0dGVyIGJ1dHRvbjpudGgtY2hpbGQoMikgc3BhbiB7XFxuICAgIGNvbG9yOiB2YXIoLS1zdW4pO1xcbn1cXG5cXG4ucHJpby1zZXR0ZXIgYnV0dG9uOm50aC1jaGlsZCgzKSBzcGFuIHtcXG4gICAgY29sb3I6IHZhcigtLW1hcmluZXIpO1xcbn1cXG5cXG4ucHJpby1zZXR0ZXIgYnV0dG9uOm50aC1jaGlsZCg0KSBzcGFuIHtcXG4gICAgY29sb3I6IGdyYXk7XFxufVxcblxcbi5jYXJyaWVyIHtcXG4gICAgbWFyZ2luOiAwIDAgMCAtLjdyZW07XFxuICAgIG1heC13aWR0aDogMTYwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY2FycmllciBidXR0b24sXFxuLmxhYmVsZXIgYnV0dG9uLFxcbi5wcmlvLXNldHRlciBidXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2FycmllciB1LFxcbi5sYWJlbGVyIHUsXFxuLnByaW8tc2V0dGVyIHUge1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgbWFyZ2luOiAwIDAgMCAuMjVyZW07XFxufVxcblxcbi5sYWJlbGVyLFxcbi5wcmlvLXNldHRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi5sYWJlbGVyIGRpdixcXG4ucHJpby1zZXR0ZXIgZGl2IHtcXG4gICAgbWF4LXdpZHRoOiAxNjBweDtcXG4gICAgd2lkdGg6IDEwMCU7IFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW46IDAgMS44cmVtIDAgYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQ5Mik7XFxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDhweCAwIHJnYigwIDAgMCAvIDglKSxcXG4gICAgICAgIDAgMCAxcHggMCByZ2IoMCAwIDAgLyAzMCUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi5wcmlvLXNldHRlciBkaXYge1xcbiAgICBtYXJnaW46IDAgMCAwIGF1dG87XFxuICAgIG1heC13aWR0aDogODhweDtcXG59XFxuXFxuLnByaW8tc2V0dGVyIHUge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5sYWJlbGVyIGJ1dHRvbixcXG4ucHJpby1zZXR0ZXIgYnV0dG9uIHtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgcGFkZGluZzogLjVyZW07XFxufVxcblxcbi5zY2hlZHVsZXIgLnNjaGVkLWN1c3RvbSBidXR0b246aG92ZXIgPiBzcGFuLFxcbi5zY2hlZHVsZXIgLnNjaGVkLWN1c3RvbSBidXR0b246Zm9jdXMtdmlzaWJsZSA+IHNwYW4ge1xcbiAgICBjb2xvcjogdmFyKC0tbGF1cmVsKTtcXG59XFxuXFxuLmFkZC10YXNrLWRpdi5kaXNwbGF5LXNjaGVkdWxlciAuc2NoZWR1bGVyIHtcXG4gICAgZGlzcGxheTogaW5oZXJpdDtcXG59XFxuXFxuLmFkZC10YXNrLWRpdi5kaXNwbGF5LWNhcnJpZXIgLmNhcnJpZXIsXFxuLmFkZC10YXNrLWRpdi5kaXNwbGF5LWxhYmVsZXIgLmxhYmVsZXIsXFxuLmFkZC10YXNrLWRpdi5kaXNwbGF5LXByaW8tc2V0dGVyIC5wcmlvLXNldHRlciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uYWRkLXRhc2stZGl2IC5zZWxlY3RlZCxcXG4uYWRkLXRhc2stZGl2IC5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudDEpO1xcbn1cXG5cXG4uYWRkLXRhc2stbWFpbi1idG5zLWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IC41cmVtIDAgLjVyZW0gMDtcXG59XFxuXFxuLmFkZC10YXNrLW1haW4tYnRucy1jb250YWluZXIgYnV0dG9uIHtcXG4gICAgcGFkZGluZzogLjI1cmVtO1xcbn1cXG5cXG4uYWRkLXRhc2stbWFpbi1idG5zLWNvbnRhaW5lciBidXR0b246Zmlyc3QtY2hpbGQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWxpYnUpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10cmFuc3BhcmVudDIpO1xcbn1cXG5cXG4uY29udGFpbmVyLmFkZC10cmlnZ2VyZWQgLmFkZC10YXNrLWJ0bi1kaXYge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY29udGFpbmVyOm5vdCguYWRkLXRyaWdnZXJlZCkgLmFkZC10YXNrLWRpdixcXG4uY29udGFpbmVyOm5vdCguYWRkLXRyaWdnZXJlZCkgLmFkZC10YXNrLW1haW4tYnRucy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucXVpY2stYWRkLXRvZG8sXFxuLnByb2plY3QtY3JlYXRvcixcXG4ubGFiZWwtY3JlYXRvcixcXG4udG9kby1lZGl0b3IsXFxuLnByb2plY3QtZWRpdG9yLFxcbi5sYWJlbC1lZGl0b3Ige1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50Mik7XFxuICAgIHotaW5kZXg6IDk5OTtcXG59XFxuXFxuLnF1aWNrLWFkZC10b2RvID4gKixcXG4ucXVpY2stYWRkLXRvZG8gaW5wdXQge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnF1aWNrLWFkZC10b2RvID4gZGl2IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQ5Mik7XFxuICAgIG1heC13aWR0aDogNDgwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIHBhZGRpbmc6IC41cmVtIC41cmVtIC41cmVtIC41cmVtO1xcbn1cXG5cXG4ucXVpY2stYWRkLXRvZG8gPiBkaXYgPiAqOm5vdCg6Zmlyc3QtY2hpbGQpIHtcXG4gICAgbWFyZ2luOiAuNXJlbSAwIDAgMDtcXG59XFxuXFxuLnF1aWNrLWFkZC10b2RvIGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IC4yNXJlbTtcXG59XFxuXFxuLnF1aWNrLWFkZC10b2RvIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1hcmluZXIpO1xcbn1cXG5cXG4ucXVpY2stYWRkLXRvZG8gYnV0dG9uOmhvdmVyLFxcbi5xdWljay1hZGQtdG9kbyBidXR0b246Zm9jdXMtdmlzaWJsZSB7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodDkyKTtcXG59XFxuXFxuLnF1aWNrLWFkZC10b2RvLm9uIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLm5vdGlmaWNhdGlvbnMge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGluc2V0OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgei1pbmRleDogOTk5O1xcbn1cXG5cXG4ubm90aWYtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQ5Mik7XFxuICAgIG1hcmdpbjogNDBweCAwIGF1dG8gYXV0bztcXG4gICAgcGFkZGluZzogLjVyZW07XFxuICAgIG1heC13aWR0aDogNDIwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtaGVpZ2h0OiAzMjBweDtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBib3gtc2hhZG93OiAwIDFweCA4cHggMCByZ2IoMCAwIDAgLyA4JSksXFxuICAgICAgICAwIDAgMXB4IDAgcmdiKDAgMCAwIC8gMzAlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4ubm90aWYtY29udGFpbmVyIG5hdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAgMCAuMjVyZW0gMDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXRyYW5zcGFyZW50Mik7XFxufVxcblxcbi5ub3RpZi1jb250YWluZXIgbmF2ID4gKiB7XFxuICAgIGZvbnQtc2l6ZTogLjlyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm5vdGlmLWNvbnRhaW5lciBidXR0b246Zmlyc3Qtb2YtdHlwZXtcXG4gICAgbWFyZ2luOiAwIDAgMCAuNXJlbTtcXG59XFxuXFxuLm5hdi1idG4tbm90aWZpY2F0aW9uIHNtYWxsIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcXG4gICAgY29sb3I6IHZhcigtLWF1YnVybik7XFxuICAgIG1hcmdpbi1sZWZ0OiAtLjg1cmVtOyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFsaWJ1KTtcXG4gICAgcGFkZGluZzogMCAxcHg7XFxufVxcblxcbi5uYXYtYnRuLW5vdGlmaWNhdGlvbjpob3ZlciBzbWFsbCxcXG4ubmF2LWJ0bi1ub3RpZmljYXRpb246Zm9jdXMtdmlzaWJsZSBzbWFsbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50IWltcG9ydGFudDtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0OTIpIWltcG9ydGFudDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5yZWFkLWFsbC1idG4ge1xcbiAgICBtYXJnaW46IDAgMCAwIGF1dG8haW1wb3J0YW50O1xcbn1cXG5cXG4ucmVhZC1hbGwtYnRuIHNwYW4ge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLm5vdGlmLW91dHB1dCB7XFxuICAgIG1hcmdpbjogMCAuMjVyZW07XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIC8qIG92ZXJmbG93LXg6IGhpZGRlbjsgKi9cXG59XFxuXFxuLm5vdGlmLW91dHB1dCA+ICoge1xcbiAgICBtYXJnaW46IC4yNXJlbSAwIDAgMDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXRyYW5zcGFyZW50MSk7XFxuICAgIHBhZGRpbmc6IDAgMCAuMjVyZW0gMDtcXG4gICAgXFxufVxcblxcbi5ub3RpZiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5ub3RpZiA+ICosXFxuLm5vdGlmLWV4dHJhIGJ1dHRvbiBzcGFue1xcbiAgICBmb250LXNpemU6IC45cmVtOyAgXFxufVxcblxcbi5ub3RpZiA+IHNwYW4ge1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuXFxuLm5vdGlmLWV4dHJhIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubm90aWYgc21hbGwge1xcbiAgICBjb2xvcjogdmFyKC0tYXVidXJuKTtcXG59XFxuXFxuLm5vdGlmaWNhdGlvbnMub24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcblxcbn1cXG5cXG4uYXBwLnNlYXJjaCAuYWRkLXRhc2stYnRuLWRpdntcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnByb2plY3QtY3JlYXRvciA+IGRpdixcXG4ubGFiZWwtY3JlYXRvciA+IGRpdixcXG4udG9kby1lZGl0b3IgPiBkaXYsXFxuLnByb2plY3QtZWRpdG9yID4gZGl2LFxcbi5sYWJlbC1lZGl0b3IgPiBkaXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodDkyKTtcXG4gICAgbWF4LXdpZHRoOiA0MjBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuLnByb2plY3QtY3JlYXRvciA+IGRpdiA+ICosXFxuLmxhYmVsLWNyZWF0b3IgPiBkaXYgPiAqLFxcbi50b2RvLWVkaXRvciA+IGRpdiA+ICosXFxuLnByb2plY3QtZWRpdG9yID4gZGl2ID4gKixcXG4ubGFiZWwtZWRpdG9yID4gZGl2ID4gKiB7XFxuICAgIHBhZGRpbmc6IC41cmVtO1xcbiAgICBtYXJnaW46IDAgMCAuMjVyZW0gMDtcXG59XFxuXFxuLnByb2plY3QtY3JlYXRvciA+IGRpdiA+ICo6Zmlyc3QtY2hpbGQsIFxcbi5wcm9qZWN0LWNyZWF0b3IgPiBkaXYgPiAqOm50aC1jaGlsZCgyKSxcXG4ubGFiZWwtY3JlYXRvciA+IGRpdiA+ICo6Zmlyc3QtY2hpbGQsIFxcbi5sYWJlbC1jcmVhdG9yID4gZGl2ID4gKjpudGgtY2hpbGQoMiksXFxuLnRvZG8tZWRpdG9yID4gZGl2ID4gKjpmaXJzdC1jaGlsZCwgXFxuLnRvZG8tZWRpdG9yID4gZGl2ID4gKjpudGgtY2hpbGQoMiksXFxuLnByb2plY3QtZWRpdG9yID4gZGl2ID4gKjpmaXJzdC1jaGlsZCxcXG4ucHJvamVjdC1lZGl0b3IgPiBkaXYgPiAqOm50aC1jaGlsZCgyKSxcXG4ubGFiZWwtZWRpdG9yID4gZGl2ID4gKjpmaXJzdC1jaGlsZCxcXG4ubGFiZWwtZWRpdG9yID4gZGl2ID4gKjpudGgtY2hpbGQoMikge1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tdHJhbnNwYXJlbnQxKTtcXG59XFxuXFxuLnByb2plY3QtY3JlYXRvciA+IGRpdixcXG4ucHJvamVjdC1pbnB1dCxcXG4ubGFiZWwtY3JlYXRvciA+IGRpdixcXG4ubGFiZWwtaW5wdXQsXFxuLnRvZG8tZWRpdG9yID4gZGl2LFxcbi50b2RvLWVkaXRvci1pbnB1dCxcXG4ucHJvamVjdC1lZGl0b3IgPiBkaXYsXFxuLnByb2plY3QtZWRpdG9yLWlucHV0LFxcbi5sYWJlbC1lZGl0b3IgPiBkaXYsXFxuLmxhYmVsLWVkaXRvci1pbnB1dCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5wcm9qZWN0LWlucHV0ID4gKixcXG4ubGFiZWwtaW5wdXQgPiAqLFxcbi50b2RvLWVkaXRvci1pbnB1dCA+ICosXFxuLnByb2plY3QtZWRpdG9yLWlucHV0ID4gKixcXG4ubGFiZWwtZWRpdG9yLWlucHV0ID4gKiB7XFxuICAgIG1hcmdpbjogMCAwIC4yNXJlbSAwO1xcbn1cXG5cXG4ucHJvamVjdC1pbnB1dCBpbnB1dCxcXG4ubGFiZWwtaW5wdXQgaW5wdXQsXFxuLnRvZG8tZWRpdG9yLWlucHV0IGlucHV0LFxcbi50b2RvLWVkaXRvci1pbnB1dCBzZWxlY3QsXFxuLnByb2plY3QtZWRpdG9yLWlucHV0IGlucHV0LFxcbi5sYWJlbC1lZGl0b3ItaW5wdXQgaW5wdXQge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgcGFkZGluZzogLjI1cmVtO1xcbn1cXG5cXG4udG9kby1lZGl0b3ItaW5wdXQge1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4udG9kby1lZGl0b3ItaW5wdXQge1xcbiAgICBwYWRkaW5nLXRvcDogMCFpbXBvcnRhbnQ7XFxufVxcblxcbi50b2RvLWVkaXRvci1pbnB1dCBsYWJlbCB7XFxuICAgIG1hcmdpbjogLjI1cmVtIDAgLjFyZW0gMDtcXG59XFxuXFxuLnByb2plY3QtYnV0dG9ucyxcXG4ubGFiZWwtYnV0dG9ucyxcXG4udG9kby1lZGl0b3ItYnV0dG9ucyxcXG4udXBkYXRlLXByb2plY3QtYnV0dG9ucyxcXG4udXBkYXRlLWxhYmVsLWJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyAgICBcXG4gICAgbWFyZ2luLWJvdHRvbTogMCFpbXBvcnRhbnQ7XFxufVxcblxcbi5wcm9qZWN0LWNyZWF0b3IgYnV0dG9uLFxcbi5sYWJlbC1jcmVhdG9yIGJ1dHRvbixcXG4udG9kby1lZGl0b3IgYnV0dG9uLFxcbi5wcm9qZWN0LWVkaXRvciBidXR0b24sXFxuLmxhYmVsLWVkaXRvciBidXR0b24ge1xcbiAgICBwYWRkaW5nOiAuMjVyZW07XFxuICAgIG1hcmdpbjogMCAwIDAgLjI1cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudDEpO1xcbn1cXG5cXG4ucHJvamVjdC1jcmVhdG9yIGJ1dHRvbjpmaXJzdC1jaGlsZCxcXG4ubGFiZWwtY3JlYXRvciBidXR0b246Zmlyc3QtY2hpbGQsXFxuLnRvZG8tZWRpdG9yIGJ1dHRvbjpmaXJzdC1jaGlsZCxcXG4ucHJvamVjdC1lZGl0b3IgYnV0dG9uOmZpcnN0LWNoaWxkLFxcbi5sYWJlbC1lZGl0b3IgYnV0dG9uOmZpcnN0LWNoaWxkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFyaW5lcik7XFxufVxcblxcbi51cGRhdGUtcHJvamVjdC1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoMyksXFxuLnVwZGF0ZS1sYWJlbC1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoMykge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hdWJ1cm4pO1xcbn1cXG5cXG4ucHJvamVjdC1jcmVhdG9yLm9uLFxcbi5sYWJlbC1jcmVhdG9yLm9uLFxcbi50b2RvLWVkaXRvci5vbixcXG4ucHJvamVjdC1lZGl0b3Iub24sXFxuLmxhYmVsLWVkaXRvci5vbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5wcm9qZWN0LWlucHV0IGlucHV0OmZvY3VzLXZpc2libGUsXFxuLmxhYmVsLWlucHV0IGlucHV0OmZvY3VzLXZpc2libGUsXFxuLnRvZG8tZWRpdG9yLWlucHV0IGlucHV0OmZvY3VzLXZpc2libGUsXFxuLnByb2plY3QtZWRpdG9yLWlucHV0IGlucHV0OmZvY3VzLXZpc2libGUsXFxuLmxhYmVsLWVkaXRvci1pbnB1dCBpbnB1dDpmb2N1cy12aXNpYmxlIHtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHZhcigtLXRyYW5zcGFyZW50Mik7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcXG4gICAgLm5hdi1jb21wIHtcXG4gICAgICAgIHBhZGRpbmc6IC41cmVtIC41cmVtIC41cmVtIC41cmVtO1xcbiAgICB9XFxuICAgIC5pbmZvLWNvbXAge1xcbiAgICAgICAgcGFkZGluZzogMXJlbSAuMjVyZW0gLjI1cmVtIC4yNXJlbTtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHotaW5kZXg6IDEwMDA7XFxuICAgICAgICB0b3A6IDQ3LjU5cHg7XFxuICAgICAgICBib3R0b206IDA7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuICAgIC5pbmZvLWNvbXAuc2hvdy1uYXYge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgfVxcbiAgICAuaW5mby1jb21wID4gKiB7XFxuICAgICAgICB3aWR0aDogMjk0cHg7XFxuICAgIH1cXG4gICAgLmNvbnRhaW5lciA+IGhlYWRlciB7XFxuICAgICAgICBwYWRkaW5nOiAxcmVtIDAgLjVyZW0gMDtcXG4gICAgfVxcbiAgICAuY29udGFpbmVyIHtcXG4gICAgICAgIHBhZGRpbmc6IDAgMXJlbSAwIDFyZW07XFxuICAgIH1cXG4gICAgLnF1aWNrLWFkZC10b2RvID4gZGl2IHtcXG4gICAgICAgIG1heC13aWR0aDogNDAwcHg7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTBweCkge1xcbiAgICAuaW5mby1jb21wID4gKiB7XFxuICAgICAgICB3aWR0aDogMjQycHg7XFxuICAgIH1cXG4gICAgLnNlYXJjaC1pbnB1dCB7XFxuICAgICAgICB3aWR0aDogMTgwcHg7XFxuICAgIH1cXG4gICAgLnNlYXJjaC1pbnB1dDpmb2N1cyB7XFxuICAgICAgICB3aWR0aDogMTgwcHg7XFxuICAgIH1cXG4gICAgLnF1aWNrLWFkZC10b2RvID4gZGl2IHtcXG4gICAgICAgIG1heC13aWR0aDogMzAwcHg7XFxuICAgIH1cXG4gICAgLm5vdGlmLWNvbnRhaW5lciB7XFxuICAgICAgICBtYXgtd2lkdGg6IDMxMHB4O1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIxcHgpIHtcXG4gICAgLnNlYXJjaC1pbnB1dCB7XFxuICAgICAgICBtYXgtd2lkdGg6IDEzNXB4O1xcbiAgICB9XFxuICAgIC5zZWFyY2gtaW5wdXQ6Zm9jdXMge1xcbiAgICAgICAgbWF4LXdpZHRoOiAxMzVweDtcXG4gICAgfVxcbiAgICAucXVpY2stYWRkLXRvZG8gPiBkaXYge1xcbiAgICAgICAgbWF4LXdpZHRoOiAyNzBweDtcXG4gICAgfVxcbiAgICAubm90aWYtY29udGFpbmVyIHtcXG4gICAgICAgIG1heC13aWR0aDogMjcwcHg7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNDIwcHgpIHtcXG4gICAgLnRvZG8tZWRpdG9yLWlucHV0IHtcXG4gICAgICAgIG1heC1oZWlnaHQ6IDE4MHB4O1xcbiAgICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSwwQkFBMEI7SUFDMUIsMEJBQTBCO0lBQzFCLHVCQUF1QjtJQUN2Qiw0QkFBNEI7SUFDNUIsMEJBQTBCO0lBQzFCLDZCQUE2QjtJQUM3Qiw2QkFBNkI7SUFDN0IsNEJBQTRCO0lBQzVCLHdCQUF3QjtJQUN4Qiw4QkFBOEI7SUFDOUIsOEJBQThCOztJQUU5Qiw0QkFBNEI7SUFDNUIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7O0lBRUksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1DQUFtQztJQUNuQyxzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsNkJBQTZCO0FBQ2pDOztBQUVBOztJQUVJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7O0lBRUksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ks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RUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7Ozs7O0lBS0ksYUFBYTtJQUNiLHlCQUF5QjtJQUN6QiwwQkFBMEI7QUFDOUI7O0FBRUE7Ozs7O0lBS0ksZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixxQ0FBcUM7QUFDekM7O0FBRUE7Ozs7O0lBS0ksZ0NBQWdDO0FBQ3BDOztBQUVBOztJQUVJLCtCQUErQjtBQUNuQzs7QUFFQTs7Ozs7SUFLSSxhQUFhO0FBQ2pCOztBQUVBOzs7OztJQUtJLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJO1FBQ0ksZ0NBQWdDO0lBQ3BDO0lBQ0E7UUFDSSxrQ0FBa0M7UUFDbEMsa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixZQUFZO1FBQ1osU0FBUztRQUNULGFBQWE7SUFDakI7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0ksc0JBQXNCO0lBQzFCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1saWdodDkyOiBoc2woMCwgMCUsIDkyJSk7XFxuICAgIC0tbGlnaHQ4ODogaHNsKDAsIDAlLCA4OCUpO1xcbiAgICAtLWRhcms6IGhzbCgwLCAwJSwgMTIlKTtcXG4gICAgLS1tYWxpYnU6IGhzbCgxOTIsIDkzJSwgNzIlKTtcXG4gICAgLS1hdWJ1cm46IGhzbCgwLCA3NSUsIDY1JSk7XFxuICAgIC0tbWFyaW5lcjogaHNsKDIxNiwgNzUlLCA1MSUpO1xcbiAgICAtLWxhdXJlbDogaHNsKDEyMCwgMTAwJSwgMjUlKTtcXG4gICAgLS1wdXJwbGU6IGhzbCgyNjQsIDYxJSwgNDclKTtcXG4gICAgLS1zdW46IGhzbCgzNCwgOTMlLCA0OCUpO1xcbiAgICAtLXRyYW5zcGFyZW50MTogcmdiYSgwLDAsMCwuMSk7XFxuICAgIC0tdHJhbnNwYXJlbnQyOiByZ2JhKDAsMCwwLC4yKTtcXG5cXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1saWdodDkyKTtcXG4gICAgLS1mb3JlZ3JvdW5kOiB2YXIoLS1tYWxpYnUpO1xcbn1cXG5cXG4qLCAqOmJlZm9yZSwgKjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDsgIFxcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbmJvZHkge1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxuICAgIGZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrKTtcXG59XFxuXFxuYnV0dG9uLFxcbi5zZWFyY2gtaW5wdXQge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgZm9udC1mYW1pbHk6c2Fucy1zZXJpZjtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgcGFkZGluZzogLjEyNXJlbTtcXG4gICAgY29sb3I6IHZhcigtLWRhcmspO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuYnV0dG9uLFxcbi5pYy1kaXYge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbnNwYW4ubWlkIHtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuc3BhbixcXG5oMSB7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4uYXBwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4ubmF2LWNvbXAgLFxcbi5uYy1sZWZ0LFxcbi5zZWFyY2gtZGl2LFxcbi5uYy1yaWdodCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbn1cXG5cXG4ubmF2LWNvbXAge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAuNXJlbSAzcmVtIC41cmVtIDNyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvcmVncm91bmQpO1xcbn1cXG5cXG4ubmMtbGVmdCA+ICoge1xcbiAgICBtYXJnaW46IDAgLjI1cmVtIDAgMDtcXG59XFxuXFxuLm5jLXJpZ2h0ID4gKiB7XFxuICAgIG1hcmdpbjogMCAwIDAgLjI1cmVtO1xcbn1cXG5cXG4ubmMtcmlnaHQgYnV0dG9uOmZpcnN0LWNoaWxkIHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uc2VhcmNoLWRpdiB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9yZWdyb3VuZCk7XFxufVxcblxcbi5zZWFyY2gtZGl2ID4gc3BhbjpmaXJzdC1jaGlsZCB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgY3Vyc29yOiB0ZXh0O1xcbiAgICBtYXJnaW46IC4xcmVtO1xcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXG4gICAgei1pbmRleDogMjtcXG59XFxuXFxuLnNlYXJjaC1kaXYgYnV0dG9uIHtcXG4gICAgbWFyZ2luOiAuMnJlbSAwIC4ycmVtIC0xLjVyZW07XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnNlYXJjaC1kaXYgYnV0dG9uOmhvdmVyLFxcbi5zZWFyY2gtZGl2IGJ1dHRvbjpmb2N1cy12aXNpYmxlIHtcXG4gICAgY29sb3I6IHZhcigtLWF1YnVybik7XFxufVxcblxcbi5zZWFyY2gtaW5wdXQge1xcbiAgICBwYWRkaW5nOiAwIDEuNnJlbSAwIDEuOHJlbTtcXG4gICAgbWFyZ2luLWxlZnQ6IC0xLjlyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50MSk7XFxufVxcblxcbi5zZWFyY2gtaW5wdXQ6Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi5zZWFyY2gtaW5wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bikgKyBidXR0b24ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnNlYXJjaC1kaXY6Zm9jdXMtd2l0aGluIC5zZWFyY2gtaW5wdXQsXFxuLnNlYXJjaC1kaXY6aG92ZXIgLnNlYXJjaC1pbnB1dCxcXG4uc2VhcmNoLWlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pe1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodDkyKTtcXG59XFxuXFxuLnNlYXJjaC1kaXYgYnV0dG9uIHNwYW4ge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5hcHAtYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXg6IDE7XFxuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDQ2LjU5cHgpO1xcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XFxufVxcblxcbi53cmFwcGVyIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmluZm8tY29tcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDJyZW0gLjI1cmVtIDAgMi44cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodDg4KTtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLmluZm8tY29tcCA+ICoge1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBmb250LXNpemU6IC45cmVtO1xcbiAgICB3aWR0aDogMjk0cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLmluZm8tY29tcCA+ICogPiBzYW1wIHtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBvcGFjaXR5OiAuNTtcXG4gICAgbWFyZ2luOiA0cHggMXJlbSA0cHggMDtcXG59XFxuXFxuLmljLWRpdiB7XFxuICAgIG1hcmdpbjogLjI1cmVtIDAgMCAwO1xcbn1cXG5cXG4uaW5mby1jb21wID4gZGl2OmZpcnN0LW9mLXR5cGV7XFxuICAgIG1hcmdpbjogMXJlbSAwIDAgMDtcXG59XFxuXFxuLmljLXNwYW4ge1xcbiAgICBtYXJnaW46IDAgLjI1cmVtIDAgMDtcXG59XFxuXFxuLmluZm8tY29tcCA+IGJ1dHRvbjpmaXJzdC1jaGlsZCBzcGFuIHtcXG4gICAgY29sb3I6IHZhcigtLW1hcmluZXIpO1xcbn1cXG5cXG4uaW5mby1jb21wID4gYnV0dG9uOm50aC1jaGlsZCgyKSBzcGFuIHtcXG4gICAgY29sb3I6IHZhcigtLWxhdXJlbCk7XFxufVxcblxcbi5pbmZvLWNvbXAgPiBidXR0b246bnRoLWNoaWxkKDMpIHNwYW4ge1xcbiAgICBjb2xvcjogdmFyKC0tcHVycGxlKTtcXG59XFxuXFxuLmluZm8tY29tcCAuYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFsaWJ1KTtcXG59XFxuXFxuLm9wYSB7XFxuICAgIG9wYWNpdHk6IC41O1xcbn1cXG5cXG4uaWMtYWRkLWJ0biB7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgbWFyZ2luOiAwcHggLjVyZW0gMCAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaWMtYWRkLWJ0bjpob3ZlciArIHN0cm9uZyxcXG4uaWMtYWRkLWJ0bjpmb2N1cy12aXNpYmxlICsgc3Ryb25nIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIHRleHQtdW5kZXJsaW5lLW9mZnNldDogMzAlO1xcbn1cXG5cXG4uaW5mby1jb21wOmZvY3VzLXdpdGhpbiAuaWMtYWRkLWJ0bixcXG4uaW5mby1jb21wOmhvdmVyIC5pYy1hZGQtYnRue1xcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xcbn1cXG5cXG4uaWMtZGl2ID4gZGl2IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmljLWRpdiA+IGRpdi5zaG93IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmljLXByb2plY3QgPiBzcGFuLnJvdGF0ZSxcXG4uaWMtbGFiZWwgPiBzcGFuLnJvdGF0ZSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59XFxuXFxuXFxuLnNob3cge1xcbiAgICBtYXJnaW46IC43NXJlbSAwIDAgMDtcXG59XFxuXFxuLnNob3cgPiBkaXYge1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAuNXJlbSAuNXJlbSAuNXJlbSAuNXJlbTtcXG4gICAgaGVpZ2h0OiAzNHB4O1xcbiAgICBmb250LXNpemU6IC45cmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbnNwYW4udW5pcXVlIHtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXJpZ2h0OiAuMnJlbTtcXG59XFxuXFxuLnNob3cgYnV0dG9uIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uc2hvdyA+IGRpdjpob3ZlcixcXG4uc2hvdyA+IGRpdjpmb2N1cy12aXNpYmxlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQyKTtcXG59XFxuXFxuLnNob3cgPiBkaXY6aG92ZXIgYnV0dG9uLFxcbi5zaG93ID4gZGl2OmZvY3VzLXZpc2libGUgYnV0dG9uLFxcbi5zaG93ID4gZGl2OmZvY3VzLXdpdGhpbiBidXR0b257XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4uc2hvdyBidXR0b246aG92ZXIsXFxuLnNob3cgYnV0dG9uOmZvY3VzLXZpc2libGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCFpbXBvcnRhbnQ7XFxufVxcblxcbi5idWxsZXQge1xcbiAgICBtaW4td2lkdGg6IDEwcHg7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBtYXJnaW46IDAgLjdyZW0gMCAuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQyKTtcXG59XFxuXFxuLnRhZyB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoLjgpO1xcbiAgICBtYXJnaW46IDAgLjJyZW0gMCAuMnJlbTtcXG4gICAgY29sb3I6IHZhcigtLXRyYW5zcGFyZW50Mik7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiAxO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIHBhZGRpbmc6IDAgMnJlbSAwIDJyZW07XFxuXFxufVxcblxcbi5jb250YWluZXIgPiAqIHtcXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jb250YWluZXIgPiBmb290ZXIge1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbn1cXG5cXG4uY29udGFpbmVyID4gaGVhZGVyIHtcXG4gICAgcGFkZGluZzogMnJlbSAwIDFyZW0gMDtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodDkyKTtcXG4gICAgei1pbmRleDogMztcXG59XFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLnRvZG8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAycHggMDtcXG4gICAgbWFyZ2luOiAuNXJlbSAwIC41cmVtIDA7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXRyYW5zcGFyZW50MSk7XFxufVxcblxcbi50b2RvLFxcbi50b2RvICoge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jaGVja2JveC1idG4geyBcXG4gICAgaGVpZ2h0OiAxOHB4O1xcbiAgICBtYXgtd2lkdGg6IDE4cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46IC4yN3JlbSAuN3JlbSAwIDA7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmNoZWNrYm94LWJ0bi5wcmlvMSB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWF1YnVybik7XFxufVxcblxcbi5jaGVja2JveC1idG4ucHJpbzIge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1zdW4pO1xcbn1cXG5cXG4uY2hlY2tib3gtYnRuLnByaW8zIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbWFyaW5lcik7XFxufVxcblxcbi5jaGVja2JveC1idG4ucHJpbzQge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS10cmFuc3BhcmVudDIpO1xcbn1cXG5cXG4uY2hlY2tib3gtYnRuOmhvdmVyLFxcbi5jaGVja2JveC1idG46Zm9jdXMtdmlzaWJsZSB7XFxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50MSk7XFxufVxcblxcbi5jaGVja2JveC1idG4gKyBzcGFuIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbGluZS1oZWlnaHQ6IDFyZW07XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBjb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQyKTtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIG1hcmdpbjogLS45cmVtIDAgMCAtMXJlbTsgICAgXFxufVxcblxcbi5jaGVja2JveC1idG46aG92ZXIgKyBzcGFuLFxcbi5jaGVja2JveC1idG46Zm9jdXMtdmlzaWJsZSArIHNwYW4ge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4uY2hlY2tib3gtYnRuOmFjdGl2ZSArIHNwYW57XFxuICAgIGNvbG9yOiB2YXIoLS1sYXVyZWwpO1xcbn1cXG5cXG4udG9kby10ZXh0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleDogMTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRvZG8tdGV4dCA+IGxhYmVsIHtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNHJlbTtcXG59XFxuXFxuLnRvZG8tdGV4dC1ub3RlIHtcXG4gICAgdGV4dC1pbmRlbnQ6IDFyZW07XFxuICAgIGZvbnQtc2l6ZTogLjlyZW07XFxuICAgIG1hcmdpbjogMCAwIC4yNXJlbSAwO1xcbn1cXG5cXG4udG9kby10ZXh0LW5vdGUsXFxuLnRvZG8tdGV4dC1ub3RlID4gc3BhbixcXG4udG9kby10ZXh0IHNtYWxsIHtcXG4gICAgY29sb3I6IGdyYXk7XFxufVxcblxcbi50b2RvLXRleHQtbm90ZSA+IHNwYW4sXFxuZW0sXFxuZW0gPiBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAuOXJlbSFpbXBvcnRhbnQ7XFxufVxcblxcbi50b2RvLXRleHQgc21hbGw6aG92ZXIsXFxuLnRvZG8tdGV4dCBzbWFsbDpmb2N1cy12aXNpYmxlIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbmVtIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5zY2hlZC1kdWUge1xcbiAgICBjb2xvcjogdmFyKC0tYXVidXJuKTtcXG59XFxuXFxuLnNjaGVkLXRvZGF5IHtcXG4gICAgY29sb3I6IHZhcigtLWxhdXJlbCk7XFxufVxcblxcbi5zY2hlZC11cGNvbSB7XFxuICAgIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xcbn1cXG5cXG4udG9kby10b29scy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIG1hcmdpbjogLTIwcHggMCAwIDA7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLnRvZG8tdG9vbHMtY29udGFpbmVyICoge1xcbiAgICBjb2xvcjogZ3JheTtcXG59XFxuXFxuLnRvb2wtc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4udG9kbzpob3ZlciAudG9kby10b29scy1jb250YWluZXIsXFxuLnRvZG86Zm9jdXMtd2l0aGluIC50b2RvLXRvb2xzLWNvbnRhaW5lciB7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbmJ1dHRvbjpob3ZlcixcXG5idXR0b246Zm9jdXMtdmlzaWJsZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50Mik7XFxufVxcblxcbmJ1dHRvbjpmb2N1cy12aXNpYmxlIHtcXG4gICAgb3V0bGluZTogYXV0bztcXG59XFxuXFxuLmFkZC10YXNrLWJ0biB7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGNvbG9yOiBncmF5O1xcbn1cXG5cXG4uYWRkLXRhc2stYnRuICoge1xcbiAgICBwYWRkaW5nOiAuMXJlbTtcXG59XFxuXFxuLmFkZC10YXNrLWJ0biBzcGFuIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBjb2xvcjogdmFyKC0tYXVidXJuKTtcXG59XFxuXFxuLmFkZC10YXNrLWJ0bjpob3ZlcixcXG4uYWRkLXRhc2stYnRuOmZvY3VzLXZpc2libGUsXFxuLmFkZC10YXNrLWJ0biBzcGFuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5hZGQtdGFzay1idG46aG92ZXIgc3BhbixcXG4uYWRkLXRhc2stYnRuOmZvY3VzLXZpc2libGUgc3BhbiB7XFxuICAgIGNvbG9yOiB2YXIoLS1tYXJpbmVyKTtcXG59XFxuXFxuLmVtcHR5LXN0YXRlLWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXg6IDE7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZW1wdHktc3RhdGUtZGl2IGltZyB7XFxuICAgIG1heC13aWR0aDogMTgwcHg7XFxuICAgIFxcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi5lbXB0eS1zdGF0ZS1kaXYgaDQge1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBjb2xvcjogZ3JheTtcXG59XFxuXFxuLmVtcHR5LXN0YXRlLWRpdiAqOm50aC1jaGlsZChuKzIpIHtcXG4gICAgbWFyZ2luOiAuMjVyZW0gMCAwIDA7XFxufVxcblxcbi5lbXB0eS1zdGF0ZS1kaXYgKjpudGgtY2hpbGQobisyKSxcXG4uY29udGFpbmVyIGZvb3RlciBwIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZW1wdHktc3RhdGUtZGl2IHAge1xcbiAgICBmb250LXNpemU6IC45cmVtO1xcbiAgICBjb2xvcjogZGFya2dyYXk7XFxufVxcblxcbi5jb250YWluZXIgZm9vdGVyIHtcXG4gICAgY29sb3I6IHZhcigtLWF1YnVybik7XFxuICAgIGZvbnQtc2l6ZTogLjlyZW0haW1wb3J0YW50O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogLjI1cmVtIDAgLjc1cmVtIDA7XFxufVxcblxcbi5jb250YWluZXIgZm9vdGVyIHNwYW4ge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW0haW1wb3J0YW50O1xcbn1cXG5cXG4uY29udGFpbmVyIGZvb3RlciBwIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNvbnRhaW5lcjpub3QoLmVtcHR5KSAuZW1wdHktc3RhdGUtZGl2LFxcbi5jb250YWluZXI6bm90KC5lbXB0eSkgZm9vdGVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmFkZC10YXNrLWRpdiB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRyYW5zcGFyZW50Mik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgcGFkZGluZzogMCAuNXJlbSAuNXJlbSAuNXJlbTtcXG4gICAgaGVpZ2h0OiA2OC40OHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG4uYWRkLXRhc2stZGl2ID4gKiB7XFxuICAgIG1hcmdpbi10b3A6IC41cmVtO1xcbn1cXG5cXG4uYWRkLXRhc2stZGl2IGlucHV0LFxcbi5xdWljay1hZGQtdG9kbyBpbnB1dCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogLjlyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0OTIpO1xcbn1cXG5cXG4uYWRkLXRhc2stYnRucy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5hZGQtdGFzay1idG5zLWNvbnRhaW5lciBkaXYgPiBidXR0b24ge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10cmFuc3BhcmVudDIpO1xcbiAgICBwYWRkaW5nOiAuMjVyZW07XFxufVxcblxcbi5hZGQtdGFzay1idG5zLWNvbnRhaW5lciBidXR0b24gPiBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAuOXJlbSFpbXBvcnRhbnQ7XFxufVxcblxcbi5hZGQtdGFzay1idG5zLWNvbnRhaW5lciA+IGJ1dHRvbjpudGgtY2hpbGQoMikgc3BhbiB7XFxuICAgIGNvbG9yOiB2YXIoLS1tYXJpbmVyKTtcXG59XFxuXFxuLnNlbGVjdC1wcm9qZWN0LWJ0biB7XFxuICAgIG1heC13aWR0aDogNzVweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcblxcbi5zY2hlZHVsZXIsXFxuLmNhcnJpZXIge1xcbiAgICBtYXgtd2lkdGg6IDIxMHB4O1xcbiAgICB3aWR0aDogMTAwJTsgICAgXFxufVxcblxcbi5zY2hlZHVsZXIsXFxuLmNhcnJpZXIsXFxuLmxhYmVsZXIsXFxuLnByaW8tc2V0dGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQ5Mik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgei1pbmRleDogMjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW46IDAgMCAwIDA7XFxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDhweCAwIHJnYigwIDAgMCAvIDglKSxcXG4gICAgICAgIDAgMCAxcHggMCByZ2IoMCAwIDAgLyAzMCUpO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc2NoZWR1bGVyID4gKixcXG4uY2FycmllciA+ICoge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgcGFkZGluZzogLjVyZW0gLjVyZW0gLjVyZW0gLjVyZW07XFxufVxcblxcbi5zY2hlZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnNjaGVkIHNwYW46bnRoLWNoaWxkKDIpIHtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIGNvbG9yOiBncmF5O1xcbn1cXG5cXG4uc2NoZWR1bGVyIGlucHV0W3R5cGU9XFxcImRhdGVcXFwiXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcXG4gICAgb3BhY2l0eTogLjQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNjaGVkdWxlciBpbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvcjpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5zY2hlZHVsZXIgLnNjaGVkLWN1c3RvbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5zY2hlZHVsZXIgLnNjaGVkLWN1c3RvbSBidXR0b24ge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10cmFuc3BhcmVudDEpO1xcbn1cXG5cXG4uc2NoZWR1bGVyIC5zY2hlZC1jdXN0b20gaW5wdXQge1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnNjaGVkdWxlciAuc2NoZWQtY3VzdG9tIGJ1dHRvbiA+IHNwYW4sXFxuLmNhcnJpZXIgc3BhbixcXG4ubGFiZWxlciBzcGFuLFxcbi5wcmlvLXNldHRlciBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAuOXJlbSFpbXBvcnRhbnQ7XFxufVxcblxcbi5wcmlvLXNldHRlciBidXR0b246Zmlyc3QtY2hpbGQgc3BhbiB7XFxuICAgIGNvbG9yOiB2YXIoLS1hdWJ1cm4pO1xcbn1cXG5cXG4ucHJpby1zZXR0ZXIgYnV0dG9uOm50aC1jaGlsZCgyKSBzcGFuIHtcXG4gICAgY29sb3I6IHZhcigtLXN1bik7XFxufVxcblxcbi5wcmlvLXNldHRlciBidXR0b246bnRoLWNoaWxkKDMpIHNwYW4ge1xcbiAgICBjb2xvcjogdmFyKC0tbWFyaW5lcik7XFxufVxcblxcbi5wcmlvLXNldHRlciBidXR0b246bnRoLWNoaWxkKDQpIHNwYW4ge1xcbiAgICBjb2xvcjogZ3JheTtcXG59XFxuXFxuLmNhcnJpZXIge1xcbiAgICBtYXJnaW46IDAgMCAwIC0uN3JlbTtcXG4gICAgbWF4LXdpZHRoOiAxNjBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jYXJyaWVyIGJ1dHRvbixcXG4ubGFiZWxlciBidXR0b24sXFxuLnByaW8tc2V0dGVyIGJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jYXJyaWVyIHUsXFxuLmxhYmVsZXIgdSxcXG4ucHJpby1zZXR0ZXIgdSB7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICBtYXJnaW46IDAgMCAwIC4yNXJlbTtcXG59XFxuXFxuLmxhYmVsZXIsXFxuLnByaW8tc2V0dGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLmxhYmVsZXIgZGl2LFxcbi5wcmlvLXNldHRlciBkaXYge1xcbiAgICBtYXgtd2lkdGg6IDE2MHB4O1xcbiAgICB3aWR0aDogMTAwJTsgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbjogMCAxLjhyZW0gMCBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodDkyKTtcXG4gICAgYm94LXNoYWRvdzogMCAxcHggOHB4IDAgcmdiKDAgMCAwIC8gOCUpLFxcbiAgICAgICAgMCAwIDFweCAwIHJnYigwIDAgMCAvIDMwJSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuLnByaW8tc2V0dGVyIGRpdiB7XFxuICAgIG1hcmdpbjogMCAwIDAgYXV0bztcXG4gICAgbWF4LXdpZHRoOiA4OHB4O1xcbn1cXG5cXG4ucHJpby1zZXR0ZXIgdSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmxhYmVsZXIgYnV0dG9uLFxcbi5wcmlvLXNldHRlciBidXR0b24ge1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG59XFxuXFxuLnNjaGVkdWxlciAuc2NoZWQtY3VzdG9tIGJ1dHRvbjpob3ZlciA+IHNwYW4sXFxuLnNjaGVkdWxlciAuc2NoZWQtY3VzdG9tIGJ1dHRvbjpmb2N1cy12aXNpYmxlID4gc3BhbiB7XFxuICAgIGNvbG9yOiB2YXIoLS1sYXVyZWwpO1xcbn1cXG5cXG4uYWRkLXRhc2stZGl2LmRpc3BsYXktc2NoZWR1bGVyIC5zY2hlZHVsZXIge1xcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xcbn1cXG5cXG4uYWRkLXRhc2stZGl2LmRpc3BsYXktY2FycmllciAuY2FycmllcixcXG4uYWRkLXRhc2stZGl2LmRpc3BsYXktbGFiZWxlciAubGFiZWxlcixcXG4uYWRkLXRhc2stZGl2LmRpc3BsYXktcHJpby1zZXR0ZXIgLnByaW8tc2V0dGVyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5hZGQtdGFzay1kaXYgLnNlbGVjdGVkLFxcbi5hZGQtdGFzay1kaXYgLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50MSk7XFxufVxcblxcbi5hZGQtdGFzay1tYWluLWJ0bnMtY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogLjVyZW0gMCAuNXJlbSAwO1xcbn1cXG5cXG4uYWRkLXRhc2stbWFpbi1idG5zLWNvbnRhaW5lciBidXR0b24ge1xcbiAgICBwYWRkaW5nOiAuMjVyZW07XFxufVxcblxcbi5hZGQtdGFzay1tYWluLWJ0bnMtY29udGFpbmVyIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1hbGlidSk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRyYW5zcGFyZW50Mik7XFxufVxcblxcbi5jb250YWluZXIuYWRkLXRyaWdnZXJlZCAuYWRkLXRhc2stYnRuLWRpdiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jb250YWluZXI6bm90KC5hZGQtdHJpZ2dlcmVkKSAuYWRkLXRhc2stZGl2LFxcbi5jb250YWluZXI6bm90KC5hZGQtdHJpZ2dlcmVkKSAuYWRkLXRhc2stbWFpbi1idG5zLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5xdWljay1hZGQtdG9kbyxcXG4ucHJvamVjdC1jcmVhdG9yLFxcbi5sYWJlbC1jcmVhdG9yLFxcbi50b2RvLWVkaXRvcixcXG4ucHJvamVjdC1lZGl0b3IsXFxuLmxhYmVsLWVkaXRvciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQyKTtcXG4gICAgei1pbmRleDogOTk5O1xcbn1cXG5cXG4ucXVpY2stYWRkLXRvZG8gPiAqLFxcbi5xdWljay1hZGQtdG9kbyBpbnB1dCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucXVpY2stYWRkLXRvZG8gPiBkaXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodDkyKTtcXG4gICAgbWF4LXdpZHRoOiA0ODBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgcGFkZGluZzogLjVyZW0gLjVyZW0gLjVyZW0gLjVyZW07XFxufVxcblxcbi5xdWljay1hZGQtdG9kbyA+IGRpdiA+ICo6bm90KDpmaXJzdC1jaGlsZCkge1xcbiAgICBtYXJnaW46IC41cmVtIDAgMCAwO1xcbn1cXG5cXG4ucXVpY2stYWRkLXRvZG8gYnV0dG9uIHtcXG4gICAgcGFkZGluZzogLjI1cmVtO1xcbn1cXG5cXG4ucXVpY2stYWRkLXRvZG8gYnV0dG9uOmZpcnN0LWNoaWxkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFyaW5lcik7XFxufVxcblxcbi5xdWljay1hZGQtdG9kbyBidXR0b246aG92ZXIsXFxuLnF1aWNrLWFkZC10b2RvIGJ1dHRvbjpmb2N1cy12aXNpYmxlIHtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0OTIpO1xcbn1cXG5cXG4ucXVpY2stYWRkLXRvZG8ub24ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4ubm90aWZpY2F0aW9ucyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaW5zZXQ6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICB6LWluZGV4OiA5OTk7XFxufVxcblxcbi5ub3RpZi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodDkyKTtcXG4gICAgbWFyZ2luOiA0MHB4IDAgYXV0byBhdXRvO1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG4gICAgbWF4LXdpZHRoOiA0MjBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC1oZWlnaHQ6IDMyMHB4O1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDhweCAwIHJnYigwIDAgMCAvIDglKSxcXG4gICAgICAgIDAgMCAxcHggMCByZ2IoMCAwIDAgLyAzMCUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi5ub3RpZi1jb250YWluZXIgbmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMCAwIC4yNXJlbSAwO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tdHJhbnNwYXJlbnQyKTtcXG59XFxuXFxuLm5vdGlmLWNvbnRhaW5lciBuYXYgPiAqIHtcXG4gICAgZm9udC1zaXplOiAuOXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubm90aWYtY29udGFpbmVyIGJ1dHRvbjpmaXJzdC1vZi10eXBle1xcbiAgICBtYXJnaW46IDAgMCAwIC41cmVtO1xcbn1cXG5cXG4ubmF2LWJ0bi1ub3RpZmljYXRpb24gc21hbGwge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxcbiAgICBjb2xvcjogdmFyKC0tYXVidXJuKTtcXG4gICAgbWFyZ2luLWxlZnQ6IC0uODVyZW07IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWxpYnUpO1xcbiAgICBwYWRkaW5nOiAwIDFweDtcXG59XFxuXFxuLm5hdi1idG4tbm90aWZpY2F0aW9uOmhvdmVyIHNtYWxsLFxcbi5uYXYtYnRuLW5vdGlmaWNhdGlvbjpmb2N1cy12aXNpYmxlIHNtYWxsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQhaW1wb3J0YW50O1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQ5MikhaW1wb3J0YW50O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnJlYWQtYWxsLWJ0biB7XFxuICAgIG1hcmdpbjogMCAwIDAgYXV0byFpbXBvcnRhbnQ7XFxufVxcblxcbi5yZWFkLWFsbC1idG4gc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4ubm90aWYtb3V0cHV0IHtcXG4gICAgbWFyZ2luOiAwIC4yNXJlbTtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgLyogb3ZlcmZsb3cteDogaGlkZGVuOyAqL1xcbn1cXG5cXG4ubm90aWYtb3V0cHV0ID4gKiB7XFxuICAgIG1hcmdpbjogLjI1cmVtIDAgMCAwO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tdHJhbnNwYXJlbnQxKTtcXG4gICAgcGFkZGluZzogMCAwIC4yNXJlbSAwO1xcbiAgICBcXG59XFxuXFxuLm5vdGlmIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm5vdGlmID4gKixcXG4ubm90aWYtZXh0cmEgYnV0dG9uIHNwYW57XFxuICAgIGZvbnQtc2l6ZTogLjlyZW07ICBcXG59XFxuXFxuLm5vdGlmID4gc3BhbiB7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG5cXG4ubm90aWYtZXh0cmEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ub3RpZiBzbWFsbCB7XFxuICAgIGNvbG9yOiB2YXIoLS1hdWJ1cm4pO1xcbn1cXG5cXG4ubm90aWZpY2F0aW9ucy5vbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuXFxufVxcblxcbi5hcHAuc2VhcmNoIC5hZGQtdGFzay1idG4tZGl2e1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucHJvamVjdC1jcmVhdG9yID4gZGl2LFxcbi5sYWJlbC1jcmVhdG9yID4gZGl2LFxcbi50b2RvLWVkaXRvciA+IGRpdixcXG4ucHJvamVjdC1lZGl0b3IgPiBkaXYsXFxuLmxhYmVsLWVkaXRvciA+IGRpdiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0OTIpO1xcbiAgICBtYXgtd2lkdGg6IDQyMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4ucHJvamVjdC1jcmVhdG9yID4gZGl2ID4gKixcXG4ubGFiZWwtY3JlYXRvciA+IGRpdiA+ICosXFxuLnRvZG8tZWRpdG9yID4gZGl2ID4gKixcXG4ucHJvamVjdC1lZGl0b3IgPiBkaXYgPiAqLFxcbi5sYWJlbC1lZGl0b3IgPiBkaXYgPiAqIHtcXG4gICAgcGFkZGluZzogLjVyZW07XFxuICAgIG1hcmdpbjogMCAwIC4yNXJlbSAwO1xcbn1cXG5cXG4ucHJvamVjdC1jcmVhdG9yID4gZGl2ID4gKjpmaXJzdC1jaGlsZCwgXFxuLnByb2plY3QtY3JlYXRvciA+IGRpdiA+ICo6bnRoLWNoaWxkKDIpLFxcbi5sYWJlbC1jcmVhdG9yID4gZGl2ID4gKjpmaXJzdC1jaGlsZCwgXFxuLmxhYmVsLWNyZWF0b3IgPiBkaXYgPiAqOm50aC1jaGlsZCgyKSxcXG4udG9kby1lZGl0b3IgPiBkaXYgPiAqOmZpcnN0LWNoaWxkLCBcXG4udG9kby1lZGl0b3IgPiBkaXYgPiAqOm50aC1jaGlsZCgyKSxcXG4ucHJvamVjdC1lZGl0b3IgPiBkaXYgPiAqOmZpcnN0LWNoaWxkLFxcbi5wcm9qZWN0LWVkaXRvciA+IGRpdiA+ICo6bnRoLWNoaWxkKDIpLFxcbi5sYWJlbC1lZGl0b3IgPiBkaXYgPiAqOmZpcnN0LWNoaWxkLFxcbi5sYWJlbC1lZGl0b3IgPiBkaXYgPiAqOm50aC1jaGlsZCgyKSB7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS10cmFuc3BhcmVudDEpO1xcbn1cXG5cXG4ucHJvamVjdC1jcmVhdG9yID4gZGl2LFxcbi5wcm9qZWN0LWlucHV0LFxcbi5sYWJlbC1jcmVhdG9yID4gZGl2LFxcbi5sYWJlbC1pbnB1dCxcXG4udG9kby1lZGl0b3IgPiBkaXYsXFxuLnRvZG8tZWRpdG9yLWlucHV0LFxcbi5wcm9qZWN0LWVkaXRvciA+IGRpdixcXG4ucHJvamVjdC1lZGl0b3ItaW5wdXQsXFxuLmxhYmVsLWVkaXRvciA+IGRpdixcXG4ubGFiZWwtZWRpdG9yLWlucHV0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnByb2plY3QtaW5wdXQgPiAqLFxcbi5sYWJlbC1pbnB1dCA+ICosXFxuLnRvZG8tZWRpdG9yLWlucHV0ID4gKixcXG4ucHJvamVjdC1lZGl0b3ItaW5wdXQgPiAqLFxcbi5sYWJlbC1lZGl0b3ItaW5wdXQgPiAqIHtcXG4gICAgbWFyZ2luOiAwIDAgLjI1cmVtIDA7XFxufVxcblxcbi5wcm9qZWN0LWlucHV0IGlucHV0LFxcbi5sYWJlbC1pbnB1dCBpbnB1dCxcXG4udG9kby1lZGl0b3ItaW5wdXQgaW5wdXQsXFxuLnRvZG8tZWRpdG9yLWlucHV0IHNlbGVjdCxcXG4ucHJvamVjdC1lZGl0b3ItaW5wdXQgaW5wdXQsXFxuLmxhYmVsLWVkaXRvci1pbnB1dCBpbnB1dCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICBwYWRkaW5nOiAuMjVyZW07XFxufVxcblxcbi50b2RvLWVkaXRvci1pbnB1dCB7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi50b2RvLWVkaXRvci1pbnB1dCB7XFxuICAgIHBhZGRpbmctdG9wOiAwIWltcG9ydGFudDtcXG59XFxuXFxuLnRvZG8tZWRpdG9yLWlucHV0IGxhYmVsIHtcXG4gICAgbWFyZ2luOiAuMjVyZW0gMCAuMXJlbSAwO1xcbn1cXG5cXG4ucHJvamVjdC1idXR0b25zLFxcbi5sYWJlbC1idXR0b25zLFxcbi50b2RvLWVkaXRvci1idXR0b25zLFxcbi51cGRhdGUtcHJvamVjdC1idXR0b25zLFxcbi51cGRhdGUtbGFiZWwtYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7ICAgIFxcbiAgICBtYXJnaW4tYm90dG9tOiAwIWltcG9ydGFudDtcXG59XFxuXFxuLnByb2plY3QtY3JlYXRvciBidXR0b24sXFxuLmxhYmVsLWNyZWF0b3IgYnV0dG9uLFxcbi50b2RvLWVkaXRvciBidXR0b24sXFxuLnByb2plY3QtZWRpdG9yIGJ1dHRvbixcXG4ubGFiZWwtZWRpdG9yIGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IC4yNXJlbTtcXG4gICAgbWFyZ2luOiAwIDAgMCAuMjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50MSk7XFxufVxcblxcbi5wcm9qZWN0LWNyZWF0b3IgYnV0dG9uOmZpcnN0LWNoaWxkLFxcbi5sYWJlbC1jcmVhdG9yIGJ1dHRvbjpmaXJzdC1jaGlsZCxcXG4udG9kby1lZGl0b3IgYnV0dG9uOmZpcnN0LWNoaWxkLFxcbi5wcm9qZWN0LWVkaXRvciBidXR0b246Zmlyc3QtY2hpbGQsXFxuLmxhYmVsLWVkaXRvciBidXR0b246Zmlyc3QtY2hpbGQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYXJpbmVyKTtcXG59XFxuXFxuLnVwZGF0ZS1wcm9qZWN0LWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCgzKSxcXG4udXBkYXRlLWxhYmVsLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCgzKSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWF1YnVybik7XFxufVxcblxcbi5wcm9qZWN0LWNyZWF0b3Iub24sXFxuLmxhYmVsLWNyZWF0b3Iub24sXFxuLnRvZG8tZWRpdG9yLm9uLFxcbi5wcm9qZWN0LWVkaXRvci5vbixcXG4ubGFiZWwtZWRpdG9yLm9uIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLnByb2plY3QtaW5wdXQgaW5wdXQ6Zm9jdXMtdmlzaWJsZSxcXG4ubGFiZWwtaW5wdXQgaW5wdXQ6Zm9jdXMtdmlzaWJsZSxcXG4udG9kby1lZGl0b3ItaW5wdXQgaW5wdXQ6Zm9jdXMtdmlzaWJsZSxcXG4ucHJvamVjdC1lZGl0b3ItaW5wdXQgaW5wdXQ6Zm9jdXMtdmlzaWJsZSxcXG4ubGFiZWwtZWRpdG9yLWlucHV0IGlucHV0OmZvY3VzLXZpc2libGUge1xcbiAgICBvdXRsaW5lOiAxcHggc29saWQgdmFyKC0tdHJhbnNwYXJlbnQyKTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xcbiAgICAubmF2LWNvbXAge1xcbiAgICAgICAgcGFkZGluZzogLjVyZW0gLjVyZW0gLjVyZW0gLjVyZW07XFxuICAgIH1cXG4gICAgLmluZm8tY29tcCB7XFxuICAgICAgICBwYWRkaW5nOiAxcmVtIC4yNXJlbSAuMjVyZW0gLjI1cmVtO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgei1pbmRleDogMTAwMDtcXG4gICAgICAgIHRvcDogNDcuNTlweDtcXG4gICAgICAgIGJvdHRvbTogMDtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG4gICAgLmluZm8tY29tcC5zaG93LW5hdiB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB9XFxuICAgIC5pbmZvLWNvbXAgPiAqIHtcXG4gICAgICAgIHdpZHRoOiAyOTRweDtcXG4gICAgfVxcbiAgICAuY29udGFpbmVyID4gaGVhZGVyIHtcXG4gICAgICAgIHBhZGRpbmc6IDFyZW0gMCAuNXJlbSAwO1xcbiAgICB9XFxuICAgIC5jb250YWluZXIge1xcbiAgICAgICAgcGFkZGluZzogMCAxcmVtIDAgMXJlbTtcXG4gICAgfVxcbiAgICAucXVpY2stYWRkLXRvZG8gPiBkaXYge1xcbiAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XFxuICAgIC5pbmZvLWNvbXAgPiAqIHtcXG4gICAgICAgIHdpZHRoOiAyNDJweDtcXG4gICAgfVxcbiAgICAuc2VhcmNoLWlucHV0IHtcXG4gICAgICAgIHdpZHRoOiAxODBweDtcXG4gICAgfVxcbiAgICAuc2VhcmNoLWlucHV0OmZvY3VzIHtcXG4gICAgICAgIHdpZHRoOiAxODBweDtcXG4gICAgfVxcbiAgICAucXVpY2stYWRkLXRvZG8gPiBkaXYge1xcbiAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcXG4gICAgfVxcbiAgICAubm90aWYtY29udGFpbmVyIHtcXG4gICAgICAgIG1heC13aWR0aDogMzEwcHg7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjFweCkge1xcbiAgICAuc2VhcmNoLWlucHV0IHtcXG4gICAgICAgIG1heC13aWR0aDogMTM1cHg7XFxuICAgIH1cXG4gICAgLnNlYXJjaC1pbnB1dDpmb2N1cyB7XFxuICAgICAgICBtYXgtd2lkdGg6IDEzNXB4O1xcbiAgICB9XFxuICAgIC5xdWljay1hZGQtdG9kbyA+IGRpdiB7XFxuICAgICAgICBtYXgtd2lkdGg6IDI3MHB4O1xcbiAgICB9XFxuICAgIC5ub3RpZi1jb250YWluZXIge1xcbiAgICAgICAgbWF4LXdpZHRoOiAyNzBweDtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA0MjBweCkge1xcbiAgICAudG9kby1lZGl0b3ItaW5wdXQge1xcbiAgICAgICAgbWF4LWhlaWdodDogMTgwcHg7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBnZXRUYXJnZXQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRUYXJnZXQuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gZnVuY3Rpb24oY3NzLCBzdHlsZSl7XG4gICAgICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgICAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gICAgICB9IGVsc2Uge1xuICAgICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgICB9XG5cbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICAgIH1cbiAgfTtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IGZ1bmN0aW9uKHN0eWxlKSB7XG4gICAgICAgIHZhciBub25jZSA9XG4gICAgICAgICAgdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgICAgIGlmIChub25jZSkge1xuICAgICAgICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgICAgICAgfVxuICAgICAgfTtcbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oc3R5bGUpe1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoXCJoZWFkXCIpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCJcbiAgICAgICk7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFRhcmdldDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlbWJlZExvY2FsU3RvcmFnZSA9ICgoKSA9PiB7XG4gICAgaWYoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpKVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvcycsIEpTT04uc3RyaW5naWZ5KHt0b2RvbGlzdDogW10sIHByb2plY3RzOiBbXSwgbGFiZWxzOiBbXX0pKTtcbn0pKCk7XG5cbmNvbnN0IFRvZG8gPSBmdW5jdGlvbiggaWQsIHRpdGxlLCBkdWVEYXRlLCBub3RlLCBwcmlvcml0eSwgcHJvamVjdCwgbGFiZWwsIGR1ZURhdGVOb3RpZlNlbnQgKXtcbiAgICByZXR1cm4geyBpZCwgdGl0bGUsIGR1ZURhdGUsIG5vdGUsIHByaW9yaXR5LCBwcm9qZWN0LCBsYWJlbCwgZHVlRGF0ZU5vdGlmU2VudCB9XG59O1xuXG5jb25zdCBpc0VtcHR5VG9Eb0xpc3QgPSAoKSA9PiB7XG4gICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpKTtcbiAgICByZXR1cm4gIWRhdGEudG9kb2xpc3QubGVuZ3RoID8gdHJ1ZSA6IGZhbHNlO1xufTtcblxuY29uc3QgcHVzaCA9ICgoKSA9PiB7XG4gICAgbGV0IF9kYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MnKSk7XG5cbiAgICBjb25zdCBfZW1iZWQgPSAoKSA9PiB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvcycsIEpTT04uc3RyaW5naWZ5KF9kYXRhKSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGdlbmVyYXRlSWQgPSAoKSA9PiB7XG4gICAgICAgIGxldCBpZCA9IF9kYXRhLnRvZG9saXN0Lmxlbmd0aCArIDE7XG5cbiAgICAgICAgaWYoX2RhdGEudG9kb2xpc3QubGVuZ3RoKXtcbiAgICAgICAgICAgIGxldCBjb3VudGVyID0gMDtcbiAgICAgICAgICAgIF9kYXRhLnRvZG9saXN0LmZvckVhY2goKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKF9kYXRhLnRvZG9saXN0W2NvdW50ZXJdLmlkID09IGlkKSB7IGlkKys7IH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpZDtcbiAgICB9O1xuXG4gICAgY29uc3QgcXVpY2sgPSAodmFsdWUpID0+IHtcbiAgICAgICAgbGV0IHRvZG8gPSBUb2RvKFxuICAgICAgICAgICAgZ2VuZXJhdGVJZCgpLFxuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAnJyxcbiAgICAgICAgICAgICcnLFxuICAgICAgICAgICAgJ3ByaW9yaXR5IDQnLFxuICAgICAgICAgICAgJ2luYm94JyxcbiAgICAgICAgICAgICcnLFxuICAgICAgICAgICAgJ25vbmUnXG4gICAgICAgICk7XG4gICAgICAgIF9kYXRhLnRvZG9saXN0LnB1c2godG9kbyk7XG4gICAgICAgIF9lbWJlZCgpO1xuICAgIH07XG5cbiAgICBjb25zdCBwcm9qZWN0ID0gKHZhbHVlKSA9PiB7XG4gICAgICAgIF9kYXRhLnByb2plY3RzLnB1c2godmFsdWUpXG4gICAgICAgIF9lbWJlZCgpO1xuICAgIH07XG5cbiAgICBjb25zdCBsYWJlbCA9ICh2YWx1ZSkgPT4ge1xuICAgICAgICBfZGF0YS5sYWJlbHMucHVzaCh2YWx1ZSlcbiAgICAgICAgX2VtYmVkKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHRhc2sgPSAodGl0bGUsIGRhdGUgPSAnJywgcHJpb3JpdHkgPSAncHJpb3JpdHkgNCcsIHByb2plY3ROYW1lID0gJ2luYm94JywgXG4gICAgICBsYWJlbE5hbWUgPSAnJykgPT4ge1xuICAgICAgICBsZXQgdG9kbyA9IFRvZG8oXG4gICAgICAgICAgICBnZW5lcmF0ZUlkKCksXG4gICAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICAgIGRhdGUsXG4gICAgICAgICAgICAnJyxcbiAgICAgICAgICAgIHByaW9yaXR5LFxuICAgICAgICAgICAgcHJvamVjdE5hbWUsXG4gICAgICAgICAgICBsYWJlbE5hbWUsXG4gICAgICAgICAgICAnbm9uZSdcbiAgICAgICAgKTtcblxuICAgICAgICBfZGF0YS50b2RvbGlzdC5wdXNoKHRvZG8pO1xuICAgICAgICBfZW1iZWQoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcXVpY2ssXG4gICAgICAgIHByb2plY3QsXG4gICAgICAgIGxhYmVsLFxuICAgICAgICB0YXNrXG4gICAgfVxufSkoKTtcblxuY29uc3QgZGF0ZVN0cmluZyA9ICgoKSA9PiB7XG4gICAgbGV0IGRhdGVOb3c7XG4gICAgbGV0IGRheXMgPSBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddO1xuICAgIGxldCBtb250aHMgPSBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsIFxuICAgICAgICAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddO1xuICAgIFxuICAgIGNvbnN0IGdldFN0cmluZyA9ICh0YXJnZXQpID0+IHtcbiAgICAgICAgbGV0IGRhdGUgPSB0YXJnZXQoKS5nZXREYXRlKCkudG9TdHJpbmcoKTtcbiAgICAgICAgaWYoZGF0ZS5sZW5ndGggPT0gMil7XG4gICAgICAgICAgICByZXR1cm4gYCR7dGFyZ2V0KCkuZ2V0RnVsbFllYXIoKX0tJHt0YXJnZXQoKS5nZXRNb250aCgpKzF9LSR7dGFyZ2V0KCkuZ2V0RGF0ZSgpfWA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gYCR7dGFyZ2V0KCkuZ2V0RnVsbFllYXIoKX0tJHt0YXJnZXQoKS5nZXRNb250aCgpKzF9LTAke3RhcmdldCgpLmdldERhdGUoKX1gO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHRvZGF5ID0gKCkgPT4ge1xuICAgICAgICBkYXRlTm93ID0gbmV3IERhdGUoKTtcbiAgICAgICAgZGF0ZU5vdy5zZXRIb3VycygwLDAsMCwwKTtcbiAgICAgICAgcmV0dXJuIGRhdGVOb3c7XG4gICAgfTtcblxuICAgIGNvbnN0IHRvZGF5U3RyaW5nID0gKCkgPT4gZ2V0U3RyaW5nKHRvZGF5KTtcbiAgICBjb25zdCB0b2RheU5hbWUgPSAoKSA9PiBkYXlzW3RvZGF5KCkuZ2V0RGF5KCldO1xuXG4gICAgY29uc3QgdG9tb3Jyb3cgPSAoKSA9PiB7XG4gICAgICAgIGRhdGVOb3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBkYXRlTm93LnNldERhdGUoZGF0ZU5vdy5nZXREYXRlKCkgKyAxKVxuICAgICAgICBkYXRlTm93LnNldEhvdXJzKDAsMCwwLDApO1xuICAgICAgICByZXR1cm4gZGF0ZU5vdztcbiAgICB9O1xuXG4gICAgY29uc3QgdHdtU3RyaW5nID0gKCkgPT4gZ2V0U3RyaW5nKHRvbW9ycm93KTtcbiAgICBjb25zdCB0b21vcnJvd05hbWUgPSAoKSA9PiBkYXlzW3RvbW9ycm93KCkuZ2V0RGF5KCldO1xuXG4gICAgY29uc3QgbmV4dFdlZWsgPSAoKSA9PiB7XG4gICAgICAgIGRhdGVOb3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBkYXRlTm93LnNldERhdGUoZGF0ZU5vdy5nZXREYXRlKCkgKyA3KVxuICAgICAgICBkYXRlTm93LnNldEhvdXJzKDAsMCwwLDApO1xuICAgICAgICByZXR1cm4gZGF0ZU5vdztcbiAgICB9O1xuXG4gICAgY29uc3QgbmV4dFdlZWtTdHJpbmcgPSAoKSA9PiBnZXRTdHJpbmcobmV4dFdlZWspO1xuXG4gICAgY29uc3QgbmV4dFdlZWtOYW1lID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gYCR7ZGF5c1tuZXh0V2VlaygpLmdldERheSgpXX0gJHtuZXh0V2VlaygpLmdldERhdGUoKX0gJHttb250aHNbbmV4dFdlZWsoKS5nZXRNb250aCgpXX1gO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0b2RheSwgdG9kYXlOYW1lLFxuICAgICAgICB0b21vcnJvdywgdG9tb3Jyb3dOYW1lLFxuICAgICAgICBuZXh0V2VlaywgbmV4dFdlZWtOYW1lLFxuICAgICAgICB0b2RheVN0cmluZywgdHdtU3RyaW5nLCBuZXh0V2Vla1N0cmluZ1xuICAgIH07XG59KSgpO1xuXG5cbmNvbnN0IHRlc3QgPSAoZnVuY3Rpb24oKXtcbiAgICAvLyBjb25zb2xlLmxvZyhkYXRlU3RyaW5nLnRvZGF5U3RyaW5nKCkpXG4gICAgLy8gY29uc29sZS5sb2coRGF0ZS5wYXJzZShkYXRlU3RyaW5nLnRvZGF5U3RyaW5nKCkpKVxuICAgIC8vIGNvbnN0IHRvZG8gPSBUb2RvKFxuICAgIC8vICAgICAxLFxuICAgIC8vICAgICAnZmluaXNoIHRvZG8nLFxuICAgIC8vICAgICAnMjAyMS0wNy0zMScsXG4gICAgLy8gICAgICcnLFxuICAgIC8vICAgICAncHJpb3JpdHkgMScsXG4gICAgLy8gICAgICdpbmJveCcsXG4gICAgLy8gICAgICcnLFxuICAgIC8vICAgICAnbm9uZSdcbiAgICAvLyApO1xuICAgIC8vIGxldCBhcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJykpO1xuICAgIC8vIGlmKCFhcnJheS5sZW5ndGgpe1xuICAgIC8vICAgICBhcnJheS5wdXNoKHRvZG8pO1xuICAgIC8vICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MnLCBKU09OLnN0cmluZ2lmeShhcnJheSkpO1xuICAgIC8vIH1cbiAgICAvLyBjb25zb2xlLmxvZyh0b2RvKVxuXG4gICAgLy8gdmFyIGRhdGVDb250cm9sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImRhdGVcIl0nKTtcbiAgICAvLyBkYXRlQ29udHJvbC52YWx1ZSA9ICcyMDE3LTA2LTAxJztcbiAgICAvLyBjb25zb2xlLmxvZyhkYXRlQ29udHJvbC52YWx1ZSk7IC8vIHByaW50cyBcIjIwMTctMDYtMDFcIlxuICAgIC8vIGNvbnNvbGUubG9nKGRhdGVDb250cm9sLnZhbHVlQXNOdW1iZXIpOyAvLyBwcmludHMgMTQ5NjI3NTIwMDAwMCwgYSBKYXZhU2NyaXB0IHRpbWVzdGFtcCAobXMpXG5cbiAgICAvLyBjb25zdCBkYXRheCA9ICcyMDIxLTA4LTgnO1xuICAgIC8vIGNvbnNvbGUubG9nKGRhdGF4KTtcbiAgICAvLyBjb25zb2xlLmxvZyhEYXRlLnBhcnNlKGRhdGF4KSlcbiAgICAvLyAvLyBjb25zb2xlLmxvZyhkYXRheC52YWx1ZUFzTnVtYmVyKVxuXG4gICAgLy8gY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIC8vIHRvZGF5LnNldEhvdXJzKDAsMCwwLDApO1xuICAgIC8vIGNvbnNvbGUubG9nKCd0b2RheScsIHRvZGF5KTtcbiAgICAvLyBjb25zb2xlLmxvZygndG9kYXkgbnVtYmVyJywgRGF0ZS5wYXJzZSh0b2RheSkpO1xuXG4gICAgLy8gY29uc3QgdG9tb3Jyb3cgPSBuZXcgRGF0ZSgpXG4gICAgLy8gdG9tb3Jyb3cuc2V0RGF0ZSh0b21vcnJvdy5nZXREYXRlKCkgKyAxKVxuICAgIC8vIHRvbW9ycm93LnNldEhvdXJzKDAsMCwwLDApO1xuICAgIC8vIGNvbnNvbGUubG9nKHRvbW9ycm93KTtcbiAgICAvLyBjb25zb2xlLmxvZyhEYXRlLnBhcnNlKHRvbW9ycm93KSlcblxuICAgIC8vIGxldCBkYXlzID0gWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXTtcbiAgICAvLyBsZXQgZCA9IG5ldyBEYXRlKCk7IC8vb3IgZGF0ZVN0cmluZ1xuICAgIC8vIGxldCBkYXlOYW1lID0gZGF5c1tkLmdldERheSgpXTtcbiAgICAvLyBjb25zb2xlLmxvZyhkYXlOYW1lKVxuXG4gICAgLy8gY29uc29sZS5sb2coZGF0ZVN0cmluZy5uZXh0V2VlaygpKTtcbn0pKCk7XG5cbmV4cG9ydCB7IFxuICAgIGVtYmVkTG9jYWxTdG9yYWdlLFxuICAgIGlzRW1wdHlUb0RvTGlzdCxcbiAgICB0ZXN0LFxuICAgIHB1c2gsXG4gICAgZGF0ZVN0cmluZ1xufTtcbiIsImltcG9ydCBjaGlsbGluZ0ltZyBmcm9tICcuL2NoaWxsaW5nLnN2Zyc7XG5pbXBvcnQgeyBlbWJlZExvY2FsU3RvcmFnZSwgaXNFbXB0eVRvRG9MaXN0IH0gZnJvbSAnLi9kYXRhLmpzJztcblxuJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBzZXRMYW5ndWFnZSA9ICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKS5zZXRBdHRyaWJ1dGUoJ2xhbmcnLCAnZW4nKTtcblxuY29uc3Qgc2V0dXBIZWFkVGFnID0gKCkgPT4ge1xuICAgIGNvbnN0IGhlYWRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZCcpO1xuICAgIGNvbnN0IHRpdGxlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RpdGxlJyk7XG5cbiAgICBjb25zdCBuZXdNZXRhRWRnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21ldGEnKTtcbiAgICBjb25zdCBuZXdMaW5rTWF0ZXJpYWxJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgIGNvbnN0IG5ld0xpbmtGYXZpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuXG4gICAgbmV3TWV0YUVkZ2Uuc2V0QXR0cmlidXRlKCdodHRwLWVxdWl2JywnWC1VQS1Db21wYXRpYmxlJyk7XG4gICAgbmV3TWV0YUVkZ2Uuc2V0QXR0cmlidXRlKCdjb250ZW50JywnSUU9ZWRnZScpO1xuICAgIG5ld0xpbmtNYXRlcmlhbEljb24uc2V0QXR0cmlidXRlKCdyZWwnLCAnc3R5bGVzaGVldCcpO1xuICAgIG5ld0xpbmtNYXRlcmlhbEljb25cbiAgICAgICAgLnNldEF0dHJpYnV0ZSgnaHJlZicsICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2ljb24/ZmFtaWx5PU1hdGVyaWFsK0ljb25zK091dGxpbmVkJyk7XG4gICAgbmV3TGlua0Zhdmljb24uc2V0QXR0cmlidXRlKCdyZWwnLCAnaWNvbicpO1xuICAgIG5ld0xpbmtGYXZpY29uLnNldEF0dHJpYnV0ZSgndHlwZScsICdpbWFnZS9wbmcnKTtcbiAgICBuZXdMaW5rRmF2aWNvbi5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnaHR0cHM6Ly9vcGVuY2xpcGFydC5vcmcvaW1hZ2UvNDAwcHgvMzAzMjU0Jyk7XG5cbiAgICBoZWFkRWxlbWVudC5pbnNlcnRCZWZvcmUobmV3TWV0YUVkZ2UsIHRpdGxlRWxlbWVudCk7XG4gICAgaGVhZEVsZW1lbnQuaW5zZXJ0QmVmb3JlKG5ld0xpbmtNYXRlcmlhbEljb24sIHRpdGxlRWxlbWVudCk7XG4gICAgaGVhZEVsZW1lbnQuYXBwZW5kQ2hpbGQobmV3TGlua0Zhdmljb24pO1xufTtcblxuY29uc3QgY3JlYXRlQXBwRGl2ID0gKCkgPT4ge1xuICAgIGNvbnN0IGJvZHlFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIGNvbnN0IGJvZHlTY3JpcHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5IHNjcmlwdCcpO1xuICAgIGNvbnN0IGFwcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgYXBwLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYXBwJyk7XG4gICAgYm9keUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGFwcCwgYm9keVNjcmlwdCk7XG59O1xuXG5jb25zdCBjcmVhdGVBcHBOYXYgPSAoKSA9PiB7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gICAgbmF2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbmF2LWNvbXAnKTtcbiAgICBuYXYuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzID0gXCJuYy1sZWZ0XCI+XG4gICAgICAgICAgICA8YnV0dG9uIGlkID0gXCJuYXZCdG5NZW51XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWRcIj5tZW51PC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGlkID0gXCJuYXZCdG5Ib21lXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWRcIj5ob21lPC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8Zm9ybSBpZCA9IFwiZm9ybVNlYXJjaFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcInNlYXJjaC1kaXZcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWRcIj5zZWFyY2g8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic2VhcmNoXCIgYXJpYS1sYWJlbD1cIlNlYXJjaCB0aHJvdWdoIGFsbCB0b2Rvc1wiIFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3MgPSBcInNlYXJjaC1pbnB1dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkID0gXCJuYXZJbnB1dFNlYXJjaFwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGUgPSBcInJlc2V0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIG1pZFwiPmNsb3NlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3MgPSBcIm5jLXJpZ2h0XCI+XG4gICAgICAgICAgICA8YnV0dG9uIGlkID0gXCJuYXZCdG5RdWlja0FkZFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWlkXCI+YWRkPC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzID0gXCJuYXYtYnRuLW5vdGlmaWNhdGlvblwiIGlkID0gXCJuYXZCdG5Ob3RpZmljYXRpb25cIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIG1pZFwiPm5vdGlmaWNhdGlvbnM8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNtYWxsIGlkID0gXCJuYXZCdG5Ob3RpZmljYXRpb25Db3VudFwiPjwvc21hbGw+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgYDtcbiAgICBcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXBwJykuYXBwZW5kQ2hpbGQobmF2KTtcbn07XG5cbmNvbnN0IGNyZWF0ZUFwcEJvZHkgPSAoKSA9PiB7XG4gICAgY29uc3QgYXBwQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGFwcEJvZHkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdhcHAtYm9keScpO1xuICAgIHdyYXBwZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICd3cmFwcGVyJyk7XG5cbiAgICBhcHBCb2R5LmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcHAnKS5hcHBlbmRDaGlsZChhcHBCb2R5KTtcbn07XG5cbmNvbnN0IGNyZWF0ZVNpZGViYXJOYXYgPSAoKSA9PiB7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG5cbiAgICBuYXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdpbmZvLWNvbXAnKTtcbiAgICBuYXYuc2V0QXR0cmlidXRlKCdpZCcsICduYXZJbmZvQ29tcCcpO1xuICAgIG5hdi5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxidXR0b24gaWQgPSBcInNibmF2SW5ib3hCdG5cIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWlkIGljLXNwYW5cIj5pbmJveDwvc3Bhbj5cbiAgICAgICAgICAgIEluYm94PHNhbXA+PC9zYW1wPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBpZCA9IFwic2JuYXZUb2RheUJ0blwiIGNsYXNzID0gXCJhY3RpdmVcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWlkIGljLXNwYW5cIj5jYWxlbmRhcl90b2RheTwvc3Bhbj5cbiAgICAgICAgICAgIFRvZGF5PHNhbXA+PC9zYW1wPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBpZCA9IFwic2JuYXZVcGNvbUJ0blwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWQgaWMtc3BhblwiPnVwY29taW5nPC9zcGFuPlxuICAgICAgICAgICAgVXBjb21pbmc8c2FtcD48L3NhbXA+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8ZGl2IGNsYXNzID0gXCJpYy1kaXYgaWMtcHJvamVjdFwiIHRhYmluZGV4PVwiMFwiIGlkID0gXCJzYm5hdlByb2plY3RzRGl2XCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIG1pZCBpYy1zcGFuIG9wYVwiPmNoZXZyb25fcmlnaHQ8L3NwYW4+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzID0gXCJpYy1hZGQtYnRuIG9wYVwiIGlkID0gXCJzYm5hdlByb2plY3RBZGRCdG5cIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIG1pZFwiPmFkZDwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPHN0cm9uZz5Qcm9qZWN0czwvc3Ryb25nPlxuICAgICAgICAgICAgPGRpdiBpZCA9IFwicHJvamVjdExpc3RDb250YWluZXJcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcyA9IFwiaWMtZGl2IGljLWxhYmVsXCIgdGFiaW5kZXg9XCIwXCIgaWQgPSBcInNibmF2TGFiZWxzRGl2XCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIG1pZCBpYy1zcGFuIG9wYVwiPmNoZXZyb25fcmlnaHQ8L3NwYW4+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzID0gXCJpYy1hZGQtYnRuIG9wYVwiIGlkID0gXCJzYm5hdkxhYmVsQWRkQnRuXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWRcIj5hZGQ8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxzdHJvbmc+TGFiZWxzPC9zdHJvbmc+XG4gICAgICAgICAgICA8ZGl2IGlkID0gXCJsYWJlbExpc3RDb250YWluZXJcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXBwZXInKS5hcHBlbmRDaGlsZChuYXYpO1xuXG4gICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpKTtcblxuICAgIGlmIChkYXRhLnByb2plY3RzLmxlbmd0aCl7XG4gICAgICAgIGRhdGEucHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImJ1bGxldFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcyA9IFwidW5pcXVlXCI+JHtwcm9qZWN0fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIG1pZFwiPm1vcmVfaG9yaXo8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICBgO1xuICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RMaXN0Q29udGFpbmVyJykuYXBwZW5kQ2hpbGQoZGl2KTsgIFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgaWYgKGRhdGEubGFiZWxzLmxlbmd0aCl7XG4gICAgICAgIGRhdGEubGFiZWxzLmZvckVhY2goKGxhYmVsKT0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIG1pZCB0YWdcIj5sYWJlbDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3MgPSBcInVuaXF1ZVwiPiR7bGFiZWx9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxidXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWlkXCI+bW9yZV9ob3Jpejwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIGA7XG4gICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGFiZWxMaXN0Q29udGFpbmVyJykuYXBwZW5kQ2hpbGQoZGl2KTsgICBcbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxuY29uc3QgY3JlYXRlQ29udGFpbmVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb250YWluZXInKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWluZXInKTtcblxuICAgIGlmKGlzRW1wdHlUb0RvTGlzdCgpKXsvL2ZpeCB1c2luZyBkYXRlcyBzaW5jZSBpdCBkZWZlbmRzIG9uIHRvZGF5J3MgZGF0YVxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZW1wdHknKTtcbiAgICB9XG5cbiAgICBoZWFkZXIuaW5uZXJIVE1MID0gYFxuICAgICAgICA8aDEgaWQgPSBcImhlYWRlclwiPlRvZGF5PC9oMT5cbiAgICBgO1xuICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FkZC10YXNrLWJ0bi1kaXYnKTtcbiAgICBkaXYuc2V0QXR0cmlidXRlKCdpZCcsICdhZGRUYXNrQnRuRGl2Jyk7XG4gICAgZGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGJ1dHRvbiBjbGFzcyA9IFwiYWRkLXRhc2stYnRuXCIgaWQgPSBcImFkZFRhc2tCdG5cIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWlkIHRvb2wtc3BhblwiPmFkZDwvc3Bhbj5cbiAgICAgICAgICAgIEFkZCB0YXNrXG4gICAgICAgIDwvYnV0dG9uPlxuICAgIGA7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRpdik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXBwZXInKS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICBcbiAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIHRvZGF5LnNldEhvdXJzKDAsMCwwLDApO1xuICAgIHRvZGF5ID0gRGF0ZS5wYXJzZSh0b2RheSk7XG4gICAgY29uc29sZS5sb2coJ3Rlc3QnLCB0b2RheSk7XG5cbiAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJykpO1xuXG4gICAgZGF0YS50b2RvbGlzdC5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgIGlmKHRvZGF5ID09IERhdGUucGFyc2UodGFzay5kdWVEYXRlKSl7XG4gICAgICAgICAgICAvLyBmaWxsIG1haW4gd2l0aCB0YXNrIHRoYXQgaXMgc2NoZWR1bGVkIGZvciB0b2RheVxuICAgICAgICAgICAgY29uc29sZS5sb2coJzEnKVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy8gaGVyZVxufTtcblxuY29uc3QgY3JlYXRlQWRkVGFza0RpdiA9ICgpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FkZC10YXNrLWRpdicpO1xuICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZFRhc2tEaXYnKTtcbiAgICBkaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICA8aW5wdXQgdHlwZSA9IFwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVGFzayBuYW1lXCIgaWQgPSBcImFkZFRhc2tJbnB1dFwiPlxuICAgICAgICA8ZGl2IGNsYXNzID0gXCJhZGQtdGFzay1idG5zLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkID0gXCJzZWxlY3RTY2hlZHVsZUJ0blwiIGRhdGEtdmFsdWUgPSBcIlwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIG1pZFwiPmV2ZW50PC9zcGFuPiBTY2hlZHVsZVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQgPSBcInNlbGVjdFByb2plY3RCdG5cIiBjbGFzcyA9IFwic2VsZWN0LXByb2plY3QtYnRuXCIgZGF0YS12YWx1ZSA9IFwiaW5ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWRcIj5pbmJveDwvc3Bhbj4gSW5ib3hcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkID0gXCJzZWxlY3RMYWJlbEJ0blwiIGRhdGEtdmFsdWUgPSBcIlwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIG1pZFwiPmxhYmVsPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQgPSBcInNlbGVjdFByaW9yaXR5QnRuXCIgZGF0YS12YWx1ZSA9IFwicHJpb3JpdHkgNFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIG1pZFwiPmZsYWc8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3MgPSBcInNjaGVkdWxlclwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcyA9IFwic2NoZWRcIiBpZCA9IFwic2NoZWR1bGVyVG9kYXlCdG5cIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5Ub2RheTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBpZCA9IFwic2NoZWR1bGVyVG9kYXlTcGFuXCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzID0gXCJzY2hlZFwiIGlkID0gXCJzY2hlZHVsZXJUd21CdG5cIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5Ub21vcnJvdzwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBpZCA9IFwic2NoZWR1bGVyVHdtU3BhblwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcyA9IFwic2NoZWRcIiBpZCA9IFwic2NoZWR1bGVyTmV4dFdlZWtCdG5cIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5OZXh0IFdlZWs8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gaWQgPSBcInNjaGVkdWxlck5leHRXZWVrU3BhblwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwic2NoZWQtY3VzdG9tXCIgaWQgPSBcInNjaGVkdWxlckN1c3RvbURpdlwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJkYXRlXCIgaWQgPSBcInNjaGVkdWxlckN1c3RvbUlucHV0XCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZCA9IFwic2NoZWR1bGVyQ3VzdG9tQnRuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWlkXCI+ZG9uZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcyA9IFwic2NoZWRcIiBpZCA9IFwic2NoZWR1bGVyTm9EYXRlQnRuXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+Tm8gRGF0ZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBpZCA9IFwic2NoZWR1bGVyTm9EYXRlU3BhblwiPiYjeDIyMDU7PC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzID0gXCJjYXJyaWVyXCIgaWQgPSBcInByb2plY3RTZWxlY3RvclwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBpZCA9IFwicHJvamVjdERlZmF1bHRJbmJveFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWlkXCI+aW5ib3g8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHU+SW5ib3g8L3U+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3MgPSBcImxhYmVsZXJcIj5cbiAgICAgICAgICAgIDxkaXYgaWQgPSBcImxhYmVsQ29udGFpbmVyXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3MgPSBcInByaW8tc2V0dGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGlkID0gXCJwcmlvcml0eUJ0bkNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQgPSBcInByaW9yaXR5T25lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWlkXCI+ZmxhZzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHU+UHJpb3JpdHkgMTwvdT5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkID0gXCJwcmlvcml0eVR3b1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIG1pZFwiPmZsYWc8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDx1PlByaW9yaXR5IDI8L3U+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZCA9IFwicHJpb3JpdHlUaHJlZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIG1pZFwiPmZsYWc8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDx1PlByaW9yaXR5IDM8L3U+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZCA9IFwicHJpb3JpdHlEZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWlkXCI+ZmxhZzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHU+UHJpb3JpdHkgNDwvdT5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpLmFwcGVuZENoaWxkKGRpdik7XG59O1xuXG5jb25zdCBjcmVhdGVNb3JlQ29udGFpbmVySXRlbXMgPSAoKSA9PiB7XG4gICAgY29uc3QgZGl2MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGRpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcblxuICAgIGRpdjEuc2V0QXR0cmlidXRlKCdjbGFzcycsICdhZGQtdGFzay1tYWluLWJ0bnMtY29udGFpbmVyJyk7XG4gICAgZGl2Mi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2VtcHR5LXN0YXRlLWRpdicpO1xuICAgIGRpdjIuc2V0QXR0cmlidXRlKCdpZCcsICdlbXB0eVN0YXRlRGl2Jyk7XG4gICAgZm9vdGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9vdGVyJyk7XG5cbiAgICBkaXYxLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGJ1dHRvbiBpZCA9IFwiYWRkVGFza01haW5CdG5cIj5cbiAgICAgICAgICAgIEFkZCB0YXNrXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGlkID0gXCJhZGRUYXNrQ2FuY2VsQnRuXCI+XG4gICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgPC9idXR0b24+XG4gICAgYDtcbiAgICBkaXYyLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGltZyBzcmM9XCIke2NoaWxsaW5nSW1nfVwiIGRyYWdnYWJsZT1cImZhbHNlXCI+XG4gICAgICAgIDxoND5BbGwgY2xlYXI8L2g0PlxuICAgICAgICA8cD5Mb29rcyBsaWtlIGV2ZXJ5dGhpbmcncyBvcmdhbml6ZWQgaW4gdGhlIHJpZ2h0IHBsYWNlLjwvcD5cbiAgICBgO1xuICAgIGZvb3Rlci5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWlkXCI+aGVscF9vdXRsaW5lPC9zcGFuPlxuICAgICAgICA8cCBpZCA9IFwiaGVscFwiPkhvdyB0byBiZXN0IHVzZSB0aGlzIEFwcDwvcD5cbiAgICBgO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpLmFwcGVuZENoaWxkKGRpdjEpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKS5hcHBlbmRDaGlsZChkaXYyKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJykuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUhpZGRlbk1vZGFscyA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXBwJykuaW5uZXJIVE1MICs9IGBcbiAgICAgICAgPGRpdiBjbGFzcyA9IFwicXVpY2stYWRkLXRvZG9cIiBpZCA9IFwicXVpY2tBZGRUb2RvXCI+XG4gICAgICAgICAgICA8ZGl2IGlkID0gXCJxdWlja0FkZENvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJUYXNrIG5hbWVcIiBpZCA9IFwicXVpY2tBZGRJbnB1dFwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQgPSBcInF1aWNrQWRkU3VibWl0XCI+QWRkIHRhc2s8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZCA9IFwicXVpY2tBZGRDYW5jZWxcIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcyA9IFwibm90aWZpY2F0aW9uc1wiIGlkID0gXCJub3RpZmljYXRpb25zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJub3RpZi1jb250YWluZXJcIiBpZCA9IFwibm90aWZDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8bmF2PlxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPk5vdGlmaWNhdGlvbnM8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcyA9IFwicmVhZC1hbGwtYnRuXCIgaWQgPSBcIm5vdGlmUmVhZEFsbEJ0blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWRcIj5kb25lX2FsbDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwibm90aWYtb3V0cHV0XCIgaWQgPSBcIm5vdGlmT3V0cHV0XCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3MgPSBcInByb2plY3QtY3JlYXRvclwiIGlkID0gXCJwcm9qZWN0Q3JlYXRvclwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8c3Ryb25nPkFkZCBwcm9qZWN0PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwicHJvamVjdC1pbnB1dFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibmV3UHJvamVjdE5hbWVcIj5OYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInRleHRcIiBpZCA9IFwibmV3UHJvamVjdE5hbWVcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJwcm9qZWN0LWJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZCA9IFwicHJvamVjdEFkZEJ1dHRvblwiPkFkZDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkID0gXCJwcm9qZWN0Q2FuY2VsQnV0dG9uXCI+Q2FuY2VsPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3MgPSBcInByb2plY3QtZWRpdG9yXCIgaWQgPSBcInByb2plY3RFZGl0b3JcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHN0cm9uZyBpZCA9IFwicHJvamVjdE5hbWVcIj5Qcm9qZWN0IE5hbWU8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJwcm9qZWN0LWVkaXRvci1pbnB1dFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidXBkYXRlZFByb2plY3ROYW1lXCI+UmVuYW1lIHRvPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInRleHRcIiBpZCA9IFwidXBkYXRlZFByb2plY3ROYW1lXCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwidXBkYXRlLXByb2plY3QtYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkID0gXCJ1cGRhdGVQcm9qZWN0QnRuXCI+VXBkYXRlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQgPSBcImNhbmNlbFByb2plY3RCdG5cIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZCA9IFwiZGVsZXRlUHJvamVjdEJ0blwiPkRlbGV0ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzID0gXCJsYWJlbC1jcmVhdG9yXCIgaWQgPSBcImxhYmVsQ3JlYXRvclwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8c3Ryb25nPkFkZCBsYWJlbDwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImxhYmVsLWlucHV0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJhZGRMYWJlbElucHV0XCI+TmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJ0ZXh0XCIgaWQgPSBcImFkZExhYmVsSW5wdXRcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJsYWJlbC1idXR0b25zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQgPSBcImFkZE5ld0xhYmVsQnRuXCI+QWRkPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQgPSBcImNhbmNlbEFkZExhYmVsQnRuXCI+Q2FuY2VsPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3MgPSBcImxhYmVsLWVkaXRvclwiIGlkID0gXCJsYWJlbEVkaXRvclwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8c3Ryb25nIGlkID0gXCJlZGl0TGFiZWxOYW1lXCI+bGFiZWwgTmFtZTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImxhYmVsLWVkaXRvci1pbnB1dFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidXBkYXRlZExhYmVsTmFtZVwiPlJlbmFtZSB0bzwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJ0ZXh0XCIgaWQgPSBcInVwZGF0ZWRMYWJlbE5hbWVcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJ1cGRhdGUtbGFiZWwtYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkID0gXCJ1cGRhdGVMYWJlbEJ0blwiPlVwZGF0ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkID0gXCJjYW5jZWxVcGRhdGVCdG5cIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZCA9IFwiZGVsZXRlTGFiZWxCdG5cIj5EZWxldGU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcyA9IFwidG9kby1lZGl0b3JcIiBpZCA9IFwidGFza0VkaXRvclwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8c3Ryb25nPkVkaXQgVGFzazwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcInRvZG8tZWRpdG9yLWlucHV0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ1cGRhdGVkVGFza05hbWVcIj5UYXNrIE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9IFwidGV4dFwiIGlkID0gXCJ1cGRhdGVkVGFza05hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInVwZGF0ZWRUYXNrTm90ZVwiPlRhc2sgTm90ZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJ0ZXh0XCIgaWQgPSBcInVwZGF0ZWRUYXNrTm90ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidXBkYXRlZFRhc2tTY2hlZHVsZVwiPlNjaGVkdWxlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cInVwZGF0ZWRUYXNrU2NoZWR1bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ0b2RheVwiPlRvZGF5PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwidG9tb3Jyb3dcIj5Ub21vcnJvdzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm5leHQtd2Vla1wiPk5leHQgV2Vlazwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImN1c3RvbVwiPkN1c3RvbTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm5vLWRhdGVcIj5ObyBEYXRlPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidXBkYXRlZFRhc2tQcm9qZWN0XCI+UHJvamVjdDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJ1cGRhdGVkVGFza1Byb2plY3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJJbmJveFwiPkluYm94PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidXBkYXRlZFRhc2tMYWJlbFwiPkxhYmVsPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cInVwZGF0ZWRUYXNrTGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJub25lXCI+Tm9uZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInVwZGF0ZWRUYXNrUHJpb3JpdHlcIj5Qcmlvcml0eTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJ1cGRhdGVkVGFza1ByaW9yaXR5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicHJpb3JpdHkxXCI+UHJpb3JpdHkgMTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInByaW9yaXR5MlwiPlByaW9yaXR5IDI8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwcmlvcml0eTNcIj5Qcmlvcml0eSAzPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicHJpb3JpdHk0XCI+UHJpb3JpdHkgNDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJ0b2RvLWVkaXRvci1idXR0b25zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQgPSBcInVwZGF0ZVRvZG9cIj5VcGRhdGU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZCA9IFwiY2FuY2VsVXBkYXRlVG9kb1wiPkNhbmNlbDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGA7XG59O1xuXG5jb25zdCBjcmVhdGVBcHAgPSAoKCkgPT4ge1xuICAgIHNldExhbmd1YWdlKCk7XG4gICAgc2V0dXBIZWFkVGFnKCk7XG4gICAgY3JlYXRlQXBwRGl2KCk7XG4gICAgY3JlYXRlQXBwTmF2KCk7XG4gICAgY3JlYXRlQXBwQm9keSgpO1xuICAgIGNyZWF0ZVNpZGViYXJOYXYoKTtcbiAgICBjcmVhdGVDb250YWluZXIoKTtcbiAgICBjcmVhdGVBZGRUYXNrRGl2KCk7XG4gICAgY3JlYXRlTW9yZUNvbnRhaW5lckl0ZW1zKCk7XG4gICAgY3JlYXRlSGlkZGVuTW9kYWxzKCk7XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVBcHA7IiwiaW1wb3J0IHsgaE5hdiwgdk5hdiwgY29udGFpbmVyLCB0YXNrLCBtb2RhbCB9IGZyb20gJy4vc2VsZWN0b3IuanMnO1xuaW1wb3J0IHsgcHVzaCwgZGF0ZVN0cmluZyB9IGZyb20gJy4vZGF0YS5qcyc7XG5cbid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWxlbWVudCA9ICgoKSA9PiB7XG4gICAgbGV0IGZpcnN0Rm9jdXNhYmxlRWxlbWVudDtcbiAgICBsZXQgbGFzdEZvY3VzYWJsZUVsZW1lbnQ7XG4gICAgbGV0IG1vZGFsVG9nZ2xlcjtcbiAgICByZXR1cm4geyBcbiAgICAgICAgZmlyc3RGb2N1c2FibGVFbGVtZW50LCBcbiAgICAgICAgbGFzdEZvY3VzYWJsZUVsZW1lbnQsXG4gICAgICAgIG1vZGFsVG9nZ2xlclxuICAgIH07XG59KSgpO1xuXG5jb25zdCB0YWJFdmVudCA9IChlKSA9PiB7XG4gICAgbGV0IGlzVGFiUHJlc3NlZCA9IGUua2V5ID09PSAnVGFiJztcblxuICAgIGlmICghaXNUYWJQcmVzc2VkKSB7IHJldHVybjsgfVxuXG4gICAgaWYgKGUuc2hpZnRLZXkpIHtcbiAgICAgICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGVsZW1lbnQuZmlyc3RGb2N1c2FibGVFbGVtZW50KSB7XG4gICAgICAgICAgICBlbGVtZW50Lmxhc3RGb2N1c2FibGVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGVsZW1lbnQubGFzdEZvY3VzYWJsZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuZmlyc3RGb2N1c2FibGVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9IFxufTtcblxuY29uc3QgdHJhcEZvY3VzID0gKG1vZGFsLCB0b2dnbGVyKSA9PiB7XG4gICAgY29uc3QgZm9jdXNhYmxlRWxlbWVudHMgPSBcbiAgICAgICAgbW9kYWwucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uLCBpbnB1dCwgc2VsZWN0LCBbdGFiaW5kZXhdOm5vdChbdGFiaW5kZXg9XCItMVwiXSknKTtcbiAgICBlbGVtZW50LmZpcnN0Rm9jdXNhYmxlRWxlbWVudCA9IGZvY3VzYWJsZUVsZW1lbnRzWzBdO1xuICAgIGVsZW1lbnQubGFzdEZvY3VzYWJsZUVsZW1lbnQgPSBmb2N1c2FibGVFbGVtZW50c1tmb2N1c2FibGVFbGVtZW50cy5sZW5ndGgtMV07XG4gICAgZWxlbWVudC5tb2RhbFRvZ2dsZXIgPSB0b2dnbGVyO1xuICAgIFxuICAgIGlmKCh3aW5kb3cuaW5uZXJXaWR0aCA8PSA3NTApICYmIHZOYXYubmF2LmNvbnRhaW5zKGVsZW1lbnQubW9kYWxUb2dnbGVyKSkge1xuICAgICAgICB2TmF2Lm5hdi5jbGFzc0xpc3QucmVtb3ZlKCdzaG93LW5hdicpO1xuICAgIH1cblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0YWJFdmVudCk7XG4gICAgZWxlbWVudC5maXJzdEZvY3VzYWJsZUVsZW1lbnQuZm9jdXMoKTsgXG59O1xuXG5jb25zdCByZW1vdmVUcmFwRm9jdXMgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRhYkV2ZW50KTtcbiAgICBpZigod2luZG93LmlubmVyV2lkdGggPD0gNzUwKSAmJiB2TmF2Lm5hdi5jb250YWlucyhlbGVtZW50Lm1vZGFsVG9nZ2xlcikpIHtcbiAgICAgICAgdk5hdi5uYXYuY2xhc3NMaXN0LmFkZCgnc2hvdy1uYXYnKTtcbiAgICAgICAgdk5hdi5wcm9qZWN0cy5mb2N1cygpO1xuICAgIH1cbiAgICBlbGVtZW50Lm1vZGFsVG9nZ2xlci5mb2N1cygpO1xufTtcblxuY29uc3QgdG9nZ2xlID0gKCgpID0+IHtcbiAgICBjb25zdCBtZW51ID0gKGUpID0+IHtcbiAgICAgICAgaWYod2luZG93LmlubmVyV2lkdGggPiA3NTApe1xuICAgICAgICAgICAgaWYodk5hdi5uYXYuaGFzQXR0cmlidXRlKCdzdHlsZScpKSBcbiAgICAgICAgICAgIHsgdk5hdi5uYXYucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpOyB9XG4gICAgICAgICAgICBlbHNlIHsgdk5hdi5uYXYuc3R5bGUuZGlzcGxheSA9ICdub25lJzsgfVxuICAgICAgICB9IGVsc2UgeyBcbiAgICAgICAgICAgIHZOYXYubmF2LmNsYXNzTGlzdC50b2dnbGUoJ3Nob3ctbmF2Jyk7IFxuICAgICAgICB9XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHF1aWNrQWRkVGFzayA9ICgpID0+IHtcbiAgICAgICAgbW9kYWwucXVpY2tBZGRUYXNrLmNsYXNzTGlzdC50b2dnbGUoJ29uJyk7XG4gICAgICAgIGlmKG1vZGFsLnF1aWNrQWRkVGFzay5jbGFzc0xpc3QuY29udGFpbnMoJ29uJykpIHtcbiAgICAgICAgICAgIG1vZGFsLnF1aWNrQWRkVGFza0lucHV0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICB0cmFwRm9jdXMobW9kYWwucXVpY2tBZGRDb250YWluZXIsIGhOYXYucGx1cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZW1vdmVUcmFwRm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBub3RpZmljYXRpb24gPSAoKSA9PiB7XG4gICAgICAgIG1vZGFsLm5vdGlmaWNhdGlvbi5jbGFzc0xpc3QudG9nZ2xlKCdvbicpO1xuICAgICAgICBpZihtb2RhbC5ub3RpZmljYXRpb24uY2xhc3NMaXN0LmNvbnRhaW5zKCdvbicpKSB7XG4gICAgICAgICAgICB0cmFwRm9jdXMobW9kYWwubm90aWZDb250YWluZXIsIGhOYXYubm90aWZpY2F0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlbW92ZVRyYXBGb2N1cygpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHByb2plY3RzID0gKCkgPT4ge1xuICAgICAgICB2TmF2LnByb2plY3RMaXN0Q29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3cnKTtcbiAgICAgICAgdk5hdi5wcm9qZWN0Q2hldnJvbi5jbGFzc0xpc3QudG9nZ2xlKCdyb3RhdGUnKTtcbiAgICB9O1xuXG4gICAgY29uc3QgYWRkUHJvamVjdCA9IChlKSA9PiB7XG4gICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgIG1vZGFsLnByb2plY3RDcmVhdG9yLmNsYXNzTGlzdC50b2dnbGUoJ29uJyk7XG4gICAgICAgIFxuICAgICAgICBpZihtb2RhbC5wcm9qZWN0Q3JlYXRvci5jbGFzc0xpc3QuY29udGFpbnMoJ29uJykpe1xuICAgICAgICAgICAgbW9kYWwubmV3UHJvamVjdE5hbWUudmFsdWUgPSAnJztcbiAgICAgICAgICAgIHRyYXBGb2N1cyhtb2RhbC5wcm9qZWN0Q3JlYXRvciwgdk5hdi5hZGRQcm9qZWN0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZOYXYucHJvamVjdHMuZm9jdXMoKTtcbiAgICAgICAgICAgIHJlbW92ZVRyYXBGb2N1cygpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGxhYmVscyA9ICgpID0+IHtcbiAgICAgICAgdk5hdi5sYWJlbExpc3RDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpO1xuICAgICAgICB2TmF2LmxhYmVsQ2hldnJvbi5jbGFzc0xpc3QudG9nZ2xlKCdyb3RhdGUnKTtcbiAgICB9O1xuXG4gICAgY29uc3QgYWRkTGFiZWwgPSAoZSkgPT4ge1xuICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICBtb2RhbC5sYWJlbENyZWF0b3IuY2xhc3NMaXN0LnRvZ2dsZSgnb24nKTtcblxuICAgICAgICBpZihtb2RhbC5sYWJlbENyZWF0b3IuY2xhc3NMaXN0LmNvbnRhaW5zKCdvbicpKXtcbiAgICAgICAgICAgIG1vZGFsLmFkZExhYmVsSW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgIHRyYXBGb2N1cyhtb2RhbC5sYWJlbENyZWF0b3IsIHZOYXYuYWRkTGFiZWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdk5hdi5sYWJlbHMuZm9jdXMoKTtcbiAgICAgICAgICAgIHJlbW92ZVRyYXBGb2N1cygpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHRhc2tDcmVhdG9yID0gKCkgPT4ge1xuICAgICAgICBjb250YWluZXIuZGl2LmNsYXNzTGlzdC50b2dnbGUoJ2FkZC10cmlnZ2VyZWQnKTtcbiAgICAgICAgaWYgKGNvbnRhaW5lci5kaXYuY2xhc3NMaXN0LmNvbnRhaW5zKCdhZGQtdHJpZ2dlcmVkJykpe1xuICAgICAgICAgICAgdGFzay5pbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgc2VsZWN0LnJlc2V0KCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgX2l0ZW1NYW5hZ2VyID0gKG5ld0NsYXNzKSA9PiB7XG4gICAgICAgIHRhc2suYWRkRGl2LmNsYXNzTGlzdC50b2dnbGUobmV3Q2xhc3MpO1xuICAgICAgICBpZih0YXNrLmFkZERpdi5jbGFzc0xpc3QuY29udGFpbnMoJ2FkZC10YXNrLWRpdicpIFxuICAgICAgICAmJiB0YXNrLmFkZERpdi5jbGFzc0xpc3QuY29udGFpbnMobmV3Q2xhc3MpKXtcbiAgICAgICAgICAgIHRhc2suYWRkRGl2LmNsYXNzTmFtZSA9IGBhZGQtdGFzay1kaXYgJHtuZXdDbGFzc31gO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHRhc2tTY2hlZHVsZXIgPSAoKSA9PiB7XG4gICAgICAgIF9pdGVtTWFuYWdlcignZGlzcGxheS1zY2hlZHVsZXInKTtcbiAgICAgICAgaWYgKHRhc2suYWRkRGl2LmNsYXNzTGlzdC5jb250YWlucygnZGlzcGxheS1zY2hlZHVsZXInKSkge1xuICAgICAgICAgICAgcmVmcmVzaC5zY2hlZHVsZSgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHRhc2tQcm9qZWN0U2VsZWN0b3IgPSAoKSA9PiB7XG4gICAgICAgIF9pdGVtTWFuYWdlcignZGlzcGxheS1jYXJyaWVyJyk7XG4gICAgICAgIGlmICh0YXNrLmFkZERpdi5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc3BsYXktY2FycmllcicpKXtcbiAgICAgICAgICAgIGRpc3BsYXkudGFza1Byb2plY3RMaXN0KCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgdGFza0xhYmVsZXIgPSAoKSA9PiB7XG4gICAgICAgIF9pdGVtTWFuYWdlcignZGlzcGxheS1sYWJlbGVyJyk7XG4gICAgICAgIGlmICh0YXNrLmFkZERpdi5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc3BsYXktbGFiZWxlcicpKXtcbiAgICAgICAgICAgIGRpc3BsYXkudGFza0xhYmVsTGlzdCgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHRhc2tQcmlvcml0eVNldHRlciA9ICgpID0+IHtcbiAgICAgICAgX2l0ZW1NYW5hZ2VyKCdkaXNwbGF5LXByaW8tc2V0dGVyJyk7XG4gICAgICAgIGlmICh0YXNrLmFkZERpdi5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc3BsYXktcHJpby1zZXR0ZXInKSl7XG4gICAgICAgICAgICBkaXNwbGF5LnRhc2tQcmlvcml0eUxpc3QoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBtZW51LFxuICAgICAgICBxdWlja0FkZFRhc2ssXG4gICAgICAgIG5vdGlmaWNhdGlvbixcbiAgICAgICAgcHJvamVjdHMsIGFkZFByb2plY3QsXG4gICAgICAgIGxhYmVscywgYWRkTGFiZWwsXG4gICAgICAgIHRhc2tDcmVhdG9yLCB0YXNrU2NoZWR1bGVyLCB0YXNrUHJvamVjdFNlbGVjdG9yLCB0YXNrTGFiZWxlciwgdGFza1ByaW9yaXR5U2V0dGVyXG4gICAgfTtcbn0pKCk7XG5cbmNvbnN0IGNsaWNrZXIgPSAoZSkgPT4ge1xuICAgIGlmKGUua2V5ID09PSAnRW50ZXInICYmIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnaWMtZGl2Jykpe1xuICAgICAgICBlLnRhcmdldC5jbGljaygpO1xuICAgIH1cbn07XG5cbmNvbnN0IHZpZXdNYW5hZ2VyID0gKGUpID0+IHtcbiAgICBpZiAodk5hdi5uYXYuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93LW5hdicpICYmICh3aW5kb3cuaW5uZXJXaWR0aCA8PSA3NTApKXtcbiAgICAgICAgaWYoIXZOYXYubmF2LmNvbnRhaW5zKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKSB7IFxuICAgICAgICAgICAgdk5hdi5uYXYuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdy1uYXYnKTsgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZih0YXNrLmFkZERpdi5jbGFzc05hbWUgIT0gJ2FkZC10YXNrLWRpdicpe1xuICAgICAgICBpZighdGFzay5hZGREaXYuY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpe1xuICAgICAgICAgICAgdGFzay5hZGREaXYuY2xhc3NOYW1lID0gJ2FkZC10YXNrLWRpdic7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5jb25zdCBkaXNwbGF5ID0gKCgpID0+IHtcblxuICAgIGNvbnN0IF9nZXRMYXN0V29yZCA9IChzdHJpbmcpID0+IHtcbiAgICAgICAgbGV0IHdvcmQgPSBzdHJpbmcuc3BsaXQoXCIgXCIpO1xuICAgICAgICByZXR1cm4gd29yZFt3b3JkLmxlbmd0aCAtIDFdO1xuICAgIH07XG5cbiAgICBjb25zdCB0b2RvbGlzdCA9IChlKSA9PiB7XG4gICAgICAgIGNvbnRhaW5lci5oZWFkZXIuaW5uZXJUZXh0ID0gX2dldExhc3RXb3JkKGUudGFyZ2V0LmlubmVyVGV4dCk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvLWNvbXAgLmFjdGl2ZScpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblxuICAgICAgICBpZih3aW5kb3cuaW5uZXJXaWR0aCA8PSA3NTApe1xuICAgICAgICAgICAgaE5hdi5tZW51LmNsaWNrKCk7bFxuICAgICAgICB9XG4gICAgICAgIC8vIGluc2VydCB0aGUgbG9naWMgaGVyZSwgbG9hZCB0aGUgbGlzdCBvZiBzZWxlY3RlZCBkaXNwbGF5XG4gICAgfTtcblxuICAgIGNvbnN0IGhvbWUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnRhaW5lci5oZWFkZXIuaW5uZXJUZXh0ID0gJ1RvZGF5JztcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZm8tY29tcCAuYWN0aXZlJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIHZOYXYudG9kYXkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgfTtcblxuICAgIGNvbnN0IHRhc2tQcm9qZWN0TGlzdCA9ICgpID0+IHtcbiAgICAgICAgdGFzay5wcm9qZWN0U2VsZWN0b3IuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHRhc2sucHJvamVjdFNlbGVjdG9yLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxidXR0b24gaWQgPSBcInByb2plY3REZWZhdWx0SW5ib3hcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIG1pZFwiPmluYm94PC9zcGFuPlxuICAgICAgICAgICAgICAgIDx1PkluYm94PC91PlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIGA7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0RGVmYXVsdEluYm94Jykub25jbGljayA9IHNlbGVjdC5pbmJveDtcbiAgICAgICAgaWYodGFzay5wcm9qZWN0LmRhdGFzZXQudmFsdWUgPT0gJ2luYm94Jyl7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdERlZmF1bHRJbmJveCcpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJykpO1xuXG4gICAgICAgIGRhdGEucHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWlkXCI+Y2lyY2xlPC9zcGFuPlxuICAgICAgICAgICAgICAgIDx1PiR7cHJvamVjdH08L3U+XG4gICAgICAgICAgICBgO1xuICAgICAgICAgICAgdGFzay5wcm9qZWN0U2VsZWN0b3IuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICAgICAgICAgIGlmKHRhc2sucHJvamVjdC5kYXRhc2V0LnZhbHVlID09IHByb2plY3Qpe1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnV0dG9uLm9uY2xpY2sgPSBzZWxlY3QucHJvamVjdDsgICAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHRhc2tMYWJlbExpc3QgPSAoKSA9PiB7XG4gICAgICAgIHRhc2subGFiZWxDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHRhc2subGFiZWxDb250YWluZXIuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGJ1dHRvbiBpZCA9IFwibGFiZWxOb25lXCI+XG4gICAgICAgICAgICAgICAgPHU+Tm8gTGFiZWw8L3U+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgYDtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGFiZWxOb25lJykub25jbGljayA9IHNlbGVjdC5ub0xhYmVsO1xuICAgICAgICBpZih0YXNrLmxhYmVsLmRhdGFzZXQudmFsdWUgPT0gJycpe1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xhYmVsTm9uZScpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJykpO1xuXG4gICAgICAgIGRhdGEubGFiZWxzLmZvckVhY2goKGxhYmVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWRcIj5sYWJlbDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8dT4ke2xhYmVsfTwvdT5cbiAgICAgICAgICAgIGA7XG4gICAgICAgICAgICB0YXNrLmxhYmVsQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgICAgICAgICBpZih0YXNrLmxhYmVsLmRhdGFzZXQudmFsdWUgPT0gbGFiZWwpe1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnV0dG9uLm9uY2xpY2sgPSBzZWxlY3QubGFiZWw7ICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCB0YXNrUHJpb3JpdHlMaXN0ID0gKCkgPT4ge1xuICAgICAgICB0YXNrLnByaW9yaXR5Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGFzay5wcmlvcml0eS5kYXRhc2V0LnZhbHVlID09ICdwcmlvcml0eSA0Jyl7XG4gICAgICAgICAgICB0YXNrLnByaW9yaXR5Rm91ci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgfSBlbHNlIGlmICh0YXNrLnByaW9yaXR5LmRhdGFzZXQudmFsdWUgPT0gJ3ByaW9yaXR5IDMnKXtcbiAgICAgICAgICAgIHRhc2sucHJpb3JpdHlUaHJlZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgfSBlbHNlIGlmICh0YXNrLnByaW9yaXR5LmRhdGFzZXQudmFsdWUgPT0gJ3ByaW9yaXR5IDInKXtcbiAgICAgICAgICAgIHRhc2sucHJpb3JpdHlUd28uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXNrLnByaW9yaXR5T25lLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHRvZG9saXN0LFxuICAgICAgICBob21lLFxuICAgICAgICB0YXNrUHJvamVjdExpc3QsXG4gICAgICAgIHRhc2tMYWJlbExpc3QsXG4gICAgICAgIHRhc2tQcmlvcml0eUxpc3RcbiAgICB9O1xufSkoKTtcblxuY29uc3QgcmVmcmVzaCA9ICgoKSA9PiB7XG4gICAgbGV0IGRhdGE7XG5cbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9ICgpID0+IHtcbiAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJykpO1xuXG4gICAgICAgIGlmIChkYXRhLnByb2plY3RzLmxlbmd0aCl7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdExpc3RDb250YWluZXInKS5pbm5lckhUTUwgPSAnJztcblxuICAgICAgICAgICAgZGF0YS5wcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KT0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBkaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJidWxsZXRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzID0gXCJ1bmlxdWVcIj4ke3Byb2plY3R9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWRcIj5tb3JlX2hvcml6PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICBgO1xuICAgICAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdExpc3RDb250YWluZXInKS5hcHBlbmRDaGlsZChkaXYpOyAgXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBsYWJlbExpc3QgPSAoKSA9PiB7XG4gICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpKTtcblxuICAgICAgICBpZiAoZGF0YS5sYWJlbHMubGVuZ3RoKXtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsYWJlbExpc3RDb250YWluZXInKS5pbm5lckhUTUwgPSAnJztcblxuICAgICAgICAgICAgZGF0YS5sYWJlbHMuZm9yRWFjaCgobGFiZWwpPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGRpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWlkIHRhZ1wiPmxhYmVsPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3MgPSBcInVuaXF1ZVwiPiR7bGFiZWx9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWRcIj5tb3JlX2hvcml6PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICBgO1xuICAgICAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGFiZWxMaXN0Q29udGFpbmVyJykuYXBwZW5kQ2hpbGQoZGl2KTsgICBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHNjaGVkdWxlID0gKCkgPT4ge1xuICAgICAgICB0YXNrLnNwYW5Ub2RheS5pbm5lclRleHQgPSBkYXRlU3RyaW5nLnRvZGF5TmFtZSgpO1xuICAgICAgICB0YXNrLnNwYW5Ud20uaW5uZXJUZXh0ID0gZGF0ZVN0cmluZy50b21vcnJvd05hbWUoKTtcbiAgICAgICAgdGFzay5zcGFuTmV4dFdlZWsuaW5uZXJUZXh0ID0gZGF0ZVN0cmluZy5uZXh0V2Vla05hbWUoKTtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWRkLXRhc2stZGl2IC5hY3RpdmUnKS5mb3JFYWNoKChlbGVtZW50KT0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0YXNrLnNjaGVkdWxlLmRhdGFzZXQudmFsdWUgPT0gJycpe1xuICAgICAgICAgICAgdGFzay5zY2hlZE5vRGF0ZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgfSBlbHNlIGlmICh0YXNrLnNjaGVkdWxlLmlubmVyVGV4dCA9PSAnVG9kYXknKXtcbiAgICAgICAgICAgIHRhc2suc2NoZWRUb2RheS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgfSBlbHNlIGlmICh0YXNrLnNjaGVkdWxlLmlubmVyVGV4dCA9PSAnVG9tb3Jyb3cnKXtcbiAgICAgICAgICAgIHRhc2suc2NoZWRUd20uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGFzay5zY2hlZHVsZS5pbm5lclRleHQgPT0gJ05leHQgV2Vlaycpe1xuICAgICAgICAgICAgdGFzay5zY2hlZE5leHRXZWVrLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFzay5zY2hlZEN1c3RvbURpdi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9qZWN0TGlzdCxcbiAgICAgICAgbGFiZWxMaXN0LFxuICAgICAgICBzY2hlZHVsZVxuICAgIH07XG59KSgpO1xuXG5jb25zdCBhZGQgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHF1aWNrID0gKCkgPT4ge1xuICAgICAgICBpZighbW9kYWwucXVpY2tBZGRUYXNrSW5wdXQudmFsdWUpe1xuICAgICAgICAgICAgYWxlcnQoJ1Rhc2sgbmFtZSByZXF1aXJlZCEnKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHB1c2gucXVpY2sobW9kYWwucXVpY2tBZGRUYXNrSW5wdXQudmFsdWUpO1xuICAgICAgICB0b2dnbGUucXVpY2tBZGRUYXNrKCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCk9PiBhbGVydCgnQWRkZWQgdG8gSW5ib3ghJyksIDUwMCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHByb2plY3QgPSAoKSA9PiB7XG4gICAgICAgIGlmKCFtb2RhbC5uZXdQcm9qZWN0TmFtZS52YWx1ZSl7XG4gICAgICAgICAgICBhbGVydCgnUHJvamVjdCBuYW1lIHJlcXVpcmVkIScpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcHVzaC5wcm9qZWN0KG1vZGFsLm5ld1Byb2plY3ROYW1lLnZhbHVlKTtcbiAgICAgICAgbW9kYWwucHJvamVjdENyZWF0b3IuY2xhc3NMaXN0LnRvZ2dsZSgnb24nKTtcbiAgICAgICAgc2V0VGltZW91dCgoKT0+IGFsZXJ0KCdBZGRlZCB0byBQcm9qZWN0cyEnKSwgNTAwKTtcbiAgICAgICAgcmVmcmVzaC5wcm9qZWN0TGlzdCgpO1xuICAgIH07XG5cbiAgICBjb25zdCBsYWJlbCA9ICgpID0+IHtcbiAgICAgICAgaWYoIW1vZGFsLmFkZExhYmVsSW5wdXQudmFsdWUpe1xuICAgICAgICAgICAgYWxlcnQoJ0xhYmVsIG5hbWUgcmVxdWlyZWQhJylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBwdXNoLmxhYmVsKG1vZGFsLmFkZExhYmVsSW5wdXQudmFsdWUpO1xuICAgICAgICBtb2RhbC5sYWJlbENyZWF0b3IuY2xhc3NMaXN0LnRvZ2dsZSgnb24nKTtcbiAgICAgICAgc2V0VGltZW91dCgoKT0+IGFsZXJ0KCdBZGRlZCB0byBMYWJlbHMhJyksIDUwMCk7XG4gICAgICAgIHJlZnJlc2gubGFiZWxMaXN0KCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHRvZG8gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYoIXRhc2suaW5wdXQudmFsdWUpe1xuICAgICAgICAgICAgYWxlcnQoJ1Rhc2sgbmFtZSByZXF1aXJlZCEnKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcHVzaC50YXNrKFxuICAgICAgICAgICAgdGFzay5pbnB1dC52YWx1ZSxcbiAgICAgICAgICAgIHRhc2suc2NoZWR1bGUuZGF0YXNldC52YWx1ZSxcbiAgICAgICAgICAgIHRhc2sucHJpb3JpdHkuZGF0YXNldC52YWx1ZSxcbiAgICAgICAgICAgIHRhc2sucHJvamVjdC5kYXRhc2V0LnZhbHVlLFxuICAgICAgICAgICAgdGFzay5sYWJlbC5kYXRhc2V0LnZhbHVlXG4gICAgICAgICk7XG5cbiAgICAgICAgbGV0IHByb2plY3QgPSB0YXNrLnByb2plY3QuZGF0YXNldC52YWx1ZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICBhbGVydChgQWRkZWQgdG8gJHtwcm9qZWN0fSFgKTtcbiAgICAgICAgdG9nZ2xlLnRhc2tDcmVhdG9yKCk7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHF1aWNrLFxuICAgICAgICBwcm9qZWN0LFxuICAgICAgICBsYWJlbCxcbiAgICAgICAgdG9kb1xuICAgIH07XG59KSgpO1xuXG5jb25zdCBzZWxlY3QgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHJlc2V0ID0gKCkgPT4ge1xuICAgICAgICB0YXNrLnNjaGVkdWxlLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWlkXCI+ZXZlbnQ8L3NwYW4+IFNjaGVkdWxlXG4gICAgICAgIGA7XG4gICAgICAgIHRhc2suc2NoZWRDdXN0b21JbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICB0YXNrLnNjaGVkdWxlLmRhdGFzZXQudmFsdWUgPSAnJztcbiAgICAgICAgdGFzay5wcm9qZWN0LmRhdGFzZXQudmFsdWUgPSAnaW5ib3gnO1xuICAgICAgICB0YXNrLnByb2plY3QuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWRcIj5pbmJveDwvc3Bhbj4gSW5ib3hcbiAgICAgICAgYDtcbiAgICAgICAgdGFzay5sYWJlbC5kYXRhc2V0LnZhbHVlID0gJyc7XG4gICAgICAgIHRhc2sucHJpb3JpdHkuZGF0YXNldC52YWx1ZSA9ICdwcmlvcml0eSA0JztcbiAgICB9O1xuXG4gICAgY29uc3Qgc2NoZWR1bGUgPSAoZSkgPT4ge1xuICAgICAgICBpZihlLmN1cnJlbnRUYXJnZXQuaW5uZXJUZXh0LmluY2x1ZGVzKCdUb2RheScpKXtcbiAgICAgICAgICAgIHRhc2suc2NoZWR1bGUuaW5uZXJUZXh0ID0gJ1RvZGF5JztcbiAgICAgICAgICAgIHRhc2suc2NoZWR1bGUuZGF0YXNldC52YWx1ZSA9IGRhdGVTdHJpbmcudG9kYXlTdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIGlmIChlLmN1cnJlbnRUYXJnZXQuaW5uZXJUZXh0LmluY2x1ZGVzKCdUb21vcnJvdycpKXtcbiAgICAgICAgICAgIHRhc2suc2NoZWR1bGUuaW5uZXJUZXh0ID0gJ1RvbW9ycm93JztcbiAgICAgICAgICAgIHRhc2suc2NoZWR1bGUuZGF0YXNldC52YWx1ZSA9IGRhdGVTdHJpbmcudHdtU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZS5jdXJyZW50VGFyZ2V0LmlubmVyVGV4dC5pbmNsdWRlcygnV2VlaycpKXtcbiAgICAgICAgICAgIHRhc2suc2NoZWR1bGUuaW5uZXJUZXh0ID0gJ05leHQgV2Vlayc7XG4gICAgICAgICAgICB0YXNrLnNjaGVkdWxlLmRhdGFzZXQudmFsdWUgPSBkYXRlU3RyaW5nLm5leHRXZWVrU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXNrLnNjaGVkdWxlLmlubmVyVGV4dCA9ICdObyBEYXRlJztcbiAgICAgICAgICAgIHRhc2suc2NoZWR1bGUuZGF0YXNldC52YWx1ZSA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIHRvZ2dsZS50YXNrU2NoZWR1bGVyKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGN1c3RvbVNjaGVkID0gKCkgPT4ge1xuICAgICAgICBpZighdGFzay5zY2hlZEN1c3RvbUlucHV0LnZhbHVlKXtcbiAgICAgICAgICAgIGFsZXJ0KCdEYXRlIHJlcXVpcmVkIScpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgbmV3RGF0ZSA9IG5ldyBEYXRlKHRhc2suc2NoZWRDdXN0b21JbnB1dC52YWx1ZSk7XG4gICAgICAgICAgICBuZXdEYXRlLnNldEhvdXJzKDAsMCwwLDApO1xuXG4gICAgICAgICAgICBsZXQgZGF0ZSA9IG5ld0RhdGUuZ2V0RGF0ZSgpLnRvU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIGlmKGRhdGUubGVuZ3RoID09IDIpe1xuICAgICAgICAgICAgICAgIG5ld0RhdGUgPSBgJHtuZXdEYXRlLmdldEZ1bGxZZWFyKCl9LSR7bmV3RGF0ZS5nZXRNb250aCgpKzF9LSR7bmV3RGF0ZS5nZXREYXRlKCl9YDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV3RGF0ZSA9IGAke25ld0RhdGUuZ2V0RnVsbFllYXIoKX0tJHtuZXdEYXRlLmdldE1vbnRoKCkrMX0tMCR7bmV3RGF0ZS5nZXREYXRlKCl9YDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGFzay5zY2hlZHVsZS5pbm5lclRleHQgPSBuZXdEYXRlO1xuICAgICAgICAgICAgdGFzay5zY2hlZHVsZS5kYXRhc2V0LnZhbHVlID0gbmV3RGF0ZTtcbiAgICAgICAgICAgIHRvZ2dsZS50YXNrU2NoZWR1bGVyKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgaW5ib3ggPSAoZSkgPT4ge1xuICAgICAgICB0YXNrLnByb2plY3QuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWRcIj5pbmJveDwvc3Bhbj4gSW5ib3hcbiAgICAgICAgYDtcbiAgICAgICAgdGFzay5wcm9qZWN0LmRhdGFzZXQudmFsdWUgPSAnaW5ib3gnO1xuICAgICAgICB0b2dnbGUudGFza1Byb2plY3RTZWxlY3RvcigpO1xuICAgIH07XG5cbiAgICBjb25zdCBwcm9qZWN0ID0gKGUpID0+IHtcbiAgICAgICAgdGFzay5wcm9qZWN0LmlubmVyVGV4dCA9IGUuY3VycmVudFRhcmdldC5vdXRlclRleHQuc3Vic3RyaW5nKDcpO1xuICAgICAgICB0YXNrLnByb2plY3QuZGF0YXNldC52YWx1ZSA9IHRhc2sucHJvamVjdC5pbm5lclRleHQ7XG4gICAgICAgIHRvZ2dsZS50YXNrUHJvamVjdFNlbGVjdG9yKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGxhYmVsID0gKGUpID0+IHtcbiAgICAgICAgdGFzay5sYWJlbC5kYXRhc2V0LnZhbHVlID0gZS5jdXJyZW50VGFyZ2V0Lm91dGVyVGV4dC5zdWJzdHJpbmcoNik7XG4gICAgICAgIHRvZ2dsZS50YXNrTGFiZWxlcigpO1xuICAgIH07XG5cbiAgICBjb25zdCBub0xhYmVsID0gKCkgPT4ge1xuICAgICAgICB0YXNrLmxhYmVsLmRhdGFzZXQudmFsdWUgPSAnJztcbiAgICAgICAgdG9nZ2xlLnRhc2tMYWJlbGVyKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHByaW9yaXR5ID0gKGUpID0+IHtcbiAgICAgICAgbGV0IGRhdGEgPSBlLmN1cnJlbnRUYXJnZXQub3V0ZXJUZXh0LnN1YnN0cmluZyg1KS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB0YXNrLnByaW9yaXR5LmRhdGFzZXQudmFsdWUgPSBkYXRhO1xuICAgICAgICB0b2dnbGUudGFza1ByaW9yaXR5U2V0dGVyKCk7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHJlc2V0LFxuICAgICAgICBzY2hlZHVsZSwgY3VzdG9tU2NoZWQsXG4gICAgICAgIGluYm94LCBwcm9qZWN0LCBsYWJlbCwgbm9MYWJlbCwgcHJpb3JpdHlcbiAgICB9O1xufSkoKTtcblxuY29uc3Qgdmlld3BvcnRMaXN0ZW5lciA9ICgpID0+IHtcbiAgICB2TmF2Lm5hdi5oYXNBdHRyaWJ1dGUoJ3N0eWxlJylcbiAgICAgICAgPyB2TmF2Lm5hdi5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJykgOiB2TmF2Lm5hdi5jbGFzc0xpc3QucmVtb3ZlKCdkaXNwbGF5LW5hdicpO1xufTtcblxuY29uc3QgZXZlbnQgPSAoKCkgPT4ge1xuICAgIGhOYXYubWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZS5tZW51KTtcblxuICAgIGhOYXYucGx1cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZS5xdWlja0FkZFRhc2spO1xuICAgIG1vZGFsLnF1aWNrQWRkVGFza0NhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICB0b2dnbGUucXVpY2tBZGRUYXNrKTtcblxuICAgIGhOYXYubm90aWZpY2F0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlLm5vdGlmaWNhdGlvbik7XG4gICAgbW9kYWwubm90aWZSZWFkQWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlLm5vdGlmaWNhdGlvbik7XG5cbiAgICB2TmF2LnByb2plY3RzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlLnByb2plY3RzKTtcbiAgICB2TmF2LnByb2plY3RzLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgY2xpY2tlcik7XG4gICAgdk5hdi5hZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlLmFkZFByb2plY3QpO1xuICAgIG1vZGFsLmNhbmNlbFByb2plY3RDcmVhdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlLmFkZFByb2plY3QpO1xuXG4gICAgdk5hdi5sYWJlbHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGUubGFiZWxzKTtcbiAgICB2TmF2LmxhYmVscy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGNsaWNrZXIpO1xuICAgIHZOYXYuYWRkTGFiZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGUuYWRkTGFiZWwpO1xuICAgIG1vZGFsLmNhbmNlbExhYmVsQ3JlYXRvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZS5hZGRMYWJlbCk7XG5cbiAgICBjb250YWluZXIuYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZS50YXNrQ3JlYXRvcik7XG4gICAgdGFzay5jYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGUudGFza0NyZWF0b3IpO1xuICAgIHRhc2suc2NoZWR1bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGUudGFza1NjaGVkdWxlcik7XG4gICAgdGFzay5wcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlLnRhc2tQcm9qZWN0U2VsZWN0b3IpO1xuICAgIHRhc2subGFiZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGUudGFza0xhYmVsZXIpO1xuICAgIHRhc2sucHJpb3JpdHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGUudGFza1ByaW9yaXR5U2V0dGVyKTtcblxuICAgIHZOYXYuaW5ib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5LnRvZG9saXN0KTtcbiAgICB2TmF2LnRvZGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheS50b2RvbGlzdCk7XG4gICAgaE5hdi5ob21lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheS5ob21lKTtcbiAgICB2TmF2LnVwY29taW5nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheS50b2RvbGlzdCk7XG5cbiAgICBtb2RhbC5xdWlja0FkZFRhc2tTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGQucXVpY2spO1xuICAgIG1vZGFsLnByb2plY3RBZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGQucHJvamVjdCk7XG4gICAgbW9kYWwuYWRkTmV3TGFiZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGQubGFiZWwpO1xuXG4gICAgdGFzay5hZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGQudG9kbyk7XG4gICAgdGFzay5zY2hlZFRvZGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VsZWN0LnNjaGVkdWxlKTtcbiAgICB0YXNrLnNjaGVkVHdtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VsZWN0LnNjaGVkdWxlKTtcbiAgICB0YXNrLnNjaGVkTmV4dFdlZWsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWxlY3Quc2NoZWR1bGUpO1xuICAgIHRhc2suc2NoZWROb0RhdGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWxlY3Quc2NoZWR1bGUpO1xuICAgIHRhc2suc2NoZWRDdXN0b21CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWxlY3QuY3VzdG9tU2NoZWQpO1xuXG4gICAgdGFzay5wcmlvcml0eUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKS5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VsZWN0LnByaW9yaXR5KTtcbiAgICB9KTtcblxuICAgIC8vZml4IGRhdGEuanMgZmlyc3QgYmVmb3JlIGFkZGluZyBldmVudHMgaW4gbGFiZWwsIHByb2plY3QsIGFuZCB0b2RvIGVkaXRvclxuXG4gICAgd2luZG93Lm9uY2xpY2sgPSB2aWV3TWFuYWdlcjtcbiAgICB3aW5kb3cub25yZXNpemUgPSB2aWV3cG9ydExpc3RlbmVyO1xuXG4gICAgLy9lc2Mga2V5dXAgdGhhdCBjbG9zZXMgbW9kYWxzIHdpbGwgYmUgY29vbFxuXG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBldmVudDsiLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGhOYXYgPSAoKCkgPT4ge1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2QnRuTWVudScpO1xuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2QnRuSG9tZScpO1xuICAgIGNvbnN0IGZvcm1TZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybVNlYXJjaCcpO1xuICAgIGNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYXZJbnB1dFNlYXJjaCcpO1xuICAgIGNvbnN0IHBsdXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2QnRuUXVpY2tBZGQnKTtcbiAgICBjb25zdCBub3RpZmljYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2QnRuTm90aWZpY2F0aW9uJyk7XG4gICAgY29uc3Qgbm90aWZDb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYXZCdG5Ob3RpZmljYXRpb25Db3VudCcpO1xuXG4gICAgcmV0dXJuIHsgXG4gICAgICAgIG1lbnUsIGhvbWUsIFxuICAgICAgICBmb3JtU2VhcmNoLCBzZWFyY2gsIFxuICAgICAgICBwbHVzLCBub3RpZmljYXRpb24sIG5vdGlmQ291bnQgfTtcbn0pKCk7XG5cbmNvbnN0IHZOYXYgPSAoKCkgPT4ge1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYXZJbmZvQ29tcCcpO1xuICAgIGNvbnN0IGluYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NibmF2SW5ib3hCdG4nKTtcbiAgICBjb25zdCBpbmJveENvdW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2JuYXZJbmJveEJ0biA+IHNhbXAnKTtcbiAgICBjb25zdCB0b2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzYm5hdlRvZGF5QnRuJyk7XG4gICAgY29uc3QgdG9kYXlDb3VudGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NibmF2VG9kYXlCdG4gPiBzYW1wJyk7XG4gICAgY29uc3QgdXBjb21pbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2JuYXZVcGNvbUJ0bicpO1xuICAgIGNvbnN0IHVwY29taW5nQ291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzYm5hdlVwY29tQnRuID4gc2FtcCcpO1xuICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NibmF2UHJvamVjdHNEaXYnKTtcbiAgICBjb25zdCBwcm9qZWN0Q2hldnJvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzYm5hdlByb2plY3RzRGl2ID4gc3BhbicpO1xuICAgIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2JuYXZQcm9qZWN0QWRkQnRuJyk7XG4gICAgY29uc3QgcHJvamVjdExpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdExpc3RDb250YWluZXInKTtcbiAgICBjb25zdCBsYWJlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2JuYXZMYWJlbHNEaXYnKTtcbiAgICBjb25zdCBsYWJlbENoZXZyb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2JuYXZMYWJlbHNEaXYgPiBzcGFuJyk7XG4gICAgY29uc3QgYWRkTGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2JuYXZMYWJlbEFkZEJ0bicpO1xuICAgIGNvbnN0IGxhYmVsTGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsYWJlbExpc3RDb250YWluZXInKTtcblxuICAgIHJldHVybiB7IFxuICAgICAgICBuYXYsXG4gICAgICAgIGluYm94LCBpbmJveENvdW50ZXIsXG4gICAgICAgIHRvZGF5LCB0b2RheUNvdW50ZXIsXG4gICAgICAgIHVwY29taW5nLCB1cGNvbWluZ0NvdW50ZXIsXG4gICAgICAgIHByb2plY3RzLCBwcm9qZWN0Q2hldnJvbiwgYWRkUHJvamVjdCwgcHJvamVjdExpc3RDb250YWluZXIsXG4gICAgICAgIGxhYmVscywgbGFiZWxDaGV2cm9uLCBhZGRMYWJlbCwgbGFiZWxMaXN0Q29udGFpbmVyXG4gICAgfTtcbn0pKCk7XG5cbmNvbnN0IGNvbnRhaW5lciA9ICgoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhaW5lcicpO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoZWFkZXInKTtcbiAgICBjb25zdCBhZGRUYXNrQnRuRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFRhc2tCdG5EaXYnKTtcbiAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFRhc2tCdG4nKTtcbiAgICBjb25zdCBlbXB0eVN0YXRlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VtcHR5U3RhdGVEaXYnKTtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9vdGVyJyk7XG4gICAgY29uc3QgaGVscCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoZWxwJyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBkaXYsXG4gICAgICAgIGhlYWRlcixcbiAgICAgICAgYWRkVGFza0J0bkRpdiwgYWRkVGFza0J0bixcbiAgICAgICAgZW1wdHlTdGF0ZURpdiwgZm9vdGVyLCBoZWxwXG4gICAgfTtcbn0pKCk7XG5cbmNvbnN0IHRhc2sgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGFkZERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRUYXNrRGl2Jyk7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkVGFza0lucHV0Jyk7XG4gICAgY29uc3Qgc2NoZWR1bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VsZWN0U2NoZWR1bGVCdG4nKTtcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlbGVjdFByb2plY3RCdG4nKTtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWxlY3RMYWJlbEJ0bicpO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlbGVjdFByaW9yaXR5QnRuJyk7XG4gICAgY29uc3QgYWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFRhc2tNYWluQnRuJyk7XG4gICAgY29uc3QgY2FuY2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFRhc2tDYW5jZWxCdG4nKTtcblxuICAgIGNvbnN0IHNjaGVkVG9kYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2NoZWR1bGVyVG9kYXlCdG4nKTtcbiAgICBjb25zdCBzcGFuVG9kYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2NoZWR1bGVyVG9kYXlTcGFuJyk7XG4gICAgY29uc3Qgc2NoZWRUd20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2NoZWR1bGVyVHdtQnRuJyk7XG4gICAgY29uc3Qgc3BhblR3bSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzY2hlZHVsZXJUd21TcGFuJyk7XG4gICAgY29uc3Qgc2NoZWROZXh0V2VlayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzY2hlZHVsZXJOZXh0V2Vla0J0bicpO1xuICAgIGNvbnN0IHNwYW5OZXh0V2VlayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzY2hlZHVsZXJOZXh0V2Vla1NwYW4nKTtcbiAgICBjb25zdCBzY2hlZEN1c3RvbUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NjaGVkdWxlckN1c3RvbUlucHV0Jyk7XG4gICAgY29uc3Qgc2NoZWRDdXN0b21EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2NoZWR1bGVyQ3VzdG9tRGl2Jyk7XG4gICAgY29uc3Qgc2NoZWRDdXN0b21CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2NoZWR1bGVyQ3VzdG9tQnRuJyk7XG4gICAgY29uc3Qgc2NoZWROb0RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2NoZWR1bGVyTm9EYXRlQnRuJyk7XG4gICAgY29uc3QgcHJvamVjdFNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RTZWxlY3RvcicpO1xuICAgIGNvbnN0IGxhYmVsQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xhYmVsQ29udGFpbmVyJyk7XG4gICAgY29uc3QgcHJpb3JpdHlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHlCdG5Db250YWluZXInKTtcbiAgICBjb25zdCBwcmlvcml0eU9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eU9uZScpO1xuICAgIGNvbnN0IHByaW9yaXR5VHdvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5VHdvJyk7XG4gICAgY29uc3QgcHJpb3JpdHlUaHJlZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eVRocmVlJyk7XG4gICAgY29uc3QgcHJpb3JpdHlGb3VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5RGVmYXVsdCcpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5wdXQsXG4gICAgICAgIHNjaGVkdWxlLCBwcm9qZWN0LFxuICAgICAgICBsYWJlbCwgcHJpb3JpdHksXG4gICAgICAgIGFkZERpdiwgYWRkLCBjYW5jZWwsXG4gICAgICAgIHNjaGVkVG9kYXksIHNwYW5Ub2RheSxcbiAgICAgICAgc2NoZWRUd20sIHNwYW5Ud20sXG4gICAgICAgIHNjaGVkTmV4dFdlZWssIHNwYW5OZXh0V2VlayxcbiAgICAgICAgc2NoZWRDdXN0b21JbnB1dCwgc2NoZWRDdXN0b21EaXYsIHNjaGVkQ3VzdG9tQnRuLFxuICAgICAgICBzY2hlZE5vRGF0ZSxcbiAgICAgICAgcHJvamVjdFNlbGVjdG9yLFxuICAgICAgICBsYWJlbENvbnRhaW5lcixcbiAgICAgICAgcHJpb3JpdHlDb250YWluZXIsIHByaW9yaXR5T25lLCBwcmlvcml0eVR3bywgcHJpb3JpdHlUaHJlZSwgcHJpb3JpdHlGb3VyXG4gICAgfVxufSkoKTtcblxuY29uc3QgbW9kYWwgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHF1aWNrQWRkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNxdWlja0FkZFRvZG8nKTtcbiAgICBjb25zdCBxdWlja0FkZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNxdWlja0FkZENvbnRhaW5lcicpO1xuICAgIGNvbnN0IHF1aWNrQWRkVGFza0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3F1aWNrQWRkSW5wdXQnKTtcbiAgICBjb25zdCBxdWlja0FkZFRhc2tTdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcXVpY2tBZGRTdWJtaXQnKTtcbiAgICBjb25zdCBxdWlja0FkZFRhc2tDYW5jZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcXVpY2tBZGRDYW5jZWwnKTtcbiAgICBjb25zdCBub3RpZmljYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbm90aWZpY2F0aW9ucycpO1xuICAgIGNvbnN0IG5vdGlmQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25vdGlmQ29udGFpbmVyJyk7XG4gICAgY29uc3Qgbm90aWZSZWFkQWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25vdGlmUmVhZEFsbEJ0bicpO1xuICAgIGNvbnN0IG5vdGlmT3V0cHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignbm90aWZPdXRwdXQnKTtcbiAgICBjb25zdCBwcm9qZWN0Q3JlYXRvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0Q3JlYXRvcicpO1xuICAgIGNvbnN0IG5ld1Byb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ld1Byb2plY3ROYW1lJyk7XG4gICAgY29uc3QgcHJvamVjdEFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0QWRkQnV0dG9uJyk7XG4gICAgY29uc3QgY2FuY2VsUHJvamVjdENyZWF0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdENhbmNlbEJ1dHRvbicpO1xuICAgIGNvbnN0IHByb2plY3RFZGl0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdEVkaXRvcicpO1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3ROYW1lJyk7XG4gICAgY29uc3QgdXBkYXRlZFByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VwZGF0ZWRQcm9qZWN0TmFtZScpO1xuICAgIGNvbnN0IHVwZGF0ZVByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXBkYXRlUHJvamVjdEJ0bicpO1xuICAgIGNvbnN0IGNhbmNlbFByb2plY3RFZGl0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FuY2VsUHJvamVjdEJ0bicpO1xuICAgIGNvbnN0IGRlbGV0ZVByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVsZXRlUHJvamVjdEJ0bicpO1xuICAgIGNvbnN0IGxhYmVsQ3JlYXRvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsYWJlbENyZWF0b3InKTtcbiAgICBjb25zdCBhZGRMYWJlbElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZExhYmVsSW5wdXQnKTtcbiAgICBjb25zdCBhZGROZXdMYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGROZXdMYWJlbEJ0bicpO1xuICAgIGNvbnN0IGNhbmNlbExhYmVsQ3JlYXRvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW5jZWxBZGRMYWJlbEJ0bicpO1xuICAgIGNvbnN0IGxhYmVsRWRpdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xhYmVsRWRpdG9yJyk7XG4gICAgY29uc3QgZWRpdExhYmVsTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0TGFiZWxOYW1lJyk7XG4gICAgY29uc3QgdXBkYXRlZExhYmVsTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1cGRhdGVkTGFiZWxOYW1lJyk7XG4gICAgY29uc3QgdXBkYXRlTGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXBkYXRlTGFiZWxCdG4nKTtcbiAgICBjb25zdCBjYW5jZWxMYWJlbEVkaXRvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW5jZWxVcGRhdGVCdG4nKTtcbiAgICBjb25zdCBkZWxldGVMYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZWxldGVMYWJlbEJ0bicpO1xuICAgIGNvbnN0IHRhc2tFZGl0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza0VkaXRvcicpO1xuICAgIGNvbnN0IHVwZGF0ZWRUYXNrTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1cGRhdGVkVGFza05hbWUnKTtcbiAgICBjb25zdCB1cGRhdGVkVGFza05vdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXBkYXRlZFRhc2tOb3RlJyk7XG4gICAgY29uc3QgdXBkYXRlZFRhc2tTY2hlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1cGRhdGVkVGFza1NjaGVkdWxlJyk7XG4gICAgY29uc3QgdXBkYXRlZFRhc2tQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VwZGF0ZWRUYXNrUHJvamVjdCcpO1xuICAgIGNvbnN0IHVwZGF0ZWRUYXNrTGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXBkYXRlZFRhc2tMYWJlbCcpO1xuICAgIGNvbnN0IHVwZGF0ZWRUYXNrUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXBkYXRlZFRhc2tQcmlvcml0eScpO1xuICAgIGNvbnN0IHVwZGF0ZVRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXBkYXRlVG9kbycpO1xuICAgIGNvbnN0IGNhbmNlbFRhc2tFZGl0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FuY2VsVXBkYXRlVG9kbycpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcXVpY2tBZGRUYXNrLCBxdWlja0FkZENvbnRhaW5lciwgcXVpY2tBZGRUYXNrSW5wdXQsIHF1aWNrQWRkVGFza1N1Ym1pdCwgcXVpY2tBZGRUYXNrQ2FuY2VsLFxuICAgICAgICBub3RpZmljYXRpb24sIG5vdGlmQ29udGFpbmVyLCBub3RpZlJlYWRBbGwsIG5vdGlmT3V0cHV0LFxuICAgICAgICBwcm9qZWN0Q3JlYXRvciwgbmV3UHJvamVjdE5hbWUsIHByb2plY3RBZGQsIGNhbmNlbFByb2plY3RDcmVhdG9yLFxuICAgICAgICBwcm9qZWN0RWRpdG9yLCBwcm9qZWN0TmFtZSwgdXBkYXRlZFByb2plY3ROYW1lLCB1cGRhdGVQcm9qZWN0LFxuICAgICAgICAgICAgY2FuY2VsUHJvamVjdEVkaXRvciwgZGVsZXRlUHJvamVjdCxcbiAgICAgICAgbGFiZWxDcmVhdG9yLCBhZGRMYWJlbElucHV0LCBhZGROZXdMYWJlbCwgY2FuY2VsTGFiZWxDcmVhdG9yLFxuICAgICAgICBsYWJlbEVkaXRvciwgZWRpdExhYmVsTmFtZSwgdXBkYXRlZExhYmVsTmFtZSwgdXBkYXRlTGFiZWwsXG4gICAgICAgICAgICBjYW5jZWxMYWJlbEVkaXRvciwgZGVsZXRlTGFiZWwsXG4gICAgICAgIHRhc2tFZGl0b3IsIHVwZGF0ZWRUYXNrTmFtZSwgdXBkYXRlZFRhc2tOb3RlLCB1cGRhdGVkVGFza1NjaGVkLCB1cGRhdGVkVGFza1Byb2plY3QsXG4gICAgICAgICAgICB1cGRhdGVkVGFza0xhYmVsLCB1cGRhdGVkVGFza1ByaW9yaXR5LCB1cGRhdGVUYXNrLCBjYW5jZWxUYXNrRWRpdG9yXG4gICAgfVxufSkoKTtcblxuZXhwb3J0IHsgXG4gICAgaE5hdixcbiAgICB2TmF2LFxuICAgIGNvbnRhaW5lcixcbiAgICB0YXNrLFxuICAgIG1vZGFsXG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgY3JlYXRlQXBwIGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB0ZXN0IGZyb20gJy4vZGF0YS5qcyc7XG5pbXBvcnQgeyBoTmF2LCB2TmF2LCBjb250YWluZXIsIHRhc2ssIG1vZGFsIH0gZnJvbSAnLi9zZWxlY3Rvci5qcyc7XG5pbXBvcnQgZXZlbnQgZnJvbSAnLi9ldmVudC5qcyc7XG5cbid1c2Ugc3RyaWN0JztcblxuLy8gdk5hdi5pbmJveC5vbmNsaWNrID0gZnVuY3Rpb24oKXtcbi8vICAgICBjb25zb2xlLmxvZygxKVxuLy8gfVxuXG4vLyBoTmF2LmZvcm1TZWFyY2gub25zdWJtaXQgPSBmdW5jdGlvbihlKXtcbi8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgaE5hdi5zZWFyY2guYmx1cigpO1xuLy8gICAgIGNvbnNvbGUubG9nKDIpO1xuLy8gfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==