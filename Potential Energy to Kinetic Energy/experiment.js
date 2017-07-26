///////////////////////////////////////
/*
Maesuremnets during correct seing
var m = new THREE.MeshPhysicalMaterial({ map:texture, transparent:true});
var g= new THREE.PlaneGeometry(2.8,2.8);
g.applyMatrix( new THREE.Matrix4().makeTranslation( 0, -15.2, -29 ) );
hoverit =new THREE.Mesh(g,m);
hoverit.position.set(2,10-4.9,-27.7);
PIEaddElement(hoverit);
PIEdragElement(hoverit);
PIEsetDrag(hoverit, myHoverDrag);


*/

var whoseFirst=0;
var freeFall=0;

var heg=0;

var key=-2;
var roadSet=-2;


function callHere(value)
{

/////////////13.25
//hover 3 ----------13.05
//hover 2-----------12.9
//hover 1-----------12.65
//hover ------------12.39

if( value==0 ||  value==-1)
{
//road.position.y=-12.39;

hoverit.position.set(-22,10+26.66,-50.7);
hoverit.rotation.z=0;

hoverit1.position.set(-14,10+26.84,-50.7);
hoverit1.rotation.z=0;

hoverit2.position.set(-6,10+27.1,-50.7);
hoverit2.rotation.z=0;

hoverit3.position.set(2,10+27.32,-50.7);
hoverit3.rotation.z=0;

hoverit4.position.set(10,10+27.57,-50.7);
hoverit4.rotation.z=0;

}
else if(value==1)
{
road.position.y=-12.39;


hoverit.position.set(2,10-4.9,-27.85);
hoverit.rotation.z=angle;
checkHeight(angle);

hoverit1.position.set(-14,10+26.84,-50.7);
hoverit1.rotation.z=0;

hoverit2.position.set(-6,10+27.1,-50.7);
hoverit2.rotation.z=0;

hoverit3.position.set(2,10+27.32,-50.7);
hoverit3.rotation.z=0;

hoverit4.position.set(10,10+27.57,-50.7);
hoverit4.rotation.z=0;

}
else if(value==2)
{road.position.y=-12.65;


hoverit.position.set(-22,10+26.66,-50.7);
hoverit.rotation.z=0;

hoverit1.position.set(2,10-4.9,-27.85);
hoverit1.rotation.z=angle;
checkHeight(angle);


hoverit2.position.set(-6,10+27.1,-50.7);
hoverit2.rotation.z=0;

hoverit3.position.set(2,10+27.32,-50.7);
hoverit3.rotation.z=0;

hoverit4.position.set(10,10+27.57,-50.7);
hoverit4.rotation.z=0;

}
else if(value==3)
{road.position.y=-12.9;


hoverit.position.set(-22,10+26.66,-50.7);
hoverit.rotation.z=0;

hoverit1.position.set(-14,10+26.84,-50.7);
hoverit1.rotation.z=0;

hoverit2.position.set(2,10-4.9,-27.85);
hoverit2.rotation.z=angle;
checkHeight(angle);


hoverit3.position.set(2,10+27.32,-50.7);
hoverit3.rotation.z=0;

hoverit4.position.set(10,10+27.57,-50.7);
hoverit4.rotation.z=0;


}
else if(value==4)
{road.position.y=-13.05;


hoverit.position.set(-22,10+26.66,-50.7);
hoverit.rotation.z=0;

hoverit1.position.set(-14,10+26.84,-50.7);
hoverit1.rotation.z=0;

hoverit2.position.set(-6,10+27.1,-50.7);
hoverit2.rotation.z=0;

hoverit3.position.set(2,10-4.9,-27.85);
hoverit3.rotation.z=angle;
checkHeight(angle);


hoverit4.position.set(10,10+27.57,-50.7);
hoverit4.rotation.z=0;


}
else if(value==5)
{
road.position.y=-13.25;


hoverit.position.set(-22,10+26.66,-50.7);
hoverit.rotation.z=0;

hoverit1.position.set(-14,10+26.84,-50.7);
hoverit1.rotation.z=0;

hoverit2.position.set(-6,10+27.1,-50.7);
hoverit2.rotation.z=0;

hoverit3.position.set(2,10+27.32,-50.7);
hoverit3.rotation.z=0;

hoverit4.position.set(2,10-4.9,-27.85);
hoverit4.rotation.z=angle;
checkHeight(angle);



}
PIErender();


}

var angle=0;











function myBallDrag(element,newpos)
{
//ball.position.set(-20,7.85,-77);
ball1.position.set(-14,8.15,-77);
ball2.position.set(-6,8.25,-77);
ruh.position.set(2,8.34,-77);
ball4.position.set(10,8.55,-77);

boxlm();


 if(road.position.y == -12.39)
 {


    if(newpos.y<=8.85 && newpos.y>=6)
    {
        ball.position.x= newpos.x;
        ball.position.y=newpos.y;
        ball.position.z=-70;
          myball=0;
          PIEchangeInputSlider(MassBall,0);
    }
 
    else if(newpos.y< 6)
    {ball.position.set(4.71,-10,-56.5);
     myball=1;
     PIEchangeInputSlider(MassBall,1);
     fgtio.position.y=-9;

    }
        key=11;
 }
 else if(road.position.y== -12.65)
 {
   ///ball.position.set( 5,-10.2+5-5.2,-56.5);


    if(newpos.y<=8.85 && newpos.y>=5)
    {
        ball.position.x= newpos.x;
        ball.position.y=newpos.y;
        ball.position.z=-70;
          myball=0;
          PIEchangeInputSlider(MassBall,0);
    }
  
    else if(newpos.y< 5)
    {

     ball.position.set( 5,-10.2+5-5.2,-56.5);
    myball=1;
     PIEchangeInputSlider(MassBall,1);
     fgtio.position.y=-9;

    }


   key=12;
 }
 else if(road.position.y == -12.9)
 {

    //ball.position.set( 5.3,-10.2+5-5.45,-56.5);

    if(newpos.y<=8.85 && newpos.y>=5)
    {
        ball.position.x= newpos.x;
        ball.position.y=newpos.y;
        ball.position.z=-70;
          myball=0;
          PIEchangeInputSlider(MassBall,0);
    }
  
    else if(newpos.y< 5)
    {
    ball.position.set( 5.3,-10.2+5-5.45,-56.5);
     myball=1;     
     PIEchangeInputSlider(MassBall,1);
          fgtio.position.y=-9;

    }
    key=13;
 }
 else if(road.position.y== -13.05)
 {
   // ball.position.set( 5.4,-10.2+5-5.5,-56.5);

    if(newpos.y<=8.85 && newpos.y>=6)
    {
        ball.position.x= newpos.x;
        ball.position.y=newpos.y;
        ball.position.z=-70;
          myball=0;
          PIEchangeInputSlider(MassBall,0);
    }
  
    else if(newpos.y< 6)
    {
       
        ball.position.set( 5.4,-10.2+5-5.5,-56.5);
        myball=1;
          PIEchangeInputSlider(MassBall,1);
     
               fgtio.position.y=-9;

    }
    key=14;
 }
else if(road.position.y== -13.25)
{
// ball.position.set(5.55,-10.2+5-5.68,-56.5);

    if(newpos.y<=8.85 && newpos.y>=5)
    {
        ball.position.x= newpos.x;
        ball.position.y=newpos.y;
        ball.position.z=-70;
          myball=0;
          PIEchangeInputSlider(MassBall,0);
    }
  
    else if(newpos.y< 5)
    {
        ball.position.set(5.55,-10.2+5-5.68,-56.5);
        myball=1;
        PIEchangeInputSlider(MassBall,1);
        boxlm();
             fgtio.position.y=-9;


    }
  key=15;
}

}

function myBall1Drag(element,newpos)
{
boxlm();


ball.position.set(-20,7.85,-77);
//ball1.position.set(-14,8.15,-77);
ball2.position.set(-6,8.25,-77);
ruh.position.set(2,8.34,-77);
ball4.position.set(10,8.55,-77);

 if(road.position.y == -12.39)
 {


    if(newpos.y<=8.85 && newpos.y>=5)
    {
        ball1.position.x= newpos.x;
        ball1.position.y=newpos.y;
        ball1.position.z=-70;
          myball=0;
          PIEchangeInputSlider(MassBall,0);
    }
    else if(newpos.y< 5)
    {
        
        ball1.position.set( 5.05,-10.2+5-4.65,-56.5 );
     myball=2;
          PIEchangeInputSlider(MassBall,2);
           key=21;
                fgtio.position.y=-9;

       
    }

    ////ball1.position.set( 5.05,-10.2+5-4.65,-56.5 );

 }

 else if(road.position.y == -12.65)
 {
   

       if(newpos.y<=8.85 && newpos.y>=5)
    {
        ball1.position.x= newpos.x;
        ball1.position.y=newpos.y;
        ball1.position.z=-70;
          myball=0;
          PIEchangeInputSlider(MassBall,0);
    }

    else if(newpos.y< 5)
    {
     
     myball=2;
          PIEchangeInputSlider(MassBall,2);
    ball1.position.set(5.3,-10.2+5-4.89,-56.5   );
    key=22;

     fgtio.position.y=-9;

    }



    
 }
 
 else if(road.position.y == -12.9)
 {    

    if(newpos.y<=8.85 && newpos.y>=5)
    {
        ball1.position.x= newpos.x;
        ball1.position.y=newpos.y;
        ball1.position.z=-70;
          myball=0;
          PIEchangeInputSlider(MassBall,0);
    }
    else if(newpos.y< 5)
    {
     
     myball=2;
          PIEchangeInputSlider(MassBall,2);
     ball1.position.set( 5.6,-10.2+ 5- 5.1,-56.5);
    key=23;
         fgtio.position.y=-9;


    }
 }
 
 else if(road.position.y ==-13.05)
 {
  if(newpos.y<=8.85 && newpos.y>=5)
    {
        ball1.position.x= newpos.x;
        ball1.position.y=newpos.y;
        ball1.position.z=-70;
          myball=0;
          PIEchangeInputSlider(MassBall,0);
    }
  
    else if(newpos.y< 5)
    {
       
     myball=2;
          PIEchangeInputSlider(MassBall,2);
     
   ball1.position.set(5.65,-10.2+5-5.28,-56.5);
    key=24;

         fgtio.position.y=-9;

    }
}
else if(road.position.y == -13.25)
{

    if(newpos.y<=8.85 && newpos.y>=5)
    {
        ball1.position.x= newpos.x;
        ball1.position.y=newpos.y;
        ball1.position.z=-70;
          myball=0;
          PIEchangeInputSlider(MassBall,0);
    }
 
    else if(newpos.y< 5)
    {
     
       
     myball=2;
          PIEchangeInputSlider(MassBall,2);
    ball1.position.set(5.83 , -10.55, -56.5);
    key=25;
         fgtio.position.y=-9;

    
    }

}
/*
else
{
    
}

*/
}
function trying()
{

       // ball.addEventListener( 'click',function(){ball.position.x= ball.position.x+10} , false )

  //ball.position.x= ball.position.x+10;
/*
function detectLeftButton(evt) {
    evt = evt || window.event;
    if ("buttons" in evt) {
        return evt.buttons == 1;
    }
    var button = evt.which || evt.button;
    return button == 1;
}
*/
/*
$(document).ready(function(){ 
  document.oncontextmenu = function() {return false;};

  $(document).mousedown(function(e){ 
    if( e.button == 2 ) { 
      alert('Right mouse button!'); 
      return false; 
    } 
    return true; 
  }); 
});
*/
/*

if(event.ball == 1 || event.ball==2 || event.ball ==3)
(ball.position.x= ball.position.x+10);
*/
/*
if(event.click()==1)
{
  ball.position.x= ball.position.x+10;

}

*/


}



function myBall2Drag(element,newpos)
{
    //hover 4 ----------13.25
//hover 3 ----------13.05
//hover 2-----------12.9
//hover 1-----------12.65
//hover ------------12.39

///////// 5.25,-10.2+5-4.4,-56.5         5.5,-10.2+5-4.6,-56.5           5.85,-10.2+5-4.89,-56.5       5.94,-10.2+5-5.07,-56.5     6.15,-10.2+5-5.2,-56.5
boxlm();


ball.position.set(-20,7.85,-77);
ball1.position.set(-14,8.15,-77);
//ball2.position.set(-6,8.25,-77);
ruh.position.set(2,8.34,-77);
ball4.position.set(10,8.55,-77);



 if(road.position.y== -12.39)
 {
     if(newpos.y<=8.85 && newpos.y>=5)
    {
        ball2.position.x= newpos.x;
        ball2.position.y=newpos.y;
        ball2.position.z=-70;
          myball=0;
          PIEchangeInputSlider(MassBall,0);
    }
  
    else if(newpos.y< 5)
    {
     
        
     myball=3;
          PIEchangeInputSlider(MassBall,3);
    ball2.position.set(5.25,-10.2+5-4.4,-56.5  );
    key=31;
         fgtio.position.y=-9;

    }


    
 }
 else if(road.position.y== -12.65)
 {        if(newpos.y<=8.85 && newpos.y>=5)
    {
        ball2.position.x= newpos.x;
        ball2.position.y=newpos.y;
        ball2.position.z=-70;
          myball=0;
          PIEchangeInputSlider(MassBall,0);
    }
  
    else if(newpos.y< 5)
    {
      myball=3;
          PIEchangeInputSlider(MassBall,3);
   ball2.position.set(5.5,-10.2+5-4.6,-56.5);
        fgtio.position.y=-9;

    key=32;    }
        
 }
 else if(road.position.y == -12.9)
 {    
      if(newpos.y<=8.85 && newpos.y>=5)
    {
        ball2.position.x= newpos.x;
        ball2.position.y=newpos.y;
        ball2.position.z=-70;
          myball=0;
          PIEchangeInputSlider(MassBall,0);
    }
  
    else if(newpos.y< 5)
    {
      
     myball=3;
          PIEchangeInputSlider(MassBall,3);
   ball2.position.set( 5.85,-10.2+5-4.89,-56.5 );
    key=33;
     fgtio.position.y=-9;

    }


}
 else if(road.position.y== -13.05)
 {    

      if(newpos.y<=8.85 && newpos.y>=5)
    {
        ball2.position.x= newpos.x;
        ball2.position.y=newpos.y;
        ball2.position.z=-70;
          myball=0;
          PIEchangeInputSlider(MassBall,0);
    }
    else if(newpos.y< 5)
    {
       
     myball=3;
          PIEchangeInputSlider(MassBall,3);
    ball2.position.set(5.94,-10.2+5-5.07,-56.5);
    key=34;
         fgtio.position.y=-9;


    }


 }
else if(road.position.y== -13.25)
{   
      if(newpos.y<=8.85 && newpos.y>=5)
    {
        ball2.position.x= newpos.x;
        ball2.position.y=newpos.y;
        ball2.position.z=-70;
          myball=0;
          PIEchangeInputSlider(MassBall,0);
    }
  
    else if(newpos.y< 5)
    {
     
        
     myball=3;
          PIEchangeInputSlider(MassBall,3);
    ball2.position.set( 6.15,-10.2+5-5.2,-56.5);
     key=35;
          fgtio.position.y=-9;

    }

}
}



