import React from "react";
import { useModal } from "../../contexts/ModalCtx";
import ModalWrapper from "../../wrappers/ModalWrapper";
import EditCVTemplateBlue from "../cvTemplateModals/blueTemplate/EditCVTemplateBlue";

const ModalUserCV = () => {
  const { isOpenUserCvTemplateModal, setIsOpenUserCvTemplateModal } =
    useModal();

  return (
    /* TODO ----- render if templete blue or ashh*/
    <ModalWrapper
      setIsOpenModalComponent={setIsOpenUserCvTemplateModal}
      isOpenModalComponent={isOpenUserCvTemplateModal}
    >
      <div>
        <EditCVTemplateBlue/>
      </div>
    </ModalWrapper>
  );
};

export default ModalUserCV;
