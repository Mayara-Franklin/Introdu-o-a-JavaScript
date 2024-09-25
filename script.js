function solicitarDados() {
    // Solicita o nome do usuario
    let nome = prompt("Qual é o seu nome?");

    // Solicita a idade do usuario
    let idade = prompt("Qual é a sua idade?");

    // Exibe a saudação 
    alert( "Olá, " + nome + "! Você tem " + idade + " anos.")

    // Mostra os dados no console
    console.log("Nome do usuário:", nome);
    console.log("Idade do usuário", idade); 
}