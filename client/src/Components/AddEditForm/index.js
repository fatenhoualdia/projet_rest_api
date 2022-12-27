import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { addUser, editUserById } from "../../js/actions";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    background: "#f9f9f9",
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0,0,0,0.4)",
    zIndex: 999,
    width: "100vw",
  },
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

function AddEditForm({ oldUser, userId }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  // const [firstName,setFirstName]=useState("")
  // const [lastName,setlastName]=useState("")
  // const [firstName,setFirstName]=useState("")
  // const [firstName,setFirstName]=useState("")
  const [form, setForm] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Phone: "",
  });
  useEffect(() => {
    oldUser
      ? setForm(oldUser)
      : setForm({
          FirstName: "",
          LastName: "",
          Email: "",
          Phone: "",
        });
  }, [oldUser, modalIsOpen]);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const addNewUser = (formData) => dispatch(addUser(formData));
  const handleSubmit = (e) => {
    e.preventDefault();
    oldUser ? dispatch(editUserById(userId, form)) : addNewUser(form);
    closeModal();
  };
  return (
    <React.Fragment>
      {oldUser ? (
        <span onClick={openModal}>EDIT </span>
      ) : (
        <i className="fas fa-plus add-btn" onClick={openModal} />
      )}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <h2> {oldUser ? "EDIT USER" : "ADD USER"} </h2>
        <form onSubmit={handleSubmit} className="add-edit-form">
          <label>First Name</label>
          <input
            value={form.FirstName}
            onChange={handleChange}
            name="FirstName"
            type="text"
            placeholder="Enter your name..."
            required
          />
          <label>LAST NAME</label>
          <input
            value={form.LastName}
            name="LastName"
            onChange={handleChange}
            type="text"
            placeholder="Enter your last name name..."
            required
          />
          <label>EMAIL</label>
          <input
            value={form.Email}
            name="Email"
            onChange={handleChange}
            type="email"
            placeholder="Enter your email..."
            required
          />
          <label>Phone</label>
          <input
            value={form.Phone}
            name="Phone"
            onChange={handleChange}
            type="text"
            pattern="[0-9]{8,}"
            required
            placeholder="Enter your phone..."
          />
          <div>
            <button type="submit">Confirm</button>
            <button onClick={closeModal}>Cancel</button>
          </div>
        </form>
      </Modal>
    </React.Fragment>
  );
}

export default AddEditForm;