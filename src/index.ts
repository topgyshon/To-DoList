  const input = document.getElementById("input") as HTMLInputElement
  const sub= document.getElementById("sub") as HTMLButtonElement
  const taskList = document.getElementById("taskList") as HTMLOListElement
  const inputSection = document.getElementById("taskInputSection") as HTMLDivElement
  
  
let mydoList:string[] = [];

sub.addEventListener("click", ()=>{
  if (input.value.length > 0){
    mydoList.push(input.value);
    input.value = '';
    displayTask();
  }
});

// function to render HTML template depending on task array
const displayTask = () => {
  let listHTML: string = ``

  for (let i:number = 0; i < mydoList.length; i++) {
   listHTML += `<li> ${mydoList [i]} <br> <button onclick='editTask(${i})'> Edit</button> <button onclick= 'deleteTask(${i})'> Completed</buttton> </li>`;
  };
  taskList.innerHTML = listHTML
}

// FUNCTION TO DELETE task from ARRAY
const deleteTask = (index: number): void => {
  mydoList.splice(index, 1); 
  displayTask();
}

const editTask = (index: number): void => {
  mydoList.splice(index, 1, input.value)
  if (input.value.length > 0){
    mydoList.push(input.value);
    input.value = '';
    displayTask();
  }
}
