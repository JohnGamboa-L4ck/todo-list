import { hNav, vNav, container, task, modal } from './selector.js';

'use strict';

const trapFocus = (modal) => {
    const focusableElements = 
        modal.querySelectorAll('button, input, select, [tabindex]:not([tabindex="-1"])');
    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement = focusableElements[focusableElements.length-1];
    
    console.log(focusableElements);
    console.log(firstFocusableElement);
    console.log(lastFocusableElement);

    document.addEventListener('keydown', function(e) {
        let isTabPressed = e.key === 'Tab';

        if (!isTabPressed) { return; }

        
    });
};

const toggle = (() => {
    const menu = (e) => {
        if(window.innerWidth > 750){
            if(vNav.nav.hasAttribute('style')) 
            { vNav.nav.removeAttribute('style'); }
            else { vNav.nav.style.display = 'none'; }
        } else { vNav.nav.classList.toggle('show-nav'); }
        e.stopPropagation();
    };

    const quickAddTask = () => {
        modal.quickAddTask.classList.toggle('on');
        if(modal.quickAddTask.classList.contains('on')) {
            modal.quickAddTaskInput.value = '';
            trapFocus(modal.quickAddContainer);
            // modal.quickAddTaskInput.focus();
        }
    };

    return {
        menu,
        quickAddTask
    };
})();

const eventManager = (e) => {
    if (vNav.nav.classList.contains('show-nav') && (window.innerWidth <= 750)){
        if(!vNav.nav.contains(document.activeElement))
            { vNav.nav.classList.toggle('show-nav'); }
        else { return; }
    }

    // if (modal.quickAddTask.classList.contains('on')){
    //     if(!modal.quickAddContainer.contains(document.activeElement)){
    //         e.stopPropagation();
    //     }    
    // }
};

const viewportListener = () => {
    vNav.nav.hasAttribute('style')
        ? vNav.nav.removeAttribute('style') : vNav.nav.classList.remove('show-nav');
};


const event = (() => {
    hNav.menu.addEventListener('click', toggle.menu);

    hNav.plus.addEventListener('click', toggle.quickAddTask);
    modal.quickAddTaskCancel.addEventListener('click',  toggle.quickAddTask);

    // delete the > event below
    document.querySelector('#dummy').addEventListener('click', function(){console.log('fdh')});
    hNav.home.addEventListener('click', function(){console.log('home')});

    window.onclick = eventManager;
    window.onresize = viewportListener;

})();

export default event;