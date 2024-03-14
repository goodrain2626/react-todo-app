import { atom, selector } from 'recoil';

export interface IToDo{
    text: string;
    id: number;
    category: "TO_DO" | "DOING" | "DONE";
}

export const toDoState = atom<IToDo[]>({
    key: "toDo",
    default: [], //array로 만듦
})


export const toDoSelector = selector({
    key: "toDoSelector",
    get: ({get}) => {
        // const toDos = get(toDoState)
        const toDos = get(toDoState)
        return [
            toDos.filter((toDo) => toDo.category === "TO_DO"), 
            toDos.filter((toDo) => toDo.category === "DOING"), 
            toDos.filter((toDo) => toDo.category === "DONE")]
    }
})