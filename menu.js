let opcao = ""

do{
  opcao = prompt(
  "Escolha uma das opções abaixo : "+
    "\n1. OP um" +
    "\n2. OP dois" +
    "\n3. OP três" +
    "\n4. OP quatro" + 
    "\n5. Encerrar" 
  ) 

  switch(opcao){
    case "1":
      alert(" Você escolheu a op 1")
      break
      case "2":
      alert(" Você escolheu a op 2")
      break
      case "3":
      alert(" Você escolheu a op 3")
      break
      case "4":
      alert(" Você escolheu a op 4")
      break
      case "5":
      alert("Você escoleu encerrar")
      alert("Encerrando...")
      break
      default:
        alert("Opção inválida")
   
  }

}while (opcao !== "5")