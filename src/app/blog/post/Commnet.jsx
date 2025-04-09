import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { BASE_URL } from "../../../utils/config";
import { addNewComment } from "../../../utils/blogSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const Comment = ({ comment, blogId }) => {
  const [showModal, setShowModal] = useState(false);
  const [commentId, setCommentId] = useState(null);
  const dispatch = useDispatch()
  const handleReplyClick = (commId) => {
    setCommentId(commId); // Set the comment ID to the clicked comment's ID
    setShowModal(true); // Show the modal
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close the modal
    setCommentId(null); // Reset the comment ID
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const comment = e.target.comment.value;
    const name = e.target.name.value;
    const email = e.target.email.value;
    const website = e.target.website.value;

    const data = {
      content: comment,
      user: name,
      email,
      website,
    };
    let count = Math.random();

    try {
      const response = await fetch(`${BASE_URL}/blogs/${blogId}/comments/${commentId}/replies`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit the comment");
      }
      if (response.ok) {
        
        toast.success("Reply added successfully")
       }

      const result = await response.json();
      count = count +1;
      dispatch(addNewComment(count))
      console.log("Comment submitted successfully:", result);

      // Optionally, clear the form fields after successful submission
      e.target.reset();
    } catch (error) {
      console.error("Error submitting the comment:", error.message);
    } finally {
      handleCloseModal(); // Close the modal after submission
    }
  };

  return (
    <>
      <div>
        <div className={`flex flex-wrap sm:flex-nowrap gap-5 sm:space-x-4 mb-8 ${comment._id === 2 ? "ml-8 sm:ml-28" : ""}`}>
          <div className="w-[100px] h-[100px] rounded-full bg-[#F8A065] grid place-items-center text-white text-6xl font-bold">{comment.user[0]}</div>
          <div className="sm:flex-1">
            <div className="mb-2">
              <span className="text-gray-500 text-sm">
                {new Date(comment.createdAt).toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <h3 className="font-bold text-lg mr-4">{comment.user}</h3>
            </div>
            <div className="flex flex-wrap sm:flex-nowrap gap-2 sm:gap-x-28 items-center justify-between">
              <p className="text-gray-700">{comment.content}</p>
              <button className="text-black font-medium mt-2 hover:text-orange-600 flex items-center text-sm" onClick={() => handleReplyClick(comment._id)}>
                <GoDotFill className="text-[#f8a065]" />
                REPLY
              </button>
            </div>
          </div>
        </div>
        {comment.replies.length > 0 &&
          comment.replies.map((reply) => (
            <div key={reply._id} className={`flex flex-wrap sm:flex-nowrap gap-5 sm:space-x-4 mb-8 ${"ml-8 sm:ml-28"}`}>
              <div className="w-[100px] h-[100px] rounded-full bg-[#F8A065] grid place-items-center text-white text-6xl font-bold">{reply.user[0]}</div>
              <div className="sm:flex-1">
                <div className="mb-2">
                  <span className="text-gray-500 text-sm">
                    {new Date(reply.createdAt).toLocaleDateString("en-IN", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <h3 className="font-bold text-lg mr-4">{reply.user}</h3>
                </div>
                <div className="flex flex-wrap sm:flex-nowrap gap-2 sm:gap-x-28 items-center justify-between">
                  <p className="text-gray-700">{reply.content}</p>
                  {/* <button className="text-black font-medium mt-2 hover:text-orange-600 flex items-center text-sm" onClick={() => handleReplyClick(reply._id)}>
                    <GoDotFill className="text-[#f8a065]" />
                    REPLY
                  </button> */}
                </div>
              </div>
            </div>
          ))}
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] sm:w-[50%]">
            <h2 className="text-2xl font-bold mb-4">Reply to this comment</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <textarea id="comment" className="w-full h-40 p-3 border border-black rounded-2xl bg-transparent focus:border-transparent" placeholder="Your comment *" required></textarea>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <input type="text" id="name" className="w-full p-3 border border-black bg-transparent rounded-[50px] focus:border-transparent" placeholder="Your Name *" required />
                </div>
                <div>
                  <input type="email" id="email" className="w-full p-3 border border-black bg-transparent rounded-[50px] focus:border-transparent" placeholder="Your Email *" required />
                </div>
              </div>
              <div className="mb-4">
                <input type="url" id="website" className="w-full p-3 border border-black bg-transparent rounded-[50px] focus:border-transparent" placeholder="Website" />
              </div>
              <div className="mb-4">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2 h-4 w-4 rounded" />
                  <span className="text-sm text-gray-700">Save my name, email, and website in this browser for the next time I comment.</span>
                </label>
              </div>
              <div className="flex justify-end space-x-4">
                <button type="button" className="px-4 py-2 bg-gray-300 rounded-lg text-black hover:bg-gray-400" onClick={handleCloseModal}>
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 bg-[#f8a065] text-white rounded-lg hover:bg-[#e68a50]">
                  Post Comment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
const CommentSection = ({ blogPosts }) => {
  console.log(blogPosts);
  const totalComments = blogPosts.comments?.length;
  const totalReplies = blogPosts.comments?.reduce((acc, comment) => acc + comment?.replies?.length, 0);
  const totalCount = totalComments + totalReplies;
  return (
    <div className="pb-6">
      <h2 className="text-4xl font-bold mb-8">{totalCount || 0} Comments</h2>
      <div className=' max-h-96 overflow-y-scroll'>
      {blogPosts.comments?.map((comment) => (
        <Comment key={comment.id} comment={comment} blogId={blogPosts.id} />
      ))}</div>
    </div>
  );
};

export default CommentSection;
