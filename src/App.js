import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Particles from 'react-particles-js';
import Nav from './components/Nav'
import Header from './components/Header';

function App() {
  return (
    <>
    <Particles 
    className="particles-canvas"
      params={{
        particles: {
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 900
            }
          },
          shape: {
            type: "circle",
            stroke: {
              width: 6,
              color: "#817e7e"
            }
          }
        }
      }}
    
    />
    <Nav />
    <Header />
    </>
  );
}

export default App;
