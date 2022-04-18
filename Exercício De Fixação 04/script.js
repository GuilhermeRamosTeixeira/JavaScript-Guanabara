function contar() {
    var inicio = window.document.getElementById("txtinicio")
    var fim = window.document.getElementById('txtfim')
    var passo = window.document.getElementById('txtcont')
    var res = window.document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {

       window.alert('[ERRO] revise os dados inceridos')

    } else {
         res.innerHTML="contando... <br>"
         var i = Number(inicio.value)
         var f = Number(fim.value)
         var p = Number(passo.value)
         if(p<=0){
             window.alert("passo invalido . Considerando Passo = 1")
             p=1
         }
if(i<f){
  for(var c = i ; c<=f; c+=p){
             res.innerHTML+=`--${c}--`
         }  
}else{
    for(var c = i ; c>=f; c-=p){
        res.innerHTML+=`--${c}--`
    } 
}
         
         res.innerHTML+='Fimmmmm'
    }

}