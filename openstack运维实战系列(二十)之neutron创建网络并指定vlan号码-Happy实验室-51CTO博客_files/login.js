document.domain = "51cto.com";
function Login(){
	new AutoBox({noCon:true,ADD:$('<iframe src="http://home.51cto.com/index/iframe-login?reback='+location.href+'"  iframeboder="0" scrolling="no" allowtransparency="true" style="border: 0 none;height:350px" width="380" id="login_form" name="login_form"></iframe>'),mask:"#000",W:380,H:403})
}
function resetLoginIframe(height){
	document.getElementById('login_form').style.height = height+'px';
}
