var key= require("key");

function key_callback(keyName){
	print(keyName);
}
//注册按键的回调函数
key.on(key_callback);

function loop(){
	while(true){

	}
}

loop();
