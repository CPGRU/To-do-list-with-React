import './index.css';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from './context/lists';

const elem = document.getElementById('root');
const root = ReactDOM.createRoot(elem);


root.render(
    <Provider >
        <App />
    </Provider >
);