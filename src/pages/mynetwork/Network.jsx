import { useState } from "react";
import "./Network.css";
import { FindUser } from "./FindUser";
import { Following } from "./Following";
import { Followers } from "./Followers";

const Network = () => {
  const [activeTab, setActiveTab] = useState("FIND");
  return (
    <div className="min-h-screen flex flex-col w-full">
      <ul className="w-full  flex flex-row gap-6 px-2 border-b ">
        <li
          className={
            "cursor-pointer py-1 px-4 " +
            (activeTab === "FIND" ? "active-tab" : "")
          }
          onClick={() => setActiveTab("FIND")}
        >
          <p className=" px-2 py-1">Find</p>
        </li>
        <li
          className={
            "cursor-pointer py-1 px-4 " +
            (activeTab === "FOLLOWING" ? "active-tab" : "")
          }
          onClick={() => setActiveTab("FOLLOWING")}
        >
          <p className=" px-2 py-1">Following</p>
        </li>
        <li
          className={
            "cursor-pointer py-1 px-4 " +
            (activeTab === "FOLLOWERS" ? "active-tab" : "")
          }
          onClick={() => setActiveTab("FOLLOWERS")}
        >
          <p className=" px-2 py-1">Followers</p>
        </li>
      </ul>
      <div>
        {activeTab === "FIND" && <FindUser />}
        {activeTab === "FOLLOWING" && <Following />}
        {activeTab === "FOLLOWERS" && <Followers />}
      </div>
    </div>
  );
};

export { Network };
