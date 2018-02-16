<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>KOFFIEDIK industrial | thatcher peskens</title>
<link rel="stylesheet" href="css/dropshadow.css" type="text/css" />
<link href="css/style.css" rel="stylesheet" type="text/css" />
<style type="text/css">
<!--

body {
	background-image: url(images/lijntjes-1.0.gif);
	background-repeat: no-repeat;
}

.plainbox {
position: relative; /* AP once more... */
width:615px;
}

.main-table {
/* background-color:#FFFDFD; */
border-style:solid;
border:1px;
border-color:#666666;
}
-->
</style>

<script language="JavaScript" type="text/javascript">

function show_email(emailname,emailserver) {
	document.write("<a href='mailto:" + emailname + "@" + emailserver +"'>");
	document.write(emailname + "@" + emailserver); 
	document.write("</a>"); 
}

function TP_openNewPage(source)
{
parent.location=source;
}

</script>

</head>
<body class="bodystyle">

<?php 
if ($_SERVER['SERVER_NAME'] == 'oscar' OR $_SERVER['SERVER_NAME'] == 'oscar.wlbd') {
// do nothing
} else { include "inc/inc.stats.php"; } 

?>


<div align="center">
  <div class="outerpair1 plainbox">
    <div class="outerpair2">
      <div class="shadowbox">
        <div class="innerbox">
          <table border="0" cellspacing="0" cellpadding="0" bgcolor="#FFFFFF" class="main-table">
            <tr >
              <td colspan="3" width="610" height="200" style="background-image:url(images/header.jpg)" align="right" valign="top">
			  	<table>
                  <tr>
                    <td width="240" nowrap="nowrap" align="right"><div class="navigation"> <a href="index.php?x=home" target="_self">home</a> | <a href="index.php?x=about" target="_self">about</a> | <a href="index.php?x=portfolio" target="_self">portfolio&nbsp;</a><br />
                        <a href="index.php?x=links" target="_self">links</a> | <a href="index.php?x=contact" target="_self">contact&nbsp;</a> </div></td>
                  </tr>
                  <tr>
                    <td align="right"><div class="portfolio_nav" > <br />
                        <a href="index.php?x=portfolio&amp;y=web" target="_self">web design</a> &nbsp;<br />
                        <a href="index.php?x=portfolio&amp;y=interaction">interaction design</a> &nbsp;<br />
                        <a href="index.php?x=portfolio&amp;y=visual">visual design</a> &nbsp;<br />
                        <a href="index.php?x=portfolio&amp;y=product">product design</a> &nbsp;<br />
                        <a href="index.php?x=portfolio&amp;y=conceptual">conceptual design</a> &nbsp;<br />
                        <a href="index.php?x=portfolio&amp;y=research">research</a> &nbsp;<br />
                      </div></td>
                  </tr>
                </table>
			  </td>
            </tr>
			<tr>
			<td width="16">&nbsp;</td><td align="left">
			<?php 
			if ($_GET[x] == home) {
				include "home.html"; 
			} else if ($_GET[x] == about) {
			  	include "about.html"; 
			} else if ($_GET[x] == links) {
			  	include "links.html"; 				
			} else if ($_GET[x] == contact) {
			  	include "contact.html"; 				
			} else if ($_GET[x] == portfolio) {	  
				  if ($_GET[y] == web) {
				  	include "web.html"; 
				  } else if ($_GET[y] == interaction) {
				  	include "interaction.html"; 
				  } else if ($_GET[y] == visual) {
				  	include "visual.html"; 															
				  } else if ($_GET[y] == product) {
				  	include "product.html"; 
				  } else if ($_GET[y] == conceptual) {
				  	include "conceptual.html"; 
				  } else if ($_GET[y] == research) {
				  	include "research.html"; 
				  } else {
					include "web.html";
					}
		// web
			} else if ($_GET[z] == 'stwc') {	  
			  	include "stwc.ath.cx.shtml"; 
			} else if ($_GET[z] == 'martyn') {	  
			  	include "martyn.peskens.nl.shtml"; 

		// interaction
			} else if ($_GET[z] == 'smart-ex') {	  
			  	include "smart-ex.html"; 
			} else if ($_GET[z] == 'utar') {	  
			  	include "utar.html"; 
		// visual
			} else if ($_GET[z] == 'rita') {	  
			  	include "rita.html"; 
			} else if ($_GET[z] == 'wolbodo-poster') {	  
			  	include "wolbodo-poster.html"; 
		// product
			} else if ($_GET[z] == 'bikebanner') {	  
			  	include "bikebanner.shtml"; 

			} else if ($_GET[z] == 'HEMA-furniture') {	  
			  	include "hema-furniture.shtml"; 

		// research
			} else if ($_GET[z] == 'observational-research') {	  
			  	include "observational-research.shtml"; 
		// else
			} else {
			  include "home.html";
			  } 
				  
				  
				  ?>
			</td><td width="16"></td>
			</tr>
            <tr>
              <td align="center" class="portfolio_nav_onder" colspan="3"><br />
                <a href="?x=portolio&amp;y=home">home</a> | <a href="?x=portolio&amp;x=about">about</a> | <a href="?x=portolio&amp;x=links">links</a> | <a href="?x=portolio&amp;x=contact">contact</a> <br />
                <a href="?x=portolio&amp;y=web">web design</a> | <a href="?x=portfolio&amp;y=interaction">interaction design</a> | <a href="?x=portfolio&amp;y=visual">visual design</a> | <a href="?x=portfolio&amp;y=product">product design</a> | <a href="?x=portfolio&amp;y=conceptual">conceptual work</a> | <a href="?x=portfolio&amp;y=research">research</a> <br />
                <br />
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>
</body>
</html>
