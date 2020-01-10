var input_1 = document.body.querySelector('input[data-id="1"]');
var input_2 = document.body.querySelector('input[data-id="2"]');
var input_3 = document.body.querySelector('input[data-id="3"]');
var input_4 = document.body.querySelector('input[data-id="4"]');
var input_5 = document.body.querySelector('input[data-id="5"]');
var input_6 = document.body.querySelector('input[data-id="6"]');
var input_7 = document.body.querySelector('input[data-id="7"]');
var input_8 = document.body.querySelector('input[data-id="8"]');
var input_9 = document.body.querySelector('input[data-id="9"]');
var input_10 = document.body.querySelector('input[data-id="10"]');

var button_1 = document.body.querySelectorAll('button[data-id="1"]');
var button_2 = document.body.querySelectorAll('button[data-id="2"]');
var button_3 = document.body.querySelectorAll('button[data-id="3"]');
var button_4 = document.body.querySelectorAll('button[data-id="4"]');
var button_5 = document.body.querySelectorAll('button[data-id="5"]');
var button_6 = document.body.querySelectorAll('button[data-id="6"]');
var button_7 = document.body.querySelectorAll('button[data-id="7"]');
var button_8 = document.body.querySelectorAll('button[data-id="8"]');
var button_9 = document.body.querySelectorAll('button[data-id="9"]');
var button_10 = document.body.querySelectorAll('button[data-id="10"]');

function triggerEvent(el, type){
   if ('createEvent' in document) {
        // modern browsers, IE9+
        var e = document.createEvent('HTMLEvents');
        e.initEvent(type, false, true);
        el.dispatchEvent(e);
    } else {
        // IE 8
        var e = document.createEventObject();
        e.eventType = type;
        el.fireEvent('on'+e.eventType, e);
    }
}

// 1
for(var b in window) { 
  if(window.hasOwnProperty(b) && b.includes("_")) {
    var banga = b;
    break;
  }; 
}

window[banga].forEach(function (item, index) {
  var decodedData = window.atob(item);
  
  var substring = "%c";

  if (decodedData.includes(substring)) {
    decodedData = decodedData.substring(8, 16);
    console.log("[+] 1: " + decodedData);
    input_1.value = decodedData;
    triggerEvent(input_1, 'keyup');
    triggerEvent(button_1[button_1.length- 1], 'click');
  }
});

// 2
var input = document.getElementsByClassName("libra")[0].innerHTML;
var input = input.replace('<strong>','');
var input = input.replace('</strong>','');
console.log("[+] 2: " + input);
input_2.value = input;
triggerEvent(input_2, 'keyup');
triggerEvent(button_2[button_2.length- 1], 'click');

// 3
var poo = document.getElementsByTagName('script')[1].getAttribute('src');
poo = poo.replace('/client.js/','');


var xhr = new XMLHttpRequest();
xhr.open('GET', "https://spurs.biggreencoach.co.uk/ocr/index.php?i="+poo, true);

// If specified, responseType must be empty string or "text"
xhr.responseType = 'text';

xhr.onload = function () {
    if (xhr.readyState === xhr.DONE) {
        if (xhr.status === 200) {
            console.log("[+] 3: " + xhr.responseText);
            input_3.value = xhr.responseText;
            triggerEvent(input_3, 'keyup');
            triggerEvent(button_3[button_3.length- 1], 'click');
        }
    }
};

xhr.send(null);

// 4
input_4.value = localStorage.getItem(localStorage.key(0));
triggerEvent(input_4, 'keyup');
triggerEvent(button_4[button_4.length- 1], 'click');
triggerEvent(button_4[button_4.length- 1], 'click');
console.log("[+] 4: " + localStorage.getItem(localStorage.key(0)));

// 5
var str = document.title;
var pieces = str.replace('Crack the Crate                                                  ','');
input_5.value = pieces;
triggerEvent(input_5, 'keyup');
triggerEvent(button_5[button_5.length- 1], 'click');
triggerEvent(button_5[button_5.length- 1], 'click');
console.log("[+] 5: " + pieces);

// 6
var div = document.getElementsByClassName("items")[0]; // getElementById, etc
var children = div.childNodes;
input_6.value = div.childNodes[3].innerHTML+div.childNodes[0].innerHTML+div.childNodes[4].innerHTML+div.childNodes[6].innerHTML+div.childNodes[5].innerHTML+div.childNodes[2].innerHTML+div.childNodes[7].innerHTML+div.childNodes[1].innerHTML;
triggerEvent(input_6, 'keyup');
triggerEvent(button_6[button_6.length- 1], 'click');
triggerEvent(button_6[button_6.length- 1], 'click');
console.log("[+] 6: " + div.childNodes[3].innerHTML+div.childNodes[0].innerHTML+div.childNodes[4].innerHTML+div.childNodes[6].innerHTML+div.childNodes[5].innerHTML+div.childNodes[2].innerHTML+div.childNodes[7].innerHTML+div.childNodes[1].innerHTML);


// 7
var content = window.getComputedStyle(document.getElementsByClassName("instructions")[0], null).getPropertyValue('font-family');
var font = content.substring(0, 10);
font = font.replace(/[^0-9A-Z]/gi, '');
input_7.value = font;
triggerEvent(input_7, 'keyup');
triggerEvent(button_7[button_7.length- 1], 'click');
triggerEvent(button_7[button_7.length- 1], 'click');
console.log("[+] 7: " + font);

// 8
input_8.value = "VERONICA";
triggerEvent(input_8, 'keyup');
triggerEvent(button_8[button_8.length- 1], 'click');
triggerEvent(button_8[button_8.length- 1], 'click');
console.log("[+] 8: VERONICA" );

// 9
var tits = '';
document.querySelectorAll(".chakra").forEach((element) => {
    var content = window.getComputedStyle(element, ":after").getPropertyValue("content");
    tits += content;
});
var tats = tits.replace(/[^0-9A-Z]/gi, '')
input_9.value = tats;
triggerEvent(input_9, 'keyup');
triggerEvent(button_9[button_9.length- 1], 'click');
triggerEvent(button_9[button_9.length- 1], 'click');
console.log("[+] 9: " + tats);

// 10
input_10.value = "KD29XJ37";
input = '<div class="component gnome" data-code="XJ0"></div><div class="component swab" data-code="J39"></div><div class="component macaroni" data-code="A33"></div>';
div = document.getElementsByClassName("c10")[0];
div.insertAdjacentHTML( 'beforeend', input );
triggerEvent(input_10, 'keyup');
triggerEvent(button_10[button_10.length- 1], 'click');
triggerEvent(button_10[button_10.length- 1], 'click');
console.log("[+] 10: KD29XJ37");