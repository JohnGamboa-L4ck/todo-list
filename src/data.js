'use strict';

const embedLocalStorage = (() => {
    if(!localStorage.getItem('todos'))
    localStorage.setItem('todos', JSON.stringify({todolist: [], projects: [], labels: []}));
})();

const Todo = function( id, title, dueDate, note, priority, project, label, dueDateNotifSent ){
    return { id, title, dueDate, note, priority, project, label, dueDateNotifSent }
};

const isEmptyToDoList = () => {
    let data = JSON.parse(localStorage.getItem('todos'));
    return !data.todolist.length ? true : false;
};

const push = (() => {
    let _data = JSON.parse(localStorage.getItem('todos'));

    const _embed = () => {
        localStorage.setItem('todos', JSON.stringify(_data));
    };

    const generateId = () => {
        let id = _data.todolist.length + 1;

        if(_data.todolist.length){
            let counter = 0;
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

    return {
        quick,
        project,
        label
    }
})();

const dateString = (() => {
    let dateNow;
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 
        'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const today = () => {
        dateNow = new Date();
        dateNow.setHours(0,0,0,0);
        return dateNow;
    };

    const todayName = () => days[today().getDay()];

    const tomorrow = () => {
        dateNow = new Date();
        dateNow.setDate(dateNow.getDate() + 1)
        dateNow.setHours(0,0,0,0);
        return dateNow;
    };

    const tomorrowName = () => days[tomorrow().getDay()];

    const nextWeek = () => {
        dateNow = new Date();
        dateNow.setDate(dateNow.getDate() + 7)
        dateNow.setHours(0,0,0,0);
        return dateNow;
    };

    const nextWeekName = () => {
        return `${days[nextWeek().getDay()]} ${nextWeek().getDate()} ${months[nextWeek().getMonth()]}`;
    };

    return {
        today, todayName,
        tomorrow, tomorrowName,
        nextWeek, nextWeekName
    };
})();


const test = (function(){
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

    const datax = '2021-08-7';
    console.log(datax);
    console.log(Date.parse(datax))
    // console.log(datax.valueAsNumber)

    const today = new Date();
    today.setHours(0,0,0,0);
    console.log('today', today);
    console.log('today number', Date.parse(today));

    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    tomorrow.setHours(0,0,0,0);
    console.log(tomorrow);
    console.log(Date.parse(tomorrow))

    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let d = new Date(); //or dateString
    let dayName = days[d.getDay()];
    console.log(dayName)

    console.log(dateString.today());
})();

export { 
    embedLocalStorage,
    isEmptyToDoList,
    test,
    push,
    dateString
};
