import "./App.css";
import { Websocket } from "./components/Websocket.tsx";
import { socket, WebsocketProvider } from "./contexts/WebsocketContext.tsx";

function App() {
  return (
    <WebsocketProvider value={socket}>
      <Websocket />
    </WebsocketProvider>
  );
}

export default App;
