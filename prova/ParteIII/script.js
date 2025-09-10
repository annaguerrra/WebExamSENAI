// 6 – Desenvolva um Script em JavaScript para resolver este problema lógico,
// aplicando os conceitos de programação e também a sintaxe da linguagem
// O usuário deve digitar três números.
// O programa deve exibir na página:
//  O maior número
//  O menor número

const Return = () => {
    
    let input1 = Number(document.getElementById('input').value);
    let input2 = Number(document.getElementById('input2').value);
    let input3 =  Number(document.getElementById('input3').value);
    
    console.log("Num1 ", input1 + "\n");
    console.log("Num2 ", input2 + "\n");
    console.log("Num3 ", input3 + "\n");
    let MaxNum = 0;
    let MinNum = 0;
    let Avarage = 0;

    if(input1 > input2 && input1 > input3)
        MaxNum = input1;
    else if(input2 > input1 && input2 > input3 )
        MaxNum = input2;
    else
        MaxNum = input3;


    if(input1 < input2 && input1 < input3)
        MinNum = input1;

    else if(input2 < input1 && input2 < input3 )
        MinNum = input2;
    else
        MinNum = input3;

    Avarage = input1 + input2 + input3

    console.log("Max Value = " + MaxNum + "\n");
    console.log("Min Value = " + MinNum + "\n");
    console.log("Avarage = " + Avarage + "\n");    
}


