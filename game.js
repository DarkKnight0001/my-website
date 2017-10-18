var active, score_1, current, score_2, dice;
active = 1;
dice = 0
current=0;

score_1 = 0;
score_2 = 0;
console.log(score_1);


    document.getElementById('hold').addEventListener('click', function(){
        if(active==1){
            score_1 += current;
            document.getElementById('score-1').textContent = score_1;
            current = 0;
            active = 2;
            document.getElementById('current-1').textContent = current;
            document.querySelector('.player-2').classList.toggle('active');
            document.querySelector('.player-1').classList.remove('active');
        }
        else{
            score_2 += current;
            document.getElementById('score-2').textContent = score_2;
            document.querySelector('.player-1').classList.toggle('active');
            document.querySelector('.player-2').classList.remove('active');
            current = 0;
            active = 1;
            document.getElementById('current-2').textContent = current;
        }
    });


document.getElementById('roll').addEventListener('click', function() {

 dice = Math.floor(Math.random()*6)+1;
    document.querySelector('.dicephoto').style.display = 'block';
    
    document.querySelector('.dicephoto').src = 'dice-'+dice+'.png';
    
    console.log(dice);
    
    if(dice==1){
        
        if(active==1){
            current = 0;
            document.getElementById('current-'+ active).textContent = current;
               document.querySelector('.player-2').classList.toggle('active');
            document.querySelector('.player-1').classList.remove('active');
            active = 2;
        }else{
            current = 0;
            document.getElementById('current-'+ active).textContent = current;
            document.querySelector('.player-1').classList.toggle('active');
            document.querySelector('.player-2').classList.remove('active');
            active = 1;
        }
    }else{
        
    current += dice;
    document.getElementById('current-'+ active).textContent = current;
    } 
    });

document.getElementById('newgame').addEventListener('click', function() {
    
active = 1;
dice = 0
current=0;

score_1 = 0;
score_2 = 0;
    
    document.getElementById('score-2').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-2').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.querySelector('.dicephoto').style.display = 'none';
     document.querySelector('.player-2').classList.remove('active');
    document.querySelector('.player-1').classList.toggle('active');
   
    
    
});


    

        
    
   
    
    
      



