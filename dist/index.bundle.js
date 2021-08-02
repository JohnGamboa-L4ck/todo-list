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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --light92: hsl(0, 0%, 92%);\n    --light88: hsl(0, 0%, 88%);\n    --dark: hsl(0, 0%, 12%);\n    --malibu: hsl(192, 93%, 72%);\n    --auburn: hsl(0, 75%, 65%);\n    --mariner: hsl(216, 75%, 51%);\n    --laurel: hsl(120, 100%, 25%);\n    --purple: hsl(264, 61%, 47%);\n    --sun: hsl(34, 93%, 48%);\n    --transparent1: rgba(0,0,0,.1);\n    --transparent2: rgba(0,0,0,.2);\n\n    --background: var(--light92);\n    --foreground: var(--malibu);\n}\n\n*, *:before, *:after {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;  \n}\n\nhtml,\nbody {\n    overflow-x: hidden;\n}\n\nbody {\n    min-height: 100vh;\n    background-color: var(--background);\n    font-family:sans-serif;\n    color: var(--dark);\n}\n\nbutton,\n.search-input {\n    outline: none;\n    border: none;\n    border-radius: 3px;\n    font-family:sans-serif;\n}\n\nbutton {\n    padding: .125rem;\n    color: var(--dark);\n    background-color: transparent;\n}\n\nbutton,\n.ic-div {\n    cursor: pointer;\n}\n\nspan.mid {\n    vertical-align: middle;\n}\n\nspan,\nh1 {\n    user-select: none;\n}\n\n.app {\n    display: flex;\n    flex-direction: column;\n    width: 100vw;\n    height: 100vh;\n}\n\n.nav-comp ,\n.nc-left,\n.search-div,\n.nc-right {\n    display: inline-flex;\n}\n\n.nav-comp {\n    justify-content: space-between;\n    width: 100%;\n    padding: .5rem 3rem .5rem 3rem;\n    background-color: var(--foreground);\n}\n\n.nc-left > * {\n    margin: 0 .25rem 0 0;\n}\n\n.nc-right > * {\n    margin: 0 0 0 .25rem;\n}\n\n.nc-right button:first-child {\n    margin: 0;\n}\n\n.search-div {\n    height: 100%;\n    background-color: var(--foreground);\n}\n\n.search-div > span:first-child {\n    align-self: center;\n    cursor: text;\n    margin: .1rem;\n    font-size: 1.6rem;\n    z-index: 2;\n}\n\n.search-div button {\n    margin: .2rem 0 .2rem -1.5rem;\n    height: 20px;\n    width: 20px;\n    align-self: center;\n    display: none;\n}\n\n.search-div button:hover,\n.search-div button:focus-visible {\n    color: var(--auburn);\n}\n\n.search-input {\n    padding: 0 1.6rem 0 1.8rem;\n    margin-left: -1.9rem;\n    background-color: var(--transparent1);\n}\n\n.search-input::-webkit-search-cancel-button {\n    -webkit-appearance: none;\n}\n\n.search-input:not(:placeholder-shown) + button {\n    display: block;\n}\n\n.search-div:focus-within .search-input,\n.search-div:hover .search-input,\n.search-input:not(:placeholder-shown){\n    background-color: var(--light92);\n}\n\n.search-div button span {\n    font-size: 1rem;\n}\n\n.app-body {\n    display: flex;\n    flex: 1;\n    max-height: calc(100% - 46.59px);\n    overflow-y: hidden;\n}\n\n.wrapper {\n    height: 100%;\n    width: 100%;\n    display: flex;\n}\n\n.info-comp {\n    display: flex;\n    flex-direction: column;\n    padding: 2rem .25rem 0 2.8rem;\n    background-color: var(--light88);\n    overflow-y: auto;\n}\n\n.info-comp > * {\n    text-align: left;\n    font-size: .9rem;\n    width: 294px;\n    padding: 5px;\n}\n\n.info-comp > * > samp {\n    float: right;\n    opacity: .5;\n    margin: 4px 1rem 4px 0;\n}\n\n.ic-div {\n    margin: .25rem 0 0 0;\n}\n\n.info-comp > div:first-of-type{\n    margin: 1rem 0 0 0;\n}\n\n.ic-span {\n    margin: 0 .25rem 0 0;\n}\n\n.info-comp > button:first-child span {\n    color: var(--mariner);\n}\n\n.info-comp > button:nth-child(2) span {\n    color: var(--laurel);\n}\n\n.info-comp > button:nth-child(3) span {\n    color: var(--purple);\n}\n\n.opa {\n    opacity: .5;\n}\n\n.ic-add-btn {\n    float: right;\n    margin: 0px .5rem 0 0;\n    padding: 0;\n    display: none;\n}\n\n.ic-add-btn:hover + strong,\n.ic-add-btn:focus-visible + strong {\n    text-decoration: underline;\n    text-underline-offset: 30%;\n}\n\n.info-comp:focus-within .ic-add-btn,\n.info-comp:hover .ic-add-btn{\n    display: inherit;\n}\n\n.ic-div > div {\n    display: none;\n}\n\n.ic-div > div.show {\n    display: flex;\n    flex-direction: column;\n}\n\n.ic-project > span.rotate,\n.ic-label > span.rotate {\n    transform: rotate(90deg);\n}\n\n\n.show {\n    margin: .75rem 0 0 0;\n}\n\n.show > div {\n    text-align: left;\n    display: flex;\n    padding: .5rem .5rem .5rem .5rem;\n    height: 34px;\n    font-size: .9rem;\n    align-items: center;\n    border-radius: 3px;\n}\n\nspan.unique {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    align-self: center;\n    margin-right: .2rem;\n}\n\n.show button {\n    padding: 0;\n    visibility: hidden;\n}\n\n.show > div:hover,\n.show > div:focus-visible {\n    background-color: var(--transparent2);\n}\n\n.show > div:hover button,\n.show > div:focus-visible button,\n.show > div:focus-within button{\n    visibility: visible;\n    margin-left: auto;\n}\n\n.show button:hover,\n.show button:focus-visible {\n    background-color: transparent!important;\n}\n\n.bullet {\n    min-width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    margin: 0 .7rem 0 .5rem;\n    background-color: var(--transparent2);\n}\n\n.tag {\n    transform: scale(.8);\n    margin: 0 .2rem 0 .2rem;\n    color: var(--transparent2);\n}\n\n.container {\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    overflow-y: auto;\n    padding: 0 2rem 0 2rem;\n\n}\n\n.container > * {\n    max-width: 800px;\n    width: 100%;\n}\n\n.container > footer {\n    margin-top: auto;\n}\n\n.container > header {\n    padding: 2rem 0 1rem 0;\n    position: sticky;\n    top: 0;\n    background-color: var(--light92);\n    z-index: 3;\n}\n\nh1 {\n    font-size: 1.3rem;\n}\n\n.todo {\n    display: flex;\n    padding: 2px 0;\n    margin: .5rem 0 .5rem 0;\n    justify-content: flex-start;\n    flex-direction: row;\n    border-bottom: 1px solid var(--transparent1);\n}\n\n.todo,\n.todo * {\n    cursor: pointer;\n}\n\n.checkbox-btn { \n    height: 18px;\n    max-width: 18px;\n    width: 100%;\n    margin: .27rem .7rem 0 0;\n    z-index: 2;\n    position: relative;\n}\n\n.checkbox-btn.prio1 {\n    border: 2px solid var(--auburn);\n}\n\n.checkbox-btn.prio2 {\n    border: 2px solid var(--sun);\n}\n\n.checkbox-btn.prio3 {\n    border: 2px solid var(--mariner);\n}\n\n.checkbox-btn.prio4 {\n    border: 2px solid var(--transparent2);\n}\n\n.checkbox-btn:hover,\n.checkbox-btn:focus-visible {\n    border-color: transparent;\n    background-color: var(--transparent1);\n}\n\n.checkbox-btn + span {\n    padding: 0;\n    line-height: 1rem;\n    font-size: 2rem;\n    position: relative;\n    color: var(--transparent2);\n    visibility: hidden;\n    float: right;\n    margin: -.9rem 0 0 -1rem;    \n}\n\n.checkbox-btn:hover + span,\n.checkbox-btn:focus-visible + span {\n    visibility: visible;\n}\n\n.checkbox-btn:active + span{\n    color: var(--laurel);\n}\n\n.todo-text {\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n}\n\n.todo-text > label {\n    line-height: 1.4rem;\n}\n\n.todo-text-note {\n    text-indent: 1rem;\n    font-size: .9rem;\n    margin: 0 0 .25rem 0;\n}\n\n.todo-text-note,\n.todo-text-note > span,\n.todo-text small {\n    color: gray;\n}\n\n.todo-text-note > span,\nem,\nem > span {\n    font-size: .9rem!important;\n}\n\n.todo-text small:hover,\n.todo-text small:focus-visible {\n    text-decoration: underline;\n}\n\nem {\n    width: 100%;\n}\n\n.sched-due {\n    color: var(--auburn);\n}\n\n.sched-today {\n    color: var(--laurel);\n}\n\n.sched-upcom {\n    color: var(--purple);\n}\n\n.todo-tools-container {\n    display: flex;\n    justify-content: flex-end;\n    align-items: flex-end;\n    margin: -20px 0 0 0;\n    visibility: hidden;\n}\n\n.todo-tools-container * {\n    color: gray;\n}\n\n.tool-span {\n    font-size: 1.2rem;\n}\n\n.todo:hover .todo-tools-container,\n.todo:focus-within .todo-tools-container {\n    visibility: visible;\n}\n\nbutton:hover,\nbutton:focus-visible {\n    background-color: var(--transparent2);\n}\n\nbutton:focus-visible {\n    outline: auto;\n}\n\n.add-task-btn {\n    text-align: left;\n    color: gray;\n}\n\n.add-task-btn * {\n    padding: .1rem;\n}\n\n.add-task-btn span {\n    border-radius: 50%;\n    padding: 0;\n    color: var(--auburn);\n}\n\n.add-task-btn:hover,\n.add-task-btn:focus-visible,\n.add-task-btn span {\n    background-color: transparent;\n}\n\n.add-task-btn:hover span,\n.add-task-btn:focus-visible span {\n    color: var(--mariner);\n}\n\n.empty-state-div {\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    justify-content: center;\n    align-items: center;\n}\n\n.empty-state-div img {\n    max-width: 180px;\n    \n    height: auto;\n}\n\n.empty-state-div h4 {\n    font-weight: normal;\n    color: gray;\n}\n\n.empty-state-div *:nth-child(n+2) {\n    margin: .25rem 0 0 0;\n}\n\n.empty-state-div *:nth-child(n+2),\n.container footer p {\n    text-align: center;\n}\n\n.empty-state-div p {\n    font-size: .9rem;\n    color: darkgray;\n}\n\n.container footer {\n    color: var(--auburn);\n    font-size: .9rem!important;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: .25rem 0 .75rem 0;\n}\n\n.container footer span {\n    font-size: 1.25rem!important;\n}\n\n.container footer p {\n    text-decoration: underline;\n    cursor: pointer;\n}\n\n.container:not(.empty) .empty-state-div,\n.container:not(.empty) footer {\n    display: none;\n}\n\n.add-task-div {\n    border: 1px solid var(--transparent2);\n    border-radius: 3px;\n    padding: 0 .5rem .5rem .5rem;\n    height: 68.48px;\n}\n\n.add-task-div > * {\n    margin-top: .5rem;\n}\n\n.add-task-div input,\n.quick-add-todo input {\n    width: 100%;\n    outline: none;\n    border: none;\n    font-size: .9rem;\n    background-color: var(--light92);\n}\n\n.add-task-btns-container {\n    display: flex;\n    justify-content: space-between;\n}\n\n.add-task-btns-container div > button {\n    border: 1px solid var(--transparent2);\n    padding: .25rem;\n}\n\n.add-task-btns-container button > span {\n    font-size: .9rem!important;\n}\n\n.add-task-btns-container > button:nth-child(2) span {\n    color: var(--mariner);\n}\n\n.scheduler,\n.carrier {\n    max-width: 210px;\n    width: 100%;    \n}\n\n.scheduler,\n.carrier,\n.labeler,\n.prio-setter {\n    background-color: var(--light92);\n    border-radius: 3px;\n    z-index: 2;\n    position: relative;\n    margin: 0 0 0 0;\n    box-shadow: 0 1px 8px 0 rgb(0 0 0 / 8%),\n        0 0 1px 0 rgb(0 0 0 / 30%);\n    display: none;\n}\n\n.scheduler > *,\n.carrier > * {\n    width: 100%;\n    text-align: left;\n    padding: .5rem .5rem .5rem .5rem;\n}\n\n.sched {\n    display: flex;\n    justify-content: space-between;\n}\n\n.sched span:nth-child(2) {\n    text-align: right;\n    color: gray;\n}\n\n.scheduler input[type=\"date\"]::-webkit-calendar-picker-indicator {\n    opacity: .4;\n    cursor: pointer;\n}\n\n.scheduler input[type=\"date\"]::-webkit-calendar-picker-indicator:hover {\n    opacity: 1;\n}\n\n.scheduler .sched-custom {\n    display: flex;\n}\n\n.scheduler .sched-custom button {\n    border: 1px solid var(--transparent1);\n}\n\n.scheduler .sched-custom button > span,\n.carrier span,\n.labeler span,\n.prio-setter span {\n    font-size: .9rem!important;\n}\n\n.prio-setter button:first-child span {\n    color: var(--auburn);\n}\n\n.prio-setter button:nth-child(2) span {\n    color: var(--sun);\n}\n\n.prio-setter button:nth-child(3) span {\n    color: var(--mariner);\n}\n\n.prio-setter button:nth-child(4) span {\n    color: gray;\n}\n\n.carrier {\n    margin: 0 0 0 -.7rem;\n    max-width: 160px;\n    width: 100%;\n}\n\n.carrier button,\n.labeler button,\n.prio-setter button {\n    display: flex;\n    align-items: center;\n}\n\n.carrier u,\n.labeler u,\n.prio-setter u {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    margin: 0 0 0 .25rem;\n}\n\n.labeler,\n.prio-setter {\n    background-color: transparent;\n    border: none;\n    box-shadow: none;\n}\n\n.labeler div,\n.prio-setter div {\n    max-width: 160px;\n    width: 100%; \n    display: flex;\n    flex-direction: column;\n    margin: 0 1.8rem 0 auto;\n    background-color: var(--light92);\n    box-shadow: 0 1px 8px 0 rgb(0 0 0 / 8%),\n        0 0 1px 0 rgb(0 0 0 / 30%);\n    border-radius: 3px;\n}\n\n.prio-setter div {\n    margin: 0 0 0 auto;\n    max-width: 88px;\n}\n\n.prio-setter u {\n    text-decoration: none;\n}\n\n.labeler button,\n.prio-setter button {\n    text-align: left;\n    padding: .5rem;\n}\n\n.scheduler .sched-custom button:hover > span,\n.scheduler .sched-custom button:focus-visible > span {\n    color: var(--laurel);\n}\n\n.add-task-div.display-scheduler .scheduler {\n    display: inherit;\n}\n\n.add-task-div.display-carrier .carrier,\n.add-task-div.display-labeler .labeler,\n.add-task-div.display-prio-setter .prio-setter {\n    display: block;\n}\n\n.add-task-div .selected,\n.add-task-div .active {\n    background-color: var(--transparent1);\n}\n\n.add-task-main-btns-container {\n    padding: .5rem 0 .5rem 0;\n}\n\n.add-task-main-btns-container button {\n    padding: .25rem;\n}\n\n.add-task-main-btns-container button:first-child {\n    background-color: var(--malibu);\n    border: 1px solid var(--transparent2);\n}\n\n.container.add-triggered .add-task-btn-div {\n    display: none;\n}\n\n.container:not(.add-triggered) .add-task-div,\n.container:not(.add-triggered) .add-task-main-btns-container {\n    display: none;\n}\n\n.quick-add-todo,\n.project-creator,\n.label-creator,\n.todo-editor,\n.project-editor,\n.label-editor {\n    display: none;\n    position: absolute;\n    place-items: center;\n    height: 100%;\n    width: 100%;\n    background-color: var(--transparent2);\n    z-index: 999;\n}\n\n.quick-add-todo > *,\n.quick-add-todo input {\n    width: 100%;\n}\n\n.quick-add-todo > div {\n    background-color: var(--light92);\n    max-width: 480px;\n    width: 100%;\n    border-radius: 3px;\n    padding: .5rem .5rem .5rem .5rem;\n}\n\n.quick-add-todo > div > *:not(:first-child) {\n    margin: .5rem 0 0 0;\n}\n\n.quick-add-todo button {\n    padding: .25rem;\n}\n\n.quick-add-todo button:first-child {\n    background-color: var(--mariner);\n}\n\n.quick-add-todo button:hover,\n.quick-add-todo button:focus-visible {\n    color: var(--light92);\n}\n\n.quick-add-todo.on {\n    display: grid;\n}\n\n.notifications {\n    display: none;\n    position: absolute;\n    inset: 0;\n    background-color: transparent;\n    z-index: 999;\n}\n\n.notif-container {\n    display: flex;\n    flex-direction: column;\n    background-color: var(--light92);\n    margin: 40px 0 auto auto;\n    padding: .5rem;\n    max-width: 420px;\n    width: 100%;\n    max-height: 320px;\n    overflow-x: hidden;\n    overflow-y: auto;\n    box-shadow: 0 1px 8px 0 rgb(0 0 0 / 8%),\n        0 0 1px 0 rgb(0 0 0 / 30%);\n    border-radius: 3px;\n}\n\n.notif-container nav {\n    display: flex;\n    align-items: center;\n    padding: 0 0 .25rem 0;\n    border-bottom: 1px solid var(--transparent2);\n}\n\n.notif-container nav > * {\n    font-size: .9rem;\n    cursor: pointer;\n}\n\n.notif-container button:first-of-type{\n    margin: 0 0 0 .5rem;\n}\n\n.nav-btn-notification small {\n    position: absolute; \n    color: var(--auburn);\n    margin-left: -.85rem; \n    background-color: var(--malibu);\n    padding: 0 1px;\n}\n\n.nav-btn-notification:hover small,\n.nav-btn-notification:focus-visible small {\n    background-color: transparent!important;\n    color: var(--light92)!important;\n    font-weight: bold;\n}\n\n.read-all-btn {\n    margin: 0 0 0 auto!important;\n}\n\n.read-all-btn span {\n    font-size: 1.2rem;\n}\n\n.notif-output {\n    margin: 0 .25rem;\n    overflow-y: auto;\n    /* overflow-x: hidden; */\n}\n\n.notif-output > * {\n    margin: .25rem 0 0 0;\n    border-bottom: 1px solid var(--transparent1);\n    padding: 0 0 .25rem 0;\n    \n}\n\n.notif {\n    display: flex;\n    flex-direction: column;\n}\n\n.notif > *,\n.notif-extra button span{\n    font-size: .9rem;  \n}\n\n.notif > span {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.notif-extra {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.notif small {\n    color: var(--auburn);\n}\n\n.notifications.on {\n    display: flex;\n\n}\n\n.app.search .add-task-btn-div{\n    display: none;\n}\n\n.project-creator > div,\n.label-creator > div,\n.todo-editor > div,\n.project-editor > div,\n.label-editor > div {\n    background-color: var(--light92);\n    max-width: 420px;\n    width: 100%;\n    border-radius: 3px;\n}\n\n.project-creator > div > *,\n.label-creator > div > *,\n.todo-editor > div > *,\n.project-editor > div > *,\n.label-editor > div > * {\n    padding: .5rem;\n    margin: 0 0 .25rem 0;\n}\n\n.project-creator > div > *:first-child, \n.project-creator > div > *:nth-child(2),\n.label-creator > div > *:first-child, \n.label-creator > div > *:nth-child(2),\n.todo-editor > div > *:first-child, \n.todo-editor > div > *:nth-child(2),\n.project-editor > div > *:first-child,\n.project-editor > div > *:nth-child(2),\n.label-editor > div > *:first-child,\n.label-editor > div > *:nth-child(2) {\n    border-bottom: 1px solid var(--transparent1);\n}\n\n.project-creator > div,\n.project-input,\n.label-creator > div,\n.label-input,\n.todo-editor > div,\n.todo-editor-input,\n.project-editor > div,\n.project-editor-input,\n.label-editor > div,\n.label-editor-input {\n    display: flex;\n    flex-direction: column;\n}\n\n.project-input > *,\n.label-input > *,\n.todo-editor-input > *,\n.project-editor-input > *,\n.label-editor-input > * {\n    margin: 0 0 .25rem 0;\n}\n\n.project-input input,\n.label-input input,\n.todo-editor-input input,\n.todo-editor-input select,\n.project-editor-input input,\n.label-editor-input input {\n    border: none;\n    outline: none;\n    border-radius: 2px;\n    padding: .25rem;\n}\n\n.todo-editor-input {\n    overflow-y: auto;\n}\n\n.todo-editor-input {\n    padding-top: 0!important;\n}\n\n.todo-editor-input label {\n    margin: .25rem 0 .1rem 0;\n}\n\n.project-buttons,\n.label-buttons,\n.todo-editor-buttons,\n.update-project-buttons,\n.update-label-buttons {\n    display: flex;\n    justify-content: flex-end;    \n    margin-bottom: 0!important;\n}\n\n.project-creator button,\n.label-creator button,\n.todo-editor button,\n.project-editor button,\n.label-editor button {\n    padding: .25rem;\n    margin: 0 0 0 .25rem;\n    background-color: var(--transparent1);\n}\n\n.project-creator button:first-child,\n.label-creator button:first-child,\n.todo-editor button:first-child,\n.project-editor button:first-child,\n.label-editor button:first-child {\n    background-color: var(--mariner);\n}\n\n.update-project-buttons button:nth-child(3),\n.update-label-buttons button:nth-child(3) {\n    background-color: var(--auburn);\n}\n\n.project-creator.on,\n.label-creator.on,\n.todo-editor.on,\n.project-editor.on,\n.label-editor.on {\n    display: grid;\n}\n\n.project-input input:focus-visible,\n.label-input input:focus-visible,\n.todo-editor-input input:focus-visible,\n.project-editor-input input:focus-visible,\n.label-editor-input input:focus-visible {\n    outline: 1px solid var(--transparent2);\n}\n\n@media only screen and (max-width: 750px) {\n    .nav-comp {\n        padding: .5rem .5rem .5rem .5rem;\n    }\n    .info-comp {\n        padding: 1rem .25rem .25rem .25rem;\n        position: absolute;\n        z-index: 1000;\n        top: 47.59px;\n        bottom: 0;\n        display: none;\n    }\n    .info-comp.show-nav {\n        display: flex;\n    }\n    .info-comp > * {\n        width: 294px;\n    }\n    .container > header {\n        padding: 1rem 0 .5rem 0;\n    }\n    .container {\n        padding: 0 1rem 0 1rem;\n    }\n    .quick-add-todo > div {\n        max-width: 400px;\n    }\n}\n\n@media only screen and (max-width: 550px) {\n    .info-comp > * {\n        width: 242px;\n    }\n    .search-input {\n        width: 180px;\n    }\n    .search-input:focus {\n        width: 180px;\n    }\n    .quick-add-todo > div {\n        max-width: 300px;\n    }\n    .notif-container {\n        max-width: 310px;\n    }\n}\n\n@media only screen and (max-width: 321px) {\n    .search-input {\n        max-width: 135px;\n    }\n    .search-input:focus {\n        max-width: 135px;\n    }\n    .quick-add-todo > div {\n        max-width: 270px;\n    }\n    .notif-container {\n        max-width: 270px;\n    }\n}\n\n@media only screen and (max-height: 420px) {\n    .todo-editor-input {\n        max-height: 180px;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --light92: hsl(0, 0%, 92%);\n    --light88: hsl(0, 0%, 88%);\n    --dark: hsl(0, 0%, 12%);\n    --malibu: hsl(192, 93%, 72%);\n    --auburn: hsl(0, 75%, 65%);\n    --mariner: hsl(216, 75%, 51%);\n    --laurel: hsl(120, 100%, 25%);\n    --purple: hsl(264, 61%, 47%);\n    --sun: hsl(34, 93%, 48%);\n    --transparent1: rgba(0,0,0,.1);\n    --transparent2: rgba(0,0,0,.2);\n\n    --background: var(--light92);\n    --foreground: var(--malibu);\n}\n\n*, *:before, *:after {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;  \n}\n\nhtml,\nbody {\n    overflow-x: hidden;\n}\n\nbody {\n    min-height: 100vh;\n    background-color: var(--background);\n    font-family:sans-serif;\n    color: var(--dark);\n}\n\nbutton,\n.search-input {\n    outline: none;\n    border: none;\n    border-radius: 3px;\n    font-family:sans-serif;\n}\n\nbutton {\n    padding: .125rem;\n    color: var(--dark);\n    background-color: transparent;\n}\n\nbutton,\n.ic-div {\n    cursor: pointer;\n}\n\nspan.mid {\n    vertical-align: middle;\n}\n\nspan,\nh1 {\n    user-select: none;\n}\n\n.app {\n    display: flex;\n    flex-direction: column;\n    width: 100vw;\n    height: 100vh;\n}\n\n.nav-comp ,\n.nc-left,\n.search-div,\n.nc-right {\n    display: inline-flex;\n}\n\n.nav-comp {\n    justify-content: space-between;\n    width: 100%;\n    padding: .5rem 3rem .5rem 3rem;\n    background-color: var(--foreground);\n}\n\n.nc-left > * {\n    margin: 0 .25rem 0 0;\n}\n\n.nc-right > * {\n    margin: 0 0 0 .25rem;\n}\n\n.nc-right button:first-child {\n    margin: 0;\n}\n\n.search-div {\n    height: 100%;\n    background-color: var(--foreground);\n}\n\n.search-div > span:first-child {\n    align-self: center;\n    cursor: text;\n    margin: .1rem;\n    font-size: 1.6rem;\n    z-index: 2;\n}\n\n.search-div button {\n    margin: .2rem 0 .2rem -1.5rem;\n    height: 20px;\n    width: 20px;\n    align-self: center;\n    display: none;\n}\n\n.search-div button:hover,\n.search-div button:focus-visible {\n    color: var(--auburn);\n}\n\n.search-input {\n    padding: 0 1.6rem 0 1.8rem;\n    margin-left: -1.9rem;\n    background-color: var(--transparent1);\n}\n\n.search-input::-webkit-search-cancel-button {\n    -webkit-appearance: none;\n}\n\n.search-input:not(:placeholder-shown) + button {\n    display: block;\n}\n\n.search-div:focus-within .search-input,\n.search-div:hover .search-input,\n.search-input:not(:placeholder-shown){\n    background-color: var(--light92);\n}\n\n.search-div button span {\n    font-size: 1rem;\n}\n\n.app-body {\n    display: flex;\n    flex: 1;\n    max-height: calc(100% - 46.59px);\n    overflow-y: hidden;\n}\n\n.wrapper {\n    height: 100%;\n    width: 100%;\n    display: flex;\n}\n\n.info-comp {\n    display: flex;\n    flex-direction: column;\n    padding: 2rem .25rem 0 2.8rem;\n    background-color: var(--light88);\n    overflow-y: auto;\n}\n\n.info-comp > * {\n    text-align: left;\n    font-size: .9rem;\n    width: 294px;\n    padding: 5px;\n}\n\n.info-comp > * > samp {\n    float: right;\n    opacity: .5;\n    margin: 4px 1rem 4px 0;\n}\n\n.ic-div {\n    margin: .25rem 0 0 0;\n}\n\n.info-comp > div:first-of-type{\n    margin: 1rem 0 0 0;\n}\n\n.ic-span {\n    margin: 0 .25rem 0 0;\n}\n\n.info-comp > button:first-child span {\n    color: var(--mariner);\n}\n\n.info-comp > button:nth-child(2) span {\n    color: var(--laurel);\n}\n\n.info-comp > button:nth-child(3) span {\n    color: var(--purple);\n}\n\n.opa {\n    opacity: .5;\n}\n\n.ic-add-btn {\n    float: right;\n    margin: 0px .5rem 0 0;\n    padding: 0;\n    display: none;\n}\n\n.ic-add-btn:hover + strong,\n.ic-add-btn:focus-visible + strong {\n    text-decoration: underline;\n    text-underline-offset: 30%;\n}\n\n.info-comp:focus-within .ic-add-btn,\n.info-comp:hover .ic-add-btn{\n    display: inherit;\n}\n\n.ic-div > div {\n    display: none;\n}\n\n.ic-div > div.show {\n    display: flex;\n    flex-direction: column;\n}\n\n.ic-project > span.rotate,\n.ic-label > span.rotate {\n    transform: rotate(90deg);\n}\n\n\n.show {\n    margin: .75rem 0 0 0;\n}\n\n.show > div {\n    text-align: left;\n    display: flex;\n    padding: .5rem .5rem .5rem .5rem;\n    height: 34px;\n    font-size: .9rem;\n    align-items: center;\n    border-radius: 3px;\n}\n\nspan.unique {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    align-self: center;\n    margin-right: .2rem;\n}\n\n.show button {\n    padding: 0;\n    visibility: hidden;\n}\n\n.show > div:hover,\n.show > div:focus-visible {\n    background-color: var(--transparent2);\n}\n\n.show > div:hover button,\n.show > div:focus-visible button,\n.show > div:focus-within button{\n    visibility: visible;\n    margin-left: auto;\n}\n\n.show button:hover,\n.show button:focus-visible {\n    background-color: transparent!important;\n}\n\n.bullet {\n    min-width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    margin: 0 .7rem 0 .5rem;\n    background-color: var(--transparent2);\n}\n\n.tag {\n    transform: scale(.8);\n    margin: 0 .2rem 0 .2rem;\n    color: var(--transparent2);\n}\n\n.container {\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    overflow-y: auto;\n    padding: 0 2rem 0 2rem;\n\n}\n\n.container > * {\n    max-width: 800px;\n    width: 100%;\n}\n\n.container > footer {\n    margin-top: auto;\n}\n\n.container > header {\n    padding: 2rem 0 1rem 0;\n    position: sticky;\n    top: 0;\n    background-color: var(--light92);\n    z-index: 3;\n}\n\nh1 {\n    font-size: 1.3rem;\n}\n\n.todo {\n    display: flex;\n    padding: 2px 0;\n    margin: .5rem 0 .5rem 0;\n    justify-content: flex-start;\n    flex-direction: row;\n    border-bottom: 1px solid var(--transparent1);\n}\n\n.todo,\n.todo * {\n    cursor: pointer;\n}\n\n.checkbox-btn { \n    height: 18px;\n    max-width: 18px;\n    width: 100%;\n    margin: .27rem .7rem 0 0;\n    z-index: 2;\n    position: relative;\n}\n\n.checkbox-btn.prio1 {\n    border: 2px solid var(--auburn);\n}\n\n.checkbox-btn.prio2 {\n    border: 2px solid var(--sun);\n}\n\n.checkbox-btn.prio3 {\n    border: 2px solid var(--mariner);\n}\n\n.checkbox-btn.prio4 {\n    border: 2px solid var(--transparent2);\n}\n\n.checkbox-btn:hover,\n.checkbox-btn:focus-visible {\n    border-color: transparent;\n    background-color: var(--transparent1);\n}\n\n.checkbox-btn + span {\n    padding: 0;\n    line-height: 1rem;\n    font-size: 2rem;\n    position: relative;\n    color: var(--transparent2);\n    visibility: hidden;\n    float: right;\n    margin: -.9rem 0 0 -1rem;    \n}\n\n.checkbox-btn:hover + span,\n.checkbox-btn:focus-visible + span {\n    visibility: visible;\n}\n\n.checkbox-btn:active + span{\n    color: var(--laurel);\n}\n\n.todo-text {\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n}\n\n.todo-text > label {\n    line-height: 1.4rem;\n}\n\n.todo-text-note {\n    text-indent: 1rem;\n    font-size: .9rem;\n    margin: 0 0 .25rem 0;\n}\n\n.todo-text-note,\n.todo-text-note > span,\n.todo-text small {\n    color: gray;\n}\n\n.todo-text-note > span,\nem,\nem > span {\n    font-size: .9rem!important;\n}\n\n.todo-text small:hover,\n.todo-text small:focus-visible {\n    text-decoration: underline;\n}\n\nem {\n    width: 100%;\n}\n\n.sched-due {\n    color: var(--auburn);\n}\n\n.sched-today {\n    color: var(--laurel);\n}\n\n.sched-upcom {\n    color: var(--purple);\n}\n\n.todo-tools-container {\n    display: flex;\n    justify-content: flex-end;\n    align-items: flex-end;\n    margin: -20px 0 0 0;\n    visibility: hidden;\n}\n\n.todo-tools-container * {\n    color: gray;\n}\n\n.tool-span {\n    font-size: 1.2rem;\n}\n\n.todo:hover .todo-tools-container,\n.todo:focus-within .todo-tools-container {\n    visibility: visible;\n}\n\nbutton:hover,\nbutton:focus-visible {\n    background-color: var(--transparent2);\n}\n\nbutton:focus-visible {\n    outline: auto;\n}\n\n.add-task-btn {\n    text-align: left;\n    color: gray;\n}\n\n.add-task-btn * {\n    padding: .1rem;\n}\n\n.add-task-btn span {\n    border-radius: 50%;\n    padding: 0;\n    color: var(--auburn);\n}\n\n.add-task-btn:hover,\n.add-task-btn:focus-visible,\n.add-task-btn span {\n    background-color: transparent;\n}\n\n.add-task-btn:hover span,\n.add-task-btn:focus-visible span {\n    color: var(--mariner);\n}\n\n.empty-state-div {\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    justify-content: center;\n    align-items: center;\n}\n\n.empty-state-div img {\n    max-width: 180px;\n    \n    height: auto;\n}\n\n.empty-state-div h4 {\n    font-weight: normal;\n    color: gray;\n}\n\n.empty-state-div *:nth-child(n+2) {\n    margin: .25rem 0 0 0;\n}\n\n.empty-state-div *:nth-child(n+2),\n.container footer p {\n    text-align: center;\n}\n\n.empty-state-div p {\n    font-size: .9rem;\n    color: darkgray;\n}\n\n.container footer {\n    color: var(--auburn);\n    font-size: .9rem!important;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: .25rem 0 .75rem 0;\n}\n\n.container footer span {\n    font-size: 1.25rem!important;\n}\n\n.container footer p {\n    text-decoration: underline;\n    cursor: pointer;\n}\n\n.container:not(.empty) .empty-state-div,\n.container:not(.empty) footer {\n    display: none;\n}\n\n.add-task-div {\n    border: 1px solid var(--transparent2);\n    border-radius: 3px;\n    padding: 0 .5rem .5rem .5rem;\n    height: 68.48px;\n}\n\n.add-task-div > * {\n    margin-top: .5rem;\n}\n\n.add-task-div input,\n.quick-add-todo input {\n    width: 100%;\n    outline: none;\n    border: none;\n    font-size: .9rem;\n    background-color: var(--light92);\n}\n\n.add-task-btns-container {\n    display: flex;\n    justify-content: space-between;\n}\n\n.add-task-btns-container div > button {\n    border: 1px solid var(--transparent2);\n    padding: .25rem;\n}\n\n.add-task-btns-container button > span {\n    font-size: .9rem!important;\n}\n\n.add-task-btns-container > button:nth-child(2) span {\n    color: var(--mariner);\n}\n\n.scheduler,\n.carrier {\n    max-width: 210px;\n    width: 100%;    \n}\n\n.scheduler,\n.carrier,\n.labeler,\n.prio-setter {\n    background-color: var(--light92);\n    border-radius: 3px;\n    z-index: 2;\n    position: relative;\n    margin: 0 0 0 0;\n    box-shadow: 0 1px 8px 0 rgb(0 0 0 / 8%),\n        0 0 1px 0 rgb(0 0 0 / 30%);\n    display: none;\n}\n\n.scheduler > *,\n.carrier > * {\n    width: 100%;\n    text-align: left;\n    padding: .5rem .5rem .5rem .5rem;\n}\n\n.sched {\n    display: flex;\n    justify-content: space-between;\n}\n\n.sched span:nth-child(2) {\n    text-align: right;\n    color: gray;\n}\n\n.scheduler input[type=\"date\"]::-webkit-calendar-picker-indicator {\n    opacity: .4;\n    cursor: pointer;\n}\n\n.scheduler input[type=\"date\"]::-webkit-calendar-picker-indicator:hover {\n    opacity: 1;\n}\n\n.scheduler .sched-custom {\n    display: flex;\n}\n\n.scheduler .sched-custom button {\n    border: 1px solid var(--transparent1);\n}\n\n.scheduler .sched-custom button > span,\n.carrier span,\n.labeler span,\n.prio-setter span {\n    font-size: .9rem!important;\n}\n\n.prio-setter button:first-child span {\n    color: var(--auburn);\n}\n\n.prio-setter button:nth-child(2) span {\n    color: var(--sun);\n}\n\n.prio-setter button:nth-child(3) span {\n    color: var(--mariner);\n}\n\n.prio-setter button:nth-child(4) span {\n    color: gray;\n}\n\n.carrier {\n    margin: 0 0 0 -.7rem;\n    max-width: 160px;\n    width: 100%;\n}\n\n.carrier button,\n.labeler button,\n.prio-setter button {\n    display: flex;\n    align-items: center;\n}\n\n.carrier u,\n.labeler u,\n.prio-setter u {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    margin: 0 0 0 .25rem;\n}\n\n.labeler,\n.prio-setter {\n    background-color: transparent;\n    border: none;\n    box-shadow: none;\n}\n\n.labeler div,\n.prio-setter div {\n    max-width: 160px;\n    width: 100%; \n    display: flex;\n    flex-direction: column;\n    margin: 0 1.8rem 0 auto;\n    background-color: var(--light92);\n    box-shadow: 0 1px 8px 0 rgb(0 0 0 / 8%),\n        0 0 1px 0 rgb(0 0 0 / 30%);\n    border-radius: 3px;\n}\n\n.prio-setter div {\n    margin: 0 0 0 auto;\n    max-width: 88px;\n}\n\n.prio-setter u {\n    text-decoration: none;\n}\n\n.labeler button,\n.prio-setter button {\n    text-align: left;\n    padding: .5rem;\n}\n\n.scheduler .sched-custom button:hover > span,\n.scheduler .sched-custom button:focus-visible > span {\n    color: var(--laurel);\n}\n\n.add-task-div.display-scheduler .scheduler {\n    display: inherit;\n}\n\n.add-task-div.display-carrier .carrier,\n.add-task-div.display-labeler .labeler,\n.add-task-div.display-prio-setter .prio-setter {\n    display: block;\n}\n\n.add-task-div .selected,\n.add-task-div .active {\n    background-color: var(--transparent1);\n}\n\n.add-task-main-btns-container {\n    padding: .5rem 0 .5rem 0;\n}\n\n.add-task-main-btns-container button {\n    padding: .25rem;\n}\n\n.add-task-main-btns-container button:first-child {\n    background-color: var(--malibu);\n    border: 1px solid var(--transparent2);\n}\n\n.container.add-triggered .add-task-btn-div {\n    display: none;\n}\n\n.container:not(.add-triggered) .add-task-div,\n.container:not(.add-triggered) .add-task-main-btns-container {\n    display: none;\n}\n\n.quick-add-todo,\n.project-creator,\n.label-creator,\n.todo-editor,\n.project-editor,\n.label-editor {\n    display: none;\n    position: absolute;\n    place-items: center;\n    height: 100%;\n    width: 100%;\n    background-color: var(--transparent2);\n    z-index: 999;\n}\n\n.quick-add-todo > *,\n.quick-add-todo input {\n    width: 100%;\n}\n\n.quick-add-todo > div {\n    background-color: var(--light92);\n    max-width: 480px;\n    width: 100%;\n    border-radius: 3px;\n    padding: .5rem .5rem .5rem .5rem;\n}\n\n.quick-add-todo > div > *:not(:first-child) {\n    margin: .5rem 0 0 0;\n}\n\n.quick-add-todo button {\n    padding: .25rem;\n}\n\n.quick-add-todo button:first-child {\n    background-color: var(--mariner);\n}\n\n.quick-add-todo button:hover,\n.quick-add-todo button:focus-visible {\n    color: var(--light92);\n}\n\n.quick-add-todo.on {\n    display: grid;\n}\n\n.notifications {\n    display: none;\n    position: absolute;\n    inset: 0;\n    background-color: transparent;\n    z-index: 999;\n}\n\n.notif-container {\n    display: flex;\n    flex-direction: column;\n    background-color: var(--light92);\n    margin: 40px 0 auto auto;\n    padding: .5rem;\n    max-width: 420px;\n    width: 100%;\n    max-height: 320px;\n    overflow-x: hidden;\n    overflow-y: auto;\n    box-shadow: 0 1px 8px 0 rgb(0 0 0 / 8%),\n        0 0 1px 0 rgb(0 0 0 / 30%);\n    border-radius: 3px;\n}\n\n.notif-container nav {\n    display: flex;\n    align-items: center;\n    padding: 0 0 .25rem 0;\n    border-bottom: 1px solid var(--transparent2);\n}\n\n.notif-container nav > * {\n    font-size: .9rem;\n    cursor: pointer;\n}\n\n.notif-container button:first-of-type{\n    margin: 0 0 0 .5rem;\n}\n\n.nav-btn-notification small {\n    position: absolute; \n    color: var(--auburn);\n    margin-left: -.85rem; \n    background-color: var(--malibu);\n    padding: 0 1px;\n}\n\n.nav-btn-notification:hover small,\n.nav-btn-notification:focus-visible small {\n    background-color: transparent!important;\n    color: var(--light92)!important;\n    font-weight: bold;\n}\n\n.read-all-btn {\n    margin: 0 0 0 auto!important;\n}\n\n.read-all-btn span {\n    font-size: 1.2rem;\n}\n\n.notif-output {\n    margin: 0 .25rem;\n    overflow-y: auto;\n    /* overflow-x: hidden; */\n}\n\n.notif-output > * {\n    margin: .25rem 0 0 0;\n    border-bottom: 1px solid var(--transparent1);\n    padding: 0 0 .25rem 0;\n    \n}\n\n.notif {\n    display: flex;\n    flex-direction: column;\n}\n\n.notif > *,\n.notif-extra button span{\n    font-size: .9rem;  \n}\n\n.notif > span {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.notif-extra {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.notif small {\n    color: var(--auburn);\n}\n\n.notifications.on {\n    display: flex;\n\n}\n\n.app.search .add-task-btn-div{\n    display: none;\n}\n\n.project-creator > div,\n.label-creator > div,\n.todo-editor > div,\n.project-editor > div,\n.label-editor > div {\n    background-color: var(--light92);\n    max-width: 420px;\n    width: 100%;\n    border-radius: 3px;\n}\n\n.project-creator > div > *,\n.label-creator > div > *,\n.todo-editor > div > *,\n.project-editor > div > *,\n.label-editor > div > * {\n    padding: .5rem;\n    margin: 0 0 .25rem 0;\n}\n\n.project-creator > div > *:first-child, \n.project-creator > div > *:nth-child(2),\n.label-creator > div > *:first-child, \n.label-creator > div > *:nth-child(2),\n.todo-editor > div > *:first-child, \n.todo-editor > div > *:nth-child(2),\n.project-editor > div > *:first-child,\n.project-editor > div > *:nth-child(2),\n.label-editor > div > *:first-child,\n.label-editor > div > *:nth-child(2) {\n    border-bottom: 1px solid var(--transparent1);\n}\n\n.project-creator > div,\n.project-input,\n.label-creator > div,\n.label-input,\n.todo-editor > div,\n.todo-editor-input,\n.project-editor > div,\n.project-editor-input,\n.label-editor > div,\n.label-editor-input {\n    display: flex;\n    flex-direction: column;\n}\n\n.project-input > *,\n.label-input > *,\n.todo-editor-input > *,\n.project-editor-input > *,\n.label-editor-input > * {\n    margin: 0 0 .25rem 0;\n}\n\n.project-input input,\n.label-input input,\n.todo-editor-input input,\n.todo-editor-input select,\n.project-editor-input input,\n.label-editor-input input {\n    border: none;\n    outline: none;\n    border-radius: 2px;\n    padding: .25rem;\n}\n\n.todo-editor-input {\n    overflow-y: auto;\n}\n\n.todo-editor-input {\n    padding-top: 0!important;\n}\n\n.todo-editor-input label {\n    margin: .25rem 0 .1rem 0;\n}\n\n.project-buttons,\n.label-buttons,\n.todo-editor-buttons,\n.update-project-buttons,\n.update-label-buttons {\n    display: flex;\n    justify-content: flex-end;    \n    margin-bottom: 0!important;\n}\n\n.project-creator button,\n.label-creator button,\n.todo-editor button,\n.project-editor button,\n.label-editor button {\n    padding: .25rem;\n    margin: 0 0 0 .25rem;\n    background-color: var(--transparent1);\n}\n\n.project-creator button:first-child,\n.label-creator button:first-child,\n.todo-editor button:first-child,\n.project-editor button:first-child,\n.label-editor button:first-child {\n    background-color: var(--mariner);\n}\n\n.update-project-buttons button:nth-child(3),\n.update-label-buttons button:nth-child(3) {\n    background-color: var(--auburn);\n}\n\n.project-creator.on,\n.label-creator.on,\n.todo-editor.on,\n.project-editor.on,\n.label-editor.on {\n    display: grid;\n}\n\n.project-input input:focus-visible,\n.label-input input:focus-visible,\n.todo-editor-input input:focus-visible,\n.project-editor-input input:focus-visible,\n.label-editor-input input:focus-visible {\n    outline: 1px solid var(--transparent2);\n}\n\n@media only screen and (max-width: 750px) {\n    .nav-comp {\n        padding: .5rem .5rem .5rem .5rem;\n    }\n    .info-comp {\n        padding: 1rem .25rem .25rem .25rem;\n        position: absolute;\n        z-index: 1000;\n        top: 47.59px;\n        bottom: 0;\n        display: none;\n    }\n    .info-comp.show-nav {\n        display: flex;\n    }\n    .info-comp > * {\n        width: 294px;\n    }\n    .container > header {\n        padding: 1rem 0 .5rem 0;\n    }\n    .container {\n        padding: 0 1rem 0 1rem;\n    }\n    .quick-add-todo > div {\n        max-width: 400px;\n    }\n}\n\n@media only screen and (max-width: 550px) {\n    .info-comp > * {\n        width: 242px;\n    }\n    .search-input {\n        width: 180px;\n    }\n    .search-input:focus {\n        width: 180px;\n    }\n    .quick-add-todo > div {\n        max-width: 300px;\n    }\n    .notif-container {\n        max-width: 310px;\n    }\n}\n\n@media only screen and (max-width: 321px) {\n    .search-input {\n        max-width: 135px;\n    }\n    .search-input:focus {\n        max-width: 135px;\n    }\n    .quick-add-todo > div {\n        max-width: 270px;\n    }\n    .notif-container {\n        max-width: 270px;\n    }\n}\n\n@media only screen and (max-height: 420px) {\n    .todo-editor-input {\n        max-height: 180px;\n    }\n}"],"sourceRoot":""}]);
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
/* harmony export */   "test": () => (/* binding */ test)
/* harmony export */ });


