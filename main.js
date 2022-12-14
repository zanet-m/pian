function sound (event) {
let key = event.code;
let sunet;

sunet =new Audio('sounds/'+ key + ".mp3");

sunet.onloadeddata = function (){
    let animation = {
        transform: 'scale(1.3)'
    };

    let timp = {
        duration: 100
    };

    sunet.play();
    document.getElementById(key).animate(animation,timp);
    
}

sunet.error = function () {
    console.log("Nu exista asa nota");
}

}