<<<<<<< HEAD
import './polyfill'
=======
>>>>>>> 9cae01906ee2d6fb283815970a6df396c7f6f38f
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
<<<<<<< HEAD
// disable ServiceWorker
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// disable ServiceWorker
// registerServiceWorker();
=======
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
>>>>>>> 9cae01906ee2d6fb283815970a6df396c7f6f38f
