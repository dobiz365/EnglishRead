/*
******************�ʵ�Ӣ��MP3�ֻ��㲥APP**********************
�ص㣺
1�������򵥣������ļ�Ƕ��CORDOVA�У�Ȼ��ɼ�MP3�ļ������޸�Դ�ļ��������ӾͿ��Ը㶨��
2����MP3�Ĳ��Ž�����ʾ��

���ߣ��㽭ʡ�²��س���Сѧ ����  MAIL:147885198@qq.com
����ҵ��ѡ�֣���ĿҲ��Ϊ�˽̶��Ӷ�Ӣ��Ž����ġ����в���֮����ָ�̡�
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
		if(cur_name!=''){//��ԭ����Ϊ0
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

//���½���
function check(){
	if(state=='stop'){
		
	}else{
		var duration=mp3.duration;
		if(duration){//ʱ������
			var time=mp3.currentTime;
			var idx=parseInt(cur_name)-1;
			var prog=progress_dom[idx];
			prog.style.width=(time/duration)*100+'%';
			
		}
	}
}