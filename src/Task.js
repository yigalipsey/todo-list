import {GrCompliance} from 'react-icons/gr'
import {AiFillDelete} from 'react-icons/ai'


export const Task = ({todo,deleteTask,completeTask }) => {
    
    return (
   <div className={`${todo.isCompleted ? " bg-green-700" : "bg-blue-500 "} dark flex mt-1 mb-1 gap-2 border border-[1px]  border-solid  rounded-lg flex items-center  pr-3 pl-3 w-full bg-blue-500`} >
    <div className=" w-[90%] overflow-x-scroll ">
    <h1 className={`text-white text-lg h-full flex justify-start`}>{todo.taskName}</h1>
    </div>


    <div className=" flex  float-right gap-3 w-[10%]  justify-end  ">
    <button onClick={()=>{deleteTask(todo.id)}} ><AiFillDelete/></button>
    <button onClick={()=>{completeTask(todo.id)}} ><GrCompliance/></button>
    </div>
    
  
   </div>
    );
  };
  
  export default Task;