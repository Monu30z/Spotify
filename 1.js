console.log("hello world")
let index=0;
let audioElement= new Audio('songs/1.mp3');
let masterplay=document.getElementById('masterplay');
let myprogressbar= document.getElementById('myprogressbar');
let movebackward=document.getElementById('movebackward');
let movefoward=document.getElementById('moveforward');
let gif=document.getElementById('gif');
let songitems= Array.from(document.getElementsByClassName('songitem'));
let songs = [
    {songname:"Salemeishq", filepath:"songs/1.mp3", coverpath:"covers/1.jpg"},
    {songname:"Tum Hi Ho", filepath:"songs/2.mp3", coverpath:"covers/2.jpg"},
    {songname:"Channa Mereya", filepath:"songs/3.mp3", coverpath:"covers/3.jpg"},
    {songname:"Kesariya", filepath:"songs/4.mp3", coverpath:"covers/4.jpg"},
    {songname:"Bekhayali", filepath:"songs/5.mp3", coverpath:"covers/5.jpg"},
    {songname:"Raataan Lambiyan", filepath:"songs/6.mp3", coverpath:"covers/6.jpg"},
    {songname:"Tera Ban Jaunga", filepath:"songs/7.mp3", coverpath:"covers/7.jpg"},
    {songname:"Hawayein", filepath:"songs/8.mp3", coverpath:"covers/8.jpg"},
    {songname:"Shayad", filepath:"songs/9.mp3", coverpath:"covers/9.jpg"},
    {songname:"Agar Tum Saath Ho", filepath:"songs/10.mp3", coverpath:"covers/10.jpg"},
];

masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0 ){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})


audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressbar.value=progress;
})
myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime=(myprogressbar.value*audioElement.duration)/100;
})
movebackward.addEventListener('click',()=>{
    if(audioElement.currentTime<=10){
        audioElement.currentTime=0;
    }
    else{
        audioElement.currentTime-=10;
    }
})
moveforward.addEventListener('click',()=>{
    if(audioElement.duration-audioElement.currentTime<=10){
        audioElement.currentTime=audioElement.duration;
    }
    else{
        audioElement.currentTime+=10;
    }
})
songitems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverpath;     
    element.getElementsByClassName("songname")[0].innerText =songs[i].songname;  
})
const makeallplay=()=>{
    Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-circle-play');
    
})
}
Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeallplay();
        index=parseInt(e.target.id);
        gif.style.opacity=1;
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-pause');
        audioElement.src= `songs/${index+1}.mp3`
        audioElement.currentTime=0;
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-pause');
    })
})
document.getElementById('previous').addEventListener('click',()=>{
    if(index<=0){
        index=9;
    }
    else{
        index-=1;
    }
    gif.style.opacity=1;
    audioElement.src= `songs/${index+1}.mp3`
        audioElement.currentTime=0;
        audioElement.play();
        makeallplay();
        document.getElementById(index).classList.remove('fa-circle-play');
        document.getElementById(index).classList.add('fa-pause')
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-pause');
})
document.getElementById('next').addEventListener('click',()=>{
    if(index>=9){
        index=0;
    }
    else{
        index+=1;
    }
    gif.style.opacity=1;
    audioElement.src= `songs/${index+1}.mp3`
        audioElement.currentTime=0;
        audioElement.play();
        makeallplay();
        document.getElementById(index).classList.remove('fa-circle-play');
        document.getElementById(index).classList.add('fa-pause')
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-pause');
})