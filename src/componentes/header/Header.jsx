import { NavLink } from "react-router-dom";

const Header = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/donation">Donation</NavLink>
      </li>
      <li>
        <NavLink to="/statistics">Statistics</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar mt-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 w-52">
            {links}
          </ul>
        </div>
        <div>
          <img
            className="w-40 h-full"
            src="https://i.ibb.co/0XmhkqR/Logo.png"
            alt="image"
          />
        </div>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
    </div>
  );
};

export default Header;
