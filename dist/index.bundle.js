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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --light92: hsl(0, 0%, 92%);\n    --light88: hsl(0, 0%, 88%);\n    --dark: hsl(0, 0%, 12%);\n    --malibu: hsl(192, 93%, 72%);\n    --auburn: hsl(0, 75%, 65%);\n    --mariner: hsl(216, 75%, 51%);\n    --laurel: hsl(120, 100%, 25%);\n    --purple: hsl(264, 61%, 47%);\n    --sun: hsl(34, 93%, 48%);\n    --transparent1: rgba(0,0,0,.1);\n    --transparent2: rgba(0,0,0,.2);\n\n    --background: var(--light92);\n    --foreground: var(--malibu);\n}\n\n*, *:before, *:after {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;  \n}\n\nhtml,\nbody {\n    overflow-x: hidden;\n}\n\nbody {\n    min-height: 100vh;\n    background-color: var(--background);\n    font-family:sans-serif;\n    color: var(--dark);\n}\n\nbutton,\n.search-input {\n    outline: none;\n    border: none;\n    border-radius: 3px;\n    font-family:sans-serif;\n}\n\nbutton {\n    padding: .125rem;\n    color: var(--dark);\n    background-color: transparent;\n}\n\nbutton,\n.ic-div {\n    cursor: pointer;\n}\n\nspan.mid {\n    vertical-align: middle;\n}\n\nspan,\nh1 {\n    user-select: none;\n}\n\n.app {\n    display: flex;\n    flex-direction: column;\n    width: 100vw;\n    height: 100vh;\n}\n\n.nav-comp ,\n.nc-left,\n.search-div,\n.nc-right {\n    display: inline-flex;\n}\n\n.nav-comp {\n    justify-content: space-between;\n    width: 100%;\n    padding: .5rem 3rem .5rem 3rem;\n    background-color: var(--foreground);\n}\n\n.nc-left > * {\n    margin: 0 .25rem 0 0;\n}\n\n.nc-right > * {\n    margin: 0 0 0 .25rem;\n}\n\n.nc-right button:first-child {\n    margin: 0;\n}\n\n.search-div {\n    height: 100%;\n    background-color: var(--foreground);\n}\n\n.search-div > span:first-child {\n    align-self: center;\n    cursor: text;\n    margin: .1rem;\n    font-size: 1.6rem;\n    z-index: 2;\n}\n\n.search-div button {\n    margin: .2rem 0 .2rem -1.5rem;\n    height: 20px;\n    width: 20px;\n    align-self: center;\n    display: none;\n}\n\n.search-div button:hover,\n.search-div button:focus-visible {\n    color: var(--auburn);\n}\n\n.search-input {\n    padding: 0 1.6rem 0 1.8rem;\n    margin-left: -1.9rem;\n    background-color: var(--transparent1);\n}\n\n.search-input::-webkit-search-cancel-button {\n    -webkit-appearance: none;\n}\n\n.search-input:not(:placeholder-shown) + button {\n    display: block;\n}\n\n.search-div:focus-within .search-input,\n.search-div:hover .search-input,\n.search-input:not(:placeholder-shown){\n    background-color: var(--light92);\n}\n\n.search-div button span {\n    font-size: 1rem;\n}\n\n.app-body {\n    display: flex;\n    flex: 1;\n    max-height: calc(100% - 46.59px);\n    overflow-y: hidden;\n}\n\n.wrapper {\n    height: 100%;\n    width: 100%;\n    display: flex;\n}\n\n.info-comp {\n    display: flex;\n    flex-direction: column;\n    padding: 2rem .25rem 0 2.8rem;\n    background-color: var(--light88);\n    overflow-y: auto;\n}\n\n.info-comp > * {\n    text-align: left;\n    font-size: .9rem;\n    width: 294px;\n    padding: 5px;\n}\n\n.info-comp > * > samp {\n    float: right;\n    opacity: .5;\n    margin: 4px 1rem 4px 0;\n}\n\n.ic-div {\n    margin: .25rem 0 0 0;\n}\n\n.info-comp > div:first-of-type{\n    margin: 1rem 0 0 0;\n}\n\n.ic-span {\n    margin: 0 .25rem 0 0;\n}\n\n.info-comp > button:first-child span {\n    color: var(--mariner);\n}\n\n.info-comp > button:nth-child(2) span {\n    color: var(--laurel);\n}\n\n.info-comp > button:nth-child(3) span {\n    color: var(--purple);\n}\n\n.info-comp .active {\n    background-color: var(--malibu);\n}\n\n.opa {\n    opacity: .5;\n}\n\n.ic-add-btn {\n    float: right;\n    margin: 0px .5rem 0 0;\n    padding: 0;\n    display: none;\n}\n\n.ic-add-btn:hover + strong,\n.ic-add-btn:focus-visible + strong {\n    text-decoration: underline;\n    text-underline-offset: 30%;\n}\n\n.info-comp:focus-within .ic-add-btn,\n.info-comp:hover .ic-add-btn{\n    display: inherit;\n}\n\n.ic-div > div {\n    display: none;\n}\n\n.ic-div > div.show {\n    display: flex;\n    flex-direction: column;\n}\n\n.ic-project > span.rotate,\n.ic-label > span.rotate {\n    transform: rotate(90deg);\n}\n\n\n.show {\n    margin: .75rem 0 0 0;\n}\n\n.show > div {\n    text-align: left;\n    display: flex;\n    padding: .5rem .5rem .5rem .5rem;\n    height: 34px;\n    font-size: .9rem;\n    align-items: center;\n    border-radius: 3px;\n}\n\nspan.unique {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    align-self: center;\n    margin-right: .2rem;\n}\n\n.show button {\n    padding: 0;\n    visibility: hidden;\n}\n\n.show > div:hover,\n.show > div:focus-visible {\n    background-color: var(--transparent2);\n}\n\n.show > div:hover button,\n.show > div:focus-visible button,\n.show > div:focus-within button{\n    visibility: visible;\n    margin-left: auto;\n}\n\n.show button:hover,\n.show button:focus-visible {\n    background-color: transparent!important;\n}\n\n.bullet {\n    min-width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    margin: 0 .7rem 0 .5rem;\n    background-color: var(--transparent2);\n}\n\n.tag {\n    transform: scale(.8);\n    margin: 0 .2rem 0 .2rem;\n    color: var(--transparent2);\n}\n\n.container {\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    overflow-y: auto;\n    padding: 0 2rem 0 2rem;\n\n}\n\n.container > * {\n    max-width: 800px;\n    width: 100%;\n}\n\n.container > footer {\n    margin-top: auto;\n}\n\n.container > header {\n    padding: 2rem 0 1rem 0;\n    position: sticky;\n    top: 0;\n    background-color: var(--light92);\n    z-index: 3;\n}\n\nh1 {\n    font-size: 1.3rem;\n}\n\n.todo {\n    display: flex;\n    padding: 2px 0;\n    margin: .5rem 0 .5rem 0;\n    justify-content: flex-start;\n    flex-direction: row;\n    border-bottom: 1px solid var(--transparent1);\n}\n\n.todo,\n.todo * {\n    cursor: pointer;\n}\n\n.checkbox-btn { \n    height: 18px;\n    max-width: 18px;\n    width: 100%;\n    margin: .27rem .7rem 0 0;\n    z-index: 2;\n    position: relative;\n}\n\n.checkbox-btn.prio1 {\n    border: 2px solid var(--auburn);\n}\n\n.checkbox-btn.prio2 {\n    border: 2px solid var(--sun);\n}\n\n.checkbox-btn.prio3 {\n    border: 2px solid var(--mariner);\n}\n\n.checkbox-btn.prio4 {\n    border: 2px solid var(--transparent2);\n}\n\n.checkbox-btn:hover,\n.checkbox-btn:focus-visible {\n    border-color: transparent;\n    background-color: var(--transparent1);\n}\n\n.checkbox-btn + span {\n    padding: 0;\n    line-height: 1rem;\n    font-size: 2rem;\n    position: relative;\n    color: var(--transparent2);\n    visibility: hidden;\n    float: right;\n    margin: -.9rem 0 0 -1rem;    \n}\n\n.checkbox-btn:hover + span,\n.checkbox-btn:focus-visible + span {\n    visibility: visible;\n}\n\n.checkbox-btn:active + span{\n    color: var(--laurel);\n}\n\n.todo-text {\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n}\n\n.todo-text > label {\n    line-height: 1.4rem;\n}\n\n.todo-text-note {\n    text-indent: 1rem;\n    font-size: .9rem;\n    margin: 0 0 .25rem 0;\n}\n\n.todo-text-note,\n.todo-text-note > span,\n.todo-text small {\n    color: gray;\n}\n\n.todo-text-note > span,\nem,\nem > span {\n    font-size: .9rem!important;\n}\n\nem {\n    width: 100%;\n}\n\n.sched-due {\n    color: var(--auburn);\n}\n\n.sched-today {\n    color: var(--laurel);\n}\n\n.sched-upcom {\n    color: var(--purple);\n}\n\n.todo-tools-container {\n    display: flex;\n    justify-content: flex-end;\n    align-items: flex-end;\n    margin: -20px 0 0 0;\n    visibility: hidden;\n}\n\n.todo-tools-container * {\n    color: gray;\n}\n\n.tool-span {\n    font-size: 1.2rem;\n}\n\n.todo:hover .todo-tools-container,\n.todo:focus-within .todo-tools-container {\n    visibility: visible;\n}\n\nbutton:hover,\nbutton:focus-visible {\n    background-color: var(--transparent2);\n}\n\nbutton:focus-visible {\n    outline: auto;\n}\n\n.add-task-btn {\n    text-align: left;\n    color: gray;\n}\n\n.add-task-btn * {\n    padding: .1rem;\n}\n\n.add-task-btn span {\n    border-radius: 50%;\n    padding: 0;\n    color: var(--auburn);\n}\n\n.add-task-btn:hover,\n.add-task-btn:focus-visible,\n.add-task-btn span {\n    background-color: transparent;\n}\n\n.add-task-btn:hover span,\n.add-task-btn:focus-visible span {\n    color: var(--mariner);\n}\n\n.empty-state-div {\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    justify-content: center;\n    align-items: center;\n}\n\n.empty-state-div img {\n    max-width: 180px;\n    \n    height: auto;\n}\n\n.empty-state-div h4 {\n    font-weight: normal;\n    color: gray;\n}\n\n.empty-state-div *:nth-child(n+2) {\n    margin: .25rem 0 0 0;\n}\n\n.empty-state-div *:nth-child(n+2),\n.container footer p {\n    text-align: center;\n}\n\n.empty-state-div p {\n    font-size: .9rem;\n    color: darkgray;\n}\n\n.container footer {\n    color: var(--auburn);\n    font-size: .9rem!important;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: .25rem 0 .75rem 0;\n}\n\n.container footer span {\n    font-size: 1.25rem!important;\n}\n\n.container footer p {\n    text-decoration: underline;\n    cursor: pointer;\n}\n\n.container:not(.empty) .empty-state-div,\n.container:not(.empty) footer {\n    display: none;\n}\n\n.add-task-div {\n    border: 1px solid var(--transparent2);\n    border-radius: 3px;\n    padding: 0 .5rem .5rem .5rem;\n    height: 68.48px;\n    margin-top: 1rem;\n}\n\n.add-task-div > * {\n    margin-top: .5rem;\n}\n\n.add-task-div input,\n.quick-add-todo input {\n    width: 100%;\n    outline: none;\n    border: none;\n    font-size: .9rem;\n    background-color: var(--light92);\n}\n\n.add-task-btns-container {\n    display: flex;\n    justify-content: space-between;\n}\n\n.add-task-btns-container div > button {\n    border: 1px solid var(--transparent2);\n    padding: .25rem;\n}\n\n.add-task-btns-container button > span {\n    font-size: .9rem!important;\n}\n\n.add-task-btns-container > button:nth-child(2) span {\n    color: var(--mariner);\n}\n\n.select-project-btn {\n    max-width: 75px;\n    overflow: hidden;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.scheduler,\n.carrier {\n    max-width: 210px;\n    width: 100%;    \n}\n\n.scheduler,\n.carrier,\n.labeler,\n.prio-setter {\n    background-color: var(--light92);\n    border-radius: 3px;\n    z-index: 2;\n    position: relative;\n    margin: 0 0 0 0;\n    box-shadow: 0 1px 8px 0 rgb(0 0 0 / 8%),\n        0 0 1px 0 rgb(0 0 0 / 30%);\n    display: none;\n}\n\n.scheduler > *,\n.carrier > * {\n    width: 100%;\n    text-align: left;\n    padding: .5rem .5rem .5rem .5rem;\n}\n\n.sched {\n    display: flex;\n    justify-content: space-between;\n}\n\n.sched span:nth-child(2) {\n    text-align: right;\n    color: gray;\n}\n\n.scheduler input[type=\"date\"]::-webkit-calendar-picker-indicator {\n    opacity: .4;\n    cursor: pointer;\n}\n\n.scheduler input[type=\"date\"]::-webkit-calendar-picker-indicator:hover {\n    opacity: 1;\n}\n\n.scheduler .sched-custom {\n    display: flex;\n}\n\n.scheduler .sched-custom button {\n    border: 1px solid var(--transparent1);\n}\n\n.scheduler .sched-custom input {\n    background: transparent;\n}\n\n.scheduler .sched-custom button > span,\n.carrier span,\n.labeler span,\n.prio-setter span {\n    font-size: .9rem!important;\n}\n\n.prio-setter button:first-child span {\n    color: var(--auburn);\n}\n\n.prio-setter button:nth-child(2) span {\n    color: var(--sun);\n}\n\n.prio-setter button:nth-child(3) span {\n    color: var(--mariner);\n}\n\n.prio-setter button:nth-child(4) span {\n    color: gray;\n}\n\n.carrier {\n    margin: 0 0 0 -.7rem;\n    max-width: 160px;\n    width: 100%;\n}\n\n.carrier button,\n.labeler button,\n.prio-setter button {\n    display: flex;\n    align-items: center;\n}\n\n.carrier u,\n.labeler u,\n.prio-setter u {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    margin: 0 0 0 .25rem;\n}\n\n.labeler,\n.prio-setter {\n    background-color: transparent;\n    border: none;\n    box-shadow: none;\n}\n\n.labeler div,\n.prio-setter div {\n    max-width: 160px;\n    width: 100%; \n    display: flex;\n    flex-direction: column;\n    margin: 0 1.8rem 0 auto;\n    background-color: var(--light92);\n    box-shadow: 0 1px 8px 0 rgb(0 0 0 / 8%),\n        0 0 1px 0 rgb(0 0 0 / 30%);\n    border-radius: 3px;\n}\n\n.prio-setter div {\n    margin: 0 0 0 auto;\n    max-width: 88px;\n}\n\n.prio-setter u {\n    text-decoration: none;\n}\n\n.labeler button,\n.prio-setter button {\n    text-align: left;\n    padding: .5rem;\n}\n\n.scheduler .sched-custom button:hover > span,\n.scheduler .sched-custom button:focus-visible > span {\n    color: var(--laurel);\n}\n\n.add-task-div.display-scheduler .scheduler {\n    display: inherit;\n}\n\n.add-task-div.display-carrier .carrier,\n.add-task-div.display-labeler .labeler,\n.add-task-div.display-prio-setter .prio-setter {\n    display: block;\n}\n\n.add-task-div .selected,\n.add-task-div .active {\n    background-color: var(--transparent1);\n}\n\n.add-task-main-btns-container {\n    padding: .5rem 0 .5rem 0;\n}\n\n.add-task-main-btns-container button {\n    padding: .25rem;\n}\n\n.add-task-main-btns-container button:first-child {\n    background-color: var(--malibu);\n    border: 1px solid var(--transparent2);\n}\n\n.container.add-triggered .add-task-btn-div {\n    display: none;\n}\n\n.container:not(.add-triggered) .add-task-div,\n.container:not(.add-triggered) .add-task-main-btns-container {\n    display: none;\n}\n\n.quick-add-todo,\n.project-creator,\n.label-creator,\n.todo-editor,\n.project-editor,\n.label-editor {\n    display: none;\n    position: absolute;\n    place-items: center;\n    height: 100%;\n    width: 100%;\n    background-color: var(--transparent2);\n    z-index: 999;\n}\n\n.quick-add-todo > *,\n.quick-add-todo input {\n    width: 100%;\n}\n\n.quick-add-todo > div {\n    background-color: var(--light92);\n    max-width: 480px;\n    width: 100%;\n    border-radius: 3px;\n    padding: .5rem .5rem .5rem .5rem;\n}\n\n.quick-add-todo > div > *:not(:first-child) {\n    margin: .5rem 0 0 0;\n}\n\n.quick-add-todo button {\n    padding: .25rem;\n}\n\n.quick-add-todo button:first-child {\n    background-color: var(--mariner);\n}\n\n.quick-add-todo button:hover,\n.quick-add-todo button:focus-visible {\n    color: var(--light92);\n}\n\n.quick-add-todo.on {\n    display: grid;\n}\n\n.notifications {\n    display: none;\n    position: absolute;\n    inset: 0;\n    background-color: transparent;\n    z-index: 999;\n}\n\n.notif-container {\n    display: flex;\n    flex-direction: column;\n    background-color: var(--light92);\n    margin: 40px 0 auto auto;\n    padding: .5rem;\n    max-width: 420px;\n    width: 100%;\n    max-height: 320px;\n    overflow-x: hidden;\n    overflow-y: auto;\n    box-shadow: 0 1px 8px 0 rgb(0 0 0 / 8%),\n        0 0 1px 0 rgb(0 0 0 / 30%);\n    border-radius: 3px;\n}\n\n.notif-container nav {\n    display: flex;\n    align-items: center;\n    padding: 0 0 .25rem 0;\n    border-bottom: 1px solid var(--transparent2);\n}\n\n.notif-container nav > * {\n    font-size: .9rem;\n    cursor: pointer;\n}\n\n.notif-container button:first-of-type{\n    margin: 0 0 0 .5rem;\n}\n\n.nav-btn-notification small {\n    position: absolute; \n    color: var(--auburn);\n    margin-left: -.85rem; \n    background-color: var(--malibu);\n    padding: 0 1px;\n}\n\n.nav-btn-notification:hover small,\n.nav-btn-notification:focus-visible small {\n    background-color: transparent!important;\n    color: var(--light92)!important;\n    font-weight: bold;\n}\n\n.read-all-btn {\n    margin: 0 0 0 auto!important;\n}\n\n.read-all-btn span {\n    font-size: 1.2rem;\n}\n\n.notif-output {\n    margin: 0 .25rem;\n    overflow-y: auto;\n    /* overflow-x: hidden; */\n}\n\n.notif-output > * {\n    margin: .25rem 0 0 0;\n    border-bottom: 1px solid var(--transparent1);\n    padding: 0 0 .25rem 0;\n    \n}\n\n.notif {\n    display: flex;\n    flex-direction: column;\n}\n\n.notif > *,\n.notif-extra button span{\n    font-size: .9rem;  \n}\n\n.notif > span {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.notif-extra {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.notif small {\n    color: var(--auburn);\n}\n\n.notifications.on {\n    display: flex;\n\n}\n\n.app.search .add-task-btn-div{\n    display: none;\n}\n\n.project-creator > div,\n.label-creator > div,\n.todo-editor > div,\n.project-editor > div,\n.label-editor > div {\n    background-color: var(--light92);\n    max-width: 420px;\n    width: 100%;\n    border-radius: 3px;\n}\n\n.project-creator > div > *,\n.label-creator > div > *,\n.todo-editor > div > *,\n.project-editor > div > *,\n.label-editor > div > * {\n    padding: .5rem;\n    margin: 0 0 .25rem 0;\n}\n\n.project-creator > div > *:first-child, \n.project-creator > div > *:nth-child(2),\n.label-creator > div > *:first-child, \n.label-creator > div > *:nth-child(2),\n.todo-editor > div > *:first-child, \n.todo-editor > div > *:nth-child(2),\n.project-editor > div > *:first-child,\n.project-editor > div > *:nth-child(2),\n.label-editor > div > *:first-child,\n.label-editor > div > *:nth-child(2) {\n    border-bottom: 1px solid var(--transparent1);\n}\n\n.project-creator > div,\n.project-input,\n.label-creator > div,\n.label-input,\n.todo-editor > div,\n.todo-editor-input,\n.project-editor > div,\n.project-editor-input,\n.label-editor > div,\n.label-editor-input {\n    display: flex;\n    flex-direction: column;\n}\n\n.project-input > *,\n.label-input > *,\n.todo-editor-input > *,\n.project-editor-input > *,\n.label-editor-input > * {\n    margin: 0 0 .25rem 0;\n}\n\n.project-input input,\n.label-input input,\n.todo-editor-input input,\n.todo-editor-input select,\n.project-editor-input input,\n.label-editor-input input {\n    border: none;\n    outline: none;\n    border-radius: 2px;\n    padding: .25rem;\n}\n\n.todo-editor-input {\n    overflow-y: auto;\n}\n\n.todo-editor-input {\n    padding-top: 0!important;\n}\n\n.todo-editor-input label {\n    margin: .25rem 0 .1rem 0;\n}\n\n.project-buttons,\n.label-buttons,\n.todo-editor-buttons,\n.update-project-buttons,\n.update-label-buttons {\n    display: flex;\n    justify-content: flex-end;    \n    margin-bottom: 0!important;\n}\n\n.project-creator button,\n.label-creator button,\n.todo-editor button,\n.project-editor button,\n.label-editor button {\n    padding: .25rem;\n    margin: 0 0 0 .25rem;\n    background-color: var(--transparent1);\n}\n\n.project-creator button:first-child,\n.label-creator button:first-child,\n.todo-editor button:first-child,\n.project-editor button:first-child,\n.label-editor button:first-child {\n    background-color: var(--mariner);\n}\n\n.update-project-buttons button:nth-child(3),\n.update-label-buttons button:nth-child(3) {\n    background-color: var(--auburn);\n}\n\n.project-creator.on,\n.label-creator.on,\n.todo-editor.on,\n.project-editor.on,\n.label-editor.on {\n    display: grid;\n}\n\n.project-input input:focus-visible,\n.label-input input:focus-visible,\n.todo-editor-input input:focus-visible,\n.project-editor-input input:focus-visible,\n.label-editor-input input:focus-visible {\n    outline: 1px solid var(--transparent2);\n}\n\n@media only screen and (max-width: 750px) {\n    .nav-comp {\n        padding: .5rem .5rem .5rem .5rem;\n    }\n    .info-comp {\n        padding: 1rem .25rem .25rem .25rem;\n        position: absolute;\n        z-index: 1000;\n        top: 47.59px;\n        bottom: 0;\n        display: none;\n    }\n    .info-comp.show-nav {\n        display: flex;\n    }\n    .info-comp > * {\n        width: 294px;\n    }\n    .container > header {\n        padding: 1rem 0 .5rem 0;\n    }\n    .container {\n        padding: 0 1rem 0 1rem;\n    }\n    .quick-add-todo > div {\n        max-width: 400px;\n    }\n}\n\n@media only screen and (max-width: 550px) {\n    .info-comp > * {\n        width: 242px;\n    }\n    .search-input {\n        width: 180px;\n    }\n    .search-input:focus {\n        width: 180px;\n    }\n    .quick-add-todo > div {\n        max-width: 300px;\n    }\n    .notif-container {\n        max-width: 310px;\n    }\n}\n\n@media only screen and (max-width: 321px) {\n    .search-input {\n        max-width: 135px;\n    }\n    .search-input:focus {\n        max-width: 135px;\n    }\n    .quick-add-todo > div {\n        max-width: 270px;\n    }\n    .notif-container {\n        max-width: 270px;\n    }\n}\n\n@media only screen and (max-height: 420px) {\n    .todo-editor-input {\n        max-height: 180px;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --light92: hsl(0, 0%, 92%);\n    --light88: hsl(0, 0%, 88%);\n    --dark: hsl(0, 0%, 12%);\n    --malibu: hsl(192, 93%, 72%);\n    --auburn: hsl(0, 75%, 65%);\n    --mariner: hsl(216, 75%, 51%);\n    --laurel: hsl(120, 100%, 25%);\n    --purple: hsl(264, 61%, 47%);\n    --sun: hsl(34, 93%, 48%);\n    --transparent1: rgba(0,0,0,.1);\n    --transparent2: rgba(0,0,0,.2);\n\n    --background: var(--light92);\n    --foreground: var(--malibu);\n}\n\n*, *:before, *:after {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;  \n}\n\nhtml,\nbody {\n    overflow-x: hidden;\n}\n\nbody {\n    min-height: 100vh;\n    background-color: var(--background);\n    font-family:sans-serif;\n    color: var(--dark);\n}\n\nbutton,\n.search-input {\n    outline: none;\n    border: none;\n    border-radius: 3px;\n    font-family:sans-serif;\n}\n\nbutton {\n    padding: .125rem;\n    color: var(--dark);\n    background-color: transparent;\n}\n\nbutton,\n.ic-div {\n    cursor: pointer;\n}\n\nspan.mid {\n    vertical-align: middle;\n}\n\nspan,\nh1 {\n    user-select: none;\n}\n\n.app {\n    display: flex;\n    flex-direction: column;\n    width: 100vw;\n    height: 100vh;\n}\n\n.nav-comp ,\n.nc-left,\n.search-div,\n.nc-right {\n    display: inline-flex;\n}\n\n.nav-comp {\n    justify-content: space-between;\n    width: 100%;\n    padding: .5rem 3rem .5rem 3rem;\n    background-color: var(--foreground);\n}\n\n.nc-left > * {\n    margin: 0 .25rem 0 0;\n}\n\n.nc-right > * {\n    margin: 0 0 0 .25rem;\n}\n\n.nc-right button:first-child {\n    margin: 0;\n}\n\n.search-div {\n    height: 100%;\n    background-color: var(--foreground);\n}\n\n.search-div > span:first-child {\n    align-self: center;\n    cursor: text;\n    margin: .1rem;\n    font-size: 1.6rem;\n    z-index: 2;\n}\n\n.search-div button {\n    margin: .2rem 0 .2rem -1.5rem;\n    height: 20px;\n    width: 20px;\n    align-self: center;\n    display: none;\n}\n\n.search-div button:hover,\n.search-div button:focus-visible {\n    color: var(--auburn);\n}\n\n.search-input {\n    padding: 0 1.6rem 0 1.8rem;\n    margin-left: -1.9rem;\n    background-color: var(--transparent1);\n}\n\n.search-input::-webkit-search-cancel-button {\n    -webkit-appearance: none;\n}\n\n.search-input:not(:placeholder-shown) + button {\n    display: block;\n}\n\n.search-div:focus-within .search-input,\n.search-div:hover .search-input,\n.search-input:not(:placeholder-shown){\n    background-color: var(--light92);\n}\n\n.search-div button span {\n    font-size: 1rem;\n}\n\n.app-body {\n    display: flex;\n    flex: 1;\n    max-height: calc(100% - 46.59px);\n    overflow-y: hidden;\n}\n\n.wrapper {\n    height: 100%;\n    width: 100%;\n    display: flex;\n}\n\n.info-comp {\n    display: flex;\n    flex-direction: column;\n    padding: 2rem .25rem 0 2.8rem;\n    background-color: var(--light88);\n    overflow-y: auto;\n}\n\n.info-comp > * {\n    text-align: left;\n    font-size: .9rem;\n    width: 294px;\n    padding: 5px;\n}\n\n.info-comp > * > samp {\n    float: right;\n    opacity: .5;\n    margin: 4px 1rem 4px 0;\n}\n\n.ic-div {\n    margin: .25rem 0 0 0;\n}\n\n.info-comp > div:first-of-type{\n    margin: 1rem 0 0 0;\n}\n\n.ic-span {\n    margin: 0 .25rem 0 0;\n}\n\n.info-comp > button:first-child span {\n    color: var(--mariner);\n}\n\n.info-comp > button:nth-child(2) span {\n    color: var(--laurel);\n}\n\n.info-comp > button:nth-child(3) span {\n    color: var(--purple);\n}\n\n.info-comp .active {\n    background-color: var(--malibu);\n}\n\n.opa {\n    opacity: .5;\n}\n\n.ic-add-btn {\n    float: right;\n    margin: 0px .5rem 0 0;\n    padding: 0;\n    display: none;\n}\n\n.ic-add-btn:hover + strong,\n.ic-add-btn:focus-visible + strong {\n    text-decoration: underline;\n    text-underline-offset: 30%;\n}\n\n.info-comp:focus-within .ic-add-btn,\n.info-comp:hover .ic-add-btn{\n    display: inherit;\n}\n\n.ic-div > div {\n    display: none;\n}\n\n.ic-div > div.show {\n    display: flex;\n    flex-direction: column;\n}\n\n.ic-project > span.rotate,\n.ic-label > span.rotate {\n    transform: rotate(90deg);\n}\n\n\n.show {\n    margin: .75rem 0 0 0;\n}\n\n.show > div {\n    text-align: left;\n    display: flex;\n    padding: .5rem .5rem .5rem .5rem;\n    height: 34px;\n    font-size: .9rem;\n    align-items: center;\n    border-radius: 3px;\n}\n\nspan.unique {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    align-self: center;\n    margin-right: .2rem;\n}\n\n.show button {\n    padding: 0;\n    visibility: hidden;\n}\n\n.show > div:hover,\n.show > div:focus-visible {\n    background-color: var(--transparent2);\n}\n\n.show > div:hover button,\n.show > div:focus-visible button,\n.show > div:focus-within button{\n    visibility: visible;\n    margin-left: auto;\n}\n\n.show button:hover,\n.show button:focus-visible {\n    background-color: transparent!important;\n}\n\n.bullet {\n    min-width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    margin: 0 .7rem 0 .5rem;\n    background-color: var(--transparent2);\n}\n\n.tag {\n    transform: scale(.8);\n    margin: 0 .2rem 0 .2rem;\n    color: var(--transparent2);\n}\n\n.container {\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    overflow-y: auto;\n    padding: 0 2rem 0 2rem;\n\n}\n\n.container > * {\n    max-width: 800px;\n    width: 100%;\n}\n\n.container > footer {\n    margin-top: auto;\n}\n\n.container > header {\n    padding: 2rem 0 1rem 0;\n    position: sticky;\n    top: 0;\n    background-color: var(--light92);\n    z-index: 3;\n}\n\nh1 {\n    font-size: 1.3rem;\n}\n\n.todo {\n    display: flex;\n    padding: 2px 0;\n    margin: .5rem 0 .5rem 0;\n    justify-content: flex-start;\n    flex-direction: row;\n    border-bottom: 1px solid var(--transparent1);\n}\n\n.todo,\n.todo * {\n    cursor: pointer;\n}\n\n.checkbox-btn { \n    height: 18px;\n    max-width: 18px;\n    width: 100%;\n    margin: .27rem .7rem 0 0;\n    z-index: 2;\n    position: relative;\n}\n\n.checkbox-btn.prio1 {\n    border: 2px solid var(--auburn);\n}\n\n.checkbox-btn.prio2 {\n    border: 2px solid var(--sun);\n}\n\n.checkbox-btn.prio3 {\n    border: 2px solid var(--mariner);\n}\n\n.checkbox-btn.prio4 {\n    border: 2px solid var(--transparent2);\n}\n\n.checkbox-btn:hover,\n.checkbox-btn:focus-visible {\n    border-color: transparent;\n    background-color: var(--transparent1);\n}\n\n.checkbox-btn + span {\n    padding: 0;\n    line-height: 1rem;\n    font-size: 2rem;\n    position: relative;\n    color: var(--transparent2);\n    visibility: hidden;\n    float: right;\n    margin: -.9rem 0 0 -1rem;    \n}\n\n.checkbox-btn:hover + span,\n.checkbox-btn:focus-visible + span {\n    visibility: visible;\n}\n\n.checkbox-btn:active + span{\n    color: var(--laurel);\n}\n\n.todo-text {\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n}\n\n.todo-text > label {\n    line-height: 1.4rem;\n}\n\n.todo-text-note {\n    text-indent: 1rem;\n    font-size: .9rem;\n    margin: 0 0 .25rem 0;\n}\n\n.todo-text-note,\n.todo-text-note > span,\n.todo-text small {\n    color: gray;\n}\n\n.todo-text-note > span,\nem,\nem > span {\n    font-size: .9rem!important;\n}\n\nem {\n    width: 100%;\n}\n\n.sched-due {\n    color: var(--auburn);\n}\n\n.sched-today {\n    color: var(--laurel);\n}\n\n.sched-upcom {\n    color: var(--purple);\n}\n\n.todo-tools-container {\n    display: flex;\n    justify-content: flex-end;\n    align-items: flex-end;\n    margin: -20px 0 0 0;\n    visibility: hidden;\n}\n\n.todo-tools-container * {\n    color: gray;\n}\n\n.tool-span {\n    font-size: 1.2rem;\n}\n\n.todo:hover .todo-tools-container,\n.todo:focus-within .todo-tools-container {\n    visibility: visible;\n}\n\nbutton:hover,\nbutton:focus-visible {\n    background-color: var(--transparent2);\n}\n\nbutton:focus-visible {\n    outline: auto;\n}\n\n.add-task-btn {\n    text-align: left;\n    color: gray;\n}\n\n.add-task-btn * {\n    padding: .1rem;\n}\n\n.add-task-btn span {\n    border-radius: 50%;\n    padding: 0;\n    color: var(--auburn);\n}\n\n.add-task-btn:hover,\n.add-task-btn:focus-visible,\n.add-task-btn span {\n    background-color: transparent;\n}\n\n.add-task-btn:hover span,\n.add-task-btn:focus-visible span {\n    color: var(--mariner);\n}\n\n.empty-state-div {\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    justify-content: center;\n    align-items: center;\n}\n\n.empty-state-div img {\n    max-width: 180px;\n    \n    height: auto;\n}\n\n.empty-state-div h4 {\n    font-weight: normal;\n    color: gray;\n}\n\n.empty-state-div *:nth-child(n+2) {\n    margin: .25rem 0 0 0;\n}\n\n.empty-state-div *:nth-child(n+2),\n.container footer p {\n    text-align: center;\n}\n\n.empty-state-div p {\n    font-size: .9rem;\n    color: darkgray;\n}\n\n.container footer {\n    color: var(--auburn);\n    font-size: .9rem!important;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: .25rem 0 .75rem 0;\n}\n\n.container footer span {\n    font-size: 1.25rem!important;\n}\n\n.container footer p {\n    text-decoration: underline;\n    cursor: pointer;\n}\n\n.container:not(.empty) .empty-state-div,\n.container:not(.empty) footer {\n    display: none;\n}\n\n.add-task-div {\n    border: 1px solid var(--transparent2);\n    border-radius: 3px;\n    padding: 0 .5rem .5rem .5rem;\n    height: 68.48px;\n    margin-top: 1rem;\n}\n\n.add-task-div > * {\n    margin-top: .5rem;\n}\n\n.add-task-div input,\n.quick-add-todo input {\n    width: 100%;\n    outline: none;\n    border: none;\n    font-size: .9rem;\n    background-color: var(--light92);\n}\n\n.add-task-btns-container {\n    display: flex;\n    justify-content: space-between;\n}\n\n.add-task-btns-container div > button {\n    border: 1px solid var(--transparent2);\n    padding: .25rem;\n}\n\n.add-task-btns-container button > span {\n    font-size: .9rem!important;\n}\n\n.add-task-btns-container > button:nth-child(2) span {\n    color: var(--mariner);\n}\n\n.select-project-btn {\n    max-width: 75px;\n    overflow: hidden;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.scheduler,\n.carrier {\n    max-width: 210px;\n    width: 100%;    \n}\n\n.scheduler,\n.carrier,\n.labeler,\n.prio-setter {\n    background-color: var(--light92);\n    border-radius: 3px;\n    z-index: 2;\n    position: relative;\n    margin: 0 0 0 0;\n    box-shadow: 0 1px 8px 0 rgb(0 0 0 / 8%),\n        0 0 1px 0 rgb(0 0 0 / 30%);\n    display: none;\n}\n\n.scheduler > *,\n.carrier > * {\n    width: 100%;\n    text-align: left;\n    padding: .5rem .5rem .5rem .5rem;\n}\n\n.sched {\n    display: flex;\n    justify-content: space-between;\n}\n\n.sched span:nth-child(2) {\n    text-align: right;\n    color: gray;\n}\n\n.scheduler input[type=\"date\"]::-webkit-calendar-picker-indicator {\n    opacity: .4;\n    cursor: pointer;\n}\n\n.scheduler input[type=\"date\"]::-webkit-calendar-picker-indicator:hover {\n    opacity: 1;\n}\n\n.scheduler .sched-custom {\n    display: flex;\n}\n\n.scheduler .sched-custom button {\n    border: 1px solid var(--transparent1);\n}\n\n.scheduler .sched-custom input {\n    background: transparent;\n}\n\n.scheduler .sched-custom button > span,\n.carrier span,\n.labeler span,\n.prio-setter span {\n    font-size: .9rem!important;\n}\n\n.prio-setter button:first-child span {\n    color: var(--auburn);\n}\n\n.prio-setter button:nth-child(2) span {\n    color: var(--sun);\n}\n\n.prio-setter button:nth-child(3) span {\n    color: var(--mariner);\n}\n\n.prio-setter button:nth-child(4) span {\n    color: gray;\n}\n\n.carrier {\n    margin: 0 0 0 -.7rem;\n    max-width: 160px;\n    width: 100%;\n}\n\n.carrier button,\n.labeler button,\n.prio-setter button {\n    display: flex;\n    align-items: center;\n}\n\n.carrier u,\n.labeler u,\n.prio-setter u {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    margin: 0 0 0 .25rem;\n}\n\n.labeler,\n.prio-setter {\n    background-color: transparent;\n    border: none;\n    box-shadow: none;\n}\n\n.labeler div,\n.prio-setter div {\n    max-width: 160px;\n    width: 100%; \n    display: flex;\n    flex-direction: column;\n    margin: 0 1.8rem 0 auto;\n    background-color: var(--light92);\n    box-shadow: 0 1px 8px 0 rgb(0 0 0 / 8%),\n        0 0 1px 0 rgb(0 0 0 / 30%);\n    border-radius: 3px;\n}\n\n.prio-setter div {\n    margin: 0 0 0 auto;\n    max-width: 88px;\n}\n\n.prio-setter u {\n    text-decoration: none;\n}\n\n.labeler button,\n.prio-setter button {\n    text-align: left;\n    padding: .5rem;\n}\n\n.scheduler .sched-custom button:hover > span,\n.scheduler .sched-custom button:focus-visible > span {\n    color: var(--laurel);\n}\n\n.add-task-div.display-scheduler .scheduler {\n    display: inherit;\n}\n\n.add-task-div.display-carrier .carrier,\n.add-task-div.display-labeler .labeler,\n.add-task-div.display-prio-setter .prio-setter {\n    display: block;\n}\n\n.add-task-div .selected,\n.add-task-div .active {\n    background-color: var(--transparent1);\n}\n\n.add-task-main-btns-container {\n    padding: .5rem 0 .5rem 0;\n}\n\n.add-task-main-btns-container button {\n    padding: .25rem;\n}\n\n.add-task-main-btns-container button:first-child {\n    background-color: var(--malibu);\n    border: 1px solid var(--transparent2);\n}\n\n.container.add-triggered .add-task-btn-div {\n    display: none;\n}\n\n.container:not(.add-triggered) .add-task-div,\n.container:not(.add-triggered) .add-task-main-btns-container {\n    display: none;\n}\n\n.quick-add-todo,\n.project-creator,\n.label-creator,\n.todo-editor,\n.project-editor,\n.label-editor {\n    display: none;\n    position: absolute;\n    place-items: center;\n    height: 100%;\n    width: 100%;\n    background-color: var(--transparent2);\n    z-index: 999;\n}\n\n.quick-add-todo > *,\n.quick-add-todo input {\n    width: 100%;\n}\n\n.quick-add-todo > div {\n    background-color: var(--light92);\n    max-width: 480px;\n    width: 100%;\n    border-radius: 3px;\n    padding: .5rem .5rem .5rem .5rem;\n}\n\n.quick-add-todo > div > *:not(:first-child) {\n    margin: .5rem 0 0 0;\n}\n\n.quick-add-todo button {\n    padding: .25rem;\n}\n\n.quick-add-todo button:first-child {\n    background-color: var(--mariner);\n}\n\n.quick-add-todo button:hover,\n.quick-add-todo button:focus-visible {\n    color: var(--light92);\n}\n\n.quick-add-todo.on {\n    display: grid;\n}\n\n.notifications {\n    display: none;\n    position: absolute;\n    inset: 0;\n    background-color: transparent;\n    z-index: 999;\n}\n\n.notif-container {\n    display: flex;\n    flex-direction: column;\n    background-color: var(--light92);\n    margin: 40px 0 auto auto;\n    padding: .5rem;\n    max-width: 420px;\n    width: 100%;\n    max-height: 320px;\n    overflow-x: hidden;\n    overflow-y: auto;\n    box-shadow: 0 1px 8px 0 rgb(0 0 0 / 8%),\n        0 0 1px 0 rgb(0 0 0 / 30%);\n    border-radius: 3px;\n}\n\n.notif-container nav {\n    display: flex;\n    align-items: center;\n    padding: 0 0 .25rem 0;\n    border-bottom: 1px solid var(--transparent2);\n}\n\n.notif-container nav > * {\n    font-size: .9rem;\n    cursor: pointer;\n}\n\n.notif-container button:first-of-type{\n    margin: 0 0 0 .5rem;\n}\n\n.nav-btn-notification small {\n    position: absolute; \n    color: var(--auburn);\n    margin-left: -.85rem; \n    background-color: var(--malibu);\n    padding: 0 1px;\n}\n\n.nav-btn-notification:hover small,\n.nav-btn-notification:focus-visible small {\n    background-color: transparent!important;\n    color: var(--light92)!important;\n    font-weight: bold;\n}\n\n.read-all-btn {\n    margin: 0 0 0 auto!important;\n}\n\n.read-all-btn span {\n    font-size: 1.2rem;\n}\n\n.notif-output {\n    margin: 0 .25rem;\n    overflow-y: auto;\n    /* overflow-x: hidden; */\n}\n\n.notif-output > * {\n    margin: .25rem 0 0 0;\n    border-bottom: 1px solid var(--transparent1);\n    padding: 0 0 .25rem 0;\n    \n}\n\n.notif {\n    display: flex;\n    flex-direction: column;\n}\n\n.notif > *,\n.notif-extra button span{\n    font-size: .9rem;  \n}\n\n.notif > span {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.notif-extra {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.notif small {\n    color: var(--auburn);\n}\n\n.notifications.on {\n    display: flex;\n\n}\n\n.app.search .add-task-btn-div{\n    display: none;\n}\n\n.project-creator > div,\n.label-creator > div,\n.todo-editor > div,\n.project-editor > div,\n.label-editor > div {\n    background-color: var(--light92);\n    max-width: 420px;\n    width: 100%;\n    border-radius: 3px;\n}\n\n.project-creator > div > *,\n.label-creator > div > *,\n.todo-editor > div > *,\n.project-editor > div > *,\n.label-editor > div > * {\n    padding: .5rem;\n    margin: 0 0 .25rem 0;\n}\n\n.project-creator > div > *:first-child, \n.project-creator > div > *:nth-child(2),\n.label-creator > div > *:first-child, \n.label-creator > div > *:nth-child(2),\n.todo-editor > div > *:first-child, \n.todo-editor > div > *:nth-child(2),\n.project-editor > div > *:first-child,\n.project-editor > div > *:nth-child(2),\n.label-editor > div > *:first-child,\n.label-editor > div > *:nth-child(2) {\n    border-bottom: 1px solid var(--transparent1);\n}\n\n.project-creator > div,\n.project-input,\n.label-creator > div,\n.label-input,\n.todo-editor > div,\n.todo-editor-input,\n.project-editor > div,\n.project-editor-input,\n.label-editor > div,\n.label-editor-input {\n    display: flex;\n    flex-direction: column;\n}\n\n.project-input > *,\n.label-input > *,\n.todo-editor-input > *,\n.project-editor-input > *,\n.label-editor-input > * {\n    margin: 0 0 .25rem 0;\n}\n\n.project-input input,\n.label-input input,\n.todo-editor-input input,\n.todo-editor-input select,\n.project-editor-input input,\n.label-editor-input input {\n    border: none;\n    outline: none;\n    border-radius: 2px;\n    padding: .25rem;\n}\n\n.todo-editor-input {\n    overflow-y: auto;\n}\n\n.todo-editor-input {\n    padding-top: 0!important;\n}\n\n.todo-editor-input label {\n    margin: .25rem 0 .1rem 0;\n}\n\n.project-buttons,\n.label-buttons,\n.todo-editor-buttons,\n.update-project-buttons,\n.update-label-buttons {\n    display: flex;\n    justify-content: flex-end;    \n    margin-bottom: 0!important;\n}\n\n.project-creator button,\n.label-creator button,\n.todo-editor button,\n.project-editor button,\n.label-editor button {\n    padding: .25rem;\n    margin: 0 0 0 .25rem;\n    background-color: var(--transparent1);\n}\n\n.project-creator button:first-child,\n.label-creator button:first-child,\n.todo-editor button:first-child,\n.project-editor button:first-child,\n.label-editor button:first-child {\n    background-color: var(--mariner);\n}\n\n.update-project-buttons button:nth-child(3),\n.update-label-buttons button:nth-child(3) {\n    background-color: var(--auburn);\n}\n\n.project-creator.on,\n.label-creator.on,\n.todo-editor.on,\n.project-editor.on,\n.label-editor.on {\n    display: grid;\n}\n\n.project-input input:focus-visible,\n.label-input input:focus-visible,\n.todo-editor-input input:focus-visible,\n.project-editor-input input:focus-visible,\n.label-editor-input input:focus-visible {\n    outline: 1px solid var(--transparent2);\n}\n\n@media only screen and (max-width: 750px) {\n    .nav-comp {\n        padding: .5rem .5rem .5rem .5rem;\n    }\n    .info-comp {\n        padding: 1rem .25rem .25rem .25rem;\n        position: absolute;\n        z-index: 1000;\n        top: 47.59px;\n        bottom: 0;\n        display: none;\n    }\n    .info-comp.show-nav {\n        display: flex;\n    }\n    .info-comp > * {\n        width: 294px;\n    }\n    .container > header {\n        padding: 1rem 0 .5rem 0;\n    }\n    .container {\n        padding: 0 1rem 0 1rem;\n    }\n    .quick-add-todo > div {\n        max-width: 400px;\n    }\n}\n\n@media only screen and (max-width: 550px) {\n    .info-comp > * {\n        width: 242px;\n    }\n    .search-input {\n        width: 180px;\n    }\n    .search-input:focus {\n        width: 180px;\n    }\n    .quick-add-todo > div {\n        max-width: 300px;\n    }\n    .notif-container {\n        max-width: 310px;\n    }\n}\n\n@media only screen and (max-width: 321px) {\n    .search-input {\n        max-width: 135px;\n    }\n    .search-input:focus {\n        max-width: 135px;\n    }\n    .quick-add-todo > div {\n        max-width: 270px;\n    }\n    .notif-container {\n        max-width: 270px;\n    }\n}\n\n@media only screen and (max-height: 420px) {\n    .todo-editor-input {\n        max-height: 180px;\n    }\n}"],"sourceRoot":""}]);
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
/* harmony export */   "isEmptyToDayList": () => (/* binding */ isEmptyToDayList),
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

