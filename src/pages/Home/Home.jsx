import React from "react";
import styles from "./Home.module.css";
import { useNavigate, Link } from "react-router-dom";
import Card from "../../component/shared/Card/Card";
import Button from "../../component/shared/Button/Button";

const Home = () => {
  const signInLinkStyle = {
    color: "#0077ff",
    fontWeight: "bold",
    textDecoration: "none",
    marginLeft: "10px",
  };

  const navigate = useNavigate();
  function startRegister() {
    navigate("/register");
  }
  
  return (
    <div className={styles.cardWrapper}>
      <Card title="Welcome to Codershouse!" icon="logo">
        <p className={styles.text}>
          We’re working hard to get Codershouse ready for everyone! While we
          wrap up the finishing youches, we’re adding people gradually to make
          sure nothing breaks
        </p>

        <div>
          <Button
            onClick={startRegister}
            icon="arrow-forward"
            text="Get your username"
          />
        </div>

        <div className={styles.signinWrapper}>
          <span>Have an invite text?</span>
          <Link to="/login" style={signInLinkStyle}>
            Sign in
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Home;
