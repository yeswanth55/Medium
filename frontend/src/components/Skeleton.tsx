import {Circle} from '../components/BlogCard'
export const Skeleton=()=>{
    return <div>
        <div role="status" className="max-w-sm animate-pulse">
            <div className='border-b p-4 border-slate-200 cursor-pointer'>
                    <div className='flex pb-3'>
                        <div className='flex justify-center flex-col'>
                            <div className="h-6 bg-gray-200 rounded-full w-48 mb-4"></div>
                        </div>
                        <div className='font-extralight pl-2 text-sm'>
                            <div className="h-6 bg-gray-200 rounded-full w-4 mb-4"></div>
                        </div>
                        <div className='pl-2 font-thin text-slate-500 text-sm'>
                            <div className="h-6 bg-gray-200 rounded-full w-48 mb-4"></div>
                        </div>
                    </div>
                    <div className='text-md font-semibold'>
                        <div className="h-6 bg-gray-200 rounded-full w-48 mb-4"></div>
                    </div>
                    <div className='text-md font-thin'>
                        <div className="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
                    </div>
            <span className="sr-only">Loading...</span>
        </div>
    </div>
    </div>
}