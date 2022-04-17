import styles from "./Button.module.css";
const Button = ({ text, icon, onClick }) => {
  return (
    <>
      <button onClick={onClick} className={styles.button}>
        <span>{text}</span>
        <img src={`/images/${icon}.png`} alt="arrow" className={styles.arrow} />
      </button>
    </>
  );
};

export default Button;
