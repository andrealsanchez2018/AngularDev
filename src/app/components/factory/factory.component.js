 /* card nombre */

var objs = [""]
for (var i = 0; i <2; i++) {
    var card = "card" + i;
    if ( i == 0 ) {

        card={
            "nombre":"ROGER",
            "img":"../assets/img/machine1.jpg",
            "funcion":"chocolate"
        }

} else if( i == 1 ){
        
        card={
            "nombre":"RUTASTIC",
            "img":"../assets/img/machine2.jpg",
            "funcion":"vainilla"
        }

} 
objs[i] = card;
}

var incluye =[""];
for (var i = 0; i < 2; i++) {
  /* var nombre = "nombre" + i; */
   incluye += '<div class="card col-6">'
                    + '<h3 class="nombre">' + objs[i].nombre + '</h3>'
                    + '<img src="' + objs[i].img + '">' // Cards[0] = card
                    + '<p class="funcion">' + objs[i].funcion + '</p>'
                    + "</div>";
}

document.getElementById("grid").innerHTML = '<div class="row">' + incluye + '</div> <br>'

 
// CARDS funcion

var objsf = [""]
for (var j = 0; j <2; j++) {
    var cardf = "card" + j;
    if ( j == 0 ) {

        cardf={
            "nombre":"Chicle",
            "img":"../assets/img/machine3.gif",
            "funcion":"chicle"
        }

} else if( j == 1 ){
        
        cardf={
            "nombre":"Caramelo",
            "img":"../assets/img/machine4.gif",
            "funcion":"caramelo"
        }

} 
        objsf[j] = cardf;
}




var incluye2 =[""];
for (var j = 0; j < 2; j++) {
  /* var nombre = "nombre" + j; */
   incluye2 += '<div class="card col-6">'
                    + '<h3 class="nombre">' + objsf[j].nombre + '</h3>'
                    + '<img src="' + objsf[j].img + '">' // Cards[0] = card
                    + '<p class="funcion">' + objsf[j].funcion + '</p>'
                    + "</div>";
}

document.getElementById("grid2").innerHTML = '<div class="row">' + incluye2 + '</div> <br>'



// card nombre 

var objs2 = [""]
for (var k = 0; k <1; k++) {
    var card2 = "card" + k;
    if ( k == 0 ) {

        card2={
            "nombre":"ROGER",
            "img":"../assets/img/machine5.jpg",
            "funcion":"chocolate blanco"
            
        }

}  
objs2[k] = card2;
}

var incluye3 =[""];
for (var k = 0; k < 1; k++) {
 /*  var nombre = "nombre" + k; */
   incluye3 += '<div class="card col-6">'
   + '<h3 class="nombre">' + objs2[k].nombre + '</h3>'
   + '<img src="' + objs2[k].img + '">' // Cards[0] = card
   + '<p class="funcion">' + objs2[k].funcion + '</p>'
   + "</div>";
}

document.getElementById("grid3").innerHTML = '<div class="row">' + incluye3 + '</div> <br>'




export function synapseThrow() {
    return 'hello'
    console.log("funciona!")
  }
  
  export const MY_VAR = 'world!'; 







 