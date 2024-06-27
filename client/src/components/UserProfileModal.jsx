const UserProfileModal = ({name, email}) => {
    return (
        <div data-testid='modal'>
            <h2 data-testid='name'>{name}</h2>
            <h2 data-testid='email'>{email}</h2>
        </div>
    );
}

export default UserProfileModal;