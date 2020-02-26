function mostrar()
{	
	var numeroIngresado;
	var i;
	var bandera;

	bandera=0
	numeroIngresado=prompt("ingrese numero");
	numeroIngresado=parseInt(numeroIngresado);

	for(i=2;i<numeroIngresado;i++)
	{
		if(numeroIngresado%i==0)
		{
			bandera=1;
		}	
	}
		if(bandera==0)
		{
			alert("es primo");
		}	
}//FIN DE LA FUNCIÓN