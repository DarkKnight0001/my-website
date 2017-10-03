
var images = ['1.jpg','2.jpg','3.jpg','4.jpg','5.png','6.jpg'];
//console.log(number);

var number = 1;

function prev(){
    
    var image = document.getElementById("image");
    number--;
    if(number>0){
        image.src = images[number];
    }else{
        number = 0;
        image.src = images[number];
    }
}

function next(){
    
    var image = document.getElementById("image");
    number++;
    if(number<=5){
       
        image.src = images[number];
}else{
    
    image.src = images[0];
  }
}
