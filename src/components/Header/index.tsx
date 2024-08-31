import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CiLogin, CiSearch } from "react-icons/ci";
import { useAuth } from "../../hooks/useAuth";
import { auth } from "../../firebaseConfig";

const Header: React.FC = () => {
  const { currentUser, loading } = useAuth();
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleLogoutClick = () => {
    auth.signOut();
  };

  if (loading) {
    return (
      <header className="bg-white">
        <div
          className="
          flex
          justify-between
          items-center
          font-work-sans
        "
        >
          <div className="flex items-center ml-8">
            <img
              src="https://mybucketomyproject.s3.us-east-2.amazonaws.com/logo.png"
              alt="Logo"
              className="h-20"
            />
          </div>

          <div
            className="
            flex-1
            ml-14
            text-center
          "
          >
            <p>Loading...</p>
          </div>

          <div className="flex items-center space-x-4 mr-14">
            <button className="transform transition-transform duration-300 ease-in-out hover:-translate-y-1">
              <CiSearch size={20} />
            </button>
          </div>
        </div>
      </header>
    );
  }
  return(
    <header className="bg-white">
      <div
        className="
        flex
        justify-between
        items-center
        font-work-sans
      "
      >
        <div
          className="
          flex
          items-center
          ml-8
        "
        >
          <Link to={"/"}>
            <img
              src="https://mybucketomyproject.s3.us-east-2.amazonaws.com/logo.png"
              alt="Logo"
              className="
              h-20
            "
            />
          </Link>
        </div>

        <nav
          className="
          flex-1
          ml-14
        "
        >
          <ul
            className="
            flex
            space-x-8
            text-gray-700
            font-medium
          "
          >
            <li>
              <Link
                to="/"
                className="
                text-red-500
                hover:text-red-700
              "
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/about"}
                className="
                hover:text-red-500
              "
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to={"/tours"}
                className="
                hover:text-red-500
                "
              >
                Tours
              </Link>
            </li>
            <li>
              <Link
                to={"/destination"}
                className="
                hover:text-red-500
              "
              >
                Destination
              </Link>
            </li>
            <li>
              <Link
                to={"/blog"}
                className="
                hover:text-red-500
              "
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to={"/pages"}
                className="
                hover:text-red-500
              "
              >
                Pages
              </Link>
            </li>
            <li>
              <Link
                to={"/contact"}
                className="
                hover:text-red-500
              "
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div
          className="
          flex
          items-center
          space-x-4
          mr-14
        "
        >
          <button
            className="
            transform
            transition-transform
            duration-300
            ease-in-out
            hover:-translate-y-1
          "
          >
            <CiSearch size={20} />
          </button>
          {!currentUser ? (
            <button
              onClick={handleLoginClick}
              className="
              grid
              gap-2
              grid-flow-col
              transform
              transition-transform
              duration-300
              ease-in-out
              hover:-translate-y-1
            "
            >
              <CiLogin size={20} />
              Login
            </button>
          ) : (
            <button onClick={handleLogoutClick}>Logout</button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
