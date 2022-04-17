import React from "react";
import { PostCard, UserCard } from "../../components";
import "./Scroll.css";
const Scroll = () => {
  return (
    <div className="h-screen flex flex-row w-full">
      <div className="h-screen w-full border-l border-r overflow-y-scroll no-scrollbar">
        <p className="font-semibold border-b p-2  sticky top-0 bg-primary-bg-color">
          All feed
        </p>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
      <aside className="recommended-sidebar w-72 sticky top-0 overflow-y-scroll no-scrollbar">
        <p className="font-semibold border-b p-2">Recommeded People</p>
        <div className="flex flex-col gap-2">
          <UserCard />
          <UserCard />
        </div>
      </aside>
    </div>
  );
};

export { Scroll };
