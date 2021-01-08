import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      
        <button onClick={()=>{
          let ws = new WebSocket('ws://127.0.0.1:8080', 'echo-protocol');
          ws.onopen = function (event) {
            ws.send("Voici un texte que le serveur attend de recevoir dès que possible !");
          };
          ws.onerror = (e)=>{
            console.error(e)
          }
          ws.onmessage = (m) => {
            console.log('received')
            console.log(m)
          }
        }
        } >Coucou la websocket </button>
    </div>
  );
}

// <input type="range" min="0" max="10" step=".5" onChange="f_onChange"/>


// f_onChange =function(e) {
//   console.log('hello', e.target.value)
// }


export default App;
