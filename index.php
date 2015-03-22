<?php
if(!defined('ROOT')) exit('No direct script access allowed');

function loadAccessibilityButtons($target="*",$style="",$check=true) {
	if($check && ACCESSIBILITY_FEATURES=="false") return;
	echo "<div id='accessibilitybuttons'>
		<button id='#plus-btn' title='Increase Page Font Size' onclick='increaseFont();'>A+</button>
		<button id='#rest-btn' title='Reset Page Font Size' onclick='resetFont();'>A</button>
		<button id='#minus-btn' title='Decrease Page Font Size' onclick='decreaseFont();'>A-</button>
	</div>";
	echo "<script language=javascript>";
	echo "var targetSingle='$target';";
	echo file_get_contents(dirname(__FILE__)."/script.js");
	echo "</script>";
	echo "<style>";
	echo file_get_contents(dirname(__FILE__)."/style.css");
	echo $style;
	echo "</style>";
	_css("accessibility");
}
?>
