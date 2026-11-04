function saludar() {
    let varNombre = document.getElementById("nombre").value;

    document.getElementById("resultado").value=`Hola, ${varNombre}`;

    alert(`Hola ${varNombre}`);
}

function registrar() {

    let nombre = document.getElementById("nombre2").value;
    let programa = document.getElementById("programa2").value;
    alert(`Aprendiz: ${nombre}\nPrograma: ${programa}`);
    document.getElementById("resultado11").value = 
    `${nombre} - ${programa}`;
    document.getElementById("resultado22").innerText =
    `Nombre: ${nombre} | Programa: ${programa}`;
    document.getElementById("resultado33").innerHTML =
    `<p style="color: blue;">
        <strong>Aprendiz:</strong> ${nombre}<br>
        <strong>Programa:</strong> ${programa}
    </p>`;
    document.getElementById("resultado44").textContent =
    `El aprendiz ${nombre} esta inscrito en ${programa}.`;     
}

function calcularOperaciones() {

    let num1 = parseInt (document.getElementById("valorUno").value);
    let num2 = parseInt (document.getElementById("valorDos").value);
    
    let suma = num1 + num2
        document.getElementById("resultado_suma").innerText = suma;

    let resta = num1 - num2
        document.getElementById("resultado_resta").innerText =  resta;
        
    let multiplicacion = num1 * num2
        document.getElementById("resultado_multiplicaciion").innerText = multiplicacion;

    let division = num1 / num2
        document.getElementById("resultado_division").innerText =  division;        
    
}