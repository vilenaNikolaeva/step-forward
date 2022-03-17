import { useModal } from "../contexts/ModalCtx";
import ModalUserCV from "./userModals/ModalUserCV";
import ModalUserProfile from "./userModals/ModalUserProfile";

const Modals = () => {
  const { isOpenUserProfileModal, isOpenUserCvTemplateOne } = useModal();

  return (
    <div>
      {isOpenUserProfileModal ? <ModalUserProfile /> : null}
      {isOpenUserCvTemplateOne ? <ModalUserCV /> : null}
    </div>
  );
};

export default Modals;
