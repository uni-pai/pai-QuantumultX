/*
^http(s)://app.bilibili.com/v2/playurl.* url script-response-body http://localhost/Script/bilibilicr.js
*/

var body = JSON.parse($response.body);
body.quality = body.accept_quality[0];
$done({body:JSON.stringify(body)});