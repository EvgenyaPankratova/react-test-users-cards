import styles from "./Card.module.css";
import tel from '../../img/Frame 4806.png';
import mail from '../../img/Frame 4807.png';

const Card = ({ users, searchValue, setIsOpen, isOpen, handleOpen }) => {
  return (
    <>
      {users
        .filter((obj) => {
          let full = (obj.name + obj.phone + obj.email).toLowerCase();
          return full.includes(searchValue.toLowerCase());
        })

        .map((elem) => {
          return (
            <div
              onClick={() => handleOpen(elem.phone)}
              className={styles.card}
              key={elem.email}
            >
              <div className={styles.card_title}>{elem.name}</div>
              <div className={styles.card_tel}>
                <img src={tel} alt="tel" />
                <div>{elem.phone}</div>
              </div>
              <div className={styles.card_mail}>
                <img src={mail} alt="mail" />
                <div>{elem.email}</div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Card;
