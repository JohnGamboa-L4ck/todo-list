import './style.css';
import implantData from './data.js';
import test from './data.js';

'use strict';

const setLanguage = (() => document.querySelector('html').setAttribute('lang', 'en'))();

const setupHeadTag = (() => {
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
})();

const createApp = (() => {
    const bodyElement = document.querySelector('body');
    const bodyScript = document.querySelector('body script');
    const app = document.createElement('div');

    app.setAttribute('class', 'app');
    bodyElement.insertBefore(app, bodyScript);
})();

const createAppNav = (() => {
    const nav = document.createElement('nav');
    nav.setAttribute('class', 'nav-comp');
    nav.innerHTML = `
        <div class = "nc-left">
            <button id = "navBtnMenu">
                <span class="material-icons-outlined mid">menu</span>
            </button>
            <button id = "navBtnInbox">
                <span class="material-icons-outlined mid">home</span>
            </button>
            <form>
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
            <button id = "navBtnNotification">
                <span class="material-icons-outlined mid">notifications</span>
            </button>
        </div>
    `;
    
    document.querySelector('.app').appendChild(nav);
})();

const createAppBody = (() => {
    const appBody = document.createElement('div');
    const wrapper = document.createElement('div');

    appBody.setAttribute('class', 'app-body');
    wrapper.setAttribute('class', 'wrapper');

    appBody.appendChild(wrapper);
    document.querySelector('.app').appendChild(appBody);
})();

const createSidebarNav = (() => {
    const nav = document.createElement('nav');

    nav.setAttribute('class', 'info-comp');
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
})();

const createContainer = (() => {
    const container = document.createElement('div');
    const header = document.createElement('header');
    const main = document.createElement('main');
    const div = document.createElement('div');

    container.setAttribute('class', 'container');
    header.innerHTML = `
        <h1>Inbox</h1>
    `;
    div.setAttribute('class', 'add-task-btn-div');
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
})();

const createAddTaskDiv = (() => {
    const div = document.createElement('div');

    div.setAttribute('class', 'add-task-div');
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
        <div class = "carrier">
            <button id = "projectDefaultInbox">
                <span class="material-icons-outlined mid">inbox</span>
                <u>Inbox</u>
            </button>
            <button id = "">
                <span class="material-icons-outlined mid">circle</span>
                <u>Lorem, ipsum.</u>
            </button>
            <button>
                <span class="material-icons-outlined mid">circle</span>
                <u>Lorem ipsum dolor sit amet.</u>
            </button>
            <button>
                <span class="material-icons-outlined mid">circle</span>
                <u>Lorem, ipsum.</u>
            </button>
        </div>
        <div class = "labeler">
            <div>
                <button>
                    <span class="material-icons-outlined mid">label</span>
                    <u>Lorem, ipsum.</u>
                </button>
                <button>
                    <span class="material-icons-outlined mid">label</span>
                    <u>Lorem ipsum dolor sit amet.</u>
                </button>
                <button>
                    <span class="material-icons-outlined mid">label</span>
                    <u>Lorem ipsum dolor sit amet.</u>
                </button>
            </div>
        </div>
        <div class = "prio-setter">
            <div>
                <button>
                    <span class="material-icons-outlined mid">flag</span>
                    <u>Priority 1</u>
                </button>
                <button>
                    <span class="material-icons-outlined mid">flag</span>
                    <u>Priority 2</u>
                </button>
                <button>
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
})();

const createMoreContainerItems = (() => {
    // add-task-main-btns-container
    // empty-state-div
    // footer
})();