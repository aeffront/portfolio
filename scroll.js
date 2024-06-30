canvas = document.getElementById('myCanvas');
ctx = canvas.getContext('2d');
Y = canvas.style.top;
ctx.fillStyle ='red';
console.log(Y)

width = canvas.width = 1000;
height = canvas.height = 500;

const theText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Donec a diam lectus. Set sit amet ipsum mauris. Maecenas congue ligula as quamviverra nec consectetur ant hendrerit. Donec et mollis dolor. Praesentet diam eget libero egestas mattis sit amet vitae augue. Nam tinciduntcongue enim, ut porta lorem lacinia consectetur.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Donec a diamlectus. Set sit amet ipsum mauris. Maecenas congue ligula as quamviverra nec consectetur ant hendrerit. Donec et mollis dolor. Praesentet diam eget libero egestas mattis sit amet vitae augue. Nam tinciduntcongue enim, ut porta lorem lacinia consectetur.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Donec a diamlectus. Set sit amet ipsum mauris. Maecenas congue ligula as quam'
      

function updateScrollPosition() {
    const scrollY = window.scrollY; // Get the vertical scroll position

    ctx.fillStyle='rgba(255,255,255,0.3)';
    
    ctx.clearRect(0,0,width,height)
    ctx.fillRect(0,0,width,height)

    let myText = 'Nerve is an interactive audiovisual installation throught which the user or visitor is give the oportunity to travel through auditive worlds. Similar to roots, the structure of the installation reminds of the nervous system, its brain activity and memory. The idea is that through touch and sound the user explores the memories of a person who he or she is not. ';
    const Cpos = Math.round(((scrollY-1700)+700));
    const num = Cpos;
    const numRows = Math.floor(num/30);
    const rest = Cpos%30;
    if((Cpos)>0){
        for(let i=0;i<numRows;i++){
  
                
                    for(let j=0;j<30;j++){
                        ctx.font = "30px Arial"
                        ctx.fillStyle='black';
                        ctx.textAlign='center';
                        if((i*30)+j<myText.length){
                            ctx.fillText(myText[(i*30)+j],(j*25)+10,(i*30)+30);
                        }
                    }
                
                
                
        
            
        }
        for(let j=0;j<rest;j++){
            ctx.font = "30px bold Arial "
            ctx.fillStyle='black';
            if((numRows*30)+j<myText.length){
                ctx.fillText(myText[(numRows*30)+j],(j*25)+10,(numRows*30)+30);
                ctx.font = "30px Arial"
                
            }
            
            
        }
        if(num<=myText.length){
            ctx.fillStyle='red';
            ctx.fillText('//',(rest*25)+10,(numRows*30)+30);
        }
        
        
        console.log(myText);
        
        
    }
    
    

      
    //ctx.fillText(Text,0,0)

    //console.log(scrollY-1500)
}

// Listen for the scroll event
window.addEventListener('scroll', updateScrollPosition);

// Initial call to set the scroll position on page load
updateScrollPosition();



ctx.fillRect(0,0,width,height)