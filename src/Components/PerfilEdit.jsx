// import React from "react";
// import { Button, Form } from "react-bootstrap";
// import useForm from "../Hooks/useForm";
// import { actionEditperfilAsyn } from "../Redux/actions/actionsPerfil";
// import { useDispatch } from "react-redux";
// import { FileUpload } from "../Helpers/FileUpload";

// const PerfilEdit = ({ datos, handleClose }) => {
//   const dispatch = useDispatch();
//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const [formValue, handleInputChange, reset] = useForm({
//     phone: datos.phone,
//     fotop: datos.fotop,
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formValue);
//     let obj = {
//       id: datos.id,
//       phone: formValue.phone,
//       fotop: formValue.fotop,
//     };
//     dispatch(actionEditperfilAsyn(obj));
//     handleClose();
//   };
//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     console.log(file);
//     FileUpload(file)
//       .then((resp) => (formValue.fotop = resp))
//       .catch((err) => console.warn(err));
//   };
//   return (
//     <div className="divEdit">
//       <Form onSubmit={handleSubmit}>

//         <Form.Group className="mb-3" controlId="formPlaintextphone">
//           <Form.Label column sm="2">
//             phone
//           </Form.Label>

//           <Form.Control
//             type="number"
//             placeholder="phone"
//             name="phone"
//             value={formValue.phone}
//             onChange={handleInputChange}
//           />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formPlaintextprice">
//           <Form.Label column sm="2">
//             Foto de Perfil
//           </Form.Label>

//           <Form.Control
//             type="file"
//             name="fotop"
//             accept="*image/*"
//             placeholder="Ingrese Foto de perfil"
//             onChange={handleFileChange}
//           />
//         </Form.Group>

//         <Button type="submit">Guardar Modificado</Button>
//       </Form>
//     </div>
//   );
// };

// export default PerfilEdit;
