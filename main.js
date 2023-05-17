menu()

function menu()
{
    let opcion
    let total

    do {
        opcion = prompt("1- Ingresar productos\n2- Ingresar tarjeta\n3- Finalizar compra")
        opcion = parseInt(opcion)

        switch (opcion) {
            case 1:
                total = ingresarProdutos()
                alert("Total a pagar: " + total)
                break
            case 2:
                ingresarTarjeta()
                break
            case 3:
                alert("Finalizando compra...")
                break
            default:
                alert("Opcion invalida!")
        }
    } while (opcion != 3)

    if(total != 0)
    {
        alert("Total a pagar: " + total)
    }
    else
    {
        alert("No hay productos")
    }

}

function ingresarProdutos()
{
    let total = 0.00
    let cantidadProd = prompt("Ingrese cantidad de productos a cargar: ")
    cantidadProd = parseInt(cantidadProd)
    for(let i = 1; i <= cantidadProd; i++)
    {
        precio = prompt("Ingrese precio de producto " + i + ": ")
        precio = parseFloat(precio)
        total = total + precio
    }
    return total
}

function ingresarTarjeta()
{
    let titular
    let numero
    const fecha = new Date()
    let fechaVencMes
    let fechaVencAnio
    let cvv

    titular = prompt("Ingrese titular de la tarjeta: ")

    do
    {
        numero = prompt("Ingrese número de tarjeta (sin espacio, guiones ni puntos): ")
        if(numero.length != 16)
        {
            alert("Número incorrecto! Debe contener 16 dígitos")
        }
    }while(numero.length != 16)
    
    do
    {
        fechaVencAnio = prompt("Ingrese SÓLO año de vencimiento (AAAA): ")
        if(fechaVencAnio > 9999 || fechaVencAnio < 1000)
        {
            alert("FECHA INCORRECTA!")
        }
        else
        {
            if(fechaVencAnio >= fecha.getFullYear())
            {
                do
                {
                    fechaVencMes = prompt("Ingrese SÓLO mes de vencimiento (MM): ")
                    if(fechaVencMes > 12 || fechaVencMes < 1)
                    {
                        alert("FECHA INCORRECTA!")
                    }
                    else
                    {
                        if(fechaVencAnio == fecha.getFullYear())
                        {
                            if(fechaVencMes < fecha.getMonth() + 1)
                            {
                                alert("TARJETA VENCIDA!")
                            }
                            else
                            {
                                do
                                {
                                    cvv = prompt("Ingrese código de seguridad: ")
                                    if(cvv.length != 3)
                                    {
                                        alert("Código incorrecto")
                                    }
                                }while(cvv.length != 3)
                            }
                        }
                    }
                }while(fechaVencMes > 12 || fechaVencMes < 1)
            }
            else
            {
                alert("TARJETA VENCIDA!")
            }
        }
    }while(fechaVencAnio > 9999 || fechaVencAnio < 1000)
}