
function resizeVideo (){
    const video = document.querySelector("#birdVideo");
    video.width = 0.676 * window.innerWidth;
    video.height = 0.6463 * window.innerHeight;
    video.style.top = (0.1945 * window.innerHeight) + "px";
    video.style.left = (0.1607 * window.innerWidth) + "px";

}
resizeVideo();
window.addEventListener('resize',resizeVideo);



function resizeVideoMobile (){
    const video = document.querySelector("#birdVideoMobile");
    video.width = 1.3326 * container.innerWidth;
    video.height = 0.6463 * container.innerHeight;
    video.style.top = (0.0987 * container.innerHeight) + "px";
    video.style.left = (0.1607 * container.innerWidth) + "px";

}
resizeVideoMobile();
window.addEventListener('resize',resizeVideoMobile);




