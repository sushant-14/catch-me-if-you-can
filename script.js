var box = document.getElementById("box");
// box.style.top="50px"
box.style.top = Math.floor(Math.random() * 50).toString() + "px";
console.log(box.style.top)
box.style.left = Math.floor(Math.random() * 50).toString() + "px";
console.log(box.style.left)

box.addEventListener('mousemove',function(){
    let viewport_height=window.innerHeight;
    console.log('viewport_height',viewport_height);
    let viewport_width=window.innerWidth;
    console.log('viewport_width',viewport_width);
    let box_width=box.clientWidth;
    console.log('box_width',box_width);
    let box_height=box.clientHeight;
    console.log('box_height',box_height);
    box.style.top=Math.floor(Math.random()*(viewport_height-box_height)).toString()+"px";
    box.style.left=Math.floor(Math.random()*(viewport_width-box_width)).toString()+"px";
})
