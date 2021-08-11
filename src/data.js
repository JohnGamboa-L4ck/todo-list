'use strict';

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

    const taskUpdate = (targetID, newTitle, newNote, newDueDate, 
      newProject, newLabel, newPriority) => {

        _data = JSON.parse(localStorage.getItem('todos'));
        counter = 0;
        _data.todolist.forEach((task) => {
            if(task.id == targetID){
                _data.todolist[counter].title = newTitle;
                _data.todolist[counter].note = newNote;
                _data.todolist[counter].dueDate = newDueDate;
                _data.todolist[counter].project = newProject;
                _data.todolist[counter].label = newLabel;
                _data.todolist[counter].priority = newPriority;
            }
            counter++;
        });
        _embed();
    };

    const taskChecked = (id) => {
        _data = JSON.parse(localStorage.getItem('todos'));
        counter = 0;

        _data.todolist.forEach((task) => {
            if(task.id === id){
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
        labelRename, labelDelete,
        taskUpdate, taskChecked
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

export { 
    embedLocalStorage,
    isEmptyToDayList,
    push,
    dateString
};
