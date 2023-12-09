import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top && "bg-white backdrop-blur-sm shadow-lg"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <Link to="/" className="block" aria-label="Cruip">
              <img src="data:image/png;base64,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" />
            </Link>
          </div>

          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
                <Link
                  to="/signin"
                  className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Sign in
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3"
                >
                  <span>Sign up</span>
                  <svg
                    className="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                      fillRule="nonzero"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
