import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import LanguageContext from "./LanguageProvider/LanguageProvider";


function Main() {
    const [language, setLanguage] = useState('Russian')
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
