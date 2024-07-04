import { useState } from "react";
import { FaStar } from "react-icons/fa";
export default function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }
  function handleMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex);
  }
  function handleMouseLeave() {
    setHover(rating);
  }
  return (
    <div className="flex items-center justify-center star-rating">
      {[...Array(noOfStars)].map((_, index) => (
        <FaStar
          key={index + 1}
          className={
            index + 1 <= (hover || rating) ? "text-yellow-500" : "text-gray-700"
          }
          onClick={() => handleClick(index + 1)}
          onMouseMove={() => handleMouseEnter(index + 1)}
          onMouseLeave={() => handleMouseLeave()}
          size={40}
        />
      ))}
    </div>
  );
}
