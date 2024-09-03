import React, {useState, ChangeEvent, MouseEvent} from "react";
import { CiFacebook, CiLinkedin, CiTwitter } from "react-icons/ci";
import { IoPaperPlaneOutline } from "react-icons/io5";

const Footer: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");

  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setError("");
    } else {
      setError("Please enter a valid email");
    }
  }
  return (
    <footer className="
    bg-[#111111] 
    py-3
    "
    >
      <div className="
      container
      mx-auto
      px-10
      "
      >
        <div className="
        grid 
        grid-cols-3 
        mb-8
        text-white
        font-inter
        "
        >
          <div className="
          "
          >
            <img
              src="https://mybucketomyproject.s3.us-east-2.amazonaws.com/Logo_RmBg.png"
              className="h-20"
              alt="logo"
            />
            <p
              className="
            font-kaushan
            font-sm
            "
            >
              Need any help?
            </p>
            <div
              className="
              flex
              mt-1
              font-bold
              mb-5
              "
            >
              <p
                className="
                mr-2
                "
              >
                Call Us:
              </p>
              <p className="
              text-Salmon-Red
              "
              >
                (888) 1234 5678</p>
            </div>
            <p className="
            mb-1
            "
            >
              Love Street, Muscat, Oman
              </p>
            <p>exaample@trisog.com</p>
            <div className="
            flex 
            space-x-3
            mt-5
            "
            >
              <CiFacebook className="text-white text-xl" />
              <CiTwitter className="text-white text-xl" />
              <CiLinkedin className="text-white text-xl" />
            </div>
          </div>

          <div className="
          grid 
          grid-cols-3
          mt-10
          "
          >
            <div className="
            space-y-4
            "
            >
              <p className="
              font-kaushan
              mb-1
              "
              >
                Company
                </p>
              <p>About Us</p>
              <p>Contact Us</p>
              <p>Travel Guides</p>
              <p>Data Policy</p>
            </div>
            <div className="
            space-y-4
            "
            >
            <p className="
              font-kaushan
              mb-1
              "
              >
                Top Destination
                </p>
              <p>Las Vegas</p>
              <p>New York City</p>
              <p>San Francisco</p>
              <p>Hawaii</p>
            </div>
            <div className="
            space-y-4
            mt-8
            "
            >
              <p>Tokyo</p>
              <p>Sydney</p>
              <p>Melbourne</p>
              <p>Dubai</p>
            </div>
          </div>

          <div className="
          mt-10
          flex
          flex-col
          
          "
          >
            <p className="
            font-kaushan
            mb-3.5
            "
            >
              Sign up Newsletter
              </p>
              <div className="
              text-Gray-2
              "
              >
              <IoPaperPlaneOutline
              className="
              absolute
              mt-3
              ml-2
              "
              />
                <input
              type="text"
              placeholder="Enter email..."
              className="
              text-sm
              p-2.5
              pl-8 
              rounded-lg
              bg-white
              "
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            />
              </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
            onClick={handleSubmit}
            className="
            bg-Salmon-Red
            py-2
            px-4
            rounded
            w-24
            h-9
            mt-2
            mb-14
            text-sm
            text-center
            "
            >
              Submit
            </button>
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Trisog All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
