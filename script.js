var canvas=document.getElementById ('mycanvas')
var context=canvas.getContext ("2d")
var carwidth=100
var carheight=90
var carimage="car1.png"
var carx=10
var cary=10
var bgimage,carbg
var backgroundimage="canvas.jpg"
function add()  {
     bgimage=new Image() 
    bgimage.onload=uploadbg()
    bgimage.src=backgroundimage

     carbg=new Image()
    carbg.onload=uploadcarbg()
    carbg.src=carimage
}

function uploadbg  () {
    context.drawImage(bgimage,0,0,canvas.width,canvas.height)
}
function uploadcarbg () {
context.drawImage(carbg,carx,cary,carwidth,carheight)
}
window.addEventListener("keydown",kd)
function kd (e)    {
    var keypress=e.keyCode
    if (keypress=="38") {
        up()

    }
    if (keypress=="40") {
        down()
        
    }
    if (keypress=="37") {
        left()
        
    }
    if (keypress=="39") {
        right()
        
    }

    
}

function up () {
    if (cary>=0)  {
        cary=cary-10
        uploadbg()
        uploadcarbg()
       
    
        
    }
        }
    
        function down () {
            if (cary<=500)  {
                cary=cary+10
                uploadbg()
                uploadcarbg()
                
                
                
            }
                }
    
                function left () {
                    if (carx>=0)  {
                        carx=carx-10
                        uploadbg()
                        uploadcarbg()
                        
                        
                    }
                        }
    
                        function right () {
                            if (carx<=700)  {
                                carx=carx+10
                                uploadbg()
                                uploadcarbg()
                                
                                
                                
                            }
                                }