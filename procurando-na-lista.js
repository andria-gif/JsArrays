const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];


const listaDeAlunosEMedias = [alunos, medias];

function exiebeNomeENota(aluno) {
          if (listaDeAlunosEMedias[0].includes(aluno)) {
                    //          const alunos = listaDeAlunosEMedias[0];
                    //          const medias = listaDeAlunosEMedias[1];

                    const [alunos, medias] = listaDeAlunosEMedias;

                    const indice = alunos.indexOf(aluno);

                    const mediaDoAluno = medias[indice];

                    console.log(`A média do aluno ${aluno} é ${mediaDoAluno}`);
          } else {
                    console.log("O aluno não foi encontrado");
          }
}
exiebeNomeENota("Juliana");
