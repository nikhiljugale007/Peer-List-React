import "./PostCard.css";
import { avatar } from "../../assets";
import { icon_like, icon_comment } from "../../assets";
const PostCard = () => {
  return (
    <div className=" p-10 flex flex-col gap-5 border-t border-b bg-primary-bg-color w-full">
      <div className="flex flex-row gap-5 items-center ">
        <img src={avatar} alt="profile-pic" className="h-14 w-14" />
        <div className="flex flex-col">
          <p className="text-lg">Amit Wani</p>
          <p className="text-xs text-gray-600">
            13 Apr, 2022 • About 1 hour ago
          </p>
        </div>
      </div>
      <div>
        I've often found that people, not very experienced with Java and OOP
        principles, have this misconception that the purpose of interfaces is to
        achieve multiple inheritance. Read my post where I debunk that myth and
        explain what it really does.
      </div>
      <div className="flex flex-row gap-20">
        <img
          src={icon_like}
          alt="like"
          className="hover:cursor-pointer hover:bg-hover-color p-2 rounded-full"
        />
        <img
          src={icon_comment}
          alt="comment"
          className="hover:cursor-pointer hover:bg-hover-color p-2 rounded-full"
        />
      </div>
    </div>
  );
};

export default PostCard;
