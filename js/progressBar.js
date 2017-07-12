(function(window,undefined){
	var ProgressBar=function(){
		//配置默认参数
		this.settings={
			parent:document.body,
			width:200,
			height:20,
			left:document.documentElement.clientWidth*0.2,
			top:0,
			content:'描述文字',
			bgColor:'#c0e8fa',
			progressColor:'0f98c5',
			percent:'50%'
		};
	};
	
	ProgressBar.prototype={
		constructor:ProgressBar,
		
		//接收参数
		init:function(opt){
			var opt=opt||this.settings;
			for(var attr in opt){
				this.settings[attr]=opt[attr];
			}
			this.create();
		},
		
		//创建DOM
		create:function(){
			this.box=document.createElement('div');
			this.barBox=document.createElement('div');
			this.progress=document.createElement('div');
			this.content=document.createElement('p');
			
			//添加dom
			this.settings.parent.appendChild(this.box);
			this.box.appendChild(this.barBox);
			this.box.appendChild(this.content);
			this.barBox.appendChild(this.progress);
			
			//定义属性
			this.box.style.position='absolute';
			this.box.style.left=this.settings.left+'px';
			this.box.style.top=this.settings.top+'px';
			
			this.barBox.style.width=this.settings.width+'px';
			this.barBox.style.height=this.settings.height+'px';
			this.barBox.style.borderRadius=5+'px';
			this.barBox.style.backgroundColor=this.settings.bgColor;
			
			this.progress.style.width=this.settings.width*this.settings.percent+'px';
			this.progress.style.height=this.settings.height+'px';
			this.progress.style.backgroundColor=this.settings.progressColor;
			
			this.content.innerHTML=this.settings.content;
			this.content.style.font='15px/30px 微软雅黑'
		}
	};
	window.ProgressBar=ProgressBar;
})(window,undefined);
