import { useState } from "react";
import styles from "./Form.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getContact } from "../../../redux/contactSlice/contactSelector";
import { addContact } from "../../../redux/contactSlice/contactThunk";
import Filter from "../Filter/Filter";
const Form = () => {
  const contacts = useSelector(getContact);
  const dispatch = useDispatch();
  const [name, setName] = useState(() => localStorage.getItem("name") ?? "");
  const [number, setNumber] = useState(
    () => localStorage.getItem("number") ?? ""
  );

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      name: name,
      number: number,
    };

    dispatch(addContact(newContact));
    localStorage.removeItem("name");
    localStorage.removeItem("number");
    setName("");
    setNumber("");
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        setName(value);
        localStorage.setItem("name", value);
        break;
      case "number":
        setNumber(value);
        localStorage.setItem("number", value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleFormSubmit} className={styles.contactForm}>
        <Filter />
        <div className={styles.formList}>
          <label>
            Name:
            <input
              className={styles.inputForm}
              type="text"
              placeholder="Enter contact name"
              onChange={handleChange}
              value={name}
              name="name"
              required
            />
          </label>

          <label>
            Number:
            <input
              className={styles.inputForm}
              type="number"
              placeholder="Enter phone number"
              onChange={handleChange}
              value={number}
              name="number"
              required
            />
          </label>
        </div>

        <button type="submit" className={styles.addBtn}>
          Add Contact
        </button>
      </form>
    </div>
  );
};

export default Form;
