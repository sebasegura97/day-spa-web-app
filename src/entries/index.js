import React from 'react';
import { render } from 'react-dom'
import Home from '../pages/containers/home'
import { Provider } from 'react-redux'
import store from '../store.js'

// console.log('Hola mundo');
// console.log('mave si aktualiza solo');
const $app = document.getElementById('app')

render(
    <Provider store={store}>
        <Home />
    </Provider>
    , 
    $app);
