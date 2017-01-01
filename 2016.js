// ==UserScript==
// @name         SANS Holiday Hack 2016
// @namespace    SansHolidayHack
// @version      0.2
// @description  Cheat on the game
// @author       Janusz Jasinski
// @match        http://*janusz.co.uk/sans/2016/game/*
// @require      https://code.jquery.com/jquery-3.1.1.min.js
// @require      https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js
// @resource     https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css
// @grant        unsafeWindow
// @grant        GM_addStyle
// @grant        GM_notification
// ==/UserScript==

$(document).ready(function() {
    'use strict';

    GM_addStyle('#sans-hack { padding: 5px; color: white; top: 0; right: 0; background-color: rgba(0, 0, 0, 0.7); width: 20%; position: fixed !important; z-index: 9999; overflow: scroll; resize: both; max-width: 90%; max-height: 90%;};');

    jQuery('<div/>', {
        id: 'sans-hack',
        html: ' \
            <script>function changeFunc(xy) { \
 xyArray = xy.split(","); \
 app.game.makeCharacterTeleportTo(app.game.player,xyArray[0],xyArray[1]); \
} </script> \
            <input type="text" id="x" name="x" value="X-Axis"><br> \
            <input type="text" id="y" name="y" value="Y-Axis"><br><br> \
            <span onclick="app.game.makeCharacterTeleportTo(app.game.player,document.getElementById(\'x\').value,document.getElementById(\'y\').value);" style="cursor:pointer;">Teleport!</span><br> \
            <span onclick="alert(JSON.stringify(app.game.getMouseGridPosition()));" style="cursor:pointer;">Get X/Y</span><br> \
            <select name="options"  onchange="changeFunc(this.value);"> \
              <option value=\"116,296\">WHERE TO GO</option> \
<option value=\"85,194\"> chewie_hut_bridge </option> \
<option value=\"194,149\"> chewie_hut_bridge_int </option> \
<option value=\"76,198\"> chewie_hut_ladder </option> \
<option value=\"171,155\"> chewie_hut_ladder_int </option> \
<option value=\"160,215\"> cranpi_terminal (PCAP)</option> \
<option value=\"258,84\"> cranpi_terminal (Falken)</option> \
<option value=\"238,58\"> cranpi_terminal (Deep File)</option> \
<option value=\"234,273\"> cranpi_terminal (Train 2016)</option> \
<option value=\"233,31\"> cranpi_terminal (Wumpus)</option> \
<option value=\"126,286\"> cranpi_terminal (Train 1976)</option> \
<option value=\"36,258\"> elf_house_1 </option> \
<option value=\"96,258\"> elf_house_2 </option> \
<option value=\"165,242\"> elf_house_2_exit </option> \
<option value=\"192,240\"> elf_house_2_r1 </option> \
<option value=\"174,210\"> elf_house_2_r3 </option> \
<option value=\"234,237\"> elf_house_2_r3_exit </option> \
<option value=\"216,107\"> mysterious_bag </option> \
<option value=\"234,159\"> mysterious_bag </option> \
<option value=\"236,59\"> santas_office_ext </option> \
<option value=\"270,104\"> santas_office_int </option> \
<option value=\"266,172\"> santas_office_int </option> \
<option value=\"255,86\"> santas_office_int </option> \
<option value=\"281,172\"> santas_office_int </option> \
<option value=\"281,157\"> santas_office_int </option> \
<option value=\"108,65\"> santas_workshop_ext </option> \
<option value=\"257,63\"> santas_workshop_int </option> \
<option value=\"96,178\"> small_treehouse </option> \
<option value=\"163,197\"> small_treehouse_int </option> \
<option value=\"157,216\"> test_door </option> \
<option value=\"116,294\"> train_station </option> \
<option value=\"110,303\"> train_station </option> \
<option value=\"176,34\"> train_station_interior </option> \
<option value=\"165,69\"> train_station_interior </option> \
<option value=\"165,58\"> train_station_interior </option> \
<option value=\"189,63\"> train_station_interior </option> \
<option value=\"108,242\"> tree_door </option> \
<option value=\"158,124\"> tree_door_inside </option> \
<option value=\"186,291\"> workshop_exit </option> \
<option value=\"195,268\"> workshop_station_ent </option> \
<option value=\"265,43\"> workshop_station_ent </option> \
<option value=\"231,31\"> workshop_station_ent </option> \
<option value=\"202,286\"> workshop_station_exit </option> \
            </select> \
',
        draggable: true
    }).appendTo('body');
    var mm = $('#sans-hack');
    mm.resizable({ handles: 'all' });
});
