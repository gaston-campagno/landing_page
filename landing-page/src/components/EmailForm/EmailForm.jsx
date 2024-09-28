import React, { useState } from 'react';
import './EmailForm.css';
import translations from '../../translations/translations.jsx';

const EmailForm = ({ language }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      setError(translations[language].invalidEmailMessage || 'Invalid email address');
      return;
    }

    setIsSubmitting(true); // Bloquea el botón


    fetch('https://script.google.com/macros/s/AKfycbw5fa1SMNfDnZ8tNEEOwPmk9m8II7hzgaCxFVw2Sk1tkbcXgHAkMpchacBAN9zQNxxoSQ/exec', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        'email': email
      })
    })
    .then(response => response.text())  // Convertir la respuesta a texto
.then(result => {
  console.log(result);  // Mostrar la respuesta en la consola
  alert(result);        // Mostrar la respuesta en un alert
})
    .then(result => {
      alert(translations[language].successMessage || 'from React: Your email has been submitted successfully!');
      setEmail(''); // Limpiar el input
      setError(''); // Limpiar el mensaje de error
      setIsSubmitting(false); // Habilita el botón
    })
    .catch(error => {
      console.error('Error:', error);
      setError(translations[language].errorMessage || 'An error occurred. Please try again later.');
      setIsSubmitting(false); // Habilita el botón en caso de error
    });
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex flex-column flex-md-row justify-content-center align-items-center">
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        required 
        placeholder={translations[language].emailPlaceholder} 
        className="form-control mb-2 mb-md-0 mr-md-2" 
      />
      <button id="submitBtn1" type="submit" className="btn btn-primary d-none d-md-block" disabled={isSubmitting} // Deshabilita el botón
>
        {translations[language].submitButton} 
      </button>
      <button id="submitBtn2" type="submit" className="btn btn-primary d-block d-md-none mt-2" disabled={isSubmitting} // Deshabilita el botón
>
        {translations[language].submitButton}
      </button>
      {error && <div className="error-message mt-2">{error}</div>}
    </form> 
  );
};

export default EmailForm;
