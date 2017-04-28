var dns = require("dns");
var key = require("key");

//连接成功的回调函数
function dns_cb(ip){
	print(ip);
}

//按键按下，dns查询
function key_cb(name){
	print(name);
	dns.lookup("bbs.o2ee.com", dns_cb);
}

key.on(key_cb);



function loop(){
	while(true){

	}
}

loop();
