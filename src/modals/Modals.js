import { useModal } from '../contexts/ModalCtx';
import ModalUserProfile from './userModals/ModalUserProfile';


const Modals = () => {

    const { isOpenUserProfileModal } = useModal()

    return (
        <div>
            {isOpenUserProfileModal
                ? <ModalUserProfile />
                : null
            }
        </div>
    );
};

export default Modals;