var ruh;


function ruhDrag(element,newpos)
{
    //hover 4 ----------13.25
//hover 3 ----------13.05
//hover 2-----------12.9
//hover 1-----------12.65
//hover ------------12.39
/////5.54,-10.2+5-4.05,-56.5    5.85,-10.2+5-4.3,-56.5      6.17,-10.2+5-4.55,-56.5    6.27,-10.2+5-4.65,-56.5     6.48,-10.2+5-4.89,-56.5

boxlm();



ball.position.set(-20,7.85,-77);
ball1.position.set(-14,8.15,-77);
ball2.position.set(-6,8.25,-77);
ball4.position.set(10,8.55,-77);


 if(road.position.y== -12.39)
 {
     if(newpos.y<=8.85 && newpos.y>=6)
    {
        ruh.position.x= newpos.x;
        ruh.position.y=newpos.y;
        ruh.position.z=-70;
          myball=0;
          PIEchangeInputSlider(MassBall,0);
    }
  
    else if(newpos.y< 6)
    {
        
     myball=4;
          PIEchangeInputSlider(MassBall,4);
    ruh.position.set(5.38,-10.2+5-4.15,-56.5);
    key=41;
         fgtio.position.y=-9;

    }

 }
 else if(road.position.y== -12.65)
 {

 if(newpos.y<=8.85 && newpos.y>=5)
    {
        ruh.position.x= newpos.x;
        ruh.position.y=newpos.y;
        ruh.position.z=-70;
          myball=0;
          PIEchangeInputSlider(MassBall,0);
    }
      else if(newpos.y< 5)
    {
        
     myball=4;
          PIEchangeInputSlider(MassBall,4);
    ruh.position.set(5.72,-10.2+5-4.35,-56.5);
    key=42;
         fgtio.position.y=-9;

    }

 }
 else if(road.position.y == -12.9)
 {
     if(newpos.y<=8.85 && newpos.y>=5)
    {
        ruh.position.x= newpos.x;
        ruh.position.y=newpos.y;
        ruh.position.z=-70;
          myball=0;
          PIEchangeInputSlider(MassBall,0);
    }
  
    else if(newpos.y< 5)
    {
       
     myball=4;
          PIEchangeInputSlider(MassBall,4);
   ruh.position.set( 6.05,-10.2+5-4.65,-56.5);
    key=43;
         fgtio.position.y=-9;


    }
}
 else if(road.position.y== -13.05)
 {

     if(newpos.y<=8.85 && newpos.y>=5)
    {
        ruh.position.x= newpos.x;
        ruh.position.y=newpos.y;
        ruh.position.z=-70;
        myball=0;
          PIEchangeInputSlider(MassBall,0);

    }
    else if(newpos.y< 5)
    {
    
        
     myball=4;
          PIEchangeInputSlider(MassBall,4);
   ruh.position.set(6.23,-10.2+5-4.76,-56.5 );
    key=44;
         fgtio.position.y=-9;


    }


 }
else if(road.position.y== -13.25)
{

     if(newpos.y<=8.85 && newpos.y>=5)
    {
        ruh.position.x= newpos.x;
        ruh.position.y=newpos.y;
        ruh.position.z=-70;
        myball=0;
          PIEchangeInputSlider(MassBall,0);
    }

    else if(newpos.y< 5)
    {
        
     myball=4;
          PIEchangeInputSlider(MassBall,4);
   ruh.position.set(6.48,-10.2+5-4.89,-56.5);
 key=45;
      fgtio.position.y=-9;

    }
}
}





function myBall4Drag(element,newpos)
{
    //hover 4 ----------13.25
//hover 3 ----------13.05
//hover 2-----------12.9
//hover 1-----------12.65
//hover ------------12.39
/////5.54,-10.2+5-4.05,-56.5    5.85,-10.2+5-4.3,-56.5      6.17,-10.2+5-4.55,-56.5    6.27,-10.2+5-4.65,-56.5     6.48,-10.2+5-4.89,-56.5

boxlm();


ball.position.set(-20,7.85,-77);
ball1.position.set(-14,8.15,-77);
ball2.position.set(-6,8.25,-77);
ruh.position.set(2,8.34,-77);
//ball4.position.set(10,8.55,-77);


 if(road.position.y== -12.39)
 {
       if(newpos.y<=8.85 && newpos.y>=5)
    {
        ball4.position.x= newpos.x;
        ball4.position.y=newpos.y;
        ball4.position.z=-70;
        myball=0;
          PIEchangeInputSlider(MassBall,0);
    }
   
    else if(newpos.y< 5)
    {
        
     myball=5;
          PIEchangeInputSlider(MassBall,5);
    ball4.position.set(5.54,-10.2+5-4.05,-56.5);
    key=51;
         fgtio.position.y=-9;

    }
 }
 else if(road.position.y== -12.65)
 {


 if(newpos.y<=8.85 && newpos.y>=5)
    {
        ball4.position.x= newpos.x;
        ball4.position.y=newpos.y;
        ball4.position.z=-70;
        myball=0;
          PIEchangeInputSlider(MassBall,0);
    }
   
    else if(newpos.y< 5)
    {
       
     myball=5;
          PIEchangeInputSlider(MassBall,5);
    ball4.position.set(5.85,-10.2+5-4.3,-56.5);
    key=52;
         fgtio.position.y=-9;

    }
 }
 else if(road.position.y == -12.9)
 {

    if(newpos.y<=8.85 && newpos.y>=5)
    {
        ball4.position.x= newpos.x;
        ball4.position.y=newpos.y;
        ball4.position.z=-70;
        myball=0;
          PIEchangeInputSlider(MassBall,0);
    }
    
    else if(newpos.y< 5)
    {
       myball=5;
          PIEchangeInputSlider(MassBall,5);
    ball4.position.set( 6.17,-10.2+5-4.55,-56.5);
    key=53;
         fgtio.position.y=-9;

    }
}
 else if(road.position.y== -13.05)
 {


    if(newpos.y<=8.85 && newpos.y>=5)
    {
        ball4.position.x= newpos.x;
        ball4.position.y=newpos.y;
        ball4.position.z=-70;
        myball=0;
          PIEchangeInputSlider(MassBall,0);
    }
    
    else if(newpos.y< 5)
    {
     myball=5;
          PIEchangeInputSlider(MassBall,5);
     ball4.position.set(6.27,-10.2+5-4.65,-56.5 );
    key=54;
         fgtio.position.y=-9;

    }

 }
else if(road.position.y== -13.25)
{

    if(newpos.y<=8.85 && newpos.y>=5)
    {
        ball4.position.x= newpos.x;
        ball4.position.y=newpos.y;
        ball4.position.z=-70;
        myball=0;
          PIEchangeInputSlider(MassBall,0);
    }
  
    else if(newpos.y< 5)
    {
        
     myball=5;
          PIEchangeInputSlider(MassBall,5);
     ball4.position.set(6.48,-10.2+5-4.89,-56.5);
    key=55;
         fgtio.position.y=-9;

    }

    
}
}


function setBallposition(value)

{

    if(key>=11 && key<=15)
{
        ball1.position.set(-14,8.15,-77);
        ball2.position.set(-6,8.25,-77);
        ruh.position.set(2,8.34,-77);
        ball4.position.set(10,8.55,-77);

    if(road.position.y == -12.39)
    {
    ball.position.set(4.71,-10.2+5-4.79,-56.5);
    key=11;
    }
    else if(road.position.y== -12.65)
    {
    ball.position.set( 5,-10.2+5-5.2,-56.5);
    key=12;
    }
    else if(road.position.y == -12.9)
    {
    ball.position.set( 5.3,-10.2+5-5.45,-56.5);
    key=13;
    }
    else if(road.position.y== -13.05)
    {
    ball.position.set( 5.4,-10.2+5-5.5,-56.5);
    key=14;
    }
    else if(road.position.y== -13.25)
    {
    ball.position.set(5.55,-10.2+5-5.68,-56.5);
    key=15;
    }


}

else if(key>=21 &&key<=25)
{

    ball.position.set(-20,7.85,-77);
    //ball1.position.set(-14,8.15,-77);
    ball2.position.set(-6,8.25,-77);
    ruh.position.set(2,8.34,-77);
    ball4.position.set(10,8.55,-77);


    if(road.position.y == -12.39)
    {
    ball1.position.set( 5.05,-10.2+5-4.65,-56.5 );
    key=21;
    }

    else if(road.position.y == -12.65)
    {
    ball1.position.set(5.3,-10.2+5-4.89,-56.5   );
    key=22;
    }
 
    else if(road.position.y == -12.9)
    {    
    ball1.position.set( 5.6,-10.2+ 5- 5.1,-56.5);
    key=23;
    }
 
    else if(road.position.y ==-13.05)
    {
    ball1.position.set(5.65,-10.2+5-5.28,-56.5);
    key=24;
    }
    else if(road.position.y == -13.25)
    {
    ball1.position.set(5.83 , -10.55, -56.5);
    key=25;
    }


}

else if(key>=31 && key<=35)
{

    ball.position.set(-20,7.85,-77);
    ball1.position.set(-14,8.15,-77);
    //ball2.position.set(-6,8.25,-77);
    ruh.position.set(2,8.34,-77);
    ball4.position.set(10,8.55,-77);



    if(road.position.y== -12.39)
    {
    ball2.position.set(5.25,-10.2+5-4.4,-56.5  );
    key=31;
    }
    else if(road.position.y== -12.65)
    {
    ball2.position.set(5.5,-10.2+5-4.6,-56.5);
    key=32;
    }  
    else if(road.position.y == -12.9)
    {   
    ball2.position.set( 5.85,-10.2+5-4.89,-56.5 );
    key=33;
    }
    else if(road.position.y== -13.05)
    {    
    ball2.position.set(5.94,-10.2+5-5.07,-56.5);
    key=34;
    }
    else if(road.position.y== -13.25)
    {   
     ball2.position.set( 6.15,-10.2+5-5.2,-56.5);
     key=35;
    }

}

else if(key>=41 && key <=45)
{


ball.position.set(-20,7.85,-77);
ball1.position.set(-14,8.15,-77);
ball2.position.set(-6,8.25,-77);
ball4.position.set(10,8.55,-77);


 if(road.position.y== -12.39)
 {
    ruh.position.set(5.38,-10.2+5-4.15,-56.5);
    key=41;
 }
 else if(road.position.y== -12.65)
 {
ruh.position.set(5.72,-10.2+5-4.35,-56.5);
key=42;
 }
 else if(road.position.y == -12.9)
 {ruh.position.set( 6.05,-10.2+5-4.65,-56.5);
    key=43;
}
 else if(road.position.y== -13.05)
 {ruh.position.set(6.23,-10.2+5-4.76,-56.5 );
    key=44;

 }
else if(road.position.y== -13.25)
{ruh.position.set(6.48,-10.2+5-4.89,-56.5);
 key=45;
}
}
else if(key>=51 && key<=55)
{


ball.position.set(-20,7.85,-77);
ball1.position.set(-14,8.15,-77);
ball2.position.set(-6,8.25,-77);
ruh.position.set(2,8.34,-77);
//ball4.position.set(10,8.55,-77);


 if(road.position.y== -12.39)
 {
    ball4.position.set(5.54,-10.2+5-4.05,-56.5);
    key=51;
 }
 else if(road.position.y== -12.65)
 {
ball4.position.set(5.85,-10.2+5-4.3,-56.5);
key=52;
 }
 else if(road.position.y == -12.9)
 {ball4.position.set( 6.17,-10.2+5-4.55,-56.5);
    key=53;
}
 else if(road.position.y== -13.05)
 {ball4.position.set(6.27,-10.2+5-4.65,-56.5 );
    key=54;

 }
else if(road.position.y== -13.25)
{ball4.position.set(6.48,-10.2+5-4.89,-56.5);
    key=55;
}


}

 
}

//function setBallposition(value)
//{}
var ball1;
var ball2;
var ball3;
var ball4;

var avoid_Confusion;


function setposition(ey)

