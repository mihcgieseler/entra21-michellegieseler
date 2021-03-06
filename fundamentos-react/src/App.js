import './App.css';
import { ListaAlunos } from './components/ListaAlunos';
import { ComProps } from './components/ComProps';
import { PrimeiroComponente } from './components/PrimeiroComponente';
import { Familia } from './components/Familia';
import { MembroFamilia } from './components/MembroFamilia';
import { Card } from './components/Card';
import { ParOuImpar } from './components/ParOuImpar';
import { Notificacao } from './components/Notificacao';
import { ManipulandoEventos } from './components/ManipulandoEventos';
import { Relogio } from './components/Relogio';
import { ValorAleatorio } from './components/ValorAleatorio';
import { ComponentesControlados } from './components/ComponentesControlados';
import { Contador } from './components/Contador';


function App() {
  return (
    <div className="App">
      <h1>Olá Mundo!</h1>
      <div className="cards">
        <Card titulo="Primeiro componente" cor="#90EE90">
          <PrimeiroComponente />
        </Card>
        <Card titulo="Componente com props">
          <ComProps mensagem="Estou sendo enviado pelas props" />
          <ComProps mensagem="Outra mensagem..." />
        </Card>
        <Card titulo="Lista de alunos" cor="#D1ACFF">
          <ListaAlunos />
        </Card>
        <Card titulo="Children" cor="#C4D0FB">
          <Familia sobrenome="da Silva">
            <MembroFamilia nome="Ana" />
            <MembroFamilia nome="Marcos" />
            <MembroFamilia nome="José" />
          </Familia>
        </Card>
        <Card titulo= "Renderização condicional" cor="#D1E7FE">
          <ParOuImpar numero={10}/>
          <ParOuImpar numero={5}/>
          <hr />
          <Notificacao mensagens={["Oi!"]} />
        </Card>
        <Card titulo="Manipulando eventos" cor="98756">
          <ManipulandoEventos />
        </Card>
        <Card titulo="State">
          <Relogio />
          <hr />
          <ValorAleatorio max={100}/>
        </Card>
        <Card titulo="Componente Controlado">
        <ComponentesControlados />
        </Card>
        <Card titulo="State Assíncrono">
          <Contador />
        </Card>
      </div>
    </div>
  );
}

export default App;

