/**
	GRADLE - KNOWLEDGE IS POWER
    ***** PROPRIETARY CODE *****
    @author : Monkeycreative (Monkeycreative@outlook.com)
	@update: 02/02/2020 18:43:00
	@version_name: Monkey-creative
	@version_code: v6.0.0
	copyright @2020
*/

var gradle = gradle || {
    debug : true,
	
	//Ads information
	//===============
    banner             : 'ca-app-pub-3940256099942544/6300978111', //id placement banner
    interstitial       : 'ca-app-pub-3940256099942544/1033173712', //id placement interstitial

    isTesting          : true, //Ads mode testing. set to false for a production mode.
    enableBanner       : true, //Ads enable the banner. set to false to disable the banner.
    enableInterstitial : true, //Ads enable the interstitial. set to false to disable all interstitials.

    bannerAtBottom     : true, //if false the banner will be at top
    overlap            : true,

	notifiBackbutton   : true, //for confirmation backbutton
	notifiMessage      : 'Do you want to exit the game ?',

	intervalAds        : 3,     //Ads each interval for example each n times
	

	// more games
	//===========
						//change the value with your id developer :
	developer_link    : 'https://play.google.com/store/apps/developer?id=Childrens+Games',


	//Events manager :
	//================
    event: function(ev, msg){ gradle.process(ev,msg);switch(ev){
		
		case 'first_start':
			//gradle.showInter();
			break;
		case 'button_play':   //button play
			gradle.showInter();
			break;
		case 'select_mode':   //button mode of game 
			//gradle.showInter();
			break;
		case 'pause':   //button pause 
			gradle.showInter();
			break;
		case 'play_continue':   //button continue playing when panel pause showed 
			//gradle.showInter();
			break;
		case 'return_menu':   //button return to the menu of modes 
			//gradle.showInter();
			break;
		case 'button_instruction':   //button instruction
			//gradle.showInter();
			break;
		case 'about':   //button about
			//gradle.showInter();
			break;
		case 'next_level': //event on button sound
			gradle.showInter();
			break;
		case 'sound':   //button play
			//gradle.checkInterval() && gradle.showInter();
			break;
		case 'test':
			//gradle.checkInterval() && gradle.showInter();
			break;
   		case 'moreGames':
			gradle.more();
			break;
		case 'test':
			//gradle.checkInterval() && gradle.showInter();
			break;	
			
    }},
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//Ready : /!\ DO NOT CHANGE, ONLY IF YOU ARE AN EXPERT.
	//=========================
	first_start: true,
    start: function(){
		start_game();
		game.state.start("StateSplash");
	},
	processBackbutton : function(){ //return null;
		var key=null;
		/*if(typeof game.state.getCurrentState().key!='undefined'){
			key = game.state.getCurrentState().key;
			switch(key){
				case 'MainMenuState':
					key=null;
					break;
				case 'SelectPictureState':
					game.state.start('MainMenuState');
					break;
				case 'GameState':
					game.state.start('MainMenuState');
					break;
			}
		}*/
		return key;
	},
	process: function(ev, msg){
		gradle.log(ev);
		if(ev=='splash'){gradle.hideSplash(); return !1;}
		/*switch(ev){
			case 'main_menu':
				document.body.style.backgroundImage = "url('images/bg_menu.jpg')";
				break;
			case 'select_picture':
				document.body.style.backgroundImage = "url('images/bg_select.jpg')";
				break;
			case 'draw_image':
				document.body.style.backgroundImage = "url('images/bg_game.jpg')";
				break;
		}*/
		return !0;
	},
	onVisibilityChanged : function(){
		try{
			if (document.hidden || document.mozHidden || document.webkitHidden || document.msHidden){
				//gradle_onPauseRequested();
			}else{
				//gradle_onResumeRequested();
			}
		}catch(error){}
	},
	
	
	
	
	
	
	
	
	
	
	
	
	//Ready : /!\ DO NOT CHANGE, ONLY IF YOU ARE AN EXPERT.
	//=========================
	isMobile : ( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) ),
    log: function(val){
        if(typeof val === 'object' && typeof val.isTrusted!='undefined' && val.isTrusted==false) return;
        gradle.debug && console.log( gradle.isMobile && (typeof val === 'object' && val !== null) ? JSON.stringify(val) : val );
    },
	ready: function() {
        gradle.event('gradle ready ...');
        if(typeof admob !='undefined'){
            if(gradle.isTesting){
                admob.banner.config({
                    id: gradle.banner,
                    isTesting: true,
                    autoShow: true,
                    overlap: gradle.overlap,
                    offsetTopBar: false,
                    bannerAtTop: !gradle.bannerAtBottom
                });

                admob.interstitial.config({
                    id: gradle.interstitial,
                    isTesting: true,
                    autoShow: false,
                });
            }
            else{
                admob.banner.config({
                    id: gradle.banner,
                    autoShow: true,
                    overlap: gradle.overlap,
                    offsetTopBar: false,
                    bannerAtTop: !gradle.bannerAtBottom
                });

                admob.interstitial.config({
                    id: gradle.interstitial,
                    autoShow: false,
                });
            }
        }
        if(gradle.enableBanner && typeof admob!=='undefined'){
            admob.banner.prepare();
        }
        gradle.prepareInter();
         document.addEventListener('admob.banner.events.LOAD_FAIL', function(event) {
           gradle.log(event);
        });

        document.addEventListener('admob.banner.events.LOAD', function(event) {
           gradle.log(event);
        });

        document.addEventListener('admob.interstitial.events.LOAD_FAIL', function(event) {
           gradle.log(event);
        });

        document.addEventListener('admob.interstitial.events.LOAD', function(event) {
           gradle.log(event);
        });

        
		document.addEventListener('admob.interstitial.events.OPEN', function(event) {	
            gradle.log(event);
        });
		
		document.addEventListener('admob.interstitial.events.CLOSE', function(event) {
           gradle.log(event);
           admob.interstitial.prepare();
        });
		
		/*
		All Events :
		============
		admob.banner.events.LOAD
		admob.banner.events.LOAD_FAIL
		admob.banner.events.OPEN
		admob.banner.events.CLOSE
		admob.banner.events.EXIT_APP
		
		admob.banner.prepare()
		admob.banner.show()
		admob.banner.hide()
		admob.banner.remove()
		
		admob.interstitial.events.LOAD
		admob.interstitial.events.LOAD_FAIL
		admob.interstitial.events.OPEN
		admob.interstitial.events.CLOSE
		admob.interstitial.events.EXIT_APP
		
		admob.interstitial.prepare()
		admob.interstitial.show()
		
		admob.rewardvideo.events.LOAD
		admob.rewardvideo.events.LOAD_FAIL
		admob.rewardvideo.events.OPEN
		admob.rewardvideo.events.CLOSE
		admob.rewardvideo.events.EXIT_APP
		admob.rewardvideo.events.START
		admob.rewardvideo.events.REWARD
		
		admob.rewardvideo.prepare()
		admob.rewardvideo.show()
		*/

		gradle.addEventBackbutton();
        document.addEventListener("visibilitychange", gradle.onVisibilityChanged, false);
		document.addEventListener("mozvisibilitychange", gradle.onVisibilityChanged, false);
		document.addEventListener("webkitvisibilitychange", gradle.onVisibilityChanged, false);
		document.addEventListener("msvisibilitychange", gradle.onVisibilityChanged, false);
		gradle.event('first_start');
		gradle.start();
		//document.body.addEventListener('load', function () {
		//}, false);

    },

	enableMoreGames   : true,
    more: function(){
        (gradle.developer_link!=="")&&window.open(gradle.developer_link);
    },
	
	hideSplash: function(){
        if(gradle.isMobile && typeof cordova!='undefined'){
            cordova.exec(null, null, "SplashScreen", "hide", []);
        }
    },

    prepareInter: function(){
        if(!gradle.isMobile || typeof admob=='undefined' || admob==null) return;
        admob.interstitial.prepare();
    },

    showInter: function(){
        if(!gradle.isMobile || typeof admob=='undefined' || admob==null) return;
        admob.interstitial.show();
    },
	
	addEventBackbutton : function(){
		if(gradle.notifiBackbutton){
			document.addEventListener("backbutton", function() {
				if(gradle.processBackbutton()==null){
					navigator.notification.confirm(gradle.notifiMessage, function(buttonIndex){
						if(buttonIndex == 1) {
	                        navigator.app.exitApp();
	                        return true;
	                    }
	                    else {
	                        return false;
	                    }
					});
				}
			}, !1);
		}
	},

    run : function(){
		gradle.isMobile ? document.addEventListener('deviceready', gradle.ready, false) :  gradle.ready();
    },
	
	//Gradle Framework- events wrapper :
	//==================================
	trackStats : function(a, b){ gradle.event(a, b); },
	trackScreen: function(a,b) { gradle.event(a,b);  },
	trackEvent : function(a,b) { gradle.event(a,b);  },
	showAd     : function()    { gradle.event('showAd'); },
	__         : function(t)   { return null;/*t;*/ },
	
	
	currentInterval : 0,
	unlock_all_levels : false,
    checkInterval: function(){
		return (++gradle.currentInterval==gradle.intervalAds) ? !(gradle.currentInterval=0) : !1;
	},
	
	
	//Gradle Framework - image manager:
	//=================================
	pictures             : 25,
	imageBackgroundColor : "#fff",
	fullsize             : true,
	dialogTitleSaveImg   : 'Save image',
	saveImageSuccess     : 'Image saved to gallery',
	saveImageFailed      : 'Access denied to save the image',
	saveImage: function(base64Data){
		var imageData = base64Data.replace(/data:image\/png;base64,/,'');
		cordova.exec(
			function(msg){
				navigator.notification.alert(gradle.saveImageSuccess, function(buttonIndex){
                    if(buttonIndex == 1) {
                        navigator.app.exitApp();
                        return true;
                    }
                    else {
                        return false;
                    }
                },gradle.dialogTitleSaveImg);
                console.log(msg);
            },
            function(err){
                navigator.notification.alert(gradle.saveImageFailed, function(buttonIndex){
                    if(buttonIndex == 1) {
                        navigator.app.exitApp();
                        return true;
                    }
                    else {
                        return false;
                    }
                },gradle.dialogTitleSaveImg);
                console.log(err);
            },
            "Base64SaveImage","saveImageDataToLibrary",
            [imageData]
        );
	},
	
	//Gradle Framework - storage manager :
	//====================================
	buildKey : function(key){
        return "gd.4024."+key;
    },
	
	getStorage: function(key, default_value){
        var value;
        try {
            value = localStorage.getItem(gradle.buildKey(key));
        }
        catch(error){
			return default_value;
        }
		if(value !== undefined && value !=null){
            value = window.atob(value);
        }
		else{
			value = default_value;
		}
        return value;
    },

    setStorage: function(key, value){
        var v = value;
        if(v !== undefined){
            v = window.btoa(v);
        }
        try{
            localStorage.setItem(gradle.buildKey(key), v);
            return value;
        }
        catch(error){
            return undefined;
        }
    }
};

gradle.run();





