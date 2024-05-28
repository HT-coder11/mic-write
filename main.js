var x = 0
var y = 0
var drawCircle = ""
var drawSquare = ""
var drawRectangle = ""
var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function setup(){
    
    canvas = createCanvas(900, 600);
}

function start(){
    document.getElementById("status").innerHTML = "Regretavator is starting, Say which shape you want to draw? Circle/Square/Rectangle."
    recognition.start()
}

recognition.onresult = function(event){
    console.log(event);

    var content = event.results[0][0].transcript    
    document.getElementById("status").innerHTML = "The shape is recognized as:  "+ content;

    if(content == "circle" || content == "Circle"){
        x = Math.floor(Math.random() * 900)
        y = Math.floor(Math.random() * 600)
        document.getElementById("status").innerHTML = "Started drawing circle !";
        drawCircle = "set";
    }
    
    if(content == "rectangle" || content == "Rectangle"){
        x = Math.floor(Math.random() * 900)
        y = Math.floor(Math.random() * 600)
        document.getElementById("status").innerHTML = "Started drawing rectangle !"
        drawRectangle = "set";
    }

    if(content == "square" || content == "Square"){
        x = Math.floor(Math.random() * 900)
        y = Math.floor(Math.random() * 600)
        document.getElementById("status").innerHTML = "Started drawing square !"
        drawSquare = "set";
    }
}

function draw(){
    if(drawCircle == "set"){
        var radius = Math.floor(Math.random() * 100);
        fill (random(0,255), random(0,255), random(0,255))
        noStroke()
        circle (x,y,radius);
        document.getElementById("status").innerHTML = "Circle is drawn !";
        drawCircle = "";
    }

    if(drawRectangle == "set"){
        fill (random(0,255), random(0,255), random(0,255))
        noStroke()
        rect(x,y,100,70);
        document.getElementById("status").innerHTML = "Rectangle is drawn !";
        drawRectangle = ""; 
    }

    if(drawSquare == "set"){
        var sides = Math.floor(Math.random() * 100);
        fill (random(0,255), random(0,255), random(0,255))
        noStroke()
        rect(x,y,sides,sides)
        document.getElementById("status").innerHTML  = "Sqare is drawn !"
        drawSquare = "";
    }
}
