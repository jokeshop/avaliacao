function Avaliar(){
    
    var nome=document.getElementById("nome").value
    var modelo=document.getElementById("modelo").value
    var estrelas=document.getElementById("estrelas").value
    var comentario=document.getElementById("comentario").value
    

    if(nome==="" || modelo==="x" || estrelas==="x" || comentario===""){
        Swal.fire({
    
            icon: 'warning',
            title: 'Insira Todos os Dados',
            showConfirmButton: false,
            timer: 1500
          })
    }else{

        const Avaliador ={
            nome:nome,
            modelo:modelo,
            estrelas:estrelas,
            comentario:comentario,
            id:Date.now()
        }
      
        let usuariosgravados= JSON.parse(window.localStorage.getItem("Avaliador"))
        if(usuariosgravados== null){
            window.localStorage.setItem('Avaliador', JSON.stringify([]))
            usuariosgravados = JSON.parse(window.localStorage.getItem("Avaliador"))
            usuariosgravados.push(Avaliador)
    window.localStorage.setItem('Avaliador', JSON.stringify(usuariosgravados))
        }else{
            usuariosgravados.push(Avaliador)
            window.localStorage.setItem('Avaliador', JSON.stringify(usuariosgravados))
        }
    }
}