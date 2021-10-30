$(document).ready(function(){
   //variables
   $surface=$('.surface');
   $car = $('.car');
   $img = $('.car img');
   let flag = true;

   const cars = ['./assets/car_without_headlight.png', './assets/car_with_headlight.png']
   //keppress event
   $(document).on('keypress',function(e){          
        if(e.which == 13){                         // e=13 means key= enter
            $($surface).toggleClass('moveRight');
            $($car).toggleClass('suspension');
        }
   });
    //light 
   $(document).on('keypress',function(e){
    if(e.which==32){                            // e=32 means key= spacebar
        if(flag){
            flag = false;
            $img.attr('src', cars[0]);
        }
        else{
            flag = true;
            $img.attr('src', cars[1]);
        }
    }
});


});