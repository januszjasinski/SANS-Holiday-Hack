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
            <div class="mm-main-panel"> \
            <input type="text" id="x" name="x" value="X-Axis"><br> \
            <input type="text" id="y" name="y" value="Y-Axis"><br><br> \
            <span onclick="app.game.makeCharacterTeleportTo(app.game.player,document.getElementById(\'x\').value,document.getElementById(\'y\').value);" style="cursor:pointer;">Teleport!</span><br> \
            <span onclick="app.game.makeCharacterTeleportTo(app.game.player,108,68);" style="cursor:pointer;">Top of Ladder</span></div><br> \
            <span onclick="app.game.makeCharacterTeleportTo(app.game.player,116,296);" style="cursor:pointer;">Bottom of map</span></div><br> \
            <span onclick="alert(JSON.stringify(app.game.getMouseGridPosition()));" style="cursor:pointer;">Get X/Y</span></div>',
        draggable: true
    }).appendTo('body');
    var mm = $('#sans-hack');
    mm.resizable({ handles: 'all' });
});
