const $juego = document.querySelector(".juego")
const $template = document.getElementById("template-bu").content
const $fragmento = document.createDocumentFragment()
let $clones = ""
let x = 30

class Nodo{
  constructor(data,next){
    this.data = data;
    this.next = next
  }
}


class Conway{
   constructor(posx,posy){
       this.cabeza = null;
       this.tamano = 0
      
   }
    
   agregar(data){
    const nuevoNodo = new Nodo(data,null);
    
    let actual =  this.cabeza;
    if(!actual){
      this.cabeza = nuevoNodo
    }else{
      
       while(actual.next){
        actual = actual.next
       }
       actual.next = nuevoNodo;

    }
    this.tamano++;


   }
   buscar(x,y,est){
  
    let i=0; 
    let posx,posy ;
    let actual = this.cabeza;
    let tamano = this.tamano
    while(actual){
      posx = actual.data.posx;
      posy = actual.data.posy;
      if((posx===x)&&(posy===y)){
        actual.data.estado= est;
        
        return actual.data.estado;
      }  
      actual = actual.next;
      i++
    }
  return null;
   
    
}

comprobar(contador,nodo){
  if((contador===3)&&(nodo.data.extra===0))
  {
   nodo.data.extra = 1;
}

if( ((contador==3)||(contador==2))&&(nodo.data.estado===1))
{
nodo.data.extra = 1;
}
if( ((contador<=1)||(contador>3))&&(nodo.data.estado===1))
{
nodo.data.extra = 0;
}

}

ejecutar(){
  let actual = this.cabeza;
  
  let anterior,x,y;
  

  while(actual){
    let origen = this.cabeza;
    x = actual.data.posx;
    y = actual.data.posy;
    
    if ((x===0) && (y===0)){
      let cont = 0;
         while(origen){
          if((origen.data.posx === x) && (origen.data.posy===y+1)){
              if (origen.data.estado==1){
                cont++;
              }
          }
          if((origen.data.posx === x+1) && (origen.data.posy===y)){
            if (origen.data.estado==1){
              cont++;
            }
        }
        if((origen.data.posx === x+1) && (origen.data.posy===y+1)){
          if (origen.data.estado==1){
            cont++;
          }
      }         
  

          origen = origen.next
         }
      this.comprobar(cont,actual)

  }

   if ((x===0)&&(y>0)){
    let cont = 0;
    while(origen){
     if((origen.data.posx === x) && (origen.data.posy===y-1)){
         if (origen.data.estado==1){
           cont++;
         }
         }
     if((origen.data.posx === x) && (origen.data.posy===y+1)){
       if (origen.data.estado==1){
         cont++;
       }
     }
   if((origen.data.posx === x+1) && (origen.data.posy===y-1)){
     if (origen.data.estado==1){
       cont++;
     }   
 }
 if((origen.data.posx === x+1) && (origen.data.posy===y)){
  if (origen.data.estado==1){
    cont++;
  }   
}
if((origen.data.posx === x+1) && (origen.data.posy===y+1)){
  if (origen.data.estado==1){
    cont++;
  }   
}         


     origen = origen.next
    }

    this.comprobar(cont,actual)


   }
//inicia 3er
if ((x===0)&&(y>29)){
  let cont = 0;
  while(origen){
   if((origen.data.posx === x) && (origen.data.posy===y-1)){
       if (origen.data.estado==1){
         cont++;
       }
       }
   if((origen.data.posx === x+1) && (origen.data.posy===y-1)){
     if (origen.data.estado==1){
       cont++;
     }
   }
 if((origen.data.posx === x+1) && (origen.data.posy===y)){
   if (origen.data.estado==1){
     cont++;
   }   
}         


   origen = origen.next
  }

  this.comprobar(cont,actual)


 }
//fin 3er

//4to

if ((x>0)&&(y===0)){
  let cont = 0;
  while(origen){
   if((origen.data.posx === x-1) && (origen.data.posy===y)){
       if (origen.data.estado==1){
         cont++;
       }
       }
   if((origen.data.posx === x-1) && (origen.data.posy===y+1)){
     if (origen.data.estado==1){
       cont++;
     }
   }
 if((origen.data.posx === x) && (origen.data.posy===y+1)){
   if (origen.data.estado==1){
     cont++;
   }   
}         
if((origen.data.posx === x+1) && (origen.data.posy===y)){
  if (origen.data.estado==1){
    cont++;
  }   
}
if((origen.data.posx === x+1) && (origen.data.posy===y+1)){
  if (origen.data.estado==1){
    cont++;
  }   
}



   origen = origen.next
  }

  this.comprobar(cont,actual)


 }

if ((x===29)&&(y>0)){
  let cont = 0;
  while(origen){
    if (origen.data.estado === 1){
      console.log("hola")
    }
   if((origen.data.posx === x) && (origen.data.posy===y-1)){
       if (origen.data.estado==1){
         cont++;
       }
       }
   if((origen.data.posx === x-1) && (origen.data.posy===y-1)){
     if (origen.data.estado==1){
       cont++;
     }
   }
 if((origen.data.posx === x-1) && (origen.data.posy===y)){
   if (origen.data.estado==1){
     cont++;
   }   
}
if((origen.data.posx === x-1) && (origen.data.posy===y+1)){
  if (origen.data.estado==1){
    cont++;
  }   
}
if((origen.data.posx === x) && (origen.data.posy===y+1)){
  if (origen.data.estado==1){
    cont++;
  }   
}         

   origen = origen.next
  }
  console.log(actual.data)

  this.comprobar(cont,actual)


 }

if (((x>0)&&(x<29))&&((y>0)&&(x<29))){
  let cont = 0;
  while(origen){
   if((origen.data.posx === x-1) && (origen.data.posy===y-1)){
       if (origen.data.estado==1){
         cont++;
       }
       }
   if((origen.data.posx === x-1) && (origen.data.posy===y)){
     if (origen.data.estado==1){
       cont++;
     }
   }
 if((origen.data.posx === x-1) && (origen.data.posy===y+1)){
   if (origen.data.estado==1){
     cont++;
   }   
}
if((origen.data.posx === x) && (origen.data.posy===y+1)){
  if (origen.data.estado==1){
    cont++;
  }   
}
if((origen.data.posx === x+1) && (origen.data.posy===y+1)){
  if (origen.data.estado==1){
    cont++;
  }   
}
if((origen.data.posx === x+1) && (origen.data.posy===y)){
  if (origen.data.estado==1){
    cont++;
  }   
}
if((origen.data.posx === x+1) && (origen.data.posy===y-1)){
  if (origen.data.estado==1){
    cont++;
  }   
}
if((origen.data.posx === x) && (origen.data.posy===y-1)){
  if (origen.data.estado==1){
    cont++;
  }   
}

     

   origen = origen.next
  }

  this.comprobar(cont,actual)


 }


//fin 8vo


  actual=actual.next;
  }
  let cab = this.cabeza;

  while(cab){
    cab.data.estado = cab.data.extra;
    cab.data.extra = 0; 
    cab = cab.next;
  }

  return this.cabeza;
  }


}
   const conw = new Conway();
   let idd = 0,valor=0;
