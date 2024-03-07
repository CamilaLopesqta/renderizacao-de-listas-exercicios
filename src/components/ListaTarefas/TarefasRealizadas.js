import React from "react";
import { TarefaFeita } from "./styled";

function TarefasRealizadas({ tarefaRealizada }) {
  return (
    <div>
      <h2>Lista de tarefas concluídas</h2>
      <ul>
        {tarefaRealizada.map((tarefa, index) => {
          return (
            <TarefaFeita key={index}>
              <p>{tarefa.titulo}</p>
            </TarefaFeita>
          );
        })}
      </ul>
    </div>
  );
}

export default TarefasRealizadas;
