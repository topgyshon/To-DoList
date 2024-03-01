"use strict";
const input = document.getElementById("input");
const sub = document.getElementById("sub");
const taskList = document.getElementById("taskList");
const inputSection = document.getElementById("taskInputSection");
let mydoList = [];
sub.addEventListener("click", () => {
    if (input.value.length > 0) {
        mydoList.push(input.value);
        input.value = '';
        displayTask();
    }
});
const displayTask = () => {
    let listHTML = ``;
    for (let i = 0; i < mydoList.length; i++) {
        listHTML += `<li> ${mydoList[1]} <br> <button> Edit</button> <button onclick= 'deleteTask(${i})''> Completed</buttton> </li>`;
    }
    ;
    taskList.innerHTML = listHTML;
};
const deleteTask = (index) => {
    mydoList.splice(index, 1);
    displayTask();
};
