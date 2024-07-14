// labscore pt3 - Exercício 2
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('cep').addEventListener('blur', function() {
      const cep = this.value.replace(/\D/g, '');
      if (cep.length === 8) {
          fetch(`https://viacep.com.br/ws/${cep}/json/`)
              .then(response => response.json())
              .then(data => {
                  if (!data.erro) {
                      document.getElementById('rua').value = data.logradouro;
                      document.getElementById('cidade').value = data.localidade;
                      document.getElementById('estado').value = data.uf;
                  } else {
                      alert('CEP não encontrado!');
                  }
              })
              .catch(error => console.error('Erro ao buscar o CEP:', error));
      } else {
          alert('CEP inválido!');
      }
    });
    });
    
    // labscore pt3 - Exercício 3
    
    function saveLocalStorage(identification){
      let campo = document.getElementById(identification);
      console.log(campo.id )
      localStorage.setItem(identification, JSON.stringify(campo.value));
    }
    
    function saveAllInfosLocalStorage(){
    saveLocalStorage("nome");
    saveLocalStorage("idade");
    saveLocalStorage("serie");
    saveLocalStorage("escola");
    saveLocalStorage("materia-favorita");
    saveLocalStorage("cep");
    saveLocalStorage("rua");
    saveLocalStorage("cidade");
    saveLocalStorage("estado");
    window.location.href = "index.html";
    }

    // function saveAllInfosLocalStorage() {
    //     // Coletar dados do formulário
    //     let aluno = {
    //       nome: document.getElementById("nome").value,
    //       idade: document.getElementById("idade").value,
    //       serie: document.getElementById("serie").value,
    //       escola: document.getElementById("escola").value,
    //       materiaFavorita: document.getElementById("materia-favorita").value,
    //       cep: document.getElementById("cep").value,
    //       rua: document.getElementById("rua").value,
    //       cidade: document.getElementById("cidade").value,
    //       estado: document.getElementById("estado").value
    //     };
      
    //     // Salvar no localStorage
    //     localStorage.setItem("aluno", JSON.stringify(aluno));
      
    //     // Redirecionar para a página de home do aluno
    //     window.location.href = "index.html";
    //   }