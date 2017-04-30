var wifi = require("wifi");
var key = require("key");

print(wifi.init("TP-LINK_B957FD", "87654321"));

function key_cb(name){
	print(name);
	if(name == "key0") //按下key0，连接到server（可以下载tcpip调试助手）
	{
		if(wifi.connect("192.168.0.104", 8080)){
			print("connected successfully!");
		}
	}
	if(name == "key1") //当连接成功之后，按下key1，发送数据到server
		if(wifi.write("hello world")){
			print("write ok");
		}
	if(name == "wkup") //当连接成功之后，按下key1，发送数据到server
		if(wifi.close){
			print("close ok");
		}	
}

key.on(key_cb);

//客户端获取到数据的回调函数
function data_callback(data, size){
	print(data.toString());
}

//注册回调函数
wifi.on("data", data_callback);

function loop(){
	while(true){

	}
}

loop();
