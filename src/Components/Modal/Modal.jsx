import styles from "./Modal.module.css";
import close from '../../img/icon.png';

const Modal = ({ setIsOpen, clickedUser }) => {
  return (
    <div className={styles.modal_container}>
      <div className={styles.modal}>
        <div className={styles.modal_title_block}>
          <div className={styles.modal_title}>{clickedUser.name}</div>
          <div>
            <img
              src={close}
              alt="close"
              onClick={() => setIsOpen(false)}
            />
          </div>
        </div>

        <div className={styles.modal_main}>
          <div className={styles.modal_subtitle}>Телефон:</div>{" "}
          <div className={styles.modal_text}>{clickedUser.phone}</div>
          <div className={styles.modal_subtitle}>Почта:</div>{" "}
          <div className={styles.modal_text}>{clickedUser.email}</div>
          <div className={styles.modal_subtitle}>Дата приема:</div>{" "}
          <div className={styles.modal_text}>{clickedUser.hire_date}</div>
          <div className={styles.modal_subtitle}>Должность:</div>{" "}
          <div className={styles.modal_text}>{clickedUser.position_name}</div>
          <div className={styles.modal_subtitle}>Подразделение:</div>{" "}
          <div className={styles.modal_text}>{clickedUser.department}</div>
        </div>

        <div className={styles.modal_info_block}>
          <div className={styles.modal_subtitle}>
            {" "}
            Дополнительная информация:
          </div>{" "}
          <p className={styles.modal_text}>
            Разработчики используют текст в качестве заполнителя макта страницы.
            Разработчики используют текст в качестве заполнителя макта страницы.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
