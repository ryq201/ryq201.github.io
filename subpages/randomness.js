let circleX;
let circleY;

function setup() {
  createCanvas(800, 800);
  let myButton = createButton("Randomness");
  myButton.position(windowWidth/2-50,windowHeight/2);
  myButton.mousePressed(buttonpress);
  myButton.style("font-size", "24px")
  myButton.style("font-family", "zapfino")
  myButton.style("background-color", "white")
  background(227,227,227);
}

function draw() {

}
function backrandom(){
  background(random(255),random(255),random(255));
}
function circles(){
  for (let i = 0; i < 50; i++){
    circleX = random(800)
    circleY = random(800)
    size = random(100)
    stroke(random(255),random(255),random(255));
    fill(random(255),random(255),random(255));
    ellipse(circleX,circleY,size,size);
  }
}
function quads(){
  for (let i = 0; i < 10; i++){
    stroke(random(255),random(255),random(255));
    fill(random(255),random(255),random(255));
    quad(random(800),random(800),random(800),random(800),random(800),random(800),random(800),random(800));
  }
}
function buttonpress(){
  backrandom();
  quads();
  circles();
}