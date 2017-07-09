/*
******************攀登英语MP3手机点播APP**********************
特点：
1、制作简单，将本文件嵌入CORDOVA中，然后采集MP3文件，并修改源文件，几分钟就可以搞定。
2、有MP3的播放进度显示。

作者：浙江省新昌县城西小学 唐明  MAIL:147885198@qq.com
本人业余选手，项目也是为了教儿子读英语才建立的。如有不当之处请指教。
*/

window.onload=init;

var mp3=null,cur_name='';
var progress_dom,text_dom;
var state='stop';

function init(){
	mp3=new Audio();
	progress_dom=document.querySelectorAll('.back_div');
	text_dom=document.querySelectorAll('.text_div');
	for(var i=0;i<text_dom.length;i++){
		text_dom[i].addEventListener('click',play,false);
	}
	setInterval(check,100);
}

function play(e){
	var li=e.target;
	var fname=li.getAttribute('data');
	if(cur_name!=fname){
		if(cur_name!=''){//还原进度为0
			var idx=parseInt(cur_name)-1;
			var prog=progress_dom[idx];
			prog.style.width='0%';
		}
		mp3.src='mp3/'+fname+'.mp3';
		mp3.play();
		cur_name=fname;
		state='play';
	}else{
		if(state=='play'){			
			state='stop';
			mp3.pause();
		}else{
			state='play';
			mp3.play();
		}
	}
}

//更新进度
function check(){
	if(state=='stop'){
		
	}else{
		var duration=mp3.duration;
		if(duration){//时长可用
			var time=mp3.currentTime;
			var idx=parseInt(cur_name)-1;
			var prog=progress_dom[idx];
			prog.style.width=(time/duration)*100+'%';
			
		}
	}
}