import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <h1>Mern LoL</h1>
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
