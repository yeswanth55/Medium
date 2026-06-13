import type {Blog} from '../hooks/index'
import {Appbar} from '../components/Appbar'
import { Avatar } from './BlogCard'
export const Fullblog=({blog}:{blog:Blog})=>{
    return <div>
        <Appbar></Appbar>
        <div className='flex justify-center '>    
            <div className='grid grid-cols-2 px-10 w-full pt-200 max-w-7xl pt-12'>
                <div className='col-span-8'>
                    <div className='text-5xl font-extrabold'>
                        {blog.title}
                    </div>
                    <div className='text-slate-500 pt-2'>
                        post on june 2026
                    </div>
                    <div className='pt-2'>
                        {blog.description}
                    </div>
                </div>
            </div>
            <div className='col-span-4'>
                <div className=' text-slate-600 text-lg'>
                    Author
                </div>
                <div className='flex w-full'>
                    <div className='pr-4 flex flex-col justify-center'>
                        <Avatar name={blog.author.name || "Anonymous"}></Avatar>
                    </div>
                    
                    <div >
                        <div className='text-xl font-bold'>
                            {blog.author.name}|| "Anonymous"
                        </div>
                        <div className='pt-2 text-slate-600'>
                                random catch phase i am yeswanth why you are testing me god and i am capable of getting job
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}