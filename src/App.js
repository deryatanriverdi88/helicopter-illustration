import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="content">
      <div className="helicopter">
        <div className="propeller"></div>
        <div className="stick"></div>
        <div className="autorotation">
          <ul>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="airframe"></div>
        <div className="bottom"></div>
      </div>
      <div className="trees"></div>
      <div className="bench"></div>
      <div className="cloud"></div>
      </div>
      <svg viewBox="0 0 100 100">
     
      {/* <path d="M10 0 V100" stroke-width=".1" stroke="black"/>
      <path d="M20 0 V100" stroke-width=".1" stroke="black"/>
      <path d="M30 0 V100" stroke-width=".1" stroke="black"/>
      <path d="M40 0 V100" stroke-width=".1" stroke="black"/>
      <path d="M50 0 V100" stroke-width=".3" stroke="black"/>
      <path d="M60 0 V100" stroke-width=".1" stroke="black"/>
      <path d="M70 0 V100" stroke-width=".1" stroke="black"/>
      <path d="M80 0 V100" stroke-width=".1" stroke="black"/>
      <path d="M90 0 V100" stroke-width=".1" stroke="black"/>
      
      <path d="M0 10 H100" stroke-width=".1" stroke="black" />
      <path d="M0 20 H100" stroke-width=".1" stroke="black"/>
      <path d="M0 30 H100" stroke-width=".1" stroke="black"/>
      <path d="M0 40 H100" stroke-width=".1" stroke="black"/>
      <path d="M0 50 H100" stroke-width=".3" stroke="black"/>
      <path d="M0 60 H100" stroke-width=".1" stroke="black"/>
      <path d="M0 70 H100" stroke-width=".1" stroke="black"/>
      <path d="M0 80 H100" stroke-width=".1" stroke="black"/>
      <path d="M0 90 H100" stroke-width=".1" stroke="black"/>
     
      <text x="10" y="10" font-size="2">10</text>
      <text x="20" y="10" font-size="2">20</text>
      <text x="30" y="10" font-size="2">30</text>
      <text x="40" y="10" font-size="2">40</text>
      <text x="50" y="10" font-size="2">50</text>
      <text x="0" y="50" font-size="5"> X </text>
      <text x="60" y="10" font-size="2">60</text>
      <text x="70" y="10" font-size="2">70</text>
      <text x="80" y="10" font-size="2">80</text>
      <text x="90" y="10" font-size="2"> 90</text>

      <text x="52" y="5" font-size="5">Y</text>
      <text x="50" y="20" font-size="2"> 20</text>
      <text x="50" y="30" font-size="2"> 30</text>
      <text x="50" y="40" font-size="2"> 40</text>
      
      <text x="50" y="50" font-size="2"> 50</text>
      <text x="50" y="60" font-size="2"> 60</text>
      <text x="50" y="70" font-size="2"> 70</text>
      <text x="50" y="80" font-size="2"> 80</text>
      <text x="50" y="90" font-size="2"> 90</text>
      <text x="50" y="100" font-size="2"> 100</text> */}

      

      {/* First building, front*/}
      <polygon points="20 30, 30 30, 30 48, 20 48" stroke="#fb5" stroke-width=".3" fill="#fb5"></polygon>

      {/* First building, side*/}
      <polygon points="30.3 30, 34 30, 34 34, 30.3 34" stroke="#ea4" stroke-width=".3" fill="#ea4"></polygon>

      {/* First building, windows*/}
      {/* First building, first windows*/}
      <polygon points="22 32, 24 32, 24 35, 22 35" stroke="#eee" stroke-width=".3" fill="#acd"></polygon>
      <polyline points="22 33, 24 33" stroke="#eee" stroke-width=".3" fill="#eee"></polyline>

      {/* First building, second windows*/}
      <polygon points="26 32, 28 32, 28 35, 26 35" stroke="#eee" stroke-width=".3" fill="#acd"></polygon>
      <polyline points="26 33, 28 33" stroke="#eee" stroke-width=".3" fill="#eee"></polyline>

      {/* First building, third windows*/}
      <polygon points="22 37, 24 37, 24 40, 22 40" stroke="#eee" stroke-width=".3" fill="#acd"></polygon>
      <polyline points="22 38, 24 38" stroke="#eee" stroke-width=".3" fill="#eee"></polyline>

      {/* First building, fourth windows*/}
      <polygon points="26 37, 28 37, 28 40, 26 40 " stroke="#eee" stroke-width=".3" fill="#acd"></polygon>
      <polyline points="26 38, 28 38" stroke="#eee" stroke-width=".3" fill="#eee"></polyline>

      {/* First building, fifth windows*/}
      
      <polygon points="22 42, 24 42, 24 45, 22 45" stroke="#eee" stroke-width=".3" fill="#acd"></polygon>
      <polyline points="22 43, 24 43" stroke="#eee" stroke-width=".3" fill="#eee"></polyline>

      {/* First building, sixth windows*/}

      <polygon points="26 42, 28 42, 28 45, 26 45" stroke="#eee" stroke-width=".3" fill="#acd"></polygon>
      <polyline points="26 43, 28 43" stroke="#eee" stroke-width=".3" fill="#eee"></polyline>

      {/* First building, bottom*/}
      <polygon points="20 48, 30 48, 30 50, 20 50" stroke="#fda" stroke-width=".3" fill="#fda"></polygon>


      {/* Second building, front */}
      <polygon points="27 34, 36 34, 36 48, 27 48" stroke="#fff" stroke-width=".3" fill="#fff"></polygon>

      {/* Second building, windows */}
      {/* Second building, first window */}
      <polygon points="28 36, 35 36, 35 39, 28 39" stroke="#eee" stroke-width=".5" fill="#acd"></polygon>

      {/* Second building, second window */}
      <polygon points="28 40, 35 40, 35 43, 28 43" stroke="#eee" stroke-width=".5" fill="#acd"></polygon>

      {/* Second building, third window */}
      <polygon points="28 44, 35 44, 35 47, 28 47" stroke="#eee" stroke-width=".5" fill="#acd"></polygon>

      {/* Second building, side */}
      <polygon points="36 34, 38 34, 38 48, 36 48" stroke="#eee" stroke-width=".3" fill="#eee"></polygon>

      {/* Second building, front-bottom */}
      <polygon points="27 48, 36 48, 36 50, 27 50 " stroke="#bbb" stroke-width=".3" fill="#bbb"></polygon>

      {/* Second building, side-bottom */}
      <polygon points="36 48, 38 48, 38 50 36 50" stroke="#999" stroke-width=".3" fill="#999"></polygon>


       {/* Third building, front*/}
       <polygon points="38 20, 50 20, 50 50, 38 50" stroke="#fcc" stroke-width=".3" fill="#fcc"></polygon>

      {/* Third building, windows */}
      {/* Third building, first window */}
      <polygon points="40 22, 43 22, 43 26, 40 26" stroke="#eee" stroke-width=".5" fill="#acd"></polygon>

      {/* Third building, second window */}
      <polygon points="45 22, 48 22, 48 26, 45 26" stroke="#eee" stroke-width=".5" fill="#acd"></polygon>

      {/* Third building, third window */}
      <polygon points="40 28, 43 28, 43 32, 40 32" stroke="#eee" stroke-width=".5" fill="#acd"></polygon>

      {/* Third building, fourth window */}
      <polygon points="45 28, 48 28, 48 32, 45 32  " stroke="#eee" stroke-width=".5" fill="#acd"></polygon>

      {/* Third building, fifth window */}
      <polygon points="40 34, 43 34, 43 38, 40 38" stroke="#eee" stroke-width=".5" fill="#acd"></polygon>

       {/* Third building, sixth window */}
       <polygon points="45 34, 48 34, 48 38, 45 38" stroke="#eee" stroke-width=".5" fill="#acd"></polygon>

       {/* Third building, seventh window */}
       <polygon points="40 40, 43 40, 43 44, 40 44" stroke="#eee" stroke-width=".5" fill="#acd"></polygon>

       {/* Third building, eighth window */}
       <polygon points="45 40, 48 40, 48 44, 45 44" stroke="#eee" stroke-width=".5" fill="#acd"></polygon>

      {/* Third building, nineth window */}
      
      <polygon points="39 46, 43 46, 43 48, 39 48" stroke="#f87" stroke-width=".5" fill="#f87"></polygon>
      <polyline points="38.8 46, 43.2 46" stroke="#d76" stroke-width=".5" fill="#d76"></polyline>

      {/* Third building, tenth window */}
      <polygon points="45 46, 49 46, 49 48, 45 48" stroke="#f87" stroke-width=".5" fill="#f87"></polygon>
      <polyline points="44.8 46, 49.2 46" stroke="#d76" stroke-width=".5" fill="#d76"></polyline>

      {/* Third building, side */}
      <polygon points="50 20, 54 20, 54 50, 50 50" stroke="#dba" stroke-width=".3" fill="#dba"></polygon>


      {/* Fourth building, front*/}
      <polygon points="52 38, 60 38, 60 48, 52 48" stroke="#8cc" stroke-width=".3" fill="#8cc"></polygon>

      {/* Fourth building, side */}
      <polygon points="60 38, 63 38, 63 48, 60 48" stroke="#7bb" stroke-width=".3" fill="#7bb"></polygon>

      {/* Fourth building, windows */}
      {/* Fourth building, first window */}
      <polygon points="53 39, 59 39, 59 42, 53 42 " stroke="#eee" stroke-width=".5" fill="#acd"></polygon>
      <polyline points="56 39, 56 42" stroke="#eee" stroke-width=".4" fill="#eee"></polyline>

      {/* Fourth building, second window */}
      <polygon points="53 44, 59 44, 59 47, 53 47" stroke="#eee" stroke-width=".5" fill="#acd"></polygon>
      <polyline points="56 44, 56 47" stroke="#eee" stroke-width=".4" fill="#eee"></polyline>

      {/* Fourth building, front-bottom */}
      <polygon points="52 48, 60 48, 60 50, 52 50" stroke="#fcb" stroke-width=".3" fill="#fcb"></polygon>

      {/* Fourth building, side-bottom */}
      <polygon points="60 48, 63 48, 63 50, 60 50 " stroke="#dba" stroke-width=".3" fill="#dba"></polygon>
      </svg>
    </div>
  );
}

export default App;
