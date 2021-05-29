import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [data, setData] = useState({
    full_name: "Huỳnh Thế Tông", phone: '0362527648', note: 'alxtbnox__263533', date: new Date()
  })

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    console.log('e', e)
    e.preventDefault()

    try {
      const response = await fetch('https://v1.nocodeapi.com/anhnguoingheo/google_sheets/nBuAMJpBFtRwemST?tabId=Collection', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify([[data.full_name, data.phone, data.note, data.date.toLocaleString()]])
      })
      

      const res = await response.json()
      console.log('Res', res)

      setData({ ...data, full_name: "Huỳnh Thế Tông", phone: '0362527648', note: 'alxtbnox__263533', date: new Date() })
    } catch (error) {

    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={handleSubmit}>Kiểm tra</button>
      </header>
    </div>
  );
}

export default App;
