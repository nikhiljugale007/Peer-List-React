import { Icon_close, Icon_emoji } from "../../assets";

const NewPostModal = ({ setShowNewPostModal }) => {
  return (
    <div
      className="modal fade fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto
                      flex flex-row items-center justify-center 
                    "
      id="exampleModalCenter"
      tabIndex="-1"
      aria-labelledby="exampleModalCenterTitle"
      aria-modal="true"
      role="dialog"
    >
      <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none ">
        <div className="modal-content border-none shadow-lg relative flex flex-col w-56 pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
          <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
            <h5
              className="text-xl font-medium leading-normal text-gray-800"
              id="exampleModalScrollableLabel"
            >
              New Post
            </h5>
            <button>
              <img
                className="p-1 border rounded-full"
                onClick={() => setShowNewPostModal(false)}
                src={Icon_close}
                alt="close"
              />
            </button>
          </div>
          <div className="modal-body relative p-4">
            <label
              className="block text-gray-700 text-sm mb-2 border border-gray-400 rounded px-2 focus-within:border-black"
              htmlFor="firstName"
            >
              Post Content
              <input
                className="appearance-none w-full my-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="firstName"
                name="firstName"
                type="text"
              />
            </label>
            <div>
              <div>
                <img src={Icon_emoji} alt="emoji" />
              </div>
              <button className="bg-primary-color text-white px-2 py-1 rounded  hover:bg-primary-font-color w-max">
                POST
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export { NewPostModal };
