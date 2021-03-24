/* Função Validar */
function validar() {
    // pegando o valor do nome pelos names
    var email = document.getElementById("email");
    var senha = document.getElementById("senha");

    if (email != null && senha != null) {
        document.getElementById("entrar")
        .classList
        .add("active")
    }

    else {
        document.getElementById("entrar")
        .classList
        .remove("active")

    }



    alert("Formulário enviado!");
    // envia o formulário
    //formulario.submit();
  }