window.onload=function(){
	
	//整体框架
	document.documentElement.style.overflowY = 'hidden';//隐藏滚动条
	document.documentElement.style.overflowX = 'hidden';//隐藏滚动条
	var docH=document.documentElement.clientHeight;
	var docW=document.documentElement.clientWidth;
	
	var section=document.querySelector('.section');
	var pages=document.querySelectorAll('.page');
	var slect=document.querySelector('.select');
	var nextPage=document.querySelector('.nextPage');
	
	var pageName=['首页','关于我','技能栈','经历','作品集','联系我'];//存放页面名称
	var classPage=['glyphicon glyphicon-home','glyphicon glyphicon-user','glyphicon glyphicon-check','glyphicon glyphicon-globe','glyphicon glyphicon-bookmark','glyphicon glyphicon-envelope'];//存放小图标类名
	var backColor=['#64b79b','#399978','#6280ad','#31708f','#d0706e','#a0976f'];
	
	//生成背景色
	for(let i=0;i<pages.length;i++){
		pages[i].style.width='100%';
		pages[i].style.background=backColor[i];
		pages[i].style.height=docH+'px';
	};
	
	//生成小图标
	for(let i=0;i<pages.length;i++){
		var span=document.createElement('span');
		span.className='cirlcle';
		slect.appendChild(span);
	}
	var circles=slect.querySelectorAll('span');
	
	//滚轮事件函数，兼容chorm和其他标准浏览器
	function myScroll(obj,upFn,downFn){
		obj.onmousewheel=fn;
		obj.addEventListener('DOMMouseScroll',fn);
		function fn(ev){
			if(ev.wheelDelta>0 || ev.detail<0){
				upFn();
			}else{
				downFn();
			}
			ev.preventDefault();
			return false;
		}
	};
	
	//封装翻页函数
	var pageNum=0;//存放当前显示页面
	function upScroll(){
		move(section,{top:-pageNum*docH},300,'linear');
		changPage();
	};
	function downScroll(){
		move(section,{top:-pageNum*docH},300,'linear');
		changPage();
	};
	
	function changPage(){
		for(let i=0;i<circles.length;i++){
			circles[i].className='cirlcle';
		}
		circles[pageNum].className=classPage[pageNum];
		if(pageNum!=5){
			nextPage.style.display='';
		};
		if(pageNum==5){
			nextPage.style.display='none';
		};
		
	}
	changPage();
	
	//滚轮翻页
	myScroll(document,function(){
		if(pageNum>0){
			pageNum--;
			upScroll();
		}
	},function(){
		if(pageNum<pages.length-1){
			pageNum++;
			downScroll();
		}
	});
	
	//按钮翻页
	
	nextPage.onclick=function(){
		if(pageNum<pages.length-1){
			pageNum++;
			downScroll();
		}
	}

	//页面选择框翻页
	slect.style.top=docH/2-slect.clientHeight/2+'px';
	for(let i=0;i<circles.length;i++){
		circles[i].style.top=(2*i+1)*20+'px';
		circles[i].onmouseover=function(ev){
			this.className=classPage[i];
			
			//生成标签栏
			var tag=document.createElement('div');
			tag.innerHTML=pageName[i];
			tag.className='tag';
			tag.style.left=slect.offsetLeft-70+'px';
			tag.style.top=slect.offsetTop+this.offsetTop+'px';
			section.appendChild(tag);
			
			this.onmouseout=function(){
				tag.remove();
				this.className='cirlcle';
				changPage();
			};
		};
		
		//点击翻页
		circles[i].onclick=function(){
			this.className=classPage[i];
			pageNum=i;
			move(section,{top:-pageNum*docH},500,'linear');
			changPage();
		};
	};
	
	//技能栏
	var skill=document.querySelector('.skill');
	skill.style.left=docW*0.4+'px';
	var bar1=new ProgressBar();
	var bar2=new ProgressBar();
	var bar3=new ProgressBar();
	var bar4=new ProgressBar();
	var bar5=new ProgressBar();
	var bar6=new ProgressBar();
	bar1.init({
		parent:pages[2],
		content:'Html/css：熟练',
		progressColor:'#0f98c5',
		percent:'0.8',
		top:150	
	});
	bar2.init({
		parent:pages[2],
		content:'原生JavaScript：熟练',
		progressColor:'#0f98c5',
		percent:'0.7',
		top:220	
	});
	bar3.init({
		parent:pages[2],
		content:'面向对象/组件开发：熟悉',
		progressColor:'#16b2e5',
		percent:'0.6',
		top:290	
	});
	bar4.init({
		parent:pages[2],
		content:'Ajax/Jsonp:熟悉',
		percent:'0.6',
		progressColor:'#16b2e5',
		top:360	
	});
	bar5.init({
		parent:pages[2],
		content:'Jquery:了解',
		progressColor:'#86cce3',
		percent:'0.4',
		top:430	
	});
	bar6.init({
		parent:pages[2],
		content:'bootStrapt:了解',
		progressColor:'#86cce3',
		percent:'0.4',
		top:500	
	});
	
	//	经历框
	var exps=document.querySelectorAll('.experience');
	var links=document.querySelectorAll('.links div');
	for(let i=0;i<exps.length;i++){
		links[0].style.background='rgb(26, 62, 80)';
		links[0].style.transform='scale(1.5)';
		links[i].onclick=function(){
			for(let i=0;i<exps.length;i++){
				exps[i].style.display='none';
				links[i].style.background='#ccc';
				links[i].style.transform='';
			}
			this.style.background='rgb(26, 62, 80)';
			this.style.transform='scale(1.5)';
			exps[i].style.display='block';
		}
	}
}


