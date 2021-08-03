'use strict';

const embedLocalStorage = (() => {
    if(!localStorage.getItem('todos'))
    localStorage.setItem('todos', JSON.stringify([]));
})();

const Todo = function( id, title, dueDate, note, priority, project, label, dueDateNotifSent ){
    return { id, title, dueDate, note, priority, project, label, dueDateNotifSent }
};

//create container for projects
//container for labels









const test = (function(){
    const todo = Todo(
        1,
        'finish todo',
        '2021-07-31',
        '',
        'priority 1',
        'inbox',
        '',
        'none'
    );

    let array = JSON.parse(localStorage.getItem('todos'));

    if(!array.length){
        array.push(todo);
        localStorage.setItem('todos', JSON.stringify(array));
    }

    console.log(todo)

    // let x = Date.now();
    // // let x = new Date().getTime();
    // // Date.parse(x)
    // let as = todo.dueDate;
    // console.log(Date.parse(as))

    // var dateControl = document.querySelector('input[type="date"]');
    // dateControl.value = '2017-06-01';
    // console.log(dateControl.value); // prints "2017-06-01"
    // console.log(dateControl.valueAsNumber); // prints 1496275200000, a JavaScript timestamp (ms)

})();

export { embedLocalStorage, test };
