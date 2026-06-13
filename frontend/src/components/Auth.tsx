import {Link, useNavigate} from 'react-router-dom'
import type {ChangeEvent} from 'react'
import {useState} from 'react'
import type {UserSignup} from 'medium-common-yesh'
import {Backend_Url} from '../config'
import axios from 'axios'
// interface Authcheck{
//     type:'signin'|'signup'
// }

export const Auth=(/*{type}:Authcheck*/)=>{
    const [inputValue, SetInputValue]=useState<UserSignup>({
        email:"",
        password:"",
        name:""
    })
    const navigate=useNavigate()
    async function sendRequest(){
        try{
            const response=await axios.post(`${Backend_Url}/api/v1/user/signup`,inputValue);
            navigate("/signin")
        }catch(e){
            alert("error while signing up")
        }
    }
    return <div className='h-svh flex justify-center flex-col '>
        <div className='flex justify-center'>
            <div>
                <div className='text-3xl font-extrabold ml-10'>Create and account</div>
                <div className='mt-2 mb-2 text-blue-300 font-bold ml-15'>Already have an account? <Link to={'/signin'} className='underline'>Login</Link></div>
                <Label type="text" label="UserName" placeholder="enter the nick name" onChange={(e)=>{SetInputValue(c=>({
                    ...c,
                    name:e.target.value
                }))}} ></Label>
                <Label type="email" label="Email" placeholder="yesh321@gmail.com" onChange={(e)=>{SetInputValue(c=>({
                    ...c,
                    email:e.target.value
                }))}}></Label>
                <Label type='password' label="password" placeholder="" onChange={(e)=>{SetInputValue(c=>({...c,password:e.target.value}))}}></Label>
                <button onClick={sendRequest} className='mt-7 mb-2 border-3 pt-2 pb-2 pl-36 pr-36 rounded-xl cursor-pointer text-white font-bold bg-black'>
                    Signup
                </button>
            </div>
        </div>
    </div>
}

export interface LabelInput{
    type:string,
    label:string,
    placeholder?:string,
    onChange:(e: ChangeEvent<HTMLInputElement>)=>void;
}

export const Label=({type, label,placeholder,onChange }:LabelInput)=>{
    return <>
        <div className='mt-2 mb-2 font-bold text-xl '>{label}</div>
        <div className='mt-2 mb-2'><input className="border-3 rounded h-10 w-85 pl-5" type={type} placeholder={placeholder} onChange={onChange}></input></div>
    </>
}