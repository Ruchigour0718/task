import React from'react';
import { BrowserRouter ,Routes,Route} from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
// import Navigation from './Component/Navigation';

function App() {
  return (
    <div className="App">
      {/* <Navigation/> */}
      <BrowserRouter>
      <Routes>
      {/* <Route path="/" element={<App />} /> */}
      <Route path="/" element={<Home/>}exact  />
      <Route path="About" element={<About />} />
    

    </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
