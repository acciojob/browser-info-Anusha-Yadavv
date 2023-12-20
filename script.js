//your JS code here. If required.
let navigator={
	browserName:"Netscape",
	version:"5.0(Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36 OPR/94.0.0.0"
}
let divElement=document.getElementById("browser-info");
divElement.innerText=`You are using ${navigator.browserName} version ${navigator.version}`;
