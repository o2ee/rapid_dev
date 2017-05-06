# rapid_dev
rapid开发包
rapid development package

Rapid elite是基于stm32f103设计的开发板。开发板设计的方向主要面向网络通信和工业通信。由于单片机片上资源比较有限，rapid elite开发板专门针对这种情况开发了一套超小型版的Javascript引擎，不仅满足在资源有限的条件下运行，同时降低了硬件开发难度。

获取更多产品信息，请关注 www.o2ee.com

Rapid Elite is running on stm32f103 MCU. The design is basically focused on Internet and industrial communications. Due to the limitation of the MCU on-chip resources, the Javascript engine is shrinked to take up 40kb flash and 20kb RAM. However, the embedded application design becomes even easier than the other ways.

For more products, please visit www.o2ee.com

Rapid命令使用：

For windows user：
1.打开cmd命令行，进入项目目录下的windows目录。
2.复位开发板，三秒钟内按下wkup键，进入boot模式。
3.输入rapid.exe -d COM4 ..\tutorial\led.js进行js代码编译和下载。
4.输入rapid.exe -u COM4 ..\firmware\RAPID_0_0_5.bin进行固件更新。

note：-d 或 -u 后面参数是串口名称，需要根据当前名称进行修改。

