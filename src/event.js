import { hNav, vNav, container, task, modal } from './selector.js';
import { push } from './data.js';

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
    
    if((window.innerWidth <= 750) && vNav.nav.contains(element.modalToggler)) {
        vNav.nav.classList.remove('show-nav');
    }

    document.addEventListener('keydown', tabEvent);
    element.firstFocusableElement.focus(); 
};

const removeTrapFocus = () => {
    document.removeEventListener('keydown', tabEvent);
    if((window.innerWidth <= 750) && vNav.nav.contains(element.modalToggler)) {
        vNav.nav.classList.add('show-nav');
        vNav.projects.focus();
    }
    element.modalToggler.focus();
};

const toggle = (() => {
    const menu = (e) => {
        if(window.innerWidth > 750){
            if(vNav.nav.hasAttribute('style')) 
            { vNav.nav.removeAttribute('style'); }
            else { vNav.nav.style.display = 'none'; }
        } else { 
            vNav.nav.classList.toggle('show-nav'); 
        }
        e.stopPropagation();
    };

    const quickAddTask = () => {
        modal.quickAddTask.classList.toggle('on');
        if(modal.quickAddTask.classList.contains('on')) {
            modal.quickAddTaskInput.value = '';
            trapFocus(modal.quickAddContainer, hNav.plus);
        } else {
            removeTrapFocus();
        }
    };

    const notification = () => {
        modal.notification.classList.toggle('on');
        if(modal.notification.classList.contains('on')) {
            trapFocus(modal.notifContainer, hNav.notification);
        } else {
            removeTrapFocus();
        }
    };

    const projects = () => {
        vNav.projectListContainer.classList.toggle('show');
        vNav.projectChevron.classList.toggle('rotate');
    };

    const addProject = (e) => {
        e.stopImmediatePropagation();
        modal.projectCreator.classList.toggle('on');
        
        if(modal.projectCreator.classList.contains('on')){
            modal.newProjectName.value = '';
            trapFocus(modal.projectCreator, vNav.addProject);
        } else {
            vNav.projects.focus();
            removeTrapFocus();
        }
    };

    const labels = () => {
        vNav.labelListContainer.classList.toggle('show');
        vNav.labelChevron.classList.toggle('rotate');
    };

    const addLabel = (e) => {
        e.stopImmediatePropagation();
        modal.labelCreator.classList.toggle('on');

        if(modal.labelCreator.classList.contains('on')){
            modal.addLabelInput.value = '';
            trapFocus(modal.labelCreator, vNav.addLabel);
        } else {
            vNav.labels.focus();
            removeTrapFocus();
        }
    };

    const taskCreator = () => {
        container.div.classList.toggle('add-triggered');
        if(container.div.classList.contains('add-triggered')){
            task.input.value = '';
        }
    };

    const _itemManager = (newClass) => {
        task.addDiv.classList.toggle(newClass);
        if(task.addDiv.classList.contains('add-task-div') 
        && task.addDiv.classList.contains(newClass)){
            task.addDiv.className = `add-task-div ${newClass}`;
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
    if (vNav.nav.classList.contains('show-nav') && (window.innerWidth <= 750)){
        if(!vNav.nav.contains(document.activeElement)) { 
            vNav.nav.classList.toggle('show-nav'); 
        }
    }

    if(task.addDiv.className != 'add-task-div'){
        if(!task.addDiv.contains(document.activeElement)){
            task.addDiv.className = 'add-task-div';
        }
    }
};

const display = (() => {

    const _getLastWord = (string) => {
        let word = string.split(" ");
        return word[word.length - 1];
    };

    const todolist = (e) => {
        container.header.innerText = _getLastWord(e.target.innerText);
        document.querySelector('.info-comp .active').classList.remove('active');
        e.target.classList.add('active');

        if(window.innerWidth <= 750){
            hNav.menu.click();
        }
        // insert the logic here, load the list of selected display
    };

    const projectList = () => {
        let _data = JSON.parse(localStorage.getItem('todos'));
        // resume
    };

    const home = () => {
        container.header.innerText = 'Today';
        document.querySelector('.info-comp .active').classList.remove('active');
        vNav.today.classList.add('active');
    };

    return {
        todolist,
        projectList,
        home
    };
})();

const add = (() => {
    const quick = () => {
        if(!modal.quickAddTaskInput.value){
            alert('Task name required!')
            return;
        }
        push.quick(modal.quickAddTaskInput.value);
        toggle.quickAddTask();
        setTimeout(()=> alert('Added to Inbox!'), 500);
    };

    const project = () => {
        if(!modal.newProjectName.value){
            alert('Project name required!')
            return;
        }
        push.project(modal.newProjectName.value);
        modal.projectCreator.classList.toggle('on');
        setTimeout(()=> alert('Added to Projects!'), 500);
    };

    const label = () => {
        if(!modal.addLabelInput.value){
            alert('Label name required!')
            return;
        }
        push.label(modal.addLabelInput.value);
        modal.labelCreator.classList.toggle('on');
        setTimeout(()=> alert('Added to Labels!'), 500);
    };

    return {
        quick,
        project,
        label
    };
})();

const viewportListener = () => {
    vNav.nav.hasAttribute('style')
        ? vNav.nav.removeAttribute('style') : vNav.nav.classList.remove('display-nav');
};

const event = (() => {
    hNav.menu.addEventListener('click', toggle.menu);

    hNav.plus.addEventListener('click', toggle.quickAddTask);
    modal.quickAddTaskCancel.addEventListener('click',  toggle.quickAddTask);

    hNav.notification.addEventListener('click', toggle.notification);
    modal.notifReadAll.addEventListener('click', toggle.notification);

    vNav.projects.addEventListener('click', toggle.projects);
    vNav.projects.addEventListener('keyup', clicker);
    vNav.addProject.addEventListener('click', toggle.addProject);
    modal.cancelProjectCreator.addEventListener('click', toggle.addProject);

    vNav.labels.addEventListener('click', toggle.labels);
    vNav.labels.addEventListener('keyup', clicker);
    vNav.addLabel.addEventListener('click', toggle.addLabel);
    modal.cancelLabelCreator.addEventListener('click', toggle.addLabel);

    container.addTaskBtn.addEventListener('click', toggle.taskCreator);
    task.cancel.addEventListener('click', toggle.taskCreator);
    task.schedule.addEventListener('click', toggle.taskScheduler);
    task.project.addEventListener('click', toggle.taskProjectSelector);
    task.label.addEventListener('click', toggle.taskLabeler);
    task.priority.addEventListener('click', toggle.taskPrioritySetter);

    vNav.inbox.addEventListener('click', display.todolist);
    vNav.today.addEventListener('click', display.todolist);
    hNav.home.addEventListener('click', display.home);
    vNav.upcoming.addEventListener('click', display.todolist);

    modal.quickAddTaskSubmit.addEventListener('click', add.quick);
    modal.projectAdd.addEventListener('click', add.project);
    modal.addNewLabel.addEventListener('click', add.label);

    //fix data.js first before adding events in label, project, and todo editor

    window.onclick = viewManager;
    window.onresize = viewportListener;

    //esc keyup that closes modals will be cool

})();

export default event;