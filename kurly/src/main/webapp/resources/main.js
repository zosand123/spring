// default.jsp에서 고객센터
function view()
{
  document.getElementById("inner").style.visibility="visible";
}
function hide()
{
  document.getElementById("inner").style.visibility="hidden";
}
function first_hide()
{
	//document.getElementById("first").style.display="none";
	$("#first").slideUp(1000);
}

// 전체카테고리 부분
function view_main()
{
	document.getElementById("main_submenu").style.visibility="visible";
}
function hide_main()
{
	document.getElementById("main_submenu").style.visibility="hidden";
}

function view_inner(n)
{
    document.getElementsByClassName("inner_menu")[n].style.visibility="visible";	
}
function hide_inner(n)
{
    document.getElementsByClassName("inner_menu")[n].style.visibility="hidden";	
}
// default.jsp에서 main.js를 사용하려면 아래와 같이 코딩후 default.jsp에서   body=first_in()으로 하면 됨
/*
function first_in()
{
	 var ck=0;
 	setInterval(function()
 	{
 		if(ck%2 == 0)
 			document.getElementById("first_in").innerHTML="서울·경기·인천 &nbsp;<b style='color:purple'>샛별배송  </b>";
 		else
 			document.getElementById("first_in").innerHTML="수도권 이외지역 &nbsp;<b style='color:purple'>택배배송  </b>";
 		ck++;
 	},2000);
}
*/

// member.jsp
function userid_dupcheck(form)
{
	 
	   var chk=new XMLHttpRequest();
	   chk.open("get","userid_dupcheck?userid="+form.userid.value);
	   chk.send();
	   chk.onreadystatechange=function()
	   {
		   if(chk.readyState==4) // 동작이 완료되면
		   {
		         if(chk.responseText==0) // 레코드가 없다 => 사용가능
		         {
		        	 alert("아이디 사용가능"); 
		        	 document.getElementById("uid").innerText="아이디 중복 확인 ";
		        	 document.getElementById("uid").style.color="blue";
		        	 form.userid_chk.value=1;
		         }
		         else
		         {
		        	 alert("아이디 사용 불가능")
		        	 document.getElementById("uid").innerText="아이디 중복 확인 ";
		        	 document.getElementById("uid").style.color="red";
		        	 form.userid_chk.value=0;
		         }
		   }	   
	   }
}

function email_dupcheck(form)
{
	   var chk=new XMLHttpRequest();
	   chk.open("get","email_dupcheck?email="+form.email.value);
	   chk.send();
	   chk.onreadystatechange=function()
	   {
		   if(chk.readyState==4)
		   {
			   if(chk.responseText==0)
		         {
		        	 alert("이메일 사용가능"); 
		        	 document.getElementById("ema").innerText="이메일 중복 확인 ";
		        	 document.getElementById("ema").style.color="blue";
		        	 form.email_chk.value=1;
		         }
		         else
		         {
		        	 alert("이메일 사용 불가능")
		        	 document.getElementById("ema").innerText="이메일 중복 확인 ";
		        	 document.getElementById("ema").style.color="red";
		        	 form.email_chk.value=0;
		         } 
		   }	   
	   }
}
// pro_content.jsp
function suchange(n,p)
{
	// 상품의 숫자를 증가, 감소 => 상품금액도 변경
	var su=parseInt(document.getElementById("con_su").innerText);
	 
	if(n==0) // 감소
	{
	   if(su > 1)
	   {
		   su--;
	       document.getElementById("con_su").innerText=su;
	       document.getElementById("con_price").innerText=comma_change(su*p);
	   }
	}
	else  // 증가
	{
		su++;
		document.getElementById("con_su").innerText=su;
	    document.getElementById("con_price").innerText=comma_change(su*p);
	}
 }

// pro_content에서 상품그림바꾸기
function img_change(img,my)
{
	document.getElementById("con_img").src="../resources/pimg/"+img;
	var con_m=document.getElementsByClassName("con_m");
	for(i=0;i<con_m.length;i++)
		con_m[i].style.background="#eeeeee";
	my.style.background="white";
}

 

function comma_change(num)  // 숫자에 콤마를 넣고 리턴해주는 함수
{
	return new Intl.NumberFormat().format(num);
}


















