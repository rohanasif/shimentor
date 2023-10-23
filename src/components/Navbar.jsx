import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({
  linkColor,
  bgColor,
  logoStyle,
  activeLink,
  hamburgerColor,
}) => {
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isLaptop, setIsLaptop] = useState(window.innerWidth > 992);
  const [isNavlistVisible, setNavlistVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const newWindowWidth = window.innerWidth;
      setWindowWidth(newWindowWidth);
      setIsLaptop(newWindowWidth > 992);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleNav = () => {
    setNavlistVisible(!isNavlistVisible);
  };

  return (
    <div className="flex flex-col">
      <nav className="flex items-center justify-between px-20">
        <Link to="/">
          <img src={logoStyle} alt="logo" />
        </Link>
        {!isLaptop && (
          <FontAwesomeIcon
            icon={faBars}
            className={`text-xl text-${hamburgerColor} hover:cursor-pointer`}
            onClick={toggleNav}
          />
        )}
        <ul className={`flex items-center ${isLaptop ? "" : "hidden"}`}>
          <li className={`p-4 text-${linkColor} text-xl font-medium`}>
            <Link to="/about" className="text-xl">
              About Us
            </Link>
          </li>
          <li className={`p-4 text-${linkColor} text-xl font-medium`}>
            <Link to="/tutors" className="text-xl">
              Tutors
            </Link>
          </li>
          <li className={`p-4 text-${linkColor} text-xl font-medium`}>
            <Link to="/conferences" className="text-xl">
              Conferences
            </Link>
          </li>
          <li className={`p-4 text-${linkColor} text-xl font-medium`}>
            <Link to="/institutions" className="text-xl">
              Institutions
            </Link>
          </li>
          <li className="p-4 text-[white]">
            <button
              className="bg-[#092232] rounded-xl text-lg font-semibold h-12 w-36"
              onClick={() => navigate("/register")}
            >
              Sign Up
            </button>
          </li>
        </ul>
      </nav>
      {!isLaptop && (
        <div
          className={`bg-[${bgColor}]  justify-center items-center ${
            isNavlistVisible ? "flex" : "hidden"
          }`}
        >
          <ul className="flex flex-col  justify-center items-center">
            <li className={`p-4 text-${linkColor}`}>
              <Link to="/about" className="text-xl">
                About Us
              </Link>
            </li>
            <li className={`p-4 text-${linkColor}`}>
              <Link to="/tutors" className="text-xl">
                Tutors
              </Link>
            </li>
            <li className={`p-4 text-${linkColor}`}>
              <Link to="/conferences" className="text-xl">
                Conferences
              </Link>
            </li>
            <li className={`p-4 text-${linkColor}`}>
              <Link to="/institutions" className="text-xl">
                Institutions
              </Link>
            </li>
            <li className={`p-4 text-${linkColor}`}>
              <button
                className="bg-[#092232] rounded-xl text-lg h-12 w-36"
                onClick={() => navigate("/register")}
              >
                Sign Up
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
