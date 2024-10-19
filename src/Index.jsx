import React from "react";
import HomeBody from "./components/HomeBody";
import Card from "./components/Card";

const Index = ({ posts }) => {
  return (
    <>
      <HomeBody />
      <div className="flex flex-col w-full items-center justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 w-full lg:w-5/6 items-center justify-center gap-4">
          {posts.length > 0 ? (
            posts.map(post => (
              <Card key={post.id} post={post} />
            ))
          ) : (
            <div>No posts available</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Index;