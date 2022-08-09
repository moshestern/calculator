import { createContext, useContext, useState } from 'react'

type KeysContextProps = {
    keysArr: string[]
    updateKeysData: (key: string) => void
    clearKeysData: () => void
}
type KeysProviderProps = {children: React.ReactNode}


const KeysContext = createContext<KeysContextProps>({keysArr: [''], updateKeysData: () => undefined, clearKeysData: () => undefined });

export const KeysProvider = ({children}: KeysProviderProps) => {
    const [keysArr, setKeysArr] = useState<string[]>([]);

    const updateKeysData = (key:string) => {
        if (keysArr.length === 20) {
            const tempKeys = keysArr.slice(1);
            tempKeys.push(key);
            setKeysArr(tempKeys);
        } else {
            setKeysArr(prevKeys => [...prevKeys, key])
        }
    }

    const clearKeysData = () => {
        setKeysArr([])
    }

    return <KeysContext.Provider value={{ keysArr, updateKeysData, clearKeysData}}>{children}</KeysContext.Provider>
}

export const useKeysContext = () => {
    const context = useContext(KeysContext)
    if (context === undefined) {
        throw new Error('useKeysContext must be used within a KeysProvider')
    }
    return context
}
