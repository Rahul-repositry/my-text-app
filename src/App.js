import { useState } from 'react';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/textForm';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState('');

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
    console.log('working')
  }

  const toggleMode = (e) => {
    let bgColor = e.target.value
    if (mode === 'light') {
      setMode('dark')
      if (bgColor === 'green') {
        document.body.style.background = 'rgb(69,146,84)';
      } else {
        document.body.style.background = '#282c34';
      }
      document.body.style.color = 'white';
      showAlert('Dark mode has been enabled', 'success')
    } else {
      setMode('light')
      document.body.style.background = 'white';
      document.body.style.color = 'black';
      showAlert('Dark mode has been disabled', 'success')
    }
  }
  return (
    <>
      <BrowserRouter>
        <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-5">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />}>
            </Route>
            <Route exact path='/' element={<TextForm mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
