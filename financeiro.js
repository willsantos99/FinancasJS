let saldo = prompt("Informe seu saldo inicial disponível")
saldo =  parseFloat(saldo)
let opcao = ""

do{
  opcao = prompt("Saldo disponível :"+ "R$"+saldo +
  "\nEscolha uma das opções abaixo :"+
  "\n1. Adicionar"+
  "\n2. Remover"+
  "\n3. Sair"
  )
  switch(opcao){
    case "1":
      saldo += parseFloat(prompt("Quanto você deseja adicionar ao saldo ?"))
      break
    
     case "2":
      saldo -= parseFloat(prompt("Quanto do valor você deseja resgatar?"))
      break
    
      case "3":
      alert("Saindo. ..")
      break
  }
}while(opcao !== "3")