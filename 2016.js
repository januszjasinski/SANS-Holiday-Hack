// ==UserScript==
// @name         SANS Holiday Hack 2016
// @namespace    SansHolidayHack
// @version      0.9
// @description  Cheat on the game
// @author       Janusz Jasinski
// @match        http://*janusz.co.uk/sans/2016/game/*
// @require      https://code.jquery.com/jquery-3.1.1.min.js
// @grant        unsafeWindow
// @grant        GM_addStyle
// @grant        GM_notification
// ==/UserScript==

$(document).ready(function() {
    'use strict';

    GM_addStyle('#sans-hack { padding: 10px 0px; color: white; top: 0; right: 0; background-color: rgba(255, 0, 0, 0.7); width: 100%; position: fixed !important; z-index: 9999; overflow: hidden; resize: none; max-width: 100%};');
        GM_addStyle('#sans-hack h2 {margin-left:10px;};');

    jQuery('<div/>', {
        id: 'sans-hack',
        html: ' \
            <script>function changeFunc(xy,name) { \
 xyArray = xy.split(","); \
 if (name===\'X\') { \
   var e = document.getElementById("dates"); \
   app.game.player.year = e.options[e.selectedIndex].value; \
} else { \
 app.game.player.year = name; \
} \
 app.game.makeCharacterTeleportTo(app.game.player,xyArray[0],xyArray[1]); \
} </script> \
            <!--<input type="text" id="x" name="x" value="X-Axis"><br> \
            <input type="text" id="y" name="y" value="Y-Axis"><br><br> \
            <span onclick="app.game.makeCharacterTeleportTo(app.game.player,document.getElementById(\'x\').value,document.getElementById(\'y\').value);" style="cursor:pointer;">Teleport!</span><br> \
            <span onclick="alert(JSON.stringify(app.game.getMouseGridPosition()));" style="cursor:pointer;">Get X/Y</span><br> -->\
        <h2>Teleport: \
            <select name="options" onchange="changeFunc(this.value,this.options[this.selectedIndex].getAttribute(\'name\'));"> \
<optgroup label=\"Locations\">\
<option name=\"X\" value=\"85,194\"> chewie_hut_bridge </option> \
<option name=\"X\" value=\"194,149\"> chewie_hut_bridge_int </option> \
<option name=\"X\" value=\"76,198\"> chewie_hut_ladder </option> \
<option name=\"X\" value=\"171,155\"> chewie_hut_ladder_int </option> \
<option name=\"X\" value=\"160,215\"> cranpi_terminal (PCAP)</option> \
<option name=\"X\" value=\"258,84\"> cranpi_terminal (Falken)</option> \
<option name=\"X\" value=\"238,58\"> cranpi_terminal (Deep File)</option> \
<option name=\"X\" value=\"234,273\"> cranpi_terminal (Train 2016)</option> \
<option name=\"X\" value=\"233,31\"> cranpi_terminal (Wumpus)</option> \
<option name=\"X\" value=\"126,286\"> cranpi_terminal (Train 1976)</option> \
<option name=\"X\" value=\"36,258\"> elf_house_1 </option> \
<option name=\"X\" value=\"96,258\"> elf_house_2 </option> \
<option name=\"X\" value=\"165,242\"> elf_house_2_exit </option> \
<option name=\"X\" value=\"192,240\"> elf_house_2_r1 </option> \
<option name=\"X\" value=\"174,210\"> elf_house_2_r3 </option> \
<option name=\"X\" value=\"234,237\"> elf_house_2_r3_exit </option> \
<option name=\"X\" value=\"216,107\"> mysterious_bag </option> \
<option name=\"X\" value=\"234,159\"> mysterious_bag </option> \
<option name=\"X\" value=\"236,59\"> santas_office_ext </option> \
<option name=\"X\" value=\"270,104\"> santas_office_int </option> \
<option name=\"X\" value=\"266,172\"> santas_office_int </option> \
<option name=\"X\" value=\"255,86\"> santas_office_int </option> \
<option name=\"X\" value=\"281,172\"> santas_office_int </option> \
<option name=\"X\" value=\"281,157\"> santas_office_int </option> \
<option name=\"X\" value=\"108,65\"> santas_workshop_ext </option> \
<option name=\"X\" value=\"257,63\"> santas_workshop_int </option> \
<option name=\"X\" value=\"96,178\"> small_treehouse </option> \
<option name=\"X\" value=\"163,197\"> small_treehouse_int </option> \
<option name=\"X\" value=\"157,216\"> test_door </option> \
<option name=\"X\" value=\"116,294\"> train_station </option> \
<option name=\"X\" value=\"110,303\"> train_station </option> \
<option name=\"X\" value=\"176,34\"> train_station_interior </option> \
<option name=\"X\" value=\"165,69\"> train_station_interior </option> \
<option name=\"X\" value=\"165,58\"> train_station_interior </option> \
<option name=\"X\" value=\"189,63\"> train_station_interior </option> \
<option name=\"X\" value=\"108,242\"> tree_door </option> \
<option name=\"X\" value=\"158,124\"> tree_door_inside </option> \
<option name=\"X\" value=\"186,291\"> workshop_exit </option> \
<option name=\"X\" value=\"195,268\"> workshop_station_ent </option> \
<option name=\"X\" value=\"265,43\"> workshop_station_ent </option> \
<option name=\"X\" value=\"231,31\"> workshop_station_ent </option> \
<option name=\"X\" value=\"202,286\"> workshop_station_exit </option> \
</optgroup> \
 <optgroup label=\"Coins\"> \
<option name=\"1978\" value=\"34,228\"> NW_COIN (1978)</option> \
<option name=\"1978\" value=\"109,295\"> NW_COIN (1978)</option> \
<option name=\"1978\" value=\"157,102\"> NW_COIN (1978)</option> \
<option name=\"1978\" value=\"185,145\"> NW_COIN (1978)</option> \
<option name=\"1978\" value=\"214,59\"> NW_COIN (1978)</option> \
<option name=\"1978\" value=\"215,275\"> NW_COIN_HALF (1978)</option> \
<option name=\"1978\" value=\"266,86\"> NW_COIN_ARMOR (1978)</option> \
<option name=\"2016\" value=\"86,191\"> NW_COIN_ROOF (2016)</option> \
<option name=\"2016\" value=\"117,252\"> NW_COIN (2016)</option> \
<option name=\"2016\" value=\"142,83\"> NW_COIN (2016)</option> \
<option name=\"2016\" value=\"161,184\"> NW_COIN_SMALL_TREEHOUSE (2016)</option> \
<option name=\"2016\" value=\"167,142\"> NW_COIN (2016)</option> \
<option name=\"2016\" value=\"167,221\"> NW_COIN_COUCH (2016)</option> \
<option name=\"2016\" value=\"175,228\"> NW_COIN_RACK (2016)</option> \
<option name=\"2016\" value=\"187,61\"> NW_COIN (2016)</option> \
<option name=\"2016\" value=\"208,238\"> NW_COIN_HALF (2016)</option> \
<option name=\"2016\" value=\"232,229\"> NW_COIN_TROUGH (2016)</option> \
<option name=\"2016\" value=\"237,32\"> NW_COIN (2016)</option> \
<option name=\"2016\" value=\"243,152\"> NW_COIN (2016)</option> \
<option name=\"2016\" value=\"278,170\"> NW_COIN_CRATE (2016)</option> \
  </optgroup> \
 <optgroup label=\"Interactions\"> \
<option name=\"1978\" value=\"197,227\"> Alabaster Snowball (1978)</option> \
<option name=\"2016\" value=\"197,227\"> Alabaster Snowball (2016)</option> \
<option name=\"1978\" value=\"132,73\"> Bushy Evergreen (1978)</option> \
<option name=\"2016\" value=\"132,73\"> Bushy Evergreen (2016)</option> \
<option name=\"2016\" value=\"210,105\"> Business Card (2016)</option> \
<option name=\"2016\" value=\"223,36\"> Cows (2016)</option> \
<option name=\"2016\" value=\"262,131\"> Dr. Who (2016)</option> \
<option name=\"2016\" value=\"108,297\"> Holly Evergreen (2016)</option> \
<option name=\"1978\" value=\"108,297\"> Holly Evergreen (1978)</option> \
<option name=\"2016\" value=\"230,47\"> Jason the Bale of Hay (2016)</option> \
<option name=\"2016\" value=\"202,110\"> Jessica Dosis (2016)</option> \
<option name=\"2016\" value=\"199,111\"> Josh Dosis (2016)</option> \
<option name=\"1978\" value=\"155,193\"> Minty Candycane (1978)</option> \
<option name=\"2016\" value=\"155,193\"> Minty Candycane (2016)</option> \
<option name=\"2016\" value=\"88,212\"> Music Machine (2016)</option> \
<option name=\"1978\" value=\"88,212\"> Music Machine (1978)</option> \
<option name=\"1978\" value=\"247,37\"> Pepper Minstix (1978)</option> \
<option name=\"2016\" value=\"247,37\"> Pepper Minstix (2016)</option> \
<option name=\"1978\" value=\"225,151\"> Santa Claus (1978)</option> \
<option name=\"2016\" value=\"236,281\"> Shinny Upatree (2016)</option> \
<option name=\"1978\" value=\"236,281\"> Shinny Upatree (1978)</option> \
<option name=\"2016\" value=\"44,294\"> Sparkle Redberry (2016)</option> \
<option name=\"1978\" value=\"168,61\"> Sugarplum Mary (1978)</option> \
<option name=\"2016\" value=\"168,61\"> Sugarplum Mary (2016)</option> \
<option name=\"2016\" value=\"156,120\"> Tom Hessman (2016)</option> \
<option name=\"2016\" value=\"75,248\"> Wunorse Openslae (2016)</option> \
<option name=\"1978\" value=\"75,248\"> Wunorse Openslae (1978)</option> \
  </optgroup> \
            </select> Date: <select name=\"dates\" id=\"dates\"><option name=\"date\" value=\"2016\">2016</option><option name=\"date\" value=\"1978"> 1978 </option> </select></h2> \
',
        draggable: true
    }).prependTo('body');
    var mm = $('#sans-hack');
    mm.resizable({ handles: 'all' });
});