const isEmptyToDayList = () => {
    let data = JSON.parse(localStorage.getItem('todos'));
    let array = [];

    data.todolist.forEach((task) => {
        if(Date.parse(task.dueDate) == Date.parse(dateString.today())){
            array.push(task);
        }
    });

    return !array.length ? true : false;
};

const push = (() => {
    let _data = JSON.parse(localStorage.getItem('todos'));
    let counter = 0;

    const _embed = () => {
        localStorage.setItem('todos', JSON.stringify(_data));
    };

    const generateId = () => {
        let id = _data.todolist.length + 1;

        if(_data.todolist.length){
            counter = 0;
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

    const projectRename = (oldName, newName) => {

        counter = 0;
        _data = JSON.parse(localStorage.getItem('todos'));

        _data.projects.forEach((name) => {
            if(name == oldName){
                _data.projects[counter] = newName;
            }
            counter++
        });

        counter = 0;
        _data.todolist.forEach((task) => {
            if(task.project == oldName){
                _data.todolist[counter].project = newName;
            }
            counter++
        });
        
        _embed();
    };

    const projectDelete = (name) => {

        _data = JSON.parse(localStorage.getItem('todos'));
        const index = _data.projects.indexOf(name);
        
        if (index > -1) {
            _data.projects.splice(index, 1);
        }

        counter = 0;
        _data.todolist.forEach((task) => {
            if(task.project == name){
                _data.todolist.splice(counter, 1);
            }
            counter++
        });
        _embed();
    };

    const labelRename = (oldName, newName) => {

        counter = 0;
        _data = JSON.parse(localStorage.getItem('todos'));

        _data.labels.forEach((name) => {
            if(name == oldName){
                _data.labels[counter] = newName;
            }
            counter++
        });

        counter = 0;
        _data.todolist.forEach((task) => {
            if(task.label == oldName){
                _data.todolist[counter].label = newName;
            }
            counter++
        });
        _embed();
    };

    const labelDelete = (name) => {

        _data = JSON.parse(localStorage.getItem('todos'));
        const index = _data.labels.indexOf(name);

        if (index > -1) {
            _data.labels.splice(index, 1);
        }

        counter = 0;
        _data.todolist.forEach((task) => {
            if(task.label == name){
                _data.todolist.splice(counter, 1);
            }
            counter++
        });
        _embed();
    };

    return {
        quick,
        project,
        label,
        task,
        projectRename, projectDelete,
        labelRename, labelDelete
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

    if((0,_data_js__WEBPACK_IMPORTED_MODULE_1__.isEmptyToDayList)()){
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
        <input type = "text" placeholder="Task name" id = "addTaskInput" autocomplete="off">
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
        if (_selector_js__WEBPACK_IMPORTED_MODULE_0__.vNav.projectListContainer.classList.contains('show')){
            refresh.projectList();
        }
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
        if (_selector_js__WEBPACK_IMPORTED_MODULE_0__.vNav.labelListContainer.classList.contains('show')){
            refresh.labelList();
        }
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

    const projectEditor = () => {
        _selector_js__WEBPACK_IMPORTED_MODULE_0__.modal.projectEditor.classList.toggle('on');
        if(_selector_js__WEBPACK_IMPORTED_MODULE_0__.modal.projectEditor.classList.contains('on')){
            _selector_js__WEBPACK_IMPORTED_MODULE_0__.modal.updatedProjectName.value = '';
            trapFocus(_selector_js__WEBPACK_IMPORTED_MODULE_0__.modal.projectEditor, _selector_js__WEBPACK_IMPORTED_MODULE_0__.vNav.projects);
        } else {
            _selector_js__WEBPACK_IMPORTED_MODULE_0__.vNav.projects.focus();
            removeTrapFocus();
        }
    };

    const labelEditor = () => {
        _selector_js__WEBPACK_IMPORTED_MODULE_0__.modal.labelEditor.classList.toggle('on');
        if(_selector_js__WEBPACK_IMPORTED_MODULE_0__.modal.labelEditor.classList.contains('on')){
            _selector_js__WEBPACK_IMPORTED_MODULE_0__.modal.updatedLabelName.value = '';
            trapFocus(_selector_js__WEBPACK_IMPORTED_MODULE_0__.modal.labelEditor, _selector_js__WEBPACK_IMPORTED_MODULE_0__.vNav.labels);
        } else {
            _selector_js__WEBPACK_IMPORTED_MODULE_0__.vNav.labels.focus();
            removeTrapFocus();
        }
    };

    return {
        menu,
        quickAddTask,
        notification,
        projects, addProject,
        labels, addLabel,
        taskCreator, taskScheduler, taskProjectSelector, taskLabeler, taskPrioritySetter,
        projectEditor, labelEditor
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

    if (_selector_js__WEBPACK_IMPORTED_MODULE_0__.container.main.hasChildNodes()) {
        _selector_js__WEBPACK_IMPORTED_MODULE_0__.container.div.classList.remove('empty');
    } else {
        _selector_js__WEBPACK_IMPORTED_MODULE_0__.container.div.classList.add('empty');
    }
};
// here here here here
const changeMain = (tag, value, condition = '') => {
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
        array.sort(function(a, b) {
            return (Date.parse(a.dueDate) - Date.parse(b.dueDate));
        })

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
                if (task.project != 'inbox'){
                    labelDiv.innerHTML = `<small>[Project: ${task.project}] [label: ${task.label}]</small>`;
                } else {
                    labelDiv.innerHTML = `<small>label: ${task.label}</small>`;
                }
            } else {
                if (task.project != 'inbox'){
                    labelDiv.innerHTML = `<small>[Project: ${task.project}]</small>`;
                } else {
                    labelDiv.innerHTML = `<small></small>`;
                }
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
                if(Date.parse(task.dueDate) == Date.parse(_data_js__WEBPACK_IMPORTED_MODULE_1__.dateString.twmString())){
                    em.innerHTML = `
                    <span class="material-icons-outlined mid">event</span> Tomorrow
                    `;
                } else {
                    em.innerHTML = `
                    <span class="material-icons-outlined mid">event</span> ${task.dueDate}
                    `;
                }
                
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

    const _getLastWord = (string) => {
        let word = string.split(" ");
        return word[word.length - 1];
    };

    const todolist = (e) => {
        let word = _getLastWord(e.target.innerText);
        _selector_js__WEBPACK_IMPORTED_MODULE_0__.container.header.innerText = word;
        
        if(document.querySelector('.info-comp .active')){
            document.querySelector('.info-comp .active').classList.remove('active');
        }

        e.target.classList.add('active');

        if(window.innerWidth <= 750){
            _selector_js__WEBPACK_IMPORTED_MODULE_0__.hNav.menu.click();
        }

        if(word == 'Today'){
            changeMain('dueDate', _data_js__WEBPACK_IMPORTED_MODULE_1__.dateString.todayString(), 'today');
        } else if (word == 'Upcoming') {
            changeMain('dueDate', _data_js__WEBPACK_IMPORTED_MODULE_1__.dateString.todayString(), 'upcoming');
        } else {
            changeMain('project', 'inbox');
        }
    };

    const home = () => {
        _selector_js__WEBPACK_IMPORTED_MODULE_0__.container.header.innerText = 'Today';
        if(document.querySelector('.info-comp .active')){
            document.querySelector('.info-comp .active').classList.remove('active');
        }
        _selector_js__WEBPACK_IMPORTED_MODULE_0__.vNav.today.classList.add('active');
        changeMain('dueDate', _data_js__WEBPACK_IMPORTED_MODULE_1__.dateString.todayString(), 'today');
    };

    const inbox = () => {
        _selector_js__WEBPACK_IMPORTED_MODULE_0__.container.header.innerText = 'Inbox';
        if(document.querySelector('.info-comp .active')){
            document.querySelector('.info-comp .active').classList.remove('active');
        }
        _selector_js__WEBPACK_IMPORTED_MODULE_0__.vNav.inbox.classList.add('active');
        changeMain('project', 'inbox');
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
        home, inbox,
        taskProjectList,
        taskLabelList,
        taskPriorityList,
    };
})();

// here
const displayTask = (target, name) => {

    _selector_js__WEBPACK_IMPORTED_MODULE_0__.container.header.innerText = `${target.toUpperCase()} > ${name}`;
    if(document.querySelector('.info-comp .active')){
        document.querySelector('.info-comp .active').classList.remove('active');
    }

    if(window.innerWidth <= 750){
        _selector_js__WEBPACK_IMPORTED_MODULE_0__.hNav.menu.click();
    }

    changeMain(target, name);
};

const refresh = (() => {
    let data;

    const projectList = () => {
        data = JSON.parse(localStorage.getItem('todos'));
        _selector_js__WEBPACK_IMPORTED_MODULE_0__.vNav.projectListContainer.innerHTML = '';

        if (data.projects.length){
            data.projects.forEach((project)=> {
                const div = document.createElement('div');
                div.innerHTML = `
                    <div class = "bullet"></div>
                    <span class = "unique">${project}</span>`;
                const horizBtn = document.createElement('button');
                horizBtn.setAttribute('data-value', project);
                horizBtn.innerHTML = `
                    <span class="material-icons-outlined mid">more_horiz</span>`;
                div.appendChild(horizBtn);
                div.setAttribute('tabindex', '0');
                _selector_js__WEBPACK_IMPORTED_MODULE_0__.vNav.projectListContainer.appendChild(div);
                div.onclick = (e) => { 
                    e.stopPropagation(); 
                    displayTask('project', project);
                };
                horizBtn.onclick = (e) => { 
                    e.stopPropagation(); 
                    _selector_js__WEBPACK_IMPORTED_MODULE_0__.modal.projectName.dataset.value = project;
                    _selector_js__WEBPACK_IMPORTED_MODULE_0__.modal.projectName.innerText = project;
                    toggle.projectEditor();
                };
            });
        }
    };

    const labelList = () => {
        data = JSON.parse(localStorage.getItem('todos'));
        _selector_js__WEBPACK_IMPORTED_MODULE_0__.vNav.labelListContainer.innerHTML = '';

        if (data.labels.length){
            data.labels.forEach((label)=> {

                const div = document.createElement('div');
                div.innerHTML = `
                    <span class="material-icons-outlined mid tag">label</span>
                        <span class = "unique">${label}</span>`;
                const horizBtn = document.createElement('button');
                horizBtn.setAttribute('data-value', label);
                horizBtn.innerHTML = `
                    <span class="material-icons-outlined mid">more_horiz</span>`;
                div.appendChild(horizBtn);
                div.setAttribute('tabindex', '0');
                _selector_js__WEBPACK_IMPORTED_MODULE_0__.vNav.labelListContainer.appendChild(div);
                div.onclick = (e) => { 
                    e.stopPropagation(); 
                    displayTask('label', label);
                };
                horizBtn.onclick = (e) => { 
                    e.stopPropagation(); 
                    _selector_js__WEBPACK_IMPORTED_MODULE_0__.modal.editLabelName.dataset.value = label;
                    _selector_js__WEBPACK_IMPORTED_MODULE_0__.modal.editLabelName.innerText = label;
                    toggle.labelEditor();
                };
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
        display.inbox();
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
        if(project != 'INBOX'){
            alert(`Added to Project ${project}!`);
        }

        (project == 'INBOX') ? display.inbox() : display.home();

        toggle.taskCreator();
    };

    return {
        quick,
        project,
        label,
        todo
    };
})();

const update = (() => {

    const project = () => {

        if (!_selector_js__WEBPACK_IMPORTED_MODULE_0__.modal.updatedProjectName.value) { 
            alert('Project name required!');
            return; 
        }

        if (_selector_js__WEBPACK_IMPORTED_MODULE_0__.modal.updatedProjectName.value == _selector_js__WEBPACK_IMPORTED_MODULE_0__.modal.projectName.dataset.value){
            alert('Enter a different Project name!');
            return;
        }
        _data_js__WEBPACK_IMPORTED_MODULE_1__.push.projectRename(_selector_js__WEBPACK_IMPORTED_MODULE_0__.modal.projectName.dataset.value, _selector_js__WEBPACK_IMPORTED_MODULE_0__.modal.updatedProjectName.value);
        toggle.projectEditor();
        display.home();
        refresh.projectList();
    };

    const label = () => {

        if (!_selector_js__WEBPACK_IMPORTED_MODULE_0__.modal.updatedLabelName.value) { 
            alert('Label name required!');
            return; 
        }

        if (_selector_js__WEBPACK_IMPORTED_MODULE_0__.modal.updatedLabelName.value == _selector_js__WEBPACK_IMPORTED_MODULE_0__.modal.editLabelName.dataset.value){
            alert('Enter a different Label name!');
            return;
        }
        _data_js__WEBPACK_IMPORTED_MODULE_1__.push.labelRename(_selector_js__WEBPACK_IMPORTED_MODULE_0__.modal.editLabelName.dataset.value, _selector_js__WEBPACK_IMPORTED_MODULE_0__.modal.updatedLabelName.value);
        toggle.labelEditor();
        display.home();
        refresh.labelList();
    };

    return {
        project,
        label
    };
})();

const remove = (() => {

    const project = () => {
        _data_js__WEBPACK_IMPORTED_MODULE_1__.push.projectDelete(_selector_js__WEBPACK_IMPORTED_MODULE_0__.modal.projectName.dataset.value);
        toggle.projectEditor();
        display.home();
        refresh.projectList();
    };

    const label = () => {
        _data_js__WEBPACK_IMPORTED_MODULE_1__.push.labelDelete(_selector_js__WEBPACK_IMPORTED_MODULE_0__.modal.editLabelName.dataset.value);
        toggle.labelEditor();
        display.home();
        refresh.labelList();
    };

    return {
        project,
        label
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

    _selector_js__WEBPACK_IMPORTED_MODULE_0__.modal.cancelProjectEditor.addEventListener('click', toggle.projectEditor);
    _selector_js__WEBPACK_IMPORTED_MODULE_0__.modal.updateProject.addEventListener('click', update.project);
    _selector_js__WEBPACK_IMPORTED_MODULE_0__.modal.deleteProject.addEventListener('click', remove.project);

    _selector_js__WEBPACK_IMPORTED_MODULE_0__.modal.cancelLabelEditor.addEventListener('click', toggle.labelEditor);
    _selector_js__WEBPACK_IMPORTED_MODULE_0__.modal.updateLabel.addEventListener('click', update.label);
    _selector_js__WEBPACK_IMPORTED_MODULE_0__.modal.deleteLabel.addEventListener('click', remove.label);

    //fix data.js first before adding events in label, project, and todo editor

    window.onclick = viewManager;
    window.onresize = viewportListener;

    //esc keyup that closes modals will be cool

})();

changeMain('dueDate', _data_js__WEBPACK_IMPORTED_MODULE_1__.dateString.todayString(), 'today');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFRhcmdldC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kYXRhLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2V2ZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNzSDtBQUM3QjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsaURBQWlELGlDQUFpQyxpQ0FBaUMsOEJBQThCLG1DQUFtQyxpQ0FBaUMsb0NBQW9DLG9DQUFvQyxtQ0FBbUMsK0JBQStCLHFDQUFxQyxxQ0FBcUMscUNBQXFDLGtDQUFrQyxHQUFHLDBCQUEwQiw2QkFBNkIsaUJBQWlCLGdCQUFnQixLQUFLLGlCQUFpQix5QkFBeUIsR0FBRyxVQUFVLHdCQUF3QiwwQ0FBMEMsNkJBQTZCLHlCQUF5QixHQUFHLDRCQUE0QixvQkFBb0IsbUJBQW1CLHlCQUF5Qiw2QkFBNkIsR0FBRyxZQUFZLHVCQUF1Qix5QkFBeUIsb0NBQW9DLEdBQUcsc0JBQXNCLHNCQUFzQixHQUFHLGNBQWMsNkJBQTZCLEdBQUcsZUFBZSx3QkFBd0IsR0FBRyxVQUFVLG9CQUFvQiw2QkFBNkIsbUJBQW1CLG9CQUFvQixHQUFHLHFEQUFxRCwyQkFBMkIsR0FBRyxlQUFlLHFDQUFxQyxrQkFBa0IscUNBQXFDLDBDQUEwQyxHQUFHLGtCQUFrQiwyQkFBMkIsR0FBRyxtQkFBbUIsMkJBQTJCLEdBQUcsa0NBQWtDLGdCQUFnQixHQUFHLGlCQUFpQixtQkFBbUIsMENBQTBDLEdBQUcsb0NBQW9DLHlCQUF5QixtQkFBbUIsb0JBQW9CLHdCQUF3QixpQkFBaUIsR0FBRyx3QkFBd0Isb0NBQW9DLG1CQUFtQixrQkFBa0IseUJBQXlCLG9CQUFvQixHQUFHLGlFQUFpRSwyQkFBMkIsR0FBRyxtQkFBbUIsaUNBQWlDLDJCQUEyQiw0Q0FBNEMsR0FBRyxpREFBaUQsK0JBQStCLEdBQUcsb0RBQW9ELHFCQUFxQixHQUFHLHFIQUFxSCx1Q0FBdUMsR0FBRyw2QkFBNkIsc0JBQXNCLEdBQUcsZUFBZSxvQkFBb0IsY0FBYyx1Q0FBdUMseUJBQXlCLEdBQUcsY0FBYyxtQkFBbUIsa0JBQWtCLG9CQUFvQixHQUFHLGdCQUFnQixvQkFBb0IsNkJBQTZCLG9DQUFvQyx1Q0FBdUMsdUJBQXVCLEdBQUcsb0JBQW9CLHVCQUF1Qix1QkFBdUIsbUJBQW1CLG1CQUFtQixHQUFHLDJCQUEyQixtQkFBbUIsa0JBQWtCLDZCQUE2QixHQUFHLGFBQWEsMkJBQTJCLEdBQUcsbUNBQW1DLHlCQUF5QixHQUFHLGNBQWMsMkJBQTJCLEdBQUcsMENBQTBDLDRCQUE0QixHQUFHLDJDQUEyQywyQkFBMkIsR0FBRywyQ0FBMkMsMkJBQTJCLEdBQUcsd0JBQXdCLHNDQUFzQyxHQUFHLFVBQVUsa0JBQWtCLEdBQUcsaUJBQWlCLG1CQUFtQiw0QkFBNEIsaUJBQWlCLG9CQUFvQixHQUFHLHFFQUFxRSxpQ0FBaUMsaUNBQWlDLEdBQUcsdUVBQXVFLHVCQUF1QixHQUFHLG1CQUFtQixvQkFBb0IsR0FBRyx3QkFBd0Isb0JBQW9CLDZCQUE2QixHQUFHLHlEQUF5RCwrQkFBK0IsR0FBRyxhQUFhLDJCQUEyQixHQUFHLGlCQUFpQix1QkFBdUIsb0JBQW9CLHVDQUF1QyxtQkFBbUIsdUJBQXVCLDBCQUEwQix5QkFBeUIsR0FBRyxpQkFBaUIsMEJBQTBCLHVCQUF1Qiw4QkFBOEIseUJBQXlCLDBCQUEwQixHQUFHLGtCQUFrQixpQkFBaUIseUJBQXlCLEdBQUcsbURBQW1ELDRDQUE0QyxHQUFHLGtHQUFrRywwQkFBMEIsd0JBQXdCLEdBQUcscURBQXFELDhDQUE4QyxHQUFHLGFBQWEsc0JBQXNCLG1CQUFtQix5QkFBeUIsOEJBQThCLDRDQUE0QyxHQUFHLFVBQVUsMkJBQTJCLDhCQUE4QixpQ0FBaUMsR0FBRyxnQkFBZ0Isb0JBQW9CLGNBQWMsNkJBQTZCLGtDQUFrQywwQkFBMEIsdUJBQXVCLDZCQUE2QixLQUFLLG9CQUFvQix1QkFBdUIsa0JBQWtCLEdBQUcseUJBQXlCLHVCQUF1QixHQUFHLHlCQUF5Qiw2QkFBNkIsdUJBQXVCLGFBQWEsdUNBQXVDLGlCQUFpQixHQUFHLFFBQVEsd0JBQXdCLEdBQUcsV0FBVyxvQkFBb0IscUJBQXFCLDhCQUE4QixrQ0FBa0MsMEJBQTBCLG1EQUFtRCxHQUFHLHFCQUFxQixzQkFBc0IsR0FBRyxtQkFBbUIsb0JBQW9CLHNCQUFzQixrQkFBa0IsK0JBQStCLGlCQUFpQix5QkFBeUIsR0FBRyx5QkFBeUIsc0NBQXNDLEdBQUcseUJBQXlCLG1DQUFtQyxHQUFHLHlCQUF5Qix1Q0FBdUMsR0FBRyx5QkFBeUIsNENBQTRDLEdBQUcsdURBQXVELGdDQUFnQyw0Q0FBNEMsR0FBRywwQkFBMEIsaUJBQWlCLHdCQUF3QixzQkFBc0IseUJBQXlCLGlDQUFpQyx5QkFBeUIsbUJBQW1CLCtCQUErQixPQUFPLHFFQUFxRSwwQkFBMEIsR0FBRyxnQ0FBZ0MsMkJBQTJCLEdBQUcsZ0JBQWdCLG9CQUFvQixjQUFjLDZCQUE2QixHQUFHLHdCQUF3QiwwQkFBMEIsR0FBRyxxQkFBcUIsd0JBQXdCLHVCQUF1QiwyQkFBMkIsR0FBRyxpRUFBaUUsa0JBQWtCLEdBQUcsNkNBQTZDLGlDQUFpQyxHQUFHLFFBQVEsa0JBQWtCLEdBQUcsZ0JBQWdCLDJCQUEyQixHQUFHLGtCQUFrQiwyQkFBMkIsR0FBRyxrQkFBa0IsMkJBQTJCLEdBQUcsMkJBQTJCLG9CQUFvQixnQ0FBZ0MsNEJBQTRCLDBCQUEwQix5QkFBeUIsR0FBRyw2QkFBNkIsa0JBQWtCLEdBQUcsZ0JBQWdCLHdCQUF3QixHQUFHLGtGQUFrRiwwQkFBMEIsR0FBRyx5Q0FBeUMsNENBQTRDLEdBQUcsMEJBQTBCLG9CQUFvQixHQUFHLG1CQUFtQix1QkFBdUIsa0JBQWtCLEdBQUcscUJBQXFCLHFCQUFxQixHQUFHLHdCQUF3Qix5QkFBeUIsaUJBQWlCLDJCQUEyQixHQUFHLDRFQUE0RSxvQ0FBb0MsR0FBRyxpRUFBaUUsNEJBQTRCLEdBQUcsc0JBQXNCLG9CQUFvQiw2QkFBNkIsY0FBYyw4QkFBOEIsMEJBQTBCLEdBQUcsMEJBQTBCLHVCQUF1Qix5QkFBeUIsR0FBRyx5QkFBeUIsMEJBQTBCLGtCQUFrQixHQUFHLHVDQUF1QywyQkFBMkIsR0FBRyw2REFBNkQseUJBQXlCLEdBQUcsd0JBQXdCLHVCQUF1QixzQkFBc0IsR0FBRyx1QkFBdUIsMkJBQTJCLGlDQUFpQyxvQkFBb0IsOEJBQThCLDBCQUEwQixpQ0FBaUMsR0FBRyw0QkFBNEIsbUNBQW1DLEdBQUcseUJBQXlCLGlDQUFpQyxzQkFBc0IsR0FBRyw2RUFBNkUsb0JBQW9CLEdBQUcsbUJBQW1CLDRDQUE0Qyx5QkFBeUIsbUNBQW1DLHNCQUFzQix1QkFBdUIsR0FBRyx1QkFBdUIsd0JBQXdCLEdBQUcsaURBQWlELGtCQUFrQixvQkFBb0IsbUJBQW1CLHVCQUF1Qix1Q0FBdUMsR0FBRyw4QkFBOEIsb0JBQW9CLHFDQUFxQyxHQUFHLDJDQUEyQyw0Q0FBNEMsc0JBQXNCLEdBQUcsNENBQTRDLGlDQUFpQyxHQUFHLHlEQUF5RCw0QkFBNEIsR0FBRyx5QkFBeUIsc0JBQXNCLHVCQUF1QiwwQkFBMEIsdUJBQXVCLDhCQUE4QixHQUFHLDJCQUEyQix1QkFBdUIsa0JBQWtCLE9BQU8scURBQXFELHVDQUF1Qyx5QkFBeUIsaUJBQWlCLHlCQUF5QixzQkFBc0IsbUZBQW1GLG9CQUFvQixHQUFHLG1DQUFtQyxrQkFBa0IsdUJBQXVCLHVDQUF1QyxHQUFHLFlBQVksb0JBQW9CLHFDQUFxQyxHQUFHLDhCQUE4Qix3QkFBd0Isa0JBQWtCLEdBQUcsd0VBQXdFLGtCQUFrQixzQkFBc0IsR0FBRyw4RUFBOEUsaUJBQWlCLEdBQUcsOEJBQThCLG9CQUFvQixHQUFHLHFDQUFxQyw0Q0FBNEMsR0FBRyxvQ0FBb0MsOEJBQThCLEdBQUcsZ0dBQWdHLGlDQUFpQyxHQUFHLDBDQUEwQywyQkFBMkIsR0FBRywyQ0FBMkMsd0JBQXdCLEdBQUcsMkNBQTJDLDRCQUE0QixHQUFHLDJDQUEyQyxrQkFBa0IsR0FBRyxjQUFjLDJCQUEyQix1QkFBdUIsa0JBQWtCLEdBQUcsNkRBQTZELG9CQUFvQiwwQkFBMEIsR0FBRyw4Q0FBOEMsMEJBQTBCLHVCQUF1Qiw4QkFBOEIsMkJBQTJCLEdBQUcsNkJBQTZCLG9DQUFvQyxtQkFBbUIsdUJBQXVCLEdBQUcscUNBQXFDLHVCQUF1QixrQkFBa0IscUJBQXFCLDZCQUE2Qiw4QkFBOEIsdUNBQXVDLG1GQUFtRix5QkFBeUIsR0FBRyxzQkFBc0IseUJBQXlCLHNCQUFzQixHQUFHLG9CQUFvQiw0QkFBNEIsR0FBRywyQ0FBMkMsdUJBQXVCLHFCQUFxQixHQUFHLHlHQUF5RywyQkFBMkIsR0FBRyxnREFBZ0QsdUJBQXVCLEdBQUcsc0lBQXNJLHFCQUFxQixHQUFHLHFEQUFxRCw0Q0FBNEMsR0FBRyxtQ0FBbUMsK0JBQStCLEdBQUcsMENBQTBDLHNCQUFzQixHQUFHLHNEQUFzRCxzQ0FBc0MsNENBQTRDLEdBQUcsZ0RBQWdELG9CQUFvQixHQUFHLGlIQUFpSCxvQkFBb0IsR0FBRywwR0FBMEcsb0JBQW9CLHlCQUF5QiwwQkFBMEIsbUJBQW1CLGtCQUFrQiw0Q0FBNEMsbUJBQW1CLEdBQUcsaURBQWlELGtCQUFrQixHQUFHLDJCQUEyQix1Q0FBdUMsdUJBQXVCLGtCQUFrQix5QkFBeUIsdUNBQXVDLEdBQUcsaURBQWlELDBCQUEwQixHQUFHLDRCQUE0QixzQkFBc0IsR0FBRyx3Q0FBd0MsdUNBQXVDLEdBQUcseUVBQXlFLDRCQUE0QixHQUFHLHdCQUF3QixvQkFBb0IsR0FBRyxvQkFBb0Isb0JBQW9CLHlCQUF5QixlQUFlLG9DQUFvQyxtQkFBbUIsR0FBRyxzQkFBc0Isb0JBQW9CLDZCQUE2Qix1Q0FBdUMsK0JBQStCLHFCQUFxQix1QkFBdUIsa0JBQWtCLHdCQUF3Qix5QkFBeUIsdUJBQXVCLG1GQUFtRix5QkFBeUIsR0FBRywwQkFBMEIsb0JBQW9CLDBCQUEwQiw0QkFBNEIsbURBQW1ELEdBQUcsOEJBQThCLHVCQUF1QixzQkFBc0IsR0FBRywwQ0FBMEMsMEJBQTBCLEdBQUcsaUNBQWlDLHlCQUF5Qiw0QkFBNEIsMkJBQTJCLHVDQUF1QyxxQkFBcUIsR0FBRyxtRkFBbUYsOENBQThDLHNDQUFzQyx3QkFBd0IsR0FBRyxtQkFBbUIsbUNBQW1DLEdBQUcsd0JBQXdCLHdCQUF3QixHQUFHLG1CQUFtQix1QkFBdUIsdUJBQXVCLDRCQUE0QixNQUFNLHVCQUF1QiwyQkFBMkIsbURBQW1ELDRCQUE0QixTQUFTLFlBQVksb0JBQW9CLDZCQUE2QixHQUFHLDBDQUEwQyx1QkFBdUIsS0FBSyxtQkFBbUIsMEJBQTBCLHVCQUF1Qiw4QkFBOEIsR0FBRyxrQkFBa0Isb0JBQW9CLHFDQUFxQywwQkFBMEIsR0FBRyxrQkFBa0IsMkJBQTJCLEdBQUcsdUJBQXVCLG9CQUFvQixLQUFLLGtDQUFrQyxvQkFBb0IsR0FBRyxzSEFBc0gsdUNBQXVDLHVCQUF1QixrQkFBa0IseUJBQXlCLEdBQUcsMElBQTBJLHFCQUFxQiwyQkFBMkIsR0FBRyxpWkFBaVosbURBQW1ELEdBQUcseU5BQXlOLG9CQUFvQiw2QkFBNkIsR0FBRywwSEFBMEgsMkJBQTJCLEdBQUcsZ0tBQWdLLG1CQUFtQixvQkFBb0IseUJBQXlCLHNCQUFzQixHQUFHLHdCQUF3Qix1QkFBdUIsR0FBRyx3QkFBd0IsK0JBQStCLEdBQUcsOEJBQThCLCtCQUErQixHQUFHLGdIQUFnSCxvQkFBb0IsZ0NBQWdDLHFDQUFxQyxHQUFHLDJIQUEySCxzQkFBc0IsMkJBQTJCLDRDQUE0QyxHQUFHLHVMQUF1TCx1Q0FBdUMsR0FBRyw2RkFBNkYsc0NBQXNDLEdBQUcsdUdBQXVHLG9CQUFvQixHQUFHLDBNQUEwTSw2Q0FBNkMsR0FBRywrQ0FBK0MsaUJBQWlCLDJDQUEyQyxPQUFPLGtCQUFrQiw2Q0FBNkMsNkJBQTZCLHdCQUF3Qix1QkFBdUIsb0JBQW9CLHdCQUF3QixPQUFPLDJCQUEyQix3QkFBd0IsT0FBTyxzQkFBc0IsdUJBQXVCLE9BQU8sMkJBQTJCLGtDQUFrQyxPQUFPLGtCQUFrQixpQ0FBaUMsT0FBTyw2QkFBNkIsMkJBQTJCLE9BQU8sR0FBRywrQ0FBK0Msc0JBQXNCLHVCQUF1QixPQUFPLHFCQUFxQix1QkFBdUIsT0FBTywyQkFBMkIsdUJBQXVCLE9BQU8sNkJBQTZCLDJCQUEyQixPQUFPLHdCQUF3QiwyQkFBMkIsT0FBTyxHQUFHLCtDQUErQyxxQkFBcUIsMkJBQTJCLE9BQU8sMkJBQTJCLDJCQUEyQixPQUFPLDZCQUE2QiwyQkFBMkIsT0FBTyx3QkFBd0IsMkJBQTJCLE9BQU8sR0FBRyxnREFBZ0QsMEJBQTBCLDRCQUE0QixPQUFPLEdBQUcsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sUUFBUSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLFFBQVEsS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE9BQU8sWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxjQUFjLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sT0FBTyxVQUFVLE1BQU0sT0FBTyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxPQUFPLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxNQUFNLFFBQVEsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLEtBQUssT0FBTyxXQUFXLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFFBQVEsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxPQUFPLFVBQVUsWUFBWSxPQUFPLE9BQU8sWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sT0FBTyxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE9BQU8sVUFBVSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sTUFBTSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLE9BQU8sYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGNBQWMsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sU0FBUyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sU0FBUyxVQUFVLFlBQVksT0FBTyxjQUFjLFlBQVksT0FBTyxjQUFjLFVBQVUsWUFBWSxPQUFPLFNBQVMsWUFBWSxPQUFPLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFNBQVMsVUFBVSxZQUFZLGFBQWEsT0FBTyxTQUFTLFVBQVUsWUFBWSxhQUFhLE9BQU8sU0FBUyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sU0FBUyxVQUFVLE9BQU8sU0FBUyxZQUFZLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sZ0NBQWdDLGlDQUFpQyxp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QUVBO0FBQ0EsQ0FBQzs7QUFRQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsU3VDO0FBQ3VCOztBQUVoRTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsUUFBUTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkU7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxNQUFNO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxPQUFPLDBEQUFnQjtBQUN2QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwwQ0FBVyxDQUFDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7O1VDL0pEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGO1dBQ0E7V0FDQSxDQUFDLEk7Ozs7O1dDUEQsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esa0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmcUI7QUFDWTtBQUNKO0FBQ3NDO0FBQ3BDOztBQUUvQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJpbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1saWdodDkyOiBoc2woMCwgMCUsIDkyJSk7XFxuICAgIC0tbGlnaHQ4ODogaHNsKDAsIDAlLCA4OCUpO1xcbiAgICAtLWRhcms6IGhzbCgwLCAwJSwgMTIlKTtcXG4gICAgLS1tYWxpYnU6IGhzbCgxOTIsIDkzJSwgNzIlKTtcXG4gICAgLS1hdWJ1cm46IGhzbCgwLCA3NSUsIDY1JSk7XFxuICAgIC0tbWFyaW5lcjogaHNsKDIxNiwgNzUlLCA1MSUpO1xcbiAgICAtLWxhdXJlbDogaHNsKDEyMCwgMTAwJSwgMjUlKTtcXG4gICAgLS1wdXJwbGU6IGhzbCgyNjQsIDYxJSwgNDclKTtcXG4gICAgLS1zdW46IGhzbCgzNCwgOTMlLCA0OCUpO1xcbiAgICAtLXRyYW5zcGFyZW50MTogcmdiYSgwLDAsMCwuMSk7XFxuICAgIC0tdHJhbnNwYXJlbnQyOiByZ2JhKDAsMCwwLC4yKTtcXG5cXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1saWdodDkyKTtcXG4gICAgLS1mb3JlZ3JvdW5kOiB2YXIoLS1tYWxpYnUpO1xcbn1cXG5cXG4qLCAqOmJlZm9yZSwgKjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDsgIFxcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbmJvZHkge1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxuICAgIGZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrKTtcXG59XFxuXFxuYnV0dG9uLFxcbi5zZWFyY2gtaW5wdXQge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgZm9udC1mYW1pbHk6c2Fucy1zZXJpZjtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgcGFkZGluZzogLjEyNXJlbTtcXG4gICAgY29sb3I6IHZhcigtLWRhcmspO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuYnV0dG9uLFxcbi5pYy1kaXYge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbnNwYW4ubWlkIHtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuc3BhbixcXG5oMSB7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4uYXBwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4ubmF2LWNvbXAgLFxcbi5uYy1sZWZ0LFxcbi5zZWFyY2gtZGl2LFxcbi5uYy1yaWdodCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbn1cXG5cXG4ubmF2LWNvbXAge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAuNXJlbSAzcmVtIC41cmVtIDNyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvcmVncm91bmQpO1xcbn1cXG5cXG4ubmMtbGVmdCA+ICoge1xcbiAgICBtYXJnaW46IDAgLjI1cmVtIDAgMDtcXG59XFxuXFxuLm5jLXJpZ2h0ID4gKiB7XFxuICAgIG1hcmdpbjogMCAwIDAgLjI1cmVtO1xcbn1cXG5cXG4ubmMtcmlnaHQgYnV0dG9uOmZpcnN0LWNoaWxkIHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uc2VhcmNoLWRpdiB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9yZWdyb3VuZCk7XFxufVxcblxcbi5zZWFyY2gtZGl2ID4gc3BhbjpmaXJzdC1jaGlsZCB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgY3Vyc29yOiB0ZXh0O1xcbiAgICBtYXJnaW46IC4xcmVtO1xcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXG4gICAgei1pbmRleDogMjtcXG59XFxuXFxuLnNlYXJjaC1kaXYgYnV0dG9uIHtcXG4gICAgbWFyZ2luOiAuMnJlbSAwIC4ycmVtIC0xLjVyZW07XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnNlYXJjaC1kaXYgYnV0dG9uOmhvdmVyLFxcbi5zZWFyY2gtZGl2IGJ1dHRvbjpmb2N1cy12aXNpYmxlIHtcXG4gICAgY29sb3I6IHZhcigtLWF1YnVybik7XFxufVxcblxcbi5zZWFyY2gtaW5wdXQge1xcbiAgICBwYWRkaW5nOiAwIDEuNnJlbSAwIDEuOHJlbTtcXG4gICAgbWFyZ2luLWxlZnQ6IC0xLjlyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50MSk7XFxufVxcblxcbi5zZWFyY2gtaW5wdXQ6Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi5zZWFyY2gtaW5wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bikgKyBidXR0b24ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnNlYXJjaC1kaXY6Zm9jdXMtd2l0aGluIC5zZWFyY2gtaW5wdXQsXFxuLnNlYXJjaC1kaXY6aG92ZXIgLnNlYXJjaC1pbnB1dCxcXG4uc2VhcmNoLWlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pe1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodDkyKTtcXG59XFxuXFxuLnNlYXJjaC1kaXYgYnV0dG9uIHNwYW4ge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5hcHAtYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXg6IDE7XFxuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDQ2LjU5cHgpO1xcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XFxufVxcblxcbi53cmFwcGVyIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmluZm8tY29tcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDJyZW0gLjI1cmVtIDAgMi44cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodDg4KTtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLmluZm8tY29tcCA+ICoge1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBmb250LXNpemU6IC45cmVtO1xcbiAgICB3aWR0aDogMjk0cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLmluZm8tY29tcCA+ICogPiBzYW1wIHtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBvcGFjaXR5OiAuNTtcXG4gICAgbWFyZ2luOiA0cHggMXJlbSA0cHggMDtcXG59XFxuXFxuLmljLWRpdiB7XFxuICAgIG1hcmdpbjogLjI1cmVtIDAgMCAwO1xcbn1cXG5cXG4uaW5mby1jb21wID4gZGl2OmZpcnN0LW9mLXR5cGV7XFxuICAgIG1hcmdpbjogMXJlbSAwIDAgMDtcXG59XFxuXFxuLmljLXNwYW4ge1xcbiAgICBtYXJnaW46IDAgLjI1cmVtIDAgMDtcXG59XFxuXFxuLmluZm8tY29tcCA+IGJ1dHRvbjpmaXJzdC1jaGlsZCBzcGFuIHtcXG4gICAgY29sb3I6IHZhcigtLW1hcmluZXIpO1xcbn1cXG5cXG4uaW5mby1jb21wID4gYnV0dG9uOm50aC1jaGlsZCgyKSBzcGFuIHtcXG4gICAgY29sb3I6IHZhcigtLWxhdXJlbCk7XFxufVxcblxcbi5pbmZvLWNvbXAgPiBidXR0b246bnRoLWNoaWxkKDMpIHNwYW4ge1xcbiAgICBjb2xvcjogdmFyKC0tcHVycGxlKTtcXG59XFxuXFxuLmluZm8tY29tcCAuYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFsaWJ1KTtcXG59XFxuXFxuLm9wYSB7XFxuICAgIG9wYWNpdHk6IC41O1xcbn1cXG5cXG4uaWMtYWRkLWJ0biB7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgbWFyZ2luOiAwcHggLjVyZW0gMCAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaWMtYWRkLWJ0bjpob3ZlciArIHN0cm9uZyxcXG4uaWMtYWRkLWJ0bjpmb2N1cy12aXNpYmxlICsgc3Ryb25nIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIHRleHQtdW5kZXJsaW5lLW9mZnNldDogMzAlO1xcbn1cXG5cXG4uaW5mby1jb21wOmZvY3VzLXdpdGhpbiAuaWMtYWRkLWJ0bixcXG4uaW5mby1jb21wOmhvdmVyIC5pYy1hZGQtYnRue1xcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xcbn1cXG5cXG4uaWMtZGl2ID4gZGl2IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmljLWRpdiA+IGRpdi5zaG93IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmljLXByb2plY3QgPiBzcGFuLnJvdGF0ZSxcXG4uaWMtbGFiZWwgPiBzcGFuLnJvdGF0ZSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59XFxuXFxuXFxuLnNob3cge1xcbiAgICBtYXJnaW46IC43NXJlbSAwIDAgMDtcXG59XFxuXFxuLnNob3cgPiBkaXYge1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAuNXJlbSAuNXJlbSAuNXJlbSAuNXJlbTtcXG4gICAgaGVpZ2h0OiAzNHB4O1xcbiAgICBmb250LXNpemU6IC45cmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbnNwYW4udW5pcXVlIHtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXJpZ2h0OiAuMnJlbTtcXG59XFxuXFxuLnNob3cgYnV0dG9uIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uc2hvdyA+IGRpdjpob3ZlcixcXG4uc2hvdyA+IGRpdjpmb2N1cy12aXNpYmxlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQyKTtcXG59XFxuXFxuLnNob3cgPiBkaXY6aG92ZXIgYnV0dG9uLFxcbi5zaG93ID4gZGl2OmZvY3VzLXZpc2libGUgYnV0dG9uLFxcbi5zaG93ID4gZGl2OmZvY3VzLXdpdGhpbiBidXR0b257XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4uc2hvdyBidXR0b246aG92ZXIsXFxuLnNob3cgYnV0dG9uOmZvY3VzLXZpc2libGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCFpbXBvcnRhbnQ7XFxufVxcblxcbi5idWxsZXQge1xcbiAgICBtaW4td2lkdGg6IDEwcHg7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBtYXJnaW46IDAgLjdyZW0gMCAuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQyKTtcXG59XFxuXFxuLnRhZyB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoLjgpO1xcbiAgICBtYXJnaW46IDAgLjJyZW0gMCAuMnJlbTtcXG4gICAgY29sb3I6IHZhcigtLXRyYW5zcGFyZW50Mik7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiAxO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIHBhZGRpbmc6IDAgMnJlbSAwIDJyZW07XFxuXFxufVxcblxcbi5jb250YWluZXIgPiAqIHtcXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jb250YWluZXIgPiBmb290ZXIge1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbn1cXG5cXG4uY29udGFpbmVyID4gaGVhZGVyIHtcXG4gICAgcGFkZGluZzogMnJlbSAwIDFyZW0gMDtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodDkyKTtcXG4gICAgei1pbmRleDogMztcXG59XFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLnRvZG8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAycHggMDtcXG4gICAgbWFyZ2luOiAuNXJlbSAwIC41cmVtIDA7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXRyYW5zcGFyZW50MSk7XFxufVxcblxcbi50b2RvLFxcbi50b2RvICoge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jaGVja2JveC1idG4geyBcXG4gICAgaGVpZ2h0OiAxOHB4O1xcbiAgICBtYXgtd2lkdGg6IDE4cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46IC4yN3JlbSAuN3JlbSAwIDA7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmNoZWNrYm94LWJ0bi5wcmlvMSB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWF1YnVybik7XFxufVxcblxcbi5jaGVja2JveC1idG4ucHJpbzIge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1zdW4pO1xcbn1cXG5cXG4uY2hlY2tib3gtYnRuLnByaW8zIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbWFyaW5lcik7XFxufVxcblxcbi5jaGVja2JveC1idG4ucHJpbzQge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS10cmFuc3BhcmVudDIpO1xcbn1cXG5cXG4uY2hlY2tib3gtYnRuOmhvdmVyLFxcbi5jaGVja2JveC1idG46Zm9jdXMtdmlzaWJsZSB7XFxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50MSk7XFxufVxcblxcbi5jaGVja2JveC1idG4gKyBzcGFuIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbGluZS1oZWlnaHQ6IDFyZW07XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBjb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQyKTtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIG1hcmdpbjogLS45cmVtIDAgMCAtMXJlbTsgICAgXFxufVxcblxcbi5jaGVja2JveC1idG46aG92ZXIgKyBzcGFuLFxcbi5jaGVja2JveC1idG46Zm9jdXMtdmlzaWJsZSArIHNwYW4ge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4uY2hlY2tib3gtYnRuOmFjdGl2ZSArIHNwYW57XFxuICAgIGNvbG9yOiB2YXIoLS1sYXVyZWwpO1xcbn1cXG5cXG4udG9kby10ZXh0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleDogMTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRvZG8tdGV4dCA+IGxhYmVsIHtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNHJlbTtcXG59XFxuXFxuLnRvZG8tdGV4dC1ub3RlIHtcXG4gICAgdGV4dC1pbmRlbnQ6IDFyZW07XFxuICAgIGZvbnQtc2l6ZTogLjlyZW07XFxuICAgIG1hcmdpbjogMCAwIC4yNXJlbSAwO1xcbn1cXG5cXG4udG9kby10ZXh0LW5vdGUsXFxuLnRvZG8tdGV4dC1ub3RlID4gc3BhbixcXG4udG9kby10ZXh0IHNtYWxsIHtcXG4gICAgY29sb3I6IGdyYXk7XFxufVxcblxcbi50b2RvLXRleHQtbm90ZSA+IHNwYW4sXFxuZW0sXFxuZW0gPiBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAuOXJlbSFpbXBvcnRhbnQ7XFxufVxcblxcbmVtIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5zY2hlZC1kdWUge1xcbiAgICBjb2xvcjogdmFyKC0tYXVidXJuKTtcXG59XFxuXFxuLnNjaGVkLXRvZGF5IHtcXG4gICAgY29sb3I6IHZhcigtLWxhdXJlbCk7XFxufVxcblxcbi5zY2hlZC11cGNvbSB7XFxuICAgIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xcbn1cXG5cXG4udG9kby10b29scy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIG1hcmdpbjogLTIwcHggMCAwIDA7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLnRvZG8tdG9vbHMtY29udGFpbmVyICoge1xcbiAgICBjb2xvcjogZ3JheTtcXG59XFxuXFxuLnRvb2wtc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4udG9kbzpob3ZlciAudG9kby10b29scy1jb250YWluZXIsXFxuLnRvZG86Zm9jdXMtd2l0aGluIC50b2RvLXRvb2xzLWNvbnRhaW5lciB7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbmJ1dHRvbjpob3ZlcixcXG5idXR0b246Zm9jdXMtdmlzaWJsZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50Mik7XFxufVxcblxcbmJ1dHRvbjpmb2N1cy12aXNpYmxlIHtcXG4gICAgb3V0bGluZTogYXV0bztcXG59XFxuXFxuLmFkZC10YXNrLWJ0biB7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGNvbG9yOiBncmF5O1xcbn1cXG5cXG4uYWRkLXRhc2stYnRuICoge1xcbiAgICBwYWRkaW5nOiAuMXJlbTtcXG59XFxuXFxuLmFkZC10YXNrLWJ0biBzcGFuIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBjb2xvcjogdmFyKC0tYXVidXJuKTtcXG59XFxuXFxuLmFkZC10YXNrLWJ0bjpob3ZlcixcXG4uYWRkLXRhc2stYnRuOmZvY3VzLXZpc2libGUsXFxuLmFkZC10YXNrLWJ0biBzcGFuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5hZGQtdGFzay1idG46aG92ZXIgc3BhbixcXG4uYWRkLXRhc2stYnRuOmZvY3VzLXZpc2libGUgc3BhbiB7XFxuICAgIGNvbG9yOiB2YXIoLS1tYXJpbmVyKTtcXG59XFxuXFxuLmVtcHR5LXN0YXRlLWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXg6IDE7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZW1wdHktc3RhdGUtZGl2IGltZyB7XFxuICAgIG1heC13aWR0aDogMTgwcHg7XFxuICAgIFxcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi5lbXB0eS1zdGF0ZS1kaXYgaDQge1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBjb2xvcjogZ3JheTtcXG59XFxuXFxuLmVtcHR5LXN0YXRlLWRpdiAqOm50aC1jaGlsZChuKzIpIHtcXG4gICAgbWFyZ2luOiAuMjVyZW0gMCAwIDA7XFxufVxcblxcbi5lbXB0eS1zdGF0ZS1kaXYgKjpudGgtY2hpbGQobisyKSxcXG4uY29udGFpbmVyIGZvb3RlciBwIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZW1wdHktc3RhdGUtZGl2IHAge1xcbiAgICBmb250LXNpemU6IC45cmVtO1xcbiAgICBjb2xvcjogZGFya2dyYXk7XFxufVxcblxcbi5jb250YWluZXIgZm9vdGVyIHtcXG4gICAgY29sb3I6IHZhcigtLWF1YnVybik7XFxuICAgIGZvbnQtc2l6ZTogLjlyZW0haW1wb3J0YW50O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogLjI1cmVtIDAgLjc1cmVtIDA7XFxufVxcblxcbi5jb250YWluZXIgZm9vdGVyIHNwYW4ge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW0haW1wb3J0YW50O1xcbn1cXG5cXG4uY29udGFpbmVyIGZvb3RlciBwIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNvbnRhaW5lcjpub3QoLmVtcHR5KSAuZW1wdHktc3RhdGUtZGl2LFxcbi5jb250YWluZXI6bm90KC5lbXB0eSkgZm9vdGVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmFkZC10YXNrLWRpdiB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRyYW5zcGFyZW50Mik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgcGFkZGluZzogMCAuNXJlbSAuNXJlbSAuNXJlbTtcXG4gICAgaGVpZ2h0OiA2OC40OHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG4uYWRkLXRhc2stZGl2ID4gKiB7XFxuICAgIG1hcmdpbi10b3A6IC41cmVtO1xcbn1cXG5cXG4uYWRkLXRhc2stZGl2IGlucHV0LFxcbi5xdWljay1hZGQtdG9kbyBpbnB1dCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogLjlyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0OTIpO1xcbn1cXG5cXG4uYWRkLXRhc2stYnRucy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5hZGQtdGFzay1idG5zLWNvbnRhaW5lciBkaXYgPiBidXR0b24ge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10cmFuc3BhcmVudDIpO1xcbiAgICBwYWRkaW5nOiAuMjVyZW07XFxufVxcblxcbi5hZGQtdGFzay1idG5zLWNvbnRhaW5lciBidXR0b24gPiBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAuOXJlbSFpbXBvcnRhbnQ7XFxufVxcblxcbi5hZGQtdGFzay1idG5zLWNvbnRhaW5lciA+IGJ1dHRvbjpudGgtY2hpbGQoMikgc3BhbiB7XFxuICAgIGNvbG9yOiB2YXIoLS1tYXJpbmVyKTtcXG59XFxuXFxuLnNlbGVjdC1wcm9qZWN0LWJ0biB7XFxuICAgIG1heC13aWR0aDogNzVweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcblxcbi5zY2hlZHVsZXIsXFxuLmNhcnJpZXIge1xcbiAgICBtYXgtd2lkdGg6IDIxMHB4O1xcbiAgICB3aWR0aDogMTAwJTsgICAgXFxufVxcblxcbi5zY2hlZHVsZXIsXFxuLmNhcnJpZXIsXFxuLmxhYmVsZXIsXFxuLnByaW8tc2V0dGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQ5Mik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgei1pbmRleDogMjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW46IDAgMCAwIDA7XFxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDhweCAwIHJnYigwIDAgMCAvIDglKSxcXG4gICAgICAgIDAgMCAxcHggMCByZ2IoMCAwIDAgLyAzMCUpO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc2NoZWR1bGVyID4gKixcXG4uY2FycmllciA+ICoge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgcGFkZGluZzogLjVyZW0gLjVyZW0gLjVyZW0gLjVyZW07XFxufVxcblxcbi5zY2hlZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnNjaGVkIHNwYW46bnRoLWNoaWxkKDIpIHtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIGNvbG9yOiBncmF5O1xcbn1cXG5cXG4uc2NoZWR1bGVyIGlucHV0W3R5cGU9XFxcImRhdGVcXFwiXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcXG4gICAgb3BhY2l0eTogLjQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNjaGVkdWxlciBpbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvcjpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5zY2hlZHVsZXIgLnNjaGVkLWN1c3RvbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5zY2hlZHVsZXIgLnNjaGVkLWN1c3RvbSBidXR0b24ge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10cmFuc3BhcmVudDEpO1xcbn1cXG5cXG4uc2NoZWR1bGVyIC5zY2hlZC1jdXN0b20gaW5wdXQge1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnNjaGVkdWxlciAuc2NoZWQtY3VzdG9tIGJ1dHRvbiA+IHNwYW4sXFxuLmNhcnJpZXIgc3BhbixcXG4ubGFiZWxlciBzcGFuLFxcbi5wcmlvLXNldHRlciBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAuOXJlbSFpbXBvcnRhbnQ7XFxufVxcblxcbi5wcmlvLXNldHRlciBidXR0b246Zmlyc3QtY2hpbGQgc3BhbiB7XFxuICAgIGNvbG9yOiB2YXIoLS1hdWJ1cm4pO1xcbn1cXG5cXG4ucHJpby1zZXR0ZXIgYnV0dG9uOm50aC1jaGlsZCgyKSBzcGFuIHtcXG4gICAgY29sb3I6IHZhcigtLXN1bik7XFxufVxcblxcbi5wcmlvLXNldHRlciBidXR0b246bnRoLWNoaWxkKDMpIHNwYW4ge1xcbiAgICBjb2xvcjogdmFyKC0tbWFyaW5lcik7XFxufVxcblxcbi5wcmlvLXNldHRlciBidXR0b246bnRoLWNoaWxkKDQpIHNwYW4ge1xcbiAgICBjb2xvcjogZ3JheTtcXG59XFxuXFxuLmNhcnJpZXIge1xcbiAgICBtYXJnaW46IDAgMCAwIC0uN3JlbTtcXG4gICAgbWF4LXdpZHRoOiAxNjBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jYXJyaWVyIGJ1dHRvbixcXG4ubGFiZWxlciBidXR0b24sXFxuLnByaW8tc2V0dGVyIGJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jYXJyaWVyIHUsXFxuLmxhYmVsZXIgdSxcXG4ucHJpby1zZXR0ZXIgdSB7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICBtYXJnaW46IDAgMCAwIC4yNXJlbTtcXG59XFxuXFxuLmxhYmVsZXIsXFxuLnByaW8tc2V0dGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLmxhYmVsZXIgZGl2LFxcbi5wcmlvLXNldHRlciBkaXYge1xcbiAgICBtYXgtd2lkdGg6IDE2MHB4O1xcbiAgICB3aWR0aDogMTAwJTsgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbjogMCAxLjhyZW0gMCBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodDkyKTtcXG4gICAgYm94LXNoYWRvdzogMCAxcHggOHB4IDAgcmdiKDAgMCAwIC8gOCUpLFxcbiAgICAgICAgMCAwIDFweCAwIHJnYigwIDAgMCAvIDMwJSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuLnByaW8tc2V0dGVyIGRpdiB7XFxuICAgIG1hcmdpbjogMCAwIDAgYXV0bztcXG4gICAgbWF4LXdpZHRoOiA4OHB4O1xcbn1cXG5cXG4ucHJpby1zZXR0ZXIgdSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmxhYmVsZXIgYnV0dG9uLFxcbi5wcmlvLXNldHRlciBidXR0b24ge1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG59XFxuXFxuLnNjaGVkdWxlciAuc2NoZWQtY3VzdG9tIGJ1dHRvbjpob3ZlciA+IHNwYW4sXFxuLnNjaGVkdWxlciAuc2NoZWQtY3VzdG9tIGJ1dHRvbjpmb2N1cy12aXNpYmxlID4gc3BhbiB7XFxuICAgIGNvbG9yOiB2YXIoLS1sYXVyZWwpO1xcbn1cXG5cXG4uYWRkLXRhc2stZGl2LmRpc3BsYXktc2NoZWR1bGVyIC5zY2hlZHVsZXIge1xcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xcbn1cXG5cXG4uYWRkLXRhc2stZGl2LmRpc3BsYXktY2FycmllciAuY2FycmllcixcXG4uYWRkLXRhc2stZGl2LmRpc3BsYXktbGFiZWxlciAubGFiZWxlcixcXG4uYWRkLXRhc2stZGl2LmRpc3BsYXktcHJpby1zZXR0ZXIgLnByaW8tc2V0dGVyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5hZGQtdGFzay1kaXYgLnNlbGVjdGVkLFxcbi5hZGQtdGFzay1kaXYgLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50MSk7XFxufVxcblxcbi5hZGQtdGFzay1tYWluLWJ0bnMtY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogLjVyZW0gMCAuNXJlbSAwO1xcbn1cXG5cXG4uYWRkLXRhc2stbWFpbi1idG5zLWNvbnRhaW5lciBidXR0b24ge1xcbiAgICBwYWRkaW5nOiAuMjVyZW07XFxufVxcblxcbi5hZGQtdGFzay1tYWluLWJ0bnMtY29udGFpbmVyIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1hbGlidSk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRyYW5zcGFyZW50Mik7XFxufVxcblxcbi5jb250YWluZXIuYWRkLXRyaWdnZXJlZCAuYWRkLXRhc2stYnRuLWRpdiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jb250YWluZXI6bm90KC5hZGQtdHJpZ2dlcmVkKSAuYWRkLXRhc2stZGl2LFxcbi5jb250YWluZXI6bm90KC5hZGQtdHJpZ2dlcmVkKSAuYWRkLXRhc2stbWFpbi1idG5zLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5xdWljay1hZGQtdG9kbyxcXG4ucHJvamVjdC1jcmVhdG9yLFxcbi5sYWJlbC1jcmVhdG9yLFxcbi50b2RvLWVkaXRvcixcXG4ucHJvamVjdC1lZGl0b3IsXFxuLmxhYmVsLWVkaXRvciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQyKTtcXG4gICAgei1pbmRleDogOTk5O1xcbn1cXG5cXG4ucXVpY2stYWRkLXRvZG8gPiAqLFxcbi5xdWljay1hZGQtdG9kbyBpbnB1dCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucXVpY2stYWRkLXRvZG8gPiBkaXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodDkyKTtcXG4gICAgbWF4LXdpZHRoOiA0ODBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgcGFkZGluZzogLjVyZW0gLjVyZW0gLjVyZW0gLjVyZW07XFxufVxcblxcbi5xdWljay1hZGQtdG9kbyA+IGRpdiA+ICo6bm90KDpmaXJzdC1jaGlsZCkge1xcbiAgICBtYXJnaW46IC41cmVtIDAgMCAwO1xcbn1cXG5cXG4ucXVpY2stYWRkLXRvZG8gYnV0dG9uIHtcXG4gICAgcGFkZGluZzogLjI1cmVtO1xcbn1cXG5cXG4ucXVpY2stYWRkLXRvZG8gYnV0dG9uOmZpcnN0LWNoaWxkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFyaW5lcik7XFxufVxcblxcbi5xdWljay1hZGQtdG9kbyBidXR0b246aG92ZXIsXFxuLnF1aWNrLWFkZC10b2RvIGJ1dHRvbjpmb2N1cy12aXNpYmxlIHtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0OTIpO1xcbn1cXG5cXG4ucXVpY2stYWRkLXRvZG8ub24ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4ubm90aWZpY2F0aW9ucyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaW5zZXQ6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICB6LWluZGV4OiA5OTk7XFxufVxcblxcbi5ub3RpZi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodDkyKTtcXG4gICAgbWFyZ2luOiA0MHB4IDAgYXV0byBhdXRvO1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG4gICAgbWF4LXdpZHRoOiA0MjBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC1oZWlnaHQ6IDMyMHB4O1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDhweCAwIHJnYigwIDAgMCAvIDglKSxcXG4gICAgICAgIDAgMCAxcHggMCByZ2IoMCAwIDAgLyAzMCUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi5ub3RpZi1jb250YWluZXIgbmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMCAwIC4yNXJlbSAwO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tdHJhbnNwYXJlbnQyKTtcXG59XFxuXFxuLm5vdGlmLWNvbnRhaW5lciBuYXYgPiAqIHtcXG4gICAgZm9udC1zaXplOiAuOXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubm90aWYtY29udGFpbmVyIGJ1dHRvbjpmaXJzdC1vZi10eXBle1xcbiAgICBtYXJnaW46IDAgMCAwIC41cmVtO1xcbn1cXG5cXG4ubmF2LWJ0bi1ub3RpZmljYXRpb24gc21hbGwge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxcbiAgICBjb2xvcjogdmFyKC0tYXVidXJuKTtcXG4gICAgbWFyZ2luLWxlZnQ6IC0uODVyZW07IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWxpYnUpO1xcbiAgICBwYWRkaW5nOiAwIDFweDtcXG59XFxuXFxuLm5hdi1idG4tbm90aWZpY2F0aW9uOmhvdmVyIHNtYWxsLFxcbi5uYXYtYnRuLW5vdGlmaWNhdGlvbjpmb2N1cy12aXNpYmxlIHNtYWxsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQhaW1wb3J0YW50O1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQ5MikhaW1wb3J0YW50O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnJlYWQtYWxsLWJ0biB7XFxuICAgIG1hcmdpbjogMCAwIDAgYXV0byFpbXBvcnRhbnQ7XFxufVxcblxcbi5yZWFkLWFsbC1idG4gc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4ubm90aWYtb3V0cHV0IHtcXG4gICAgbWFyZ2luOiAwIC4yNXJlbTtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgLyogb3ZlcmZsb3cteDogaGlkZGVuOyAqL1xcbn1cXG5cXG4ubm90aWYtb3V0cHV0ID4gKiB7XFxuICAgIG1hcmdpbjogLjI1cmVtIDAgMCAwO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tdHJhbnNwYXJlbnQxKTtcXG4gICAgcGFkZGluZzogMCAwIC4yNXJlbSAwO1xcbiAgICBcXG59XFxuXFxuLm5vdGlmIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm5vdGlmID4gKixcXG4ubm90aWYtZXh0cmEgYnV0dG9uIHNwYW57XFxuICAgIGZvbnQtc2l6ZTogLjlyZW07ICBcXG59XFxuXFxuLm5vdGlmID4gc3BhbiB7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG5cXG4ubm90aWYtZXh0cmEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ub3RpZiBzbWFsbCB7XFxuICAgIGNvbG9yOiB2YXIoLS1hdWJ1cm4pO1xcbn1cXG5cXG4ubm90aWZpY2F0aW9ucy5vbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuXFxufVxcblxcbi5hcHAuc2VhcmNoIC5hZGQtdGFzay1idG4tZGl2e1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucHJvamVjdC1jcmVhdG9yID4gZGl2LFxcbi5sYWJlbC1jcmVhdG9yID4gZGl2LFxcbi50b2RvLWVkaXRvciA+IGRpdixcXG4ucHJvamVjdC1lZGl0b3IgPiBkaXYsXFxuLmxhYmVsLWVkaXRvciA+IGRpdiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0OTIpO1xcbiAgICBtYXgtd2lkdGg6IDQyMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4ucHJvamVjdC1jcmVhdG9yID4gZGl2ID4gKixcXG4ubGFiZWwtY3JlYXRvciA+IGRpdiA+ICosXFxuLnRvZG8tZWRpdG9yID4gZGl2ID4gKixcXG4ucHJvamVjdC1lZGl0b3IgPiBkaXYgPiAqLFxcbi5sYWJlbC1lZGl0b3IgPiBkaXYgPiAqIHtcXG4gICAgcGFkZGluZzogLjVyZW07XFxuICAgIG1hcmdpbjogMCAwIC4yNXJlbSAwO1xcbn1cXG5cXG4ucHJvamVjdC1jcmVhdG9yID4gZGl2ID4gKjpmaXJzdC1jaGlsZCwgXFxuLnByb2plY3QtY3JlYXRvciA+IGRpdiA+ICo6bnRoLWNoaWxkKDIpLFxcbi5sYWJlbC1jcmVhdG9yID4gZGl2ID4gKjpmaXJzdC1jaGlsZCwgXFxuLmxhYmVsLWNyZWF0b3IgPiBkaXYgPiAqOm50aC1jaGlsZCgyKSxcXG4udG9kby1lZGl0b3IgPiBkaXYgPiAqOmZpcnN0LWNoaWxkLCBcXG4udG9kby1lZGl0b3IgPiBkaXYgPiAqOm50aC1jaGlsZCgyKSxcXG4ucHJvamVjdC1lZGl0b3IgPiBkaXYgPiAqOmZpcnN0LWNoaWxkLFxcbi5wcm9qZWN0LWVkaXRvciA+IGRpdiA+ICo6bnRoLWNoaWxkKDIpLFxcbi5sYWJlbC1lZGl0b3IgPiBkaXYgPiAqOmZpcnN0LWNoaWxkLFxcbi5sYWJlbC1lZGl0b3IgPiBkaXYgPiAqOm50aC1jaGlsZCgyKSB7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS10cmFuc3BhcmVudDEpO1xcbn1cXG5cXG4ucHJvamVjdC1jcmVhdG9yID4gZGl2LFxcbi5wcm9qZWN0LWlucHV0LFxcbi5sYWJlbC1jcmVhdG9yID4gZGl2LFxcbi5sYWJlbC1pbnB1dCxcXG4udG9kby1lZGl0b3IgPiBkaXYsXFxuLnRvZG8tZWRpdG9yLWlucHV0LFxcbi5wcm9qZWN0LWVkaXRvciA+IGRpdixcXG4ucHJvamVjdC1lZGl0b3ItaW5wdXQsXFxuLmxhYmVsLWVkaXRvciA+IGRpdixcXG4ubGFiZWwtZWRpdG9yLWlucHV0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnByb2plY3QtaW5wdXQgPiAqLFxcbi5sYWJlbC1pbnB1dCA+ICosXFxuLnRvZG8tZWRpdG9yLWlucHV0ID4gKixcXG4ucHJvamVjdC1lZGl0b3ItaW5wdXQgPiAqLFxcbi5sYWJlbC1lZGl0b3ItaW5wdXQgPiAqIHtcXG4gICAgbWFyZ2luOiAwIDAgLjI1cmVtIDA7XFxufVxcblxcbi5wcm9qZWN0LWlucHV0IGlucHV0LFxcbi5sYWJlbC1pbnB1dCBpbnB1dCxcXG4udG9kby1lZGl0b3ItaW5wdXQgaW5wdXQsXFxuLnRvZG8tZWRpdG9yLWlucHV0IHNlbGVjdCxcXG4ucHJvamVjdC1lZGl0b3ItaW5wdXQgaW5wdXQsXFxuLmxhYmVsLWVkaXRvci1pbnB1dCBpbnB1dCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICBwYWRkaW5nOiAuMjVyZW07XFxufVxcblxcbi50b2RvLWVkaXRvci1pbnB1dCB7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi50b2RvLWVkaXRvci1pbnB1dCB7XFxuICAgIHBhZGRpbmctdG9wOiAwIWltcG9ydGFudDtcXG59XFxuXFxuLnRvZG8tZWRpdG9yLWlucHV0IGxhYmVsIHtcXG4gICAgbWFyZ2luOiAuMjVyZW0gMCAuMXJlbSAwO1xcbn1cXG5cXG4ucHJvamVjdC1idXR0b25zLFxcbi5sYWJlbC1idXR0b25zLFxcbi50b2RvLWVkaXRvci1idXR0b25zLFxcbi51cGRhdGUtcHJvamVjdC1idXR0b25zLFxcbi51cGRhdGUtbGFiZWwtYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7ICAgIFxcbiAgICBtYXJnaW4tYm90dG9tOiAwIWltcG9ydGFudDtcXG59XFxuXFxuLnByb2plY3QtY3JlYXRvciBidXR0b24sXFxuLmxhYmVsLWNyZWF0b3IgYnV0dG9uLFxcbi50b2RvLWVkaXRvciBidXR0b24sXFxuLnByb2plY3QtZWRpdG9yIGJ1dHRvbixcXG4ubGFiZWwtZWRpdG9yIGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IC4yNXJlbTtcXG4gICAgbWFyZ2luOiAwIDAgMCAuMjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50MSk7XFxufVxcblxcbi5wcm9qZWN0LWNyZWF0b3IgYnV0dG9uOmZpcnN0LWNoaWxkLFxcbi5sYWJlbC1jcmVhdG9yIGJ1dHRvbjpmaXJzdC1jaGlsZCxcXG4udG9kby1lZGl0b3IgYnV0dG9uOmZpcnN0LWNoaWxkLFxcbi5wcm9qZWN0LWVkaXRvciBidXR0b246Zmlyc3QtY2hpbGQsXFxuLmxhYmVsLWVkaXRvciBidXR0b246Zmlyc3QtY2hpbGQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYXJpbmVyKTtcXG59XFxuXFxuLnVwZGF0ZS1wcm9qZWN0LWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCgzKSxcXG4udXBkYXRlLWxhYmVsLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCgzKSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWF1YnVybik7XFxufVxcblxcbi5wcm9qZWN0LWNyZWF0b3Iub24sXFxuLmxhYmVsLWNyZWF0b3Iub24sXFxuLnRvZG8tZWRpdG9yLm9uLFxcbi5wcm9qZWN0LWVkaXRvci5vbixcXG4ubGFiZWwtZWRpdG9yLm9uIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLnByb2plY3QtaW5wdXQgaW5wdXQ6Zm9jdXMtdmlzaWJsZSxcXG4ubGFiZWwtaW5wdXQgaW5wdXQ6Zm9jdXMtdmlzaWJsZSxcXG4udG9kby1lZGl0b3ItaW5wdXQgaW5wdXQ6Zm9jdXMtdmlzaWJsZSxcXG4ucHJvamVjdC1lZGl0b3ItaW5wdXQgaW5wdXQ6Zm9jdXMtdmlzaWJsZSxcXG4ubGFiZWwtZWRpdG9yLWlucHV0IGlucHV0OmZvY3VzLXZpc2libGUge1xcbiAgICBvdXRsaW5lOiAxcHggc29saWQgdmFyKC0tdHJhbnNwYXJlbnQyKTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xcbiAgICAubmF2LWNvbXAge1xcbiAgICAgICAgcGFkZGluZzogLjVyZW0gLjVyZW0gLjVyZW0gLjVyZW07XFxuICAgIH1cXG4gICAgLmluZm8tY29tcCB7XFxuICAgICAgICBwYWRkaW5nOiAxcmVtIC4yNXJlbSAuMjVyZW0gLjI1cmVtO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgei1pbmRleDogMTAwMDtcXG4gICAgICAgIHRvcDogNDcuNTlweDtcXG4gICAgICAgIGJvdHRvbTogMDtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG4gICAgLmluZm8tY29tcC5zaG93LW5hdiB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB9XFxuICAgIC5pbmZvLWNvbXAgPiAqIHtcXG4gICAgICAgIHdpZHRoOiAyOTRweDtcXG4gICAgfVxcbiAgICAuY29udGFpbmVyID4gaGVhZGVyIHtcXG4gICAgICAgIHBhZGRpbmc6IDFyZW0gMCAuNXJlbSAwO1xcbiAgICB9XFxuICAgIC5jb250YWluZXIge1xcbiAgICAgICAgcGFkZGluZzogMCAxcmVtIDAgMXJlbTtcXG4gICAgfVxcbiAgICAucXVpY2stYWRkLXRvZG8gPiBkaXYge1xcbiAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XFxuICAgIC5pbmZvLWNvbXAgPiAqIHtcXG4gICAgICAgIHdpZHRoOiAyNDJweDtcXG4gICAgfVxcbiAgICAuc2VhcmNoLWlucHV0IHtcXG4gICAgICAgIHdpZHRoOiAxODBweDtcXG4gICAgfVxcbiAgICAuc2VhcmNoLWlucHV0OmZvY3VzIHtcXG4gICAgICAgIHdpZHRoOiAxODBweDtcXG4gICAgfVxcbiAgICAucXVpY2stYWRkLXRvZG8gPiBkaXYge1xcbiAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcXG4gICAgfVxcbiAgICAubm90aWYtY29udGFpbmVyIHtcXG4gICAgICAgIG1heC13aWR0aDogMzEwcHg7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjFweCkge1xcbiAgICAuc2VhcmNoLWlucHV0IHtcXG4gICAgICAgIG1heC13aWR0aDogMTM1cHg7XFxuICAgIH1cXG4gICAgLnNlYXJjaC1pbnB1dDpmb2N1cyB7XFxuICAgICAgICBtYXgtd2lkdGg6IDEzNXB4O1xcbiAgICB9XFxuICAgIC5xdWljay1hZGQtdG9kbyA+IGRpdiB7XFxuICAgICAgICBtYXgtd2lkdGg6IDI3MHB4O1xcbiAgICB9XFxuICAgIC5ub3RpZi1jb250YWluZXIge1xcbiAgICAgICAgbWF4LXdpZHRoOiAyNzBweDtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA0MjBweCkge1xcbiAgICAudG9kby1lZGl0b3ItaW5wdXQge1xcbiAgICAgICAgbWF4LWhlaWdodDogMTgwcHg7XFxuICAgIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFDMUIsdUJBQXVCO0lBQ3ZCLDRCQUE0QjtJQUM1QiwwQkFBMEI7SUFDMUIsNkJBQTZCO0lBQzdCLDZCQUE2QjtJQUM3Qiw0QkFBNEI7SUFDNUIsd0JBQXdCO0lBQ3hCLDhCQUE4QjtJQUM5Qiw4QkFBOEI7O0lBRTlCLDRCQUE0QjtJQUM1QiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTs7SUFFSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsbUNBQW1DO0lBQ25DLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJ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SUFNSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBOzs7OztJQUtJLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsMEJBQTBCO0FBQzlCOztBQUVBOzs7OztJQUtJLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIscUNBQXFDO0FBQ3pDOztBQUVBOzs7OztJQUtJLGdDQUFnQztBQUNwQzs7QUFFQTs7SUFFSSwrQkFBK0I7QUFDbkM7O0FBRUE7Ozs7O0lBS0ksYUFBYTtBQUNqQjs7QUFFQTs7Ozs7SUFLSSxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSTtRQUNJLGdDQUFnQztJQUNwQztJQUNBO1FBQ0ksa0NBQWtDO1FBQ2xDLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsWUFBWTtRQUNaLFNBQVM7UUFDVCxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSx1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxpQkFBaUI7SUFDckI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tbGlnaHQ5MjogaHNsKDAsIDAlLCA5MiUpO1xcbiAgICAtLWxpZ2h0ODg6IGhzbCgwLCAwJSwgODglKTtcXG4gICAgLS1kYXJrOiBoc2woMCwgMCUsIDEyJSk7XFxuICAgIC0tbWFsaWJ1OiBoc2woMTkyLCA5MyUsIDcyJSk7XFxuICAgIC0tYXVidXJuOiBoc2woMCwgNzUlLCA2NSUpO1xcbiAgICAtLW1hcmluZXI6IGhzbCgyMTYsIDc1JSwgNTElKTtcXG4gICAgLS1sYXVyZWw6IGhzbCgxMjAsIDEwMCUsIDI1JSk7XFxuICAgIC0tcHVycGxlOiBoc2woMjY0LCA2MSUsIDQ3JSk7XFxuICAgIC0tc3VuOiBoc2woMzQsIDkzJSwgNDglKTtcXG4gICAgLS10cmFuc3BhcmVudDE6IHJnYmEoMCwwLDAsLjEpO1xcbiAgICAtLXRyYW5zcGFyZW50MjogcmdiYSgwLDAsMCwuMik7XFxuXFxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0tbGlnaHQ5Mik7XFxuICAgIC0tZm9yZWdyb3VuZDogdmFyKC0tbWFsaWJ1KTtcXG59XFxuXFxuKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7ICBcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcbiAgICBmb250LWZhbWlseTpzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogdmFyKC0tZGFyayk7XFxufVxcblxcbmJ1dHRvbixcXG4uc2VhcmNoLWlucHV0IHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IC4xMjVyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbmJ1dHRvbixcXG4uaWMtZGl2IHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5zcGFuLm1pZCB7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbnNwYW4sXFxuaDEge1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLmFwcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLm5hdi1jb21wICxcXG4ubmMtbGVmdCxcXG4uc2VhcmNoLWRpdixcXG4ubmMtcmlnaHQge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG59XFxuXFxuLm5hdi1jb21wIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogLjVyZW0gM3JlbSAuNXJlbSAzcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb3JlZ3JvdW5kKTtcXG59XFxuXFxuLm5jLWxlZnQgPiAqIHtcXG4gICAgbWFyZ2luOiAwIC4yNXJlbSAwIDA7XFxufVxcblxcbi5uYy1yaWdodCA+ICoge1xcbiAgICBtYXJnaW46IDAgMCAwIC4yNXJlbTtcXG59XFxuXFxuLm5jLXJpZ2h0IGJ1dHRvbjpmaXJzdC1jaGlsZCB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLnNlYXJjaC1kaXYge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvcmVncm91bmQpO1xcbn1cXG5cXG4uc2VhcmNoLWRpdiA+IHNwYW46Zmlyc3QtY2hpbGQge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGN1cnNvcjogdGV4dDtcXG4gICAgbWFyZ2luOiAuMXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxuICAgIHotaW5kZXg6IDI7XFxufVxcblxcbi5zZWFyY2gtZGl2IGJ1dHRvbiB7XFxuICAgIG1hcmdpbjogLjJyZW0gMCAuMnJlbSAtMS41cmVtO1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5zZWFyY2gtZGl2IGJ1dHRvbjpob3ZlcixcXG4uc2VhcmNoLWRpdiBidXR0b246Zm9jdXMtdmlzaWJsZSB7XFxuICAgIGNvbG9yOiB2YXIoLS1hdWJ1cm4pO1xcbn1cXG5cXG4uc2VhcmNoLWlucHV0IHtcXG4gICAgcGFkZGluZzogMCAxLjZyZW0gMCAxLjhyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiAtMS45cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudDEpO1xcbn1cXG5cXG4uc2VhcmNoLWlucHV0Ojotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4uc2VhcmNoLWlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pICsgYnV0dG9uIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5zZWFyY2gtZGl2OmZvY3VzLXdpdGhpbiAuc2VhcmNoLWlucHV0LFxcbi5zZWFyY2gtZGl2OmhvdmVyIC5zZWFyY2gtaW5wdXQsXFxuLnNlYXJjaC1pbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQ5Mik7XFxufVxcblxcbi5zZWFyY2gtZGl2IGJ1dHRvbiBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uYXBwLWJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiAxO1xcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSA0Ni41OXB4KTtcXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5pbmZvLWNvbXAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAycmVtIC4yNXJlbSAwIDIuOHJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQ4OCk7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi5pbmZvLWNvbXAgPiAqIHtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgZm9udC1zaXplOiAuOXJlbTtcXG4gICAgd2lkdGg6IDI5NHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5pbmZvLWNvbXAgPiAqID4gc2FtcCB7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgb3BhY2l0eTogLjU7XFxuICAgIG1hcmdpbjogNHB4IDFyZW0gNHB4IDA7XFxufVxcblxcbi5pYy1kaXYge1xcbiAgICBtYXJnaW46IC4yNXJlbSAwIDAgMDtcXG59XFxuXFxuLmluZm8tY29tcCA+IGRpdjpmaXJzdC1vZi10eXBle1xcbiAgICBtYXJnaW46IDFyZW0gMCAwIDA7XFxufVxcblxcbi5pYy1zcGFuIHtcXG4gICAgbWFyZ2luOiAwIC4yNXJlbSAwIDA7XFxufVxcblxcbi5pbmZvLWNvbXAgPiBidXR0b246Zmlyc3QtY2hpbGQgc3BhbiB7XFxuICAgIGNvbG9yOiB2YXIoLS1tYXJpbmVyKTtcXG59XFxuXFxuLmluZm8tY29tcCA+IGJ1dHRvbjpudGgtY2hpbGQoMikgc3BhbiB7XFxuICAgIGNvbG9yOiB2YXIoLS1sYXVyZWwpO1xcbn1cXG5cXG4uaW5mby1jb21wID4gYnV0dG9uOm50aC1jaGlsZCgzKSBzcGFuIHtcXG4gICAgY29sb3I6IHZhcigtLXB1cnBsZSk7XFxufVxcblxcbi5pbmZvLWNvbXAgLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1hbGlidSk7XFxufVxcblxcbi5vcGEge1xcbiAgICBvcGFjaXR5OiAuNTtcXG59XFxuXFxuLmljLWFkZC1idG4ge1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIG1hcmdpbjogMHB4IC41cmVtIDAgMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmljLWFkZC1idG46aG92ZXIgKyBzdHJvbmcsXFxuLmljLWFkZC1idG46Zm9jdXMtdmlzaWJsZSArIHN0cm9uZyB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICB0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDMwJTtcXG59XFxuXFxuLmluZm8tY29tcDpmb2N1cy13aXRoaW4gLmljLWFkZC1idG4sXFxuLmluZm8tY29tcDpob3ZlciAuaWMtYWRkLWJ0bntcXG4gICAgZGlzcGxheTogaW5oZXJpdDtcXG59XFxuXFxuLmljLWRpdiA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5pYy1kaXYgPiBkaXYuc2hvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5pYy1wcm9qZWN0ID4gc3Bhbi5yb3RhdGUsXFxuLmljLWxhYmVsID4gc3Bhbi5yb3RhdGUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcblxcblxcbi5zaG93IHtcXG4gICAgbWFyZ2luOiAuNzVyZW0gMCAwIDA7XFxufVxcblxcbi5zaG93ID4gZGl2IHtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogLjVyZW0gLjVyZW0gLjVyZW0gLjVyZW07XFxuICAgIGhlaWdodDogMzRweDtcXG4gICAgZm9udC1zaXplOiAuOXJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG5zcGFuLnVuaXF1ZSB7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1yaWdodDogLjJyZW07XFxufVxcblxcbi5zaG93IGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLnNob3cgPiBkaXY6aG92ZXIsXFxuLnNob3cgPiBkaXY6Zm9jdXMtdmlzaWJsZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50Mik7XFxufVxcblxcbi5zaG93ID4gZGl2OmhvdmVyIGJ1dHRvbixcXG4uc2hvdyA+IGRpdjpmb2N1cy12aXNpYmxlIGJ1dHRvbixcXG4uc2hvdyA+IGRpdjpmb2N1cy13aXRoaW4gYnV0dG9ue1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLnNob3cgYnV0dG9uOmhvdmVyLFxcbi5zaG93IGJ1dHRvbjpmb2N1cy12aXNpYmxlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQhaW1wb3J0YW50O1xcbn1cXG5cXG4uYnVsbGV0IHtcXG4gICAgbWluLXdpZHRoOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgbWFyZ2luOiAwIC43cmVtIDAgLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50Mik7XFxufVxcblxcbi50YWcge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC44KTtcXG4gICAgbWFyZ2luOiAwIC4ycmVtIDAgLjJyZW07XFxuICAgIGNvbG9yOiB2YXIoLS10cmFuc3BhcmVudDIpO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleDogMTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBwYWRkaW5nOiAwIDJyZW0gMCAycmVtO1xcblxcbn1cXG5cXG4uY29udGFpbmVyID4gKiB7XFxuICAgIG1heC13aWR0aDogODAwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY29udGFpbmVyID4gZm9vdGVyIHtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG59XFxuXFxuLmNvbnRhaW5lciA+IGhlYWRlciB7XFxuICAgIHBhZGRpbmc6IDJyZW0gMCAxcmVtIDA7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHRvcDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQ5Mik7XFxuICAgIHotaW5kZXg6IDM7XFxufVxcblxcbmgxIHtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi50b2RvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMnB4IDA7XFxuICAgIG1hcmdpbjogLjVyZW0gMCAuNXJlbSAwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS10cmFuc3BhcmVudDEpO1xcbn1cXG5cXG4udG9kbyxcXG4udG9kbyAqIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2hlY2tib3gtYnRuIHsgXFxuICAgIGhlaWdodDogMThweDtcXG4gICAgbWF4LXdpZHRoOiAxOHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAuMjdyZW0gLjdyZW0gMCAwO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5jaGVja2JveC1idG4ucHJpbzEge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1hdWJ1cm4pO1xcbn1cXG5cXG4uY2hlY2tib3gtYnRuLnByaW8yIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tc3VuKTtcXG59XFxuXFxuLmNoZWNrYm94LWJ0bi5wcmlvMyB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLW1hcmluZXIpO1xcbn1cXG5cXG4uY2hlY2tib3gtYnRuLnByaW80IHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tdHJhbnNwYXJlbnQyKTtcXG59XFxuXFxuLmNoZWNrYm94LWJ0bjpob3ZlcixcXG4uY2hlY2tib3gtYnRuOmZvY3VzLXZpc2libGUge1xcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudDEpO1xcbn1cXG5cXG4uY2hlY2tib3gtYnRuICsgc3BhbiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgY29sb3I6IHZhcigtLXRyYW5zcGFyZW50Mik7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBtYXJnaW46IC0uOXJlbSAwIDAgLTFyZW07ICAgIFxcbn1cXG5cXG4uY2hlY2tib3gtYnRuOmhvdmVyICsgc3BhbixcXG4uY2hlY2tib3gtYnRuOmZvY3VzLXZpc2libGUgKyBzcGFuIHtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLmNoZWNrYm94LWJ0bjphY3RpdmUgKyBzcGFue1xcbiAgICBjb2xvcjogdmFyKC0tbGF1cmVsKTtcXG59XFxuXFxuLnRvZG8tdGV4dCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXg6IDE7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50b2RvLXRleHQgPiBsYWJlbCB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjRyZW07XFxufVxcblxcbi50b2RvLXRleHQtbm90ZSB7XFxuICAgIHRleHQtaW5kZW50OiAxcmVtO1xcbiAgICBmb250LXNpemU6IC45cmVtO1xcbiAgICBtYXJnaW46IDAgMCAuMjVyZW0gMDtcXG59XFxuXFxuLnRvZG8tdGV4dC1ub3RlLFxcbi50b2RvLXRleHQtbm90ZSA+IHNwYW4sXFxuLnRvZG8tdGV4dCBzbWFsbCB7XFxuICAgIGNvbG9yOiBncmF5O1xcbn1cXG5cXG4udG9kby10ZXh0LW5vdGUgPiBzcGFuLFxcbmVtLFxcbmVtID4gc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogLjlyZW0haW1wb3J0YW50O1xcbn1cXG5cXG5lbSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uc2NoZWQtZHVlIHtcXG4gICAgY29sb3I6IHZhcigtLWF1YnVybik7XFxufVxcblxcbi5zY2hlZC10b2RheSB7XFxuICAgIGNvbG9yOiB2YXIoLS1sYXVyZWwpO1xcbn1cXG5cXG4uc2NoZWQtdXBjb20ge1xcbiAgICBjb2xvcjogdmFyKC0tcHVycGxlKTtcXG59XFxuXFxuLnRvZG8tdG9vbHMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICBtYXJnaW46IC0yMHB4IDAgMCAwO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi50b2RvLXRvb2xzLWNvbnRhaW5lciAqIHtcXG4gICAgY29sb3I6IGdyYXk7XFxufVxcblxcbi50b29sLXNwYW4ge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLnRvZG86aG92ZXIgLnRvZG8tdG9vbHMtY29udGFpbmVyLFxcbi50b2RvOmZvY3VzLXdpdGhpbiAudG9kby10b29scy1jb250YWluZXIge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG5idXR0b246aG92ZXIsXFxuYnV0dG9uOmZvY3VzLXZpc2libGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudDIpO1xcbn1cXG5cXG5idXR0b246Zm9jdXMtdmlzaWJsZSB7XFxuICAgIG91dGxpbmU6IGF1dG87XFxufVxcblxcbi5hZGQtdGFzay1idG4ge1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBjb2xvcjogZ3JheTtcXG59XFxuXFxuLmFkZC10YXNrLWJ0biAqIHtcXG4gICAgcGFkZGluZzogLjFyZW07XFxufVxcblxcbi5hZGQtdGFzay1idG4gc3BhbiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgY29sb3I6IHZhcigtLWF1YnVybik7XFxufVxcblxcbi5hZGQtdGFzay1idG46aG92ZXIsXFxuLmFkZC10YXNrLWJ0bjpmb2N1cy12aXNpYmxlLFxcbi5hZGQtdGFzay1idG4gc3BhbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uYWRkLXRhc2stYnRuOmhvdmVyIHNwYW4sXFxuLmFkZC10YXNrLWJ0bjpmb2N1cy12aXNpYmxlIHNwYW4ge1xcbiAgICBjb2xvcjogdmFyKC0tbWFyaW5lcik7XFxufVxcblxcbi5lbXB0eS1zdGF0ZS1kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4OiAxO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmVtcHR5LXN0YXRlLWRpdiBpbWcge1xcbiAgICBtYXgtd2lkdGg6IDE4MHB4O1xcbiAgICBcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uZW1wdHktc3RhdGUtZGl2IGg0IHtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgY29sb3I6IGdyYXk7XFxufVxcblxcbi5lbXB0eS1zdGF0ZS1kaXYgKjpudGgtY2hpbGQobisyKSB7XFxuICAgIG1hcmdpbjogLjI1cmVtIDAgMCAwO1xcbn1cXG5cXG4uZW1wdHktc3RhdGUtZGl2ICo6bnRoLWNoaWxkKG4rMiksXFxuLmNvbnRhaW5lciBmb290ZXIgcCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmVtcHR5LXN0YXRlLWRpdiBwIHtcXG4gICAgZm9udC1zaXplOiAuOXJlbTtcXG4gICAgY29sb3I6IGRhcmtncmF5O1xcbn1cXG5cXG4uY29udGFpbmVyIGZvb3RlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1hdWJ1cm4pO1xcbiAgICBmb250LXNpemU6IC45cmVtIWltcG9ydGFudDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IC4yNXJlbSAwIC43NXJlbSAwO1xcbn1cXG5cXG4uY29udGFpbmVyIGZvb3RlciBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtIWltcG9ydGFudDtcXG59XFxuXFxuLmNvbnRhaW5lciBmb290ZXIgcCB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jb250YWluZXI6bm90KC5lbXB0eSkgLmVtcHR5LXN0YXRlLWRpdixcXG4uY29udGFpbmVyOm5vdCguZW1wdHkpIGZvb3RlciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5hZGQtdGFzay1kaXYge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10cmFuc3BhcmVudDIpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIHBhZGRpbmc6IDAgLjVyZW0gLjVyZW0gLjVyZW07XFxuICAgIGhlaWdodDogNjguNDhweDtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuXFxuLmFkZC10YXNrLWRpdiA+ICoge1xcbiAgICBtYXJnaW4tdG9wOiAuNXJlbTtcXG59XFxuXFxuLmFkZC10YXNrLWRpdiBpbnB1dCxcXG4ucXVpY2stYWRkLXRvZG8gaW5wdXQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IC45cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodDkyKTtcXG59XFxuXFxuLmFkZC10YXNrLWJ0bnMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uYWRkLXRhc2stYnRucy1jb250YWluZXIgZGl2ID4gYnV0dG9uIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdHJhbnNwYXJlbnQyKTtcXG4gICAgcGFkZGluZzogLjI1cmVtO1xcbn1cXG5cXG4uYWRkLXRhc2stYnRucy1jb250YWluZXIgYnV0dG9uID4gc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogLjlyZW0haW1wb3J0YW50O1xcbn1cXG5cXG4uYWRkLXRhc2stYnRucy1jb250YWluZXIgPiBidXR0b246bnRoLWNoaWxkKDIpIHNwYW4ge1xcbiAgICBjb2xvcjogdmFyKC0tbWFyaW5lcik7XFxufVxcblxcbi5zZWxlY3QtcHJvamVjdC1idG4ge1xcbiAgICBtYXgtd2lkdGg6IDc1cHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG5cXG4uc2NoZWR1bGVyLFxcbi5jYXJyaWVyIHtcXG4gICAgbWF4LXdpZHRoOiAyMTBweDtcXG4gICAgd2lkdGg6IDEwMCU7ICAgIFxcbn1cXG5cXG4uc2NoZWR1bGVyLFxcbi5jYXJyaWVyLFxcbi5sYWJlbGVyLFxcbi5wcmlvLXNldHRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0OTIpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luOiAwIDAgMCAwO1xcbiAgICBib3gtc2hhZG93OiAwIDFweCA4cHggMCByZ2IoMCAwIDAgLyA4JSksXFxuICAgICAgICAwIDAgMXB4IDAgcmdiKDAgMCAwIC8gMzAlKTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnNjaGVkdWxlciA+ICosXFxuLmNhcnJpZXIgPiAqIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIHBhZGRpbmc6IC41cmVtIC41cmVtIC41cmVtIC41cmVtO1xcbn1cXG5cXG4uc2NoZWQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5zY2hlZCBzcGFuOm50aC1jaGlsZCgyKSB7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICBjb2xvcjogZ3JheTtcXG59XFxuXFxuLnNjaGVkdWxlciBpbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XFxuICAgIG9wYWNpdHk6IC40O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zY2hlZHVsZXIgaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3I6aG92ZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uc2NoZWR1bGVyIC5zY2hlZC1jdXN0b20ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uc2NoZWR1bGVyIC5zY2hlZC1jdXN0b20gYnV0dG9uIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdHJhbnNwYXJlbnQxKTtcXG59XFxuXFxuLnNjaGVkdWxlciAuc2NoZWQtY3VzdG9tIGlucHV0IHtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5zY2hlZHVsZXIgLnNjaGVkLWN1c3RvbSBidXR0b24gPiBzcGFuLFxcbi5jYXJyaWVyIHNwYW4sXFxuLmxhYmVsZXIgc3BhbixcXG4ucHJpby1zZXR0ZXIgc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogLjlyZW0haW1wb3J0YW50O1xcbn1cXG5cXG4ucHJpby1zZXR0ZXIgYnV0dG9uOmZpcnN0LWNoaWxkIHNwYW4ge1xcbiAgICBjb2xvcjogdmFyKC0tYXVidXJuKTtcXG59XFxuXFxuLnByaW8tc2V0dGVyIGJ1dHRvbjpudGgtY2hpbGQoMikgc3BhbiB7XFxuICAgIGNvbG9yOiB2YXIoLS1zdW4pO1xcbn1cXG5cXG4ucHJpby1zZXR0ZXIgYnV0dG9uOm50aC1jaGlsZCgzKSBzcGFuIHtcXG4gICAgY29sb3I6IHZhcigtLW1hcmluZXIpO1xcbn1cXG5cXG4ucHJpby1zZXR0ZXIgYnV0dG9uOm50aC1jaGlsZCg0KSBzcGFuIHtcXG4gICAgY29sb3I6IGdyYXk7XFxufVxcblxcbi5jYXJyaWVyIHtcXG4gICAgbWFyZ2luOiAwIDAgMCAtLjdyZW07XFxuICAgIG1heC13aWR0aDogMTYwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY2FycmllciBidXR0b24sXFxuLmxhYmVsZXIgYnV0dG9uLFxcbi5wcmlvLXNldHRlciBidXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2FycmllciB1LFxcbi5sYWJlbGVyIHUsXFxuLnByaW8tc2V0dGVyIHUge1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgbWFyZ2luOiAwIDAgMCAuMjVyZW07XFxufVxcblxcbi5sYWJlbGVyLFxcbi5wcmlvLXNldHRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi5sYWJlbGVyIGRpdixcXG4ucHJpby1zZXR0ZXIgZGl2IHtcXG4gICAgbWF4LXdpZHRoOiAxNjBweDtcXG4gICAgd2lkdGg6IDEwMCU7IFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW46IDAgMS44cmVtIDAgYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQ5Mik7XFxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDhweCAwIHJnYigwIDAgMCAvIDglKSxcXG4gICAgICAgIDAgMCAxcHggMCByZ2IoMCAwIDAgLyAzMCUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi5wcmlvLXNldHRlciBkaXYge1xcbiAgICBtYXJnaW46IDAgMCAwIGF1dG87XFxuICAgIG1heC13aWR0aDogODhweDtcXG59XFxuXFxuLnByaW8tc2V0dGVyIHUge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5sYWJlbGVyIGJ1dHRvbixcXG4ucHJpby1zZXR0ZXIgYnV0dG9uIHtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgcGFkZGluZzogLjVyZW07XFxufVxcblxcbi5zY2hlZHVsZXIgLnNjaGVkLWN1c3RvbSBidXR0b246aG92ZXIgPiBzcGFuLFxcbi5zY2hlZHVsZXIgLnNjaGVkLWN1c3RvbSBidXR0b246Zm9jdXMtdmlzaWJsZSA+IHNwYW4ge1xcbiAgICBjb2xvcjogdmFyKC0tbGF1cmVsKTtcXG59XFxuXFxuLmFkZC10YXNrLWRpdi5kaXNwbGF5LXNjaGVkdWxlciAuc2NoZWR1bGVyIHtcXG4gICAgZGlzcGxheTogaW5oZXJpdDtcXG59XFxuXFxuLmFkZC10YXNrLWRpdi5kaXNwbGF5LWNhcnJpZXIgLmNhcnJpZXIsXFxuLmFkZC10YXNrLWRpdi5kaXNwbGF5LWxhYmVsZXIgLmxhYmVsZXIsXFxuLmFkZC10YXNrLWRpdi5kaXNwbGF5LXByaW8tc2V0dGVyIC5wcmlvLXNldHRlciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uYWRkLXRhc2stZGl2IC5zZWxlY3RlZCxcXG4uYWRkLXRhc2stZGl2IC5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudDEpO1xcbn1cXG5cXG4uYWRkLXRhc2stbWFpbi1idG5zLWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IC41cmVtIDAgLjVyZW0gMDtcXG59XFxuXFxuLmFkZC10YXNrLW1haW4tYnRucy1jb250YWluZXIgYnV0dG9uIHtcXG4gICAgcGFkZGluZzogLjI1cmVtO1xcbn1cXG5cXG4uYWRkLXRhc2stbWFpbi1idG5zLWNvbnRhaW5lciBidXR0b246Zmlyc3QtY2hpbGQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWxpYnUpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10cmFuc3BhcmVudDIpO1xcbn1cXG5cXG4uY29udGFpbmVyLmFkZC10cmlnZ2VyZWQgLmFkZC10YXNrLWJ0bi1kaXYge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY29udGFpbmVyOm5vdCguYWRkLXRyaWdnZXJlZCkgLmFkZC10YXNrLWRpdixcXG4uY29udGFpbmVyOm5vdCguYWRkLXRyaWdnZXJlZCkgLmFkZC10YXNrLW1haW4tYnRucy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucXVpY2stYWRkLXRvZG8sXFxuLnByb2plY3QtY3JlYXRvcixcXG4ubGFiZWwtY3JlYXRvcixcXG4udG9kby1lZGl0b3IsXFxuLnByb2plY3QtZWRpdG9yLFxcbi5sYWJlbC1lZGl0b3Ige1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50Mik7XFxuICAgIHotaW5kZXg6IDk5OTtcXG59XFxuXFxuLnF1aWNrLWFkZC10b2RvID4gKixcXG4ucXVpY2stYWRkLXRvZG8gaW5wdXQge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnF1aWNrLWFkZC10b2RvID4gZGl2IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQ5Mik7XFxuICAgIG1heC13aWR0aDogNDgwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIHBhZGRpbmc6IC41cmVtIC41cmVtIC41cmVtIC41cmVtO1xcbn1cXG5cXG4ucXVpY2stYWRkLXRvZG8gPiBkaXYgPiAqOm5vdCg6Zmlyc3QtY2hpbGQpIHtcXG4gICAgbWFyZ2luOiAuNXJlbSAwIDAgMDtcXG59XFxuXFxuLnF1aWNrLWFkZC10b2RvIGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IC4yNXJlbTtcXG59XFxuXFxuLnF1aWNrLWFkZC10b2RvIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1hcmluZXIpO1xcbn1cXG5cXG4ucXVpY2stYWRkLXRvZG8gYnV0dG9uOmhvdmVyLFxcbi5xdWljay1hZGQtdG9kbyBidXR0b246Zm9jdXMtdmlzaWJsZSB7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodDkyKTtcXG59XFxuXFxuLnF1aWNrLWFkZC10b2RvLm9uIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLm5vdGlmaWNhdGlvbnMge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGluc2V0OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgei1pbmRleDogOTk5O1xcbn1cXG5cXG4ubm90aWYtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQ5Mik7XFxuICAgIG1hcmdpbjogNDBweCAwIGF1dG8gYXV0bztcXG4gICAgcGFkZGluZzogLjVyZW07XFxuICAgIG1heC13aWR0aDogNDIwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtaGVpZ2h0OiAzMjBweDtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBib3gtc2hhZG93OiAwIDFweCA4cHggMCByZ2IoMCAwIDAgLyA4JSksXFxuICAgICAgICAwIDAgMXB4IDAgcmdiKDAgMCAwIC8gMzAlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4ubm90aWYtY29udGFpbmVyIG5hdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAgMCAuMjVyZW0gMDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXRyYW5zcGFyZW50Mik7XFxufVxcblxcbi5ub3RpZi1jb250YWluZXIgbmF2ID4gKiB7XFxuICAgIGZvbnQtc2l6ZTogLjlyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm5vdGlmLWNvbnRhaW5lciBidXR0b246Zmlyc3Qtb2YtdHlwZXtcXG4gICAgbWFyZ2luOiAwIDAgMCAuNXJlbTtcXG59XFxuXFxuLm5hdi1idG4tbm90aWZpY2F0aW9uIHNtYWxsIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcXG4gICAgY29sb3I6IHZhcigtLWF1YnVybik7XFxuICAgIG1hcmdpbi1sZWZ0OiAtLjg1cmVtOyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFsaWJ1KTtcXG4gICAgcGFkZGluZzogMCAxcHg7XFxufVxcblxcbi5uYXYtYnRuLW5vdGlmaWNhdGlvbjpob3ZlciBzbWFsbCxcXG4ubmF2LWJ0bi1ub3RpZmljYXRpb246Zm9jdXMtdmlzaWJsZSBzbWFsbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50IWltcG9ydGFudDtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0OTIpIWltcG9ydGFudDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5yZWFkLWFsbC1idG4ge1xcbiAgICBtYXJnaW46IDAgMCAwIGF1dG8haW1wb3J0YW50O1xcbn1cXG5cXG4ucmVhZC1hbGwtYnRuIHNwYW4ge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLm5vdGlmLW91dHB1dCB7XFxuICAgIG1hcmdpbjogMCAuMjVyZW07XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIC8qIG92ZXJmbG93LXg6IGhpZGRlbjsgKi9cXG59XFxuXFxuLm5vdGlmLW91dHB1dCA+ICoge1xcbiAgICBtYXJnaW46IC4yNXJlbSAwIDAgMDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXRyYW5zcGFyZW50MSk7XFxuICAgIHBhZGRpbmc6IDAgMCAuMjVyZW0gMDtcXG4gICAgXFxufVxcblxcbi5ub3RpZiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5ub3RpZiA+ICosXFxuLm5vdGlmLWV4dHJhIGJ1dHRvbiBzcGFue1xcbiAgICBmb250LXNpemU6IC45cmVtOyAgXFxufVxcblxcbi5ub3RpZiA+IHNwYW4ge1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuXFxuLm5vdGlmLWV4dHJhIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubm90aWYgc21hbGwge1xcbiAgICBjb2xvcjogdmFyKC0tYXVidXJuKTtcXG59XFxuXFxuLm5vdGlmaWNhdGlvbnMub24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcblxcbn1cXG5cXG4uYXBwLnNlYXJjaCAuYWRkLXRhc2stYnRuLWRpdntcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnByb2plY3QtY3JlYXRvciA+IGRpdixcXG4ubGFiZWwtY3JlYXRvciA+IGRpdixcXG4udG9kby1lZGl0b3IgPiBkaXYsXFxuLnByb2plY3QtZWRpdG9yID4gZGl2LFxcbi5sYWJlbC1lZGl0b3IgPiBkaXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodDkyKTtcXG4gICAgbWF4LXdpZHRoOiA0MjBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuLnByb2plY3QtY3JlYXRvciA+IGRpdiA+ICosXFxuLmxhYmVsLWNyZWF0b3IgPiBkaXYgPiAqLFxcbi50b2RvLWVkaXRvciA+IGRpdiA+ICosXFxuLnByb2plY3QtZWRpdG9yID4gZGl2ID4gKixcXG4ubGFiZWwtZWRpdG9yID4gZGl2ID4gKiB7XFxuICAgIHBhZGRpbmc6IC41cmVtO1xcbiAgICBtYXJnaW46IDAgMCAuMjVyZW0gMDtcXG59XFxuXFxuLnByb2plY3QtY3JlYXRvciA+IGRpdiA+ICo6Zmlyc3QtY2hpbGQsIFxcbi5wcm9qZWN0LWNyZWF0b3IgPiBkaXYgPiAqOm50aC1jaGlsZCgyKSxcXG4ubGFiZWwtY3JlYXRvciA+IGRpdiA+ICo6Zmlyc3QtY2hpbGQsIFxcbi5sYWJlbC1jcmVhdG9yID4gZGl2ID4gKjpudGgtY2hpbGQoMiksXFxuLnRvZG8tZWRpdG9yID4gZGl2ID4gKjpmaXJzdC1jaGlsZCwgXFxuLnRvZG8tZWRpdG9yID4gZGl2ID4gKjpudGgtY2hpbGQoMiksXFxuLnByb2plY3QtZWRpdG9yID4gZGl2ID4gKjpmaXJzdC1jaGlsZCxcXG4ucHJvamVjdC1lZGl0b3IgPiBkaXYgPiAqOm50aC1jaGlsZCgyKSxcXG4ubGFiZWwtZWRpdG9yID4gZGl2ID4gKjpmaXJzdC1jaGlsZCxcXG4ubGFiZWwtZWRpdG9yID4gZGl2ID4gKjpudGgtY2hpbGQoMikge1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tdHJhbnNwYXJlbnQxKTtcXG59XFxuXFxuLnByb2plY3QtY3JlYXRvciA+IGRpdixcXG4ucHJvamVjdC1pbnB1dCxcXG4ubGFiZWwtY3JlYXRvciA+IGRpdixcXG4ubGFiZWwtaW5wdXQsXFxuLnRvZG8tZWRpdG9yID4gZGl2LFxcbi50b2RvLWVkaXRvci1pbnB1dCxcXG4ucHJvamVjdC1lZGl0b3IgPiBkaXYsXFxuLnByb2plY3QtZWRpdG9yLWlucHV0LFxcbi5sYWJlbC1lZGl0b3IgPiBkaXYsXFxuLmxhYmVsLWVkaXRvci1pbnB1dCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5wcm9qZWN0LWlucHV0ID4gKixcXG4ubGFiZWwtaW5wdXQgPiAqLFxcbi50b2RvLWVkaXRvci1pbnB1dCA+ICosXFxuLnByb2plY3QtZWRpdG9yLWlucHV0ID4gKixcXG4ubGFiZWwtZWRpdG9yLWlucHV0ID4gKiB7XFxuICAgIG1hcmdpbjogMCAwIC4yNXJlbSAwO1xcbn1cXG5cXG4ucHJvamVjdC1pbnB1dCBpbnB1dCxcXG4ubGFiZWwtaW5wdXQgaW5wdXQsXFxuLnRvZG8tZWRpdG9yLWlucHV0IGlucHV0LFxcbi50b2RvLWVkaXRvci1pbnB1dCBzZWxlY3QsXFxuLnByb2plY3QtZWRpdG9yLWlucHV0IGlucHV0LFxcbi5sYWJlbC1lZGl0b3ItaW5wdXQgaW5wdXQge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgcGFkZGluZzogLjI1cmVtO1xcbn1cXG5cXG4udG9kby1lZGl0b3ItaW5wdXQge1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4udG9kby1lZGl0b3ItaW5wdXQge1xcbiAgICBwYWRkaW5nLXRvcDogMCFpbXBvcnRhbnQ7XFxufVxcblxcbi50b2RvLWVkaXRvci1pbnB1dCBsYWJlbCB7XFxuICAgIG1hcmdpbjogLjI1cmVtIDAgLjFyZW0gMDtcXG59XFxuXFxuLnByb2plY3QtYnV0dG9ucyxcXG4ubGFiZWwtYnV0dG9ucyxcXG4udG9kby1lZGl0b3ItYnV0dG9ucyxcXG4udXBkYXRlLXByb2plY3QtYnV0dG9ucyxcXG4udXBkYXRlLWxhYmVsLWJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyAgICBcXG4gICAgbWFyZ2luLWJvdHRvbTogMCFpbXBvcnRhbnQ7XFxufVxcblxcbi5wcm9qZWN0LWNyZWF0b3IgYnV0dG9uLFxcbi5sYWJlbC1jcmVhdG9yIGJ1dHRvbixcXG4udG9kby1lZGl0b3IgYnV0dG9uLFxcbi5wcm9qZWN0LWVkaXRvciBidXR0b24sXFxuLmxhYmVsLWVkaXRvciBidXR0b24ge1xcbiAgICBwYWRkaW5nOiAuMjVyZW07XFxuICAgIG1hcmdpbjogMCAwIDAgLjI1cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudDEpO1xcbn1cXG5cXG4ucHJvamVjdC1jcmVhdG9yIGJ1dHRvbjpmaXJzdC1jaGlsZCxcXG4ubGFiZWwtY3JlYXRvciBidXR0b246Zmlyc3QtY2hpbGQsXFxuLnRvZG8tZWRpdG9yIGJ1dHRvbjpmaXJzdC1jaGlsZCxcXG4ucHJvamVjdC1lZGl0b3IgYnV0dG9uOmZpcnN0LWNoaWxkLFxcbi5sYWJlbC1lZGl0b3IgYnV0dG9uOmZpcnN0LWNoaWxkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFyaW5lcik7XFxufVxcblxcbi51cGRhdGUtcHJvamVjdC1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoMyksXFxuLnVwZGF0ZS1sYWJlbC1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoMykge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hdWJ1cm4pO1xcbn1cXG5cXG4ucHJvamVjdC1jcmVhdG9yLm9uLFxcbi5sYWJlbC1jcmVhdG9yLm9uLFxcbi50b2RvLWVkaXRvci5vbixcXG4ucHJvamVjdC1lZGl0b3Iub24sXFxuLmxhYmVsLWVkaXRvci5vbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5wcm9qZWN0LWlucHV0IGlucHV0OmZvY3VzLXZpc2libGUsXFxuLmxhYmVsLWlucHV0IGlucHV0OmZvY3VzLXZpc2libGUsXFxuLnRvZG8tZWRpdG9yLWlucHV0IGlucHV0OmZvY3VzLXZpc2libGUsXFxuLnByb2plY3QtZWRpdG9yLWlucHV0IGlucHV0OmZvY3VzLXZpc2libGUsXFxuLmxhYmVsLWVkaXRvci1pbnB1dCBpbnB1dDpmb2N1cy12aXNpYmxlIHtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHZhcigtLXRyYW5zcGFyZW50Mik7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcXG4gICAgLm5hdi1jb21wIHtcXG4gICAgICAgIHBhZGRpbmc6IC41cmVtIC41cmVtIC41cmVtIC41cmVtO1xcbiAgICB9XFxuICAgIC5pbmZvLWNvbXAge1xcbiAgICAgICAgcGFkZGluZzogMXJlbSAuMjVyZW0gLjI1cmVtIC4yNXJlbTtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHotaW5kZXg6IDEwMDA7XFxuICAgICAgICB0b3A6IDQ3LjU5cHg7XFxuICAgICAgICBib3R0b206IDA7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuICAgIC5pbmZvLWNvbXAuc2hvdy1uYXYge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgfVxcbiAgICAuaW5mby1jb21wID4gKiB7XFxuICAgICAgICB3aWR0aDogMjk0cHg7XFxuICAgIH1cXG4gICAgLmNvbnRhaW5lciA+IGhlYWRlciB7XFxuICAgICAgICBwYWRkaW5nOiAxcmVtIDAgLjVyZW0gMDtcXG4gICAgfVxcbiAgICAuY29udGFpbmVyIHtcXG4gICAgICAgIHBhZGRpbmc6IDAgMXJlbSAwIDFyZW07XFxuICAgIH1cXG4gICAgLnF1aWNrLWFkZC10b2RvID4gZGl2IHtcXG4gICAgICAgIG1heC13aWR0aDogNDAwcHg7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTBweCkge1xcbiAgICAuaW5mby1jb21wID4gKiB7XFxuICAgICAgICB3aWR0aDogMjQycHg7XFxuICAgIH1cXG4gICAgLnNlYXJjaC1pbnB1dCB7XFxuICAgICAgICB3aWR0aDogMTgwcHg7XFxuICAgIH1cXG4gICAgLnNlYXJjaC1pbnB1dDpmb2N1cyB7XFxuICAgICAgICB3aWR0aDogMTgwcHg7XFxuICAgIH1cXG4gICAgLnF1aWNrLWFkZC10b2RvID4gZGl2IHtcXG4gICAgICAgIG1heC13aWR0aDogMzAwcHg7XFxuICAgIH1cXG4gICAgLm5vdGlmLWNvbnRhaW5lciB7XFxuICAgICAgICBtYXgtd2lkdGg6IDMxMHB4O1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIxcHgpIHtcXG4gICAgLnNlYXJjaC1pbnB1dCB7XFxuICAgICAgICBtYXgtd2lkdGg6IDEzNXB4O1xcbiAgICB9XFxuICAgIC5zZWFyY2gtaW5wdXQ6Zm9jdXMge1xcbiAgICAgICAgbWF4LXdpZHRoOiAxMzVweDtcXG4gICAgfVxcbiAgICAucXVpY2stYWRkLXRvZG8gPiBkaXYge1xcbiAgICAgICAgbWF4LXdpZHRoOiAyNzBweDtcXG4gICAgfVxcbiAgICAubm90aWYtY29udGFpbmVyIHtcXG4gICAgICAgIG1heC13aWR0aDogMjcwcHg7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNDIwcHgpIHtcXG4gICAgLnRvZG8tZWRpdG9yLWlucHV0IHtcXG4gICAgICAgIG1heC1oZWlnaHQ6IDE4MHB4O1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgZ2V0VGFyZ2V0IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VGFyZ2V0LmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IGZ1bmN0aW9uKGNzcywgc3R5bGUpe1xuICAgICAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICAgICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgICAgfVxuXG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgICB9XG4gIH07XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBmdW5jdGlvbihzdHlsZSkge1xuICAgICAgICB2YXIgbm9uY2UgPVxuICAgICAgICAgIHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgICAgICBpZiAobm9uY2UpIHtcbiAgICAgICAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKHN0eWxlKXtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KFwiaGVhZFwiKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiXG4gICAgICApO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH07XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRUYXJnZXQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZW1iZWRMb2NhbFN0b3JhZ2UgPSAoKCkgPT4ge1xuICAgIGlmKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MnKSlcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MnLCBKU09OLnN0cmluZ2lmeSh7dG9kb2xpc3Q6IFtdLCBwcm9qZWN0czogW10sIGxhYmVsczogW119KSk7XG59KSgpO1xuXG5jb25zdCBUb2RvID0gZnVuY3Rpb24oIGlkLCB0aXRsZSwgZHVlRGF0ZSwgbm90ZSwgcHJpb3JpdHksIHByb2plY3QsIGxhYmVsLCBkdWVEYXRlTm90aWZTZW50ICl7XG4gICAgcmV0dXJuIHsgaWQsIHRpdGxlLCBkdWVEYXRlLCBub3RlLCBwcmlvcml0eSwgcHJvamVjdCwgbGFiZWwsIGR1ZURhdGVOb3RpZlNlbnQgfVxufTtcblxuY29uc3QgaXNFbXB0eVRvRGF5TGlzdCA9ICgpID0+IHtcbiAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJykpO1xuICAgIGxldCBhcnJheSA9IFtdO1xuXG4gICAgZGF0YS50b2RvbGlzdC5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgIGlmKERhdGUucGFyc2UodGFzay5kdWVEYXRlKSA9PSBEYXRlLnBhcnNlKGRhdGVTdHJpbmcudG9kYXkoKSkpe1xuICAgICAgICAgICAgYXJyYXkucHVzaCh0YXNrKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuICFhcnJheS5sZW5ndGggPyB0cnVlIDogZmFsc2U7XG59O1xuXG5jb25zdCBwdXNoID0gKCgpID0+IHtcbiAgICBsZXQgX2RhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpKTtcbiAgICBsZXQgY291bnRlciA9IDA7XG5cbiAgICBjb25zdCBfZW1iZWQgPSAoKSA9PiB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvcycsIEpTT04uc3RyaW5naWZ5KF9kYXRhKSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGdlbmVyYXRlSWQgPSAoKSA9PiB7XG4gICAgICAgIGxldCBpZCA9IF9kYXRhLnRvZG9saXN0Lmxlbmd0aCArIDE7XG5cbiAgICAgICAgaWYoX2RhdGEudG9kb2xpc3QubGVuZ3RoKXtcbiAgICAgICAgICAgIGNvdW50ZXIgPSAwO1xuICAgICAgICAgICAgX2RhdGEudG9kb2xpc3QuZm9yRWFjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoX2RhdGEudG9kb2xpc3RbY291bnRlcl0uaWQgPT0gaWQpIHsgaWQrKzsgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlkO1xuICAgIH07XG5cbiAgICBjb25zdCBxdWljayA9ICh2YWx1ZSkgPT4ge1xuICAgICAgICBsZXQgdG9kbyA9IFRvZG8oXG4gICAgICAgICAgICBnZW5lcmF0ZUlkKCksXG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICcnLFxuICAgICAgICAgICAgJycsXG4gICAgICAgICAgICAncHJpb3JpdHkgNCcsXG4gICAgICAgICAgICAnaW5ib3gnLFxuICAgICAgICAgICAgJycsXG4gICAgICAgICAgICAnbm9uZSdcbiAgICAgICAgKTtcbiAgICAgICAgX2RhdGEudG9kb2xpc3QucHVzaCh0b2RvKTtcbiAgICAgICAgX2VtYmVkKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHByb2plY3QgPSAodmFsdWUpID0+IHtcbiAgICAgICAgX2RhdGEucHJvamVjdHMucHVzaCh2YWx1ZSlcbiAgICAgICAgX2VtYmVkKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGxhYmVsID0gKHZhbHVlKSA9PiB7XG4gICAgICAgIF9kYXRhLmxhYmVscy5wdXNoKHZhbHVlKVxuICAgICAgICBfZW1iZWQoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgdGFzayA9ICh0aXRsZSwgZGF0ZSA9ICcnLCBwcmlvcml0eSA9ICdwcmlvcml0eSA0JywgcHJvamVjdE5hbWUgPSAnaW5ib3gnLCBcbiAgICAgIGxhYmVsTmFtZSA9ICcnKSA9PiB7XG4gICAgICAgIGxldCB0b2RvID0gVG9kbyhcbiAgICAgICAgICAgIGdlbmVyYXRlSWQoKSxcbiAgICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgICAgZGF0ZSxcbiAgICAgICAgICAgICcnLFxuICAgICAgICAgICAgcHJpb3JpdHksXG4gICAgICAgICAgICBwcm9qZWN0TmFtZSxcbiAgICAgICAgICAgIGxhYmVsTmFtZSxcbiAgICAgICAgICAgICdub25lJ1xuICAgICAgICApO1xuXG4gICAgICAgIF9kYXRhLnRvZG9saXN0LnB1c2godG9kbyk7XG4gICAgICAgIF9lbWJlZCgpO1xuICAgIH07XG5cbiAgICBjb25zdCBwcm9qZWN0UmVuYW1lID0gKG9sZE5hbWUsIG5ld05hbWUpID0+IHtcblxuICAgICAgICBjb3VudGVyID0gMDtcbiAgICAgICAgX2RhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpKTtcblxuICAgICAgICBfZGF0YS5wcm9qZWN0cy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICAgICAgICBpZihuYW1lID09IG9sZE5hbWUpe1xuICAgICAgICAgICAgICAgIF9kYXRhLnByb2plY3RzW2NvdW50ZXJdID0gbmV3TmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvdW50ZXIrK1xuICAgICAgICB9KTtcblxuICAgICAgICBjb3VudGVyID0gMDtcbiAgICAgICAgX2RhdGEudG9kb2xpc3QuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICAgICAgaWYodGFzay5wcm9qZWN0ID09IG9sZE5hbWUpe1xuICAgICAgICAgICAgICAgIF9kYXRhLnRvZG9saXN0W2NvdW50ZXJdLnByb2plY3QgPSBuZXdOYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY291bnRlcisrXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgX2VtYmVkKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHByb2plY3REZWxldGUgPSAobmFtZSkgPT4ge1xuXG4gICAgICAgIF9kYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MnKSk7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gX2RhdGEucHJvamVjdHMuaW5kZXhPZihuYW1lKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICBfZGF0YS5wcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgY291bnRlciA9IDA7XG4gICAgICAgIF9kYXRhLnRvZG9saXN0LmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICAgIGlmKHRhc2sucHJvamVjdCA9PSBuYW1lKXtcbiAgICAgICAgICAgICAgICBfZGF0YS50b2RvbGlzdC5zcGxpY2UoY291bnRlciwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb3VudGVyKytcbiAgICAgICAgfSk7XG4gICAgICAgIF9lbWJlZCgpO1xuICAgIH07XG5cbiAgICBjb25zdCBsYWJlbFJlbmFtZSA9IChvbGROYW1lLCBuZXdOYW1lKSA9PiB7XG5cbiAgICAgICAgY291bnRlciA9IDA7XG4gICAgICAgIF9kYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MnKSk7XG5cbiAgICAgICAgX2RhdGEubGFiZWxzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgICAgICAgIGlmKG5hbWUgPT0gb2xkTmFtZSl7XG4gICAgICAgICAgICAgICAgX2RhdGEubGFiZWxzW2NvdW50ZXJdID0gbmV3TmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvdW50ZXIrK1xuICAgICAgICB9KTtcblxuICAgICAgICBjb3VudGVyID0gMDtcbiAgICAgICAgX2RhdGEudG9kb2xpc3QuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICAgICAgaWYodGFzay5sYWJlbCA9PSBvbGROYW1lKXtcbiAgICAgICAgICAgICAgICBfZGF0YS50b2RvbGlzdFtjb3VudGVyXS5sYWJlbCA9IG5ld05hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb3VudGVyKytcbiAgICAgICAgfSk7XG4gICAgICAgIF9lbWJlZCgpO1xuICAgIH07XG5cbiAgICBjb25zdCBsYWJlbERlbGV0ZSA9IChuYW1lKSA9PiB7XG5cbiAgICAgICAgX2RhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpKTtcbiAgICAgICAgY29uc3QgaW5kZXggPSBfZGF0YS5sYWJlbHMuaW5kZXhPZihuYW1lKTtcblxuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgX2RhdGEubGFiZWxzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb3VudGVyID0gMDtcbiAgICAgICAgX2RhdGEudG9kb2xpc3QuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICAgICAgaWYodGFzay5sYWJlbCA9PSBuYW1lKXtcbiAgICAgICAgICAgICAgICBfZGF0YS50b2RvbGlzdC5zcGxpY2UoY291bnRlciwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb3VudGVyKytcbiAgICAgICAgfSk7XG4gICAgICAgIF9lbWJlZCgpO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBxdWljayxcbiAgICAgICAgcHJvamVjdCxcbiAgICAgICAgbGFiZWwsXG4gICAgICAgIHRhc2ssXG4gICAgICAgIHByb2plY3RSZW5hbWUsIHByb2plY3REZWxldGUsXG4gICAgICAgIGxhYmVsUmVuYW1lLCBsYWJlbERlbGV0ZVxuICAgIH1cbn0pKCk7XG5cbmNvbnN0IGRhdGVTdHJpbmcgPSAoKCkgPT4ge1xuICAgIGxldCBkYXRlTm93O1xuICAgIGxldCBkYXlzID0gWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXTtcbiAgICBsZXQgbW9udGhzID0gWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCBcbiAgICAgICAgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXTtcbiAgICBcbiAgICBjb25zdCBnZXRTdHJpbmcgPSAodGFyZ2V0KSA9PiB7XG4gICAgICAgIGxldCBkYXRlID0gdGFyZ2V0KCkuZ2V0RGF0ZSgpLnRvU3RyaW5nKCk7XG4gICAgICAgIGlmKGRhdGUubGVuZ3RoID09IDIpe1xuICAgICAgICAgICAgcmV0dXJuIGAke3RhcmdldCgpLmdldEZ1bGxZZWFyKCl9LSR7dGFyZ2V0KCkuZ2V0TW9udGgoKSsxfS0ke3RhcmdldCgpLmdldERhdGUoKX1gO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGAke3RhcmdldCgpLmdldEZ1bGxZZWFyKCl9LSR7dGFyZ2V0KCkuZ2V0TW9udGgoKSsxfS0wJHt0YXJnZXQoKS5nZXREYXRlKCl9YDtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCB0b2RheSA9ICgpID0+IHtcbiAgICAgICAgZGF0ZU5vdyA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGRhdGVOb3cuc2V0SG91cnMoMCwwLDAsMCk7XG4gICAgICAgIHJldHVybiBkYXRlTm93O1xuICAgIH07XG5cbiAgICBjb25zdCB0b2RheVN0cmluZyA9ICgpID0+IGdldFN0cmluZyh0b2RheSk7XG4gICAgY29uc3QgdG9kYXlOYW1lID0gKCkgPT4gZGF5c1t0b2RheSgpLmdldERheSgpXTtcblxuICAgIGNvbnN0IHRvbW9ycm93ID0gKCkgPT4ge1xuICAgICAgICBkYXRlTm93ID0gbmV3IERhdGUoKTtcbiAgICAgICAgZGF0ZU5vdy5zZXREYXRlKGRhdGVOb3cuZ2V0RGF0ZSgpICsgMSlcbiAgICAgICAgZGF0ZU5vdy5zZXRIb3VycygwLDAsMCwwKTtcbiAgICAgICAgcmV0dXJuIGRhdGVOb3c7XG4gICAgfTtcblxuICAgIGNvbnN0IHR3bVN0cmluZyA9ICgpID0+IGdldFN0cmluZyh0b21vcnJvdyk7XG4gICAgY29uc3QgdG9tb3Jyb3dOYW1lID0gKCkgPT4gZGF5c1t0b21vcnJvdygpLmdldERheSgpXTtcblxuICAgIGNvbnN0IG5leHRXZWVrID0gKCkgPT4ge1xuICAgICAgICBkYXRlTm93ID0gbmV3IERhdGUoKTtcbiAgICAgICAgZGF0ZU5vdy5zZXREYXRlKGRhdGVOb3cuZ2V0RGF0ZSgpICsgNylcbiAgICAgICAgZGF0ZU5vdy5zZXRIb3VycygwLDAsMCwwKTtcbiAgICAgICAgcmV0dXJuIGRhdGVOb3c7XG4gICAgfTtcblxuICAgIGNvbnN0IG5leHRXZWVrU3RyaW5nID0gKCkgPT4gZ2V0U3RyaW5nKG5leHRXZWVrKTtcblxuICAgIGNvbnN0IG5leHRXZWVrTmFtZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGAke2RheXNbbmV4dFdlZWsoKS5nZXREYXkoKV19ICR7bmV4dFdlZWsoKS5nZXREYXRlKCl9ICR7bW9udGhzW25leHRXZWVrKCkuZ2V0TW9udGgoKV19YDtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdG9kYXksIHRvZGF5TmFtZSxcbiAgICAgICAgdG9tb3Jyb3csIHRvbW9ycm93TmFtZSxcbiAgICAgICAgbmV4dFdlZWssIG5leHRXZWVrTmFtZSxcbiAgICAgICAgdG9kYXlTdHJpbmcsIHR3bVN0cmluZywgbmV4dFdlZWtTdHJpbmdcbiAgICB9O1xufSkoKTtcblxuXG5jb25zdCB0ZXN0ID0gKGZ1bmN0aW9uKCl7XG4gICAgLy8gY29uc29sZS5sb2coZGF0ZVN0cmluZy50b2RheVN0cmluZygpKVxuICAgIC8vIGNvbnNvbGUubG9nKERhdGUucGFyc2UoZGF0ZVN0cmluZy50b2RheVN0cmluZygpKSlcbiAgICAvLyBjb25zdCB0b2RvID0gVG9kbyhcbiAgICAvLyAgICAgMSxcbiAgICAvLyAgICAgJ2ZpbmlzaCB0b2RvJyxcbiAgICAvLyAgICAgJzIwMjEtMDctMzEnLFxuICAgIC8vICAgICAnJyxcbiAgICAvLyAgICAgJ3ByaW9yaXR5IDEnLFxuICAgIC8vICAgICAnaW5ib3gnLFxuICAgIC8vICAgICAnJyxcbiAgICAvLyAgICAgJ25vbmUnXG4gICAgLy8gKTtcbiAgICAvLyBsZXQgYXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpKTtcbiAgICAvLyBpZighYXJyYXkubGVuZ3RoKXtcbiAgICAvLyAgICAgYXJyYXkucHVzaCh0b2RvKTtcbiAgICAvLyAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zJywgSlNPTi5zdHJpbmdpZnkoYXJyYXkpKTtcbiAgICAvLyB9XG4gICAgLy8gY29uc29sZS5sb2codG9kbylcblxuICAgIC8vIHZhciBkYXRlQ29udHJvbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJkYXRlXCJdJyk7XG4gICAgLy8gZGF0ZUNvbnRyb2wudmFsdWUgPSAnMjAxNy0wNi0wMSc7XG4gICAgLy8gY29uc29sZS5sb2coZGF0ZUNvbnRyb2wudmFsdWUpOyAvLyBwcmludHMgXCIyMDE3LTA2LTAxXCJcbiAgICAvLyBjb25zb2xlLmxvZyhkYXRlQ29udHJvbC52YWx1ZUFzTnVtYmVyKTsgLy8gcHJpbnRzIDE0OTYyNzUyMDAwMDAsIGEgSmF2YVNjcmlwdCB0aW1lc3RhbXAgKG1zKVxuXG4gICAgLy8gY29uc3QgZGF0YXggPSAnMjAyMS0wOC04JztcbiAgICAvLyBjb25zb2xlLmxvZyhkYXRheCk7XG4gICAgLy8gY29uc29sZS5sb2coRGF0ZS5wYXJzZShkYXRheCkpXG4gICAgLy8gLy8gY29uc29sZS5sb2coZGF0YXgudmFsdWVBc051bWJlcilcblxuICAgIC8vIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAvLyB0b2RheS5zZXRIb3VycygwLDAsMCwwKTtcbiAgICAvLyBjb25zb2xlLmxvZygndG9kYXknLCB0b2RheSk7XG4gICAgLy8gY29uc29sZS5sb2coJ3RvZGF5IG51bWJlcicsIERhdGUucGFyc2UodG9kYXkpKTtcblxuICAgIC8vIGNvbnN0IHRvbW9ycm93ID0gbmV3IERhdGUoKVxuICAgIC8vIHRvbW9ycm93LnNldERhdGUodG9tb3Jyb3cuZ2V0RGF0ZSgpICsgMSlcbiAgICAvLyB0b21vcnJvdy5zZXRIb3VycygwLDAsMCwwKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0b21vcnJvdyk7XG4gICAgLy8gY29uc29sZS5sb2coRGF0ZS5wYXJzZSh0b21vcnJvdykpXG5cbiAgICAvLyBsZXQgZGF5cyA9IFsnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0J107XG4gICAgLy8gbGV0IGQgPSBuZXcgRGF0ZSgpOyAvL29yIGRhdGVTdHJpbmdcbiAgICAvLyBsZXQgZGF5TmFtZSA9IGRheXNbZC5nZXREYXkoKV07XG4gICAgLy8gY29uc29sZS5sb2coZGF5TmFtZSlcblxuICAgIC8vIGNvbnNvbGUubG9nKGRhdGVTdHJpbmcubmV4dFdlZWsoKSk7XG59KSgpO1xuXG5leHBvcnQgeyBcbiAgICBlbWJlZExvY2FsU3RvcmFnZSxcbiAgICBpc0VtcHR5VG9EYXlMaXN0LFxuICAgIHRlc3QsXG4gICAgcHVzaCxcbiAgICBkYXRlU3RyaW5nXG59O1xuIiwiaW1wb3J0IGNoaWxsaW5nSW1nIGZyb20gJy4vY2hpbGxpbmcuc3ZnJztcbmltcG9ydCB7IGVtYmVkTG9jYWxTdG9yYWdlLCBpc0VtcHR5VG9EYXlMaXN0IH0gZnJvbSAnLi9kYXRhLmpzJztcblxuJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBzZXRMYW5ndWFnZSA9ICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKS5zZXRBdHRyaWJ1dGUoJ2xhbmcnLCAnZW4nKTtcblxuY29uc3Qgc2V0dXBIZWFkVGFnID0gKCkgPT4ge1xuICAgIGNvbnN0IGhlYWRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZCcpO1xuICAgIGNvbnN0IHRpdGxlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RpdGxlJyk7XG5cbiAgICBjb25zdCBuZXdNZXRhRWRnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21ldGEnKTtcbiAgICBjb25zdCBuZXdMaW5rTWF0ZXJpYWxJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgIGNvbnN0IG5ld0xpbmtGYXZpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuXG4gICAgbmV3TWV0YUVkZ2Uuc2V0QXR0cmlidXRlKCdodHRwLWVxdWl2JywnWC1VQS1Db21wYXRpYmxlJyk7XG4gICAgbmV3TWV0YUVkZ2Uuc2V0QXR0cmlidXRlKCdjb250ZW50JywnSUU9ZWRnZScpO1xuICAgIG5ld0xpbmtNYXRlcmlhbEljb24uc2V0QXR0cmlidXRlKCdyZWwnLCAnc3R5bGVzaGVldCcpO1xuICAgIG5ld0xpbmtNYXRlcmlhbEljb25cbiAgICAgICAgLnNldEF0dHJpYnV0ZSgnaHJlZicsICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2ljb24/ZmFtaWx5PU1hdGVyaWFsK0ljb25zK091dGxpbmVkJyk7XG4gICAgbmV3TGlua0Zhdmljb24uc2V0QXR0cmlidXRlKCdyZWwnLCAnaWNvbicpO1xuICAgIG5ld0xpbmtGYXZpY29uLnNldEF0dHJpYnV0ZSgndHlwZScsICdpbWFnZS9wbmcnKTtcbiAgICBuZXdMaW5rRmF2aWNvbi5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnaHR0cHM6Ly9vcGVuY2xpcGFydC5vcmcvaW1hZ2UvNDAwcHgvMzAzMjU0Jyk7XG5cbiAgICBoZWFkRWxlbWVudC5pbnNlcnRCZWZvcmUobmV3TWV0YUVkZ2UsIHRpdGxlRWxlbWVudCk7XG4gICAgaGVhZEVsZW1lbnQuaW5zZXJ0QmVmb3JlKG5ld0xpbmtNYXRlcmlhbEljb24sIHRpdGxlRWxlbWVudCk7XG4gICAgaGVhZEVsZW1lbnQuYXBwZW5kQ2hpbGQobmV3TGlua0Zhdmljb24pO1xufTtcblxuY29uc3QgY3JlYXRlQXBwRGl2ID0gKCkgPT4ge1xuICAgIGNvbnN0IGJvZHlFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIGNvbnN0IGJvZHlTY3JpcHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5IHNjcmlwdCcpO1xuICAgIGNvbnN0IGFwcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgYXBwLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYXBwJyk7XG4gICAgYm9keUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGFwcCwgYm9keVNjcmlwdCk7XG59O1xuXG5jb25zdCBjcmVhdGVBcHBOYXYgPSAoKSA9PiB7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gICAgbmF2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbmF2LWNvbXAnKTtcbiAgICBuYXYuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzID0gXCJuYy1sZWZ0XCI+XG4gICAgICAgICAgICA8YnV0dG9uIGlkID0gXCJuYXZCdG5NZW51XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWRcIj5tZW51PC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGlkID0gXCJuYXZCdG5Ib21lXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWRcIj5ob21lPC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8Zm9ybSBpZCA9IFwiZm9ybVNlYXJjaFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcInNlYXJjaC1kaXZcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWRcIj5zZWFyY2g8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic2VhcmNoXCIgYXJpYS1sYWJlbD1cIlNlYXJjaCB0aHJvdWdoIGFsbCB0b2Rvc1wiIFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3MgPSBcInNlYXJjaC1pbnB1dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkID0gXCJuYXZJbnB1dFNlYXJjaFwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGUgPSBcInJlc2V0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIG1pZFwiPmNsb3NlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3MgPSBcIm5jLXJpZ2h0XCI+XG4gICAgICAgICAgICA8YnV0dG9uIGlkID0gXCJuYXZCdG5RdWlja0FkZFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWlkXCI+YWRkPC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzID0gXCJuYXYtYnRuLW5vdGlmaWNhdGlvblwiIGlkID0gXCJuYXZCdG5Ob3RpZmljYXRpb25cIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIG1pZFwiPm5vdGlmaWNhdGlvbnM8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNtYWxsIGlkID0gXCJuYXZCdG5Ob3RpZmljYXRpb25Db3VudFwiPjwvc21hbGw+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgYDtcbiAgICBcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXBwJykuYXBwZW5kQ2hpbGQobmF2KTtcbn07XG5cbmNvbnN0IGNyZWF0ZUFwcEJvZHkgPSAoKSA9PiB7XG4gICAgY29uc3QgYXBwQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGFwcEJvZHkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdhcHAtYm9keScpO1xuICAgIHdyYXBwZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICd3cmFwcGVyJyk7XG5cbiAgICBhcHBCb2R5LmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcHAnKS5hcHBlbmRDaGlsZChhcHBCb2R5KTtcbn07XG5cbmNvbnN0IGNyZWF0ZVNpZGViYXJOYXYgPSAoKSA9PiB7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG5cbiAgICBuYXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdpbmZvLWNvbXAnKTtcbiAgICBuYXYuc2V0QXR0cmlidXRlKCdpZCcsICduYXZJbmZvQ29tcCcpO1xuICAgIG5hdi5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxidXR0b24gaWQgPSBcInNibmF2SW5ib3hCdG5cIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWlkIGljLXNwYW5cIj5pbmJveDwvc3Bhbj5cbiAgICAgICAgICAgIEluYm94PHNhbXA+PC9zYW1wPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBpZCA9IFwic2JuYXZUb2RheUJ0blwiIGNsYXNzID0gXCJhY3RpdmVcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWlkIGljLXNwYW5cIj5jYWxlbmRhcl90b2RheTwvc3Bhbj5cbiAgICAgICAgICAgIFRvZGF5PHNhbXA+PC9zYW1wPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBpZCA9IFwic2JuYXZVcGNvbUJ0blwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWQgaWMtc3BhblwiPnVwY29taW5nPC9zcGFuPlxuICAgICAgICAgICAgVXBjb21pbmc8c2FtcD48L3NhbXA+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8ZGl2IGNsYXNzID0gXCJpYy1kaXYgaWMtcHJvamVjdFwiIHRhYmluZGV4PVwiMFwiIGlkID0gXCJzYm5hdlByb2plY3RzRGl2XCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIG1pZCBpYy1zcGFuIG9wYVwiPmNoZXZyb25fcmlnaHQ8L3NwYW4+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzID0gXCJpYy1hZGQtYnRuIG9wYVwiIGlkID0gXCJzYm5hdlByb2plY3RBZGRCdG5cIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIG1pZFwiPmFkZDwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPHN0cm9uZz5Qcm9qZWN0czwvc3Ryb25nPlxuICAgICAgICAgICAgPGRpdiBpZCA9IFwicHJvamVjdExpc3RDb250YWluZXJcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcyA9IFwiaWMtZGl2IGljLWxhYmVsXCIgdGFiaW5kZXg9XCIwXCIgaWQgPSBcInNibmF2TGFiZWxzRGl2XCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIG1pZCBpYy1zcGFuIG9wYVwiPmNoZXZyb25fcmlnaHQ8L3NwYW4+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzID0gXCJpYy1hZGQtYnRuIG9wYVwiIGlkID0gXCJzYm5hdkxhYmVsQWRkQnRuXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWRcIj5hZGQ8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxzdHJvbmc+TGFiZWxzPC9zdHJvbmc+XG4gICAgICAgICAgICA8ZGl2IGlkID0gXCJsYWJlbExpc3RDb250YWluZXJcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXBwZXInKS5hcHBlbmRDaGlsZChuYXYpO1xuXG4gICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpKTtcblxuICAgIGlmIChkYXRhLnByb2plY3RzLmxlbmd0aCl7XG4gICAgICAgIGRhdGEucHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImJ1bGxldFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcyA9IFwidW5pcXVlXCI+JHtwcm9qZWN0fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIG1pZFwiPm1vcmVfaG9yaXo8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICBgO1xuICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RMaXN0Q29udGFpbmVyJykuYXBwZW5kQ2hpbGQoZGl2KTsgIFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgaWYgKGRhdGEubGFiZWxzLmxlbmd0aCl7XG4gICAgICAgIGRhdGEubGFiZWxzLmZvckVhY2goKGxhYmVsKT0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIG1pZCB0YWdcIj5sYWJlbDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3MgPSBcInVuaXF1ZVwiPiR7bGFiZWx9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxidXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWlkXCI+bW9yZV9ob3Jpejwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIGA7XG4gICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGFiZWxMaXN0Q29udGFpbmVyJykuYXBwZW5kQ2hpbGQoZGl2KTsgICBcbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxuY29uc3QgY3JlYXRlQ29udGFpbmVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb250YWluZXInKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWluZXInKTtcblxuICAgIGlmKGlzRW1wdHlUb0RheUxpc3QoKSl7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdlbXB0eScpO1xuICAgIH1cblxuICAgIGhlYWRlci5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxoMSBpZCA9IFwiaGVhZGVyXCI+VG9kYXk8L2gxPlxuICAgIGA7XG4gICAgZGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWRkLXRhc2stYnRuLWRpdicpO1xuICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZFRhc2tCdG5EaXYnKTtcbiAgICBkaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICA8YnV0dG9uIGNsYXNzID0gXCJhZGQtdGFzay1idG5cIiBpZCA9IFwiYWRkVGFza0J0blwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWQgdG9vbC1zcGFuXCI+YWRkPC9zcGFuPlxuICAgICAgICAgICAgQWRkIHRhc2tcbiAgICAgICAgPC9idXR0b24+XG4gICAgYDtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3JhcHBlcicpLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG59O1xuXG5jb25zdCBjcmVhdGVBZGRUYXNrRGl2ID0gKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgZGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWRkLXRhc2stZGl2Jyk7XG4gICAgZGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkVGFza0RpdicpO1xuICAgIGRpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxpbnB1dCB0eXBlID0gXCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJUYXNrIG5hbWVcIiBpZCA9IFwiYWRkVGFza0lucHV0XCIgYXV0b2NvbXBsZXRlPVwib2ZmXCI+XG4gICAgICAgIDxkaXYgY2xhc3MgPSBcImFkZC10YXNrLWJ0bnMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQgPSBcInNlbGVjdFNjaGVkdWxlQnRuXCIgZGF0YS12YWx1ZSA9IFwiXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWlkXCI+ZXZlbnQ8L3NwYW4+IFNjaGVkdWxlXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZCA9IFwic2VsZWN0UHJvamVjdEJ0blwiIGNsYXNzID0gXCJzZWxlY3QtcHJvamVjdC1idG5cIiBkYXRhLXZhbHVlID0gXCJpbmJveFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIG1pZFwiPmluYm94PC9zcGFuPiBJbmJveFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQgPSBcInNlbGVjdExhYmVsQnRuXCIgZGF0YS12YWx1ZSA9IFwiXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWlkXCI+bGFiZWw8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZCA9IFwic2VsZWN0UHJpb3JpdHlCdG5cIiBkYXRhLXZhbHVlID0gXCJwcmlvcml0eSA0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWlkXCI+ZmxhZzwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcyA9IFwic2NoZWR1bGVyXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzID0gXCJzY2hlZFwiIGlkID0gXCJzY2hlZHVsZXJUb2RheUJ0blwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPlRvZGF5PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGlkID0gXCJzY2hlZHVsZXJUb2RheVNwYW5cIj48L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3MgPSBcInNjaGVkXCIgaWQgPSBcInNjaGVkdWxlclR3bUJ0blwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPlRvbW9ycm93PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGlkID0gXCJzY2hlZHVsZXJUd21TcGFuXCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzID0gXCJzY2hlZFwiIGlkID0gXCJzY2hlZHVsZXJOZXh0V2Vla0J0blwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPk5leHQgV2Vlazwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBpZCA9IFwic2NoZWR1bGVyTmV4dFdlZWtTcGFuXCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJzY2hlZC1jdXN0b21cIiBpZCA9IFwic2NoZWR1bGVyQ3VzdG9tRGl2XCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcImRhdGVcIiBpZCA9IFwic2NoZWR1bGVyQ3VzdG9tSW5wdXRcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkID0gXCJzY2hlZHVsZXJDdXN0b21CdG5cIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWRcIj5kb25lPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzID0gXCJzY2hlZFwiIGlkID0gXCJzY2hlZHVsZXJOb0RhdGVCdG5cIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5ObyBEYXRlPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGlkID0gXCJzY2hlZHVsZXJOb0RhdGVTcGFuXCI+JiN4MjIwNTs8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3MgPSBcImNhcnJpZXJcIiBpZCA9IFwicHJvamVjdFNlbGVjdG9yXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGlkID0gXCJwcm9qZWN0RGVmYXVsdEluYm94XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWRcIj5pbmJveDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8dT5JbmJveDwvdT5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcyA9IFwibGFiZWxlclwiPlxuICAgICAgICAgICAgPGRpdiBpZCA9IFwibGFiZWxDb250YWluZXJcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcyA9IFwicHJpby1zZXR0ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgaWQgPSBcInByaW9yaXR5QnRuQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZCA9IFwicHJpb3JpdHlPbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWRcIj5mbGFnPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8dT5Qcmlvcml0eSAxPC91PlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQgPSBcInByaW9yaXR5VHdvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWlkXCI+ZmxhZzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHU+UHJpb3JpdHkgMjwvdT5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkID0gXCJwcmlvcml0eVRocmVlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWlkXCI+ZmxhZzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHU+UHJpb3JpdHkgMzwvdT5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkID0gXCJwcmlvcml0eURlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWRcIj5mbGFnPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8dT5Qcmlvcml0eSA0PC91PlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGA7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJykuYXBwZW5kQ2hpbGQoZGl2KTtcbn07XG5cbmNvbnN0IGNyZWF0ZU1vcmVDb250YWluZXJJdGVtcyA9ICgpID0+IHtcbiAgICBjb25zdCBkaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuXG4gICAgZGl2MS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FkZC10YXNrLW1haW4tYnRucy1jb250YWluZXInKTtcbiAgICBkaXYyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZW1wdHktc3RhdGUtZGl2Jyk7XG4gICAgZGl2Mi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2VtcHR5U3RhdGVEaXYnKTtcbiAgICBmb290ZXIuc2V0QXR0cmlidXRlKCdpZCcsICdmb290ZXInKTtcblxuICAgIGRpdjEuaW5uZXJIVE1MID0gYFxuICAgICAgICA8YnV0dG9uIGlkID0gXCJhZGRUYXNrTWFpbkJ0blwiPlxuICAgICAgICAgICAgQWRkIHRhc2tcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gaWQgPSBcImFkZFRhc2tDYW5jZWxCdG5cIj5cbiAgICAgICAgICAgIENhbmNlbFxuICAgICAgICA8L2J1dHRvbj5cbiAgICBgO1xuICAgIGRpdjIuaW5uZXJIVE1MID0gYFxuICAgICAgICA8aW1nIHNyYz1cIiR7Y2hpbGxpbmdJbWd9XCIgZHJhZ2dhYmxlPVwiZmFsc2VcIj5cbiAgICAgICAgPGg0PkFsbCBjbGVhcjwvaDQ+XG4gICAgICAgIDxwPkxvb2tzIGxpa2UgZXZlcnl0aGluZydzIG9yZ2FuaXplZCBpbiB0aGUgcmlnaHQgcGxhY2UuPC9wPlxuICAgIGA7XG4gICAgZm9vdGVyLmlubmVySFRNTCA9IGBcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWRcIj5oZWxwX291dGxpbmU8L3NwYW4+XG4gICAgICAgIDxwIGlkID0gXCJoZWxwXCI+SG93IHRvIGJlc3QgdXNlIHRoaXMgQXBwPC9wPlxuICAgIGA7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJykuYXBwZW5kQ2hpbGQoZGl2MSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpLmFwcGVuZENoaWxkKGRpdjIpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKS5hcHBlbmRDaGlsZChmb290ZXIpO1xufTtcblxuY29uc3QgY3JlYXRlSGlkZGVuTW9kYWxzID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcHAnKS5pbm5lckhUTUwgKz0gYFxuICAgICAgICA8ZGl2IGNsYXNzID0gXCJxdWljay1hZGQtdG9kb1wiIGlkID0gXCJxdWlja0FkZFRvZG9cIj5cbiAgICAgICAgICAgIDxkaXYgaWQgPSBcInF1aWNrQWRkQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInRleHRcIiBwbGFjZWhvbGRlcj1cIlRhc2sgbmFtZVwiIGlkID0gXCJxdWlja0FkZElucHV0XCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZCA9IFwicXVpY2tBZGRTdWJtaXRcIj5BZGQgdGFzazwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkID0gXCJxdWlja0FkZENhbmNlbFwiPkNhbmNlbDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzID0gXCJub3RpZmljYXRpb25zXCIgaWQgPSBcIm5vdGlmaWNhdGlvbnNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcIm5vdGlmLWNvbnRhaW5lclwiIGlkID0gXCJub3RpZkNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxuYXY+XG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+Tm90aWZpY2F0aW9uczwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzID0gXCJyZWFkLWFsbC1idG5cIiBpZCA9IFwibm90aWZSZWFkQWxsQnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIG1pZFwiPmRvbmVfYWxsPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJub3RpZi1vdXRwdXRcIiBpZCA9IFwibm90aWZPdXRwdXRcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcyA9IFwicHJvamVjdC1jcmVhdG9yXCIgaWQgPSBcInByb2plY3RDcmVhdG9yXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+QWRkIHByb2plY3Q8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJwcm9qZWN0LWlucHV0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJuZXdQcm9qZWN0TmFtZVwiPk5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9IFwidGV4dFwiIGlkID0gXCJuZXdQcm9qZWN0TmFtZVwiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcInByb2plY3QtYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkID0gXCJwcm9qZWN0QWRkQnV0dG9uXCI+QWRkPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQgPSBcInByb2plY3RDYW5jZWxCdXR0b25cIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcyA9IFwicHJvamVjdC1lZGl0b3JcIiBpZCA9IFwicHJvamVjdEVkaXRvclwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8c3Ryb25nIGlkID0gXCJwcm9qZWN0TmFtZVwiPlByb2plY3QgTmFtZTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcInByb2plY3QtZWRpdG9yLWlucHV0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ1cGRhdGVkUHJvamVjdE5hbWVcIj5SZW5hbWUgdG88L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9IFwidGV4dFwiIGlkID0gXCJ1cGRhdGVkUHJvamVjdE5hbWVcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJ1cGRhdGUtcHJvamVjdC1idXR0b25zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQgPSBcInVwZGF0ZVByb2plY3RCdG5cIj5VcGRhdGU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZCA9IFwiY2FuY2VsUHJvamVjdEJ0blwiPkNhbmNlbDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkID0gXCJkZWxldGVQcm9qZWN0QnRuXCI+RGVsZXRlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3MgPSBcImxhYmVsLWNyZWF0b3JcIiBpZCA9IFwibGFiZWxDcmVhdG9yXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+QWRkIGxhYmVsPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwibGFiZWwtaW5wdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImFkZExhYmVsSW5wdXRcIj5OYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInRleHRcIiBpZCA9IFwiYWRkTGFiZWxJbnB1dFwiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImxhYmVsLWJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZCA9IFwiYWRkTmV3TGFiZWxCdG5cIj5BZGQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZCA9IFwiY2FuY2VsQWRkTGFiZWxCdG5cIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcyA9IFwibGFiZWwtZWRpdG9yXCIgaWQgPSBcImxhYmVsRWRpdG9yXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzdHJvbmcgaWQgPSBcImVkaXRMYWJlbE5hbWVcIj5sYWJlbCBOYW1lPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwibGFiZWwtZWRpdG9yLWlucHV0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ1cGRhdGVkTGFiZWxOYW1lXCI+UmVuYW1lIHRvPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInRleHRcIiBpZCA9IFwidXBkYXRlZExhYmVsTmFtZVwiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcInVwZGF0ZS1sYWJlbC1idXR0b25zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQgPSBcInVwZGF0ZUxhYmVsQnRuXCI+VXBkYXRlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQgPSBcImNhbmNlbFVwZGF0ZUJ0blwiPkNhbmNlbDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkID0gXCJkZWxldGVMYWJlbEJ0blwiPkRlbGV0ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzID0gXCJ0b2RvLWVkaXRvclwiIGlkID0gXCJ0YXNrRWRpdG9yXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+RWRpdCBUYXNrPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwidG9kby1lZGl0b3ItaW5wdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInVwZGF0ZWRUYXNrTmFtZVwiPlRhc2sgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJ0ZXh0XCIgaWQgPSBcInVwZGF0ZWRUYXNrTmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidXBkYXRlZFRhc2tOb3RlXCI+VGFzayBOb3RlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInRleHRcIiBpZCA9IFwidXBkYXRlZFRhc2tOb3RlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ1cGRhdGVkVGFza1NjaGVkdWxlXCI+U2NoZWR1bGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwidXBkYXRlZFRhc2tTY2hlZHVsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInRvZGF5XCI+VG9kYXk8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ0b21vcnJvd1wiPlRvbW9ycm93PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibmV4dC13ZWVrXCI+TmV4dCBXZWVrPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiY3VzdG9tXCI+Q3VzdG9tPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibm8tZGF0ZVwiPk5vIERhdGU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ1cGRhdGVkVGFza1Byb2plY3RcIj5Qcm9qZWN0PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cInVwZGF0ZWRUYXNrUHJvamVjdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkluYm94XCI+SW5ib3g8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ1cGRhdGVkVGFza0xhYmVsXCI+TGFiZWw8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwidXBkYXRlZFRhc2tMYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm5vbmVcIj5Ob25lPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidXBkYXRlZFRhc2tQcmlvcml0eVwiPlByaW9yaXR5PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cInVwZGF0ZWRUYXNrUHJpb3JpdHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwcmlvcml0eTFcIj5Qcmlvcml0eSAxPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicHJpb3JpdHkyXCI+UHJpb3JpdHkgMjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInByaW9yaXR5M1wiPlByaW9yaXR5IDM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwcmlvcml0eTRcIj5Qcmlvcml0eSA0PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcInRvZG8tZWRpdG9yLWJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZCA9IFwidXBkYXRlVG9kb1wiPlVwZGF0ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkID0gXCJjYW5jZWxVcGRhdGVUb2RvXCI+Q2FuY2VsPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYDtcbn07XG5cbmNvbnN0IGNyZWF0ZUFwcCA9ICgoKSA9PiB7XG4gICAgc2V0TGFuZ3VhZ2UoKTtcbiAgICBzZXR1cEhlYWRUYWcoKTtcbiAgICBjcmVhdGVBcHBEaXYoKTtcbiAgICBjcmVhdGVBcHBOYXYoKTtcbiAgICBjcmVhdGVBcHBCb2R5KCk7XG4gICAgY3JlYXRlU2lkZWJhck5hdigpO1xuICAgIGNyZWF0ZUNvbnRhaW5lcigpO1xuICAgIGNyZWF0ZUFkZFRhc2tEaXYoKTtcbiAgICBjcmVhdGVNb3JlQ29udGFpbmVySXRlbXMoKTtcbiAgICBjcmVhdGVIaWRkZW5Nb2RhbHMoKTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUFwcDsiLCJpbXBvcnQgeyBoTmF2LCB2TmF2LCBjb250YWluZXIsIHRhc2ssIG1vZGFsIH0gZnJvbSAnLi9zZWxlY3Rvci5qcyc7XG5pbXBvcnQgeyBwdXNoLCBkYXRlU3RyaW5nIH0gZnJvbSAnLi9kYXRhLmpzJztcblxuJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlbGVtZW50ID0gKCgpID0+IHtcbiAgICBsZXQgZmlyc3RGb2N1c2FibGVFbGVtZW50O1xuICAgIGxldCBsYXN0Rm9jdXNhYmxlRWxlbWVudDtcbiAgICBsZXQgbW9kYWxUb2dnbGVyO1xuICAgIHJldHVybiB7IFxuICAgICAgICBmaXJzdEZvY3VzYWJsZUVsZW1lbnQsIFxuICAgICAgICBsYXN0Rm9jdXNhYmxlRWxlbWVudCxcbiAgICAgICAgbW9kYWxUb2dnbGVyXG4gICAgfTtcbn0pKCk7XG5cbmNvbnN0IHRhYkV2ZW50ID0gKGUpID0+IHtcbiAgICBsZXQgaXNUYWJQcmVzc2VkID0gZS5rZXkgPT09ICdUYWInO1xuXG4gICAgaWYgKCFpc1RhYlByZXNzZWQpIHsgcmV0dXJuOyB9XG5cbiAgICBpZiAoZS5zaGlmdEtleSkge1xuICAgICAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gZWxlbWVudC5maXJzdEZvY3VzYWJsZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQubGFzdEZvY3VzYWJsZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gZWxlbWVudC5sYXN0Rm9jdXNhYmxlRWxlbWVudCkge1xuICAgICAgICAgICAgZWxlbWVudC5maXJzdEZvY3VzYWJsZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH0gXG59O1xuXG5jb25zdCB0cmFwRm9jdXMgPSAobW9kYWwsIHRvZ2dsZXIpID0+IHtcbiAgICBjb25zdCBmb2N1c2FibGVFbGVtZW50cyA9IFxuICAgICAgICBtb2RhbC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24sIGlucHV0LCBzZWxlY3QsIFt0YWJpbmRleF06bm90KFt0YWJpbmRleD1cIi0xXCJdKScpO1xuICAgIGVsZW1lbnQuZmlyc3RGb2N1c2FibGVFbGVtZW50ID0gZm9jdXNhYmxlRWxlbWVudHNbMF07XG4gICAgZWxlbWVudC5sYXN0Rm9jdXNhYmxlRWxlbWVudCA9IGZvY3VzYWJsZUVsZW1lbnRzW2ZvY3VzYWJsZUVsZW1lbnRzLmxlbmd0aC0xXTtcbiAgICBlbGVtZW50Lm1vZGFsVG9nZ2xlciA9IHRvZ2dsZXI7XG4gICAgXG4gICAgaWYoKHdpbmRvdy5pbm5lcldpZHRoIDw9IDc1MCkgJiYgdk5hdi5uYXYuY29udGFpbnMoZWxlbWVudC5tb2RhbFRvZ2dsZXIpKSB7XG4gICAgICAgIHZOYXYubmF2LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3ctbmF2Jyk7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRhYkV2ZW50KTtcbiAgICBlbGVtZW50LmZpcnN0Rm9jdXNhYmxlRWxlbWVudC5mb2N1cygpOyBcbn07XG5cbmNvbnN0IHJlbW92ZVRyYXBGb2N1cyA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGFiRXZlbnQpO1xuICAgIGlmKCh3aW5kb3cuaW5uZXJXaWR0aCA8PSA3NTApICYmIHZOYXYubmF2LmNvbnRhaW5zKGVsZW1lbnQubW9kYWxUb2dnbGVyKSkge1xuICAgICAgICB2TmF2Lm5hdi5jbGFzc0xpc3QuYWRkKCdzaG93LW5hdicpO1xuICAgICAgICB2TmF2LnByb2plY3RzLmZvY3VzKCk7XG4gICAgfVxuICAgIGVsZW1lbnQubW9kYWxUb2dnbGVyLmZvY3VzKCk7XG59O1xuXG5jb25zdCB0b2dnbGUgPSAoKCkgPT4ge1xuICAgIGNvbnN0IG1lbnUgPSAoZSkgPT4ge1xuICAgICAgICBpZih3aW5kb3cuaW5uZXJXaWR0aCA+IDc1MCl7XG4gICAgICAgICAgICBpZih2TmF2Lm5hdi5oYXNBdHRyaWJ1dGUoJ3N0eWxlJykpIFxuICAgICAgICAgICAgeyB2TmF2Lm5hdi5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7IH1cbiAgICAgICAgICAgIGVsc2UgeyB2TmF2Lm5hdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyB9XG4gICAgICAgIH0gZWxzZSB7IFxuICAgICAgICAgICAgdk5hdi5uYXYuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdy1uYXYnKTsgXG4gICAgICAgIH1cbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcXVpY2tBZGRUYXNrID0gKCkgPT4ge1xuICAgICAgICBtb2RhbC5xdWlja0FkZFRhc2suY2xhc3NMaXN0LnRvZ2dsZSgnb24nKTtcbiAgICAgICAgaWYobW9kYWwucXVpY2tBZGRUYXNrLmNsYXNzTGlzdC5jb250YWlucygnb24nKSkge1xuICAgICAgICAgICAgbW9kYWwucXVpY2tBZGRUYXNrSW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgIHRyYXBGb2N1cyhtb2RhbC5xdWlja0FkZENvbnRhaW5lciwgaE5hdi5wbHVzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlbW92ZVRyYXBGb2N1cygpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IG5vdGlmaWNhdGlvbiA9ICgpID0+IHtcbiAgICAgICAgbW9kYWwubm90aWZpY2F0aW9uLmNsYXNzTGlzdC50b2dnbGUoJ29uJyk7XG4gICAgICAgIGlmKG1vZGFsLm5vdGlmaWNhdGlvbi5jbGFzc0xpc3QuY29udGFpbnMoJ29uJykpIHtcbiAgICAgICAgICAgIHRyYXBGb2N1cyhtb2RhbC5ub3RpZkNvbnRhaW5lciwgaE5hdi5ub3RpZmljYXRpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVtb3ZlVHJhcEZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgcHJvamVjdHMgPSAoKSA9PiB7XG4gICAgICAgIHZOYXYucHJvamVjdExpc3RDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpO1xuICAgICAgICB2TmF2LnByb2plY3RDaGV2cm9uLmNsYXNzTGlzdC50b2dnbGUoJ3JvdGF0ZScpO1xuICAgICAgICBpZiAodk5hdi5wcm9qZWN0TGlzdENvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ3Nob3cnKSl7XG4gICAgICAgICAgICByZWZyZXNoLnByb2plY3RMaXN0KCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgYWRkUHJvamVjdCA9IChlKSA9PiB7XG4gICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgIG1vZGFsLnByb2plY3RDcmVhdG9yLmNsYXNzTGlzdC50b2dnbGUoJ29uJyk7XG4gICAgICAgIFxuICAgICAgICBpZihtb2RhbC5wcm9qZWN0Q3JlYXRvci5jbGFzc0xpc3QuY29udGFpbnMoJ29uJykpe1xuICAgICAgICAgICAgbW9kYWwubmV3UHJvamVjdE5hbWUudmFsdWUgPSAnJztcbiAgICAgICAgICAgIHRyYXBGb2N1cyhtb2RhbC5wcm9qZWN0Q3JlYXRvciwgdk5hdi5hZGRQcm9qZWN0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZOYXYucHJvamVjdHMuZm9jdXMoKTtcbiAgICAgICAgICAgIHJlbW92ZVRyYXBGb2N1cygpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGxhYmVscyA9ICgpID0+IHtcbiAgICAgICAgdk5hdi5sYWJlbExpc3RDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpO1xuICAgICAgICB2TmF2LmxhYmVsQ2hldnJvbi5jbGFzc0xpc3QudG9nZ2xlKCdyb3RhdGUnKTtcbiAgICAgICAgaWYgKHZOYXYubGFiZWxMaXN0Q29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnc2hvdycpKXtcbiAgICAgICAgICAgIHJlZnJlc2gubGFiZWxMaXN0KCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgYWRkTGFiZWwgPSAoZSkgPT4ge1xuICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICBtb2RhbC5sYWJlbENyZWF0b3IuY2xhc3NMaXN0LnRvZ2dsZSgnb24nKTtcblxuICAgICAgICBpZihtb2RhbC5sYWJlbENyZWF0b3IuY2xhc3NMaXN0LmNvbnRhaW5zKCdvbicpKXtcbiAgICAgICAgICAgIG1vZGFsLmFkZExhYmVsSW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgIHRyYXBGb2N1cyhtb2RhbC5sYWJlbENyZWF0b3IsIHZOYXYuYWRkTGFiZWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdk5hdi5sYWJlbHMuZm9jdXMoKTtcbiAgICAgICAgICAgIHJlbW92ZVRyYXBGb2N1cygpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHRhc2tDcmVhdG9yID0gKCkgPT4ge1xuICAgICAgICBjb250YWluZXIuZGl2LmNsYXNzTGlzdC50b2dnbGUoJ2FkZC10cmlnZ2VyZWQnKTtcbiAgICAgICAgaWYgKGNvbnRhaW5lci5kaXYuY2xhc3NMaXN0LmNvbnRhaW5zKCdhZGQtdHJpZ2dlcmVkJykpe1xuICAgICAgICAgICAgdGFzay5pbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgc2VsZWN0LnJlc2V0KCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgX2l0ZW1NYW5hZ2VyID0gKG5ld0NsYXNzKSA9PiB7XG4gICAgICAgIHRhc2suYWRkRGl2LmNsYXNzTGlzdC50b2dnbGUobmV3Q2xhc3MpO1xuICAgICAgICBpZih0YXNrLmFkZERpdi5jbGFzc0xpc3QuY29udGFpbnMoJ2FkZC10YXNrLWRpdicpIFxuICAgICAgICAmJiB0YXNrLmFkZERpdi5jbGFzc0xpc3QuY29udGFpbnMobmV3Q2xhc3MpKXtcbiAgICAgICAgICAgIHRhc2suYWRkRGl2LmNsYXNzTmFtZSA9IGBhZGQtdGFzay1kaXYgJHtuZXdDbGFzc31gO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHRhc2tTY2hlZHVsZXIgPSAoKSA9PiB7XG4gICAgICAgIF9pdGVtTWFuYWdlcignZGlzcGxheS1zY2hlZHVsZXInKTtcbiAgICAgICAgaWYgKHRhc2suYWRkRGl2LmNsYXNzTGlzdC5jb250YWlucygnZGlzcGxheS1zY2hlZHVsZXInKSkge1xuICAgICAgICAgICAgcmVmcmVzaC5zY2hlZHVsZSgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHRhc2tQcm9qZWN0U2VsZWN0b3IgPSAoKSA9PiB7XG4gICAgICAgIF9pdGVtTWFuYWdlcignZGlzcGxheS1jYXJyaWVyJyk7XG4gICAgICAgIGlmICh0YXNrLmFkZERpdi5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc3BsYXktY2FycmllcicpKXtcbiAgICAgICAgICAgIGRpc3BsYXkudGFza1Byb2plY3RMaXN0KCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgdGFza0xhYmVsZXIgPSAoKSA9PiB7XG4gICAgICAgIF9pdGVtTWFuYWdlcignZGlzcGxheS1sYWJlbGVyJyk7XG4gICAgICAgIGlmICh0YXNrLmFkZERpdi5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc3BsYXktbGFiZWxlcicpKXtcbiAgICAgICAgICAgIGRpc3BsYXkudGFza0xhYmVsTGlzdCgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHRhc2tQcmlvcml0eVNldHRlciA9ICgpID0+IHtcbiAgICAgICAgX2l0ZW1NYW5hZ2VyKCdkaXNwbGF5LXByaW8tc2V0dGVyJyk7XG4gICAgICAgIGlmICh0YXNrLmFkZERpdi5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc3BsYXktcHJpby1zZXR0ZXInKSl7XG4gICAgICAgICAgICBkaXNwbGF5LnRhc2tQcmlvcml0eUxpc3QoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBwcm9qZWN0RWRpdG9yID0gKCkgPT4ge1xuICAgICAgICBtb2RhbC5wcm9qZWN0RWRpdG9yLmNsYXNzTGlzdC50b2dnbGUoJ29uJyk7XG4gICAgICAgIGlmKG1vZGFsLnByb2plY3RFZGl0b3IuY2xhc3NMaXN0LmNvbnRhaW5zKCdvbicpKXtcbiAgICAgICAgICAgIG1vZGFsLnVwZGF0ZWRQcm9qZWN0TmFtZS52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgdHJhcEZvY3VzKG1vZGFsLnByb2plY3RFZGl0b3IsIHZOYXYucHJvamVjdHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdk5hdi5wcm9qZWN0cy5mb2N1cygpO1xuICAgICAgICAgICAgcmVtb3ZlVHJhcEZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgbGFiZWxFZGl0b3IgPSAoKSA9PiB7XG4gICAgICAgIG1vZGFsLmxhYmVsRWRpdG9yLmNsYXNzTGlzdC50b2dnbGUoJ29uJyk7XG4gICAgICAgIGlmKG1vZGFsLmxhYmVsRWRpdG9yLmNsYXNzTGlzdC5jb250YWlucygnb24nKSl7XG4gICAgICAgICAgICBtb2RhbC51cGRhdGVkTGFiZWxOYW1lLnZhbHVlID0gJyc7XG4gICAgICAgICAgICB0cmFwRm9jdXMobW9kYWwubGFiZWxFZGl0b3IsIHZOYXYubGFiZWxzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZOYXYubGFiZWxzLmZvY3VzKCk7XG4gICAgICAgICAgICByZW1vdmVUcmFwRm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBtZW51LFxuICAgICAgICBxdWlja0FkZFRhc2ssXG4gICAgICAgIG5vdGlmaWNhdGlvbixcbiAgICAgICAgcHJvamVjdHMsIGFkZFByb2plY3QsXG4gICAgICAgIGxhYmVscywgYWRkTGFiZWwsXG4gICAgICAgIHRhc2tDcmVhdG9yLCB0YXNrU2NoZWR1bGVyLCB0YXNrUHJvamVjdFNlbGVjdG9yLCB0YXNrTGFiZWxlciwgdGFza1ByaW9yaXR5U2V0dGVyLFxuICAgICAgICBwcm9qZWN0RWRpdG9yLCBsYWJlbEVkaXRvclxuICAgIH07XG59KSgpO1xuXG5jb25zdCBjbGlja2VyID0gKGUpID0+IHtcbiAgICBpZihlLmtleSA9PT0gJ0VudGVyJyAmJiBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2ljLWRpdicpKXtcbiAgICAgICAgZS50YXJnZXQuY2xpY2soKTtcbiAgICB9XG59O1xuXG5jb25zdCB2aWV3TWFuYWdlciA9IChlKSA9PiB7XG4gICAgaWYgKHZOYXYubmF2LmNsYXNzTGlzdC5jb250YWlucygnc2hvdy1uYXYnKSAmJiAod2luZG93LmlubmVyV2lkdGggPD0gNzUwKSl7XG4gICAgICAgIGlmKCF2TmF2Lm5hdi5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KSkgeyBcbiAgICAgICAgICAgIHZOYXYubmF2LmNsYXNzTGlzdC50b2dnbGUoJ3Nob3ctbmF2Jyk7IFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYodGFzay5hZGREaXYuY2xhc3NOYW1lICE9ICdhZGQtdGFzay1kaXYnKXtcbiAgICAgICAgaWYoIXRhc2suYWRkRGl2LmNvbnRhaW5zKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKXtcbiAgICAgICAgICAgIHRhc2suYWRkRGl2LmNsYXNzTmFtZSA9ICdhZGQtdGFzay1kaXYnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvbnRhaW5lci5tYWluLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgICBjb250YWluZXIuZGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2VtcHR5Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29udGFpbmVyLmRpdi5jbGFzc0xpc3QuYWRkKCdlbXB0eScpO1xuICAgIH1cbn07XG4vLyBoZXJlIGhlcmUgaGVyZSBoZXJlXG5jb25zdCBjaGFuZ2VNYWluID0gKHRhZywgdmFsdWUsIGNvbmRpdGlvbiA9ICcnKSA9PiB7XG4gICAgY29udGFpbmVyLm1haW4uaW5uZXJIVE1MID0gJyc7XG4gICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpKTtcbiAgICBsZXQgYXJyYXkgPSBbXTtcblxuXG4gICAgaWYgKHRhZyA9PSAnZHVlRGF0ZScpIHtcbiAgICAgICAgaWYoY29uZGl0aW9uID09ICd0b2RheScpe1xuICAgICAgICAgICAgZGF0YS50b2RvbGlzdC5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoRGF0ZS5wYXJzZSh0YXNrLmR1ZURhdGUpID09IERhdGUucGFyc2UodmFsdWUpKXtcbiAgICAgICAgICAgICAgICAgICAgYXJyYXkucHVzaCh0YXNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChjb25kaXRpb24gPT0gJ3VwY29taW5nJyl7XG4gICAgICAgICAgICBkYXRhLnRvZG9saXN0LmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICAgICAgICBpZihEYXRlLnBhcnNlKHRhc2suZHVlRGF0ZSkgPiBEYXRlLnBhcnNlKHZhbHVlKSl7XG4gICAgICAgICAgICAgICAgICAgIGFycmF5LnB1c2godGFzayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoY29uZGl0aW9uID09ICdkdWUnKXtcbiAgICAgICAgICAgIGRhdGEudG9kb2xpc3QuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICAgICAgICAgIGlmKERhdGUucGFyc2UodGFzay5kdWVEYXRlKSA8IERhdGUucGFyc2UodmFsdWUpKXtcbiAgICAgICAgICAgICAgICAgICAgYXJyYXkucHVzaCh0YXNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBpZiAodGFnID09ICdwcm9qZWN0Jykge1xuICAgICAgICBkYXRhLnRvZG9saXN0LmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICAgIGlmKHRhc2sucHJvamVjdCA9PSB2YWx1ZSl7XG4gICAgICAgICAgICAgICAgYXJyYXkucHVzaCh0YXNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSBcbiAgICBcbiAgICBpZiAodGFnID09ICdsYWJlbCcpIHtcbiAgICAgICAgZGF0YS50b2RvbGlzdC5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICBpZih0YXNrLmxhYmVsID09IHZhbHVlKXtcbiAgICAgICAgICAgICAgICBhcnJheS5wdXNoKHRhc2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgaWYgKGFycmF5Lmxlbmd0aCl7XG4gICAgICAgIGFycmF5LnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICAgICAgcmV0dXJuIChEYXRlLnBhcnNlKGEuZHVlRGF0ZSkgLSBEYXRlLnBhcnNlKGIuZHVlRGF0ZSkpO1xuICAgICAgICB9KVxuXG4gICAgICAgIGFycmF5LmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG8nKTtcbiAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcbiAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCB0YXNrLmlkKTtcblxuICAgICAgICAgICAgbGV0IHByaW9yaXR5Q2xhc3M7XG4gICAgICAgICAgICBpZih0YXNrLnByaW9yaXR5ID09ICdwcmlvcml0eSA0Jyl7XG4gICAgICAgICAgICAgICAgcHJpb3JpdHlDbGFzcyA9ICdwcmlvNCc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRhc2sucHJpb3JpdHkgPT0gJ3ByaW9yaXR5IDMnKXtcbiAgICAgICAgICAgICAgICBwcmlvcml0eUNsYXNzID0gJ3ByaW8zJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGFzay5wcmlvcml0eSA9PSAncHJpb3JpdHkgMicpe1xuICAgICAgICAgICAgICAgIHByaW9yaXR5Q2xhc3MgPSAncHJpbzInO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcmlvcml0eUNsYXNzID0gJ3ByaW8xJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgZGl2Q2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgYnV0dG9uQ2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGJ1dHRvbkNoZWNrLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBgY2hlY2tib3gtYnRuICR7cHJpb3JpdHlDbGFzc31gKTtcbiAgICAgICAgICAgIGJ1dHRvbkNoZWNrLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xuICAgICAgICAgICAgZGl2Q2hlY2tib3guYXBwZW5kQ2hpbGQoYnV0dG9uQ2hlY2spO1xuICAgICAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIHNwYW4uc2V0QXR0cmlidXRlKCdkcmFnZ2FibGUnLCAnZmFsc2UnKTtcbiAgICAgICAgICAgIHNwYW4uaW5uZXJIVE1MID0gJyYjeDI3MTQ7JztcbiAgICAgICAgICAgIGRpdkNoZWNrYm94LmFwcGVuZENoaWxkKHNwYW4pO1xuXG4gICAgICAgICAgICBjb25zdCBkaXZCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkaXZCb2R5LmNsYXNzTGlzdC5hZGQoJ3RvZG8tdGV4dCcpO1xuICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgbGFiZWwuaW5uZXJUZXh0ID0gdGFzay50aXRsZTtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgIGlmICh0YXNrLmxhYmVsKXtcbiAgICAgICAgICAgICAgICBpZiAodGFzay5wcm9qZWN0ICE9ICdpbmJveCcpe1xuICAgICAgICAgICAgICAgICAgICBsYWJlbERpdi5pbm5lckhUTUwgPSBgPHNtYWxsPltQcm9qZWN0OiAke3Rhc2sucHJvamVjdH1dIFtsYWJlbDogJHt0YXNrLmxhYmVsfV08L3NtYWxsPmA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxEaXYuaW5uZXJIVE1MID0gYDxzbWFsbD5sYWJlbDogJHt0YXNrLmxhYmVsfTwvc21hbGw+YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0YXNrLnByb2plY3QgIT0gJ2luYm94Jyl7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsRGl2LmlubmVySFRNTCA9IGA8c21hbGw+W1Byb2plY3Q6ICR7dGFzay5wcm9qZWN0fV08L3NtYWxsPmA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxEaXYuaW5uZXJIVE1MID0gYDxzbWFsbD48L3NtYWxsPmA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgcGFyYS5jbGFzc0xpc3QuYWRkKCd0b2RvLXRleHQtbm90ZScpO1xuXG4gICAgICAgICAgICBpZiAodGFzay5ub3RlKXtcbiAgICAgICAgICAgICAgICBwYXJhLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIG1pZCB0b29sLXNwYW5cIj5ub3RlPC9zcGFuPlxuICAgICAgICAgICAgICAgICR7dGFzay5ub3RlfVxuICAgICAgICAgICAgICAgIGA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZW0nKTtcbiAgICAgICAgICAgIGlmIChEYXRlLnBhcnNlKHRhc2suZHVlRGF0ZSkgPiBEYXRlLnBhcnNlKGRhdGVTdHJpbmcudG9kYXlTdHJpbmcoKSkpe1xuICAgICAgICAgICAgICAgIGVtLmNsYXNzTGlzdC5hZGQoJ3NjaGVkLXVwY29tJyk7XG4gICAgICAgICAgICAgICAgaWYoRGF0ZS5wYXJzZSh0YXNrLmR1ZURhdGUpID09IERhdGUucGFyc2UoZGF0ZVN0cmluZy50d21TdHJpbmcoKSkpe1xuICAgICAgICAgICAgICAgICAgICBlbS5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWlkXCI+ZXZlbnQ8L3NwYW4+IFRvbW9ycm93XG4gICAgICAgICAgICAgICAgICAgIGA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZW0uaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIG1pZFwiPmV2ZW50PC9zcGFuPiAke3Rhc2suZHVlRGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgYDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9IGVsc2UgaWYgKERhdGUucGFyc2UodGFzay5kdWVEYXRlKSA8IERhdGUucGFyc2UoZGF0ZVN0cmluZy50b2RheVN0cmluZygpKSl7XG4gICAgICAgICAgICAgICAgZW0uY2xhc3NMaXN0LmFkZCgnc2NoZWQtZHVlJyk7XG4gICAgICAgICAgICAgICAgZW0uaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWlkXCI+ZXZlbnQ8L3NwYW4+IFBhc3QgZHVlXG4gICAgICAgICAgICAgICAgYDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoRGF0ZS5wYXJzZSh0YXNrLmR1ZURhdGUpID09IERhdGUucGFyc2UoZGF0ZVN0cmluZy50b2RheVN0cmluZygpKSkge1xuICAgICAgICAgICAgICAgIGVtLmNsYXNzTGlzdC5hZGQoJ3NjaGVkLXRvZGF5Jyk7XG4gICAgICAgICAgICAgICAgZW0uaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWlkXCI+ZXZlbnQ8L3NwYW4+IFRvZGF5XG4gICAgICAgICAgICAgICAgYDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZW0uaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWlkXCI+ZXZlbnQ8L3NwYW4+IE5vIERhdGVcbiAgICAgICAgICAgICAgICBgO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBkaXZUb29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkaXZUb29sLmNsYXNzTGlzdC5hZGQoJ3RvZG8tdG9vbHMtY29udGFpbmVyJyk7XG4gICAgICAgICAgICBjb25zdCBidXR0b25FZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBidXR0b25FZGl0LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWlkIHRvb2wtc3BhblwiPmVkaXQ8L3NwYW4+XG4gICAgICAgICAgICBgO1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBidXR0b25EZWxldGUuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWQgdG9vbC1zcGFuXCI+ZGVsZXRlPC9zcGFuPlxuICAgICAgICAgICAgYDtcblxuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGRpdkNoZWNrYm94KTtcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChkaXZCb2R5KTtcbiAgICAgICAgICAgIGRpdkJvZHkuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICAgICAgZGl2Qm9keS5hcHBlbmRDaGlsZChsYWJlbERpdik7XG4gICAgICAgICAgICBkaXZCb2R5LmFwcGVuZENoaWxkKHBhcmEpO1xuICAgICAgICAgICAgZGl2Qm9keS5hcHBlbmRDaGlsZChlbSk7XG4gICAgICAgICAgICBkaXZCb2R5LmFwcGVuZENoaWxkKGRpdlRvb2wpO1xuICAgICAgICAgICAgZGl2VG9vbC5hcHBlbmRDaGlsZChidXR0b25FZGl0KTtcbiAgICAgICAgICAgIGRpdlRvb2wuYXBwZW5kQ2hpbGQoYnV0dG9uRGVsZXRlKTtcbiAgICAgICAgICAgIC8vIGhlcmUgaGVyZSAvLyBidXR0b25DaGVjaywgYnV0dG9uRWRpdCwgYnV0dG9uRGVsZXRlLiBhZGQgb25jbGlja1xuXG4gICAgICAgICAgICBjb250YWluZXIubWFpbi5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG5jb25zdCBkaXNwbGF5ID0gKCgpID0+IHtcblxuICAgIGNvbnN0IF9nZXRMYXN0V29yZCA9IChzdHJpbmcpID0+IHtcbiAgICAgICAgbGV0IHdvcmQgPSBzdHJpbmcuc3BsaXQoXCIgXCIpO1xuICAgICAgICByZXR1cm4gd29yZFt3b3JkLmxlbmd0aCAtIDFdO1xuICAgIH07XG5cbiAgICBjb25zdCB0b2RvbGlzdCA9IChlKSA9PiB7XG4gICAgICAgIGxldCB3b3JkID0gX2dldExhc3RXb3JkKGUudGFyZ2V0LmlubmVyVGV4dCk7XG4gICAgICAgIGNvbnRhaW5lci5oZWFkZXIuaW5uZXJUZXh0ID0gd29yZDtcbiAgICAgICAgXG4gICAgICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvLWNvbXAgLmFjdGl2ZScpKXtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvLWNvbXAgLmFjdGl2ZScpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cbiAgICAgICAgaWYod2luZG93LmlubmVyV2lkdGggPD0gNzUwKXtcbiAgICAgICAgICAgIGhOYXYubWVudS5jbGljaygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYod29yZCA9PSAnVG9kYXknKXtcbiAgICAgICAgICAgIGNoYW5nZU1haW4oJ2R1ZURhdGUnLCBkYXRlU3RyaW5nLnRvZGF5U3RyaW5nKCksICd0b2RheScpO1xuICAgICAgICB9IGVsc2UgaWYgKHdvcmQgPT0gJ1VwY29taW5nJykge1xuICAgICAgICAgICAgY2hhbmdlTWFpbignZHVlRGF0ZScsIGRhdGVTdHJpbmcudG9kYXlTdHJpbmcoKSwgJ3VwY29taW5nJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaGFuZ2VNYWluKCdwcm9qZWN0JywgJ2luYm94Jyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgaG9tZSA9ICgpID0+IHtcbiAgICAgICAgY29udGFpbmVyLmhlYWRlci5pbm5lclRleHQgPSAnVG9kYXknO1xuICAgICAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mby1jb21wIC5hY3RpdmUnKSl7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mby1jb21wIC5hY3RpdmUnKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgICB2TmF2LnRvZGF5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICBjaGFuZ2VNYWluKCdkdWVEYXRlJywgZGF0ZVN0cmluZy50b2RheVN0cmluZygpLCAndG9kYXknKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaW5ib3ggPSAoKSA9PiB7XG4gICAgICAgIGNvbnRhaW5lci5oZWFkZXIuaW5uZXJUZXh0ID0gJ0luYm94JztcbiAgICAgICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZm8tY29tcCAuYWN0aXZlJykpe1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZm8tY29tcCAuYWN0aXZlJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgICAgdk5hdi5pbmJveC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgY2hhbmdlTWFpbigncHJvamVjdCcsICdpbmJveCcpO1xuICAgIH07XG5cbiAgICBjb25zdCB0YXNrUHJvamVjdExpc3QgPSAoKSA9PiB7XG4gICAgICAgIHRhc2sucHJvamVjdFNlbGVjdG9yLmlubmVySFRNTCA9ICcnO1xuICAgICAgICB0YXNrLnByb2plY3RTZWxlY3Rvci5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8YnV0dG9uIGlkID0gXCJwcm9qZWN0RGVmYXVsdEluYm94XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWRcIj5pbmJveDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8dT5JbmJveDwvdT5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICBgO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdERlZmF1bHRJbmJveCcpLm9uY2xpY2sgPSBzZWxlY3QuaW5ib3g7XG4gICAgICAgIGlmKHRhc2sucHJvamVjdC5kYXRhc2V0LnZhbHVlID09ICdpbmJveCcpe1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3REZWZhdWx0SW5ib3gnKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpKTtcblxuICAgICAgICBkYXRhLnByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIG1pZFwiPmNpcmNsZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8dT4ke3Byb2plY3R9PC91PlxuICAgICAgICAgICAgYDtcbiAgICAgICAgICAgIHRhc2sucHJvamVjdFNlbGVjdG9yLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgICAgICAgICBpZih0YXNrLnByb2plY3QuZGF0YXNldC52YWx1ZSA9PSBwcm9qZWN0KXtcbiAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJ1dHRvbi5vbmNsaWNrID0gc2VsZWN0LnByb2plY3Q7ICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCB0YXNrTGFiZWxMaXN0ID0gKCkgPT4ge1xuICAgICAgICB0YXNrLmxhYmVsQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICB0YXNrLmxhYmVsQ29udGFpbmVyLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxidXR0b24gaWQgPSBcImxhYmVsTm9uZVwiPlxuICAgICAgICAgICAgICAgIDx1Pk5vIExhYmVsPC91PlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIGA7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xhYmVsTm9uZScpLm9uY2xpY2sgPSBzZWxlY3Qubm9MYWJlbDtcbiAgICAgICAgaWYodGFzay5sYWJlbC5kYXRhc2V0LnZhbHVlID09ICcnKXtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsYWJlbE5vbmUnKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpKTtcblxuICAgICAgICBkYXRhLmxhYmVscy5mb3JFYWNoKChsYWJlbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWlkXCI+bGFiZWw8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHU+JHtsYWJlbH08L3U+XG4gICAgICAgICAgICBgO1xuICAgICAgICAgICAgdGFzay5sYWJlbENvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgICAgICAgICAgaWYodGFzay5sYWJlbC5kYXRhc2V0LnZhbHVlID09IGxhYmVsKXtcbiAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJ1dHRvbi5vbmNsaWNrID0gc2VsZWN0LmxhYmVsOyAgICAgICAgICAgIFxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgdGFza1ByaW9yaXR5TGlzdCA9ICgpID0+IHtcbiAgICAgICAgdGFzay5wcmlvcml0eUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKS5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRhc2sucHJpb3JpdHkuZGF0YXNldC52YWx1ZSA9PSAncHJpb3JpdHkgNCcpe1xuICAgICAgICAgICAgdGFzay5wcmlvcml0eUZvdXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGFzay5wcmlvcml0eS5kYXRhc2V0LnZhbHVlID09ICdwcmlvcml0eSAzJyl7XG4gICAgICAgICAgICB0YXNrLnByaW9yaXR5VGhyZWUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGFzay5wcmlvcml0eS5kYXRhc2V0LnZhbHVlID09ICdwcmlvcml0eSAyJyl7XG4gICAgICAgICAgICB0YXNrLnByaW9yaXR5VHdvLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFzay5wcmlvcml0eU9uZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0b2RvbGlzdCxcbiAgICAgICAgaG9tZSwgaW5ib3gsXG4gICAgICAgIHRhc2tQcm9qZWN0TGlzdCxcbiAgICAgICAgdGFza0xhYmVsTGlzdCxcbiAgICAgICAgdGFza1ByaW9yaXR5TGlzdCxcbiAgICB9O1xufSkoKTtcblxuLy8gaGVyZVxuY29uc3QgZGlzcGxheVRhc2sgPSAodGFyZ2V0LCBuYW1lKSA9PiB7XG5cbiAgICBjb250YWluZXIuaGVhZGVyLmlubmVyVGV4dCA9IGAke3RhcmdldC50b1VwcGVyQ2FzZSgpfSA+ICR7bmFtZX1gO1xuICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvLWNvbXAgLmFjdGl2ZScpKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZm8tY29tcCAuYWN0aXZlJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgaWYod2luZG93LmlubmVyV2lkdGggPD0gNzUwKXtcbiAgICAgICAgaE5hdi5tZW51LmNsaWNrKCk7XG4gICAgfVxuXG4gICAgY2hhbmdlTWFpbih0YXJnZXQsIG5hbWUpO1xufTtcblxuY29uc3QgcmVmcmVzaCA9ICgoKSA9PiB7XG4gICAgbGV0IGRhdGE7XG5cbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9ICgpID0+IHtcbiAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJykpO1xuICAgICAgICB2TmF2LnByb2plY3RMaXN0Q29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuXG4gICAgICAgIGlmIChkYXRhLnByb2plY3RzLmxlbmd0aCl7XG4gICAgICAgICAgICBkYXRhLnByb2plY3RzLmZvckVhY2goKHByb2plY3QpPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGRpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImJ1bGxldFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcyA9IFwidW5pcXVlXCI+JHtwcm9qZWN0fTwvc3Bhbj5gO1xuICAgICAgICAgICAgICAgIGNvbnN0IGhvcml6QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgaG9yaXpCdG4uc2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJywgcHJvamVjdCk7XG4gICAgICAgICAgICAgICAgaG9yaXpCdG4uaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIG1pZFwiPm1vcmVfaG9yaXo8L3NwYW4+YDtcbiAgICAgICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoaG9yaXpCdG4pO1xuICAgICAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcbiAgICAgICAgICAgICAgICB2TmF2LnByb2plY3RMaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgICAgICAgICAgZGl2Lm9uY2xpY2sgPSAoZSkgPT4geyBcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTsgXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlUYXNrKCdwcm9qZWN0JywgcHJvamVjdCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBob3JpekJ0bi5vbmNsaWNrID0gKGUpID0+IHsgXG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7IFxuICAgICAgICAgICAgICAgICAgICBtb2RhbC5wcm9qZWN0TmFtZS5kYXRhc2V0LnZhbHVlID0gcHJvamVjdDtcbiAgICAgICAgICAgICAgICAgICAgbW9kYWwucHJvamVjdE5hbWUuaW5uZXJUZXh0ID0gcHJvamVjdDtcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlLnByb2plY3RFZGl0b3IoKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgbGFiZWxMaXN0ID0gKCkgPT4ge1xuICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MnKSk7XG4gICAgICAgIHZOYXYubGFiZWxMaXN0Q29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuXG4gICAgICAgIGlmIChkYXRhLmxhYmVscy5sZW5ndGgpe1xuICAgICAgICAgICAgZGF0YS5sYWJlbHMuZm9yRWFjaCgobGFiZWwpPT4ge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWQgdGFnXCI+bGFiZWw8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcyA9IFwidW5pcXVlXCI+JHtsYWJlbH08L3NwYW4+YDtcbiAgICAgICAgICAgICAgICBjb25zdCBob3JpekJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIGhvcml6QnRuLnNldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScsIGxhYmVsKTtcbiAgICAgICAgICAgICAgICBob3JpekJ0bi5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWlkXCI+bW9yZV9ob3Jpejwvc3Bhbj5gO1xuICAgICAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChob3JpekJ0bik7XG4gICAgICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xuICAgICAgICAgICAgICAgIHZOYXYubGFiZWxMaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgICAgICAgICAgZGl2Lm9uY2xpY2sgPSAoZSkgPT4geyBcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTsgXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlUYXNrKCdsYWJlbCcsIGxhYmVsKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGhvcml6QnRuLm9uY2xpY2sgPSAoZSkgPT4geyBcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTsgXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsLmVkaXRMYWJlbE5hbWUuZGF0YXNldC52YWx1ZSA9IGxhYmVsO1xuICAgICAgICAgICAgICAgICAgICBtb2RhbC5lZGl0TGFiZWxOYW1lLmlubmVyVGV4dCA9IGxhYmVsO1xuICAgICAgICAgICAgICAgICAgICB0b2dnbGUubGFiZWxFZGl0b3IoKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgc2NoZWR1bGUgPSAoKSA9PiB7XG4gICAgICAgIHRhc2suc3BhblRvZGF5LmlubmVyVGV4dCA9IGRhdGVTdHJpbmcudG9kYXlOYW1lKCk7XG4gICAgICAgIHRhc2suc3BhblR3bS5pbm5lclRleHQgPSBkYXRlU3RyaW5nLnRvbW9ycm93TmFtZSgpO1xuICAgICAgICB0YXNrLnNwYW5OZXh0V2Vlay5pbm5lclRleHQgPSBkYXRlU3RyaW5nLm5leHRXZWVrTmFtZSgpO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hZGQtdGFzay1kaXYgLmFjdGl2ZScpLmZvckVhY2goKGVsZW1lbnQpPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRhc2suc2NoZWR1bGUuZGF0YXNldC52YWx1ZSA9PSAnJyl7XG4gICAgICAgICAgICB0YXNrLnNjaGVkTm9EYXRlLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICB9IGVsc2UgaWYgKHRhc2suc2NoZWR1bGUuaW5uZXJUZXh0ID09ICdUb2RheScpe1xuICAgICAgICAgICAgdGFzay5zY2hlZFRvZGF5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICB9IGVsc2UgaWYgKHRhc2suc2NoZWR1bGUuaW5uZXJUZXh0ID09ICdUb21vcnJvdycpe1xuICAgICAgICAgICAgdGFzay5zY2hlZFR3bS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgfSBlbHNlIGlmICh0YXNrLnNjaGVkdWxlLmlubmVyVGV4dCA9PSAnTmV4dCBXZWVrJyl7XG4gICAgICAgICAgICB0YXNrLnNjaGVkTmV4dFdlZWsuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXNrLnNjaGVkQ3VzdG9tRGl2LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb2plY3RMaXN0LFxuICAgICAgICBsYWJlbExpc3QsXG4gICAgICAgIHNjaGVkdWxlXG4gICAgfTtcbn0pKCk7XG5cbmNvbnN0IGFkZCA9ICgoKSA9PiB7XG4gICAgY29uc3QgcXVpY2sgPSAoKSA9PiB7XG4gICAgICAgIGlmKCFtb2RhbC5xdWlja0FkZFRhc2tJbnB1dC52YWx1ZSl7XG4gICAgICAgICAgICBhbGVydCgnVGFzayBuYW1lIHJlcXVpcmVkIScpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcHVzaC5xdWljayhtb2RhbC5xdWlja0FkZFRhc2tJbnB1dC52YWx1ZSk7XG4gICAgICAgIHRvZ2dsZS5xdWlja0FkZFRhc2soKTtcbiAgICAgICAgZGlzcGxheS5pbmJveCgpO1xuICAgIH07XG5cbiAgICBjb25zdCBwcm9qZWN0ID0gKCkgPT4ge1xuICAgICAgICBpZighbW9kYWwubmV3UHJvamVjdE5hbWUudmFsdWUpe1xuICAgICAgICAgICAgYWxlcnQoJ1Byb2plY3QgbmFtZSByZXF1aXJlZCEnKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHB1c2gucHJvamVjdChtb2RhbC5uZXdQcm9qZWN0TmFtZS52YWx1ZSk7XG4gICAgICAgIG1vZGFsLnByb2plY3RDcmVhdG9yLmNsYXNzTGlzdC50b2dnbGUoJ29uJyk7XG4gICAgICAgIHNldFRpbWVvdXQoKCk9PiBhbGVydCgnQWRkZWQgdG8gUHJvamVjdHMhJyksIDUwMCk7XG4gICAgICAgIHJlZnJlc2gucHJvamVjdExpc3QoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgbGFiZWwgPSAoKSA9PiB7XG4gICAgICAgIGlmKCFtb2RhbC5hZGRMYWJlbElucHV0LnZhbHVlKXtcbiAgICAgICAgICAgIGFsZXJ0KCdMYWJlbCBuYW1lIHJlcXVpcmVkIScpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcHVzaC5sYWJlbChtb2RhbC5hZGRMYWJlbElucHV0LnZhbHVlKTtcbiAgICAgICAgbW9kYWwubGFiZWxDcmVhdG9yLmNsYXNzTGlzdC50b2dnbGUoJ29uJyk7XG4gICAgICAgIHNldFRpbWVvdXQoKCk9PiBhbGVydCgnQWRkZWQgdG8gTGFiZWxzIScpLCA1MDApO1xuICAgICAgICByZWZyZXNoLmxhYmVsTGlzdCgpO1xuICAgIH07XG5cbiAgICBjb25zdCB0b2RvID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmKCF0YXNrLmlucHV0LnZhbHVlKXtcbiAgICAgICAgICAgIGFsZXJ0KCdUYXNrIG5hbWUgcmVxdWlyZWQhJylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHB1c2gudGFzayhcbiAgICAgICAgICAgIHRhc2suaW5wdXQudmFsdWUsXG4gICAgICAgICAgICB0YXNrLnNjaGVkdWxlLmRhdGFzZXQudmFsdWUsXG4gICAgICAgICAgICB0YXNrLnByaW9yaXR5LmRhdGFzZXQudmFsdWUsXG4gICAgICAgICAgICB0YXNrLnByb2plY3QuZGF0YXNldC52YWx1ZSxcbiAgICAgICAgICAgIHRhc2subGFiZWwuZGF0YXNldC52YWx1ZVxuICAgICAgICApO1xuXG4gICAgICAgIGxldCBwcm9qZWN0ID0gdGFzay5wcm9qZWN0LmRhdGFzZXQudmFsdWUudG9VcHBlckNhc2UoKTtcbiAgICAgICAgaWYocHJvamVjdCAhPSAnSU5CT1gnKXtcbiAgICAgICAgICAgIGFsZXJ0KGBBZGRlZCB0byBQcm9qZWN0ICR7cHJvamVjdH0hYCk7XG4gICAgICAgIH1cblxuICAgICAgICAocHJvamVjdCA9PSAnSU5CT1gnKSA/IGRpc3BsYXkuaW5ib3goKSA6IGRpc3BsYXkuaG9tZSgpO1xuXG4gICAgICAgIHRvZ2dsZS50YXNrQ3JlYXRvcigpO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBxdWljayxcbiAgICAgICAgcHJvamVjdCxcbiAgICAgICAgbGFiZWwsXG4gICAgICAgIHRvZG9cbiAgICB9O1xufSkoKTtcblxuY29uc3QgdXBkYXRlID0gKCgpID0+IHtcblxuICAgIGNvbnN0IHByb2plY3QgPSAoKSA9PiB7XG5cbiAgICAgICAgaWYgKCFtb2RhbC51cGRhdGVkUHJvamVjdE5hbWUudmFsdWUpIHsgXG4gICAgICAgICAgICBhbGVydCgnUHJvamVjdCBuYW1lIHJlcXVpcmVkIScpO1xuICAgICAgICAgICAgcmV0dXJuOyBcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtb2RhbC51cGRhdGVkUHJvamVjdE5hbWUudmFsdWUgPT0gbW9kYWwucHJvamVjdE5hbWUuZGF0YXNldC52YWx1ZSl7XG4gICAgICAgICAgICBhbGVydCgnRW50ZXIgYSBkaWZmZXJlbnQgUHJvamVjdCBuYW1lIScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHB1c2gucHJvamVjdFJlbmFtZShtb2RhbC5wcm9qZWN0TmFtZS5kYXRhc2V0LnZhbHVlLCBtb2RhbC51cGRhdGVkUHJvamVjdE5hbWUudmFsdWUpO1xuICAgICAgICB0b2dnbGUucHJvamVjdEVkaXRvcigpO1xuICAgICAgICBkaXNwbGF5LmhvbWUoKTtcbiAgICAgICAgcmVmcmVzaC5wcm9qZWN0TGlzdCgpO1xuICAgIH07XG5cbiAgICBjb25zdCBsYWJlbCA9ICgpID0+IHtcblxuICAgICAgICBpZiAoIW1vZGFsLnVwZGF0ZWRMYWJlbE5hbWUudmFsdWUpIHsgXG4gICAgICAgICAgICBhbGVydCgnTGFiZWwgbmFtZSByZXF1aXJlZCEnKTtcbiAgICAgICAgICAgIHJldHVybjsgXG4gICAgICAgIH1cblxuICAgICAgICBpZiAobW9kYWwudXBkYXRlZExhYmVsTmFtZS52YWx1ZSA9PSBtb2RhbC5lZGl0TGFiZWxOYW1lLmRhdGFzZXQudmFsdWUpe1xuICAgICAgICAgICAgYWxlcnQoJ0VudGVyIGEgZGlmZmVyZW50IExhYmVsIG5hbWUhJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcHVzaC5sYWJlbFJlbmFtZShtb2RhbC5lZGl0TGFiZWxOYW1lLmRhdGFzZXQudmFsdWUsIG1vZGFsLnVwZGF0ZWRMYWJlbE5hbWUudmFsdWUpO1xuICAgICAgICB0b2dnbGUubGFiZWxFZGl0b3IoKTtcbiAgICAgICAgZGlzcGxheS5ob21lKCk7XG4gICAgICAgIHJlZnJlc2gubGFiZWxMaXN0KCk7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb2plY3QsXG4gICAgICAgIGxhYmVsXG4gICAgfTtcbn0pKCk7XG5cbmNvbnN0IHJlbW92ZSA9ICgoKSA9PiB7XG5cbiAgICBjb25zdCBwcm9qZWN0ID0gKCkgPT4ge1xuICAgICAgICBwdXNoLnByb2plY3REZWxldGUobW9kYWwucHJvamVjdE5hbWUuZGF0YXNldC52YWx1ZSk7XG4gICAgICAgIHRvZ2dsZS5wcm9qZWN0RWRpdG9yKCk7XG4gICAgICAgIGRpc3BsYXkuaG9tZSgpO1xuICAgICAgICByZWZyZXNoLnByb2plY3RMaXN0KCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGxhYmVsID0gKCkgPT4ge1xuICAgICAgICBwdXNoLmxhYmVsRGVsZXRlKG1vZGFsLmVkaXRMYWJlbE5hbWUuZGF0YXNldC52YWx1ZSk7XG4gICAgICAgIHRvZ2dsZS5sYWJlbEVkaXRvcigpO1xuICAgICAgICBkaXNwbGF5LmhvbWUoKTtcbiAgICAgICAgcmVmcmVzaC5sYWJlbExpc3QoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvamVjdCxcbiAgICAgICAgbGFiZWxcbiAgICB9O1xuXG59KSgpO1xuXG5jb25zdCBzZWxlY3QgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHJlc2V0ID0gKCkgPT4ge1xuICAgICAgICB0YXNrLnNjaGVkdWxlLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWlkXCI+ZXZlbnQ8L3NwYW4+IFNjaGVkdWxlXG4gICAgICAgIGA7XG4gICAgICAgIHRhc2suc2NoZWRDdXN0b21JbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICB0YXNrLnNjaGVkdWxlLmRhdGFzZXQudmFsdWUgPSAnJztcbiAgICAgICAgdGFzay5wcm9qZWN0LmRhdGFzZXQudmFsdWUgPSAnaW5ib3gnO1xuICAgICAgICB0YXNrLnByb2plY3QuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWRcIj5pbmJveDwvc3Bhbj4gSW5ib3hcbiAgICAgICAgYDtcbiAgICAgICAgdGFzay5sYWJlbC5kYXRhc2V0LnZhbHVlID0gJyc7XG4gICAgICAgIHRhc2sucHJpb3JpdHkuZGF0YXNldC52YWx1ZSA9ICdwcmlvcml0eSA0JztcbiAgICB9O1xuXG4gICAgY29uc3Qgc2NoZWR1bGUgPSAoZSkgPT4ge1xuICAgICAgICBpZihlLmN1cnJlbnRUYXJnZXQuaW5uZXJUZXh0LmluY2x1ZGVzKCdUb2RheScpKXtcbiAgICAgICAgICAgIHRhc2suc2NoZWR1bGUuaW5uZXJUZXh0ID0gJ1RvZGF5JztcbiAgICAgICAgICAgIHRhc2suc2NoZWR1bGUuZGF0YXNldC52YWx1ZSA9IGRhdGVTdHJpbmcudG9kYXlTdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIGlmIChlLmN1cnJlbnRUYXJnZXQuaW5uZXJUZXh0LmluY2x1ZGVzKCdUb21vcnJvdycpKXtcbiAgICAgICAgICAgIHRhc2suc2NoZWR1bGUuaW5uZXJUZXh0ID0gJ1RvbW9ycm93JztcbiAgICAgICAgICAgIHRhc2suc2NoZWR1bGUuZGF0YXNldC52YWx1ZSA9IGRhdGVTdHJpbmcudHdtU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZS5jdXJyZW50VGFyZ2V0LmlubmVyVGV4dC5pbmNsdWRlcygnV2VlaycpKXtcbiAgICAgICAgICAgIHRhc2suc2NoZWR1bGUuaW5uZXJUZXh0ID0gJ05leHQgV2Vlayc7XG4gICAgICAgICAgICB0YXNrLnNjaGVkdWxlLmRhdGFzZXQudmFsdWUgPSBkYXRlU3RyaW5nLm5leHRXZWVrU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXNrLnNjaGVkdWxlLmlubmVyVGV4dCA9ICdObyBEYXRlJztcbiAgICAgICAgICAgIHRhc2suc2NoZWR1bGUuZGF0YXNldC52YWx1ZSA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIHRvZ2dsZS50YXNrU2NoZWR1bGVyKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGN1c3RvbVNjaGVkID0gKCkgPT4ge1xuICAgICAgICBpZighdGFzay5zY2hlZEN1c3RvbUlucHV0LnZhbHVlKXtcbiAgICAgICAgICAgIGFsZXJ0KCdEYXRlIHJlcXVpcmVkIScpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgbmV3RGF0ZSA9IG5ldyBEYXRlKHRhc2suc2NoZWRDdXN0b21JbnB1dC52YWx1ZSk7XG4gICAgICAgICAgICBuZXdEYXRlLnNldEhvdXJzKDAsMCwwLDApO1xuXG4gICAgICAgICAgICBsZXQgZGF0ZSA9IG5ld0RhdGUuZ2V0RGF0ZSgpLnRvU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIGlmKGRhdGUubGVuZ3RoID09IDIpe1xuICAgICAgICAgICAgICAgIG5ld0RhdGUgPSBgJHtuZXdEYXRlLmdldEZ1bGxZZWFyKCl9LSR7bmV3RGF0ZS5nZXRNb250aCgpKzF9LSR7bmV3RGF0ZS5nZXREYXRlKCl9YDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV3RGF0ZSA9IGAke25ld0RhdGUuZ2V0RnVsbFllYXIoKX0tJHtuZXdEYXRlLmdldE1vbnRoKCkrMX0tMCR7bmV3RGF0ZS5nZXREYXRlKCl9YDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGFzay5zY2hlZHVsZS5pbm5lclRleHQgPSBuZXdEYXRlO1xuICAgICAgICAgICAgdGFzay5zY2hlZHVsZS5kYXRhc2V0LnZhbHVlID0gbmV3RGF0ZTtcbiAgICAgICAgICAgIHRvZ2dsZS50YXNrU2NoZWR1bGVyKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgaW5ib3ggPSAoZSkgPT4ge1xuICAgICAgICB0YXNrLnByb2plY3QuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWRcIj5pbmJveDwvc3Bhbj4gSW5ib3hcbiAgICAgICAgYDtcbiAgICAgICAgdGFzay5wcm9qZWN0LmRhdGFzZXQudmFsdWUgPSAnaW5ib3gnO1xuICAgICAgICB0b2dnbGUudGFza1Byb2plY3RTZWxlY3RvcigpO1xuICAgIH07XG5cbiAgICBjb25zdCBwcm9qZWN0ID0gKGUpID0+IHtcbiAgICAgICAgdGFzay5wcm9qZWN0LmlubmVyVGV4dCA9IGUuY3VycmVudFRhcmdldC5vdXRlclRleHQuc3Vic3RyaW5nKDcpO1xuICAgICAgICB0YXNrLnByb2plY3QuZGF0YXNldC52YWx1ZSA9IHRhc2sucHJvamVjdC5pbm5lclRleHQ7XG4gICAgICAgIHRvZ2dsZS50YXNrUHJvamVjdFNlbGVjdG9yKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGxhYmVsID0gKGUpID0+IHtcbiAgICAgICAgdGFzay5sYWJlbC5kYXRhc2V0LnZhbHVlID0gZS5jdXJyZW50VGFyZ2V0Lm91dGVyVGV4dC5zdWJzdHJpbmcoNik7XG4gICAgICAgIHRvZ2dsZS50YXNrTGFiZWxlcigpO1xuICAgIH07XG5cbiAgICBjb25zdCBub0xhYmVsID0gKCkgPT4ge1xuICAgICAgICB0YXNrLmxhYmVsLmRhdGFzZXQudmFsdWUgPSAnJztcbiAgICAgICAgdG9nZ2xlLnRhc2tMYWJlbGVyKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHByaW9yaXR5ID0gKGUpID0+IHtcbiAgICAgICAgbGV0IGRhdGEgPSBlLmN1cnJlbnRUYXJnZXQub3V0ZXJUZXh0LnN1YnN0cmluZyg1KS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB0YXNrLnByaW9yaXR5LmRhdGFzZXQudmFsdWUgPSBkYXRhO1xuICAgICAgICB0b2dnbGUudGFza1ByaW9yaXR5U2V0dGVyKCk7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHJlc2V0LFxuICAgICAgICBzY2hlZHVsZSwgY3VzdG9tU2NoZWQsXG4gICAgICAgIGluYm94LCBwcm9qZWN0LCBsYWJlbCwgbm9MYWJlbCwgcHJpb3JpdHlcbiAgICB9O1xufSkoKTtcblxuY29uc3Qgdmlld3BvcnRMaXN0ZW5lciA9ICgpID0+IHtcbiAgICB2TmF2Lm5hdi5oYXNBdHRyaWJ1dGUoJ3N0eWxlJylcbiAgICAgICAgPyB2TmF2Lm5hdi5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJykgOiB2TmF2Lm5hdi5jbGFzc0xpc3QucmVtb3ZlKCdkaXNwbGF5LW5hdicpO1xufTtcblxuY29uc3QgZXZlbnQgPSAoKCkgPT4ge1xuICAgIGhOYXYubWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZS5tZW51KTtcblxuICAgIGhOYXYucGx1cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZS5xdWlja0FkZFRhc2spO1xuICAgIG1vZGFsLnF1aWNrQWRkVGFza0NhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICB0b2dnbGUucXVpY2tBZGRUYXNrKTtcblxuICAgIGhOYXYubm90aWZpY2F0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlLm5vdGlmaWNhdGlvbik7XG4gICAgbW9kYWwubm90aWZSZWFkQWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlLm5vdGlmaWNhdGlvbik7XG5cbiAgICB2TmF2LnByb2plY3RzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlLnByb2plY3RzKTtcbiAgICB2TmF2LnByb2plY3RzLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgY2xpY2tlcik7XG4gICAgdk5hdi5hZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlLmFkZFByb2plY3QpO1xuICAgIG1vZGFsLmNhbmNlbFByb2plY3RDcmVhdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlLmFkZFByb2plY3QpO1xuXG4gICAgdk5hdi5sYWJlbHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGUubGFiZWxzKTtcbiAgICB2TmF2LmxhYmVscy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGNsaWNrZXIpO1xuICAgIHZOYXYuYWRkTGFiZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGUuYWRkTGFiZWwpO1xuICAgIG1vZGFsLmNhbmNlbExhYmVsQ3JlYXRvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZS5hZGRMYWJlbCk7XG5cbiAgICBjb250YWluZXIuYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZS50YXNrQ3JlYXRvcik7XG4gICAgdGFzay5jYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGUudGFza0NyZWF0b3IpO1xuICAgIHRhc2suc2NoZWR1bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGUudGFza1NjaGVkdWxlcik7XG4gICAgdGFzay5wcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlLnRhc2tQcm9qZWN0U2VsZWN0b3IpO1xuICAgIHRhc2subGFiZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGUudGFza0xhYmVsZXIpO1xuICAgIHRhc2sucHJpb3JpdHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGUudGFza1ByaW9yaXR5U2V0dGVyKTtcblxuICAgIHZOYXYuaW5ib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5LnRvZG9saXN0KTtcbiAgICB2TmF2LnRvZGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheS50b2RvbGlzdCk7XG4gICAgaE5hdi5ob21lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheS5ob21lKTtcbiAgICB2TmF2LnVwY29taW5nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheS50b2RvbGlzdCk7XG5cbiAgICBtb2RhbC5xdWlja0FkZFRhc2tTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGQucXVpY2spO1xuICAgIG1vZGFsLnByb2plY3RBZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGQucHJvamVjdCk7XG4gICAgbW9kYWwuYWRkTmV3TGFiZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGQubGFiZWwpO1xuXG4gICAgdGFzay5hZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGQudG9kbyk7XG4gICAgdGFzay5zY2hlZFRvZGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VsZWN0LnNjaGVkdWxlKTtcbiAgICB0YXNrLnNjaGVkVHdtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VsZWN0LnNjaGVkdWxlKTtcbiAgICB0YXNrLnNjaGVkTmV4dFdlZWsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWxlY3Quc2NoZWR1bGUpO1xuICAgIHRhc2suc2NoZWROb0RhdGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWxlY3Quc2NoZWR1bGUpO1xuICAgIHRhc2suc2NoZWRDdXN0b21CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWxlY3QuY3VzdG9tU2NoZWQpO1xuXG4gICAgdGFzay5wcmlvcml0eUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKS5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VsZWN0LnByaW9yaXR5KTtcbiAgICB9KTtcblxuICAgIG1vZGFsLmNhbmNlbFByb2plY3RFZGl0b3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGUucHJvamVjdEVkaXRvcik7XG4gICAgbW9kYWwudXBkYXRlUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHVwZGF0ZS5wcm9qZWN0KTtcbiAgICBtb2RhbC5kZWxldGVQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVtb3ZlLnByb2plY3QpO1xuXG4gICAgbW9kYWwuY2FuY2VsTGFiZWxFZGl0b3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGUubGFiZWxFZGl0b3IpO1xuICAgIG1vZGFsLnVwZGF0ZUxhYmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdXBkYXRlLmxhYmVsKTtcbiAgICBtb2RhbC5kZWxldGVMYWJlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbW92ZS5sYWJlbCk7XG5cbiAgICAvL2ZpeCBkYXRhLmpzIGZpcnN0IGJlZm9yZSBhZGRpbmcgZXZlbnRzIGluIGxhYmVsLCBwcm9qZWN0LCBhbmQgdG9kbyBlZGl0b3JcblxuICAgIHdpbmRvdy5vbmNsaWNrID0gdmlld01hbmFnZXI7XG4gICAgd2luZG93Lm9ucmVzaXplID0gdmlld3BvcnRMaXN0ZW5lcjtcblxuICAgIC8vZXNjIGtleXVwIHRoYXQgY2xvc2VzIG1vZGFscyB3aWxsIGJlIGNvb2xcblxufSkoKTtcblxuY2hhbmdlTWFpbignZHVlRGF0ZScsIGRhdGVTdHJpbmcudG9kYXlTdHJpbmcoKSwgJ3RvZGF5Jyk7XG5leHBvcnQgZGVmYXVsdCBldmVudDsiLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGhOYXYgPSAoKCkgPT4ge1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2QnRuTWVudScpO1xuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2QnRuSG9tZScpO1xuICAgIGNvbnN0IGZvcm1TZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybVNlYXJjaCcpO1xuICAgIGNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYXZJbnB1dFNlYXJjaCcpO1xuICAgIGNvbnN0IHBsdXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2QnRuUXVpY2tBZGQnKTtcbiAgICBjb25zdCBub3RpZmljYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2QnRuTm90aWZpY2F0aW9uJyk7XG4gICAgY29uc3Qgbm90aWZDb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYXZCdG5Ob3RpZmljYXRpb25Db3VudCcpO1xuXG4gICAgcmV0dXJuIHsgXG4gICAgICAgIG1lbnUsIGhvbWUsIFxuICAgICAgICBmb3JtU2VhcmNoLCBzZWFyY2gsIFxuICAgICAgICBwbHVzLCBub3RpZmljYXRpb24sIG5vdGlmQ291bnQgfTtcbn0pKCk7XG5cbmNvbnN0IHZOYXYgPSAoKCkgPT4ge1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYXZJbmZvQ29tcCcpO1xuICAgIGNvbnN0IGluYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NibmF2SW5ib3hCdG4nKTtcbiAgICBjb25zdCBpbmJveENvdW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2JuYXZJbmJveEJ0biA+IHNhbXAnKTtcbiAgICBjb25zdCB0b2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzYm5hdlRvZGF5QnRuJyk7XG4gICAgY29uc3QgdG9kYXlDb3VudGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NibmF2VG9kYXlCdG4gPiBzYW1wJyk7XG4gICAgY29uc3QgdXBjb21pbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2JuYXZVcGNvbUJ0bicpO1xuICAgIGNvbnN0IHVwY29taW5nQ291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzYm5hdlVwY29tQnRuID4gc2FtcCcpO1xuICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NibmF2UHJvamVjdHNEaXYnKTtcbiAgICBjb25zdCBwcm9qZWN0Q2hldnJvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzYm5hdlByb2plY3RzRGl2ID4gc3BhbicpO1xuICAgIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2JuYXZQcm9qZWN0QWRkQnRuJyk7XG4gICAgY29uc3QgcHJvamVjdExpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdExpc3RDb250YWluZXInKTtcbiAgICBjb25zdCBsYWJlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2JuYXZMYWJlbHNEaXYnKTtcbiAgICBjb25zdCBsYWJlbENoZXZyb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2JuYXZMYWJlbHNEaXYgPiBzcGFuJyk7XG4gICAgY29uc3QgYWRkTGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2JuYXZMYWJlbEFkZEJ0bicpO1xuICAgIGNvbnN0IGxhYmVsTGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsYWJlbExpc3RDb250YWluZXInKTtcblxuICAgIHJldHVybiB7IFxuICAgICAgICBuYXYsXG4gICAgICAgIGluYm94LCBpbmJveENvdW50ZXIsXG4gICAgICAgIHRvZGF5LCB0b2RheUNvdW50ZXIsXG4gICAgICAgIHVwY29taW5nLCB1cGNvbWluZ0NvdW50ZXIsXG4gICAgICAgIHByb2plY3RzLCBwcm9qZWN0Q2hldnJvbiwgYWRkUHJvamVjdCwgcHJvamVjdExpc3RDb250YWluZXIsXG4gICAgICAgIGxhYmVscywgbGFiZWxDaGV2cm9uLCBhZGRMYWJlbCwgbGFiZWxMaXN0Q29udGFpbmVyXG4gICAgfTtcbn0pKCk7XG5cbmNvbnN0IGNvbnRhaW5lciA9ICgoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhaW5lcicpO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoZWFkZXInKTtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICAgIGNvbnN0IGFkZFRhc2tCdG5EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkVGFza0J0bkRpdicpO1xuICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkVGFza0J0bicpO1xuICAgIGNvbnN0IGVtcHR5U3RhdGVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW1wdHlTdGF0ZURpdicpO1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb290ZXInKTtcbiAgICBjb25zdCBoZWxwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hlbHAnKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGRpdixcbiAgICAgICAgaGVhZGVyLFxuICAgICAgICBtYWluLFxuICAgICAgICBhZGRUYXNrQnRuRGl2LCBhZGRUYXNrQnRuLFxuICAgICAgICBlbXB0eVN0YXRlRGl2LCBmb290ZXIsIGhlbHBcbiAgICB9O1xufSkoKTtcblxuY29uc3QgdGFzayA9ICgoKSA9PiB7XG4gICAgY29uc3QgYWRkRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFRhc2tEaXYnKTtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRUYXNrSW5wdXQnKTtcbiAgICBjb25zdCBzY2hlZHVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWxlY3RTY2hlZHVsZUJ0bicpO1xuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VsZWN0UHJvamVjdEJ0bicpO1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlbGVjdExhYmVsQnRuJyk7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VsZWN0UHJpb3JpdHlCdG4nKTtcbiAgICBjb25zdCBhZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkVGFza01haW5CdG4nKTtcbiAgICBjb25zdCBjYW5jZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkVGFza0NhbmNlbEJ0bicpO1xuXG4gICAgY29uc3Qgc2NoZWRUb2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzY2hlZHVsZXJUb2RheUJ0bicpO1xuICAgIGNvbnN0IHNwYW5Ub2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzY2hlZHVsZXJUb2RheVNwYW4nKTtcbiAgICBjb25zdCBzY2hlZFR3bSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzY2hlZHVsZXJUd21CdG4nKTtcbiAgICBjb25zdCBzcGFuVHdtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NjaGVkdWxlclR3bVNwYW4nKTtcbiAgICBjb25zdCBzY2hlZE5leHRXZWVrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NjaGVkdWxlck5leHRXZWVrQnRuJyk7XG4gICAgY29uc3Qgc3Bhbk5leHRXZWVrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NjaGVkdWxlck5leHRXZWVrU3BhbicpO1xuICAgIGNvbnN0IHNjaGVkQ3VzdG9tSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2NoZWR1bGVyQ3VzdG9tSW5wdXQnKTtcbiAgICBjb25zdCBzY2hlZEN1c3RvbURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzY2hlZHVsZXJDdXN0b21EaXYnKTtcbiAgICBjb25zdCBzY2hlZEN1c3RvbUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzY2hlZHVsZXJDdXN0b21CdG4nKTtcbiAgICBjb25zdCBzY2hlZE5vRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzY2hlZHVsZXJOb0RhdGVCdG4nKTtcbiAgICBjb25zdCBwcm9qZWN0U2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdFNlbGVjdG9yJyk7XG4gICAgY29uc3QgbGFiZWxDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGFiZWxDb250YWluZXInKTtcbiAgICBjb25zdCBwcmlvcml0eUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eUJ0bkNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHByaW9yaXR5T25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5T25lJyk7XG4gICAgY29uc3QgcHJpb3JpdHlUd28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHlUd28nKTtcbiAgICBjb25zdCBwcmlvcml0eVRocmVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5VGhyZWUnKTtcbiAgICBjb25zdCBwcmlvcml0eUZvdXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHlEZWZhdWx0Jyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBpbnB1dCxcbiAgICAgICAgc2NoZWR1bGUsIHByb2plY3QsXG4gICAgICAgIGxhYmVsLCBwcmlvcml0eSxcbiAgICAgICAgYWRkRGl2LCBhZGQsIGNhbmNlbCxcbiAgICAgICAgc2NoZWRUb2RheSwgc3BhblRvZGF5LFxuICAgICAgICBzY2hlZFR3bSwgc3BhblR3bSxcbiAgICAgICAgc2NoZWROZXh0V2Vlaywgc3Bhbk5leHRXZWVrLFxuICAgICAgICBzY2hlZEN1c3RvbUlucHV0LCBzY2hlZEN1c3RvbURpdiwgc2NoZWRDdXN0b21CdG4sXG4gICAgICAgIHNjaGVkTm9EYXRlLFxuICAgICAgICBwcm9qZWN0U2VsZWN0b3IsXG4gICAgICAgIGxhYmVsQ29udGFpbmVyLFxuICAgICAgICBwcmlvcml0eUNvbnRhaW5lciwgcHJpb3JpdHlPbmUsIHByaW9yaXR5VHdvLCBwcmlvcml0eVRocmVlLCBwcmlvcml0eUZvdXJcbiAgICB9XG59KSgpO1xuXG5jb25zdCBtb2RhbCA9ICgoKSA9PiB7XG4gICAgY29uc3QgcXVpY2tBZGRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3F1aWNrQWRkVG9kbycpO1xuICAgIGNvbnN0IHF1aWNrQWRkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3F1aWNrQWRkQ29udGFpbmVyJyk7XG4gICAgY29uc3QgcXVpY2tBZGRUYXNrSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcXVpY2tBZGRJbnB1dCcpO1xuICAgIGNvbnN0IHF1aWNrQWRkVGFza1N1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNxdWlja0FkZFN1Ym1pdCcpO1xuICAgIGNvbnN0IHF1aWNrQWRkVGFza0NhbmNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNxdWlja0FkZENhbmNlbCcpO1xuICAgIGNvbnN0IG5vdGlmaWNhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNub3RpZmljYXRpb25zJyk7XG4gICAgY29uc3Qgbm90aWZDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbm90aWZDb250YWluZXInKTtcbiAgICBjb25zdCBub3RpZlJlYWRBbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbm90aWZSZWFkQWxsQnRuJyk7XG4gICAgY29uc3Qgbm90aWZPdXRwdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdub3RpZk91dHB1dCcpO1xuICAgIGNvbnN0IHByb2plY3RDcmVhdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RDcmVhdG9yJyk7XG4gICAgY29uc3QgbmV3UHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3UHJvamVjdE5hbWUnKTtcbiAgICBjb25zdCBwcm9qZWN0QWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RBZGRCdXR0b24nKTtcbiAgICBjb25zdCBjYW5jZWxQcm9qZWN0Q3JlYXRvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0Q2FuY2VsQnV0dG9uJyk7XG4gICAgY29uc3QgcHJvamVjdEVkaXRvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0RWRpdG9yJyk7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdE5hbWUnKTtcbiAgICBjb25zdCB1cGRhdGVkUHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXBkYXRlZFByb2plY3ROYW1lJyk7XG4gICAgY29uc3QgdXBkYXRlUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1cGRhdGVQcm9qZWN0QnRuJyk7XG4gICAgY29uc3QgY2FuY2VsUHJvamVjdEVkaXRvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW5jZWxQcm9qZWN0QnRuJyk7XG4gICAgY29uc3QgZGVsZXRlUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZWxldGVQcm9qZWN0QnRuJyk7XG4gICAgY29uc3QgbGFiZWxDcmVhdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xhYmVsQ3JlYXRvcicpO1xuICAgIGNvbnN0IGFkZExhYmVsSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkTGFiZWxJbnB1dCcpO1xuICAgIGNvbnN0IGFkZE5ld0xhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZE5ld0xhYmVsQnRuJyk7XG4gICAgY29uc3QgY2FuY2VsTGFiZWxDcmVhdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbmNlbEFkZExhYmVsQnRuJyk7XG4gICAgY29uc3QgbGFiZWxFZGl0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGFiZWxFZGl0b3InKTtcbiAgICBjb25zdCBlZGl0TGFiZWxOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXRMYWJlbE5hbWUnKTtcbiAgICBjb25zdCB1cGRhdGVkTGFiZWxOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VwZGF0ZWRMYWJlbE5hbWUnKTtcbiAgICBjb25zdCB1cGRhdGVMYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1cGRhdGVMYWJlbEJ0bicpO1xuICAgIGNvbnN0IGNhbmNlbExhYmVsRWRpdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbmNlbFVwZGF0ZUJ0bicpO1xuICAgIGNvbnN0IGRlbGV0ZUxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RlbGV0ZUxhYmVsQnRuJyk7XG4gICAgY29uc3QgdGFza0VkaXRvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrRWRpdG9yJyk7XG4gICAgY29uc3QgdXBkYXRlZFRhc2tOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VwZGF0ZWRUYXNrTmFtZScpO1xuICAgIGNvbnN0IHVwZGF0ZWRUYXNrTm90ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1cGRhdGVkVGFza05vdGUnKTtcbiAgICBjb25zdCB1cGRhdGVkVGFza1NjaGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VwZGF0ZWRUYXNrU2NoZWR1bGUnKTtcbiAgICBjb25zdCB1cGRhdGVkVGFza1Byb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXBkYXRlZFRhc2tQcm9qZWN0Jyk7XG4gICAgY29uc3QgdXBkYXRlZFRhc2tMYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1cGRhdGVkVGFza0xhYmVsJyk7XG4gICAgY29uc3QgdXBkYXRlZFRhc2tQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1cGRhdGVkVGFza1ByaW9yaXR5Jyk7XG4gICAgY29uc3QgdXBkYXRlVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1cGRhdGVUb2RvJyk7XG4gICAgY29uc3QgY2FuY2VsVGFza0VkaXRvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW5jZWxVcGRhdGVUb2RvJyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBxdWlja0FkZFRhc2ssIHF1aWNrQWRkQ29udGFpbmVyLCBxdWlja0FkZFRhc2tJbnB1dCwgcXVpY2tBZGRUYXNrU3VibWl0LCBxdWlja0FkZFRhc2tDYW5jZWwsXG4gICAgICAgIG5vdGlmaWNhdGlvbiwgbm90aWZDb250YWluZXIsIG5vdGlmUmVhZEFsbCwgbm90aWZPdXRwdXQsXG4gICAgICAgIHByb2plY3RDcmVhdG9yLCBuZXdQcm9qZWN0TmFtZSwgcHJvamVjdEFkZCwgY2FuY2VsUHJvamVjdENyZWF0b3IsXG4gICAgICAgIHByb2plY3RFZGl0b3IsIHByb2plY3ROYW1lLCB1cGRhdGVkUHJvamVjdE5hbWUsIHVwZGF0ZVByb2plY3QsXG4gICAgICAgICAgICBjYW5jZWxQcm9qZWN0RWRpdG9yLCBkZWxldGVQcm9qZWN0LFxuICAgICAgICBsYWJlbENyZWF0b3IsIGFkZExhYmVsSW5wdXQsIGFkZE5ld0xhYmVsLCBjYW5jZWxMYWJlbENyZWF0b3IsXG4gICAgICAgIGxhYmVsRWRpdG9yLCBlZGl0TGFiZWxOYW1lLCB1cGRhdGVkTGFiZWxOYW1lLCB1cGRhdGVMYWJlbCxcbiAgICAgICAgICAgIGNhbmNlbExhYmVsRWRpdG9yLCBkZWxldGVMYWJlbCxcbiAgICAgICAgdGFza0VkaXRvciwgdXBkYXRlZFRhc2tOYW1lLCB1cGRhdGVkVGFza05vdGUsIHVwZGF0ZWRUYXNrU2NoZWQsIHVwZGF0ZWRUYXNrUHJvamVjdCxcbiAgICAgICAgICAgIHVwZGF0ZWRUYXNrTGFiZWwsIHVwZGF0ZWRUYXNrUHJpb3JpdHksIHVwZGF0ZVRhc2ssIGNhbmNlbFRhc2tFZGl0b3JcbiAgICB9XG59KSgpO1xuXG5leHBvcnQgeyBcbiAgICBoTmF2LFxuICAgIHZOYXYsXG4gICAgY29udGFpbmVyLFxuICAgIHRhc2ssXG4gICAgbW9kYWxcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBjcmVhdGVBcHAgZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHRlc3QgZnJvbSAnLi9kYXRhLmpzJztcbmltcG9ydCB7IGhOYXYsIHZOYXYsIGNvbnRhaW5lciwgdGFzaywgbW9kYWwgfSBmcm9tICcuL3NlbGVjdG9yLmpzJztcbmltcG9ydCBldmVudCBmcm9tICcuL2V2ZW50LmpzJztcblxuJ3VzZSBzdHJpY3QnO1xuXG4vLyB2TmF2LmluYm94Lm9uY2xpY2sgPSBmdW5jdGlvbigpe1xuLy8gICAgIGNvbnNvbGUubG9nKDEpXG4vLyB9XG5cbi8vIGhOYXYuZm9ybVNlYXJjaC5vbnN1Ym1pdCA9IGZ1bmN0aW9uKGUpe1xuLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcbi8vICAgICBoTmF2LnNlYXJjaC5ibHVyKCk7XG4vLyAgICAgY29uc29sZS5sb2coMik7XG4vLyB9XG4iXSwic291cmNlUm9vdCI6IiJ9