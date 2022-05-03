import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch, faX, faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = ({ authenticate, setAuthenticate, username }) => {
  const menuList = [
    "여성",
    "Divide",
    "남성",
    "신생아/유아",
    "아동",
    "H&M HOME",
    "Sale",
    "지속가능성",
  ];

  const navigate = useNavigate();
  const search = (e) => {
    if (e.key === "Enter") {
      let keyword = e.target.value;
      navigate(`/?q=${keyword}`);
    }
  };
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div className="nav-fix">
      <div className="nav-container">
        <div className="nav-top">
          {authenticate ? (
            <div className="logout-check">
              <FontAwesomeIcon icon={faUser} />
              <div className="comment">{username}님 반갑습니다.</div>
              <div
                className="logout-button"
                onClick={() => {
                  setAuthenticate(false);
                }}
              >
                로그아웃
              </div>
            </div>
          ) : (
            <div className="login-check" onClick={() => navigate("/login")}>
              로그인
            </div>
          )}
        </div>
        <div className="logo">
          <FontAwesomeIcon
            className="sidebar"
            onClick={() => {
              showSidebar(true);
            }}
            icon={faBars}
          />
          <img
            onClick={() => {
              navigate("/");
            }}
            src="https://logos-world.net/wp-content/uploads/2020/04/HM-Logo-1999-present.jpg"
            alt="logo"
          />
        </div>
        <div className="gnb-large">
          <ul className="menu">
            {menuList.map((menu, i) => (
              <li key={i}>{menu}</li>
            ))}
          </ul>
          <div className="search">
            <FontAwesomeIcon icon={faSearch} />
            <input type="text" maxLength={12} onKeyUp={(e) => search(e)} />
          </div>
        </div>
        <div className={sidebar ? "gnb-small active" : "gnb-small"}>
          <ul className="menu">
            {menuList.map((menu, i) => (
              <li key={i}>{menu}</li>
            ))}
            <FontAwesomeIcon
              className="close-button"
              onClick={() => {
                setSidebar(false);
              }}
              icon={faX}
            />
          </ul>
        </div>
        <div className="search-small">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" maxLength={12} onKeyUp={(e) => search(e)} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
