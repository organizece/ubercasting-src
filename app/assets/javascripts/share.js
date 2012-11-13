// JavaScript Document

$(document).ready(function(){
   
	function setUpSocialShares(){
		
		$("a.share-tr").click(function(){
			
			window.open("https://twitter.com/share?url=http://www.ubercasting.com.br&text=Über - Casting Made Easy. Organize, mostre e compartilhe a sua agência.&hashtags=#ubercasting&counturl=www.ubercasting.com.br","UberTwitterShare","width=575, height=400, top=200, left=200");
			
		});
		
		
		$("a.share-go").click(function(){
			window.open("https://plus.google.com/share?url="+window.top.location,"UberGooglePlusShare","width=600, height=600,menubar=no,toolbar=no");
		});
		
	}
	
	setUpSocialShares();
   
});