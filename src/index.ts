  const input = document.getElementById("input") as HTMLInputElement
  const sub= document.getElementById("sub") as HTMLButtonElement
  const taskList = document.getElementById("taskList") as HTMLOListElement
  const inputSection = document.getElementById("taskInputSection") as HTMLDivElement
  
  
let mydoList:string[] = [];

sub.addEventListener("click", ()=>{
    mydoList.push(input.value);
    taskList.innerHTML = `<li> ${input.value}</li>`;
})

