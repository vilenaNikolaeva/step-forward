import React from "react";
import { useSelector } from "react-redux";
import { useModal } from "../../contexts/ModalCtx";
import ModalWrapper from "../../wrappers/ModalWrapper";

const ModalUserCV = () => {
  const { isOpenUserCvTemplateModal, setIsOpenUserCvTemplateModal } = useModal();

  return (
    /* TODO */
    <ModalWrapper
      setIsOpenModalComponent={setIsOpenUserCvTemplateModal}
      isOpenModalComponent={isOpenUserCvTemplateModal}
    >
    </ModalWrapper>
  );
};

export default ModalUserCV;