const embedLocalStorage = (() => {
    if(!localStorage.getItem('todos'))
    localStorage.setItem('todos', JSON.stringify([]));
})();

const Todo = function( id, title, dueDate, note, priority, project, label, dueDateNotifSent ){
    return { id, title, dueDate, note, priority, project, label, dueDateNotifSent }
};

//create container for projects
//container for labels















const test = (function(){
    const todo = Todo(
        1,
        'finish todo',
        '2021-07-31',
        '',
        'priority 1',
        'inbox',
        '',
        'none'
    );

    let array = JSON.parse(localStorage.getItem('todos'));

    if(!array.length){
        array.push(todo);
        localStorage.setItem('todos', JSON.stringify(array));
    }

    console.log(todo)

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
        <button id = "sbnavTodayBtn">
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
            <div id = "projectListContainer"><!-- show -->
            </div>
        </div>
        <div class = "ic-div ic-label" tabindex="0" id = "sbnavLabelsDiv">
            <span class="material-icons-outlined mid ic-span opa">chevron_right</span>
            <button class = "ic-add-btn opa" id = "sbnavLabelAddBtn">
                <span class="material-icons-outlined mid">add</span>
            </button>
            <strong>Labels</strong>
            <div class = "show" id = "labelListContainer"><!-- show -->
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
    header.innerHTML = `
        <h1 id = "header">Inbox</h1>
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
            <div>
                <input type = "text" placeholder="Task name" id = "quickAddInput">
                <div>
                    <button id = "quickAddSubmit">Add task</button>
                    <button id = "quickAddCancel">Cancel</button>
                </div>
            </div>
        </div>
        <div class = "notifications" id = "notifications">
            <div class = "notif-container">
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
    const labels = document.querySelector('#sbnavLabelsDiv');
    const labelChevron = document.querySelector('#sbnavLabelsDiv > span');
    const addLabel = document.querySelector('#sbnavLabelAddBtn');

    return { 
        nav,
        inbox, inboxCounter,
        today, todayCounter,
        upcoming, upcomingCounter,
        projects, projectChevron, addProject,
        labels, labelChevron, addLabel
    };
})();

const container = (() => {
    const div = document.querySelector('container');
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
        add, cancel,
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
    const quickAddTaskInput = document.querySelector('#quickAddInput');
    const quickAddTaskSubmit = document.querySelector('#quickAddSubmit');
    const quickAddTaskCancel = document.querySelector('#quickAddCancel');
    const notifReadAll = document.querySelector('#notifReadAllBtn');
    const notifOutput = document.querySelector('notifOutput');
    const projectCreator = document.querySelector('#projectCreator');
    const projectAdd = document.querySelector('#projectAddButton');
    const projectCancel = document.querySelector('#projectCancelButton');
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
        quickAddTask, quickAddTaskInput, quickAddTaskSubmit, quickAddTaskCancel,
        notifReadAll, notifOutput,
        projectCreator, newProjectName, projectAdd, projectCancel,
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






'use strict';

_selector_js__WEBPACK_IMPORTED_MODULE_3__.vNav.inbox.onclick = function(){
    console.log(1)
}

_selector_js__WEBPACK_IMPORTED_MODULE_3__.hNav.formSearch.onsubmit = function(e){
    e.preventDefault();
    _selector_js__WEBPACK_IMPORTED_MODULE_3__.hNav.search.blur();
    console.log(2);
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFRhcmdldC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kYXRhLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3NIO0FBQzdCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSxpREFBaUQsaUNBQWlDLGlDQUFpQyw4QkFBOEIsbUNBQW1DLGlDQUFpQyxvQ0FBb0Msb0NBQW9DLG1DQUFtQywrQkFBK0IscUNBQXFDLHFDQUFxQyxxQ0FBcUMsa0NBQWtDLEdBQUcsMEJBQTBCLDZCQUE2QixpQkFBaUIsZ0JBQWdCLEtBQUssaUJBQWlCLHlCQUF5QixHQUFHLFVBQVUsd0JBQXdCLDBDQUEwQyw2QkFBNkIseUJBQXlCLEdBQUcsNEJBQTRCLG9CQUFvQixtQkFBbUIseUJBQXlCLDZCQUE2QixHQUFHLFlBQVksdUJBQXVCLHlCQUF5QixvQ0FBb0MsR0FBRyxzQkFBc0Isc0JBQXNCLEdBQUcsY0FBYyw2QkFBNkIsR0FBRyxlQUFlLHdCQUF3QixHQUFHLFVBQVUsb0JBQW9CLDZCQUE2QixtQkFBbUIsb0JBQW9CLEdBQUcscURBQXFELDJCQUEyQixHQUFHLGVBQWUscUNBQXFDLGtCQUFrQixxQ0FBcUMsMENBQTBDLEdBQUcsa0JBQWtCLDJCQUEyQixHQUFHLG1CQUFtQiwyQkFBMkIsR0FBRyxrQ0FBa0MsZ0JBQWdCLEdBQUcsaUJBQWlCLG1CQUFtQiwwQ0FBMEMsR0FBRyxvQ0FBb0MseUJBQXlCLG1CQUFtQixvQkFBb0Isd0JBQXdCLGlCQUFpQixHQUFHLHdCQUF3QixvQ0FBb0MsbUJBQW1CLGtCQUFrQix5QkFBeUIsb0JBQW9CLEdBQUcsaUVBQWlFLDJCQUEyQixHQUFHLG1CQUFtQixpQ0FBaUMsMkJBQTJCLDRDQUE0QyxHQUFHLGlEQUFpRCwrQkFBK0IsR0FBRyxvREFBb0QscUJBQXFCLEdBQUcscUhBQXFILHVDQUF1QyxHQUFHLDZCQUE2QixzQkFBc0IsR0FBRyxlQUFlLG9CQUFvQixjQUFjLHVDQUF1Qyx5QkFBeUIsR0FBRyxjQUFjLG1CQUFtQixrQkFBa0Isb0JBQW9CLEdBQUcsZ0JBQWdCLG9CQUFvQiw2QkFBNkIsb0NBQW9DLHVDQUF1Qyx1QkFBdUIsR0FBRyxvQkFBb0IsdUJBQXVCLHVCQUF1QixtQkFBbUIsbUJBQW1CLEdBQUcsMkJBQTJCLG1CQUFtQixrQkFBa0IsNkJBQTZCLEdBQUcsYUFBYSwyQkFBMkIsR0FBRyxtQ0FBbUMseUJBQXlCLEdBQUcsY0FBYywyQkFBMkIsR0FBRywwQ0FBMEMsNEJBQTRCLEdBQUcsMkNBQTJDLDJCQUEyQixHQUFHLDJDQUEyQywyQkFBMkIsR0FBRyxVQUFVLGtCQUFrQixHQUFHLGlCQUFpQixtQkFBbUIsNEJBQTRCLGlCQUFpQixvQkFBb0IsR0FBRyxxRUFBcUUsaUNBQWlDLGlDQUFpQyxHQUFHLHVFQUF1RSx1QkFBdUIsR0FBRyxtQkFBbUIsb0JBQW9CLEdBQUcsd0JBQXdCLG9CQUFvQiw2QkFBNkIsR0FBRyx5REFBeUQsK0JBQStCLEdBQUcsYUFBYSwyQkFBMkIsR0FBRyxpQkFBaUIsdUJBQXVCLG9CQUFvQix1Q0FBdUMsbUJBQW1CLHVCQUF1QiwwQkFBMEIseUJBQXlCLEdBQUcsaUJBQWlCLDBCQUEwQix1QkFBdUIsOEJBQThCLHlCQUF5QiwwQkFBMEIsR0FBRyxrQkFBa0IsaUJBQWlCLHlCQUF5QixHQUFHLG1EQUFtRCw0Q0FBNEMsR0FBRyxrR0FBa0csMEJBQTBCLHdCQUF3QixHQUFHLHFEQUFxRCw4Q0FBOEMsR0FBRyxhQUFhLHNCQUFzQixtQkFBbUIseUJBQXlCLDhCQUE4Qiw0Q0FBNEMsR0FBRyxVQUFVLDJCQUEyQiw4QkFBOEIsaUNBQWlDLEdBQUcsZ0JBQWdCLG9CQUFvQixjQUFjLDZCQUE2QixrQ0FBa0MsMEJBQTBCLHVCQUF1Qiw2QkFBNkIsS0FBSyxvQkFBb0IsdUJBQXVCLGtCQUFrQixHQUFHLHlCQUF5Qix1QkFBdUIsR0FBRyx5QkFBeUIsNkJBQTZCLHVCQUF1QixhQUFhLHVDQUF1QyxpQkFBaUIsR0FBRyxRQUFRLHdCQUF3QixHQUFHLFdBQVcsb0JBQW9CLHFCQUFxQiw4QkFBOEIsa0NBQWtDLDBCQUEwQixtREFBbUQsR0FBRyxxQkFBcUIsc0JBQXNCLEdBQUcsbUJBQW1CLG9CQUFvQixzQkFBc0Isa0JBQWtCLCtCQUErQixpQkFBaUIseUJBQXlCLEdBQUcseUJBQXlCLHNDQUFzQyxHQUFHLHlCQUF5QixtQ0FBbUMsR0FBRyx5QkFBeUIsdUNBQXVDLEdBQUcseUJBQXlCLDRDQUE0QyxHQUFHLHVEQUF1RCxnQ0FBZ0MsNENBQTRDLEdBQUcsMEJBQTBCLGlCQUFpQix3QkFBd0Isc0JBQXNCLHlCQUF5QixpQ0FBaUMseUJBQXlCLG1CQUFtQiwrQkFBK0IsT0FBTyxxRUFBcUUsMEJBQTBCLEdBQUcsZ0NBQWdDLDJCQUEyQixHQUFHLGdCQUFnQixvQkFBb0IsY0FBYyw2QkFBNkIsR0FBRyx3QkFBd0IsMEJBQTBCLEdBQUcscUJBQXFCLHdCQUF3Qix1QkFBdUIsMkJBQTJCLEdBQUcsaUVBQWlFLGtCQUFrQixHQUFHLDZDQUE2QyxpQ0FBaUMsR0FBRyw2REFBNkQsaUNBQWlDLEdBQUcsUUFBUSxrQkFBa0IsR0FBRyxnQkFBZ0IsMkJBQTJCLEdBQUcsa0JBQWtCLDJCQUEyQixHQUFHLGtCQUFrQiwyQkFBMkIsR0FBRywyQkFBMkIsb0JBQW9CLGdDQUFnQyw0QkFBNEIsMEJBQTBCLHlCQUF5QixHQUFHLDZCQUE2QixrQkFBa0IsR0FBRyxnQkFBZ0Isd0JBQXdCLEdBQUcsa0ZBQWtGLDBCQUEwQixHQUFHLHlDQUF5Qyw0Q0FBNEMsR0FBRywwQkFBMEIsb0JBQW9CLEdBQUcsbUJBQW1CLHVCQUF1QixrQkFBa0IsR0FBRyxxQkFBcUIscUJBQXFCLEdBQUcsd0JBQXdCLHlCQUF5QixpQkFBaUIsMkJBQTJCLEdBQUcsNEVBQTRFLG9DQUFvQyxHQUFHLGlFQUFpRSw0QkFBNEIsR0FBRyxzQkFBc0Isb0JBQW9CLDZCQUE2QixjQUFjLDhCQUE4QiwwQkFBMEIsR0FBRywwQkFBMEIsdUJBQXVCLHlCQUF5QixHQUFHLHlCQUF5QiwwQkFBMEIsa0JBQWtCLEdBQUcsdUNBQXVDLDJCQUEyQixHQUFHLDZEQUE2RCx5QkFBeUIsR0FBRyx3QkFBd0IsdUJBQXVCLHNCQUFzQixHQUFHLHVCQUF1QiwyQkFBMkIsaUNBQWlDLG9CQUFvQiw4QkFBOEIsMEJBQTBCLGlDQUFpQyxHQUFHLDRCQUE0QixtQ0FBbUMsR0FBRyx5QkFBeUIsaUNBQWlDLHNCQUFzQixHQUFHLDZFQUE2RSxvQkFBb0IsR0FBRyxtQkFBbUIsNENBQTRDLHlCQUF5QixtQ0FBbUMsc0JBQXNCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLGlEQUFpRCxrQkFBa0Isb0JBQW9CLG1CQUFtQix1QkFBdUIsdUNBQXVDLEdBQUcsOEJBQThCLG9CQUFvQixxQ0FBcUMsR0FBRywyQ0FBMkMsNENBQTRDLHNCQUFzQixHQUFHLDRDQUE0QyxpQ0FBaUMsR0FBRyx5REFBeUQsNEJBQTRCLEdBQUcsMkJBQTJCLHVCQUF1QixrQkFBa0IsT0FBTyxxREFBcUQsdUNBQXVDLHlCQUF5QixpQkFBaUIseUJBQXlCLHNCQUFzQixtRkFBbUYsb0JBQW9CLEdBQUcsbUNBQW1DLGtCQUFrQix1QkFBdUIsdUNBQXVDLEdBQUcsWUFBWSxvQkFBb0IscUNBQXFDLEdBQUcsOEJBQThCLHdCQUF3QixrQkFBa0IsR0FBRyx3RUFBd0Usa0JBQWtCLHNCQUFzQixHQUFHLDhFQUE4RSxpQkFBaUIsR0FBRyw4QkFBOEIsb0JBQW9CLEdBQUcscUNBQXFDLDRDQUE0QyxHQUFHLGdHQUFnRyxpQ0FBaUMsR0FBRywwQ0FBMEMsMkJBQTJCLEdBQUcsMkNBQTJDLHdCQUF3QixHQUFHLDJDQUEyQyw0QkFBNEIsR0FBRywyQ0FBMkMsa0JBQWtCLEdBQUcsY0FBYywyQkFBMkIsdUJBQXVCLGtCQUFrQixHQUFHLDZEQUE2RCxvQkFBb0IsMEJBQTBCLEdBQUcsOENBQThDLDBCQUEwQix1QkFBdUIsOEJBQThCLDJCQUEyQixHQUFHLDZCQUE2QixvQ0FBb0MsbUJBQW1CLHVCQUF1QixHQUFHLHFDQUFxQyx1QkFBdUIsa0JBQWtCLHFCQUFxQiw2QkFBNkIsOEJBQThCLHVDQUF1QyxtRkFBbUYseUJBQXlCLEdBQUcsc0JBQXNCLHlCQUF5QixzQkFBc0IsR0FBRyxvQkFBb0IsNEJBQTRCLEdBQUcsMkNBQTJDLHVCQUF1QixxQkFBcUIsR0FBRyx5R0FBeUcsMkJBQTJCLEdBQUcsZ0RBQWdELHVCQUF1QixHQUFHLHNJQUFzSSxxQkFBcUIsR0FBRyxxREFBcUQsNENBQTRDLEdBQUcsbUNBQW1DLCtCQUErQixHQUFHLDBDQUEwQyxzQkFBc0IsR0FBRyxzREFBc0Qsc0NBQXNDLDRDQUE0QyxHQUFHLGdEQUFnRCxvQkFBb0IsR0FBRyxpSEFBaUgsb0JBQW9CLEdBQUcsMEdBQTBHLG9CQUFvQix5QkFBeUIsMEJBQTBCLG1CQUFtQixrQkFBa0IsNENBQTRDLG1CQUFtQixHQUFHLGlEQUFpRCxrQkFBa0IsR0FBRywyQkFBMkIsdUNBQXVDLHVCQUF1QixrQkFBa0IseUJBQXlCLHVDQUF1QyxHQUFHLGlEQUFpRCwwQkFBMEIsR0FBRyw0QkFBNEIsc0JBQXNCLEdBQUcsd0NBQXdDLHVDQUF1QyxHQUFHLHlFQUF5RSw0QkFBNEIsR0FBRyx3QkFBd0Isb0JBQW9CLEdBQUcsb0JBQW9CLG9CQUFvQix5QkFBeUIsZUFBZSxvQ0FBb0MsbUJBQW1CLEdBQUcsc0JBQXNCLG9CQUFvQiw2QkFBNkIsdUNBQXVDLCtCQUErQixxQkFBcUIsdUJBQXVCLGtCQUFrQix3QkFBd0IseUJBQXlCLHVCQUF1QixtRkFBbUYseUJBQXlCLEdBQUcsMEJBQTBCLG9CQUFvQiwwQkFBMEIsNEJBQTRCLG1EQUFtRCxHQUFHLDhCQUE4Qix1QkFBdUIsc0JBQXNCLEdBQUcsMENBQTBDLDBCQUEwQixHQUFHLGlDQUFpQyx5QkFBeUIsNEJBQTRCLDJCQUEyQix1Q0FBdUMscUJBQXFCLEdBQUcsbUZBQW1GLDhDQUE4QyxzQ0FBc0Msd0JBQXdCLEdBQUcsbUJBQW1CLG1DQUFtQyxHQUFHLHdCQUF3Qix3QkFBd0IsR0FBRyxtQkFBbUIsdUJBQXVCLHVCQUF1Qiw0QkFBNEIsTUFBTSx1QkFBdUIsMkJBQTJCLG1EQUFtRCw0QkFBNEIsU0FBUyxZQUFZLG9CQUFvQiw2QkFBNkIsR0FBRywwQ0FBMEMsdUJBQXVCLEtBQUssbUJBQW1CLDBCQUEwQix1QkFBdUIsOEJBQThCLEdBQUcsa0JBQWtCLG9CQUFvQixxQ0FBcUMsMEJBQTBCLEdBQUcsa0JBQWtCLDJCQUEyQixHQUFHLHVCQUF1QixvQkFBb0IsS0FBSyxrQ0FBa0Msb0JBQW9CLEdBQUcsc0hBQXNILHVDQUF1Qyx1QkFBdUIsa0JBQWtCLHlCQUF5QixHQUFHLDBJQUEwSSxxQkFBcUIsMkJBQTJCLEdBQUcsaVpBQWlaLG1EQUFtRCxHQUFHLHlOQUF5TixvQkFBb0IsNkJBQTZCLEdBQUcsMEhBQTBILDJCQUEyQixHQUFHLGdLQUFnSyxtQkFBbUIsb0JBQW9CLHlCQUF5QixzQkFBc0IsR0FBRyx3QkFBd0IsdUJBQXVCLEdBQUcsd0JBQXdCLCtCQUErQixHQUFHLDhCQUE4QiwrQkFBK0IsR0FBRyxnSEFBZ0gsb0JBQW9CLGdDQUFnQyxxQ0FBcUMsR0FBRywySEFBMkgsc0JBQXNCLDJCQUEyQiw0Q0FBNEMsR0FBRyx1TEFBdUwsdUNBQXVDLEdBQUcsNkZBQTZGLHNDQUFzQyxHQUFHLHVHQUF1RyxvQkFBb0IsR0FBRywwTUFBME0sNkNBQTZDLEdBQUcsK0NBQStDLGlCQUFpQiwyQ0FBMkMsT0FBTyxrQkFBa0IsNkNBQTZDLDZCQUE2Qix3QkFBd0IsdUJBQXVCLG9CQUFvQix3QkFBd0IsT0FBTywyQkFBMkIsd0JBQXdCLE9BQU8sc0JBQXNCLHVCQUF1QixPQUFPLDJCQUEyQixrQ0FBa0MsT0FBTyxrQkFBa0IsaUNBQWlDLE9BQU8sNkJBQTZCLDJCQUEyQixPQUFPLEdBQUcsK0NBQStDLHNCQUFzQix1QkFBdUIsT0FBTyxxQkFBcUIsdUJBQXVCLE9BQU8sMkJBQTJCLHVCQUF1QixPQUFPLDZCQUE2QiwyQkFBMkIsT0FBTyx3QkFBd0IsMkJBQTJCLE9BQU8sR0FBRywrQ0FBK0MscUJBQXFCLDJCQUEyQixPQUFPLDJCQUEyQiwyQkFBMkIsT0FBTyw2QkFBNkIsMkJBQTJCLE9BQU8sd0JBQXdCLDJCQUEyQixPQUFPLEdBQUcsZ0RBQWdELDBCQUEwQiw0QkFBNEIsT0FBTyxHQUFHLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLFFBQVEsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxRQUFRLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxPQUFPLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsY0FBYyxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLE9BQU8sVUFBVSxNQUFNLE9BQU8sWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sT0FBTyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxNQUFNLFFBQVEsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLEtBQUssT0FBTyxXQUFXLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLFFBQVEsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxPQUFPLFVBQVUsWUFBWSxPQUFPLE9BQU8sWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sT0FBTyxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE9BQU8sVUFBVSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sTUFBTSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLE9BQU8sYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGNBQWMsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sU0FBUyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sU0FBUyxVQUFVLFlBQVksT0FBTyxjQUFjLFlBQVksT0FBTyxjQUFjLFVBQVUsWUFBWSxPQUFPLFNBQVMsWUFBWSxPQUFPLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFNBQVMsVUFBVSxZQUFZLGFBQWEsT0FBTyxTQUFTLFVBQVUsWUFBWSxhQUFhLE9BQU8sU0FBUyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sU0FBUyxVQUFVLE9BQU8sU0FBUyxZQUFZLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sZ0NBQWdDLGlDQUFpQyxpQ0FBaUMsOEJBQThCLG1DQUFtQyxpQ0FBaUMsb0NBQW9DLG9DQUFvQyxtQ0FBbUMsK0JBQStCLHFDQUFxQyxxQ0FBcUMscUNBQXFDLGtDQUFrQyxHQUFHLDBCQUEwQiw2QkFBNkIsaUJBQWlCLGdCQUFnQixLQUFLLGlCQUFpQix5QkFBeUIsR0FBRyxVQUFVLHdCQUF3QiwwQ0FBMEMsNkJBQTZCLHlCQUF5QixHQUFHLDRCQUE0QixvQkFBb0IsbUJBQW1CLHlCQUF5Qiw2QkFBNkIsR0FBRyxZQUFZLHVCQUF1Qix5QkFBeUIsb0NBQW9DLEdBQUcsc0JBQXNCLHNCQUFzQixHQUFHLGNBQWMsNkJBQTZCLEdBQUcsZUFBZSx3QkFBd0IsR0FBRyxVQUFVLG9CQUFvQiw2QkFBNkIsbUJBQW1CLG9CQUFvQixHQUFHLHFEQUFxRCwyQkFBMkIsR0FBRyxlQUFlLHFDQUFxQyxrQkFBa0IscUNBQXFDLDBDQUEwQyxHQUFHLGtCQUFrQiwyQkFBMkIsR0FBRyxtQkFBbUIsMkJBQTJCLEdBQUcsa0NBQWtDLGdCQUFnQixHQUFHLGlCQUFpQixtQkFBbUIsMENBQTBDLEdBQUcsb0NBQW9DLHlCQUF5QixtQkFBbUIsb0JBQW9CLHdCQUF3QixpQkFBaUIsR0FBRyx3QkFBd0Isb0NBQW9DLG1CQUFtQixrQkFBa0IseUJBQXlCLG9CQUFvQixHQUFHLGlFQUFpRSwyQkFBMkIsR0FBRyxtQkFBbUIsaUNBQWlDLDJCQUEyQiw0Q0FBNEMsR0FBRyxpREFBaUQsK0JBQStCLEdBQUcsb0RBQW9ELHFCQUFxQixHQUFHLHFIQUFxSCx1Q0FBdUMsR0FBRyw2QkFBNkIsc0JBQXNCLEdBQUcsZUFBZSxvQkFBb0IsY0FBYyx1Q0FBdUMseUJBQXlCLEdBQUcsY0FBYyxtQkFBbUIsa0JBQWtCLG9CQUFvQixHQUFHLGdCQUFnQixvQkFBb0IsNkJBQTZCLG9DQUFvQyx1Q0FBdUMsdUJBQXVCLEdBQUcsb0JBQW9CLHVCQUF1Qix1QkFBdUIsbUJBQW1CLG1CQUFtQixHQUFHLDJCQUEyQixtQkFBbUIsa0JBQWtCLDZCQUE2QixHQUFHLGFBQWEsMkJBQTJCLEdBQUcsbUNBQW1DLHlCQUF5QixHQUFHLGNBQWMsMkJBQTJCLEdBQUcsMENBQTBDLDRCQUE0QixHQUFHLDJDQUEyQywyQkFBMkIsR0FBRywyQ0FBMkMsMkJBQTJCLEdBQUcsVUFBVSxrQkFBa0IsR0FBRyxpQkFBaUIsbUJBQW1CLDRCQUE0QixpQkFBaUIsb0JBQW9CLEdBQUcscUVBQXFFLGlDQUFpQyxpQ0FBaUMsR0FBRyx1RUFBdUUsdUJBQXVCLEdBQUcsbUJBQW1CLG9CQUFvQixHQUFHLHdCQUF3QixvQkFBb0IsNkJBQTZCLEdBQUcseURBQXlELCtCQUErQixHQUFHLGFBQWEsMkJBQTJCLEdBQUcsaUJBQWlCLHVCQUF1QixvQkFBb0IsdUNBQXVDLG1CQUFtQix1QkFBdUIsMEJBQTBCLHlCQUF5QixHQUFHLGlCQUFpQiwwQkFBMEIsdUJBQXVCLDhCQUE4Qix5QkFBeUIsMEJBQTBCLEdBQUcsa0JBQWtCLGlCQUFpQix5QkFBeUIsR0FBRyxtREFBbUQsNENBQTRDLEdBQUcsa0dBQWtHLDBCQUEwQix3QkFBd0IsR0FBRyxxREFBcUQsOENBQThDLEdBQUcsYUFBYSxzQkFBc0IsbUJBQW1CLHlCQUF5Qiw4QkFBOEIsNENBQTRDLEdBQUcsVUFBVSwyQkFBMkIsOEJBQThCLGlDQUFpQyxHQUFHLGdCQUFnQixvQkFBb0IsY0FBYyw2QkFBNkIsa0NBQWtDLDBCQUEwQix1QkFBdUIsNkJBQTZCLEtBQUssb0JBQW9CLHVCQUF1QixrQkFBa0IsR0FBRyx5QkFBeUIsdUJBQXVCLEdBQUcseUJBQXlCLDZCQUE2Qix1QkFBdUIsYUFBYSx1Q0FBdUMsaUJBQWlCLEdBQUcsUUFBUSx3QkFBd0IsR0FBRyxXQUFXLG9CQUFvQixxQkFBcUIsOEJBQThCLGtDQUFrQywwQkFBMEIsbURBQW1ELEdBQUcscUJBQXFCLHNCQUFzQixHQUFHLG1CQUFtQixvQkFBb0Isc0JBQXNCLGtCQUFrQiwrQkFBK0IsaUJBQWlCLHlCQUF5QixHQUFHLHlCQUF5QixzQ0FBc0MsR0FBRyx5QkFBeUIsbUNBQW1DLEdBQUcseUJBQXlCLHVDQUF1QyxHQUFHLHlCQUF5Qiw0Q0FBNEMsR0FBRyx1REFBdUQsZ0NBQWdDLDRDQUE0QyxHQUFHLDBCQUEwQixpQkFBaUIsd0JBQXdCLHNCQUFzQix5QkFBeUIsaUNBQWlDLHlCQUF5QixtQkFBbUIsK0JBQStCLE9BQU8scUVBQXFFLDBCQUEwQixHQUFHLGdDQUFnQywyQkFBMkIsR0FBRyxnQkFBZ0Isb0JBQW9CLGNBQWMsNkJBQTZCLEdBQUcsd0JBQXdCLDBCQUEwQixHQUFHLHFCQUFxQix3QkFBd0IsdUJBQXVCLDJCQUEyQixHQUFHLGlFQUFpRSxrQkFBa0IsR0FBRyw2Q0FBNkMsaUNBQWlDLEdBQUcsNkRBQTZELGlDQUFpQyxHQUFHLFFBQVEsa0JBQWtCLEdBQUcsZ0JBQWdCLDJCQUEyQixHQUFHLGtCQUFrQiwyQkFBMkIsR0FBRyxrQkFBa0IsMkJBQTJCLEdBQUcsMkJBQTJCLG9CQUFvQixnQ0FBZ0MsNEJBQTRCLDBCQUEwQix5QkFBeUIsR0FBRyw2QkFBNkIsa0JBQWtCLEdBQUcsZ0JBQWdCLHdCQUF3QixHQUFHLGtGQUFrRiwwQkFBMEIsR0FBRyx5Q0FBeUMsNENBQTRDLEdBQUcsMEJBQTBCLG9CQUFvQixHQUFHLG1CQUFtQix1QkFBdUIsa0JBQWtCLEdBQUcscUJBQXFCLHFCQUFxQixHQUFHLHdCQUF3Qix5QkFBeUIsaUJBQWlCLDJCQUEyQixHQUFHLDRFQUE0RSxvQ0FBb0MsR0FBRyxpRUFBaUUsNEJBQTRCLEdBQUcsc0JBQXNCLG9CQUFvQiw2QkFBNkIsY0FBYyw4QkFBOEIsMEJBQTBCLEdBQUcsMEJBQTBCLHVCQUF1Qix5QkFBeUIsR0FBRyx5QkFBeUIsMEJBQTBCLGtCQUFrQixHQUFHLHVDQUF1QywyQkFBMkIsR0FBRyw2REFBNkQseUJBQXlCLEdBQUcsd0JBQXdCLHVCQUF1QixzQkFBc0IsR0FBRyx1QkFBdUIsMkJBQTJCLGlDQUFpQyxvQkFBb0IsOEJBQThCLDBCQUEwQixpQ0FBaUMsR0FBRyw0QkFBNEIsbUNBQW1DLEdBQUcseUJBQXlCLGlDQUFpQyxzQkFBc0IsR0FBRyw2RUFBNkUsb0JBQW9CLEdBQUcsbUJBQW1CLDRDQUE0Qyx5QkFBeUIsbUNBQW1DLHNCQUFzQixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyxpREFBaUQsa0JBQWtCLG9CQUFvQixtQkFBbUIsdUJBQXVCLHVDQUF1QyxHQUFHLDhCQUE4QixvQkFBb0IscUNBQXFDLEdBQUcsMkNBQTJDLDRDQUE0QyxzQkFBc0IsR0FBRyw0Q0FBNEMsaUNBQWlDLEdBQUcseURBQXlELDRCQUE0QixHQUFHLDJCQUEyQix1QkFBdUIsa0JBQWtCLE9BQU8scURBQXFELHVDQUF1Qyx5QkFBeUIsaUJBQWlCLHlCQUF5QixzQkFBc0IsbUZBQW1GLG9CQUFvQixHQUFHLG1DQUFtQyxrQkFBa0IsdUJBQXVCLHVDQUF1QyxHQUFHLFlBQVksb0JBQW9CLHFDQUFxQyxHQUFHLDhCQUE4Qix3QkFBd0Isa0JBQWtCLEdBQUcsd0VBQXdFLGtCQUFrQixzQkFBc0IsR0FBRyw4RUFBOEUsaUJBQWlCLEdBQUcsOEJBQThCLG9CQUFvQixHQUFHLHFDQUFxQyw0Q0FBNEMsR0FBRyxnR0FBZ0csaUNBQWlDLEdBQUcsMENBQTBDLDJCQUEyQixHQUFHLDJDQUEyQyx3QkFBd0IsR0FBRywyQ0FBMkMsNEJBQTRCLEdBQUcsMkNBQTJDLGtCQUFrQixHQUFHLGNBQWMsMkJBQTJCLHVCQUF1QixrQkFBa0IsR0FBRyw2REFBNkQsb0JBQW9CLDBCQUEwQixHQUFHLDhDQUE4QywwQkFBMEIsdUJBQXVCLDhCQUE4QiwyQkFBMkIsR0FBRyw2QkFBNkIsb0NBQW9DLG1CQUFtQix1QkFBdUIsR0FBRyxxQ0FBcUMsdUJBQXVCLGtCQUFrQixxQkFBcUIsNkJBQTZCLDhCQUE4Qix1Q0FBdUMsbUZBQW1GLHlCQUF5QixHQUFHLHNCQUFzQix5QkFBeUIsc0JBQXNCLEdBQUcsb0JBQW9CLDRCQUE0QixHQUFHLDJDQUEyQyx1QkFBdUIscUJBQXFCLEdBQUcseUdBQXlHLDJCQUEyQixHQUFHLGdEQUFnRCx1QkFBdUIsR0FBRyxzSUFBc0kscUJBQXFCLEdBQUcscURBQXFELDRDQUE0QyxHQUFHLG1DQUFtQywrQkFBK0IsR0FBRywwQ0FBMEMsc0JBQXNCLEdBQUcsc0RBQXNELHNDQUFzQyw0Q0FBNEMsR0FBRyxnREFBZ0Qsb0JBQW9CLEdBQUcsaUhBQWlILG9CQUFvQixHQUFHLDBHQUEwRyxvQkFBb0IseUJBQXlCLDBCQUEwQixtQkFBbUIsa0JBQWtCLDRDQUE0QyxtQkFBbUIsR0FBRyxpREFBaUQsa0JBQWtCLEdBQUcsMkJBQTJCLHVDQUF1Qyx1QkFBdUIsa0JBQWtCLHlCQUF5Qix1Q0FBdUMsR0FBRyxpREFBaUQsMEJBQTBCLEdBQUcsNEJBQTRCLHNCQUFzQixHQUFHLHdDQUF3Qyx1Q0FBdUMsR0FBRyx5RUFBeUUsNEJBQTRCLEdBQUcsd0JBQXdCLG9CQUFvQixHQUFHLG9CQUFvQixvQkFBb0IseUJBQXlCLGVBQWUsb0NBQW9DLG1CQUFtQixHQUFHLHNCQUFzQixvQkFBb0IsNkJBQTZCLHVDQUF1QywrQkFBK0IscUJBQXFCLHVCQUF1QixrQkFBa0Isd0JBQXdCLHlCQUF5Qix1QkFBdUIsbUZBQW1GLHlCQUF5QixHQUFHLDBCQUEwQixvQkFBb0IsMEJBQTBCLDRCQUE0QixtREFBbUQsR0FBRyw4QkFBOEIsdUJBQXVCLHNCQUFzQixHQUFHLDBDQUEwQywwQkFBMEIsR0FBRyxpQ0FBaUMseUJBQXlCLDRCQUE0QiwyQkFBMkIsdUNBQXVDLHFCQUFxQixHQUFHLG1GQUFtRiw4Q0FBOEMsc0NBQXNDLHdCQUF3QixHQUFHLG1CQUFtQixtQ0FBbUMsR0FBRyx3QkFBd0Isd0JBQXdCLEdBQUcsbUJBQW1CLHVCQUF1Qix1QkFBdUIsNEJBQTRCLE1BQU0sdUJBQXVCLDJCQUEyQixtREFBbUQsNEJBQTRCLFNBQVMsWUFBWSxvQkFBb0IsNkJBQTZCLEdBQUcsMENBQTBDLHVCQUF1QixLQUFLLG1CQUFtQiwwQkFBMEIsdUJBQXVCLDhCQUE4QixHQUFHLGtCQUFrQixvQkFBb0IscUNBQXFDLDBCQUEwQixHQUFHLGtCQUFrQiwyQkFBMkIsR0FBRyx1QkFBdUIsb0JBQW9CLEtBQUssa0NBQWtDLG9CQUFvQixHQUFHLHNIQUFzSCx1Q0FBdUMsdUJBQXVCLGtCQUFrQix5QkFBeUIsR0FBRywwSUFBMEkscUJBQXFCLDJCQUEyQixHQUFHLGlaQUFpWixtREFBbUQsR0FBRyx5TkFBeU4sb0JBQW9CLDZCQUE2QixHQUFHLDBIQUEwSCwyQkFBMkIsR0FBRyxnS0FBZ0ssbUJBQW1CLG9CQUFvQix5QkFBeUIsc0JBQXNCLEdBQUcsd0JBQXdCLHVCQUF1QixHQUFHLHdCQUF3QiwrQkFBK0IsR0FBRyw4QkFBOEIsK0JBQStCLEdBQUcsZ0hBQWdILG9CQUFvQixnQ0FBZ0MscUNBQXFDLEdBQUcsMkhBQTJILHNCQUFzQiwyQkFBMkIsNENBQTRDLEdBQUcsdUxBQXVMLHVDQUF1QyxHQUFHLDZGQUE2RixzQ0FBc0MsR0FBRyx1R0FBdUcsb0JBQW9CLEdBQUcsME1BQTBNLDZDQUE2QyxHQUFHLCtDQUErQyxpQkFBaUIsMkNBQTJDLE9BQU8sa0JBQWtCLDZDQUE2Qyw2QkFBNkIsd0JBQXdCLHVCQUF1QixvQkFBb0Isd0JBQXdCLE9BQU8sMkJBQTJCLHdCQUF3QixPQUFPLHNCQUFzQix1QkFBdUIsT0FBTywyQkFBMkIsa0NBQWtDLE9BQU8sa0JBQWtCLGlDQUFpQyxPQUFPLDZCQUE2QiwyQkFBMkIsT0FBTyxHQUFHLCtDQUErQyxzQkFBc0IsdUJBQXVCLE9BQU8scUJBQXFCLHVCQUF1QixPQUFPLDJCQUEyQix1QkFBdUIsT0FBTyw2QkFBNkIsMkJBQTJCLE9BQU8sd0JBQXdCLDJCQUEyQixPQUFPLEdBQUcsK0NBQStDLHFCQUFxQiwyQkFBMkIsT0FBTywyQkFBMkIsMkJBQTJCLE9BQU8sNkJBQTZCLDJCQUEyQixPQUFPLHdCQUF3QiwyQkFBMkIsT0FBTyxHQUFHLGdEQUFnRCwwQkFBMEIsNEJBQTRCLE9BQU8sR0FBRyxtQkFBbUI7QUFDdCsrQztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLHFCQUFxQjtBQUNqRTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUIsaUJBQWlCO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IscUJBQXFCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRTs7Ozs7Ozs7OztBQ2pFYTs7QUFFYixpQ0FBaUMsMkhBQTJIOztBQUU1Siw2QkFBNkIsa0tBQWtLOztBQUUvTCxpREFBaUQsZ0JBQWdCLGdFQUFnRSx3REFBd0QsNkRBQTZELHNEQUFzRCxrSEFBa0g7O0FBRTlaLHNDQUFzQyx1REFBdUQsdUNBQXVDLFNBQVMsT0FBTyxrQkFBa0IsRUFBRSxhQUFhOztBQUVyTCx3Q0FBd0MsOEZBQThGLHdCQUF3QixlQUFlLGVBQWUsZ0JBQWdCLFlBQVksTUFBTSx3QkFBd0IsK0JBQStCLGFBQWEscUJBQXFCLG1DQUFtQyxFQUFFLEVBQUUsY0FBYyxXQUFXLFVBQVUsRUFBRSxVQUFVLE1BQU0saURBQWlELEVBQUUsVUFBVSxrQkFBa0IsRUFBRSxFQUFFLGFBQWE7O0FBRW5mLCtCQUErQixvQ0FBb0M7O0FBRW5FO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQXNGO0FBQ3RGLE1BQXdHO0FBQ3hHLE1BQW1HOzs7O0FBSW5HOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUU3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDJGQUFTOztBQUUxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLG1GQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsbUZBQU8sSUFBSSwwRkFBYyxHQUFHLDBGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUNqRGhFOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFEQUFxRDs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsMkI7Ozs7Ozs7Ozs7QUMxQmE7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsd0JBQXdCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGlCQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLDRCQUE0QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxvQkFBb0IsNkJBQTZCO0FBQ2pEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7O0FDaEdhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9DOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsR0FBRzs7QUFFSDs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0NhOztBQUViO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNDQUFzQztBQUN0Qyw4Q0FBOEM7O0FBRTlDLENBQUM7O0FBRWtDOzs7Ozs7Ozs7Ozs7Ozs7O0FDOURNOztBQUV6Qzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMENBQVcsQ0FBQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsaUVBQWUsU0FBUyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvWVg7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7O1VDeEpEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGO1dBQ0E7V0FDQSxDQUFDLEk7Ozs7O1dDUEQsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esa0M7Ozs7Ozs7Ozs7Ozs7OztBQ2ZxQjtBQUNZO0FBQ1M7QUFDYjtBQUNzQzs7QUFFbkU7O0FBRUEsNERBQWtCO0FBQ2xCO0FBQ0E7O0FBRUEsa0VBQXdCO0FBQ3hCO0FBQ0EsSUFBSSwwREFBZ0I7QUFDcEI7QUFDQSxDIiwiZmlsZSI6ImluZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLWxpZ2h0OTI6IGhzbCgwLCAwJSwgOTIlKTtcXG4gICAgLS1saWdodDg4OiBoc2woMCwgMCUsIDg4JSk7XFxuICAgIC0tZGFyazogaHNsKDAsIDAlLCAxMiUpO1xcbiAgICAtLW1hbGlidTogaHNsKDE5MiwgOTMlLCA3MiUpO1xcbiAgICAtLWF1YnVybjogaHNsKDAsIDc1JSwgNjUlKTtcXG4gICAgLS1tYXJpbmVyOiBoc2woMjE2LCA3NSUsIDUxJSk7XFxuICAgIC0tbGF1cmVsOiBoc2woMTIwLCAxMDAlLCAyNSUpO1xcbiAgICAtLXB1cnBsZTogaHNsKDI2NCwgNjElLCA0NyUpO1xcbiAgICAtLXN1bjogaHNsKDM0LCA5MyUsIDQ4JSk7XFxuICAgIC0tdHJhbnNwYXJlbnQxOiByZ2JhKDAsMCwwLC4xKTtcXG4gICAgLS10cmFuc3BhcmVudDI6IHJnYmEoMCwwLDAsLjIpO1xcblxcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWxpZ2h0OTIpO1xcbiAgICAtLWZvcmVncm91bmQ6IHZhcigtLW1hbGlidSk7XFxufVxcblxcbiosICo6YmVmb3JlLCAqOmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwOyAgXFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG4gICAgZm9udC1mYW1pbHk6c2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHZhcigtLWRhcmspO1xcbn1cXG5cXG5idXR0b24sXFxuLnNlYXJjaC1pbnB1dCB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBmb250LWZhbWlseTpzYW5zLXNlcmlmO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBwYWRkaW5nOiAuMTI1cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tZGFyayk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG5idXR0b24sXFxuLmljLWRpdiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuc3Bhbi5taWQge1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG5zcGFuLFxcbmgxIHtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5hcHAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi5uYXYtY29tcCAsXFxuLm5jLWxlZnQsXFxuLnNlYXJjaC1kaXYsXFxuLm5jLXJpZ2h0IHtcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxufVxcblxcbi5uYXYtY29tcCB7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IC41cmVtIDNyZW0gLjVyZW0gM3JlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9yZWdyb3VuZCk7XFxufVxcblxcbi5uYy1sZWZ0ID4gKiB7XFxuICAgIG1hcmdpbjogMCAuMjVyZW0gMCAwO1xcbn1cXG5cXG4ubmMtcmlnaHQgPiAqIHtcXG4gICAgbWFyZ2luOiAwIDAgMCAuMjVyZW07XFxufVxcblxcbi5uYy1yaWdodCBidXR0b246Zmlyc3QtY2hpbGQge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi5zZWFyY2gtZGl2IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb3JlZ3JvdW5kKTtcXG59XFxuXFxuLnNlYXJjaC1kaXYgPiBzcGFuOmZpcnN0LWNoaWxkIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBjdXJzb3I6IHRleHQ7XFxuICAgIG1hcmdpbjogLjFyZW07XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG4uc2VhcmNoLWRpdiBidXR0b24ge1xcbiAgICBtYXJnaW46IC4ycmVtIDAgLjJyZW0gLTEuNXJlbTtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc2VhcmNoLWRpdiBidXR0b246aG92ZXIsXFxuLnNlYXJjaC1kaXYgYnV0dG9uOmZvY3VzLXZpc2libGUge1xcbiAgICBjb2xvcjogdmFyKC0tYXVidXJuKTtcXG59XFxuXFxuLnNlYXJjaC1pbnB1dCB7XFxuICAgIHBhZGRpbmc6IDAgMS42cmVtIDAgMS44cmVtO1xcbiAgICBtYXJnaW4tbGVmdDogLTEuOXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQxKTtcXG59XFxuXFxuLnNlYXJjaC1pbnB1dDo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbiB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLnNlYXJjaC1pbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSArIGJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uc2VhcmNoLWRpdjpmb2N1cy13aXRoaW4gLnNlYXJjaC1pbnB1dCxcXG4uc2VhcmNoLWRpdjpob3ZlciAuc2VhcmNoLWlucHV0LFxcbi5zZWFyY2gtaW5wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bil7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0OTIpO1xcbn1cXG5cXG4uc2VhcmNoLWRpdiBidXR0b24gc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmFwcC1ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleDogMTtcXG4gICAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gNDYuNTlweCk7XFxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uaW5mby1jb21wIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMnJlbSAuMjVyZW0gMCAyLjhyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ODgpO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4uaW5mby1jb21wID4gKiB7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGZvbnQtc2l6ZTogLjlyZW07XFxuICAgIHdpZHRoOiAyOTRweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4uaW5mby1jb21wID4gKiA+IHNhbXAge1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIG9wYWNpdHk6IC41O1xcbiAgICBtYXJnaW46IDRweCAxcmVtIDRweCAwO1xcbn1cXG5cXG4uaWMtZGl2IHtcXG4gICAgbWFyZ2luOiAuMjVyZW0gMCAwIDA7XFxufVxcblxcbi5pbmZvLWNvbXAgPiBkaXY6Zmlyc3Qtb2YtdHlwZXtcXG4gICAgbWFyZ2luOiAxcmVtIDAgMCAwO1xcbn1cXG5cXG4uaWMtc3BhbiB7XFxuICAgIG1hcmdpbjogMCAuMjVyZW0gMCAwO1xcbn1cXG5cXG4uaW5mby1jb21wID4gYnV0dG9uOmZpcnN0LWNoaWxkIHNwYW4ge1xcbiAgICBjb2xvcjogdmFyKC0tbWFyaW5lcik7XFxufVxcblxcbi5pbmZvLWNvbXAgPiBidXR0b246bnRoLWNoaWxkKDIpIHNwYW4ge1xcbiAgICBjb2xvcjogdmFyKC0tbGF1cmVsKTtcXG59XFxuXFxuLmluZm8tY29tcCA+IGJ1dHRvbjpudGgtY2hpbGQoMykgc3BhbiB7XFxuICAgIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xcbn1cXG5cXG4ub3BhIHtcXG4gICAgb3BhY2l0eTogLjU7XFxufVxcblxcbi5pYy1hZGQtYnRuIHtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBtYXJnaW46IDBweCAuNXJlbSAwIDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5pYy1hZGQtYnRuOmhvdmVyICsgc3Ryb25nLFxcbi5pYy1hZGQtYnRuOmZvY3VzLXZpc2libGUgKyBzdHJvbmcge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgdGV4dC11bmRlcmxpbmUtb2Zmc2V0OiAzMCU7XFxufVxcblxcbi5pbmZvLWNvbXA6Zm9jdXMtd2l0aGluIC5pYy1hZGQtYnRuLFxcbi5pbmZvLWNvbXA6aG92ZXIgLmljLWFkZC1idG57XFxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XFxufVxcblxcbi5pYy1kaXYgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaWMtZGl2ID4gZGl2LnNob3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uaWMtcHJvamVjdCA+IHNwYW4ucm90YXRlLFxcbi5pYy1sYWJlbCA+IHNwYW4ucm90YXRlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG5cXG5cXG4uc2hvdyB7XFxuICAgIG1hcmdpbjogLjc1cmVtIDAgMCAwO1xcbn1cXG5cXG4uc2hvdyA+IGRpdiB7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IC41cmVtIC41cmVtIC41cmVtIC41cmVtO1xcbiAgICBoZWlnaHQ6IDM0cHg7XFxuICAgIGZvbnQtc2l6ZTogLjlyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuc3Bhbi51bmlxdWUge1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBtYXJnaW4tcmlnaHQ6IC4ycmVtO1xcbn1cXG5cXG4uc2hvdyBidXR0b24ge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5zaG93ID4gZGl2OmhvdmVyLFxcbi5zaG93ID4gZGl2OmZvY3VzLXZpc2libGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudDIpO1xcbn1cXG5cXG4uc2hvdyA+IGRpdjpob3ZlciBidXR0b24sXFxuLnNob3cgPiBkaXY6Zm9jdXMtdmlzaWJsZSBidXR0b24sXFxuLnNob3cgPiBkaXY6Zm9jdXMtd2l0aGluIGJ1dHRvbntcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5zaG93IGJ1dHRvbjpob3ZlcixcXG4uc2hvdyBidXR0b246Zm9jdXMtdmlzaWJsZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50IWltcG9ydGFudDtcXG59XFxuXFxuLmJ1bGxldCB7XFxuICAgIG1pbi13aWR0aDogMTBweDtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIG1hcmdpbjogMCAuN3JlbSAwIC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudDIpO1xcbn1cXG5cXG4udGFnIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSguOCk7XFxuICAgIG1hcmdpbjogMCAuMnJlbSAwIC4ycmVtO1xcbiAgICBjb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQyKTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXg6IDE7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgcGFkZGluZzogMCAycmVtIDAgMnJlbTtcXG5cXG59XFxuXFxuLmNvbnRhaW5lciA+ICoge1xcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNvbnRhaW5lciA+IGZvb3RlciB7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxufVxcblxcbi5jb250YWluZXIgPiBoZWFkZXIge1xcbiAgICBwYWRkaW5nOiAycmVtIDAgMXJlbSAwO1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB0b3A6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0OTIpO1xcbiAgICB6LWluZGV4OiAzO1xcbn1cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4udG9kbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDJweCAwO1xcbiAgICBtYXJnaW46IC41cmVtIDAgLjVyZW0gMDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tdHJhbnNwYXJlbnQxKTtcXG59XFxuXFxuLnRvZG8sXFxuLnRvZG8gKiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNoZWNrYm94LWJ0biB7IFxcbiAgICBoZWlnaHQ6IDE4cHg7XFxuICAgIG1heC13aWR0aDogMThweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogLjI3cmVtIC43cmVtIDAgMDtcXG4gICAgei1pbmRleDogMjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uY2hlY2tib3gtYnRuLnByaW8xIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYXVidXJuKTtcXG59XFxuXFxuLmNoZWNrYm94LWJ0bi5wcmlvMiB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXN1bik7XFxufVxcblxcbi5jaGVja2JveC1idG4ucHJpbzMge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1tYXJpbmVyKTtcXG59XFxuXFxuLmNoZWNrYm94LWJ0bi5wcmlvNCB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXRyYW5zcGFyZW50Mik7XFxufVxcblxcbi5jaGVja2JveC1idG46aG92ZXIsXFxuLmNoZWNrYm94LWJ0bjpmb2N1cy12aXNpYmxlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQxKTtcXG59XFxuXFxuLmNoZWNrYm94LWJ0biArIHNwYW4ge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBsaW5lLWhlaWdodDogMXJlbTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGNvbG9yOiB2YXIoLS10cmFuc3BhcmVudDIpO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgbWFyZ2luOiAtLjlyZW0gMCAwIC0xcmVtOyAgICBcXG59XFxuXFxuLmNoZWNrYm94LWJ0bjpob3ZlciArIHNwYW4sXFxuLmNoZWNrYm94LWJ0bjpmb2N1cy12aXNpYmxlICsgc3BhbiB7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi5jaGVja2JveC1idG46YWN0aXZlICsgc3BhbntcXG4gICAgY29sb3I6IHZhcigtLWxhdXJlbCk7XFxufVxcblxcbi50b2RvLXRleHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiAxO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udG9kby10ZXh0ID4gbGFiZWwge1xcbiAgICBsaW5lLWhlaWdodDogMS40cmVtO1xcbn1cXG5cXG4udG9kby10ZXh0LW5vdGUge1xcbiAgICB0ZXh0LWluZGVudDogMXJlbTtcXG4gICAgZm9udC1zaXplOiAuOXJlbTtcXG4gICAgbWFyZ2luOiAwIDAgLjI1cmVtIDA7XFxufVxcblxcbi50b2RvLXRleHQtbm90ZSxcXG4udG9kby10ZXh0LW5vdGUgPiBzcGFuLFxcbi50b2RvLXRleHQgc21hbGwge1xcbiAgICBjb2xvcjogZ3JheTtcXG59XFxuXFxuLnRvZG8tdGV4dC1ub3RlID4gc3BhbixcXG5lbSxcXG5lbSA+IHNwYW4ge1xcbiAgICBmb250LXNpemU6IC45cmVtIWltcG9ydGFudDtcXG59XFxuXFxuLnRvZG8tdGV4dCBzbWFsbDpob3ZlcixcXG4udG9kby10ZXh0IHNtYWxsOmZvY3VzLXZpc2libGUge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuZW0ge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnNjaGVkLWR1ZSB7XFxuICAgIGNvbG9yOiB2YXIoLS1hdWJ1cm4pO1xcbn1cXG5cXG4uc2NoZWQtdG9kYXkge1xcbiAgICBjb2xvcjogdmFyKC0tbGF1cmVsKTtcXG59XFxuXFxuLnNjaGVkLXVwY29tIHtcXG4gICAgY29sb3I6IHZhcigtLXB1cnBsZSk7XFxufVxcblxcbi50b2RvLXRvb2xzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgbWFyZ2luOiAtMjBweCAwIDAgMDtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4udG9kby10b29scy1jb250YWluZXIgKiB7XFxuICAgIGNvbG9yOiBncmF5O1xcbn1cXG5cXG4udG9vbC1zcGFuIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi50b2RvOmhvdmVyIC50b2RvLXRvb2xzLWNvbnRhaW5lcixcXG4udG9kbzpmb2N1cy13aXRoaW4gLnRvZG8tdG9vbHMtY29udGFpbmVyIHtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuYnV0dG9uOmhvdmVyLFxcbmJ1dHRvbjpmb2N1cy12aXNpYmxlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQyKTtcXG59XFxuXFxuYnV0dG9uOmZvY3VzLXZpc2libGUge1xcbiAgICBvdXRsaW5lOiBhdXRvO1xcbn1cXG5cXG4uYWRkLXRhc2stYnRuIHtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgY29sb3I6IGdyYXk7XFxufVxcblxcbi5hZGQtdGFzay1idG4gKiB7XFxuICAgIHBhZGRpbmc6IC4xcmVtO1xcbn1cXG5cXG4uYWRkLXRhc2stYnRuIHNwYW4ge1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGNvbG9yOiB2YXIoLS1hdWJ1cm4pO1xcbn1cXG5cXG4uYWRkLXRhc2stYnRuOmhvdmVyLFxcbi5hZGQtdGFzay1idG46Zm9jdXMtdmlzaWJsZSxcXG4uYWRkLXRhc2stYnRuIHNwYW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmFkZC10YXNrLWJ0bjpob3ZlciBzcGFuLFxcbi5hZGQtdGFzay1idG46Zm9jdXMtdmlzaWJsZSBzcGFuIHtcXG4gICAgY29sb3I6IHZhcigtLW1hcmluZXIpO1xcbn1cXG5cXG4uZW1wdHktc3RhdGUtZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleDogMTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5lbXB0eS1zdGF0ZS1kaXYgaW1nIHtcXG4gICAgbWF4LXdpZHRoOiAxODBweDtcXG4gICAgXFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuXFxuLmVtcHR5LXN0YXRlLWRpdiBoNCB7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIGNvbG9yOiBncmF5O1xcbn1cXG5cXG4uZW1wdHktc3RhdGUtZGl2ICo6bnRoLWNoaWxkKG4rMikge1xcbiAgICBtYXJnaW46IC4yNXJlbSAwIDAgMDtcXG59XFxuXFxuLmVtcHR5LXN0YXRlLWRpdiAqOm50aC1jaGlsZChuKzIpLFxcbi5jb250YWluZXIgZm9vdGVyIHAge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5lbXB0eS1zdGF0ZS1kaXYgcCB7XFxuICAgIGZvbnQtc2l6ZTogLjlyZW07XFxuICAgIGNvbG9yOiBkYXJrZ3JheTtcXG59XFxuXFxuLmNvbnRhaW5lciBmb290ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tYXVidXJuKTtcXG4gICAgZm9udC1zaXplOiAuOXJlbSFpbXBvcnRhbnQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAuMjVyZW0gMCAuNzVyZW0gMDtcXG59XFxuXFxuLmNvbnRhaW5lciBmb290ZXIgc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbSFpbXBvcnRhbnQ7XFxufVxcblxcbi5jb250YWluZXIgZm9vdGVyIHAge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY29udGFpbmVyOm5vdCguZW1wdHkpIC5lbXB0eS1zdGF0ZS1kaXYsXFxuLmNvbnRhaW5lcjpub3QoLmVtcHR5KSBmb290ZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uYWRkLXRhc2stZGl2IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdHJhbnNwYXJlbnQyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBwYWRkaW5nOiAwIC41cmVtIC41cmVtIC41cmVtO1xcbiAgICBoZWlnaHQ6IDY4LjQ4cHg7XFxufVxcblxcbi5hZGQtdGFzay1kaXYgPiAqIHtcXG4gICAgbWFyZ2luLXRvcDogLjVyZW07XFxufVxcblxcbi5hZGQtdGFzay1kaXYgaW5wdXQsXFxuLnF1aWNrLWFkZC10b2RvIGlucHV0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAuOXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQ5Mik7XFxufVxcblxcbi5hZGQtdGFzay1idG5zLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmFkZC10YXNrLWJ0bnMtY29udGFpbmVyIGRpdiA+IGJ1dHRvbiB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRyYW5zcGFyZW50Mik7XFxuICAgIHBhZGRpbmc6IC4yNXJlbTtcXG59XFxuXFxuLmFkZC10YXNrLWJ0bnMtY29udGFpbmVyIGJ1dHRvbiA+IHNwYW4ge1xcbiAgICBmb250LXNpemU6IC45cmVtIWltcG9ydGFudDtcXG59XFxuXFxuLmFkZC10YXNrLWJ0bnMtY29udGFpbmVyID4gYnV0dG9uOm50aC1jaGlsZCgyKSBzcGFuIHtcXG4gICAgY29sb3I6IHZhcigtLW1hcmluZXIpO1xcbn1cXG5cXG4uc2NoZWR1bGVyLFxcbi5jYXJyaWVyIHtcXG4gICAgbWF4LXdpZHRoOiAyMTBweDtcXG4gICAgd2lkdGg6IDEwMCU7ICAgIFxcbn1cXG5cXG4uc2NoZWR1bGVyLFxcbi5jYXJyaWVyLFxcbi5sYWJlbGVyLFxcbi5wcmlvLXNldHRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0OTIpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luOiAwIDAgMCAwO1xcbiAgICBib3gtc2hhZG93OiAwIDFweCA4cHggMCByZ2IoMCAwIDAgLyA4JSksXFxuICAgICAgICAwIDAgMXB4IDAgcmdiKDAgMCAwIC8gMzAlKTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnNjaGVkdWxlciA+ICosXFxuLmNhcnJpZXIgPiAqIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIHBhZGRpbmc6IC41cmVtIC41cmVtIC41cmVtIC41cmVtO1xcbn1cXG5cXG4uc2NoZWQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5zY2hlZCBzcGFuOm50aC1jaGlsZCgyKSB7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICBjb2xvcjogZ3JheTtcXG59XFxuXFxuLnNjaGVkdWxlciBpbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XFxuICAgIG9wYWNpdHk6IC40O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zY2hlZHVsZXIgaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3I6aG92ZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uc2NoZWR1bGVyIC5zY2hlZC1jdXN0b20ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uc2NoZWR1bGVyIC5zY2hlZC1jdXN0b20gYnV0dG9uIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdHJhbnNwYXJlbnQxKTtcXG59XFxuXFxuLnNjaGVkdWxlciAuc2NoZWQtY3VzdG9tIGJ1dHRvbiA+IHNwYW4sXFxuLmNhcnJpZXIgc3BhbixcXG4ubGFiZWxlciBzcGFuLFxcbi5wcmlvLXNldHRlciBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAuOXJlbSFpbXBvcnRhbnQ7XFxufVxcblxcbi5wcmlvLXNldHRlciBidXR0b246Zmlyc3QtY2hpbGQgc3BhbiB7XFxuICAgIGNvbG9yOiB2YXIoLS1hdWJ1cm4pO1xcbn1cXG5cXG4ucHJpby1zZXR0ZXIgYnV0dG9uOm50aC1jaGlsZCgyKSBzcGFuIHtcXG4gICAgY29sb3I6IHZhcigtLXN1bik7XFxufVxcblxcbi5wcmlvLXNldHRlciBidXR0b246bnRoLWNoaWxkKDMpIHNwYW4ge1xcbiAgICBjb2xvcjogdmFyKC0tbWFyaW5lcik7XFxufVxcblxcbi5wcmlvLXNldHRlciBidXR0b246bnRoLWNoaWxkKDQpIHNwYW4ge1xcbiAgICBjb2xvcjogZ3JheTtcXG59XFxuXFxuLmNhcnJpZXIge1xcbiAgICBtYXJnaW46IDAgMCAwIC0uN3JlbTtcXG4gICAgbWF4LXdpZHRoOiAxNjBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jYXJyaWVyIGJ1dHRvbixcXG4ubGFiZWxlciBidXR0b24sXFxuLnByaW8tc2V0dGVyIGJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jYXJyaWVyIHUsXFxuLmxhYmVsZXIgdSxcXG4ucHJpby1zZXR0ZXIgdSB7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICBtYXJnaW46IDAgMCAwIC4yNXJlbTtcXG59XFxuXFxuLmxhYmVsZXIsXFxuLnByaW8tc2V0dGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLmxhYmVsZXIgZGl2LFxcbi5wcmlvLXNldHRlciBkaXYge1xcbiAgICBtYXgtd2lkdGg6IDE2MHB4O1xcbiAgICB3aWR0aDogMTAwJTsgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbjogMCAxLjhyZW0gMCBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodDkyKTtcXG4gICAgYm94LXNoYWRvdzogMCAxcHggOHB4IDAgcmdiKDAgMCAwIC8gOCUpLFxcbiAgICAgICAgMCAwIDFweCAwIHJnYigwIDAgMCAvIDMwJSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuLnByaW8tc2V0dGVyIGRpdiB7XFxuICAgIG1hcmdpbjogMCAwIDAgYXV0bztcXG4gICAgbWF4LXdpZHRoOiA4OHB4O1xcbn1cXG5cXG4ucHJpby1zZXR0ZXIgdSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmxhYmVsZXIgYnV0dG9uLFxcbi5wcmlvLXNldHRlciBidXR0b24ge1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG59XFxuXFxuLnNjaGVkdWxlciAuc2NoZWQtY3VzdG9tIGJ1dHRvbjpob3ZlciA+IHNwYW4sXFxuLnNjaGVkdWxlciAuc2NoZWQtY3VzdG9tIGJ1dHRvbjpmb2N1cy12aXNpYmxlID4gc3BhbiB7XFxuICAgIGNvbG9yOiB2YXIoLS1sYXVyZWwpO1xcbn1cXG5cXG4uYWRkLXRhc2stZGl2LmRpc3BsYXktc2NoZWR1bGVyIC5zY2hlZHVsZXIge1xcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xcbn1cXG5cXG4uYWRkLXRhc2stZGl2LmRpc3BsYXktY2FycmllciAuY2FycmllcixcXG4uYWRkLXRhc2stZGl2LmRpc3BsYXktbGFiZWxlciAubGFiZWxlcixcXG4uYWRkLXRhc2stZGl2LmRpc3BsYXktcHJpby1zZXR0ZXIgLnByaW8tc2V0dGVyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5hZGQtdGFzay1kaXYgLnNlbGVjdGVkLFxcbi5hZGQtdGFzay1kaXYgLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50MSk7XFxufVxcblxcbi5hZGQtdGFzay1tYWluLWJ0bnMtY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogLjVyZW0gMCAuNXJlbSAwO1xcbn1cXG5cXG4uYWRkLXRhc2stbWFpbi1idG5zLWNvbnRhaW5lciBidXR0b24ge1xcbiAgICBwYWRkaW5nOiAuMjVyZW07XFxufVxcblxcbi5hZGQtdGFzay1tYWluLWJ0bnMtY29udGFpbmVyIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1hbGlidSk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRyYW5zcGFyZW50Mik7XFxufVxcblxcbi5jb250YWluZXIuYWRkLXRyaWdnZXJlZCAuYWRkLXRhc2stYnRuLWRpdiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jb250YWluZXI6bm90KC5hZGQtdHJpZ2dlcmVkKSAuYWRkLXRhc2stZGl2LFxcbi5jb250YWluZXI6bm90KC5hZGQtdHJpZ2dlcmVkKSAuYWRkLXRhc2stbWFpbi1idG5zLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5xdWljay1hZGQtdG9kbyxcXG4ucHJvamVjdC1jcmVhdG9yLFxcbi5sYWJlbC1jcmVhdG9yLFxcbi50b2RvLWVkaXRvcixcXG4ucHJvamVjdC1lZGl0b3IsXFxuLmxhYmVsLWVkaXRvciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQyKTtcXG4gICAgei1pbmRleDogOTk5O1xcbn1cXG5cXG4ucXVpY2stYWRkLXRvZG8gPiAqLFxcbi5xdWljay1hZGQtdG9kbyBpbnB1dCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucXVpY2stYWRkLXRvZG8gPiBkaXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodDkyKTtcXG4gICAgbWF4LXdpZHRoOiA0ODBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgcGFkZGluZzogLjVyZW0gLjVyZW0gLjVyZW0gLjVyZW07XFxufVxcblxcbi5xdWljay1hZGQtdG9kbyA+IGRpdiA+ICo6bm90KDpmaXJzdC1jaGlsZCkge1xcbiAgICBtYXJnaW46IC41cmVtIDAgMCAwO1xcbn1cXG5cXG4ucXVpY2stYWRkLXRvZG8gYnV0dG9uIHtcXG4gICAgcGFkZGluZzogLjI1cmVtO1xcbn1cXG5cXG4ucXVpY2stYWRkLXRvZG8gYnV0dG9uOmZpcnN0LWNoaWxkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFyaW5lcik7XFxufVxcblxcbi5xdWljay1hZGQtdG9kbyBidXR0b246aG92ZXIsXFxuLnF1aWNrLWFkZC10b2RvIGJ1dHRvbjpmb2N1cy12aXNpYmxlIHtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0OTIpO1xcbn1cXG5cXG4ucXVpY2stYWRkLXRvZG8ub24ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4ubm90aWZpY2F0aW9ucyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaW5zZXQ6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICB6LWluZGV4OiA5OTk7XFxufVxcblxcbi5ub3RpZi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodDkyKTtcXG4gICAgbWFyZ2luOiA0MHB4IDAgYXV0byBhdXRvO1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG4gICAgbWF4LXdpZHRoOiA0MjBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC1oZWlnaHQ6IDMyMHB4O1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDhweCAwIHJnYigwIDAgMCAvIDglKSxcXG4gICAgICAgIDAgMCAxcHggMCByZ2IoMCAwIDAgLyAzMCUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi5ub3RpZi1jb250YWluZXIgbmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMCAwIC4yNXJlbSAwO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tdHJhbnNwYXJlbnQyKTtcXG59XFxuXFxuLm5vdGlmLWNvbnRhaW5lciBuYXYgPiAqIHtcXG4gICAgZm9udC1zaXplOiAuOXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubm90aWYtY29udGFpbmVyIGJ1dHRvbjpmaXJzdC1vZi10eXBle1xcbiAgICBtYXJnaW46IDAgMCAwIC41cmVtO1xcbn1cXG5cXG4ubmF2LWJ0bi1ub3RpZmljYXRpb24gc21hbGwge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxcbiAgICBjb2xvcjogdmFyKC0tYXVidXJuKTtcXG4gICAgbWFyZ2luLWxlZnQ6IC0uODVyZW07IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWxpYnUpO1xcbiAgICBwYWRkaW5nOiAwIDFweDtcXG59XFxuXFxuLm5hdi1idG4tbm90aWZpY2F0aW9uOmhvdmVyIHNtYWxsLFxcbi5uYXYtYnRuLW5vdGlmaWNhdGlvbjpmb2N1cy12aXNpYmxlIHNtYWxsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQhaW1wb3J0YW50O1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQ5MikhaW1wb3J0YW50O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnJlYWQtYWxsLWJ0biB7XFxuICAgIG1hcmdpbjogMCAwIDAgYXV0byFpbXBvcnRhbnQ7XFxufVxcblxcbi5yZWFkLWFsbC1idG4gc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4ubm90aWYtb3V0cHV0IHtcXG4gICAgbWFyZ2luOiAwIC4yNXJlbTtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgLyogb3ZlcmZsb3cteDogaGlkZGVuOyAqL1xcbn1cXG5cXG4ubm90aWYtb3V0cHV0ID4gKiB7XFxuICAgIG1hcmdpbjogLjI1cmVtIDAgMCAwO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tdHJhbnNwYXJlbnQxKTtcXG4gICAgcGFkZGluZzogMCAwIC4yNXJlbSAwO1xcbiAgICBcXG59XFxuXFxuLm5vdGlmIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm5vdGlmID4gKixcXG4ubm90aWYtZXh0cmEgYnV0dG9uIHNwYW57XFxuICAgIGZvbnQtc2l6ZTogLjlyZW07ICBcXG59XFxuXFxuLm5vdGlmID4gc3BhbiB7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG5cXG4ubm90aWYtZXh0cmEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ub3RpZiBzbWFsbCB7XFxuICAgIGNvbG9yOiB2YXIoLS1hdWJ1cm4pO1xcbn1cXG5cXG4ubm90aWZpY2F0aW9ucy5vbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuXFxufVxcblxcbi5hcHAuc2VhcmNoIC5hZGQtdGFzay1idG4tZGl2e1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucHJvamVjdC1jcmVhdG9yID4gZGl2LFxcbi5sYWJlbC1jcmVhdG9yID4gZGl2LFxcbi50b2RvLWVkaXRvciA+IGRpdixcXG4ucHJvamVjdC1lZGl0b3IgPiBkaXYsXFxuLmxhYmVsLWVkaXRvciA+IGRpdiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0OTIpO1xcbiAgICBtYXgtd2lkdGg6IDQyMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4ucHJvamVjdC1jcmVhdG9yID4gZGl2ID4gKixcXG4ubGFiZWwtY3JlYXRvciA+IGRpdiA+ICosXFxuLnRvZG8tZWRpdG9yID4gZGl2ID4gKixcXG4ucHJvamVjdC1lZGl0b3IgPiBkaXYgPiAqLFxcbi5sYWJlbC1lZGl0b3IgPiBkaXYgPiAqIHtcXG4gICAgcGFkZGluZzogLjVyZW07XFxuICAgIG1hcmdpbjogMCAwIC4yNXJlbSAwO1xcbn1cXG5cXG4ucHJvamVjdC1jcmVhdG9yID4gZGl2ID4gKjpmaXJzdC1jaGlsZCwgXFxuLnByb2plY3QtY3JlYXRvciA+IGRpdiA+ICo6bnRoLWNoaWxkKDIpLFxcbi5sYWJlbC1jcmVhdG9yID4gZGl2ID4gKjpmaXJzdC1jaGlsZCwgXFxuLmxhYmVsLWNyZWF0b3IgPiBkaXYgPiAqOm50aC1jaGlsZCgyKSxcXG4udG9kby1lZGl0b3IgPiBkaXYgPiAqOmZpcnN0LWNoaWxkLCBcXG4udG9kby1lZGl0b3IgPiBkaXYgPiAqOm50aC1jaGlsZCgyKSxcXG4ucHJvamVjdC1lZGl0b3IgPiBkaXYgPiAqOmZpcnN0LWNoaWxkLFxcbi5wcm9qZWN0LWVkaXRvciA+IGRpdiA+ICo6bnRoLWNoaWxkKDIpLFxcbi5sYWJlbC1lZGl0b3IgPiBkaXYgPiAqOmZpcnN0LWNoaWxkLFxcbi5sYWJlbC1lZGl0b3IgPiBkaXYgPiAqOm50aC1jaGlsZCgyKSB7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS10cmFuc3BhcmVudDEpO1xcbn1cXG5cXG4ucHJvamVjdC1jcmVhdG9yID4gZGl2LFxcbi5wcm9qZWN0LWlucHV0LFxcbi5sYWJlbC1jcmVhdG9yID4gZGl2LFxcbi5sYWJlbC1pbnB1dCxcXG4udG9kby1lZGl0b3IgPiBkaXYsXFxuLnRvZG8tZWRpdG9yLWlucHV0LFxcbi5wcm9qZWN0LWVkaXRvciA+IGRpdixcXG4ucHJvamVjdC1lZGl0b3ItaW5wdXQsXFxuLmxhYmVsLWVkaXRvciA+IGRpdixcXG4ubGFiZWwtZWRpdG9yLWlucHV0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnByb2plY3QtaW5wdXQgPiAqLFxcbi5sYWJlbC1pbnB1dCA+ICosXFxuLnRvZG8tZWRpdG9yLWlucHV0ID4gKixcXG4ucHJvamVjdC1lZGl0b3ItaW5wdXQgPiAqLFxcbi5sYWJlbC1lZGl0b3ItaW5wdXQgPiAqIHtcXG4gICAgbWFyZ2luOiAwIDAgLjI1cmVtIDA7XFxufVxcblxcbi5wcm9qZWN0LWlucHV0IGlucHV0LFxcbi5sYWJlbC1pbnB1dCBpbnB1dCxcXG4udG9kby1lZGl0b3ItaW5wdXQgaW5wdXQsXFxuLnRvZG8tZWRpdG9yLWlucHV0IHNlbGVjdCxcXG4ucHJvamVjdC1lZGl0b3ItaW5wdXQgaW5wdXQsXFxuLmxhYmVsLWVkaXRvci1pbnB1dCBpbnB1dCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICBwYWRkaW5nOiAuMjVyZW07XFxufVxcblxcbi50b2RvLWVkaXRvci1pbnB1dCB7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi50b2RvLWVkaXRvci1pbnB1dCB7XFxuICAgIHBhZGRpbmctdG9wOiAwIWltcG9ydGFudDtcXG59XFxuXFxuLnRvZG8tZWRpdG9yLWlucHV0IGxhYmVsIHtcXG4gICAgbWFyZ2luOiAuMjVyZW0gMCAuMXJlbSAwO1xcbn1cXG5cXG4ucHJvamVjdC1idXR0b25zLFxcbi5sYWJlbC1idXR0b25zLFxcbi50b2RvLWVkaXRvci1idXR0b25zLFxcbi51cGRhdGUtcHJvamVjdC1idXR0b25zLFxcbi51cGRhdGUtbGFiZWwtYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7ICAgIFxcbiAgICBtYXJnaW4tYm90dG9tOiAwIWltcG9ydGFudDtcXG59XFxuXFxuLnByb2plY3QtY3JlYXRvciBidXR0b24sXFxuLmxhYmVsLWNyZWF0b3IgYnV0dG9uLFxcbi50b2RvLWVkaXRvciBidXR0b24sXFxuLnByb2plY3QtZWRpdG9yIGJ1dHRvbixcXG4ubGFiZWwtZWRpdG9yIGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IC4yNXJlbTtcXG4gICAgbWFyZ2luOiAwIDAgMCAuMjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50MSk7XFxufVxcblxcbi5wcm9qZWN0LWNyZWF0b3IgYnV0dG9uOmZpcnN0LWNoaWxkLFxcbi5sYWJlbC1jcmVhdG9yIGJ1dHRvbjpmaXJzdC1jaGlsZCxcXG4udG9kby1lZGl0b3IgYnV0dG9uOmZpcnN0LWNoaWxkLFxcbi5wcm9qZWN0LWVkaXRvciBidXR0b246Zmlyc3QtY2hpbGQsXFxuLmxhYmVsLWVkaXRvciBidXR0b246Zmlyc3QtY2hpbGQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYXJpbmVyKTtcXG59XFxuXFxuLnVwZGF0ZS1wcm9qZWN0LWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCgzKSxcXG4udXBkYXRlLWxhYmVsLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCgzKSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWF1YnVybik7XFxufVxcblxcbi5wcm9qZWN0LWNyZWF0b3Iub24sXFxuLmxhYmVsLWNyZWF0b3Iub24sXFxuLnRvZG8tZWRpdG9yLm9uLFxcbi5wcm9qZWN0LWVkaXRvci5vbixcXG4ubGFiZWwtZWRpdG9yLm9uIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLnByb2plY3QtaW5wdXQgaW5wdXQ6Zm9jdXMtdmlzaWJsZSxcXG4ubGFiZWwtaW5wdXQgaW5wdXQ6Zm9jdXMtdmlzaWJsZSxcXG4udG9kby1lZGl0b3ItaW5wdXQgaW5wdXQ6Zm9jdXMtdmlzaWJsZSxcXG4ucHJvamVjdC1lZGl0b3ItaW5wdXQgaW5wdXQ6Zm9jdXMtdmlzaWJsZSxcXG4ubGFiZWwtZWRpdG9yLWlucHV0IGlucHV0OmZvY3VzLXZpc2libGUge1xcbiAgICBvdXRsaW5lOiAxcHggc29saWQgdmFyKC0tdHJhbnNwYXJlbnQyKTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xcbiAgICAubmF2LWNvbXAge1xcbiAgICAgICAgcGFkZGluZzogLjVyZW0gLjVyZW0gLjVyZW0gLjVyZW07XFxuICAgIH1cXG4gICAgLmluZm8tY29tcCB7XFxuICAgICAgICBwYWRkaW5nOiAxcmVtIC4yNXJlbSAuMjVyZW0gLjI1cmVtO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgei1pbmRleDogMTAwMDtcXG4gICAgICAgIHRvcDogNDcuNTlweDtcXG4gICAgICAgIGJvdHRvbTogMDtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG4gICAgLmluZm8tY29tcC5zaG93LW5hdiB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB9XFxuICAgIC5pbmZvLWNvbXAgPiAqIHtcXG4gICAgICAgIHdpZHRoOiAyOTRweDtcXG4gICAgfVxcbiAgICAuY29udGFpbmVyID4gaGVhZGVyIHtcXG4gICAgICAgIHBhZGRpbmc6IDFyZW0gMCAuNXJlbSAwO1xcbiAgICB9XFxuICAgIC5jb250YWluZXIge1xcbiAgICAgICAgcGFkZGluZzogMCAxcmVtIDAgMXJlbTtcXG4gICAgfVxcbiAgICAucXVpY2stYWRkLXRvZG8gPiBkaXYge1xcbiAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XFxuICAgIC5pbmZvLWNvbXAgPiAqIHtcXG4gICAgICAgIHdpZHRoOiAyNDJweDtcXG4gICAgfVxcbiAgICAuc2VhcmNoLWlucHV0IHtcXG4gICAgICAgIHdpZHRoOiAxODBweDtcXG4gICAgfVxcbiAgICAuc2VhcmNoLWlucHV0OmZvY3VzIHtcXG4gICAgICAgIHdpZHRoOiAxODBweDtcXG4gICAgfVxcbiAgICAucXVpY2stYWRkLXRvZG8gPiBkaXYge1xcbiAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcXG4gICAgfVxcbiAgICAubm90aWYtY29udGFpbmVyIHtcXG4gICAgICAgIG1heC13aWR0aDogMzEwcHg7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjFweCkge1xcbiAgICAuc2VhcmNoLWlucHV0IHtcXG4gICAgICAgIG1heC13aWR0aDogMTM1cHg7XFxuICAgIH1cXG4gICAgLnNlYXJjaC1pbnB1dDpmb2N1cyB7XFxuICAgICAgICBtYXgtd2lkdGg6IDEzNXB4O1xcbiAgICB9XFxuICAgIC5xdWljay1hZGQtdG9kbyA+IGRpdiB7XFxuICAgICAgICBtYXgtd2lkdGg6IDI3MHB4O1xcbiAgICB9XFxuICAgIC5ub3RpZi1jb250YWluZXIge1xcbiAgICAgICAgbWF4LXdpZHRoOiAyNzBweDtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA0MjBweCkge1xcbiAgICAudG9kby1lZGl0b3ItaW5wdXQge1xcbiAgICAgICAgbWF4LWhlaWdodDogMTgwcHg7XFxuICAgIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFDMUIsdUJBQXVCO0lBQ3ZCLDRCQUE0QjtJQUM1QiwwQkFBMEI7SUFDMUIsNkJBQTZCO0lBQzdCLDZCQUE2QjtJQUM3Qiw0QkFBNEI7SUFDNUIsd0JBQXdCO0lBQ3hCLDhCQUE4QjtJQUM5Qiw4QkFBOEI7O0lBRTlCLDRCQUE0QjtJQUM1QiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTs7SUFFSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFB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MiUpO1xcbiAgICAtLWxpZ2h0ODg6IGhzbCgwLCAwJSwgODglKTtcXG4gICAgLS1kYXJrOiBoc2woMCwgMCUsIDEyJSk7XFxuICAgIC0tbWFsaWJ1OiBoc2woMTkyLCA5MyUsIDcyJSk7XFxuICAgIC0tYXVidXJuOiBoc2woMCwgNzUlLCA2NSUpO1xcbiAgICAtLW1hcmluZXI6IGhzbCgyMTYsIDc1JSwgNTElKTtcXG4gICAgLS1sYXVyZWw6IGhzbCgxMjAsIDEwMCUsIDI1JSk7XFxuICAgIC0tcHVycGxlOiBoc2woMjY0LCA2MSUsIDQ3JSk7XFxuICAgIC0tc3VuOiBoc2woMzQsIDkzJSwgNDglKTtcXG4gICAgLS10cmFuc3BhcmVudDE6IHJnYmEoMCwwLDAsLjEpO1xcbiAgICAtLXRyYW5zcGFyZW50MjogcmdiYSgwLDAsMCwuMik7XFxuXFxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0tbGlnaHQ5Mik7XFxuICAgIC0tZm9yZWdyb3VuZDogdmFyKC0tbWFsaWJ1KTtcXG59XFxuXFxuKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7ICBcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcbiAgICBmb250LWZhbWlseTpzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogdmFyKC0tZGFyayk7XFxufVxcblxcbmJ1dHRvbixcXG4uc2VhcmNoLWlucHV0IHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IC4xMjVyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbmJ1dHRvbixcXG4uaWMtZGl2IHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5zcGFuLm1pZCB7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbnNwYW4sXFxuaDEge1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLmFwcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLm5hdi1jb21wICxcXG4ubmMtbGVmdCxcXG4uc2VhcmNoLWRpdixcXG4ubmMtcmlnaHQge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG59XFxuXFxuLm5hdi1jb21wIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogLjVyZW0gM3JlbSAuNXJlbSAzcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb3JlZ3JvdW5kKTtcXG59XFxuXFxuLm5jLWxlZnQgPiAqIHtcXG4gICAgbWFyZ2luOiAwIC4yNXJlbSAwIDA7XFxufVxcblxcbi5uYy1yaWdodCA+ICoge1xcbiAgICBtYXJnaW46IDAgMCAwIC4yNXJlbTtcXG59XFxuXFxuLm5jLXJpZ2h0IGJ1dHRvbjpmaXJzdC1jaGlsZCB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLnNlYXJjaC1kaXYge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvcmVncm91bmQpO1xcbn1cXG5cXG4uc2VhcmNoLWRpdiA+IHNwYW46Zmlyc3QtY2hpbGQge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGN1cnNvcjogdGV4dDtcXG4gICAgbWFyZ2luOiAuMXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxuICAgIHotaW5kZXg6IDI7XFxufVxcblxcbi5zZWFyY2gtZGl2IGJ1dHRvbiB7XFxuICAgIG1hcmdpbjogLjJyZW0gMCAuMnJlbSAtMS41cmVtO1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5zZWFyY2gtZGl2IGJ1dHRvbjpob3ZlcixcXG4uc2VhcmNoLWRpdiBidXR0b246Zm9jdXMtdmlzaWJsZSB7XFxuICAgIGNvbG9yOiB2YXIoLS1hdWJ1cm4pO1xcbn1cXG5cXG4uc2VhcmNoLWlucHV0IHtcXG4gICAgcGFkZGluZzogMCAxLjZyZW0gMCAxLjhyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiAtMS45cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudDEpO1xcbn1cXG5cXG4uc2VhcmNoLWlucHV0Ojotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4uc2VhcmNoLWlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pICsgYnV0dG9uIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5zZWFyY2gtZGl2OmZvY3VzLXdpdGhpbiAuc2VhcmNoLWlucHV0LFxcbi5zZWFyY2gtZGl2OmhvdmVyIC5zZWFyY2gtaW5wdXQsXFxuLnNlYXJjaC1pbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQ5Mik7XFxufVxcblxcbi5zZWFyY2gtZGl2IGJ1dHRvbiBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uYXBwLWJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiAxO1xcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSA0Ni41OXB4KTtcXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5pbmZvLWNvbXAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAycmVtIC4yNXJlbSAwIDIuOHJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQ4OCk7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi5pbmZvLWNvbXAgPiAqIHtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgZm9udC1zaXplOiAuOXJlbTtcXG4gICAgd2lkdGg6IDI5NHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5pbmZvLWNvbXAgPiAqID4gc2FtcCB7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgb3BhY2l0eTogLjU7XFxuICAgIG1hcmdpbjogNHB4IDFyZW0gNHB4IDA7XFxufVxcblxcbi5pYy1kaXYge1xcbiAgICBtYXJnaW46IC4yNXJlbSAwIDAgMDtcXG59XFxuXFxuLmluZm8tY29tcCA+IGRpdjpmaXJzdC1vZi10eXBle1xcbiAgICBtYXJnaW46IDFyZW0gMCAwIDA7XFxufVxcblxcbi5pYy1zcGFuIHtcXG4gICAgbWFyZ2luOiAwIC4yNXJlbSAwIDA7XFxufVxcblxcbi5pbmZvLWNvbXAgPiBidXR0b246Zmlyc3QtY2hpbGQgc3BhbiB7XFxuICAgIGNvbG9yOiB2YXIoLS1tYXJpbmVyKTtcXG59XFxuXFxuLmluZm8tY29tcCA+IGJ1dHRvbjpudGgtY2hpbGQoMikgc3BhbiB7XFxuICAgIGNvbG9yOiB2YXIoLS1sYXVyZWwpO1xcbn1cXG5cXG4uaW5mby1jb21wID4gYnV0dG9uOm50aC1jaGlsZCgzKSBzcGFuIHtcXG4gICAgY29sb3I6IHZhcigtLXB1cnBsZSk7XFxufVxcblxcbi5vcGEge1xcbiAgICBvcGFjaXR5OiAuNTtcXG59XFxuXFxuLmljLWFkZC1idG4ge1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIG1hcmdpbjogMHB4IC41cmVtIDAgMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmljLWFkZC1idG46aG92ZXIgKyBzdHJvbmcsXFxuLmljLWFkZC1idG46Zm9jdXMtdmlzaWJsZSArIHN0cm9uZyB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICB0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDMwJTtcXG59XFxuXFxuLmluZm8tY29tcDpmb2N1cy13aXRoaW4gLmljLWFkZC1idG4sXFxuLmluZm8tY29tcDpob3ZlciAuaWMtYWRkLWJ0bntcXG4gICAgZGlzcGxheTogaW5oZXJpdDtcXG59XFxuXFxuLmljLWRpdiA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5pYy1kaXYgPiBkaXYuc2hvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5pYy1wcm9qZWN0ID4gc3Bhbi5yb3RhdGUsXFxuLmljLWxhYmVsID4gc3Bhbi5yb3RhdGUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcblxcblxcbi5zaG93IHtcXG4gICAgbWFyZ2luOiAuNzVyZW0gMCAwIDA7XFxufVxcblxcbi5zaG93ID4gZGl2IHtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogLjVyZW0gLjVyZW0gLjVyZW0gLjVyZW07XFxuICAgIGhlaWdodDogMzRweDtcXG4gICAgZm9udC1zaXplOiAuOXJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG5zcGFuLnVuaXF1ZSB7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1yaWdodDogLjJyZW07XFxufVxcblxcbi5zaG93IGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLnNob3cgPiBkaXY6aG92ZXIsXFxuLnNob3cgPiBkaXY6Zm9jdXMtdmlzaWJsZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50Mik7XFxufVxcblxcbi5zaG93ID4gZGl2OmhvdmVyIGJ1dHRvbixcXG4uc2hvdyA+IGRpdjpmb2N1cy12aXNpYmxlIGJ1dHRvbixcXG4uc2hvdyA+IGRpdjpmb2N1cy13aXRoaW4gYnV0dG9ue1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLnNob3cgYnV0dG9uOmhvdmVyLFxcbi5zaG93IGJ1dHRvbjpmb2N1cy12aXNpYmxlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQhaW1wb3J0YW50O1xcbn1cXG5cXG4uYnVsbGV0IHtcXG4gICAgbWluLXdpZHRoOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgbWFyZ2luOiAwIC43cmVtIDAgLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50Mik7XFxufVxcblxcbi50YWcge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC44KTtcXG4gICAgbWFyZ2luOiAwIC4ycmVtIDAgLjJyZW07XFxuICAgIGNvbG9yOiB2YXIoLS10cmFuc3BhcmVudDIpO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleDogMTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBwYWRkaW5nOiAwIDJyZW0gMCAycmVtO1xcblxcbn1cXG5cXG4uY29udGFpbmVyID4gKiB7XFxuICAgIG1heC13aWR0aDogODAwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY29udGFpbmVyID4gZm9vdGVyIHtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG59XFxuXFxuLmNvbnRhaW5lciA+IGhlYWRlciB7XFxuICAgIHBhZGRpbmc6IDJyZW0gMCAxcmVtIDA7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHRvcDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQ5Mik7XFxuICAgIHotaW5kZXg6IDM7XFxufVxcblxcbmgxIHtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi50b2RvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMnB4IDA7XFxuICAgIG1hcmdpbjogLjVyZW0gMCAuNXJlbSAwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS10cmFuc3BhcmVudDEpO1xcbn1cXG5cXG4udG9kbyxcXG4udG9kbyAqIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2hlY2tib3gtYnRuIHsgXFxuICAgIGhlaWdodDogMThweDtcXG4gICAgbWF4LXdpZHRoOiAxOHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAuMjdyZW0gLjdyZW0gMCAwO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5jaGVja2JveC1idG4ucHJpbzEge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1hdWJ1cm4pO1xcbn1cXG5cXG4uY2hlY2tib3gtYnRuLnByaW8yIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tc3VuKTtcXG59XFxuXFxuLmNoZWNrYm94LWJ0bi5wcmlvMyB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLW1hcmluZXIpO1xcbn1cXG5cXG4uY2hlY2tib3gtYnRuLnByaW80IHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tdHJhbnNwYXJlbnQyKTtcXG59XFxuXFxuLmNoZWNrYm94LWJ0bjpob3ZlcixcXG4uY2hlY2tib3gtYnRuOmZvY3VzLXZpc2libGUge1xcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudDEpO1xcbn1cXG5cXG4uY2hlY2tib3gtYnRuICsgc3BhbiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgY29sb3I6IHZhcigtLXRyYW5zcGFyZW50Mik7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBtYXJnaW46IC0uOXJlbSAwIDAgLTFyZW07ICAgIFxcbn1cXG5cXG4uY2hlY2tib3gtYnRuOmhvdmVyICsgc3BhbixcXG4uY2hlY2tib3gtYnRuOmZvY3VzLXZpc2libGUgKyBzcGFuIHtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLmNoZWNrYm94LWJ0bjphY3RpdmUgKyBzcGFue1xcbiAgICBjb2xvcjogdmFyKC0tbGF1cmVsKTtcXG59XFxuXFxuLnRvZG8tdGV4dCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXg6IDE7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50b2RvLXRleHQgPiBsYWJlbCB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjRyZW07XFxufVxcblxcbi50b2RvLXRleHQtbm90ZSB7XFxuICAgIHRleHQtaW5kZW50OiAxcmVtO1xcbiAgICBmb250LXNpemU6IC45cmVtO1xcbiAgICBtYXJnaW46IDAgMCAuMjVyZW0gMDtcXG59XFxuXFxuLnRvZG8tdGV4dC1ub3RlLFxcbi50b2RvLXRleHQtbm90ZSA+IHNwYW4sXFxuLnRvZG8tdGV4dCBzbWFsbCB7XFxuICAgIGNvbG9yOiBncmF5O1xcbn1cXG5cXG4udG9kby10ZXh0LW5vdGUgPiBzcGFuLFxcbmVtLFxcbmVtID4gc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogLjlyZW0haW1wb3J0YW50O1xcbn1cXG5cXG4udG9kby10ZXh0IHNtYWxsOmhvdmVyLFxcbi50b2RvLXRleHQgc21hbGw6Zm9jdXMtdmlzaWJsZSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG5lbSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uc2NoZWQtZHVlIHtcXG4gICAgY29sb3I6IHZhcigtLWF1YnVybik7XFxufVxcblxcbi5zY2hlZC10b2RheSB7XFxuICAgIGNvbG9yOiB2YXIoLS1sYXVyZWwpO1xcbn1cXG5cXG4uc2NoZWQtdXBjb20ge1xcbiAgICBjb2xvcjogdmFyKC0tcHVycGxlKTtcXG59XFxuXFxuLnRvZG8tdG9vbHMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICBtYXJnaW46IC0yMHB4IDAgMCAwO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi50b2RvLXRvb2xzLWNvbnRhaW5lciAqIHtcXG4gICAgY29sb3I6IGdyYXk7XFxufVxcblxcbi50b29sLXNwYW4ge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLnRvZG86aG92ZXIgLnRvZG8tdG9vbHMtY29udGFpbmVyLFxcbi50b2RvOmZvY3VzLXdpdGhpbiAudG9kby10b29scy1jb250YWluZXIge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG5idXR0b246aG92ZXIsXFxuYnV0dG9uOmZvY3VzLXZpc2libGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudDIpO1xcbn1cXG5cXG5idXR0b246Zm9jdXMtdmlzaWJsZSB7XFxuICAgIG91dGxpbmU6IGF1dG87XFxufVxcblxcbi5hZGQtdGFzay1idG4ge1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBjb2xvcjogZ3JheTtcXG59XFxuXFxuLmFkZC10YXNrLWJ0biAqIHtcXG4gICAgcGFkZGluZzogLjFyZW07XFxufVxcblxcbi5hZGQtdGFzay1idG4gc3BhbiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgY29sb3I6IHZhcigtLWF1YnVybik7XFxufVxcblxcbi5hZGQtdGFzay1idG46aG92ZXIsXFxuLmFkZC10YXNrLWJ0bjpmb2N1cy12aXNpYmxlLFxcbi5hZGQtdGFzay1idG4gc3BhbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uYWRkLXRhc2stYnRuOmhvdmVyIHNwYW4sXFxuLmFkZC10YXNrLWJ0bjpmb2N1cy12aXNpYmxlIHNwYW4ge1xcbiAgICBjb2xvcjogdmFyKC0tbWFyaW5lcik7XFxufVxcblxcbi5lbXB0eS1zdGF0ZS1kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4OiAxO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmVtcHR5LXN0YXRlLWRpdiBpbWcge1xcbiAgICBtYXgtd2lkdGg6IDE4MHB4O1xcbiAgICBcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uZW1wdHktc3RhdGUtZGl2IGg0IHtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgY29sb3I6IGdyYXk7XFxufVxcblxcbi5lbXB0eS1zdGF0ZS1kaXYgKjpudGgtY2hpbGQobisyKSB7XFxuICAgIG1hcmdpbjogLjI1cmVtIDAgMCAwO1xcbn1cXG5cXG4uZW1wdHktc3RhdGUtZGl2ICo6bnRoLWNoaWxkKG4rMiksXFxuLmNvbnRhaW5lciBmb290ZXIgcCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmVtcHR5LXN0YXRlLWRpdiBwIHtcXG4gICAgZm9udC1zaXplOiAuOXJlbTtcXG4gICAgY29sb3I6IGRhcmtncmF5O1xcbn1cXG5cXG4uY29udGFpbmVyIGZvb3RlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1hdWJ1cm4pO1xcbiAgICBmb250LXNpemU6IC45cmVtIWltcG9ydGFudDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IC4yNXJlbSAwIC43NXJlbSAwO1xcbn1cXG5cXG4uY29udGFpbmVyIGZvb3RlciBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtIWltcG9ydGFudDtcXG59XFxuXFxuLmNvbnRhaW5lciBmb290ZXIgcCB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jb250YWluZXI6bm90KC5lbXB0eSkgLmVtcHR5LXN0YXRlLWRpdixcXG4uY29udGFpbmVyOm5vdCguZW1wdHkpIGZvb3RlciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5hZGQtdGFzay1kaXYge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10cmFuc3BhcmVudDIpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIHBhZGRpbmc6IDAgLjVyZW0gLjVyZW0gLjVyZW07XFxuICAgIGhlaWdodDogNjguNDhweDtcXG59XFxuXFxuLmFkZC10YXNrLWRpdiA+ICoge1xcbiAgICBtYXJnaW4tdG9wOiAuNXJlbTtcXG59XFxuXFxuLmFkZC10YXNrLWRpdiBpbnB1dCxcXG4ucXVpY2stYWRkLXRvZG8gaW5wdXQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IC45cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodDkyKTtcXG59XFxuXFxuLmFkZC10YXNrLWJ0bnMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uYWRkLXRhc2stYnRucy1jb250YWluZXIgZGl2ID4gYnV0dG9uIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdHJhbnNwYXJlbnQyKTtcXG4gICAgcGFkZGluZzogLjI1cmVtO1xcbn1cXG5cXG4uYWRkLXRhc2stYnRucy1jb250YWluZXIgYnV0dG9uID4gc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogLjlyZW0haW1wb3J0YW50O1xcbn1cXG5cXG4uYWRkLXRhc2stYnRucy1jb250YWluZXIgPiBidXR0b246bnRoLWNoaWxkKDIpIHNwYW4ge1xcbiAgICBjb2xvcjogdmFyKC0tbWFyaW5lcik7XFxufVxcblxcbi5zY2hlZHVsZXIsXFxuLmNhcnJpZXIge1xcbiAgICBtYXgtd2lkdGg6IDIxMHB4O1xcbiAgICB3aWR0aDogMTAwJTsgICAgXFxufVxcblxcbi5zY2hlZHVsZXIsXFxuLmNhcnJpZXIsXFxuLmxhYmVsZXIsXFxuLnByaW8tc2V0dGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQ5Mik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgei1pbmRleDogMjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW46IDAgMCAwIDA7XFxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDhweCAwIHJnYigwIDAgMCAvIDglKSxcXG4gICAgICAgIDAgMCAxcHggMCByZ2IoMCAwIDAgLyAzMCUpO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc2NoZWR1bGVyID4gKixcXG4uY2FycmllciA+ICoge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgcGFkZGluZzogLjVyZW0gLjVyZW0gLjVyZW0gLjVyZW07XFxufVxcblxcbi5zY2hlZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnNjaGVkIHNwYW46bnRoLWNoaWxkKDIpIHtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIGNvbG9yOiBncmF5O1xcbn1cXG5cXG4uc2NoZWR1bGVyIGlucHV0W3R5cGU9XFxcImRhdGVcXFwiXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcXG4gICAgb3BhY2l0eTogLjQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNjaGVkdWxlciBpbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvcjpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5zY2hlZHVsZXIgLnNjaGVkLWN1c3RvbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5zY2hlZHVsZXIgLnNjaGVkLWN1c3RvbSBidXR0b24ge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10cmFuc3BhcmVudDEpO1xcbn1cXG5cXG4uc2NoZWR1bGVyIC5zY2hlZC1jdXN0b20gYnV0dG9uID4gc3BhbixcXG4uY2FycmllciBzcGFuLFxcbi5sYWJlbGVyIHNwYW4sXFxuLnByaW8tc2V0dGVyIHNwYW4ge1xcbiAgICBmb250LXNpemU6IC45cmVtIWltcG9ydGFudDtcXG59XFxuXFxuLnByaW8tc2V0dGVyIGJ1dHRvbjpmaXJzdC1jaGlsZCBzcGFuIHtcXG4gICAgY29sb3I6IHZhcigtLWF1YnVybik7XFxufVxcblxcbi5wcmlvLXNldHRlciBidXR0b246bnRoLWNoaWxkKDIpIHNwYW4ge1xcbiAgICBjb2xvcjogdmFyKC0tc3VuKTtcXG59XFxuXFxuLnByaW8tc2V0dGVyIGJ1dHRvbjpudGgtY2hpbGQoMykgc3BhbiB7XFxuICAgIGNvbG9yOiB2YXIoLS1tYXJpbmVyKTtcXG59XFxuXFxuLnByaW8tc2V0dGVyIGJ1dHRvbjpudGgtY2hpbGQoNCkgc3BhbiB7XFxuICAgIGNvbG9yOiBncmF5O1xcbn1cXG5cXG4uY2FycmllciB7XFxuICAgIG1hcmdpbjogMCAwIDAgLS43cmVtO1xcbiAgICBtYXgtd2lkdGg6IDE2MHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNhcnJpZXIgYnV0dG9uLFxcbi5sYWJlbGVyIGJ1dHRvbixcXG4ucHJpby1zZXR0ZXIgYnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNhcnJpZXIgdSxcXG4ubGFiZWxlciB1LFxcbi5wcmlvLXNldHRlciB1IHtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIG1hcmdpbjogMCAwIDAgLjI1cmVtO1xcbn1cXG5cXG4ubGFiZWxlcixcXG4ucHJpby1zZXR0ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4ubGFiZWxlciBkaXYsXFxuLnByaW8tc2V0dGVyIGRpdiB7XFxuICAgIG1heC13aWR0aDogMTYwcHg7XFxuICAgIHdpZHRoOiAxMDAlOyBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luOiAwIDEuOHJlbSAwIGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0OTIpO1xcbiAgICBib3gtc2hhZG93OiAwIDFweCA4cHggMCByZ2IoMCAwIDAgLyA4JSksXFxuICAgICAgICAwIDAgMXB4IDAgcmdiKDAgMCAwIC8gMzAlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4ucHJpby1zZXR0ZXIgZGl2IHtcXG4gICAgbWFyZ2luOiAwIDAgMCBhdXRvO1xcbiAgICBtYXgtd2lkdGg6IDg4cHg7XFxufVxcblxcbi5wcmlvLXNldHRlciB1IHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4ubGFiZWxlciBidXR0b24sXFxuLnByaW8tc2V0dGVyIGJ1dHRvbiB7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIHBhZGRpbmc6IC41cmVtO1xcbn1cXG5cXG4uc2NoZWR1bGVyIC5zY2hlZC1jdXN0b20gYnV0dG9uOmhvdmVyID4gc3BhbixcXG4uc2NoZWR1bGVyIC5zY2hlZC1jdXN0b20gYnV0dG9uOmZvY3VzLXZpc2libGUgPiBzcGFuIHtcXG4gICAgY29sb3I6IHZhcigtLWxhdXJlbCk7XFxufVxcblxcbi5hZGQtdGFzay1kaXYuZGlzcGxheS1zY2hlZHVsZXIgLnNjaGVkdWxlciB7XFxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XFxufVxcblxcbi5hZGQtdGFzay1kaXYuZGlzcGxheS1jYXJyaWVyIC5jYXJyaWVyLFxcbi5hZGQtdGFzay1kaXYuZGlzcGxheS1sYWJlbGVyIC5sYWJlbGVyLFxcbi5hZGQtdGFzay1kaXYuZGlzcGxheS1wcmlvLXNldHRlciAucHJpby1zZXR0ZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmFkZC10YXNrLWRpdiAuc2VsZWN0ZWQsXFxuLmFkZC10YXNrLWRpdiAuYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQxKTtcXG59XFxuXFxuLmFkZC10YXNrLW1haW4tYnRucy1jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAuNXJlbSAwIC41cmVtIDA7XFxufVxcblxcbi5hZGQtdGFzay1tYWluLWJ0bnMtY29udGFpbmVyIGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IC4yNXJlbTtcXG59XFxuXFxuLmFkZC10YXNrLW1haW4tYnRucy1jb250YWluZXIgYnV0dG9uOmZpcnN0LWNoaWxkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFsaWJ1KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdHJhbnNwYXJlbnQyKTtcXG59XFxuXFxuLmNvbnRhaW5lci5hZGQtdHJpZ2dlcmVkIC5hZGQtdGFzay1idG4tZGl2IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNvbnRhaW5lcjpub3QoLmFkZC10cmlnZ2VyZWQpIC5hZGQtdGFzay1kaXYsXFxuLmNvbnRhaW5lcjpub3QoLmFkZC10cmlnZ2VyZWQpIC5hZGQtdGFzay1tYWluLWJ0bnMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnF1aWNrLWFkZC10b2RvLFxcbi5wcm9qZWN0LWNyZWF0b3IsXFxuLmxhYmVsLWNyZWF0b3IsXFxuLnRvZG8tZWRpdG9yLFxcbi5wcm9qZWN0LWVkaXRvcixcXG4ubGFiZWwtZWRpdG9yIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudDIpO1xcbiAgICB6LWluZGV4OiA5OTk7XFxufVxcblxcbi5xdWljay1hZGQtdG9kbyA+ICosXFxuLnF1aWNrLWFkZC10b2RvIGlucHV0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5xdWljay1hZGQtdG9kbyA+IGRpdiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0OTIpO1xcbiAgICBtYXgtd2lkdGg6IDQ4MHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBwYWRkaW5nOiAuNXJlbSAuNXJlbSAuNXJlbSAuNXJlbTtcXG59XFxuXFxuLnF1aWNrLWFkZC10b2RvID4gZGl2ID4gKjpub3QoOmZpcnN0LWNoaWxkKSB7XFxuICAgIG1hcmdpbjogLjVyZW0gMCAwIDA7XFxufVxcblxcbi5xdWljay1hZGQtdG9kbyBidXR0b24ge1xcbiAgICBwYWRkaW5nOiAuMjVyZW07XFxufVxcblxcbi5xdWljay1hZGQtdG9kbyBidXR0b246Zmlyc3QtY2hpbGQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYXJpbmVyKTtcXG59XFxuXFxuLnF1aWNrLWFkZC10b2RvIGJ1dHRvbjpob3ZlcixcXG4ucXVpY2stYWRkLXRvZG8gYnV0dG9uOmZvY3VzLXZpc2libGUge1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQ5Mik7XFxufVxcblxcbi5xdWljay1hZGQtdG9kby5vbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5ub3RpZmljYXRpb25zIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBpbnNldDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIHotaW5kZXg6IDk5OTtcXG59XFxuXFxuLm5vdGlmLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0OTIpO1xcbiAgICBtYXJnaW46IDQwcHggMCBhdXRvIGF1dG87XFxuICAgIHBhZGRpbmc6IC41cmVtO1xcbiAgICBtYXgtd2lkdGg6IDQyMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LWhlaWdodDogMzIwcHg7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgYm94LXNoYWRvdzogMCAxcHggOHB4IDAgcmdiKDAgMCAwIC8gOCUpLFxcbiAgICAgICAgMCAwIDFweCAwIHJnYigwIDAgMCAvIDMwJSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuLm5vdGlmLWNvbnRhaW5lciBuYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwIDAgLjI1cmVtIDA7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS10cmFuc3BhcmVudDIpO1xcbn1cXG5cXG4ubm90aWYtY29udGFpbmVyIG5hdiA+ICoge1xcbiAgICBmb250LXNpemU6IC45cmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5ub3RpZi1jb250YWluZXIgYnV0dG9uOmZpcnN0LW9mLXR5cGV7XFxuICAgIG1hcmdpbjogMCAwIDAgLjVyZW07XFxufVxcblxcbi5uYXYtYnRuLW5vdGlmaWNhdGlvbiBzbWFsbCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXFxuICAgIGNvbG9yOiB2YXIoLS1hdWJ1cm4pO1xcbiAgICBtYXJnaW4tbGVmdDogLS44NXJlbTsgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1hbGlidSk7XFxuICAgIHBhZGRpbmc6IDAgMXB4O1xcbn1cXG5cXG4ubmF2LWJ0bi1ub3RpZmljYXRpb246aG92ZXIgc21hbGwsXFxuLm5hdi1idG4tbm90aWZpY2F0aW9uOmZvY3VzLXZpc2libGUgc21hbGwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCFpbXBvcnRhbnQ7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodDkyKSFpbXBvcnRhbnQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ucmVhZC1hbGwtYnRuIHtcXG4gICAgbWFyZ2luOiAwIDAgMCBhdXRvIWltcG9ydGFudDtcXG59XFxuXFxuLnJlYWQtYWxsLWJ0biBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5ub3RpZi1vdXRwdXQge1xcbiAgICBtYXJnaW46IDAgLjI1cmVtO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICAvKiBvdmVyZmxvdy14OiBoaWRkZW47ICovXFxufVxcblxcbi5ub3RpZi1vdXRwdXQgPiAqIHtcXG4gICAgbWFyZ2luOiAuMjVyZW0gMCAwIDA7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS10cmFuc3BhcmVudDEpO1xcbiAgICBwYWRkaW5nOiAwIDAgLjI1cmVtIDA7XFxuICAgIFxcbn1cXG5cXG4ubm90aWYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubm90aWYgPiAqLFxcbi5ub3RpZi1leHRyYSBidXR0b24gc3BhbntcXG4gICAgZm9udC1zaXplOiAuOXJlbTsgIFxcbn1cXG5cXG4ubm90aWYgPiBzcGFuIHtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcblxcbi5ub3RpZi1leHRyYSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm5vdGlmIHNtYWxsIHtcXG4gICAgY29sb3I6IHZhcigtLWF1YnVybik7XFxufVxcblxcbi5ub3RpZmljYXRpb25zLm9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG5cXG59XFxuXFxuLmFwcC5zZWFyY2ggLmFkZC10YXNrLWJ0bi1kaXZ7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0LWNyZWF0b3IgPiBkaXYsXFxuLmxhYmVsLWNyZWF0b3IgPiBkaXYsXFxuLnRvZG8tZWRpdG9yID4gZGl2LFxcbi5wcm9qZWN0LWVkaXRvciA+IGRpdixcXG4ubGFiZWwtZWRpdG9yID4gZGl2IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQ5Mik7XFxuICAgIG1heC13aWR0aDogNDIwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi5wcm9qZWN0LWNyZWF0b3IgPiBkaXYgPiAqLFxcbi5sYWJlbC1jcmVhdG9yID4gZGl2ID4gKixcXG4udG9kby1lZGl0b3IgPiBkaXYgPiAqLFxcbi5wcm9qZWN0LWVkaXRvciA+IGRpdiA+ICosXFxuLmxhYmVsLWVkaXRvciA+IGRpdiA+ICoge1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG4gICAgbWFyZ2luOiAwIDAgLjI1cmVtIDA7XFxufVxcblxcbi5wcm9qZWN0LWNyZWF0b3IgPiBkaXYgPiAqOmZpcnN0LWNoaWxkLCBcXG4ucHJvamVjdC1jcmVhdG9yID4gZGl2ID4gKjpudGgtY2hpbGQoMiksXFxuLmxhYmVsLWNyZWF0b3IgPiBkaXYgPiAqOmZpcnN0LWNoaWxkLCBcXG4ubGFiZWwtY3JlYXRvciA+IGRpdiA+ICo6bnRoLWNoaWxkKDIpLFxcbi50b2RvLWVkaXRvciA+IGRpdiA+ICo6Zmlyc3QtY2hpbGQsIFxcbi50b2RvLWVkaXRvciA+IGRpdiA+ICo6bnRoLWNoaWxkKDIpLFxcbi5wcm9qZWN0LWVkaXRvciA+IGRpdiA+ICo6Zmlyc3QtY2hpbGQsXFxuLnByb2plY3QtZWRpdG9yID4gZGl2ID4gKjpudGgtY2hpbGQoMiksXFxuLmxhYmVsLWVkaXRvciA+IGRpdiA+ICo6Zmlyc3QtY2hpbGQsXFxuLmxhYmVsLWVkaXRvciA+IGRpdiA+ICo6bnRoLWNoaWxkKDIpIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXRyYW5zcGFyZW50MSk7XFxufVxcblxcbi5wcm9qZWN0LWNyZWF0b3IgPiBkaXYsXFxuLnByb2plY3QtaW5wdXQsXFxuLmxhYmVsLWNyZWF0b3IgPiBkaXYsXFxuLmxhYmVsLWlucHV0LFxcbi50b2RvLWVkaXRvciA+IGRpdixcXG4udG9kby1lZGl0b3ItaW5wdXQsXFxuLnByb2plY3QtZWRpdG9yID4gZGl2LFxcbi5wcm9qZWN0LWVkaXRvci1pbnB1dCxcXG4ubGFiZWwtZWRpdG9yID4gZGl2LFxcbi5sYWJlbC1lZGl0b3ItaW5wdXQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucHJvamVjdC1pbnB1dCA+ICosXFxuLmxhYmVsLWlucHV0ID4gKixcXG4udG9kby1lZGl0b3ItaW5wdXQgPiAqLFxcbi5wcm9qZWN0LWVkaXRvci1pbnB1dCA+ICosXFxuLmxhYmVsLWVkaXRvci1pbnB1dCA+ICoge1xcbiAgICBtYXJnaW46IDAgMCAuMjVyZW0gMDtcXG59XFxuXFxuLnByb2plY3QtaW5wdXQgaW5wdXQsXFxuLmxhYmVsLWlucHV0IGlucHV0LFxcbi50b2RvLWVkaXRvci1pbnB1dCBpbnB1dCxcXG4udG9kby1lZGl0b3ItaW5wdXQgc2VsZWN0LFxcbi5wcm9qZWN0LWVkaXRvci1pbnB1dCBpbnB1dCxcXG4ubGFiZWwtZWRpdG9yLWlucHV0IGlucHV0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgIHBhZGRpbmc6IC4yNXJlbTtcXG59XFxuXFxuLnRvZG8tZWRpdG9yLWlucHV0IHtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLnRvZG8tZWRpdG9yLWlucHV0IHtcXG4gICAgcGFkZGluZy10b3A6IDAhaW1wb3J0YW50O1xcbn1cXG5cXG4udG9kby1lZGl0b3ItaW5wdXQgbGFiZWwge1xcbiAgICBtYXJnaW46IC4yNXJlbSAwIC4xcmVtIDA7XFxufVxcblxcbi5wcm9qZWN0LWJ1dHRvbnMsXFxuLmxhYmVsLWJ1dHRvbnMsXFxuLnRvZG8tZWRpdG9yLWJ1dHRvbnMsXFxuLnVwZGF0ZS1wcm9qZWN0LWJ1dHRvbnMsXFxuLnVwZGF0ZS1sYWJlbC1idXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsgICAgXFxuICAgIG1hcmdpbi1ib3R0b206IDAhaW1wb3J0YW50O1xcbn1cXG5cXG4ucHJvamVjdC1jcmVhdG9yIGJ1dHRvbixcXG4ubGFiZWwtY3JlYXRvciBidXR0b24sXFxuLnRvZG8tZWRpdG9yIGJ1dHRvbixcXG4ucHJvamVjdC1lZGl0b3IgYnV0dG9uLFxcbi5sYWJlbC1lZGl0b3IgYnV0dG9uIHtcXG4gICAgcGFkZGluZzogLjI1cmVtO1xcbiAgICBtYXJnaW46IDAgMCAwIC4yNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQxKTtcXG59XFxuXFxuLnByb2plY3QtY3JlYXRvciBidXR0b246Zmlyc3QtY2hpbGQsXFxuLmxhYmVsLWNyZWF0b3IgYnV0dG9uOmZpcnN0LWNoaWxkLFxcbi50b2RvLWVkaXRvciBidXR0b246Zmlyc3QtY2hpbGQsXFxuLnByb2plY3QtZWRpdG9yIGJ1dHRvbjpmaXJzdC1jaGlsZCxcXG4ubGFiZWwtZWRpdG9yIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1hcmluZXIpO1xcbn1cXG5cXG4udXBkYXRlLXByb2plY3QtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDMpLFxcbi51cGRhdGUtbGFiZWwtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDMpIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXVidXJuKTtcXG59XFxuXFxuLnByb2plY3QtY3JlYXRvci5vbixcXG4ubGFiZWwtY3JlYXRvci5vbixcXG4udG9kby1lZGl0b3Iub24sXFxuLnByb2plY3QtZWRpdG9yLm9uLFxcbi5sYWJlbC1lZGl0b3Iub24ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4ucHJvamVjdC1pbnB1dCBpbnB1dDpmb2N1cy12aXNpYmxlLFxcbi5sYWJlbC1pbnB1dCBpbnB1dDpmb2N1cy12aXNpYmxlLFxcbi50b2RvLWVkaXRvci1pbnB1dCBpbnB1dDpmb2N1cy12aXNpYmxlLFxcbi5wcm9qZWN0LWVkaXRvci1pbnB1dCBpbnB1dDpmb2N1cy12aXNpYmxlLFxcbi5sYWJlbC1lZGl0b3ItaW5wdXQgaW5wdXQ6Zm9jdXMtdmlzaWJsZSB7XFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCB2YXIoLS10cmFuc3BhcmVudDIpO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XFxuICAgIC5uYXYtY29tcCB7XFxuICAgICAgICBwYWRkaW5nOiAuNXJlbSAuNXJlbSAuNXJlbSAuNXJlbTtcXG4gICAgfVxcbiAgICAuaW5mby1jb21wIHtcXG4gICAgICAgIHBhZGRpbmc6IDFyZW0gLjI1cmVtIC4yNXJlbSAuMjVyZW07XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB6LWluZGV4OiAxMDAwO1xcbiAgICAgICAgdG9wOiA0Ny41OXB4O1xcbiAgICAgICAgYm90dG9tOiAwO1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbiAgICAuaW5mby1jb21wLnNob3ctbmF2IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIH1cXG4gICAgLmluZm8tY29tcCA+ICoge1xcbiAgICAgICAgd2lkdGg6IDI5NHB4O1xcbiAgICB9XFxuICAgIC5jb250YWluZXIgPiBoZWFkZXIge1xcbiAgICAgICAgcGFkZGluZzogMXJlbSAwIC41cmVtIDA7XFxuICAgIH1cXG4gICAgLmNvbnRhaW5lciB7XFxuICAgICAgICBwYWRkaW5nOiAwIDFyZW0gMCAxcmVtO1xcbiAgICB9XFxuICAgIC5xdWljay1hZGQtdG9kbyA+IGRpdiB7XFxuICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcXG4gICAgLmluZm8tY29tcCA+ICoge1xcbiAgICAgICAgd2lkdGg6IDI0MnB4O1xcbiAgICB9XFxuICAgIC5zZWFyY2gtaW5wdXQge1xcbiAgICAgICAgd2lkdGg6IDE4MHB4O1xcbiAgICB9XFxuICAgIC5zZWFyY2gtaW5wdXQ6Zm9jdXMge1xcbiAgICAgICAgd2lkdGg6IDE4MHB4O1xcbiAgICB9XFxuICAgIC5xdWljay1hZGQtdG9kbyA+IGRpdiB7XFxuICAgICAgICBtYXgtd2lkdGg6IDMwMHB4O1xcbiAgICB9XFxuICAgIC5ub3RpZi1jb250YWluZXIge1xcbiAgICAgICAgbWF4LXdpZHRoOiAzMTBweDtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMXB4KSB7XFxuICAgIC5zZWFyY2gtaW5wdXQge1xcbiAgICAgICAgbWF4LXdpZHRoOiAxMzVweDtcXG4gICAgfVxcbiAgICAuc2VhcmNoLWlucHV0OmZvY3VzIHtcXG4gICAgICAgIG1heC13aWR0aDogMTM1cHg7XFxuICAgIH1cXG4gICAgLnF1aWNrLWFkZC10b2RvID4gZGl2IHtcXG4gICAgICAgIG1heC13aWR0aDogMjcwcHg7XFxuICAgIH1cXG4gICAgLm5vdGlmLWNvbnRhaW5lciB7XFxuICAgICAgICBtYXgtd2lkdGg6IDI3MHB4O1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQyMHB4KSB7XFxuICAgIC50b2RvLWVkaXRvci1pbnB1dCB7XFxuICAgICAgICBtYXgtaGVpZ2h0OiAxODBweDtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGdldFRhcmdldCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFRhcmdldC5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBmdW5jdGlvbihjc3MsIHN0eWxlKXtcbiAgICAgIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICAgIH1cblxuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gICAgfVxuICB9O1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gZnVuY3Rpb24oc3R5bGUpIHtcbiAgICAgICAgdmFyIG5vbmNlID1cbiAgICAgICAgICB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICAgICAgaWYgKG5vbmNlKSB7XG4gICAgICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICAgICAgICB9XG4gICAgICB9O1xub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihzdHlsZSl7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChcImhlYWRcIik7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIlxuICAgICAgKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9O1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VGFyZ2V0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVtYmVkTG9jYWxTdG9yYWdlID0gKCgpID0+IHtcbiAgICBpZighbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJykpXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zJywgSlNPTi5zdHJpbmdpZnkoW10pKTtcbn0pKCk7XG5cbmNvbnN0IFRvZG8gPSBmdW5jdGlvbiggaWQsIHRpdGxlLCBkdWVEYXRlLCBub3RlLCBwcmlvcml0eSwgcHJvamVjdCwgbGFiZWwsIGR1ZURhdGVOb3RpZlNlbnQgKXtcbiAgICByZXR1cm4geyBpZCwgdGl0bGUsIGR1ZURhdGUsIG5vdGUsIHByaW9yaXR5LCBwcm9qZWN0LCBsYWJlbCwgZHVlRGF0ZU5vdGlmU2VudCB9XG59O1xuXG4vL2NyZWF0ZSBjb250YWluZXIgZm9yIHByb2plY3RzXG4vL2NvbnRhaW5lciBmb3IgbGFiZWxzXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5jb25zdCB0ZXN0ID0gKGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgdG9kbyA9IFRvZG8oXG4gICAgICAgIDEsXG4gICAgICAgICdmaW5pc2ggdG9kbycsXG4gICAgICAgICcyMDIxLTA3LTMxJyxcbiAgICAgICAgJycsXG4gICAgICAgICdwcmlvcml0eSAxJyxcbiAgICAgICAgJ2luYm94JyxcbiAgICAgICAgJycsXG4gICAgICAgICdub25lJ1xuICAgICk7XG5cbiAgICBsZXQgYXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpKTtcblxuICAgIGlmKCFhcnJheS5sZW5ndGgpe1xuICAgICAgICBhcnJheS5wdXNoKHRvZG8pO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MnLCBKU09OLnN0cmluZ2lmeShhcnJheSkpO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKHRvZG8pXG5cbiAgICAvLyBsZXQgeCA9IERhdGUubm93KCk7XG4gICAgLy8gLy8gbGV0IHggPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAvLyAvLyBEYXRlLnBhcnNlKHgpXG4gICAgLy8gbGV0IGFzID0gdG9kby5kdWVEYXRlO1xuICAgIC8vIGNvbnNvbGUubG9nKERhdGUucGFyc2UoYXMpKVxuXG4gICAgLy8gdmFyIGRhdGVDb250cm9sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImRhdGVcIl0nKTtcbiAgICAvLyBkYXRlQ29udHJvbC52YWx1ZSA9ICcyMDE3LTA2LTAxJztcbiAgICAvLyBjb25zb2xlLmxvZyhkYXRlQ29udHJvbC52YWx1ZSk7IC8vIHByaW50cyBcIjIwMTctMDYtMDFcIlxuICAgIC8vIGNvbnNvbGUubG9nKGRhdGVDb250cm9sLnZhbHVlQXNOdW1iZXIpOyAvLyBwcmludHMgMTQ5NjI3NTIwMDAwMCwgYSBKYXZhU2NyaXB0IHRpbWVzdGFtcCAobXMpXG5cbn0pKCk7XG5cbmV4cG9ydCB7IGVtYmVkTG9jYWxTdG9yYWdlLCB0ZXN0IH07XG4iLCJpbXBvcnQgY2hpbGxpbmdJbWcgZnJvbSAnLi9jaGlsbGluZy5zdmcnO1xuXG4ndXNlIHN0cmljdCc7XG5cbmNvbnN0IHNldExhbmd1YWdlID0gKCkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCcpLnNldEF0dHJpYnV0ZSgnbGFuZycsICdlbicpO1xuXG5jb25zdCBzZXR1cEhlYWRUYWcgPSAoKSA9PiB7XG4gICAgY29uc3QgaGVhZEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkJyk7XG4gICAgY29uc3QgdGl0bGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGl0bGUnKTtcblxuICAgIGNvbnN0IG5ld01ldGFFZGdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWV0YScpO1xuICAgIGNvbnN0IG5ld0xpbmtNYXRlcmlhbEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgY29uc3QgbmV3TGlua0Zhdmljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG5cbiAgICBuZXdNZXRhRWRnZS5zZXRBdHRyaWJ1dGUoJ2h0dHAtZXF1aXYnLCdYLVVBLUNvbXBhdGlibGUnKTtcbiAgICBuZXdNZXRhRWRnZS5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnLCdJRT1lZGdlJyk7XG4gICAgbmV3TGlua01hdGVyaWFsSWNvbi5zZXRBdHRyaWJ1dGUoJ3JlbCcsICdzdHlsZXNoZWV0Jyk7XG4gICAgbmV3TGlua01hdGVyaWFsSWNvblxuICAgICAgICAuc2V0QXR0cmlidXRlKCdocmVmJywgJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vaWNvbj9mYW1pbHk9TWF0ZXJpYWwrSWNvbnMrT3V0bGluZWQnKTtcbiAgICBuZXdMaW5rRmF2aWNvbi5zZXRBdHRyaWJ1dGUoJ3JlbCcsICdpY29uJyk7XG4gICAgbmV3TGlua0Zhdmljb24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2ltYWdlL3BuZycpO1xuICAgIG5ld0xpbmtGYXZpY29uLnNldEF0dHJpYnV0ZSgnaHJlZicsICdodHRwczovL29wZW5jbGlwYXJ0Lm9yZy9pbWFnZS80MDBweC8zMDMyNTQnKTtcblxuICAgIGhlYWRFbGVtZW50Lmluc2VydEJlZm9yZShuZXdNZXRhRWRnZSwgdGl0bGVFbGVtZW50KTtcbiAgICBoZWFkRWxlbWVudC5pbnNlcnRCZWZvcmUobmV3TGlua01hdGVyaWFsSWNvbiwgdGl0bGVFbGVtZW50KTtcbiAgICBoZWFkRWxlbWVudC5hcHBlbmRDaGlsZChuZXdMaW5rRmF2aWNvbik7XG59O1xuXG5jb25zdCBjcmVhdGVBcHBEaXYgPSAoKSA9PiB7XG4gICAgY29uc3QgYm9keUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgY29uc3QgYm9keVNjcmlwdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHkgc2NyaXB0Jyk7XG4gICAgY29uc3QgYXBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBhcHAuc2V0QXR0cmlidXRlKCdjbGFzcycsICdhcHAnKTtcbiAgICBib2R5RWxlbWVudC5pbnNlcnRCZWZvcmUoYXBwLCBib2R5U2NyaXB0KTtcbn07XG5cbmNvbnN0IGNyZWF0ZUFwcE5hdiA9ICgpID0+IHtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgICBuYXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICduYXYtY29tcCcpO1xuICAgIG5hdi5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3MgPSBcIm5jLWxlZnRcIj5cbiAgICAgICAgICAgIDxidXR0b24gaWQgPSBcIm5hdkJ0bk1lbnVcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIG1pZFwiPm1lbnU8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gaWQgPSBcIm5hdkJ0bkhvbWVcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIG1pZFwiPmhvbWU8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxmb3JtIGlkID0gXCJmb3JtU2VhcmNoXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwic2VhcmNoLWRpdlwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIG1pZFwiPnNlYXJjaDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzZWFyY2hcIiBhcmlhLWxhYmVsPVwiU2VhcmNoIHRocm91Z2ggYWxsIHRvZG9zXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcyA9IFwic2VhcmNoLWlucHV0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQgPSBcIm5hdklucHV0U2VhcmNoXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZSA9IFwicmVzZXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWlkXCI+Y2xvc2U8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcyA9IFwibmMtcmlnaHRcIj5cbiAgICAgICAgICAgIDxidXR0b24gaWQgPSBcIm5hdkJ0blF1aWNrQWRkXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWRcIj5hZGQ8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3MgPSBcIm5hdi1idG4tbm90aWZpY2F0aW9uXCIgaWQgPSBcIm5hdkJ0bk5vdGlmaWNhdGlvblwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWlkXCI+bm90aWZpY2F0aW9uczwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c21hbGwgaWQgPSBcIm5hdkJ0bk5vdGlmaWNhdGlvbkNvdW50XCI+PC9zbWFsbD5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICBgO1xuICAgIFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcHAnKS5hcHBlbmRDaGlsZChuYXYpO1xufTtcblxuY29uc3QgY3JlYXRlQXBwQm9keSA9ICgpID0+IHtcbiAgICBjb25zdCBhcHBCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgYXBwQm9keS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FwcC1ib2R5Jyk7XG4gICAgd3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3dyYXBwZXInKTtcblxuICAgIGFwcEJvZHkuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFwcCcpLmFwcGVuZENoaWxkKGFwcEJvZHkpO1xufTtcblxuY29uc3QgY3JlYXRlU2lkZWJhck5hdiA9ICgpID0+IHtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcblxuICAgIG5hdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2luZm8tY29tcCcpO1xuICAgIG5hdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25hdkluZm9Db21wJyk7XG4gICAgbmF2LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGJ1dHRvbiBpZCA9IFwic2JuYXZJbmJveEJ0blwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWQgaWMtc3BhblwiPmluYm94PC9zcGFuPlxuICAgICAgICAgICAgSW5ib3g8c2FtcD48L3NhbXA+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGlkID0gXCJzYm5hdlRvZGF5QnRuXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIG1pZCBpYy1zcGFuXCI+Y2FsZW5kYXJfdG9kYXk8L3NwYW4+XG4gICAgICAgICAgICBUb2RheTxzYW1wPjwvc2FtcD5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gaWQgPSBcInNibmF2VXBjb21CdG5cIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWlkIGljLXNwYW5cIj51cGNvbWluZzwvc3Bhbj5cbiAgICAgICAgICAgIFVwY29taW5nPHNhbXA+PC9zYW1wPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGRpdiBjbGFzcyA9IFwiaWMtZGl2IGljLXByb2plY3RcIiB0YWJpbmRleD1cIjBcIiBpZCA9IFwic2JuYXZQcm9qZWN0c0RpdlwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWQgaWMtc3BhbiBvcGFcIj5jaGV2cm9uX3JpZ2h0PC9zcGFuPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcyA9IFwiaWMtYWRkLWJ0biBvcGFcIiBpZCA9IFwic2JuYXZQcm9qZWN0QWRkQnRuXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWRcIj5hZGQ8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxzdHJvbmc+UHJvamVjdHM8L3N0cm9uZz5cbiAgICAgICAgICAgIDxkaXYgaWQgPSBcInByb2plY3RMaXN0Q29udGFpbmVyXCI+PCEtLSBzaG93IC0tPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzID0gXCJpYy1kaXYgaWMtbGFiZWxcIiB0YWJpbmRleD1cIjBcIiBpZCA9IFwic2JuYXZMYWJlbHNEaXZcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWlkIGljLXNwYW4gb3BhXCI+Y2hldnJvbl9yaWdodDwvc3Bhbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3MgPSBcImljLWFkZC1idG4gb3BhXCIgaWQgPSBcInNibmF2TGFiZWxBZGRCdG5cIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIG1pZFwiPmFkZDwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPHN0cm9uZz5MYWJlbHM8L3N0cm9uZz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcInNob3dcIiBpZCA9IFwibGFiZWxMaXN0Q29udGFpbmVyXCI+PCEtLSBzaG93IC0tPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGA7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXBwZXInKS5hcHBlbmRDaGlsZChuYXYpO1xufTtcblxuY29uc3QgY3JlYXRlQ29udGFpbmVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb250YWluZXInKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWluZXInKTtcbiAgICBoZWFkZXIuaW5uZXJIVE1MID0gYFxuICAgICAgICA8aDEgaWQgPSBcImhlYWRlclwiPkluYm94PC9oMT5cbiAgICBgO1xuICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FkZC10YXNrLWJ0bi1kaXYnKTtcbiAgICBkaXYuc2V0QXR0cmlidXRlKCdpZCcsICdhZGRUYXNrQnRuRGl2Jyk7XG4gICAgZGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGJ1dHRvbiBjbGFzcyA9IFwiYWRkLXRhc2stYnRuXCIgaWQgPSBcImFkZFRhc2tCdG5cIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWlkIHRvb2wtc3BhblwiPmFkZDwvc3Bhbj5cbiAgICAgICAgICAgIEFkZCB0YXNrXG4gICAgICAgIDwvYnV0dG9uPlxuICAgIGA7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRpdik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXBwZXInKS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xufTtcblxuY29uc3QgY3JlYXRlQWRkVGFza0RpdiA9ICgpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FkZC10YXNrLWRpdicpO1xuICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZFRhc2tEaXYnKTtcbiAgICBkaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICA8aW5wdXQgdHlwZSA9IFwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVGFzayBuYW1lXCIgaWQgPSBcImFkZFRhc2tJbnB1dFwiPlxuICAgICAgICA8ZGl2IGNsYXNzID0gXCJhZGQtdGFzay1idG5zLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkID0gXCJzZWxlY3RTY2hlZHVsZUJ0blwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIG1pZFwiPmV2ZW50PC9zcGFuPiBTY2hlZHVsZVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQgPSBcInNlbGVjdFByb2plY3RCdG5cIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWRcIj5pbmJveDwvc3Bhbj4gSW5ib3hcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkID0gXCJzZWxlY3RMYWJlbEJ0blwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIG1pZFwiPmxhYmVsPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQgPSBcInNlbGVjdFByaW9yaXR5QnRuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWlkXCI+ZmxhZzwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcyA9IFwic2NoZWR1bGVyXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzID0gXCJzY2hlZFwiIGlkID0gXCJzY2hlZHVsZXJUb2RheUJ0blwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPlRvZGF5PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGlkID0gXCJzY2hlZHVsZXJUb2RheVNwYW5cIj50b2RheSdzIGRhdGU8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3MgPSBcInNjaGVkXCIgaWQgPSBcInNjaGVkdWxlclR3bUJ0blwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPlRvbW9ycm93PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGlkID0gXCJzY2hlZHVsZXJUd21CdG5cIj5UdWU8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3MgPSBcInNjaGVkXCIgaWQgPSBcInNjaGVkdWxlck5leHRXZWVrQnRuXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+TmV4dCB3ZWVrPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGlkID0gXCJzY2hlZHVsZXJOZXh0V2Vla1NwYW5cIj5Nb24gMjYgSnVseTwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwic2NoZWQtY3VzdG9tXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcImRhdGVcIiBpZCA9IFwic2NoZWR1bGVyQ3VzdG9tSW5wdXRcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkID0gXCJzY2hlZHVsZXJDdXN0b21CdG5cIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWRcIj5kb25lPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzID0gXCJzY2hlZFwiIGlkID0gXCJzY2hlZHVsZXJOb0RhdGVCdG5cIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5ObyBEYXRlPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGlkID0gXCJzY2hlZHVsZXJOb0RhdGVTcGFuXCI+JiN4MjIwNTs8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3MgPSBcImNhcnJpZXJcIiBpZCA9IFwicHJvamVjdFNlbGVjdG9yXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGlkID0gXCJwcm9qZWN0RGVmYXVsdEluYm94XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWRcIj5pbmJveDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8dT5JbmJveDwvdT5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcyA9IFwibGFiZWxlclwiPlxuICAgICAgICAgICAgPGRpdiBpZCA9IFwibGFiZWxDb250YWluZXJcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcyA9IFwicHJpby1zZXR0ZXJcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZCA9IFwicHJpb3JpdHlPbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWRcIj5mbGFnPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8dT5Qcmlvcml0eSAxPC91PlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQgPSBcInByaW9yaXR5VHdvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWlkXCI+ZmxhZzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHU+UHJpb3JpdHkgMjwvdT5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkID0gXCJwcmlvcml0eVRocmVlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWlkXCI+ZmxhZzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHU+UHJpb3JpdHkgMzwvdT5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkID0gXCJwcmlvcml0eURlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWRcIj5mbGFnPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8dT5Qcmlvcml0eSA0PC91PlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGA7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJykuYXBwZW5kQ2hpbGQoZGl2KTtcbn07XG5cbmNvbnN0IGNyZWF0ZU1vcmVDb250YWluZXJJdGVtcyA9ICgpID0+IHtcbiAgICBjb25zdCBkaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuXG4gICAgZGl2MS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FkZC10YXNrLW1haW4tYnRucy1jb250YWluZXInKTtcbiAgICBkaXYyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZW1wdHktc3RhdGUtZGl2Jyk7XG4gICAgZGl2Mi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2VtcHR5U3RhdGVEaXYnKTtcbiAgICBmb290ZXIuc2V0QXR0cmlidXRlKCdpZCcsICdmb290ZXInKTtcblxuICAgIGRpdjEuaW5uZXJIVE1MID0gYFxuICAgICAgICA8YnV0dG9uIGlkID0gXCJhZGRUYXNrTWFpbkJ0blwiPlxuICAgICAgICAgICAgQWRkIHRhc2tcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gaWQgPSBcImFkZFRhc2tDYW5jZWxCdG5cIj5cbiAgICAgICAgICAgIENhbmNlbFxuICAgICAgICA8L2J1dHRvbj5cbiAgICBgO1xuICAgIGRpdjIuaW5uZXJIVE1MID0gYFxuICAgICAgICA8aW1nIHNyYz1cIiR7Y2hpbGxpbmdJbWd9XCIgZHJhZ2dhYmxlPVwiZmFsc2VcIj5cbiAgICAgICAgPGg0PkFsbCBjbGVhcjwvaDQ+XG4gICAgICAgIDxwPkxvb2tzIGxpa2UgZXZlcnl0aGluZydzIG9yZ2FuaXplZCBpbiB0aGUgcmlnaHQgcGxhY2UuPC9wPlxuICAgIGA7XG4gICAgZm9vdGVyLmlubmVySFRNTCA9IGBcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBtaWRcIj5oZWxwX291dGxpbmU8L3NwYW4+XG4gICAgICAgIDxwIGlkID0gXCJoZWxwXCI+SG93IHRvIGJlc3QgdXNlIHRoaXMgQXBwPC9wPlxuICAgIGA7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJykuYXBwZW5kQ2hpbGQoZGl2MSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpLmFwcGVuZENoaWxkKGRpdjIpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKS5hcHBlbmRDaGlsZChmb290ZXIpO1xufTtcblxuY29uc3QgY3JlYXRlSGlkZGVuTW9kYWxzID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcHAnKS5pbm5lckhUTUwgKz0gYFxuICAgICAgICA8ZGl2IGNsYXNzID0gXCJxdWljay1hZGQtdG9kb1wiIGlkID0gXCJxdWlja0FkZFRvZG9cIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInRleHRcIiBwbGFjZWhvbGRlcj1cIlRhc2sgbmFtZVwiIGlkID0gXCJxdWlja0FkZElucHV0XCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZCA9IFwicXVpY2tBZGRTdWJtaXRcIj5BZGQgdGFzazwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkID0gXCJxdWlja0FkZENhbmNlbFwiPkNhbmNlbDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzID0gXCJub3RpZmljYXRpb25zXCIgaWQgPSBcIm5vdGlmaWNhdGlvbnNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcIm5vdGlmLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxuYXY+XG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+Tm90aWZpY2F0aW9uczwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzID0gXCJyZWFkLWFsbC1idG5cIiBpZCA9IFwibm90aWZSZWFkQWxsQnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIG1pZFwiPmRvbmVfYWxsPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJub3RpZi1vdXRwdXRcIiBpZCA9IFwibm90aWZPdXRwdXRcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcyA9IFwicHJvamVjdC1jcmVhdG9yXCIgaWQgPSBcInByb2plY3RDcmVhdG9yXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+QWRkIHByb2plY3Q8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJwcm9qZWN0LWlucHV0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJuZXdQcm9qZWN0TmFtZVwiPk5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9IFwidGV4dFwiIGlkID0gXCJuZXdQcm9qZWN0TmFtZVwiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcInByb2plY3QtYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkID0gXCJwcm9qZWN0QWRkQnV0dG9uXCI+QWRkPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQgPSBcInByb2plY3RDYW5jZWxCdXR0b25cIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcyA9IFwicHJvamVjdC1lZGl0b3JcIiBpZCA9IFwicHJvamVjdEVkaXRvclwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8c3Ryb25nIGlkID0gXCJwcm9qZWN0TmFtZVwiPlByb2plY3QgTmFtZTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcInByb2plY3QtZWRpdG9yLWlucHV0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ1cGRhdGVkUHJvamVjdE5hbWVcIj5SZW5hbWUgdG88L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9IFwidGV4dFwiIGlkID0gXCJ1cGRhdGVkUHJvamVjdE5hbWVcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJ1cGRhdGUtcHJvamVjdC1idXR0b25zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQgPSBcInVwZGF0ZVByb2plY3RCdG5cIj5VcGRhdGU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZCA9IFwiY2FuY2VsUHJvamVjdEJ0blwiPkNhbmNlbDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkID0gXCJkZWxldGVQcm9qZWN0QnRuXCI+RGVsZXRlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3MgPSBcImxhYmVsLWNyZWF0b3JcIiBpZCA9IFwibGFiZWxDcmVhdG9yXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+QWRkIGxhYmVsPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwibGFiZWwtaW5wdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImFkZExhYmVsSW5wdXRcIj5OYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInRleHRcIiBpZCA9IFwiYWRkTGFiZWxJbnB1dFwiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImxhYmVsLWJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZCA9IFwiYWRkTmV3TGFiZWxCdG5cIj5BZGQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZCA9IFwiY2FuY2VsQWRkTGFiZWxCdG5cIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcyA9IFwibGFiZWwtZWRpdG9yXCIgaWQgPSBcImxhYmVsRWRpdG9yXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzdHJvbmcgaWQgPSBcImVkaXRMYWJlbE5hbWVcIj5sYWJlbCBOYW1lPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwibGFiZWwtZWRpdG9yLWlucHV0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ1cGRhdGVkTGFiZWxOYW1lXCI+UmVuYW1lIHRvPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInRleHRcIiBpZCA9IFwidXBkYXRlZExhYmVsTmFtZVwiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcInVwZGF0ZS1sYWJlbC1idXR0b25zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQgPSBcInVwZGF0ZUxhYmVsQnRuXCI+VXBkYXRlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQgPSBcImNhbmNlbFVwZGF0ZUJ0blwiPkNhbmNlbDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkID0gXCJkZWxldGVMYWJlbEJ0blwiPkRlbGV0ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzID0gXCJ0b2RvLWVkaXRvclwiIGlkID0gXCJ0YXNrRWRpdG9yXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+RWRpdCBUYXNrPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwidG9kby1lZGl0b3ItaW5wdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInVwZGF0ZWRUYXNrTmFtZVwiPlRhc2sgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJ0ZXh0XCIgaWQgPSBcInVwZGF0ZWRUYXNrTmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidXBkYXRlZFRhc2tOb3RlXCI+VGFzayBOb3RlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInRleHRcIiBpZCA9IFwidXBkYXRlZFRhc2tOb3RlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ1cGRhdGVkVGFza1NjaGVkdWxlXCI+U2NoZWR1bGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwidXBkYXRlZFRhc2tTY2hlZHVsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInRvZGF5XCI+VG9kYXk8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ0b21vcnJvd1wiPlRvbW9ycm93PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibmV4dC13ZWVrXCI+TmV4dCBXZWVrPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiY3VzdG9tXCI+Q3VzdG9tPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibm8tZGF0ZVwiPk5vIERhdGU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ1cGRhdGVkVGFza1Byb2plY3RcIj5Qcm9qZWN0PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cInVwZGF0ZWRUYXNrUHJvamVjdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkluYm94XCI+SW5ib3g8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ1cGRhdGVkVGFza0xhYmVsXCI+TGFiZWw8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwidXBkYXRlZFRhc2tMYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm5vbmVcIj5Ob25lPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidXBkYXRlZFRhc2tQcmlvcml0eVwiPlByaW9yaXR5PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cInVwZGF0ZWRUYXNrUHJpb3JpdHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwcmlvcml0eTFcIj5Qcmlvcml0eSAxPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicHJpb3JpdHkyXCI+UHJpb3JpdHkgMjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInByaW9yaXR5M1wiPlByaW9yaXR5IDM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwcmlvcml0eTRcIj5Qcmlvcml0eSA0PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcInRvZG8tZWRpdG9yLWJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZCA9IFwidXBkYXRlVG9kb1wiPlVwZGF0ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkID0gXCJjYW5jZWxVcGRhdGVUb2RvXCI+Q2FuY2VsPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYDtcbn07XG5cbmNvbnN0IGNyZWF0ZUFwcCA9ICgoKSA9PiB7XG4gICAgc2V0TGFuZ3VhZ2UoKTtcbiAgICBzZXR1cEhlYWRUYWcoKTtcbiAgICBjcmVhdGVBcHBEaXYoKTtcbiAgICBjcmVhdGVBcHBOYXYoKTtcbiAgICBjcmVhdGVBcHBCb2R5KCk7XG4gICAgY3JlYXRlU2lkZWJhck5hdigpO1xuICAgIGNyZWF0ZUNvbnRhaW5lcigpO1xuICAgIGNyZWF0ZUFkZFRhc2tEaXYoKTtcbiAgICBjcmVhdGVNb3JlQ29udGFpbmVySXRlbXMoKTtcbiAgICBjcmVhdGVIaWRkZW5Nb2RhbHMoKTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUFwcDsiLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGhOYXYgPSAoKCkgPT4ge1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2QnRuTWVudScpO1xuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2QnRuSG9tZScpO1xuICAgIGNvbnN0IGZvcm1TZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybVNlYXJjaCcpO1xuICAgIGNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYXZJbnB1dFNlYXJjaCcpO1xuICAgIGNvbnN0IHBsdXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2QnRuUXVpY2tBZGQnKTtcbiAgICBjb25zdCBub3RpZmljYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2QnRuTm90aWZpY2F0aW9uJyk7XG4gICAgY29uc3Qgbm90aWZDb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYXZCdG5Ob3RpZmljYXRpb25Db3VudCcpO1xuXG4gICAgcmV0dXJuIHsgXG4gICAgICAgIG1lbnUsIGhvbWUsIFxuICAgICAgICBmb3JtU2VhcmNoLCBzZWFyY2gsIFxuICAgICAgICBwbHVzLCBub3RpZmljYXRpb24sIG5vdGlmQ291bnQgfTtcbn0pKCk7XG5cbmNvbnN0IHZOYXYgPSAoKCkgPT4ge1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYXZJbmZvQ29tcCcpO1xuICAgIGNvbnN0IGluYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NibmF2SW5ib3hCdG4nKTtcbiAgICBjb25zdCBpbmJveENvdW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2JuYXZJbmJveEJ0biA+IHNhbXAnKTtcbiAgICBjb25zdCB0b2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzYm5hdlRvZGF5QnRuJyk7XG4gICAgY29uc3QgdG9kYXlDb3VudGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NibmF2VG9kYXlCdG4gPiBzYW1wJyk7XG4gICAgY29uc3QgdXBjb21pbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2JuYXZVcGNvbUJ0bicpO1xuICAgIGNvbnN0IHVwY29taW5nQ291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzYm5hdlVwY29tQnRuID4gc2FtcCcpO1xuICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NibmF2UHJvamVjdHNEaXYnKTtcbiAgICBjb25zdCBwcm9qZWN0Q2hldnJvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzYm5hdlByb2plY3RzRGl2ID4gc3BhbicpO1xuICAgIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2JuYXZQcm9qZWN0QWRkQnRuJyk7XG4gICAgY29uc3QgbGFiZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NibmF2TGFiZWxzRGl2Jyk7XG4gICAgY29uc3QgbGFiZWxDaGV2cm9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NibmF2TGFiZWxzRGl2ID4gc3BhbicpO1xuICAgIGNvbnN0IGFkZExhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NibmF2TGFiZWxBZGRCdG4nKTtcblxuICAgIHJldHVybiB7IFxuICAgICAgICBuYXYsXG4gICAgICAgIGluYm94LCBpbmJveENvdW50ZXIsXG4gICAgICAgIHRvZGF5LCB0b2RheUNvdW50ZXIsXG4gICAgICAgIHVwY29taW5nLCB1cGNvbWluZ0NvdW50ZXIsXG4gICAgICAgIHByb2plY3RzLCBwcm9qZWN0Q2hldnJvbiwgYWRkUHJvamVjdCxcbiAgICAgICAgbGFiZWxzLCBsYWJlbENoZXZyb24sIGFkZExhYmVsXG4gICAgfTtcbn0pKCk7XG5cbmNvbnN0IGNvbnRhaW5lciA9ICgoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY29udGFpbmVyJyk7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hlYWRlcicpO1xuICAgIGNvbnN0IGFkZFRhc2tCdG5EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkVGFza0J0bkRpdicpO1xuICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkVGFza0J0bicpO1xuICAgIGNvbnN0IGVtcHR5U3RhdGVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW1wdHlTdGF0ZURpdicpO1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb290ZXInKTtcbiAgICBjb25zdCBoZWxwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hlbHAnKTtcbiAgICBjb25zdCBhZGRUYXNrRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFRhc2tEaXYnKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGRpdixcbiAgICAgICAgaGVhZGVyLFxuICAgICAgICBhZGRUYXNrQnRuRGl2LCBhZGRUYXNrQnRuLFxuICAgICAgICBlbXB0eVN0YXRlRGl2LCBmb290ZXIsIGhlbHAsXG4gICAgICAgIGFkZFRhc2tEaXZcbiAgICB9O1xufSkoKTtcblxuY29uc3QgdGFzayA9ICgoKSA9PiB7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkVGFza0lucHV0Jyk7XG4gICAgY29uc3Qgc2NoZWR1bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VsZWN0U2NoZWR1bGVCdG4nKTtcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlbGVjdFByb2plY3RCdG4nKTtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWxlY3RMYWJlbEJ0bicpO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlbGVjdFByaW9yaXR5QnRuJyk7XG4gICAgY29uc3QgYWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFRhc2tNYWluQnRuJyk7XG4gICAgY29uc3QgY2FuY2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFRhc2tDYW5jZWxCdG4nKTtcblxuICAgIGNvbnN0IHNjaGVkVG9kYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2NoZWR1bGVyVG9kYXlCdG4nKTtcbiAgICBjb25zdCBzcGFuVG9kYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2NoZWR1bGVyVG9kYXlTcGFuJyk7XG4gICAgY29uc3Qgc2NoZWRUd20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2NoZWR1bGVyVHdtQnRuJyk7XG4gICAgY29uc3Qgc3BhblR3bSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzY2hlZHVsZXJUd21CdG4nKTtcbiAgICBjb25zdCBzY2hlZE5leHRXZWVrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NjaGVkdWxlck5leHRXZWVrQnRuJyk7XG4gICAgY29uc3Qgc3Bhbk5leHRXZWVrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NjaGVkdWxlck5leHRXZWVrU3BhbicpO1xuICAgIGNvbnN0IHNjaGVkQ3VzdG9tSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2NoZWR1bGVyQ3VzdG9tSW5wdXQnKTtcbiAgICBjb25zdCBzY2hlZEN1c3RvbUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzY2hlZHVsZXJDdXN0b21CdG4nKTtcbiAgICBjb25zdCBzY2hlZE5vRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzY2hlZHVsZXJOb0RhdGVCdG4nKTtcbiAgICBjb25zdCBwcm9qZWN0U2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdFNlbGVjdG9yJyk7XG4gICAgY29uc3QgcHJvamVjdEluYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3REZWZhdWx0SW5ib3gnKTtcbiAgICBjb25zdCBsYWJlbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsYWJlbENvbnRhaW5lcicpO1xuICAgIGNvbnN0IHByaW9yaXR5T25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5T25lJyk7XG4gICAgY29uc3QgcHJpb3JpdHlUd28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHlUd28nKTtcbiAgICBjb25zdCBwcmlvcml0eVRocmVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5VGhyZWUnKTtcbiAgICBjb25zdCBwcmlvcml0eUZvdXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHlEZWZhdWx0Jyk7XG5cblxuICAgIHJldHVybiB7XG4gICAgICAgIGlucHV0LFxuICAgICAgICBzY2hlZHVsZSwgcHJvamVjdCxcbiAgICAgICAgbGFiZWwsIHByaW9yaXR5LFxuICAgICAgICBhZGQsIGNhbmNlbCxcbiAgICAgICAgc2NoZWRUb2RheSwgc3BhblRvZGF5LFxuICAgICAgICBzY2hlZFR3bSwgc3BhblR3bSxcbiAgICAgICAgc2NoZWROZXh0V2Vlaywgc3Bhbk5leHRXZWVrLFxuICAgICAgICBzY2hlZEN1c3RvbUlucHV0LCBzY2hlZEN1c3RvbUJ0bixcbiAgICAgICAgc2NoZWROb0RhdGUsXG4gICAgICAgIHByb2plY3RTZWxlY3RvciwgcHJvamVjdEluYm94LFxuICAgICAgICBsYWJlbENvbnRhaW5lcixcbiAgICAgICAgcHJpb3JpdHlPbmUsIHByaW9yaXR5VHdvLCBwcmlvcml0eVRocmVlLCBwcmlvcml0eUZvdXJcbiAgICB9XG59KSgpO1xuXG5jb25zdCBtb2RhbCA9ICgoKSA9PiB7XG4gICAgY29uc3QgcXVpY2tBZGRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3F1aWNrQWRkVG9kbycpO1xuICAgIGNvbnN0IHF1aWNrQWRkVGFza0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3F1aWNrQWRkSW5wdXQnKTtcbiAgICBjb25zdCBxdWlja0FkZFRhc2tTdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcXVpY2tBZGRTdWJtaXQnKTtcbiAgICBjb25zdCBxdWlja0FkZFRhc2tDYW5jZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcXVpY2tBZGRDYW5jZWwnKTtcbiAgICBjb25zdCBub3RpZlJlYWRBbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbm90aWZSZWFkQWxsQnRuJyk7XG4gICAgY29uc3Qgbm90aWZPdXRwdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdub3RpZk91dHB1dCcpO1xuICAgIGNvbnN0IHByb2plY3RDcmVhdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RDcmVhdG9yJyk7XG4gICAgY29uc3QgcHJvamVjdEFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0QWRkQnV0dG9uJyk7XG4gICAgY29uc3QgcHJvamVjdENhbmNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0Q2FuY2VsQnV0dG9uJyk7XG4gICAgY29uc3QgcHJvamVjdEVkaXRvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0RWRpdG9yJyk7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdE5hbWUnKTtcbiAgICBjb25zdCB1cGRhdGVkUHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXBkYXRlZFByb2plY3ROYW1lJyk7XG4gICAgY29uc3QgdXBkYXRlUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1cGRhdGVQcm9qZWN0QnRuJyk7XG4gICAgY29uc3QgY2FuY2VsUHJvamVjdEVkaXRvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW5jZWxQcm9qZWN0QnRuJyk7XG4gICAgY29uc3QgZGVsZXRlUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZWxldGVQcm9qZWN0QnRuJyk7XG4gICAgY29uc3QgbGFiZWxDcmVhdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xhYmVsQ3JlYXRvcicpO1xuICAgIGNvbnN0IGFkZExhYmVsSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkTGFiZWxJbnB1dCcpO1xuICAgIGNvbnN0IGFkZE5ld0xhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZE5ld0xhYmVsQnRuJyk7XG4gICAgY29uc3QgY2FuY2VsTGFiZWxDcmVhdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbmNlbEFkZExhYmVsQnRuJyk7XG4gICAgY29uc3QgbGFiZWxFZGl0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGFiZWxFZGl0b3InKTtcbiAgICBjb25zdCBlZGl0TGFiZWxOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXRMYWJlbE5hbWUnKTtcbiAgICBjb25zdCB1cGRhdGVkTGFiZWxOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VwZGF0ZWRMYWJlbE5hbWUnKTtcbiAgICBjb25zdCB1cGRhdGVMYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1cGRhdGVMYWJlbEJ0bicpO1xuICAgIGNvbnN0IGNhbmNlbExhYmVsRWRpdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbmNlbFVwZGF0ZUJ0bicpO1xuICAgIGNvbnN0IGRlbGV0ZUxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RlbGV0ZUxhYmVsQnRuJyk7XG4gICAgY29uc3QgdGFza0VkaXRvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrRWRpdG9yJyk7XG4gICAgY29uc3QgdXBkYXRlZFRhc2tOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VwZGF0ZWRUYXNrTmFtZScpO1xuICAgIGNvbnN0IHVwZGF0ZWRUYXNrTm90ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1cGRhdGVkVGFza05vdGUnKTtcbiAgICBjb25zdCB1cGRhdGVkVGFza1NjaGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VwZGF0ZWRUYXNrU2NoZWR1bGUnKTtcbiAgICBjb25zdCB1cGRhdGVkVGFza1Byb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXBkYXRlZFRhc2tQcm9qZWN0Jyk7XG4gICAgY29uc3QgdXBkYXRlZFRhc2tMYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1cGRhdGVkVGFza0xhYmVsJyk7XG4gICAgY29uc3QgdXBkYXRlZFRhc2tQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1cGRhdGVkVGFza1ByaW9yaXR5Jyk7XG4gICAgY29uc3QgdXBkYXRlVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1cGRhdGVUb2RvJyk7XG4gICAgY29uc3QgY2FuY2VsVGFza0VkaXRvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW5jZWxVcGRhdGVUb2RvJyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBxdWlja0FkZFRhc2ssIHF1aWNrQWRkVGFza0lucHV0LCBxdWlja0FkZFRhc2tTdWJtaXQsIHF1aWNrQWRkVGFza0NhbmNlbCxcbiAgICAgICAgbm90aWZSZWFkQWxsLCBub3RpZk91dHB1dCxcbiAgICAgICAgcHJvamVjdENyZWF0b3IsIG5ld1Byb2plY3ROYW1lLCBwcm9qZWN0QWRkLCBwcm9qZWN0Q2FuY2VsLFxuICAgICAgICBwcm9qZWN0RWRpdG9yLCBwcm9qZWN0TmFtZSwgdXBkYXRlZFByb2plY3ROYW1lLCB1cGRhdGVQcm9qZWN0LFxuICAgICAgICAgICAgY2FuY2VsUHJvamVjdEVkaXRvciwgZGVsZXRlUHJvamVjdCxcbiAgICAgICAgbGFiZWxDcmVhdG9yLCBhZGRMYWJlbElucHV0LCBhZGROZXdMYWJlbCwgY2FuY2VsTGFiZWxDcmVhdG9yLFxuICAgICAgICBsYWJlbEVkaXRvciwgZWRpdExhYmVsTmFtZSwgdXBkYXRlZExhYmVsTmFtZSwgdXBkYXRlTGFiZWwsXG4gICAgICAgICAgICBjYW5jZWxMYWJlbEVkaXRvciwgZGVsZXRlTGFiZWwsXG4gICAgICAgIHRhc2tFZGl0b3IsIHVwZGF0ZWRUYXNrTmFtZSwgdXBkYXRlZFRhc2tOb3RlLCB1cGRhdGVkVGFza1NjaGVkLCB1cGRhdGVkVGFza1Byb2plY3QsXG4gICAgICAgICAgICB1cGRhdGVkVGFza0xhYmVsLCB1cGRhdGVkVGFza1ByaW9yaXR5LCB1cGRhdGVUYXNrLCBjYW5jZWxUYXNrRWRpdG9yXG4gICAgfVxufSkoKTtcblxuZXhwb3J0IHsgXG4gICAgaE5hdixcbiAgICB2TmF2LFxuICAgIGNvbnRhaW5lcixcbiAgICB0YXNrLFxuICAgIG1vZGFsXG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgY3JlYXRlQXBwIGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCBlbWJlZExvY2FsU3RvcmFnZSBmcm9tICcuL2RhdGEuanMnO1xuaW1wb3J0IHRlc3QgZnJvbSAnLi9kYXRhLmpzJztcbmltcG9ydCB7IGhOYXYsIHZOYXYsIGNvbnRhaW5lciwgdGFzaywgbW9kYWwgfSBmcm9tICcuL3NlbGVjdG9yLmpzJztcblxuJ3VzZSBzdHJpY3QnO1xuXG52TmF2LmluYm94Lm9uY2xpY2sgPSBmdW5jdGlvbigpe1xuICAgIGNvbnNvbGUubG9nKDEpXG59XG5cbmhOYXYuZm9ybVNlYXJjaC5vbnN1Ym1pdCA9IGZ1bmN0aW9uKGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBoTmF2LnNlYXJjaC5ibHVyKCk7XG4gICAgY29uc29sZS5sb2coMik7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==