import './style.css';

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

// below > function might not be needed
const dom = (() => {
    const app = document.querySelector('.app');

    return { 
        app
    };
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
    
    dom.app.appendChild(nav);
})();

const createAppBody = (() => {
    const appBody = document.createElement('div');
    const wrapper = document.createElement('div');

    appBody.setAttribute('class', 'app-body');
    wrapper.setAttribute('class', 'wrapper');

    dom.app.appendChild(appBody);
    appBody.appendChild(wrapper);
})();

const createSidebarNav = (() => {
    const nav = document.createElement('nav');

    nav.setAttribute('class', 'info-comp');
    nav.innerHTML = `
        <button id = "sbnavInboxBtn">
            <span class="material-icons-outlined mid ic-span">inbox</span>
            Inbox<samp>5</samp>
        </button>
        <button id = "sbnavTodayBtn">
            <span class="material-icons-outlined mid ic-span">calendar_today</span>
            Today<samp>5</samp>
        </button>
        <button id = "sbnavUpcomBtn">
            <span class="material-icons-outlined mid ic-span">upcoming</span>
            Upcoming<samp>5</samp>
        </button>
        <div class = "ic-div ic-project" tabindex="0" id = "sbnavProjectsDiv-">
            <span class="material-icons-outlined mid ic-span opa rotate">chevron_right</span>
            <button class = "ic-add-btn opa" id = "sbnavProjectAdd">
                <span class="material-icons-outlined mid">add</span>
            </button>
            <strong>Projects</strong>
            <div class="show"><!-- show -->
                <div tabindex="0">
                    <div class = "bullet"></div>
                    <span class = "unique">Lorem ipsum dolor sit amet consectetur, 
                        adipisicing elit. Sunt perspiciatis, autem ipsum 
                        aliquid explicabo nulla?
                    </span>
                    <button>
                        <span class="material-icons-outlined mid">more_horiz</span>
                    </button>
                </div>
                <div tabindex="0">
                    <div class = "bullet"></div>
                    <span class = "unique">Lorem.</span>
                    <button>
                        <span class="material-icons-outlined mid">more_horiz</span>
                    </button>
                </div>
                <div tabindex="0">
                    <div class = "bullet"></div>
                    <span class = "unique">
                        Lorem ipsum dolor sit amet.
                    </span>
                    <button>
                        <span class="material-icons-outlined mid">more_horiz</span>
                    </button>
                </div>
            </div>
        </div>
        <div class = "ic-div ic-label" tabindex="0" id = "sbnavLabelsDiv">
            <span class="material-icons-outlined mid ic-span opa">chevron_right</span>
            <!-- this span should rotate when showned -->
            <button class = "ic-add-btn opa">
                <span class="material-icons-outlined mid">add</span>
            </button>
            <strong>Labels</strong>
            <div class = "show"><!-- show -->
                <div tabindex="0">
                    <span class="material-icons-outlined mid tag">label</span>
                    <span class = "unique">Lorem ipsum dolor sit amet consectetur, 
                        adipisicing elit. Sunt perspiciatis, autem ipsum 
                        aliquid explicabo nulla?
                    </span>
                    <button>
                        <span class="material-icons-outlined mid">more_horiz</span>
                    </button>
                </div>
                <div tabindex="0">
                    <span class="material-icons-outlined mid tag">label</span>
                    <span class = "unique">Lorem.</span>
                    <button>
                        <span class="material-icons-outlined mid">more_horiz</span>
                    </button>
                </div>
                <div tabindex="0">
                    <span class="material-icons-outlined mid tag">label</span>
                    <span class = "unique">
                        Lorem ipsum dolor sit amet.
                    </span>
                    <button>
                        <span class="material-icons-outlined mid">more_horiz</span>
                    </button>
                </div>
            </div>
        </div>
    `;
    document.querySelector('.wrapper').appendChild(nav);
})();