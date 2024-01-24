import React, { FC } from "react";

interface ScrollToComponentProps {
  targetRef: React.RefObject<HTMLDivElement>;
  targetRefExp: React.RefObject<HTMLDivElement>;
  targetRefProject: React.RefObject<HTMLDivElement>;
  targetRefContact: React.RefObject<HTMLDivElement>;
}
const Footer: FC<ScrollToComponentProps> = ({
  targetRef,
  targetRefExp,
  targetRefProject,
  targetRefContact,
}) => {
  const handleClick = () => {
    targetRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const handleClickExp = () => {
    targetRefExp.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleClickProject = () => {
    targetRefProject.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const handleClickContact = () => {
    targetRefContact.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <footer>
      <nav>
        <div className="nav-links-container">
          <ul className="nav-links">
            <li onClick={handleClick}>
              <div className="nav-items">About</div>
            </li>
            <li onClick={handleClickExp}>
              <div className="nav-items">Experience</div>
            </li>
            <li onClick={handleClickProject}>
              <div className="nav-items">Projects</div>
            </li>
            <li onClick={handleClickContact}>
              <div className="nav-items">Contact</div>
            </li>
          </ul>
        </div>
      </nav>
      <p>Copyright © 2024 Alok Raj. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
