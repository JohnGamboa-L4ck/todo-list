import { hNav, vNav, container, task, modal } from './selector.js';
import { push, dateString } from './data.js';

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
        if (container.div.classList.contains('add-triggered')){
            task.input.value = '';
            select.reset();
        }
    };

    const _itemManager = (newClass) => {
        task.addDiv.classList.toggle(newClass);
        if(task.addDiv.classList.contains('add-task-div') 
        && task.addDiv.classList.contains(newClass)){
            task.addDiv.className = `add-task-div ${newClass}`;
        }
    };

    const taskScheduler = () => {
        _itemManager('display-scheduler');
        if (task.addDiv.classList.contains('display-scheduler')) {
            refresh.schedule();
        }
    };

    const taskProjectSelector = () => {
        _itemManager('display-carrier');
        if (task.addDiv.classList.contains('display-carrier')){
            display.taskProjectList();
        }
    };

    const taskLabeler = () => {
        _itemManager('display-labeler');
        if (task.addDiv.classList.contains('display-labeler')){
            display.taskLabelList();
        }
    };

    const taskPrioritySetter = () => {
        _itemManager('display-prio-setter');
        if (task.addDiv.classList.contains('display-prio-setter')){
            display.taskPriorityList();
        }
    };

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
// here here here here
const changeMain = (tag, value, condition = '') => {
    console.log(tag, value, condition)
    container.main.innerHTML = '';
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
                labelDiv.innerHTML = `<small tabindex="0">${task.label}</small>`;
            } else {
                labelDiv.innerHTML = `<small>${task.label}</small>`;
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
            if (Date.parse(task.dueDate) > Date.parse(dateString.todayString())){
                em.classList.add('sched-upcom');
                em.innerHTML = `
                <span class="material-icons-outlined mid">event</span> Upcoming
                `;
            } else if (Date.parse(task.dueDate) < Date.parse(dateString.todayString())){
                em.classList.add('sched-due');
                em.innerHTML = `
                <span class="material-icons-outlined mid">event</span> Past due
                `;
            } else if (Date.parse(task.dueDate) == Date.parse(dateString.todayString())) {
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

            container.main.appendChild(div);
        });
    }
};

