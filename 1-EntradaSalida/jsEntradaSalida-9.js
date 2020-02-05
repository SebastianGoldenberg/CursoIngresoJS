/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo
	var incremento
	var resultado

	sueldo=document.getElementById('sueldo').value;
	sueldo=parseInt(sueldo);
	console.log(sueldo);
	
	incremento= sueldo * 10/100
	incremento=parseInt(incremento);

	resultado= sueldo+incremento;


	document.getElementById('resultado').value=resultado;
	console.log(resultado)

}
