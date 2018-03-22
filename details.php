<!DOCTYPE html>
<html>
<head>
    <title>Details</title>

    <link rel="stylesheet" type="text/css" href="css/main.css" />

    <!--Web font-->
    <script type="text/javascript" src="//use.typekit.net/yzm7icv.js"></script>
    <script type="text/javascript">try{Typekit.load();}catch(e){}</script>

</head>
<body>

<div id="detailsContainer">
<div class="nav-top"><a href="index.html">back</a></div>

<?php

$page =  $_GET['p'];


if (!$page) {
    include "pages/ei.html";
} else {
    include "pages/".$page.".html";
}




//include "pages/ei.html";


?>

<br style="clear: both">

</div>

</body>
</html>
