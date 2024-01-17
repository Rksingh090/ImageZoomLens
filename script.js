const image = document.getElementById('zoom-image');
const lens = document.getElementById('lens');
const container = document.getElementById('image-container');


image.addEventListener("mouseenter", function(e){
    if(lens.style.display != "block"){
        lens.style.display = "block";
        console.log("Set image");
        lens.style.setProperty("background-image", `url("${image.getAttribute("src")}")`);
    }
})
image.addEventListener("mouseleave", function(e){
    lens.style.display = "none";
})

image.addEventListener('mousemove', handleMouseMove);

function handleMouseMove(event) {
    const { offsetX, offsetY } = event;
    
    // Calculate the position of the mouse relative to the image
    const xPercentage = (offsetX / image.offsetWidth) * 100;
    const yPercentage = (offsetY / image.offsetHeight) * 100;
    
    // Move the div to the calculated position
    // moveDiv(xPercentage, yPercentage);
    const divX = (image.offsetWidth / 100) * xPercentage;
    const divY = (image.offsetHeight / 100) * yPercentage;
    
    // Set the position of the movable div
    let fPX = divX - lens.offsetWidth / 2;
    let fPY = divY - lens.offsetHeight / 2;
    lens.style.left = `${fPX}px`; 
    lens.style.top = `${fPY}px`;
    
    
    lens.style.setProperty("background-position", `${xPercentage }% ${yPercentage }%`);
}

function moveDiv(xPercentage, yPercentage) {
    // Calculate the position of the div relative to the container
    const divX = (image.offsetWidth / 100) * xPercentage;
    const divY = (image.offsetHeight / 100) * yPercentage;
    
    // Set the position of the movable div
    lens.style.left = `${divX - lens.offsetWidth / 2}px`;
    lens.style.top = `${divY - lens.offsetHeight / 2}px`;
  }