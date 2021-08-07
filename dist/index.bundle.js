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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --light92: hsl(0, 0%, 92%);\n    --light88: hsl(0, 0%, 88%);\n    --dark: hsl(0, 0%, 12%);\n    --malibu: hsl(192, 93%, 72%);\n    --auburn: hsl(0, 75%, 65%);\n    --mariner: hsl(216, 75%, 51%);\n    --laurel: hsl(120, 100%, 25%);\n    --purple: hsl(264, 61%, 47%);\n    --sun: hsl(34, 93%, 48%);\n    --transparent1: rgba(0,0,0,.1);\n    --transparent2: rgba(0,0,0,.2);\n\n    --background: var(--light92);\n    --foreground: var(--malibu);\n}\n\n*, *:before, *:after {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;  \n}\n\nhtml,\nbody {\n    overflow-x: hidden;\n}\n\nbody {\n    min-height: 100vh;\n    background-color: var(--background);\n    font-family:sans-serif;\n    color: var(--dark);\n}\n\nbutton,\n.search-input {\n    outline: none;\n    border: none;\n    border-radius: 3px;\n    font-family:sans-serif;\n}\n\nbutton {\n    padding: .125rem;\n    color: var(--dark);\n    background-color: transparent;\n}\n\nbutton,\n.ic-div {\n    cursor: pointer;\n}\n\nspan.mid {\n    vertical-align: middle;\n}\n\nspan,\nh1 {\n    user-select: none;\n}\n\n.app {\n    display: flex;\n    flex-direction: column;\n    width: 100vw;\n    height: 100vh;\n}\n\n.nav-comp ,\n.nc-left,\n.search-div,\n.nc-right {\n    display: inline-flex;\n}\n\n.nav-comp {\n    justify-content: space-between;\n    width: 100%;\n    padding: .5rem 3rem .5rem 3rem;\n    background-color: var(--foreground);\n}\n\n.nc-left > * {\n    margin: 0 .25rem 0 0;\n}\n\n.nc-right > * {\n    margin: 0 0 0 .25rem;\n}\n\n.nc-right button:first-child {\n    margin: 0;\n}\n\n.search-div {\n    height: 100%;\n    background-color: var(--foreground);\n}\n\n.search-div > span:first-child {\n    align-self: center;\n    cursor: text;\n    margin: .1rem;\n    font-size: 1.6rem;\n    z-index: 2;\n}\n\n.search-div button {\n    margin: .2rem 0 .2rem -1.5rem;\n    height: 20px;\n    width: 20px;\n    align-self: center;\n    display: none;\n}\n\n.search-div button:hover,\n.search-div button:focus-visible {\n    color: var(--auburn);\n}\n\n.search-input {\n    padding: 0 1.6rem 0 1.8rem;\n    margin-left: -1.9rem;\n    background-color: var(--transparent1);\n}\n\n.search-input::-webkit-search-cancel-button {\n    -webkit-appearance: none;\n}\n\n.search-input:not(:placeholder-shown) + button {\n    display: block;\n}\n\n.search-div:focus-within .search-input,\n.search-div:hover .search-input,\n.search-input:not(:placeholder-shown){\n    background-color: var(--light92);\n}\n\n.search-div button span {\n    font-size: 1rem;\n}\n\n.app-body {\n    display: flex;\n    flex: 1;\n    max-height: calc(100% - 46.59px);\n    overflow-y: hidden;\n}\n\n.wrapper {\n    height: 100%;\n    width: 100%;\n    display: flex;\n}\n\n.info-comp {\n    display: flex;\n    flex-direction: column;\n    padding: 2rem .25rem 0 2.8rem;\n    background-color: var(--light88);\n    overflow-y: auto;\n}\n\n.info-comp > * {\n    text-align: left;\n    font-size: .9rem;\n    width: 294px;\n    padding: 5px;\n}\n\n.info-comp > * > samp {\n    float: right;\n    opacity: .5;\n    margin: 4px 1rem 4px 0;\n}\n\n.ic-div {\n    margin: .25rem 0 0 0;\n}\n\n.info-comp > div:first-of-type{\n    margin: 1rem 0 0 0;\n}\n\n.ic-span {\n    margin: 0 .25rem 0 0;\n}\n\n.info-comp > button:first-child span {\n    color: var(--mariner);\n}\n\n.info-comp > button:nth-child(2) span {\n    color: var(--laurel);\n}\n\n.info-comp > button:nth-child(3) span {\n    color: var(--purple);\n}\n\n.info-comp .active {\n    background-color: var(--malibu);\n}\n\n.opa {\n    opacity: .5;\n}\n\n.ic-add-btn {\n    float: right;\n    margin: 0px .5rem 0 0;\n    padding: 0;\n    display: none;\n}\n\n.ic-add-btn:hover + strong,\n.ic-add-btn:focus-visible + strong {\n    text-decoration: underline;\n    text-underline-offset: 30%;\n}\n\n.info-comp:focus-within .ic-add-btn,\n.info-comp:hover .ic-add-btn{\n    display: inherit;\n}\n\n.ic-div > div {\n    display: none;\n}\n\n.ic-div > div.show {\n    display: flex;\n    flex-direction: column;\n}\n\n.ic-project > span.rotate,\n.ic-label > span.rotate {\n    transform: rotate(90deg);\n}\n\n\n.show {\n    margin: .75rem 0 0 0;\n}\n\n.show > div {\n    text-align: left;\n    display: flex;\n    padding: .5rem .5rem .5rem .5rem;\n    height: 34px;\n    font-size: .9rem;\n    align-items: center;\n    border-radius: 3px;\n}\n\nspan.unique {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    align-self: center;\n    margin-right: .2rem;\n}\n\n.show button {\n    padding: 0;\n    visibility: hidden;\n}\n\n.show > div:hover,\n.show > div:focus-visible {\n    background-color: var(--transparent2);\n}\n\n.show > div:hover button,\n.show > div:focus-visible button,\n.show > div:focus-within button{\n    visibility: visible;\n    margin-left: auto;\n}\n\n.show button:hover,\n.show button:focus-visible {\n    background-color: transparent!important;\n}\n\n.bullet {\n    min-width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    margin: 0 .7rem 0 .5rem;\n    background-color: var(--transparent2);\n}\n\n.tag {\n    transform: scale(.8);\n    margin: 0 .2rem 0 .2rem;\n    color: var(--transparent2);\n}\n\n.container {\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    overflow-y: auto;\n    padding: 0 2rem 0 2rem;\n\n}\n\n.container > * {\n    max-width: 800px;\n    width: 100%;\n}\n\n.container > footer {\n    margin-top: auto;\n}\n\n.container > header {\n    padding: 2rem 0 1rem 0;\n    position: sticky;\n    top: 0;\n    background-color: var(--light92);\n    z-index: 3;\n}\n\nh1 {\n    font-size: 1.3rem;\n}\n\n.todo {\n    display: flex;\n    padding: 2px 0;\n    margin: .5rem 0 .5rem 0;\n    justify-content: flex-start;\n    flex-direction: row;\n    border-bottom: 1px solid var(--transparent1);\n}\n\n.todo,\n.todo * {\n    cursor: pointer;\n}\n\n.checkbox-btn { \n    height: 18px;\n    max-width: 18px;\n    width: 100%;\n    margin: .27rem .7rem 0 0;\n    z-index: 2;\n    position: relative;\n}\n\n.checkbox-btn.prio1 {\n    border: 2px solid var(--auburn);\n}\n\n.checkbox-btn.prio2 {\n    border: 2px solid var(--sun);\n}\n\n.checkbox-btn.prio3 {\n    border: 2px solid var(--mariner);\n}\n\n.checkbox-btn.prio4 {\n    border: 2px solid var(--transparent2);\n}\n\n.checkbox-btn:hover,\n.checkbox-btn:focus-visible {\n    border-color: transparent;\n    background-color: var(--transparent1);\n}\n\n.checkbox-btn + span {\n    padding: 0;\n    line-height: 1rem;\n    font-size: 2rem;\n    position: relative;\n    color: var(--transparent2);\n    visibility: hidden;\n    float: right;\n    margin: -.9rem 0 0 -1rem;    \n}\n\n.checkbox-btn:hover + span,\n.checkbox-btn:focus-visible + span {\n    visibility: visible;\n}\n\n.checkbox-btn:active + span{\n    color: var(--laurel);\n}\n\n.todo-text {\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n}\n\n.todo-text > label {\n    line-height: 1.4rem;\n}\n\n.todo-text-note {\n    text-indent: 1rem;\n    font-size: .9rem;\n    margin: 0 0 .25rem 0;\n}\n\n.todo-text-note,\n.todo-text-note > span,\n.todo-text small {\n    color: gray;\n}\n\n.todo-text-note > span,\nem,\nem > span {\n    font-size: .9rem!important;\n}\n\n.todo-text small:hover,\n.todo-text small:focus-visible {\n    text-decoration: underline;\n}\n\nem {\n    width: 100%;\n}\n\n.sched-due {\n    color: var(--auburn);\n}\n\n.sched-today {\n    color: var(--laurel);\n}\n\n.sched-upcom {\n    color: var(--purple);\n}\n\n.todo-tools-container {\n    display: flex;\n    justify-content: flex-end;\n    align-items: flex-end;\n    margin: -20px 0 0 0;\n    visibility: hidden;\n}\n\n.todo-tools-container * {\n    color: gray;\n}\n\n.tool-span {\n    font-size: 1.2rem;\n}\n\n.todo:hover .todo-tools-container,\n.todo:focus-within .todo-tools-container {\n    visibility: visible;\n}\n\nbutton:hover,\nbutton:focus-visible {\n    background-color: var(--transparent2);\n}\n\nbutton:focus-visible {\n    outline: auto;\n}\n\n.add-task-btn {\n    text-align: left;\n    color: gray;\n}\n\n.add-task-btn * {\n    padding: .1rem;\n}\n\n.add-task-btn span {\n    border-radius: 50%;\n    padding: 0;\n    color: var(--auburn);\n}\n\n.add-task-btn:hover,\n.add-task-btn:focus-visible,\n.add-task-btn span {\n    background-color: transparent;\n}\n\n.add-task-btn:hover span,\n.add-task-btn:focus-visible span {\n    color: var(--mariner);\n}\n\n.empty-state-div {\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    justify-content: center;\n    align-items: center;\n}\n\n.empty-state-div img {\n    max-width: 180px;\n    \n    height: auto;\n}\n\n.empty-state-div h4 {\n    font-weight: normal;\n    color: gray;\n}\n\n.empty-state-div *:nth-child(n+2) {\n    margin: .25rem 0 0 0;\n}\n\n.empty-state-div *:nth-child(n+2),\n.container footer p {\n    text-align: center;\n}\n\n.empty-state-div p {\n    font-size: .9rem;\n    color: darkgray;\n}\n\n.container footer {\n    color: var(--auburn);\n    font-size: .9rem!important;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: .25rem 0 .75rem 0;\n}\n\n.container footer span {\n    font-size: 1.25rem!important;\n}\n\n.container footer p {\n    text-decoration: underline;\n    cursor: pointer;\n}\n\n.container:not(.empty) .empty-state-div,\n.container:not(.empty) footer {\n    display: none;\n}\n\n.add-task-div {\n    border: 1px solid var(--transparent2);\n    border-radius: 3px;\n    padding: 0 .5rem .5rem .5rem;\n    height: 68.48px;\n    margin-top: 1rem;\n}\n\n.add-task-div > * {\n    margin-top: .5rem;\n}\n\n.add-task-div input,\n.quick-add-todo input {\n    width: 100%;\n    outline: none;\n    border: none;\n    font-size: .9rem;\n    background-color: var(--light92);\n}\n\n.add-task-btns-container {\n    display: flex;\n    justify-content: space-between;\n}\n\n.add-task-btns-container div > button {\n    border: 1px solid var(--transparent2);\n    padding: .25rem;\n}\n\n.add-task-btns-container button > span {\n    font-size: .9rem!important;\n}\n\n.add-task-btns-container > button:nth-child(2) span {\n    color: var(--mariner);\n}\n\n.scheduler,\n.carrier {\n    max-width: 210px;\n    width: 100%;    \n}\n\n.scheduler,\n.carrier,\n.labeler,\n.prio-setter {\n    background-color: var(--light92);\n    border-radius: 3px;\n    z-index: 2;\n    position: relative;\n    margin: 0 0 0 0;\n    box-shadow: 0 1px 8px 0 rgb(0 0 0 / 8%),\n        0 0 1px 0 rgb(0 0 0 / 30%);\n    display: none;\n}\n\n.scheduler > *,\n.carrier > * {\n    width: 100%;\n    text-align: left;\n    padding: .5rem .5rem .5rem .5rem;\n}\n\n.sched {\n    display: flex;\n    justify-content: space-between;\n}\n\n.sched span:nth-child(2) {\n    text-align: right;\n    color: gray;\n}\n\n.scheduler input[type=\"date\"]::-webkit-calendar-picker-indicator {\n    opacity: .4;\n    cursor: pointer;\n}\n\n.scheduler input[type=\"date\"]::-webkit-calendar-picker-indicator:hover {\n    opacity: 1;\n}\n\n.scheduler .sched-custom {\n    display: flex;\n}\n\n.scheduler .sched-custom button {\n    border: 1px solid var(--transparent1);\n}\n\n.scheduler .sched-custom button > span,\n.carrier span,\n.labeler span,\n.prio-setter span {\n    font-size: .9rem!important;\n}\n\n.prio-setter button:first-child span {\n    color: var(--auburn);\n}\n\n.prio-setter button:nth-child(2) span {\n    color: var(--sun);\n}\n\n.prio-setter button:nth-child(3) span {\n    color: var(--mariner);\n}\n\n.prio-setter button:nth-child(4) span {\n    color: gray;\n}\n\n.carrier {\n    margin: 0 0 0 -.7rem;\n    max-width: 160px;\n    width: 100%;\n}\n\n.carrier button,\n.labeler button,\n.prio-setter button {\n    display: flex;\n    align-items: center;\n}\n\n.carrier u,\n.labeler u,\n.prio-setter u {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    margin: 0 0 0 .25rem;\n}\n\n.labeler,\n.prio-setter {\n    background-color: transparent;\n    border: none;\n    box-shadow: none;\n}\n\n.labeler div,\n.prio-setter div {\n    max-width: 160px;\n    width: 100%; \n    display: flex;\n    flex-direction: column;\n    margin: 0 1.8rem 0 auto;\n    background-color: var(--light92);\n    box-shadow: 0 1px 8px 0 rgb(0 0 0 / 8%),\n        0 0 1px 0 rgb(0 0 0 / 30%);\n    border-radius: 3px;\n}\n\n.prio-setter div {\n    margin: 0 0 0 auto;\n    max-width: 88px;\n}\n\n.prio-setter u {\n    text-decoration: none;\n}\n\n.labeler button,\n.prio-setter button {\n    text-align: left;\n    padding: .5rem;\n}\n\n.scheduler .sched-custom button:hover > span,\n.scheduler .sched-custom button:focus-visible > span {\n    color: var(--laurel);\n}\n\n.add-task-div.display-scheduler .scheduler {\n    display: inherit;\n}\n\n.add-task-div.display-carrier .carrier,\n.add-task-div.display-labeler .labeler,\n.add-task-div.display-prio-setter .prio-setter {\n    display: block;\n}\n\n.add-task-div .selected,\n.add-task-div .active {\n    background-color: var(--transparent1);\n}\n\n.add-task-main-btns-container {\n    padding: .5rem 0 .5rem 0;\n}\n\n.add-task-main-btns-container button {\n    padding: .25rem;\n}\n\n.add-task-main-btns-container button:first-child {\n    background-color: var(--malibu);\n    border: 1px solid var(--transparent2);\n}\n\n.container.add-triggered .add-task-btn-div {\n    display: none;\n}\n\n.container:not(.add-triggered) .add-task-div,\n.container:not(.add-triggered) .add-task-main-btns-container {\n    display: none;\n}\n\n.quick-add-todo,\n.project-creator,\n.label-creator,\n.todo-editor,\n.project-editor,\n.label-editor {\n    display: none;\n    position: absolute;\n    place-items: center;\n    height: 100%;\n    width: 100%;\n    background-color: var(--transparent2);\n    z-index: 999;\n}\n\n.quick-add-todo > *,\n.quick-add-todo input {\n    width: 100%;\n}\n\n.quick-add-todo > div {\n    background-color: var(--light92);\n    max-width: 480px;\n    width: 100%;\n    border-radius: 3px;\n    padding: .5rem .5rem .5rem .5rem;\n}\n\n.quick-add-todo > div > *:not(:first-child) {\n    margin: .5rem 0 0 0;\n}\n\n.quick-add-todo button {\n    padding: .25rem;\n}\n\n.quick-add-todo button:first-child {\n    background-color: var(--mariner);\n}\n\n.quick-add-todo button:hover,\n.quick-add-todo button:focus-visible {\n    color: var(--light92);\n}\n\n.quick-add-todo.on {\n    display: grid;\n}\n\n.notifications {\n    display: none;\n    position: absolute;\n    inset: 0;\n    background-color: transparent;\n    z-index: 999;\n}\n\n.notif-container {\n    display: flex;\n    flex-direction: column;\n    background-color: var(--light92);\n    margin: 40px 0 auto auto;\n    padding: .5rem;\n    max-width: 420px;\n    width: 100%;\n    max-height: 320px;\n    overflow-x: hidden;\n    overflow-y: auto;\n    box-shadow: 0 1px 8px 0 rgb(0 0 0 / 8%),\n        0 0 1px 0 rgb(0 0 0 / 30%);\n    border-radius: 3px;\n}\n\n.notif-container nav {\n    display: flex;\n    align-items: center;\n    padding: 0 0 .25rem 0;\n    border-bottom: 1px solid var(--transparent2);\n}\n\n.notif-container nav > * {\n    font-size: .9rem;\n    cursor: pointer;\n}\n\n.notif-container button:first-of-type{\n    margin: 0 0 0 .5rem;\n}\n\n.nav-btn-notification small {\n    position: absolute; \n    color: var(--auburn);\n    margin-left: -.85rem; \n    background-color: var(--malibu);\n    padding: 0 1px;\n}\n\n.nav-btn-notification:hover small,\n.nav-btn-notification:focus-visible small {\n    background-color: transparent!important;\n    color: var(--light92)!important;\n    font-weight: bold;\n}\n\n.read-all-btn {\n    margin: 0 0 0 auto!important;\n}\n\n.read-all-btn span {\n    font-size: 1.2rem;\n}\n\n.notif-output {\n    margin: 0 .25rem;\n    overflow-y: auto;\n    /* overflow-x: hidden; */\n}\n\n.notif-output > * {\n    margin: .25rem 0 0 0;\n    border-bottom: 1px solid var(--transparent1);\n    padding: 0 0 .25rem 0;\n    \n}\n\n.notif {\n    display: flex;\n    flex-direction: column;\n}\n\n.notif > *,\n.notif-extra button span{\n    font-size: .9rem;  \n}\n\n.notif > span {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.notif-extra {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.notif small {\n    color: var(--auburn);\n}\n\n.notifications.on {\n    display: flex;\n\n}\n\n.app.search .add-task-btn-div{\n    display: none;\n}\n\n.project-creator > div,\n.label-creator > div,\n.todo-editor > div,\n.project-editor > div,\n.label-editor > div {\n    background-color: var(--light92);\n    max-width: 420px;\n    width: 100%;\n    border-radius: 3px;\n}\n\n.project-creator > div > *,\n.label-creator > div > *,\n.todo-editor > div > *,\n.project-editor > div > *,\n.label-editor > div > * {\n    padding: .5rem;\n    margin: 0 0 .25rem 0;\n}\n\n.project-creator > div > *:first-child, \n.project-creator > div > *:nth-child(2),\n.label-creator > div > *:first-child, \n.label-creator > div > *:nth-child(2),\n.todo-editor > div > *:first-child, \n.todo-editor > div > *:nth-child(2),\n.project-editor > div > *:first-child,\n.project-editor > div > *:nth-child(2),\n.label-editor > div > *:first-child,\n.label-editor > div > *:nth-child(2) {\n    border-bottom: 1px solid var(--transparent1);\n}\n\n.project-creator > div,\n.project-input,\n.label-creator > div,\n.label-input,\n.todo-editor > div,\n.todo-editor-input,\n.project-editor > div,\n.project-editor-input,\n.label-editor > div,\n.label-editor-input {\n    display: flex;\n    flex-direction: column;\n}\n\n.project-input > *,\n.label-input > *,\n.todo-editor-input > *,\n.project-editor-input > *,\n.label-editor-input > * {\n    margin: 0 0 .25rem 0;\n}\n\n.project-input input,\n.label-input input,\n.todo-editor-input input,\n.todo-editor-input select,\n.project-editor-input input,\n.label-editor-input input {\n    border: none;\n    outline: none;\n    border-radius: 2px;\n    padding: .25rem;\n}\n\n.todo-editor-input {\n    overflow-y: auto;\n}\n\n.todo-editor-input {\n    padding-top: 0!important;\n}\n\n.todo-editor-input label {\n    margin: .25rem 0 .1rem 0;\n}\n\n.project-buttons,\n.label-buttons,\n.todo-editor-buttons,\n.update-project-buttons,\n.update-label-buttons {\n    display: flex;\n    justify-content: flex-end;    \n    margin-bottom: 0!important;\n}\n\n.project-creator button,\n.label-creator button,\n.todo-editor button,\n.project-editor button,\n.label-editor button {\n    padding: .25rem;\n    margin: 0 0 0 .25rem;\n    background-color: var(--transparent1);\n}\n\n.project-creator button:first-child,\n.label-creator button:first-child,\n.todo-editor button:first-child,\n.project-editor button:first-child,\n.label-editor button:first-child {\n    background-color: var(--mariner);\n}\n\n.update-project-buttons button:nth-child(3),\n.update-label-buttons button:nth-child(3) {\n    background-color: var(--auburn);\n}\n\n.project-creator.on,\n.label-creator.on,\n.todo-editor.on,\n.project-editor.on,\n.label-editor.on {\n    display: grid;\n}\n\n.project-input input:focus-visible,\n.label-input input:focus-visible,\n.todo-editor-input input:focus-visible,\n.project-editor-input input:focus-visible,\n.label-editor-input input:focus-visible {\n    outline: 1px solid var(--transparent2);\n}\n\n@media only screen and (max-width: 750px) {\n    .nav-comp {\n        padding: .5rem .5rem .5rem .5rem;\n    }\n    .info-comp {\n        padding: 1rem .25rem .25rem .25rem;\n        position: absolute;\n        z-index: 1000;\n        top: 47.59px;\n        bottom: 0;\n        display: none;\n    }\n    .info-comp.show-nav {\n        display: flex;\n    }\n    .info-comp > * {\n        width: 294px;\n    }\n    .container > header {\n        padding: 1rem 0 .5rem 0;\n    }\n    .container {\n        padding: 0 1rem 0 1rem;\n    }\n    .quick-add-todo > div {\n        max-width: 400px;\n    }\n}\n\n@media only screen and (max-width: 550px) {\n    .info-comp > * {\n        width: 242px;\n    }\n    .search-input {\n        width: 180px;\n    }\n    .search-input:focus {\n        width: 180px;\n    }\n    .quick-add-todo > div {\n        max-width: 300px;\n    }\n    .notif-container {\n        max-width: 310px;\n    }\n}\n\n@media only screen and (max-width: 321px) {\n    .search-input {\n        max-width: 135px;\n    }\n    .search-input:focus {\n        max-width: 135px;\n    }\n    .quick-add-todo > div {\n        max-width: 270px;\n    }\n    .notif-container {\n        max-width: 270px;\n    }\n}\n\n@media only screen and (max-height: 420px) {\n    .todo-editor-input {\n        max-height: 180px;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,0BAA0B;IAC1B,0BAA0B;IAC1B,uBAAuB;IACvB,4BAA4B;IAC5B,0BAA0B;IAC1B,6BAA6B;IAC7B,6BAA6B;IAC7B,4BAA4B;IAC5B,wBAAwB;IACxB,8BAA8B;IAC9B,8BAA8B;;IAE9B,4BAA4B;IAC5B,2BAA2B;AAC/B;;AAEA;IACI,sBAAsB;IACtB,UAAU;IACV,SAAS;AACb;;AAEA;;IAEI,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,mCAAmC;IACnC,sBAAsB;IACtB,kBAAkB;AACtB;;AAEA;;IAEI,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,6BAA6B;AACjC;;AAEA;;IAEI,eAAe;AACnB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;;IAEI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ,aAAa;AACjB;;AAEA;;;;IAII,oBAAoB;AACxB;;AAEA;IACI,8BAA8B;IAC9B,WAAW;IACX,8BAA8B;IAC9B,mCAAmC;AACvC;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,mCAAmC;AACvC;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,iBAAiB;IACjB,UAAU;AACd;;AAEA;IACI,6BAA6B;IAC7B,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,aAAa;AACjB;;AAEA;;IAEI,oBAAoB;AACxB;;AAEA;IACI,0BAA0B;IAC1B,oBAAoB;IACpB,qCAAqC;AACzC;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,cAAc;AAClB;;AAEA;;;IAGI,gCAAgC;AACpC;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,OAAO;IACP,gCAAgC;IAChC,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,gCAAgC;IAChC,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,sBAAsB;AAC1B;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,qBAAqB;IACrB,UAAU;IACV,aAAa;AACjB;;AAEA;;IAEI,0BAA0B;IAC1B,0BAA0B;AAC9B;;AAEA;;IAEI,gBAAgB;AACpB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;;IAEI,wBAAwB;AAC5B;;;AAGA;IACI,oBAAoB;AACxB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,gCAAgC;IAChC,YAAY;IACZ,gBAAgB;IAChB,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;IACnB,gBAAgB;IAChB,uBAAuB;IACvB,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,UAAU;IACV,kBAAkB;AACtB;;AAEA;;IAEI,qCAAqC;AACzC;;AAEA;;;IAGI,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;;IAEI,uCAAuC;AAC3C;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,kBAAkB;IAClB,uBAAuB;IACvB,qCAAqC;AACzC;;AAEA;IACI,oBAAoB;IACpB,uBAAuB;IACvB,0BAA0B;AAC9B;;AAEA;IACI,aAAa;IACb,OAAO;IACP,sBAAsB;IACtB,2BAA2B;IAC3B,mBAAmB;IACnB,gBAAgB;IAChB,sBAAsB;;AAE1B;;AAEA;IACI,gBAAgB;IAChB,WAAW;AACf;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,sBAAsB;IACtB,gBAAgB;IAChB,MAAM;IACN,gCAAgC;IAChC,UAAU;AACd;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,cAAc;IACd,uBAAuB;IACvB,2BAA2B;IAC3B,mBAAmB;IACnB,4CAA4C;AAChD;;AAEA;;IAEI,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,WAAW;IACX,wBAAwB;IACxB,UAAU;IACV,kBAAkB;AACtB;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,qCAAqC;AACzC;;AAEA;;IAEI,yBAAyB;IACzB,qCAAqC;AACzC;;AAEA;IACI,UAAU;IACV,iBAAiB;IACjB,eAAe;IACf,kBAAkB;IAClB,0BAA0B;IAC1B,kBAAkB;IAClB,YAAY;IACZ,wBAAwB;AAC5B;;AAEA;;IAEI,mBAAmB;AACvB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,OAAO;IACP,sBAAsB;AAC1B;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,oBAAoB;AACxB;;AAEA;;;IAGI,WAAW;AACf;;AAEA;;;IAGI,0BAA0B;AAC9B;;AAEA;;IAEI,0BAA0B;AAC9B;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,yBAAyB;IACzB,qBAAqB;IACrB,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,iBAAiB;AACrB;;AAEA;;IAEI,mBAAmB;AACvB;;AAEA;;IAEI,qCAAqC;AACzC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,gBAAgB;IAChB,WAAW;AACf;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,oBAAoB;AACxB;;AAEA;;;IAGI,6BAA6B;AACjC;;AAEA;;IAEI,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,OAAO;IACP,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;;IAEhB,YAAY;AAChB;;AAEA;IACI,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,oBAAoB;AACxB;;AAEA;;IAEI,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,oBAAoB;IACpB,0BAA0B;IAC1B,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,0BAA0B;AAC9B;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,0BAA0B;IAC1B,eAAe;AACnB;;AAEA;;IAEI,aAAa;AACjB;;AAEA;IACI,qCAAqC;IACrC,kBAAkB;IAClB,4BAA4B;IAC5B,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;;IAEI,WAAW;IACX,aAAa;IACb,YAAY;IACZ,gBAAgB;IAChB,gCAAgC;AACpC;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,qCAAqC;IACrC,eAAe;AACnB;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;;IAEI,gBAAgB;IAChB,WAAW;AACf;;AAEA;;;;IAII,gCAAgC;IAChC,kBAAkB;IAClB,UAAU;IACV,kBAAkB;IAClB,eAAe;IACf;kCAC8B;IAC9B,aAAa;AACjB;;AAEA;;IAEI,WAAW;IACX,gBAAgB;IAChB,gCAAgC;AACpC;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,iBAAiB;IACjB,WAAW;AACf;;AAEA;IACI,WAAW;IACX,eAAe;AACnB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,qCAAqC;AACzC;;AAEA;;;;IAII,0BAA0B;AAC9B;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,oBAAoB;IACpB,gBAAgB;IAChB,WAAW;AACf;;AAEA;;;IAGI,aAAa;IACb,mBAAmB;AACvB;;AAEA;;;IAGI,mBAAmB;IACnB,gBAAgB;IAChB,uBAAuB;IACvB,oBAAoB;AACxB;;AAEA;;IAEI,6BAA6B;IAC7B,YAAY;IACZ,gBAAgB;AACpB;;AAEA;;IAEI,gBAAgB;IAChB,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,gCAAgC;IAChC;kCAC8B;IAC9B,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;;IAEI,gBAAgB;IAChB,cAAc;AAClB;;AAEA;;IAEI,oBAAoB;AACxB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;;;IAGI,cAAc;AAClB;;AAEA;;IAEI,qCAAqC;AACzC;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,+BAA+B;IAC/B,qCAAqC;AACzC;;AAEA;IACI,aAAa;AACjB;;AAEA;;IAEI,aAAa;AACjB;;AAEA;;;;;;IAMI,aAAa;IACb,kBAAkB;IAClB,mBAAmB;IACnB,YAAY;IACZ,WAAW;IACX,qCAAqC;IACrC,YAAY;AAChB;;AAEA;;IAEI,WAAW;AACf;;AAEA;IACI,gCAAgC;IAChC,gBAAgB;IAChB,WAAW;IACX,kBAAkB;IAClB,gCAAgC;AACpC;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,gCAAgC;AACpC;;AAEA;;IAEI,qBAAqB;AACzB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,QAAQ;IACR,6BAA6B;IAC7B,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,gCAAgC;IAChC,wBAAwB;IACxB,cAAc;IACd,gBAAgB;IAChB,WAAW;IACX,iBAAiB;IACjB,kBAAkB;IAClB,gBAAgB;IAChB;kCAC8B;IAC9B,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,qBAAqB;IACrB,4CAA4C;AAChD;;AAEA;IACI,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,oBAAoB;IACpB,oBAAoB;IACpB,+BAA+B;IAC/B,cAAc;AAClB;;AAEA;;IAEI,uCAAuC;IACvC,+BAA+B;IAC/B,iBAAiB;AACrB;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,wBAAwB;AAC5B;;AAEA;IACI,oBAAoB;IACpB,4CAA4C;IAC5C,qBAAqB;;AAEzB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;;IAEI,gBAAgB;AACpB;;AAEA;IACI,mBAAmB;IACnB,gBAAgB;IAChB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,aAAa;;AAEjB;;AAEA;IACI,aAAa;AACjB;;AAEA;;;;;IAKI,gCAAgC;IAChC,gBAAgB;IAChB,WAAW;IACX,kBAAkB;AACtB;;AAEA;;;;;IAKI,cAAc;IACd,oBAAoB;AACxB;;AAEA;;;;;;;;;;IAUI,4CAA4C;AAChD;;AAEA;;;;;;;;;;IAUI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;;;;;IAKI,oBAAoB;AACxB;;AAEA;;;;;;IAMI,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;;;;;IAKI,aAAa;IACb,yBAAyB;IACzB,0BAA0B;AAC9B;;AAEA;;;;;IAKI,eAAe;IACf,oBAAoB;IACpB,qCAAqC;AACzC;;AAEA;;;;;IAKI,gCAAgC;AACpC;;AAEA;;IAEI,+BAA+B;AACnC;;AAEA;;;;;IAKI,aAAa;AACjB;;AAEA;;;;;IAKI,sCAAsC;AAC1C;;AAEA;IACI;QACI,gCAAgC;IACpC;IACA;QACI,kCAAkC;QAClC,kBAAkB;QAClB,aAAa;QACb,YAAY;QACZ,SAAS;QACT,aAAa;IACjB;IACA;QACI,aAAa;IACjB;IACA;QACI,YAAY;IAChB;IACA;QACI,uBAAuB;IAC3B;IACA;QACI,sBAAsB;IAC1B;IACA;QACI,gBAAgB;IACpB;AACJ;;AAEA;IACI;QACI,YAAY;IAChB;IACA;QACI,YAAY;IAChB;IACA;QACI,YAAY;IAChB;IACA;QACI,gBAAgB;IACpB;IACA;QACI,gBAAgB;IACpB;AACJ;;AAEA;IACI;QACI,gBAAgB;IACpB;IACA;QACI,gBAAgB;IACpB;IACA;QACI,gBAAgB;IACpB;IACA;QACI,gBAAgB;IACpB;AACJ;;AAEA;IACI;QACI,iBAAiB;IACrB;AACJ","sourcesContent":[":root {\n    --light92: hsl(0, 0%, 92%);\n    --light88: hsl(0, 0%, 88%);\n    --dark: hsl(0, 0%, 12%);\n    --malibu: hsl(192, 93%, 72%);\n    --auburn: hsl(0, 75%, 65%);\n    --mariner: hsl(216, 75%, 51%);\n    --laurel: hsl(120, 100%, 25%);\n    --purple: hsl(264, 61%, 47%);\n    --sun: hsl(34, 93%, 48%);\n    --transparent1: rgba(0,0,0,.1);\n    --transparent2: rgba(0,0,0,.2);\n\n    --background: var(--light92);\n    --foreground: var(--malibu);\n}\n\n*, *:before, *:after {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;  \n}\n\nhtml,\nbody {\n    overflow-x: hidden;\n}\n\nbody {\n    min-height: 100vh;\n    background-color: var(--background);\n    font-family:sans-serif;\n    color: var(--dark);\n}\n\nbutton,\n.search-input {\n    outline: none;\n    border: none;\n    border-radius: 3px;\n    font-family:sans-serif;\n}\n\nbutton {\n    padding: .125rem;\n    color: var(--dark);\n    background-color: transparent;\n}\n\nbutton,\n.ic-div {\n    cursor: pointer;\n}\n\nspan.mid {\n    vertical-align: middle;\n}\n\nspan,\nh1 {\n    user-select: none;\n}\n\n.app {\n    display: flex;\n    flex-direction: column;\n    width: 100vw;\n    height: 100vh;\n}\n\n.nav-comp ,\n.nc-left,\n.search-div,\n.nc-right {\n    display: inline-flex;\n}\n\n.nav-comp {\n    justify-content: space-between;\n    width: 100%;\n    padding: .5rem 3rem .5rem 3rem;\n    background-color: var(--foreground);\n}\n\n.nc-left > * {\n    margin: 0 .25rem 0 0;\n}\n\n.nc-right > * {\n    margin: 0 0 0 .25rem;\n}\n\n.nc-right button:first-child {\n    margin: 0;\n}\n\n.search-div {\n    height: 100%;\n    background-color: var(--foreground);\n}\n\n.search-div > span:first-child {\n    align-self: center;\n    cursor: text;\n    margin: .1rem;\n    font-size: 1.6rem;\n    z-index: 2;\n}\n\n.search-div button {\n    margin: .2rem 0 .2rem -1.5rem;\n    height: 20px;\n    width: 20px;\n    align-self: center;\n    display: none;\n}\n\n.search-div button:hover,\n.search-div button:focus-visible {\n    color: var(--auburn);\n}\n\n.search-input {\n    padding: 0 1.6rem 0 1.8rem;\n    margin-left: -1.9rem;\n    background-color: var(--transparent1);\n}\n\n.search-input::-webkit-search-cancel-button {\n    -webkit-appearance: none;\n}\n\n.search-input:not(:placeholder-shown) + button {\n    display: block;\n}\n\n.search-div:focus-within .search-input,\n.search-div:hover .search-input,\n.search-input:not(:placeholder-shown){\n    background-color: var(--light92);\n}\n\n.search-div button span {\n    font-size: 1rem;\n}\n\n.app-body {\n    display: flex;\n    flex: 1;\n    max-height: calc(100% - 46.59px);\n    overflow-y: hidden;\n}\n\n.wrapper {\n    height: 100%;\n    width: 100%;\n    display: flex;\n}\n\n.info-comp {\n    display: flex;\n    flex-direction: column;\n    padding: 2rem .25rem 0 2.8rem;\n    background-color: var(--light88);\n    overflow-y: auto;\n}\n\n.info-comp > * {\n    text-align: left;\n    font-size: .9rem;\n    width: 294px;\n    padding: 5px;\n}\n\n.info-comp > * > samp {\n    float: right;\n    opacity: .5;\n    margin: 4px 1rem 4px 0;\n}\n\n.ic-div {\n    margin: .25rem 0 0 0;\n}\n\n.info-comp > div:first-of-type{\n    margin: 1rem 0 0 0;\n}\n\n.ic-span {\n    margin: 0 .25rem 0 0;\n}\n\n.info-comp > button:first-child span {\n    color: var(--mariner);\n}\n\n.info-comp > button:nth-child(2) span {\n    color: var(--laurel);\n}\n\n.info-comp > button:nth-child(3) span {\n    color: var(--purple);\n}\n\n.info-comp .active {\n    background-color: var(--malibu);\n}\n\n.opa {\n    opacity: .5;\n}\n\n.ic-add-btn {\n    float: right;\n    margin: 0px .5rem 0 0;\n    padding: 0;\n    display: none;\n}\n\n.ic-add-btn:hover + strong,\n.ic-add-btn:focus-visible + strong {\n    text-decoration: underline;\n    text-underline-offset: 30%;\n}\n\n.info-comp:focus-within .ic-add-btn,\n.info-comp:hover .ic-add-btn{\n    display: inherit;\n}\n\n.ic-div > div {\n    display: none;\n}\n\n.ic-div > div.show {\n    display: flex;\n    flex-direction: column;\n}\n\n.ic-project > span.rotate,\n.ic-label > span.rotate {\n    transform: rotate(90deg);\n}\n\n\n.show {\n    margin: .75rem 0 0 0;\n}\n\n.show > div {\n    text-align: left;\n    display: flex;\n    padding: .5rem .5rem .5rem .5rem;\n    height: 34px;\n    font-size: .9rem;\n    align-items: center;\n    border-radius: 3px;\n}\n\nspan.unique {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    align-self: center;\n    margin-right: .2rem;\n}\n\n.show button {\n    padding: 0;\n    visibility: hidden;\n}\n\n.show > div:hover,\n.show > div:focus-visible {\n    background-color: var(--transparent2);\n}\n\n.show > div:hover button,\n.show > div:focus-visible button,\n.show > div:focus-within button{\n    visibility: visible;\n    margin-left: auto;\n}\n\n.show button:hover,\n.show button:focus-visible {\n    background-color: transparent!important;\n}\n\n.bullet {\n    min-width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    margin: 0 .7rem 0 .5rem;\n    background-color: var(--transparent2);\n}\n\n.tag {\n    transform: scale(.8);\n    margin: 0 .2rem 0 .2rem;\n    color: var(--transparent2);\n}\n\n.container {\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    overflow-y: auto;\n    padding: 0 2rem 0 2rem;\n\n}\n\n.container > * {\n    max-width: 800px;\n    width: 100%;\n}\n\n.container > footer {\n    margin-top: auto;\n}\n\n.container > header {\n    padding: 2rem 0 1rem 0;\n    position: sticky;\n    top: 0;\n    background-color: var(--light92);\n    z-index: 3;\n}\n\nh1 {\n    font-size: 1.3rem;\n}\n\n.todo {\n    display: flex;\n    padding: 2px 0;\n    margin: .5rem 0 .5rem 0;\n    justify-content: flex-start;\n    flex-direction: row;\n    border-bottom: 1px solid var(--transparent1);\n}\n\n.todo,\n.todo * {\n    cursor: pointer;\n}\n\n.checkbox-btn { \n    height: 18px;\n    max-width: 18px;\n    width: 100%;\n    margin: .27rem .7rem 0 0;\n    z-index: 2;\n    position: relative;\n}\n\n.checkbox-btn.prio1 {\n    border: 2px solid var(--auburn);\n}\n\n.checkbox-btn.prio2 {\n    border: 2px solid var(--sun);\n}\n\n.checkbox-btn.prio3 {\n    border: 2px solid var(--mariner);\n}\n\n.checkbox-btn.prio4 {\n    border: 2px solid var(--transparent2);\n}\n\n.checkbox-btn:hover,\n.checkbox-btn:focus-visible {\n    border-color: transparent;\n    background-color: var(--transparent1);\n}\n\n.checkbox-btn + span {\n    padding: 0;\n    line-height: 1rem;\n    font-size: 2rem;\n    position: relative;\n    color: var(--transparent2);\n    visibility: hidden;\n    float: right;\n    margin: -.9rem 0 0 -1rem;    \n}\n\n.checkbox-btn:hover + span,\n.checkbox-btn:focus-visible + span {\n    visibility: visible;\n}\n\n.checkbox-btn:active + span{\n    color: var(--laurel);\n}\n\n.todo-text {\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n}\n\n.todo-text > label {\n    line-height: 1.4rem;\n}\n\n.todo-text-note {\n    text-indent: 1rem;\n    font-size: .9rem;\n    margin: 0 0 .25rem 0;\n}\n\n.todo-text-note,\n.todo-text-note > span,\n.todo-text small {\n    color: gray;\n}\n\n.todo-text-note > span,\nem,\nem > span {\n    font-size: .9rem!important;\n}\n\n.todo-text small:hover,\n.todo-text small:focus-visible {\n    text-decoration: underline;\n}\n\nem {\n    width: 100%;\n}\n\n.sched-due {\n    color: var(--auburn);\n}\n\n.sched-today {\n    color: var(--laurel);\n}\n\n.sched-upcom {\n    color: var(--purple);\n}\n\n.todo-tools-container {\n    display: flex;\n    justify-content: flex-end;\n    align-items: flex-end;\n    margin: -20px 0 0 0;\n    visibility: hidden;\n}\n\n.todo-tools-container * {\n    color: gray;\n}\n\n.tool-span {\n    font-size: 1.2rem;\n}\n\n.todo:hover .todo-tools-container,\n.todo:focus-within .todo-tools-container {\n    visibility: visible;\n}\n\nbutton:hover,\nbutton:focus-visible {\n    background-color: var(--transparent2);\n}\n\nbutton:focus-visible {\n    outline: auto;\n}\n\n.add-task-btn {\n    text-align: left;\n    color: gray;\n}\n\n.add-task-btn * {\n    padding: .1rem;\n}\n\n.add-task-btn span {\n    border-radius: 50%;\n    padding: 0;\n    color: var(--auburn);\n}\n\n.add-task-btn:hover,\n.add-task-btn:focus-visible,\n.add-task-btn span {\n    background-color: transparent;\n}\n\n.add-task-btn:hover span,\n.add-task-btn:focus-visible span {\n    color: var(--mariner);\n}\n\n.empty-state-div {\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    justify-content: center;\n    align-items: center;\n}\n\n.empty-state-div img {\n    max-width: 180px;\n    \n    height: auto;\n}\n\n.empty-state-div h4 {\n    font-weight: normal;\n    color: gray;\n}\n\n.empty-state-div *:nth-child(n+2) {\n    margin: .25rem 0 0 0;\n}\n\n.empty-state-div *:nth-child(n+2),\n.container footer p {\n    text-align: center;\n}\n\n.empty-state-div p {\n    font-size: .9rem;\n    color: darkgray;\n}\n\n.container footer {\n    color: var(--auburn);\n    font-size: .9rem!important;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: .25rem 0 .75rem 0;\n}\n\n.container footer span {\n    font-size: 1.25rem!important;\n}\n\n.container footer p {\n    text-decoration: underline;\n    cursor: pointer;\n}\n\n.container:not(.empty) .empty-state-div,\n.container:not(.empty) footer {\n    display: none;\n}\n\n.add-task-div {\n    border: 1px solid var(--transparent2);\n    border-radius: 3px;\n    padding: 0 .5rem .5rem .5rem;\n    height: 68.48px;\n    margin-top: 1rem;\n}\n\n.add-task-div > * {\n    margin-top: .5rem;\n}\n\n.add-task-div input,\n.quick-add-todo input {\n    width: 100%;\n    outline: none;\n    border: none;\n    font-size: .9rem;\n    background-color: var(--light92);\n}\n\n.add-task-btns-container {\n    display: flex;\n    justify-content: space-between;\n}\n\n.add-task-btns-container div > button {\n    border: 1px solid var(--transparent2);\n    padding: .25rem;\n}\n\n.add-task-btns-container button > span {\n    font-size: .9rem!important;\n}\n\n.add-task-btns-container > button:nth-child(2) span {\n    color: var(--mariner);\n}\n\n.scheduler,\n.carrier {\n    max-width: 210px;\n    width: 100%;    \n}\n\n.scheduler,\n.carrier,\n.labeler,\n.prio-setter {\n    background-color: var(--light92);\n    border-radius: 3px;\n    z-index: 2;\n    position: relative;\n    margin: 0 0 0 0;\n    box-shadow: 0 1px 8px 0 rgb(0 0 0 / 8%),\n        0 0 1px 0 rgb(0 0 0 / 30%);\n    display: none;\n}\n\n.scheduler > *,\n.carrier > * {\n    width: 100%;\n    text-align: left;\n    padding: .5rem .5rem .5rem .5rem;\n}\n\n.sched {\n    display: flex;\n    justify-content: space-between;\n}\n\n.sched span:nth-child(2) {\n    text-align: right;\n    color: gray;\n}\n\n.scheduler input[type=\"date\"]::-webkit-calendar-picker-indicator {\n    opacity: .4;\n    cursor: pointer;\n}\n\n.scheduler input[type=\"date\"]::-webkit-calendar-picker-indicator:hover {\n    opacity: 1;\n}\n\n.scheduler .sched-custom {\n    display: flex;\n}\n\n.scheduler .sched-custom button {\n    border: 1px solid var(--transparent1);\n}\n\n.scheduler .sched-custom button > span,\n.carrier span,\n.labeler span,\n.prio-setter span {\n    font-size: .9rem!important;\n}\n\n.prio-setter button:first-child span {\n    color: var(--auburn);\n}\n\n.prio-setter button:nth-child(2) span {\n    color: var(--sun);\n}\n\n.prio-setter button:nth-child(3) span {\n    color: var(--mariner);\n}\n\n.prio-setter button:nth-child(4) span {\n    color: gray;\n}\n\n.carrier {\n    margin: 0 0 0 -.7rem;\n    max-width: 160px;\n    width: 100%;\n}\n\n.carrier button,\n.labeler button,\n.prio-setter button {\n    display: flex;\n    align-items: center;\n}\n\n.carrier u,\n.labeler u,\n.prio-setter u {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    margin: 0 0 0 .25rem;\n}\n\n.labeler,\n.prio-setter {\n    background-color: transparent;\n    border: none;\n    box-shadow: none;\n}\n\n.labeler div,\n.prio-setter div {\n    max-width: 160px;\n    width: 100%; \n    display: flex;\n    flex-direction: column;\n    margin: 0 1.8rem 0 auto;\n    background-color: var(--light92);\n    box-shadow: 0 1px 8px 0 rgb(0 0 0 / 8%),\n        0 0 1px 0 rgb(0 0 0 / 30%);\n    border-radius: 3px;\n}\n\n.prio-setter div {\n    margin: 0 0 0 auto;\n    max-width: 88px;\n}\n\n.prio-setter u {\n    text-decoration: none;\n}\n\n.labeler button,\n.prio-setter button {\n    text-align: left;\n    padding: .5rem;\n}\n\n.scheduler .sched-custom button:hover > span,\n.scheduler .sched-custom button:focus-visible > span {\n    color: var(--laurel);\n}\n\n.add-task-div.display-scheduler .scheduler {\n    display: inherit;\n}\n\n.add-task-div.display-carrier .carrier,\n.add-task-div.display-labeler .labeler,\n.add-task-div.display-prio-setter .prio-setter {\n    display: block;\n}\n\n.add-task-div .selected,\n.add-task-div .active {\n    background-color: var(--transparent1);\n}\n\n.add-task-main-btns-container {\n    padding: .5rem 0 .5rem 0;\n}\n\n.add-task-main-btns-container button {\n    padding: .25rem;\n}\n\n.add-task-main-btns-container button:first-child {\n    background-color: var(--malibu);\n    border: 1px solid var(--transparent2);\n}\n\n.container.add-triggered .add-task-btn-div {\n    display: none;\n}\n\n.container:not(.add-triggered) .add-task-div,\n.container:not(.add-triggered) .add-task-main-btns-container {\n    display: none;\n}\n\n.quick-add-todo,\n.project-creator,\n.label-creator,\n.todo-editor,\n.project-editor,\n.label-editor {\n    display: none;\n    position: absolute;\n    place-items: center;\n    height: 100%;\n    width: 100%;\n    background-color: var(--transparent2);\n    z-index: 999;\n}\n\n.quick-add-todo > *,\n.quick-add-todo input {\n    width: 100%;\n}\n\n.quick-add-todo > div {\n    background-color: var(--light92);\n    max-width: 480px;\n    width: 100%;\n    border-radius: 3px;\n    padding: .5rem .5rem .5rem .5rem;\n}\n\n.quick-add-todo > div > *:not(:first-child) {\n    margin: .5rem 0 0 0;\n}\n\n.quick-add-todo button {\n    padding: .25rem;\n}\n\n.quick-add-todo button:first-child {\n    background-color: var(--mariner);\n}\n\n.quick-add-todo button:hover,\n.quick-add-todo button:focus-visible {\n    color: var(--light92);\n}\n\n.quick-add-todo.on {\n    display: grid;\n}\n\n.notifications {\n    display: none;\n    position: absolute;\n    inset: 0;\n    background-color: transparent;\n    z-index: 999;\n}\n\n.notif-container {\n    display: flex;\n    flex-direction: column;\n    background-color: var(--light92);\n    margin: 40px 0 auto auto;\n    padding: .5rem;\n    max-width: 420px;\n    width: 100%;\n    max-height: 320px;\n    overflow-x: hidden;\n    overflow-y: auto;\n    box-shadow: 0 1px 8px 0 rgb(0 0 0 / 8%),\n        0 0 1px 0 rgb(0 0 0 / 30%);\n    border-radius: 3px;\n}\n\n.notif-container nav {\n    display: flex;\n    align-items: center;\n    padding: 0 0 .25rem 0;\n    border-bottom: 1px solid var(--transparent2);\n}\n\n.notif-container nav > * {\n    font-size: .9rem;\n    cursor: pointer;\n}\n\n.notif-container button:first-of-type{\n    margin: 0 0 0 .5rem;\n}\n\n.nav-btn-notification small {\n    position: absolute; \n    color: var(--auburn);\n    margin-left: -.85rem; \n    background-color: var(--malibu);\n    padding: 0 1px;\n}\n\n.nav-btn-notification:hover small,\n.nav-btn-notification:focus-visible small {\n    background-color: transparent!important;\n    color: var(--light92)!important;\n    font-weight: bold;\n}\n\n.read-all-btn {\n    margin: 0 0 0 auto!important;\n}\n\n.read-all-btn span {\n    font-size: 1.2rem;\n}\n\n.notif-output {\n    margin: 0 .25rem;\n    overflow-y: auto;\n    /* overflow-x: hidden; */\n}\n\n.notif-output > * {\n    margin: .25rem 0 0 0;\n    border-bottom: 1px solid var(--transparent1);\n    padding: 0 0 .25rem 0;\n    \n}\n\n.notif {\n    display: flex;\n    flex-direction: column;\n}\n\n.notif > *,\n.notif-extra button span{\n    font-size: .9rem;  \n}\n\n.notif > span {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.notif-extra {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.notif small {\n    color: var(--auburn);\n}\n\n.notifications.on {\n    display: flex;\n\n}\n\n.app.search .add-task-btn-div{\n    display: none;\n}\n\n.project-creator > div,\n.label-creator > div,\n.todo-editor > div,\n.project-editor > div,\n.label-editor > div {\n    background-color: var(--light92);\n    max-width: 420px;\n    width: 100%;\n    border-radius: 3px;\n}\n\n.project-creator > div > *,\n.label-creator > div > *,\n.todo-editor > div > *,\n.project-editor > div > *,\n.label-editor > div > * {\n    padding: .5rem;\n    margin: 0 0 .25rem 0;\n}\n\n.project-creator > div > *:first-child, \n.project-creator > div > *:nth-child(2),\n.label-creator > div > *:first-child, \n.label-creator > div > *:nth-child(2),\n.todo-editor > div > *:first-child, \n.todo-editor > div > *:nth-child(2),\n.project-editor > div > *:first-child,\n.project-editor > div > *:nth-child(2),\n.label-editor > div > *:first-child,\n.label-editor > div > *:nth-child(2) {\n    border-bottom: 1px solid var(--transparent1);\n}\n\n.project-creator > div,\n.project-input,\n.label-creator > div,\n.label-input,\n.todo-editor > div,\n.todo-editor-input,\n.project-editor > div,\n.project-editor-input,\n.label-editor > div,\n.label-editor-input {\n    display: flex;\n    flex-direction: column;\n}\n\n.project-input > *,\n.label-input > *,\n.todo-editor-input > *,\n.project-editor-input > *,\n.label-editor-input > * {\n    margin: 0 0 .25rem 0;\n}\n\n.project-input input,\n.label-input input,\n.todo-editor-input input,\n.todo-editor-input select,\n.project-editor-input input,\n.label-editor-input input {\n    border: none;\n    outline: none;\n    border-radius: 2px;\n    padding: .25rem;\n}\n\n.todo-editor-input {\n    overflow-y: auto;\n}\n\n.todo-editor-input {\n    padding-top: 0!important;\n}\n\n.todo-editor-input label {\n    margin: .25rem 0 .1rem 0;\n}\n\n.project-buttons,\n.label-buttons,\n.todo-editor-buttons,\n.update-project-buttons,\n.update-label-buttons {\n    display: flex;\n    justify-content: flex-end;    \n    margin-bottom: 0!important;\n}\n\n.project-creator button,\n.label-creator button,\n.todo-editor button,\n.project-editor button,\n.label-editor button {\n    padding: .25rem;\n    margin: 0 0 0 .25rem;\n    background-color: var(--transparent1);\n}\n\n.project-creator button:first-child,\n.label-creator button:first-child,\n.todo-editor button:first-child,\n.project-editor button:first-child,\n.label-editor button:first-child {\n    background-color: var(--mariner);\n}\n\n.update-project-buttons button:nth-child(3),\n.update-label-buttons button:nth-child(3) {\n    background-color: var(--auburn);\n}\n\n.project-creator.on,\n.label-creator.on,\n.todo-editor.on,\n.project-editor.on,\n.label-editor.on {\n    display: grid;\n}\n\n.project-input input:focus-visible,\n.label-input input:focus-visible,\n.todo-editor-input input:focus-visible,\n.project-editor-input input:focus-visible,\n.label-editor-input input:focus-visible {\n    outline: 1px solid var(--transparent2);\n}\n\n@media only screen and (max-width: 750px) {\n    .nav-comp {\n        padding: .5rem .5rem .5rem .5rem;\n    }\n    .info-comp {\n        padding: 1rem .25rem .25rem .25rem;\n        position: absolute;\n        z-index: 1000;\n        top: 47.59px;\n        bottom: 0;\n        display: none;\n    }\n    .info-comp.show-nav {\n        display: flex;\n    }\n    .info-comp > * {\n        width: 294px;\n    }\n    .container > header {\n        padding: 1rem 0 .5rem 0;\n    }\n    .container {\n        padding: 0 1rem 0 1rem;\n    }\n    .quick-add-todo > div {\n        max-width: 400px;\n    }\n}\n\n@media only screen and (max-width: 550px) {\n    .info-comp > * {\n        width: 242px;\n    }\n    .search-input {\n        width: 180px;\n    }\n    .search-input:focus {\n        width: 180px;\n    }\n    .quick-add-todo > div {\n        max-width: 300px;\n    }\n    .notif-container {\n        max-width: 310px;\n    }\n}\n\n@media only screen and (max-width: 321px) {\n    .search-input {\n        max-width: 135px;\n    }\n    .search-input:focus {\n        max-width: 135px;\n    }\n    .quick-add-todo > div {\n        max-width: 270px;\n    }\n    .notif-container {\n        max-width: 270px;\n    }\n}\n\n@media only screen and (max-height: 420px) {\n    .todo-editor-input {\n        max-height: 180px;\n    }\n}"],"sourceRoot":""}]);
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

    return {
        quick,
        project,
        label
    }
})();

