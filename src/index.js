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
            <button id = "nav-btn-menu">
                <span class="material-icons-outlined mid">menu</span>
            </button>
            <button id = "nav-btn-inbox">
                <span class="material-icons-outlined mid">home</span>
            </button>
            <form>
                <div class = "search-div">
                    <span class="material-icons-outlined mid">search</span>
                    <input type="search" aria-label="Search through all todos" 
                        class = "search-input" placeholder="Search"
                        id = "nav-input-search">
                    <button type = "reset">
                        <span class="material-icons-outlined mid">close</span>
                    </button>
                </div>
            </form>
        </div>
        <div class = "nc-right">
            <button id = "nav-btn-quickAdd">
                <span class="material-icons-outlined mid">add</span>
            </button>
            <button id = "nav-btn-notification">
                <span class="material-icons-outlined mid">notifications</span>
            </button>
        </div>
    `;
    
    dom.app.appendChild(nav);
})();