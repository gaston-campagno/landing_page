import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactGA from 'react-ga4';  // Importa la librería de Google Analytics

// Inicializa Google Analytics con tu Measurement ID
ReactGA.initialize('G-ZXC63ECFQJ'); // Reemplaza con tu Measurement ID

// Opcional: Envía un "pageview" cuando la página se carga
ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search });

reportWebVitals((metric) => {
  ReactGA.event({
    category: 'Web Vitals',
    action: metric.name,
    value: Math.round(metric.value), // el valor de la métrica
    label: metric.id, // un identificador único para la métrica
  });
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
