import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import happyCreeperHead from './assets/happy_creeper_head.png';
import blockServerLogo from './assets/BLOCK-SERVER-LOGO.png'
import blockServerLogo2 from './assets/BLOCK-SERVER-LOGO2.png'
import UsaFlag from './assets/flags/usa.png'
import GermanFlag from './assets/flags/germany.png'
import BrazilianFlag from './assets/flags/brazil.svg'
import SpanishFlag from './assets/flags/spain.png'
import JapaneseFlag from './assets/flags/japan.svg'
import translations from './translations/translations.jsx'; // Importar las traducciones
import EmailForm from './components/EmailForm/EmailForm';
import { useState } from 'react';

function App() {

  const [language, setLanguage] = useState('en');

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };
  
  return (
    
    <div id='App' className="container-fluid">
  {/* Div para cambiar idioma */}
  <div id="language-selector" className="d-flex justify-content-end p-3">
          <div className="language-circle" onClick={() => changeLanguage('en')}>
            <img src={UsaFlag} alt="English" />
          </div>
          <div className="language-circle" onClick={() => changeLanguage('es')}>
            <img src={SpanishFlag} alt="Español" />
          </div>
          <div className="language-circle" onClick={() => changeLanguage('ge')}>
            <img src={GermanFlag} alt="German" />
          </div>
          <div className="language-circle" onClick={() => changeLanguage('br')}>
            <img src={BrazilianFlag} alt="Brazilian" />
          </div>
          <div className="language-circle" onClick={() => changeLanguage('ja')}>
            <img src={JapaneseFlag} alt="Japanese" />
          </div>
        </div>
        <div id="logo-tablet-screen">
            <img
              src={blockServerLogo2}
              alt="logo"
            />
          </div>
      <div id='boxes-container' className="row h-100">
      
        <div id='first-responsive-box' className="col-md-4 d-flex flex-column justify-content-center align-items-center order-md-2 mb-4 mb-md-0">
        <div className="logo-small-screen">
            <img
              src={blockServerLogo2}
              alt="logo"
            />
          </div>
          <div className="image-container">
            <img
              src={happyCreeperHead}
              alt="happy_creeper_head"
              className="img-fluid rounded"
            />
            
          </div>
          <p className="mt-3"></p>
         
        </div>
        
        

        <div
          id='left-section'
          className="col-md-8 d-flex flex-column order-md-1"
        >
        <div className="logo-container">
            <img
              src={blockServerLogo2}
              alt="logo2"
            />
          </div>
          <h1>{translations[language].title}</h1>

           {/* Caja de texto animado */}
        <div className="col-md-4">
          <div className="text-box-animated-2"> 
            <p className="animated-text-2">{translations[language].latentDate}</p>
          </div>
        </div>

          {/* Rectángulo negro con texto */}
          <div id='text-box' className="text-box">
            <p className="text-inside">{translations[language].banner}</p>
          </div>
          <p>{translations[language].subtitle}</p> 
          
        </div>       
      </div>
      {/* Nuevo rectángulo azul para solicitar correo electrónico */}
      <div id="subscriptionemail-frame-section" className="row mt-5">
        <div id='email-frame' className="col-md-8">
          <div className="email-box">
            <h3>{translations[language].emailBox}</h3>
            {/*
            <form className="d-flex flex-column flex-md-row justify-content-center align-items-center">
                <input type="email" placeholder={translations[language].emailPlaceholder} className="form-control mb-2 mb-md-0 mr-md-2" />
                <button id="submitBtn1" type="submit" className="btn btn-primary d-none d-md-block">{translations[language].submitButton}</button>
                <button id="submitBtn2" type="submit" className="btn btn-primary d-block d-md-none mt-2">{translations[language].submitButton}</button>
            </form>
            */}
            <EmailForm language={language} />
          </div>
        </div>

        {/* Caja de texto animado */}
        <div className="col-md-4">
          <div className="text-box-animated">
 
            <p className="animated-text">{translations[language].latentDate}</p>
          </div>
        </div>
      </div>
    </div>
    
  );
  
}

export default App;
