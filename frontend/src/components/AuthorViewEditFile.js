import InputToFill from "./Artifact";
import { Button } from "reactstrap";

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
  return (
    <main className="container">
      <AuthorsBody authorItems={authorsItems} />
    </main>
  );
}

export default AuthorView;
