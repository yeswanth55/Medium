import {Label} from "./Auth"
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import {Backend_Url} from '../config'
import type {UserSingin} from 'medium-common-yesh'

export const SigninAuth=()=>{
    const [inputValue,SetInputValue]=useState<UserSingin>({
        email:"",
        password:""
    })
    const  navigate=useNavigate();
    async function sendRequest(){
        try{
            const response=await axios.post(`${Backend_Url}/api/v1/user/signin`,inputValue)
            const jwt=response.data.token
            localStorage.setItem("token",jwt)
            navigate("/blogs");

        }catch(e){
            alert("error while signin")
        }
    }
    return <div className="h-svh flex justify-center flex-col">
        <div className='flex justify-center'>
            <div>
                <div className='text-3xl font-extrabold ml-10'>
                Login to the account
                </div>
                <Label type="email" label="Email" placeholder="yesh321@gmail.com" onChange={(e)=>{SetInputValue(c=>({
                    ...c,
                    email:e.target.value
                }))}}></Label>
                <Label type='password' label="password" placeholder="" onChange={(e)=>{SetInputValue(c=>({...c,password:e.target.value}))}}></Label>
                <button onClick={sendRequest} className='mt-7 mb-2 border-3 pt-2 pb-2 pl-36 pr-36 rounded-xl cursor-pointer text-white font-bold bg-black'>
                    Signin
                </button>
            </div>
        </div>

    </div>
}