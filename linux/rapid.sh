#!/bin/sh

DEV=/dev/ttyUSB0

if [ $1 = '-h' ]
then
	echo '-h  get help'
	echo '-c  <js file>  compile and generate bin file'
	echo '    <bin file>  download bin file with default config'
	echo '-u  <bin file>  upgrade firmware with default config'
	echo '-s  <serial device[ttyUSB0]>  <bin file>'
elif [ $1 = '-c' ]
then
	if [ "$2" != '' ]
	then
		./compile $2
	else
		echo 'missing input js file!'
	fi
elif [ $1 = '-s' ]
then
	if [ "$2" != '' ]
	then
		if [ "$3" != '' ]
		then
			DEV=$2
			stty -F $DEV 115200
			echo '1' > $DEV < $DEV
			sz -k --ymodem $3 > $DEV < $DEV
		else
			echo 'missing input js file!'
		fi
	else
		echo 'missing serial device name!'
	fi
elif [ $1 = '-u' ]
then
	stty -F $DEV 115200
	echo '2' > $DEV < $DEV
	sz -k --ymodem $2 > $DEV < $DEV
elif [ "$1" != '' ]
then
	stty -F $DEV 115200
	echo '1' > $DEV < $DEV
	sz -k --ymodem $1 > $DEV < $DEV
else
	echo 'unknown command'
fi
