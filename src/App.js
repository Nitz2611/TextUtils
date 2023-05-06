
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert'
import TextForm from './components/TextForm';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";



function App() {

  const [mode, setMode] = useState('light');  //whether dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#1e3354'
      showAlert("Dark mode has been enabled", "success");

      //how to flash title - not a good user experience

      // setInterval(() => {
      //   document.title = 'TextUtils is amazing';
      // }, 2000);

      // setInterval(() => {
      //   document.title = 'Use TextUtils now';
      // }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (

    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />

      <Alert alert={alert} />

      <div className="container my-3">

        <Routes>
          <Route exact path="/about" element={<About mode={mode} />}> 
            {/*  javascript do partial search for your page so add 'exact' keyword to get right results */}
          </Route>
          
          <Route exact path="/" element={ <TextForm showAlert={showAlert} heading="Try TextUtils - Word counter, character counter, sort by word!" mode={mode} />}>
         
          </Route>
        </Routes>

        

        {/* <About/> */}
      </div>
      </Router>
    </>
  );
}

export default App;
