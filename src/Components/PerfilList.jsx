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
import {
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalWrapper,
  StyledButtonMini,
  Title,
} from "../Styles/styled";

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
    <div>
      <div
        className="divTable"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {perfil?.map((p) => (
          <div
            key={p.id}
           
          >
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: 'column',
              color:'white'
            }}>

            <Title> Foto de perfil </Title>
            <img src={p.fotop} alt="" width={"30%"} alignContent="center" />
            <Title> Id de usuario</Title>
            <h2>{p.id}</h2>
            <Title> Tu nombre </Title>
            <h2>{p.name}</h2>
            <Title> Tu genero</Title>
            <h3>{p.genre}</h3>
            <Title> Tu numero</Title>
            <h4>{p.phone}</h4>
            </div>

<div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              }}>

            <StyledButtonMini
              style={{ marginLeft: '110px',
            marginRight: '-40px', 
          padding: '5px 15px' }}
              onClick={() => dispatch(actionDeletePerfilAsyn(p.id))}
            >
              X
            </StyledButtonMini>
            <StyledButtonMini
              style={{  }}
              variant="primary"
              onClick={() => handleShow(p)}
            >
              Edit
            </StyledButtonMini>
</div>
          </div>
        ))}
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
    </div>
  );
};
export default PerfilList;
