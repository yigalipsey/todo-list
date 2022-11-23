import { useState} from 'react';
import './App.css';
import Task from './Task';

function App() {
  const [todosArray,setTodosArray] = useState([]);
  const [task,setTask] = useState(" ");
  

 

  const handleTask = () =>{
      const fullTask = {
         taskName: task,
         id : todosArray.length===0 ? 1 : todosArray[todosArray.length-1].id + 1,
         isCompleted : false
      };
      setTodosArray([...todosArray, fullTask]);
  }

  const deleteTask = (id) =>{
    const newTodosArray = todosArray.filter(todo => todo.id!== id);
    setTodosArray(newTodosArray);
  }

  const completeTask = (id) =>{ 
    const newArr = todosArray.map((task)=>{
      if(task.id === id){
        return {
          taskName: task.taskName,
          id : task.id,
          isCompleted : true
        }
    }else{
     return task;
    }
  })
    setTodosArray(newArr)
  }

 
  return (

    <div className="App ">
     <h1 className=' basis-3/5 mt-10 text-3xl text-blue-700'>Todo app</h1>
    
   
       <div className='flex mt-5 justify-center   mx-auto' > 

        <div className=' w-4/6 md:w-2/6'>
        <input  onChange={(e)=>{setTask(e.target.value)}}  class="h-9 placeholder:italic placeholder:text-slate-400 block bg-white w-full border  border-blue-500 rounded-l-md py-2 pl-9 pr-3 shadow-sm focus:outline-none ring-blue-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Add yout task..." type="text" name="search"/>
        </div> 
  
        <button onClick={handleTask} class= "bg-blue-500 h-9 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-md">
          Submit
        </button>
       </div>

    

      {console.log(task)}
  
    <div className='mt-10 w-5/6  mx-auto flex flex-col items-center'>
       {todosArray.map((todo) => {
         return(<Task 
          todo={todo}
          deleteTask={deleteTask}
          completeTask ={completeTask }
          /> )
      })}

    </div>
      
    </div>
  );
}

export default App;
