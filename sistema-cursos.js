let listaCursos = []

class Curso {
  constructor(id, titulo, descricao, imagem, nomeProf, listaAulas) {
    this.id = id;
    this.titulo = titulo;
    this.descricao = descricao;
    this.imagem = imagem;
    this.nomeProf = nomeProf;
    this.listaAulas = listaAulas;
  }
}

function criarCurso(id, titulo, descricao, imagem, nomeProf, listaAulas) {
  let curso = new Curso();
  listaCursos.push(curso);
}

function exibirCurso(id) {
  console.log(Curso);
}

function atualizarCurso(id, titulo, descricao, imagem, nomeProf, listaAulas) {
  let curso = listaCursos();
  listaCursos.push(curso);
}

function deletarCurso(id) {
  let curso = listaCursos();
  listaCursos.pop(curso);
}

function listarCursos() {
  console.log(listaCursos);
}

criarCurso(1, "primeiro curso", "este é o primeiro curso", "/imagem-curso-1.jpg", "Professor 1", "Aula 01\nAula 02")
criarCurso(2, "segundo curso", "este é o segundo curso", "/imagem-curso-2.jpg", "Professor 2", "Aula 01\nAula 02")
criarCurso(3, "terceiro curso", "este é o terceiro curso", "/imagem-curso-3.jpg", "Professor 3", "Aula 01\nAula 02")
exibirCurso(1)
atualizarCurso(2)
deletarCurso(3)
listarCursos()