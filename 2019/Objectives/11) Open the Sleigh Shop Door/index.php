<?php
header("Access-Control-Allow-Origin: *");
$i = $_GET['i'];
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "https://api.ocr.space/parse/imageurl?apikey=e20ea5022a88957&url=https://sleighworkshopdoor.elfu.org/images/".$i.".png");
// Set so curl_exec returns the result instead of outputting it.
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
// Get the response and close the channel.
$response = curl_exec($ch);
$r = json_decode($response, true);
$a = $r["ParsedResults"][0]["ParsedText"];
$b = preg_replace("/[^A-Z0-9]/", '', $a);
print_r($b);
curl_close($ch);
?>
