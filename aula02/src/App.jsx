
import './App.css'
import Alunos from './components/Alunos'
import ListaPendencia from './components/ListaPendencia'
import { alunos } from './data/alunos'
import ContarPendencias from './components/ContarPendencias'

function App() {

    return (
        <>
            <h1 className="titulo-pagina">Saracuruna UpSkills</h1>
            <div className="card">
                <Alunos alunos={alunos} />
            </div>
            <div className="card">
                <ListaPendencia alunos={alunos} />
            </div>
            <ContarPendencias alunos={alunos} />
        </>
    )
}

export default App