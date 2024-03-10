// import React, { useEffect, useState } from "react";
// import { Button, Modal, Table } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   actionDeletePerfilAsyn,
//   actionEditperfilAsyn,
//   actionListperfilAsyn,
// } from "../Redux/actions/actionsPerfil";
// import { FileUpload } from "../Helpers/FileUpload";
// import useForm from "../Hooks/useForm";
// import PerfilEdit from "../Components/PerfilEdit";


// const PerfilList = () => {
//   const dispatch = useDispatch();
//   const { perfil } = useSelector((store) => store.perfilStore);
//   console.log(perfil);
//   const [show, setShow] = useState(false);
//   const [selectData, setSelectData] = useState();

//   const handleClose = () => setShow(false);

//   const handleShow = (p) => {
//     setSelectData(p);
//     setShow(true);
//   };

//   useEffect(() => {
//     dispatch(actionListperfilAsyn());
//   }, []);


//   return (
//     <div className="divTable">
//       <Table striped bordered hover variant="dark">
//         <thead>
//           <tr>
//             <th>id</th>
//             <th>Nombre</th>
//             <th>Descripción</th>
//             <th>Precio</th>
//             <th>Imagen</th>
//             <th>Acción</th>
//           </tr>
//         </thead>
//         <tbody>
//           {perfil?.map((p) => (
//             <tr key={p.id}>
//               <td>{p.id}</td>
//               <td>{p.name}</td>
//               <td>{p.genre}</td>
//               <td>{p.phone}</td>
//               <td>
//                 <img src={p.fotop} alt="" width={"50%"} />
//               </td>
//               <td style={{ padding: 10 }}>
//                 <Button onClick={() => dispatch(actionDeletePerfilAsyn(p.id))}>
//                   X
//                 </Button>
//                 <Button variant="primary" onClick={() => handleShow(p)}>
//                   Edit
//                 </Button>
//                 <Button>Ver</Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Editar {selectData?.name}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {show && selectData !== "undefined" && (
//             <PerfilEdit datos={selectData} handleClose={handleClose} />
//           )}
//         </Modal.Body>
//         <Modal.Footer />
//       </Modal>
//     </div>
//   );
// };
// export default PerfilList;
