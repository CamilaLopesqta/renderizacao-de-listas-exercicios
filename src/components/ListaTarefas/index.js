import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
  LinhaHorizontal,
} from "./styled";
import bin from "../../assets/bin.png";
import TarefasRealizadas from "./TarefasRealizadas";

const listaDeTarefasInicial = [
  {
    titulo: "Fazer exercícios",
  },
  {
    titulo: "Estudar React",
  },
];

export function ListaTarefas() {
  const [lista, setLista] = useState(listaDeTarefasInicial);
  const [novaTarefa, setNovaTarefa] = useState({ titulo: "" });
  const [tarefaRealizada, setTarefaRealizada] = useState([]);

  const onChangeTarefa = (event) => {
    const tarefa = {
      titulo: event.target.value,
    };

    setNovaTarefa(tarefa);
  };

  const adicionaTarefa = () => {
    const novaLista = [...lista, novaTarefa];
    setLista(novaLista);
    setNovaTarefa({ titulo: "" });
  };

  const removeTarefa = (tarefaParaRemover) => {
    const listaFiltrada = lista.filter(
      (tarefa) => tarefa.titulo !== tarefaParaRemover.titulo
    );
    setLista(listaFiltrada);
    setTarefaRealizada([...tarefaRealizada, tarefaParaRemover]);
  };
  console.log();
  const usarEnter = (event) => {
    if (event.key === "Enter") {
      adicionaTarefa();
    }
  };

  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa.titulo}
          onChange={onChangeTarefa}
          onKeyDown={usarEnter}
        />
        <AddTaskButton onClick={adicionaTarefa}>Adicionar</AddTaskButton>
      </InputContainer>
      <ListaContainer>
        <ul>
          {lista.map((tarefa, index) => {
            return (
              <Tarefa key={index}>
                <p>{tarefa.titulo}</p>
                <RemoveButton onClick={() => removeTarefa(tarefa)}>
                  <img src={bin} alt="" width="16px" />
                </RemoveButton>
              </Tarefa>
            );
          })}
        </ul>
        <TarefasRealizadas
          tarefaRealizada={tarefaRealizada}
          setTarefaRealizada={setTarefaRealizada}
          removeTarefa={removeTarefa}
        />
      </ListaContainer>
      <LinhaHorizontal />
    </ListaTarefasContainer>
  );
}
