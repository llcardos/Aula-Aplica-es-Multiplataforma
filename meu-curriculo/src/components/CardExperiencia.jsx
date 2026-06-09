function CardExperiencia({ cargo, empresa, periodo, descricao, conquistas }) {
  return (
    <article className="card-experiencia">
      <h4>{cargo}</h4>
      <p className="card-empresa">{empresa}</p>
      <p className="card-periodo">{periodo}</p>
      <p>{descricao}</p>

      {conquistas?.length > 0 && (
        <ul className="lista-conquistas">
          {conquistas.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </article>
  )
}

export default CardExperiencia
