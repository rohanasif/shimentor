import Navbar from "../components/Navbar";
import darkLogo from "../assets/logo_dark.png";
import { useNavigate } from "react-router-dom";
import founder from "../assets/founder.png";
import bannerLogo from "../assets/banner-logo.png";
const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar
        bgColor="#228E9E"
        linkColor="[#092232]"
        logoStyle={darkLogo}
        hamburgerColor="[#092232]"
      />
      <div className="px-20 my-20 flex items-center justify-between">
        <div className="w-2/3">
          <h1 className="text-[#092232] text-[100px] font-extrabold">
            How it started
          </h1>
          <p className="text-[#455065] text-2xl font-semibold">
            Senior year of highschool was tough.
            <br />
            <br />
            Attempting to juggle school, university applications, and my social
            life led to a problem - so much to do in such little time. I have
            been seeing my tutoring students going through the same struggles as
            I did over the past few years.
            <br />
            ...and this is why I decided to start Shimentor.
            <br />
          </p>
          <br />
          <button
            className="bg-[#092232] rounded-lg text-xl font-medium text-white px-20 py-4"
            onClick={() => navigate("/register")}
          >
            Join Today
          </button>
        </div>
        <div className="w-1/3">
          <img src={founder} alt="founder" />
        </div>
      </div>
      <div className="flex flex-col items-center px-20 pt-20 bg-banner h-[120vh]">
        <h2 className="text-6xl font-bold text-white">Our Mission</h2>
        <br />
        <p className="text-2xl text-white font-medium text-center w-[80%]">
          We pledge to ensure every high school student can get the academic
          support and pesonal guidance they require during their journey to
          higher education. Shimentor does not just stop at enhancing a
          students&apos; academic record - we aim to equip every one of our
          students with the tools they need to shoot for their dream university.
          At Shimentor we provide one-to-one mentorship to help you accomplish
          these goals.
        </p>
      </div>
      <div className="flex justify-center items-center -mt-[300px]">
        <div className="logobanner flex justify-center items-center bg-white w-[65%] h-[60vh] rounded-2xl">
          <img src={bannerLogo} alt="banner logo" />
        </div>
      </div>
    </>
  );
};

export default About;
