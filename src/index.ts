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

const displayTask = () => {
  let listHTML: string = ``

  for (let i:number = 0; i < mydoList   .length; i++) {
   listHTML += `<li> ${mydoList [1]} <br> <button> Edit</button> <button onclick= 'deleteTask(${i})''> Completed</buttton> </li>`;
  };
  taskList.innerHTML = listHTML
}

const deleteTask = (index: number) => {
  mydoList.splice(index, 1); 
  displayTask();
}

