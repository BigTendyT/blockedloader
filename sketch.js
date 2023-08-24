
let gameFrame;
let url;
let x = false;

function keyPressed() {
  if (keyCode === ENTER) {
    loadWeb();
  }
}

function draw() {
  
  url=select('#URL');
  url2=url.value();
  if (x==false){
    fill(0,0,0);
    rect(0,0,window.innerWidth, window.innerHeight);
  textSize(50);
    fill(225);
  x1=innerWidth/2-textWidth("Blocked Site Loader.")/2;
  text("Blocked Site Loader.",x1,70);
  textSize(22);
    x1=innerWidth/2-textWidth("Sites that return the error: (Website) refused to load/connect, DO NOT work using this method.")/2;
  text("Sites that return the error: (Website) refused to load/connect, DO NOT work using this method.",x1,110);
  }
}

function loadWeb(){
  x=true;
  console.log(url2);
  gameFrame = createDiv();
  gameFrame.position(0, 50);
 gameFrame.size(window.innerWidth, window.innerHeight);
  
  gameFrame.html(`
    <iframe 
      src="${url2}" 
      width="${window.innerWidth}" 
      height="${window.innerHeight}" 
      allow="autoplay; fullscreen; pointer-lock" 
      frameborder="0"
      sandbox="allow-scripts allow-same-origin allow-pointer-lock"
  
    ></iframe>
  `);
}

function clearValue(){
  url.value('');
}

function fs() {
  // Get all elements with the .header class
  let headerElements = document.querySelectorAll('.header');

  // Loop through each element and hide it
  headerElements.forEach(function(element) {
    element.classList.add('hidden');
  });
}

// Call the fs() function when the Fullscreen button is clicked
document.getElementById('fs').addEventListener('click', fs);



function setup() {
  createCanvas(windowWidth, windowHeight);
  let button = select('#conf');
  button.mousePressed(loadWeb);
  
  let button2 = select('#clearLink');
  button2.mousePressed(clearValue);
  
  let button3 = select('#fs');
  button3.mousePressed(fs);
  
  
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}