{
    
 if(ey==0 || ey==1 || ey==-1)
 {
        ball.position.set(-20,7.85,-77);
        ball1.position.set(-14,8.15,-77);
        ball2.position.set(-6,8.25,-77);
        ruh.position.set(2,8.34,-77);
        ball4.position.set(10,8.55,-77);

 }
  

   else if(ey>=11 && ey<=15)
{
        
        ball1.position.set(-14,8.15,-77);
        ball2.position.set(-6,8.25,-77);
        ruh.position.set(2,8.34,-77);
        ball4.position.set(10,8.55,-77);

    if(road.position.y == -12.39)
    {
    ball.position.set(4.71,-10.2+5-4.79,-56.5);
    ey=11;
    }
    else if(road.position.y== -12.65)
    {
    ball.position.set( 5,-10.2+5-5.2,-56.5);
    ey=12;
    }
    else if(road.position.y == -12.9)
    {
    ball.position.set( 5.3,-10.2+5-5.45,-56.5);
    ey=13;
    }
    else if(road.position.y== -13.05)
    {
    ball.position.set( 5.4,-10.2+5-5.5,-56.5);
    ey=14;
    }
    else if(road.position.y== -13.25)
    {
    ball.position.set(5.55,-10.2+5-5.68,-56.5);
    ey=15;
    }


}

else if(ey>=21 &&ey<=25)
{

    ball.position.set(-20,7.85,-77);
    //ball1.position.set(-14,8.15,-77);
    ball2.position.set(-6,8.25,-77);
    ruh.position.set(2,8.34,-77);
    ball4.position.set(10,8.55,-77);


    if(road.position.y == -12.39)
    {
    ball1.position.set( 5.05,-10.2+5-4.65,-56.5 );
    ey=21;
    }

    else if(road.position.y == -12.65)
    {
    ball1.position.set(5.3,-10.2+5-4.89,-56.5   );
    ey=22;
    }
 
    else if(road.position.y == -12.9)
    {    
    ball1.position.set( 5.6,-10.2+ 5- 5.1,-56.5);
    ey=23;
    }
 
    else if(road.position.y ==-13.05)
    {
    ball1.position.set(5.65,-10.2+5-5.28,-56.5);
    ey=24;
    }
    else if(road.position.y == -13.25)
    {
    ball1.position.set(5.83 , -10.55, -56.5);
    ey=25;
    }


}

else if(ey>=31 && ey<=35)
{

    ball.position.set(-20,7.85,-77);
    ball1.position.set(-14,8.15,-77);
    //ball2.position.set(-6,8.25,-77);
    ruh.position.set(2,8.34,-77);
    ball4.position.set(10,8.55,-77);



    if(road.position.y== -12.39)
    {
    ball2.position.set(5.25,-10.2+5-4.4,-56.5  );
    ey=31;
    }
    else if(road.position.y== -12.65)
    {
    ball2.position.set(5.5,-10.2+5-4.6,-56.5);
    ey=32;
    }  
    else if(road.position.y == -12.9)
    {   
    ball2.position.set( 5.85,-10.2+5-4.89,-56.5 );
    ey=33;
    }
    else if(road.position.y== -13.05)
    {    
    ball2.position.set(5.94,-10.2+5-5.07,-56.5);
    ey=34;
    }
    else if(road.position.y== -13.25)
    {   
     ball2.position.set( 6.15,-10.2+5-5.2,-56.5);
     ey=35;
    }

}

else if(ey>=41 && ey <=45)
{


ball.position.set(-20,7.85,-77);
ball1.position.set(-14,8.15,-77);
ball2.position.set(-6,8.25,-77);
ball4.position.set(10,8.55,-77);


 if(road.position.y== -12.39)
 {
    ruh.position.set(5.38,-10.2+5-4.15,-56.5);
    ey=41;
 }
 else if(road.position.y== -12.65)
 {
ruh.position.set(5.72,-10.2+5-4.35,-56.5);
ey=42;
 }
 else if(road.position.y == -12.9)
 {ruh.position.set( 6.05,-10.2+5-4.65,-56.5);
  ey=43;
}
 else if(road.position.y== -13.05)
 {ruh.position.set(6.23,-10.2+5-4.76,-56.5 );
  ey=44;

 }
else if(road.position.y== -13.25)
{ruh.position.set(6.48,-10.2+5-4.89,-56.5);
 ey=45;
}
}
else if(ey>=51 && ey<=55)
{


ball.position.set(-20,7.85,-77);
ball1.position.set(-14,8.15,-77);
ball2.position.set(-6,8.25,-77);
ruh.position.set(2,8.34,-77);
//ball4.position.set(10,8.55,-77);


 if(road.position.y== -12.39)
 {
    ball4.position.set(5.54,-10.2+5-4.05,-56.5);
    ey=51;
 }
 else if(road.position.y== -12.65)
 {
ball4.position.set(5.85,-10.2+5-4.3,-56.5);
ey=52;
 }
 else if(road.position.y == -12.9)
 {ball4.position.set( 6.17,-10.2+5-4.55,-56.5);
    ey=53;
}
 else if(road.position.y== -13.05)
 {ball4.position.set(6.27,-10.2+5-4.65,-56.5 );
    ey=54;

 }
else if(road.position.y== -13.25)
{ball4.position.set(6.48,-10.2+5-4.89,-56.5);
    ey=55;
}


}
PIErender();
 
}












var road;

var hoverit;
var hoverit1;
var hoverit2;
var hoverit3;
var hoverit4;


var myBack;
var myk;
var yk;

var helpContent;
var witchCylinder;
var priority=0;
var myh=0;
function initialiseControls()
{
    initialiseControlVariables();
    PIEaddInputSlider(PosH, Hdefault, handleH, Hmin, Hmax, Hstep);
    PIEaddInputSlider(Mass, defM, handleM , minM, maxM, stepM);
    PIEaddInputSlider(MassBall,defB,handleBall,minB,maxB,stepB);

    PIEaddDisplayText(PosH, Hdefault);
    PIEaddDisplayText(Mass, defM);
    PIEaddDisplayText(MassBall, defB);
    PIEaddDisplayText(VelB,Veldef);
    PIEaddDisplayText(PE,Pdef);
    PIEaddDisplayText(KE,Kdef);
    PIEaddDisplayText(EP,def);
    PIEaddDisplayText(Init,Hdefault);

}

var stan1;
var stan2;
var stan3;
var stan;
var stan0;
var stan4;
var stan5;
var stan6;
var stan7;
var stan8;

var massBob;
var massBob1;
var massBob2;
var massBob3;
var massBob4;


var myball;
var myball1;
var myball2;
var myball3;
var myball4;



function setCoOrdination()
{

 if(massBob==1)
 
{
  if( myball==1)
  {
    key=11;
  }
  else if( myball==2)
  {
    key=21;
  }
  else if(myball==3)
  {
    key=31;
  }
  else if(myball==4)
  {
    key=41;
  }
  else if(myball==5)
  {
    key=51;
  }
  else
  {

  }

}

else if(massBob==2)
{  if(myball==1)
  {
    key=12;
  }
 else  if(myball==2)
  {
    key=22;
  }
  else if(myball==3)
  {
    key=32;
  }
 else  if(myball==4)
  {
    key=42;
  }
 else if(myball==5)
  {
    key=52;
  }
  else
  {

  }

}

else if(massBob==3)

{
  if(myball==1)
  {
    key=13;
  }
  else if(myball==2)
  {
    key=23;
  }
  else if(myball==3)
  {
    key=33;
  }
  else if(myball==4)
  {
    key=43;
  }
  else if(myball==5)
  {
    key=53;
  }
  else
  {

  }
}

else if(massBob==4)
{
  if(myball==1)
  {
    key=14;
  }
  else if(myball==2)
  {
    key=24;
  }
  else if(myball==3)
  {
    key=34;
  }
  else if(myball==4)
  {
    key=44;
  }
  else if(myball==5)
  {
    key=54;
  }
  else
  {

  }
}

else if(massBob==5)
{
  if(myball==1)
  {
    key=15;
  }
  else if(myball==2)
  {
    key=25;
  }
  else if(myball==3)
  {
    key=35;
  }
  else if(myball==4)
  {
    key=45;
  }
  else if(myball==5)
  {
    key=55;
  }
  else
  {

  }
  
}

else if(massBob==0)
{

  
}



}


function handleM(newValue)
{
    massBob=newValue;
    bobTrack=newValue;
    ob=newValue;
     comingFromControls=1;
boxlm();
     key= (10*all)+1;
    callHere(newValue);

    ved=(10*myball)+ massBob;

    if(myball!=0)
    {
        setposition(ved);
    }
    track=-calll;
    pjk=2;
    bc=0;
    PIErender();
}

function handleBall(newValue)
{
     myball=newValue;
     all=newValue;
     ballTrack=newValue;
     comingFromControls=1;
     key= (10*all)+1;
       //callHere(bobTrack);
       boxlm();
    rollTheBall(newValue);
     ved=(10*myball)+massBob;

    if(myball!=0)
    {
        setposition(ved);
    }
    track=-calll;
    pjk=2;
    bc=0;
    PIErender();
}

var calll;

var track=(-0);
var cal;
var hypo;
var adj;
var ang;
var degree;
var opp;

var PE;
var KE;
var Pdef;
var Kdef;
var effect=-(0.0)*Math.PI;



var ps=0;








function  myHover1Drag(element, newpos)
{

boxlm();

if(comingFromControls==1)
{
    setCoOrdination();
    comingFromControls=0;
    pjk=-1;
}



priority=1;
var k=1;

PIErender();

if ( (newpos.y<36.5)&&(newpos.y>=5))
{
road.position.set((sWidth+sHeight+750)/2,-12.65,  -55);

roadSet=2;

//witchCylinder.rotation.z=0;
setBallposition(2);

hoverit.position.set(-22,10+26.66,-50.7);
hoverit.rotation.z=0;

//hoverit1.position.set(-14,10+26.84,-50.7);
hoverit1.rotation.z=0;

hoverit2.position.set(-6,10+27.1,-50.7);
hoverit2.rotation.z=0;

hoverit3.position.set(2,10+27.32,-50.7);
hoverit3.rotation.z=0;

hoverit4.position.set(10,10+27.57,-50.7);
hoverit4.rotation.z=0;
PIErender();
shadow .position.set(-92, 10-4.9,-28 );
if(newpos.y<=36.5 && newpos.y>= 32)
{
    hoverit1.position.x=newpos.x;
    hoverit1.position.y=newpos.y;
    hoverit1.position.z=-40;
    massBob=0;
    PIEchangeInputSlider(Mass,0);
     ved=(10*myball)+ massBob;

    if(myball!=0)
    {
        setposition(ved);
    }
    PIErender();
        PIEchangeInputSlider(PosH,0);

}

else if(newpos.y<33)
{

    pedf= -(hei/600) * Math.PI;
       
     PIErender();
    hoverit1.position.set(2,10-4.9,-27.85);
    //witchCylinder.rotation.z=0;
    hoverit1.rotation.z=pedf;

    ved=(10*myball)+ massBob;


    if(myball!=0)
    {
        setposition(ved);
    }
 

    PIErender();
        PIEchangeInputSlider(PosH,hei);

sync=0;
 pjk=2;
 massBob=2;
 freeFall=26;
 myh=hei;
  bc=0;
    pjk=-1;

    PIEchangeInputSlider(Mass,2);
    boxlm();
         fgtio.position.y=-9;


}
  if(hoverit1.position.y==(5.1))
  {
    if(newpos.y>=5.1 && newpos.y<=14)
    {
     hoverit1.rotation.z= ((newpos.y-5.1)/(8.9))*(-210/600)*Math.PI;
     witchCylinder.rotation.z=((newpos.y-5.1)/(8.9))*(-210/600)*Math.PI;
     pedf=((newpos.y-5.1)/(8.9))*(-210/600)*Math.PI;
     hei=((newpos.y-5.1)/(8.9))*(210);
     track=((newpos.y-5.1)/(8.9))*(-(210)/600)*Math.PI;

 myh=hei;
 Iheigh=myh;
 calll= hei/600;
 boxlm();
witchCylinder.rotation.z= (-calll)*Math.PI;
 angle=(-calll)*Math.PI;
 key= (10*all)+1;
pjk=2;
 track=-calll;
 hei=myh;
 bc=0;
 PIEchangeInputSlider(PosH,hei);
    }


  }

}

// hoverit.position.z= newpos.z;
 PIErender();
 //PIEstartAnimation();
}



function  myHoverDrag(element, newpos)
{

boxlm();

if(comingFromControls==1)
{
    setCoOrdination();
    comingFromControls=0;
    pjk=-1;
}

priority=1;
var k=1;


if ((newpos.y<36.5)&&(newpos.y>=6) )
{
road.position.set((sWidth+sHeight+750)/2,-12.39,  -55);

//hoverit.position.set(2,10-4.9,-27.85);


roadSet=1;
setBallposition(roadSet);

///witchCylinder.rotation.z=0;

hoverit.rotation.z=0;

hoverit1.position.set(-14,10+26.84,-50.7);
hoverit1.rotation.z=0;

hoverit2.position.set(-6,10+27.1,-50.7);
hoverit2.rotation.z=0;

hoverit3.position.set(2,10+27.32,-50.7);
hoverit3.rotation.z=0;

hoverit4.position.set(10,10+27.57,-50.7);
hoverit4.rotation.z=0;
//////////////////////////////////////////////////////////////////////////////
if(newpos.y<=36 && newpos.y>=33)
{
hoverit.position.x=newpos.x;
hoverit.position.y=newpos.y;
hoverit.position.z=-40;
  massBob=0;
    PIEchangeInputSlider(Mass,0);

 ved=(10*myball)+ massBob;

    if(myball!=0)
    {
        setposition(ved);
    }
    PIErender();
        PIEchangeInputSlider(PosH,0);
}

else if(newpos.y<33 )
{

  bc=0;
   myh=hei;
  massBob=1;
 freeFall=16;
 sync=0;
     pedf= -(hei/600) * Math.PI;


    ved=(10*myball)+ massBob;

    if(myball!=0)
    {
        setposition(ved);
    }
        PIEchangeInputSlider(PosH,hei);

     PIErender();
    hoverit.position.set(2,10-4.9,-27.85);
    hoverit.rotation.z=pedf;
  //  witchCylinder.rotation.z=pedf;
      PIEchangeInputSlider(Mass,1);
      boxlm();
        fgtio.position.y=-9;

}


/////////////////////////////////////////////////////////////////////////////////


pjk=-1;

  shadow .position.set(-92, 10-4.9,-28 );
  PIErender();

if(hoverit.position.y==(5.1))
  {
    if(newpos.y>=5.1 && newpos.y<=14)
    {
     hoverit.rotation.z= ((newpos.y-5.1)/(8.9))*(-210/600)*Math.PI;
     witchCylinder.rotation.z=((newpos.y-5.1)/(8.9))*(-210/600)*Math.PI;
     pedf=((newpos.y-5.1)/(8.9))*(-210/600)*Math.PI;
     hei=((newpos.y-5.1)/(8.9))*(210);
     track=((newpos.y-5.1)/(8.9))*(-(210)/600)*Math.PI;

 myh=hei;
 Iheigh=myh;
 calll= hei/600;
 boxlm();
witchCylinder.rotation.z= (-calll)*Math.PI;
 angle=(-calll)*Math.PI;
 key= (10*all)+1;
pjk=2;
 track=-calll;
 hei=myh;
 bc=0;
 PIEchangeInputSlider(PosH,hei);
    }


  }




}

 PIErender();
// PIEstartAnimation();
}


