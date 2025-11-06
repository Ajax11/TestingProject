import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Table } from "reactstrap";
import InputToFill from "./Artifact";
import axios from "axios";

const authorsItems = [
  {
    id: 1,
    first_name: "Jyoji",
    last_name: "Morikawa",
    role: "main",
  },
  {
    id: 2,
    first_name: "Masashi",
    last_name: "Kishimoto",
    role: "main",
  },
  {
    id: 3,
    first_name: "",
    last_name: "Chugong",
    role: "main",
  },
];

/*
const handleDelete = (item) => {
    alert("delete" + JSON.stringify(item));
};
*/

const createItem = toggle => {
  toggle();
  alert("Crear item");
};

const editItem = item => {
  alert("Modificar item" + JSON.stringify(item));
};

function AuthorsTable({ authorItems, modal, toggle }) {
  const authorsItems = authorItems.map(item => (
    <tr>
      <th scope="row">{item.id}</th>
      <td>{item.first_name}</td>
      <td>{item.last_name}</td>
      <td>{item.role}</td>
      <td>
        <Button onClick={toggle}>Edit author</Button>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Edit Author</ModalHeader>
          <ModalBody>Text</ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={() => {
                toggle();
                editItem(item);
              }}
            >
              Save Changes
            </Button>{" "}
            <Button color="danger" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </td>
    </tr>
  ));

  return (
    <Table responsive striped>
      <thead>
        <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Role</th>
          <th></th>
        </tr>
      </thead>
      <tbody>{authorsItems}</tbody>
    </Table>
  );
}

function AuthorsBody({ authorItems }) {
  const listItems = authorItems.map(item => (
    <div key={item.id}>
      <div className="justify-content-center">
        <InputToFill
          textLabelInput="First Name"
          textInputType="text"
          textInputValue={item.first_name}
        />
        <InputToFill
          textLabelInput="Last Name"
          textInputType="text"
          textInputValue={item.last_name}
        />
        <InputToFill textLabelInput="Role" textInputType="text" textInputValue={item.role} />
      </div>
      <div>
        <span>
          <Button className="btn btn-secondary mr-2">Save changes</Button>
          <Button className="btn btn-danger">Delete</Button>
        </span>
      </div>
    </div>
  ));
  return <div>{listItems}</div>;
}

function AuthorView() {
  const [modalCreateItemButton, setModalCreateItemButton] = useState(false);
  const toggle = () => setModalCreateItemButton(!modalCreateItemButton);
  const [modalEditItemButton, setModalEditItemButton] = useState(false);
  const toggleEditB = () => setModalEditItemButton(!modalEditItemButton);

  let listAuthors = [];
  axios
    .get("http://127.0.0.1:8000/api/authors/")
    .then(response => {
      listAuthors.push(response);
    })
    .catch(err => console.log(err));
  console.log(listAuthors);
  /*
    axios.get("http://127.0.0.1:8000/api/authors/")
        .then((response) => {console.log(response.data)})
        .catch((err) => console.log(err));
    */

  return (
    <div>
      <div className="text-left">
        <Button color="primary" onClick={toggle}>
          Add a new Author
        </Button>
        <Modal isOpen={modalCreateItemButton} toggle={toggle}>
          <ModalHeader toggle={toggle}>Add a new Author</ModalHeader>
          <ModalBody>Items</ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => createItem(toggle)}>
              Create
            </Button>{" "}
          </ModalFooter>
        </Modal>
      </div>
      <main className="container">
        <AuthorsTable authorItems={authorsItems} modal={modalEditItemButton} toggle={toggleEditB} />
      </main>
    </div>
  );
}

export default AuthorView;

/*
                <AuthorsTable authorItems={authorsItems}/>
                <AuthorsTable authorItems={response} modal={modalEditItemButton} toggle={toggleEditB}/>
*/
