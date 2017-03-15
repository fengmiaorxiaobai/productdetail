function getStyle(obj,attr){
	return obj.currentStyle? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
};
function addZero(n){
    return n < 10 ? "0"+n : n;
}
window.onload =function(){
	
	//店铺红包相关事件
	var clickList=document.getElementById('click-list');
	var clickLi=clickList.getElementsByTagName('li');
	var closeBtn=document.getElementsByClassName('packet-close');
	var shopPacket=document.getElementsByClassName('shop-packet-warp');
	var productFloor=document.getElementsByClassName('commonthing');
	var mark=document.getElementsByClassName('mark')[0];

	for (var i = 0; i < clickLi.length; i++) {
		clickLi[i].onclick=function () {
			this.className="changeBg";
		}
	}
	
	for (var i = 0; i < productFloor.length; i++) {
		productFloor[i].index=i;
		productFloor[i].onclick=function () {
			shopPacket[this.index].style.display="block";
			mark.style.display="block";
			// $("body").on('touchmove', function (event) {
   //          	event.preventDefault();
            	
			// },false);

			// shopPacket[this.index].addEventListener('touchmove', function (event) {
            	
   //          	event.stopPropagation();
			// },false);
			swiper3.lockSwipeToNext();
			
		}
	}

	var clicked=document.getElementById('clicked');
	var clickedA=clicked.getElementsByTagName('a');

	for (var i = 0; i < clickedA.length; i++) {
		clickedA[i].onOff=true;
		clickedA[i].onclick=function () {
			if (this.onOff) {
				for (var i = 0; i < clickedA.length; i++) {

					clickedA[i].className="";
					clickedA[i].onOff=true;
				}
				this.className="active-color";
				this.onOff=false;
			}else{
				for (var i = 0; i < clickedA.length; i++) {

					clickedA[i].className="";
					clickedA[i].onOff=true;
				}
				this.className="";
				this.onOff=true;
			}

		}
	}

	for (var i = 0; i < closeBtn.length; i++) {

		closeBtn[i].index=i;
		closeBtn[i].onclick=function () {
			shopPacket[this.index].style.display="none";
			mark.style.display="none";
			swiper3.unlockSwipeToNext();
			// $("body").unbind("touchmove");
		}
	}

	mark.onclick=function () {
		mark.style.display="none";
		for (var i = 0; i < shopPacket.length; i++) {
			shopPacket[i].style.display="none";
			
		}
		swiper3.unlockSwipeToNext();
		// $("body").unbind("touchmove");
	}

	var addressList=document.getElementsByClassName('address-list')[0];
	var addressLi=addressList.getElementsByTagName('li');
	var addressI=addressList.getElementsByTagName('i');
	for (var i = 0; i < addressLi.length; i++) {
		addressLi[i].index=i;
		addressLi[i].onclick=function () {
			for (var i = 0; i < addressI.length; i++) {
				addressI[i].className="";

			}
			addressI[this.index].className="address-ico";
			shopPacket[3].style.display="none";
			mark.style.display="none";
			swiper3.unlockSwipeToNext(); 
			// $("body").unbind("touchmove"); 
		}
	}

	var shopContainer=document.getElementsByClassName('shopping-guess-container')[0];
	var switchDiv=document.getElementsByClassName('shopping-switch-warp');
	var slideDiv=shopContainer.getElementsByTagName('div');

	for (var i = 0; i < slideDiv.length; i++) {
		slideDiv[i].index=i;
		slideDiv[i].onclick=function () {
			for (var i = 0; i < slideDiv.length; i++) {
				switchDiv[i].style.display="none";
				slideDiv[i].className="";
			}
			switchDiv[this.index].style.display="block";
			this.className="avtive-recommend";
		}
	}
	var tabLst=document.getElementById('tab-lst');
	var tabA=tabLst.getElementsByTagName('a');
	var tabContent=document.getElementById('tab-content');
	var tabDiv=tabContent.getElementsByTagName('div');
	for (var i = 0; i < tabA.length; i++) {
		tabA[i].index=i;
		tabA[i].onclick=function () {
			for (var i = 0; i < tabA.length; i++) {
				tabA[i].className="";
				tabDiv[i].style.display="none";
			}
			this.className="silde-color";
			tabDiv[this.index].style.display="block";
		}
	}



	var headerTitle=document.getElementsByClassName('header-title')[0];
	var sectionLi=headerTitle.getElementsByTagName('li');
	var sectionEm=headerTitle.getElementsByTagName('em');
	var sectionSlide=document.getElementsByTagName('section');
	
 			sectionLi[0].onclick=function () {
 				for (var i = 0; i < sectionEm.length; i++) {
 					sectionEm[i].className="";
 				}
 				this.className="active";
 				sectionEm[0].className="line";
 				swiper3.slideTo(0, 500, false);
 				
 			}
 			sectionLi[1].onclick=function () {
 				for (var i = 0; i < sectionEm.length; i++) {
 					sectionEm[i].className="";
 				}
 				this.className="active";
 				sectionEm[1].className="line";
 				swiper3.slideTo(1, 500, false);
 				$(window).scrollTop(0);
 			}
 	
    var swiper1 = new Swiper('.swiper-container1', {
       
        pagination: '.swiper-pagination1',
          observer:true,//修改swiper自己或子元素时，自动初始化swiper
  		  observeParents:true//修改swiper的父元素时，自动初始化swiper
    });
    var swiper2 = new Swiper('.swiper-container2', {
       
        pagination: '.swiper-pagination2',
         observer:true,//修改swiper自己或子元素时，自动初始化swiper
  		 observeParents:true//修改swiper的父元素时，自动初始化swiper
    });
    var swiper3 = new Swiper('.swiper-container3', {
        observer:true,//修改swiper自己或子元素时，自动初始化swiper
  		  observeParents:true,//修改swiper的父元素时，自动初始化swiper
         pagination: '.swiper-pagination3',
          paginationType: 'fraction',
          autoHeight: true,
          threshold : 70,
          longSwipesRatio : 0.1,
          onSlideNextEnd: function(swiper){
          
          		
          		for (var i = 0; i < sectionLi.length; i++) {
          		sectionLi[i].className="";
          		sectionEm[i].className="";
	          	}
	          	sectionLi[1].className="active";
	 			sectionEm[1].className="line"; 
	 			$(window).scrollTop(0);

         	    },
       	onSlidePrevEnd: function(swiper){
          
          		
          		for (var i = 0; i < sectionLi.length; i++) {
          		sectionLi[i].className="";
          		sectionEm[i].className="";
	          	}
	          	sectionLi[0].className="active";
	 			sectionEm[0].className="line";
 				

          },
 		

    });

    var swiper = new Swiper('.swiper1', {
       
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
       observer:true,//修改swiper自己或子元素时，自动初始化swiper
  		  observeParents:true,//修改swiper的父元素时，自动初始化swiper
  		onTouchEnd: function(swiper){
    		TR=swiper.translate;

			if(TR<-$(".swiper1 .swiper-slide").width()*($(".swiper1 .swiper-slide").length-1)){
				for (var i = 0; i < sectionEm.length; i++) {
 					sectionEm[i].className="";
					sectionLi[i].className="";

 				}
				swiper3.slideTo(1, 500, false);
				sectionLi[1].className="active";
 				sectionEm[1].className="line";
			}
			
    	}
    });


	
};
