var fs = require("fs");
var key = require("key");
var buf = require("buffer");

//create buffer
var buffer = buf.alloc(100);

//file system write callback
function fs_write_cb(err, fd){
	print(err);
	print(fs.write(fd, "hello world"));
	fs.close(fd);
}

//file system read callback
function fs_read_cb(err, fd){
	print(err);
	fs.read(fd, buffer, 10);
	print(buffer.toString());
	fs.close(fd);
}

//key callback
function key_cb(name){
	if(name == "key0"){
		//write a file
		fs.open("testabc.txt", "rw", fs_write_cb);
	}
	if(name == "key1"){
		read a file
		fs.open("testabc.txt", "rw", fs_read_cb);
	}
	if(name == "wkup"){
		//remove a file
		fs.rm("testabc.txt");
	}
}

key.on(key_cb);

function loop(){
	while(true){

	}
}

loop();
