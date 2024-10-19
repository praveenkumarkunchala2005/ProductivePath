import React from "react";
import Image2 from "../assets/Image2.png";

const Posts = () => {
  return (
    <>
      <div className="flex flex-col w-5/6 items-center justify-center">
        <a href="/">
          <div className="flex flex-col  items-center justify-center p-12 rounded-sm">
            <img
              src={Image2}
              alt="Descriptive alt text for the image"
              className="w-full h-auto"
            />
            <div className="bg-newColour h-80 w-full py-7 px-10">
              <div className="flex flex-row gap-2">
                <p>Mar 22, 2023 .</p>
                <p>1 min</p>
              </div>
              <div className="flex flex-col gap-3 py-6">
                <div className="font-normal font-serif text-4xl">
                  Thinking with visual mind maps
                </div>
                <div className="truncate font-thin font-serif text-xl">
                  Create a blog post subtitle that summarizes your post in a few
                  short, punchy sentences and entices your audience to continue
                  reading.
                </div>
              </div>
              <div>
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                <div>0 views</div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default Posts;
