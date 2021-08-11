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
        if (vNav.projectListContainer.classList.contains('show')){
            refresh.projectList();
        }
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
        if (vNav.labelListContainer.classList.contains('show')){
            refresh.labelList();
        }
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

    const projectEditor = () => {
        modal.projectEditor.classList.toggle('on');
        if(modal.projectEditor.classList.contains('on')){
            modal.updatedProjectName.value = '';
            trapFocus(modal.projectEditor, vNav.projects);
        } else {
            vNav.projects.focus();
            removeTrapFocus();
        }
    };

    const labelEditor = () => {
        modal.labelEditor.classList.toggle('on');
        if(modal.labelEditor.classList.contains('on')){
            modal.updatedLabelName.value = '';
            trapFocus(modal.labelEditor, vNav.labels);
        } else {
            vNav.labels.focus();
            removeTrapFocus();
        }
    };

    const taskEditor = (id) => { 
        modal.taskEditor.classList.toggle('on');
        if(modal.taskEditor.classList.contains('on')){
            modal.taskEditor.setAttribute('data-id', id)
            refresh.taskEditor(id);
            trapFocus(modal.taskEditor, hNav.plus);
        } else {
            hNav.plus.focus();
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
        projectEditor, labelEditor, taskEditor
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

    if (container.main.hasChildNodes()) {
        container.div.classList.remove('empty');
    } else {
        container.div.classList.add('empty');
    }
};

const changeMain = (tag, value, condition = '') => {
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
        array.sort(function(a, b) {
            return (Date.parse(a.dueDate) - Date.parse(b.dueDate));
        })

        array.forEach((task) => {
            const div = document.createElement('div');
            div.classList.add('todo');
            div.setAttribute('tabindex', '0');
            div.setAttribute('id', task.id);

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
            if (Date.parse(task.dueDate) > Date.parse(dateString.todayString())){
                em.classList.add('sched-upcom');
                if(Date.parse(task.dueDate) == Date.parse(dateString.twmString())){
                    em.innerHTML = `
                    <span class="material-icons-outlined mid">event</span> Tomorrow
                    `;
                } else {
                    em.innerHTML = `
                    <span class="material-icons-outlined mid">event</span> ${task.dueDate}
                    `;
                }
                
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

            div.appendChild(divCheckbox);
            div.appendChild(divBody);
            divBody.appendChild(label);
            divBody.appendChild(labelDiv);
            divBody.appendChild(para);
            divBody.appendChild(em);
            divBody.appendChild(divTool);
            divTool.appendChild(buttonEdit);
            
            container.main.appendChild(div);

            buttonEdit.onclick = () => { 
                toggle.taskEditor(task.id);
            };

            buttonCheck.onclick = () => { 
                remove.task(task.id);
            };
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
        container.header.innerText = word;
        
        if(document.querySelector('.info-comp .active')){
            document.querySelector('.info-comp .active').classList.remove('active');
        }

        e.target.classList.add('active');

        if(window.innerWidth <= 750){
            hNav.menu.click();
        }

        if(word == 'Today'){
            changeMain('dueDate', dateString.todayString(), 'today');
        } else if (word == 'Upcoming') {
            changeMain('dueDate', dateString.todayString(), 'upcoming');
        } else {
            changeMain('project', 'inbox');
        }
    };

    const home = () => {
        container.header.innerText = 'Today';
        if(document.querySelector('.info-comp .active')){
            document.querySelector('.info-comp .active').classList.remove('active');
        }
        vNav.today.classList.add('active');
        changeMain('dueDate', dateString.todayString(), 'today');
    };

    const inbox = () => {
        container.header.innerText = 'Inbox';
        if(document.querySelector('.info-comp .active')){
            document.querySelector('.info-comp .active').classList.remove('active');
        }
        vNav.inbox.classList.add('active');
        changeMain('project', 'inbox');
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
        home, inbox,
        taskProjectList,
        taskLabelList,
        taskPriorityList,
    };
})();

const displayTask = (target, name) => {

    container.header.innerText = `${target.toUpperCase()} > ${name}`;
    if(document.querySelector('.info-comp .active')){
        document.querySelector('.info-comp .active').classList.remove('active');
    }

    if(window.innerWidth <= 750){
        hNav.menu.click();
    }

    changeMain(target, name);
};

const refresh = (() => {
    let data;

    const projectList = () => {
        data = JSON.parse(localStorage.getItem('todos'));
        vNav.projectListContainer.innerHTML = '';

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
                vNav.projectListContainer.appendChild(div);
                div.onclick = (e) => { 
                    e.stopPropagation(); 
                    displayTask('project', project);
                };
                horizBtn.onclick = (e) => { 
                    e.stopPropagation(); 
                    modal.projectName.dataset.value = project;
                    modal.projectName.innerText = project;
                    toggle.projectEditor();
                };
            });
        }
    };

    const labelList = () => {
        data = JSON.parse(localStorage.getItem('todos'));
        vNav.labelListContainer.innerHTML = '';

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
                vNav.labelListContainer.appendChild(div);
                div.onclick = (e) => { 
                    e.stopPropagation(); 
                    displayTask('label', label);
                };
                horizBtn.onclick = (e) => { 
                    e.stopPropagation(); 
                    modal.editLabelName.dataset.value = label;
                    modal.editLabelName.innerText = label;
                    toggle.labelEditor();
                };
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

    const taskEditor = (id) => {
        modal.updatedTaskName.value = '';
        modal.updatedTaskNote.value = '';
        modal.updatedTaskSched.value = '';
        modal.updatedTaskProject.innerHTML = `
            <option value="inbox">Inbox</option>`;
        modal.updatedTaskLabel.innerHTML = `
            <option value="">None</option>`;

        data = JSON.parse(localStorage.getItem('todos'));

        data.projects.forEach((project) => {
            const option = document.createElement('option');
            option.setAttribute('value', project);
            option.innerText = project;
            modal.updatedTaskProject.appendChild(option);
        });

        data.labels.forEach((label) => {
            const option = document.createElement('option');
            option.setAttribute('value', label);
            option.innerText = label;
            modal.updatedTaskLabel.appendChild(option);
        });

        data.todolist.forEach((task) => {
            if(task.id === id){
                modal.updatedTaskName.value = task.title;
                modal.updatedTaskNote.value = task.note;
                modal.updatedTaskProject.value = '';

                if (task.dueDate){
                    let dueDate = task.dueDate.split('-');
                    if (dueDate[1].length == 1){
                        dueDate[1] = `0${dueDate[1]}`;
                        dueDate = dueDate.join('-');
                        modal.updatedTaskSched.value = dueDate;
                    } else {
                        modal.updatedTaskSched.value = task.dueDate;
                    }
                }

                if (task.project){
                    modal.updatedTaskProject.value = task.project;
                }

                modal.updatedTaskLabel.value = task.label;
                modal.updatedTaskPriority.value = task.priority;
            }
        });
    }; 

    return {
        projectList,
        labelList,
        schedule,
        taskEditor
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
        display.inbox();
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

        if (!modal.updatedProjectName.value) { 
            alert('Project name required!');
            return; 
        }

        if (modal.updatedProjectName.value == modal.projectName.dataset.value){
            alert('Enter a different Project name!');
            return;
        }
        push.projectRename(modal.projectName.dataset.value, modal.updatedProjectName.value);
        toggle.projectEditor();
        display.home();
        refresh.projectList();
    };

    const label = () => {

        if (!modal.updatedLabelName.value) { 
            alert('Label name required!');
            return; 
        }

        if (modal.updatedLabelName.value == modal.editLabelName.dataset.value){
            alert('Enter a different Label name!');
            return;
        }
        push.labelRename(modal.editLabelName.dataset.value, modal.updatedLabelName.value);
        toggle.labelEditor();
        display.home();
        refresh.labelList();
    };

    const task = () => {
        push.taskUpdate(
            modal.taskEditor.dataset.id,
            modal.updatedTaskName.value,
            modal.updatedTaskNote.value,
            modal.updatedTaskSched.value,
            modal.updatedTaskProject.value,
            modal.updatedTaskLabel.value,
            modal.updatedTaskPriority.value
        );
        if(modal.updatedTaskProject.value == 'inbox'){
            display.inbox();
        } else {
            display.home();
        }
        toggle.taskEditor();
    };

    return {
        project,
        label,
        task
    };
})();

