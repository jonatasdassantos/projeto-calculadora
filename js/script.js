function calcular(tipo, valor){

    if(tipo === 'acao'){

      if(valor === 'c'){
        document.getElementById('resultado').value = ''
      }

      if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.' ){
        document.getElementById('resultado').value += valor
      }

      if(valor === '='){
        var result_camp = eval(document.getElementById('resultado').value)
       
        document.getElementById('resultado').value = result_camp
      }

    }else{
      document.getElementById('resultado').value += valor
    }
    
  }