function  myHover4Drag(element, newpos)
{
boxlm();


if(comingFromControls==1)
{
    setCoOrdination();
    comingFromControls=0;
    pjk=-1;
}

priority=1;
var k=1;


if ((newpos.y<36.5)&&(newpos.y>=5) )
{


road.position.set((sWidth+sHeight+750)/2,-13.25,  -55);
roadSet=5;
setBallposition(roadSet);

//hoverit4.position.set(2,10-4.9,-27.85);
///witchCylinder.rotation.z=0;


hoverit.position.set(-22,10+26.66,-50.7);
hoverit.rotation.z=0;

hoverit1.position.set(-14,10+26.84,-50.7);
hoverit1.rotation.z=0;

hoverit2.position.set(-6,10+27.1,-50.7);
hoverit2.rotation.z=0;

hoverit3.position.set(2,10+27.32,-50.7);
hoverit3.rotation.z=0;

//hoverit4.position.set(10,10+27.57,-50.7);
hoverit4.rotation.z=0;

if(newpos.y<=36 && newpos.y>=33)
{
hoverit4.position.x=newpos.x;
hoverit4.position.y=newpos.y;
hoverit4.position.z=-40;
  massBob=0;
    PIEchangeInputSlider(Mass,0);

 ved=(10*myball)+ massBob;

    if(myball!=0)
    {
        setposition(ved);
    }
    PIErender();
        PIEchangeInputSlider(PosH,0);

}


else if(newpos.y<33)
{
  bc=0;
   myh=hei;

       pedf= -(hei/600) * Math.PI;

 // massBob=4;
 freeFall=56;
 sync=0;
massBob=5;

    ved=(10*myball)+ massBob;

    if(myball!=0)
    {
        setposition(ved);
    } 
     PIErender();
         PIEchangeInputSlider(PosH,hei);

    hoverit4.position.set(2,10-4.9,-27.85);
    hoverit4.rotation.z=pedf;
    //witchCylinder.rotation.z=0;
      PIEchangeInputSlider(Mass,5);
      pjk=-1;
boxlm();
  shadow .position.set(-92, 10-4.9,-28 );
     fgtio.position.y=-9;

  PIErender();


  }


  if(hoverit4.position.y==(5.1))
  {
    if(newpos.y>=5.1 && newpos.y<=14)
    {
     hoverit4.rotation.z= ((newpos.y-5.1)/(8.9))*(-210/600)*Math.PI;
     witchCylinder.rotation.z=((newpos.y-5.1)/(8.9))*(-210/600)*Math.PI;
     pedf=((newpos.y-5.1)/(8.9))*(-210/600)*Math.PI;
     hei=((newpos.y-5.1)/(8.9))*(210);
     track=((newpos.y-5.1)/(8.9))*(-(210)/600)*Math.PI;

 myh=hei;
 Iheigh=myh;
 calll= hei/600;
 boxlm();
witchCylinder.rotation.z= (-calll)*Math.PI;
 angle=(-calll)*Math.PI;
 key= (10*all)+1;
pjk=2;
 track=-calll;
 hei=myh;
 bc=0;
 PIEchangeInputSlider(PosH,hei);
    }


  }











}

// hoverit.position.z= newpos.z;
 PIErender();
 //PIEstartAnimation();
}



function box()
{
hu=0
if(hu==0)
{
  fgt.position.set(2,3,-50);
}


}



function  myHover2Drag(element, newpos)
{

boxlm();

if(comingFromControls==1)
{
    setCoOrdination();
    comingFromControls=0;
    pjk=-1;
}

priority=1;
var k=1;

if ((newpos.y<36.5)&&(newpos.y>=5) )
{

roadSet=3;
setBallposition(roadSet);

//hoverit2.position.set(2,10-4.9,-27.85);
///witchCylinder.rotation.z=0;

road.position.set((sWidth+sHeight+750)/2,-12.9,  -55);


hoverit.position.set(-22,10+26.66,-50.7);
hoverit.rotation.z=0;

hoverit1.position.set(-14,10+26.84,-50.7);
hoverit1.rotation.z=0;

//hoverit2.position.set(-6,10+27.1,-50.7);
hoverit2.rotation.z=0;

hoverit3.position.set(2,10+27.32,-50.7);
hoverit3.rotation.z=0;

hoverit4.position.set(10,10+27.57,-50.7);
hoverit4.rotation.z=0;1

pjk=-1;
////////////////////////////////

if(newpos.y<=36 && newpos.y>=33)
{
hoverit2.position.x=newpos.x;
hoverit2.position.y=newpos.y;
hoverit2.position.z=-40;
  massBob=0;
    PIEchangeInputSlider(Mass,0);

 ved=(10*myball)+ massBob;

    if(myball!=0)
    {
        setposition(ved);
    }
    PIErender();
        PIEchangeInputSlider(PosH,0);


}
else if(newpos.y<33)
{
 bc=0;
   myh=hei;
 // massBob=4;
 freeFall=36;
 sync=0;
massBob=3;
    pedf= -(hei/600) * Math.PI;

  
    ved=(10*myball)+ massBob;

    if(myball!=0)
    {
        setposition(ved);
    }
     PIErender();
         PIEchangeInputSlider(PosH,hei);

    hoverit2.position.set(2,10-4.9,-27.85);
    hoverit2.rotation.z=pedf;
   // witchCylinder.rotation.z=0;
      PIEchangeInputSlider(Mass,3);
      boxlm();
           fgtio.position.y=-9;

  }

////////////////////////////////////////

  shadow .position.set(-92, 10-4.9,-28 );
  PIErender();



if(hoverit2.position.y==(5.1))
  {
    if(newpos.y>=5.1 && newpos.y<=14)
    {
     hoverit2.rotation.z= ((newpos.y-5.1)/(8.9))*(-210/600)*Math.PI;
     witchCylinder.rotation.z=((newpos.y-5.1)/(8.9))*(-210/600)*Math.PI;
     pedf=((newpos.y-5.1)/(8.9))*(-210/600)*Math.PI;
     hei=((newpos.y-5.1)/(8.9))*(210);
     track=((newpos.y-5.1)/(8.9))*(-(210)/600)*Math.PI;

 myh=hei;
 Iheigh=myh;
 calll= hei/600;
 boxlm();
witchCylinder.rotation.z= (-calll)*Math.PI;
 angle=(-calll)*Math.PI;
 key= (10*all)+1;
pjk=2;
 track=-calll;
 hei=myh;
 bc=0;
 PIEchangeInputSlider(PosH,hei);
    }


  }





}


// hoverit.position.z= newpos.z;
 PIErender();
 //PIEstartAnimation();
}



function  myHover3Drag(element, newpos)
{

boxlm();

if(comingFromControls==1)
{
    setCoOrdination();
    comingFromControls=0;
    pjk=-1;
}

priority=1;
var k=1;



if ((newpos.y<36.5)&&(newpos.y>=5) )
{


roadSet=4;
setBallposition(roadSet);

//hoverit3.position.set(2,10-4.9,-27.85);
road.position.set((sWidth+sHeight+750)/2,-13.05,  -55);

///witchCylinder.rotation.z=0;

hoverit.position.set(-22,10+26.66,-50.7);
hoverit.rotation.z=0;

hoverit1.position.set(-14,10+26.84,-50.7);
hoverit1.rotation.z=0;

hoverit2.position.set(-6,10+27.1,-50.7);
hoverit2.rotation.z=0;

///hoverit3.position.set(2,10+27.32,-50.7);
hoverit3.rotation.z=0;

hoverit4.position.set(10,10+27.57,-50.7);
hoverit4.rotation.z=0;

pjk=-1;

if(newpos.y<=36 && newpos.y>=33)
{
hoverit3.position.x=newpos.x;
hoverit3.position.y=newpos.y;
hoverit3.position.z=-40;
  massBob=0;
    PIEchangeInputSlider(Mass,0);
     ved=(10*myball)+ massBob;

    if(myball!=0)
    {
        setposition(ved);
    }
    PIErender();
        PIEchangeInputSlider(PosH,0);


}

else if(newpos.y<33 )
{
 bc=0;
   myh=hei;
 // massBob=4;
 freeFall=46;
 sync=0;
  massBob=4;
      pedf= -(hei/600) * Math.PI;

    hoverit3.position.set(2,10-4.9,-27.85);
    hoverit3.rotation.z=pedf;
    //witchCylinder.rotation.z=0;

    ved=(10*myball)+ massBob;

    if(myball!=0)
    {
        setposition(ved);
    }
    PIEchangeInputSlider(PosH,hei);

    PIErender();
      PIEchangeInputSlider(Mass,4);
      boxlm();
           fgtio.position.y=-9;

  }

if(hoverit3.position.y==(5.1))
  {
    if(newpos.y>=5.1 && newpos.y<=14)
    {
     hoverit3.rotation.z= ((newpos.y-5.1)/(8.9))*(-210/600)*Math.PI;
     witchCylinder.rotation.z=((newpos.y-5.1)/(8.9))*(-210/600)*Math.PI;
     pedf=((newpos.y-5.1)/(8.9))*(-210/600)*Math.PI;
     hei=((newpos.y-5.1)/(8.9))*(210);
     track=((newpos.y-5.1)/(8.9))*(-(210)/600)*Math.PI;

 myh=hei;
 Iheigh=myh;
 calll= hei/600;
 boxlm();
witchCylinder.rotation.z= (-calll)*Math.PI;
 angle=(-calll)*Math.PI;
 key= (10*all)+1;
pjk=2;
 track=-calll;
 hei=myh;
 bc=0;
 PIEchangeInputSlider(PosH,hei);
    }


  }
  


  shadow .position.set(-92, 10-4.9,-28 );
  PIErender();

}

// hoverit.position.z= newpos.z;
 PIErender();
 //PIEstartAnimation();
}

var ballTrack=-1;
var bobTrack=-1;
var witchTrack=-1;

var klf=0;

function rollTheBall(value)
{
 if(value==0)
 {setposition(0);
 }
 else if(value==1)
 {

    setposition(12);
 }
 else if(value==2)
 {
    setposition(22);

 }
 else if(value==3)
 {
 
    setposition(34);
 }
 else if(value==4)
 {
    setposition(42);

 }
 else if(value==5)
 {
    setposition(51);

 }

}

var ob=0;
var all=0;


function checkHeight(value)
{
witchCylinder.rotation.z= value;

}

var Istopped=0;
var Iheigh=0;

function handleH(newValue)
{

 hei=newValue;
 myh=hei;
 Iheigh=myh;
 calll= newValue/600;
 comingFromControls=1;
 boxlm();
if(massBob==1)
{
hoverit.rotation.z=(-calll)*Math.PI;
}
else if(massBob==2)
{
hoverit1.rotation.z=(-calll)*Math.PI;

}
else if(massBob==3)
{
hoverit2.rotation.z=(-calll)*Math.PI;

}
else if(massBob==4)
{
hoverit3.rotation.z=(-calll)*Math.PI;

}
else if(massBob==5)
{
hoverit4.rotation.z=(-calll)*Math.PI;

}

 witchCylinder.rotation.z= (-calll)*Math.PI;
 

 angle=(-calll)*Math.PI;
 key= (10*all)+1;


pjk=2;
// /callHere(ob);
// rollTheBall(all);
 track=-calll;
 hei=myh;

 bc=0;
 PIErender();

}
var change;

var PosH;
var Hdefault;
var  Hmin;
var Hmax;
var Hstep;

var Mass;
var defM;
var minM;
var maxM;
var stepM;

var MassBall;
var defB;
var minB;
var maxB;
var stepB;

var VelB;
var Veldef;

var shadow;
var mainMesh;

function move1()
{



//mainMesh.on(‘click’, function(){callit });

//hoverit.onclick = function(){callit();}
lijo=(-(hei)/600)* Math.PI;
  if(hoverit.position.x== -22 )
  {
    hoverit.rotation.z=lijo;
    
    road.position.y=-12.34;
    PIEchangeInputSlider(Mass,1);
massBob=1;

hoverit.position.set(2,10-4.9,-27.85);
  hoverit.rotation.z=lijo;

//hoverit.position.set(-22,10+26.66,-50.7);

hoverit1.position.set(-14,10+26.84,-50.7);
hoverit1.rotation.z=0;

hoverit2.position.set(-6,10+27.1,-50.7);
hoverit2.rotation.z=0;

hoverit3.position.set(2,10+27.32,-50.7);
hoverit3.rotation.z=0;

hoverit4.position.set(10,10+27.57,-50.7);
hoverit4.rotation.z=0;


boxlm();

  }


}

function initialiseControlVariables()
{



    VelB="V Ball- m/s";
    Veldef=3;
    

    Init ="BobHeight- m";

       PosH="InitialBobHeight- m";                 
    Hdefault=0;        
    Hmin=0;  
    Hmax=210; 
    Hstep=1; 


    Mass="Mass of Bob- kgs";
    defM=0;
    minM=0;
    maxM= 5;
    stepM=1; 
    massBob=0; 

    MassBall="Mass of Ball- kgs";
    defB=0;
    minB=0;
    maxB= 5;
    stepB=1;
    myball=0;

    hei=0.0;

    Pdef= 20*9.8*150;
    PE = "P.E of Bob- J";

    def= 20*9.8*150;
    EP = "Initial P.E-Bob- J";

    Kdef= 0;
    KE= "K.E of ball- J"; 



}



function moveH()
{
  if(massBob!=1)
 {
  olne.position.y=35.5;

 }
  else
 {
  olne.position.y=135.5;
 }
}

