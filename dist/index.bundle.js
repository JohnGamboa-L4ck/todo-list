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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --light92: hsl(0, 0%, 92%);\n    --light88: hsl(0, 0%, 88%);\n    --dark: hsl(0, 0%, 12%);\n    --malibu: hsl(192, 93%, 72%);\n    --auburn: hsl(0, 75%, 65%);\n    --mariner: hsl(216, 75%, 51%);\n    --laurel: hsl(120, 100%, 25%);\n    --purple: hsl(264, 61%, 47%);\n    --sun: hsl(34, 93%, 48%);\n    --transparent1: rgba(0,0,0,.1);\n    --transparent2: rgba(0,0,0,.2);\n\n    --background: var(--light92);\n    --foreground: var(--malibu);\n}\n\n*, *:before, *:after {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;  \n}\n\nhtml,\nbody {\n    overflow-x: hidden;\n}\n\nbody {\n    min-height: 100vh;\n    background-color: var(--background);\n    font-family:sans-serif;\n    color: var(--dark);\n}\n\nbutton,\n.search-input {\n    outline: none;\n    border: none;\n    border-radius: 3px;\n    font-family:sans-serif;\n}\n\nbutton {\n    padding: .125rem;\n    color: var(--dark);\n    background-color: transparent;\n}\n\nbutton,\n.ic-div {\n    cursor: pointer;\n}\n\nspan.mid {\n    vertical-align: middle;\n}\n\nspan,\nh1 {\n    user-select: none;\n}\n\n.app {\n    display: flex;\n    flex-direction: column;\n    width: 100vw;\n    height: 100vh;\n}\n\n.nav-comp ,\n.nc-left,\n.search-div,\n.nc-right {\n    display: inline-flex;\n}\n\n.nav-comp {\n    justify-content: space-between;\n    width: 100%;\n    padding: .5rem 3rem .5rem 3rem;\n    background-color: var(--foreground);\n}\n\n.nc-left > * {\n    margin: 0 .25rem 0 0;\n}\n\n.nc-right > * {\n    margin: 0 0 0 .25rem;\n}\n\n.nc-right button:first-child {\n    margin: 0;\n}\n\n.search-div {\n    height: 100%;\n    background-color: var(--foreground);\n}\n\n.search-div > span:first-child {\n    align-self: center;\n    cursor: text;\n    margin: .1rem;\n    font-size: 1.6rem;\n    z-index: 2;\n}\n\n.search-div button {\n    margin: .2rem 0 .2rem -1.5rem;\n    height: 20px;\n    width: 20px;\n    align-self: center;\n    display: none;\n}\n\n.search-div button:hover,\n.search-div button:focus-visible {\n    color: var(--auburn);\n}\n\n.search-input {\n    padding: 0 1.6rem 0 1.8rem;\n    margin-left: -1.9rem;\n    background-color: var(--transparent1);\n}\n\n.search-input::-webkit-search-cancel-button {\n    -webkit-appearance: none;\n}\n\n.search-input:not(:placeholder-shown) + button {\n    display: block;\n}\n\n.search-div:focus-within .search-input,\n.search-div:hover .search-input,\n.search-input:not(:placeholder-shown){\n    background-color: var(--light92);\n}\n\n.search-div button span {\n    font-size: 1rem;\n}\n\n.app-body {\n    display: flex;\n    flex: 1;\n    max-height: calc(100% - 46.59px);\n    overflow-y: hidden;\n}\n\n.wrapper {\n    height: 100%;\n    width: 100%;\n    display: flex;\n}\n\n.info-comp {\n    display: flex;\n    flex-direction: column;\n    padding: 2rem .25rem 0 2.8rem;\n    background-color: var(--light88);\n    overflow-y: auto;\n}\n\n.info-comp > * {\n    text-align: left;\n    font-size: .9rem;\n    width: 294px;\n    padding: 5px;\n}\n\n.info-comp > * > samp {\n    float: right;\n    opacity: .5;\n    margin: 4px 1rem 4px 0;\n}\n\n.ic-div {\n    margin: .25rem 0 0 0;\n}\n\n.info-comp > div:first-of-type{\n    margin: 1rem 0 0 0;\n}\n\n.ic-span {\n    margin: 0 .25rem 0 0;\n}\n\n.info-comp > button:first-child span {\n    color: var(--mariner);\n}\n\n.info-comp > button:nth-child(2) span {\n    color: var(--laurel);\n}\n\n.info-comp > button:nth-child(3) span {\n    color: var(--purple);\n}\n\n.info-comp .active {\n    background-color: var(--malibu);\n}\n\n.opa {\n    opacity: .5;\n}\n\n.ic-add-btn {\n    float: right;\n    margin: 0px .5rem 0 0;\n    padding: 0;\n    display: none;\n}\n\n.ic-add-btn:hover + strong,\n.ic-add-btn:focus-visible + strong {\n    text-decoration: underline;\n    text-underline-offset: 30%;\n}\n\n.info-comp:focus-within .ic-add-btn,\n.info-comp:hover .ic-add-btn{\n    display: inherit;\n}\n\n.ic-div > div {\n    display: none;\n}\n\n.ic-div > div.show {\n    display: flex;\n    flex-direction: column;\n}\n\n.ic-project > span.rotate,\n.ic-label > span.rotate {\n    transform: rotate(90deg);\n}\n\n\n.show {\n    margin: .75rem 0 0 0;\n}\n\n.show > div {\n    text-align: left;\n    display: flex;\n    padding: .5rem .5rem .5rem .5rem;\n    height: 34px;\n    font-size: .9rem;\n    align-items: center;\n    border-radius: 3px;\n}\n\nspan.unique {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    align-self: center;\n    margin-right: .2rem;\n}\n\n.show button {\n    padding: 0;\n    visibility: hidden;\n}\n\n.show > div:hover,\n.show > div:focus-visible {\n    background-color: var(--transparent2);\n}\n\n.show > div:hover button,\n.show > div:focus-visible button,\n.show > div:focus-within button{\n    visibility: visible;\n    margin-left: auto;\n}\n\n.show button:hover,\n.show button:focus-visible {\n    background-color: transparent!important;\n}\n\n.bullet {\n    min-width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    margin: 0 .7rem 0 .5rem;\n    background-color: var(--transparent2);\n}\n\n.tag {\n    transform: scale(.8);\n    margin: 0 .2rem 0 .2rem;\n    color: var(--transparent2);\n}\n\n.container {\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    overflow-y: auto;\n    padding: 0 2rem 0 2rem;\n\n}\n\n.container > * {\n    max-width: 800px;\n    width: 100%;\n}\n\n.container > footer {\n    margin-top: auto;\n}\n\n.container > header {\n    padding: 2rem 0 1rem 0;\n    position: sticky;\n    top: 0;\n    background-color: var(--light92);\n    z-index: 3;\n}\n\nh1 {\n    font-size: 1.3rem;\n}\n\n.todo {\n    display: flex;\n    padding: 2px 0;\n    margin: .5rem 0 .5rem 0;\n    justify-content: flex-start;\n    flex-direction: row;\n    border-bottom: 1px solid var(--transparent1);\n}\n\n.todo,\n.todo * {\n    cursor: pointer;\n}\n\n.checkbox-btn { \n    height: 18px;\n    max-width: 18px;\n    width: 100%;\n    margin: .27rem .7rem 0 0;\n    z-index: 2;\n    position: relative;\n}\n\n.checkbox-btn.prio1 {\n    border: 2px solid var(--auburn);\n}\n\n.checkbox-btn.prio2 {\n    border: 2px solid var(--sun);\n}\n\n.checkbox-btn.prio3 {\n    border: 2px solid var(--mariner);\n}\n\n.checkbox-btn.prio4 {\n    border: 2px solid var(--transparent2);\n}\n\n.checkbox-btn:hover,\n.checkbox-btn:focus-visible {\n    border-color: transparent;\n    background-color: var(--transparent1);\n}\n\n.checkbox-btn + span {\n    padding: 0;\n    line-height: 1rem;\n    font-size: 2rem;\n    position: relative;\n    color: var(--transparent2);\n    visibility: hidden;\n    float: right;\n    margin: -.9rem 0 0 -1rem;    \n}\n\n.checkbox-btn:hover + span,\n.checkbox-btn:focus-visible + span {\n    visibility: visible;\n}\n\n.checkbox-btn:active + span{\n    color: var(--laurel);\n}\n\n.todo-text {\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n}\n\n.todo-text > label {\n    line-height: 1.4rem;\n}\n\n.todo-text-note {\n    text-indent: 1rem;\n    font-size: .9rem;\n    margin: 0 0 .25rem 0;\n}\n\n.todo-text-note,\n.todo-text-note > span,\n.todo-text small {\n    color: gray;\n}\n\n.todo-text-note > span,\nem,\nem > span {\n    font-size: .9rem!important;\n}\n\n.todo-text small:hover,\n.todo-text small:focus-visible {\n    text-decoration: underline;\n}\n\nem {\n    width: 100%;\n}\n\n.sched-due {\n    color: var(--auburn);\n}\n\n.sched-today {\n    color: var(--laurel);\n}\n\n.sched-upcom {\n    color: var(--purple);\n}\n\n.todo-tools-container {\n    display: flex;\n    justify-content: flex-end;\n    align-items: flex-end;\n    margin: -20px 0 0 0;\n    visibility: hidden;\n}\n\n.todo-tools-container * {\n    color: gray;\n}\n\n.tool-span {\n    font-size: 1.2rem;\n}\n\n.todo:hover .todo-tools-container,\n.todo:focus-within .todo-tools-container {\n    visibility: visible;\n}\n\nbutton:hover,\nbutton:focus-visible {\n    background-color: var(--transparent2);\n}\n\nbutton:focus-visible {\n    outline: auto;\n}\n\n.add-task-btn {\n    text-align: left;\n    color: gray;\n}\n\n.add-task-btn * {\n    padding: .1rem;\n}\n\n.add-task-btn span {\n    border-radius: 50%;\n    padding: 0;\n    color: var(--auburn);\n}\n\n.add-task-btn:hover,\n.add-task-btn:focus-visible,\n.add-task-btn span {\n    background-color: transparent;\n}\n\n.add-task-btn:hover span,\n.add-task-btn:focus-visible span {\n    color: var(--mariner);\n}\n\n.empty-state-div {\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    justify-content: center;\n    align-items: center;\n}\n\n.empty-state-div img {\n    max-width: 180px;\n    \n    height: auto;\n}\n\n.empty-state-div h4 {\n    font-weight: normal;\n    color: gray;\n}\n\n.empty-state-div *:nth-child(n+2) {\n    margin: .25rem 0 0 0;\n}\n\n.empty-state-div *:nth-child(n+2),\n.container footer p {\n    text-align: center;\n}\n\n.empty-state-div p {\n    font-size: .9rem;\n    color: darkgray;\n}\n\n.container footer {\n    color: var(--auburn);\n    font-size: .9rem!important;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: .25rem 0 .75rem 0;\n}\n\n.container footer span {\n    font-size: 1.25rem!important;\n}\n\n.container footer p {\n    text-decoration: underline;\n    cursor: pointer;\n}\n\n.container:not(.empty) .empty-state-div,\n.container:not(.empty) footer {\n    display: none;\n}\n\n.add-task-div {\n    border: 1px solid var(--transparent2);\n    border-radius: 3px;\n    padding: 0 .5rem .5rem .5rem;\n    height: 68.48px;\n    margin-top: 1rem;\n}\n\n.add-task-div > * {\n    margin-top: .5rem;\n}\n\n.add-task-div input,\n.quick-add-todo input {\n    width: 100%;\n    outline: none;\n    border: none;\n    font-size: .9rem;\n    background-color: var(--light92);\n}\n\n.add-task-btns-container {\n    display: flex;\n    justify-content: space-between;\n}\n\n.add-task-btns-container div > button {\n    border: 1px solid var(--transparent2);\n    padding: .25rem;\n}\n\n.add-task-btns-container button > span {\n    font-size: .9rem!important;\n}\n\n.add-task-btns-container > button:nth-child(2) span {\n    color: var(--mariner);\n}\n\n.scheduler,\n.carrier {\n    max-width: 210px;\n    width: 100%;    \n}\n\n.scheduler,\n.carrier,\n.labeler,\n.prio-setter {\n    background-color: var(--light92);\n    border-radius: 3px;\n    z-index: 2;\n    position: relative;\n    margin: 0 0 0 0;\n    box-shadow: 0 1px 8px 0 rgb(0 0 0 / 8%),\n        0 0 1px 0 rgb(0 0 0 / 30%);\n    display: none;\n}\n\n.scheduler > *,\n.carrier > * {\n    width: 100%;\n    text-align: left;\n    padding: .5rem .5rem .5rem .5rem;\n}\n\n.sched {\n    display: flex;\n    justify-content: space-between;\n}\n\n.sched span:nth-child(2) {\n    text-align: right;\n    color: gray;\n}\n\n.scheduler input[type=\"date\"]::-webkit-calendar-picker-indicator {\n    opacity: .4;\n    cursor: pointer;\n}\n\n.scheduler input[type=\"date\"]::-webkit-calendar-picker-indicator:hover {\n    opacity: 1;\n}\n\n.scheduler .sched-custom {\n    display: flex;\n}\n\n.scheduler .sched-custom button {\n    border: 1px solid var(--transparent1);\n}\n\n.scheduler .sched-custom button > span,\n.carrier span,\n.labeler span,\n.prio-setter span {\n    font-size: .9rem!important;\n}\n\n.prio-setter button:first-child span {\n    color: var(--auburn);\n}\n\n.prio-setter button:nth-child(2) span {\n    color: var(--sun);\n}\n\n.prio-setter button:nth-child(3) span {\n    color: var(--mariner);\n}\n\n.prio-setter button:nth-child(4) span {\n    color: gray;\n}\n\n.carrier {\n    margin: 0 0 0 -.7rem;\n    max-width: 160px;\n    width: 100%;\n}\n\n.carrier button,\n.labeler button,\n.prio-setter button {\n    display: flex;\n    align-items: center;\n}\n\n.carrier u,\n.labeler u,\n.prio-setter u {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    margin: 0 0 0 .25rem;\n}\n\n.labeler,\n.prio-setter {\n    background-color: transparent;\n    border: none;\n    box-shadow: none;\n}\n\n.labeler div,\n.prio-setter div {\n    max-width: 160px;\n    width: 100%; \n    display: flex;\n    flex-direction: column;\n    margin: 0 1.8rem 0 auto;\n    background-color: var(--light92);\n    box-shadow: 0 1px 8px 0 rgb(0 0 0 / 8%),\n        0 0 1px 0 rgb(0 0 0 / 30%);\n    border-radius: 3px;\n}\n\n.prio-setter div {\n    margin: 0 0 0 auto;\n    max-width: 88px;\n}\n\n.prio-setter u {\n    text-decoration: none;\n}\n\n.labeler button,\n.prio-setter button {\n    text-align: left;\n    padding: .5rem;\n}\n\n.scheduler .sched-custom button:hover > span,\n.scheduler .sched-custom button:focus-visible > span {\n    color: var(--laurel);\n}\n\n.add-task-div.display-scheduler .scheduler {\n    display: inherit;\n}\n\n.add-task-div.display-carrier .carrier,\n.add-task-div.display-labeler .labeler,\n.add-task-div.display-prio-setter .prio-setter {\n    display: block;\n}\n\n.add-task-div .selected,\n.add-task-div .active {\n    background-color: var(--transparent1);\n}\n\n.add-task-main-btns-container {\n    padding: .5rem 0 .5rem 0;\n}\n\n.add-task-main-btns-container button {\n    padding: .25rem;\n}\n\n.add-task-main-btns-container button:first-child {\n    background-color: var(--malibu);\n    border: 1px solid var(--transparent2);\n}\n\n.container.add-triggered .add-task-btn-div {\n    display: none;\n}\n\n.container:not(.add-triggered) .add-task-div,\n.container:not(.add-triggered) .add-task-main-btns-container {\n    display: none;\n}\n\n.quick-add-todo,\n.project-creator,\n.label-creator,\n.todo-editor,\n.project-editor,\n.label-editor {\n    display: none;\n    position: absolute;\n    place-items: center;\n    height: 100%;\n    width: 100%;\n    background-color: var(--transparent2);\n    z-index: 999;\n}\n\n.quick-add-todo > *,\n.quick-add-todo input {\n    width: 100%;\n}\n\n.quick-add-todo > div {\n    background-color: var(--light92);\n    max-width: 480px;\n    width: 100%;\n    border-radius: 3px;\n    padding: .5rem .5rem .5rem .5rem;\n}\n\n.quick-add-todo > div > *:not(:first-child) {\n    margin: .5rem 0 0 0;\n}\n\n.quick-add-todo button {\n    padding: .25rem;\n}\n\n.quick-add-todo button:first-child {\n    background-color: var(--mariner);\n}\n\n.quick-add-todo button:hover,\n.quick-add-todo button:focus-visible {\n    color: var(--light92);\n}\n\n.quick-add-todo.on {\n    display: grid;\n}\n\n.notifications {\n    display: none;\n    position: absolute;\n    inset: 0;\n    background-color: transparent;\n    z-index: 999;\n}\n\n.notif-container {\n    display: flex;\n    flex-direction: column;\n    background-color: var(--light92);\n    margin: 40px 0 auto auto;\n    padding: .5rem;\n    max-width: 420px;\n    width: 100%;\n    max-height: 320px;\n    overflow-x: hidden;\n    overflow-y: auto;\n    box-shadow: 0 1px 8px 0 rgb(0 0 0 / 8%),\n        0 0 1px 0 rgb(0 0 0 / 30%);\n    border-radius: 3px;\n}\n\n.notif-container nav {\n    display: flex;\n    align-items: center;\n    padding: 0 0 .25rem 0;\n    border-bottom: 1px solid var(--transparent2);\n}\n\n.notif-container nav > * {\n    font-size: .9rem;\n    cursor: pointer;\n}\n\n.notif-container button:first-of-type{\n    margin: 0 0 0 .5rem;\n}\n\n.nav-btn-notification small {\n    position: absolute; \n    color: var(--auburn);\n    margin-left: -.85rem; \n    background-color: var(--malibu);\n    padding: 0 1px;\n}\n\n.nav-btn-notification:hover small,\n.nav-btn-notification:focus-visible small {\n    background-color: transparent!important;\n    color: var(--light92)!important;\n    font-weight: bold;\n}\n\n.read-all-btn {\n    margin: 0 0 0 auto!important;\n}\n\n.read-all-btn span {\n    font-size: 1.2rem;\n}\n\n.notif-output {\n    margin: 0 .25rem;\n    overflow-y: auto;\n    /* overflow-x: hidden; */\n}\n\n.notif-output > * {\n    margin: .25rem 0 0 0;\n    border-bottom: 1px solid var(--transparent1);\n    padding: 0 0 .25rem 0;\n    \n}\n\n.notif {\n    display: flex;\n    flex-direction: column;\n}\n\n.notif > *,\n.notif-extra button span{\n    font-size: .9rem;  \n}\n\n.notif > span {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.notif-extra {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.notif small {\n    color: var(--auburn);\n}\n\n.notifications.on {\n    display: flex;\n\n}\n\n.app.search .add-task-btn-div{\n    display: none;\n}\n\n.project-creator > div,\n.label-creator > div,\n.todo-editor > div,\n.project-editor > div,\n.label-editor > div {\n    background-color: var(--light92);\n    max-width: 420px;\n    width: 100%;\n    border-radius: 3px;\n}\n\n.project-creator > div > *,\n.label-creator > div > *,\n.todo-editor > div > *,\n.project-editor > div > *,\n.label-editor > div > * {\n    padding: .5rem;\n    margin: 0 0 .25rem 0;\n}\n\n.project-creator > div > *:first-child, \n.project-creator > div > *:nth-child(2),\n.label-creator > div > *:first-child, \n.label-creator > div > *:nth-child(2),\n.todo-editor > div > *:first-child, \n.todo-editor > div > *:nth-child(2),\n.project-editor > div > *:first-child,\n.project-editor > div > *:nth-child(2),\n.label-editor > div > *:first-child,\n.label-editor > div > *:nth-child(2) {\n    border-bottom: 1px solid var(--transparent1);\n}\n\n.project-creator > div,\n.project-input,\n.label-creator > div,\n.label-input,\n.todo-editor > div,\n.todo-editor-input,\n.project-editor > div,\n.project-editor-input,\n.label-editor > div,\n.label-editor-input {\n    display: flex;\n    flex-direction: column;\n}\n\n.project-input > *,\n.label-input > *,\n.todo-editor-input > *,\n.project-editor-input > *,\n.label-editor-input > * {\n    margin: 0 0 .25rem 0;\n}\n\n.project-input input,\n.label-input input,\n.todo-editor-input input,\n.todo-editor-input select,\n.project-editor-input input,\n.label-editor-input input {\n    border: none;\n    outline: none;\n    border-radius: 2px;\n    padding: .25rem;\n}\n\n.todo-editor-input {\n    overflow-y: auto;\n}\n\n.todo-editor-input {\n    padding-top: 0!important;\n}\n\n.todo-editor-input label {\n    margin: .25rem 0 .1rem 0;\n}\n\n.project-buttons,\n.label-buttons,\n.todo-editor-buttons,\n.update-project-buttons,\n.update-label-buttons {\n    display: flex;\n    justify-content: flex-end;    \n    margin-bottom: 0!important;\n}\n\n.project-creator button,\n.label-creator button,\n.todo-editor button,\n.project-editor button,\n.label-editor button {\n    padding: .25rem;\n    margin: 0 0 0 .25rem;\n    background-color: var(--transparent1);\n}\n\n.project-creator button:first-child,\n.label-creator button:first-child,\n.todo-editor button:first-child,\n.project-editor button:first-child,\n.label-editor button:first-child {\n    background-color: var(--mariner);\n}\n\n.update-project-buttons button:nth-child(3),\n.update-label-buttons button:nth-child(3) {\n    background-color: var(--auburn);\n}\n\n.project-creator.on,\n.label-creator.on,\n.todo-editor.on,\n.project-editor.on,\n.label-editor.on {\n    display: grid;\n}\n\n.project-input input:focus-visible,\n.label-input input:focus-visible,\n.todo-editor-input input:focus-visible,\n.project-editor-input input:focus-visible,\n.label-editor-input input:focus-visible {\n    outline: 1px solid var(--transparent2);\n}\n\n@media only screen and (max-width: 750px) {\n    .nav-comp {\n        padding: .5rem .5rem .5rem .5rem;\n    }\n    .info-comp {\n        padding: 1rem .25rem .25rem .25rem;\n        position: absolute;\n        z-index: 1000;\n        top: 47.59px;\n        bottom: 0;\n        display: none;\n    }\n    .info-comp.show-nav {\n        display: flex;\n    }\n    .info-comp > * {\n        width: 294px;\n    }\n    .container > header {\n        padding: 1rem 0 .5rem 0;\n    }\n    .container {\n        padding: 0 1rem 0 1rem;\n    }\n    .quick-add-todo > div {\n        max-width: 400px;\n    }\n}\n\n@media only screen and (max-width: 550px) {\n    .info-comp > * {\n        width: 242px;\n    }\n    .search-input {\n        width: 180px;\n    }\n    .search-input:focus {\n        width: 180px;\n    }\n    .quick-add-todo > div {\n        max-width: 300px;\n    }\n    .notif-container {\n        max-width: 310px;\n    }\n}\n\n@media only screen and (max-width: 321px) {\n    .search-input {\n        max-width: 135px;\n    }\n    .search-input:focus {\n        max-width: 135px;\n    }\n    .quick-add-todo > div {\n        max-width: 270px;\n    }\n    .notif-container {\n        max-width: 270px;\n    }\n}\n\n@media only screen and (max-height: 420px) {\n    .todo-editor-input {\n        max-height: 180px;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --light92: hsl(0, 0%, 92%);\n    --light88: hsl(0, 0%, 88%);\n    --dark: hsl(0, 0%, 12%);\n    --malibu: hsl(192, 93%, 72%);\n    --auburn: hsl(0, 75%, 65%);\n    --mariner: hsl(216, 75%, 51%);\n    --laurel: hsl(120, 100%, 25%);\n    --purple: hsl(264, 61%, 47%);\n    --sun: hsl(34, 93%, 48%);\n    --transparent1: rgba(0,0,0,.1);\n    --transparent2: rgba(0,0,0,.2);\n\n    --background: var(--light92);\n    --foreground: var(--malibu);\n}\n\n*, *:before, *:after {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;  \n}\n\nhtml,\nbody {\n    overflow-x: hidden;\n}\n\nbody {\n    min-height: 100vh;\n    background-color: var(--background);\n    font-family:sans-serif;\n    color: var(--dark);\n}\n\nbutton,\n.search-input {\n    outline: none;\n    border: none;\n    border-radius: 3px;\n    font-family:sans-serif;\n}\n\nbutton {\n    padding: .125rem;\n    color: var(--dark);\n    background-color: transparent;\n}\n\nbutton,\n.ic-div {\n    cursor: pointer;\n}\n\nspan.mid {\n    vertical-align: middle;\n}\n\nspan,\nh1 {\n    user-select: none;\n}\n\n.app {\n    display: flex;\n    flex-direction: column;\n    width: 100vw;\n    height: 100vh;\n}\n\n.nav-comp ,\n.nc-left,\n.search-div,\n.nc-right {\n    display: inline-flex;\n}\n\n.nav-comp {\n    justify-content: space-between;\n    width: 100%;\n    padding: .5rem 3rem .5rem 3rem;\n    background-color: var(--foreground);\n}\n\n.nc-left > * {\n    margin: 0 .25rem 0 0;\n}\n\n.nc-right > * {\n    margin: 0 0 0 .25rem;\n}\n\n.nc-right button:first-child {\n    margin: 0;\n}\n\n.search-div {\n    height: 100%;\n    background-color: var(--foreground);\n}\n\n.search-div > span:first-child {\n    align-self: center;\n    cursor: text;\n    margin: .1rem;\n    font-size: 1.6rem;\n    z-index: 2;\n}\n\n.search-div button {\n    margin: .2rem 0 .2rem -1.5rem;\n    height: 20px;\n    width: 20px;\n    align-self: center;\n    display: none;\n}\n\n.search-div button:hover,\n.search-div button:focus-visible {\n    color: var(--auburn);\n}\n\n.search-input {\n    padding: 0 1.6rem 0 1.8rem;\n    margin-left: -1.9rem;\n    background-color: var(--transparent1);\n}\n\n.search-input::-webkit-search-cancel-button {\n    -webkit-appearance: none;\n}\n\n.search-input:not(:placeholder-shown) + button {\n    display: block;\n}\n\n.search-div:focus-within .search-input,\n.search-div:hover .search-input,\n.search-input:not(:placeholder-shown){\n    background-color: var(--light92);\n}\n\n.search-div button span {\n    font-size: 1rem;\n}\n\n.app-body {\n    display: flex;\n    flex: 1;\n    max-height: calc(100% - 46.59px);\n    overflow-y: hidden;\n}\n\n.wrapper {\n    height: 100%;\n    width: 100%;\n    display: flex;\n}\n\n.info-comp {\n    display: flex;\n    flex-direction: column;\n    padding: 2rem .25rem 0 2.8rem;\n    background-color: var(--light88);\n    overflow-y: auto;\n}\n\n.info-comp > * {\n    text-align: left;\n    font-size: .9rem;\n    width: 294px;\n    padding: 5px;\n}\n\n.info-comp > * > samp {\n    float: right;\n    opacity: .5;\n    margin: 4px 1rem 4px 0;\n}\n\n.ic-div {\n    margin: .25rem 0 0 0;\n}\n\n.info-comp > div:first-of-type{\n    margin: 1rem 0 0 0;\n}\n\n.ic-span {\n    margin: 0 .25rem 0 0;\n}\n\n.info-comp > button:first-child span {\n    color: var(--mariner);\n}\n\n.info-comp > button:nth-child(2) span {\n    color: var(--laurel);\n}\n\n.info-comp > button:nth-child(3) span {\n    color: var(--purple);\n}\n\n.info-comp .active {\n    background-color: var(--malibu);\n}\n\n.opa {\n    opacity: .5;\n}\n\n.ic-add-btn {\n    float: right;\n    margin: 0px .5rem 0 0;\n    padding: 0;\n    display: none;\n}\n\n.ic-add-btn:hover + strong,\n.ic-add-btn:focus-visible + strong {\n    text-decoration: underline;\n    text-underline-offset: 30%;\n}\n\n.info-comp:focus-within .ic-add-btn,\n.info-comp:hover .ic-add-btn{\n    display: inherit;\n}\n\n.ic-div > div {\n    display: none;\n}\n\n.ic-div > div.show {\n    display: flex;\n    flex-direction: column;\n}\n\n.ic-project > span.rotate,\n.ic-label > span.rotate {\n    transform: rotate(90deg);\n}\n\n\n.show {\n    margin: .75rem 0 0 0;\n}\n\n.show > div {\n    text-align: left;\n    display: flex;\n    padding: .5rem .5rem .5rem .5rem;\n    height: 34px;\n    font-size: .9rem;\n    align-items: center;\n    border-radius: 3px;\n}\n\nspan.unique {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    align-self: center;\n    margin-right: .2rem;\n}\n\n.show button {\n    padding: 0;\n    visibility: hidden;\n}\n\n.show > div:hover,\n.show > div:focus-visible {\n    background-color: var(--transparent2);\n}\n\n.show > div:hover button,\n.show > div:focus-visible button,\n.show > div:focus-within button{\n    visibility: visible;\n    margin-left: auto;\n}\n\n.show button:hover,\n.show button:focus-visible {\n    background-color: transparent!important;\n}\n\n.bullet {\n    min-width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    margin: 0 .7rem 0 .5rem;\n    background-color: var(--transparent2);\n}\n\n.tag {\n    transform: scale(.8);\n    margin: 0 .2rem 0 .2rem;\n    color: var(--transparent2);\n}\n\n.container {\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    overflow-y: auto;\n    padding: 0 2rem 0 2rem;\n\n}\n\n.container > * {\n    max-width: 800px;\n    width: 100%;\n}\n\n.container > footer {\n    margin-top: auto;\n}\n\n.container > header {\n    padding: 2rem 0 1rem 0;\n    position: sticky;\n    top: 0;\n    background-color: var(--light92);\n    z-index: 3;\n}\n\nh1 {\n    font-size: 1.3rem;\n}\n\n.todo {\n    display: flex;\n    padding: 2px 0;\n    margin: .5rem 0 .5rem 0;\n    justify-content: flex-start;\n    flex-direction: row;\n    border-bottom: 1px solid var(--transparent1);\n}\n\n.todo,\n.todo * {\n    cursor: pointer;\n}\n\n.checkbox-btn { \n    height: 18px;\n    max-width: 18px;\n    width: 100%;\n    margin: .27rem .7rem 0 0;\n    z-index: 2;\n    position: relative;\n}\n\n.checkbox-btn.prio1 {\n    border: 2px solid var(--auburn);\n}\n\n.checkbox-btn.prio2 {\n    border: 2px solid var(--sun);\n}\n\n.checkbox-btn.prio3 {\n    border: 2px solid var(--mariner);\n}\n\n.checkbox-btn.prio4 {\n    border: 2px solid var(--transparent2);\n}\n\n.checkbox-btn:hover,\n.checkbox-btn:focus-visible {\n    border-color: transparent;\n    background-color: var(--transparent1);\n}\n\n.checkbox-btn + span {\n    padding: 0;\n    line-height: 1rem;\n    font-size: 2rem;\n    position: relative;\n    color: var(--transparent2);\n    visibility: hidden;\n    float: right;\n    margin: -.9rem 0 0 -1rem;    \n}\n\n.checkbox-btn:hover + span,\n.checkbox-btn:focus-visible + span {\n    visibility: visible;\n}\n\n.checkbox-btn:active + span{\n    color: var(--laurel);\n}\n\n.todo-text {\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n}\n\n.todo-text > label {\n    line-height: 1.4rem;\n}\n\n.todo-text-note {\n    text-indent: 1rem;\n    font-size: .9rem;\n    margin: 0 0 .25rem 0;\n}\n\n.todo-text-note,\n.todo-text-note > span,\n.todo-text small {\n    color: gray;\n}\n\n.todo-text-note > span,\nem,\nem > span {\n    font-size: .9rem!important;\n}\n\n.todo-text small:hover,\n.todo-text small:focus-visible {\n    text-decoration: underline;\n}\n\nem {\n    width: 100%;\n}\n\n.sched-due {\n    color: var(--auburn);\n}\n\n.sched-today {\n    color: var(--laurel);\n}\n\n.sched-upcom {\n    color: var(--purple);\n}\n\n.todo-tools-container {\n    display: flex;\n    justify-content: flex-end;\n    align-items: flex-end;\n    margin: -20px 0 0 0;\n    visibility: hidden;\n}\n\n.todo-tools-container * {\n    color: gray;\n}\n\n.tool-span {\n    font-size: 1.2rem;\n}\n\n.todo:hover .todo-tools-container,\n.todo:focus-within .todo-tools-container {\n    visibility: visible;\n}\n\nbutton:hover,\nbutton:focus-visible {\n    background-color: var(--transparent2);\n}\n\nbutton:focus-visible {\n    outline: auto;\n}\n\n.add-task-btn {\n    text-align: left;\n    color: gray;\n}\n\n.add-task-btn * {\n    padding: .1rem;\n}\n\n.add-task-btn span {\n    border-radius: 50%;\n    padding: 0;\n    color: var(--auburn);\n}\n\n.add-task-btn:hover,\n.add-task-btn:focus-visible,\n.add-task-btn span {\n    background-color: transparent;\n}\n\n.add-task-btn:hover span,\n.add-task-btn:focus-visible span {\n    color: var(--mariner);\n}\n\n.empty-state-div {\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    justify-content: center;\n    align-items: center;\n}\n\n.empty-state-div img {\n    max-width: 180px;\n    \n    height: auto;\n}\n\n.empty-state-div h4 {\n    font-weight: normal;\n    color: gray;\n}\n\n.empty-state-div *:nth-child(n+2) {\n    margin: .25rem 0 0 0;\n}\n\n.empty-state-div *:nth-child(n+2),\n.container footer p {\n    text-align: center;\n}\n\n.empty-state-div p {\n    font-size: .9rem;\n    color: darkgray;\n}\n\n.container footer {\n    color: var(--auburn);\n    font-size: .9rem!important;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: .25rem 0 .75rem 0;\n}\n\n.container footer span {\n    font-size: 1.25rem!important;\n}\n\n.container footer p {\n    text-decoration: underline;\n    cursor: pointer;\n}\n\n.container:not(.empty) .empty-state-div,\n.container:not(.empty) footer {\n    display: none;\n}\n\n.add-task-div {\n    border: 1px solid var(--transparent2);\n    border-radius: 3px;\n    padding: 0 .5rem .5rem .5rem;\n    height: 68.48px;\n    margin-top: 1rem;\n}\n\n.add-task-div > * {\n    margin-top: .5rem;\n}\n\n.add-task-div input,\n.quick-add-todo input {\n    width: 100%;\n    outline: none;\n    border: none;\n    font-size: .9rem;\n    background-color: var(--light92);\n}\n\n.add-task-btns-container {\n    display: flex;\n    justify-content: space-between;\n}\n\n.add-task-btns-container div > button {\n    border: 1px solid var(--transparent2);\n    padding: .25rem;\n}\n\n.add-task-btns-container button > span {\n    font-size: .9rem!important;\n}\n\n.add-task-btns-container > button:nth-child(2) span {\n    color: var(--mariner);\n}\n\n.scheduler,\n.carrier {\n    max-width: 210px;\n    width: 100%;    \n}\n\n.scheduler,\n.carrier,\n.labeler,\n.prio-setter {\n    background-color: var(--light92);\n    border-radius: 3px;\n    z-index: 2;\n    position: relative;\n    margin: 0 0 0 0;\n    box-shadow: 0 1px 8px 0 rgb(0 0 0 / 8%),\n        0 0 1px 0 rgb(0 0 0 / 30%);\n    display: none;\n}\n\n.scheduler > *,\n.carrier > * {\n    width: 100%;\n    text-align: left;\n    padding: .5rem .5rem .5rem .5rem;\n}\n\n.sched {\n    display: flex;\n    justify-content: space-between;\n}\n\n.sched span:nth-child(2) {\n    text-align: right;\n    color: gray;\n}\n\n.scheduler input[type=\"date\"]::-webkit-calendar-picker-indicator {\n    opacity: .4;\n    cursor: pointer;\n}\n\n.scheduler input[type=\"date\"]::-webkit-calendar-picker-indicator:hover {\n    opacity: 1;\n}\n\n.scheduler .sched-custom {\n    display: flex;\n}\n\n.scheduler .sched-custom button {\n    border: 1px solid var(--transparent1);\n}\n\n.scheduler .sched-custom button > span,\n.carrier span,\n.labeler span,\n.prio-setter span {\n    font-size: .9rem!important;\n}\n\n.prio-setter button:first-child span {\n    color: var(--auburn);\n}\n\n.prio-setter button:nth-child(2) span {\n    color: var(--sun);\n}\n\n.prio-setter button:nth-child(3) span {\n    color: var(--mariner);\n}\n\n.prio-setter button:nth-child(4) span {\n    color: gray;\n}\n\n.carrier {\n    margin: 0 0 0 -.7rem;\n    max-width: 160px;\n    width: 100%;\n}\n\n.carrier button,\n.labeler button,\n.prio-setter button {\n    display: flex;\n    align-items: center;\n}\n\n.carrier u,\n.labeler u,\n.prio-setter u {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    margin: 0 0 0 .25rem;\n}\n\n.labeler,\n.prio-setter {\n    background-color: transparent;\n    border: none;\n    box-shadow: none;\n}\n\n.labeler div,\n.prio-setter div {\n    max-width: 160px;\n    width: 100%; \n    display: flex;\n    flex-direction: column;\n    margin: 0 1.8rem 0 auto;\n    background-color: var(--light92);\n    box-shadow: 0 1px 8px 0 rgb(0 0 0 / 8%),\n        0 0 1px 0 rgb(0 0 0 / 30%);\n    border-radius: 3px;\n}\n\n.prio-setter div {\n    margin: 0 0 0 auto;\n    max-width: 88px;\n}\n\n.prio-setter u {\n    text-decoration: none;\n}\n\n.labeler button,\n.prio-setter button {\n    text-align: left;\n    padding: .5rem;\n}\n\n.scheduler .sched-custom button:hover > span,\n.scheduler .sched-custom button:focus-visible > span {\n    color: var(--laurel);\n}\n\n.add-task-div.display-scheduler .scheduler {\n    display: inherit;\n}\n\n.add-task-div.display-carrier .carrier,\n.add-task-div.display-labeler .labeler,\n.add-task-div.display-prio-setter .prio-setter {\n    display: block;\n}\n\n.add-task-div .selected,\n.add-task-div .active {\n    background-color: var(--transparent1);\n}\n\n.add-task-main-btns-container {\n    padding: .5rem 0 .5rem 0;\n}\n\n.add-task-main-btns-container button {\n    padding: .25rem;\n}\n\n.add-task-main-btns-container button:first-child {\n    background-color: var(--malibu);\n    border: 1px solid var(--transparent2);\n}\n\n.container.add-triggered .add-task-btn-div {\n    display: none;\n}\n\n.container:not(.add-triggered) .add-task-div,\n.container:not(.add-triggered) .add-task-main-btns-container {\n    display: none;\n}\n\n.quick-add-todo,\n.project-creator,\n.label-creator,\n.todo-editor,\n.project-editor,\n.label-editor {\n    display: none;\n    position: absolute;\n    place-items: center;\n    height: 100%;\n    width: 100%;\n    background-color: var(--transparent2);\n    z-index: 999;\n}\n\n.quick-add-todo > *,\n.quick-add-todo input {\n    width: 100%;\n}\n\n.quick-add-todo > div {\n    background-color: var(--light92);\n    max-width: 480px;\n    width: 100%;\n    border-radius: 3px;\n    padding: .5rem .5rem .5rem .5rem;\n}\n\n.quick-add-todo > div > *:not(:first-child) {\n    margin: .5rem 0 0 0;\n}\n\n.quick-add-todo button {\n    padding: .25rem;\n}\n\n.quick-add-todo button:first-child {\n    background-color: var(--mariner);\n}\n\n.quick-add-todo button:hover,\n.quick-add-todo button:focus-visible {\n    color: var(--light92);\n}\n\n.quick-add-todo.on {\n    display: grid;\n}\n\n.notifications {\n    display: none;\n    position: absolute;\n    inset: 0;\n    background-color: transparent;\n    z-index: 999;\n}\n\n.notif-container {\n    display: flex;\n    flex-direction: column;\n    background-color: var(--light92);\n    margin: 40px 0 auto auto;\n    padding: .5rem;\n    max-width: 420px;\n    width: 100%;\n    max-height: 320px;\n    overflow-x: hidden;\n    overflow-y: auto;\n    box-shadow: 0 1px 8px 0 rgb(0 0 0 / 8%),\n        0 0 1px 0 rgb(0 0 0 / 30%);\n    border-radius: 3px;\n}\n\n.notif-container nav {\n    display: flex;\n    align-items: center;\n    padding: 0 0 .25rem 0;\n    border-bottom: 1px solid var(--transparent2);\n}\n\n.notif-container nav > * {\n    font-size: .9rem;\n    cursor: pointer;\n}\n\n.notif-container button:first-of-type{\n    margin: 0 0 0 .5rem;\n}\n\n.nav-btn-notification small {\n    position: absolute; \n    color: var(--auburn);\n    margin-left: -.85rem; \n    background-color: var(--malibu);\n    padding: 0 1px;\n}\n\n.nav-btn-notification:hover small,\n.nav-btn-notification:focus-visible small {\n    background-color: transparent!important;\n    color: var(--light92)!important;\n    font-weight: bold;\n}\n\n.read-all-btn {\n    margin: 0 0 0 auto!important;\n}\n\n.read-all-btn span {\n    font-size: 1.2rem;\n}\n\n.notif-output {\n    margin: 0 .25rem;\n    overflow-y: auto;\n    /* overflow-x: hidden; */\n}\n\n.notif-output > * {\n    margin: .25rem 0 0 0;\n    border-bottom: 1px solid var(--transparent1);\n    padding: 0 0 .25rem 0;\n    \n}\n\n.notif {\n    display: flex;\n    flex-direction: column;\n}\n\n.notif > *,\n.notif-extra button span{\n    font-size: .9rem;  \n}\n\n.notif > span {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.notif-extra {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.notif small {\n    color: var(--auburn);\n}\n\n.notifications.on {\n    display: flex;\n\n}\n\n.app.search .add-task-btn-div{\n    display: none;\n}\n\n.project-creator > div,\n.label-creator > div,\n.todo-editor > div,\n.project-editor > div,\n.label-editor > div {\n    background-color: var(--light92);\n    max-width: 420px;\n    width: 100%;\n    border-radius: 3px;\n}\n\n.project-creator > div > *,\n.label-creator > div > *,\n.todo-editor > div > *,\n.project-editor > div > *,\n.label-editor > div > * {\n    padding: .5rem;\n    margin: 0 0 .25rem 0;\n}\n\n.project-creator > div > *:first-child, \n.project-creator > div > *:nth-child(2),\n.label-creator > div > *:first-child, \n.label-creator > div > *:nth-child(2),\n.todo-editor > div > *:first-child, \n.todo-editor > div > *:nth-child(2),\n.project-editor > div > *:first-child,\n.project-editor > div > *:nth-child(2),\n.label-editor > div > *:first-child,\n.label-editor > div > *:nth-child(2) {\n    border-bottom: 1px solid var(--transparent1);\n}\n\n.project-creator > div,\n.project-input,\n.label-creator > div,\n.label-input,\n.todo-editor > div,\n.todo-editor-input,\n.project-editor > div,\n.project-editor-input,\n.label-editor > div,\n.label-editor-input {\n    display: flex;\n    flex-direction: column;\n}\n\n.project-input > *,\n.label-input > *,\n.todo-editor-input > *,\n.project-editor-input > *,\n.label-editor-input > * {\n    margin: 0 0 .25rem 0;\n}\n\n.project-input input,\n.label-input input,\n.todo-editor-input input,\n.todo-editor-input select,\n.project-editor-input input,\n.label-editor-input input {\n    border: none;\n    outline: none;\n    border-radius: 2px;\n    padding: .25rem;\n}\n\n.todo-editor-input {\n    overflow-y: auto;\n}\n\n.todo-editor-input {\n    padding-top: 0!important;\n}\n\n.todo-editor-input label {\n    margin: .25rem 0 .1rem 0;\n}\n\n.project-buttons,\n.label-buttons,\n.todo-editor-buttons,\n.update-project-buttons,\n.update-label-buttons {\n    display: flex;\n    justify-content: flex-end;    \n    margin-bottom: 0!important;\n}\n\n.project-creator button,\n.label-creator button,\n.todo-editor button,\n.project-editor button,\n.label-editor button {\n    padding: .25rem;\n    margin: 0 0 0 .25rem;\n    background-color: var(--transparent1);\n}\n\n.project-creator button:first-child,\n.label-creator button:first-child,\n.todo-editor button:first-child,\n.project-editor button:first-child,\n.label-editor button:first-child {\n    background-color: var(--mariner);\n}\n\n.update-project-buttons button:nth-child(3),\n.update-label-buttons button:nth-child(3) {\n    background-color: var(--auburn);\n}\n\n.project-creator.on,\n.label-creator.on,\n.todo-editor.on,\n.project-editor.on,\n.label-editor.on {\n    display: grid;\n}\n\n.project-input input:focus-visible,\n.label-input input:focus-visible,\n.todo-editor-input input:focus-visible,\n.project-editor-input input:focus-visible,\n.label-editor-input input:focus-visible {\n    outline: 1px solid var(--transparent2);\n}\n\n@media only screen and (max-width: 750px) {\n    .nav-comp {\n        padding: .5rem .5rem .5rem .5rem;\n    }\n    .info-comp {\n        padding: 1rem .25rem .25rem .25rem;\n        position: absolute;\n        z-index: 1000;\n        top: 47.59px;\n        bottom: 0;\n        display: none;\n    }\n    .info-comp.show-nav {\n        display: flex;\n    }\n    .info-comp > * {\n        width: 294px;\n    }\n    .container > header {\n        padding: 1rem 0 .5rem 0;\n    }\n    .container {\n        padding: 0 1rem 0 1rem;\n    }\n    .quick-add-todo > div {\n        max-width: 400px;\n    }\n}\n\n@media only screen and (max-width: 550px) {\n    .info-comp > * {\n        width: 242px;\n    }\n    .search-input {\n        width: 180px;\n    }\n    .search-input:focus {\n        width: 180px;\n    }\n    .quick-add-todo > div {\n        max-width: 300px;\n    }\n    .notif-container {\n        max-width: 310px;\n    }\n}\n\n@media only screen and (max-width: 321px) {\n    .search-input {\n        max-width: 135px;\n    }\n    .search-input:focus {\n        max-width: 135px;\n    }\n    .quick-add-todo > div {\n        max-width: 270px;\n    }\n    .notif-container {\n        max-width: 270px;\n    }\n}\n\n@media only screen and (max-height: 420px) {\n    .todo-editor-input {\n        max-height: 180px;\n    }\n}"],"sourceRoot":""}]);
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
/* harmony export */   "push": () => (/* binding */ push)
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
        const todo = Todo(
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

    return {
        quick
    }
})();

