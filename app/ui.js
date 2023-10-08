function closeLoader()
{
document.getElementById('loader1').style.display='none';
document.getElementById('loader2').style.display='none';
document.getElementById('loaderBG').style.display='none';

}

function UIinit()
{
//languages
document.getElementById('language_en').addEventListener("click", function(){changeLanguage('en')});
// document.getElementById('language_tj').addEventListener("click", function(){changeLanguage('tj')});
document.getElementById('language_ru').addEventListener("click", function(){changeLanguage('ru')});

//slides
document.getElementById('timelinePoint1').addEventListener("click", function(){showSlide('1')});
document.getElementById('timelinePoint2').addEventListener("click", function(){showSlide('2')});
document.getElementById('timelinePoint3').addEventListener("click", function(){showSlide('3')});
document.getElementById('timelinePoint4').addEventListener("click", function(){showSlide('4')});
document.getElementById('timelinePoint5').addEventListener("click", function(){showSlide('5')});


document.getElementById('slide0').style.left = '5vw';
document.getElementById('slide1').style.left = '50vw';
document.getElementById('slide2').style.left = '50vw';
document.getElementById('slide3').style.left = '50vw';
document.getElementById('slide4').style.left = '50vw';
document.getElementById('slide5').style.left = '50vw';

showSlide(0);
}


function UIupdate()
{
if(window.appUIState['soundPlay'] == true)
{
document.getElementById('soundBG').play();
}
window.requestAnimationFrame(UIupdate);
}


function playAnimation(timeFrom,TimeTo, durationMs, unixTimeStartMs)
{

}






function showSlide(id)
{

document.getElementById('timelinePoint1Big').style.display = 'none';
document.getElementById('timelinePoint2Big').style.display = 'none';
document.getElementById('timelinePoint3Big').style.display = 'none';
document.getElementById('timelinePoint4Big').style.display = 'none';
document.getElementById('timelinePoint5Big').style.display = 'none';
if (id!=0) document.getElementById('timelinePoint' + id + 'Big').style.display = 'block';

if (id==0)
  {
    moveCurrentSlide(0);
    moveSlideRight(1);
    moveSlideRight(2);
    moveSlideRight(3);
    moveSlideRight(4);
    moveSlideRight(5);
  }

if (id==1)
{
  moveSlideLeft(0);
  moveCurrentSlide(1);
  moveSlideRight(2);
  moveSlideRight(3);
  moveSlideRight(4);
  moveSlideRight(5);
}

if (id==2)
{
  moveSlideLeft(0);
  moveSlideLeft(1);
  moveCurrentSlide(2);
  moveSlideRight(3);
  moveSlideRight(4);
  moveSlideRight(5);
}

if (id==3)
{
  moveSlideLeft(0);
  moveSlideLeft(1);
  moveSlideLeft(2);
  moveCurrentSlide(3);
  moveSlideRight(4);
  moveSlideRight(5);
}

if (id==4)
{
  moveSlideLeft(0);
  moveSlideLeft(1);
  moveSlideLeft(2);
  moveSlideLeft(3);
  moveCurrentSlide(4);
  moveSlideRight(5);
}

if (id==5)
{
  moveSlideLeft(0);
  moveSlideLeft(1);
  moveSlideLeft(2);
  moveSlideLeft(3);
  moveSlideLeft(4);
  moveCurrentSlide(5);
}
window.appUIState['currentSlide'] = id;






if (id==1)
{
  window.appUIState['useCustomTime'] = true;
  window.appUIState['customTime']=0;
}

if (id==2)
{
  window.appUIState['useCustomTime'] = true;
  window.appUIState['customTime']=0.0025570776255708;

  //
  //5475
}

if (id==3)
{
  window.appUIState['useCustomTime'] = true;
  window.appUIState['customTime']=0.01;

  //
  //5475
}



if (id==4)
{
  window.appUIState['useCustomTime'] = true;
  window.appUIState['customTime']=0.018;

  //
  //5475
}

if (id==5)
{
  window.appUIState['useCustomTime'] = true;
  window.appUIState['customTime']=0.0264840182648402;

  //
  //5475
}



}