function moveH1()
{
  if(massBob!=2)
 {
    olne.position.y=35.5;

 }
  else
 {
  olne.position.y=135.5;
 }
}


function moveH2()
{
  if(massBob!=3)
 {
    olne.position.y=35.5;

 }
  else
 {
  olne.position.y=135.5;
 }

}

function moveH3()
{
  if(massBob!=4)
 {
    olne.position.y=35.5;

 }
 else
 {
  olne.position.y=135.5;
 }
}

function moveH4()
{
  if(massBob!=5)
 {
  olne.position.y=35.5;
 }
 else
 {
  olne.position.y=135.5;
 }
}





function bmoveH()
{
  if(myball!=1)
 {
  olne.position.y=35.5;

 }
  else
 {
  olne.position.y=135.5;
 }
}

function bmoveH1()
{
  if(myball!=2)
 {
    olne.position.y=35.5;

 }
  else
 {
  olne.position.y=135.5;
 }
}


function bmoveH2()
{
  if(myball!=3)
 {
    olne.position.y=35.5;

 }
  else
 {
  olne.position.y=135.5;
 }

}

function bmoveH3()
{
  if(myball!=4)
 {
    olne.position.y=35.5;

 }
 else
 {
  olne.position.y=135.5;
 }
}

function bmoveH4()
{
  if(myball!=5)
 {
  olne.position.y=35.5;
 }
 else
 {
  olne.position.y=135.5;
 }
}












function initialiseHelp()
{



    helpContent="";
    helpContent = helpContent + "<h2>Conversion of Potential energy to Kinetic energy</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
        helpContent = helpContent + "<p>Set the height of the bob using the control unit or set the height of the bob by dragging the bob and set the mass of both the ball and the bob using the control unit.</p>";
 helpContent = helpContent + "<h3>Operation:</h3>";
 helpContent = helpContent + "<p>Start the experiment to observe the instantaneous change in height of bob(golden), the velocity attained the ball(purple) and the changes in the kinetic energy of bob and potential energy of ball respectively</p>";
helpContent = helpContent + "<h2>Happy Experimenting</h2>";
PIEupdateHelp(helpContent);
}

var infoContent;

function initialiseInfo()
{

    infoContent =  "";
    infoContent = infoContent + "<h2>Conversion of Potential energy to Kinetic energy</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shows a bob (golden colour) and ball (purple colour). The mass of the bob and the ball is measured in kgs. The distances is measured in m(metres). The velocity is measured in m/s(metres/second). Both potential and Kinetic Energy are measured in Joules(J). The acceleration due to gravity is assumed to be 9.8 m/s^2 toward the ground(downwards).</p>";
    infoContent = infoContent + "<h3>Law of conservation of energy</h3>";
    infoContent = infoContent + "<p>By the law of conservation of energy,at zero friction and ideal cases and potential energy is measured with respect to ball, the potential energy of the bob is completely tranferred to the ball in the form of kinetic energy</p>";
     infoContent = infoContent + "<h3>Equation</h3>";
    infoContent = infoContent + "<p>The experiment solely works based on the equation-'mass of bob(yellow) * acceleration due to gravity * it's initial height(w.r.t ball) = 0.5* mass of ball * (final velocity of ball)^2'</p>";
    infoContent = infoContent + "<h2>Happy Experimenting</h2>";
    PIEupdateInfo(infoContent);

}

 var ball;
 var sWidth=32;
 var sHeight=22;


var start=0;
function boxlm()
{

fgtio.position.set(18,-19,-60);



if(massBob==0)
{

fgt.position.y=24;
se.position.y=22;
fgt5.position.y=190;
}
else
{
  fgt.position.y=105;
  se.position.y=122;
  fgt5.position.y=24;

}

if(myball==0)
{
fgt2.position.y=33;
se.position.y=31;
fgt7.position.y=228;
}
else
{
fgt2.position.y=130;
se.position.y=128;
fgt7.position.y=28;


}

if(hei==0)
{
 fgt6.position.y=-10;
}
else
{
 fgt6.position.y=-60;


}


if( (myball!=0) && (massBob!=0) && (hei!=0))
{
  fgt9.position.y=30;

}
else
{
  fgt9.position.y=130;

}



PIErender();


olne.position.y=135;



}





function loadExperimentElements()

