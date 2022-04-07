import { useModal } from "../contexts/ModalCtx";
import ModalUserCL from "./userModals/ModalUserCL";
import ModalUserCV from "./userModals/ModalUserCV";
import ModalUserProfile from "./userModals/ModalUserProfile";

const Modals = () => {
  const {
    isOpenUserProfileModal,
    isOpenUserCvTemplateModal,
    isOpenUserClTemplateModal,
  } = useModal();

  return (
    <div>
      {isOpenUserProfileModal ? <ModalUserProfile /> : null}
      {isOpenUserCvTemplateModal ? <ModalUserCV /> : null}
      {isOpenUserClTemplateModal ? <ModalUserCL /> : null}
    </div>
  );
};

export default Modals;
