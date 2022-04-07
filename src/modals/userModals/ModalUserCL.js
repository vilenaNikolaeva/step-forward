import React from "react";
import { useSelector } from "react-redux";
import { useModal } from "../../contexts/ModalCtx";
import ModalWrapper from "../../wrappers/ModalWrapper";
import EditCLTemplateBlue from "../clTemplateModals/blueTemplate/EditCLTemplateBlue";

const ModalUserCL = () => {
  const { isOpenUserClTemplateModal, setIsOpenUserClTemplateModal } =
    useModal();

  return (
    /* TODO ----- render if templete blue or ashh*/
    <ModalWrapper
      setIsOpenModalComponent={setIsOpenUserClTemplateModal}
      isOpenModalComponent={isOpenUserClTemplateModal}
    >
      <div>
        <EditCLTemplateBlue/>
      </div>
    </ModalWrapper>
  );
};

export default ModalUserCL;
