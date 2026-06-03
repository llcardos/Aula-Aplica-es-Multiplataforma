import { IoIosAlert } from "react-icons/io";
import '../styles/ContarPendencias.css'


export default function ContarPendencias({ alunos }) {

    const totalPendencia = alunos.reduce((total, aluno) => {
        return aluno.pendencia ? total + 1 : total
    }, 0)

    return (
        <div className="total-pendencia">
            <div className="info">
                <span className="label">Resumo acadêmico</span>
                <h2>
                    <IoIosAlert />
                    Total de Pendências
                </h2>
            </div>
            <div className="count-badge">{totalPendencia}</div>
        </div>
    )

}