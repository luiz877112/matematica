let nomeEstudante;

while (!nomeEstudante || nomeEstudante.trim() === '') {
    nomeEstudante = prompt("Olá, estudante! Por favor, escreva seu nome:");

    if (!nomeEstudante || nomeEstudante.trim() === '') {
        alert("Você não colocou seu nome. Por favor, digite seu nome.");
    }
}

alert(`Olá, ${nomeEstudante}! Vamos começar a prova?`);

let nota = 0

let pergunta1 = prompt("1. Qual é a solução da equação quadrática ( x^2 - 5x + 6 = 0 )?\n" +
"\n1) ( x = 1 ) ou ( x = 6 )" +
"\n2) ( x = 2 ) ou ( x = 3 )" +
"\n3) ( x = -2 ) ou ( x = -3 )" +
"\n4) ( x = 0 ) ou ( x = 5 )" +
"\n5) ( x = 1 ) ou ( x = 5 )"
)

switch(pergunta1){
    case "1":
        alert("Resposta incorreta.")
        break
        case"2":
        alert("Resposta correta, Parabéns!")
        break
        case "3":
            alert("Resposta incorreta.")
            break
            case "4":
                alert("Resposta incorreta.")
                break
                case "5":
                    alert("Resposta incorreta.")
                    break
                    default: 
                    alert("Resposta inválida, questão anulada.")
                    break
}

if(pergunta1 == "2"){
    nota++
}

let pergunta2 = prompt("2. Qual é a derivada de ( f(x) = 3x^2 + 2x - 5 )\n" +
"\n1) ( 6x + 2 )" +
"\n2) ( 6x - 2 )" +
"\n3) ( 3x + 2 )" +
"\n4) ( 3x - 2 )" +
"\n5) ( 6x + 5 )"
)

switch(pergunta2){
    case "1":
        alert("Resposta correta, Parabéns!")
        break
        case"2":
        alert("Resposta incorreta.")
        break
        case "3":
            alert("Resposta incorreta.")
            break
            case "4":
                alert("Resposta incorreta.")
                break
                case "5":
                    alert("Resposta incorreta.")
                    break
                    default: 
                    alert("Resposta inválida, questão anulada.")
                    break
}

if(pergunta2 == "1"){
    nota++
}

let pergunta3 = prompt("3. Qual é o valor de ( \sin(30^\circ) )?\n" +
"\n1) ( \frac{\sqrt{3}}{2} )" +
"\n2) ( \frac{1}{2} )" +
"\n3)  ( \frac{\sqrt{2}}{2} )" +
"\n4)  ( 1 )" +
"\n5) ( 0 )"
)

switch(pergunta3){
    case "1":
        alert("Resposta incorreta.")
        break
        case"2":
        alert("Resposta correta, Parabéns!")
        break
        case "3":
            alert("Resposta incorreta.")
            break
            case "4":
                alert("Resposta incorreta.")
                break
                case "5":
                    alert("Resposta incorreta.")
                    break
                    default: 
                    alert("Resposta inválida, questão anulada.")
                    break
}

if(pergunta3 == "2"){
    nota++
}

let pergunta4 = prompt("4. Qual é a integral de ( \int (2x + 3) , dx )?\n" +
"\n1) ( x^2 + 3x + C )" +
"\n2) ( x^2 + 3x )" +
"\n3) ( 2x^2 + 3x + C )" +
"\n4) ( x^2 + 3 )" +
"\n5) ( 2x^2 + 3 )"
)

switch(pergunta4){
    case "1":
        alert("Resposta incorreta.")
        break
        case"2":
        alert("Resposta incorreta.")
        break
        case "3":
            alert("Resposta correta, Parabéns!")
            break
            case "4":
                alert("Resposta incorreta.")
                break
                case "5":
                    alert("Resposta incorreta.")
                    break
                    default: 
                    alert("Resposta inválida, questão anulada.")
                    break
}

if(pergunta4 == "3"){
    nota++
}

let pergunta5 = prompt("5. Qual é a soma dos ângulos internos de um triângulo?\n" +
"\n1) ( 90^\circ )" +
"\n2) ( 180^\circ )" + 
"\n3) ( 270^\circ )" +
"\n4) ( 360^\circ )" +
"\n5) ( 540^\circ )"
)

switch(pergunta5){
    case "1":
        alert("Resposta incorreta.")
        break
        case"2":
        alert("Resposta correta, Parabéns!")
        break
        case "3":
            alert("Resposta incorreta.")
            break
            case "4":
                alert("Resposta incorreta.")
                break
                case "5":
                    alert("Resposta incorreta.")
                    break
                    default: 
                    alert("Resposta inválida, questão anulada.")
                    break
}

