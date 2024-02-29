  let input = document.getElementById("input")! as HTMLInputElement
  let sub= document.getElementById("sub")! as HTMLInputElement

interface toDoList {
    todo: string
}

let mydoList:toDoList[] = []

const addA = (): toDoList[] =>{
    mydoList.push({
        todo:todo.value
    })
    return mydoList
 
}

