// Aqui estamos importando o React, que nos ajuda a construir a interface
import React from 'react';

// Este comando é necessário para "conectar" o React com o HTML que aparece na tela
import ReactDOM from 'react-dom/client';

// Estamos importando o componente principal do aplicativo, que criamos no App.js
import App from './App';

// Este é um arquivo de estilo (CSS) para deixar nosso app mais bonito
import './index.css';

// Aqui estamos dizendo: "Ei, React, pegue tudo que o App mostra e coloque dentro do <div id="root"> lá no HTML"
const root = ReactDOM.createRoot(document.getElementById('root'));

// Agora, pedimos para o React mostrar o App dentro desse lugar
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
