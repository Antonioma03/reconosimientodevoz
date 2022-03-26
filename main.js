var reconosevoz=window.webkitSpeechRecognition;
var reconosimiento=new reconosevoz();
var texto=document.getElementById("texto");
function inisiar(){
    texto.innerHTML="";
    reconosimiento.start();   
}
reconosimiento.onresult=function(event){
    var contenido=event.results[0][0].transcript;
    texto.innerHTML=contenido;
    if(contenido=="selfie"){
        ablar();
    }
}
function ablar(){
    var voz=window.speechSynthesis;
    vozia="tonando la selfi en 5 segundos";
    var usarvoz=new SpeechSynthesisUtterance(vozia);
    voz.speak(usarvoz);
    Webcam.attach(camara);
    setTimeout(function()
    {
        tomarselfi();
        guardar();
    },5000
    );
}
camara=document.getElementById("camara");
Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});
function tomarselfi(){

    Webcam.snap(function(data_uri){ 
        document.getElementById("resultado").innerHTML='<img id="selfie" src=" '+data_uri+' "/>';
    });
}
function guardar(){
    link=document.getElementById("link");
    image=document.getElementById("selfie").src;
    link.href=image;
    link.click();
}