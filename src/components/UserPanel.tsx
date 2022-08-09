import { useUserContext } from "../providers/UserProvider";
import "./UserPanel.scss"

export const UserPanel = () => {
    const { userData, clearUserData } = useUserContext();
    const handleLogout = () => {
        clearUserData();
        window.location.href = '/';
    };

    return (
        <div className="user-panel">
            <button onClick={handleLogout}>Logout</button>
            {userData.username ? <span>Hello {userData.username}</span> : null}
        </div>
    )
}