import Navbar from "../components/Navbar";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import hand from "../assets/hand.png";
import students from "../assets/section2img.png";
import logo2 from "../assets/logo_dark.png";
import Tutor from "../components/Tutor";
import tutor1 from "../assets/tutor1.png";
import tutor2 from "../assets/tutor2.png";
import tutor3 from "../assets/tutor3.png";
import tutor4 from "../assets/tutor4.png";
import tutor5 from "../assets/tutor5.png";
import ScrollContainer from "react-indiana-drag-scroll";
import Feature from "../components/Feature";
import badge from "../assets/badge.png";
import check from "../assets/check.png";
import clock from "../assets/clock.png";
import target from "../assets/target.png";
import logo from "../assets/logo.png";
import Student from "../components/Student";
import student1 from "../assets/student1.png";
import Footer from "../components/Footer";

const Home = () => {
  const [location, setLocation] = useState("location");
  const [input, setInput] = useState("");

  function handleLocationChange(e) {
    setLocation(e.target.value);
  }

  function handleInputChange(e) {
    setInput(e.target.value);
  }

  return (
    <>
      <div className="bg-blue">
        <Navbar
          bgColor="#228E9E"
          linkColor="white"
          logoStyle={logo}
          hamburgerColor="white"
        />
        <div className="flex flex-col items-center mt-10">
          <h1 className="text-[#FEECC0] text-3xl font-black sm:text-5xl md:text-7xl lg:text-9xl">
            Shimentor
          </h1>
          <span className="text-white text-center text-sm sm:text-base md:text-2xl lg:text-3xl">
            By the student of today,
            <br />
            For the students of tomorrow
          </span>
          <br />
          <p className="text-xs sm:text-sm md:text-lg lg:text-xl font-medium text-white ">
            Tutoring and mentorship for&nbsp;
            <span className="text-[#092232] bg-[#FEECC0]">
              IB / A-Level students
            </span>
          </p>
          <br />
          <div className="bg-[#228E9E] p-1 rounded-xl">
            <form
              className="bg-transparent flex items-center bg-[#047585] rounded-xl p-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="outer flex flex-col sm:flex-row">
                <div className="inner bg-[#047585] flex items-center pl-4 pt-4 pb-4">
                  <FontAwesomeIcon
                    className="text-white text-2xl"
                    icon={faSearch}
                  />
                  <input
                    className="search bg-[#047585] text-xl text-white"
                    value={input}
                    type="text"
                    placeholder="Course title or keyword"
                    onChange={handleInputChange}
                  />
                  <div className="w-[1px] h-full bg-[#2B8A98]"></div>
                </div>
                <select
                  name="location"
                  id="location"
                  value={location}
                  onChange={handleLocationChange}
                  className="p-4 text-xl text-white"
                >
                  <option value="location" disabled>
                    Location
                  </option>
                  <option value="Lahore">Lahore</option>
                  <option value="Islamabad">Islamabad</option>
                  <option value="Karachi">Karachi</option>
                  <option value="Quetta">Quetta</option>
                  <option value="Peshawar">Peshawar</option>
                </select>
                <button
                  type="submit"
                  className="submit-btn py-2 px-5 bg-[#FEECC0]"
                >
                  <FontAwesomeIcon icon={faArrowRight} className="text-2xl" />
                </button>
              </div>
            </form>
          </div>
          <br />
          <br />
          <img src={hand} alt="hand" />
        </div>
      </div>
      <div className="mt-20 px-20 flex items-center justify-between flex-col sm:flex-row">
        <div>
          <h2 className="text-xl text-[#092232] font-bold sm:text-2xl md:text-4xl lg:text-6xl">
            High school is hard
            <br />
            Getting into a good university is even harder
          </h2>
          <br />
          <span className="flex justify-start items-center text-xsn sm:text-sm md:text-lg lg:text-2xl text-[#092232]">
            Academic Success just got a bit easier with&nbsp;
            <img
              src={logo2}
              className="min-h-[10px] max-h-[32px] flex"
              alt="dark logo"
            />
          </span>
          <br />
          <button className="mx-auto bg-[#027080] text-white px-12 py-4 rounded-xl text-xl font-medium">
            Learn More
          </button>
        </div>
        <img src={students} className="max-w-full min-w-0" alt="students" />
      </div>
      <div className="my-20 pl-20 flex items-center flex-col">
        <h2 className="text-[#092232] text-[40px] font-bold mb-[100px]">
          Top Tutors
        </h2>
        <ScrollContainer horizontal={true} className="w-full">
          <div className="flex w-full pr-20 sm:w-[200vw] gap-8 flex-col sm:flex-row">
            <Tutor
              pic={tutor1}
              name="Nolan Rosser"
              degree="Masters in Physics"
              subjects={["Mathematics", "Physics"]}
              rating={4}
              rate="28"
            />
            <Tutor
              pic={tutor2}
              name="Ashlynn Saris"
              degree="Masters in Biology"
              subjects={["Biology", "Zoology"]}
              rating={4}
              rate="17"
            />
            <Tutor
              pic={tutor3}
              name="Angel Aminoff"
              degree="PHD in Mathematics"
              subjects={["Mathematics", "Economics", "Statistics"]}
              rating={4}
              rate="19"
            />
            <Tutor
              pic={tutor4}
              name="Adison Dorwart"
              degree="English Expert"
              subjects={["English Literature"]}
              rating={3}
              rate="25"
            />
            <Tutor
              pic={tutor5}
              name="Nolan Rosser"
              degree="Masters in Physics"
              subjects={["Mathematics", "Physics"]}
              rating={5}
              rate="32"
            />
          </div>
        </ScrollContainer>
      </div>
      <div className="flex flex-col items-center px-20 my-20">
        <h2 className="sm:text-[40px] sm:font-bold text-[5vw] font-bold mb-20 text-[#092232]">
          Make the world your comfort zone
        </h2>
        <div className="flex flex-col sm:flex-row gap-7 flex-wrap">
          <Feature icon={badge} title="Expert Tutors" />
          <Feature icon={check} title="Verified Tutors" />
          <Feature icon={clock} title="Learn Anytime" />
          <Feature icon={target} title="Affordable Prices" />
        </div>
      </div>
      <div className="flex flex-col items-center px-20 my-20">
        <h2 className="sm:text-[40px] sm:font-bold text-[5vw] font-bold mb-20 text-[#092232]">
          Trusted by thousands of students & parents
        </h2>
        <ScrollContainer horizontal={true} className="w-full">
          <div className="flex flex-col sm:flex-row w-full sm:w-[200vw] gap-4">
            <Student pic={student1} name="Martin Stanton" rating={4} />
            <Student pic={student1} name="Martin Stanton" rating={4} />
            <Student pic={student1} name="Martin Stanton" rating={4} />
            <Student pic={student1} name="Martin Stanton" rating={4} />
            <Student pic={student1} name="Martin Stanton" rating={4} />
          </div>
        </ScrollContainer>
      </div>
      <div className="bg-pre-footer w-full h-[281px] cursor-pointer"></div>
      <Footer />
    </>
  );
};

export default Home;
