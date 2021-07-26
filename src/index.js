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