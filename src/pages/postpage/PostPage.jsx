import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { GetApi } from "../../apicalls/GetApi";
import { PostCard, SpinLoder } from "../../components";
import { ArrowLeftIcon } from "@heroicons/react/outline";
const PostPage = () => {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  const { post_id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const getPostById = async () => {
      const { data, success } = await GetApi(`/api/posts/${post_id}`, false);
      if (success) {
        setPost(data.post);
      } else {
        alert("Some error occured, check console");
      }
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };
    getPostById();
  }, [post_id]);
  return (
    <div className="h-screen w-full ">
      {loading ? (
        <div className="text-center p-10">
          <SpinLoder />
        </div>
      ) : (
        <main
          className={
            "flex-grow h-screen w-full overflow-scroll pb-4 no-scrollbar p-4"
          }
        >
          <button className="mb-2" onClick={() => navigate(-1)}>
            <ArrowLeftIcon className="p-2 h-8 w-8 hover:bg-hover-color border rounded-full" />
          </button>

          <PostCard post={post} />

          <div className="relative  border-2 bg-gray-50 rounded m-2">
            <form>
              <input
                type="text"
                id="search-user-form"
                className="h-12 w-full pl-10 pr-20 rounded z-0 focus:shadow focus:outline-none bg-gray-50"
                placeholder="Post your comment..."
              />
              <div className="absolute top-2 right-2 h-8 flex flex-col justify-center">
                <button
                  type="submit"
                  className="bg-primary-color text-white px-2 py-1 rounded  hover:bg-primary-font-color w-max"
                >
                  POST{" "}
                </button>
              </div>
            </form>
          </div>
          <div className="flex sm:flex-row  sm:gap-20 gap-5 flex-wrap">
            comments map
          </div>
        </main>
      )}
    </div>
  );
};

export { PostPage };
