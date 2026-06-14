import { Appbar } from "../components/Appbar";
import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";
import { Avatar } from "../components/BlogCard";
import {Spinner} from '../components/Spinner'

export const Blog = () => {
  const { id } = useParams();

  const { loading, blog } = useBlog({
    id: id || ""
  });

  if (loading || !blog) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner></Spinner>
      </div>
    );
  }

  return (
    <div>
      <Appbar />

      <div className="grid grid-cols-12 px-10 pt-12 max-w-xl mx-auto">

        {/* Blog Content */}
        <div className="col-span-8">

          <div className="text-5xl font-extrabold">
            {blog.title}
          </div>

          <div className="text-slate-500 pt-4">
            Posted on August 24, 2026
          </div>

          <div className="pt-8 text-lg text-slate-700 leading-8">
            {blog.description}
          </div>

        </div>

        {/* Author Section */}
        <div className="col-span-4 pl-12">

          <div className="text-slate-600 text-lg">
            Author
          </div>

          <div className="flex pt-4">

            <div className="pr-4 flex flex-col justify-center">
              <Avatar
                name={blog.author.name}
              />
            </div>

            <div>
              <div className="text-2xl font-bold">
                {blog.author.name}
              </div>

              <div className="text-slate-500 pt-2">
                Random catch phrase about the author's ability to grab user's attention.
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};