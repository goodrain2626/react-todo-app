import React from 'react';
import { Categories, IToDo, toDoState } from '../atoms';
import { useSetRecoilState } from 'recoil';




export default function ToDo({text, category, id} : IToDo) {
    const setToDos = useSetRecoilState(toDoState)
    const onClick = (event:React.MouseEvent<HTMLButtonElement>) => {
        const {
            currentTarget: {name},
        } = event
        setToDos((oldToDos) => {
            const targetPosition = oldToDos.findIndex(toDo => toDo.id === id) //oldToDos' array에서 toDo.id 와 id props이 같은지 확인
            // console.log(targetPosition)
            // const oldToDo = oldToDos[targetPosition];
            const newToDo = {text, id, category:name as any}
            return [...oldToDos.slice(0, targetPosition), newToDo, ...oldToDos.slice(targetPosition + 1)];
        })
    }
    return (
    <li>
    <span>{text}</span> 
    {category !== Categories.TO_DO && (
    <button name={Categories.TO_DO} onClick={onClick}>📌To Do</button>
    )}
    {category !== Categories.DOING && (
    <button name={Categories.DOING} onClick={onClick}>🔥Active</button>
    )}
    {category !== Categories.DONE && (
    <button name={Categories.DONE} onClick={onClick}>✅Done</button>
    )}
    </li>
    )
}