{

PIEsetExperimentTitle("Potential Energy to Kinetic Energy");
PIEsetDeveloperName("Reddypalli RuhiTaj");
PIEhideControlElement();
initialiseHelp();
initialiseInfo();
initialiseControls();

loader = new THREE.TextureLoader();
var texture = THREE.ImageUtils.loadTexture('images/h.gif', {}, function() {PIErender();});
texture.anisotropy = 16;
var geometry = new THREE.BoxGeometry(  8*(sWidth+14), 8*(sHeight+4.5), 3 );
 var material = new THREE.MeshLambertMaterial( {color: 0xffffff , map:texture} );
 var Back = new THREE.Mesh( geometry, material );
 Back.position.set((sWidth+sHeight+100.6-5)/2,(sWidth+sHeight-28)/2-1,  -100);
Back.receiveShadow = false;
PIEaddElement(Back);
        PIEsetHoverON(Back,boxlm);


var Bk = new THREE.Mesh( geometry, material );
 Bk.position.set((sWidth+sHeight-14.6+660)/2,(sWidth+sHeight-28)/2-1,  -100);
Bk.receiveShadow = false;
PIEaddElement(Bk);
        PIEsetHoverON(Bk,boxlm);


var Bk1 = new THREE.Mesh( geometry, material );
 Bk1.position.set((sWidth+sHeight-14.6+1220)/2,(sWidth+sHeight-28)/2-1,  -100);
Bk1.receiveShadow = false;
PIEaddElement(Bk1);
        PIEsetHoverON(Bk1,boxlm);












loader = new THREE.TextureLoader();
var texture = THREE.ImageUtils.loadTexture('images/ruhi.gif', {}, function() {PIErender();});
texture.anisotropy = 16;




var mainMesh = new THREE.MeshPhysicalMaterial({ map:texture, transparent:true});
var g= new THREE.PlaneGeometry(2.8,2.8);
g.applyMatrix( new THREE.Matrix4().makeTranslation( 0, -15.2, -29 ) );
hoverit =new THREE.Mesh(g,mainMesh);
hoverit.position.set(-22,10+26.66,-50.7);
PIEaddElement(hoverit);
PIEsetHoverON(hoverit,moveH);

//hoverit.addEventListener( 'click',function(){move1()} , false );

PIEdragElement(hoverit);
PIEsetDrag(hoverit, myHoverDrag);


g= new THREE.PlaneGeometry(3.4,3.4);
g.applyMatrix( new THREE.Matrix4().makeTranslation( 0, -15.2, -29 ) );
hoverit1 =new THREE.Mesh(g,mainMesh);
hoverit1.position.set(-14,10+26.84,-50.7);
hoverit1.castShadow=true;
PIEaddElement(hoverit1);
PIEsetHoverON(hoverit1,moveH1);

PIEdragElement(hoverit1);
PIEsetDrag(hoverit1, myHover1Drag);

g= new THREE.PlaneGeometry(4,4);
g.applyMatrix( new THREE.Matrix4().makeTranslation( 0, -15.2, -29 ) );
hoverit2 =new THREE.Mesh(g,mainMesh);
hoverit2.position.set(-6,10+27.1,-50.7);
hoverit2.castShadow=true;
hoverit2.rotation.z=0;
PIEaddElement(hoverit2);
PIEsetHoverON(hoverit2,moveH2);

PIEdragElement(hoverit2);
PIEsetDrag(hoverit2, myHover2Drag);

g= new THREE.PlaneGeometry(4.3,4.3);
g.applyMatrix( new THREE.Matrix4().makeTranslation( 0, -15.2, -29 ) );
hoverit3 =new THREE.Mesh(g,mainMesh);
hoverit3.position.set(2,10+27.32,-50.7);
hoverit3.castShadow=true;
PIEaddElement(hoverit3);
PIEsetHoverON(hoverit3,moveH3);

PIEdragElement(hoverit3);
PIEsetDrag(hoverit3, myHover3Drag);

g= new THREE.PlaneGeometry(4.7,4.7);
g.applyMatrix( new THREE.Matrix4().makeTranslation( 0, -15.2, -29 ) );
hoverit4 =new THREE.Mesh(g,mainMesh);
hoverit4.position.set(10,10+27.57,-50.7);
hoverit4.castShadow=true;
lk= -(15/60)*Math.PI;
hoverit4.rotation.z=0;
PIEaddElement(hoverit4);
PIEsetHoverON(hoverit4,moveH4);

PIEdragElement(hoverit4);
PIEsetDrag(hoverit4, myHover4Drag);

////////////////////////////////////////////////////////////////////////////////////////////
var te = THREE.ImageUtils.loadTexture('images/1kg.png', {}, function() {PIErender();});
te.anisotropy=50;
var m = new THREE.MeshPhysicalMaterial({map:te,transparent:true});
var geo= new THREE.PlaneGeometry(3.5,1.9);
one =new THREE.Mesh(geo,m);
one.position.set(-21.5,13,-80);
PIEaddElement(one);

one =new THREE.Mesh(geo,m);
one.position.set(-21.5,26.5,-80);
PIEaddElement(one)

var te = THREE.ImageUtils.loadTexture('images/balls.png', {}, function() {PIErender();});
te.anisotropy=50;
var m = new THREE.MeshPhysicalMaterial({map:te,transparent:true});
var geo= new THREE.PlaneGeometry(4,2.3);
one =new THREE.Mesh(geo,m);
one.position.set(15.5,9,-80);
PIEaddElement(one);



var te = THREE.ImageUtils.loadTexture('images/String.png', {}, function() {PIErender();});
te.anisotropy=50;
var m = new THREE.MeshPhysicalMaterial({map:te,transparent:true});
var geo= new THREE.PlaneGeometry(4.3,2.3);
one =new THREE.Mesh(geo,m);
one.position.set(-2.5,-3,-80);
PIEaddElement(one);



var te = THREE.ImageUtils.loadTexture('images/holdd.png', {}, function() {PIErender();});
te.anisotropy=50;
var m = new THREE.MeshPhysicalMaterial({map:te,transparent:true});
var geo= new THREE.PlaneGeometry(14,2.3);
olne =new THREE.Mesh(geo,m);
olne.position.set(-2.5,135.5,-70);
PIEaddElement(olne);





var te = THREE.ImageUtils.loadTexture('images/bobs.png', {}, function() {PIErender();});
te.anisotropy=50;
var m = new THREE.MeshPhysicalMaterial({map:te,transparent:true});
var geo= new THREE.PlaneGeometry(4,2.3);
one =new THREE.Mesh(geo,m);
one.position.set(15.5,22.5,-80);
PIEaddElement(one);


var te = THREE.ImageUtils.loadTexture('images/2kg.png', {}, function() {PIErender();});
te.anisotropy=50;
var m = new THREE.MeshPhysicalMaterial({map:te});
//var geo= new THREE.PlaneGeometry(3.5,1.9);
one =new THREE.Mesh(geo,m);
one.position.set(-15,13,-80);
PIEaddElement(one);

one =new THREE.Mesh(geo,m);
one.position.set(-14,26.5,-80);
PIEaddElement(one);


var te = THREE.ImageUtils.loadTexture('images/3kg.png', {}, function() {PIErender();});
te.anisotropy=50;
var m = new THREE.MeshPhysicalMaterial({map:te});
//var geo= new THREE.PlaneGeometry(3.5,1.9);
one =new THREE.Mesh(geo,m);
one.position.set(-7,13,-80);
PIEaddElement(one);

one =new THREE.Mesh(geo,m);
one.position.set(-6,26.5,-80);
PIEaddElement(one);


var te = THREE.ImageUtils.loadTexture('images/4kg.png', {}, function() {PIErender();});
te.anisotropy=50;
var m = new THREE.MeshPhysicalMaterial({map:te});
//var geo= new THREE.PlaneGeometry(3.5,1.9);
one =new THREE.Mesh(geo,m);
one.position.set(1.5,13,-80);
PIEaddElement(one);

one =new THREE.Mesh(geo,m);
one.position.set(2,26.5,-80);
PIEaddElement(one);

var te = THREE.ImageUtils.loadTexture('images/5kg.png', {}, function() {PIErender();});
te.anisotropy=50;
var m = new THREE.MeshPhysicalMaterial({map:te});
//var geo= new THREE.PlaneGeometry(3.5,1.9);
one =new THREE.Mesh(geo,m);
one.position.set(9.5,13,-80);
PIEaddElement(one);

one =new THREE.Mesh(geo,m);
one.position.set(9.8,26.5,-80);
PIEaddElement(one);

//////////////////////////////////////////////////////////////////////////////////////////

var texture = THREE.ImageUtils.loadTexture('images/ball.gif', {}, function() {PIErender();});
var m = new THREE.MeshPhysicalMaterial({ color: 0xffffff,map:texture,transparent:true});
var geo= new THREE.PlaneGeometry(2.57,2.57);
ball =new THREE.Mesh(geo,m);
ball.position.set(-20,7.85,-77);
PIEaddElement(ball);
PIEdragElement(ball);
PIEsetDrag(ball,myBallDrag);
PIEsetHoverON(ball,bmoveH);


var geo= new THREE.PlaneGeometry(3.2,3.2);
ball1 =new THREE.Mesh(geo,m);
ball1.position.set(-14,8.15,-77);
PIEaddElement(ball1);
PIEdragElement(ball1);
PIEsetDrag(ball1,myBall1Drag);
PIEsetHoverON(ball1,bmoveH1);


var geo= new THREE.PlaneGeometry(3.73,3.73);
ball2 =new THREE.Mesh(geo,m);
ball2.position.set(-6,8.25,-77);
PIEaddElement(ball2);
PIEdragElement(ball2);
PIEsetDrag(ball2,myBall2Drag);
PIEsetHoverON(ball2,bmoveH2);



var geo= new THREE.PlaneGeometry(3.98,3.98);
ruh =new THREE.Mesh(geo,m);
ruh.position.set(2,8.34,-77);
PIEaddElement(ruh);
PIEdragElement(ruh);
PIEsetDrag(ruh,ruhDrag);
PIEsetHoverON(ruh,bmoveH3);


var geo= new THREE.PlaneGeometry(4.4,4.4);
ball4 =new THREE.Mesh(geo,m);
ball4.position.set(10,8.55,-77);
PIEaddElement(ball4);
PIEdragElement(ball4);
PIEsetDrag(ball4,myBall4Drag);
PIEsetHoverON(ball4,bmoveH4);




var geo= new THREE.SphereGeometry(1.7,200, 200);
ball3 =new THREE.Mesh(geo,m);
ball3.position.set(5.23,-10.2+5.59-5.4,-57);
ball3.scale.x=+0.93;
ball3.scale.y=+0.93;
ball3.scale.z=+0.93;


var m = new THREE.MeshPhysicalMaterial({ color: 0x000000});
var g= new THREE.SphereGeometry(0.5,200, 200);
ahoverit =new THREE.Mesh(g,m);  
ahoverit.position.set(0.57+1.45,10.45-5.4,-57);
PIEaddElement(ahoverit);



/*
var m = new THREE.MeshPhysicalMaterial({ color: 0x008000});
var g= new THREE.SphereGeometry(1,200, 200);
ahoverit =new THREE.Mesh(g,m);  
ahoverit.position.set(32.57+1.45,10.45-5.4,-90);
PIEaddElement(ahoverit);
*/


 var texture = THREE.ImageUtils.loadTexture('images/fencew.png');
geometry = new THREE.PlaneGeometry( 36,25.5 );
 material = new THREE.MeshLambertMaterial( {color: 0xffffff, map: texture ,transparent:true} );
    fence = new THREE.Mesh( geometry, material );
    fence.position.set(sWidth+135,-6,  -85);
    fence.receiveShadow = true;
    PIEaddElement(fence);
     fence = new THREE.Mesh( geometry, material );
    fence.position.set(sWidth+135+30,-6,  -85);
    fence.receiveShadow = true;
    PIEaddElement(fence);
   fence = new THREE.Mesh( geometry, material );
    fence.position.set(sWidth+135+60,-6,  -85);
    fence.receiveShadow = true;
    PIEaddElement(fence); 
      fence = new THREE.Mesh( geometry, material );
    fence.position.set(sWidth+135+90,-6,  -85);
    fence.receiveShadow = true;
    PIEaddElement(fence);
       fence = new THREE.Mesh( geometry, material );
    fence.position.set(sWidth+135+120,-6,  -85);
    fence.receiveShadow = true;
    PIEaddElement(fence);
       fence = new THREE.Mesh( geometry, material );
    fence.position.set(sWidth+135+150,-6,  -85);
    fence.receiveShadow = true;
    PIEaddElement(fence);
       fence = new THREE.Mesh( geometry, material );
    fence.position.set(sWidth+135+180,-6,  -85);
    fence.receiveShadow = true;
    PIEaddElement(fence);  
     fence = new THREE.Mesh( geometry, material );
    fence.position.set(sWidth+135+210,-6,  -85);
    fence.receiveShadow = true;
    PIEaddElement(fence);
       fence = new THREE.Mesh( geometry, material );
    fence.position.set(sWidth+135+240,-6,  -85);
    fence.receiveShadow = true;
    PIEaddElement(fence);
       fence = new THREE.Mesh( geometry, material );
    fence.position.set(sWidth+135+270,-6,  -85);
    fence.receiveShadow = true;
    PIEaddElement(fence);
       fence = new THREE.Mesh( geometry, material );
    fence.position.set(sWidth+135+300,-6,  -85);
    fence.receiveShadow = true;
    PIEaddElement(fence);
       fence = new THREE.Mesh( geometry, material );
    fence.position.set(sWidth+135+330,-6,  -85);
    fence.receiveShadow = true;
    PIEaddElement(fence);
       fence = new THREE.Mesh( geometry, material );
    fence.position.set(sWidth+135+360,-6,  -85);
    fence.receiveShadow = true;
    PIEaddElement(fence);
       fence = new THREE.Mesh( geometry, material );
    fence.position.set(sWidth+135+390,-6,  -85);
    fence.receiveShadow = true;
    PIEaddElement(fence);
       fence = new THREE.Mesh( geometry, material );
    fence.position.set(sWidth+135+420,-6,  -85);
    fence.receiveShadow = true;
    PIEaddElement(fence);
       fence = new THREE.Mesh( geometry, material );
    fence.position.set(sWidth+135+450,-6,  -85);
    fence.receiveShadow = true;
    PIEaddElement(fence);
       fence = new THREE.Mesh( geometry, material );
    fence.position.set(sWidth+135+480,-6,  -85);
    fence.receiveShadow = true;
    PIEaddElement(fence);
       fence = new THREE.Mesh( geometry, material );
    fence.position.set(sWidth+135+510,-6,  -85);
    fence.receiveShadow = true;
    PIEaddElement(fence);
       fence = new THREE.Mesh( geometry, material );
    fence.position.set(sWidth+135+540,-6,  -85);
    fence.receiveShadow = true;
    PIEaddElement(fence);
       fence = new THREE.Mesh( geometry, material );
    fence.position.set(sWidth+135+570,-6,  -85);
    fence.receiveShadow = true;
    PIEaddElement(fence);   fence = new THREE.Mesh( geometry, material );
    fence.position.set(sWidth+135+600,-6,  -85);
    fence.receiveShadow = true;
    PIEaddElement(fence);   fence = new THREE.Mesh( geometry, material );
    fence.position.set(sWidth+135+630,-6,  -85);
    fence.receiveShadow = true;
    PIEaddElement(fence);
    fence = new THREE.Mesh( geometry, material );
    fence.position.set(sWidth+135+660,-6,  -85);
    fence.receiveShadow = true;
    PIEaddElement(fence);











/*

var cool;

var loader = new THREE.FontLoader();
loader.load('font/optimer_regular.typeface.js',function (ruhi) {
  cool=ruhi;
var textGeometry = new THREE.TextGeometry("1 kgs       2kgs         3kgs          4kgs             5kgs  -   Balls",{

  font:cool,

  size:1.25,
  height:0.25,
  curveSegments:12,
  bevelThickness:0.1,
  bevelSize:0.02,
  bevelEnabled:true
});

var textMaterial = new THREE.MeshBasicMaterial({color: 0x000000, specular: 0x000000});
var mesh = new THREE.Mesh(textGeometry,textMaterial);
mesh.position.set(-23.5,12.5,-80);
//mesh.rotation.y=-0.38*Math.PI;
PIEaddElement(mesh);
mesh.castShadow=false;

});



var cool;

var loader = new THREE.FontLoader();
loader.load('font/optimer_regular.typeface.js',function (ruhi) {
  cool=ruhi;
var textGeometry = new THREE.TextGeometry("1 kgs       2kgs         3kgs          4kgs             5kgs   -  Bobs",{

  font:cool,

  size:1.25,
  height:0.25,
  curveSegments:12,
  bevelThickness:0.1,
  bevelSize:0.02,
  bevelEnabled:true
});

var textMaterial = new THREE.MeshBasicMaterial({color: 0x000000, specular: 0x000000});
var mesh = new THREE.Mesh(textGeometry,textMaterial);
mesh.position.set(-23,25.5,-80);
//mesh.rotation.y=-0.38*Math.PI;
PIEaddElement(mesh);
mesh.castShadow=false;

});
*/
/*

var light = new THREE.PointLight( 0xff0000, 0.5, 5, 1 );
light.position.set( 400, 10, -40 );
PIEaddElement( light );
*/

 var texture = THREE.ImageUtils.loadTexture('images/water.jpg');
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
 texture.repeat.set(100,100);
 texture.anisotropy=16;
 geometry = new THREE.BoxGeometry( 900,6, 60);
 material = new THREE.MeshLambertMaterial( {color: 0x00ffff, map: texture} );
    water = new THREE.Mesh( geometry, material );
    water.position.set((sWidth+sHeight+1050)/2,-13,  -120);
    water.receiveShadow = true;
    PIEaddElement(water);





 var texture = THREE.ImageUtils.loadTexture('images/Plant1.png');
 geometry = new THREE.PlaneGeometry( 6,7.5);
 material = new THREE.MeshLambertMaterial( {color: 0xffffff, map: texture,transparent:true} );
    water1 = new THREE.Mesh( geometry, material );
    water1.position.set(200,-9,  -90);
    water1.receiveShadow = true;
    PIEaddElement(water1);

var texture = THREE.ImageUtils.loadTexture('images/Plant2.png');
 geometry = new THREE.PlaneGeometry( 6,7.5);
 material = new THREE.MeshLambertMaterial( {color: 0xffffff, map: texture,transparent:true} );
    water2 = new THREE.Mesh( geometry, material );
    water2.position.set(300,-9,  -90);
    water2.receiveShadow = true;
    PIEaddElement(water2);

  var texture = THREE.ImageUtils.loadTexture('images/Plant3.png');
 geometry = new THREE.PlaneGeometry( 6,10);
 material = new THREE.MeshLambertMaterial( {color: 0xffffff, map: texture,transparent:true} );
    water3 = new THREE.Mesh( geometry, material );
    water3.position.set(400,-9,  -90);
    water3.receiveShadow = true;
    PIEaddElement(water3);






  var texture = THREE.ImageUtils.loadTexture('images/6.gif', {}, function() {PIErender();});
 geometry = new THREE.BoxGeometry( 900,2, 60);
 material = new THREE.MeshLambertMaterial( {color: 0xc0c0c0, map: texture} );
    road  = new THREE.Mesh( geometry, material );
    road.position.set((sWidth+sHeight+750)/2,-12.39,  -55);
    road.receiveShadow = true;
    PIEaddElement(road);

//hover 4 ----------13.25
//hover 3 ----------13.05
//hover 2-----------12.9
//hover 1-----------12.65
//hover ------------12.39
//+0.05 for bob 1.4
//-0 for bob 1.5
//-0.158 for bob of 1.6
//-0.3 for bob 1.7
//myFloor.position.y=(myFloor.position.y)-6;
//+0.13 for bob 1.2








var texture = THREE.ImageUtils.loadTexture('images/fr.jpg', {}, function() {PIErender();});
 geometry = new THREE.BoxGeometry( 40,2, 10);
 material = new THREE.MeshLambertMaterial( {color: 0xc0c0c0, map: texture} );
    myFloor1  = new THREE.Mesh( geometry, material );
    myFloor1.position.set((sWidth+sHeight-60)/2,18.49,  -75);
    myFloor1.receiveShadow = true;
    PIEaddElement(myFloor1);
        PIEsetHoverON(myFloor1,boxlm);


 myFloor  = new THREE.Mesh( geometry, material );
    myFloor.position.set((sWidth+sHeight-60)/2,5.49,  -75);
    myFloor.receiveShadow = true;
    PIEaddElement(myFloor);
            PIEsetHoverON(myFloor,boxlm);



//+0.05 for bob 1.4
//-0 for bob 1.5
//-0.158 for bob of 1.6
//-0.3 for bob 1.7
//myFloor.position.y=(myFloor.position.y)-6;
//+0.13 for bob 1.2



  var texture = THREE.ImageUtils.loadTexture('images/cool.jpg', {}, function() {PIErender();});
    geometry = new THREE.BoxGeometry( (sWidth+45)/1.2, (sHeight+30), 10 );
    material = new THREE.MeshLambertMaterial( {color: 0xffffff, map:texture} );
    myBack = new THREE.Mesh( geometry, material );
    myBack.position.set((sWidth+sHeight-10.6-60)/2,(sWidth+sHeight-35)/2-1,  -85);
    myBack.receiveShadow = true;
   // myBack.castShadow=false;
    PIEaddElement(myBack);
    PIEsetHoverON(myBack,boxlm);



     myk = new THREE.Mesh( geometry, material );
    myk.position.set((sWidth+sHeight-10.6+68.5)/2,(sWidth+sHeight-58)/2-1,  -100);
    myk.receiveShadow = true;
       // myk.castShadow=false;

    PIEaddElement(myk);
        PIEsetHoverON(myk,boxlm);


     geometry = new THREE.BoxGeometry( (sWidth+45)/1.2, (sHeight+30), 10 );
        lmyk = new THREE.Mesh( geometry, material );
        lmyk.rotation.y=-(0.5)*Math.PI;
        lmyk.position.set((sWidth+sHeight-10.6-6)/2,(sWidth+sHeight-58)/2-1,  -120);
    lmyk.receiveShadow = true;
        //lmyk.castShadow=false;

    PIEaddElement(lmyk);
        PIEsetHoverON(lmyk,boxlm);



    myk = new THREE.Mesh( geometry, material );

   myk.rotation.y=-(0.5)*Math.PI;
        myk.position.set(((sWidth+sHeight-10.6-7)/2)+ (sWidth+58)/1.2,((sWidth+sHeight-58)/2-1),  -120);
    myk.receiveShadow = true;
       // myk.castShadow=false;

    PIEaddElement(myk);
    PIEsetHoverON(myk,boxlm);



     yk = new THREE.Mesh( geometry, material );
    yk.position.set((sWidth+sHeight-10.6+197)/2,(sWidth+sHeight-78)/2-1,  -85);
    yk.receiveShadow = true;
    PIEaddElement(yk);
        PIEsetHoverON(yk,boxlm);



var centre= new THREE.CylinderGeometry(0.13,0.13,15.2,0.0005);
centre.applyMatrix( new THREE.Matrix4().makeTranslation( 0, -15.2/2, -29) );
 witchCylinder = new THREE.Mesh(centre, new THREE.MeshLambertMaterial( {color: 0x000000} ));
witchCylinder.position.set(2, 10-4.9,-28 );
witchCylinder.rotation.z= 0;
//witchCylinder.castShadow=true;
PIEaddElement(witchCylinder);


 shadow = new THREE.Mesh(centre, new THREE.ShadowMaterial( {color: 0x000000} ));
shadow .position.set(-95, 10-4.9,-28 );
shadow .rotation.z= 0;

//witchCylinder.castShadow=true;
PIEaddElement(shadow);



  var xture = THREE.ImageUtils.loadTexture('images/street_light.png', {}, function() {PIErender();});
 var x=new THREE.PlaneGeometry(20,40);
var z= new THREE.MeshPhysicalMaterial( {color: 0xffffff, transparent:true, map:xture} );
stan = new THREE.Mesh(x,z);

stan.position.set(180-3.5,4.9-2.4+3-1.67,-82);
PIEaddElement(stan);

stan1 = new THREE.Mesh(x,z);
stan1.position.set(340-3.5,4.9-2.4+3-1.67,-82);
PIEaddElement(stan1);

stan2 = new THREE.Mesh(x,z);
stan2.position.set(500-3.5,4.9-2.4+3-1.67,-82);
PIEaddElement(stan2);

stan3 = new THREE.Mesh(x,z);
stan3.position.set(660-3.5,4.9-2.4+3-1.67,-82);
PIEaddElement(stan3);

stan4 = new THREE.Mesh(x,z);
stan4.position.set(820-3.5,4.9-2.4+3-1.67,-82);
PIEaddElement(stan4);

 var x=new THREE.PlaneGeometry(20,40);
stan4 = new THREE.Mesh(x,z);
stan4.position.set(80-3.5,4.9-2.4+3-1.67,-82);
PIEaddElement(stan4);




var an = new THREE.Mesh(new THREE.CylinderGeometry(0.32,0.32,28,0.0005), new THREE.MeshPhysicalMaterial( {color: 0x966f33} ));
an.rotation.z=0.5*Math.PI;
an.rotation.y=0.5*Math.PI;

an.position.set(1.45+0.587,10.55-3.7-1.71,-66);
PIEaddElement(an);




var mio = new THREE.MeshLambertMaterial({color:0xffffff,opacity:0,transparent:true});
var gio= new THREE.PlaneGeometry(200,50);
//g.applyMatrix( new THREE.Matrix4().makeTranslation( 0, -15.2, -29 ) );
ht =new THREE.Mesh(gio,mio);
ht.position.set(-2,10.66,-50.7);
//PIEaddElement(ht);
//PIEdragElement(ht);
//PIEsetDrag(ht, myHoverDrag);

var te = THREE.ImageUtils.loadTexture('images/hober1.png', {}, function() {PIErender();});
te.anisotropy=100;
var mio = new THREE.MeshPhysicalMaterial({map:te, transparent:true});
var gio= new THREE.PlaneGeometry(28,1.2);
 fgt=new THREE.Mesh(gio,mio);
fgt.position.set(43,100,-60);
//PIEaddElement(fgt);

var te = THREE.ImageUtils.loadTexture('images/set.png', {}, function() {PIErender();});
te.anisotropy=100;
var mio = new THREE.MeshPhysicalMaterial({color:0x00ffff,map:te, transparent:true});
var gio= new THREE.PlaneGeometry(5,4);
 fgtio=new THREE.Mesh(gio,mio);
fgtio.position.set(18,-19,-60);
PIEaddElement(fgtio);




var te = THREE.ImageUtils.loadTexture('images/hober2.png', {}, function() {PIErender();});
te.anisotropy=100;
var mio = new THREE.MeshPhysicalMaterial({map:te, transparent:true});
var gio= new THREE.PlaneGeometry(36.8,1.4);
 fgt1=new THREE.Mesh(gio,mio);
fgt1.position.set(45,122,-60);
//PIEaddElement(fgt1);


var te = THREE.ImageUtils.loadTexture('images/controls.png', {}, function() {PIErender();});
te.anisotropy=100;
var mio = new THREE.MeshPhysicalMaterial({map:te, transparent:true});
var gio= new THREE.PlaneGeometry(8,1.4);
 fgqt1=new THREE.Mesh(gio,mio);
fgqt1.position.set(82,27,-60);
PIEaddElement(fgqt1);


var te = THREE.ImageUtils.loadTexture('images/ball.png', {}, function() {PIErender();});
te.anisotropy=100;
var mio = new THREE.MeshPhysicalMaterial({map:te, transparent:true});
var gio= new THREE.PlaneGeometry(28,1.2);
 fgt2=new THREE.Mesh(gio,mio);
fgt2.position.set(43,128,-60);
//PIEaddElement(fgt2);


var te = THREE.ImageUtils.loadTexture('images/ball2.png', {}, function() {PIErender();});
te.anisotropy=100;
var mio = new THREE.MeshPhysicalMaterial({map:te, transparent:true});
var gio= new THREE.PlaneGeometry(36.8,1.4);
 fgt3=new THREE.Mesh(gio,mio);
fgt3.position.set(44,126,-60);
//PIEaddElement(fgt3);


var te = THREE.ImageUtils.loadTexture('images/height1.png', {}, function() {PIErender();});
te.anisotropy=100;
var mio = new THREE.MeshPhysicalMaterial({map:te, color:0x00ffff,transparent:true});
var gio= new THREE.PlaneGeometry(834/30,51/30);
 fgt6=new THREE.Mesh(gio,mio);
fgt6.position.set(2,-50,-45);
PIEaddElement(fgt6);

var te = THREE.ImageUtils.loadTexture('images/select.png', {}, function() {PIErender();});
te.anisotropy=100;
var mio = new THREE.MeshPhysicalMaterial({map:te, transparent:true});
var gio= new THREE.PlaneGeometry(1199/40,59/40);
 se=new THREE.Mesh(gio,mio);
se.position.set(43,28,-45);
PIEaddElement(se);





var te = THREE.ImageUtils.loadTexture('images/Start.png', {}, function() {PIErender();});
te.anisotropy=100;
var mio = new THREE.MeshPhysicalMaterial({map:te, transparent:true});
var gio= new THREE.PlaneGeometry(25,1.2);
 fgt9=new THREE.Mesh(gio,mio);
fgt9.position.set(30,130,-45);
PIEaddElement(fgt9);


var te = THREE.ImageUtils.loadTexture('images/back1.png', {}, function() {PIErender();});
te.anisotropy=100;
var mio = new THREE.MeshPhysicalMaterial({map:te, transparent:true});
var gio= new THREE.PlaneGeometry(25.8,1.4);
 fgt5=new THREE.Mesh(gio,mio);
fgt5.position.set(44,124,-60);
PIEaddElement(fgt5);


var te = THREE.ImageUtils.loadTexture('images/back2.png', {}, function() {PIErender();});
te.anisotropy=100;
var mio = new THREE.MeshPhysicalMaterial({map:te, transparent:true});
var gio= new THREE.PlaneGeometry(25.8,1.4);
 fgt7=new THREE.Mesh(gio,mio);
fgt7.position.set(44,124,-60);
PIEaddElement(fgt7);









PIEsetAreaOfInterest(sWidth-6,sHeight, 40, 0);


resetExperiment();
PIErender();

}
var sync=0;



