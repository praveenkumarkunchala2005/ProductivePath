import React, { useEffect, useState } from "react";
import BarWithTags from "./BarWithTags";
import Comment from "./comment";
import DOMPurify from "dompurify";
import { useParams } from "react-router-dom";
import { useAppContext } from "../AppContext";
const init = {
    id: "",
    comments: [],
};

const Article = () => {
    const { handleClick } = useAppContext();
    const { id } = useParams();
    const [article, setArticle] = useState({ ...init });
    const [name, setName] = useState("");
    const [commentText, setCommentText] = useState("");
    const storedPosts = JSON.parse(localStorage.getItem("editorData")) || {};
    const posts = storedPosts[id];
    storedPosts[id].views = (storedPosts[id].views||0) + 1;
    storedPosts[id].Date = new Date().toDateString();
    localStorage.setItem("editorData", JSON.stringify(storedPosts));

    useEffect(() => {
        const storedArticle = localStorage.getItem(id);
        if (storedArticle) {
            setArticle(JSON.parse(storedArticle));
        }
    }, [id]);
    
    const handleCommentSubmit = () => {
        const newComment = {
            name: name,
            comment: commentText,
            date: new Date().toDateString(),
        };
        const storedArticle = localStorage.getItem(id);
        if (storedArticle) {
            const existingArticle = JSON.parse(storedArticle);
            const updatedComments = [...existingArticle.comments, newComment];
            const updatedArticle = { ...existingArticle, comments: updatedComments };
            setArticle(updatedArticle);
            localStorage.setItem(id, JSON.stringify(updatedArticle));
        } else {
            const newArticle = { comments: [newComment] };
            setArticle(newArticle);
            localStorage.setItem(id, JSON.stringify(newArticle));
        }
        setName("");
        setCommentText("");
    };

    return (
        <>
            <BarWithTags handleClick={handleClick}/>
            <div className="flex flex-col lg:flex-row w-full items-center justify-center mt-5 lg:m-10">
                <div className="flex flex-col lg:flex-row w-5/6 items-start justify-center">
                    <div className="flex flex-col w-full lg:w-3/5 m-1 bg-newColour h-auto p-10">
                        <div className="flex flex-row gap-2">
                            <p>{posts.Date}</p>
                            <p>1 min</p>
                        </div>
                        <div className="flex flex-col gap-3 py-6">
                            <div className="font-normal font-serif text-4xl">
                                {posts.heading}
                            </div>
                            <div className="font-thin font-serif text-xl">
                                {posts.aboutArticle}
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <img
                                src={posts.selectedCoverImage}
                                alt="Descriptive alt text for the image"
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="mt-10">
                            <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(posts.value) }} />
                        </div>
                        <div>
                            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                            <div>{posts.views/2} views</div>
                        </div>
                        <div className="">
                            <div className="mt-10">
                                <h2 className="text-2xl font-semibold mb-4">Comments</h2>
                                <div className="flex flex-col gap-4">
                                    {article.comments.map((c, index) => (
                                        <Comment key={index} name={c.name} comment={c.comment} date={c.date} />
                                    ))}
                                </div>
                                <div className="mt-6">
                                    <h3 className="text-xl font-semibold mb-2">Enter Name</h3>
                                    <input
                                        type="text"
                                        className="w-full p-2 border border-gray-300 rounded-lg"
                                        placeholder="Enter your name..."
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                    <h3 className="text-xl font-semibold mb-2">Leave a Comment</h3>
                                    <textarea
                                        className="w-full p-2 border border-gray-300 rounded-lg"
                                        rows="4"
                                        placeholder="Write your comment here..."
                                        value={commentText}
                                        onChange={(e) => setCommentText(e.target.value)}
                                    ></textarea>
                                    <button
                                        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
                                        onClick={handleCommentSubmit}
                                        disabled={!name || !commentText}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full lg:w-2/5 m-1 h-auto items-center bg-newColour justify-center p-10">
                        <img
                            src={posts.selectedProfileImage}
                            alt="Profile"
                            className="w-full h-auto mb-2"
                        />
                        <div className="font-semibold text-lg text-center">
                            Hi, I'm {posts.authorName || "Unknown Author"}
                        </div>
                        <div className="text-gray-500 text-sm text-center">
                            {posts.aboutAuthor || "No information available."}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Article;
