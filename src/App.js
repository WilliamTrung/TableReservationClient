import logo from './logo.svg';
import './App.css';
import { GoogleLogin } from '@react-oauth/google';
import { useState } from 'react';

function App() {
  const [token, setToken] = useState('');
  const responseMessage = (response) => {    
    setToken(response.credential);
  };
  const errorMessage = (error) => {
    console.log(error);
  };
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(token);
      console.log('Response copied to clipboard:', token);
    } catch (error) {
      console.error('Failed to copy to clipboard:', error);
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
        <button onClick={copyToClipboard}>Copy the token to Clipboard</button>
      </header>
    </div>
  );
}

export default App;
