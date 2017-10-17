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
        }
        else{
            score_2 += current;
            document.getElementById('score-2').textContent = score_2;
            current = 0;
            active = 1;
            document.getElementById('current-2').textContent = current;
        }
    });


document.getElementById('roll').addEventListener('click', function() {

 dice = Math.floor(Math.random()*6)+1;
    console.log(dice);
    
    if(dice==1){
        
        if(active==1){
            current = 0;
            document.getElementById('current-'+ active).textContent = current;
            active = 2;
        }else{
            current = 0;
            document.getElementById('current-'+ active).textContent = current;
            active = 1;
        }
    }else{
        
    current += dice;
    document.getElementById('current-'+ active).textContent = current;
    } 
    });