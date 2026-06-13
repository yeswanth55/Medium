import {Link} from 'react-router-dom'
interface blogInput{
    title:string,
    description:string,
    authorName:string,
    publishedDate:string,
    id:string
}
export const BlogCard=({id,title,description,authorName,publishedDate}:blogInput)=>{
    return <Link to={`/blog/${id}`}>
            <div className='border-b p-4 border-slate-200 cursor-pointer'>
        <div className='flex pb-3'>
            <div className='flex justify-center flex-col'>
                <Avatar name={authorName}></Avatar>
            </div>
            <div className='font-extralight pl-2 text-sm'>
                {authorName}
            </div>
            <div className='pl-2 font-thin text-slate-500 text-sm'>
                {publishedDate}
            </div>
        </div>
        <div className='text-md font-semibold'>
            {title}
        </div>
        <div className='text-md font-thin'>
            {description.slice(0,200)+'...'}
        </div>
        <div className='flex pt-2'>
            <div className='pt-2 pr-1'>
                <Circle></Circle>
            </div>
            
            <div className='text-slate-500 text-sm  font-thin'>
                {`${Math.ceil(description.length/100)} minute(s) read`}
            </div>
        </div>
        
    </div>
    </Link>
    
}

export function Circle(){
    return <div className='w-1 h-1 border bg-black rounded-full'></div>
}

interface AvatarInput {
  name: string;
}

export const Avatar = ({ name }: AvatarInput) => {
  return (
    <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-200 rounded-full">
      <span className="font-medium text-gray-700">
        {name[0].toUpperCase()}
      </span>
    </div>
  );
};