//create container for projects
//container for labels









const test = (function(){
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

    // let x = Date.now();
    // // let x = new Date().getTime();
    // // Date.parse(x)
    // let as = todo.dueDate;
    // console.log(Date.parse(as))

    // var dateControl = document.querySelector('input[type="date"]');
    // dateControl.value = '2017-06-01';
    // console.log(dateControl.value); // prints "2017-06-01"
    // console.log(dateControl.valueAsNumber); // prints 1496275200000, a JavaScript timestamp (ms)

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
                <button id = "selectScheduleBtn">
                    <span class="material-icons-outlined mid">event</span> Schedule
                </button>
                <button id = "selectProjectBtn">
                    <span class="material-icons-outlined mid">inbox</span> Inbox
                </button>
            </div>
            <div>
                <button id = "selectLabelBtn">
                    <span class="material-icons-outlined mid">label</span>
                </button>
                <button id = "selectPriorityBtn">
                    <span class="material-icons-outlined mid">flag</span>
                </button>
            </div>
        </div>
        <div class = "scheduler">
            <button class = "sched" id = "schedulerTodayBtn">
                <span>Today</span>
                <span id = "schedulerTodaySpan">today's date</span>
            </button>
            <button class = "sched" id = "schedulerTwmBtn">
                <span>Tomorrow</span>
                <span id = "schedulerTwmBtn">Tue</span>
            </button>
            <button class = "sched" id = "schedulerNextWeekBtn">
                <span>Next week</span>
                <span id = "schedulerNextWeekSpan">Mon 26 July</span>
            </button>
            <div class = "sched-custom">
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
            <div>
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
        if(_selector_js__WEBPACK_IMPORTED_MODULE_0__.container.div.classList.contains('add-triggered')){
            _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.input.value = '';
        }
    };

    const _itemManager = (newClass) => {
        _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.addDiv.classList.toggle(newClass);
        if(_selector_js__WEBPACK_IMPORTED_MODULE_0__.task.addDiv.classList.contains('add-task-div') 
        && _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.addDiv.classList.contains(newClass)){
            _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.addDiv.className = `add-task-div ${newClass}`;
        }
    };

    const taskScheduler = () => _itemManager('display-scheduler');
    const taskProjectSelector = () => _itemManager('display-carrier');
    const taskLabeler = () => _itemManager('display-labeler');
    const taskPrioritySetter = () => _itemManager('display-prio-setter');

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
            _selector_js__WEBPACK_IMPORTED_MODULE_0__.hNav.menu.click();
        }
        // insert the logic here, load the list of selected display
    };

    const home = () => {
        _selector_js__WEBPACK_IMPORTED_MODULE_0__.container.header.innerText = 'Today';
        document.querySelector('.info-comp .active').classList.remove('active');
        _selector_js__WEBPACK_IMPORTED_MODULE_0__.vNav.today.classList.add('active');
    };

    return {
        todolist,
        home
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

    return {
        quick
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
    const addTaskDiv = document.querySelector('#addTaskDiv');

    return {
        div,
        header,
        addTaskBtnDiv, addTaskBtn,
        emptyStateDiv, footer, help,
        addTaskDiv
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
    const spanTwm = document.querySelector('#schedulerTwmBtn');
    const schedNextWeek = document.querySelector('#schedulerNextWeekBtn');
    const spanNextWeek = document.querySelector('#schedulerNextWeekSpan');
    const schedCustomInput = document.querySelector('#schedulerCustomInput');
    const schedCustomBtn = document.querySelector('#schedulerCustomBtn');
    const schedNoDate = document.querySelector('#schedulerNoDateBtn');
    const projectSelector = document.querySelector('#projectSelector');
    const projectInbox = document.querySelector('#projectDefaultInbox');
    const labelContainer = document.querySelector('#labelContainer');
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
        schedCustomInput, schedCustomBtn,
        schedNoDate,
        projectSelector, projectInbox,
        labelContainer,
        priorityOne, priorityTwo, priorityThree, priorityFour
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFRhcmdldC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kYXRhLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2V2ZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNzSDtBQUM3QjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsaURBQWlELGlDQUFpQyxpQ0FBaUMsOEJBQThCLG1DQUFtQyxpQ0FBaUMsb0NBQW9DLG9DQUFvQyxtQ0FBbUMsK0JBQStCLHFDQUFxQyxxQ0FBcUMscUNBQXFDLGtDQUFrQyxHQUFHLDBCQUEwQiw2QkFBNkIsaUJBQWlCLGdCQUFnQixLQUFLLGlCQUFpQix5QkFBeUIsR0FBRyxVQUFVLHdCQUF3QiwwQ0FBMEMsNkJBQTZCLHlCQUF5QixHQUFHLDRCQUE0QixvQkFBb0IsbUJBQW1CLHlCQUF5Qiw2QkFBNkIsR0FBRyxZQUFZLHVCQUF1Qix5QkFBeUIsb0NBQW9DLEdBQUcsc0JBQXNCLHNCQUFzQixHQUFHLGNBQWMsNkJBQTZCLEdBQUcsZUFBZSx3QkFBd0IsR0FBRyxVQUFVLG9CQUFvQiw2QkFBNkIsbUJBQW1CLG9CQUFvQixHQUFHLHFEQUFxRCwyQkFBMkIsR0FBRyxlQUFlLHFDQUFxQyxrQkFBa0IscUNBQXFDLDBDQUEwQyxHQUFHLGtCQUFrQiwyQkFBMkIsR0FBRyxtQkFBbUIsMkJBQTJCLEdBQUcsa0NBQWtDLGdCQUFnQixHQUFHLGlCQUFpQixtQkFBbUIsMENBQTBDLEdBQUcsb0NBQW9DLHlCQUF5QixtQkFBbUIsb0JBQW9CLHdCQUF3QixpQkFBaUIsR0FB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QVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxRQUFRLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxPQUFPLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsY0FBYyxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLE9BQU8sVUFBVSxNQUFNLE9BQU8sWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sT0FBTyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLE1BQU0sUUFBUSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsS0FBSyxPQUFPLFdBQVcsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sUUFBUSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLE9BQU8sVUFBVSxZQUFZLE9BQU8sT0FBTyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLFdBQVcsWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxPQUFPLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sT0FBTyxVQUFVLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxNQUFNLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sT0FBTyxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxPQUFPLHlEQUFlLElBQUk7QUFDMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMENBQVcsQ0FBQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsaUVBQWUsU0FBUyxFOzs7Ozs7Ozs7Ozs7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QSxrQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZxQjtBQUNZO0FBQ0o7QUFDc0M7QUFDcEM7O0FBRS9COztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImluZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLWxpZ2h0OTI6IGhzbCgwLCAwJSwgOTIlKTtcXG4gICAgLS1saWdodDg4OiBoc2woMCwgMCUsIDg4JSk7XFxuICAgIC0tZGFyazogaHNsKDAsIDAlLCAxMiUpO1xcbiAgICAtLW1hbGlidTogaHNsKDE5MiwgOTMlLCA3MiUpO1xcbiAgICAtLWF1YnVybjogaHNsKDAsIDc1JSwgNjUlKTtcXG4gICAgLS1tYXJpbmVyOiBoc2woMjE2LCA3NSUsIDUxJSk7XFxuICAgIC0tbGF1cmVsOiBoc2woMTIwLCAxMDAlLCAyNSUpO1xcbiAgICAtLXB1cnBsZTogaHNsKDI2NCwgNjElLCA0NyUpO1xcbiAgICAtLXN1bjogaHNsKDM0LCA5MyUsIDQ4JSk7XFxuICAgIC0tdHJhbnNwYXJlbnQxOiByZ2JhKDAsMCwwLC4xKTtcXG4gICAgLS10cmFuc3BhcmVudDI6IHJnYmEoMCwwLDAsLjIpO1xcblxcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWxpZ2h0OTIpO1xcbiAgICAtLWZvcmVncm91bmQ6IHZhcigtLW1hbGlidSk7XFxufVxcblxcbiosICo6YmVmb3JlLCAqOmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwOyAgXFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG4gICAgZm9udC1mYW1pbHk6c2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHZhcigtLWRhcmspO1xcbn1cXG5cXG5idXR0b24sXFxuLnNlYXJjaC1pbnB1dCB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBmb250LWZhbWlseTpzYW5zLXNlcmlmO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBwYWRkaW5nOiAuMTI1cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tZGFyayk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG5idXR0b24sXFxuLmljLWRpdiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuc3Bhbi5taWQge1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG5zcGFuLFxcbmgxIHtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5hcHAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi5uYXYtY29tcCAsXFxuLm5jLWxlZnQsXFxuLnNlYXJjaC1kaXYsXFxuLm5jLXJpZ2h0IHtcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxufVxcblxcbi5uYXYtY29tcCB7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IC41cmVtIDNyZW0gLjVyZW0gM3JlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9yZWdyb3VuZCk7XFxufVxcblxcbi5uYy1sZWZ0ID4gKiB7XFxuICAgIG1hcmdpbjogMCAuMjVyZW0gMCAwO1xcbn1cXG5cXG4ubmMtcmlnaHQgPiAqIHtcXG4gICAgbWFyZ2luOiAwIDAgMCAuMjVyZW07XFxufVxcblxcbi5uYy1yaWdodCBidXR0b246Zmlyc3QtY2hpbGQge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi5zZWFyY2gtZGl2IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb3JlZ3JvdW5kKTtcXG59XFxuXFxuLnNlYXJjaC1kaXYgPiBzcGFuOmZpcnN0LWNoaWxkIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBjdXJzb3I6IHRleHQ7XFxuICAgIG1hcmdpbjogLjFyZW07XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG4uc2VhcmNoLWRpdiBidXR0b24ge1xcbiAgICBtYXJnaW46IC4ycmVtIDAgLjJyZW0gLTEuNXJlbTtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc2VhcmNoLWRpdiBidXR0b246aG92ZXIsXFxuLnNlYXJjaC1kaXYgYnV0dG9uOmZvY3VzLXZpc2libGUge1xcbiAgICBjb2xvcjogdmFyKC0tYXVidXJuKTtcXG59XFxuXFxuLnNlYXJjaC1pbnB1dCB7XFxuICAgIHBhZGRpbmc6IDAgMS42cmVtIDAgMS44cmVtO1xcbiAgICBtYXJnaW4tbGVmdDogLTEuOXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQxKTtcXG59XFxuXFxuLnNlYXJjaC1pbnB1dDo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbiB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLnNlYXJjaC1pbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSArIGJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uc2VhcmNoLWRpdjpmb2N1cy13aXRoaW4gLnNlYXJjaC1pbnB1dCxcXG4uc2VhcmNoLWRpdjpob3ZlciAuc2VhcmNoLWlucHV0LFxcbi5zZWFyY2gtaW5wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bil7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0OTIpO1xcbn1cXG5cXG4uc2VhcmNoLWRpdiBidXR0b24gc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmFwcC1ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleDogMTtcXG4gICAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gNDYuNTlweCk7XFxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uaW5mby1jb21wIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMnJlbSAuMjVyZW0gMCAyLjhyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ODgpO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4uaW5mby1jb21wID4gKiB7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGZvbnQtc2l6ZTogLjlyZW07XFxuICAgIHdpZHRoOiAyOTRweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4uaW5mby1jb21wID4gKiA+IHNhbXAge1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIG9wYWNpdHk6IC41O1xcbiAgICBtYXJnaW46IDRweCAxcmVtIDRweCAwO1xcbn1cXG5cXG4uaWMtZGl2IHtcXG4gICAgbWFyZ2luOiAuMjVyZW0gMCAwIDA7XFxufVxcblxcbi5pbmZvLWNvbXAgPiBkaXY6Zmlyc3Qtb2YtdHlwZXtcXG4gICAgbWFyZ2luOiAxcmVtIDAgMCAwO1xcbn1cXG5cXG4uaWMtc3BhbiB7XFxuICAgIG1hcmdpbjogMCAuMjVyZW0gMCAwO1xcbn1cXG5cXG4uaW5mby1jb21wID4gYnV0dG9uOmZpcnN0LWNoaWxkIHNwYW4ge1xcbiAgICBjb2xvcjogdmFyKC0tbWFyaW5lcik7XFxufVxcblxcbi5pbmZvLWNvbXAgPiBidXR0b246bnRoLWNoaWxkKDIpIHNwYW4ge1xcbiAgICBjb2xvcjogdmFyKC0tbGF1cmVsKTtcXG59XFxuXFxuLmluZm8tY29tcCA+IGJ1dHRvbjpudGgtY2hpbGQoMykgc3BhbiB7XFxuICAgIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xcbn1cXG5cXG4uaW5mby1jb21wIC5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWxpYnUpO1xcbn1cXG5cXG4ub3BhIHtcXG4gICAgb3BhY2l0eTogLjU7XFxufVxcblxcbi5pYy1hZGQtYnRuIHtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBtYXJnaW46IDBweCAuNXJlbSAwIDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5pYy1hZGQtYnRuOmhvdmVyICsgc3Ryb25nLFxcbi5pYy1hZGQtYnRuOmZvY3VzLXZpc2libGUgKyBzdHJvbmcge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgdGV4dC11bmRlcmxpbmUtb2Zmc2V0OiAzMCU7XFxufVxcblxcbi5pbmZvLWNvbXA6Zm9jdXMtd2l0aGluIC5pYy1hZGQtYnRuLFxcbi5pbmZvLWNvbXA6aG92ZXIgLmljLWFkZC1idG57XFxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XFxufVxcblxcbi5pYy1kaXYgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaWMtZGl2ID4gZGl2LnNob3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uaWMtcHJvamVjdCA+IHNwYW4ucm90YXRlLFxcbi5pYy1sYWJlbCA+IHNwYW4ucm90YXRlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG5cXG5cXG4uc2hvdyB7XFxuICAgIG1hcmdpbjogLjc1cmVtIDAgMCAwO1xcbn1cXG5cXG4uc2hvdyA+IGRpdiB7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IC41cmVtIC41cmVtIC41cmVtIC41cmVtO1xcbiAgICBoZWlnaHQ6IDM0cHg7XFxuICAgIGZvbnQtc2l6ZTogLjlyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuc3Bhbi51bmlxdWUge1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBtYXJnaW4tcmlnaHQ6IC4ycmVtO1xcbn1cXG5cXG4uc2hvdyBidXR0b24ge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5zaG93ID4gZGl2OmhvdmVyLFxcbi5zaG93ID4gZGl2OmZvY3VzLXZpc2libGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudDIpO1xcbn1cXG5cXG4uc2hvdyA+IGRpdjpob3ZlciBidXR0b24sXFxuLnNob3cgPiBkaXY6Zm9jdXMtdmlzaWJsZSBidXR0b24sXFxuLnNob3cgPiBkaXY6Zm9jdXMtd2l0aGluIGJ1dHRvbntcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5zaG93IGJ1dHRvbjpob3ZlcixcXG4uc2hvdyBidXR0b246Zm9jdXMtdmlzaWJsZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50IWltcG9ydGFudDtcXG59XFxuXFxuLmJ1bGxldCB7XFxuICAgIG1pbi13aWR0aDogMTBweDtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIG1hcmdpbjogMCAuN3JlbSAwIC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudDIpO1xcbn1cXG5cXG4udGFnIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSguOCk7XFxuICAgIG1hcmdpbjogMCAuMnJlbSAwIC4ycmVtO1xcbiAgICBjb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQyKTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXg6IDE7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgcGFkZGluZzogMCAycmVtIDAgMnJlbTtcXG5cXG59XFxuXFxuLmNvbnRhaW5lciA+ICoge1xcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNvbnRhaW5lciA+IGZvb3RlciB7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxufVxcblxcbi5jb250YWluZXIgPiBoZWFkZXIge1xcbiAgICBwYWRkaW5nOiAycmVtIDAgMXJlbSAwO1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB0b3A6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0OTIpO1xcbiAgICB6LWluZGV4OiAzO1xcbn1cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4udG9kbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDJweCAwO1xcbiAgICBtYXJnaW46IC41cmVtIDAgLjVyZW0gMDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tdHJhbnNwYXJlbnQxKTtcXG59XFxuXFxuLnRvZG8sXFxuLnRvZG8gKiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNoZWNrYm94LWJ0biB7IFxcbiAgICBoZWlnaHQ6IDE4cHg7XFxuICAgIG1heC13aWR0aDogMThweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogLjI3cmVtIC43cmVtIDAgMDtcXG4gICAgei1pbmRleDogMjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uY2hlY2tib3gtYnRuLnByaW8xIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYXVidXJuKTtcXG59XFxuXFxuLmNoZWNrYm94LWJ0bi5wcmlvMiB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXN1bik7XFxufVxcblxcbi5jaGVja2JveC1idG4ucHJpbzMge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1tYXJpbmVyKTtcXG59XFxuXFxuLmNoZWNrYm94LWJ0bi5wcmlvNCB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXRyYW5zcGFyZW50Mik7XFxufVxcblxcbi5jaGVja2JveC1idG46aG92ZXIsXFxuLmNoZWNrYm94LWJ0bjpmb2N1cy12aXNpYmxlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQxKTtcXG59XFxuXFxuLmNoZWNrYm94LWJ0biArIHNwYW4ge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBsaW5lLWhlaWdodDogMXJlbTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGNvbG9yOiB2YXIoLS10cmFuc3BhcmVudDIpO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgbWFyZ2luOiAtLjlyZW0gMCAwIC0xcmVtOyAgICBcXG59XFxuXFxuLmNoZWNrYm94LWJ0bjpob3ZlciArIHNwYW4sXFxuLmNoZWNrYm94LWJ0bjpmb2N1cy12aXNpYmxlICsgc3BhbiB7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi5jaGVja2JveC1idG46YWN0aXZlICsgc3BhbntcXG4gICAgY29sb3I6IHZhcigtLWxhdXJlbCk7XFxufVxcblxcbi50b2RvLXRleHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiAxO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udG9kby10ZXh0ID4gbGFiZWwge1xcbiAgICBsaW5lLWhlaWdodDogMS40cmVtO1xcbn1cXG5cXG4udG9kby10ZXh0LW5vdGUge1xcbiAgICB0ZXh0LWluZGVudDogMXJlbTtcXG4gICAgZm9udC1zaXplOiAuOXJlbTtcXG4gICAgbWFyZ2luOiAwIDAgLjI1cmVtIDA7XFxufVxcblxcbi50b2RvLXRleHQtbm90ZSxcXG4udG9kby10ZXh0LW5vdGUgPiBzcGFuLFxcbi50b2RvLXRleHQgc21hbGwge1xcbiAgICBjb2xvcjogZ3JheTtcXG59XFxuXFxuLnRvZG8tdGV4dC1ub3RlID4gc3BhbixcXG5lbSxcXG5lbSA+IHNwYW4ge1xcbiAgICBmb250LXNpemU6IC45cmVtIWltcG9ydGFudDtcXG59XFxuXFxuLnRvZG8tdGV4dCBzbWFsbDpob3ZlcixcXG4udG9kby10ZXh0IHNtYWxsOmZvY3VzLXZpc2libGUge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuZW0ge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnNjaGVkLWR1ZSB7XFxuICAgIGNvbG9yOiB2YXIoLS1hdWJ1cm4pO1xcbn1cXG5cXG4uc2NoZWQtdG9kYXkge1xcbiAgICBjb2xvcjogdmFyKC0tbGF1cmVsKTtcXG59XFxuXFxuLnNjaGVkLXVwY29tIHtcXG4gICAgY29sb3I6IHZhcigtLXB1cnBsZSk7XFxufVxcblxcbi50b2RvLXRvb2xzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgbWFyZ2luOiAtMjBweCAwIDAgMDtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4udG9kby10b29scy1jb250YWluZXIgKiB7XFxuICAgIGNvbG9yOiBncmF5O1xcbn1cXG5cXG4udG9vbC1zcGFuIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi50b2RvOmhvdmVyIC50b2RvLXRvb2xzLWNvbnRhaW5lcixcXG4udG9kbzpmb2N1cy13aXRoaW4gLnRvZG8tdG9vbHMtY29udGFpbmVyIHtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuYnV0dG9uOmhvdmVyLFxcbmJ1dHRvbjpmb2N1cy12aXNpYmxlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQyKTtcXG59XFxuXFxuYnV0dG9uOmZvY3VzLXZpc2libGUge1xcbiAgICBvdXRsaW5lOiBhdXRvO1xcbn1cXG5cXG4uYWRkLXRhc2stYnRuIHtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgY29sb3I6IGdyYXk7XFxufVxcblxcbi5hZGQtdGFzay1idG4gKiB7XFxuICAgIHBhZGRpbmc6IC4xcmVtO1xcbn1cXG5cXG4uYWRkLXRhc2stYnRuIHNwYW4ge1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGNvbG9yOiB2YXIoLS1hdWJ1cm4pO1xcbn1cXG5cXG4uYWRkLXRhc2stYnRuOmhvdmVyLFxcbi5hZGQtdGFzay1idG46Zm9jdXMtdmlzaWJsZSxcXG4uYWRkLXRhc2stYnRuIHNwYW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmFkZC10YXNrLWJ0bjpob3ZlciBzcGFuLFxcbi5hZGQtdGFzay1idG46Zm9jdXMtdmlzaWJsZSBzcGFuIHtcXG4gICAgY29sb3I6IHZhcigtLW1hcmluZXIpO1xcbn1cXG5cXG4uZW1wdHktc3RhdGUtZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleDogMTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5lbXB0eS1zdGF0ZS1kaXYgaW1nIHtcXG4gICAgbWF4LXdpZHRoOiAxODBweDtcXG4gICAgXFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuXFxuLmVtcHR5LXN0YXRlLWRpdiBoNCB7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIGNvbG9yOiBncmF5O1xcbn1cXG5cXG4uZW1wdHktc3RhdGUtZGl2ICo6bnRoLWNoaWxkKG4rMikge1xcbiAgICBtYXJnaW46IC4yNXJlbSAwIDAgMDtcXG59XFxuXFxuLmVtcHR5LXN0YXRlLWRpdiAqOm50aC1jaGlsZChuKzIpLFxcbi5jb250YWluZXIgZm9vdGVyIHAge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5lbXB0eS1zdGF0ZS1kaXYgcCB7XFxuICAgIGZvbnQtc2l6ZTogLjlyZW07XFxuICAgIGNvbG9yOiBkYXJrZ3JheTtcXG59XFxuXFxuLmNvbnRhaW5lciBmb290ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tYXVidXJuKTtcXG4gICAgZm9udC1zaXplOiAuOXJlbSFpbXBvcnRhbnQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAuMjVyZW0gMCAuNzVyZW0gMDtcXG59XFxuXFxuLmNvbnRhaW5lciBmb290ZXIgc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbSFpbXBvcnRhbnQ7XFxufVxcblxcbi5jb250YWluZXIgZm9vdGVyIHAge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY29udGFpbmVyOm5vdCguZW1wdHkpIC5lbXB0eS1zdGF0ZS1kaXYsXFxuLmNvbnRhaW5lcjpub3QoLmVtcHR5KSBmb290ZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uYWRkLXRhc2stZGl2IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdHJhbnNwYXJlbnQyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBwYWRkaW5nOiAwIC41cmVtIC41cmVtIC41cmVtO1xcbiAgICBoZWlnaHQ6IDY4LjQ4cHg7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcbi5hZGQtdGFzay1kaXYgPiAqIHtcXG4gICAgbWFyZ2luLXRvcDogLjVyZW07XFxufVxcblxcbi5hZGQtdGFzay1kaXYgaW5wdXQsXFxuLnF1aWNrLWFkZC10b2RvIGlucHV0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAuOXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQ5Mik7XFxufVxcblxcbi5hZGQtdGFzay1idG5zLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmFkZC10YXNrLWJ0bnMtY29udGFpbmVyIGRpdiA+IGJ1dHRvbiB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRyYW5zcGFyZW50Mik7XFxuICAgIHBhZGRpbmc6IC4yNXJlbTtcXG59XFxuXFxuLmFkZC10YXNrLWJ0bnMtY29udGFpbmVyIGJ1dHRvbiA+IHNwYW4ge1xcbiAgICBmb250LXNpemU6IC45cmVtIWltcG9ydGFudDtcXG59XFxuXFxuLmFkZC10YXNrLWJ0bnMtY29udGFpbmVyID4gYnV0dG9uOm50aC1jaGlsZCgyKSBzcGFuIHtcXG4gICAgY29sb3I6IHZhcigtLW1hcmluZXIpO1xcbn1cXG5cXG4uc2NoZWR1bGVyLFxcbi5jYXJyaWVyIHtcXG4gICAgbWF4LXdpZHRoOiAyMTBweDtcXG4gICAgd2lkdGg6IDEwMCU7ICAgIFxcbn1cXG5cXG4uc2NoZWR1bGVyLFxcbi5jYXJyaWVyLFxcbi5sYWJlbGVyLFxcbi5wcmlvLXNldHRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0OTIpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luOiAwIDAgMCAwO1xcbiAgICBib3gtc2hhZG93OiAwIDFweCA4cHggMCByZ2IoMCAwIDAgLyA4JSksXFxuICAgICAgICAwIDAgMXB4IDAgcmdiKDAgMCAwIC8gMzAlKTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnNjaGVkdWxlciA+ICosXFxuLmNhcnJpZXIgPiAqIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIHBhZGRpbmc6IC41cmVtIC41cmVtIC41cmVtIC41cmVtO1xcbn1cXG5cXG4uc2NoZWQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5zY2hlZCBzcGFuOm50aC1jaGlsZCgyKSB7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICBjb2xvcjogZ3JheTtcXG59XFxuXFxuLnNjaGVkdWxlciBpbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XFxuICAgIG9wYWNpdHk6IC40O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zY2hlZHVsZXIgaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3I6aG92ZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uc2NoZWR1bGVyIC5zY2hlZC1jdXN0b20ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uc2NoZWR1bGVyIC5zY2hlZC1jdXN0b20gYnV0dG9uIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdHJhbnNwYXJlbnQxKTtcXG59XFxuXFxuLnNjaGVkdWxlciAuc2NoZWQtY3VzdG9tIGJ1dHRvbiA+IHNwYW4sXFxuLmNhcnJpZXIgc3BhbixcXG4ubGFiZWxlciBzcGFuLFxcbi5wcmlvLXNldHRlciBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAuOXJlbSFpbXBvcnRhbnQ7XFxufVxcblxcbi5wcmlvLXNldHRlciBidXR0b246Zmlyc3QtY2hpbGQgc3BhbiB7XFxuICAgIGNvbG9yOiB2YXIoLS1hdWJ1cm4pO1xcbn1cXG5cXG4ucHJpby1zZXR0ZXIgYnV0dG9uOm50aC1jaGlsZCgyKSBzcGFuIHtcXG4gICAgY29sb3I6IHZhcigtLXN1bik7XFxufVxcblxcbi5wcmlvLXNldHRlciBidXR0b246bnRoLWNoaWxkKDMpIHNwYW4ge1xcbiAgICBjb2xvcjogdmFyKC0tbWFyaW5lcik7XFxufVxcblxcbi5wcmlvLXNldHRlciBidXR0b246bnRoLWNoaWxkKDQpIHNwYW4ge1xcbiAgICBjb2xvcjogZ3JheTtcXG59XFxuXFxuLmNhcnJpZXIge1xcbiAgICBtYXJnaW46IDAgMCAwIC0uN3JlbTtcXG4gICAgbWF4LXdpZHRoOiAxNjBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jYXJyaWVyIGJ1dHRvbixcXG4ubGFiZWxlciBidXR0b24sXFxuLnByaW8tc2V0dGVyIGJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jYXJyaWVyIHUsXFxuLmxhYmVsZXIgdSxcXG4ucHJpby1zZXR0ZXIgdSB7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICBtYXJnaW46IDAgMCAwIC4yNXJlbTtcXG59XFxuXFxuLmxhYmVsZXIsXFxuLnByaW8tc2V0dGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLmxhYmVsZXIgZGl2LFxcbi5wcmlvLXNldHRlciBkaXYge1xcbiAgICBtYXgtd2lkdGg6IDE2MHB4O1xcbiAgICB3aWR0aDogMTAwJTsgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbjogMCAxLjhyZW0gMCBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodDkyKTtcXG4gICAgYm94LXNoYWRvdzogMCAxcHggOHB4IDAgcmdiKDAgMCAwIC8gOCUpLFxcbiAgICAgICAgMCAwIDFweCAwIHJnYigwIDAgMCAvIDMwJSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuLnByaW8tc2V0dGVyIGRpdiB7XFxuICAgIG1hcmdpbjogMCAwIDAgYXV0bztcXG4gICAgbWF4LXdpZHRoOiA4OHB4O1xcbn1cXG5cXG4ucHJpby1zZXR0ZXIgdSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmxhYmVsZXIgYnV0dG9uLFxcbi5wcmlvLXNldHRlciBidXR0b24ge1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG59XFxuXFxuLnNjaGVkdWxlciAuc2NoZWQtY3VzdG9tIGJ1dHRvbjpob3ZlciA+IHNwYW4sXFxuLnNjaGVkdWxlciAuc2NoZWQtY3VzdG9tIGJ1dHRvbjpmb2N1cy12aXNpYmxlID4gc3BhbiB7XFxuICAgIGNvbG9yOiB2YXIoLS1sYXVyZWwpO1xcbn1cXG5cXG4uYWRkLXRhc2stZGl2LmRpc3BsYXktc2NoZWR1bGVyIC5zY2hlZHVsZXIge1xcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xcbn1cXG5cXG4uYWRkLXRhc2stZGl2LmRpc3BsYXktY2FycmllciAuY2FycmllcixcXG4uYWRkLXRhc2stZGl2LmRpc3BsYXktbGFiZWxlciAubGFiZWxlcixcXG4uYWRkLXRhc2stZGl2LmRpc3BsYXktcHJpby1zZXR0ZXIgLnByaW8tc2V0dGVyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5hZGQtdGFzay1kaXYgLnNlbGVjdGVkLFxcbi5hZGQtdGFzay1kaXYgLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50MSk7XFxufVxcblxcbi5hZGQtdGFzay1tYWluLWJ0bnMtY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogLjVyZW0gMCAuNXJlbSAwO1xcbn1cXG5cXG4uYWRkLXRhc2stbWFpbi1idG5zLWNvbnRhaW5lciBidXR0b24ge1xcbiAgICBwYWRkaW5nOiAuMjVyZW07XFxufVxcblxcbi5hZGQtdGFzay1tYWluLWJ0bnMtY29udGFpbmVyIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1hbGlidSk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRyYW5zcGFyZW50Mik7XFxufVxcblxcbi5jb250YWluZXIuYWRkLXRyaWdnZXJlZCAuYWRkLXRhc2stYnRuLWRpdiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jb250YWluZXI6bm90KC5hZGQtdHJpZ2dlcmVkKSAuYWRkLXRhc2stZGl2LFxcbi5jb250YWluZXI6bm90KC5hZGQtdHJpZ2dlcmVkKSAuYWRkLXRhc2stbWFpbi1idG5zLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5xdWljay1hZGQtdG9kbyxcXG4ucHJvamVjdC1jcmVhdG9yLFxcbi5sYWJlbC1jcmVhdG9yLFxcbi50b2RvLWVkaXRvcixcXG4ucHJvamVjdC1lZGl0b3IsXFxuLmxhYmVsLWVkaXRvciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQyKTtcXG4gICAgei1pbmRleDogOTk5O1xcbn1cXG5cXG4ucXVpY2stYWRkLXRvZG8gPiAqLFxcbi5xdWljay1hZGQtdG9kbyBpbnB1dCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucXVpY2stYWRkLXRvZG8gPiBkaXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodDkyKTtcXG4gICAgbWF4LXdpZHRoOiA0ODBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgcGFkZGluZzogLjVyZW0gLjVyZW0gLjVyZW0gLjVyZW07XFxufVxcblxcbi5xdWljay1hZGQtdG9kbyA+IGRpdiA+ICo6bm90KDpmaXJzdC1jaGlsZCkge1xcbiAgICBtYXJnaW46IC41cmVtIDAgMCAwO1xcbn1cXG5cXG4ucXVpY2stYWRkLXRvZG8gYnV0dG9uIHtcXG4gICAgcGFkZGluZzogLjI1cmVtO1xcbn1cXG5cXG4ucXVpY2stYWRkLXRvZG8gYnV0dG9uOmZpcnN0LWNoaWxkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFyaW5lcik7XFxufVxcblxcbi5xdWljay1hZGQtdG9kbyBidXR0b246aG92ZXIsXFxuLnF1aWNrLWFkZC10b2RvIGJ1dHRvbjpmb2N1cy12aXNpYmxlIHtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0OTIpO1xcbn1cXG5cXG4ucXVpY2stYWRkLXRvZG8ub24ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4ubm90aWZpY2F0aW9ucyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaW5zZXQ6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICB6LWluZGV4OiA5OTk7XFxufVxcblxcbi5ub3RpZi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodDkyKTtcXG4gICAgbWFyZ2luOiA0MHB4IDAgYXV0byBhdXRvO1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG4gICAgbWF4LXdpZHRoOiA0MjBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC1oZWlnaHQ6IDMyMHB4O1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDhweCAwIHJnYigwIDAgMCAvIDglKSxcXG4gICAgICAgIDAgMCAxcHggMCByZ2IoMCAwIDAgLyAzMCUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi5ub3RpZi1jb250YWluZXIgbmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMCAwIC4yNXJlbSAwO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tdHJhbnNwYXJlbnQyKTtcXG59XFxuXFxuLm5vdGlmLWNvbnRhaW5lciBuYXYgPiAqIHtcXG4gICAgZm9udC1zaXplOiAuOXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubm90aWYtY29udGFpbmVyIGJ1dHRvbjpmaXJzdC1vZi10eXBle1xcbiAgICBtYXJnaW46IDAgMCAwIC41cmVtO1xcbn1cXG5cXG4ubmF2LWJ0bi1ub3RpZmljYXRpb24gc21hbGwge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxcbiAgICBjb2xvcjogdmFyKC0tYXVidXJuKTtcXG4gICAgbWFyZ2luLWxlZnQ6IC0uODVyZW07IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWxpYnUpO1xcbiAgICBwYWRkaW5nOiAwIDFweDtcXG59XFxuXFxuLm5hdi1idG4tbm90aWZpY2F0aW9uOmhvdmVyIHNtYWxsLFxcbi5uYXYtYnRuLW5vdGlmaWNhdGlvbjpmb2N1cy12aXNpYmxlIHNtYWxsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQhaW1wb3J0YW50O1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQ5MikhaW1wb3J0YW50O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnJlYWQtYWxsLWJ0biB7XFxuICAgIG1hcmdpbjogMCAwIDAgYXV0byFpbXBvcnRhbnQ7XFxufVxcblxcbi5yZWFkLWFsbC1idG4gc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4ubm90aWYtb3V0cHV0IHtcXG4gICAgbWFyZ2luOiAwIC4yNXJlbTtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgLyogb3ZlcmZsb3cteDogaGlkZGVuOyAqL1xcbn1cXG5cXG4ubm90aWYtb3V0cHV0ID4gKiB7XFxuICAgIG1hcmdpbjogLjI1cmVtIDAgMCAwO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tdHJhbnNwYXJlbnQxKTtcXG4gICAgcGFkZGluZzogMCAwIC4yNXJlbSAwO1xcbiAgICBcXG59XFxuXFxuLm5vdGlmIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm5vdGlmID4gKixcXG4ubm90aWYtZXh0cmEgYnV0dG9uIHNwYW57XFxuICAgIGZvbnQtc2l6ZTogLjlyZW07ICBcXG59XFxuXFxuLm5vdGlmID4gc3BhbiB7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG5cXG4ubm90aWYtZXh0cmEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ub3RpZiBzbWFsbCB7XFxuICAgIGNvbG9yOiB2YXIoLS1hdWJ1cm4pO1xcbn1cXG5cXG4ubm90aWZpY2F0aW9ucy5vbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuXFxufVxcblxcbi5hcHAuc2VhcmNoIC5hZGQtdGFzay1idG4tZGl2e1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucHJvamVjdC1jcmVhdG9yID4gZGl2LFxcbi5sYWJlbC1jcmVhdG9yID4gZGl2LFxcbi50b2RvLWVkaXRvciA+IGRpdixcXG4ucHJvamVjdC1lZGl0b3IgPiBkaXYsXFxuLmxhYmVsLWVkaXRvciA+IGRpdiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0OTIpO1xcbiAgICBtYXgtd2lkdGg6IDQyMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4ucHJvamVjdC1jcmVhdG9yID4gZGl2ID4gKixcXG4ubGFiZWwtY3JlYXRvciA+IGRpdiA+ICosXFxuLnRvZG8tZWRpdG9yID4gZGl2ID4gKixcXG4ucHJvamVjdC1lZGl0b3IgPiBkaXYgPiAqLFxcbi5sYWJlbC1lZGl0b3IgPiBkaXYgPiAqIHtcXG4gICAgcGFkZGluZzogLjVyZW07XFxuICAgIG1hcmdpbjogMCAwIC4yNXJlbSAwO1xcbn1cXG5cXG4ucHJvamVjdC1jcmVhdG9yID4gZGl2ID4gKjpmaXJzdC1jaGlsZCwgXFxuLnByb2plY3QtY3JlYXRvciA+IGRpdiA+ICo6bnRoLWNoaWxkKDIpLFxcbi5sYWJlbC1jcmVhdG9yID4gZGl2ID4gKjpmaXJzdC1jaGlsZCwgXFxuLmxhYmVsLWNyZWF0b3IgPiBkaXYgPiAqOm50aC1jaGlsZCgyKSxcXG4udG9kby1lZGl0b3IgPiBkaXYgPiAqOmZpcnN0LWNoaWxkLCBcXG4udG9kby1lZGl0b3IgPiBkaXYgPiAqOm50aC1jaGlsZCgyKSxcXG4ucHJvamVjdC1lZGl0b3IgPiBkaXYgPiAqOmZpcnN0LWNoaWxkLFxcbi5wcm9qZWN0LWVkaXRvciA+IGRpdiA+ICo6bnRoLWNoaWxkKDIpLFxcbi5sYWJlbC1lZGl0b3IgPiBkaXYgPiAqOmZpcnN0LWNoaWxkLFxcbi5sYWJlbC1lZGl0b3IgPiBkaXYgPiAqOm50aC1jaGlsZCgyKSB7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS10cmFuc3BhcmVudDEpO1xcbn1cXG5cXG4ucHJvamVjdC1jcmVhdG9yID4gZGl2LFxcbi5wcm9qZWN0LWlucHV0LFxcbi5sYWJlbC1jcmVhdG9yID4gZGl2LFxcbi5sYWJlbC1pbnB1dCxcXG4udG9kby1lZGl0b3IgPiBkaXYsXFxuLnRvZG8tZWRpdG9yLWlucHV0LFxcbi5wcm9qZWN0LWVkaXRvciA+IGRpdixcXG4ucHJvamVjdC1lZGl0b3ItaW5wdXQsXFxuLmxhYmVsLWVkaXRvciA+IGRpdixcXG4ubGFiZWwtZWRpdG9yLWlucHV0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnByb2plY3QtaW5wdXQgPiAqLFxcbi5sYWJlbC1pbnB1dCA+ICosXFxuLnRvZG8tZWRpdG9yLWlucHV0ID4gKixcXG4ucHJvamVjdC1lZGl0b3ItaW5wdXQgPiAqLFxcbi5sYWJlbC1lZGl0b3ItaW5wdXQgPiAqIHtcXG4gICAgbWFyZ2luOiAwIDAgLjI1cmVtIDA7XFxufVxcblxcbi5wcm9qZWN0LWlucHV0IGlucHV0LFxcbi5sYWJlbC1pbnB1dCBpbnB1dCxcXG4udG9kby1lZGl0b3ItaW5wdXQgaW5wdXQsXFxuLnRvZG8tZWRpdG9yLWlucHV0IHNlbGVjdCxcXG4ucHJvamVjdC1lZGl0b3ItaW5wdXQgaW5wdXQsXFxuLmxhYmVsLWVkaXRvci1pbnB1dCBpbnB1dCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICBwYWRkaW5nOiAuMjVyZW07XFxufVxcblxcbi50b2RvLWVkaXRvci1pbnB1dCB7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi50b2RvLWVkaXRvci1pbnB1dCB7XFxuICAgIHBhZGRpbmctdG9wOiAwIWltcG9ydGFudDtcXG59XFxuXFxuLnRvZG8tZWRpdG9yLWlucHV0IGxhYmVsIHtcXG4gICAgbWFyZ2luOiAuMjVyZW0gMCAuMXJlbSAwO1xcbn1cXG5cXG4ucHJvamVjdC1idXR0b25zLFxcbi5sYWJlbC1idXR0b25zLFxcbi50b2RvLWVkaXRvci1idXR0b25zLFxcbi51cGRhdGUtcHJvamVjdC1idXR0b25zLFxcbi51cGRhdGUtbGFiZWwtYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7ICAgIFxcbiAgICBtYXJnaW4tYm90dG9tOiAwIWltcG9ydGFudDtcXG59XFxuXFxuLnByb2plY3QtY3JlYXRvciBidXR0b24sXFxuLmxhYmVsLWNyZWF0b3IgYnV0dG9uLFxcbi50b2RvLWVkaXRvciBidXR0b24sXFxuLnByb2plY3QtZWRpdG9yIGJ1dHRvbixcXG4ubGFiZWwtZWRpdG9yIGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IC4yNXJlbTtcXG4gICAgbWFyZ2luOiAwIDAgMCAuMjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50MSk7XFxufVxcblxcbi5wcm9qZWN0LWNyZWF0b3IgYnV0dG9uOmZpcnN0LWNoaWxkLFxcbi5sYWJlbC1jcmVhdG9yIGJ1dHRvbjpmaXJzdC1jaGlsZCxcXG4udG9kby1lZGl0b3IgYnV0dG9uOmZpcnN0LWNoaWxkLFxcbi5wcm9qZWN0LWVkaXRvciBidXR0b246Zmlyc3QtY2hpbGQsXFxuLmxhYmVsLWVkaXRvciBidXR0b246Zmlyc3QtY2hpbGQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYXJpbmVyKTtcXG59XFxuXFxuLnVwZGF0ZS1wcm9qZWN0LWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCgzKSxcXG4udXBkYXRlLWxhYmVsLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCgzKSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWF1YnVybik7XFxufVxcblxcbi5wcm9qZWN0LWNyZWF0b3Iub24sXFxuLmxhYmVsLWNyZWF0b3Iub24sXFxuLnRvZG8tZWRpdG9yLm9uLFxcbi5wcm9qZWN0LWVkaXRvci5vbixcXG4ubGFiZWwtZWRpdG9yLm9uIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLnByb2plY3QtaW5wdXQgaW5wdXQ6Zm9jdXMtdmlzaWJsZSxcXG4ubGFiZWwtaW5wdXQgaW5wdXQ6Zm9jdXMtdmlzaWJsZSxcXG4udG9kby1lZGl0b3ItaW5wdXQgaW5wdXQ6Zm9jdXMtdmlzaWJsZSxcXG4ucHJvamVjdC1lZGl0b3ItaW5wdXQgaW5wdXQ6Zm9jdXMtdmlzaWJsZSxcXG4ubGFiZWwtZWRpdG9yLWlucHV0IGlucHV0OmZvY3VzLXZpc2libGUge1xcbiAgICBvdXRsaW5lOiAxcHggc29saWQgdmFyKC0tdHJhbnNwYXJlbnQyKTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xcbiAgICAubmF2LWNvbXAge1xcbiAgICAgICAgcGFkZGluZzogLjVyZW0gLjVyZW0gLjVyZW0gLjVyZW07XFxuICAgIH1cXG4gICAgLmluZm8tY29tcCB7XFxuICAgICAgICBwYWRkaW5nOiAxcmVtIC4yNXJlbSAuMjVyZW0gLjI1cmVtO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgei1pbmRleDogMTAwMDtcXG4gICAgICAgIHRvcDogNDcuNTlweDtcXG4gICAgICAgIGJvdHRvbTogMDtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG4gICAgLmluZm8tY29tcC5zaG93LW5hdiB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB9XFxuICAgIC5pbmZvLWNvbXAgPiAqIHtcXG4gICAgICAgIHdpZHRoOiAyOTRweDtcXG4gICAgfVxcbiAgICAuY29udGFpbmVyID4gaGVhZGVyIHtcXG4gICAgICAgIHBhZGRpbmc6IDFyZW0gMCAuNXJlbSAwO1xcbiAgICB9XFxuICAgIC5jb250YWluZXIge1xcbiAgICAgICAgcGFkZGluZzogMCAxcmVtIDAgMXJlbTtcXG4gICAgfVxcbiAgICAucXVpY2stYWRkLXRvZG8gPiBkaXYge1xcbiAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XFxuICAgIC5pbmZvLWNvbXAgPiAqIHtcXG4gICAgICAgIHdpZHRoOiAyNDJweDtcXG4gICAgfVxcbiAgICAuc2VhcmNoLWlucHV0IHtcXG4gICAgICAgIHdpZHRoOiAxODBweDtcXG4gICAgfVxcbiAgICAuc2VhcmNoLWlucHV0OmZvY3VzIHtcXG4gICAgICAgIHdpZHRoOiAxODBweDtcXG4gICAgfVxcbiAgICAucXVpY2stYWRkLXRvZG8gPiBkaXYge1xcbiAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcXG4gICAgfVxcbiAgICAubm90aWYtY29udGFpbmVyIHtcXG4gICAgICAgIG1heC13aWR0aDogMzEwcHg7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjFweCkge1xcbiAgICAuc2VhcmNoLWlucHV0IHtcXG4gICAgICAgIG1heC13aWR0aDogMTM1cHg7XFxuICAgIH1cXG4gICAgLnNlYXJjaC1pbnB1dDpmb2N1cyB7XFxuICAgICAgICBtYXgtd2lkdGg6IDEzNXB4O1xcbiAgICB9XFxuICAgIC5xdWljay1hZGQtdG9kbyA+IGRpdiB7XFxuICAgICAgICBtYXgtd2lkdGg6IDI3MHB4O1xcbiAgICB9XFxuICAgIC5ub3RpZi1jb250YWluZXIge1xcbiAgICAgICAgbWF4LXdpZHRoOiAyNzBweDtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA0MjBweCkge1xcbiAgICAudG9kby1lZGl0b3ItaW5wdXQge1xcbiAgICAgICAgbWF4LWhlaWdodDogMTgwcHg7XFxuICAgIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFDMUIsdUJBQXVCO0lBQ3ZCLDRCQUE0QjtJQUM1QiwwQkFBMEI7SUFDMUIsNkJBQTZCO0lBQzdCLDZCQUE2QjtJQUM3Qiw0QkFBNEI7SUFDNUIsd0JBQXdCO0lBQ3hCLDhCQUE4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QUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxpQkFBaUI7SUFDckI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tbGlnaHQ5MjogaHNsKDAsIDAlLCA5MiUpO1xcbiAgICAtLWxpZ2h0ODg6IGhzbCgwLCAwJSwgODglKTtcXG4gICAgLS1kYXJrOiBoc2woMCwgMCUsIDEyJSk7XFxuICAgIC0tbWFsaWJ1OiBoc2woMTkyLCA5MyUsIDcyJSk7XFxuICAgIC0tYXVidXJuOiBoc2woMCwgNzUlLCA2NSUpO1xcbiAgICAtLW1hcmluZXI6IGhzbCgyMTYsIDc1JSwgNTElKTtcXG4gICAgLS1sYXVyZWw6IGhzbCgxMjAsIDEwMCUsIDI1JSk7XFxuICAgIC0tcHVycGxlOiBoc2woMjY0LCA2MSUsIDQ3JSk7XFxuICAgIC0tc3VuOiBoc2woMzQsIDkzJSwgNDglKTtcXG4gICAgLS10cmFuc3BhcmVudDE6IHJnYmEoMCwwLDAsLjEpO1xcbiAgICAtLXRyYW5zcGFyZW50MjogcmdiYSgwLDAsMCwuMik7XFxuXFxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0tbGlnaHQ5Mik7XFxuICAgIC0tZm9yZWdyb3VuZDogdmFyKC0tbWFsaWJ1KTtcXG59XFxuXFxuKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7ICBcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcbiAgICBmb250LWZhbWlseTpzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogdmFyKC0tZGFyayk7XFxufVxcblxcbmJ1dHRvbixcXG4uc2VhcmNoLWlucHV0IHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IC4xMjVyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbmJ1dHRvbixcXG4uaWMtZGl2IHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5zcGFuLm1pZCB7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbnNwYW4sXFxuaDEge1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLmFwcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLm5hdi1jb21wICxcXG4ubmMtbGVmdCxcXG4uc2VhcmNoLWRpdixcXG4ubmMtcmlnaHQge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG59XFxuXFxuLm5hdi1jb21wIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogLjVyZW0gM3JlbSAuNXJlbSAzcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb3JlZ3JvdW5kKTtcXG59XFxuXFxuLm5jLWxlZnQgPiAqIHtcXG4gICAgbWFyZ2luOiAwIC4yNXJlbSAwIDA7XFxufVxcblxcbi5uYy1yaWdodCA+ICoge1xcbiAgICBtYXJnaW46IDAgMCAwIC4yNXJlbTtcXG59XFxuXFxuLm5jLXJpZ2h0IGJ1dHRvbjpmaXJzdC1jaGlsZCB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLnNlYXJjaC1kaXYge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvcmVncm91bmQpO1xcbn1cXG5cXG4uc2VhcmNoLWRpdiA+IHNwYW46Zmlyc3QtY2hpbGQge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGN1cnNvcjogdGV4dDtcXG4gICAgbWFyZ2luOiAuMXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxuICAgIHotaW5kZXg6IDI7XFxufVxcblxcbi5zZWFyY2gtZGl2IGJ1dHRvbiB7XFxuICAgIG1hcmdpbjogLjJyZW0gMCAuMnJlbSAtMS41cmVtO1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5zZWFyY2gtZGl2IGJ1dHRvbjpob3ZlcixcXG4uc2VhcmNoLWRpdiBidXR0b246Zm9jdXMtdmlzaWJsZSB7XFxuICAgIGNvbG9yOiB2YXIoLS1hdWJ1cm4pO1xcbn1cXG5cXG4uc2VhcmNoLWlucHV0IHtcXG4gICAgcGFkZGluZzogMCAxLjZyZW0gMCAxLjhyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiAtMS45cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudDEpO1xcbn1cXG5cXG4uc2VhcmNoLWlucHV0Ojotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4uc2VhcmNoLWlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pICsgYnV0dG9uIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5zZWFyY2gtZGl2OmZvY3VzLXdpdGhpbiAuc2VhcmNoLWlucHV0LFxcbi5zZWFyY2gtZGl2OmhvdmVyIC5zZWFyY2gtaW5wdXQsXFxuLnNlYXJjaC1pbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQ5Mik7XFxufVxcblxcbi5zZWFyY2gtZGl2IGJ1dHRvbiBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uYXBwLWJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiAxO1xcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSA0Ni41OXB4KTtcXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5pbmZvLWNvbXAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAycmVtIC4yNXJlbSAwIDIuOHJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQ4OCk7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi5pbmZvLWNvbXAgPiAqIHtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgZm9udC1zaXplOiAuOXJlbTtcXG4gICAgd2lkdGg6IDI5NHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5pbmZvLWNvbXAgPiAqID4gc2FtcCB7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgb3BhY2l0eTogLjU7XFxuICAgIG1hcmdpbjogNHB4IDFyZW0gNHB4IDA7XFxufVxcblxcbi5pYy1kaXYge1xcbiAgICBtYXJnaW46IC4yNXJlbSAwIDAgMDtcXG59XFxuXFxuLmluZm8tY29tcCA+IGRpdjpmaXJzdC1vZi10eXBle1xcbiAgICBtYXJnaW46IDFyZW0gMCAwIDA7XFxufVxcblxcbi5pYy1zcGFuIHtcXG4gICAgbWFyZ2luOiAwIC4yNXJlbSAwIDA7XFxufVxcblxcbi5pbmZvLWNvbXAgPiBidXR0b246Zmlyc3QtY2hpbGQgc3BhbiB7XFxuICAgIGNvbG9yOiB2YXIoLS1tYXJpbmVyKTtcXG59XFxuXFxuLmluZm8tY29tcCA+IGJ1dHRvbjpudGgtY2hpbGQoMikgc3BhbiB7XFxuICAgIGNvbG9yOiB2YXIoLS1sYXVyZWwpO1xcbn1cXG5cXG4uaW5mby1jb21wID4gYnV0dG9uOm50aC1jaGlsZCgzKSBzcGFuIHtcXG4gICAgY29sb3I6IHZhcigtLXB1cnBsZSk7XFxufVxcblxcbi5pbmZvLWNvbXAgLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1hbGlidSk7XFxufVxcblxcbi5vcGEge1xcbiAgICBvcGFjaXR5OiAuNTtcXG59XFxuXFxuLmljLWFkZC1idG4ge1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIG1hcmdpbjogMHB4IC41cmVtIDAgMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmljLWFkZC1idG46aG92ZXIgKyBzdHJvbmcsXFxuLmljLWFkZC1idG46Zm9jdXMtdmlzaWJsZSArIHN0cm9uZyB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICB0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDMwJTtcXG59XFxuXFxuLmluZm8tY29tcDpmb2N1cy13aXRoaW4gLmljLWFkZC1idG4sXFxuLmluZm8tY29tcDpob3ZlciAuaWMtYWRkLWJ0bntcXG4gICAgZGlzcGxheTogaW5oZXJpdDtcXG59XFxuXFxuLmljLWRpdiA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5pYy1kaXYgPiBkaXYuc2hvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5pYy1wcm9qZWN0ID4gc3Bhbi5yb3RhdGUsXFxuLmljLWxhYmVsID4gc3Bhbi5yb3RhdGUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcblxcblxcbi5zaG93IHtcXG4gICAgbWFyZ2luOiAuNzVyZW0gMCAwIDA7XFxufVxcblxcbi5zaG93ID4gZGl2IHtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogLjVyZW0gLjVyZW0gLjVyZW0gLjVyZW07XFxuICAgIGhlaWdodDogMzRweDtcXG4gICAgZm9udC1zaXplOiAuOXJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG5zcGFuLnVuaXF1ZSB7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1yaWdodDogLjJyZW07XFxufVxcblxcbi5zaG93IGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLnNob3cgPiBkaXY6aG92ZXIsXFxuLnNob3cgPiBkaXY6Zm9jdXMtdmlzaWJsZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50Mik7XFxufVxcblxcbi5zaG93ID4gZGl2OmhvdmVyIGJ1dHRvbixcXG4uc2hvdyA+IGRpdjpmb2N1cy12aXNpYmxlIGJ1dHRvbixcXG4uc2hvdyA+IGRpdjpmb2N1cy13aXRoaW4gYnV0dG9ue1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLnNob3cgYnV0dG9uOmhvdmVyLFxcbi5zaG93IGJ1dHRvbjpmb2N1cy12aXNpYmxlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQhaW1wb3J0YW50O1xcbn1cXG5cXG4uYnVsbGV0IHtcXG4gICAgbWluLXdpZHRoOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgbWFyZ2luOiAwIC43cmVtIDAgLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50Mik7XFxufVxcblxcbi50YWcge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC44KTtcXG4gICAgbWFyZ2luOiAwIC4ycmVtIDAgLjJyZW07XFxuICAgIGNvbG9yOiB2YXIoLS10cmFuc3BhcmVudDIpO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleDogMTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBwYWRkaW5nOiAwIDJyZW0gMCAycmVtO1xcblxcbn1cXG5cXG4uY29udGFpbmVyID4gKiB7XFxuICAgIG1heC13aWR0aDogODAwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY29udGFpbmVyID4gZm9vdGVyIHtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG59XFxuXFxuLmNvbnRhaW5lciA+IGhlYWRlciB7XFxuICAgIHBhZGRpbmc6IDJyZW0gMCAxcmVtIDA7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHRvcDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQ5Mik7XFxuICAgIHotaW5kZXg6IDM7XFxufVxcblxcbmgxIHtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi50b2RvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMnB4IDA7XFxuICAgIG1hcmdpbjogLjVyZW0gMCAuNXJlbSAwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS10cmFuc3BhcmVudDEpO1xcbn1cXG5cXG4udG9kbyxcXG4udG9kbyAqIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2hlY2tib3gtYnRuIHsgXFxuICAgIGhlaWdodDogMThweDtcXG4gICAgbWF4LXdpZHRoOiAxOHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAuMjdyZW0gLjdyZW0gMCAwO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5jaGVja2JveC1idG4ucHJpbzEge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1hdWJ1cm4pO1xcbn1cXG5cXG4uY2hlY2tib3gtYnRuLnByaW8yIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tc3VuKTtcXG59XFxuXFxuLmNoZWNrYm94LWJ0bi5wcmlvMyB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLW1hcmluZXIpO1xcbn1cXG5cXG4uY2hlY2tib3gtYnRuLnByaW80IHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tdHJhbnNwYXJlbnQyKTtcXG59XFxuXFxuLmNoZWNrYm94LWJ0bjpob3ZlcixcXG4uY2hlY2tib3gtYnRuOmZvY3VzLXZpc2libGUge1xcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudDEpO1xcbn1cXG5cXG4uY2hlY2tib3gtYnRuICsgc3BhbiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgY29sb3I6IHZhcigtLXRyYW5zcGFyZW50Mik7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBtYXJnaW46IC0uOXJlbSAwIDAgLTFyZW07ICAgIFxcbn1cXG5cXG4uY2hlY2tib3gtYnRuOmhvdmVyICsgc3BhbixcXG4uY2hlY2tib3gtYnRuOmZvY3VzLXZpc2libGUgKyBzcGFuIHtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLmNoZWNrYm94LWJ0bjphY3RpdmUgKyBzcGFue1xcbiAgICBjb2xvcjogdmFyKC0tbGF1cmVsKTtcXG59XFxuXFxuLnRvZG8tdGV4dCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXg6IDE7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50b2RvLXRleHQgPiBsYWJlbCB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjRyZW07XFxufVxcblxcbi50b2RvLXRleHQtbm90ZSB7XFxuICAgIHRleHQtaW5kZW50OiAxcmVtO1xcbiAgICBmb250LXNpemU6IC45cmVtO1xcbiAgICBtYXJnaW46IDAgMCAuMjVyZW0gMDtcXG59XFxuXFxuLnRvZG8tdGV4dC1ub3RlLFxcbi50b2RvLXRleHQtbm90ZSA+IHNwYW4sXFxuLnRvZG8tdGV4dCBzbWFsbCB7XFxuICAgIGNvbG9yOiBncmF5O1xcbn1cXG5cXG4udG9kby10ZXh0LW5vdGUgPiBzcGFuLFxcbmVtLFxcbmVtID4gc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogLjlyZW0haW1wb3J0YW50O1xcbn1cXG5cXG4udG9kby10ZXh0IHNtYWxsOmhvdmVyLFxcbi50b2RvLXRleHQgc21hbGw6Zm9jdXMtdmlzaWJsZSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG5lbSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uc2NoZWQtZHVlIHtcXG4gICAgY29sb3I6IHZhcigtLWF1YnVybik7XFxufVxcblxcbi5zY2hlZC10b2RheSB7XFxuICAgIGNvbG9yOiB2YXIoLS1sYXVyZWwpO1xcbn1cXG5cXG4uc2NoZWQtdXBjb20ge1xcbiAgICBjb2xvcjogdmFyKC0tcHVycGxlKTtcXG59XFxuXFxuLnRvZG8tdG9vbHMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICBtYXJnaW46IC0yMHB4IDAgMCAwO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi50b2RvLXRvb2xzLWNvbnRhaW5lciAqIHtcXG4gICAgY29sb3I6IGdyYXk7XFxufVxcblxcbi50b29sLXNwYW4ge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLnRvZG86aG92ZXIgLnRvZG8tdG9vbHMtY29udGFpbmVyLFxcbi50b2RvOmZvY3VzLXdpdGhpbiAudG9kby10b29scy1jb250YWluZXIge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG5idXR0b246aG92ZXIsXFxuYnV0dG9uOmZvY3VzLXZpc2libGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudDIpO1xcbn1cXG5cXG5idXR0b246Zm9jdXMtdmlzaWJsZSB7XFxuICAgIG91dGxpbmU6IGF1dG87XFxufVxcblxcbi5hZGQtdGFzay1idG4ge1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBjb2xvcjogZ3JheTtcXG59XFxuXFxuLmFkZC10YXNrLWJ0biAqIHtcXG4gICAgcGFkZGluZzogLjFyZW07XFxufVxcblxcbi5hZGQtdGFzay1idG4gc3BhbiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgY29sb3I6IHZhcigtLWF1YnVybik7XFxufVxcblxcbi5hZGQtdGFzay1idG46aG92ZXIsXFxuLmFkZC10YXNrLWJ0bjpmb2N1cy12aXNpYmxlLFxcbi5hZGQtdGFzay1idG4gc3BhbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uYWRkLXRhc2stYnRuOmhvdmVyIHNwYW4sXFxuLmFkZC10YXNrLWJ0bjpmb2N1cy12aXNpYmxlIHNwYW4ge1xcbiAgICBjb2xvcjogdmFyKC0tbWFyaW5lcik7XFxufVxcblxcbi5lbXB0eS1zdGF0ZS1kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4OiAxO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmVtcHR5LXN0YXRlLWRpdiBpbWcge1xcbiAgICBtYXgtd2lkdGg6IDE4MHB4O1xcbiAgICBcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uZW1wdHktc3RhdGUtZGl2IGg0IHtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgY29sb3I6IGdyYXk7XFxufVxcblxcbi5lbXB0eS1zdGF0ZS1kaXYgKjpudGgtY2hpbGQobisyKSB7XFxuICAgIG1hcmdpbjogLjI1cmVtIDAgMCAwO1xcbn1cXG5cXG4uZW1wdHktc3RhdGUtZGl2ICo6bnRoLWNoaWxkKG4rMiksXFxuLmNvbnRhaW5lciBmb290ZXIgcCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmVtcHR5LXN0YXRlLWRpdiBwIHtcXG4gICAgZm9udC1zaXplOiAuOXJlbTtcXG4gICAgY29sb3I6IGRhcmtncmF5O1xcbn1cXG5cXG4uY29udGFpbmVyIGZvb3RlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1hdWJ1cm4pO1xcbiAgICBmb250LXNpemU6IC45cmVtIWltcG9ydGFudDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IC4yNXJlbSAwIC43NXJlbSAwO1xcbn1cXG5cXG4uY29udGFpbmVyIGZvb3RlciBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtIWltcG9ydGFudDtcXG59XFxuXFxuLmNvbnRhaW5lciBmb290ZXIgcCB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jb250YWluZXI6bm90KC5lbXB0eSkgLmVtcHR5LXN0YXRlLWRpdixcXG4uY29udGFpbmVyOm5vdCguZW1wdHkpIGZvb3RlciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5hZGQtdGFzay1kaXYge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10cmFuc3BhcmVudDIpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIHBhZGRpbmc6IDAgLjVyZW0gLjVyZW0gLjVyZW07XFxuICAgIGhlaWdodDogNjguNDhweDtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuXFxuLmFkZC10YXNrLWRpdiA+ICoge1xcbiAgICBtYXJnaW4tdG9wOiAuNXJlbTtcXG59XFxuXFxuLmFkZC10YXNrLWRpdiBpbnB1dCxcXG4ucXVpY2stYWRkLXRvZG8gaW5wdXQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IC45cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodDkyKTtcXG59XFxuXFxuLmFkZC10YXNrLWJ0bnMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uYWRkLXRhc2stYnRucy1jb250YWluZXIgZGl2ID4gYnV0dG9uIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdHJhbnNwYXJlbnQyKTtcXG4gICAgcGFkZGluZzogLjI1cmVtO1xcbn1cXG5cXG4uYWRkLXRhc2stYnRucy1jb250YWluZXIgYnV0dG9uID4gc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogLjlyZW0haW1wb3J0YW50O1xcbn1cXG5cXG4uYWRkLXRhc2stYnRucy1jb250YWluZXIgPiBidXR0b246bnRoLWNoaWxkKDIpIHNwYW4ge1xcbiAgICBjb2xvcjogdmFyKC0tbWFyaW5lcik7XFxufVxcblxcbi5zY2hlZHVsZXIsXFxuLmNhcnJpZXIge1xcbiAgICBtYXgtd2lkdGg6IDIxMHB4O1xcbiAgICB3aWR0aDogMTAwJTsgICAgXFxufVxcblxcbi5zY2hlZHVsZXIsXFxuLmNhcnJpZXIsXFxuLmxhYmVsZXIsXFxuLnByaW8tc2V0dGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQ5Mik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgei1pbmRleDogMjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW46IDAgMCAwIDA7XFxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDhweCAwIHJnYigwIDAgMCAvIDglKSxcXG4gICAgICAgIDAgMCAxcHggMCByZ2IoMCAwIDAgLyAzMCUpO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc2NoZWR1bGVyID4gKixcXG4uY2FycmllciA+ICoge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgcGFkZGluZzogLjVyZW0gLjVyZW0gLjVyZW0gLjVyZW07XFxufVxcblxcbi5zY2hlZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnNjaGVkIHNwYW46bnRoLWNoaWxkKDIpIHtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIGNvbG9yOiBncmF5O1xcbn1cXG5cXG4uc2NoZWR1bGVyIGlucHV0W3R5cGU9XFxcImRhdGVcXFwiXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcXG4gICAgb3BhY2l0eTogLjQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNjaGVkdWxlciBpbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvcjpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5zY2hlZHVsZXIgLnNjaGVkLWN1c3RvbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5zY2hlZHVsZXIgLnNjaGVkLWN1c3RvbSBidXR0b24ge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10cmFuc3BhcmVudDEpO1xcbn1cXG5cXG4uc2NoZWR1bGVyIC5zY2hlZC1jdXN0b20gYnV0dG9uID4gc3BhbixcXG4uY2FycmllciBzcGFuLFxcbi5sYWJlbGVyIHNwYW4sXFxuLnByaW8tc2V0dGVyIHNwYW4ge1xcbiAgICBmb250LXNpemU6IC45cmVtIWltcG9ydGFudDtcXG59XFxuXFxuLnByaW8tc2V0dGVyIGJ1dHRvbjpmaXJzdC1jaGlsZCBzcGFuIHtcXG4gICAgY29sb3I6IHZhcigtLWF1YnVybik7XFxufVxcblxcbi5wcmlvLXNldHRlciBidXR0b246bnRoLWNoaWxkKDIpIHNwYW4ge1xcbiAgICBjb2xvcjogdmFyKC0tc3VuKTtcXG59XFxuXFxuLnByaW8tc2V0dGVyIGJ1dHRvbjpudGgtY2hpbGQoMykgc3BhbiB7XFxuICAgIGNvbG9yOiB2YXIoLS1tYXJpbmVyKTtcXG59XFxuXFxuLnByaW8tc2V0dGVyIGJ1dHRvbjpudGgtY2hpbGQoNCkgc3BhbiB7XFxuICAgIGNvbG9yOiBncmF5O1xcbn1cXG5cXG4uY2FycmllciB7XFxuICAgIG1hcmdpbjogMCAwIDAgLS43cmVtO1xcbiAgICBtYXgtd2lkdGg6IDE2MHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNhcnJpZXIgYnV0dG9uLFxcbi5sYWJlbGVyIGJ1dHRvbixcXG4ucHJpby1zZXR0ZXIgYnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNhcnJpZXIgdSxcXG4ubGFiZWxlciB1LFxcbi5wcmlvLXNldHRlciB1IHtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIG1hcmdpbjogMCAwIDAgLjI1cmVtO1xcbn1cXG5cXG4ubGFiZWxlcixcXG4ucHJpby1zZXR0ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4ubGFiZWxlciBkaXYsXFxuLnByaW8tc2V0dGVyIGRpdiB7XFxuICAgIG1heC13aWR0aDogMTYwcHg7XFxuICAgIHdpZHRoOiAxMDAlOyBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luOiAwIDEuOHJlbSAwIGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0OTIpO1xcbiAgICBib3gtc2hhZG93OiAwIDFweCA4cHggMCByZ2IoMCAwIDAgLyA4JSksXFxuICAgICAgICAwIDAgMXB4IDAgcmdiKDAgMCAwIC8gMzAlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4ucHJpby1zZXR0ZXIgZGl2IHtcXG4gICAgbWFyZ2luOiAwIDAgMCBhdXRvO1xcbiAgICBtYXgtd2lkdGg6IDg4cHg7XFxufVxcblxcbi5wcmlvLXNldHRlciB1IHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4ubGFiZWxlciBidXR0b24sXFxuLnByaW8tc2V0dGVyIGJ1dHRvbiB7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIHBhZGRpbmc6IC41cmVtO1xcbn1cXG5cXG4uc2NoZWR1bGVyIC5zY2hlZC1jdXN0b20gYnV0dG9uOmhvdmVyID4gc3BhbixcXG4uc2NoZWR1bGVyIC5zY2hlZC1jdXN0b20gYnV0dG9uOmZvY3VzLXZpc2libGUgPiBzcGFuIHtcXG4gICAgY29sb3I6IHZhcigtLWxhdXJlbCk7XFxufVxcblxcbi5hZGQtdGFzay1kaXYuZGlzcGxheS1zY2hlZHVsZXIgLnNjaGVkdWxlciB7XFxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XFxufVxcblxcbi5hZGQtdGFzay1kaXYuZGlzcGxheS1jYXJyaWVyIC5jYXJyaWVyLFxcbi5hZGQtdGFzay1kaXYuZGlzcGxheS1sYWJlbGVyIC5sYWJlbGVyLFxcbi5hZGQtdGFzay1kaXYuZGlzcGxheS1wcmlvLXNldHRlciAucHJpby1zZXR0ZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmFkZC10YXNrLWRpdiAuc2VsZWN0ZWQsXFxuLmFkZC10YXNrLWRpdiAuYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQxKTtcXG59XFxuXFxuLmFkZC10YXNrLW1haW4tYnRucy1jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAuNXJlbSAwIC41cmVtIDA7XFxufVxcblxcbi5hZGQtdGFzay1tYWluLWJ0bnMtY29udGFpbmVyIGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IC4yNXJlbTtcXG59XFxuXFxuLmFkZC10YXNrLW1haW4tYnRucy1jb250YWluZXIgYnV0dG9uOmZpcnN0LWNoaWxkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFsaWJ1KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdHJhbnNwYXJlbnQyKTtcXG59XFxuXFxuLmNvbnRhaW5lci5hZGQtdHJpZ2dlcmVkIC5hZGQtdGFzay1idG4tZGl2IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNvbnRhaW5lcjpub3QoLmFkZC10cmlnZ2VyZWQpIC5hZGQtdGFzay1kaXYsXFxuLmNvbnRhaW5lcjpub3QoLmFkZC10cmlnZ2VyZWQpIC5hZGQtdGFzay1tYWluLWJ0bnMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnF1aWNrLWFkZC10b2RvLFxcbi5wcm9qZWN0LWNyZWF0b3IsXFxuLmxhYmVsLWNyZWF0b3IsXFxuLnRvZG8tZWRpdG9yLFxcbi5wcm9qZWN0LWVkaXRvcixcXG4ubGFiZWwtZWRpdG9yIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudDIpO1xcbiAgICB6LWluZGV4OiA5OTk7XFxufVxcblxcbi5xdWljay1hZGQtdG9kbyA+ICosXFxuLnF1aWNrLWFkZC10b2RvIGlucHV0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5xdWljay1hZGQtdG9kbyA+IGRpdiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0OTIpO1xcbiAgICBtYXgtd2lkdGg6IDQ4MHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBwYWRkaW5nOiAuNXJlbSAuNXJlbSAuNXJlbSAuNXJlbTtcXG59XFxuXFxuLnF1aWNrLWFkZC10b2RvID4gZGl2ID4gKjpub3QoOmZpcnN0LWNoaWxkKSB7XFxuICAgIG1hcmdpbjogLjVyZW0gMCAwIDA7XFxufVxcblxcbi5xdWljay1hZGQtdG9kbyBidXR0b24ge1xcbiAgICBwYWRkaW5nOiAuMjVyZW07XFxufVxcblxcbi5xdWljay1hZGQtdG9kbyBidXR0b246Zmlyc3QtY2hpbGQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYXJpbmVyKTtcXG59XFxuXFxuLnF1aWNrLWFkZC10b2RvIGJ1dHRvbjpob3ZlcixcXG4ucXVpY2stYWRkLXRvZG8gYnV0dG9uOmZvY3VzLXZpc2libGUge1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQ5Mik7XFxufVxcblxcbi5xdWljay1hZGQtdG9kby5vbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5ub3RpZmljYXRpb25zIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBpbnNldDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIHotaW5kZXg6IDk5OTtcXG59XFxuXFxuLm5vdGlmLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0OTIpO1xcbiAgICBtYXJnaW46IDQwcHggMCBhdXRvIGF1dG87XFxuICAgIHBhZGRpbmc6IC41cmVtO1xcbiAgICBtYXgtd2lkdGg6IDQyMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LWhlaWdodDogMzIwcHg7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgYm94LXNoYWRvdzogMCAxcHggOHB4IDAgcmdiKDAgMCAwIC8gOCUpLFxcbiAgICAgICAgMCAwIDFweCAwIHJnYigwIDAgMCAvIDMwJSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuLm5vdGlmLWNvbnRhaW5lciBuYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwIDAgLjI1cmVtIDA7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS10cmFuc3BhcmVudDIpO1xcbn1cXG5cXG4ubm90aWYtY29udGFpbmVyIG5hdiA+ICoge1xcbiAgICBmb250LXNpemU6IC45cmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5ub3RpZi1jb250YWluZXIgYnV0dG9uOmZpcnN0LW9mLXR5cGV7XFxuICAgIG1hcmdpbjogMCAwIDAgLjVyZW07XFxufVxcblxcbi5uYXYtYnRuLW5vdGlmaWNhdGlvbiBzbWFsbCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXFxuICAgIGNvbG9yOiB2YXIoLS1hdWJ1cm4pO1xcbiAgICBtYXJnaW4tbGVmdDogLS44NXJlbTsgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1hbGlidSk7XFxuICAgIHBhZGRpbmc6IDAgMXB4O1xcbn1cXG5cXG4ubmF2LWJ0bi1ub3RpZmljYXRpb246aG92ZXIgc21hbGwsXFxuLm5hdi1idG4tbm90aWZpY2F0aW9uOmZvY3VzLXZpc2libGUgc21hbGwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCFpbXBvcnRhbnQ7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodDkyKSFpbXBvcnRhbnQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ucmVhZC1hbGwtYnRuIHtcXG4gICAgbWFyZ2luOiAwIDAgMCBhdXRvIWltcG9ydGFudDtcXG59XFxuXFxuLnJlYWQtYWxsLWJ0biBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5ub3RpZi1vdXRwdXQge1xcbiAgICBtYXJnaW46IDAgLjI1cmVtO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICAvKiBvdmVyZmxvdy14OiBoaWRkZW47ICovXFxufVxcblxcbi5ub3RpZi1vdXRwdXQgPiAqIHtcXG4gICAgbWFyZ2luOiAuMjVyZW0gMCAwIDA7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS10cmFuc3BhcmVudDEpO1xcbiAgICBwYWRkaW5nOiAwIDAgLjI1cmVtIDA7XFxuICAgIFxcbn1cXG5cXG4ubm90aWYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubm90aWYgPiAqLFxcbi5ub3RpZi1leHRyYSBidXR0b24gc3BhbntcXG4gICAgZm9udC1zaXplOiAuOXJlbTsgIFxcbn1cXG5cXG4ubm90aWYgPiBzcGFuIHtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcblxcbi5ub3RpZi1leHRyYSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm5vdGlmIHNtYWxsIHtcXG4gICAgY29sb3I6IHZhcigtLWF1YnVybik7XFxufVxcblxcbi5ub3RpZmljYXRpb25zLm9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG5cXG59XFxuXFxuLmFwcC5zZWFyY2ggLmFkZC10YXNrLWJ0bi1kaXZ7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0LWNyZWF0b3IgPiBkaXYsXFxuLmxhYmVsLWNyZWF0b3IgPiBkaXYsXFxuLnRvZG8tZWRpdG9yID4gZGl2LFxcbi5wcm9qZWN0LWVkaXRvciA+IGRpdixcXG4ubGFiZWwtZWRpdG9yID4gZGl2IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQ5Mik7XFxuICAgIG1heC13aWR0aDogNDIwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi5wcm9qZWN0LWNyZWF0b3IgPiBkaXYgPiAqLFxcbi5sYWJlbC1jcmVhdG9yID4gZGl2ID4gKixcXG4udG9kby1lZGl0b3IgPiBkaXYgPiAqLFxcbi5wcm9qZWN0LWVkaXRvciA+IGRpdiA+ICosXFxuLmxhYmVsLWVkaXRvciA+IGRpdiA+ICoge1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG4gICAgbWFyZ2luOiAwIDAgLjI1cmVtIDA7XFxufVxcblxcbi5wcm9qZWN0LWNyZWF0b3IgPiBkaXYgPiAqOmZpcnN0LWNoaWxkLCBcXG4ucHJvamVjdC1jcmVhdG9yID4gZGl2ID4gKjpudGgtY2hpbGQoMiksXFxuLmxhYmVsLWNyZWF0b3IgPiBkaXYgPiAqOmZpcnN0LWNoaWxkLCBcXG4ubGFiZWwtY3JlYXRvciA+IGRpdiA+ICo6bnRoLWNoaWxkKDIpLFxcbi50b2RvLWVkaXRvciA+IGRpdiA+ICo6Zmlyc3QtY2hpbGQsIFxcbi50b2RvLWVkaXRvciA+IGRpdiA+ICo6bnRoLWNoaWxkKDIpLFxcbi5wcm9qZWN0LWVkaXRvciA+IGRpdiA+ICo6Zmlyc3QtY2hpbGQsXFxuLnByb2plY3QtZWRpdG9yID4gZGl2ID4gKjpudGgtY2hpbGQoMiksXFxuLmxhYmVsLWVkaXRvciA+IGRpdiA+ICo6Zmlyc3QtY2hpbGQsXFxuLmxhYmVsLWVkaXRvciA+IGRpdiA+ICo6bnRoLWNoaWxkKDIpIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXRyYW5zcGFyZW50MSk7XFxufVxcblxcbi5wcm9qZWN0LWNyZWF0b3IgPiBkaXYsXFxuLnByb2plY3QtaW5wdXQsXFxuLmxhYmVsLWNyZWF0b3IgPiBkaXYsXFxuLmxhYmVsLWlucHV0LFxcbi50b2RvLWVkaXRvciA+IGRpdixcXG4udG9kby1lZGl0b3ItaW5wdXQsXFxuLnByb2plY3QtZWRpdG9yID4gZGl2LFxcbi5wcm9qZWN0LWVkaXRvci1pbnB1dCxcXG4ubGFiZWwtZWRpdG9yID4gZGl2LFxcbi5sYWJlbC1lZGl0b3ItaW5wdXQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucHJvamVjdC1pbnB1dCA+ICosXFxuLmxhYmVsLWlucHV0ID4gKixcXG4udG9kby1lZGl0b3ItaW5wdXQgPiAqLFxcbi5wcm9qZWN0LWVkaXRvci1pbnB1dCA+ICosXFxuLmxhYmVsLWVkaXRvci1pbnB1dCA+ICoge1xcbiAgICBtYXJnaW46IDAgMCAuMjVyZW0gMDtcXG59XFxuXFxuLnByb2plY3QtaW5wdXQgaW5wdXQsXFxuLmxhYmVsLWlucHV0IGlucHV0LFxcbi50b2RvLWVkaXRvci1pbnB1dCBpbnB1dCxcXG4udG9kby1lZGl0b3ItaW5wdXQgc2VsZWN0LFxcbi5wcm9qZWN0LWVkaXRvci1pbnB1dCBpbnB1dCxcXG4ubGFiZWwtZWRpdG9yLWlucHV0IGlucHV0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgIHBhZGRpbmc6IC4yNXJlbTtcXG59XFxuXFxuLnRvZG8tZWRpdG9yLWlucHV0IHtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLnRvZG8tZWRpdG9yLWlucHV0IHtcXG4gICAgcGFkZGluZy10b3A6IDAhaW1wb3J0YW50O1xcbn1cXG5cXG4udG9kby1lZGl0b3ItaW5wdXQgbGFiZWwge1xcbiAgICBtYXJnaW46IC4yNXJlbSAwIC4xcmVtIDA7XFxufVxcblxcbi5wcm9qZWN0LWJ1dHRvbnMsXFxuLmxhYmVsLWJ1dHRvbnMsXFxuLnRvZG8tZWRpdG9yLWJ1dHRvbnMsXFxuLnVwZGF0ZS1wcm9qZWN0LWJ1dHRvbnMsXFxuLnVwZGF0ZS1sYWJlbC1idXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsgICAgXFxuICAgIG1hcmdpbi1ib3R0b206IDAhaW1wb3J0YW50O1xcbn1cXG5cXG4ucHJvamVjdC1jcmVhdG9yIGJ1dHRvbixcXG4ubGFiZWwtY3JlYXRvciBidXR0b24sXFxuLnRvZG8tZWRpdG9yIGJ1dHRvbixcXG4ucHJvamVjdC1lZGl0b3IgYnV0dG9uLFxcbi5sYWJlbC1lZGl0b3IgYnV0dG9uIHtcXG4gICAgcGFkZGluZzogLjI1cmVtO1xcbiAgICBtYXJnaW46IDAgMCAwIC4yNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQxKTtcXG59XFxuXFxuLnByb2plY3QtY3JlYXRvciBidXR0b246Zmlyc3QtY2hpbGQsXFxuLmxhYmVsLWNyZWF0b3IgYnV0dG9uOmZpcnN0LWNoaWxkLFxcbi50b2RvLWVkaXRvciBidXR0b246Zmlyc3QtY2hpbGQsXFxuLnByb2plY3QtZWRpdG9yIGJ1dHRvbjpmaXJzdC1jaGlsZCxcXG4ubGFiZWwtZWRpdG9yIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1hcmluZXIpO1xcbn1cXG5cXG4udXBkYXRlLXByb2plY3QtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDMpLFxcbi51cGRhdGUtbGFiZWwtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDMpIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXVidXJuKTtcXG59XFxuXFxuLnByb2plY3QtY3JlYXRvci5vbixcXG4ubGFiZWwtY3JlYXRvci5vbixcXG4udG9kby1lZGl0b3Iub24sXFxuLnByb2plY3QtZWRpdG9yLm9uLFxcbi5sYWJlbC1lZGl0b3Iub24ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4ucHJvamVjdC1pbnB1dCBpbnB1dDpmb2N1cy12aXNpYmxlLFxcbi5sYWJlbC1pbnB1dCBpbnB1dDpmb2N1cy12aXNpYmxlLFxcbi50b2RvLWVkaXRvci1pbnB1dCBpbnB1dDpmb2N1cy12aXNpYmxlLFxcbi5wcm9qZWN0LWVkaXRvci1pbnB1dCBpbnB1dDpmb2N1cy12aXNpYmxlLFxcbi5sYWJlbC1lZGl0b3ItaW5wdXQgaW5wdXQ6Zm9jdXMtdmlzaWJsZSB7XFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCB2YXIoLS10cmFuc3BhcmVudDIpO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XFxuICAgIC5uYXYtY29tcCB7XFxuICAgICAgICBwYWRkaW5nOiAuNXJlbSAuNXJlbSAuNXJlbSAuNXJlbTtcXG4gICAgfVxcbiAgICAuaW5mby1jb21wIHtcXG4gICAgICAgIHBhZGRpbmc6IDFyZW0gLjI1cmVtIC4yNXJlbSAuMjVyZW07XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB6LWluZGV4OiAxMDAwO1xcbiAgICAgICAgdG9wOiA0Ny41OXB4O1xcbiAgICAgICAgYm90dG9tOiAwO1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbiAgICAuaW5mby1jb21wLnNob3ctbmF2IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIH1cXG4gICAgLmluZm8tY29tcCA+ICoge1xcbiAgICAgICAgd2lkdGg6IDI5NHB4O1xcbiAgICB9XFxuICAgIC5jb250YWluZXIgPiBoZWFkZXIge1xcbiAgICAgICAgcGFkZGluZzogMXJlbSAwIC41cmVtIDA7XFxuICAgIH1cXG4gICAgLmNvbnRhaW5lciB7XFxuICAgICAgICBwYWRkaW5nOiAwIDFyZW0gMCAxcmVtO1xcbiAgICB9XFxuICAgIC5xdWljay1hZGQtdG9kbyA+IGRpdiB7XFxuICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcXG4gICAgLmluZm8tY29tcCA+ICoge1xcbiAgICAgICAgd2lkdGg6IDI0MnB4O1xcbiAgICB9XFxuICAgIC5zZWFyY2gtaW5wdXQge1xcbiAgICAgICAgd2lkdGg6IDE4MHB4O1xcbiAgICB9XFxuICAgIC5zZWFyY2gtaW5wdXQ6Zm9jdXMge1xcbiAgICAgICAgd2lkdGg6IDE4MHB4O1xcbiAgICB9XFxuICAgIC5xdWljay1hZGQtdG9kbyA+IGRpdiB7XFxuICAgICAgICBtYXgtd2lkdGg6IDMwMHB4O1xcbiAgICB9XFxuICAgIC5ub3RpZi1jb250YWluZXIge1xcbiAgICAgICAgbWF4LXdpZHRoOiAzMTBweDtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMXB4KSB7XFxuICAgIC5zZWFyY2gtaW5wdXQge1xcbiAgICAgICAgbWF4LXdpZHRoOiAxMzVweDtcXG4gICAgfVxcbiAgICAuc2VhcmNoLWlucHV0OmZvY3VzIHtcXG4gICAgICAgIG1heC13aWR0aDogMTM1cHg7XFxuICAgIH1cXG4gICAgLnF1aWNrLWFkZC10b2RvID4gZGl2IHtcXG4gICAgICAgIG1heC13aWR0aDogMjcwcHg7XFxuICAgIH1cXG4gICAgLm5vdGlmLWNvbnRhaW5lciB7XFxuICAgICAgICBtYXgtd2lkdGg6IDI3MHB4O1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQyMHB4KSB7XFxuICAgIC50b2RvLWVkaXRvci1pbnB1dCB7XFxuICAgICAgICBtYXgtaGVpZ2h0OiAxODBweDtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGdldFRhcmdldCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFRhcmdldC5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBmdW5jdGlvbihjc3MsIHN0eWxlKXtcbiAgICAgIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICAgIH1cblxuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gICAgfVxuICB9O1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gZnVuY3Rpb24oc3R5bGUpIHtcbiAgICAgICAgdmFyIG5vbmNlID1cbiAgICAgICAgICB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICAgICAgaWYgKG5vbmNlKSB7XG4gICAgICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICAgICAgICB9XG4gICAgICB9O1xub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihzdHlsZSl7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChcImhlYWRcIik7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIlxuICAgICAgKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9O1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VGFyZ2V0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVtYmVkTG9jYWxTdG9yYWdlID0gKCgpID0+IHtcbiAgICBpZighbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJykpXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zJywgSlNPTi5zdHJpbmdpZnkoe3RvZG9saXN0OiBbXSwgcHJvamVjdHM6IFtdLCBsYWJlbHM6IFtdfSkpO1xufSkoKTtcblxuY29uc3QgVG9kbyA9IGZ1bmN0aW9uKCBpZCwgdGl0bGUsIGR1ZURhdGUsIG5vdGUsIHByaW9yaXR5LCBwcm9qZWN0LCBsYWJlbCwgZHVlRGF0ZU5vdGlmU2VudCApe1xuICAgIHJldHVybiB7IGlkLCB0aXRsZSwgZHVlRGF0ZSwgbm90ZSwgcHJpb3JpdHksIHByb2plY3QsIGxhYmVsLCBkdWVEYXRlTm90aWZTZW50IH1cbn07XG5cbmNvbnN0IGlzRW1wdHlUb0RvTGlzdCA9ICgpID0+IHtcbiAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJykpO1xuICAgIHJldHVybiAhZGF0YS50b2RvbGlzdC5sZW5ndGggPyB0cnVlIDogZmFsc2U7XG59O1xuXG5jb25zdCBwdXNoID0gKCgpID0+IHtcbiAgICBsZXQgX2RhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpKTtcblxuICAgIGNvbnN0IF9lbWJlZCA9ICgpID0+IHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zJywgSlNPTi5zdHJpbmdpZnkoX2RhdGEpKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2VuZXJhdGVJZCA9ICgpID0+IHtcbiAgICAgICAgbGV0IGlkID0gX2RhdGEudG9kb2xpc3QubGVuZ3RoICsgMTtcblxuICAgICAgICBpZihfZGF0YS50b2RvbGlzdC5sZW5ndGgpe1xuICAgICAgICAgICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgICAgICAgICAgX2RhdGEudG9kb2xpc3QuZm9yRWFjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoX2RhdGEudG9kb2xpc3RbY291bnRlcl0uaWQgPT0gaWQpIHsgaWQrKzsgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlkO1xuICAgIH07XG5cbiAgICBjb25zdCBxdWljayA9ICh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCB0b2RvID0gVG9kbyhcbiAgICAgICAgICAgIGdlbmVyYXRlSWQoKSxcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgJycsXG4gICAgICAgICAgICAnJyxcbiAgICAgICAgICAgICdwcmlvcml0eSA0JyxcbiAgICAgICAgICAgICdpbmJveCcsXG4gICAgICAgICAgICAnJyxcbiAgICAgICAgICAgICdub25lJ1xuICAgICAgICApO1xuICAgICAgICBfZGF0YS50b2RvbGlzdC5wdXNoKHRvZG8pO1xuICAgICAgICBfZW1iZWQoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcXVpY2tcbiAgICB9XG59KSgpO1xuXG4vL2NyZWF0ZSBjb250YWluZXIgZm9yIHByb2plY3RzXG4vL2NvbnRhaW5lciBmb3IgbGFiZWxzXG5cblxuXG5cblxuXG5cblxuXG5jb25zdCB0ZXN0ID0gKGZ1bmN0aW9uKCl7XG4gICAgLy8gY29uc3QgdG9kbyA9IFRvZG8oXG4gICAgLy8gICAgIDEsXG4gICAgLy8gICAgICdmaW5pc2ggdG9kbycsXG4gICAgLy8gICAgICcyMDIxLTA3LTMxJyxcbiAgICAvLyAgICAgJycsXG4gICAgLy8gICAgICdwcmlvcml0eSAxJyxcbiAgICAvLyAgICAgJ2luYm94JyxcbiAgICAvLyAgICAgJycsXG4gICAgLy8gICAgICdub25lJ1xuICAgIC8vICk7XG4gICAgLy8gbGV0IGFycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MnKSk7XG4gICAgLy8gaWYoIWFycmF5Lmxlbmd0aCl7XG4gICAgLy8gICAgIGFycmF5LnB1c2godG9kbyk7XG4gICAgLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvcycsIEpTT04uc3RyaW5naWZ5KGFycmF5KSk7XG4gICAgLy8gfVxuICAgIC8vIGNvbnNvbGUubG9nKHRvZG8pXG5cbiAgICAvLyBsZXQgeCA9IERhdGUubm93KCk7XG4gICAgLy8gLy8gbGV0IHggPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAvLyAvLyBEYXRlLnBhcnNlKHgpXG4gICAgLy8gbGV0IGFzID0gdG9kby5kdWVEYXRlO1xuICAgIC8vIGNvbnNvbGUubG9nKERhdGUucGFyc2UoYXMpKVxuXG4gICAgLy8gdmFyIGRhdGVDb250cm9sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImRhdGVcIl0nKTtcbiAgICAvLyBkYXRlQ29udHJvbC52YWx1ZSA9ICcyMDE3LTA2LTAxJztcbiAgICAvLyBjb25zb2xlLmxvZyhkYXRlQ29udHJvbC52YWx1ZSk7IC8vIHByaW50cyBcIjIwMTctMDYtMDFcIlxuICAgIC8vIGNvbnNvbGUubG9nKGRhdGVDb250cm9sLnZhbHVlQXNOdW1iZXIpOyAvLyBwcmludHMgMTQ5NjI3NTIwMDAwMCwgYSBKYXZhU2NyaXB0IHRpbWVzdGFtcCAobXMpXG5cbn0pKCk7XG5cbmV4cG9ydCB7IFxuICAgIGVtYmVkTG9jYWxTdG9yYWdlLFxuICAgIGlzRW1wdHlUb0RvTGlzdCxcbiAgICB0ZXN0LFxuICAgIHB1c2hcbn07XG4iLCJpbXBvcnQgY2hpbGxpbmdJbWcgZnJvbSAnLi9jaGlsbGluZy5zdmcnO1xuaW1wb3J0IHsgZW1iZWRMb2NhbFN0b3JhZ2UsIGlzRW1wdHlUb0RvTGlzdCB9IGZyb20gJy4vZGF0YS5qcyc7XG5cbid1c2Ugc3RyaWN0JztcblxuY29uc3Qgc2V0TGFuZ3VhZ2UgPSAoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdodG1sJykuc2V0QXR0cmlidXRlKCdsYW5nJywgJ2VuJyk7XG5cbmNvbnN0IHNldHVwSGVhZFRhZyA9ICgpID0+IHtcbiAgICBjb25zdCBoZWFkRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWQnKTtcbiAgICBjb25zdCB0aXRsZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0aXRsZScpO1xuXG4gICAgY29uc3QgbmV3TWV0YUVkZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtZXRhJyk7XG4gICAgY29uc3QgbmV3TGlua01hdGVyaWFsSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICBjb25zdCBuZXdMaW5rRmF2aWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcblxuICAgIG5ld01ldGFFZGdlLnNldEF0dHJpYnV0ZSgnaHR0cC1lcXVpdicsJ1gtVUEtQ29tcGF0aWJsZScpO1xuICAgIG5ld01ldGFFZGdlLnNldEF0dHJpYnV0ZSgnY29udGVudCcsJ0lFPWVkZ2UnKTtcbiAgICBuZXdMaW5rTWF0ZXJpYWxJY29uLnNldEF0dHJpYnV0ZSgncmVsJywgJ3N0eWxlc2hlZXQnKTtcbiAgICBuZXdMaW5rTWF0ZXJpYWxJY29uXG4gICAgICAgIC5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29ucytPdXRsaW5lZCcpO1xuICAgIG5ld0xpbmtGYXZpY29uLnNldEF0dHJpYnV0ZSgncmVsJywgJ2ljb24nKTtcbiAgICBuZXdMaW5rRmF2aWNvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnaW1hZ2UvcG5nJyk7XG4gICAgbmV3TGlua0Zhdmljb24uc2V0QXR0cmlidXRlKCdocmVmJywgJ2h0dHBzOi8vb3BlbmNsaXBhcnQub3JnL2ltYWdlLzQwMHB4LzMwMzI1NCcpO1xuXG4gICAgaGVhZEVsZW1lbnQuaW5zZXJ0QmVmb3JlKG5ld01ldGFFZGdlLCB0aXRsZUVsZW1lbnQpO1xuICAgIGhlYWRFbGVtZW50Lmluc2VydEJlZm9yZShuZXdMaW5rTWF0ZXJpYWxJY29uLCB0aXRsZUVsZW1lbnQpO1xuICAgIGhlYWRFbGVtZW50LmFwcGVuZENoaWxkKG5ld0xpbmtGYXZpY29uKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUFwcERpdiA9ICgpID0+IHtcbiAgICBjb25zdCBib2R5RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBjb25zdCBib2R5U2NyaXB0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keSBzY3JpcHQnKTtcbiAgICBjb25zdCBhcHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGFwcC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FwcCcpO1xuICAgIGJvZHlFbGVtZW50Lmluc2VydEJlZm9yZShhcHAsIGJvZHlTY3JpcHQpO1xufTtcblxuY29uc3QgY3JlYXRlQXBwTmF2ID0gKCkgPT4ge1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICAgIG5hdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25hdi1jb21wJyk7XG4gICAgbmF2LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcyA9IFwibmMtbGVmdFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBpZCA9IFwibmF2QnRuTWVudVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWlkXCI+bWVudTwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBpZCA9IFwibmF2QnRuSG9tZVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWlkXCI+aG9tZTwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGZvcm0gaWQgPSBcImZvcm1TZWFyY2hcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJzZWFyY2gtZGl2XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWlkXCI+c2VhcmNoPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInNlYXJjaFwiIGFyaWEtbGFiZWw9XCJTZWFyY2ggdGhyb3VnaCBhbGwgdG9kb3NcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzID0gXCJzZWFyY2gtaW5wdXRcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZCA9IFwibmF2SW5wdXRTZWFyY2hcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlID0gXCJyZXNldFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWRcIj5jbG9zZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzID0gXCJuYy1yaWdodFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBpZCA9IFwibmF2QnRuUXVpY2tBZGRcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIG1pZFwiPmFkZDwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcyA9IFwibmF2LWJ0bi1ub3RpZmljYXRpb25cIiBpZCA9IFwibmF2QnRuTm90aWZpY2F0aW9uXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWRcIj5ub3RpZmljYXRpb25zPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzbWFsbCBpZCA9IFwibmF2QnRuTm90aWZpY2F0aW9uQ291bnRcIj48L3NtYWxsPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIGA7XG4gICAgXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFwcCcpLmFwcGVuZENoaWxkKG5hdik7XG59O1xuXG5jb25zdCBjcmVhdGVBcHBCb2R5ID0gKCkgPT4ge1xuICAgIGNvbnN0IGFwcEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBhcHBCb2R5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYXBwLWJvZHknKTtcbiAgICB3cmFwcGVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnd3JhcHBlcicpO1xuXG4gICAgYXBwQm9keS5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXBwJykuYXBwZW5kQ2hpbGQoYXBwQm9keSk7XG59O1xuXG5jb25zdCBjcmVhdGVTaWRlYmFyTmF2ID0gKCkgPT4ge1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuXG4gICAgbmF2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaW5mby1jb21wJyk7XG4gICAgbmF2LnNldEF0dHJpYnV0ZSgnaWQnLCAnbmF2SW5mb0NvbXAnKTtcbiAgICBuYXYuaW5uZXJIVE1MID0gYFxuICAgICAgICA8YnV0dG9uIGlkID0gXCJzYm5hdkluYm94QnRuXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIG1pZCBpYy1zcGFuXCI+aW5ib3g8L3NwYW4+XG4gICAgICAgICAgICBJbmJveDxzYW1wPjwvc2FtcD5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gaWQgPSBcInNibmF2VG9kYXlCdG5cIiBjbGFzcyA9IFwiYWN0aXZlXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIG1pZCBpYy1zcGFuXCI+Y2FsZW5kYXJfdG9kYXk8L3NwYW4+XG4gICAgICAgICAgICBUb2RheTxzYW1wPjwvc2FtcD5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gaWQgPSBcInNibmF2VXBjb21CdG5cIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWlkIGljLXNwYW5cIj51cGNvbWluZzwvc3Bhbj5cbiAgICAgICAgICAgIFVwY29taW5nPHNhbXA+PC9zYW1wPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGRpdiBjbGFzcyA9IFwiaWMtZGl2IGljLXByb2plY3RcIiB0YWJpbmRleD1cIjBcIiBpZCA9IFwic2JuYXZQcm9qZWN0c0RpdlwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWQgaWMtc3BhbiBvcGFcIj5jaGV2cm9uX3JpZ2h0PC9zcGFuPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcyA9IFwiaWMtYWRkLWJ0biBvcGFcIiBpZCA9IFwic2JuYXZQcm9qZWN0QWRkQnRuXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWRcIj5hZGQ8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxzdHJvbmc+UHJvamVjdHM8L3N0cm9uZz5cbiAgICAgICAgICAgIDxkaXYgaWQgPSBcInByb2plY3RMaXN0Q29udGFpbmVyXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3MgPSBcImljLWRpdiBpYy1sYWJlbFwiIHRhYmluZGV4PVwiMFwiIGlkID0gXCJzYm5hdkxhYmVsc0RpdlwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWQgaWMtc3BhbiBvcGFcIj5jaGV2cm9uX3JpZ2h0PC9zcGFuPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcyA9IFwiaWMtYWRkLWJ0biBvcGFcIiBpZCA9IFwic2JuYXZMYWJlbEFkZEJ0blwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWlkXCI+YWRkPC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8c3Ryb25nPkxhYmVsczwvc3Ryb25nPlxuICAgICAgICAgICAgPGRpdiBpZCA9IFwibGFiZWxMaXN0Q29udGFpbmVyXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYDtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3JhcHBlcicpLmFwcGVuZENoaWxkKG5hdik7XG59O1xuXG5jb25zdCBjcmVhdGVDb250YWluZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NvbnRhaW5lcicpO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhaW5lcicpO1xuXG4gICAgaWYoaXNFbXB0eVRvRG9MaXN0KCkpey8vZml4IHVzaW5nIGRhdGVzIHNpbmNlIGl0IGRlZmVuZHMgb24gdG9kYXkncyBkYXRhXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdlbXB0eScpO1xuICAgIH1cblxuICAgIGhlYWRlci5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxoMSBpZCA9IFwiaGVhZGVyXCI+VG9kYXk8L2gxPlxuICAgIGA7XG4gICAgZGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWRkLXRhc2stYnRuLWRpdicpO1xuICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZFRhc2tCdG5EaXYnKTtcbiAgICBkaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICA8YnV0dG9uIGNsYXNzID0gXCJhZGQtdGFzay1idG5cIiBpZCA9IFwiYWRkVGFza0J0blwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWQgdG9vbC1zcGFuXCI+YWRkPC9zcGFuPlxuICAgICAgICAgICAgQWRkIHRhc2tcbiAgICAgICAgPC9idXR0b24+XG4gICAgYDtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3JhcHBlcicpLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG59O1xuXG5jb25zdCBjcmVhdGVBZGRUYXNrRGl2ID0gKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgZGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWRkLXRhc2stZGl2Jyk7XG4gICAgZGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkVGFza0RpdicpO1xuICAgIGRpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxpbnB1dCB0eXBlID0gXCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJUYXNrIG5hbWVcIiBpZCA9IFwiYWRkVGFza0lucHV0XCI+XG4gICAgICAgIDxkaXYgY2xhc3MgPSBcImFkZC10YXNrLWJ0bnMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQgPSBcInNlbGVjdFNjaGVkdWxlQnRuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWlkXCI+ZXZlbnQ8L3NwYW4+IFNjaGVkdWxlXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZCA9IFwic2VsZWN0UHJvamVjdEJ0blwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIG1pZFwiPmluYm94PC9zcGFuPiBJbmJveFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQgPSBcInNlbGVjdExhYmVsQnRuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWlkXCI+bGFiZWw8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZCA9IFwic2VsZWN0UHJpb3JpdHlCdG5cIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWRcIj5mbGFnPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzID0gXCJzY2hlZHVsZXJcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3MgPSBcInNjaGVkXCIgaWQgPSBcInNjaGVkdWxlclRvZGF5QnRuXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+VG9kYXk8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gaWQgPSBcInNjaGVkdWxlclRvZGF5U3BhblwiPnRvZGF5J3MgZGF0ZTwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcyA9IFwic2NoZWRcIiBpZCA9IFwic2NoZWR1bGVyVHdtQnRuXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+VG9tb3Jyb3c8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gaWQgPSBcInNjaGVkdWxlclR3bUJ0blwiPlR1ZTwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcyA9IFwic2NoZWRcIiBpZCA9IFwic2NoZWR1bGVyTmV4dFdlZWtCdG5cIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5OZXh0IHdlZWs8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gaWQgPSBcInNjaGVkdWxlck5leHRXZWVrU3BhblwiPk1vbiAyNiBKdWx5PC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJzY2hlZC1jdXN0b21cIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9IFwiZGF0ZVwiIGlkID0gXCJzY2hlZHVsZXJDdXN0b21JbnB1dFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQgPSBcInNjaGVkdWxlckN1c3RvbUJ0blwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIG1pZFwiPmRvbmU8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3MgPSBcInNjaGVkXCIgaWQgPSBcInNjaGVkdWxlck5vRGF0ZUJ0blwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPk5vIERhdGU8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gaWQgPSBcInNjaGVkdWxlck5vRGF0ZVNwYW5cIj4mI3gyMjA1Ozwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcyA9IFwiY2FycmllclwiIGlkID0gXCJwcm9qZWN0U2VsZWN0b3JcIj5cbiAgICAgICAgICAgIDxidXR0b24gaWQgPSBcInByb2plY3REZWZhdWx0SW5ib3hcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIG1pZFwiPmluYm94PC9zcGFuPlxuICAgICAgICAgICAgICAgIDx1PkluYm94PC91PlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzID0gXCJsYWJlbGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGlkID0gXCJsYWJlbENvbnRhaW5lclwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzID0gXCJwcmlvLXNldHRlclwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkID0gXCJwcmlvcml0eU9uZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIG1pZFwiPmZsYWc8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDx1PlByaW9yaXR5IDE8L3U+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZCA9IFwicHJpb3JpdHlUd29cIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWRcIj5mbGFnPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8dT5Qcmlvcml0eSAyPC91PlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQgPSBcInByaW9yaXR5VGhyZWVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWRcIj5mbGFnPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8dT5Qcmlvcml0eSAzPC91PlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQgPSBcInByaW9yaXR5RGVmYXVsdFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIG1pZFwiPmZsYWc8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDx1PlByaW9yaXR5IDQ8L3U+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYDtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKS5hcHBlbmRDaGlsZChkaXYpO1xufTtcblxuY29uc3QgY3JlYXRlTW9yZUNvbnRhaW5lckl0ZW1zID0gKCkgPT4ge1xuICAgIGNvbnN0IGRpdjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG5cbiAgICBkaXYxLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWRkLXRhc2stbWFpbi1idG5zLWNvbnRhaW5lcicpO1xuICAgIGRpdjIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdlbXB0eS1zdGF0ZS1kaXYnKTtcbiAgICBkaXYyLnNldEF0dHJpYnV0ZSgnaWQnLCAnZW1wdHlTdGF0ZURpdicpO1xuICAgIGZvb3Rlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Zvb3RlcicpO1xuXG4gICAgZGl2MS5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxidXR0b24gaWQgPSBcImFkZFRhc2tNYWluQnRuXCI+XG4gICAgICAgICAgICBBZGQgdGFza1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBpZCA9IFwiYWRkVGFza0NhbmNlbEJ0blwiPlxuICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgIDwvYnV0dG9uPlxuICAgIGA7XG4gICAgZGl2Mi5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxpbWcgc3JjPVwiJHtjaGlsbGluZ0ltZ31cIiBkcmFnZ2FibGU9XCJmYWxzZVwiPlxuICAgICAgICA8aDQ+QWxsIGNsZWFyPC9oND5cbiAgICAgICAgPHA+TG9va3MgbGlrZSBldmVyeXRoaW5nJ3Mgb3JnYW5pemVkIGluIHRoZSByaWdodCBwbGFjZS48L3A+XG4gICAgYDtcbiAgICBmb290ZXIuaW5uZXJIVE1MID0gYFxuICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIG1pZFwiPmhlbHBfb3V0bGluZTwvc3Bhbj5cbiAgICAgICAgPHAgaWQgPSBcImhlbHBcIj5Ib3cgdG8gYmVzdCB1c2UgdGhpcyBBcHA8L3A+XG4gICAgYDtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKS5hcHBlbmRDaGlsZChkaXYxKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJykuYXBwZW5kQ2hpbGQoZGl2Mik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpLmFwcGVuZENoaWxkKGZvb3Rlcik7XG59O1xuXG5jb25zdCBjcmVhdGVIaWRkZW5Nb2RhbHMgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFwcCcpLmlubmVySFRNTCArPSBgXG4gICAgICAgIDxkaXYgY2xhc3MgPSBcInF1aWNrLWFkZC10b2RvXCIgaWQgPSBcInF1aWNrQWRkVG9kb1wiPlxuICAgICAgICAgICAgPGRpdiBpZCA9IFwicXVpY2tBZGRDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9IFwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVGFzayBuYW1lXCIgaWQgPSBcInF1aWNrQWRkSW5wdXRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkID0gXCJxdWlja0FkZFN1Ym1pdFwiPkFkZCB0YXNrPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQgPSBcInF1aWNrQWRkQ2FuY2VsXCI+Q2FuY2VsPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3MgPSBcIm5vdGlmaWNhdGlvbnNcIiBpZCA9IFwibm90aWZpY2F0aW9uc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwibm90aWYtY29udGFpbmVyXCIgaWQgPSBcIm5vdGlmQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPG5hdj5cbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5Ob3RpZmljYXRpb25zPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3MgPSBcInJlYWQtYWxsLWJ0blwiIGlkID0gXCJub3RpZlJlYWRBbGxCdG5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWlkXCI+ZG9uZV9hbGw8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcIm5vdGlmLW91dHB1dFwiIGlkID0gXCJub3RpZk91dHB1dFwiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzID0gXCJwcm9qZWN0LWNyZWF0b3JcIiBpZCA9IFwicHJvamVjdENyZWF0b3JcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHN0cm9uZz5BZGQgcHJvamVjdDwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcInByb2plY3QtaW5wdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm5ld1Byb2plY3ROYW1lXCI+TmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJ0ZXh0XCIgaWQgPSBcIm5ld1Byb2plY3ROYW1lXCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwicHJvamVjdC1idXR0b25zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQgPSBcInByb2plY3RBZGRCdXR0b25cIj5BZGQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZCA9IFwicHJvamVjdENhbmNlbEJ1dHRvblwiPkNhbmNlbDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzID0gXCJwcm9qZWN0LWVkaXRvclwiIGlkID0gXCJwcm9qZWN0RWRpdG9yXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzdHJvbmcgaWQgPSBcInByb2plY3ROYW1lXCI+UHJvamVjdCBOYW1lPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwicHJvamVjdC1lZGl0b3ItaW5wdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInVwZGF0ZWRQcm9qZWN0TmFtZVwiPlJlbmFtZSB0bzwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJ0ZXh0XCIgaWQgPSBcInVwZGF0ZWRQcm9qZWN0TmFtZVwiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcInVwZGF0ZS1wcm9qZWN0LWJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZCA9IFwidXBkYXRlUHJvamVjdEJ0blwiPlVwZGF0ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkID0gXCJjYW5jZWxQcm9qZWN0QnRuXCI+Q2FuY2VsPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQgPSBcImRlbGV0ZVByb2plY3RCdG5cIj5EZWxldGU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcyA9IFwibGFiZWwtY3JlYXRvclwiIGlkID0gXCJsYWJlbENyZWF0b3JcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHN0cm9uZz5BZGQgbGFiZWw8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJsYWJlbC1pbnB1dFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiYWRkTGFiZWxJbnB1dFwiPk5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9IFwidGV4dFwiIGlkID0gXCJhZGRMYWJlbElucHV0XCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwibGFiZWwtYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkID0gXCJhZGROZXdMYWJlbEJ0blwiPkFkZDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkID0gXCJjYW5jZWxBZGRMYWJlbEJ0blwiPkNhbmNlbDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzID0gXCJsYWJlbC1lZGl0b3JcIiBpZCA9IFwibGFiZWxFZGl0b3JcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHN0cm9uZyBpZCA9IFwiZWRpdExhYmVsTmFtZVwiPmxhYmVsIE5hbWU8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJsYWJlbC1lZGl0b3ItaW5wdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInVwZGF0ZWRMYWJlbE5hbWVcIj5SZW5hbWUgdG88L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9IFwidGV4dFwiIGlkID0gXCJ1cGRhdGVkTGFiZWxOYW1lXCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwidXBkYXRlLWxhYmVsLWJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZCA9IFwidXBkYXRlTGFiZWxCdG5cIj5VcGRhdGU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZCA9IFwiY2FuY2VsVXBkYXRlQnRuXCI+Q2FuY2VsPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQgPSBcImRlbGV0ZUxhYmVsQnRuXCI+RGVsZXRlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3MgPSBcInRvZG8tZWRpdG9yXCIgaWQgPSBcInRhc2tFZGl0b3JcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHN0cm9uZz5FZGl0IFRhc2s8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJ0b2RvLWVkaXRvci1pbnB1dFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidXBkYXRlZFRhc2tOYW1lXCI+VGFzayBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInRleHRcIiBpZCA9IFwidXBkYXRlZFRhc2tOYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ1cGRhdGVkVGFza05vdGVcIj5UYXNrIE5vdGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9IFwidGV4dFwiIGlkID0gXCJ1cGRhdGVkVGFza05vdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInVwZGF0ZWRUYXNrU2NoZWR1bGVcIj5TY2hlZHVsZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJ1cGRhdGVkVGFza1NjaGVkdWxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwidG9kYXlcIj5Ub2RheTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInRvbW9ycm93XCI+VG9tb3Jyb3c8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJuZXh0LXdlZWtcIj5OZXh0IFdlZWs8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJjdXN0b21cIj5DdXN0b208L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJuby1kYXRlXCI+Tm8gRGF0ZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInVwZGF0ZWRUYXNrUHJvamVjdFwiPlByb2plY3Q8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwidXBkYXRlZFRhc2tQcm9qZWN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSW5ib3hcIj5JbmJveDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInVwZGF0ZWRUYXNrTGFiZWxcIj5MYWJlbDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJ1cGRhdGVkVGFza0xhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibm9uZVwiPk5vbmU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ1cGRhdGVkVGFza1ByaW9yaXR5XCI+UHJpb3JpdHk8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwidXBkYXRlZFRhc2tQcmlvcml0eVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInByaW9yaXR5MVwiPlByaW9yaXR5IDE8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwcmlvcml0eTJcIj5Qcmlvcml0eSAyPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicHJpb3JpdHkzXCI+UHJpb3JpdHkgMzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInByaW9yaXR5NFwiPlByaW9yaXR5IDQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwidG9kby1lZGl0b3ItYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkID0gXCJ1cGRhdGVUb2RvXCI+VXBkYXRlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQgPSBcImNhbmNlbFVwZGF0ZVRvZG9cIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgO1xufTtcblxuY29uc3QgY3JlYXRlQXBwID0gKCgpID0+IHtcbiAgICBzZXRMYW5ndWFnZSgpO1xuICAgIHNldHVwSGVhZFRhZygpO1xuICAgIGNyZWF0ZUFwcERpdigpO1xuICAgIGNyZWF0ZUFwcE5hdigpO1xuICAgIGNyZWF0ZUFwcEJvZHkoKTtcbiAgICBjcmVhdGVTaWRlYmFyTmF2KCk7XG4gICAgY3JlYXRlQ29udGFpbmVyKCk7XG4gICAgY3JlYXRlQWRkVGFza0RpdigpO1xuICAgIGNyZWF0ZU1vcmVDb250YWluZXJJdGVtcygpO1xuICAgIGNyZWF0ZUhpZGRlbk1vZGFscygpO1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQXBwOyIsImltcG9ydCB7IGhOYXYsIHZOYXYsIGNvbnRhaW5lciwgdGFzaywgbW9kYWwgfSBmcm9tICcuL3NlbGVjdG9yLmpzJztcbmltcG9ydCB7IHB1c2ggfSBmcm9tICcuL2RhdGEuanMnO1xuXG4ndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVsZW1lbnQgPSAoKCkgPT4ge1xuICAgIGxldCBmaXJzdEZvY3VzYWJsZUVsZW1lbnQ7XG4gICAgbGV0IGxhc3RGb2N1c2FibGVFbGVtZW50O1xuICAgIGxldCBtb2RhbFRvZ2dsZXI7XG4gICAgcmV0dXJuIHsgXG4gICAgICAgIGZpcnN0Rm9jdXNhYmxlRWxlbWVudCwgXG4gICAgICAgIGxhc3RGb2N1c2FibGVFbGVtZW50LFxuICAgICAgICBtb2RhbFRvZ2dsZXJcbiAgICB9O1xufSkoKTtcblxuY29uc3QgdGFiRXZlbnQgPSAoZSkgPT4ge1xuICAgIGxldCBpc1RhYlByZXNzZWQgPSBlLmtleSA9PT0gJ1RhYic7XG5cbiAgICBpZiAoIWlzVGFiUHJlc3NlZCkgeyByZXR1cm47IH1cblxuICAgIGlmIChlLnNoaWZ0S2V5KSB7XG4gICAgICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBlbGVtZW50LmZpcnN0Rm9jdXNhYmxlRWxlbWVudCkge1xuICAgICAgICAgICAgZWxlbWVudC5sYXN0Rm9jdXNhYmxlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBlbGVtZW50Lmxhc3RGb2N1c2FibGVFbGVtZW50KSB7XG4gICAgICAgICAgICBlbGVtZW50LmZpcnN0Rm9jdXNhYmxlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfSBcbn07XG5cbmNvbnN0IHRyYXBGb2N1cyA9IChtb2RhbCwgdG9nZ2xlcikgPT4ge1xuICAgIGNvbnN0IGZvY3VzYWJsZUVsZW1lbnRzID0gXG4gICAgICAgIG1vZGFsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbiwgaW5wdXQsIHNlbGVjdCwgW3RhYmluZGV4XTpub3QoW3RhYmluZGV4PVwiLTFcIl0pJyk7XG4gICAgZWxlbWVudC5maXJzdEZvY3VzYWJsZUVsZW1lbnQgPSBmb2N1c2FibGVFbGVtZW50c1swXTtcbiAgICBlbGVtZW50Lmxhc3RGb2N1c2FibGVFbGVtZW50ID0gZm9jdXNhYmxlRWxlbWVudHNbZm9jdXNhYmxlRWxlbWVudHMubGVuZ3RoLTFdO1xuICAgIGVsZW1lbnQubW9kYWxUb2dnbGVyID0gdG9nZ2xlcjtcbiAgICBcbiAgICBpZigod2luZG93LmlubmVyV2lkdGggPD0gNzUwKSAmJiB2TmF2Lm5hdi5jb250YWlucyhlbGVtZW50Lm1vZGFsVG9nZ2xlcikpIHtcbiAgICAgICAgdk5hdi5uYXYuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdy1uYXYnKTtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGFiRXZlbnQpO1xuICAgIGVsZW1lbnQuZmlyc3RGb2N1c2FibGVFbGVtZW50LmZvY3VzKCk7IFxufTtcblxuY29uc3QgcmVtb3ZlVHJhcEZvY3VzID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0YWJFdmVudCk7XG4gICAgaWYoKHdpbmRvdy5pbm5lcldpZHRoIDw9IDc1MCkgJiYgdk5hdi5uYXYuY29udGFpbnMoZWxlbWVudC5tb2RhbFRvZ2dsZXIpKSB7XG4gICAgICAgIHZOYXYubmF2LmNsYXNzTGlzdC5hZGQoJ3Nob3ctbmF2Jyk7XG4gICAgICAgIHZOYXYucHJvamVjdHMuZm9jdXMoKTtcbiAgICB9XG4gICAgZWxlbWVudC5tb2RhbFRvZ2dsZXIuZm9jdXMoKTtcbn07XG5cbmNvbnN0IHRvZ2dsZSA9ICgoKSA9PiB7XG4gICAgY29uc3QgbWVudSA9IChlKSA9PiB7XG4gICAgICAgIGlmKHdpbmRvdy5pbm5lcldpZHRoID4gNzUwKXtcbiAgICAgICAgICAgIGlmKHZOYXYubmF2Lmhhc0F0dHJpYnV0ZSgnc3R5bGUnKSkgXG4gICAgICAgICAgICB7IHZOYXYubmF2LnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTsgfVxuICAgICAgICAgICAgZWxzZSB7IHZOYXYubmF2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7IH1cbiAgICAgICAgfSBlbHNlIHsgXG4gICAgICAgICAgICB2TmF2Lm5hdi5jbGFzc0xpc3QudG9nZ2xlKCdzaG93LW5hdicpOyBcbiAgICAgICAgfVxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH07XG5cbiAgICBjb25zdCBxdWlja0FkZFRhc2sgPSAoKSA9PiB7XG4gICAgICAgIG1vZGFsLnF1aWNrQWRkVGFzay5jbGFzc0xpc3QudG9nZ2xlKCdvbicpO1xuICAgICAgICBpZihtb2RhbC5xdWlja0FkZFRhc2suY2xhc3NMaXN0LmNvbnRhaW5zKCdvbicpKSB7XG4gICAgICAgICAgICBtb2RhbC5xdWlja0FkZFRhc2tJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgdHJhcEZvY3VzKG1vZGFsLnF1aWNrQWRkQ29udGFpbmVyLCBoTmF2LnBsdXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVtb3ZlVHJhcEZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgbm90aWZpY2F0aW9uID0gKCkgPT4ge1xuICAgICAgICBtb2RhbC5ub3RpZmljYXRpb24uY2xhc3NMaXN0LnRvZ2dsZSgnb24nKTtcbiAgICAgICAgaWYobW9kYWwubm90aWZpY2F0aW9uLmNsYXNzTGlzdC5jb250YWlucygnb24nKSkge1xuICAgICAgICAgICAgdHJhcEZvY3VzKG1vZGFsLm5vdGlmQ29udGFpbmVyLCBoTmF2Lm5vdGlmaWNhdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZW1vdmVUcmFwRm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBwcm9qZWN0cyA9ICgpID0+IHtcbiAgICAgICAgdk5hdi5wcm9qZWN0TGlzdENvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7XG4gICAgICAgIHZOYXYucHJvamVjdENoZXZyb24uY2xhc3NMaXN0LnRvZ2dsZSgncm90YXRlJyk7XG4gICAgfTtcblxuICAgIGNvbnN0IGFkZFByb2plY3QgPSAoZSkgPT4ge1xuICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICBtb2RhbC5wcm9qZWN0Q3JlYXRvci5jbGFzc0xpc3QudG9nZ2xlKCdvbicpO1xuICAgICAgICBcbiAgICAgICAgaWYobW9kYWwucHJvamVjdENyZWF0b3IuY2xhc3NMaXN0LmNvbnRhaW5zKCdvbicpKXtcbiAgICAgICAgICAgIG1vZGFsLm5ld1Byb2plY3ROYW1lLnZhbHVlID0gJyc7XG4gICAgICAgICAgICB0cmFwRm9jdXMobW9kYWwucHJvamVjdENyZWF0b3IsIHZOYXYuYWRkUHJvamVjdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2TmF2LnByb2plY3RzLmZvY3VzKCk7XG4gICAgICAgICAgICByZW1vdmVUcmFwRm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBsYWJlbHMgPSAoKSA9PiB7XG4gICAgICAgIHZOYXYubGFiZWxMaXN0Q29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3cnKTtcbiAgICAgICAgdk5hdi5sYWJlbENoZXZyb24uY2xhc3NMaXN0LnRvZ2dsZSgncm90YXRlJyk7XG4gICAgfTtcblxuICAgIGNvbnN0IGFkZExhYmVsID0gKGUpID0+IHtcbiAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgbW9kYWwubGFiZWxDcmVhdG9yLmNsYXNzTGlzdC50b2dnbGUoJ29uJyk7XG5cbiAgICAgICAgaWYobW9kYWwubGFiZWxDcmVhdG9yLmNsYXNzTGlzdC5jb250YWlucygnb24nKSl7XG4gICAgICAgICAgICBtb2RhbC5hZGRMYWJlbElucHV0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICB0cmFwRm9jdXMobW9kYWwubGFiZWxDcmVhdG9yLCB2TmF2LmFkZExhYmVsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZOYXYubGFiZWxzLmZvY3VzKCk7XG4gICAgICAgICAgICByZW1vdmVUcmFwRm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCB0YXNrQ3JlYXRvciA9ICgpID0+IHtcbiAgICAgICAgY29udGFpbmVyLmRpdi5jbGFzc0xpc3QudG9nZ2xlKCdhZGQtdHJpZ2dlcmVkJyk7XG4gICAgICAgIGlmKGNvbnRhaW5lci5kaXYuY2xhc3NMaXN0LmNvbnRhaW5zKCdhZGQtdHJpZ2dlcmVkJykpe1xuICAgICAgICAgICAgdGFzay5pbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IF9pdGVtTWFuYWdlciA9IChuZXdDbGFzcykgPT4ge1xuICAgICAgICB0YXNrLmFkZERpdi5jbGFzc0xpc3QudG9nZ2xlKG5ld0NsYXNzKTtcbiAgICAgICAgaWYodGFzay5hZGREaXYuY2xhc3NMaXN0LmNvbnRhaW5zKCdhZGQtdGFzay1kaXYnKSBcbiAgICAgICAgJiYgdGFzay5hZGREaXYuY2xhc3NMaXN0LmNvbnRhaW5zKG5ld0NsYXNzKSl7XG4gICAgICAgICAgICB0YXNrLmFkZERpdi5jbGFzc05hbWUgPSBgYWRkLXRhc2stZGl2ICR7bmV3Q2xhc3N9YDtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCB0YXNrU2NoZWR1bGVyID0gKCkgPT4gX2l0ZW1NYW5hZ2VyKCdkaXNwbGF5LXNjaGVkdWxlcicpO1xuICAgIGNvbnN0IHRhc2tQcm9qZWN0U2VsZWN0b3IgPSAoKSA9PiBfaXRlbU1hbmFnZXIoJ2Rpc3BsYXktY2FycmllcicpO1xuICAgIGNvbnN0IHRhc2tMYWJlbGVyID0gKCkgPT4gX2l0ZW1NYW5hZ2VyKCdkaXNwbGF5LWxhYmVsZXInKTtcbiAgICBjb25zdCB0YXNrUHJpb3JpdHlTZXR0ZXIgPSAoKSA9PiBfaXRlbU1hbmFnZXIoJ2Rpc3BsYXktcHJpby1zZXR0ZXInKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIG1lbnUsXG4gICAgICAgIHF1aWNrQWRkVGFzayxcbiAgICAgICAgbm90aWZpY2F0aW9uLFxuICAgICAgICBwcm9qZWN0cywgYWRkUHJvamVjdCxcbiAgICAgICAgbGFiZWxzLCBhZGRMYWJlbCxcbiAgICAgICAgdGFza0NyZWF0b3IsIHRhc2tTY2hlZHVsZXIsIHRhc2tQcm9qZWN0U2VsZWN0b3IsIHRhc2tMYWJlbGVyLCB0YXNrUHJpb3JpdHlTZXR0ZXJcbiAgICB9O1xufSkoKTtcblxuY29uc3QgY2xpY2tlciA9IChlKSA9PiB7XG4gICAgaWYoZS5rZXkgPT09ICdFbnRlcicgJiYgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpYy1kaXYnKSl7XG4gICAgICAgIGUudGFyZ2V0LmNsaWNrKCk7XG4gICAgfVxufTtcblxuY29uc3Qgdmlld01hbmFnZXIgPSAoZSkgPT4ge1xuICAgIGlmICh2TmF2Lm5hdi5jbGFzc0xpc3QuY29udGFpbnMoJ3Nob3ctbmF2JykgJiYgKHdpbmRvdy5pbm5lcldpZHRoIDw9IDc1MCkpe1xuICAgICAgICBpZighdk5hdi5uYXYuY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpIHsgXG4gICAgICAgICAgICB2TmF2Lm5hdi5jbGFzc0xpc3QudG9nZ2xlKCdzaG93LW5hdicpOyBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmKHRhc2suYWRkRGl2LmNsYXNzTmFtZSAhPSAnYWRkLXRhc2stZGl2Jyl7XG4gICAgICAgIGlmKCF0YXNrLmFkZERpdi5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KSl7XG4gICAgICAgICAgICB0YXNrLmFkZERpdi5jbGFzc05hbWUgPSAnYWRkLXRhc2stZGl2JztcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmNvbnN0IGRpc3BsYXkgPSAoKCkgPT4ge1xuXG4gICAgY29uc3QgX2dldExhc3RXb3JkID0gKHN0cmluZykgPT4ge1xuICAgICAgICBsZXQgd29yZCA9IHN0cmluZy5zcGxpdChcIiBcIik7XG4gICAgICAgIHJldHVybiB3b3JkW3dvcmQubGVuZ3RoIC0gMV07XG4gICAgfTtcblxuICAgIGNvbnN0IHRvZG9saXN0ID0gKGUpID0+IHtcbiAgICAgICAgY29udGFpbmVyLmhlYWRlci5pbm5lclRleHQgPSBfZ2V0TGFzdFdvcmQoZS50YXJnZXQuaW5uZXJUZXh0KTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZm8tY29tcCAuYWN0aXZlJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXG4gICAgICAgIGlmKHdpbmRvdy5pbm5lcldpZHRoIDw9IDc1MCl7XG4gICAgICAgICAgICBoTmF2Lm1lbnUuY2xpY2soKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBpbnNlcnQgdGhlIGxvZ2ljIGhlcmUsIGxvYWQgdGhlIGxpc3Qgb2Ygc2VsZWN0ZWQgZGlzcGxheVxuICAgIH07XG5cbiAgICBjb25zdCBob21lID0gKCkgPT4ge1xuICAgICAgICBjb250YWluZXIuaGVhZGVyLmlubmVyVGV4dCA9ICdUb2RheSc7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvLWNvbXAgLmFjdGl2ZScpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICB2TmF2LnRvZGF5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0b2RvbGlzdCxcbiAgICAgICAgaG9tZVxuICAgIH07XG59KSgpO1xuXG5jb25zdCBhZGQgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHF1aWNrID0gKCkgPT4ge1xuICAgICAgICBpZighbW9kYWwucXVpY2tBZGRUYXNrSW5wdXQudmFsdWUpe1xuICAgICAgICAgICAgYWxlcnQoJ1Rhc2sgbmFtZSByZXF1aXJlZCEnKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHB1c2gucXVpY2sobW9kYWwucXVpY2tBZGRUYXNrSW5wdXQudmFsdWUpO1xuICAgICAgICB0b2dnbGUucXVpY2tBZGRUYXNrKCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCk9PiBhbGVydCgnQWRkZWQgdG8gSW5ib3ghJyksIDUwMCk7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHF1aWNrXG4gICAgfTtcbn0pKCk7XG5cbmNvbnN0IHZpZXdwb3J0TGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgdk5hdi5uYXYuaGFzQXR0cmlidXRlKCdzdHlsZScpXG4gICAgICAgID8gdk5hdi5uYXYucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpIDogdk5hdi5uYXYuY2xhc3NMaXN0LnJlbW92ZSgnZGlzcGxheS1uYXYnKTtcbn07XG5cbmNvbnN0IGV2ZW50ID0gKCgpID0+IHtcbiAgICBoTmF2Lm1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGUubWVudSk7XG5cbiAgICBoTmF2LnBsdXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGUucXVpY2tBZGRUYXNrKTtcbiAgICBtb2RhbC5xdWlja0FkZFRhc2tDYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAgdG9nZ2xlLnF1aWNrQWRkVGFzayk7XG5cbiAgICBoTmF2Lm5vdGlmaWNhdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZS5ub3RpZmljYXRpb24pO1xuICAgIG1vZGFsLm5vdGlmUmVhZEFsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZS5ub3RpZmljYXRpb24pO1xuXG4gICAgdk5hdi5wcm9qZWN0cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZS5wcm9qZWN0cyk7XG4gICAgdk5hdi5wcm9qZWN0cy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGNsaWNrZXIpO1xuICAgIHZOYXYuYWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZS5hZGRQcm9qZWN0KTtcbiAgICBtb2RhbC5jYW5jZWxQcm9qZWN0Q3JlYXRvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZS5hZGRQcm9qZWN0KTtcblxuICAgIHZOYXYubGFiZWxzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlLmxhYmVscyk7XG4gICAgdk5hdi5sYWJlbHMuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBjbGlja2VyKTtcbiAgICB2TmF2LmFkZExhYmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlLmFkZExhYmVsKTtcbiAgICBtb2RhbC5jYW5jZWxMYWJlbENyZWF0b3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGUuYWRkTGFiZWwpO1xuXG4gICAgY29udGFpbmVyLmFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGUudGFza0NyZWF0b3IpO1xuICAgIHRhc2suY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlLnRhc2tDcmVhdG9yKTtcbiAgICB0YXNrLnNjaGVkdWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlLnRhc2tTY2hlZHVsZXIpO1xuICAgIHRhc2sucHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZS50YXNrUHJvamVjdFNlbGVjdG9yKTtcbiAgICB0YXNrLmxhYmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlLnRhc2tMYWJlbGVyKTtcbiAgICB0YXNrLnByaW9yaXR5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlLnRhc2tQcmlvcml0eVNldHRlcik7XG5cbiAgICB2TmF2LmluYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheS50b2RvbGlzdCk7XG4gICAgdk5hdi50b2RheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXkudG9kb2xpc3QpO1xuICAgIGhOYXYuaG9tZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXkuaG9tZSk7XG4gICAgdk5hdi51cGNvbWluZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXkudG9kb2xpc3QpO1xuXG4gICAgbW9kYWwucXVpY2tBZGRUYXNrU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkLnF1aWNrKTtcblxuICAgIC8vZml4IGRhdGEuanMgZmlyc3QgYmVmb3JlIGFkZGluZyBldmVudHMgaW4gbGFiZWwsIHByb2plY3QsIGFuZCB0b2RvIGVkaXRvclxuXG4gICAgd2luZG93Lm9uY2xpY2sgPSB2aWV3TWFuYWdlcjtcbiAgICB3aW5kb3cub25yZXNpemUgPSB2aWV3cG9ydExpc3RlbmVyO1xuXG4gICAgLy9lc2Mga2V5dXAgdGhhdCBjbG9zZXMgbW9kYWxzIHdpbGwgYmUgY29vbFxuXG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBldmVudDsiLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGhOYXYgPSAoKCkgPT4ge1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2QnRuTWVudScpO1xuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2QnRuSG9tZScpO1xuICAgIGNvbnN0IGZvcm1TZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybVNlYXJjaCcpO1xuICAgIGNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYXZJbnB1dFNlYXJjaCcpO1xuICAgIGNvbnN0IHBsdXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2QnRuUXVpY2tBZGQnKTtcbiAgICBjb25zdCBub3RpZmljYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2QnRuTm90aWZpY2F0aW9uJyk7XG4gICAgY29uc3Qgbm90aWZDb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYXZCdG5Ob3RpZmljYXRpb25Db3VudCcpO1xuXG4gICAgcmV0dXJuIHsgXG4gICAgICAgIG1lbnUsIGhvbWUsIFxuICAgICAgICBmb3JtU2VhcmNoLCBzZWFyY2gsIFxuICAgICAgICBwbHVzLCBub3RpZmljYXRpb24sIG5vdGlmQ291bnQgfTtcbn0pKCk7XG5cbmNvbnN0IHZOYXYgPSAoKCkgPT4ge1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYXZJbmZvQ29tcCcpO1xuICAgIGNvbnN0IGluYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NibmF2SW5ib3hCdG4nKTtcbiAgICBjb25zdCBpbmJveENvdW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2JuYXZJbmJveEJ0biA+IHNhbXAnKTtcbiAgICBjb25zdCB0b2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzYm5hdlRvZGF5QnRuJyk7XG4gICAgY29uc3QgdG9kYXlDb3VudGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NibmF2VG9kYXlCdG4gPiBzYW1wJyk7XG4gICAgY29uc3QgdXBjb21pbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2JuYXZVcGNvbUJ0bicpO1xuICAgIGNvbnN0IHVwY29taW5nQ291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzYm5hdlVwY29tQnRuID4gc2FtcCcpO1xuICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NibmF2UHJvamVjdHNEaXYnKTtcbiAgICBjb25zdCBwcm9qZWN0Q2hldnJvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzYm5hdlByb2plY3RzRGl2ID4gc3BhbicpO1xuICAgIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2JuYXZQcm9qZWN0QWRkQnRuJyk7XG4gICAgY29uc3QgcHJvamVjdExpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdExpc3RDb250YWluZXInKTtcbiAgICBjb25zdCBsYWJlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2JuYXZMYWJlbHNEaXYnKTtcbiAgICBjb25zdCBsYWJlbENoZXZyb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2JuYXZMYWJlbHNEaXYgPiBzcGFuJyk7XG4gICAgY29uc3QgYWRkTGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2JuYXZMYWJlbEFkZEJ0bicpO1xuICAgIGNvbnN0IGxhYmVsTGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsYWJlbExpc3RDb250YWluZXInKTtcblxuICAgIHJldHVybiB7IFxuICAgICAgICBuYXYsXG4gICAgICAgIGluYm94LCBpbmJveENvdW50ZXIsXG4gICAgICAgIHRvZGF5LCB0b2RheUNvdW50ZXIsXG4gICAgICAgIHVwY29taW5nLCB1cGNvbWluZ0NvdW50ZXIsXG4gICAgICAgIHByb2plY3RzLCBwcm9qZWN0Q2hldnJvbiwgYWRkUHJvamVjdCwgcHJvamVjdExpc3RDb250YWluZXIsXG4gICAgICAgIGxhYmVscywgbGFiZWxDaGV2cm9uLCBhZGRMYWJlbCwgbGFiZWxMaXN0Q29udGFpbmVyXG4gICAgfTtcbn0pKCk7XG5cbmNvbnN0IGNvbnRhaW5lciA9ICgoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhaW5lcicpO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoZWFkZXInKTtcbiAgICBjb25zdCBhZGRUYXNrQnRuRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFRhc2tCdG5EaXYnKTtcbiAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFRhc2tCdG4nKTtcbiAgICBjb25zdCBlbXB0eVN0YXRlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VtcHR5U3RhdGVEaXYnKTtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9vdGVyJyk7XG4gICAgY29uc3QgaGVscCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoZWxwJyk7XG4gICAgY29uc3QgYWRkVGFza0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRUYXNrRGl2Jyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBkaXYsXG4gICAgICAgIGhlYWRlcixcbiAgICAgICAgYWRkVGFza0J0bkRpdiwgYWRkVGFza0J0bixcbiAgICAgICAgZW1wdHlTdGF0ZURpdiwgZm9vdGVyLCBoZWxwLFxuICAgICAgICBhZGRUYXNrRGl2XG4gICAgfTtcbn0pKCk7XG5cbmNvbnN0IHRhc2sgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGFkZERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRUYXNrRGl2Jyk7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkVGFza0lucHV0Jyk7XG4gICAgY29uc3Qgc2NoZWR1bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VsZWN0U2NoZWR1bGVCdG4nKTtcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlbGVjdFByb2plY3RCdG4nKTtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWxlY3RMYWJlbEJ0bicpO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlbGVjdFByaW9yaXR5QnRuJyk7XG4gICAgY29uc3QgYWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFRhc2tNYWluQnRuJyk7XG4gICAgY29uc3QgY2FuY2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFRhc2tDYW5jZWxCdG4nKTtcblxuICAgIGNvbnN0IHNjaGVkVG9kYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2NoZWR1bGVyVG9kYXlCdG4nKTtcbiAgICBjb25zdCBzcGFuVG9kYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2NoZWR1bGVyVG9kYXlTcGFuJyk7XG4gICAgY29uc3Qgc2NoZWRUd20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2NoZWR1bGVyVHdtQnRuJyk7XG4gICAgY29uc3Qgc3BhblR3bSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzY2hlZHVsZXJUd21CdG4nKTtcbiAgICBjb25zdCBzY2hlZE5leHRXZWVrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NjaGVkdWxlck5leHRXZWVrQnRuJyk7XG4gICAgY29uc3Qgc3Bhbk5leHRXZWVrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NjaGVkdWxlck5leHRXZWVrU3BhbicpO1xuICAgIGNvbnN0IHNjaGVkQ3VzdG9tSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2NoZWR1bGVyQ3VzdG9tSW5wdXQnKTtcbiAgICBjb25zdCBzY2hlZEN1c3RvbUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzY2hlZHVsZXJDdXN0b21CdG4nKTtcbiAgICBjb25zdCBzY2hlZE5vRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzY2hlZHVsZXJOb0RhdGVCdG4nKTtcbiAgICBjb25zdCBwcm9qZWN0U2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdFNlbGVjdG9yJyk7XG4gICAgY29uc3QgcHJvamVjdEluYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3REZWZhdWx0SW5ib3gnKTtcbiAgICBjb25zdCBsYWJlbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsYWJlbENvbnRhaW5lcicpO1xuICAgIGNvbnN0IHByaW9yaXR5T25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5T25lJyk7XG4gICAgY29uc3QgcHJpb3JpdHlUd28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHlUd28nKTtcbiAgICBjb25zdCBwcmlvcml0eVRocmVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5VGhyZWUnKTtcbiAgICBjb25zdCBwcmlvcml0eUZvdXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHlEZWZhdWx0Jyk7XG5cblxuICAgIHJldHVybiB7XG4gICAgICAgIGlucHV0LFxuICAgICAgICBzY2hlZHVsZSwgcHJvamVjdCxcbiAgICAgICAgbGFiZWwsIHByaW9yaXR5LFxuICAgICAgICBhZGREaXYsIGFkZCwgY2FuY2VsLFxuICAgICAgICBzY2hlZFRvZGF5LCBzcGFuVG9kYXksXG4gICAgICAgIHNjaGVkVHdtLCBzcGFuVHdtLFxuICAgICAgICBzY2hlZE5leHRXZWVrLCBzcGFuTmV4dFdlZWssXG4gICAgICAgIHNjaGVkQ3VzdG9tSW5wdXQsIHNjaGVkQ3VzdG9tQnRuLFxuICAgICAgICBzY2hlZE5vRGF0ZSxcbiAgICAgICAgcHJvamVjdFNlbGVjdG9yLCBwcm9qZWN0SW5ib3gsXG4gICAgICAgIGxhYmVsQ29udGFpbmVyLFxuICAgICAgICBwcmlvcml0eU9uZSwgcHJpb3JpdHlUd28sIHByaW9yaXR5VGhyZWUsIHByaW9yaXR5Rm91clxuICAgIH1cbn0pKCk7XG5cbmNvbnN0IG1vZGFsID0gKCgpID0+IHtcbiAgICBjb25zdCBxdWlja0FkZFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcXVpY2tBZGRUb2RvJyk7XG4gICAgY29uc3QgcXVpY2tBZGRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcXVpY2tBZGRDb250YWluZXInKTtcbiAgICBjb25zdCBxdWlja0FkZFRhc2tJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNxdWlja0FkZElucHV0Jyk7XG4gICAgY29uc3QgcXVpY2tBZGRUYXNrU3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3F1aWNrQWRkU3VibWl0Jyk7XG4gICAgY29uc3QgcXVpY2tBZGRUYXNrQ2FuY2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3F1aWNrQWRkQ2FuY2VsJyk7XG4gICAgY29uc3Qgbm90aWZpY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25vdGlmaWNhdGlvbnMnKTtcbiAgICBjb25zdCBub3RpZkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNub3RpZkNvbnRhaW5lcicpO1xuICAgIGNvbnN0IG5vdGlmUmVhZEFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNub3RpZlJlYWRBbGxCdG4nKTtcbiAgICBjb25zdCBub3RpZk91dHB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ25vdGlmT3V0cHV0Jyk7XG4gICAgY29uc3QgcHJvamVjdENyZWF0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdENyZWF0b3InKTtcbiAgICBjb25zdCBuZXdQcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXdQcm9qZWN0TmFtZScpO1xuICAgIGNvbnN0IHByb2plY3RBZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdEFkZEJ1dHRvbicpO1xuICAgIGNvbnN0IGNhbmNlbFByb2plY3RDcmVhdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RDYW5jZWxCdXR0b24nKTtcbiAgICBjb25zdCBwcm9qZWN0RWRpdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RFZGl0b3InKTtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0TmFtZScpO1xuICAgIGNvbnN0IHVwZGF0ZWRQcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1cGRhdGVkUHJvamVjdE5hbWUnKTtcbiAgICBjb25zdCB1cGRhdGVQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VwZGF0ZVByb2plY3RCdG4nKTtcbiAgICBjb25zdCBjYW5jZWxQcm9qZWN0RWRpdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbmNlbFByb2plY3RCdG4nKTtcbiAgICBjb25zdCBkZWxldGVQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RlbGV0ZVByb2plY3RCdG4nKTtcbiAgICBjb25zdCBsYWJlbENyZWF0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGFiZWxDcmVhdG9yJyk7XG4gICAgY29uc3QgYWRkTGFiZWxJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRMYWJlbElucHV0Jyk7XG4gICAgY29uc3QgYWRkTmV3TGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkTmV3TGFiZWxCdG4nKTtcbiAgICBjb25zdCBjYW5jZWxMYWJlbENyZWF0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FuY2VsQWRkTGFiZWxCdG4nKTtcbiAgICBjb25zdCBsYWJlbEVkaXRvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsYWJlbEVkaXRvcicpO1xuICAgIGNvbnN0IGVkaXRMYWJlbE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdExhYmVsTmFtZScpO1xuICAgIGNvbnN0IHVwZGF0ZWRMYWJlbE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXBkYXRlZExhYmVsTmFtZScpO1xuICAgIGNvbnN0IHVwZGF0ZUxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VwZGF0ZUxhYmVsQnRuJyk7XG4gICAgY29uc3QgY2FuY2VsTGFiZWxFZGl0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FuY2VsVXBkYXRlQnRuJyk7XG4gICAgY29uc3QgZGVsZXRlTGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVsZXRlTGFiZWxCdG4nKTtcbiAgICBjb25zdCB0YXNrRWRpdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tFZGl0b3InKTtcbiAgICBjb25zdCB1cGRhdGVkVGFza05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXBkYXRlZFRhc2tOYW1lJyk7XG4gICAgY29uc3QgdXBkYXRlZFRhc2tOb3RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VwZGF0ZWRUYXNrTm90ZScpO1xuICAgIGNvbnN0IHVwZGF0ZWRUYXNrU2NoZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXBkYXRlZFRhc2tTY2hlZHVsZScpO1xuICAgIGNvbnN0IHVwZGF0ZWRUYXNrUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1cGRhdGVkVGFza1Byb2plY3QnKTtcbiAgICBjb25zdCB1cGRhdGVkVGFza0xhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VwZGF0ZWRUYXNrTGFiZWwnKTtcbiAgICBjb25zdCB1cGRhdGVkVGFza1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VwZGF0ZWRUYXNrUHJpb3JpdHknKTtcbiAgICBjb25zdCB1cGRhdGVUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VwZGF0ZVRvZG8nKTtcbiAgICBjb25zdCBjYW5jZWxUYXNrRWRpdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbmNlbFVwZGF0ZVRvZG8nKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHF1aWNrQWRkVGFzaywgcXVpY2tBZGRDb250YWluZXIsIHF1aWNrQWRkVGFza0lucHV0LCBxdWlja0FkZFRhc2tTdWJtaXQsIHF1aWNrQWRkVGFza0NhbmNlbCxcbiAgICAgICAgbm90aWZpY2F0aW9uLCBub3RpZkNvbnRhaW5lciwgbm90aWZSZWFkQWxsLCBub3RpZk91dHB1dCxcbiAgICAgICAgcHJvamVjdENyZWF0b3IsIG5ld1Byb2plY3ROYW1lLCBwcm9qZWN0QWRkLCBjYW5jZWxQcm9qZWN0Q3JlYXRvcixcbiAgICAgICAgcHJvamVjdEVkaXRvciwgcHJvamVjdE5hbWUsIHVwZGF0ZWRQcm9qZWN0TmFtZSwgdXBkYXRlUHJvamVjdCxcbiAgICAgICAgICAgIGNhbmNlbFByb2plY3RFZGl0b3IsIGRlbGV0ZVByb2plY3QsXG4gICAgICAgIGxhYmVsQ3JlYXRvciwgYWRkTGFiZWxJbnB1dCwgYWRkTmV3TGFiZWwsIGNhbmNlbExhYmVsQ3JlYXRvcixcbiAgICAgICAgbGFiZWxFZGl0b3IsIGVkaXRMYWJlbE5hbWUsIHVwZGF0ZWRMYWJlbE5hbWUsIHVwZGF0ZUxhYmVsLFxuICAgICAgICAgICAgY2FuY2VsTGFiZWxFZGl0b3IsIGRlbGV0ZUxhYmVsLFxuICAgICAgICB0YXNrRWRpdG9yLCB1cGRhdGVkVGFza05hbWUsIHVwZGF0ZWRUYXNrTm90ZSwgdXBkYXRlZFRhc2tTY2hlZCwgdXBkYXRlZFRhc2tQcm9qZWN0LFxuICAgICAgICAgICAgdXBkYXRlZFRhc2tMYWJlbCwgdXBkYXRlZFRhc2tQcmlvcml0eSwgdXBkYXRlVGFzaywgY2FuY2VsVGFza0VkaXRvclxuICAgIH1cbn0pKCk7XG5cbmV4cG9ydCB7IFxuICAgIGhOYXYsXG4gICAgdk5hdixcbiAgICBjb250YWluZXIsXG4gICAgdGFzayxcbiAgICBtb2RhbFxufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGNyZWF0ZUFwcCBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQgdGVzdCBmcm9tICcuL2RhdGEuanMnO1xuaW1wb3J0IHsgaE5hdiwgdk5hdiwgY29udGFpbmVyLCB0YXNrLCBtb2RhbCB9IGZyb20gJy4vc2VsZWN0b3IuanMnO1xuaW1wb3J0IGV2ZW50IGZyb20gJy4vZXZlbnQuanMnO1xuXG4ndXNlIHN0cmljdCc7XG5cbi8vIHZOYXYuaW5ib3gub25jbGljayA9IGZ1bmN0aW9uKCl7XG4vLyAgICAgY29uc29sZS5sb2coMSlcbi8vIH1cblxuLy8gaE5hdi5mb3JtU2VhcmNoLm9uc3VibWl0ID0gZnVuY3Rpb24oZSl7XG4vLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgIGhOYXYuc2VhcmNoLmJsdXIoKTtcbi8vICAgICBjb25zb2xlLmxvZygyKTtcbi8vIH1cbiJdLCJzb3VyY2VSb290IjoiIn0=