import { Icon_close, Icon_emoji } from "../../assets";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editPostThunk } from "../../redux/postSlice";
const EditPostModal = ({ setShowEditPostModal, post }) => {
  const [openEmpjiPicker, setOpenEmojiPicker] = useState(false);
  const { content, media, _id } = post;
  const dispatch = useDispatch();
  const [newPost, setNewPost] = useState({
    content: content,
    media: media,
  });
  const emojiList = [
    { icon: "❤️" },
    { icon: "⚽" },
    { icon: "👍" },
    { icon: "🗺️" },
    { icon: "🙏" },
    { icon: "😘" },
    { icon: "🥰" },
    { icon: "🚀" },
    { icon: "🍔" },
    { icon: "😅" },
    { icon: "😇" },
    { icon: "🤑" },
    { icon: "💥" },
    { icon: "🐋" },
    { icon: "🌟" },
    { icon: "🌈" },
    { icon: "🔥" },
    { icon: "⌛" },
    { icon: "💻" },
    { icon: "📖" },
  ];
  const emojiAdder = (item) => {
    setNewPost((prev) => ({
      ...prev,
      content: prev.content.concat(item.icon),
    }));
    setOpenEmojiPicker(false);
  };
  const submitForm = async () => {
    dispatch(editPostThunk({ _id, newPost }));
    setShowEditPostModal(false);
  };
  return (
    <div
      className="modal fade fixed top-20 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto
                      flex flex-row justify-center z-10
                    "
      id="exampleModalCenter"
      tabIndex="-1"
      aria-labelledby="exampleModalCenterTitle"
      aria-modal="true"
      role="dialog"
    >
      <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none h-64 ">
        <div className="modal-content border-none shadow-lg relative flex flex-col w-70 xl:w-96 pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
          <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
            <h5
              className="text-xl font-medium leading-normal text-gray-800"
              id="exampleModalScrollableLabel"
            >
              Edit Post
            </h5>
            <button>
              <img
                className="p-1 border rounded-full"
                onClick={() => setShowEditPostModal(false)}
                src={Icon_close}
                alt="close"
              />
            </button>
          </div>
          <div className="modal-body relative p-4">
            <div className="mb-3 w-full">
              <label
                htmlFor="newPost"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Post content
              </label>
              <textarea
                className="
                  p-2
                  border border-solid border-gray-300
                  rounded
                  focus:border-primary-color focus:outline-none
                "
                id="newPost"
                placeholder="Add your post "
                value={newPost.content}
                onChange={(e) =>
                  setNewPost((prev) => ({ ...prev, content: e.target.value }))
                }
              ></textarea>
            </div>

            <div className="flex flex-row justify-between">
              <div className="flex flex-row gap-2">
                <button onClick={() => setOpenEmojiPicker((prev) => !prev)}>
                  <img src={Icon_emoji} alt="emoji" />
                </button>
                <input
                  type="file"
                  id="file-input"
                  name="ImageStyle"
                  onChange={(e) => {
                    setNewPost((prev) => ({
                      ...prev,
                      media: e.target.files[0],
                    }));
                  }}
                />
              </div>
              <button
                className="bg-primary-color text-white px-2 py-1 rounded  hover:bg-primary-font-color w-max"
                onClick={() => submitForm()}
              >
                Update
              </button>
            </div>
          </div>
          {openEmpjiPicker && (
            <div className="flex flex-wrap gap-6 w-60 mx-auto p-2">
              {emojiList.map((item, index) => (
                <span
                  key={index}
                  onClick={() => emojiAdder(item)}
                  className="hover:cursor-pointer inline  w-min"
                >
                  {item.icon}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export { EditPostModal };
