function Header({nome,titulo,localizacao,resumo,contatos,mostrarContato,aoAlternarContato,modoEscuro,aoAlternarTema}) {
	return (
		<header className="cabecalho">
			<p className="cabecalho-localizacao">{localizacao}</p>
			<h1>{nome}</h1>
			<h2 className="cabecalho-titulo">{titulo}</h2>
			<p className="cabecalho-resumo">{resumo}</p>

			<div className="cabecalho-acoes">
				<button type="button" onClick={aoAlternarContato}>
					{mostrarContato ? 'Ocultar contato' : 'Mostrar contato'}
				</button>
				<button type="button" onClick={aoAlternarTema}>
					{modoEscuro ? 'Modo claro' : 'Modo escuro'}
				</button>
			</div>

			{mostrarContato && (
				<ul className="lista-contato">
					<li>
						<strong>Email:</strong> {contatos.email}
					</li>
					<li>
						<strong>LinkedIn:</strong>{' '}
						<a href={contatos.linkedin} target="_blank" rel="noreferrer">
							{contatos.linkedin}
						</a>
					</li>
					<li>
						<strong>GitHub:</strong>{' '}
						<a href={contatos.github} target="_blank" rel="noreferrer">
							{contatos.github}
						</a>
					</li>
				</ul>
			)}
		</header>
	)
}

export default Header
