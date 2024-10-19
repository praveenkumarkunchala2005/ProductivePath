import React from "react";
import { Link } from "react-router-dom";

const Card = ({ post }) => {
  return (
    <div className="flex flex-col w-full">
      <Link to={`/Article/${post.id}`} aria-label={`Read article: ${post.heading}`}>
        <article className="flex flex-col items-center justify-between p-4 rounded-md h-[600px]"> {/* Fixed height for uniformity */}
          <img
            src={post.selectedCoverImage}
            alt={`Cover image for ${post.heading}`}
            className="w-full h-48 object-cover"
          />
          <div className="bg-newColour flex flex-col flex-grow w-full py-4 px-6">
            <div className="flex flex-row gap-2">
              <p>{post.Date}.</p>
              <p>1 min</p>
            </div>
            <div className="flex flex-col gap-3 flex-grow">
              <h2 className="font-normal text-wrap font-serif text-2xl line-clamp-2">
                {post.heading}
              </h2>
              <p className="truncate font-thin font-serif text-xl line-clamp-2">
                {post.aboutArticle}
              </p>
            </div>
            <div>
              <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
              <div>{(post.views > 0 ? (post.views / 2).toLocaleString() : 0) + ' views'}</div>
            </div>
          </div>
        </article>
      </Link>
    </div>
  );
};

export default Card;
