import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { Provider } from 'react-redux';
import store from './store/store.js';
import {ErrorBoundary} from "./components/ErrorBoundary/ErrorBoundary.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>      
      <Provider store={store}>
          <BrowserRouter>
              <ErrorBoundary fallback={<h1>Произошла ошибка, попробуйте перезагрузить страницу</h1>}>
                  <App />
              </ErrorBoundary>
          </BrowserRouter>
      </Provider>

  </React.StrictMode>
);