const display = (() => {
    changeMain('dueDate', dateString.todayString(), 'today');
    // changeMain('label', 'jesus'); //here here

    const _getLastWord = (string) => {
        let word = string.split(" ");
        return word[word.length - 1];
    };

    const todolist = (e) => {
        container.header.innerText = _getLastWord(e.target.innerText);
        document.querySelector('.info-comp .active').classList.remove('active');
        e.target.classList.add('active');

        if(window.innerWidth <= 750){
            hNav.menu.click();l
        }
        // insert the logic here, load the list of selected display
        
    };

    const home = () => {
        container.header.innerText = 'Today';
        document.querySelector('.info-comp .active').classList.remove('active');
        vNav.today.classList.add('active');
        changeMain('dueDate', dateString.todayString(), 'today');
    };

    const taskProjectList = () => {
        task.projectSelector.innerHTML = '';
        task.projectSelector.innerHTML = `
            <button id = "projectDefaultInbox">
                <span class="material-icons-outlined mid">inbox</span>
                <u>Inbox</u>
            </button>
        `;
        document.querySelector('#projectDefaultInbox').onclick = select.inbox;
        if(task.project.dataset.value == 'inbox'){
            document.querySelector('#projectDefaultInbox').classList.add('active')
        }

        let data = JSON.parse(localStorage.getItem('todos'));

        data.projects.forEach((project) => {
            const button = document.createElement('button');
            button.innerHTML = `
                <span class="material-icons-outlined mid">circle</span>
                <u>${project}</u>
            `;
            task.projectSelector.appendChild(button);
            if(task.project.dataset.value == project){
                button.classList.add('active')
            }
            button.onclick = select.project;            
        });
    };

    const taskLabelList = () => {
        task.labelContainer.innerHTML = '';
        task.labelContainer.innerHTML = `
            <button id = "labelNone">
                <u>No Label</u>
            </button>
        `;

        document.querySelector('#labelNone').onclick = select.noLabel;
        if(task.label.dataset.value == ''){
            document.querySelector('#labelNone').classList.add('active')
        }

        let data = JSON.parse(localStorage.getItem('todos'));

        data.labels.forEach((label) => {
            const button = document.createElement('button');
            button.innerHTML = `
                <span class="material-icons-outlined mid">label</span>
                <u>${label}</u>
            `;
            task.labelContainer.appendChild(button);
            if(task.label.dataset.value == label){
                button.classList.add('active')
            }
            button.onclick = select.label;            
        });
    };

    const taskPriorityList = () => {
        task.priorityContainer.querySelectorAll('button').forEach((button) => {
            button.classList.remove('active');
        });

        if (task.priority.dataset.value == 'priority 4'){
            task.priorityFour.classList.add('active');
        } else if (task.priority.dataset.value == 'priority 3'){
            task.priorityThree.classList.add('active');
        } else if (task.priority.dataset.value == 'priority 2'){
            task.priorityTwo.classList.add('active');
        } else {
            task.priorityOne.classList.add('active');
        }
    };

    return {
        todolist,
        home,
        taskProjectList,
        taskLabelList,
        taskPriorityList
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
        task.spanToday.innerText = dateString.todayName();
        task.spanTwm.innerText = dateString.tomorrowName();
        task.spanNextWeek.innerText = dateString.nextWeekName();

        document.querySelectorAll('.add-task-div .active').forEach((element)=> {
            element.classList.remove('active');
        });

        if (task.schedule.dataset.value == ''){
            task.schedNoDate.classList.add('active');
        } else if (task.schedule.innerText == 'Today'){
            task.schedToday.classList.add('active');
        } else if (task.schedule.innerText == 'Tomorrow'){
            task.schedTwm.classList.add('active');
        } else if (task.schedule.innerText == 'Next Week'){
            task.schedNextWeek.classList.add('active');
        } else {
            task.schedCustomDiv.classList.add('active');
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
        refresh.projectList();
    };

    const label = () => {
        if(!modal.addLabelInput.value){
            alert('Label name required!')
            return;
        }
        push.label(modal.addLabelInput.value);
        modal.labelCreator.classList.toggle('on');
        setTimeout(()=> alert('Added to Labels!'), 500);
        refresh.labelList();
    };

    const todo = function() {
        if(!task.input.value){
            alert('Task name required!')
            return;
        }

        push.task(
            task.input.value,
            task.schedule.dataset.value,
            task.priority.dataset.value,
            task.project.dataset.value,
            task.label.dataset.value
        );

        let project = task.project.dataset.value.toUpperCase();
        alert(`Added to ${project}!`);
        toggle.taskCreator();
    };

    return {
        quick,
        project,
        label,
        todo
    };
})();

const select = (() => {
    const reset = () => {
        task.schedule.innerHTML = `
            <span class="material-icons-outlined mid">event</span> Schedule
        `;
        task.schedCustomInput.value = '';
        task.schedule.dataset.value = '';
        task.project.dataset.value = 'inbox';
        task.project.innerHTML = `
            <span class="material-icons-outlined mid">inbox</span> Inbox
        `;
        task.label.dataset.value = '';
        task.priority.dataset.value = 'priority 4';
    };

    const schedule = (e) => {
        if(e.currentTarget.innerText.includes('Today')){
            task.schedule.innerText = 'Today';
            task.schedule.dataset.value = dateString.todayString();
        } else if (e.currentTarget.innerText.includes('Tomorrow')){
            task.schedule.innerText = 'Tomorrow';
            task.schedule.dataset.value = dateString.twmString();
        } else if (e.currentTarget.innerText.includes('Week')){
            task.schedule.innerText = 'Next Week';
            task.schedule.dataset.value = dateString.nextWeekString();
        } else {
            task.schedule.innerText = 'No Date';
            task.schedule.dataset.value = '';
        }
        toggle.taskScheduler();
    };

    const customSched = () => {
        if(!task.schedCustomInput.value){
            alert('Date required!')
        } else {
            let newDate = new Date(task.schedCustomInput.value);
            newDate.setHours(0,0,0,0);

            let date = newDate.getDate().toString();

            if(date.length == 2){
                newDate = `${newDate.getFullYear()}-${newDate.getMonth()+1}-${newDate.getDate()}`;
            } else {
                newDate = `${newDate.getFullYear()}-${newDate.getMonth()+1}-0${newDate.getDate()}`;
            }

            task.schedule.innerText = newDate;
            task.schedule.dataset.value = newDate;
            toggle.taskScheduler();
        }
    };

    const inbox = (e) => {
        task.project.innerHTML = `
            <span class="material-icons-outlined mid">inbox</span> Inbox
        `;
        task.project.dataset.value = 'inbox';
        toggle.taskProjectSelector();
    };

    const project = (e) => {
        task.project.innerText = e.currentTarget.outerText.substring(7);
        task.project.dataset.value = task.project.innerText;
        toggle.taskProjectSelector();
    };

    const label = (e) => {
        task.label.dataset.value = e.currentTarget.outerText.substring(6);
        toggle.taskLabeler();
    };

    const noLabel = () => {
        task.label.dataset.value = '';
        toggle.taskLabeler();
    };

    const priority = (e) => {
        let data = e.currentTarget.outerText.substring(5).toLowerCase();
        task.priority.dataset.value = data;
        toggle.taskPrioritySetter();
    };

    return {
        reset,
        schedule, customSched,
        inbox, project, label, noLabel, priority
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

    task.add.addEventListener('click', add.todo);
    task.schedToday.addEventListener('click', select.schedule);
    task.schedTwm.addEventListener('click', select.schedule);
    task.schedNextWeek.addEventListener('click', select.schedule);
    task.schedNoDate.addEventListener('click', select.schedule);
    task.schedCustomBtn.addEventListener('click', select.customSched);

    task.priorityContainer.querySelectorAll('button').forEach((button) => {
        button.addEventListener('click', select.priority);
    });

    //fix data.js first before adding events in label, project, and todo editor

    window.onclick = viewManager;
    window.onresize = viewportListener;

    //esc keyup that closes modals will be cool

})();

export default event;