var net = require("net");
var key = require("key");

function key_cb(name){
	print(name);
	print(net.connect("10.1.1.177", 9090));
}

key.on(key_cb);

//连接成功的回调函数
function connect_callback(){
	print("socket connected!");
}

//客户端获取到数据的回调函数
function data_callback(data, size){
	print(size);
}
//注册回调函数
net.on("connected", connect_callback);
net.on("data", data_callback);


function loop(){
	while(true){

	}
}

loop();
