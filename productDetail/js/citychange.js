
window.onload=function(){
	var List=document.getElementById('list');
	var listLi=List.getElementsByTagName('li');
	var warpList=document.getElementById('warp-list');
	var warpListLi=warpList.getElementsByTagName('li');
	var cityWarp=document.getElementsByClassName('city-name-list')[0];
	var List1=document.getElementById('list1');
	var listLi1=List1.getElementsByTagName('li');
	var List2=document.getElementById('list2');
	var listLi2=List2.getElementsByTagName('li');

	for (var i = 0; i < listLi.length; i++) {
		listLi[i].index=i;
		listLi[i].onclick=function(){
			for (var i = 0; i < listLi.length; i++) {
				listLi[i].className="";
				
			}
			warpListLi[0].className="active-city-none";
			warpListLi[0].innerHTML=this.innerHTML;
			warpListLi[1].className="active-city";

			this.className="active-name";
			// warpListLi[this.index].className="";
			cityWarp.style.left="-19rem";
		}
	}
	for (var i = 0; i < warpListLi.length; i++) {
		warpListLi[i].index=i;
		warpListLi[i].onclick=function(){
			if (this.index==0) {
				warpListLi[1].className="";
				warpListLi[2].className="";
				this.className="active-city";
				warpListLi[0].innerHTML="请选择";
				cityWarp.style.left="0";
			}
			if (this.index==1) {
				
					warpListLi[2].className="";
				
				
				this.className="active-city";
				warpListLi[1].innerHTML="请选择";
				cityWarp.style.left="-19rem";
			}
		}
	}
	
	for (var j = 0; j < listLi1.length; j++) {
		listLi1[j].index=j;
		listLi1[j].onclick=function(){
			for (var j = 0; j < listLi1.length; j++) {
				listLi1[j].className="";
				
			}
			warpListLi[1].className="active-city-none";
			warpListLi[1].innerHTML=this.innerHTML;
			warpListLi[2].className="active-city";

			this.className="active-name";
			cityWarp.style.left="-38.2rem";
		}
	}
	for (var j = 0; j < listLi2.length; j++) {
		listLi2[j].index=j;
		listLi2[j].onclick=function(){
			for (var j = 0; j < listLi2.length; j++) {
				listLi2[j].className="";
				
			}
			this.className="active-name";
		}
	}

}