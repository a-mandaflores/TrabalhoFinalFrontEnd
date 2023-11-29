async function carregarDados(caminho) {
  try {
      const response = await fetch(caminho);
      const dados = await response.json();
      return dados;
  } catch (error) {
      console.error('Erro ao carregar dados:', error);
      throw error; 
  }
}

async function enviarAdm() {
  const usuario = document.getElementById('usuario').value;
  const senha = document.getElementById('senha').value;
  const arquivos = 'bd.json'; 
  try {
      const caminhoArquivo = arquivos;
      const dados = await carregarDados(caminhoArquivo);

      if (dados.email === usuario && dados.senha === senha) {
          window.location.href = 'index.html';
      } else {
          alert('Usuário ou senha incorretos');
      }
  } catch (error) {
      console.log(error)
  }
}


function enviarDados(){

    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const mensagem = document.getElementById('mensagem').value

    var dados = {
        nome,
        email,
        mensagem
    }

    localStorage.setItem('dadosContato', JSON.stringify(dados));

    window.location.href = 'index3.html'                 


}

function dadosTabela(){
    var dadosArmazenados = localStorage.getItem('dadosContato')

    if(dadosArmazenados){

        var dados = JSON.parse(dadosArmazenados)

       // Verificar se o elemento com o ID 'novoContato' existe
        var novoContatoElemento = document.getElementById('novoContato');

        if (novoContatoElemento) {
        // Se o elemento existe, definir o conteúdo interno
        novoContatoElemento.innerHTML = '<td>' + dados.nome + '</td>' + '<td>' + dados.email + '</td>' + '<td>' + dados.mensagem + '</td>';
        } else {
        console.error('Elemento com ID "novoContato" não encontrado no DOM.');
        }


    }else{
        document.getElementById('novoContato').textContent = '<p>Nenhum contato recebido</p>'
        console.log('seuzebra')
        console.log('deu errado ')
    }
}

if (window.location.pathname.includes("index3.html")) {
    dadosTabela();
}