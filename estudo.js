
function moeda(atual){
  return atual.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}
function total(){
  let c = document.getElementById("valor").value;
  let j = document.getElementById("juros").value;
  let t = document.getElementById("meses").value;
  if(!Number(c)){
    alert("O valor do capital deve ser um numero.");
    document.getElementById("Capital").value = "";
    document.getElementById("Capital").focus();
    return
  }
  if(!Number(j)){
    alert("O valor dos juros deve ser um numero.");
    document.getElementById("juros").value = "";
    document.getElementById("juros").focus();
    return
  }
  if(!Number(t)){
    alert("A quantidade de meses deve ser um numero.");
    document.getElementById("meses").value = "";
    document.getElementById("meses").focus();
    return
  }
  let r = 0;
  let texto = "";
  for(let i = 1; i <= t; i++){
      r = c * (1 + (j/100));
      texto += i + " : " + moeda(r) + "<br>";
      //document.write("Mês " + i + " valor: " + r +"<br>");
      c = r;
  }
  document.getElementById("ListaMes").innerHTML = moeda(r);
  document.getElementById("total").innerHTML = texto;
  //document.write("Resultado: " + r);
}


function adicao(){
let val1 = document.getElementById("v1").value;
let val2 = document.getElementById("v2").value;
let r = Number(val1) + Number(val2);
document.getElementById("resultado").innerHTML =r;
}

function subtracao(){
  let val1 = document.getElementById("v1").value;
  let val2 = document.getElementById("v2").value;
  let r = Number(val1) - Number(val2);
  document.getElementById("resultado").innerHTML =r;
  }

  function divisao(){
    let val1 = document.getElementById("v1").value;
    let val2 = document.getElementById("v2").value;
    let r = Number(val1) / Number(val2);
    document.getElementById("resultado").innerHTML =r;
    }
  
    function multiplicacao(){
      let val1 = document.getElementById("v1").value;
      let val2 = document.getElementById("v2").value;
      let r = Number(val1) * Number(val2);
      document.getElementById("resultado").innerHTML =r;
      }
      function porcentagem(){
        let val1 = document.getElementById("v1").value;
        let val2 = document.getElementById("v2").value;
        let c = 100
        let p = Number(val2)  / Number(c)
        let r = Number(val1) * Number(p);
        document.getElementById("resultado").innerHTML =r;
        }
        function calculaRaiz(){
          let a = document.getElementById("a").value;
          let b = document.getElementById("b").value;
          let c = document.getElementById("c").value;
          let delta = (b*b) - (4*a*c);
          let raiz, x1, x2;

          if(delta >= 0) {
            raiz = Math.sqrt(delta);
            x1 = ((-b)+raiz)/(2*a);
            x1 = ((-b)-raiz)/(2*a);
            raiz = "x´="+x1+" x2"+x2;
          }else{
            raiz = "Não possui raiz Real";
          }
          document.getElementById("raiz").innerHTML = delta;
        }
    
        
