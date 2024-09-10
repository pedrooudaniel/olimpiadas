function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById ("campo-pesquisa").value;

    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um atleta ou esporte</p>"
      return
    }

    campoPesquisa = campoPesquisa.toLowerCase ()
  
    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";


    // Itera sobre cada item de dados da pesquisa
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase ()
      descricao = dado.descricao.toLowerCase ()
      tags = dado.tags.toLowerCase()
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
          // cria um novo elemento
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais informações</a>
          <p><a href=${dado.link2} target="_blank">Instagram</a></p>
        </div>
      `;
      }
          console.log(dado.titulo.includes ("campoPesquisa"))
      // Concatena HTML para criar um novo item de resultado
      }

      if (!resultados) {
          resultados = "<p>Nada foi encontrado</p>"
      }
  
    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
  }
//console.log(dados);

