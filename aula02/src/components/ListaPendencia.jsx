import { FaUsers } from "react-icons/fa";
export default function ListaPendencia({ alunos }) {

    const resultado = alunos.map((aluno, index) => {
        if (aluno.pendencia === true) {
            return <tr key={index.matricula}>
                <td className="corpo-tabela">{aluno.matricula}</td>
                <td className="corpo-tabela-centro">{aluno.nome}</td>
                <td className="corpo-tabela">{aluno.media}</td>
            </tr>
        }
        return null
    })

    return (
        <>
            <div className="titulo-table">
            <FaUsers/>
            <h2>Lista de Alunos com Pendências</h2>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Matricula</th>
                        <th>Nome</th>
                        <th>Média</th>
                    </tr>
                </thead>
                <tbody>
                    {resultado}
                </tbody>
            </table>
        </>
    )
}