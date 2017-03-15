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
		}
	}

	mark.onclick=function () {
		mark.style.display="none";
		for (var i = 0; i < shopPacket.length; i++) {
			shopPacket[i].style.display="none";
		}
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

	var windowTop=0;//初始话可视区域距离页面顶端的距离
	$(window).scroll(function() {
	var scrolls = $(this).scrollTop();//获取当前可视区域距离页面顶端的距离
	if(scrolls>=windowTop){//当B>A时，表示页面在向下滑动
	tabLst.style.cssText="position:static";
	windowTop=scrolls;
	}else if(scrolls==0){//当B
	tabLst.style.cssText="position:static";
	}else{
		tabLst.style.cssText="position:fixed;top:2.2rem;width:100%;background:#fff";
		windowTop=scrolls;
	}
	});

	var headerTitle=document.getElementsByClassName('header-title')[0];
	var sectionLi=headerTitle.getElementsByTagName('li');
	var sectionEm=headerTitle.getElementsByTagName('em');
	var sectionSlide=document.getElementsByTagName('section');

	for (var i = 0; i < sectionLi.length; i++) {
		sectionLi[i].index=i;
		sectionLi[i].onclick=function () {
			for (var i = 0; i < sectionLi.length; i++) {
				sectionLi[i].className="";
				sectionEm[i].className="";
				sectionSlide[i].style.display="none";
			}
			this.className="active";
			sectionEm[this.index].className="line";
			sectionSlide[this.index].style.display="block";
		}
	}

	/* 倒计时 */
	 setInterval(settimes,500);

};
function settimes(){
    var getTime=document.getElementById("gettime");
    var allSpan = getTime.getElementsByTagName("span");
    var futureTime = new Date("2017/03/10,23:50:00");
    var now = new Date();
    var t = parseInt((futureTime.getTime() - now.getTime())/1000);
      if( t<=0 ){
        t=0
    }
    var H =Math.floor(t/3600%24);
    var Min = Math.floor(t/60%60);
    var S = Math.floor(t%60);
    var str =addZero(H)+addZero(Min)+addZero(S);
    for( var i = 0; i < str.length; i++ ){
            allSpan[i].innerHTML = str.charAt(i);
    }
}