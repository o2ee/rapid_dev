var rs485 = require("rs485");

//parity为字符串：none, odd, even
rs485.init(9600, 8, 1, "none");

//485回调函数，打印数据和大小
function read_callback(data, size){
	print(data);
	print(size);
}
//注册485读取函数
rs485.on(read_callback);

function loop(){
	while(true){

	}
}

loop();
