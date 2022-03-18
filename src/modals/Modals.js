import { useModal } from "../contexts/ModalCtx";
import ModalUserCV from "./userModals/ModalUserCV";
import ModalUserProfile from "./userModals/ModalUserProfile";

const Modals = () => {
  const { isOpenUserProfileModal, isOpenUserCvTemplateModal } = useModal();
  
  return (
    <div>
      {isOpenUserProfileModal ? <ModalUserProfile /> : null}
      {isOpenUserCvTemplateModal ? <ModalUserCV /> : null}
    </div>
  );
};

export default Modals;
