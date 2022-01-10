import React from 'react';
import Tab from './components/Tab';
import './App.css';
import { HashRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Routes from './Routes';

function App() {
  return (
    <Router>

      <div className='app'>
        <div className='browser'>
          <Header/>

          <div className='viewport'>
            <Routes />
          </div>
        </div>
      </div>

    </Router>




    // <div className='app'>
    //   <div className='browser'>
    //     <div className='tabs'>
    //       <Tab>
    //         <div className='highдight' />
    //           <a>Home</a>
    //       </Tab>
    //       <Tab>
    //         <a>About</a>
    //       </Tab>
    //       <Tab>
    //         <a>Features</a>
    //       </Tab>
    //     </div>

    //     <div className='viewport'>Pages Go Here</div>
    //   </div>
    // </div>
  );
}

export default App;