const dateString = (() => {
    let dateNow;
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 
        'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const today = () => {
        dateNow = new Date();
        dateNow.setHours(0,0,0,0);
        return dateNow;
    };

    const todayString = () => {
        let date = today().getDate().toString();
        if(date.length == 2){
            return `${today().getFullYear()}-${today().getDate()}-${today().getMonth()+1}`;
        } else {
            return `${today().getFullYear()}-0${today().getDate()}-${today().getMonth()+1}`;
        }
    };

    const todayName = () => days[today().getDay()];

    const tomorrow = () => {
        dateNow = new Date();
        dateNow.setDate(dateNow.getDate() + 1)
        dateNow.setHours(0,0,0,0);
        return dateNow;
    };

    const twmString = () => {
        let date = tomorrow().getDate().toString();
        if(date.length == 2){
            return `${tomorrow().getFullYear()}-${tomorrow().getDate()}-${tomorrow().getMonth()+1}`;
        } else {
            return `${tomorrow().getFullYear()}-0${tomorrow().getDate()}-${tomorrow().getMonth()+1}`;
        }
    };

    const tomorrowName = () => days[tomorrow().getDay()];

    const nextWeek = () => {
        dateNow = new Date();
        dateNow.setDate(dateNow.getDate() + 7)
        dateNow.setHours(0,0,0,0);
        return dateNow;
    };

    const nextWeekString = () => {
        let date = nextWeek().getDate().toString();
        if(date.length == 2){
            return `${nextWeek().getFullYear()}-${nextWeek().getDate()}-${nextWeek().getMonth()+1}`;
        } else {
            return `${nextWeek().getFullYear()}-0${nextWeek().getDate()}-${nextWeek().getMonth()+1}`;
        }
    };

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
    console.log(dateString.nextWeekString())
    console.log(Date.parse(dateString.todayString()))
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

    const datax = '2021-08-8';
    console.log(datax);
    console.log(Date.parse(datax))
    // console.log(datax.valueAsNumber)

    const today = new Date();
    today.setHours(0,0,0,0);
    console.log('today', today);
    console.log('today number', Date.parse(today));

    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    tomorrow.setHours(0,0,0,0);
    console.log(tomorrow);
    console.log(Date.parse(tomorrow))

    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let d = new Date(); //or dateString
    let dayName = days[d.getDay()];
    console.log(dayName)

    console.log(dateString.nextWeek());
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
                <span id = "schedulerTodaySpan"></span>
            </button>
            <button class = "sched" id = "schedulerTwmBtn">
                <span>Tomorrow</span>
                <span id = "schedulerTwmSpan"></span>
            </button>
            <button class = "sched" id = "schedulerNextWeekBtn">
                <span>Next week</span>
                <span id = "schedulerNextWeekSpan"></span>
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
        if (_selector_js__WEBPACK_IMPORTED_MODULE_0__.container.div.classList.contains('add-triggered')){
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

    const taskProjectList = () => {
        _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.projectSelector.innerHTML = '';
        _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.projectSelector.innerHTML = `
            <button id = "projectDefaultInbox">
                <span class="material-icons-outlined mid">inbox</span>
                <u>Inbox</u>
            </button>
        `;

        let data = JSON.parse(localStorage.getItem('todos'));

        data.projects.forEach((project) => {
            const button = document.createElement('button');
            button.innerHTML = `
                <span class="material-icons-outlined mid">circle</span>
                <u>${project}</u>
            `;
            _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.projectSelector.appendChild(button);
        });
    };

    const taskLabelList = () => {
        _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.labelContainer.innerHTML = '';
        _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.labelContainer.innerHTML = `
            <button>
                <span class="material-icons-outlined mid">label</span>
                <u>Lorem, ipsum.</u>
            </button>
        `;

        let data = JSON.parse(localStorage.getItem('todos'));

        data.labels.forEach((label) => {
            const button = document.createElement('button');
            button.innerHTML = `
                <span class="material-icons-outlined mid">label</span>
                <u>${label}</u>
            `;
            _selector_js__WEBPACK_IMPORTED_MODULE_0__.task.labelContainer.appendChild(button);
        });
    };

    return {
        todolist,
        home,
        taskProjectList,
        taskLabelList
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
        //fix item selection first before fixing this
    };

    return {
        quick,
        project,
        label,
        todo
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFRhcmdldC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kYXRhLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2V2ZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNzSDtBQUM3QjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsaURBQWlELGlDQUFpQyxpQ0FBaUMsOEJBQThCLG1DQUFtQyxpQ0FBaUMsb0NBQW9DLG9DQUFvQyxtQ0FBbUMsK0JBQStCLHFDQUFxQyxxQ0FBcUMscUNBQXFDLGtDQUFrQyxHQUFHLDBCQUEwQiw2QkFBNkIsaUJBQWlCLGdCQUFnQixLQUFLLGlCQUFpQix5QkFBeUIsR0FBRyxVQUFVLHdCQUF3QiwwQ0FBMEMsNkJBQTZCLHlCQUF5QixHQUFHLDRCQUE0QixvQkFBb0IsbUJBQW1CLHlCQUF5Qiw2QkFBNkIsR0FBRyxZQUFZLHVCQUF1Qix5QkFBeUIsb0NBQW9DLEdBQUcsc0JBQXNCLHNCQUFzQixHQUFHLGNBQWMsNkJBQTZCLEdBQUcsZUFBZSx3QkFBd0IsR0FBRyxVQUFVLG9CQUFvQiw2QkFBNkIsbUJBQW1CLG9CQUFvQixHQUFHLHFEQUFxRCwyQkFBMkIsR0FBRyxlQUFlLHFDQUFxQyxrQkFBa0IscUNBQXFDLDBDQUEwQyxHQUFHLGtCQUFrQiwyQkFBMkIsR0FBRyxtQkFBbUIsMkJBQTJCLEdBQUcsa0NBQWtDLGdCQUFnQixHQUFHLGlCQUFpQixtQkFBbUIsMENBQTBDLEdBQUcsb0NBQW9DLHlCQUF5QixtQkFBbUIsb0JBQW9CLHdCQUF3QixpQkFBaUIsR0FB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QVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxRQUFRLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxPQUFPLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsY0FBYyxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLE9BQU8sVUFBVSxNQUFNLE9BQU8sWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sT0FBTyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLE1BQU0sUUFBUSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsS0FBSyxPQUFPLFdBQVcsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sUUFBUSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLE9BQU8sVUFBVSxZQUFZLE9BQU8sT0FBTyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLFdBQVcsWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxPQUFPLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sT0FBTyxVQUFVLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxNQUFNLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sT0FBTyxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlB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QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsUUFBUTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkU7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxNQUFNO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxPQUFPLHlEQUFlLElBQUk7QUFDMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMENBQVcsQ0FBQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsaUVBQWUsU0FBUyxFOzs7Ozs7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7O1VDNUpEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGO1dBQ0E7V0FDQSxDQUFDLEk7Ozs7O1dDUEQsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esa0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmcUI7QUFDWTtBQUNKO0FBQ3NDO0FBQ3BDOztBQUUvQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJpbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1saWdodDkyOiBoc2woMCwgMCUsIDkyJSk7XFxuICAgIC0tbGlnaHQ4ODogaHNsKDAsIDAlLCA4OCUpO1xcbiAgICAtLWRhcms6IGhzbCgwLCAwJSwgMTIlKTtcXG4gICAgLS1tYWxpYnU6IGhzbCgxOTIsIDkzJSwgNzIlKTtcXG4gICAgLS1hdWJ1cm46IGhzbCgwLCA3NSUsIDY1JSk7XFxuICAgIC0tbWFyaW5lcjogaHNsKDIxNiwgNzUlLCA1MSUpO1xcbiAgICAtLWxhdXJlbDogaHNsKDEyMCwgMTAwJSwgMjUlKTtcXG4gICAgLS1wdXJwbGU6IGhzbCgyNjQsIDYxJSwgNDclKTtcXG4gICAgLS1zdW46IGhzbCgzNCwgOTMlLCA0OCUpO1xcbiAgICAtLXRyYW5zcGFyZW50MTogcmdiYSgwLDAsMCwuMSk7XFxuICAgIC0tdHJhbnNwYXJlbnQyOiByZ2JhKDAsMCwwLC4yKTtcXG5cXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1saWdodDkyKTtcXG4gICAgLS1mb3JlZ3JvdW5kOiB2YXIoLS1tYWxpYnUpO1xcbn1cXG5cXG4qLCAqOmJlZm9yZSwgKjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDsgIFxcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbmJvZHkge1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxuICAgIGZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrKTtcXG59XFxuXFxuYnV0dG9uLFxcbi5zZWFyY2gtaW5wdXQge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgZm9udC1mYW1pbHk6c2Fucy1zZXJpZjtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgcGFkZGluZzogLjEyNXJlbTtcXG4gICAgY29sb3I6IHZhcigtLWRhcmspO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuYnV0dG9uLFxcbi5pYy1kaXYge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbnNwYW4ubWlkIHtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuc3BhbixcXG5oMSB7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4uYXBwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4ubmF2LWNvbXAgLFxcbi5uYy1sZWZ0LFxcbi5zZWFyY2gtZGl2LFxcbi5uYy1yaWdodCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbn1cXG5cXG4ubmF2LWNvbXAge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAuNXJlbSAzcmVtIC41cmVtIDNyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvcmVncm91bmQpO1xcbn1cXG5cXG4ubmMtbGVmdCA+ICoge1xcbiAgICBtYXJnaW46IDAgLjI1cmVtIDAgMDtcXG59XFxuXFxuLm5jLXJpZ2h0ID4gKiB7XFxuICAgIG1hcmdpbjogMCAwIDAgLjI1cmVtO1xcbn1cXG5cXG4ubmMtcmlnaHQgYnV0dG9uOmZpcnN0LWNoaWxkIHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uc2VhcmNoLWRpdiB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9yZWdyb3VuZCk7XFxufVxcblxcbi5zZWFyY2gtZGl2ID4gc3BhbjpmaXJzdC1jaGlsZCB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgY3Vyc29yOiB0ZXh0O1xcbiAgICBtYXJnaW46IC4xcmVtO1xcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXG4gICAgei1pbmRleDogMjtcXG59XFxuXFxuLnNlYXJjaC1kaXYgYnV0dG9uIHtcXG4gICAgbWFyZ2luOiAuMnJlbSAwIC4ycmVtIC0xLjVyZW07XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnNlYXJjaC1kaXYgYnV0dG9uOmhvdmVyLFxcbi5zZWFyY2gtZGl2IGJ1dHRvbjpmb2N1cy12aXNpYmxlIHtcXG4gICAgY29sb3I6IHZhcigtLWF1YnVybik7XFxufVxcblxcbi5zZWFyY2gtaW5wdXQge1xcbiAgICBwYWRkaW5nOiAwIDEuNnJlbSAwIDEuOHJlbTtcXG4gICAgbWFyZ2luLWxlZnQ6IC0xLjlyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50MSk7XFxufVxcblxcbi5zZWFyY2gtaW5wdXQ6Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi5zZWFyY2gtaW5wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bikgKyBidXR0b24ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnNlYXJjaC1kaXY6Zm9jdXMtd2l0aGluIC5zZWFyY2gtaW5wdXQsXFxuLnNlYXJjaC1kaXY6aG92ZXIgLnNlYXJjaC1pbnB1dCxcXG4uc2VhcmNoLWlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pe1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodDkyKTtcXG59XFxuXFxuLnNlYXJjaC1kaXYgYnV0dG9uIHNwYW4ge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5hcHAtYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXg6IDE7XFxuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDQ2LjU5cHgpO1xcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XFxufVxcblxcbi53cmFwcGVyIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmluZm8tY29tcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDJyZW0gLjI1cmVtIDAgMi44cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodDg4KTtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLmluZm8tY29tcCA+ICoge1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBmb250LXNpemU6IC45cmVtO1xcbiAgICB3aWR0aDogMjk0cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLmluZm8tY29tcCA+ICogPiBzYW1wIHtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBvcGFjaXR5OiAuNTtcXG4gICAgbWFyZ2luOiA0cHggMXJlbSA0cHggMDtcXG59XFxuXFxuLmljLWRpdiB7XFxuICAgIG1hcmdpbjogLjI1cmVtIDAgMCAwO1xcbn1cXG5cXG4uaW5mby1jb21wID4gZGl2OmZpcnN0LW9mLXR5cGV7XFxuICAgIG1hcmdpbjogMXJlbSAwIDAgMDtcXG59XFxuXFxuLmljLXNwYW4ge1xcbiAgICBtYXJnaW46IDAgLjI1cmVtIDAgMDtcXG59XFxuXFxuLmluZm8tY29tcCA+IGJ1dHRvbjpmaXJzdC1jaGlsZCBzcGFuIHtcXG4gICAgY29sb3I6IHZhcigtLW1hcmluZXIpO1xcbn1cXG5cXG4uaW5mby1jb21wID4gYnV0dG9uOm50aC1jaGlsZCgyKSBzcGFuIHtcXG4gICAgY29sb3I6IHZhcigtLWxhdXJlbCk7XFxufVxcblxcbi5pbmZvLWNvbXAgPiBidXR0b246bnRoLWNoaWxkKDMpIHNwYW4ge1xcbiAgICBjb2xvcjogdmFyKC0tcHVycGxlKTtcXG59XFxuXFxuLmluZm8tY29tcCAuYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFsaWJ1KTtcXG59XFxuXFxuLm9wYSB7XFxuICAgIG9wYWNpdHk6IC41O1xcbn1cXG5cXG4uaWMtYWRkLWJ0biB7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgbWFyZ2luOiAwcHggLjVyZW0gMCAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaWMtYWRkLWJ0bjpob3ZlciArIHN0cm9uZyxcXG4uaWMtYWRkLWJ0bjpmb2N1cy12aXNpYmxlICsgc3Ryb25nIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIHRleHQtdW5kZXJsaW5lLW9mZnNldDogMzAlO1xcbn1cXG5cXG4uaW5mby1jb21wOmZvY3VzLXdpdGhpbiAuaWMtYWRkLWJ0bixcXG4uaW5mby1jb21wOmhvdmVyIC5pYy1hZGQtYnRue1xcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xcbn1cXG5cXG4uaWMtZGl2ID4gZGl2IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmljLWRpdiA+IGRpdi5zaG93IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmljLXByb2plY3QgPiBzcGFuLnJvdGF0ZSxcXG4uaWMtbGFiZWwgPiBzcGFuLnJvdGF0ZSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59XFxuXFxuXFxuLnNob3cge1xcbiAgICBtYXJnaW46IC43NXJlbSAwIDAgMDtcXG59XFxuXFxuLnNob3cgPiBkaXYge1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAuNXJlbSAuNXJlbSAuNXJlbSAuNXJlbTtcXG4gICAgaGVpZ2h0OiAzNHB4O1xcbiAgICBmb250LXNpemU6IC45cmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbnNwYW4udW5pcXVlIHtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXJpZ2h0OiAuMnJlbTtcXG59XFxuXFxuLnNob3cgYnV0dG9uIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uc2hvdyA+IGRpdjpob3ZlcixcXG4uc2hvdyA+IGRpdjpmb2N1cy12aXNpYmxlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQyKTtcXG59XFxuXFxuLnNob3cgPiBkaXY6aG92ZXIgYnV0dG9uLFxcbi5zaG93ID4gZGl2OmZvY3VzLXZpc2libGUgYnV0dG9uLFxcbi5zaG93ID4gZGl2OmZvY3VzLXdpdGhpbiBidXR0b257XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4uc2hvdyBidXR0b246aG92ZXIsXFxuLnNob3cgYnV0dG9uOmZvY3VzLXZpc2libGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCFpbXBvcnRhbnQ7XFxufVxcblxcbi5idWxsZXQge1xcbiAgICBtaW4td2lkdGg6IDEwcHg7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBtYXJnaW46IDAgLjdyZW0gMCAuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQyKTtcXG59XFxuXFxuLnRhZyB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoLjgpO1xcbiAgICBtYXJnaW46IDAgLjJyZW0gMCAuMnJlbTtcXG4gICAgY29sb3I6IHZhcigtLXRyYW5zcGFyZW50Mik7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiAxO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIHBhZGRpbmc6IDAgMnJlbSAwIDJyZW07XFxuXFxufVxcblxcbi5jb250YWluZXIgPiAqIHtcXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jb250YWluZXIgPiBmb290ZXIge1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbn1cXG5cXG4uY29udGFpbmVyID4gaGVhZGVyIHtcXG4gICAgcGFkZGluZzogMnJlbSAwIDFyZW0gMDtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodDkyKTtcXG4gICAgei1pbmRleDogMztcXG59XFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLnRvZG8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAycHggMDtcXG4gICAgbWFyZ2luOiAuNXJlbSAwIC41cmVtIDA7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXRyYW5zcGFyZW50MSk7XFxufVxcblxcbi50b2RvLFxcbi50b2RvICoge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jaGVja2JveC1idG4geyBcXG4gICAgaGVpZ2h0OiAxOHB4O1xcbiAgICBtYXgtd2lkdGg6IDE4cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46IC4yN3JlbSAuN3JlbSAwIDA7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmNoZWNrYm94LWJ0bi5wcmlvMSB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWF1YnVybik7XFxufVxcblxcbi5jaGVja2JveC1idG4ucHJpbzIge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1zdW4pO1xcbn1cXG5cXG4uY2hlY2tib3gtYnRuLnByaW8zIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbWFyaW5lcik7XFxufVxcblxcbi5jaGVja2JveC1idG4ucHJpbzQge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS10cmFuc3BhcmVudDIpO1xcbn1cXG5cXG4uY2hlY2tib3gtYnRuOmhvdmVyLFxcbi5jaGVja2JveC1idG46Zm9jdXMtdmlzaWJsZSB7XFxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50MSk7XFxufVxcblxcbi5jaGVja2JveC1idG4gKyBzcGFuIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbGluZS1oZWlnaHQ6IDFyZW07XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBjb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQyKTtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIG1hcmdpbjogLS45cmVtIDAgMCAtMXJlbTsgICAgXFxufVxcblxcbi5jaGVja2JveC1idG46aG92ZXIgKyBzcGFuLFxcbi5jaGVja2JveC1idG46Zm9jdXMtdmlzaWJsZSArIHNwYW4ge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4uY2hlY2tib3gtYnRuOmFjdGl2ZSArIHNwYW57XFxuICAgIGNvbG9yOiB2YXIoLS1sYXVyZWwpO1xcbn1cXG5cXG4udG9kby10ZXh0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleDogMTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRvZG8tdGV4dCA+IGxhYmVsIHtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNHJlbTtcXG59XFxuXFxuLnRvZG8tdGV4dC1ub3RlIHtcXG4gICAgdGV4dC1pbmRlbnQ6IDFyZW07XFxuICAgIGZvbnQtc2l6ZTogLjlyZW07XFxuICAgIG1hcmdpbjogMCAwIC4yNXJlbSAwO1xcbn1cXG5cXG4udG9kby10ZXh0LW5vdGUsXFxuLnRvZG8tdGV4dC1ub3RlID4gc3BhbixcXG4udG9kby10ZXh0IHNtYWxsIHtcXG4gICAgY29sb3I6IGdyYXk7XFxufVxcblxcbi50b2RvLXRleHQtbm90ZSA+IHNwYW4sXFxuZW0sXFxuZW0gPiBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAuOXJlbSFpbXBvcnRhbnQ7XFxufVxcblxcbi50b2RvLXRleHQgc21hbGw6aG92ZXIsXFxuLnRvZG8tdGV4dCBzbWFsbDpmb2N1cy12aXNpYmxlIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbmVtIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5zY2hlZC1kdWUge1xcbiAgICBjb2xvcjogdmFyKC0tYXVidXJuKTtcXG59XFxuXFxuLnNjaGVkLXRvZGF5IHtcXG4gICAgY29sb3I6IHZhcigtLWxhdXJlbCk7XFxufVxcblxcbi5zY2hlZC11cGNvbSB7XFxuICAgIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xcbn1cXG5cXG4udG9kby10b29scy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIG1hcmdpbjogLTIwcHggMCAwIDA7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLnRvZG8tdG9vbHMtY29udGFpbmVyICoge1xcbiAgICBjb2xvcjogZ3JheTtcXG59XFxuXFxuLnRvb2wtc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4udG9kbzpob3ZlciAudG9kby10b29scy1jb250YWluZXIsXFxuLnRvZG86Zm9jdXMtd2l0aGluIC50b2RvLXRvb2xzLWNvbnRhaW5lciB7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbmJ1dHRvbjpob3ZlcixcXG5idXR0b246Zm9jdXMtdmlzaWJsZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50Mik7XFxufVxcblxcbmJ1dHRvbjpmb2N1cy12aXNpYmxlIHtcXG4gICAgb3V0bGluZTogYXV0bztcXG59XFxuXFxuLmFkZC10YXNrLWJ0biB7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGNvbG9yOiBncmF5O1xcbn1cXG5cXG4uYWRkLXRhc2stYnRuICoge1xcbiAgICBwYWRkaW5nOiAuMXJlbTtcXG59XFxuXFxuLmFkZC10YXNrLWJ0biBzcGFuIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBjb2xvcjogdmFyKC0tYXVidXJuKTtcXG59XFxuXFxuLmFkZC10YXNrLWJ0bjpob3ZlcixcXG4uYWRkLXRhc2stYnRuOmZvY3VzLXZpc2libGUsXFxuLmFkZC10YXNrLWJ0biBzcGFuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5hZGQtdGFzay1idG46aG92ZXIgc3BhbixcXG4uYWRkLXRhc2stYnRuOmZvY3VzLXZpc2libGUgc3BhbiB7XFxuICAgIGNvbG9yOiB2YXIoLS1tYXJpbmVyKTtcXG59XFxuXFxuLmVtcHR5LXN0YXRlLWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXg6IDE7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZW1wdHktc3RhdGUtZGl2IGltZyB7XFxuICAgIG1heC13aWR0aDogMTgwcHg7XFxuICAgIFxcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi5lbXB0eS1zdGF0ZS1kaXYgaDQge1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBjb2xvcjogZ3JheTtcXG59XFxuXFxuLmVtcHR5LXN0YXRlLWRpdiAqOm50aC1jaGlsZChuKzIpIHtcXG4gICAgbWFyZ2luOiAuMjVyZW0gMCAwIDA7XFxufVxcblxcbi5lbXB0eS1zdGF0ZS1kaXYgKjpudGgtY2hpbGQobisyKSxcXG4uY29udGFpbmVyIGZvb3RlciBwIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZW1wdHktc3RhdGUtZGl2IHAge1xcbiAgICBmb250LXNpemU6IC45cmVtO1xcbiAgICBjb2xvcjogZGFya2dyYXk7XFxufVxcblxcbi5jb250YWluZXIgZm9vdGVyIHtcXG4gICAgY29sb3I6IHZhcigtLWF1YnVybik7XFxuICAgIGZvbnQtc2l6ZTogLjlyZW0haW1wb3J0YW50O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogLjI1cmVtIDAgLjc1cmVtIDA7XFxufVxcblxcbi5jb250YWluZXIgZm9vdGVyIHNwYW4ge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW0haW1wb3J0YW50O1xcbn1cXG5cXG4uY29udGFpbmVyIGZvb3RlciBwIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNvbnRhaW5lcjpub3QoLmVtcHR5KSAuZW1wdHktc3RhdGUtZGl2LFxcbi5jb250YWluZXI6bm90KC5lbXB0eSkgZm9vdGVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmFkZC10YXNrLWRpdiB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRyYW5zcGFyZW50Mik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgcGFkZGluZzogMCAuNXJlbSAuNXJlbSAuNXJlbTtcXG4gICAgaGVpZ2h0OiA2OC40OHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG4uYWRkLXRhc2stZGl2ID4gKiB7XFxuICAgIG1hcmdpbi10b3A6IC41cmVtO1xcbn1cXG5cXG4uYWRkLXRhc2stZGl2IGlucHV0LFxcbi5xdWljay1hZGQtdG9kbyBpbnB1dCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogLjlyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0OTIpO1xcbn1cXG5cXG4uYWRkLXRhc2stYnRucy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5hZGQtdGFzay1idG5zLWNvbnRhaW5lciBkaXYgPiBidXR0b24ge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10cmFuc3BhcmVudDIpO1xcbiAgICBwYWRkaW5nOiAuMjVyZW07XFxufVxcblxcbi5hZGQtdGFzay1idG5zLWNvbnRhaW5lciBidXR0b24gPiBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAuOXJlbSFpbXBvcnRhbnQ7XFxufVxcblxcbi5hZGQtdGFzay1idG5zLWNvbnRhaW5lciA+IGJ1dHRvbjpudGgtY2hpbGQoMikgc3BhbiB7XFxuICAgIGNvbG9yOiB2YXIoLS1tYXJpbmVyKTtcXG59XFxuXFxuLnNjaGVkdWxlcixcXG4uY2FycmllciB7XFxuICAgIG1heC13aWR0aDogMjEwcHg7XFxuICAgIHdpZHRoOiAxMDAlOyAgICBcXG59XFxuXFxuLnNjaGVkdWxlcixcXG4uY2FycmllcixcXG4ubGFiZWxlcixcXG4ucHJpby1zZXR0ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodDkyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbjogMCAwIDAgMDtcXG4gICAgYm94LXNoYWRvdzogMCAxcHggOHB4IDAgcmdiKDAgMCAwIC8gOCUpLFxcbiAgICAgICAgMCAwIDFweCAwIHJnYigwIDAgMCAvIDMwJSk7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5zY2hlZHVsZXIgPiAqLFxcbi5jYXJyaWVyID4gKiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBwYWRkaW5nOiAuNXJlbSAuNXJlbSAuNXJlbSAuNXJlbTtcXG59XFxuXFxuLnNjaGVkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uc2NoZWQgc3BhbjpudGgtY2hpbGQoMikge1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgY29sb3I6IGdyYXk7XFxufVxcblxcbi5zY2hlZHVsZXIgaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xcbiAgICBvcGFjaXR5OiAuNDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2NoZWR1bGVyIGlucHV0W3R5cGU9XFxcImRhdGVcXFwiXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnNjaGVkdWxlciAuc2NoZWQtY3VzdG9tIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnNjaGVkdWxlciAuc2NoZWQtY3VzdG9tIGJ1dHRvbiB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRyYW5zcGFyZW50MSk7XFxufVxcblxcbi5zY2hlZHVsZXIgLnNjaGVkLWN1c3RvbSBidXR0b24gPiBzcGFuLFxcbi5jYXJyaWVyIHNwYW4sXFxuLmxhYmVsZXIgc3BhbixcXG4ucHJpby1zZXR0ZXIgc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogLjlyZW0haW1wb3J0YW50O1xcbn1cXG5cXG4ucHJpby1zZXR0ZXIgYnV0dG9uOmZpcnN0LWNoaWxkIHNwYW4ge1xcbiAgICBjb2xvcjogdmFyKC0tYXVidXJuKTtcXG59XFxuXFxuLnByaW8tc2V0dGVyIGJ1dHRvbjpudGgtY2hpbGQoMikgc3BhbiB7XFxuICAgIGNvbG9yOiB2YXIoLS1zdW4pO1xcbn1cXG5cXG4ucHJpby1zZXR0ZXIgYnV0dG9uOm50aC1jaGlsZCgzKSBzcGFuIHtcXG4gICAgY29sb3I6IHZhcigtLW1hcmluZXIpO1xcbn1cXG5cXG4ucHJpby1zZXR0ZXIgYnV0dG9uOm50aC1jaGlsZCg0KSBzcGFuIHtcXG4gICAgY29sb3I6IGdyYXk7XFxufVxcblxcbi5jYXJyaWVyIHtcXG4gICAgbWFyZ2luOiAwIDAgMCAtLjdyZW07XFxuICAgIG1heC13aWR0aDogMTYwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY2FycmllciBidXR0b24sXFxuLmxhYmVsZXIgYnV0dG9uLFxcbi5wcmlvLXNldHRlciBidXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2FycmllciB1LFxcbi5sYWJlbGVyIHUsXFxuLnByaW8tc2V0dGVyIHUge1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgbWFyZ2luOiAwIDAgMCAuMjVyZW07XFxufVxcblxcbi5sYWJlbGVyLFxcbi5wcmlvLXNldHRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi5sYWJlbGVyIGRpdixcXG4ucHJpby1zZXR0ZXIgZGl2IHtcXG4gICAgbWF4LXdpZHRoOiAxNjBweDtcXG4gICAgd2lkdGg6IDEwMCU7IFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW46IDAgMS44cmVtIDAgYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQ5Mik7XFxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDhweCAwIHJnYigwIDAgMCAvIDglKSxcXG4gICAgICAgIDAgMCAxcHggMCByZ2IoMCAwIDAgLyAzMCUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi5wcmlvLXNldHRlciBkaXYge1xcbiAgICBtYXJnaW46IDAgMCAwIGF1dG87XFxuICAgIG1heC13aWR0aDogODhweDtcXG59XFxuXFxuLnByaW8tc2V0dGVyIHUge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5sYWJlbGVyIGJ1dHRvbixcXG4ucHJpby1zZXR0ZXIgYnV0dG9uIHtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgcGFkZGluZzogLjVyZW07XFxufVxcblxcbi5zY2hlZHVsZXIgLnNjaGVkLWN1c3RvbSBidXR0b246aG92ZXIgPiBzcGFuLFxcbi5zY2hlZHVsZXIgLnNjaGVkLWN1c3RvbSBidXR0b246Zm9jdXMtdmlzaWJsZSA+IHNwYW4ge1xcbiAgICBjb2xvcjogdmFyKC0tbGF1cmVsKTtcXG59XFxuXFxuLmFkZC10YXNrLWRpdi5kaXNwbGF5LXNjaGVkdWxlciAuc2NoZWR1bGVyIHtcXG4gICAgZGlzcGxheTogaW5oZXJpdDtcXG59XFxuXFxuLmFkZC10YXNrLWRpdi5kaXNwbGF5LWNhcnJpZXIgLmNhcnJpZXIsXFxuLmFkZC10YXNrLWRpdi5kaXNwbGF5LWxhYmVsZXIgLmxhYmVsZXIsXFxuLmFkZC10YXNrLWRpdi5kaXNwbGF5LXByaW8tc2V0dGVyIC5wcmlvLXNldHRlciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uYWRkLXRhc2stZGl2IC5zZWxlY3RlZCxcXG4uYWRkLXRhc2stZGl2IC5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudDEpO1xcbn1cXG5cXG4uYWRkLXRhc2stbWFpbi1idG5zLWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IC41cmVtIDAgLjVyZW0gMDtcXG59XFxuXFxuLmFkZC10YXNrLW1haW4tYnRucy1jb250YWluZXIgYnV0dG9uIHtcXG4gICAgcGFkZGluZzogLjI1cmVtO1xcbn1cXG5cXG4uYWRkLXRhc2stbWFpbi1idG5zLWNvbnRhaW5lciBidXR0b246Zmlyc3QtY2hpbGQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWxpYnUpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10cmFuc3BhcmVudDIpO1xcbn1cXG5cXG4uY29udGFpbmVyLmFkZC10cmlnZ2VyZWQgLmFkZC10YXNrLWJ0bi1kaXYge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY29udGFpbmVyOm5vdCguYWRkLXRyaWdnZXJlZCkgLmFkZC10YXNrLWRpdixcXG4uY29udGFpbmVyOm5vdCguYWRkLXRyaWdnZXJlZCkgLmFkZC10YXNrLW1haW4tYnRucy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucXVpY2stYWRkLXRvZG8sXFxuLnByb2plY3QtY3JlYXRvcixcXG4ubGFiZWwtY3JlYXRvcixcXG4udG9kby1lZGl0b3IsXFxuLnByb2plY3QtZWRpdG9yLFxcbi5sYWJlbC1lZGl0b3Ige1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50Mik7XFxuICAgIHotaW5kZXg6IDk5OTtcXG59XFxuXFxuLnF1aWNrLWFkZC10b2RvID4gKixcXG4ucXVpY2stYWRkLXRvZG8gaW5wdXQge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnF1aWNrLWFkZC10b2RvID4gZGl2IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQ5Mik7XFxuICAgIG1heC13aWR0aDogNDgwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIHBhZGRpbmc6IC41cmVtIC41cmVtIC41cmVtIC41cmVtO1xcbn1cXG5cXG4ucXVpY2stYWRkLXRvZG8gPiBkaXYgPiAqOm5vdCg6Zmlyc3QtY2hpbGQpIHtcXG4gICAgbWFyZ2luOiAuNXJlbSAwIDAgMDtcXG59XFxuXFxuLnF1aWNrLWFkZC10b2RvIGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IC4yNXJlbTtcXG59XFxuXFxuLnF1aWNrLWFkZC10b2RvIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1hcmluZXIpO1xcbn1cXG5cXG4ucXVpY2stYWRkLXRvZG8gYnV0dG9uOmhvdmVyLFxcbi5xdWljay1hZGQtdG9kbyBidXR0b246Zm9jdXMtdmlzaWJsZSB7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodDkyKTtcXG59XFxuXFxuLnF1aWNrLWFkZC10b2RvLm9uIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLm5vdGlmaWNhdGlvbnMge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGluc2V0OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgei1pbmRleDogOTk5O1xcbn1cXG5cXG4ubm90aWYtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQ5Mik7XFxuICAgIG1hcmdpbjogNDBweCAwIGF1dG8gYXV0bztcXG4gICAgcGFkZGluZzogLjVyZW07XFxuICAgIG1heC13aWR0aDogNDIwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtaGVpZ2h0OiAzMjBweDtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBib3gtc2hhZG93OiAwIDFweCA4cHggMCByZ2IoMCAwIDAgLyA4JSksXFxuICAgICAgICAwIDAgMXB4IDAgcmdiKDAgMCAwIC8gMzAlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4ubm90aWYtY29udGFpbmVyIG5hdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAgMCAuMjVyZW0gMDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXRyYW5zcGFyZW50Mik7XFxufVxcblxcbi5ub3RpZi1jb250YWluZXIgbmF2ID4gKiB7XFxuICAgIGZvbnQtc2l6ZTogLjlyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm5vdGlmLWNvbnRhaW5lciBidXR0b246Zmlyc3Qtb2YtdHlwZXtcXG4gICAgbWFyZ2luOiAwIDAgMCAuNXJlbTtcXG59XFxuXFxuLm5hdi1idG4tbm90aWZpY2F0aW9uIHNtYWxsIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcXG4gICAgY29sb3I6IHZhcigtLWF1YnVybik7XFxuICAgIG1hcmdpbi1sZWZ0OiAtLjg1cmVtOyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFsaWJ1KTtcXG4gICAgcGFkZGluZzogMCAxcHg7XFxufVxcblxcbi5uYXYtYnRuLW5vdGlmaWNhdGlvbjpob3ZlciBzbWFsbCxcXG4ubmF2LWJ0bi1ub3RpZmljYXRpb246Zm9jdXMtdmlzaWJsZSBzbWFsbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50IWltcG9ydGFudDtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0OTIpIWltcG9ydGFudDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5yZWFkLWFsbC1idG4ge1xcbiAgICBtYXJnaW46IDAgMCAwIGF1dG8haW1wb3J0YW50O1xcbn1cXG5cXG4ucmVhZC1hbGwtYnRuIHNwYW4ge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLm5vdGlmLW91dHB1dCB7XFxuICAgIG1hcmdpbjogMCAuMjVyZW07XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIC8qIG92ZXJmbG93LXg6IGhpZGRlbjsgKi9cXG59XFxuXFxuLm5vdGlmLW91dHB1dCA+ICoge1xcbiAgICBtYXJnaW46IC4yNXJlbSAwIDAgMDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXRyYW5zcGFyZW50MSk7XFxuICAgIHBhZGRpbmc6IDAgMCAuMjVyZW0gMDtcXG4gICAgXFxufVxcblxcbi5ub3RpZiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5ub3RpZiA+ICosXFxuLm5vdGlmLWV4dHJhIGJ1dHRvbiBzcGFue1xcbiAgICBmb250LXNpemU6IC45cmVtOyAgXFxufVxcblxcbi5ub3RpZiA+IHNwYW4ge1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuXFxuLm5vdGlmLWV4dHJhIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubm90aWYgc21hbGwge1xcbiAgICBjb2xvcjogdmFyKC0tYXVidXJuKTtcXG59XFxuXFxuLm5vdGlmaWNhdGlvbnMub24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcblxcbn1cXG5cXG4uYXBwLnNlYXJjaCAuYWRkLXRhc2stYnRuLWRpdntcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnByb2plY3QtY3JlYXRvciA+IGRpdixcXG4ubGFiZWwtY3JlYXRvciA+IGRpdixcXG4udG9kby1lZGl0b3IgPiBkaXYsXFxuLnByb2plY3QtZWRpdG9yID4gZGl2LFxcbi5sYWJlbC1lZGl0b3IgPiBkaXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodDkyKTtcXG4gICAgbWF4LXdpZHRoOiA0MjBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuLnByb2plY3QtY3JlYXRvciA+IGRpdiA+ICosXFxuLmxhYmVsLWNyZWF0b3IgPiBkaXYgPiAqLFxcbi50b2RvLWVkaXRvciA+IGRpdiA+ICosXFxuLnByb2plY3QtZWRpdG9yID4gZGl2ID4gKixcXG4ubGFiZWwtZWRpdG9yID4gZGl2ID4gKiB7XFxuICAgIHBhZGRpbmc6IC41cmVtO1xcbiAgICBtYXJnaW46IDAgMCAuMjVyZW0gMDtcXG59XFxuXFxuLnByb2plY3QtY3JlYXRvciA+IGRpdiA+ICo6Zmlyc3QtY2hpbGQsIFxcbi5wcm9qZWN0LWNyZWF0b3IgPiBkaXYgPiAqOm50aC1jaGlsZCgyKSxcXG4ubGFiZWwtY3JlYXRvciA+IGRpdiA+ICo6Zmlyc3QtY2hpbGQsIFxcbi5sYWJlbC1jcmVhdG9yID4gZGl2ID4gKjpudGgtY2hpbGQoMiksXFxuLnRvZG8tZWRpdG9yID4gZGl2ID4gKjpmaXJzdC1jaGlsZCwgXFxuLnRvZG8tZWRpdG9yID4gZGl2ID4gKjpudGgtY2hpbGQoMiksXFxuLnByb2plY3QtZWRpdG9yID4gZGl2ID4gKjpmaXJzdC1jaGlsZCxcXG4ucHJvamVjdC1lZGl0b3IgPiBkaXYgPiAqOm50aC1jaGlsZCgyKSxcXG4ubGFiZWwtZWRpdG9yID4gZGl2ID4gKjpmaXJzdC1jaGlsZCxcXG4ubGFiZWwtZWRpdG9yID4gZGl2ID4gKjpudGgtY2hpbGQoMikge1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tdHJhbnNwYXJlbnQxKTtcXG59XFxuXFxuLnByb2plY3QtY3JlYXRvciA+IGRpdixcXG4ucHJvamVjdC1pbnB1dCxcXG4ubGFiZWwtY3JlYXRvciA+IGRpdixcXG4ubGFiZWwtaW5wdXQsXFxuLnRvZG8tZWRpdG9yID4gZGl2LFxcbi50b2RvLWVkaXRvci1pbnB1dCxcXG4ucHJvamVjdC1lZGl0b3IgPiBkaXYsXFxuLnByb2plY3QtZWRpdG9yLWlucHV0LFxcbi5sYWJlbC1lZGl0b3IgPiBkaXYsXFxuLmxhYmVsLWVkaXRvci1pbnB1dCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5wcm9qZWN0LWlucHV0ID4gKixcXG4ubGFiZWwtaW5wdXQgPiAqLFxcbi50b2RvLWVkaXRvci1pbnB1dCA+ICosXFxuLnByb2plY3QtZWRpdG9yLWlucHV0ID4gKixcXG4ubGFiZWwtZWRpdG9yLWlucHV0ID4gKiB7XFxuICAgIG1hcmdpbjogMCAwIC4yNXJlbSAwO1xcbn1cXG5cXG4ucHJvamVjdC1pbnB1dCBpbnB1dCxcXG4ubGFiZWwtaW5wdXQgaW5wdXQsXFxuLnRvZG8tZWRpdG9yLWlucHV0IGlucHV0LFxcbi50b2RvLWVkaXRvci1pbnB1dCBzZWxlY3QsXFxuLnByb2plY3QtZWRpdG9yLWlucHV0IGlucHV0LFxcbi5sYWJlbC1lZGl0b3ItaW5wdXQgaW5wdXQge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgcGFkZGluZzogLjI1cmVtO1xcbn1cXG5cXG4udG9kby1lZGl0b3ItaW5wdXQge1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4udG9kby1lZGl0b3ItaW5wdXQge1xcbiAgICBwYWRkaW5nLXRvcDogMCFpbXBvcnRhbnQ7XFxufVxcblxcbi50b2RvLWVkaXRvci1pbnB1dCBsYWJlbCB7XFxuICAgIG1hcmdpbjogLjI1cmVtIDAgLjFyZW0gMDtcXG59XFxuXFxuLnByb2plY3QtYnV0dG9ucyxcXG4ubGFiZWwtYnV0dG9ucyxcXG4udG9kby1lZGl0b3ItYnV0dG9ucyxcXG4udXBkYXRlLXByb2plY3QtYnV0dG9ucyxcXG4udXBkYXRlLWxhYmVsLWJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyAgICBcXG4gICAgbWFyZ2luLWJvdHRvbTogMCFpbXBvcnRhbnQ7XFxufVxcblxcbi5wcm9qZWN0LWNyZWF0b3IgYnV0dG9uLFxcbi5sYWJlbC1jcmVhdG9yIGJ1dHRvbixcXG4udG9kby1lZGl0b3IgYnV0dG9uLFxcbi5wcm9qZWN0LWVkaXRvciBidXR0b24sXFxuLmxhYmVsLWVkaXRvciBidXR0b24ge1xcbiAgICBwYWRkaW5nOiAuMjVyZW07XFxuICAgIG1hcmdpbjogMCAwIDAgLjI1cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudDEpO1xcbn1cXG5cXG4ucHJvamVjdC1jcmVhdG9yIGJ1dHRvbjpmaXJzdC1jaGlsZCxcXG4ubGFiZWwtY3JlYXRvciBidXR0b246Zmlyc3QtY2hpbGQsXFxuLnRvZG8tZWRpdG9yIGJ1dHRvbjpmaXJzdC1jaGlsZCxcXG4ucHJvamVjdC1lZGl0b3IgYnV0dG9uOmZpcnN0LWNoaWxkLFxcbi5sYWJlbC1lZGl0b3IgYnV0dG9uOmZpcnN0LWNoaWxkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFyaW5lcik7XFxufVxcblxcbi51cGRhdGUtcHJvamVjdC1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoMyksXFxuLnVwZGF0ZS1sYWJlbC1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoMykge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hdWJ1cm4pO1xcbn1cXG5cXG4ucHJvamVjdC1jcmVhdG9yLm9uLFxcbi5sYWJlbC1jcmVhdG9yLm9uLFxcbi50b2RvLWVkaXRvci5vbixcXG4ucHJvamVjdC1lZGl0b3Iub24sXFxuLmxhYmVsLWVkaXRvci5vbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5wcm9qZWN0LWlucHV0IGlucHV0OmZvY3VzLXZpc2libGUsXFxuLmxhYmVsLWlucHV0IGlucHV0OmZvY3VzLXZpc2libGUsXFxuLnRvZG8tZWRpdG9yLWlucHV0IGlucHV0OmZvY3VzLXZpc2libGUsXFxuLnByb2plY3QtZWRpdG9yLWlucHV0IGlucHV0OmZvY3VzLXZpc2libGUsXFxuLmxhYmVsLWVkaXRvci1pbnB1dCBpbnB1dDpmb2N1cy12aXNpYmxlIHtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHZhcigtLXRyYW5zcGFyZW50Mik7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcXG4gICAgLm5hdi1jb21wIHtcXG4gICAgICAgIHBhZGRpbmc6IC41cmVtIC41cmVtIC41cmVtIC41cmVtO1xcbiAgICB9XFxuICAgIC5pbmZvLWNvbXAge1xcbiAgICAgICAgcGFkZGluZzogMXJlbSAuMjVyZW0gLjI1cmVtIC4yNXJlbTtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHotaW5kZXg6IDEwMDA7XFxuICAgICAgICB0b3A6IDQ3LjU5cHg7XFxuICAgICAgICBib3R0b206IDA7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuICAgIC5pbmZvLWNvbXAuc2hvdy1uYXYge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgfVxcbiAgICAuaW5mby1jb21wID4gKiB7XFxuICAgICAgICB3aWR0aDogMjk0cHg7XFxuICAgIH1cXG4gICAgLmNvbnRhaW5lciA+IGhlYWRlciB7XFxuICAgICAgICBwYWRkaW5nOiAxcmVtIDAgLjVyZW0gMDtcXG4gICAgfVxcbiAgICAuY29udGFpbmVyIHtcXG4gICAgICAgIHBhZGRpbmc6IDAgMXJlbSAwIDFyZW07XFxuICAgIH1cXG4gICAgLnF1aWNrLWFkZC10b2RvID4gZGl2IHtcXG4gICAgICAgIG1heC13aWR0aDogNDAwcHg7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTBweCkge1xcbiAgICAuaW5mby1jb21wID4gKiB7XFxuICAgICAgICB3aWR0aDogMjQycHg7XFxuICAgIH1cXG4gICAgLnNlYXJjaC1pbnB1dCB7XFxuICAgICAgICB3aWR0aDogMTgwcHg7XFxuICAgIH1cXG4gICAgLnNlYXJjaC1pbnB1dDpmb2N1cyB7XFxuICAgICAgICB3aWR0aDogMTgwcHg7XFxuICAgIH1cXG4gICAgLnF1aWNrLWFkZC10b2RvID4gZGl2IHtcXG4gICAgICAgIG1heC13aWR0aDogMzAwcHg7XFxuICAgIH1cXG4gICAgLm5vdGlmLWNvbnRhaW5lciB7XFxuICAgICAgICBtYXgtd2lkdGg6IDMxMHB4O1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIxcHgpIHtcXG4gICAgLnNlYXJjaC1pbnB1dCB7XFxuICAgICAgICBtYXgtd2lkdGg6IDEzNXB4O1xcbiAgICB9XFxuICAgIC5zZWFyY2gtaW5wdXQ6Zm9jdXMge1xcbiAgICAgICAgbWF4LXdpZHRoOiAxMzVweDtcXG4gICAgfVxcbiAgICAucXVpY2stYWRkLXRvZG8gPiBkaXYge1xcbiAgICAgICAgbWF4LXdpZHRoOiAyNzBweDtcXG4gICAgfVxcbiAgICAubm90aWYtY29udGFpbmVyIHtcXG4gICAgICAgIG1heC13aWR0aDogMjcwcHg7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNDIwcHgpIHtcXG4gICAgLnRvZG8tZWRpdG9yLWlucHV0IHtcXG4gICAgICAgIG1heC1oZWlnaHQ6IDE4MHB4O1xcbiAgICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSwwQkFBMEI7SUFDMUIsMEJBQTBCO0lBQzFCLHVCQUF1QjtJQUN2Qiw0QkFBNEI7SUFDNUIsMEJBQTBCO0lBQzFCLDZCQUE2QjtJQUM3Qiw2QkFBNkI7SUFDN0IsNEJBQTRCO0lBQzVCLHdCQUF3QjtJQUN4Qiw4QkFBOEI7SUFDOUIsOEJBQThCOztJQUU5Qiw0QkFBNEI7SUFDNUIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7O0lBRUksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1DQUFtQztJQUNuQyxzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsNkJBQTZCO0FBQ2pDOztBQUVBOztJQUVJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7O0lBRUksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTs7OztJQUlJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixXQUFXO0lBQ1gsOEJBQThCO0lBQzlCLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFlBQVk7SUFDWixtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsVUFBVTtBQUNkOztBQUVBO0lB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O1FBQ0ksdUJBQXVCO0lBQzNCO0lBQ0E7UUFDSSxzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLWxpZ2h0OTI6IGhzbCgwLCAwJSwgOTIlKTtcXG4gICAgLS1saWdodDg4OiBoc2woMCwgMCUsIDg4JSk7XFxuICAgIC0tZGFyazogaHNsKDAsIDAlLCAxMiUpO1xcbiAgICAtLW1hbGlidTogaHNsKDE5MiwgOTMlLCA3MiUpO1xcbiAgICAtLWF1YnVybjogaHNsKDAsIDc1JSwgNjUlKTtcXG4gICAgLS1tYXJpbmVyOiBoc2woMjE2LCA3NSUsIDUxJSk7XFxuICAgIC0tbGF1cmVsOiBoc2woMTIwLCAxMDAlLCAyNSUpO1xcbiAgICAtLXB1cnBsZTogaHNsKDI2NCwgNjElLCA0NyUpO1xcbiAgICAtLXN1bjogaHNsKDM0LCA5MyUsIDQ4JSk7XFxuICAgIC0tdHJhbnNwYXJlbnQxOiByZ2JhKDAsMCwwLC4xKTtcXG4gICAgLS10cmFuc3BhcmVudDI6IHJnYmEoMCwwLDAsLjIpO1xcblxcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWxpZ2h0OTIpO1xcbiAgICAtLWZvcmVncm91bmQ6IHZhcigtLW1hbGlidSk7XFxufVxcblxcbiosICo6YmVmb3JlLCAqOmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwOyAgXFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG4gICAgZm9udC1mYW1pbHk6c2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHZhcigtLWRhcmspO1xcbn1cXG5cXG5idXR0b24sXFxuLnNlYXJjaC1pbnB1dCB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBmb250LWZhbWlseTpzYW5zLXNlcmlmO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBwYWRkaW5nOiAuMTI1cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tZGFyayk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG5idXR0b24sXFxuLmljLWRpdiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuc3Bhbi5taWQge1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG5zcGFuLFxcbmgxIHtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5hcHAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi5uYXYtY29tcCAsXFxuLm5jLWxlZnQsXFxuLnNlYXJjaC1kaXYsXFxuLm5jLXJpZ2h0IHtcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxufVxcblxcbi5uYXYtY29tcCB7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IC41cmVtIDNyZW0gLjVyZW0gM3JlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9yZWdyb3VuZCk7XFxufVxcblxcbi5uYy1sZWZ0ID4gKiB7XFxuICAgIG1hcmdpbjogMCAuMjVyZW0gMCAwO1xcbn1cXG5cXG4ubmMtcmlnaHQgPiAqIHtcXG4gICAgbWFyZ2luOiAwIDAgMCAuMjVyZW07XFxufVxcblxcbi5uYy1yaWdodCBidXR0b246Zmlyc3QtY2hpbGQge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi5zZWFyY2gtZGl2IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb3JlZ3JvdW5kKTtcXG59XFxuXFxuLnNlYXJjaC1kaXYgPiBzcGFuOmZpcnN0LWNoaWxkIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBjdXJzb3I6IHRleHQ7XFxuICAgIG1hcmdpbjogLjFyZW07XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG4uc2VhcmNoLWRpdiBidXR0b24ge1xcbiAgICBtYXJnaW46IC4ycmVtIDAgLjJyZW0gLTEuNXJlbTtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc2VhcmNoLWRpdiBidXR0b246aG92ZXIsXFxuLnNlYXJjaC1kaXYgYnV0dG9uOmZvY3VzLXZpc2libGUge1xcbiAgICBjb2xvcjogdmFyKC0tYXVidXJuKTtcXG59XFxuXFxuLnNlYXJjaC1pbnB1dCB7XFxuICAgIHBhZGRpbmc6IDAgMS42cmVtIDAgMS44cmVtO1xcbiAgICBtYXJnaW4tbGVmdDogLTEuOXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQxKTtcXG59XFxuXFxuLnNlYXJjaC1pbnB1dDo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbiB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLnNlYXJjaC1pbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSArIGJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uc2VhcmNoLWRpdjpmb2N1cy13aXRoaW4gLnNlYXJjaC1pbnB1dCxcXG4uc2VhcmNoLWRpdjpob3ZlciAuc2VhcmNoLWlucHV0LFxcbi5zZWFyY2gtaW5wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bil7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0OTIpO1xcbn1cXG5cXG4uc2VhcmNoLWRpdiBidXR0b24gc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmFwcC1ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleDogMTtcXG4gICAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gNDYuNTlweCk7XFxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uaW5mby1jb21wIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMnJlbSAuMjVyZW0gMCAyLjhyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ODgpO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4uaW5mby1jb21wID4gKiB7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGZvbnQtc2l6ZTogLjlyZW07XFxuICAgIHdpZHRoOiAyOTRweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4uaW5mby1jb21wID4gKiA+IHNhbXAge1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIG9wYWNpdHk6IC41O1xcbiAgICBtYXJnaW46IDRweCAxcmVtIDRweCAwO1xcbn1cXG5cXG4uaWMtZGl2IHtcXG4gICAgbWFyZ2luOiAuMjVyZW0gMCAwIDA7XFxufVxcblxcbi5pbmZvLWNvbXAgPiBkaXY6Zmlyc3Qtb2YtdHlwZXtcXG4gICAgbWFyZ2luOiAxcmVtIDAgMCAwO1xcbn1cXG5cXG4uaWMtc3BhbiB7XFxuICAgIG1hcmdpbjogMCAuMjVyZW0gMCAwO1xcbn1cXG5cXG4uaW5mby1jb21wID4gYnV0dG9uOmZpcnN0LWNoaWxkIHNwYW4ge1xcbiAgICBjb2xvcjogdmFyKC0tbWFyaW5lcik7XFxufVxcblxcbi5pbmZvLWNvbXAgPiBidXR0b246bnRoLWNoaWxkKDIpIHNwYW4ge1xcbiAgICBjb2xvcjogdmFyKC0tbGF1cmVsKTtcXG59XFxuXFxuLmluZm8tY29tcCA+IGJ1dHRvbjpudGgtY2hpbGQoMykgc3BhbiB7XFxuICAgIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xcbn1cXG5cXG4uaW5mby1jb21wIC5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWxpYnUpO1xcbn1cXG5cXG4ub3BhIHtcXG4gICAgb3BhY2l0eTogLjU7XFxufVxcblxcbi5pYy1hZGQtYnRuIHtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBtYXJnaW46IDBweCAuNXJlbSAwIDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5pYy1hZGQtYnRuOmhvdmVyICsgc3Ryb25nLFxcbi5pYy1hZGQtYnRuOmZvY3VzLXZpc2libGUgKyBzdHJvbmcge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgdGV4dC11bmRlcmxpbmUtb2Zmc2V0OiAzMCU7XFxufVxcblxcbi5pbmZvLWNvbXA6Zm9jdXMtd2l0aGluIC5pYy1hZGQtYnRuLFxcbi5pbmZvLWNvbXA6aG92ZXIgLmljLWFkZC1idG57XFxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XFxufVxcblxcbi5pYy1kaXYgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaWMtZGl2ID4gZGl2LnNob3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uaWMtcHJvamVjdCA+IHNwYW4ucm90YXRlLFxcbi5pYy1sYWJlbCA+IHNwYW4ucm90YXRlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG5cXG5cXG4uc2hvdyB7XFxuICAgIG1hcmdpbjogLjc1cmVtIDAgMCAwO1xcbn1cXG5cXG4uc2hvdyA+IGRpdiB7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IC41cmVtIC41cmVtIC41cmVtIC41cmVtO1xcbiAgICBoZWlnaHQ6IDM0cHg7XFxuICAgIGZvbnQtc2l6ZTogLjlyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuc3Bhbi51bmlxdWUge1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBtYXJnaW4tcmlnaHQ6IC4ycmVtO1xcbn1cXG5cXG4uc2hvdyBidXR0b24ge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5zaG93ID4gZGl2OmhvdmVyLFxcbi5zaG93ID4gZGl2OmZvY3VzLXZpc2libGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudDIpO1xcbn1cXG5cXG4uc2hvdyA+IGRpdjpob3ZlciBidXR0b24sXFxuLnNob3cgPiBkaXY6Zm9jdXMtdmlzaWJsZSBidXR0b24sXFxuLnNob3cgPiBkaXY6Zm9jdXMtd2l0aGluIGJ1dHRvbntcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5zaG93IGJ1dHRvbjpob3ZlcixcXG4uc2hvdyBidXR0b246Zm9jdXMtdmlzaWJsZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50IWltcG9ydGFudDtcXG59XFxuXFxuLmJ1bGxldCB7XFxuICAgIG1pbi13aWR0aDogMTBweDtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIG1hcmdpbjogMCAuN3JlbSAwIC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudDIpO1xcbn1cXG5cXG4udGFnIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSguOCk7XFxuICAgIG1hcmdpbjogMCAuMnJlbSAwIC4ycmVtO1xcbiAgICBjb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQyKTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXg6IDE7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgcGFkZGluZzogMCAycmVtIDAgMnJlbTtcXG5cXG59XFxuXFxuLmNvbnRhaW5lciA+ICoge1xcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNvbnRhaW5lciA+IGZvb3RlciB7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxufVxcblxcbi5jb250YWluZXIgPiBoZWFkZXIge1xcbiAgICBwYWRkaW5nOiAycmVtIDAgMXJlbSAwO1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB0b3A6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0OTIpO1xcbiAgICB6LWluZGV4OiAzO1xcbn1cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4udG9kbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDJweCAwO1xcbiAgICBtYXJnaW46IC41cmVtIDAgLjVyZW0gMDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tdHJhbnNwYXJlbnQxKTtcXG59XFxuXFxuLnRvZG8sXFxuLnRvZG8gKiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNoZWNrYm94LWJ0biB7IFxcbiAgICBoZWlnaHQ6IDE4cHg7XFxuICAgIG1heC13aWR0aDogMThweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogLjI3cmVtIC43cmVtIDAgMDtcXG4gICAgei1pbmRleDogMjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uY2hlY2tib3gtYnRuLnByaW8xIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYXVidXJuKTtcXG59XFxuXFxuLmNoZWNrYm94LWJ0bi5wcmlvMiB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXN1bik7XFxufVxcblxcbi5jaGVja2JveC1idG4ucHJpbzMge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1tYXJpbmVyKTtcXG59XFxuXFxuLmNoZWNrYm94LWJ0bi5wcmlvNCB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXRyYW5zcGFyZW50Mik7XFxufVxcblxcbi5jaGVja2JveC1idG46aG92ZXIsXFxuLmNoZWNrYm94LWJ0bjpmb2N1cy12aXNpYmxlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQxKTtcXG59XFxuXFxuLmNoZWNrYm94LWJ0biArIHNwYW4ge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBsaW5lLWhlaWdodDogMXJlbTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGNvbG9yOiB2YXIoLS10cmFuc3BhcmVudDIpO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgbWFyZ2luOiAtLjlyZW0gMCAwIC0xcmVtOyAgICBcXG59XFxuXFxuLmNoZWNrYm94LWJ0bjpob3ZlciArIHNwYW4sXFxuLmNoZWNrYm94LWJ0bjpmb2N1cy12aXNpYmxlICsgc3BhbiB7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi5jaGVja2JveC1idG46YWN0aXZlICsgc3BhbntcXG4gICAgY29sb3I6IHZhcigtLWxhdXJlbCk7XFxufVxcblxcbi50b2RvLXRleHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiAxO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udG9kby10ZXh0ID4gbGFiZWwge1xcbiAgICBsaW5lLWhlaWdodDogMS40cmVtO1xcbn1cXG5cXG4udG9kby10ZXh0LW5vdGUge1xcbiAgICB0ZXh0LWluZGVudDogMXJlbTtcXG4gICAgZm9udC1zaXplOiAuOXJlbTtcXG4gICAgbWFyZ2luOiAwIDAgLjI1cmVtIDA7XFxufVxcblxcbi50b2RvLXRleHQtbm90ZSxcXG4udG9kby10ZXh0LW5vdGUgPiBzcGFuLFxcbi50b2RvLXRleHQgc21hbGwge1xcbiAgICBjb2xvcjogZ3JheTtcXG59XFxuXFxuLnRvZG8tdGV4dC1ub3RlID4gc3BhbixcXG5lbSxcXG5lbSA+IHNwYW4ge1xcbiAgICBmb250LXNpemU6IC45cmVtIWltcG9ydGFudDtcXG59XFxuXFxuLnRvZG8tdGV4dCBzbWFsbDpob3ZlcixcXG4udG9kby10ZXh0IHNtYWxsOmZvY3VzLXZpc2libGUge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuZW0ge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnNjaGVkLWR1ZSB7XFxuICAgIGNvbG9yOiB2YXIoLS1hdWJ1cm4pO1xcbn1cXG5cXG4uc2NoZWQtdG9kYXkge1xcbiAgICBjb2xvcjogdmFyKC0tbGF1cmVsKTtcXG59XFxuXFxuLnNjaGVkLXVwY29tIHtcXG4gICAgY29sb3I6IHZhcigtLXB1cnBsZSk7XFxufVxcblxcbi50b2RvLXRvb2xzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgbWFyZ2luOiAtMjBweCAwIDAgMDtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4udG9kby10b29scy1jb250YWluZXIgKiB7XFxuICAgIGNvbG9yOiBncmF5O1xcbn1cXG5cXG4udG9vbC1zcGFuIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi50b2RvOmhvdmVyIC50b2RvLXRvb2xzLWNvbnRhaW5lcixcXG4udG9kbzpmb2N1cy13aXRoaW4gLnRvZG8tdG9vbHMtY29udGFpbmVyIHtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuYnV0dG9uOmhvdmVyLFxcbmJ1dHRvbjpmb2N1cy12aXNpYmxlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQyKTtcXG59XFxuXFxuYnV0dG9uOmZvY3VzLXZpc2libGUge1xcbiAgICBvdXRsaW5lOiBhdXRvO1xcbn1cXG5cXG4uYWRkLXRhc2stYnRuIHtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgY29sb3I6IGdyYXk7XFxufVxcblxcbi5hZGQtdGFzay1idG4gKiB7XFxuICAgIHBhZGRpbmc6IC4xcmVtO1xcbn1cXG5cXG4uYWRkLXRhc2stYnRuIHNwYW4ge1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGNvbG9yOiB2YXIoLS1hdWJ1cm4pO1xcbn1cXG5cXG4uYWRkLXRhc2stYnRuOmhvdmVyLFxcbi5hZGQtdGFzay1idG46Zm9jdXMtdmlzaWJsZSxcXG4uYWRkLXRhc2stYnRuIHNwYW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmFkZC10YXNrLWJ0bjpob3ZlciBzcGFuLFxcbi5hZGQtdGFzay1idG46Zm9jdXMtdmlzaWJsZSBzcGFuIHtcXG4gICAgY29sb3I6IHZhcigtLW1hcmluZXIpO1xcbn1cXG5cXG4uZW1wdHktc3RhdGUtZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleDogMTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5lbXB0eS1zdGF0ZS1kaXYgaW1nIHtcXG4gICAgbWF4LXdpZHRoOiAxODBweDtcXG4gICAgXFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuXFxuLmVtcHR5LXN0YXRlLWRpdiBoNCB7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIGNvbG9yOiBncmF5O1xcbn1cXG5cXG4uZW1wdHktc3RhdGUtZGl2ICo6bnRoLWNoaWxkKG4rMikge1xcbiAgICBtYXJnaW46IC4yNXJlbSAwIDAgMDtcXG59XFxuXFxuLmVtcHR5LXN0YXRlLWRpdiAqOm50aC1jaGlsZChuKzIpLFxcbi5jb250YWluZXIgZm9vdGVyIHAge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5lbXB0eS1zdGF0ZS1kaXYgcCB7XFxuICAgIGZvbnQtc2l6ZTogLjlyZW07XFxuICAgIGNvbG9yOiBkYXJrZ3JheTtcXG59XFxuXFxuLmNvbnRhaW5lciBmb290ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tYXVidXJuKTtcXG4gICAgZm9udC1zaXplOiAuOXJlbSFpbXBvcnRhbnQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAuMjVyZW0gMCAuNzVyZW0gMDtcXG59XFxuXFxuLmNvbnRhaW5lciBmb290ZXIgc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbSFpbXBvcnRhbnQ7XFxufVxcblxcbi5jb250YWluZXIgZm9vdGVyIHAge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY29udGFpbmVyOm5vdCguZW1wdHkpIC5lbXB0eS1zdGF0ZS1kaXYsXFxuLmNvbnRhaW5lcjpub3QoLmVtcHR5KSBmb290ZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uYWRkLXRhc2stZGl2IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdHJhbnNwYXJlbnQyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBwYWRkaW5nOiAwIC41cmVtIC41cmVtIC41cmVtO1xcbiAgICBoZWlnaHQ6IDY4LjQ4cHg7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcbi5hZGQtdGFzay1kaXYgPiAqIHtcXG4gICAgbWFyZ2luLXRvcDogLjVyZW07XFxufVxcblxcbi5hZGQtdGFzay1kaXYgaW5wdXQsXFxuLnF1aWNrLWFkZC10b2RvIGlucHV0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAuOXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQ5Mik7XFxufVxcblxcbi5hZGQtdGFzay1idG5zLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmFkZC10YXNrLWJ0bnMtY29udGFpbmVyIGRpdiA+IGJ1dHRvbiB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRyYW5zcGFyZW50Mik7XFxuICAgIHBhZGRpbmc6IC4yNXJlbTtcXG59XFxuXFxuLmFkZC10YXNrLWJ0bnMtY29udGFpbmVyIGJ1dHRvbiA+IHNwYW4ge1xcbiAgICBmb250LXNpemU6IC45cmVtIWltcG9ydGFudDtcXG59XFxuXFxuLmFkZC10YXNrLWJ0bnMtY29udGFpbmVyID4gYnV0dG9uOm50aC1jaGlsZCgyKSBzcGFuIHtcXG4gICAgY29sb3I6IHZhcigtLW1hcmluZXIpO1xcbn1cXG5cXG4uc2NoZWR1bGVyLFxcbi5jYXJyaWVyIHtcXG4gICAgbWF4LXdpZHRoOiAyMTBweDtcXG4gICAgd2lkdGg6IDEwMCU7ICAgIFxcbn1cXG5cXG4uc2NoZWR1bGVyLFxcbi5jYXJyaWVyLFxcbi5sYWJlbGVyLFxcbi5wcmlvLXNldHRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0OTIpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luOiAwIDAgMCAwO1xcbiAgICBib3gtc2hhZG93OiAwIDFweCA4cHggMCByZ2IoMCAwIDAgLyA4JSksXFxuICAgICAgICAwIDAgMXB4IDAgcmdiKDAgMCAwIC8gMzAlKTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnNjaGVkdWxlciA+ICosXFxuLmNhcnJpZXIgPiAqIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIHBhZGRpbmc6IC41cmVtIC41cmVtIC41cmVtIC41cmVtO1xcbn1cXG5cXG4uc2NoZWQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5zY2hlZCBzcGFuOm50aC1jaGlsZCgyKSB7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICBjb2xvcjogZ3JheTtcXG59XFxuXFxuLnNjaGVkdWxlciBpbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XFxuICAgIG9wYWNpdHk6IC40O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zY2hlZHVsZXIgaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3I6aG92ZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uc2NoZWR1bGVyIC5zY2hlZC1jdXN0b20ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uc2NoZWR1bGVyIC5zY2hlZC1jdXN0b20gYnV0dG9uIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdHJhbnNwYXJlbnQxKTtcXG59XFxuXFxuLnNjaGVkdWxlciAuc2NoZWQtY3VzdG9tIGJ1dHRvbiA+IHNwYW4sXFxuLmNhcnJpZXIgc3BhbixcXG4ubGFiZWxlciBzcGFuLFxcbi5wcmlvLXNldHRlciBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAuOXJlbSFpbXBvcnRhbnQ7XFxufVxcblxcbi5wcmlvLXNldHRlciBidXR0b246Zmlyc3QtY2hpbGQgc3BhbiB7XFxuICAgIGNvbG9yOiB2YXIoLS1hdWJ1cm4pO1xcbn1cXG5cXG4ucHJpby1zZXR0ZXIgYnV0dG9uOm50aC1jaGlsZCgyKSBzcGFuIHtcXG4gICAgY29sb3I6IHZhcigtLXN1bik7XFxufVxcblxcbi5wcmlvLXNldHRlciBidXR0b246bnRoLWNoaWxkKDMpIHNwYW4ge1xcbiAgICBjb2xvcjogdmFyKC0tbWFyaW5lcik7XFxufVxcblxcbi5wcmlvLXNldHRlciBidXR0b246bnRoLWNoaWxkKDQpIHNwYW4ge1xcbiAgICBjb2xvcjogZ3JheTtcXG59XFxuXFxuLmNhcnJpZXIge1xcbiAgICBtYXJnaW46IDAgMCAwIC0uN3JlbTtcXG4gICAgbWF4LXdpZHRoOiAxNjBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jYXJyaWVyIGJ1dHRvbixcXG4ubGFiZWxlciBidXR0b24sXFxuLnByaW8tc2V0dGVyIGJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jYXJyaWVyIHUsXFxuLmxhYmVsZXIgdSxcXG4ucHJpby1zZXR0ZXIgdSB7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICBtYXJnaW46IDAgMCAwIC4yNXJlbTtcXG59XFxuXFxuLmxhYmVsZXIsXFxuLnByaW8tc2V0dGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLmxhYmVsZXIgZGl2LFxcbi5wcmlvLXNldHRlciBkaXYge1xcbiAgICBtYXgtd2lkdGg6IDE2MHB4O1xcbiAgICB3aWR0aDogMTAwJTsgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbjogMCAxLjhyZW0gMCBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodDkyKTtcXG4gICAgYm94LXNoYWRvdzogMCAxcHggOHB4IDAgcmdiKDAgMCAwIC8gOCUpLFxcbiAgICAgICAgMCAwIDFweCAwIHJnYigwIDAgMCAvIDMwJSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuLnByaW8tc2V0dGVyIGRpdiB7XFxuICAgIG1hcmdpbjogMCAwIDAgYXV0bztcXG4gICAgbWF4LXdpZHRoOiA4OHB4O1xcbn1cXG5cXG4ucHJpby1zZXR0ZXIgdSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmxhYmVsZXIgYnV0dG9uLFxcbi5wcmlvLXNldHRlciBidXR0b24ge1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG59XFxuXFxuLnNjaGVkdWxlciAuc2NoZWQtY3VzdG9tIGJ1dHRvbjpob3ZlciA+IHNwYW4sXFxuLnNjaGVkdWxlciAuc2NoZWQtY3VzdG9tIGJ1dHRvbjpmb2N1cy12aXNpYmxlID4gc3BhbiB7XFxuICAgIGNvbG9yOiB2YXIoLS1sYXVyZWwpO1xcbn1cXG5cXG4uYWRkLXRhc2stZGl2LmRpc3BsYXktc2NoZWR1bGVyIC5zY2hlZHVsZXIge1xcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xcbn1cXG5cXG4uYWRkLXRhc2stZGl2LmRpc3BsYXktY2FycmllciAuY2FycmllcixcXG4uYWRkLXRhc2stZGl2LmRpc3BsYXktbGFiZWxlciAubGFiZWxlcixcXG4uYWRkLXRhc2stZGl2LmRpc3BsYXktcHJpby1zZXR0ZXIgLnByaW8tc2V0dGVyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5hZGQtdGFzay1kaXYgLnNlbGVjdGVkLFxcbi5hZGQtdGFzay1kaXYgLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50MSk7XFxufVxcblxcbi5hZGQtdGFzay1tYWluLWJ0bnMtY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogLjVyZW0gMCAuNXJlbSAwO1xcbn1cXG5cXG4uYWRkLXRhc2stbWFpbi1idG5zLWNvbnRhaW5lciBidXR0b24ge1xcbiAgICBwYWRkaW5nOiAuMjVyZW07XFxufVxcblxcbi5hZGQtdGFzay1tYWluLWJ0bnMtY29udGFpbmVyIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1hbGlidSk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRyYW5zcGFyZW50Mik7XFxufVxcblxcbi5jb250YWluZXIuYWRkLXRyaWdnZXJlZCAuYWRkLXRhc2stYnRuLWRpdiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jb250YWluZXI6bm90KC5hZGQtdHJpZ2dlcmVkKSAuYWRkLXRhc2stZGl2LFxcbi5jb250YWluZXI6bm90KC5hZGQtdHJpZ2dlcmVkKSAuYWRkLXRhc2stbWFpbi1idG5zLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5xdWljay1hZGQtdG9kbyxcXG4ucHJvamVjdC1jcmVhdG9yLFxcbi5sYWJlbC1jcmVhdG9yLFxcbi50b2RvLWVkaXRvcixcXG4ucHJvamVjdC1lZGl0b3IsXFxuLmxhYmVsLWVkaXRvciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQyKTtcXG4gICAgei1pbmRleDogOTk5O1xcbn1cXG5cXG4ucXVpY2stYWRkLXRvZG8gPiAqLFxcbi5xdWljay1hZGQtdG9kbyBpbnB1dCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucXVpY2stYWRkLXRvZG8gPiBkaXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodDkyKTtcXG4gICAgbWF4LXdpZHRoOiA0ODBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgcGFkZGluZzogLjVyZW0gLjVyZW0gLjVyZW0gLjVyZW07XFxufVxcblxcbi5xdWljay1hZGQtdG9kbyA+IGRpdiA+ICo6bm90KDpmaXJzdC1jaGlsZCkge1xcbiAgICBtYXJnaW46IC41cmVtIDAgMCAwO1xcbn1cXG5cXG4ucXVpY2stYWRkLXRvZG8gYnV0dG9uIHtcXG4gICAgcGFkZGluZzogLjI1cmVtO1xcbn1cXG5cXG4ucXVpY2stYWRkLXRvZG8gYnV0dG9uOmZpcnN0LWNoaWxkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFyaW5lcik7XFxufVxcblxcbi5xdWljay1hZGQtdG9kbyBidXR0b246aG92ZXIsXFxuLnF1aWNrLWFkZC10b2RvIGJ1dHRvbjpmb2N1cy12aXNpYmxlIHtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0OTIpO1xcbn1cXG5cXG4ucXVpY2stYWRkLXRvZG8ub24ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4ubm90aWZpY2F0aW9ucyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaW5zZXQ6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICB6LWluZGV4OiA5OTk7XFxufVxcblxcbi5ub3RpZi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodDkyKTtcXG4gICAgbWFyZ2luOiA0MHB4IDAgYXV0byBhdXRvO1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG4gICAgbWF4LXdpZHRoOiA0MjBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC1oZWlnaHQ6IDMyMHB4O1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDhweCAwIHJnYigwIDAgMCAvIDglKSxcXG4gICAgICAgIDAgMCAxcHggMCByZ2IoMCAwIDAgLyAzMCUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi5ub3RpZi1jb250YWluZXIgbmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMCAwIC4yNXJlbSAwO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tdHJhbnNwYXJlbnQyKTtcXG59XFxuXFxuLm5vdGlmLWNvbnRhaW5lciBuYXYgPiAqIHtcXG4gICAgZm9udC1zaXplOiAuOXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubm90aWYtY29udGFpbmVyIGJ1dHRvbjpmaXJzdC1vZi10eXBle1xcbiAgICBtYXJnaW46IDAgMCAwIC41cmVtO1xcbn1cXG5cXG4ubmF2LWJ0bi1ub3RpZmljYXRpb24gc21hbGwge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxcbiAgICBjb2xvcjogdmFyKC0tYXVidXJuKTtcXG4gICAgbWFyZ2luLWxlZnQ6IC0uODVyZW07IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWxpYnUpO1xcbiAgICBwYWRkaW5nOiAwIDFweDtcXG59XFxuXFxuLm5hdi1idG4tbm90aWZpY2F0aW9uOmhvdmVyIHNtYWxsLFxcbi5uYXYtYnRuLW5vdGlmaWNhdGlvbjpmb2N1cy12aXNpYmxlIHNtYWxsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQhaW1wb3J0YW50O1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQ5MikhaW1wb3J0YW50O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnJlYWQtYWxsLWJ0biB7XFxuICAgIG1hcmdpbjogMCAwIDAgYXV0byFpbXBvcnRhbnQ7XFxufVxcblxcbi5yZWFkLWFsbC1idG4gc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4ubm90aWYtb3V0cHV0IHtcXG4gICAgbWFyZ2luOiAwIC4yNXJlbTtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgLyogb3ZlcmZsb3cteDogaGlkZGVuOyAqL1xcbn1cXG5cXG4ubm90aWYtb3V0cHV0ID4gKiB7XFxuICAgIG1hcmdpbjogLjI1cmVtIDAgMCAwO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tdHJhbnNwYXJlbnQxKTtcXG4gICAgcGFkZGluZzogMCAwIC4yNXJlbSAwO1xcbiAgICBcXG59XFxuXFxuLm5vdGlmIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm5vdGlmID4gKixcXG4ubm90aWYtZXh0cmEgYnV0dG9uIHNwYW57XFxuICAgIGZvbnQtc2l6ZTogLjlyZW07ICBcXG59XFxuXFxuLm5vdGlmID4gc3BhbiB7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG5cXG4ubm90aWYtZXh0cmEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ub3RpZiBzbWFsbCB7XFxuICAgIGNvbG9yOiB2YXIoLS1hdWJ1cm4pO1xcbn1cXG5cXG4ubm90aWZpY2F0aW9ucy5vbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuXFxufVxcblxcbi5hcHAuc2VhcmNoIC5hZGQtdGFzay1idG4tZGl2e1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucHJvamVjdC1jcmVhdG9yID4gZGl2LFxcbi5sYWJlbC1jcmVhdG9yID4gZGl2LFxcbi50b2RvLWVkaXRvciA+IGRpdixcXG4ucHJvamVjdC1lZGl0b3IgPiBkaXYsXFxuLmxhYmVsLWVkaXRvciA+IGRpdiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0OTIpO1xcbiAgICBtYXgtd2lkdGg6IDQyMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4ucHJvamVjdC1jcmVhdG9yID4gZGl2ID4gKixcXG4ubGFiZWwtY3JlYXRvciA+IGRpdiA+ICosXFxuLnRvZG8tZWRpdG9yID4gZGl2ID4gKixcXG4ucHJvamVjdC1lZGl0b3IgPiBkaXYgPiAqLFxcbi5sYWJlbC1lZGl0b3IgPiBkaXYgPiAqIHtcXG4gICAgcGFkZGluZzogLjVyZW07XFxuICAgIG1hcmdpbjogMCAwIC4yNXJlbSAwO1xcbn1cXG5cXG4ucHJvamVjdC1jcmVhdG9yID4gZGl2ID4gKjpmaXJzdC1jaGlsZCwgXFxuLnByb2plY3QtY3JlYXRvciA+IGRpdiA+ICo6bnRoLWNoaWxkKDIpLFxcbi5sYWJlbC1jcmVhdG9yID4gZGl2ID4gKjpmaXJzdC1jaGlsZCwgXFxuLmxhYmVsLWNyZWF0b3IgPiBkaXYgPiAqOm50aC1jaGlsZCgyKSxcXG4udG9kby1lZGl0b3IgPiBkaXYgPiAqOmZpcnN0LWNoaWxkLCBcXG4udG9kby1lZGl0b3IgPiBkaXYgPiAqOm50aC1jaGlsZCgyKSxcXG4ucHJvamVjdC1lZGl0b3IgPiBkaXYgPiAqOmZpcnN0LWNoaWxkLFxcbi5wcm9qZWN0LWVkaXRvciA+IGRpdiA+ICo6bnRoLWNoaWxkKDIpLFxcbi5sYWJlbC1lZGl0b3IgPiBkaXYgPiAqOmZpcnN0LWNoaWxkLFxcbi5sYWJlbC1lZGl0b3IgPiBkaXYgPiAqOm50aC1jaGlsZCgyKSB7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS10cmFuc3BhcmVudDEpO1xcbn1cXG5cXG4ucHJvamVjdC1jcmVhdG9yID4gZGl2LFxcbi5wcm9qZWN0LWlucHV0LFxcbi5sYWJlbC1jcmVhdG9yID4gZGl2LFxcbi5sYWJlbC1pbnB1dCxcXG4udG9kby1lZGl0b3IgPiBkaXYsXFxuLnRvZG8tZWRpdG9yLWlucHV0LFxcbi5wcm9qZWN0LWVkaXRvciA+IGRpdixcXG4ucHJvamVjdC1lZGl0b3ItaW5wdXQsXFxuLmxhYmVsLWVkaXRvciA+IGRpdixcXG4ubGFiZWwtZWRpdG9yLWlucHV0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnByb2plY3QtaW5wdXQgPiAqLFxcbi5sYWJlbC1pbnB1dCA+ICosXFxuLnRvZG8tZWRpdG9yLWlucHV0ID4gKixcXG4ucHJvamVjdC1lZGl0b3ItaW5wdXQgPiAqLFxcbi5sYWJlbC1lZGl0b3ItaW5wdXQgPiAqIHtcXG4gICAgbWFyZ2luOiAwIDAgLjI1cmVtIDA7XFxufVxcblxcbi5wcm9qZWN0LWlucHV0IGlucHV0LFxcbi5sYWJlbC1pbnB1dCBpbnB1dCxcXG4udG9kby1lZGl0b3ItaW5wdXQgaW5wdXQsXFxuLnRvZG8tZWRpdG9yLWlucHV0IHNlbGVjdCxcXG4ucHJvamVjdC1lZGl0b3ItaW5wdXQgaW5wdXQsXFxuLmxhYmVsLWVkaXRvci1pbnB1dCBpbnB1dCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICBwYWRkaW5nOiAuMjVyZW07XFxufVxcblxcbi50b2RvLWVkaXRvci1pbnB1dCB7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi50b2RvLWVkaXRvci1pbnB1dCB7XFxuICAgIHBhZGRpbmctdG9wOiAwIWltcG9ydGFudDtcXG59XFxuXFxuLnRvZG8tZWRpdG9yLWlucHV0IGxhYmVsIHtcXG4gICAgbWFyZ2luOiAuMjVyZW0gMCAuMXJlbSAwO1xcbn1cXG5cXG4ucHJvamVjdC1idXR0b25zLFxcbi5sYWJlbC1idXR0b25zLFxcbi50b2RvLWVkaXRvci1idXR0b25zLFxcbi51cGRhdGUtcHJvamVjdC1idXR0b25zLFxcbi51cGRhdGUtbGFiZWwtYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7ICAgIFxcbiAgICBtYXJnaW4tYm90dG9tOiAwIWltcG9ydGFudDtcXG59XFxuXFxuLnByb2plY3QtY3JlYXRvciBidXR0b24sXFxuLmxhYmVsLWNyZWF0b3IgYnV0dG9uLFxcbi50b2RvLWVkaXRvciBidXR0b24sXFxuLnByb2plY3QtZWRpdG9yIGJ1dHRvbixcXG4ubGFiZWwtZWRpdG9yIGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IC4yNXJlbTtcXG4gICAgbWFyZ2luOiAwIDAgMCAuMjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50MSk7XFxufVxcblxcbi5wcm9qZWN0LWNyZWF0b3IgYnV0dG9uOmZpcnN0LWNoaWxkLFxcbi5sYWJlbC1jcmVhdG9yIGJ1dHRvbjpmaXJzdC1jaGlsZCxcXG4udG9kby1lZGl0b3IgYnV0dG9uOmZpcnN0LWNoaWxkLFxcbi5wcm9qZWN0LWVkaXRvciBidXR0b246Zmlyc3QtY2hpbGQsXFxuLmxhYmVsLWVkaXRvciBidXR0b246Zmlyc3QtY2hpbGQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYXJpbmVyKTtcXG59XFxuXFxuLnVwZGF0ZS1wcm9qZWN0LWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCgzKSxcXG4udXBkYXRlLWxhYmVsLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCgzKSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWF1YnVybik7XFxufVxcblxcbi5wcm9qZWN0LWNyZWF0b3Iub24sXFxuLmxhYmVsLWNyZWF0b3Iub24sXFxuLnRvZG8tZWRpdG9yLm9uLFxcbi5wcm9qZWN0LWVkaXRvci5vbixcXG4ubGFiZWwtZWRpdG9yLm9uIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLnByb2plY3QtaW5wdXQgaW5wdXQ6Zm9jdXMtdmlzaWJsZSxcXG4ubGFiZWwtaW5wdXQgaW5wdXQ6Zm9jdXMtdmlzaWJsZSxcXG4udG9kby1lZGl0b3ItaW5wdXQgaW5wdXQ6Zm9jdXMtdmlzaWJsZSxcXG4ucHJvamVjdC1lZGl0b3ItaW5wdXQgaW5wdXQ6Zm9jdXMtdmlzaWJsZSxcXG4ubGFiZWwtZWRpdG9yLWlucHV0IGlucHV0OmZvY3VzLXZpc2libGUge1xcbiAgICBvdXRsaW5lOiAxcHggc29saWQgdmFyKC0tdHJhbnNwYXJlbnQyKTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xcbiAgICAubmF2LWNvbXAge1xcbiAgICAgICAgcGFkZGluZzogLjVyZW0gLjVyZW0gLjVyZW0gLjVyZW07XFxuICAgIH1cXG4gICAgLmluZm8tY29tcCB7XFxuICAgICAgICBwYWRkaW5nOiAxcmVtIC4yNXJlbSAuMjVyZW0gLjI1cmVtO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgei1pbmRleDogMTAwMDtcXG4gICAgICAgIHRvcDogNDcuNTlweDtcXG4gICAgICAgIGJvdHRvbTogMDtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG4gICAgLmluZm8tY29tcC5zaG93LW5hdiB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB9XFxuICAgIC5pbmZvLWNvbXAgPiAqIHtcXG4gICAgICAgIHdpZHRoOiAyOTRweDtcXG4gICAgfVxcbiAgICAuY29udGFpbmVyID4gaGVhZGVyIHtcXG4gICAgICAgIHBhZGRpbmc6IDFyZW0gMCAuNXJlbSAwO1xcbiAgICB9XFxuICAgIC5jb250YWluZXIge1xcbiAgICAgICAgcGFkZGluZzogMCAxcmVtIDAgMXJlbTtcXG4gICAgfVxcbiAgICAucXVpY2stYWRkLXRvZG8gPiBkaXYge1xcbiAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XFxuICAgIC5pbmZvLWNvbXAgPiAqIHtcXG4gICAgICAgIHdpZHRoOiAyNDJweDtcXG4gICAgfVxcbiAgICAuc2VhcmNoLWlucHV0IHtcXG4gICAgICAgIHdpZHRoOiAxODBweDtcXG4gICAgfVxcbiAgICAuc2VhcmNoLWlucHV0OmZvY3VzIHtcXG4gICAgICAgIHdpZHRoOiAxODBweDtcXG4gICAgfVxcbiAgICAucXVpY2stYWRkLXRvZG8gPiBkaXYge1xcbiAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcXG4gICAgfVxcbiAgICAubm90aWYtY29udGFpbmVyIHtcXG4gICAgICAgIG1heC13aWR0aDogMzEwcHg7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjFweCkge1xcbiAgICAuc2VhcmNoLWlucHV0IHtcXG4gICAgICAgIG1heC13aWR0aDogMTM1cHg7XFxuICAgIH1cXG4gICAgLnNlYXJjaC1pbnB1dDpmb2N1cyB7XFxuICAgICAgICBtYXgtd2lkdGg6IDEzNXB4O1xcbiAgICB9XFxuICAgIC5xdWljay1hZGQtdG9kbyA+IGRpdiB7XFxuICAgICAgICBtYXgtd2lkdGg6IDI3MHB4O1xcbiAgICB9XFxuICAgIC5ub3RpZi1jb250YWluZXIge1xcbiAgICAgICAgbWF4LXdpZHRoOiAyNzBweDtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA0MjBweCkge1xcbiAgICAudG9kby1lZGl0b3ItaW5wdXQge1xcbiAgICAgICAgbWF4LWhlaWdodDogMTgwcHg7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBnZXRUYXJnZXQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRUYXJnZXQuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gZnVuY3Rpb24oY3NzLCBzdHlsZSl7XG4gICAgICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgICAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gICAgICB9IGVsc2Uge1xuICAgICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgICB9XG5cbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICAgIH1cbiAgfTtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IGZ1bmN0aW9uKHN0eWxlKSB7XG4gICAgICAgIHZhciBub25jZSA9XG4gICAgICAgICAgdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgICAgIGlmIChub25jZSkge1xuICAgICAgICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgICAgICAgfVxuICAgICAgfTtcbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oc3R5bGUpe1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoXCJoZWFkXCIpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCJcbiAgICAgICk7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFRhcmdldDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlbWJlZExvY2FsU3RvcmFnZSA9ICgoKSA9PiB7XG4gICAgaWYoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpKVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvcycsIEpTT04uc3RyaW5naWZ5KHt0b2RvbGlzdDogW10sIHByb2plY3RzOiBbXSwgbGFiZWxzOiBbXX0pKTtcbn0pKCk7XG5cbmNvbnN0IFRvZG8gPSBmdW5jdGlvbiggaWQsIHRpdGxlLCBkdWVEYXRlLCBub3RlLCBwcmlvcml0eSwgcHJvamVjdCwgbGFiZWwsIGR1ZURhdGVOb3RpZlNlbnQgKXtcbiAgICByZXR1cm4geyBpZCwgdGl0bGUsIGR1ZURhdGUsIG5vdGUsIHByaW9yaXR5LCBwcm9qZWN0LCBsYWJlbCwgZHVlRGF0ZU5vdGlmU2VudCB9XG59O1xuXG5jb25zdCBpc0VtcHR5VG9Eb0xpc3QgPSAoKSA9PiB7XG4gICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpKTtcbiAgICByZXR1cm4gIWRhdGEudG9kb2xpc3QubGVuZ3RoID8gdHJ1ZSA6IGZhbHNlO1xufTtcblxuY29uc3QgcHVzaCA9ICgoKSA9PiB7XG4gICAgbGV0IF9kYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MnKSk7XG5cbiAgICBjb25zdCBfZW1iZWQgPSAoKSA9PiB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvcycsIEpTT04uc3RyaW5naWZ5KF9kYXRhKSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGdlbmVyYXRlSWQgPSAoKSA9PiB7XG4gICAgICAgIGxldCBpZCA9IF9kYXRhLnRvZG9saXN0Lmxlbmd0aCArIDE7XG5cbiAgICAgICAgaWYoX2RhdGEudG9kb2xpc3QubGVuZ3RoKXtcbiAgICAgICAgICAgIGxldCBjb3VudGVyID0gMDtcbiAgICAgICAgICAgIF9kYXRhLnRvZG9saXN0LmZvckVhY2goKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKF9kYXRhLnRvZG9saXN0W2NvdW50ZXJdLmlkID09IGlkKSB7IGlkKys7IH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpZDtcbiAgICB9O1xuXG4gICAgY29uc3QgcXVpY2sgPSAodmFsdWUpID0+IHtcbiAgICAgICAgbGV0IHRvZG8gPSBUb2RvKFxuICAgICAgICAgICAgZ2VuZXJhdGVJZCgpLFxuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAnJyxcbiAgICAgICAgICAgICcnLFxuICAgICAgICAgICAgJ3ByaW9yaXR5IDQnLFxuICAgICAgICAgICAgJ2luYm94JyxcbiAgICAgICAgICAgICcnLFxuICAgICAgICAgICAgJ25vbmUnXG4gICAgICAgICk7XG4gICAgICAgIF9kYXRhLnRvZG9saXN0LnB1c2godG9kbyk7XG4gICAgICAgIF9lbWJlZCgpO1xuICAgIH07XG5cbiAgICBjb25zdCBwcm9qZWN0ID0gKHZhbHVlKSA9PiB7XG4gICAgICAgIF9kYXRhLnByb2plY3RzLnB1c2godmFsdWUpXG4gICAgICAgIF9lbWJlZCgpO1xuICAgIH07XG5cbiAgICBjb25zdCBsYWJlbCA9ICh2YWx1ZSkgPT4ge1xuICAgICAgICBfZGF0YS5sYWJlbHMucHVzaCh2YWx1ZSlcbiAgICAgICAgX2VtYmVkKCk7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHF1aWNrLFxuICAgICAgICBwcm9qZWN0LFxuICAgICAgICBsYWJlbFxuICAgIH1cbn0pKCk7XG5cbmNvbnN0IGRhdGVTdHJpbmcgPSAoKCkgPT4ge1xuICAgIGxldCBkYXRlTm93O1xuICAgIGxldCBkYXlzID0gWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXTtcbiAgICBsZXQgbW9udGhzID0gWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCBcbiAgICAgICAgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXTtcblxuICAgIGNvbnN0IHRvZGF5ID0gKCkgPT4ge1xuICAgICAgICBkYXRlTm93ID0gbmV3IERhdGUoKTtcbiAgICAgICAgZGF0ZU5vdy5zZXRIb3VycygwLDAsMCwwKTtcbiAgICAgICAgcmV0dXJuIGRhdGVOb3c7XG4gICAgfTtcblxuICAgIGNvbnN0IHRvZGF5U3RyaW5nID0gKCkgPT4ge1xuICAgICAgICBsZXQgZGF0ZSA9IHRvZGF5KCkuZ2V0RGF0ZSgpLnRvU3RyaW5nKCk7XG4gICAgICAgIGlmKGRhdGUubGVuZ3RoID09IDIpe1xuICAgICAgICAgICAgcmV0dXJuIGAke3RvZGF5KCkuZ2V0RnVsbFllYXIoKX0tJHt0b2RheSgpLmdldERhdGUoKX0tJHt0b2RheSgpLmdldE1vbnRoKCkrMX1gO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGAke3RvZGF5KCkuZ2V0RnVsbFllYXIoKX0tMCR7dG9kYXkoKS5nZXREYXRlKCl9LSR7dG9kYXkoKS5nZXRNb250aCgpKzF9YDtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCB0b2RheU5hbWUgPSAoKSA9PiBkYXlzW3RvZGF5KCkuZ2V0RGF5KCldO1xuXG4gICAgY29uc3QgdG9tb3Jyb3cgPSAoKSA9PiB7XG4gICAgICAgIGRhdGVOb3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBkYXRlTm93LnNldERhdGUoZGF0ZU5vdy5nZXREYXRlKCkgKyAxKVxuICAgICAgICBkYXRlTm93LnNldEhvdXJzKDAsMCwwLDApO1xuICAgICAgICByZXR1cm4gZGF0ZU5vdztcbiAgICB9O1xuXG4gICAgY29uc3QgdHdtU3RyaW5nID0gKCkgPT4ge1xuICAgICAgICBsZXQgZGF0ZSA9IHRvbW9ycm93KCkuZ2V0RGF0ZSgpLnRvU3RyaW5nKCk7XG4gICAgICAgIGlmKGRhdGUubGVuZ3RoID09IDIpe1xuICAgICAgICAgICAgcmV0dXJuIGAke3RvbW9ycm93KCkuZ2V0RnVsbFllYXIoKX0tJHt0b21vcnJvdygpLmdldERhdGUoKX0tJHt0b21vcnJvdygpLmdldE1vbnRoKCkrMX1gO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGAke3RvbW9ycm93KCkuZ2V0RnVsbFllYXIoKX0tMCR7dG9tb3Jyb3coKS5nZXREYXRlKCl9LSR7dG9tb3Jyb3coKS5nZXRNb250aCgpKzF9YDtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCB0b21vcnJvd05hbWUgPSAoKSA9PiBkYXlzW3RvbW9ycm93KCkuZ2V0RGF5KCldO1xuXG4gICAgY29uc3QgbmV4dFdlZWsgPSAoKSA9PiB7XG4gICAgICAgIGRhdGVOb3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBkYXRlTm93LnNldERhdGUoZGF0ZU5vdy5nZXREYXRlKCkgKyA3KVxuICAgICAgICBkYXRlTm93LnNldEhvdXJzKDAsMCwwLDApO1xuICAgICAgICByZXR1cm4gZGF0ZU5vdztcbiAgICB9O1xuXG4gICAgY29uc3QgbmV4dFdlZWtTdHJpbmcgPSAoKSA9PiB7XG4gICAgICAgIGxldCBkYXRlID0gbmV4dFdlZWsoKS5nZXREYXRlKCkudG9TdHJpbmcoKTtcbiAgICAgICAgaWYoZGF0ZS5sZW5ndGggPT0gMil7XG4gICAgICAgICAgICByZXR1cm4gYCR7bmV4dFdlZWsoKS5nZXRGdWxsWWVhcigpfS0ke25leHRXZWVrKCkuZ2V0RGF0ZSgpfS0ke25leHRXZWVrKCkuZ2V0TW9udGgoKSsxfWA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gYCR7bmV4dFdlZWsoKS5nZXRGdWxsWWVhcigpfS0wJHtuZXh0V2VlaygpLmdldERhdGUoKX0tJHtuZXh0V2VlaygpLmdldE1vbnRoKCkrMX1gO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IG5leHRXZWVrTmFtZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGAke2RheXNbbmV4dFdlZWsoKS5nZXREYXkoKV19ICR7bmV4dFdlZWsoKS5nZXREYXRlKCl9ICR7bW9udGhzW25leHRXZWVrKCkuZ2V0TW9udGgoKV19YDtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdG9kYXksIHRvZGF5TmFtZSxcbiAgICAgICAgdG9tb3Jyb3csIHRvbW9ycm93TmFtZSxcbiAgICAgICAgbmV4dFdlZWssIG5leHRXZWVrTmFtZSxcbiAgICAgICAgdG9kYXlTdHJpbmcsIHR3bVN0cmluZywgbmV4dFdlZWtTdHJpbmdcbiAgICB9O1xufSkoKTtcblxuXG5jb25zdCB0ZXN0ID0gKGZ1bmN0aW9uKCl7XG4gICAgY29uc29sZS5sb2coZGF0ZVN0cmluZy5uZXh0V2Vla1N0cmluZygpKVxuICAgIGNvbnNvbGUubG9nKERhdGUucGFyc2UoZGF0ZVN0cmluZy50b2RheVN0cmluZygpKSlcbiAgICAvLyBjb25zdCB0b2RvID0gVG9kbyhcbiAgICAvLyAgICAgMSxcbiAgICAvLyAgICAgJ2ZpbmlzaCB0b2RvJyxcbiAgICAvLyAgICAgJzIwMjEtMDctMzEnLFxuICAgIC8vICAgICAnJyxcbiAgICAvLyAgICAgJ3ByaW9yaXR5IDEnLFxuICAgIC8vICAgICAnaW5ib3gnLFxuICAgIC8vICAgICAnJyxcbiAgICAvLyAgICAgJ25vbmUnXG4gICAgLy8gKTtcbiAgICAvLyBsZXQgYXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpKTtcbiAgICAvLyBpZighYXJyYXkubGVuZ3RoKXtcbiAgICAvLyAgICAgYXJyYXkucHVzaCh0b2RvKTtcbiAgICAvLyAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zJywgSlNPTi5zdHJpbmdpZnkoYXJyYXkpKTtcbiAgICAvLyB9XG4gICAgLy8gY29uc29sZS5sb2codG9kbylcblxuICAgIC8vIHZhciBkYXRlQ29udHJvbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJkYXRlXCJdJyk7XG4gICAgLy8gZGF0ZUNvbnRyb2wudmFsdWUgPSAnMjAxNy0wNi0wMSc7XG4gICAgLy8gY29uc29sZS5sb2coZGF0ZUNvbnRyb2wudmFsdWUpOyAvLyBwcmludHMgXCIyMDE3LTA2LTAxXCJcbiAgICAvLyBjb25zb2xlLmxvZyhkYXRlQ29udHJvbC52YWx1ZUFzTnVtYmVyKTsgLy8gcHJpbnRzIDE0OTYyNzUyMDAwMDAsIGEgSmF2YVNjcmlwdCB0aW1lc3RhbXAgKG1zKVxuXG4gICAgY29uc3QgZGF0YXggPSAnMjAyMS0wOC04JztcbiAgICBjb25zb2xlLmxvZyhkYXRheCk7XG4gICAgY29uc29sZS5sb2coRGF0ZS5wYXJzZShkYXRheCkpXG4gICAgLy8gY29uc29sZS5sb2coZGF0YXgudmFsdWVBc051bWJlcilcblxuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICB0b2RheS5zZXRIb3VycygwLDAsMCwwKTtcbiAgICBjb25zb2xlLmxvZygndG9kYXknLCB0b2RheSk7XG4gICAgY29uc29sZS5sb2coJ3RvZGF5IG51bWJlcicsIERhdGUucGFyc2UodG9kYXkpKTtcblxuICAgIGNvbnN0IHRvbW9ycm93ID0gbmV3IERhdGUoKVxuICAgIHRvbW9ycm93LnNldERhdGUodG9tb3Jyb3cuZ2V0RGF0ZSgpICsgMSlcbiAgICB0b21vcnJvdy5zZXRIb3VycygwLDAsMCwwKTtcbiAgICBjb25zb2xlLmxvZyh0b21vcnJvdyk7XG4gICAgY29uc29sZS5sb2coRGF0ZS5wYXJzZSh0b21vcnJvdykpXG5cbiAgICBsZXQgZGF5cyA9IFsnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0J107XG4gICAgbGV0IGQgPSBuZXcgRGF0ZSgpOyAvL29yIGRhdGVTdHJpbmdcbiAgICBsZXQgZGF5TmFtZSA9IGRheXNbZC5nZXREYXkoKV07XG4gICAgY29uc29sZS5sb2coZGF5TmFtZSlcblxuICAgIGNvbnNvbGUubG9nKGRhdGVTdHJpbmcubmV4dFdlZWsoKSk7XG59KSgpO1xuXG5leHBvcnQgeyBcbiAgICBlbWJlZExvY2FsU3RvcmFnZSxcbiAgICBpc0VtcHR5VG9Eb0xpc3QsXG4gICAgdGVzdCxcbiAgICBwdXNoLFxuICAgIGRhdGVTdHJpbmdcbn07XG4iLCJpbXBvcnQgY2hpbGxpbmdJbWcgZnJvbSAnLi9jaGlsbGluZy5zdmcnO1xuaW1wb3J0IHsgZW1iZWRMb2NhbFN0b3JhZ2UsIGlzRW1wdHlUb0RvTGlzdCB9IGZyb20gJy4vZGF0YS5qcyc7XG5cbid1c2Ugc3RyaWN0JztcblxuY29uc3Qgc2V0TGFuZ3VhZ2UgPSAoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdodG1sJykuc2V0QXR0cmlidXRlKCdsYW5nJywgJ2VuJyk7XG5cbmNvbnN0IHNldHVwSGVhZFRhZyA9ICgpID0+IHtcbiAgICBjb25zdCBoZWFkRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWQnKTtcbiAgICBjb25zdCB0aXRsZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0aXRsZScpO1xuXG4gICAgY29uc3QgbmV3TWV0YUVkZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtZXRhJyk7XG4gICAgY29uc3QgbmV3TGlua01hdGVyaWFsSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICBjb25zdCBuZXdMaW5rRmF2aWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcblxuICAgIG5ld01ldGFFZGdlLnNldEF0dHJpYnV0ZSgnaHR0cC1lcXVpdicsJ1gtVUEtQ29tcGF0aWJsZScpO1xuICAgIG5ld01ldGFFZGdlLnNldEF0dHJpYnV0ZSgnY29udGVudCcsJ0lFPWVkZ2UnKTtcbiAgICBuZXdMaW5rTWF0ZXJpYWxJY29uLnNldEF0dHJpYnV0ZSgncmVsJywgJ3N0eWxlc2hlZXQnKTtcbiAgICBuZXdMaW5rTWF0ZXJpYWxJY29uXG4gICAgICAgIC5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29ucytPdXRsaW5lZCcpO1xuICAgIG5ld0xpbmtGYXZpY29uLnNldEF0dHJpYnV0ZSgncmVsJywgJ2ljb24nKTtcbiAgICBuZXdMaW5rRmF2aWNvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnaW1hZ2UvcG5nJyk7XG4gICAgbmV3TGlua0Zhdmljb24uc2V0QXR0cmlidXRlKCdocmVmJywgJ2h0dHBzOi8vb3BlbmNsaXBhcnQub3JnL2ltYWdlLzQwMHB4LzMwMzI1NCcpO1xuXG4gICAgaGVhZEVsZW1lbnQuaW5zZXJ0QmVmb3JlKG5ld01ldGFFZGdlLCB0aXRsZUVsZW1lbnQpO1xuICAgIGhlYWRFbGVtZW50Lmluc2VydEJlZm9yZShuZXdMaW5rTWF0ZXJpYWxJY29uLCB0aXRsZUVsZW1lbnQpO1xuICAgIGhlYWRFbGVtZW50LmFwcGVuZENoaWxkKG5ld0xpbmtGYXZpY29uKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUFwcERpdiA9ICgpID0+IHtcbiAgICBjb25zdCBib2R5RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBjb25zdCBib2R5U2NyaXB0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keSBzY3JpcHQnKTtcbiAgICBjb25zdCBhcHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGFwcC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FwcCcpO1xuICAgIGJvZHlFbGVtZW50Lmluc2VydEJlZm9yZShhcHAsIGJvZHlTY3JpcHQpO1xufTtcblxuY29uc3QgY3JlYXRlQXBwTmF2ID0gKCkgPT4ge1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICAgIG5hdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25hdi1jb21wJyk7XG4gICAgbmF2LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcyA9IFwibmMtbGVmdFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBpZCA9IFwibmF2QnRuTWVudVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWlkXCI+bWVudTwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBpZCA9IFwibmF2QnRuSG9tZVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWlkXCI+aG9tZTwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGZvcm0gaWQgPSBcImZvcm1TZWFyY2hcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJzZWFyY2gtZGl2XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWlkXCI+c2VhcmNoPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInNlYXJjaFwiIGFyaWEtbGFiZWw9XCJTZWFyY2ggdGhyb3VnaCBhbGwgdG9kb3NcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzID0gXCJzZWFyY2gtaW5wdXRcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZCA9IFwibmF2SW5wdXRTZWFyY2hcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlID0gXCJyZXNldFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWRcIj5jbG9zZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzID0gXCJuYy1yaWdodFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBpZCA9IFwibmF2QnRuUXVpY2tBZGRcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIG1pZFwiPmFkZDwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcyA9IFwibmF2LWJ0bi1ub3RpZmljYXRpb25cIiBpZCA9IFwibmF2QnRuTm90aWZpY2F0aW9uXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWRcIj5ub3RpZmljYXRpb25zPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzbWFsbCBpZCA9IFwibmF2QnRuTm90aWZpY2F0aW9uQ291bnRcIj48L3NtYWxsPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIGA7XG4gICAgXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFwcCcpLmFwcGVuZENoaWxkKG5hdik7XG59O1xuXG5jb25zdCBjcmVhdGVBcHBCb2R5ID0gKCkgPT4ge1xuICAgIGNvbnN0IGFwcEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBhcHBCb2R5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYXBwLWJvZHknKTtcbiAgICB3cmFwcGVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnd3JhcHBlcicpO1xuXG4gICAgYXBwQm9keS5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXBwJykuYXBwZW5kQ2hpbGQoYXBwQm9keSk7XG59O1xuXG5jb25zdCBjcmVhdGVTaWRlYmFyTmF2ID0gKCkgPT4ge1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuXG4gICAgbmF2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaW5mby1jb21wJyk7XG4gICAgbmF2LnNldEF0dHJpYnV0ZSgnaWQnLCAnbmF2SW5mb0NvbXAnKTtcbiAgICBuYXYuaW5uZXJIVE1MID0gYFxuICAgICAgICA8YnV0dG9uIGlkID0gXCJzYm5hdkluYm94QnRuXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIG1pZCBpYy1zcGFuXCI+aW5ib3g8L3NwYW4+XG4gICAgICAgICAgICBJbmJveDxzYW1wPjwvc2FtcD5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gaWQgPSBcInNibmF2VG9kYXlCdG5cIiBjbGFzcyA9IFwiYWN0aXZlXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIG1pZCBpYy1zcGFuXCI+Y2FsZW5kYXJfdG9kYXk8L3NwYW4+XG4gICAgICAgICAgICBUb2RheTxzYW1wPjwvc2FtcD5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gaWQgPSBcInNibmF2VXBjb21CdG5cIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWlkIGljLXNwYW5cIj51cGNvbWluZzwvc3Bhbj5cbiAgICAgICAgICAgIFVwY29taW5nPHNhbXA+PC9zYW1wPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGRpdiBjbGFzcyA9IFwiaWMtZGl2IGljLXByb2plY3RcIiB0YWJpbmRleD1cIjBcIiBpZCA9IFwic2JuYXZQcm9qZWN0c0RpdlwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWQgaWMtc3BhbiBvcGFcIj5jaGV2cm9uX3JpZ2h0PC9zcGFuPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcyA9IFwiaWMtYWRkLWJ0biBvcGFcIiBpZCA9IFwic2JuYXZQcm9qZWN0QWRkQnRuXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWRcIj5hZGQ8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxzdHJvbmc+UHJvamVjdHM8L3N0cm9uZz5cbiAgICAgICAgICAgIDxkaXYgaWQgPSBcInByb2plY3RMaXN0Q29udGFpbmVyXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3MgPSBcImljLWRpdiBpYy1sYWJlbFwiIHRhYmluZGV4PVwiMFwiIGlkID0gXCJzYm5hdkxhYmVsc0RpdlwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWQgaWMtc3BhbiBvcGFcIj5jaGV2cm9uX3JpZ2h0PC9zcGFuPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcyA9IFwiaWMtYWRkLWJ0biBvcGFcIiBpZCA9IFwic2JuYXZMYWJlbEFkZEJ0blwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWlkXCI+YWRkPC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8c3Ryb25nPkxhYmVsczwvc3Ryb25nPlxuICAgICAgICAgICAgPGRpdiBpZCA9IFwibGFiZWxMaXN0Q29udGFpbmVyXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYDtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyJykuYXBwZW5kQ2hpbGQobmF2KTtcblxuICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MnKSk7XG5cbiAgICBpZiAoZGF0YS5wcm9qZWN0cy5sZW5ndGgpe1xuICAgICAgICBkYXRhLnByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJidWxsZXRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3MgPSBcInVuaXF1ZVwiPiR7cHJvamVjdH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWRcIj5tb3JlX2hvcml6PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgYDtcbiAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0TGlzdENvbnRhaW5lcicpLmFwcGVuZENoaWxkKGRpdik7ICBcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIGlmIChkYXRhLmxhYmVscy5sZW5ndGgpe1xuICAgICAgICBkYXRhLmxhYmVscy5mb3JFYWNoKChsYWJlbCk9PiB7XG4gICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGRpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWQgdGFnXCI+bGFiZWw8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzID0gXCJ1bmlxdWVcIj4ke2xhYmVsfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIG1pZFwiPm1vcmVfaG9yaXo8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICBgO1xuICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xhYmVsTGlzdENvbnRhaW5lcicpLmFwcGVuZENoaWxkKGRpdik7ICAgXG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbmNvbnN0IGNyZWF0ZUNvbnRhaW5lciA9ICgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY29udGFpbmVyJyk7XG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFpbmVyJyk7XG5cbiAgICBpZihpc0VtcHR5VG9Eb0xpc3QoKSl7Ly9maXggdXNpbmcgZGF0ZXMgc2luY2UgaXQgZGVmZW5kcyBvbiB0b2RheSdzIGRhdGFcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2VtcHR5Jyk7XG4gICAgfVxuXG4gICAgaGVhZGVyLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGgxIGlkID0gXCJoZWFkZXJcIj5Ub2RheTwvaDE+XG4gICAgYDtcbiAgICBkaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdhZGQtdGFzay1idG4tZGl2Jyk7XG4gICAgZGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkVGFza0J0bkRpdicpO1xuICAgIGRpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxidXR0b24gY2xhc3MgPSBcImFkZC10YXNrLWJ0blwiIGlkID0gXCJhZGRUYXNrQnRuXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIG1pZCB0b29sLXNwYW5cIj5hZGQ8L3NwYW4+XG4gICAgICAgICAgICBBZGQgdGFza1xuICAgICAgICA8L2J1dHRvbj5cbiAgICBgO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW4pO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyJykuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUFkZFRhc2tEaXYgPSAoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBkaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdhZGQtdGFzay1kaXYnKTtcbiAgICBkaXYuc2V0QXR0cmlidXRlKCdpZCcsICdhZGRUYXNrRGl2Jyk7XG4gICAgZGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGlucHV0IHR5cGUgPSBcInRleHRcIiBwbGFjZWhvbGRlcj1cIlRhc2sgbmFtZVwiIGlkID0gXCJhZGRUYXNrSW5wdXRcIj5cbiAgICAgICAgPGRpdiBjbGFzcyA9IFwiYWRkLXRhc2stYnRucy1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZCA9IFwic2VsZWN0U2NoZWR1bGVCdG5cIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWRcIj5ldmVudDwvc3Bhbj4gU2NoZWR1bGVcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkID0gXCJzZWxlY3RQcm9qZWN0QnRuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWlkXCI+aW5ib3g8L3NwYW4+IEluYm94XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZCA9IFwic2VsZWN0TGFiZWxCdG5cIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWRcIj5sYWJlbDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkID0gXCJzZWxlY3RQcmlvcml0eUJ0blwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIG1pZFwiPmZsYWc8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3MgPSBcInNjaGVkdWxlclwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcyA9IFwic2NoZWRcIiBpZCA9IFwic2NoZWR1bGVyVG9kYXlCdG5cIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5Ub2RheTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBpZCA9IFwic2NoZWR1bGVyVG9kYXlTcGFuXCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzID0gXCJzY2hlZFwiIGlkID0gXCJzY2hlZHVsZXJUd21CdG5cIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5Ub21vcnJvdzwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBpZCA9IFwic2NoZWR1bGVyVHdtU3BhblwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcyA9IFwic2NoZWRcIiBpZCA9IFwic2NoZWR1bGVyTmV4dFdlZWtCdG5cIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5OZXh0IHdlZWs8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gaWQgPSBcInNjaGVkdWxlck5leHRXZWVrU3BhblwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwic2NoZWQtY3VzdG9tXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcImRhdGVcIiBpZCA9IFwic2NoZWR1bGVyQ3VzdG9tSW5wdXRcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkID0gXCJzY2hlZHVsZXJDdXN0b21CdG5cIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWRcIj5kb25lPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzID0gXCJzY2hlZFwiIGlkID0gXCJzY2hlZHVsZXJOb0RhdGVCdG5cIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5ObyBEYXRlPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGlkID0gXCJzY2hlZHVsZXJOb0RhdGVTcGFuXCI+JiN4MjIwNTs8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3MgPSBcImNhcnJpZXJcIiBpZCA9IFwicHJvamVjdFNlbGVjdG9yXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGlkID0gXCJwcm9qZWN0RGVmYXVsdEluYm94XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWRcIj5pbmJveDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8dT5JbmJveDwvdT5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcyA9IFwibGFiZWxlclwiPlxuICAgICAgICAgICAgPGRpdiBpZCA9IFwibGFiZWxDb250YWluZXJcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcyA9IFwicHJpby1zZXR0ZXJcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZCA9IFwicHJpb3JpdHlPbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWRcIj5mbGFnPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8dT5Qcmlvcml0eSAxPC91PlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQgPSBcInByaW9yaXR5VHdvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWlkXCI+ZmxhZzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHU+UHJpb3JpdHkgMjwvdT5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkID0gXCJwcmlvcml0eVRocmVlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWlkXCI+ZmxhZzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHU+UHJpb3JpdHkgMzwvdT5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkID0gXCJwcmlvcml0eURlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWRcIj5mbGFnPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8dT5Qcmlvcml0eSA0PC91PlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGA7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJykuYXBwZW5kQ2hpbGQoZGl2KTtcbn07XG5cbmNvbnN0IGNyZWF0ZU1vcmVDb250YWluZXJJdGVtcyA9ICgpID0+IHtcbiAgICBjb25zdCBkaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuXG4gICAgZGl2MS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FkZC10YXNrLW1haW4tYnRucy1jb250YWluZXInKTtcbiAgICBkaXYyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZW1wdHktc3RhdGUtZGl2Jyk7XG4gICAgZGl2Mi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2VtcHR5U3RhdGVEaXYnKTtcbiAgICBmb290ZXIuc2V0QXR0cmlidXRlKCdpZCcsICdmb290ZXInKTtcblxuICAgIGRpdjEuaW5uZXJIVE1MID0gYFxuICAgICAgICA8YnV0dG9uIGlkID0gXCJhZGRUYXNrTWFpbkJ0blwiPlxuICAgICAgICAgICAgQWRkIHRhc2tcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gaWQgPSBcImFkZFRhc2tDYW5jZWxCdG5cIj5cbiAgICAgICAgICAgIENhbmNlbFxuICAgICAgICA8L2J1dHRvbj5cbiAgICBgO1xuICAgIGRpdjIuaW5uZXJIVE1MID0gYFxuICAgICAgICA8aW1nIHNyYz1cIiR7Y2hpbGxpbmdJbWd9XCIgZHJhZ2dhYmxlPVwiZmFsc2VcIj5cbiAgICAgICAgPGg0PkFsbCBjbGVhcjwvaDQ+XG4gICAgICAgIDxwPkxvb2tzIGxpa2UgZXZlcnl0aGluZydzIG9yZ2FuaXplZCBpbiB0aGUgcmlnaHQgcGxhY2UuPC9wPlxuICAgIGA7XG4gICAgZm9vdGVyLmlubmVySFRNTCA9IGBcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWRcIj5oZWxwX291dGxpbmU8L3NwYW4+XG4gICAgICAgIDxwIGlkID0gXCJoZWxwXCI+SG93IHRvIGJlc3QgdXNlIHRoaXMgQXBwPC9wPlxuICAgIGA7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJykuYXBwZW5kQ2hpbGQoZGl2MSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpLmFwcGVuZENoaWxkKGRpdjIpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKS5hcHBlbmRDaGlsZChmb290ZXIpO1xufTtcblxuY29uc3QgY3JlYXRlSGlkZGVuTW9kYWxzID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcHAnKS5pbm5lckhUTUwgKz0gYFxuICAgICAgICA8ZGl2IGNsYXNzID0gXCJxdWljay1hZGQtdG9kb1wiIGlkID0gXCJxdWlja0FkZFRvZG9cIj5cbiAgICAgICAgICAgIDxkaXYgaWQgPSBcInF1aWNrQWRkQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInRleHRcIiBwbGFjZWhvbGRlcj1cIlRhc2sgbmFtZVwiIGlkID0gXCJxdWlja0FkZElucHV0XCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZCA9IFwicXVpY2tBZGRTdWJtaXRcIj5BZGQgdGFzazwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkID0gXCJxdWlja0FkZENhbmNlbFwiPkNhbmNlbDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzID0gXCJub3RpZmljYXRpb25zXCIgaWQgPSBcIm5vdGlmaWNhdGlvbnNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcIm5vdGlmLWNvbnRhaW5lclwiIGlkID0gXCJub3RpZkNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxuYXY+XG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+Tm90aWZpY2F0aW9uczwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzID0gXCJyZWFkLWFsbC1idG5cIiBpZCA9IFwibm90aWZSZWFkQWxsQnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIG1pZFwiPmRvbmVfYWxsPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJub3RpZi1vdXRwdXRcIiBpZCA9IFwibm90aWZPdXRwdXRcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcyA9IFwicHJvamVjdC1jcmVhdG9yXCIgaWQgPSBcInByb2plY3RDcmVhdG9yXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+QWRkIHByb2plY3Q8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJwcm9qZWN0LWlucHV0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJuZXdQcm9qZWN0TmFtZVwiPk5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9IFwidGV4dFwiIGlkID0gXCJuZXdQcm9qZWN0TmFtZVwiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcInByb2plY3QtYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkID0gXCJwcm9qZWN0QWRkQnV0dG9uXCI+QWRkPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQgPSBcInByb2plY3RDYW5jZWxCdXR0b25cIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcyA9IFwicHJvamVjdC1lZGl0b3JcIiBpZCA9IFwicHJvamVjdEVkaXRvclwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8c3Ryb25nIGlkID0gXCJwcm9qZWN0TmFtZVwiPlByb2plY3QgTmFtZTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcInByb2plY3QtZWRpdG9yLWlucHV0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ1cGRhdGVkUHJvamVjdE5hbWVcIj5SZW5hbWUgdG88L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9IFwidGV4dFwiIGlkID0gXCJ1cGRhdGVkUHJvamVjdE5hbWVcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJ1cGRhdGUtcHJvamVjdC1idXR0b25zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQgPSBcInVwZGF0ZVByb2plY3RCdG5cIj5VcGRhdGU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZCA9IFwiY2FuY2VsUHJvamVjdEJ0blwiPkNhbmNlbDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkID0gXCJkZWxldGVQcm9qZWN0QnRuXCI+RGVsZXRlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3MgPSBcImxhYmVsLWNyZWF0b3JcIiBpZCA9IFwibGFiZWxDcmVhdG9yXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+QWRkIGxhYmVsPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwibGFiZWwtaW5wdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImFkZExhYmVsSW5wdXRcIj5OYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInRleHRcIiBpZCA9IFwiYWRkTGFiZWxJbnB1dFwiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImxhYmVsLWJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZCA9IFwiYWRkTmV3TGFiZWxCdG5cIj5BZGQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZCA9IFwiY2FuY2VsQWRkTGFiZWxCdG5cIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcyA9IFwibGFiZWwtZWRpdG9yXCIgaWQgPSBcImxhYmVsRWRpdG9yXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzdHJvbmcgaWQgPSBcImVkaXRMYWJlbE5hbWVcIj5sYWJlbCBOYW1lPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwibGFiZWwtZWRpdG9yLWlucHV0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ1cGRhdGVkTGFiZWxOYW1lXCI+UmVuYW1lIHRvPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInRleHRcIiBpZCA9IFwidXBkYXRlZExhYmVsTmFtZVwiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcInVwZGF0ZS1sYWJlbC1idXR0b25zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQgPSBcInVwZGF0ZUxhYmVsQnRuXCI+VXBkYXRlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQgPSBcImNhbmNlbFVwZGF0ZUJ0blwiPkNhbmNlbDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkID0gXCJkZWxldGVMYWJlbEJ0blwiPkRlbGV0ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzID0gXCJ0b2RvLWVkaXRvclwiIGlkID0gXCJ0YXNrRWRpdG9yXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+RWRpdCBUYXNrPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwidG9kby1lZGl0b3ItaW5wdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInVwZGF0ZWRUYXNrTmFtZVwiPlRhc2sgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJ0ZXh0XCIgaWQgPSBcInVwZGF0ZWRUYXNrTmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidXBkYXRlZFRhc2tOb3RlXCI+VGFzayBOb3RlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInRleHRcIiBpZCA9IFwidXBkYXRlZFRhc2tOb3RlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ1cGRhdGVkVGFza1NjaGVkdWxlXCI+U2NoZWR1bGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwidXBkYXRlZFRhc2tTY2hlZHVsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInRvZGF5XCI+VG9kYXk8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ0b21vcnJvd1wiPlRvbW9ycm93PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibmV4dC13ZWVrXCI+TmV4dCBXZWVrPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiY3VzdG9tXCI+Q3VzdG9tPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibm8tZGF0ZVwiPk5vIERhdGU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ1cGRhdGVkVGFza1Byb2plY3RcIj5Qcm9qZWN0PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cInVwZGF0ZWRUYXNrUHJvamVjdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkluYm94XCI+SW5ib3g8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ1cGRhdGVkVGFza0xhYmVsXCI+TGFiZWw8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwidXBkYXRlZFRhc2tMYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm5vbmVcIj5Ob25lPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidXBkYXRlZFRhc2tQcmlvcml0eVwiPlByaW9yaXR5PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cInVwZGF0ZWRUYXNrUHJpb3JpdHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwcmlvcml0eTFcIj5Qcmlvcml0eSAxPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicHJpb3JpdHkyXCI+UHJpb3JpdHkgMjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInByaW9yaXR5M1wiPlByaW9yaXR5IDM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwcmlvcml0eTRcIj5Qcmlvcml0eSA0PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcInRvZG8tZWRpdG9yLWJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZCA9IFwidXBkYXRlVG9kb1wiPlVwZGF0ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkID0gXCJjYW5jZWxVcGRhdGVUb2RvXCI+Q2FuY2VsPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYDtcbn07XG5cbmNvbnN0IGNyZWF0ZUFwcCA9ICgoKSA9PiB7XG4gICAgc2V0TGFuZ3VhZ2UoKTtcbiAgICBzZXR1cEhlYWRUYWcoKTtcbiAgICBjcmVhdGVBcHBEaXYoKTtcbiAgICBjcmVhdGVBcHBOYXYoKTtcbiAgICBjcmVhdGVBcHBCb2R5KCk7XG4gICAgY3JlYXRlU2lkZWJhck5hdigpO1xuICAgIGNyZWF0ZUNvbnRhaW5lcigpO1xuICAgIGNyZWF0ZUFkZFRhc2tEaXYoKTtcbiAgICBjcmVhdGVNb3JlQ29udGFpbmVySXRlbXMoKTtcbiAgICBjcmVhdGVIaWRkZW5Nb2RhbHMoKTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUFwcDsiLCJpbXBvcnQgeyBoTmF2LCB2TmF2LCBjb250YWluZXIsIHRhc2ssIG1vZGFsIH0gZnJvbSAnLi9zZWxlY3Rvci5qcyc7XG5pbXBvcnQgeyBwdXNoLCBkYXRlU3RyaW5nIH0gZnJvbSAnLi9kYXRhLmpzJztcblxuJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlbGVtZW50ID0gKCgpID0+IHtcbiAgICBsZXQgZmlyc3RGb2N1c2FibGVFbGVtZW50O1xuICAgIGxldCBsYXN0Rm9jdXNhYmxlRWxlbWVudDtcbiAgICBsZXQgbW9kYWxUb2dnbGVyO1xuICAgIHJldHVybiB7IFxuICAgICAgICBmaXJzdEZvY3VzYWJsZUVsZW1lbnQsIFxuICAgICAgICBsYXN0Rm9jdXNhYmxlRWxlbWVudCxcbiAgICAgICAgbW9kYWxUb2dnbGVyXG4gICAgfTtcbn0pKCk7XG5cbmNvbnN0IHRhYkV2ZW50ID0gKGUpID0+IHtcbiAgICBsZXQgaXNUYWJQcmVzc2VkID0gZS5rZXkgPT09ICdUYWInO1xuXG4gICAgaWYgKCFpc1RhYlByZXNzZWQpIHsgcmV0dXJuOyB9XG5cbiAgICBpZiAoZS5zaGlmdEtleSkge1xuICAgICAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gZWxlbWVudC5maXJzdEZvY3VzYWJsZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQubGFzdEZvY3VzYWJsZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gZWxlbWVudC5sYXN0Rm9jdXNhYmxlRWxlbWVudCkge1xuICAgICAgICAgICAgZWxlbWVudC5maXJzdEZvY3VzYWJsZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH0gXG59O1xuXG5jb25zdCB0cmFwRm9jdXMgPSAobW9kYWwsIHRvZ2dsZXIpID0+IHtcbiAgICBjb25zdCBmb2N1c2FibGVFbGVtZW50cyA9IFxuICAgICAgICBtb2RhbC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24sIGlucHV0LCBzZWxlY3QsIFt0YWJpbmRleF06bm90KFt0YWJpbmRleD1cIi0xXCJdKScpO1xuICAgIGVsZW1lbnQuZmlyc3RGb2N1c2FibGVFbGVtZW50ID0gZm9jdXNhYmxlRWxlbWVudHNbMF07XG4gICAgZWxlbWVudC5sYXN0Rm9jdXNhYmxlRWxlbWVudCA9IGZvY3VzYWJsZUVsZW1lbnRzW2ZvY3VzYWJsZUVsZW1lbnRzLmxlbmd0aC0xXTtcbiAgICBlbGVtZW50Lm1vZGFsVG9nZ2xlciA9IHRvZ2dsZXI7XG4gICAgXG4gICAgaWYoKHdpbmRvdy5pbm5lcldpZHRoIDw9IDc1MCkgJiYgdk5hdi5uYXYuY29udGFpbnMoZWxlbWVudC5tb2RhbFRvZ2dsZXIpKSB7XG4gICAgICAgIHZOYXYubmF2LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3ctbmF2Jyk7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRhYkV2ZW50KTtcbiAgICBlbGVtZW50LmZpcnN0Rm9jdXNhYmxlRWxlbWVudC5mb2N1cygpOyBcbn07XG5cbmNvbnN0IHJlbW92ZVRyYXBGb2N1cyA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGFiRXZlbnQpO1xuICAgIGlmKCh3aW5kb3cuaW5uZXJXaWR0aCA8PSA3NTApICYmIHZOYXYubmF2LmNvbnRhaW5zKGVsZW1lbnQubW9kYWxUb2dnbGVyKSkge1xuICAgICAgICB2TmF2Lm5hdi5jbGFzc0xpc3QuYWRkKCdzaG93LW5hdicpO1xuICAgICAgICB2TmF2LnByb2plY3RzLmZvY3VzKCk7XG4gICAgfVxuICAgIGVsZW1lbnQubW9kYWxUb2dnbGVyLmZvY3VzKCk7XG59O1xuXG5jb25zdCB0b2dnbGUgPSAoKCkgPT4ge1xuICAgIGNvbnN0IG1lbnUgPSAoZSkgPT4ge1xuICAgICAgICBpZih3aW5kb3cuaW5uZXJXaWR0aCA+IDc1MCl7XG4gICAgICAgICAgICBpZih2TmF2Lm5hdi5oYXNBdHRyaWJ1dGUoJ3N0eWxlJykpIFxuICAgICAgICAgICAgeyB2TmF2Lm5hdi5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7IH1cbiAgICAgICAgICAgIGVsc2UgeyB2TmF2Lm5hdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyB9XG4gICAgICAgIH0gZWxzZSB7IFxuICAgICAgICAgICAgdk5hdi5uYXYuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdy1uYXYnKTsgXG4gICAgICAgIH1cbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcXVpY2tBZGRUYXNrID0gKCkgPT4ge1xuICAgICAgICBtb2RhbC5xdWlja0FkZFRhc2suY2xhc3NMaXN0LnRvZ2dsZSgnb24nKTtcbiAgICAgICAgaWYobW9kYWwucXVpY2tBZGRUYXNrLmNsYXNzTGlzdC5jb250YWlucygnb24nKSkge1xuICAgICAgICAgICAgbW9kYWwucXVpY2tBZGRUYXNrSW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgIHRyYXBGb2N1cyhtb2RhbC5xdWlja0FkZENvbnRhaW5lciwgaE5hdi5wbHVzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlbW92ZVRyYXBGb2N1cygpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IG5vdGlmaWNhdGlvbiA9ICgpID0+IHtcbiAgICAgICAgbW9kYWwubm90aWZpY2F0aW9uLmNsYXNzTGlzdC50b2dnbGUoJ29uJyk7XG4gICAgICAgIGlmKG1vZGFsLm5vdGlmaWNhdGlvbi5jbGFzc0xpc3QuY29udGFpbnMoJ29uJykpIHtcbiAgICAgICAgICAgIHRyYXBGb2N1cyhtb2RhbC5ub3RpZkNvbnRhaW5lciwgaE5hdi5ub3RpZmljYXRpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVtb3ZlVHJhcEZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgcHJvamVjdHMgPSAoKSA9PiB7XG4gICAgICAgIHZOYXYucHJvamVjdExpc3RDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpO1xuICAgICAgICB2TmF2LnByb2plY3RDaGV2cm9uLmNsYXNzTGlzdC50b2dnbGUoJ3JvdGF0ZScpO1xuICAgIH07XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gKGUpID0+IHtcbiAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgbW9kYWwucHJvamVjdENyZWF0b3IuY2xhc3NMaXN0LnRvZ2dsZSgnb24nKTtcbiAgICAgICAgXG4gICAgICAgIGlmKG1vZGFsLnByb2plY3RDcmVhdG9yLmNsYXNzTGlzdC5jb250YWlucygnb24nKSl7XG4gICAgICAgICAgICBtb2RhbC5uZXdQcm9qZWN0TmFtZS52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgdHJhcEZvY3VzKG1vZGFsLnByb2plY3RDcmVhdG9yLCB2TmF2LmFkZFByb2plY3QpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdk5hdi5wcm9qZWN0cy5mb2N1cygpO1xuICAgICAgICAgICAgcmVtb3ZlVHJhcEZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgbGFiZWxzID0gKCkgPT4ge1xuICAgICAgICB2TmF2LmxhYmVsTGlzdENvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7XG4gICAgICAgIHZOYXYubGFiZWxDaGV2cm9uLmNsYXNzTGlzdC50b2dnbGUoJ3JvdGF0ZScpO1xuICAgIH07XG5cbiAgICBjb25zdCBhZGRMYWJlbCA9IChlKSA9PiB7XG4gICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgIG1vZGFsLmxhYmVsQ3JlYXRvci5jbGFzc0xpc3QudG9nZ2xlKCdvbicpO1xuXG4gICAgICAgIGlmKG1vZGFsLmxhYmVsQ3JlYXRvci5jbGFzc0xpc3QuY29udGFpbnMoJ29uJykpe1xuICAgICAgICAgICAgbW9kYWwuYWRkTGFiZWxJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgdHJhcEZvY3VzKG1vZGFsLmxhYmVsQ3JlYXRvciwgdk5hdi5hZGRMYWJlbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2TmF2LmxhYmVscy5mb2N1cygpO1xuICAgICAgICAgICAgcmVtb3ZlVHJhcEZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgdGFza0NyZWF0b3IgPSAoKSA9PiB7XG4gICAgICAgIGNvbnRhaW5lci5kaXYuY2xhc3NMaXN0LnRvZ2dsZSgnYWRkLXRyaWdnZXJlZCcpO1xuICAgICAgICBpZiAoY29udGFpbmVyLmRpdi5jbGFzc0xpc3QuY29udGFpbnMoJ2FkZC10cmlnZ2VyZWQnKSl7XG4gICAgICAgICAgICB0YXNrLmlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgX2l0ZW1NYW5hZ2VyID0gKG5ld0NsYXNzKSA9PiB7XG4gICAgICAgIHRhc2suYWRkRGl2LmNsYXNzTGlzdC50b2dnbGUobmV3Q2xhc3MpO1xuICAgICAgICBpZih0YXNrLmFkZERpdi5jbGFzc0xpc3QuY29udGFpbnMoJ2FkZC10YXNrLWRpdicpIFxuICAgICAgICAmJiB0YXNrLmFkZERpdi5jbGFzc0xpc3QuY29udGFpbnMobmV3Q2xhc3MpKXtcbiAgICAgICAgICAgIHRhc2suYWRkRGl2LmNsYXNzTmFtZSA9IGBhZGQtdGFzay1kaXYgJHtuZXdDbGFzc31gO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHRhc2tTY2hlZHVsZXIgPSAoKSA9PiB7XG4gICAgICAgIF9pdGVtTWFuYWdlcignZGlzcGxheS1zY2hlZHVsZXInKTtcbiAgICAgICAgaWYgKHRhc2suYWRkRGl2LmNsYXNzTGlzdC5jb250YWlucygnZGlzcGxheS1zY2hlZHVsZXInKSkge1xuICAgICAgICAgICAgcmVmcmVzaC5zY2hlZHVsZSgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHRhc2tQcm9qZWN0U2VsZWN0b3IgPSAoKSA9PiB7XG4gICAgICAgIF9pdGVtTWFuYWdlcignZGlzcGxheS1jYXJyaWVyJyk7XG4gICAgICAgIGlmICh0YXNrLmFkZERpdi5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc3BsYXktY2FycmllcicpKXtcbiAgICAgICAgICAgIGRpc3BsYXkudGFza1Byb2plY3RMaXN0KCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgdGFza0xhYmVsZXIgPSAoKSA9PiB7XG4gICAgICAgIF9pdGVtTWFuYWdlcignZGlzcGxheS1sYWJlbGVyJyk7XG4gICAgICAgIGlmICh0YXNrLmFkZERpdi5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc3BsYXktbGFiZWxlcicpKXtcbiAgICAgICAgICAgIGRpc3BsYXkudGFza0xhYmVsTGlzdCgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHRhc2tQcmlvcml0eVNldHRlciA9ICgpID0+IF9pdGVtTWFuYWdlcignZGlzcGxheS1wcmlvLXNldHRlcicpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbWVudSxcbiAgICAgICAgcXVpY2tBZGRUYXNrLFxuICAgICAgICBub3RpZmljYXRpb24sXG4gICAgICAgIHByb2plY3RzLCBhZGRQcm9qZWN0LFxuICAgICAgICBsYWJlbHMsIGFkZExhYmVsLFxuICAgICAgICB0YXNrQ3JlYXRvciwgdGFza1NjaGVkdWxlciwgdGFza1Byb2plY3RTZWxlY3RvciwgdGFza0xhYmVsZXIsIHRhc2tQcmlvcml0eVNldHRlclxuICAgIH07XG59KSgpO1xuXG5jb25zdCBjbGlja2VyID0gKGUpID0+IHtcbiAgICBpZihlLmtleSA9PT0gJ0VudGVyJyAmJiBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2ljLWRpdicpKXtcbiAgICAgICAgZS50YXJnZXQuY2xpY2soKTtcbiAgICB9XG59O1xuXG5jb25zdCB2aWV3TWFuYWdlciA9IChlKSA9PiB7XG4gICAgaWYgKHZOYXYubmF2LmNsYXNzTGlzdC5jb250YWlucygnc2hvdy1uYXYnKSAmJiAod2luZG93LmlubmVyV2lkdGggPD0gNzUwKSl7XG4gICAgICAgIGlmKCF2TmF2Lm5hdi5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KSkgeyBcbiAgICAgICAgICAgIHZOYXYubmF2LmNsYXNzTGlzdC50b2dnbGUoJ3Nob3ctbmF2Jyk7IFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYodGFzay5hZGREaXYuY2xhc3NOYW1lICE9ICdhZGQtdGFzay1kaXYnKXtcbiAgICAgICAgaWYoIXRhc2suYWRkRGl2LmNvbnRhaW5zKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKXtcbiAgICAgICAgICAgIHRhc2suYWRkRGl2LmNsYXNzTmFtZSA9ICdhZGQtdGFzay1kaXYnO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuY29uc3QgZGlzcGxheSA9ICgoKSA9PiB7XG5cbiAgICBjb25zdCBfZ2V0TGFzdFdvcmQgPSAoc3RyaW5nKSA9PiB7XG4gICAgICAgIGxldCB3b3JkID0gc3RyaW5nLnNwbGl0KFwiIFwiKTtcbiAgICAgICAgcmV0dXJuIHdvcmRbd29yZC5sZW5ndGggLSAxXTtcbiAgICB9O1xuXG4gICAgY29uc3QgdG9kb2xpc3QgPSAoZSkgPT4ge1xuICAgICAgICBjb250YWluZXIuaGVhZGVyLmlubmVyVGV4dCA9IF9nZXRMYXN0V29yZChlLnRhcmdldC5pbm5lclRleHQpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mby1jb21wIC5hY3RpdmUnKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cbiAgICAgICAgaWYod2luZG93LmlubmVyV2lkdGggPD0gNzUwKXtcbiAgICAgICAgICAgIGhOYXYubWVudS5jbGljaygpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGluc2VydCB0aGUgbG9naWMgaGVyZSwgbG9hZCB0aGUgbGlzdCBvZiBzZWxlY3RlZCBkaXNwbGF5XG4gICAgfTtcblxuICAgIGNvbnN0IGhvbWUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnRhaW5lci5oZWFkZXIuaW5uZXJUZXh0ID0gJ1RvZGF5JztcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZm8tY29tcCAuYWN0aXZlJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIHZOYXYudG9kYXkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgfTtcblxuICAgIGNvbnN0IHRhc2tQcm9qZWN0TGlzdCA9ICgpID0+IHtcbiAgICAgICAgdGFzay5wcm9qZWN0U2VsZWN0b3IuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHRhc2sucHJvamVjdFNlbGVjdG9yLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxidXR0b24gaWQgPSBcInByb2plY3REZWZhdWx0SW5ib3hcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIG1pZFwiPmluYm94PC9zcGFuPlxuICAgICAgICAgICAgICAgIDx1PkluYm94PC91PlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIGA7XG5cbiAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpKTtcblxuICAgICAgICBkYXRhLnByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIG1pZFwiPmNpcmNsZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8dT4ke3Byb2plY3R9PC91PlxuICAgICAgICAgICAgYDtcbiAgICAgICAgICAgIHRhc2sucHJvamVjdFNlbGVjdG9yLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCB0YXNrTGFiZWxMaXN0ID0gKCkgPT4ge1xuICAgICAgICB0YXNrLmxhYmVsQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICB0YXNrLmxhYmVsQ29udGFpbmVyLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxidXR0b24+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWRcIj5sYWJlbDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8dT5Mb3JlbSwgaXBzdW0uPC91PlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIGA7XG5cbiAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpKTtcblxuICAgICAgICBkYXRhLmxhYmVscy5mb3JFYWNoKChsYWJlbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWlkXCI+bGFiZWw8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHU+JHtsYWJlbH08L3U+XG4gICAgICAgICAgICBgO1xuICAgICAgICAgICAgdGFzay5sYWJlbENvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdG9kb2xpc3QsXG4gICAgICAgIGhvbWUsXG4gICAgICAgIHRhc2tQcm9qZWN0TGlzdCxcbiAgICAgICAgdGFza0xhYmVsTGlzdFxuICAgIH07XG59KSgpO1xuXG5jb25zdCByZWZyZXNoID0gKCgpID0+IHtcbiAgICBsZXQgZGF0YTtcblxuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gKCkgPT4ge1xuICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MnKSk7XG5cbiAgICAgICAgaWYgKGRhdGEucHJvamVjdHMubGVuZ3RoKXtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0TGlzdENvbnRhaW5lcicpLmlubmVySFRNTCA9ICcnO1xuXG4gICAgICAgICAgICBkYXRhLnByb2plY3RzLmZvckVhY2goKHByb2plY3QpPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGRpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImJ1bGxldFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3MgPSBcInVuaXF1ZVwiPiR7cHJvamVjdH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIG1pZFwiPm1vcmVfaG9yaXo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIGA7XG4gICAgICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0TGlzdENvbnRhaW5lcicpLmFwcGVuZENoaWxkKGRpdik7ICBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGxhYmVsTGlzdCA9ICgpID0+IHtcbiAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJykpO1xuXG4gICAgICAgIGlmIChkYXRhLmxhYmVscy5sZW5ndGgpe1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xhYmVsTGlzdENvbnRhaW5lcicpLmlubmVySFRNTCA9ICcnO1xuXG4gICAgICAgICAgICBkYXRhLmxhYmVscy5mb3JFYWNoKChsYWJlbCk9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWQgdGFnXCI+bGFiZWw8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcyA9IFwidW5pcXVlXCI+JHtsYWJlbH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIG1pZFwiPm1vcmVfaG9yaXo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIGA7XG4gICAgICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsYWJlbExpc3RDb250YWluZXInKS5hcHBlbmRDaGlsZChkaXYpOyAgIFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgc2NoZWR1bGUgPSAoKSA9PiB7XG4gICAgICAgIHRhc2suc3BhblRvZGF5LmlubmVyVGV4dCA9IGRhdGVTdHJpbmcudG9kYXlOYW1lKCk7XG4gICAgICAgIHRhc2suc3BhblR3bS5pbm5lclRleHQgPSBkYXRlU3RyaW5nLnRvbW9ycm93TmFtZSgpO1xuICAgICAgICB0YXNrLnNwYW5OZXh0V2Vlay5pbm5lclRleHQgPSBkYXRlU3RyaW5nLm5leHRXZWVrTmFtZSgpO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9qZWN0TGlzdCxcbiAgICAgICAgbGFiZWxMaXN0LFxuICAgICAgICBzY2hlZHVsZVxuICAgIH07XG59KSgpO1xuXG5jb25zdCBhZGQgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHF1aWNrID0gKCkgPT4ge1xuICAgICAgICBpZighbW9kYWwucXVpY2tBZGRUYXNrSW5wdXQudmFsdWUpe1xuICAgICAgICAgICAgYWxlcnQoJ1Rhc2sgbmFtZSByZXF1aXJlZCEnKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHB1c2gucXVpY2sobW9kYWwucXVpY2tBZGRUYXNrSW5wdXQudmFsdWUpO1xuICAgICAgICB0b2dnbGUucXVpY2tBZGRUYXNrKCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCk9PiBhbGVydCgnQWRkZWQgdG8gSW5ib3ghJyksIDUwMCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHByb2plY3QgPSAoKSA9PiB7XG4gICAgICAgIGlmKCFtb2RhbC5uZXdQcm9qZWN0TmFtZS52YWx1ZSl7XG4gICAgICAgICAgICBhbGVydCgnUHJvamVjdCBuYW1lIHJlcXVpcmVkIScpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcHVzaC5wcm9qZWN0KG1vZGFsLm5ld1Byb2plY3ROYW1lLnZhbHVlKTtcbiAgICAgICAgbW9kYWwucHJvamVjdENyZWF0b3IuY2xhc3NMaXN0LnRvZ2dsZSgnb24nKTtcbiAgICAgICAgc2V0VGltZW91dCgoKT0+IGFsZXJ0KCdBZGRlZCB0byBQcm9qZWN0cyEnKSwgNTAwKTtcbiAgICAgICAgcmVmcmVzaC5wcm9qZWN0TGlzdCgpO1xuICAgIH07XG5cbiAgICBjb25zdCBsYWJlbCA9ICgpID0+IHtcbiAgICAgICAgaWYoIW1vZGFsLmFkZExhYmVsSW5wdXQudmFsdWUpe1xuICAgICAgICAgICAgYWxlcnQoJ0xhYmVsIG5hbWUgcmVxdWlyZWQhJylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBwdXNoLmxhYmVsKG1vZGFsLmFkZExhYmVsSW5wdXQudmFsdWUpO1xuICAgICAgICBtb2RhbC5sYWJlbENyZWF0b3IuY2xhc3NMaXN0LnRvZ2dsZSgnb24nKTtcbiAgICAgICAgc2V0VGltZW91dCgoKT0+IGFsZXJ0KCdBZGRlZCB0byBMYWJlbHMhJyksIDUwMCk7XG4gICAgICAgIHJlZnJlc2gubGFiZWxMaXN0KCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHRvZG8gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYoIXRhc2suaW5wdXQudmFsdWUpe1xuICAgICAgICAgICAgYWxlcnQoJ1Rhc2sgbmFtZSByZXF1aXJlZCEnKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vZml4IGl0ZW0gc2VsZWN0aW9uIGZpcnN0IGJlZm9yZSBmaXhpbmcgdGhpc1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBxdWljayxcbiAgICAgICAgcHJvamVjdCxcbiAgICAgICAgbGFiZWwsXG4gICAgICAgIHRvZG9cbiAgICB9O1xufSkoKTtcblxuY29uc3Qgdmlld3BvcnRMaXN0ZW5lciA9ICgpID0+IHtcbiAgICB2TmF2Lm5hdi5oYXNBdHRyaWJ1dGUoJ3N0eWxlJylcbiAgICAgICAgPyB2TmF2Lm5hdi5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJykgOiB2TmF2Lm5hdi5jbGFzc0xpc3QucmVtb3ZlKCdkaXNwbGF5LW5hdicpO1xufTtcblxuY29uc3QgZXZlbnQgPSAoKCkgPT4ge1xuICAgIGhOYXYubWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZS5tZW51KTtcblxuICAgIGhOYXYucGx1cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZS5xdWlja0FkZFRhc2spO1xuICAgIG1vZGFsLnF1aWNrQWRkVGFza0NhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICB0b2dnbGUucXVpY2tBZGRUYXNrKTtcblxuICAgIGhOYXYubm90aWZpY2F0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlLm5vdGlmaWNhdGlvbik7XG4gICAgbW9kYWwubm90aWZSZWFkQWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlLm5vdGlmaWNhdGlvbik7XG5cbiAgICB2TmF2LnByb2plY3RzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlLnByb2plY3RzKTtcbiAgICB2TmF2LnByb2plY3RzLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgY2xpY2tlcik7XG4gICAgdk5hdi5hZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlLmFkZFByb2plY3QpO1xuICAgIG1vZGFsLmNhbmNlbFByb2plY3RDcmVhdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlLmFkZFByb2plY3QpO1xuXG4gICAgdk5hdi5sYWJlbHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGUubGFiZWxzKTtcbiAgICB2TmF2LmxhYmVscy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGNsaWNrZXIpO1xuICAgIHZOYXYuYWRkTGFiZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGUuYWRkTGFiZWwpO1xuICAgIG1vZGFsLmNhbmNlbExhYmVsQ3JlYXRvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZS5hZGRMYWJlbCk7XG5cbiAgICBjb250YWluZXIuYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZS50YXNrQ3JlYXRvcik7XG4gICAgdGFzay5jYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGUudGFza0NyZWF0b3IpO1xuICAgIHRhc2suc2NoZWR1bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGUudGFza1NjaGVkdWxlcik7XG4gICAgdGFzay5wcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlLnRhc2tQcm9qZWN0U2VsZWN0b3IpO1xuICAgIHRhc2subGFiZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGUudGFza0xhYmVsZXIpO1xuICAgIHRhc2sucHJpb3JpdHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGUudGFza1ByaW9yaXR5U2V0dGVyKTtcblxuICAgIHZOYXYuaW5ib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5LnRvZG9saXN0KTtcbiAgICB2TmF2LnRvZGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheS50b2RvbGlzdCk7XG4gICAgaE5hdi5ob21lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheS5ob21lKTtcbiAgICB2TmF2LnVwY29taW5nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheS50b2RvbGlzdCk7XG5cbiAgICBtb2RhbC5xdWlja0FkZFRhc2tTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGQucXVpY2spO1xuICAgIG1vZGFsLnByb2plY3RBZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGQucHJvamVjdCk7XG4gICAgbW9kYWwuYWRkTmV3TGFiZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGQubGFiZWwpO1xuXG4gICAgdGFzay5hZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGQudG9kbyk7XG5cblxuICAgIC8vZml4IGRhdGEuanMgZmlyc3QgYmVmb3JlIGFkZGluZyBldmVudHMgaW4gbGFiZWwsIHByb2plY3QsIGFuZCB0b2RvIGVkaXRvclxuXG4gICAgd2luZG93Lm9uY2xpY2sgPSB2aWV3TWFuYWdlcjtcbiAgICB3aW5kb3cub25yZXNpemUgPSB2aWV3cG9ydExpc3RlbmVyO1xuXG4gICAgLy9lc2Mga2V5dXAgdGhhdCBjbG9zZXMgbW9kYWxzIHdpbGwgYmUgY29vbFxuXG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBldmVudDsiLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGhOYXYgPSAoKCkgPT4ge1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2QnRuTWVudScpO1xuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2QnRuSG9tZScpO1xuICAgIGNvbnN0IGZvcm1TZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybVNlYXJjaCcpO1xuICAgIGNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYXZJbnB1dFNlYXJjaCcpO1xuICAgIGNvbnN0IHBsdXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2QnRuUXVpY2tBZGQnKTtcbiAgICBjb25zdCBub3RpZmljYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2QnRuTm90aWZpY2F0aW9uJyk7XG4gICAgY29uc3Qgbm90aWZDb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYXZCdG5Ob3RpZmljYXRpb25Db3VudCcpO1xuXG4gICAgcmV0dXJuIHsgXG4gICAgICAgIG1lbnUsIGhvbWUsIFxuICAgICAgICBmb3JtU2VhcmNoLCBzZWFyY2gsIFxuICAgICAgICBwbHVzLCBub3RpZmljYXRpb24sIG5vdGlmQ291bnQgfTtcbn0pKCk7XG5cbmNvbnN0IHZOYXYgPSAoKCkgPT4ge1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYXZJbmZvQ29tcCcpO1xuICAgIGNvbnN0IGluYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NibmF2SW5ib3hCdG4nKTtcbiAgICBjb25zdCBpbmJveENvdW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2JuYXZJbmJveEJ0biA+IHNhbXAnKTtcbiAgICBjb25zdCB0b2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzYm5hdlRvZGF5QnRuJyk7XG4gICAgY29uc3QgdG9kYXlDb3VudGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NibmF2VG9kYXlCdG4gPiBzYW1wJyk7XG4gICAgY29uc3QgdXBjb21pbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2JuYXZVcGNvbUJ0bicpO1xuICAgIGNvbnN0IHVwY29taW5nQ291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzYm5hdlVwY29tQnRuID4gc2FtcCcpO1xuICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NibmF2UHJvamVjdHNEaXYnKTtcbiAgICBjb25zdCBwcm9qZWN0Q2hldnJvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzYm5hdlByb2plY3RzRGl2ID4gc3BhbicpO1xuICAgIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2JuYXZQcm9qZWN0QWRkQnRuJyk7XG4gICAgY29uc3QgcHJvamVjdExpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdExpc3RDb250YWluZXInKTtcbiAgICBjb25zdCBsYWJlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2JuYXZMYWJlbHNEaXYnKTtcbiAgICBjb25zdCBsYWJlbENoZXZyb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2JuYXZMYWJlbHNEaXYgPiBzcGFuJyk7XG4gICAgY29uc3QgYWRkTGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2JuYXZMYWJlbEFkZEJ0bicpO1xuICAgIGNvbnN0IGxhYmVsTGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsYWJlbExpc3RDb250YWluZXInKTtcblxuICAgIHJldHVybiB7IFxuICAgICAgICBuYXYsXG4gICAgICAgIGluYm94LCBpbmJveENvdW50ZXIsXG4gICAgICAgIHRvZGF5LCB0b2RheUNvdW50ZXIsXG4gICAgICAgIHVwY29taW5nLCB1cGNvbWluZ0NvdW50ZXIsXG4gICAgICAgIHByb2plY3RzLCBwcm9qZWN0Q2hldnJvbiwgYWRkUHJvamVjdCwgcHJvamVjdExpc3RDb250YWluZXIsXG4gICAgICAgIGxhYmVscywgbGFiZWxDaGV2cm9uLCBhZGRMYWJlbCwgbGFiZWxMaXN0Q29udGFpbmVyXG4gICAgfTtcbn0pKCk7XG5cbmNvbnN0IGNvbnRhaW5lciA9ICgoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhaW5lcicpO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoZWFkZXInKTtcbiAgICBjb25zdCBhZGRUYXNrQnRuRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFRhc2tCdG5EaXYnKTtcbiAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFRhc2tCdG4nKTtcbiAgICBjb25zdCBlbXB0eVN0YXRlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VtcHR5U3RhdGVEaXYnKTtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9vdGVyJyk7XG4gICAgY29uc3QgaGVscCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoZWxwJyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBkaXYsXG4gICAgICAgIGhlYWRlcixcbiAgICAgICAgYWRkVGFza0J0bkRpdiwgYWRkVGFza0J0bixcbiAgICAgICAgZW1wdHlTdGF0ZURpdiwgZm9vdGVyLCBoZWxwXG4gICAgfTtcbn0pKCk7XG5cbmNvbnN0IHRhc2sgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGFkZERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRUYXNrRGl2Jyk7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkVGFza0lucHV0Jyk7XG4gICAgY29uc3Qgc2NoZWR1bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VsZWN0U2NoZWR1bGVCdG4nKTtcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlbGVjdFByb2plY3RCdG4nKTtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWxlY3RMYWJlbEJ0bicpO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlbGVjdFByaW9yaXR5QnRuJyk7XG4gICAgY29uc3QgYWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFRhc2tNYWluQnRuJyk7XG4gICAgY29uc3QgY2FuY2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFRhc2tDYW5jZWxCdG4nKTtcblxuICAgIGNvbnN0IHNjaGVkVG9kYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2NoZWR1bGVyVG9kYXlCdG4nKTtcbiAgICBjb25zdCBzcGFuVG9kYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2NoZWR1bGVyVG9kYXlTcGFuJyk7XG4gICAgY29uc3Qgc2NoZWRUd20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2NoZWR1bGVyVHdtQnRuJyk7XG4gICAgY29uc3Qgc3BhblR3bSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzY2hlZHVsZXJUd21TcGFuJyk7XG4gICAgY29uc3Qgc2NoZWROZXh0V2VlayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzY2hlZHVsZXJOZXh0V2Vla0J0bicpO1xuICAgIGNvbnN0IHNwYW5OZXh0V2VlayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzY2hlZHVsZXJOZXh0V2Vla1NwYW4nKTtcbiAgICBjb25zdCBzY2hlZEN1c3RvbUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NjaGVkdWxlckN1c3RvbUlucHV0Jyk7XG4gICAgY29uc3Qgc2NoZWRDdXN0b21CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2NoZWR1bGVyQ3VzdG9tQnRuJyk7XG4gICAgY29uc3Qgc2NoZWROb0RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2NoZWR1bGVyTm9EYXRlQnRuJyk7XG4gICAgY29uc3QgcHJvamVjdFNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RTZWxlY3RvcicpO1xuICAgIGNvbnN0IHByb2plY3RJbmJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0RGVmYXVsdEluYm94Jyk7XG4gICAgY29uc3QgbGFiZWxDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGFiZWxDb250YWluZXInKTtcbiAgICBjb25zdCBwcmlvcml0eU9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eU9uZScpO1xuICAgIGNvbnN0IHByaW9yaXR5VHdvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5VHdvJyk7XG4gICAgY29uc3QgcHJpb3JpdHlUaHJlZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eVRocmVlJyk7XG4gICAgY29uc3QgcHJpb3JpdHlGb3VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5RGVmYXVsdCcpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5wdXQsXG4gICAgICAgIHNjaGVkdWxlLCBwcm9qZWN0LFxuICAgICAgICBsYWJlbCwgcHJpb3JpdHksXG4gICAgICAgIGFkZERpdiwgYWRkLCBjYW5jZWwsXG4gICAgICAgIHNjaGVkVG9kYXksIHNwYW5Ub2RheSxcbiAgICAgICAgc2NoZWRUd20sIHNwYW5Ud20sXG4gICAgICAgIHNjaGVkTmV4dFdlZWssIHNwYW5OZXh0V2VlayxcbiAgICAgICAgc2NoZWRDdXN0b21JbnB1dCwgc2NoZWRDdXN0b21CdG4sXG4gICAgICAgIHNjaGVkTm9EYXRlLFxuICAgICAgICBwcm9qZWN0U2VsZWN0b3IsIHByb2plY3RJbmJveCxcbiAgICAgICAgbGFiZWxDb250YWluZXIsXG4gICAgICAgIHByaW9yaXR5T25lLCBwcmlvcml0eVR3bywgcHJpb3JpdHlUaHJlZSwgcHJpb3JpdHlGb3VyXG4gICAgfVxufSkoKTtcblxuY29uc3QgbW9kYWwgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHF1aWNrQWRkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNxdWlja0FkZFRvZG8nKTtcbiAgICBjb25zdCBxdWlja0FkZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNxdWlja0FkZENvbnRhaW5lcicpO1xuICAgIGNvbnN0IHF1aWNrQWRkVGFza0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3F1aWNrQWRkSW5wdXQnKTtcbiAgICBjb25zdCBxdWlja0FkZFRhc2tTdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcXVpY2tBZGRTdWJtaXQnKTtcbiAgICBjb25zdCBxdWlja0FkZFRhc2tDYW5jZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcXVpY2tBZGRDYW5jZWwnKTtcbiAgICBjb25zdCBub3RpZmljYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbm90aWZpY2F0aW9ucycpO1xuICAgIGNvbnN0IG5vdGlmQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25vdGlmQ29udGFpbmVyJyk7XG4gICAgY29uc3Qgbm90aWZSZWFkQWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25vdGlmUmVhZEFsbEJ0bicpO1xuICAgIGNvbnN0IG5vdGlmT3V0cHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignbm90aWZPdXRwdXQnKTtcbiAgICBjb25zdCBwcm9qZWN0Q3JlYXRvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0Q3JlYXRvcicpO1xuICAgIGNvbnN0IG5ld1Byb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ld1Byb2plY3ROYW1lJyk7XG4gICAgY29uc3QgcHJvamVjdEFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0QWRkQnV0dG9uJyk7XG4gICAgY29uc3QgY2FuY2VsUHJvamVjdENyZWF0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdENhbmNlbEJ1dHRvbicpO1xuICAgIGNvbnN0IHByb2plY3RFZGl0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdEVkaXRvcicpO1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3ROYW1lJyk7XG4gICAgY29uc3QgdXBkYXRlZFByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VwZGF0ZWRQcm9qZWN0TmFtZScpO1xuICAgIGNvbnN0IHVwZGF0ZVByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXBkYXRlUHJvamVjdEJ0bicpO1xuICAgIGNvbnN0IGNhbmNlbFByb2plY3RFZGl0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FuY2VsUHJvamVjdEJ0bicpO1xuICAgIGNvbnN0IGRlbGV0ZVByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVsZXRlUHJvamVjdEJ0bicpO1xuICAgIGNvbnN0IGxhYmVsQ3JlYXRvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsYWJlbENyZWF0b3InKTtcbiAgICBjb25zdCBhZGRMYWJlbElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZExhYmVsSW5wdXQnKTtcbiAgICBjb25zdCBhZGROZXdMYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGROZXdMYWJlbEJ0bicpO1xuICAgIGNvbnN0IGNhbmNlbExhYmVsQ3JlYXRvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW5jZWxBZGRMYWJlbEJ0bicpO1xuICAgIGNvbnN0IGxhYmVsRWRpdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xhYmVsRWRpdG9yJyk7XG4gICAgY29uc3QgZWRpdExhYmVsTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0TGFiZWxOYW1lJyk7XG4gICAgY29uc3QgdXBkYXRlZExhYmVsTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1cGRhdGVkTGFiZWxOYW1lJyk7XG4gICAgY29uc3QgdXBkYXRlTGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXBkYXRlTGFiZWxCdG4nKTtcbiAgICBjb25zdCBjYW5jZWxMYWJlbEVkaXRvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW5jZWxVcGRhdGVCdG4nKTtcbiAgICBjb25zdCBkZWxldGVMYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZWxldGVMYWJlbEJ0bicpO1xuICAgIGNvbnN0IHRhc2tFZGl0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza0VkaXRvcicpO1xuICAgIGNvbnN0IHVwZGF0ZWRUYXNrTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1cGRhdGVkVGFza05hbWUnKTtcbiAgICBjb25zdCB1cGRhdGVkVGFza05vdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXBkYXRlZFRhc2tOb3RlJyk7XG4gICAgY29uc3QgdXBkYXRlZFRhc2tTY2hlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1cGRhdGVkVGFza1NjaGVkdWxlJyk7XG4gICAgY29uc3QgdXBkYXRlZFRhc2tQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VwZGF0ZWRUYXNrUHJvamVjdCcpO1xuICAgIGNvbnN0IHVwZGF0ZWRUYXNrTGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXBkYXRlZFRhc2tMYWJlbCcpO1xuICAgIGNvbnN0IHVwZGF0ZWRUYXNrUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXBkYXRlZFRhc2tQcmlvcml0eScpO1xuICAgIGNvbnN0IHVwZGF0ZVRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXBkYXRlVG9kbycpO1xuICAgIGNvbnN0IGNhbmNlbFRhc2tFZGl0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FuY2VsVXBkYXRlVG9kbycpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcXVpY2tBZGRUYXNrLCBxdWlja0FkZENvbnRhaW5lciwgcXVpY2tBZGRUYXNrSW5wdXQsIHF1aWNrQWRkVGFza1N1Ym1pdCwgcXVpY2tBZGRUYXNrQ2FuY2VsLFxuICAgICAgICBub3RpZmljYXRpb24sIG5vdGlmQ29udGFpbmVyLCBub3RpZlJlYWRBbGwsIG5vdGlmT3V0cHV0LFxuICAgICAgICBwcm9qZWN0Q3JlYXRvciwgbmV3UHJvamVjdE5hbWUsIHByb2plY3RBZGQsIGNhbmNlbFByb2plY3RDcmVhdG9yLFxuICAgICAgICBwcm9qZWN0RWRpdG9yLCBwcm9qZWN0TmFtZSwgdXBkYXRlZFByb2plY3ROYW1lLCB1cGRhdGVQcm9qZWN0LFxuICAgICAgICAgICAgY2FuY2VsUHJvamVjdEVkaXRvciwgZGVsZXRlUHJvamVjdCxcbiAgICAgICAgbGFiZWxDcmVhdG9yLCBhZGRMYWJlbElucHV0LCBhZGROZXdMYWJlbCwgY2FuY2VsTGFiZWxDcmVhdG9yLFxuICAgICAgICBsYWJlbEVkaXRvciwgZWRpdExhYmVsTmFtZSwgdXBkYXRlZExhYmVsTmFtZSwgdXBkYXRlTGFiZWwsXG4gICAgICAgICAgICBjYW5jZWxMYWJlbEVkaXRvciwgZGVsZXRlTGFiZWwsXG4gICAgICAgIHRhc2tFZGl0b3IsIHVwZGF0ZWRUYXNrTmFtZSwgdXBkYXRlZFRhc2tOb3RlLCB1cGRhdGVkVGFza1NjaGVkLCB1cGRhdGVkVGFza1Byb2plY3QsXG4gICAgICAgICAgICB1cGRhdGVkVGFza0xhYmVsLCB1cGRhdGVkVGFza1ByaW9yaXR5LCB1cGRhdGVUYXNrLCBjYW5jZWxUYXNrRWRpdG9yXG4gICAgfVxufSkoKTtcblxuZXhwb3J0IHsgXG4gICAgaE5hdixcbiAgICB2TmF2LFxuICAgIGNvbnRhaW5lcixcbiAgICB0YXNrLFxuICAgIG1vZGFsXG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgY3JlYXRlQXBwIGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB0ZXN0IGZyb20gJy4vZGF0YS5qcyc7XG5pbXBvcnQgeyBoTmF2LCB2TmF2LCBjb250YWluZXIsIHRhc2ssIG1vZGFsIH0gZnJvbSAnLi9zZWxlY3Rvci5qcyc7XG5pbXBvcnQgZXZlbnQgZnJvbSAnLi9ldmVudC5qcyc7XG5cbid1c2Ugc3RyaWN0JztcblxuLy8gdk5hdi5pbmJveC5vbmNsaWNrID0gZnVuY3Rpb24oKXtcbi8vICAgICBjb25zb2xlLmxvZygxKVxuLy8gfVxuXG4vLyBoTmF2LmZvcm1TZWFyY2gub25zdWJtaXQgPSBmdW5jdGlvbihlKXtcbi8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgaE5hdi5zZWFyY2guYmx1cigpO1xuLy8gICAgIGNvbnNvbGUubG9nKDIpO1xuLy8gfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==