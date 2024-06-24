import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChatProvider } from './components/context/ChatContext';
import { ThemeProviderComponent } from './components/context/ThemeContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProviderComponent>
  <ChatProvider>
    <App />
  </ChatProvider>
  </ThemeProviderComponent>
);


