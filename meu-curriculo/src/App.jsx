import { useState } from 'react'
import Header from './components/Header'
import Secao from './components/Secao'
import CardExperiencia from './components/CardExperiencia'
import Rodape from './components/Rodape'
import './App.css'

function App() {
  const [modoEscuro, setModoEscuro] = useState(false)
  const [mostrarContato, setMostrarContato] = useState(false)

  const perfil = {
    nome: 'Lucas Lopes Cardoso',
    titulo: 'Desenvolvedor Full Stack | React, Ruby on Rails, PHP',
    localizacao: 'Juiz de Fora, Minas Gerais, Brasil',
    resumo:
      'Desenvolvedor com experiência em React, PHP e Ruby on Rails, focado em interfaces modernas, componentes reutilizáveis, performance e consistência visual.'
  }

  const contatos = {
    email: 'lucas.businesss@yahoo.com',
    linkedin: 'https://www.linkedin.com/in/lcardoso-business',
    github: 'https://github.com/llcardos'
  }

  const experiencias = [
    {
      cargo: 'Desenvolvedor Front-End',
      empresa: 'Franquia Extranet',
      periodo: 'mai/2024 - Atual',
      descricao:
        'Responsável por soluções visuais modernas e otimizações na plataforma.',
      conquistas: [
        'Implementei modo escuro completo da plataforma.',
        'Criei ferramenta interna que acelerou em 18x a inclusão de ícones no menu.',
        'Desenvolvi componentes reutilizáveis para status e alertas.'
      ]
    },
    {
      cargo: 'Co-Founder',
      empresa: 'BetterIMG',
      periodo: 'set/2025 - jan/2026',
      descricao:
        'Projeto focado em transformar fotos de produtos com IA para imagens de qualidade profissional.'
    },
    {
      cargo: 'Analista de Redes Júnior Nível 1',
      empresa: 'Nívia Cristina Store',
      periodo: 'mar/2024 - jul/2024',
      descricao:
        'Atuação em suporte técnico de redes, diagnóstico de conectividade e estabilidade.'
    },
    {
      cargo: 'Motorista',
      empresa: 'Uber',
      periodo: 'out/2020 - mai/2024',
      descricao:
        'Atendimento ao cliente com foco em organização, disciplina e gestão de tempo.'
    },
    {
      cargo: 'Professor Particular',
      empresa: 'Lucas Monitoria',
      periodo: 'fev/2013 - dez/2021',
      descricao:
        'Ensino de Matemática para Ensino Médio e preparatórios militares, com metodologia personalizada.'
    }
  ]

  const formacao = [
    'UFRJ - Bacharelado em Engenharia (2020 - 2023)',
    'UniFatecie - Análise de Sistemas de Computação (2023 - 2024)',
    'Yes! - Inglês como Segundo Idioma (2013 - 2015)'
  ]

  const competencias = [
    'React',
    'Ruby on Rails',
    'PHP',
    'JavaScript',
    'Tailwind CSS',
    'MySQL',
    'Git e GitHub',
    'Figma'
  ]

  const idiomas = ['Inglês (Full Professional)', 'Espanhol (Limited Working)']

  return (
    <div className={`app ${modoEscuro ? 'dark' : ''}`}>
      <Header
        nome={perfil.nome}
        titulo={perfil.titulo}
        localizacao={perfil.localizacao}
        resumo={perfil.resumo}
        contatos={contatos}
        mostrarContato={mostrarContato}
        aoAlternarContato={() => setMostrarContato((atual) => !atual)}
        modoEscuro={modoEscuro}
        aoAlternarTema={() => setModoEscuro((atual) => !atual)}
      />

      <main className="conteudo-principal">
        <Secao titulo="Experiência Profissional">
          <div className="grade-cards">
            {experiencias.map((item) => (
              <CardExperiencia
                key={`${item.empresa}-${item.cargo}`}
                cargo={item.cargo}
                empresa={item.empresa}
                periodo={item.periodo}
                descricao={item.descricao}
                conquistas={item.conquistas}
              />
            ))}
          </div>
        </Secao>

        <Secao titulo="Formação Acadêmica">
          <ul className="lista-padrao">
            {formacao.map((curso) => (
              <li key={curso}>{curso}</li>
            ))}
          </ul>
        </Secao>

        <Secao titulo="Principais Competências">
          <ul className="lista-tags">
            {competencias.map((competencia) => (
              <li key={competencia}>{competencia}</li>
            ))}
          </ul>
        </Secao>

        <Secao titulo="Idiomas">
          <ul className="lista-padrao">
            {idiomas.map((idioma) => (
              <li key={idioma}>{idioma}</li>
            ))}
          </ul>
        </Secao>
      </main>

      <Rodape nome={perfil.nome} />
    </div>
  )
}

export default App
