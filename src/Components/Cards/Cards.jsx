import Card from "../Card/Card";
import styles from "./Cards.module.css";

const Cards = ({users, searchValue, setIsOpen, isOpen, handleOpen}) => {
    return (
        <div className={styles.cards}>
       <Card users={users} searchValue={searchValue} setIsOpen={setIsOpen} isOpen={isOpen} handleOpen={handleOpen}/>
    </div>
    
    )
   
}

export default Cards;