PIEstopAnimation = (function() {
    var cached_function = PIEstopAnimation;
    return function() {
        // your code


 comingFromControls=0;

bc=0;
PIEsetAreaOfInterest(sWidth+42+bc,sHeight, 0, 0);h=0;
//ball.position.set(5.05,-10.2+5-4.9,-57);
lk= -(0)*Math.PI;
hoverit.rotation.z=lk;
hoverit1.rotation.z=lk;
hoverit2.rotation.z=lk;
hoverit3.rotation.z=lk;
hoverit4.rotation.z=lk;




track=0;
Istopped=1;
pjk=0;

hei=0;
myh=0;

//myball=0;
//massBob=0;

PIEchangeInputSlider(Mass,massBob);
PIEchangeInputSlider(MassBall,myball);
PIEchangeInputSlider(PosH,hei);
angle=0;
callHere(massBob);

bobit=massBob;
ballit=myball;
hit=hei;


fvb= (10*myball)+2;
if(myball!=0)
{setposition(fvb);}
else
{
    setposition(0);
}

witchCylinder.rotation.z= lk;
PIErender();
cal=lk;
 //bc=0;
 //massBob=0;
 //myball=0;
//ob=0;
//all=0;
sync=0;
 //ballTrack=-1;
//bobTrack=-1;
//witchTrack=-1;

key=0;
/*
hoverit.position.set(-22,10+26.66,-50.7);
hoverit1.position.set(-14,10+26.84,-50.7);
hoverit2.position.set(-6,10+27.1,-50.7);
hoverit3.position.set(2,10+27.32,-50.7);
hoverit4.position.set(10,10+27.57,-50.7);
*/
freeFall=0;

fgqt1.position.y=27;

pl=0;
if(gr==0)

{

massBob=0;
myball=0;
hei=0;
PIEstartAnimation();
PIEstopAnimation();
gr=1;

}

massBob=bobit;
myball=ballit;
PIEchangeInputSlider(Mass,massBob);
PIEchangeInputSlider(MassBall,myball);
PIEchangeInputSlider(PosH,hei);

/*
ball.position.set(-20,7.85,-77);
ball1.position.set(-14,8.15,-77);
ball2.position.set(-6,8.25,-77);
ruh.position.set(2,8.34,-77);
ball4.position.set(10,8.55,-77);
*/
klf=3;
track=0;
//     resetExperiment();
         PIErender();
        var result = cached_function.apply( this , arguments); // use .apply() to call it
        return result;
    };
})();

var par=0;
var Ve;
var df;
var hup;


function resetExperiment( )
{
    bc=0;
    odd=0;
    par=0;
PIEsetAreaOfInterest(sWidth+42+bc,sHeight, 0, 0);h=0;
massBob=0;
myball=0
track=0;
hei=0;
PIEchangeInputSlider(Mass,0);
PIEchangeInputSlider(PosH,0);
PIEchangeInputSlider(MassBall,0);
boxlm();
klf=2;
//ball.position.set(5.05,-10.2+5-4.9,-57);
lk= -(0)*Math.PI;
hoverit.rotation.z=lk;
hoverit1.rotation.z=lk;
hoverit2.rotation.z=lk;
hoverit3.rotation.z=lk;
hoverit4.rotation.z=lk;

pjk=0;
freeFall=0;
 comingFromControls=0;
witchCylinder.rotation.z= lk;
PIErender();
cal=lk;
 bc=0;
 massBob=0;
 myball=0;
 hei=0;
myh=0;

ob=0;
all=0;
sync=0;
 ballTrack=0;
bobTrack=0;
witchTrack=0;

key=0;
hoverit.position.set(-22,10+26.66,-50.7);
hoverit1.position.set(2,10-4.9,-27.85);
hoverit1.position.y=1.1;
//hoverit1.position.x=-11;
hoverit1.position.set(-14,10+26.84,-50.7);
hoverit2.position.set(-6,10+27.1,-50.7);
hoverit3.position.set(2,10+27.32,-50.7);
hoverit4.position.set(10,10+27.57,-50.7);





ball.position.set(-20,7.85,-77);
ball1.position.set(-14,8.15,-77);
ball2.position.set(-6,8.25,-77);
ruh.position.set(2,8.34,-77);
ball4.position.set(10,8.55,-77);

angle=0;

bc=0;

pl=0;
}
var osci=0;
var bc;
var k;
var pl=0;
var energy;
var ene;
var gr;
var hup=0;
var comingFromControls=0;
var odd=0;

