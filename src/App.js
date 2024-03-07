import { ListaTarefas } from "./components/ListaTarefas";
import TodoApp from "./components/ListaTarefas/TarefasRealizadas";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <div>
      <GlobalStyle />
      <ListaTarefas />
      {/* <TarefasRealizadas /> */}
    </div>
  );
}

export default App;
