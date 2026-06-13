import { Link } from "react-router-dom";
import { Avatar } from "../components/BlogCard";

export const Appbar = () => {
  return (
    <div className="border-b flex justify-between items-center px-6 h-16">
      <Link to="/blogs">
        <div className="text-2xl font-bold cursor-pointer">
          Medium
        </div>
      </Link>

      <div className="flex items-center gap-4">
        <Link to="/publish">
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm cursor-pointer">
            Publish
          </button>
        </Link>

        <Avatar name="Yeswanth" />
      </div>
    </div>
  );
};