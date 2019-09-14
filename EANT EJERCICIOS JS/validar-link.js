var links = document.querySelectorAll("nav > a")

console.log(links)

links.forEach( function ( link ){  // <-- funcion anonima
 console.log("En el argumento 'link' contiene:")
 console.log(link)

link.onclick = function(evento){ // <-- hacer esto ...
  evento.preventDefault() //<-- detener el comportamiento predeterminado

  var rta = confirm("Esta seguro que desea abandonar la pagina?")
  if( rta ){
    // ir a la pagina correspondiente
    console.log("ahora deberia ir a:")
    console.log(evento.target.href)

    window.location.href = evento.target.href // <-- ir a donde iria el elemento clickeado...
  }
   else {
     alert("gracias por quedarse!")
   }

}

})



/* funcion nominada
 function ( link ){
  console.log("En el argumento 'link' hay")
  console.log(link)
}
*/
