import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

/* 
export default function ToDoList() {
    const [toDo, setToDo] = useState("")
    const [toDoError, setToDoError] = useState("")
    const onChange = (event: React.FormEvent<HTMLInputElement>) => {
        setToDoError("")
        setToDo(event.currentTarget.value)
      };
      const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(toDo)
        if(toDo.length < 10 ){
            return setToDoError("To Do should be longer")
        }
        console.log("Error submit")
      }
    return (<div>
        <form onSubmit={onSubmit}>
            <input onChange={onChange} value={toDo} placeholder='Write your to do' />
            <button>Add</button>
            {toDoError !== "" ? toDoError : null}
        </form>
    </div>)
}
 */

interface IForm {
    email: string;
    firstName:string;
    lastName:string;
    userName:string;
    password:string;
    password1:string;
}


export default function ToDoList() {
    const {register,  handleSubmit, formState:{errors}} = useForm<IForm>({
        defaultValues: {
            email: "@naver.com"
        }
    })
    const onValid = (data:any) => {
        console.log(data)
        }
    // console.log(errors)
    // console.log(register("email"))
    // console.log(watch())
    return (<div>
        <form style={{display:"flex", flexDirection: "column"}} onSubmit={handleSubmit(onValid)}>
            <input {...register("email", {required: "Email is required", pattern: {
                value: /^[A-Za-z0-9._%+-]+@naver.com$/,
                message: "Only naver.com eamil is allowed"
            }, })} placeholder='Email' />
            <span>{errors?.email?.message as string}</span>
            
            <input {...register("firstName", {required: "write your firstName"})} placeholder='First Name' />
            <span>{errors?.firstName?.message as string}</span>
            
            <input {...register("lastName", {required: "write your lastName"})} placeholder='Last Name' />
            <span>{errors?.lastName?.message as string}</span>
            
            <input {...register("userName", {required: "write your userName", minLength: 10})} placeholder='User Name' />
            <span>{errors?.userName?.message as string}</span>
            
            <input {...register("password", {required: "Password is required", minLength: 5,})} placeholder='Password' />
            <span>{errors?.password?.message as string}</span>
            
            <input {...register("password1", {required:"Password is required", minLength: {
                value: 5, message: "Your password is too short."
            }})} placeholder='Password1' />
            <span>{errors?.password1?.message as string}</span>
            
            <button>Add</button>
    
        </form>
    </div>)
}

