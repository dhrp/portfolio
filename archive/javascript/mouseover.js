<!-- Distributed by Hypergurl http://www.hypergurl.com 
--> function changeto(highlightcolor){ source=event.srcElement if (source.tagName=="TR"||source.tagName=="TABLE") 
return while(source.tagName!="TD") source=source.parentElement if (source.style.backgroundColor!=highlightcolor&&source.id!="ignore") 
source.style.backgroundColor=highlightcolor } function changeback(originalcolor){ 
if (event.fromElement.contains(event.toElement)||source.contains(event.toElement)||source.id=="ignore") 
return if (event.toElement!=source) source.style.backgroundColor=originalcolor 
}