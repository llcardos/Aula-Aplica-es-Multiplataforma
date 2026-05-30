class Dev {
    constructor(nome, sobrenome, bairro, cor, filme, musica, livro, linguagem, time, possuiPet) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.bairro = bairro;
        this.cor = cor;
        this.filme = filme;
        this.musica = musica;
        this.livro = livro;
        this.linguagem = linguagem;
        this.time = time;
        this.possuiPet = possuiPet;
    }

}
const dev1 = new Dev('Lucas', 'Lopes Cardoso', 'Vila Felipe', 'Azul', 'As branquelas', 'Morango do Nordeste', 'A droga do amor', 'Ruby on Rails', 'Flamengo', false)

// console.log(dev1)

function showDev(nome, sobrenome, bairro, cor, filme, musica, livro, linguagem, time, possuiPet) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.bairro = bairro;
        this.cor = cor;
        this.filme = filme;
        this.musica = musica;
        this.livro = livro;
        this.linguagem = linguagem;
        this.time = time;
        this.possuiPet = possuiPet;
}

const dev2 = new showDev('Lucassss', 'Lopes Cardoso', 'Vila Felipe', 'Azul', 'As branquelas', 'Morango do Nordeste', 'A droga do amor', 'Ruby on Rails', 'Flamengo', false)

// console.log(dev2)

function habilitado(anoAtual, anoNascimento) {
    const idade = anoAtual - anoNascimento;
    let elegivel = false
    if (idade >= 18) {
        elegivel = true
        // console.log('Você é elegível para tirar a habilitação!')
        return 'elegivel'
    } else {
        // console.log('Você não é elegível para tirar a habilitação!')
        return 'não elegível'
    }
}

// habilitado(2024, 2000)
// console.log(habilitado(2024, 2000))

function checar(nota1, nota2, frequencia) {
    const media = (nota1 + nota2) / 2;
    let resultado = 'Reprovado';
    if (media >= 8 && frequencia >= 75) {
        resultado = 'Aprovado';
    } else if (media >= 5 && media < 8 && frequencia >= 75) {
        resultado = 'Recuperação';
    }
    return resultado;
}

// console.log(checar(7, 9, 80))
// console.log(checar(4, 6, 80))
// console.log(checar(4, 6, 70))

// apenas uma constante
const a = 1

// um objeto simples chave valor
const b = {
    x: 1,
    y: 2
}

// um array de objetos 
const c = [
    {
        x: 1,
        y: 2
    },
    {
        z: 3,
        w: 4
    }
]
const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, a, b, c]
const dobro = lista.map(item => {
    if (typeof item === 'number'){
        return item * 2
    } else if (typeof item === 'object') {
        if (Array.isArray(item)) {
            return item.map(subItem => {
                const newArray = {};
                for (const key in subItem) {
                    newArray[key] = `objeto simples - ${subItem[key] * 2}`;
                }
                return newArray;
            });
        } else {
            const newArray = {};
            for (const key in item) {
                newArray[key] = `array de objetos - ${item[key] * 2}`;
            }
            return newArray;
        }
    }
});
// console.log(dobro)

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const caracteristica = array.map( item => item % 2 === 0 ? 'par' : 'ímpar')
// console.log(caracteristica)

const subsequentes = array.map(item => item < 5 ? item + 1 : item)
// console.log(subsequentes)

const alunos = [
    {
        matricula: 1,
        nome: 'Felippe',
        media: 100,
        pendencia: true
    },
    {
        matricula: 2,
        nome: 'Elisa',
        time: 'Botafogo',
        pendencia: false
    }
]
const resultado = alunos.map(aluno => {
    if(aluno.pendencia === false){
        return aluno
    }
    return null
})

console.log(resultado)