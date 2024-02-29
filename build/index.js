"use strict";
const input = document.getElementById("input");
const sub = document.getElementById("sub");
const taskList = document.getElementById("taskList");
const inputSection = document.getElementById("taskInputSection");
let mydoList = [];
sub.addEventListener("click", () => {
    mydoList.push(input.value);
    taskList.innerHTML = `<li> ${input.value}</li>`;
});
