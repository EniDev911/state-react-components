import Form from "react-bootstrap/Form";
import Button from "./Button";

const Input = ({ name, password }) => {

  const validateInput = (e) => {
    e.preventDefault();
    alert("Enviando");
    name[0] === ""?  alert("Debe ingresar un nombre") : "";
  } 
  return (
    <Form onSubmit={validateInput} className="p-2 border rounded w-75 bg-dark bg-gradient text-light">
      <Form.Group className="mb-3">
      <Form.Label>Nombre</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Ingrese su nombre" 
          onChange={(e) => name[1](e.target.value)}/>
      </Form.Group>
      <Form.Group 
      className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Ingrese su password"
          onChange={(e) => password[1](e.target.value)}
        />
      </Form.Group>
      {password[0] === "252525" ? <Button /> : null}
    </Form>
  );
};
export default Input;
