document.getElementById("botao enviar").addEventListener("click, validaFormulario")

function validaFormulario(){
  if(document.getElementById ("nome").value != "" && 
    document.getElementbyId ("email").value != "" && 
    document.getElementbyId("telefone").value!= ""){
      alert("Prontinho! Você receberá novidades no seu email.")
    }else{
      alert("Por favor, preencha os campos nome e email!")
    }
}