const remove = (() => {

    const project = () => {
        push.projectDelete(modal.projectName.dataset.value);
        toggle.projectEditor();
        display.home();
        refresh.projectList();
    };

    const label = () => {
        push.labelDelete(modal.editLabelName.dataset.value);
        toggle.labelEditor();
        display.home();
        refresh.labelList();
    };

    const task = (id) => {
        push.taskChecked(id);
        document.querySelector(`[id="${id}"]`).remove();
    };

    return {
        project,
        label,
        task
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

    modal.cancelProjectEditor.addEventListener('click', toggle.projectEditor);
    modal.updateProject.addEventListener('click', update.project);
    modal.deleteProject.addEventListener('click', remove.project);

    modal.cancelLabelEditor.addEventListener('click', toggle.labelEditor);
    modal.updateLabel.addEventListener('click', update.label);
    modal.deleteLabel.addEventListener('click', remove.label);

    modal.cancelTaskEditor.addEventListener('click', toggle.taskEditor);
    modal.updateTask.addEventListener('click', update.task);

    hNav.formSearch.onsubmit = (e) => {
        e.preventDefault();
        alert(`Feature Not Implemented :( \r\n
            The Odin Project didn't give it as a requirement, so I got a bit _(:3」∠)_`);
    };

    window.onclick = viewManager;
    window.onresize = viewportListener;
})();

changeMain('dueDate', dateString.todayString(), 'today');
export default event;