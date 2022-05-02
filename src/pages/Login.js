import React from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setAuthenticate, setUsername }) => {
  const navigate = useNavigate();
  const loginUser = (e) => {
    e.preventDefault();
    setAuthenticate(true);
    navigate("/");
  };

  return (
    <div className="login-container">
      <h1 onClick={() => navigate("/")}>Home</h1>
      <form onSubmit={(e) => loginUser(e)}>
        <div className="text-field">
          <input
            type="text"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <span></span>
          <label>Username</label>
        </div>
        <div className="text-field">
          <input type="password" required />
          <span></span>
          <label>Password</label>
        </div>
        <input type="submit" value="로그인" />
      </form>
      <ul>
        <li>
          <a href="#">아이디 찾기</a>
        </li>
        <li>
          <a href="#">비밀번호 찾기</a>
        </li>
        <li>
          <a href="#">회원 가입</a>
        </li>
      </ul>
    </div>
  );
};

export default Login;
