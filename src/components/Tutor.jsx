import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidstar } from "@fortawesome/free-solid-svg-icons";
import { faStar as star } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

const Tutor = ({ pic, name, degree, subjects, rating, rate }) => {
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
    <div className="border-2 border-[#E7E7E7] rounded-2xl p-4">
      <div className="flex items-center sm:flex-row flex-col">
        <img className="max-w-full" src={pic} alt="tutor picture" />
        <div className="ml-3">
          <h2 className="text-[#092232] sm:text-3xl sm:font-semibold font-semibold">
            {name}
          </h2>
          <p className="text-[#8095A3] sm:text-base text-xs font-medium">
            {degree}
          </p>
        </div>
      </div>
      <div className="my-2 flex gap-2 flex-wrap">
        {subjects.map((subject, index) => {
          return (
            <button
              className="px-4 py-1 text-white bg-[#027080] rounded"
              key={index}
            >
              {subject}
            </button>
          );
        })}
      </div>
      <div className="flex items-center gap-2">
        <div>{renderStars()}</div>
        <p className="text-[#027080] text-sm font-medium">{`(${score}.0)`}</p>
      </div>
      <p className="text-[#027080] text-2xl font-bold">{`$${rate}/hr`}</p>
      <p className="text-[#515A60] text-lg font-medium mb-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
        assumenda, obcaecati repellat aspernatur esse sunt saepe ipsam
        praesentium in vitae a aut doloremque repudiandae beatae?
      </p>
      <div className="flex gap-2 flex-wrap justify-center">
        <button className="bg-[#027080] text-lg rounded-lg w-full sm:w-auto sm:px-14 text-white px-4 py-4">
          Book Trial
        </button>
        <button className="border-2 border-[#027080] text-lg w-full sm:w-auto sm:px-14 rounded-lg text-[#027080] px-4 py-4">
          Message
        </button>
      </div>
    </div>
  );
};

export default Tutor;