function updateExperimentElements(dt,t)
{


gr=1;
var ma;
ma=(massBob)*(0.003);
if(myball!=0){
if(track<=0 && hei>0)
{

if(massBob!=0)
{
 if(massBob==1)
{hoverit.rotation.z= (track)*Math.PI;
witchCylinder.rotation.z= track*Math.PI;

hoverit1.position.set(-14,10+26.84,-50.7);
hoverit1.rotation.z=0;

hoverit2.position.set(-6,10+27.1,-50.7);
hoverit2.rotation.z=0;

hoverit3.position.set(2,10+27.32,-50.7);
hoverit3.rotation.z=0;

hoverit4.position.set(10,10+27.57,-50.7);
hoverit4.rotation.z=0;


}
else   if(massBob==2)

{hoverit1.rotation.z= (track)*Math.PI;
witchCylinder.rotation.z= track*Math.PI;



hoverit.position.set(-22,10+26.66,-50.7);
hoverit.rotation.z=0;

//hoverit1.position.set(-14,10+26.84,-50.7);
//hoverit1.rotation.z=0;

hoverit2.position.set(-6,10+27.1,-50.7);
hoverit2.rotation.z=0;

hoverit3.position.set(2,10+27.32,-50.7);
hoverit3.rotation.z=0;

hoverit4.position.set(10,10+27.57,-50.7);
hoverit4.rotation.z=0;



}
else   if(massBob==3)
{hoverit2.rotation.z= (track)*Math.PI;
witchCylinder.rotation.z= track*Math.PI;


hoverit.position.set(-22,10+26.66,-50.7);
hoverit.rotation.z=0;

hoverit1.position.set(-14,10+26.84,-50.7);
hoverit1.rotation.z=0;

//hoverit2.position.set(-6,10+27.1,-50.7);
//hoverit2.rotation.z=0;

hoverit3.position.set(2,10+27.32,-50.7);
hoverit3.rotation.z=0;

hoverit4.position.set(10,10+27.57,-50.7);
hoverit4.rotation.z=0;



}
else   if(massBob==4)
{hoverit3.rotation.z= (track)*Math.PI;
witchCylinder.rotation.z= track*Math.PI;


hoverit.position.set(-22,10+26.66,-50.7);
hoverit.rotation.z=0;

hoverit1.position.set(-14,10+26.84,-50.7);
hoverit1.rotation.z=0;

hoverit2.position.set(-6,10+27.1,-50.7);
hoverit2.rotation.z=0;

//hoverit3.position.set(2,10+27.32,-50.7);
//hoverit3.rotation.z=0;

hoverit4.position.set(10,10+27.57,-50.7);
hoverit4.rotation.z=0;



}
else   if(massBob==5)
{hoverit4.rotation.z= (track)*Math.PI;
witchCylinder.rotation.z= track*Math.PI;




hoverit.position.set(-22,10+26.66,-50.7);
hoverit.rotation.z=0;

hoverit1.position.set(-14,10+26.84,-50.7);
hoverit1.rotation.z=0;

hoverit2.position.set(-6,10+27.1,-50.7);
hoverit2.rotation.z=0;

hoverit3.position.set(2,10+27.32,-50.7);
hoverit3.rotation.z=0;

//hoverit4.position.set(10,10+27.57,-50.7);
//hoverit4.rotation.z=0;

}

}
//hoverit.rotation.z= track*Math.PI;
track=track+ma;
 shadow .position.set(-203, 10-4.9,-28 );
 //pl!=0;

//PIErender();
}
}
else if(myball==0 && hei!=0)
{


if(par==0 )
{

if(massBob!=0)
{

 if(massBob==1)
{hoverit.rotation.z= (track)*Math.PI;
witchCylinder.rotation.z= track*Math.PI;

hoverit1.position.set(-14,10+26.84,-50.7);
hoverit1.rotation.z=0;

hoverit2.position.set(-6,10+27.1,-50.7);
hoverit2.rotation.z=0;

hoverit3.position.set(2,10+27.32,-50.7);
hoverit3.rotation.z=0;

hoverit4.position.set(10,10+27.57,-50.7);
hoverit4.rotation.z=0;


}
else   if(massBob==2)

{hoverit1.rotation.z= (track)*Math.PI;
witchCylinder.rotation.z= track*Math.PI;



hoverit.position.set(-22,10+26.66,-50.7);
hoverit.rotation.z=0;

//hoverit1.position.set(-14,10+26.84,-50.7);
//hoverit1.rotation.z=0;

hoverit2.position.set(-6,10+27.1,-50.7);
hoverit2.rotation.z=0;

hoverit3.position.set(2,10+27.32,-50.7);
hoverit3.rotation.z=0;

hoverit4.position.set(10,10+27.57,-50.7);
hoverit4.rotation.z=0;



}
else   if(massBob==3)
{hoverit2.rotation.z= (track)*Math.PI;
witchCylinder.rotation.z= track*Math.PI;


hoverit.position.set(-22,10+26.66,-50.7);
hoverit.rotation.z=0;

hoverit1.position.set(-14,10+26.84,-50.7);
hoverit1.rotation.z=0;

//hoverit2.position.set(-6,10+27.1,-50.7);
//hoverit2.rotation.z=0;

hoverit3.position.set(2,10+27.32,-50.7);
hoverit3.rotation.z=0;

hoverit4.position.set(10,10+27.57,-50.7);
hoverit4.rotation.z=0;



}
else   if(massBob==4)
{hoverit3.rotation.z= (track)*Math.PI;
witchCylinder.rotation.z= track*Math.PI;


hoverit.position.set(-22,10+26.66,-50.7);
hoverit.rotation.z=0;

hoverit1.position.set(-14,10+26.84,-50.7);
hoverit1.rotation.z=0;

hoverit2.position.set(-6,10+27.1,-50.7);
hoverit2.rotation.z=0;

//hoverit3.position.set(2,10+27.32,-50.7);
//hoverit3.rotation.z=0;

hoverit4.position.set(10,10+27.57,-50.7);
hoverit4.rotation.z=0;



}
else   if(massBob==5)
{hoverit4.rotation.z= (track)*Math.PI;
witchCylinder.rotation.z= track*Math.PI;




hoverit.position.set(-22,10+26.66,-50.7);
hoverit.rotation.z=0;

hoverit1.position.set(-14,10+26.84,-50.7);
hoverit1.rotation.z=0;

hoverit2.position.set(-6,10+27.1,-50.7);
hoverit2.rotation.z=0;

hoverit3.position.set(2,10+27.32,-50.7);
hoverit3.rotation.z=0;

//hoverit4.position.set(10,10+27.57,-50.7);
//hoverit4.rotation.z=0;

}

}


//hoverit.rotation.z= track*Math.PI;
//var odd=0;
if(track <=(hei/600) && (odd%2)==0)
{track=track+ma;}
else if(track>=(-hei/600))
{
  track=track-ma;
  odd=1;
}
else
{
  odd=odd+1;
}
//else

 shadow .position.set(-203, 10-4.9,-28 );


 //pl!=0;
gl=0;


if(witchCylinder.rotation.z>=((hei/600)*Math.PI))
{
 // par=2;
}

//PIErender();
}

else 
{

}

/*
else if(track>(hei/600) && (hei!=0) )
{

pl=-5;

if(gl==0)
{track=(hei)/600;
gl=-1;
}


if(massBob!=0)
{
 if(massBob==1)
{hoverit.rotation.z= (track)*Math.PI;
witchCylinder.rotation.z= track*Math.PI;

hoverit1.position.set(-14,10+26.84,-50.7);
hoverit1.rotation.z=0;

hoverit2.position.set(-6,10+27.1,-50.7);
hoverit2.rotation.z=0;

hoverit3.position.set(2,10+27.32,-50.7);
hoverit3.rotation.z=0;

hoverit4.position.set(10,10+27.57,-50.7);
hoverit4.rotation.z=0;


}
else   if(massBob==2)

{hoverit1.rotation.z= (track)*Math.PI;
witchCylinder.rotation.z= track*Math.PI;



hoverit.position.set(-22,10+26.66,-50.7);
hoverit.rotation.z=0;

//hoverit1.position.set(-14,10+26.84,-50.7);
//hoverit1.rotation.z=0;

hoverit2.position.set(-6,10+27.1,-50.7);
hoverit2.rotation.z=0;

hoverit3.position.set(2,10+27.32,-50.7);
hoverit3.rotation.z=0;

hoverit4.position.set(10,10+27.57,-50.7);
hoverit4.rotation.z=0;



}
else   if(massBob==3)
{hoverit2.rotation.z= (track)*Math.PI;
witchCylinder.rotation.z= track*Math.PI;


hoverit.position.set(-22,10+26.66,-50.7);
hoverit.rotation.z=0;

hoverit1.position.set(-14,10+26.84,-50.7);
hoverit1.rotation.z=0;

//hoverit2.position.set(-6,10+27.1,-50.7);
//hoverit2.rotation.z=0;

hoverit3.position.set(2,10+27.32,-50.7);
hoverit3.rotation.z=0;

hoverit4.position.set(10,10+27.57,-50.7);
hoverit4.rotation.z=0;



}
else   if(massBob==4)
{hoverit3.rotation.z= (track)*Math.PI;
witchCylinder.rotation.z= track*Math.PI;


hoverit.position.set(-22,10+26.66,-50.7);
hoverit.rotation.z=0;

hoverit1.position.set(-14,10+26.84,-50.7);
hoverit1.rotation.z=0;

hoverit2.position.set(-6,10+27.1,-50.7);
hoverit2.rotation.z=0;

//hoverit3.position.set(2,10+27.32,-50.7);
//hoverit3.rotation.z=0;

hoverit4.position.set(10,10+27.57,-50.7);
hoverit4.rotation.z=0;



}
else   if(massBob==5)
{hoverit4.rotation.z= (track)*Math.PI;
witchCylinder.rotation.z= track*Math.PI;




hoverit.position.set(-22,10+26.66,-50.7);
hoverit.rotation.z=0;

hoverit1.position.set(-14,10+26.84,-50.7);
hoverit1.rotation.z=0;

hoverit2.position.set(-6,10+27.1,-50.7);
hoverit2.rotation.z=0;

hoverit3.position.set(2,10+27.32,-50.7);
hoverit3.rotation.z=0;

//hoverit4.position.set(10,10+27.57,-50.7);
//hoverit4.rotation.z=0;

}

}
//hoverit.rotation.z= track*Math.PI;
track=track-ma;
 shadow .position.set(-203, 10-4.9,-28 );
 //pl!=0;



}

*/

}

if(track<=0)
{h= -1*(track)*600;
}
else
{
    h=0;
}


hei=myh;
if(myball!=0)
{Ve = Math.sqrt(2*(massBob/myball)*9.8*hei);}
else 
{
Ve=0;
}

d= Ve*0.02;


if(track>=0 )
{



if(myball==1 && massBob!=0 )
{ ball.position.x= ball.position.x+d;
  df=ball.position.x;
   bc=bc+(d)*1.9;
 hoverit.rotation.z=0;
 hoverit1.rotation.z=0;
 hoverit2.rotation.z=0;
 hoverit3.rotation.z=0;
 hoverit4.rotation.z=0;
 witchCylinder.rotation.z=0;



}
else if(myball==2 && massBob!=0 )
{ ball1.position.x= ball1.position.x+d;
      df=ball1.position.x;
       bc=bc+(d)*1.9;
       hoverit.rotation.z=0;
 hoverit1.rotation.z=0;
 hoverit2.rotation.z=0;
 hoverit3.rotation.z=0;
 hoverit4.rotation.z=0;
 witchCylinder.rotation.z=0;


}
else if(myball==3 && massBob!=0)
{ ball2.position.x= ball2.position.x+d;
      df=ball2.position.x;
       bc=bc+(d)*1.9;


       hoverit.rotation.z=0;
 hoverit1.rotation.z=0;
 hoverit2.rotation.z=0;
 hoverit3.rotation.z=0;
 hoverit4.rotation.z=0;
 witchCylinder.rotation.z=0;
}
else if(myball==4 && massBob!=0)
{ ruh.position.x= ruh.position.x+d;
      df=ruh.position.x;
       bc=bc+(d)*1.9;

       hoverit.rotation.z=0;
 hoverit1.rotation.z=0;
 hoverit2.rotation.z=0;
 hoverit3.rotation.z=0;
 hoverit4.rotation.z=0;
 witchCylinder.rotation.z=0;
}
else if(myball==5 && massBob!=0 )
{ ball4.position.x= ball4.position.x+d;
      df=ball4.position.x;
       bc=bc+(d)*1.9;


       hoverit.rotation.z=0;
 hoverit1.rotation.z=0;
 hoverit2.rotation.z=0;
 hoverit3.rotation.z=0;
 hoverit4.rotation.z=0;
 witchCylinder.rotation.z=0;
}

}


if(df>=10 && df<680)
{
  PIEsetAreaOfInterest(sWidth+42+bc,sHeight,0,0);
  fgqt1.position.y=127;
}

else if(df>=680)
{
if(myball==1)
{ball.position.x=320;}
else if(myball==2)
{ball1.position.x=320;}
else if(myball==3)
{ball2.position.x=320;}
else if(myball==4)
{ruh.position.x=320;}
else if(myball==5)
{ball4.position.x=320;}
bc=610;





if(klf==1)
{
water1.position.x=430;
water2.position.x= 350;
water3.position.x=560;
water2.position.x=650;

klf=2;

}
else if(klf==2)
{
water2.position.x= 430;
water1.position.x= 350;
water3.position.x= 560;
water1.position.x=650;
klf=3;
}
else
{
water3.position.x=430;
water2.position.x= 350;

water1.position.x= 560;
water3.position.x= 650;
klf=1;
}

}

//area wall border  375
//ball wall border ball value 130
/*
if(df>=3 && df<140)
{     
//PIEsetAreaOfInterest(sWidth+42+bc,sHeight, 0, 0);h=0;
hup=0;
pl=1;}

else if(df>=140 && df<500 && pl==1)
{
 //PIEsetAreaOfInterest(sWidth+42+bc,sHeight, 0, 0);
 if(df>=480)
 {pl=0;
  g=0;
}
}
*/
/*
else if(df>=100 && df<=800 && pl==0)
{
if(hup!=0)
 {//PIEsetAreaOfInterest(sWidth+bc,sHeight, 0, 0);
 }
else
{
//PIEsetAreaOfInterest(sWidth+bc-230,sHeight,0,0);
}
 if(g==0)
 {  if(myball==1)
    {ball.position.x=ball.position.x-240;}
    else if(myball==2)
    {ball1.position.x=ball1.position.x-240;}
    else if(myball==3)
    {ball2.position.x=ball2.position.x-240;}
    else if(myball==4)
    {ruh.position.x=ruh.position.x-240;}
    else if(myball==5)
    {ball4.position.x=ball4.position.x-240;}
    g=1;
 }

}
*/
/*
else if(df>800  )
{
hup=1;
 ////////////////////////////////
if(myball==1 )
{ ball.position.x= 170;
    df=170;
    bc=425;
    pl=0;
  
}
else if(myball==2 )
{ ball1.position.x= 170;
    df=170;
    bc=425;
    pl=0;

}
else if(myball==3 )
{ ball2.position.x= 170;
    df=170;
    bc=425;
    pl=0;
}
else if(myball==4 )
{ ruh.position.x= 170
      df=ruh.position.x;
      bc=425;
    pl=0;

}
else if(myball ==5 )
{ ball4.position.x= 170;
      df=ball4.position.x;
      bc=425;
    pl=0;

}

//////////////////////////////
   // ball.position.x=170;
  
}


*/
if(massBob==0 && myball==0)
{    
    witchCylinder.rotation.z=0;
    //hei=0;
    h=0;

}

else if(massBob==0 && myball!=0)
{
    witchCylinder.rotation.z=0;
    h=0;

}



PIEchangeDisplayText(PosH,hei);
if(hei==0)
{h=0;}

if(myball!=0)
{PIEchangeDisplayText(Init,h);}

if( (myball!=0)&&(h>=0))
{energy= massBob*9.8*h;

 PIEchangeDisplayText(PE,energy);
}
else
{
    PIEchangeDisplayText(PE,0);
}

k=hei;
if(track>0)
{PIEchangeDisplayText(VelB,Ve);
ene= (1/2)*myball*(Ve)*(Ve);
 shadow .position.set(2, 10-4.9,-28 );

 PIEchangeDisplayText(KE,ene);
}
else
{
 PIEchangeDisplayText(VelB,0);
  PIEchangeDisplayText(KE,0);
}
if(massBob==0)
{

callHere(0);
}


 var so= massBob*9.8*hei;
 PIEchangeDisplayText(MassBall,myball);
 PIEchangeDisplayText(Mass,massBob);
 PIEchangeDisplayText(EP,so);

priority=0;
PIErender();

}


