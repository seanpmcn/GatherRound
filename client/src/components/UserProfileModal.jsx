const UserProfileModal = ({name, email}) => {

    const modalRef = useRef<HTMLDialogElement | null>(null);

    return (
        <dialog ref={modalRef} data-testid='modal'>
            <h2 data-testid='name'>{name}</h2>
            <h2 data-testid='email'>{email}</h2>
        </dialog>
    );
}

export default UserProfileModal;