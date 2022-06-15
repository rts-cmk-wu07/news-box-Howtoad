/** @jsxImportSource @emotion/react */
import { Link, useNavigate } from "react-router-dom";
import { css } from "@emotion/react";
import { IoIosArrowBack } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { BiArchive } from "react-icons/bi";

const Navbar = () => {
  const styles = {
    navbar: css`
      height: 50px;
      font-size: 18px;
      display: grid;
      max-width: 376px;
      width: 376px;
      border-bottom: 1px solid grey;
      font-weight: bold;
      grid-template-columns: 1fr 1fr 1fr;
      & .backarrow {
        font-size: 24px;
        font-weight: lighter;
        margin-left: 22px;
      }
      & .settings {
        font-size: 20px;
        margin-right: 22px;
        justify-self: end;
      }
      & a {
        justify-self: center;
      }
    `,
  };
  let urlLocation = useLocation().pathname;

  return (
    <nav css={styles.navbar}>
      {(useLocation().pathname === "/" && (
        <Link to="/archive">
          <BiArchive />
        </Link>
      )) || (
        <Link to="/">
          <IoIosArrowBack className="backarrow" />
        </Link>
      )}
      <h1>
        {(urlLocation === "/" && "Newsbox") ||
          (urlLocation === "/archive" && "Archive") ||
          (urlLocation === "/settings" && "Settings")}
      </h1>
      {(useLocation().pathname !== "/settings" && (
        <Link to="/settings">
          <IoMdSettings className="settings" />{" "}
        </Link>
      )) || <div></div>}
    </nav>
  );
};

export default Navbar;
