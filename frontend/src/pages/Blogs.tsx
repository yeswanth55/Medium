import {BlogCard} from '../components/BlogCard'
import{Appbar} from '../components/Appbar'
import {useBlogs} from '../hooks/index'
import {Skeleton} from '../components/Skeleton'
export const Blogs=()=>{
    const {loading,blogs}=useBlogs()

    if(loading){
        return <div className='flex justify-center h-screen'>
           <div className='flex flex-col'>
                 <Skeleton></Skeleton>
            <Skeleton></Skeleton>
            <Skeleton></Skeleton>
            <Skeleton></Skeleton>
           </div>
        </div>
    }

    return (
    <div>
        <Appbar></Appbar>
        <div className='flex justify-center'>
            <div className='max-w-xl'>
                    {blogs.map(blog=> <BlogCard
                        id={blog.id}
                        title={blog.title}
                        description={blog.description}
                        authorName={blog.author.name || "Anonymous"}
                        publishedDate="2 june 2026"
                    />)} 
                </div>
            </div>
    </div>)
}