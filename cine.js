//programa que simula um sistema de gerenciamento de um cinema (CineHouse)
//que possui um catálogo de filmes e que permite a locação de filmes. 

const catalog = require("./database/catalog.json")
var cinehouse = "DH"


// const catalog = [
//   {
//     codigo: 1,
//     titulo: 'Harry Potter e a Ordem da Fênix',
//     duracao: 2,
//     atores: ['Daniel Radcliffe', 'Emma Watson', 'Rupert Grint'],
//     anoDeLancamento: 2007,
//     emCartaz: false
//   },
//   {
//     codigo: 2,
//     titulo: 'O Massacre da Serra Elétrica',
//     duracao: 1.5,
//     atores: ['Cassio', 'Ygor Silva'],
//     anoDeLancamento: 2022,
//     emCartaz: true
//   },
// ]

function adicionarFilme(codigo, titulo, duracao, atores, anoDeLancamento, emCartaz) {
  catalog.push(
    {
    codigo,
    titulo,
    duracao,
    atores,
    anoDeLancamento,
    emCartaz
    }
  )
}
// = >
function buscarFilme(identificador) {
  const filme = catalog.find((objeto) => objeto.codigo == identificador)

  return filme
}

// = >
// !true = false
// !false = true
// const alterarStatusEmCartaz = (codigoDoFilme) => {
//   const filmeParaAlterar = catalog.find((filme) => filme.codigo == codigoDoFilme)
  
//   filmeParaAlterar.emCartaz = !filmeParaAlterar.emCartaz

//   return filmeParaAlterar
// }



function listarTodosOsFilmes() {
  // let listaFilmes = []

  for (let index = 0; index < catalog.length; index++) {
    // listaFilmes.push(catalog[index])
    console.log(catalog[index])
  }

  // return listaFilmes
}

function listarFilmesEmCartaz() {
  for (let index = 0; index < catalogo.length; index++) {
    catalog[index].emCartaz ? 
      console.log(catalog[index]) 
      : null
  }
}

function alterarStatusEmCartaz(codigo) {
  let filmeAlterado
  for (let index = 0; index < catalog.length; index++) {
    if (catalog[index].codigo == codigo) {
      catalog[index].emCartaz = !catalog[index].emCartaz
      filmeAlterado = catalog[index]
    }
  }

  return filmeAlterado
}

// !true = false
// !false = true


// console.log(listaDosFilmes)

// adicionarFilme(3, 'Lilo e Stitch', 1.5, ['Lilo', 'Stitch'], 2002, false)

// // // console.log(catalog)
// console.log('Seu filme é: ', buscarFilme(2))
// console.log('Seu filme alterado é: ', alterarStatusEmCartaz(1))

// // listarTodosOsFilmes();
// listarFilmesEmCartaz();








// const eMaior = (numero1, numero2) => (numero1 > numero2) ? 'É maior' : 'É menor'

// function eMaiorQue(numero1, numero2) {
//   if (numero1 > numero2) {
//     return 'É maior'
//   } else {
//     return 'É menor'
//   }
// }

// const eMaiorRodandoAfuncao = eMaior(1, 2)
// console.log(eMaiorRodandoAfuncao)

// const eMenor = 3 < 2 ? 'É menor' : null

// console.log(eMenor)

// let variavelVerdadeira = false;

// variavelVerdadeira = !variavelVerdadeira

// console.log(variavelVerdadeira)

// let stringUm = null; // false

// if (!stringUm) console.log('Não tem nada')
