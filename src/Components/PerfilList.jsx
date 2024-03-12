import React, { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  actionDeletePerfilAsyn,
  actionEditperfilAsyn,
  actionListperfilAsyn,
} from "../Redux/actions/actionsPerfil";
import { FileUpload } from "../Helpers/FileUpload";
import useForm from "../Hooks/useForm";
import PerfilEdit from "../Components/PerfilEdit";
import { ModalBody, ModalContent, ModalFooter, ModalHeader, ModalTitle, ModalWrapper, StyledButton } from "../Styles/styled";


const PerfilList = () => {
  const dispatch = useDispatch();
  const { perfil } = useSelector((store) => store.perfilStore);
  console.log(perfil);
  const [show, setShow] = useState(false);
  const [selectData, setSelectData] = useState();

  const handleClose = () => setShow(false);

  const handleShow = (p) => {
    setSelectData(p);
    setShow(true);
  };

  useEffect(() => {
    dispatch(actionListperfilAsyn());
  }, []);


  return (
    <div className="divTable">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>user id</th>
            <th>Nombre</th>
            <th>Genero</th>
            <th>Numero</th>
            <th>Foto de perfil</th>
            <th>Acciónes</th>
          </tr>
        </thead>
        <tbody style={{"text-align": "center", "width": "400px"}}>
          {perfil?.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.genre}</td>
              <td>{p.phone}</td>
              <td>
                <img src={p.fotop} alt="" width={"20%"} />
              </td>
              <td style={{ padding: 10 }}>
                <StyledButton onClick={() => dispatch(actionDeletePerfilAsyn(p.id))}>
                  X
                </StyledButton>
                <StyledButton variant="primary" onClick={() => handleShow(p)}>
                  Edit
                </StyledButton>
                <StyledButton>Ver</StyledButton>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {show && (
  <ModalWrapper>
    <ModalContent>
      <ModalHeader>
          <ModalTitle>Editar {selectData?.name}</ModalTitle>
        </ModalHeader>
        <ModalBody>
          {show && selectData !== "undefined" && (
            <PerfilEdit datos={selectData} handleClose={handleClose} />
          )}
        </ModalBody>
        <ModalFooter />
      </ModalContent>
      </ModalWrapper>
      )}
    </div>
  );
};
export default PerfilList;
