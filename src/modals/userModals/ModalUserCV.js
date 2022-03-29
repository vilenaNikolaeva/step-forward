import React from "react";
import { useModal } from "../../contexts/ModalCtx";
import ModalWrapper from "../../wrappers/ModalWrapper";
import EditCVTemplateOne from "../../components/templates/cv/templateOne/EditCVTemplateOne";

const ModalUserCV = () => {
  const { isOpenUserCvTemplateModal, setIsOpenUserCvTemplateModal } =
    useModal();

  return (
    /* TODO */
    <ModalWrapper
      setIsOpenModalComponent={setIsOpenUserCvTemplateModal}
      isOpenModalComponent={isOpenUserCvTemplateModal}
    >
      <div>
        <button  onClick={()=>setIsOpenUserCvTemplateModal(false)} className={'modalBackground-clsBtn'}>X</button>
        <EditCVTemplateOne />
      </div>
    </ModalWrapper>
  );
};

export default ModalUserCV;
