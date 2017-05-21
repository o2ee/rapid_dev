var led = require("led");
var flag = 0;

function led_flash(){
if(flag == 0){
	led.turnOn("led1"); //打开led0
	flag= 1;
	} else {
		led.turnOff("led1"); //关闭led0
		flag = 0;
	}
}
//每隔500ms调用一次led_flash函数
setInterval(led_flash, 500);

function loop(){
	while(true){

	}
}

loop();
