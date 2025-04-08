import { useEffect, useState } from "react";
import styles from "./ListItems.module.css";
import Filter from "../Filter/Filter";
import Modal from "../Modal/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPenToSquare,
  faCheck,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { getContact } from "../../../redux/contactSlice/contactSelector";
import { getFilter } from "../../../redux/filterSlice/filterSelector";
import {
  deleteContact,
  editContact,
  fetchAllContacts,
} from "../../../redux/contactSlice/contactThunk";

const ListItems = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContact);
  const search = useSelector(getFilter);
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editNumber, setEditNumber] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalId, setModalId] = useState(null); // Track which item’s modal is open

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, []);

  const openModal = (id) => {
    setModalId(id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalId(null);
  };

  const handleEditClick = (id, name, number) => {
    setEditId(id);
    setEditName(name);
    setEditNumber(number);
  };

  const handleSaveEdit = () => {
    const editData = { name: editName, number: editNumber, id: editId };
    dispatch(editContact(editData));
    handleCancelEdit();
  };

  const handleCancelEdit = () => {
    setEditId(null);
    setEditName("");
    setEditNumber("");
  };

  const handleDelete = () => {
    dispatch(deleteContact(modalId));
    closeModal();
  };

  const filteredContacts = contacts?.filter(({ name }) =>
    name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <ul className={styles.list}>
        {filteredContacts.map(({ id, name, number }) => (
          <li key={id} className={styles.listItems}>
            {editId === id ? (
              <>
                <div className={styles.editInputs}>
                  <input
                    type="text"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    placeholder="Edit name"
                  />

                  <input
                    type="text"
                    value={editNumber}
                    onChange={(e) => setEditNumber(e.target.value)}
                    placeholder="Edit number"
                  />
                </div>
                <div className={styles.editBtns}>
                  <button className={styles.btn} onClick={handleSaveEdit}>
                    <FontAwesomeIcon icon={faCheck} size="md" />
                  </button>

                  <button className={styles.btn} onClick={handleCancelEdit}>
                    <FontAwesomeIcon icon={faTimes} size="md" />
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className={styles.editValues}>
                  {name} - {number}
                  <div className={styles.alignBtns}>
                    <button
                      type="button"
                      onClick={() => handleEditClick(id, name, number)}
                    >
                      <FontAwesomeIcon icon={faPenToSquare} size="md" />
                    </button>

                    <button type="button" onClick={() => openModal(id)}>
                      <FontAwesomeIcon icon={faTrash} size="md" />
                    </button>
                  </div>
                </div>

                {isModalOpen && modalId === id && (
                  <Modal closeModal={closeModal} handleDelete={handleDelete} />
                )}
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListItems;
