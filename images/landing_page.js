//for side bar
// let navbar = documnet.querySelector('.header .navbar');

// document.querySelector('#menu-btn').onclick = () =>{
//     navbar.classList.toggle('.active');
//} 
//for the control class videos
document.querySelectorAll('.about .video-container .controls .control-btn').forEach(btn=>{
    btn.onclick=()=>{
        let src= btn.getAttribute('data-src');
        document.querySelector('.about .video-container video').src=src
    }
})