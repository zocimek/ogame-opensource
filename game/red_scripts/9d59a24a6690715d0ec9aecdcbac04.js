function MessageSlider(b){var c=this;c.htmlobject=b;var a=document.documentElement.clientHeight-160;this.open=function(){if(!this.inAction){c.startTime=new Date().getTime();c.inAction=true;c.slideInStep()}},this.slideInStep=function(){time=new Date().getTime();height=parseInt(c.currHeight*((time-c.startTime)/500));if(height<c.currHeight){c.htmlobject.style.height=height+"px";window.setTimeout(c.slideInStep,10)}else{c.htmlobject.style.height=c.currHeight+"px";c.inAction=false}},this.close=function(){if(!c.inAction){c.startTime=new Date().getTime();c.inAction=true;c.htmlobject.style.height="0px";c.inAction=false}},c.inAction=false;if(document.getElementById("messages")){c.currHeight=Math.min(document.getElementById("messages").offsetHeight,a)}else{c.currHeight=a}};