for(let y=0;y<x;y++){
    for(let z=0;z<x;z++){
    conw.agregar({posx:y,posy:z,estado:0,extra:0});
    $template.querySelector("button").classList.add("cuadro");
    $template.querySelector("button").id = idd;
    $template.querySelector("button").setAttribute("posx",y);
    $template.querySelector("button").setAttribute("posy",z);
    $template.querySelector("button").setAttribute("valor",0);
    $template.querySelector("button").style.background = '#f0f0f0';
    $clones = document.importNode($template,true)
    $fragmento.appendChild($clones)
    idd++;
    }
   
 
}

function buscar(x,y,bus){
  console.log( conw.buscar(x,y,bus));
  return conw.buscar(x,y,bus)
}

$juego.appendChild($fragmento)

for (let i = 0;i<900;i++){
  let entr = 1;
  const $evento = document.getElementById(i)
  
$evento.addEventListener("click", (e)=>{
  
  let xx = parseInt( e.target.getAttribute("posx"));
  let yy =parseInt( e.target.getAttribute("posy"))
  
  e.target.setAttribute("valor",entr)
  let valii =  buscar(xx,yy,entr);
  if (entr===1){
    entr=0;
  } else{
    entr=1;
  }
 if(valii == 0){
    $evento.style.background='#f0f0f0'; 
  }   else{
    $evento.style.background='yellow'; 
  
  }
  
}
  ) ;
}

const $evento2 = document.getElementById("ejec");
$evento2.addEventListener("click",(e)=>{
  let timp = conw.ejecutar();
  console.log(timp)
  for (let u = 0;u<900;u++){
    const $ele = document.getElementById(u)
    if (timp.data.estado === 1){
       $ele.style.background= 'yellow';
       $ele.setAttribute("valor",timp.data.estado)
    }
    if (timp.data.estado === 0){
      $ele.style.background= '#f0f0f0';
      $ele.setAttribute("valor",timp.data.estado)
   }
     timp = timp.next;
  }
})
console.log($juego.childNodes)
console.log(conw)
