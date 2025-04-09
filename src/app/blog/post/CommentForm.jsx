import React from "react";
import { GoDotFill } from "react-icons/go";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../../utils/config";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addNewComment } from "../../../utils/blogSlice";

export default function CommentForm() {
  const { id } = useParams();
  const dispatch=useDispatch()
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

    try {
      const response = await fetch(`${BASE_URL}/blogs/${id}/comments`, {
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
       
       toast.success("Comment added successfully")
      }

      const result = await response.json();
      dispatch(addNewComment(result.data._id))
      console.log("Comment submitted successfully:", result);

      // Optionally, clear the form fields after successful submission
      e.target.reset();
    } catch (error) {
      console.error("Error submitting the comment:", error.message);
    }
  };

  return (
    <>
      <div className="py-6">
        <h1 className="text-4xl font-bold mb-2">Leave a Comment</h1>
        <p className="mb-6 text-gray-600">Your email address will not be published. Required fields are marked *</p>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <textarea id="comment" className="w-full h-60 p-3 border border-black rounded-2xl bg-transparent focus:border-transparent" placeholder="Your comment *" required></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <input type="text" id="name" className="w-full p-3 border border-black bg-transparent rounded-[50px] focus:border-transparent" placeholder="Your Name *" required />
            </div>
            <div>
              <input type="email" id="email" className="w-full p-3 border border-black bg-transparent rounded-[50px] focus:border-transparent" placeholder="Your Email *" required />
            </div>
          </div>

          <div className="mb-6">
            <input type="url" id="website" className="w-full p-3 border border-black bg-transparent rounded-[50px] focus:border-transparent" placeholder="Website" />
          </div>

          <div className="mb-6">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2 h-4 w-4 rounded" />
              <span className="text-sm text-gray-700">Save my name, email, and website in this browser for the next time I comment.</span>
            </label>
          </div>

          <button
            type="submit"
            className={`relative border mb-10 border-black rounded-full font-semibold px-3 group hover:px-0 py-2 duration-100 ease-in-out cursor-pointer uppercase w-[200px]  text-lg overflow-hidden flex items-center mt-10`}
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#f8a065] rounded-full group-hover:w-full group-hover:h-56"></span>
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent"></span>
            <div className="sliding-text-wrapper flex items-center whitespace-nowrap relative z-10">
              <GoDotFill className="text-[#f8a065]" />
              <span className="sliding-text hidden group-hover:block">POST COMMENT</span>
              <GoDotFill className="text-[#f8a065] hidden group-hover:block" />
              <span className="sliding-text hidden group-hover:block">POST COMMENT</span>
              <GoDotFill className="text-[#f8a065] hidden group-hover:block" />
              <span className="sliding-text">POST COMMENT</span>
            </div>
          </button>
        </form>
      </div>
    </>
  );
}
