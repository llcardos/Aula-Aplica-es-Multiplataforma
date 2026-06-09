function Secao({ titulo, children }) {
	return (
		<section className="secao">
			<h3 className="secao-titulo">{titulo}</h3>
			<div>{children}</div>
		</section>
	)
}

export default Secao
