
// array de pizzas
let pizzas = [
    {id: 10, pizza: {price: 500, name: 'Muzarella'}},
    {id: 20, pizza: {price: 800, name: 'Especial'}},
    {id: 30, pizza: {price: 1000, name: 'Especial con Huevo'}},
    {id: 40, pizza: {price: 1200, name: 'Napolitana'}},
  ];

  // Variables globales
  let message_error_1 = "Debe ingresar un numero"
  let message_error_2 = "No existen coincidencias para el numero: "

  function search() {
    let number = document.getElementById("number").value
    let name_pizza;
    let price_pizza;
    // Limpiamos los campos
    document.getElementById("message_error_1").innerHTML = "";
    document.getElementById("message_error_2").innerHTML = "";
    document.getElementById("name_pizza").innerHTML = "";
    document.getElementById("price_pizza").innerHTML = "";

    // Devolvemos un error en caso de no ingresar nada
    if(!number) {
        document.getElementById("message_error_1").innerHTML = message_error_1;
        return;
    }
    // Buscamos la pizza por el id ingresado en el input
    pizzas.forEach(element => {
        if(element.id == number) {
            name_pizza = element.pizza.name;
            price_pizza = element.pizza.price;
            document.getElementById("name_pizza").innerHTML = name_pizza;
            document.getElementById("price_pizza").innerHTML = "$ " + price_pizza;
        }
    });

    // Devolvemos un error en caso de no exixtir coicidencias
    if(!name_pizza && !price_pizza) {
        document.getElementById("message_error_2").innerHTML = message_error_2 + number;
    }
  }