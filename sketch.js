
let gameFrame;
let url;
let x = false;

function draw() {
  url=select('#URL');
  url2=url.value();
  if (x==false){
    rect(0,0,window.innerWidth, window.innerHeight);
  textSize(50);
  text("Blocked Site Loader.",30,70);
  textSize(22);
  text("Sites that return the error: (Website) refused to load, DO NOT work using this method.",30,110);
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
      allow="autoplay; fullscreen" 
      frameborder="0"
      sandbox="allow-scripts allow-same-origin"
    ></iframe>
  `);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  let button = select('#conf');
  button.mousePressed(loadWeb);
  
  
}




