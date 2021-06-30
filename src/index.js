import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

const firebaseURL = ""; // Add your Firebase URL here, with meals being stored in the "meals" section (this should be added on the website directly) and orders being stored in the "orders" section

ReactDOM.render(<App databaseLink={firebaseURL}/>, document.getElementById('root'));
