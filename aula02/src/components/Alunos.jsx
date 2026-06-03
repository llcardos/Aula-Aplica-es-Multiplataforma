import { FaUsers } from "react-icons/fa";
export default function Alunos({ alunos }) {

    return (
        <>
            <div className="titulo-table">
                <FaUsers />
                <h2>Lista de Alunos</h2>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Matrícula</th>
                        <th>Nome</th>
                        <th>Média</th>
                        <th>Pendências</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        alunos.map(aluno => (
                            <tr key={aluno.matricula}>
                                <td className="corpo-tabela">{aluno.matricula}</td>
                                <td className="corpo-tabela-centro">{aluno.nome}</td>
                                <td className="corpo-tabela">{aluno.media}</td>
                                <td className="corpo-tabela-centro">
                                    <span className={`badge ${aluno.pendencia ? 'badge-danger' : 'badge-success'}`}>
                                        {aluno.pendencia ? 'Sim' : 'Não'}
                                    </span>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}