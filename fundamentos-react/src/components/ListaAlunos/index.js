import {Aluno} from "../Aluno";

const alunos = [
  { id: 1, nome: "Maísa", media: 10 },
  { id: 2, nome: "Julia", media: 8.5 },
  { id: 3, nome: "Joana", media: 8 },
];
export function ListaAlunos() {
  return (
    <>
      {
        alunos.map(aluno => {
          return (
            <Aluno key={aluno.id} nome={aluno.nome} media={aluno.media}/>
          )
        })
      }
    </>
  );
}