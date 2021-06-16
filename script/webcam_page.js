var video = document.getElementById('video');
var canvas = document.getElementById('canvas');

if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({
        video:true
    }).then (function(stream){
        video.srcObject = stream;
        video.play();
    });
}
var Context = canvas.getContext('2d');
document.getElementById('snap').addEventListener('click', function(){
    Context.drawImage(video, 0, 0, 640, 480);
})
