(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{275:function(e,t,n){"use strict";n.r(t);n(259),n(43);var r=n(273),o=n(244),l=n(272);window.rbgShiftSlider=function(e){(e=e||{}).slideImages=e.hasOwnProperty("slideImages")?e.slideImages:[],e.stageWidth=e.hasOwnProperty("stageWidth")?e.stageWidth:1920,e.stageHeight=e.hasOwnProperty("stageHeight")?e.stageHeight:1080,e.displacementImage=e.hasOwnProperty("displacementImage")?e.displacementImage:"",e.fullScreen=!e.hasOwnProperty("fullScreen")||e.fullScreen,e.transitionDuration=e.hasOwnProperty("transitionDuration")?e.transitionDuration:.25,e.transitionGhostDuration=e.hasOwnProperty("transitionGhostDuration")?e.transitionGhostDuration:.25,e.transitionFilterIntensity=e.hasOwnProperty("transitionFilterIntensity")?e.transitionFilterIntensity:350,e.transitioSpriteIntensity=e.hasOwnProperty("transitioSpriteIntensity")?e.transitioSpriteIntensity:2,e.mouseDispIntensity=e.hasOwnProperty("mouseDispIntensity")?e.mouseDispIntensity:3,e.nav=!e.hasOwnProperty("nav")||e.nav,e.navElement=e.hasOwnProperty("navElement")?e.navElement:".scene-nav",e.interactive=!e.hasOwnProperty("interactive")||e.interactive,e.autoPlay=!e.hasOwnProperty("autoPlay")||e.autoPlay,e.autoPlaySpeed=e.hasOwnProperty("autoPlaySpeed")?e.autoPlaySpeed:3e3;var canvas=document.getElementById("rbgShiftSlider");l.utils.skipHello();var t,n,h,c,d,w,y,v,m,f,D,x=new l.Container,I=l.autoDetectRenderer(e.stageWidth,e.stageHeight,{transparent:!0}),P=new l.Container,S=[],O=[],C=[],F=[],E=[],M=[],A={x:0,y:0},k=0,H=0,T=0,W=0,B=0,G=!1;function L(t){r.a.set(A,{x:0,ease:o.b.easeOut}),(m=new o.e({onStart:function(){G=!0,r.a.to(A,e.transitionGhostDuration,{x:screen.width,ease:o.b.easeOut})},onComplete:function(){B=t,G=!1,!0===e.interactive&&function(){if(cancelAnimationFrame(void 0),!m.isActive()){for(var i=0,t=C.length;i<t;i++)M[i].x=0,M[i].y=0,E[i].scale.x=0,E[i].scale.y=0;P.on("mousemove",n).on("touchmove",n),function t(){if(v=requestAnimationFrame(t),A.x>=screen.width){T+=(k-T)/e.mouseDispIntensity,W+=(H-W)/e.mouseDispIntensity;for(var i=0,n=C.length;i<n;i++)E[i].scale.x=T-M[i].x,E[i].scale.y=W-M[i].y,M[i].position.x=T,M[i].position.y=W}else cancelAnimationFrame(v)}()}function n(e){k=e.data.global.x,H=e.data.global.y}}()},onUpdate:function(){T+=(A.x-T)/3,W+=(A.x-W)/3;for(var i=0,t=C.length;i<t;i++)E[i].scale.x=Math.atan(T-M[i].x)*(m.progress()*e.transitionFilterIntensity),M[i].position.x=W*(m.progress()*e.transitionSpriteIntensity)}})).to([S[0],S[1],S[2]],e.transitionDuration,{alpha:0,ease:o.c.easeOut},e.transitionDuration).add((function(){for(var i=0;i<e.slideImages.length;++i)if(i==t)for(var n=0,r=C.length;n<r;n++)S[n].texture=O[i],m.to(S[n],e.transitionDuration,{alpha:1,ease:o.c.easeOut},e.transitionDuration)}),e.transitionDuration)}if(!0===e.nav)for(var nav=document.querySelectorAll(e.navElement),i=0;i<nav.length;i++)nav[i].onclick=function(t){return G||("next"===this.getAttribute("data-nav")?(B>=0&&B<e.slideImages.length-1?L(B+1):L(0),!0===e.autoPlay&&(clearInterval(f),D())):(B>0&&B<e.slideImages.length?L(B-1):L(e.slideImages.length-1),!0===e.autoPlay&&(clearInterval(f),D()))),!1};function D(){f=setInterval((function(){(B+=1)===e.slideImages.length?L(B=0):L(B)}),e.autoPlaySpeed)}canvas.appendChild(I.view),x.addChild(P),!0===e.fullScreen?(I.view.style.objectFit="fill",I.view.style.width="100%",I.view.style.height="100%",I.view.style.top="50%",I.view.style.left="50%",I.view.style.webkitTransform="translate( -50%, -50% ) scale(1.2)",I.view.style.transform="translate( -50%, -50% ) scale(1.2)"):(I.view.style.maxWidth="100%",I.view.style.top="50%",I.view.style.left="50%",I.view.style.webkitTransform="translate( -50%, -50% )",I.view.style.transform="translate( -50%, -50% )"),(t=new l.Ticker).autoStart=!0,t.add((function(e){I.render(x)})),P.interactive=!0,function(){(n=new l.filters.ColorMatrixFilter).matrix=[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],(h=new l.filters.ColorMatrixFilter).matrix=[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0],(c=new l.filters.ColorMatrixFilter).matrix=[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0],F.push(n,h,c),(d=new l.Container).position.x=0,(w=new l.Container).position.x=0,(y=new l.Container).position.x=0,C.push(d,w,y);for(var i=0;i<e.slideImages.length;++i)O[i]=new l.Texture.from(e.slideImages[i]);i=0;for(var t=C.length;i<t;i++){P.addChild(C[i]);var r=new l.Texture.from(e.displacementImage);M.push(new l.Sprite(r)),E.push(new l.filters.DisplacementFilter(M[i]));var o=new l.Sprite(O[0]);S.push(o),S[i].width=I.view.width,S[i].height=I.view.height,S[i].anchor.set(.5),S[i].x=I.view.width/2,S[i].y=I.view.height/2,S[i].alpha=0,C[i].addChild(M[i],S[i]),C[i].filters=[E[i],F[i]],E[i].scale.x=0,E[i].scale.y=0,E[i].autoFit=!0}M[0].anchor.set(0),M[1].anchor.set(.5),M[2].anchor.set(.3),C[0].filters[1].blendMode=l.BLEND_MODES.ADD,C[1].filters[1].blendMode=l.BLEND_MODES.ADD,C[2].filters[1].blendMode=l.BLEND_MODES.ADD}(),!0===e.autoPlay?(Date.now(),L(B=0),D()):L(0)}}}]);