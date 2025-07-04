import React, { useState, useContext } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import { BASE_URL ,token } from '../../config';
import { HashLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthContext';

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  const { token,role,user } = useContext(AuthContext);

  console.log(role)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!rating || !reviewText) {
      setLoading(false);
      return toast.error('Rating & review fields are required');
    }

    try {
      const res = await fetch(`${BASE_URL}/doctors/${id}/reviews`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ rating, reviewText })
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message);
      }

      setLoading(false);
      toast.success(result.message);
    } catch (err) {
      setLoading(false);
      toast.error(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0">
          How would you rate the overall Experience
        </h3>
        <div>
          {[...Array(5).keys()].map((_, index) => {
            index += 1;

            return (
              <button
                key={index}
                type="button"
                onClick={() => setRating(index)}
                className={`${
                  index <= (hover || rating) ? 'text-yellowColor' : 'text-gray-400'
                } bg-transparent border-none outline-none text-[22px] cursor-pointer`}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
                onDoubleClick={() => {
                  setHover(0);
                  setRating(0);
                }}
              >
                <span>
                  <AiFillStar />
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-[30px]">
        <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0">
          Share your feedback and suggestions
        </h3>
        <textarea
          name="textarea"
          className="border border-solid border-[#0066ff34] focus:outline-primaryColor w-full px-4 py-3 rounded-md"
          rows="5"
          placeholder="Write your feedback"
          onChange={(e) => setReviewText(e.target.value)}
        ></textarea>
      </div>
      <button type="submit" className="btn">
        {loading ? <HashLoader size={25} color="#fff" /> : 'Submit Feedback'}
      </button>
    </form>
  );
};

export default FeedbackForm;
