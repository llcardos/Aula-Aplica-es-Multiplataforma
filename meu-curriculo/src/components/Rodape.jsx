function Rodape({ nome }) {
	const anoAtual = new Date().getFullYear()

	return (
		<footer className="rodape">
			<p>{nome}</p>
			<small>Currículo em React - {anoAtual}</small>
		</footer>
	)
}

export default Rodape
