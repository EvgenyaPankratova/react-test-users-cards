import Cards from "./Components/Cards/Cards";
import Modal from "./Components/Modal/Modal";
import Search from "./Components/Search/Search";
import { useEffect, useState } from "react";

function App() {
  const [searchValue, setsearchValue] = useState(""); //для поиска
  const [isOpen, setIsOpen] = useState(false); //для открытия модального окна
  const [clickedUser, setClickedUser] = useState([]); //для отображения инф-ции в модальном окне
  const [users, setUsers] = useState([
    {
      name: "Евгения Савченко",
      phone: "+7 (918) 078-17-05",
      email: "yysavchenk@mail.ru",
    },
  ]); //храним пользователей

  const onChangeSearchValue = (event) => {
    setsearchValue(event.target.value);
  };

  const handleOpen = (phone) => {
    setIsOpen(true);
    setClickedUser(users.filter((elem) => elem.phone === phone)[0]);
  };

  useEffect(() => {
    fetch(`http://127.0.0.1:3000?term=${searchValue}`)
      .then((res) => res.json())
      .then((json) => {
        setUsers(json);
      })
      .catch((err) => {
        console.warn(err);
        alert("кажется, что-то пошло не так");
      });
  }, [searchValue]);

  return (
    <div className="App">
      <Search
        searchValue={searchValue}
        onChangeSearchValue={onChangeSearchValue}
      />
      {isOpen && <Modal setIsOpen={setIsOpen} clickedUser={clickedUser} />}
      <Cards
        users={users}
        searchValue={searchValue}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        handleOpen={handleOpen}
      />
    </div>
  );
}

export default App;
