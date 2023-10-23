import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidstar } from "@fortawesome/free-solid-svg-icons";
import { faStar as star } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

const Student = ({ pic, name, rating }) => {
  const [score] = useState(rating);

  const renderStars = () => {
    const totalStars = 5;
    const stars = [];
    for (let i = 0; i < score; i++) {
      stars.push(
        <FontAwesomeIcon key={i} icon={solidstar} className="text-[#E4C003]" />
      );
    }
    for (let i = stars.length; i < totalStars; i++) {
      stars.push(
        <FontAwesomeIcon key={i} icon={star} className="text-[#E4C003]" />
      );
    }
    return stars;
  };

  return (
    <div className="flex shadow-xl flex-col p-4 rounded-2xl">
      <div className="flex items-center">
        <img src={pic} alt="student picture" />
        <div className="ml-3">
          <h2 className="text-[#092232] sm:text-3xl sm:font-semibold font-semibold">
            {name}
          </h2>
          <div className="flex items-center gap-2">
            <div>{renderStars()}</div>
            <p className="text-[#027080] text-sm font-medium">{`(${score}.0)`}</p>
          </div>
        </div>
      </div>
      <br />
      <p className="text-[#515A60] text-lg font-medium mb-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
        assumenda, obcaecati repellat aspernatur esse sunt saepe ipsam
        praesentium in vitae a aut doloremque repudiandae beatae?
      </p>
    </div>
  );
};

export default Student;
