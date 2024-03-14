import React from 'react';
import { useRecoilState, useRecoilValue} from 'recoil';
import CreateToDo from './CreateToDo';
import { Categories, categoryState, toDoSelector } from '../atoms';
import ToDo from './ToDo';


export default function ToDoList() {
    const toDos = useRecoilValue(toDoSelector);
    const [category, setCategory] = useRecoilState(categoryState)
    const onInput = (event:React.FormEvent<HTMLSelectElement>) => {
        setCategory(event.currentTarget.value as any)
    }
    console.log(toDos)
    // console.log(selectorOutput)
return (<div>
        <h1>To Dos</h1> 
        <hr />
        <select value={category} onInput={onInput}>
            <option value={Categories.TO_DO}>To Do</option>
            <option value={Categories.DOING}>Doing</option>
            <option value={Categories.DONE}>Done</option>
        </select>
        <CreateToDo />
        {toDos?.map(toDo => <ToDo key={toDo.id} {...toDo} />)}
    </div>)
}

{/*         <h2>To Do</h2>
        <ul>{toDo.map((toDo) => <ToDo key={toDo.id} {...toDo} />)}</ul>
        <hr />

        <h2>Doing</h2>
        <ul>{doing.map((toDo) => <ToDo key={toDo.id} {...toDo} />)}</ul>
        <hr />

        <h2>Done</h2>
        <ul>{done.map((toDo) => <ToDo key={toDo.id} {...toDo} />)}</ul>
        <hr /> */}