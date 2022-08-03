import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import LanguageContext from "./LanguageProvider/LanguageProvider";

function setLocalStorage(key, value) {
    try {
        window.localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
        // catch possible errors:
        // https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
    }
}

function getLocalStorage(key, initialValue) {
    try {
        const value = window.localStorage.getItem(key);
        return value ? JSON.parse(value) : initialValue;
    } catch (e) {
        // if error, return initial value
        return initialValue;
    }
}

function Main() {
    const [language, setLanguage] = useState(() => getLocalStorage("language", 'Russian'));

    useEffect(() => {
        setLocalStorage("language", language);
    }, [language]);

    return (
        <React.StrictMode>
            <LanguageContext.Provider value={{language, setLanguage}}>
                <App/>
            </LanguageContext.Provider>
        </React.StrictMode>
    )
}
ReactDOM.render(
    <Main/>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
