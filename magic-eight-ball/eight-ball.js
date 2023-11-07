


document.querySelector('.shake-me').addEventListener('click', () => {
    let number = Math.floor(Math.random() * 10);
     let htmlAnswer = '';
        console.log(number);
    if(number === 0){
        htmlAnswer = 'Heck no'
    }
     if(number === 1 ){
        htmlAnswer = 'Try Again'
     }if(number === 2 ){
        htmlAnswer = 'Yes'
     }if(number === 3 ){
        htmlAnswer = 'Perhaps Not'
     }if(number === 4 ){
        htmlAnswer = 'IDK'
     }if(number === 5 ){
        htmlAnswer = 'Possibly'
     }if(number === 6 ){
        htmlAnswer = 'I forgot'
     }if(number === 7 ){
        htmlAnswer = 'Who cares'
     }if(number === 8 ){
        htmlAnswer = 'Yolo'
     }if(number === 9 ){
        htmlAnswer = 'You win'
     }if(number === 10 ){
        htmlAnswer = 'No'
     }

     document.querySelector('.answer').innerHTML= htmlAnswer

});