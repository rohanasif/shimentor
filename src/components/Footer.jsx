import { Link } from "react-router-dom";
import footerLogo from "../assets/footer-logo.png";

const Footer = () => {
  return (
    <div className="my-20 px-20 flex flex-col">
      <div className="flex lg:flex-row flex-col gap-40">
        <div className="flex flex-col items-start lg:w-1/3">
          <img src={footerLogo} alt="footer logo" />
          <p className="text-lg text-[#455065]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices
            facilisi ac leo interdum neque consectetur hendrerit. Enim viverra
            nisl sodales rhoncus felis. Cursus vel nunc imperdiet ac eget at.
            Habitant pellentesque molestie aliquam in urna, mauris vitae posuere
            nec.
          </p>
        </div>
        <div className="flex gap-10 flex-col lg:flex-row lg:w-full">
          <ul className="flex flex-col">
            <Link className="text-[#3A3A3A] font-bold text-lg">Company</Link>
            <br />
            <Link className="text-[#455065] font-medium text-lg">About Us</Link>
            <Link className="text-[#455065] font-medium text-lg">Blog</Link>
            <Link className="text-[#455065] font-medium text-lg">
              Contact Us
            </Link>
          </ul>
          <ul className="flex flex-col">
            <Link className="text-[#3A3A3A] font-bold text-lg">Courses</Link>
            <br />
            <Link className="text-[#455065] font-medium text-lg">Biology</Link>
            <Link className="text-[#455065] font-medium text-lg">Physics</Link>
            <Link className="text-[#455065] font-medium text-lg">
              Mathematics
            </Link>
            <Link className="text-[#455065] font-medium text-lg">
              Statistics
            </Link>
            <Link className="text-[#455065] font-medium text-lg">
              Chemistry
            </Link>
          </ul>
          <ul className="flex flex-col">
            <Link className="text-[#3A3A3A] font-bold text-lg">Locations</Link>
            <br />
            <Link className="text-[#455065] font-medium text-lg">Canada</Link>
            <Link className="text-[#455065] font-medium text-lg">USA</Link>
            <Link className="text-[#455065] font-medium text-lg">Europe</Link>
          </ul>
          <ul className="flex flex-col">
            <Link className="text-[#3A3A3A] font-bold text-lg">Policy</Link>
            <br />
            <Link className="text-[#455065] font-medium text-lg">
              Privacy Policy
            </Link>
            <Link className="text-[#455065] font-medium text-lg">
              Cookie Policy
            </Link>
            <Link className="text-[#455065] font-medium text-lg">
              User Agreement
            </Link>
          </ul>
          <ul className="flex flex-col">
            <Link className="text-[#3A3A3A] font-bold text-lg">Address</Link>
            <br />
            <Link className="text-[#455065] font-medium text-lg">
              Suite 1307, 3975 Grand Park Drive, Mississauga, Ontario L5B0K4
            </Link>
            <Link className="text-[#455065] font-medium text-lg">
              6D, Block H, Gulberg II, Lahore
            </Link>
          </ul>
        </div>
      </div>
      <br />
      <div className="text-[#455065] font-medium">
        All Rights Reserved © renesistech.com
      </div>
    </div>
  );
};

export default Footer;
