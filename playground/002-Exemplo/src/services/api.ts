import { Task } from "../types/Task";

const url: string = "https://jsonplaceholder.typicode.com";

// READ
async function fetchTasks(): Promise<Task[]> {
  const response = await fetch(`${url}/todos`);
  
  if(!response.ok){
        throw new Error("Erro ao obter tarefas!" );
  }  
  
  const data = await response.json();
  return data;
}

async function fetchTask(id: number): Promise<Task> {
  const response = await fetch(`${url}/todos/${id}`);
  
  if(!response.ok){
       throw new Error("Erro ao obter tarefa!" );
  }  
  
  const data = await response.json();
  return data;
}

// READ
async function delTask(id: number): Promise<void> {
  const response = await fetch(`${url}/todos/${id}`, { method: "DELETE" });
  if (!response.ok) {
    throw new Error("Failed to delete task");
  }
}

// CREATE
// Registro completo é Task. Ao criar, ainda nao tem o id.
async function createTask(task: Omit<Task, "id">):Promise<Task> {

    const response = await fetch(`${url}/todos`, {
        method: 'POST',

        headers:{
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(task),
    });

    if(!response.ok){
        throw new Error("Erro ao criar tarefa!" );
    }

    const data = await response.json();
    return data;
}


// UPDATE
async function updateTaskDone(id:number, completed:boolean):Promise<Task> {
    const response = await fetch(`${url}/todos/${id}`, {
       method:'PATCH',
       headers:{
           'Content-Type': 'application/json',
       },
       
        body: JSON.stringify({completed: completed, }),
    });
    
    if(!response.ok){
        throw new Error("Erro ao atualizar tarefa!" );
    }
    
    const data = await response.json();
    return data;
}





export { fetchTasks, fetchTask, delTask, createTask, updateTaskDone };
