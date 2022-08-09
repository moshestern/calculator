import { FormEvent, useState } from "react";
import './LoginForm.scss';
import { useUserContext } from "../providers/UserProvider";

export const LoginForm = () => {
    const { updateUserData } = useUserContext();
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [isError, setIsError] = useState(false);

    const handleLogin = (e: FormEvent) => {
        e.preventDefault();
        const isValidEmail = /^\S+@\S+\.\S+$/.test(email);
        if (username !== '' && isValidEmail) {
            updateUserData({username, email});
            setIsError(false);
            window.location.href = './main';
        } else {
            setIsError(true);
        }
    }

    return (
        <form className="login-form" onSubmit={handleLogin}>
            <div>
                <label htmlFor="username">User name</label>
                <input type="text" id="username" placeholder="enter user name" onChange={e => setUserName(e.target.value)}></input>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="enter user email" onChange={e => setEmail(e.target.value)}></input>
            </div>
            <div className="login-btn">
                <button type="submit">Login</button>
            </div>
            {isError && <div className="error-msg">please add valid name/email</div>}
        </form>
    )
}