if(pergunta5 == "2"){
    nota++
}

let pergunta6 = prompt("6. Qual é a solução do sistema de equações ( \begin{cases} 2x + y = 5 \ x - y = 1 \end{cases} )?\n" +
    "\n1) ( x = 1, y = 3 )" +
    "\n2) ( x = 2, y = 1 )" + 
    "\n3)  (x = 3, y = 1 )" +
    "\n4) ( x = 2, y = 2 )" +
    "\n5) ( x = 1, y = 2 )"
    )
    
    switch(pergunta6){
        case "1":
            alert("Resposta incorreta.")
            break
            case"2":
            alert("Resposta correta, Parabéns!")
            break
            case "3":
                alert("Resposta incorreta.")
                break
                case "4":
                    alert("Resposta incorreta.")
                    break
                    case "5":
                        alert("Resposta incorreta.")
                        break
                        default: 
                        alert("Resposta inválida, questão anulada.")
                        break
    }
    
    if(pergunta6 == "2"){
        nota++
    }

    let pergunta7 = prompt("7. Qual é o valor de ( \log_{10}(1000) )?\n" +
    "\n1) 1" +
    "\n2) 2" + 
    "\n3) 3" +
    "\n4) 4" +
    "\n5) 5"
    )
    
    switch(pergunta7){
        case "1":
            alert("Resposta incorreta.")
            break
            case"2":
            alert("Resposta incorreta.")
            break
            case "3":
                alert("Resposta correta, Parabéns!")
                break
                case "4":
                    alert("Resposta incorreta.")
                    break
                    case "5":
                        alert("Resposta incorreta.")
                        break
                        default: 
                        alert("Resposta inválida, questão anulada.")
                        break
    }
    
    if(pergunta7 == "3"){
        nota++
    }

    let pergunta8 = prompt("8. Qual é a fórmula do perímetro de um círculo de raio ( r )?\n" +
        "\n1) ( 2\pi r )" + 
        "\n2) ( \pi r^2 )" + 
        "\n3) ( 2r )" +
        "\n4) ( \pi r )" +
        "\n5) ( 4\pi r )"
        )
        
        switch(pergunta8){
            case "1":
                alert("Resposta correta, Parabéns!")
                break
                case"2":
                alert("Resposta incorreta.")
                break
                case "3":
                    alert("Resposta incorreta.")
                    break
                    case "4":
                        alert("Resposta incorreta.")
                        break
                        case "5":
                            alert("Resposta incorreta.")
                            break
                            default: 
                            alert("Resposta inválida, questão anulada.")
                            break
        }
        
        if(pergunta8 == "1"){
            nota++
        }

        let pergunta9 = prompt("9. Qual é a solução da inequação ( 3x - 4 > 2 )?\n" +
            "\n1)  ( x > 2 )" + 
            "\n2)  ( x > 1 )" + 
            "\n3)  ( x > 0 )" +
            "\n4) ( x > -1 )" +
            "\n5) ( x > -2 ) "
            )
            
            switch(pergunta9){
                case "1":
                    alert("Resposta incorreta.")
                    break
                    case"2":
                    alert("Resposta correta, Parabéns!")
                    break
                    case "3":
                        alert("Resposta incorreta.")
                        break
                        case "4":
                            alert("Resposta incorreta.")
                            break
                            case "5":
                                alert("Resposta incorreta.")
                                break
                                default: 
                                alert("Resposta inválida, questão anulada.")
                                break
            }
            
            if(pergunta9 == "2"){
                nota++
            }

            let pergunta10 = prompt("10. Qual é a fórmula do volume de um cilindro com raio ( r ) e altura ( h )?\n" +
                "\n1)   ( \pi r^2 h )" +
                "\n2) ( 2\pi r h )"+ 
                "\n3) ( \pi r h^2 )" +
                "\n4) ( \pi r^2 )"+
                "\n5)  ( 2\pi r^2 h )"
                )
                
                switch(pergunta10){
                    case "1":
                        alert("Resposta correta, Parabéns!")
                        break
                        case"2":
                        alert("Resposta incorreta.")
                        break
                        case "3":
                            alert("Resposta incorreta.")
                            break
                            case "4":
                                alert("Resposta incorreta.")
                                break
                                case "5":
                                    alert("Resposta incorreta.")
                                    break
                                    default: 
                                    alert("Resposta inválida, questão anulada.")
                                    break
                }
                
                if(pergunta10 == "1"){
                    nota++
                }

                alert("De acordo com suas respostas, sua nota foi: " + nota + "\n\nObrigado por realizar o teste, " + nomeEstudante + "!")