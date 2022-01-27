import React, { useState } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { addTodo, delTodo , updateTodo } from '../actions/index';
import '../App.css';
 


const Todo = () =>
{
  const [inputData, setInputData] = useState('');
  const [todoAction, setTodoAction] = useState();
  
    const list = useSelector((state) => state.TodoReducer.list);
    const dispatch = useDispatch();
    const handleKey = e =>{
        if  (e.code == "Enter" || e.which == 13) {
          e.preventDefault();
          if (todoAction) {
            let todoIndex = list.findIndex(i => i.id == todoAction);
            let todo = list[todoIndex];
            if (todo) {
              todo['data'] = inputData;
              list.splice(todoIndex, 1, { ...todo })
              dispatch(updateTodo(list))

            }
          } else {
            dispatch(addTodo(inputData));
          }
          setInputData('');
          setTodoAction(undefined)
        }
  };
  const editTodo = (id) =>{ 
    let todo = list.find((i) => i.id == id);
    if (todo) {
      setInputData(todo.data);
      setTodoAction(id)
      
    }
    
  }
  const deleteTodo = (id) =>{
    let deleteTodo = list.findIndex(i => i.id == id)
    list.splice(deleteTodo, 1);
    dispatch(delTodo(list))
  }
  return (
    <>
      <div className='mainWrapper'>
        <div className='content'>
          <figure>
            <figcaption>
              Add your List Here
            </figcaption>
            <div className='addItems'>
                <input type='text' placeholder='Add Items' value={inputData} onChange={(event)=>setInputData(event.target.value)} onKeyDown={handleKey}/>
                <i className='fa fa-plus addBtn' onClick={() => dispatch(addTodo(inputData),setInputData(''))} ></i>
            </div>
                <div className='showItems'>
                    {
                        list.map((item)=>{
                        return (
                            <div className='eachItems' key ={item.id}>
                                <h3>{item.data}</h3>
                                <i className='far fa-trash-alt delBtn' onClick={() => deleteTodo(item.id)}></i> 
                                <i className='delBtn' onClick={() => editTodo(item.id)}>✍</i> 
                            </div>
                            )
                        })
                    }
                </div>
          </figure>
        </div>
      </div>
    </>
  )
}

export default Todo;
