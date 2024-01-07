import React, { FC } from "react";
interface ScrollToComponentProps {
  targetRef: React.RefObject<HTMLDivElement>;
  targetRefExp: React.RefObject<HTMLDivElement>;
}
const Nav: FC<ScrollToComponentProps> = ({ targetRef, targetRefExp }) => {
  const handleClick = () => {
    targetRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const handleClickExp = () => {
    targetRefExp.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <div>
      <nav id="desktop-nav">
        <div className="logo">Alok Raj</div>
        <div>
          <ul className="nav-links">
            <li>
              <div className="nav-items" onClick={handleClick}>
                About
              </div>
            </li>
            <li>
              <div className="nav-items" onClick={handleClickExp}>
                Experience
              </div>
            </li>
            <li>
              <div className="nav-items">Projects</div>
            </li>
            <li>
              <div className="nav-items">Contact</div>
            </li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div className="logo">John Doe</div>
        <div className="hamburger-menu">
          <div className="hamburger-icon" onClick={() => {}}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="menu-links">
            <li>
              <div onClick={() => {}} className="nav-items">
                About
              </div>
            </li>
            <li>
              <div onClick={() => {}} className="nav-items">
                Experience
              </div>
            </li>
            <li>
              <div onClick={() => {}} className="nav-items">
                Projects
              </div>
            </li>
            <li>
              <div onClick={() => {}} className="nav-items">
                Contact
              </div>
            </li>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
