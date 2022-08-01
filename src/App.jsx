import {useState } from 'react'
import { ListChecks, ClipboardText  } from 'phosphor-react'
import styles from './App.module.css'
import { Tasks } from './componentes/Tasks';

import './global.css';
// informações que mudam em cada task:
// input: checkBox 
// content: String, boolean
// button: Trash

// const tasks = [
//   {
//     description: 'string',
//     completed: 'boolean',
//   }
// ]
export function App() {

  const [newTaskText, setNewTaskText] = useState('')  
  const [tasks, setTasks] = useState([])
  const taskWidth = window.innerWidth
  

  function handleCreateNewTask(event){
    event.preventDefault() 
    
    setTasks([...tasks, { description: newTaskText, completed: false }])
    setNewTaskText('')      
  }  

  function handleNewTaskChange(event){
    event.target.setCustomValidity('')             
    setNewTaskText(event.target.value)
  }

  function handleNewTaskInsert() {          
      setTasks([...tasks])      
  } 

  function handleNewTaskInvalid(event) {
    event.target.setCustomValidity('Esse campo é obrigatório')
  }  
  
  function handleSetCompletedTask(id) {
    const newTaskList = tasks.map(
      (task, index) => ({ 
      ...task, 
      completed: index === id ? !task.completed : task.completed
    })
    );

    setTasks(newTaskList)
  } 

  function deleteTask(id) {
    const newTaskList = tasks.filter((_, index) => (id !== index));

    setTasks(newTaskList)
  }      
  return (    
    <div className={styles.wrapper}>
      <div className={styles.header}> 
        <header>        
          <p>to <ListChecks size={32} /> <span>do</span> </p>
        </header>
      </div> 
      <div>
        <form onSubmit={handleCreateNewTask} className={styles.newTask}>          
          <textarea
            name='task'
            placeholder='Adicione uma nova tarefa'
            value={newTaskText}
            onChange={handleNewTaskChange}
            onInvalid = {handleNewTaskInvalid}            
            required
          />          
          <button 
            onClick={handleNewTaskInsert} 
            type='submit' 
            disabled={newTaskText.length === 0}
          >
            Criar
          </button>          
        </form>        
        
      </div>      
      <main>        
        <div className={styles.tasksDone}>
          <p>Tarefas criadas 
            <span>{tasks.length}</span></p>
          <p className={styles.completed}>Concluídas 
            <span className={styles.completedTasks}>
              {tasks.filter(task => (task.completed === true)).length} de {tasks.length}
            </span>
          </p>
        </div>
        <div className= {!tasks.length?styles.empty:styles.emptyLeave}> 
          <ClipboardText size={56} />
          Você ainda não tem tarefas cadastradas
          <span>Crie tarefas e organize seu itens a fazer</span>      
        </div>         
        {tasks.map((taskSend, index) => {
          return(
            <Tasks
              key={taskSend.description} 
              taskIn={taskSend}
              handleDeleteTask={() => deleteTask(index)}
              setCompletedTask={() => handleSetCompletedTask(index)}                     
            />
        )})}                  
      </main>             
    </div>      
  )
}
