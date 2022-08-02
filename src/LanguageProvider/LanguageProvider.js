import {createContext, useState} from "react";

export const LanguageContext = createContext({language: 'Russian'})

export const LanguageProvider = ({children}) => {
    const [language, setLanguage] = useState('Russian')

    return (
        <LanguageContext.Provider value={{language, setLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}
