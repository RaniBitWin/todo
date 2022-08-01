 //pacote core onde mora todas as funcionalidades partilhadas por  todas as interfaces, seja web, native, tv, vr
import React from 'react';
// integração com a DOM (Document Object Model) que é representação do html através do javascript. A importação ReactDom é a interface web via browser.
import ReactDOM from 'react-dom/client';
//importação do componente raiz
import { App } from './App';

//o método createRoot recebe o elemento raiz da aplicação web (index.html na única div id='root'), e o método render mostra em tela a aplicação.
ReactDOM.createRoot(document.getElementById('root')).render(
  //componente react que possui sintaxe semelhante a de tags html
  <React.StrictMode> 
    <App />
  </React.StrictMode>
)

//a mágica do react e todas as bibliotecas de construção de SPAs (Single Page Application) é criar o html e tudo em que o usuário interage a partir do javascript. Aqui o javascritp conhece e tem domínio de toda aplicação com poderes de construir e destruir elementos.