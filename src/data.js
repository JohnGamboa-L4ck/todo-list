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

    return {
        quick,
        project,
        label,
        task,
        projectRename, projectDelete,
        labelRename, labelDelete
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


const test = (function(){
    // console.log(dateString.todayString())
    // console.log(Date.parse(dateString.todayString()))
    // const todo = Todo(
    //     1,
    //     'finish todo',
    //     '2021-07-31',
    //     '',
    //     'priority 1',
    //     'inbox',
    //     '',
    //     'none'
    // );
    // let array = JSON.parse(localStorage.getItem('todos'));
    // if(!array.length){
    //     array.push(todo);
    //     localStorage.setItem('todos', JSON.stringify(array));
    // }
    // console.log(todo)

    // var dateControl = document.querySelector('input[type="date"]');
    // dateControl.value = '2017-06-01';
    // console.log(dateControl.value); // prints "2017-06-01"
    // console.log(dateControl.valueAsNumber); // prints 1496275200000, a JavaScript timestamp (ms)

    // const datax = '2021-08-8';
    // console.log(datax);
    // console.log(Date.parse(datax))
    // // console.log(datax.valueAsNumber)

    // const today = new Date();
    // today.setHours(0,0,0,0);
    // console.log('today', today);
    // console.log('today number', Date.parse(today));

    // const tomorrow = new Date()
    // tomorrow.setDate(tomorrow.getDate() + 1)
    // tomorrow.setHours(0,0,0,0);
    // console.log(tomorrow);
    // console.log(Date.parse(tomorrow))

    // let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    // let d = new Date(); //or dateString
    // let dayName = days[d.getDay()];
    // console.log(dayName)

    // console.log(dateString.nextWeek());
})();

export { 
    embedLocalStorage,
    isEmptyToDayList,
    test,
    push,
    dateString
};