function showSlide2(id)
{

if(window.appUIState['currentSlide'] != id)
{
  //back
if(window.appUIState['currentSlide'] > id)
{
let lastId =  window.appUIState['currentSlide'];
//disable current slide
moveSlideLeft(lastId);
moveCurrentSlide(id);
}

if(window.appUIState['currentSlide'] < id)
{
let lastId =  window.appUIState['currentSlide'];
//disable current slide
//moveSlideLeft(lastId);
moveSlideRight(lastId);
moveCurrentSlide(id);
}

setTimeout(function(){window.appUIState['currentSlide'] = id;}, 800);
//alert(id);

}


}


function changeLanguage(id)
{
//disable all

document.getElementById('slide0_div_en').style.display = 'none';
document.getElementById('slide0_div_tj').style.display = 'none';
document.getElementById('slide0_div_ru').style.display = 'none';

document.getElementById('slide1_div_en').style.display = 'none';
document.getElementById('slide1_div_tj').style.display = 'none';
document.getElementById('slide1_div_ru').style.display = 'none';

document.getElementById('slide2_div_en').style.display = 'none';
document.getElementById('slide2_div_tj').style.display = 'none';
document.getElementById('slide2_div_ru').style.display = 'none';

document.getElementById('slide3_div_en').style.display = 'none';
document.getElementById('slide3_div_tj').style.display = 'none';
document.getElementById('slide3_div_ru').style.display = 'none';

document.getElementById('slide4_div_en').style.display = 'none';
document.getElementById('slide4_div_tj').style.display = 'none';
document.getElementById('slide4_div_ru').style.display = 'none';

document.getElementById('slide5_div_en').style.display = 'none';
document.getElementById('slide5_div_tj').style.display = 'none';
document.getElementById('slide5_div_ru').style.display = 'none';


if (id=='en')
{
  document.getElementById('slide0_div_en').style.display = 'block';
  document.getElementById('slide1_div_en').style.display = 'block';
  document.getElementById('slide2_div_en').style.display = 'block';
  document.getElementById('slide3_div_en').style.display = 'block';
  document.getElementById('slide4_div_en').style.display = 'block';
  document.getElementById('slide5_div_en').style.display = 'block';

}


if (id=='tj')
{
  document.getElementById('slide0_div_tj').style.display = 'block';
  document.getElementById('slide1_div_tj').style.display = 'block';
  document.getElementById('slide2_div_tj').style.display = 'block';
  document.getElementById('slide3_div_tj').style.display = 'block';
  document.getElementById('slide4_div_tj').style.display = 'block';
  document.getElementById('slide5_div_tj').style.display = 'block';
}

if (id=='ru')
{
  document.getElementById('slide0_div_ru').style.display = 'block';
  document.getElementById('slide1_div_ru').style.display = 'block';
  document.getElementById('slide2_div_ru').style.display = 'block';
  document.getElementById('slide3_div_ru').style.display = 'block';
  document.getElementById('slide4_div_ru').style.display = 'block';
  document.getElementById('slide5_div_ru').style.display = 'block';
}



}








function moveSlideRight(id)
{
  let lastId=id;
//  document.getElementById('slide' + lastId).style.top ='70vh';
  document.getElementById('slide' + lastId).style.left = '100vw';
  document.getElementById('slide' + lastId).style.opacity ='0';
  document.getElementById('slide' + lastId).style.transform = 'rotate3d(1, 1, 1, 90deg)';
  //setTimeout(function(){document.getElementById('slide' + lastId).style.display = 'none';}, 800);
}

function moveSlideLeft(id)
{
  let lastId=id;
//  document.getElementById('slide' + lastId).style.top ='20vh';
  document.getElementById('slide' + lastId).style.left = '-50vw';
  document.getElementById('slide' + lastId).style.opacity ='0';
  document.getElementById('slide' + lastId).style.transform = 'rotate3d(1, 1, -1, 80deg)';
//  setTimeout(function(){document.getElementById('slide' + lastId).style.display = 'none';}, 800);
}

function moveCurrentSlide(id)
{
  document.getElementById('slide' + id).style.display = 'block';
//  document.getElementById('slide' + id).style.top ='55vh';
  document.getElementById('slide' + id).style.left = '5vw';
  document.getElementById('slide' + id).style.opacity ='1';
  document.getElementById('slide' + id).style.transform = 'rotate3d(0, 0, 0, 90deg)';
}
