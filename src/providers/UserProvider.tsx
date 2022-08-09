import { createContext, useContext, useEffect, useState } from 'react';

type UserContextProps = {
    userData: {
        username: string
        email: string
    }
    updateUserData: ({ username, email }: { username: string, email: string }) => void
    clearUserData: () => void
}
type UserProviderProps = { children: React.ReactNode }

const initUserData = {
    userData: { username: '', email: '' }, 
    updateUserData: () => undefined, 
    clearUserData: () => undefined
}
const UserContext = createContext<UserContextProps>(initUserData);

export const UserProvider = ({ children }: UserProviderProps) => {
    const [userData, setUserData] = useState<UserContextProps["userData"]>(initUserData.userData);
    useEffect(() => {
        if (localStorage.getItem('userData')) {
            setUserData(JSON.parse(localStorage.getItem('userData')!))
        }
    },[])

    const updateUserData = ({ username, email }: UserContextProps["userData"]) => {
        localStorage.setItem('userData', JSON.stringify({ username: username, email: email }));
        setUserData({ username: username, email: email })
    }

    const clearUserData = () => {
        localStorage.removeItem('userData');
        setUserData(initUserData.userData)
    }

    return <UserContext.Provider value={{ userData, updateUserData, clearUserData }}>{children}</UserContext.Provider>
}

export const useUserContext = () => {
    const context = useContext(UserContext)
    if (context === undefined) {
        throw new Error('useUserContext must be used within a UserProvider')
    }
    return context
}
