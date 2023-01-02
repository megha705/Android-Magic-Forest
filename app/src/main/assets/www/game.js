var game;
! function() {
    
    GameTexts = function() {
        this.xml = this.hd = null;
        this.kb = []
    };
    GameTexts.prototype = {
        preload: function() {
            game.load.text("gameTexts", "assets/lang.xml")
        },
        create: function() {
            xml = game.cache.getText("gameTexts");
            this.hd = (new DOMParser).parseFromString(xml, "text/xml");
            var a = this.hd.getElementsByTagName("string");
            for (i = 0; i < a.length; i++) null == this.kb[a.item(i).getAttribute("id")] && (this.kb[a.item(i).getAttribute("id")] = []), 0 < a.item(i).getElementsByTagName(aa[k]).length && (this.kb[a.item(i).getAttribute("id")][k] = a.item(i).getElementsByTagName(aa[k])[0].textContent.replace(/\\n/g, "\n"))
        }
    };

    function l(a, b, d) {
        for (a.fontSize = b; a.width > d;) b--, a.fontSize = b
    }

    function m(a) {
        var b = ba;
        return void 0 == b.kb[a] || void 0 == b.kb[a][k] ? "" : b.kb[a][k].toUpperCase()
    }

    function ca(a) {
        var b = ba;
        return void 0 == b.kb[a] || void 0 == b.kb[a][k] ? "" : b.kb[a][k]
    }
    var aa = "en de fr es it br".split(" "),
        k = 0,
        p = "";
    var q = !0; - 1 < navigator.userAgent.indexOf("Windows Phone") && (q = !1);
    Phaser.Device._initialize();
    var da = Phaser.Device.desktop,
        fa = !1,
        r = navigator.userAgent || navigator.vendor || window.opera;
    if (r.match(/iPad/i) || r.match(/iPhone/i) || r.match(/iPod/i)) fa = !0;
    var t = !1,
        u = {
            Db: 0,
            ob: 1,
            ta: 2,
            xa: 3,
            Ea: 4
        },
        ga = {
            0: "INFINITY_TITLE",
            1: "ACTION_TITLE",
            2: "ESCAPE_TITLE",
            3: "DOWNFALL_TITLE",
            4: "BLOCKER_TITLE"
        },
        ha = {
            0: "INFINITY_INFO",
            1: "ACTION_INFO",
            2: "ESCAPE_INFO",
            3: "DOWNFALL_INFO",
            4: "BLOCKER_INFO"
        },
        v = {
            Zc: 0,
            Xc: 1,
            Bb: 2,
            Wc: 3,
            Rb: 4
        },
        x = {
            Vc: 10,
            Cb: 13,
            Id: 15,
            Uc: 16,
            Hd: 17,
            Dd: 18,
            Gd: 21,
            Fd: 22,
            Yc: 23,
            Ed: 24,
            Rb: 50
        };

    function ia(a) {
        return Object.keys(u).filter(function(b) {
            return u[b] === a
        })[0]
    }
    var ja = 0,
        ka = 0,
        y = {
            xMin: 0,
            xMax: 0,
            yMin: 0,
            yMax: 0
        },
        la = "#ffff00 #ffff00 #ffff00 #ffff00 #ffff00 #ffff00 #ffff00".split(" ");

    function aboutScreen(a) {
        return {
            scale: {
                x: [1.25, .9, 1.15, 1],
                y: [.85, 1.1, .95, 1]
            },
            position: {
                y: [a.y + 4, a.y - 4, a.y, a.y],
                x: [a.x]
            },
            time: 500
        }
    }

    function na(a) {
        return {
            scale: {
                x: [1.25, .9, 1.15, 1],
                y: [.85, 1.1, .95, 1]
            },
            position: {
                y: [a.y + 4, a.y - 4, a.y, a.y],
                x: [a.x]
            },
            time: 770
        }
    }

    function oa(a) {
        return {
            scale: {
                x: [1.3, .7, 1.8, 1, 1.05, .95, 1],
                y: [.7, 1.3, .8, 1, .95, 1.05, 1]
            },
            position: {
                y: [a.y + 16, a.y + 6, a.y - 18, a.y, a.y + 2, a.y - 1.2, a.y],
                x: [a.x]
            },
            time: 1100,
            delay: 350
        }
    }
    var pa = 10;

    function A(a) {
        return Math.floor(Math.random() * a)
    }

    function B(a, b) {
        return Math.floor(Math.random() * (b - a + 1)) + a
    }

    function qa() {
        var a = [-1, 1];
        return a[Math.floor(Math.random() * a.length)]
    }
    Array.prototype.contains = function(a) {
        for (var b = this.length; b--;)
            if (this[b] === a) return !0;
        return !1
    };

    function C(a, b, d) {
        null != b && (a.anchor.x = Math.round(a.width * b) / a.width);
        null != d && (a.anchor.y = Math.round(a.height * d) / a.height)
    }

    function ra(a) {
        function b(a) {
            for (var e = 0; e < a.children.length; e++) {
                var f = a.getChildAt(e);
                game.tweens.removeFrom(f.scale, !0);
                0 < a.getChildAt(e).children.length && b(a.getChildAt(e))
            }
        }
        b(a);
        game.tweens.removeFrom(a, !0)
    };
	
    var partnerName = "Monkeycreative";

    function sa() {
        var a;
        null == a && (a = !1);
        if (!game.device.desktop || a) document.getElementById("wrongRotation").style.display = "block"
    }

    function ta() {
        var a;
        null == a && (a = !1);
        if (!game.device.desktop || a) document.getElementById("wrongRotation").style.display = "none"
    };
    var D = [{
        ia: "clck",
        fileName: "Click"
    }, {
        ia: "happymmnt",
        fileName: "happy_moment",
        Ra: 2
    }, {
        ia: "sndSwp",
        fileName: "geff/swap",
        Ra: 2
    }, {
        ia: "sndSwpB",
        fileName: "geff/swap_back",
        Ra: 2
    }, {
        ia: "sndStar1",
        fileName: "geff/Star1",
        Ra: 2
    }, {
        ia: "sndStar2",
        fileName: "geff/Star2",
        Ra: 2
    }, {
        ia: "sndStar3",
        fileName: "geff/Star3",
        Ra: 2
    }, {
        ia: "spectFlame",
        fileName: "geff/spectrumFlame1",
        Ra: 2
    }, {
        ia: "sndExpl1",
        fileName: "jeweldestroy/Match1"
    }, {
        ia: "sndExpl2",
        fileName: "jeweldestroy/Match2"
    }, {
        ia: "sndExpl3",
        fileName: "jeweldestroy/Match3"
    }, {
        ia: "sndExpl4",
        fileName: "jeweldestroy/Match4"
    }, {
        ia: "sndExpl5",
        fileName: "jeweldestroy/Match5"
    }, {
        ia: "sndWin",
        fileName: "Victory1"
    }, {
        ia: "sndLose",
        fileName: "Fail"
    }, {
        ia: "blockBrk",
        fileName: "blocks/blocker_impact_lad4"
    }, {
        ia: "escPop",
        fileName: "jeweldestroy/Escaper-pop1"
    }, {
        ia: "spectCrt",
        fileName: "bombs/bomb_create_perfect_plus_jedna2",
        Ra: 2
    }, {
        ia: "sndBombCreate_1",
        fileName: "bombs/bomb_create1-star_game1",
        Ra: 2
    }, {
        ia: "sndBombCreate_2",
        fileName: "bombs/bomb_create2-star_game2",
        Ra: 2
    }, {
        ia: "sndBombCreate_3",
        fileName: "bombs/bomb_create3-star_game3",
        Ra: 2
    }, {
        ia: "sndBombExplode",
        fileName: "bombs/bombExplosion2"
    }, {
        ia: "downflsuccess",
        fileName: "gameplay/star-downfall_map1"
    }];
    var ba = new GameTexts;

    function ua() {}
    ua.prototype = {
        preload: function() {
            game.load.crossOrigin = "Anonymous";
            //game.stage.backgroundColor = "#113f05";
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.pageAlignHorizontally = !0;
            game.device.desktop || window.addEventListener("resize", function() {
                va()
            });
            this.scale.refresh();
            //game.load.image("inlogic_logo", "assets/img/logo-inlg.png");
            game.load.image("gameSplash", "assets/img/splashik.png");
            game.load.image("loadImg1", "assets/img/load/continue.png");
            game.load.image("loadImg2", "assets/img/load/continue1.png");
            game.load.image("loadImg3", "assets/img/load/continue2.png");
            ba.preload();
            wa();
            game.device.desktop && (game.input.mspointer.capture = !1)
        },
        create: function() {
            var a = game.add.group();
                //b = this.add.sprite(game.width / 2, game.height / 2, "inlogic_logo");
            //C(b, .5, .5);
            //a.addChild(b);
            a.alpha = 0;
            b = 300;
            b = 2E3;
            game.add.tween(a).to({
                alpha: 1
            }, 750, Phaser.Easing.Linear.None, !0, 0, 0, !1);
            a = navigator.yf || navigator.language;
            a = a.toLowerCase();
            p = "en"; - 1 !== a.indexOf("fr") && (p = "fr"); - 1 !== a.indexOf("it") && (p = "it"); - 1 !== a.indexOf("de") && (p =
                "de"); - 1 !== a.indexOf("es") && (p = "es"); - 1 !== a.indexOf("br") && (p = "br");
            k = aa.indexOf(p);
			
            ba.create();
            va();
            game.time.events.add(b, this.Cd, this)
        },
        Cd: function() {
            game.device.desktop || !1 !== va() ? (wa(), game.state.start("StatePreload")) : game.time.events.add(Phaser.Timer.SECOND, this.Cd, this)
        }
    };

    function va() {
        var a = !0;
        fa ? document.documentElement.clientWidth > document.documentElement.clientHeight ? (sa(), game.onPause.dispatch(), a = !1) : (ta(), game.onResume.dispatch()) : window.innerWidth > window.innerHeight ? (sa(), game.onPause.dispatch(), a = !1) : (ta(), game.onResume.dispatch());
        return a
    }

    function wa() {
        resolutionX = Math.floor(window.innerWidth / window.innerHeight * resolutionY);
        resolutionX > xa && (resolutionX = xa);
        resolutionX < ya && (resolutionX = ya);
        game.scale.setGameSize(resolutionX, resolutionY);
        game.scale.refresh()
    };

    function za() {}
    za.prototype = {
        preload: function() {
            game.stage.backgroundColor = "#113f05";
            var a;
            try {
                if (a = localStorage.getItem("jwch"), parsedData = JSON.parse(a), null != parsedData) {
                    var b = parsedData.profs;
                    null !== b && (E.q = b);
                    q && (b = parsedData.snd, 1 == b || 0 == b) && (musicPlayer.Ha = b)
                }
            } catch (d) {}
            Aa(this);
            this.Na.alpha = 0;
            game.add.tween(this.Na).to({
                alpha: 1
            }, 350, Phaser.Easing.Linear.None, !0, 0, 0, !1);
            game.load.setPreloadSprite(this.Na.xe);
            if (q && q)
                for (game.load.audio("musicMenu", ["assets/music/menuMusic.ogg", "assets/music/menuMusic.mp3"]), game.load.audio("musicGame", ["assets/music/gameMusic.ogg", "assets/music/gameMusic.mp3"]), a = 0; a < D.length; a++) game.load.audio(D[a].ia, ["assets/sounds/" + D[a].fileName + ".ogg", "assets/sounds/" + D[a].fileName + ".mp3"]);
            b = [
                ["bgImg", "bg800x950.png"],
                ["gameLogo", "MnuTtl.png"],
                ["menuOrnamentUpImg", "ui/MnuOrnamentUp.png"],
                ["menuOrnamentDownImg", "ui/MnuOrnamentDown.png"],
                ["btnPlayBig", "ui/play.png"],
                ["gameSelectBtn", "ui/tabulka2.png"],
                ["gameSelectBtn2", "ui/tabulka3.png"],
                ["ingameBarBg", "game/GamTimeBar.png"],
                ["btnBgBig", "ui/buttons.png"],
                ["btnBgSml", "ui/buttons-small.png"],
                ["btnPlay", "ui/play-ico.png"],
                ["btnRamcek", "ui/ramcek.png"],
                ["gamePanel", "game/dekor-1px.png"],
                ["shockWv", "effects/expl_ShockWave.png"],
                ["explCross", "effects/expl_ciara.png"],
                ["rotGlw", "effects/IMG_RotatingGlow.png"],
                ["blockParticle1", "effects/break_blocks_part1.png"],
                ["blockParticle2", "effects/break_blocks_part2.png"],
                ["blockParticle3", "effects/break_blocks_part3.png"],
                ["eff_spect", "effects/SprEffectSpectrumSplash.png"],
                ["msg_happy", "messg/happy-moment.png"],
                ["msg_noMoreMoves", "messg/no-more-moves.png"]
            ];
            for (a = 0; a < b.length; a++) game.load.image(b[a][0], "assets/img/" + b[a][1]);
            b = [
                ["gameBgSprS", "game/sachovnica.png", 66, 66],
                ["ingameBarSlider", "game/GamPrgrs.png", 400, 34],
                ["ingameIco", "game/GamIco.png", 46, 46],
                ["gameCharactersImg", "game/characters.png", 66, 66],
                ["gameCharactersParticl", "game/GamParticles.png", 25, 25],
                ["gameBonusBmbSprs", "game/GamBnsBomb.png", 76, 76],
                ["gameBonusCrssSprs", "game/GamBnsCross.png", 76, 76],
                ["gameBonusSpectSprs", "game/GamBnsSpectrum.png", 66, 66],
                ["wind3x3",
                    "ui/90x90.png", 30, 30
                ],
                ["menuIcons", "ui/icons.png", 70, 70],
                ["menuIcons2", "ui/icons2.png", 50, 50],
                ["snowFlakeImg", "ui/vlocka.png", 60, 60],
                ["blockImg", "game/ladova-kocka.png", 66, 66],
                ["gameCharFall", "game/GamBnsFall.png", 66, 66],
                ["gameEscapeBg", "game/GamBnsEsc.png", 67, 67],
                ["vybuch", "game/GamFlame.png", 75, 75]
            ];
            for (a = 0; a < b.length; a++) game.load.spritesheet(b[a][0], "assets/img/" + b[a][1], b[a][2], b[a][3]);
            game.load.onFileComplete.add(this.fileComplete, this)
        },
        fileComplete: function() {},
        create: function() {
            //Ba(this)
			game.state.start("StateGame");
        },
        dc: function() {
            game.state.start("StateGame")
        }
    };

    function Ca(a) {
        game.add.tween(a.Na.we).to({
            alpha: 0
        }, 250, Phaser.Easing.Linear.None, !0, 0);
        game.add.tween(a.Na.pf).to({
            alpha: 1
        }, 250, Phaser.Easing.Linear.None, !0, 0)
    }

    function Aa(a) {
        a.Na = game.add.group();
        var b = game.add.sprite(game.width / 2, game.height / 2, "gameSplash");
        C(b, .5, .5);
        a.Na.addChild(b);
        700 > resolutionY && (b.y += 30);
        b = game.make.sprite(0, 0, "loadImg3");
        C(b, 0, .5);
        b.y = game.height - 70;
        b.x = (game.width - b.width) / 2;
        a.Na.we = a.Na.add(b);
        var d = game.make.sprite(0, 0, "loadImg2");
        C(d, 0, .5);
        a.Na.xe = b.addChild(d);
        d = game.make.sprite(0, 0, "loadImg1");
        C(d, 0, .5);
        b.addChild(d);
        var e = game.make.text(Math.floor(game.width / 2), b.y + 5, m(26), {
            font: "30px gameFont",
            fill: "#ffd73f"
        });
        C(e, .5, .5);
        a.Na.pf = a.Na.addChild(e);
        e.alpha = 0;
        e.qd = game.add.tween(e.scale).to({
            x: 1.05,
            y: 1.05
        }, 150, Phaser.Easing.Linear.None, !0, 700);
        e.rd = game.add.tween(e.scale).to({
            x: 1,
            y: 1
        }, 150, Phaser.Easing.Linear.None, !1, 0);
        e.qd.onComplete.add(function() {
            e.rd.start()
        }, a);
        e.rd.onComplete.add(function() {
            e.qd.start()
        }, a)
    }

    function Ba(a) {
        Ca(a);
        game.input.onDown.addOnce(function() {
            game.add.tween(this.Na).to({
                alpha: 0
            }, 150, Phaser.Easing.Linear.None, !0, 0);
            game.time.events.add(200, function() {
                this.dc()
            }, this)
        }, a)
    };
    Buttons = function() {};
    Buttons.prototype = {
        constructor: Buttons,
        create: function() {},
        inputOver: function(a) {
            if (a.vb) {
                if (!game.input.pointer1.isDown) {
                    a.tint = 10078449;
                    for (c in a.children) a.getChildAt(c).tint = 10078449;
                    null != a.Ab && Da(a, !0)
                }
                a.nc = !0
            }
        },
        inputOut: function(a) {
            if (a.vb) {
                a.tint = 16777215;
                for (c in a.children) a.getChildAt(c).tint = 16777215;
                null != a.Ab && Da(a, !1);
                a.nc = !1
            }
        },
        inputUp: function(a) {
            if (a.vb) {
                a.tint = 16777215;
                for (c in a.children) a.getChildAt(c).tint = 16777215;
                null != a.Ab && Da(a, !1);
                a.nc && (a.nc = !1, a.Cc.call(a.Dc, a));
                void 0 !== a.oc && !1 !== a.oc ||
                    a.scale.set(a.sd || 1, a.td || 1);
                a.cachedTint = -1
            }
        },
        inputDown: function(a) {
			//gradle.event(a.name);
            if (a.vb) {
				
                a.tint = 10078449;
                for (c in a.children) a.getChildAt(c).tint = 10078449;
                null != a.Ab && Da(a, !0);
                void 0 !== a.oc && !1 !== a.oc || a.scale.set(.95 * a.sd || .95, .95 * a.td || .95);
                a.cachedTint = -1;
                a.nc = !0
            }
        }
    };

    function Da(a, b) {
        for (var d = 0; d < a.Ab.length; d++) b ? a.getChildAt(a.Ab[d]).fill = "#CC9E6A" : a.getChildAt(a.Ab[d]).fill = a.getChildAt(a.Ab[d]).Of
    }

    function Ea(a, b, d, e, f, g) {
        b = game.add.button(0, b, "gameSelectBtn");
        b.vb = !0;
        var h = game.make.text(0, 3, m(d), {
            font: e + "px gameFont",
            fill: "#ffd73f"
        });
        C(h, .5, .5);
        b.ec = b.addChild(h);
        h.setShadow(2, 2, "#2b1608", 0);
        l(h, e, .7 * b.width);
        b.Qf = d;
        b.Cc = f;
        b.Dc = g || a;
        b.events.onInputUp.add(a.inputUp, a);
        b.events.onInputDown.add(a.inputDown, a);
        b.events.onInputOver.add(a.inputOver, a);
        b.events.onInputOut.add(a.inputOut, a);
        C(b, .5, .5);
        return b
    }

    function createButton(a, b, d, e, f, g, h, n) {
		//console.log(f);
		b = game.add.button(b, d, e);
        b.vb = !0;
        b.frame = 0;
		b.fname = f +'_'+e;
        f = game.make.sprite(0, 0, f, g);
        C(f, .5, .5);
        b.ja = b.addChild(f);
        b.name = e;
        b.De = null;
        b.Cc = h;
        b.Dc = n || a;
        b.events.onInputUp.add(a.inputUp, a);
        b.events.onInputDown.add(a.inputDown, a);
        b.events.onInputOver.add(a.inputOver, a);
        b.events.onInputOut.add(a.inputOut, a);
        C(b, .5, .5);
        return b
    }

    function H(a, b, d, e, f, g, h) {
        b = game.add.button(b, d, e);
        b.vb = !0;
        "string" == typeof f ? b.frameName = f : b.frame = f;
        b.name = e;
        b.De = null;
        b.Cc = g;
        b.Dc = h || a;
        b.events.onInputUp.add(a.inputUp, a);
        b.events.onInputDown.add(a.inputDown, a);
        b.events.onInputOver.add(a.inputOver, a);
        b.events.onInputOut.add(a.inputOut, a);
        C(b, .5, .5);
        return b
    };
    Anims = function() {};
    Anims.prototype = {
        preload: function() {},
        create: function() {}
    };

    function Fa(a, b, d, e, f) {
        a = Ga(a);
        a.angle = 0;
        a.scale.set(.15);
        a.alpha = 1;
        a.GameState(b, d);
        game.add.tween(a.scale).to({
            x: .5 * gameState.gameScreen.p.scale.x,
            y: .5 * gameState.gameScreen.p.scale.x
        }, 250, Phaser.Easing.Linear.None, !0);
        game.add.tween(a).to({
            x: e,
            y: f
        }, 500, Phaser.Easing.Sinusoidal.Out, !0).onComplete.addOnce(function(a) {
            a.kill()
        })
    }

    function Ha(a, b, d, e, f) {
        var g = gameState.gameScreen.ve[0].te.worldPosition.x - gameState.gameScreen.p.worldPosition.x,
            h = gameState.gameScreen.ve[0].te.worldPosition.y - gameState.gameScreen.p.worldPosition.y - 13;
        a = Ga(a);
        a.angle = 0;
        a.scale.set(.15);
        a.alpha = 1;
        a.GameState(g, h);
        a.rotation = -10;
        game.add.tween(a.scale).to({
            x: 1,
            y: 1
        }, 400, Phaser.Easing.Linear.None, !0);
        b = game.add.tween(a).to({
            x: b,
            y: d,
            rotation: 0
        }, 400, Phaser.Easing.Linear.None, !0);
        b.onComplete.addOnce(function(a) {
            a.kill()
        });
        b.onComplete.addOnce(e, f)
    }

    function Ga(a) {
        var b = gameState.gameScreen.p.Bd.getFirstDead();
        null === b && (b = gameState.gameScreen.p.Bd.create(0, 0, "eff_spect"), b.anchor.set(.5), b.GameState = function(a, e) {
            b.reset(a, e)
        }.bind(a));
        b.scale.set(0);
        game.tweens.removeFrom(b, !0);
        return b
    }

    function Ia(a) {
        var b = gameState.gameScreen.wd.getFirstDead();
        null === b && (b = gameState.gameScreen.wd.create(0, 0, "msg_happy"));
        b.loadTexture(a);
        b.anchor.set(.5);
        b.scale.set(1);
        b.alpha = 1;
        b.reset(game.width / 2, game.height / 2);
        game.tweens.removeFrom(b, !0);
        b.angle = 175 * qa();
        game.add.tween(b).to({
            angle: 0
        }, 750, Phaser.Easing.Back.Out, !0);
        game.add.tween(b).to({
            y: b.y - 160
        }, 1200, Phaser.Easing.Quadratic.In, !0, 300).onComplete.addOnce(function(a) {
            a.kill()
        });
        game.add.tween(b).to({
            alpha: 0
        }, 400, Phaser.Easing.Linear.None, !0, 1100)
    }

    function Ja(a, b, d, e) {
        var f = gameState.gameScreen.p.Ad.getFirstDead();
        null === f && (f = game.make.text(0, 3, "0", {
            font: "35px gameFont",
            fill: "#FFFFFF"
        }), gameState.gameScreen.p.Ad.addChild(f));
        f.fill = la[e];
        f.setText(d);
        f.anchor.set(.5);
        f.scale.set(.75);
        f.alpha = 1;
        f.reset(a, b);
        game.tweens.removeFrom(f, !0);
        a = game.add.tween(f).to({
            y: f.y - 50
        }, 900, Phaser.Easing.Linear.None, !0);
        game.add.tween(f.scale).to({
            x: .75
        }, 500, Phaser.Easing.Back.Out, !0);
        game.add.tween(f).to({
            alpha: 0
        }, 250, Phaser.Easing.Linear.None, !0, 650);
        a.onComplete.addOnce(function(a) {
            a.kill()
        });
        f.scale.set(0, .75)
    }

    function Ka(a) {
        var b = gameState.gameScreen.p.ed.getFirstDead();
        null === b && (b = gameState.gameScreen.p.ed.create(0, 0, "explCross"), b.GameState = function(a, e) {
            var f = J(a, e);
            b.reset(f[0], f[1]);
            b.Qa(a, e)
        }.bind(a), b.Qa = function(a, e) {
            b.ba = a;
            b.da = e
        }.bind(a));
        b.scale.set(0);
        b.blendMode = PIXI.blendModes.ADD;
        game.tweens.removeFrom(b, !0);
        return b
    }

    function La(a, b, d) {
        for (var e = 0; 3 > e; e++) {
            var f = Ma(a);
            f.tint = 65535;
            f.GameState(d, b);
            f.alpha = .9;
            f.scale.set(.05);
            game.add.tween(f.scale).to({
                x: 1,
                y: 1
            }, 200, Phaser.Easing.Linear.None, !0, 100 * e);
            game.add.tween(f).to({
                alpha: 0
            }, 400, Phaser.Easing.Linear.None, !0, 450).onComplete.addOnce(function(a) {
                a.kill()
            }, a)
        }
    }

    function Na(a) {
        var b = gameState.gameScreen.p.ad.getFirstDead();
        null === b && (b = gameState.gameScreen.p.ad.create(0, 0, "vybuch"), C(b, .5, .5), b.GameState = function(a, e) {
            var f = J(a, e);
            b.reset(f[0], f[1]);
            b.Qa(a, e)
        }.bind(a), b.Qa = function(a, e) {
            b.ba = a;
            b.da = e
        }.bind(a), b.animations.add("explode!", [0, 1, 2, 3, 4, 5, 6, 7], 23, !1).onComplete.add(function(a) {
            a.kill()
        }, a));
        b.animations.stop();
        game.tweens.removeFrom(b, !0);
        return b
    }

    function Oa(a, b, d) {
        a = Ma(a);
        a.GameState(d, b);
        a.alpha = 1;
        a.scale.set(.35);
        b = game.add.tween(a).to({
            alpha: 0
        }, 400, Phaser.Easing.Linear.None, !0, 200);
        game.add.tween(a.scale).to({
            x: 0,
            y: 0
        }, 600, Phaser.Easing.Linear.None, !0);
        b.onComplete.addOnce(function(a) {
            a.kill()
        })
    }

    function Ma(a) {
        var b = gameState.gameScreen.p.$c.getFirstDead();
        null === b && (b = gameState.gameScreen.p.$c.create(0, 0, "shockWv"), C(b, .5, .5), b.GameState = function(a, e) {
            var f = J(a, e);
            b.reset(f[0], f[1]);
            b.Qa(a, e)
        }.bind(a), b.Qa = function(a, e) {
            b.ba = a;
            b.da = e
        }.bind(a));
        b.tint = 16777215;
        b.blendMode = PIXI.blendModes.ADD;
        game.tweens.removeFrom(b, !0);
        return b
    };

    function GameState() {
        this.oa = this.pauseScreen = this.gameScreen = this.aboutScreen = this.instructionsScreen = this.mainMenu = this.ra = null;
        this.Fa = []
    }
    GameState.prototype = {
        preload: function() {
            game.stage.backgroundColor = "#113f05";
            this.ra = game.add.group();
            var a = game.add.sprite(game.width / 2, 0, "bgImg");
            C(a, .5, 0);
            this.ra.tf = this.ra.add(a);
            a = game.add.group();
            this.ra.add(a);
            this.ra.ib = a;
            this.ra.ib.sc = 0
        },
        create: function() {
			this.oa = new Buttons;
            this.oa.create();
            Qa(Math.floor(.85 * game.height), "bigWindBtmp");
            Qa(Math.floor(.3 * game.height), "smlWindBtmp");
            Qa(Math.floor(.32 * game.height), "smlWindBtmp1");
            Qa(Math.floor(.35 * game.height), "smlWindBtmp2");
            for (var a = game.add.bitmapData(528, 528), b = game.make.image(0, 0, "gameBgSprS", 0), d = game.make.image(0, 0, "gameBgSprS", 1), e = 0; 8 > e; e++)
                for (var f = 0; 4 > f; f++) a.draw(b, 66 * (2 * f + e % 2), 66 * e), a.draw(d, 66 * (2 * f + (1 - e % 2)), 66 * e);
            game.cache.addBitmapData("gameBgBitmap", a);
            Ra(this);
            mainMenu(this);
            this.instructionsScreen = game.add.group();
            this.instructionsScreen.name = "instructionsScreen";
            a = game.make.sprite(game.width / 2, 150, game.cache.getBitmapData("bigWindBtmp"));
            a.y = Math.floor(game.height / 2 - a.height / 2);
            C(a, .5, 0);
            b = game.make.sprite(a.x - Math.floor(a.width / 2) - 112, a.y + a.height - 368, "menuOrnamentDownImg");
            this.instructionsScreen.addChild(b);
            b = game.make.sprite(a.x + Math.floor(a.width / 2) + 112, a.y + a.height - 368, "menuOrnamentDownImg");
            b.scale.x *= -1;
            this.instructionsScreen.addChild(b);
            this.instructionsScreen.Ia = this.instructionsScreen.addChild(a);
            b = H(this.oa, .4 * -a.width, .96 * a.height, "menuIcons2", 0, this.ue, this);
            this.instructionsScreen.backButton = a.addChild(b);
            b = game.make.text(0, .15 * a.height, ca("INSTRUCTIONS_TEXT"), {
                font: "20px gameFont",
                fill: "#ffffff",
                wordWrap: !0,
                wordWrapWidth: .85 * a.width
            });
            b.lineSpacing = -5;
            d = .8 * a.height;
            e = 35;
            for (b.fontSize = e; b.height > d;) e--, b.fontSize = e;
            C(b, .5, 0);
            this.instructionsScreen.Ef =
                a.addChild(b);
            this.instructionsScreen.Ua = this.ef;
            this.instructionsScreen.Va = this.ff;
            this.instructionsScreen.Sa = this.me;
            this.instructionsScreen.Ja = this.ne;
            this.instructionsScreen.xd = !1;
            this.instructionsScreen.visible = !1;
            this.aboutScreen = game.add.group();
            this.aboutScreen.name = "aboutScreen";
            a = game.make.sprite(game.width / 2, 150, game.cache.getBitmapData("bigWindBtmp"));
            a.y = Math.floor(game.height / 2 - a.height / 2);
            C(a, .5, 0);
            b = game.make.sprite(a.x - Math.floor(a.width / 2) - 112, a.y + a.height - 368, "menuOrnamentDownImg");
            this.aboutScreen.addChild(b);
            b = game.make.sprite(a.x + Math.floor(a.width / 2) + 112, a.y + a.height - 368, "menuOrnamentDownImg");
            b.scale.x *= -1;
            this.aboutScreen.addChild(b);
            this.aboutScreen.Ia = this.aboutScreen.addChild(a);
            b = H(this.oa, .4 * -a.width, .96 * a.height, "menuIcons2", 0, this.Ld, this);
            this.aboutScreen.backButton = a.addChild(b);
            //b = game.make.sprite(0, .25 * a.height, "inlogic_logo");
            //C(b, .5, 0);
            //this.aboutScreen.Df = a.addChild(b);
            /*b = game.make.text(0, b.y + b.height + 10, "Inlogic Games", {
                font: "30px gameFont",
                fill: "#ffd73f"
            });*/
            //C(b, .5, 0);
            //this.aboutScreen.Cf = a.addChild(b);
            b = game.make.text(0, b.y + 70, "magic forest\nv.1.0.1", {
                font: "30px gameFont",
                fill: "#ffd73f",
                align: "center"
            });
            l(b, 25, .85 * a.width);
            C(b, .5, 0);
            this.aboutScreen.Bf = a.addChild(b);
            this.aboutScreen.Ua = this.Te;
            this.aboutScreen.Va = this.Ue;
            this.aboutScreen.Sa = this.$d;
            this.aboutScreen.Ja = this.ae;
            this.aboutScreen.visible = !1;
            Ta(this);
            this.gameContinueScreen = game.add.group();
            this.gameContinueScreen.name = "gameContinueScreen";
            a = game.make.sprite(game.width / 2, game.height / 2, game.cache.getBitmapData("smlWindBtmp1"));
            C(a, .5, .5);
            this.gameContinueScreen.Ia = this.gameContinueScreen.addChild(a);
            b = H(this.oa, Math.floor(.4 * a.width), -Math.floor(.41 * a.height), "menuIcons2", 2, this.Sd, this);
            this.gameContinueScreen.backButton = a.addChild(b);
            b = Ea(this.oa, -Math.floor(.16 * a.height), 30, 30, this.Zd,
                this);
            a.addChild(b);
            b.ec.y = -7;
            d = game.make.text(0, b.ec.y + 10, ca(30), {
                font: "20px gameFont",
                fill: "#ffffff"
            });
            d.setShadow(2, 2, "#2b1608", 0);
            C(d, .5, 0);
            this.gameContinueScreen.Md = b.addChild(d);
            l(d, 18, .75 * b.width);
            b = Ea(this.oa, Math.floor(.16 * a.height), 31, 30, this.Yd, this);
            a.addChild(b);
            this.gameContinueScreen.Ua = this.Ve;
            this.gameContinueScreen.Va = this.We;
            this.gameContinueScreen.Sa = this.be;
            this.gameContinueScreen.Ja = this.ce;
            this.gameContinueScreen.visible = !1;
            this.pauseScreen = game.add.group();
            this.pauseScreen.name = "pauseScreen";
            a = game.make.sprite(game.width / 2, game.height / 2, game.cache.getBitmapData("smlWindBtmp1"));
            a.y = (game.height -
                a.height) / 2;
            C(a, .5, 0);
            this.pauseScreen.Ia = this.pauseScreen.addChild(a);
            b = game.make.sprite(0, 60, "gameLogo");
            C(b, .5, .5);
            a.addChild(b);
            b = createButton(this.oa, 0, Math.floor(.43 * a.height), "btnBgSml", "btnPlay", 0, this.Ge, this);
            b.scale.set(1.1);
            b.sd = 1.1;
            b.td = 1.1;
            b.ja.scale.set(.5);
            this.pauseScreen.backButton = a.addChild(b);
            b = [];
            q && (d = createButton(this.oa, 0, 0, "btnRamcek", "menuIcons", 1, this.Ie, this), d.ja.scale.set(.75), this.pauseScreen.Tb = a.addChild(d), b.push(d));
            d = createButton(this.oa, 0, 0, "btnRamcek", "menuIcons2", 5, this.He, this);
            --d.ja.y;
            d.ja.x -= 2;
            this.pauseScreen.wf = a.addChild(d);
            b.push(d);
            1 === b.length ? (b[0].x = 0, b[0].y = 235) : 2 === b.length ? (b[0].x = -50, b[1].x = 50, b[0].y = 235, b[1].y = 235) : 3 === b.length && (b[0].x = -85, b[1].x = 0, b[2].x = 85, b[0].y = 235, b[1].y = 235, b[2].y = 235);
            this.pauseScreen.Ua = this.jf;
            this.pauseScreen.Va = this.kf;
            this.pauseScreen.Sa = this.qe;
            this.pauseScreen.Ja = this.re;
            this.pauseScreen.visible = !1;
            Ua(this);
            Va(this);
            this.xb = game.add.group();
            this.gameLogoGoup = game.add.group();
            this.gameLogoGoup.name = "gameLogoGoup";
            a = game.add.sprite(game.width / 2, this.mainMenu.Ia.y - 55, "gameLogo");
            C(a, .5, 0);
            this.gameLogoGoup.Af = this.gameLogoGoup.addChild(a);
            this.gameLogoGoup.Ua = this.Nc;
            this.gameLogoGoup.Sa = this.md;
            this.gameLogoGoup.Ja = this.nd;
            this.gameLogoGoup.Gf = !0;
            this.gameLogoGoup.visible = !1;
			gradle.event('game_loaded');
        },
        update: function() {
            !1 !== this.gameScreen.visible && (0 < E.Ca && (0 === E.Ca % 2 ? (this.gameScreen.wb += E.Ca / 2, E.Ca -= E.Ca / 2) : (this.gameScreen.wb += E.Ca % 2, E.Ca -= E.Ca % 2)), this.gameScreen.wa.setText(this.gameScreen.wb), C(this.gameScreen.wa, 0, .5));
            if (!1 !== this.gameOverWin.visible) {
                if (!0 === this.gameOverWin.rc) {
                    this.gameOverWin.qc += Date.now() - this.gameOverWin.zd;
                    var a = this.gameOverWin.qc / this.gameOverWin.Re;
                    1 < a && (a = 1);
                    this.gameOverWin.wa.setText(m("SCORE").toUpperCase() + ": " + Math.floor(this.gameOverWin.Qe * a));
                    C(this.gameOverWin.wa, .5, .5);
                    l(this.gameOverWin.wa, 23, .6 * this.gameOverWin.Ia.width);
                    1 === a && (this.gameOverWin.rc = !1)
                }
                this.gameOverWin.zd = Date.now()
            }
            if (0 <
                this.gc) {
                var b = this.gc / this.Eb * this.Eb,
                    a = game.rnd.integerInRange(-b, b),
                    b = game.rnd.integerInRange(-b, b);
                game.camera.x = a;
                game.camera.y = b;
                this.gc--;
                0 >= this.gc && (game.world.setBounds(this.Xa.x, this.Xa.x, this.Xa.width, this.Xa.height), this.Xa = null)
            }
            Wa(this);
            Xa(this)
        },
        Nc: function() {
            if (!0 !== this.gameLogoGoup.visible) {
                var a = this.gameLogoGoup,
                    b = 300,
                    d = 0,
                    e = Phaser.Easing.Quadratic.Out;
                null === b && (b = 300);
                null === d && (d = 150);
                null === e && (e = Phaser.Easing.Linear.None);
                a.y = -game.height;
                a.visible = !0;
                game.add.tween(a).to({
                    y: 0
                }, b, e, !0, d)
            }
        },
        md: function() {
            Ya(this.gameLogoGoup).onComplete.add(function() {
                    this.nd()
                },
                this)
        },
        nd: function() {
            this.gameLogoGoup.visible = !1
        },
        ye: function() {
			gradle.event('button_play');
            playSound("clck");
            changeScreen(gameState, this.gameModeSelectionScreen)
        },
        Ae: function() {
			gradle.event('button_instruction');
            playSound("clck");
            changeScreen(this, this.instructionsScreen)
        },
        Be: function() {
			gradle.event('sound');
            playSound("clck");
            Za();
            this.mainMenu.Tb.ja.frame = musicPlayer.Ha ? 2 : 1
        },
        ze: function() {
			gradle.event('moreGames');
            playSound("clck");
			//changeScreen(this, this.aboutScreen)
        },
        gf: function() {
            M(this.mainMenu, !1);
            q && (this.mainMenu.Tb.ja.frame = musicPlayer.Ha ? 2 : 1);
            $a(this, this.mainMenu);
            this.Nc();
            this.mainMenu.Ke.yb.start()
        },
        hf: function() {
            M(this.mainMenu, !0)
        },
        oe: function(a) {
            ab(this, this.mainMenu);
            M(this.mainMenu, !1);
            this.mainMenu.Aa = a
        },
        pe: function() {
            this.mainMenu.visible = !1
        },
        ue: function() {
			console.log('mlk - ue');
            playSound("clck");
            !0 === this.instructionsScreen.xd ? 
				changeScreen(this, this.pauseScreen) 
			: 
				changeScreen(this, this.mainMenu)
        },
        ef: function() {
            M(this.instructionsScreen, !1);
            $a(this, this.instructionsScreen)
        },
        ff: function() {
            M(this.instructionsScreen, !0)
        },
        me: function(a) {
            ab(this, this.instructionsScreen);
            M(this.instructionsScreen, !1);
            this.instructionsScreen.Aa = a
        },
        ne: function() {
            this.instructionsScreen.visible = !1;
            this.instructionsScreen.xd = !1
        },
        Ld: function() {
			console.log('mlk - Ld');
            playSound("clck");
            changeScreen(this, this.mainMenu)
        },
        Te: function() {
            M(this.aboutScreen, !1);
            $a(this, this.aboutScreen)
        },
        Ue: function() {
            M(this.aboutScreen, !0)
        },
        $d: function(a) {
            ab(this, this.aboutScreen);
            M(this.aboutScreen, !1);
            this.aboutScreen.Aa = a
        },
        ae: function() {
            this.aboutScreen.visible = !1
        },
        Td: function() {
			console.log('mlk - Td');
            playSound("clck");
            changeScreen(this, this.mainMenu)
        },
        Ud: function(a) {
			gradle.event('select_mode');
            playSound("clck");
            E.k = a.k;
            !0 === E.q[E.k].gameRunning ?
                N(this, this.gameContinueScreen) : (t = !0, bb(this, !0))
        },
        Xe: function() {
            M(this.gameModeSelectionScreen, !1);
            $a(this, this.gameModeSelectionScreen);
            for (var a = 0; a < this.gameModeSelectionScreen.ud.length; a++) {
                var b = this.gameModeSelectionScreen.ud[a];
                //b.se.setText("HIGHSCORE: " + cb(E, b.k, "highScore"))
            }
            this.Nc()
        },
        Ye: function() {
            M(this.gameModeSelectionScreen, !0)
        },
        de: function(a) {
            ab(this, this.gameModeSelectionScreen);
            M(this.gameModeSelectionScreen, !1);
            this.gameModeSelectionScreen.Aa = a
        },
        ee: function() {
            this.gameModeSelectionScreen.visible = !1
        },
        Sd: function() {
			console.log('mlk - Sd');
            playSound("clck");
            db(this)
        },
        Zd: function() {
            t = !0;
            bb(this, !1)
        },
        Yd: function() {
            bb(this, !0)
        },
        Ve: function() {
            M(this.gameContinueScreen, !1);
            var a = E,
                b = E.k,
                d = 0,
                d =
                a.q[b].level;
            !1 === a.q[b].levelRunning && (d += 1);
            this.gameContinueScreen.Md.setText(m("LEVEL").toUpperCase() + ": " + d);
            eb(this, this.gameContinueScreen)
        },
        We: function() {
            M(this.gameContinueScreen, !0)
        },
        be: function(a) {
            fb(this, this.gameContinueScreen);
            M(this.gameContinueScreen, !1);
            this.gameContinueScreen.Aa = a
        },
        ce: function() {
            this.gameContinueScreen.visible = !1
        },
        Xd: function() {
			gradle.event('next_level');
            playSound("clck");
            gb(E);
            P(musicPlayer, 1);
            db(this);
            game.time.events.add(300, E.dc, E)
        },
        af: function() {
            M(this.gameOverWin, !1);
            this.gameOverWin.va.setText(m("LEVEL").toUpperCase() + " " + E.Ta);
            l(this.gameOverWin.va, 40, .6 * this.gameOverWin.Ia.width);
            C(this.gameOverWin.va, .5, .5);
            this.gameOverWin.va.x = Math.floor(this.gameOverWin.va.x);
            this.gameOverWin.va.y =
                Math.floor(this.gameOverWin.va.y);
            this.gameOverWin.Le.x = -Math.floor(this.gameOverWin.va.width / 2);
            this.gameOverWin.Me.x = Math.floor(this.gameOverWin.va.width / 2);
            this.gameOverWin.Wb.fontSize = this.gameOverWin.va.fontSize;
            C(this.gameOverWin.Wb, .5, .5);
            this.gameOverWin.Wb.x = Math.floor(this.gameOverWin.Wb.x);
            this.gameOverWin.Wb.y = this.gameOverWin.va.y + this.gameOverWin.va.height - 10;
            this.gameOverWin.qc = 0;
            this.gameOverWin.Qe = E.nb;
            this.gameOverWin.rc = !1;
            this.gameOverWin.wa.setText(m("SCORE").toUpperCase() + ": 0");
            C(this.gameOverWin.wa, .5, .5);
            l(this.gameOverWin.wa, 23, .6 * this.gameOverWin.Ia.width);
            ra(this.gameOverWin.hc);
            this.gameOverWin.hc.scale.set(.6, 0);
            eb(this, this.gameOverWin)
        },
        bf: function() {
            game.time.events.add(300, function() {
                this.gameOverWin.rc = !0
            }, this);
            game.add.tween(this.gameOverWin.hc.scale).to({
                x: 1,
                y: 1
            }, 300, Phaser.Easing.Back.Out, !0, 800).onComplete.add(function() {
                M(this.gameOverWin, !0);
                this.gameOverWin.hc.yb.start()
            }, this)
        },
        he: function(a) {
            fb(this, this.gameOverWin);
            M(this.gameOverWin, !1);
            this.gameOverWin.Aa = a
        },
        je: function() {
            this.gameOverWin.visible = !1
        },
        Vd: function() {
			console.log('mlk - Vd');
            playSound("clck");
            changeScreen(this, this.gameModeSelectionScreen);
        },
        Wd: function() {
			gradle.event('replay');
            playSound("clck");
            db(this);
            hb();
            game.time.events.add(300, E.dc, E)
        },
        Ze: function() {
            M(this.gameOverLose, !1);
            this.gameOverLose.wa.setText(m("SCORE").toUpperCase() + ": " + E.nb);
            C(this.gameOverLose.wa, .5, .5);
            l(this.gameOverLose.wa, 23, .6 * this.gameOverLose.Ia.width);
            E.k === u.ob || E.k === u.Ea || E.k === u.xa ? (this.gameOverLose.Jb.setText(m("TIMESUP").toUpperCase()), l(this.gameOverLose.Jb, 25, .6 * this.gameOverLose.Ia.width), C(this.gameOverLose.Jb, .5, .5)) : this.gameOverLose.Jb.setText("");
            this.gameOverLose.fd.alpha = 0;
            this.gameOverLose.Jb.alpha = 0;
            this.gameOverLose.wa.alpha = 0;
            this.gameOverLose.cd.alpha = 0;
            this.gameOverLose.dd.alpha = 0;
            this.gameOverLose.fd.$a.start();
            this.gameOverLose.Jb.$a.start();
            this.gameOverLose.wa.$a.start();
            this.gameOverLose.cd.$a.start();
            this.gameOverLose.dd.$a.start();
            eb(this, this.gameOverLose)
        },
        $e: function() {},
        fe: function(a) {
            fb(this, this.gameOverLose);
            M(this.gameOverLose, !1);
            this.gameOverLose.Aa = a
        },
        ge: function() {
            this.gameOverLose.visible = !1
        },
        Ge: function() {
			gradle.event('play_continue');
            playSound("clck");
            t = !0;
            var a = E;
            a.isPaused = !1;
            var b = a.Fc;
            a.Fc = null;
            null !== b && a[b].call(a);
            Q = v.Bb;
            db(this)
        },
        Ie: function() {
			gradle.event('sound');
            playSound("clck");
            Za();
            this.pauseScreen.Tb.ja.frame = musicPlayer.Ha ? 2 : 1
        },
        He: function() {
			gradle.event('return_menu');
            playSound("clck");
            P(musicPlayer, 0);
            Q = v.Zc;
            R = x.Vc;
            changeScreen(this, this.gameModeSelectionScreen);
            ib(E)
        },
        jf: function() {
            M(this.pauseScreen, !1);
            q && (this.pauseScreen.Tb.ja.frame = musicPlayer.Ha ? 2 : 1);
            eb(this, this.pauseScreen)
        },
        kf: function() {
            M(this.pauseScreen, !0)
        },
        qe: function(a) {
            fb(this, this.pauseScreen);
            M(this.pauseScreen, !1);
            this.pauseScreen.Aa = a
        },
        re: function() {
            this.pauseScreen.visible = !1
        },
        pause: function() {
			gradle.event('pause');
            playSound("clck");
            t = !1;
            !0 !== E.Ma && !0 !== E.Lb && (E.isPaused = !0, Q = v.Wc, N(gameState, this.pauseScreen))
        },
        cf: function() {
            M(this.gameScreen, !1);
            this.gameScreen.visible = !0;
            E.k === u.xa || E.k === u.ta ? (this.gameScreen.lb.x = this.gameScreen.ya.Jc[0], this.gameScreen.lb.visible = !0, this.gameScreen.Mc.x = this.gameScreen.ya.Jc[1], this.gameScreen.Kc.x = this.gameScreen.ya.Jc[2]) : (this.gameScreen.lb.x = this.gameScreen.ya.Kb[0], this.gameScreen.lb.visible = !1, this.gameScreen.Mc.x = this.gameScreen.ya.Kb[1], this.gameScreen.Kc.x = this.gameScreen.ya.Kb[2]);
            this.gameScreen.ya.alpha = 0;
            this.gameScreen.p.alpha = 0;
            this.gameScreen.Rc.alpha = 0;
            this.gameScreen.ra.alpha = 0;
            this.gameScreen.pc.alpha = 0;
            this.gameScreen.pc.y = this.gameScreen.pc.ld;
            var a = this.gameScreen;
            a.visible = !0;
            for (var b = a.ab = 0; b < a.length; b++)
                if (1 ==
                    a.getChildAt(b).Wa instanceof Array)
                    for (var d = 0; d < a.getChildAt(b).Wa.length; d++) 0 != a.getChildAt(b).xc && (a.getChildAt(b).Wa[d].start(), void 0 != a.getChildAt(b).tc && !0 === a.getChildAt(b).tc && a.ab++);
                else void 0 != a.getChildAt(b).Wa && 0 != a.getChildAt(b).xc && (a.getChildAt(b).Wa.start(), void 0 != a.getChildAt(b).tc && !0 === a.getChildAt(b).tc && a.ab++)
        },
        df: function() {
            M(this.gameScreen, !0)
        },
        ke: function(a) {
            M(this.gameScreen, !1);
            this.gameScreen.Aa = a;
            a = this.gameScreen;
            for (var b = a.ab = 0; b < a.length; b++)
                if (1 == a.getChildAt(b).Ya instanceof Array)
                    for (var d =
                            0; d < a.getChildAt(b).Ya.length; d++) a.getChildAt(b).Ya[d].start();
                else void 0 != a.getChildAt(b).Ya && 0 != a.getChildAt(b).xc && (a.getChildAt(b).Ya.start(), a.ab++)
        },
        le: function() {
            this.gameScreen.visible = !1
        }
    };

    function Wa(a) {
        a.xb.forEachAlive(function(a) {
            a.angle += a.sb;
            a.y - 30 > game.height && a.kill()
        }, a)
    }

    function jb(a, b, d) {
        b.ab--;
        0 > b.ab || 0 != b.ab || (b.Ja.call(d), void 0 != b.Aa && b.Aa.call(a))
    }

    function kb(a, b) {
        a.ab--;
        0 > a.ab || 0 == a.ab && a.Va.call(b)
    }

    function lb(a, b, d, e, f, g) {
        a.Ya = game.add.tween(b).to(d, 300, e, !1, 0);
        null != f && a.Ya.onComplete.add(f, g)
    }

    function mb(a, b, d, e, f, g) {
        b = game.add.tween(b).to(d, 300, e, !1, 0);
        null != f && b.onComplete.add(f, g);
        void 0 == a.Wa && (a.Wa = []);
        a.tc = !0;
        a.Wa.push(b)
    }

    function Ya(a) {
        var b = 250,
            d = 0,
            e = Phaser.Easing.Cubic.In;
        null === b && (b = 300);
        null === d && (d = 150);
        null === e && (e = Phaser.Easing.Linear.None);
        a.y = 0;
        return game.add.tween(a).to({
            y: -game.height
        }, b, e, !0, d)
    }

    function ab(a, b) {
        var d = 250,
            e = 0,
            f = Phaser.Easing.Cubic.In;
        null === d && (d = 300);
        null === e && (e = 150);
        null === f && (f = Phaser.Easing.Linear.None);
        b.y = 0;
        game.add.tween(b).to({
            y: game.height
        }, d, f, !0, e).onComplete.add(function() {
            b.Ja.call(this);
            void 0 !== b.Aa && b.Aa.call(this)
        }, a)
    }

    function $a(a, b) {
        var d = 300,
            e = 0,
            f = Phaser.Easing.Quadratic.Out;
        null === d && (d = 300);
        null === e && (e = 150);
        null === f && (f = Phaser.Easing.Linear.None);
        b.y = game.height;
        b.visible = !0;
        game.add.tween(b).to({
            y: 0
        }, d, f, !0, e).onComplete.add(function() {
            b.Va.call(this)
        }, a)
    }

    function fb(a, b) {
        var d = 250,
            e = 0,
            f = Phaser.Easing.Cubic.In;
        null === d && (d = 300);
        null === e && (e = 150);
        null === f && (f = Phaser.Easing.Linear.None);
        b.x = 0;
        game.add.tween(b).to({
            x: game.width
        }, d, f, !0, e).onComplete.add(function() {
            b.Ja.call(this);
            void 0 !== b.Aa && b.Aa.call(this)
        }, a)
    }

    function eb(a, b) {
        var d = 300,
            e = 0,
            f = Phaser.Easing.Quadratic.Out;
        null === d && (d = 300);
        null === e && (e = 150);
        null === f && (f = Phaser.Easing.Linear.None);
        b.x = game.width;
        b.visible = !0;
        game.add.tween(b).to({
            x: 0
        }, d, f, !0, e).onComplete.add(function() {
            b.Va.call(this)
        }, a)
    }

    function M(a, b) {
        function d(a) {
            for (var f = 0; f < a.children.length; f++)
                if (!0 !== a.getChildAt(f).Qd) {
                    var g = a.getChildAt(f);
                    g.inputEnabled = !1;
                    1 == g.vb && (g.inputEnabled = b, g.tint = 16777215);
                    0 < a.getChildAt(f).children.length && d(a.getChildAt(f))
                }
        }
        d(a)
    }

    function Qa(a, b) {
        function d(a, b, d) {
            a = game.make.image(0, 0, "wind3x3", a);
            g.draw(a, b, d)
        }
        var e = Math.floor(320 / 30),
            f = Math.floor(a / 30),
            g = game.add.bitmapData(320, a);
        d(0, 0, 0);
        d(2, 290, 0);
        d(6, 0, a - 30);
        d(8, 290, a - 30);
        for (var h = 1; h < Math.floor(e / 2 + 1); h++) d(1, 30 * h, 0), d(1, 320 - 30 * (h + 1), 0), d(7, 30 * h, a - 30), d(7, 320 - 30 * (h + 1), a - 30);
        for (h = 1; h < Math.floor(f / 2 + 1); h++) d(3, 0, 30 * h), d(3, 0, a - 30 * (h + 1)), d(5, 290, 30 * h), d(5, 290, a - 30 * (h + 1));
        for (h = 1; h < f - 1; h++)
            for (var n = 1; n < e - 1; n++) d(4, 30 * n, 30 * h);
        for (h = 1; h < f - 1; h++) d(4, 260, 30 * h);
        for (n = 1; n <
            e - 1; n++) d(4, 30 * n, a - 60);
        d(4, 260, a - 60);
        null != b && game.cache.addBitmapData(b, g)
    }

    function nb(a) {
        if (0 < a.gameScreen.p.length) {
            var b = (y.xMax - y.xMin) / a.gameScreen.p.getChildAt(0).width,
                d = (y.yMax - y.yMin) / a.gameScreen.p.getChildAt(0).height + a.gameScreen.Rc.getChildAt(0).height + a.gameScreen.ya.getChildAt(0).height,
                b = b < d ? b : d;
            a.gameScreen.p.scale.set(1 < b ? 1 : b);
            a.gameScreen.p.width = Math.floor(a.gameScreen.p.width);
            a.gameScreen.p.height = Math.floor(a.gameScreen.p.height);
            a.gameScreen.p.x = Math.floor((y.xMax - y.xMin) / 2 + y.xMin - a.gameScreen.p.width / 2);
            a.gameScreen.p.y = Math.floor((y.yMax - y.yMin) / 2 + y.yMin - a.gameScreen.p.height / 2);
            a.gameScreen.Rc.y = a.gameScreen.p.y;
            a.gameScreen.ya.y = a.gameScreen.p.y + a.gameScreen.p.height;
            b = game.make.bitmapData(a.gameScreen.p.width + 38, a.gameScreen.p.height +
                176 + 38);
            b.fill(5, 61, 1, 1);
            b.clear(19, 19, b.width - 38, b.height - 38);
            b.line(0, 1, b.width, 1, "#fff100", 2);
            b.line(1, 0, 1, b.height, "#fff100", 2);
            b.line(0, b.height - 1, b.width, b.height - 1, "#fff100", 2);
            b.line(b.width - 1, 0, b.width - 1, b.height, "#fff100", 2);
            b.line(18, 18, 19 + a.gameScreen.p.width + 1, 18, "#fff100", 2);
            b.line(18, 17, 18, 107 + a.gameScreen.p.height + 44 + 44 + 1, "#fff100", 2);
            b.line(17, 107 + a.gameScreen.p.height + 44 + 44 + 1, 19 + a.gameScreen.p.width + 1, 107 + a.gameScreen.p.height + 44 + 44 + 1, "#fff100", 2);
            b.line(19 + a.gameScreen.p.width + 1, 17, 19 + a.gameScreen.p.width + 2, 109 + a.gameScreen.p.height + 44 + 44, "#fff100",
                2);
            b.rect(19, 19, a.gameScreen.p.width, 44, "rgba(4,15,3,0.7)");
            b.rect(19, 63, a.gameScreen.p.width, 44, "rgba(5,61,1,0.7)");
            b.rect(19, 107 + a.gameScreen.p.height, a.gameScreen.p.width, 44, "rgba(5,61,1,0.7)");
            b.rect(19, 107 + a.gameScreen.p.height + 44, a.gameScreen.p.width, 44, "rgba(4,15,3,0.7)");
            b = game.make.sprite(a.gameScreen.p.x - 19, a.gameScreen.p.y - 88 - 19, b);
            a.gameScreen.ra.addChild(b)
        }
        a.gameScreen.ya.Kb = [0, Math.floor(.25 * -a.gameScreen.p.width), Math.floor(.25 * a.gameScreen.p.width)];
        a.gameScreen.ya.Jc = [Math.floor(.35 * -a.gameScreen.p.width), Math.floor(.05 * -a.gameScreen.p.width), Math.floor(.33 * a.gameScreen.p.width)];
        a.gameScreen.lb.x = a.gameScreen.ya.Kb[0];
        a.gameScreen.lb.visible = !1;
        a.gameScreen.Mc.x = a.gameScreen.ya.Kb[1];
        a.gameScreen.Kc.x = a.gameScreen.ya.Kb[2]
    }

    function ob(a, b) {
        var d = gameState;
        d.gameScreen.jd.text = a + "/" + b;
        C(d.gameScreen.jd, 0, .5)
    }

    function pb(a) {
        var b = gameState;
        b.gameScreen.va.text = a;
        C(b.gameScreen.va, 0, .5)
    }

    function qb(a, b) {
        var d = gameState;
        0 > a && (a = 0);
        1 < a && (a = 1);
        a *= .914;
        game.tweens.removeFrom(d.gameScreen.Qc, !0);
        !0 === b ? game.add.tween(d.gameScreen.Qc.scale).to({
            x: a
        }, 40, Phaser.Easing.Linear.None, !0) : d.gameScreen.Qc.scale.x = a
    }

    function Ra(a) {
        a.gameScreen = game.add.group();
        a.gameScreen.name = "gameScreen";
        a.gameScreen.wb = 0;
        var b = game.add.group();
        b.x = game.width / 2;
        var d = game.make.sprite(0, 0, "gamePanel");
        d.alpha = 0;
        d.width = game.width + 10;
        C(d, .5, 1);
        b.addChild(d);
        var e = game.make.sprite(0, Math.floor(.5 * -d.height), "ingameBarSlider", 0);
        C(e, .5, .5);
        b.addChild(e);
        e = game.make.sprite(0, Math.floor(.5 * -d.height), "ingameBarSlider", 1);
        e.x = -183;
        C(e, 0, .5);
        a.gameScreen.Qc = b.addChild(e);
        d = game.make.sprite(0, Math.floor(.5 * -d.height), "ingameBarBg");
        C(d, .5, .5);
        b.addChild(d);
        mb(b, b, {
                alpha: 1
            },
            Phaser.Easing.Linear.None,
            function() {
                kb(this.gameScreen, this)
            }, a);
        lb(b, b, {
            alpha: 0
        }, Phaser.Easing.Linear.None, function() {
            jb(this, this.gameScreen, this)
        }, a);
        d = game.add.group();
        d.position.set(20, 20);
        d.Qd = !0;
        e = game.make.sprite(0, 0, game.cache.getBitmapData("gameBgBitmap"));
        d.addChild(e);
        e = game.add.group();
        d.addChild(e);
        d.Hc = e;
        e = game.add.group();
        d.addChild(e);
        d.$c = e;
        e = game.add.group();
        d.addChild(e);
        d.ad = e;
        e = game.add.group();
        d.addChild(e);
        d.Bd = e;
        e = game.add.group();
        d.addChild(e);
        d.ed = e;
        e = game.add.group();
        d.zf = d.addChild(e);
        e = game.add.group();
        d.addChild(e);
        d.qb = e;
        e = game.add.group();
        d.addChild(e);
        d.Ad = e;
        mb(d, d, {
            alpha: 1
        }, Phaser.Easing.Linear.None, function() {
            kb(this.gameScreen, this)
        }, a);
        lb(d, d, {
            alpha: 0
        }, Phaser.Easing.Linear.None, function() {
            jb(this, this.gameScreen, this)
        }, a);
        e = game.add.group();
        e.x = game.width / 2;
        var f = game.make.sprite(0, 0, "gamePanel");
        f.width = game.width + 10;
        f.angle = 180;
        f.alpha = 0;
        C(f, .5, 1);
        e.addChild(f);
        var f = Math.ceil(.5 * f.height),
            g = game.make.sprite(0, f, "ingameIco", 0);
        C(g, 1, .5);
        a.gameScreen.lb = e.addChild(g);
        a.gameScreen.lb.visible = !1;
        var h = game.make.text(5,
            6, "0", {
                font: "35px gameFont",
                fill: "#ffd73f"
            });
        C(h, 0, .5);
        a.gameScreen.jd = g.addChild(h);
        g = game.make.sprite(0, f, "ingameIco", 1);
        C(g, 1, .5);
        a.gameScreen.Mc = e.addChild(g);
        h = game.make.text(5, 6, "0", {
            font: "35px gameFont",
            fill: "#ffd73f"
        });
        C(h, 0, .5);
        a.gameScreen.wa = g.addChild(h);
        f = game.make.sprite(0, f, "ingameIco", 2);
        C(f, 1, .5);
        a.gameScreen.Kc = e.addChild(f);
        g = game.make.text(5, 6, "1", {
            font: "35px gameFont",
            fill: "#ffd73f"
        });
        C(g, 0, .5);
        a.gameScreen.va = f.addChild(g);
        mb(e, e, {
            alpha: 1
        }, Phaser.Easing.Linear.None, function() {
            kb(this.gameScreen, this)
        }, a);
        lb(e, e, {
                alpha: 0
            }, Phaser.Easing.Linear.None,
            function() {
                jb(this, this.gameScreen, this)
            }, a);
        f = game.add.group();
        mb(f, f, {
            alpha: 1
        }, Phaser.Easing.Linear.None, function() {
            kb(this.gameScreen, this)
        }, a);
        lb(f, f, {
            alpha: 0
        }, Phaser.Easing.Linear.None, function() {
            jb(this, this.gameScreen, this)
        }, a);
        a.gameScreen.ra = a.gameScreen.addChild(f);
        a.gameScreen.ya = a.gameScreen.addChild(e);
        a.gameScreen.p = a.gameScreen.addChild(d);
        a.gameScreen.Rc = a.gameScreen.addChild(b);
        b = game.add.group();
        a.gameScreen.addChild(b);
        a.gameScreen.wd = b;
        b = createButton(a.oa, game.width - 60, 50, "btnRamcek", "menuIcons2", 4, a.pause, a);
        b.rf = 50;
        b.ld = game.height + 40;
        a.gameScreen.pc = a.gameScreen.addChild(b);
        mb(b, b, {
                y: b.rf,
                alpha: 1
            },
            Phaser.Easing.Quadratic.Out,
            function() {
                kb(this.gameScreen, this)
            }, a);
        lb(b, b, {
            y: b.ld,
            alpha: 0
        }, Phaser.Easing.Quadratic.Out, function() {
            jb(this, this.gameScreen, this)
        }, a);
        a.gameScreen.Ua = a.cf;
        a.gameScreen.Va = a.df;
        a.gameScreen.Sa = a.ke;
        a.gameScreen.Ja = a.le;
        a.gameScreen.visible = !1;
        y = {
            xMin: 0,
            xMax: game.width,
            yMin: 40,
            yMax: game.height - 60
        };
        nb(a)
    }

    function Va(a) {
        a.gameOverLose = game.add.group();
        a.gameOverLose.name = "gameOverLose";
        var b = game.make.sprite(game.width / 2, game.height / 2, game.cache.getBitmapData("smlWindBtmp1"));
        b.y = (game.height - b.height) / 2;
        C(b, .5, 0);
        a.gameOverLose.Ia = a.gameOverLose.addChild(b);
        var d = game.make.sprite(0, 60, "gameLogo");
        C(d, .5, .5);
        b.addChild(d);
        d = game.make.text(0, 100, m(10), {
            font: "25px gameFont",
            fill: "#feaa00"
        });
        C(d, .5, .5);
        a.gameOverLose.fd = b.addChild(d);
        d.$a = game.add.tween(d).to({
            alpha: 1
        }, 250, Phaser.Easing.Linear.None, !1, 300);
        d = game.make.text(0, d.y + d.height - 8, "TIMES UP", {
            font: "25px gameFont",
            fill: "#feaa00"
        });
        C(d, .5, .5);
        a.gameOverLose.Jb = b.addChild(d);
        d.$a = game.add.tween(d).to({
            alpha: 1
        }, 250, Phaser.Easing.Linear.None, !1, 600);
        d = game.make.text(0, 169, "0", {
            font: "35px gameFont",
            fill: "#ffd73f"
        });
        C(d, .5, .5);
        a.gameOverLose.wa = b.addChild(d);
        d.$a = game.add.tween(d).to({
            alpha: 1
        }, 250, Phaser.Easing.Linear.None, !1, 900);
        d = createButton(a.oa, -60, .8 * b.height, "btnBgSml", "menuIcons2", 3, a.Wd, a);
        a.gameOverLose.cd = b.addChild(d);
        d.$a = game.add.tween(d).to({
            alpha: 1
        }, 250, Phaser.Easing.Linear.None, !1, 1200);
        d = createButton(a.oa, 60, .8 * b.height, "btnBgSml",
            "menuIcons2", 5, a.Vd, a);
        a.gameOverLose.dd = b.addChild(d);
        d.$a = game.add.tween(d).to({
            alpha: 1
        }, 250, Phaser.Easing.Linear.None, !1, 1500);
        d.$a.onComplete.add(function() {
            M(this.gameOverLose, !0)
        }, a);
        a.gameOverLose.Ua = a.Ze;
        a.gameOverLose.Va = a.$e;
        a.gameOverLose.Sa = a.fe;
        a.gameOverLose.Ja = a.ge;
        a.gameOverLose.visible = !1
    }

    function Ua(a) {
        a.gameOverWin = game.add.group();
        a.gameOverWin.name = "gameOverWin";
        var b = game.make.sprite(Math.floor(game.width / 2), game.height / 2, game.cache.getBitmapData("smlWindBtmp2"));
        b.y = Math.floor((game.height - b.height) / 2);
        C(b, .5, 0);
        a.gameOverWin.Ia = a.gameOverWin.addChild(b);
        var d = game.make.sprite(0, 60, "gameLogo");
        C(d, .5, .5);
        b.addChild(d);
        d = game.make.text(0, 120, "LEVEL 1", {
            font: "40px gameFont",
            fill: "#ffd73f"
        });
        C(d, .5, .5);
        d.setShadow(2, 2, "#2b1608", 0);
        a.gameOverWin.va = b.addChild(d);
        var e = game.make.sprite(Math.floor(-d.width / 2), Math.floor(d.y - 7), "gameCharactersImg",
            6);
        e.scale.set(.75);
        e.angle = -15;
        e.anchor.set(1, .5);
        a.gameOverWin.Le = b.addChild(e);
        e = game.make.sprite(Math.floor(d.width / 2), Math.floor(d.y - 7), "gameCharactersImg", 6);
        e.scale.set(.75);
        e.angle = 15;
        e.anchor.set(0, .5);
        a.gameOverWin.Me = b.addChild(e);
        e = game.make.text(0, d.y + 20, m(33), {
            font: "40px gameFont",
            fill: "#ffd73f"
        });
        C(e, .5, .5);
        e.setShadow(2, 2, "#2b1608", 0);
        a.gameOverWin.Wb = b.addChild(e);
        var f = Ea(a.oa, d.y + 120, 32, 25, a.Xd, a);
        a.gameOverWin.hc = b.addChild(f);
        f.ec.align = "center";
        f.ec.lineSpacing = -8;
        f.yb = game.add.tween(f.ec.scale).to({
            x: [1.06, 1],
            y: [1.06,
                1
            ]
        }, 1800, Phaser.Easing.Linear.None, !1, 0, 0);
        f.yb.onComplete.add(function() {
            this.gameOverWin.visible && f.yb.start()
        }, a);
        d = game.make.text(0, f.y + 60, "0", {
            font: "25px gameFont",
            fill: "#ffd73f"
        });
        C(d, .5, .5);
        a.gameOverWin.wa = b.addChild(d);
        a.gameOverWin.rc = !1;
        a.gameOverWin.zd = 0;
        a.gameOverWin.Re = 300;
        a.gameOverWin.qc = 0;
        a.gameOverWin.Ua = a.af;
        a.gameOverWin.Va = a.bf;
        a.gameOverWin.Sa = a.he;
        a.gameOverWin.Ja = a.je;
        a.gameOverWin.visible = !1
    }

    function bb(a, b) {
        a.md();
        if (!0 === b) hb();
        else if (cb(E, E.k, "levelRunning")) {
            var d = E;
            Q = v.Xc;
            ib(d);
            rb = d.q[d.k].gameTime;
            d.Ta = d.q[d.k].level;
            d.Xb = d.q[d.k].scoreLevel;
            d.nb = d.q[d.k].scoreTotal;
            sb(d.f, d.k, d.Ta);
            tb(d.f, d.q[d.k].progressCurrent);
            if (d.k === u.xa || d.k === u.ta) d.f.ua = d.q[d.k].collectGemsCurrent;
            d.f.m = [];
            for (var e = 0, f = 0, g = 0; g < d.f.$; g++) {
                d.j[g] = [];
                for (var h = 0; h < d.f.o; h++) f = d.q[d.k].gameField[(g * d.f.o + h) * d.q[d.k].paramsCount], e = d.q[d.k].gameField[(g * d.f.o + h) * d.q[d.k].paramsCount + 1], ub(d, h, g, vb(d, h, g,
                    f, e)), d.k === u.Ea && d.f.m.push(d.q[d.k].gameField[(g * d.f.o + h) * d.q[d.k].paramsCount + 2])
            }
            gameState.gameScreen.wb = d.nb;
            pb(d.Ta);
            d.k === u.Ea && wb(d);
            d.k === u.ta && xb(d);
            d.Qb = !1;
            d.rb = 1;
            d.Ca = 0;
            d.Za = 0;
            d.Ma = !1;
            d.Lb = !1;
            d.isPaused = !1;
            ob(d.f.ua, d.f.Ka);
            yb(d)
        } else gb(E);
        P(musicPlayer, 1);
        changeScreen(a, a.gameScreen);
        game.time.events.add(300, E.dc, E)
    }

    function Ta(a) {
        a.gameModeSelectionScreen = game.add.group();
        a.gameModeSelectionScreen.name = "gameModeSelectionScreen";
        var b = game.make.sprite(game.width / 2, 150, game.cache.getBitmapData("bigWindBtmp"));
        b.y = Math.floor(game.height / 2 - b.height / 2);
        C(b, .5, 0);
        var d = game.make.sprite(b.x - Math.floor(b.width / 2) - 112, b.y + b.height - 368, "menuOrnamentDownImg");
        a.gameModeSelectionScreen.addChild(d);
        d = game.make.sprite(b.x + Math.floor(b.width / 2) + 112, b.y + b.height - 368, "menuOrnamentDownImg");
        d.scale.x *= -1;
        a.gameModeSelectionScreen.addChild(d);
        a.gameModeSelectionScreen.Ia = a.gameModeSelectionScreen.addChild(b);
        d = H(a.oa, -240, 0, "menuIcons2", 0, a.Td, a);
        a.gameModeSelectionScreen.backButton = b.addChild(d);
        var e = [];
        a.gameModeSelectionScreen.ud = e;
        var d = function(a, b) {
                var d = game.make.group();
                d.y = a;
                var f = H(this.oa, 0, 0, "gameSelectBtn2", 0, this.Ud, this);
                d.addChild(f);
                var O = game.make.text(0, -17, m(ga[b]), { // texte game 
                    font: "23px gameFont",
                    fill: "#5fbcfa"
                });
                O.setShadow(2, 2, "#2b1608", 0);
                C(O, .5, .5);
                f.If = f.addChild(O);
                l(O, 23, .75 * f.width);
                O = game.make.text(0, 13, ca(ha[b]), {
                    font: "15px gameFont",
                    fill: "#ffd73f",
                    wordWrap: !0,
                    wordWrapWidth: .8 * f.width,
                    align: "center"
                });
                O.lineSpacing = -8;
                C(O, .5, .5);
                f.Hf = f.addChild(O);
                var ea =
                    game.make.text(220, 0, m("highsc") + ": 0", {
                        font: "16px gameFont",
                        fill: "#ffffff"
                    });
                C(ea, .5, 1);
                //d.se = d.addChild(ea);
                ea.y = -Math.floor(f.height / 2) + 58;
                d.Pf = function(a) {
                    ea.setText(m("highsc") + ": " + a);
                    l(ea, 16, .8 * f.width)
                };
                f.k = b;
                d.k = b;
                e.push(d);
                return d
            }.bind(a),
            f = .21 * b.height +90;
        a.gameModeSelectionScreen.Nf = b.addChild(d(f, u.Db));
        a.gameModeSelectionScreen.Jf = b.addChild(d(f + 110, u.ob));
        a.gameModeSelectionScreen.Mf = b.addChild(d(f + 220, u.ta));
        a.gameModeSelectionScreen.Lf = b.addChild(d(f + 330, u.xa));
        a.gameModeSelectionScreen.Kf = b.addChild(d(f + 440, u.Ea));
        a.gameModeSelectionScreen.Ua = a.Xe;
        a.gameModeSelectionScreen.Va = a.Ye;
        a.gameModeSelectionScreen.Sa = a.de;
        a.gameModeSelectionScreen.Ja = a.ee;
        a.gameModeSelectionScreen.visible = !1
    }

    function mainMenu(a) {  //MENU
        a.mainMenu = game.add.group();
        a.mainMenu.name = "mainMenu";
        var b = game.make.sprite(game.width / 2, 150, game.cache.getBitmapData("bigWindBtmp"));
        b.y = Math.floor(game.height / 2 - b.height / 2);
        C(b, .5, 0);
        a.mainMenu.Ia = a.mainMenu.addChild(b);
        var d = game.make.sprite(b.x - Math.floor(b.width / 2) - 112, b.y + b.height - 371, "menuOrnamentUpImg");
        a.mainMenu.addChild(d);
        d = game.make.sprite(b.x + Math.floor(b.width / 2) + 112, b.y + b.height - 371, "menuOrnamentUpImg");
        d.scale.x *= -1;
        a.mainMenu.addChild(d);
        var e = createButton(a.oa, 0, .5 * b.height, "btnBgBig", "btnPlay", 0, a.ye, a);
        e.xf =
            .3 * b.height;
        e.oc = !0;
        a.mainMenu.Ke = b.addChild(e);
        e.yb = game.add.tween(e.scale).to({
            x: [1.06, 1],
            y: [1.06, 1]
        }, 200, Phaser.Easing.Linear.None, !1, 0, 0);
        e.yb.onComplete.add(function() {
            this.mainMenu.visible && e.yb.start()
        }, a);
        d = createButton(a.oa, -150, .6 * b.height, "btnBgSml", "menuIcons", 0, a.Ae, a);
        a.mainMenu.vf = b.addChild(d);
        d.ja.scale.set(.85);
        d.ja.x += 2;
        d.ja.y += 1;
        q && (d = createButton(a.oa, 0, .72 * b.height, "btnBgSml", "menuIcons", 1, a.Be, a), a.mainMenu.Tb = b.addChild(d), d.ja.scale.set(.85), d.ja.x += 2, d.ja.y += 1);
        d = createButton(a.oa, 150, .6 * b.height, "btnBgSml", "menuIcons", 3, a.ze, a);
        a.mainMenu.uf = b.addChild(d);
        d.ja.scale.set(.85);
        d.ja.x += 2;
        d.ja.y += 1;
        a.mainMenu.Ua = a.gf;
        a.mainMenu.Va = a.hf;
        a.mainMenu.Sa = a.oe;
        a.mainMenu.Ja = a.pe;
        a.mainMenu.visible = !1
    }

    function Xa(a) {
        a.ra.ib.sc -= game.time.physicsElapsed;
        if (0 >= a.ra.ib.sc) {
            for (var b = 1 + Math.floor(2 * Math.random()), d = 0; d < b; d++) zb(a);
            a.ra.ib.sc = 1 + Math.floor(2 * Math.random())
        }
        a.ra.ib.forEachAlive(function(a) {
            a.y += 60 * a.speed / pa;
            a.angle += 60 * a.sb / pa;
            a.Lc += 60 / pa;
            a.x = a.Nd + a.sf * Math.sin(a.Lc * a.lf);
            a.y - 30 > game.height && a.kill()
        }, a)
    }

    function zb(a) {
        var b = 15 + Math.floor(Math.random() * (game.width - 30));
        if (!(10 <= a.ra.ib.countLiving())) {
            var d = a.ra.ib.getFirstDead();
            null === d && (d = a.ra.ib.create(0, 0, "snowFlakeImg", 0), d.blendMode = PIXI.blendModes.ADD);
            d.frame = B(0, 3);
            d.scale.set(.35 + B(0, 40) / 100);
            C(d, .5, .5);
            d.reset(b, -50);
            d.Nd = b;
            d.speed = 1 + 2 * Math.random();
            d.sb = Math.floor(20 * Math.random()) / 10 - 1;
            d.sb = 0 > d.sb ? d.sb - .5 : d.sb + .5;
            d.Lc = 0;
            d.sf = 10 + A(15);
            d.lf = Math.PI / (80 + A(80))
        }
    }

    function Ab(a) {
        if (0 == game.cache.checkBitmapDataKey("grayBGg")) {
            var b = game.add.bitmapData(1, 1);
            b.fill(0, 0, 0, .65);
            game.cache.addBitmapData("grayBGg", b)
        }
        b = game.make.sprite(0, 0, game.cache.getBitmapData("grayBGg"));
        b.width = game.width;
        b.height = game.height;
        b.alpha = 0;
        b.Wa = game.add.tween(b).to({
            alpha: 1
        }, 150, Phaser.Easing.Linear.None, !1);
        b.Ya = game.add.tween(b).to({
            alpha: 0
        }, 150, Phaser.Easing.Linear.None, !1);
        b.Ya.onComplete.add(function(a) {
            a.Wa.isRunning || (a.visible = !1)
        }, a);
        b.Ff = !0;
        return b
    }

    function db(a) {
        var b = a.Fa.pop();
        b.Sa.call(a, function() {
            this.Fa[this.Fa.length - 1].name == b.qf && M(this.Fa[this.Fa.length - 1], !0)
        });
        a = a.Fa[a.Fa.length - 1];
        a.Ga.Ya.start();
        b.qf = a.name
    }

    function N(a, b) {
        var d = a.Fa[a.Fa.length - 1];
        M(d, !1);
        null == d.Ga ? (d.Ga = d.addChild(Ab(a)), d.Ga.Wa.start(), d.Ga.xc = !1) : (d.Ga.alpha = 0, d.Ga.visible = !0, d.Ga.Wa.start());
        a.Fa.push(b);
        b.Ua.call(a)
    }

    function changeScreen(a, b) { //decryp important
		//console.log('ggg', a , b);
        for (; 0 < a.Fa.length;) {
            var d = a.Fa.pop();
            void 0 != d.Ga && 0 < d.Ga.alpha && d.Ga.Ya.start();
            d.Sa.call(a)
        }
        a.Fa.push(b);
        b.Ua.call(a);
        null != b.Ga && (b.Ga.alpha = 0, b.Ga.visible = !1)
    };

    function Bb() {
        this.$ = this.o = 8;
        this.world = null;
        this.Vb = 5;
        this.Jd = this.Sc = !1;
        this.fb = 0;
        this.m = null;
        this.yd = [];
        this.mc = this.Ka = this.ua = this.qa = this.Oa = this.eb = 0
    }
    Bb.prototype = {
        constructor: Bb,
        create: function() {}
    };

    function Cb(a, b, d) {
        if (1 === d) a.m[27] = b, a.m[28] = b, a.m[35] = b, a.m[36] = b;
        else if (2 === d)
            for (d = 18; 50 > d; d += a.o)
                for (var e = 0; 4 > e; e++) a.m[d + e] = b;
        else if (3 === d)
            for (d = 9; 57 > d; d += a.o)
                for (e = 0; 6 > e; e++) a.m[d + e] = b;
        else if (3 === d)
            for (d = 0; 64 > d; d += a.o)
                for (e = 0; 8 > e; e++) a.m[d + e] = b
    }

    function Db(a, b, d) {
        if (1 === d)
            for (d = 24; 40 > d; d++) a.m[d] = b;
        else if (2 === d) {
            for (d = 16; 24 > d; d++) a.m[d] = b;
            for (d = 40; 48 > d; d++) a.m[d] = b
        } else if (3 === d) {
            for (d = 8; 16 > d; d++) a.m[d] = b;
            for (d = 48; 56 > d; d++) a.m[d] = b
        } else if (4 === d) {
            for (d = 0; 8 > d; d++) a.m[d] = b;
            for (d = 56; 64 > d; d++) a.m[d] = b
        }
    }

    function S(a, b, d) {
        1 === d ? (a.m[19] = b, a.m[20] = b, a.m[26] = b, a.m[29] = b, a.m[34] = b, a.m[37] = b, a.m[43] = b, a.m[44] = b) : 2 === d && (a.m[3] = b, a.m[4] = b, a.m[9] = b, a.m[10] = b, a.m[13] = b, a.m[14] = b, a.m[17] = b, a.m[22] = b, a.m[24] = b, a.m[31] = b, a.m[32] = b, a.m[39] = b, a.m[41] = b, a.m[46] = b, a.m[49] = b, a.m[50] = b, a.m[53] = b, a.m[54] = b, a.m[59] = b, a.m[60] = b)
    }

    function Eb(a, b, d) {
        if (1 === d) {
            for (d = 3; 60 > d; d += a.o) a.m[d] = b;
            for (d = 4; 61 > d; d += a.o) a.m[d] = b
        } else if (2 === d) {
            for (d = 2; 59 > d; d += a.o) a.m[d] = b;
            for (d = 5; 62 > d; d += a.o) a.m[d] = b
        } else if (3 === d) {
            for (d = 1; 58 > d; d += a.o) a.m[d] = b;
            for (d = 6; 63 > d; d += a.o) a.m[d] = b
        } else if (4 === d) {
            for (d = 0; 57 > d; d += a.o) a.m[d] = b;
            for (d = 7; 64 > d; d += a.o) a.m[d] = b
        }
    }

    function T(a, b, d) {
        1 === d ? (a.m[27] = b, a.m[28] = b, a.m[35] = b, a.m[36] = b) : 2 === d ? (a.m[18] = b, a.m[21] = b, a.m[42] = b, a.m[45] = b) : 3 === d ? (a.m[9] = b, a.m[14] = b, a.m[49] = b, a.m[54] = b) : 4 === d && (a.m[0] = b, a.m[7] = b, a.m[56] = b, a.m[63] = b)
    }

    function U(a, b, d) {
        if (1 === d) a.m[27] = b, a.m[28] = b, a.m[35] = b, a.m[36] = b;
        else if (2 === d) {
            for (d = 18; 22 > d; d++) a.m[d] = b;
            a.m[26] = b;
            a.m[29] = b;
            a.m[34] = b;
            a.m[37] = b;
            for (d = 42; 46 > d; d++) a.m[d] = b
        } else if (3 === d) {
            for (d = 9; 15 > d; d++) a.m[d] = b;
            for (d = 49; 55 > d; d++) a.m[d] = b;
            for (d = 17; 49 > d; d += a.o) a.m[d] = b;
            for (d = 22; 54 > d; d += a.o) a.m[d] = b
        } else if (4 === d) {
            for (d = 0; 8 > d; d++) a.m[d] = b;
            for (d = 56; 64 > d; d++) a.m[d] = b;
            for (d = 8; 56 > d; d += a.o) a.m[d] = b;
            for (d = 15; 63 > d; d += a.o) a.m[d] = b
        }
    }

    function Fb(a) {
        var b = B(1, 3),
            d = B(0, 5),
            e;
        0 === d ? (e = B(1, 2), S(a, b, e)) : (e = B(1, 4), 1 === d ? Db(a, b, e) : 2 === d ? Eb(a, b, e) : 3 === d ? U(a, b, e) : 4 === d ? Cb(a, b, e) : 5 === d && T(a, b, e))
    }

    function tb(a, b) {
        var d = !1;
        a.Oa = b;
        !0 !== d && !1 !== d && (d = !0);
        qb(V(a), d)
    }

    function Gb(a, b) {
        var d;
        a.Oa += b;
        !0 !== d && !1 !== d && (d = !0);
        qb(V(a), d)
    }

    function V(a) {
        return a.Oa / a.qa
    }

    function sb(a, b, d) {
        a.ua = 0;
        a.Ka = 0;
        a.mc = 0;
        a.Vb = 6 < d ? 7 : 4 < d ? 6 : 2 < d ? 5 : 4;
        switch (b) {
            case u.Db:
                a.eb = 0;
                a.qa = 500 * (d + 2) * (d + 2);
                break;
            case u.ob:
                6 < d ? (a.qa = 9E4 - 5E3 * (d - 7), a.eb = 400 - 50 * (d - 7)) : 4 < d ? (a.qa = 1E5 - 1E4 * (d - 5), a.eb = 400 - 100 * (d - 5)) : 2 < d ? (a.qa = 11E4 - 1E4 * (d - 3), a.eb = 300 - 75 * (d - 3)) : (a.qa = 12E4 - 1E4 * (d - 1), a.eb = 300 - 150 * (d - 1));
                break;
            case u.ta:
                a.mc = 4 + d;
                a.eb = 0;
                a.qa = 1E4 - d / 2 * 1E3;
                a.Ka = 6 < d ? -5 + 3 * d : 4 < d ? -2 + 3 * d : 2 < d ? 1 + 3 * d : 4 + 3 * d;
                break;
            case u.xa:
                a.mc = 4;
                a.eb = 0;
                6 < d ? (a.qa = 19E4 - 5E3 * (d - 7), a.Ka = -3 + d) : 4 < d ? (a.qa = 2E5 - 1E4 * (d - 5), a.Ka = 4) : 2 < d ? (a.qa =
                    22E4 - 2E4 * (d - 3), a.Ka = d) : (a.qa = 24E4 - 2E4 * (d - 1), a.Ka = 1 + d);
                break;
            case u.Ea:
                a.eb = 0;
                a.qa = 6 < d ? 18E4 - 1E4 * (d - 7) : 4 < d ? 2E5 - 2E4 * (d - 5) : 2 < d ? 22E4 - 2E4 * (d - 3) : 24E4 - 2E4 * (d - 1);
                a.m = [];
                for (b = 0; b < a.$ * a.o; b++) a.m.push(-1);
                switch (d) {
                    case 1:
                        U(a, 2, 1);
                        T(a, 3, 2);
                        break;
                    case 2:
                        Eb(a, 2, 1);
                        U(a, 3, 3);
                        break;
                    case 3:
                        S(a, 2, 2);
                        U(a, 3, 1);
                        break;
                    case 4:
                        Eb(a, 3, 2);
                        Db(a, 3, 2);
                        break;
                    case 5:
                        U(a, 1, 1);
                        U(a, 2, 2);
                        U(a, 3, 3);
                        break;
                    case 6:
                        Db(a, 2, 1);
                        T(a, 2, 3);
                        break;
                    case 7:
                        S(a, 2, 1);
                        T(a, 1, 3);
                        break;
                    case 8:
                        Db(a, 1, 2);
                        U(a, 2, 1);
                        break;
                    case 9:
                        Cb(a, 1, 2);
                        T(a, 1, 3);
                        break;
                    case 10:
                        U(a,
                            2, 1);
                        T(a, 1, 2);
                        T(a, 1, 3);
                        T(a, 1, 4);
                        break;
                    case 11:
                        S(a, 1, 2);
                        Eb(a, 1, 1);
                        Db(a, 1, 1);
                        break;
                    case 12:
                        U(a, 2, 3);
                        T(a, 2, 4);
                        break;
                    case 13:
                        Cb(a, 1, 3);
                        break;
                    case 14:
                        Eb(a, 2, 4);
                        U(a, 2, 2);
                        break;
                    case 15:
                        S(a, 2, 1);
                        U(a, 1, 4);
                        break;
                    case 16:
                        Cb(a, 3, 2);
                        T(a, 2, 4);
                        break;
                    case 17:
                        S(a, 3, 2);
                        break;
                    default:
                        d = B(0, 4), 2 > d || (4 > d || Fb(a), Fb(a)), Fb(a)
                }
        }
    };
    var Hb = 0,
        W = 0,
        Ib = 0,
        rb = 0;

    function Jb() {
        this.q = null;
        this.Za = this.Ca = this.nb = this.Xb = this.Ta = 0;
        this.f = null;
        this.j = [];
        this.jb = [];
        this.$b = [];
        this.Zb = !1;
        this.ca = this.Da = null;
        this.Ob = [];
        this.sa = [];
        this.Hb = 0;
        this.Qb = !1;
        this.rb = null;
        this.ac = 0;
        this.isPaused = this.Lb = this.Ma = !1;
        this.Fc = null;
        this.hb = new Anims;
        this.Yb = this.wc = !1
    }
    Jb.prototype = {
        constructor: Jb,
        preload: function() {
            if (null === this.q)
                for (key in this.q = {}, u) this.q[u[key]] = {}, this.q[u[key]].scoreTotal = 0, this.q[u[key]].scoreLevel = 0, this.q[u[key]].highScore = 0, this.q[u[key]].level = 1, this.q[u[key]].gameTime = 0, this.q[u[key]].gameField = null, this.q[u[key]].gameRunning = !1, this.q[u[key]].levelRunning = !1;
            this.hb.preload();
            for (key in this) "function" === typeof this[key] && (this[key].Ib = key)
        },
        create: function() {
            this.f = new Bb;
            this.f.create();
            for (var a = 0; 64 > a; a++) vb(this, 0, 0);
            Kb();
            Lb(this);
            game.input.addMoveCallback(function() {
                if (Q === v.Bb && R === x.Cb && null !== this.Da) {
                    this.k === u.ta && (this.Zb = !0);
                    var a = this.Ob[0] - game.input.x,
                        d = this.Ob[1] - game.input.y;
                    if (!(10 > Math.abs(a) && 10 > Math.abs(d))) {
                        var e = this.Da.ba,
                            f = this.Da.da; - 10 >= a && e++;
                        10 <= a && e--;
                        e === this.Da.ba && (-10 >= d && f++, 10 <= d && f--);
                        X(this, e, f) && (this.Qb = !0, Oa(this.hb, this.Da.da, this.Da.ba), Oa(this.hb, f, e), this.ca = {
                            Gb: this.Da.ba,
                            Nb: this.Da.da,
                            pb: e,
                            tb: f
                        }, Mb(this, this.Da.ba, this.Da.da, e, f, x.Uc, this.Ub), playSound("sndSwp"));
                        this.Da = null;
                        this.Ob = []
                    }
                }
            }, this);
            W = (new Date).getTime();
            Ib = W - Hb;
            Hb = W;
            this.hb.create();
            game.input.onDown.add(function() {
                this.ac = 0
            }, this)
        },
        update: function() {
            W = (new Date).getTime();
            Ib = W - Hb;
            Hb = W;
            if (Q === v.Bb) {
                rb += Ib;
                var a = Ib;
                if (!0 !== this.Ma) {
                    if (this.k === u.ob || this.k === u.xa || this.k === u.Ea) Gb(this.f, -a), 0 > this.f.Oa && R === x.Cb && Nb(this);
                    this.k === u.ta && !0 === this.Yb && (Gb(this.f, -a), 0 > this.f.Oa && Nb(this))
                }
                R === x.Cb && (this.ac += Ib, 3E3 < this.ac && Ob(oa, this.j[this.sa[this.Hb][0][0]][this.sa[this.Hb][0][1]]))
            }
        },
        dc: function() {
            Q = v.Bb;
            this.k ===
                u.ta && (tb(this.f, this.f.qa), this.Yb = !1);
            this.ic();
            var a = ia(this.k);
        },
        ic: function() {
            !0 !== Nb(this) && !0 !== this.Ma && (R = x.Cb, this.Za = 1, this.ac = 0, this.wc = !0, this.k === u.ta && (this.Yb = !0), Pb(this))
        },
        Oe: function() {
            R = x.Gd;
            if (!0 !== Y(this, arguments.callee.Ib)) {
                Ia("msg_noMoreMoves");
                for (var a = [], b = 0; b < this.f.$; b++)
                    for (var d = 0; d < this.f.o; d++) - 1 !== this.j[b][d] && 5 !== this.j[b][d].u && 4 !== this.j[b][d].u && (a.push(this.j[b][d]), this.j[b][d] = null);
                for (b = 0; b <
                    a.length; b++) {
                    d = a[b];
                    do var e = B(0, this.f.$ - 1),
                        f = B(0, this.f.o - 1); while (null !== this.j[e][f]);
                    this.j[e][f] = d;
                    d.da = e;
                    d.ba = f
                }
                for (b = 0; b < a.length; b++) d = a[b], e = J(d.ba, d.da), game.add.tween(d).to({
                    x: e[0],
                    y: e[1]
                }, 400 + B(0, 300), Phaser.Easing.Sinusoidal.Out, !0, 400 + B(0, 300)).onComplete.add(this.Pe, this), d.cb = !0
            }
        },
        Pe: function(a) {
            a.cb = !1;
            Qb(this) || this.Ub()
        },
        Ub: function() {
            if (!Qb(this) && !0 !== Y(this, arguments.callee.Ib)) {
                R = x.Uc;
                if (null !== this.ca) {
                    var a;
                    a = this.j[this.ca.Nb][this.ca.Gb];
                    var b = this.j[this.ca.tb][this.ca.pb];
                    a = 3 === a.u && 3 === b.u ? 2 : 3 === a.u ? 0 : 3 === b.u ? 1 : !1;
                    if (!1 !== a && !(0 === a && 5 === this.j[this.ca.tb][this.ca.pb].u || 1 === a && 5 === this.j[this.ca.Nb][this.ca.Gb].u)) {
                        Rb(this);
                        Sb(this, a, [this.j[this.ca.Nb][this.ca.Gb], this.j[this.ca.tb][this.ca.pb]]);
                        this.ca = null;
                        Tb(this);
                        return
                    }
                    a = Ub(this.j[this.ca.Nb][this.ca.Gb], this.j[this.ca.tb][this.ca.pb]);
                    if (!1 !== a) {
                        Rb(this);
                        if (!0 === a) this.j[this.ca.Nb][this.ca.Gb].Ba(), this.j[this.ca.tb][this.ca.pb].Ba();
                        else if (1 === a) {
                            a = this.ca.tb - 2;
                            for (var b = this.ca.pb - 2, d = a; d < a + 5; d++)
                                for (var e =
                                        b; e < b + 5; e++) X(this, e, d) && Z(this, e, d).Ba(!1)
                        } else if (2 === a) {
                            a = this.ca.tb;
                            b = this.ca.pb;
                            a = [a - 1, a, a + 1];
                            for (var b = [b - 1, b, b + 1], f = 0; f < a.length; f++)
                                for (d = a[f], e = 0; e < this.f.o; e++) X(this, e, d) && Z(this, e, d).Ba(!1);
                            for (a = 0; a < b.length; a++)
                                for (e = b[a], d = 0; d < this.f.$; d++) X(this, e, d) && Z(this, e, d).Ba(!1)
                        }
                        this.bc();
                        this.ca = null;
                        Tb(this);
                        return
                    }
                }
                a = [];
                for (b = 0; b < this.f.$; b++)
                    for (d = 0; d < this.f.o - 2;)
                        if (e = this.j[b][d], null !== e) {
                            var g = e,
                                e = g.fa,
                                f = g.u,
                                h = [];
                            h.push(g);
                            for (var n = g.da, g = g.ba + 1; g < this.f.o; g++)
                                if (null !== this.j[n][g] &&
                                    -1 !== this.j[n][g] && this.j[n][g].fa === e && 5 !== f && 3 !== f) h.push(this.j[n][g]);
                                else break;
                            e = h;
                            3 <= e.length && a.push(e);
                            d += e.length
                        } else d += 1;
                for (d = 0; d < this.f.o; d++)
                    for (b = 0; b < this.f.$ - 2;)
                        if (e = this.j[b][d], null !== e) {
                            g = e;
                            e = g.fa;
                            f = g.u;
                            h = [];
                            h.push(g);
                            n = g.ba;
                            for (g = g.da + 1; g < this.f.$; g++)
                                if (null !== this.j[g][n] && -1 !== this.j[g][n] && this.j[g][n].fa === e && 5 !== f && 3 !== f) h.push(this.j[g][n]);
                                else break;
                            e = h;
                            3 <= e.length && a.push(e);
                            b += e.length
                        } else b += 1;
                if (0 < a.length) {
                    this.Yb = !1;
                    Rb(this);
                    R = x.Hd;
                    f = {};
                    b = [];
                    for (d = 0; d < a.length; d++) void 0 ===
                        f[a[d][0].fa] && (f[a[d][0].fa] = []), f[a[d][0].fa].push(a[d]);
                    for (colorKeys in f)
                        if (1 < f[colorKeys].length)
                            for (d = 0; d < f[colorKeys].length; d++)
                                for (e = d + 1; e < f[colorKeys].length; e++)
                                    for (h = 0; h < f[colorKeys][d].length; h++)
                                        for (n = 0; n < f[colorKeys][e].length; n++) f[colorKeys][d][h].da === f[colorKeys][e][n].da && f[colorKeys][d][h].ba === f[colorKeys][e][n].ba && (f[colorKeys][d].od = !0, f[colorKeys][e].od = !0, b.push({
                                            ROW: f[colorKeys][d][h].da,
                                            COL: f[colorKeys][d][h].ba,
                                            type: 2
                                        }), Vb(this, 3, !0, f[colorKeys][d][h].da, f[colorKeys][d][h].ba,
                                            f[colorKeys][d][h].fa));
                    for (d = 0; d < a.length; d++)
                        for (f = a[d], !0 !== f.od && (5 <= f.length ? (e = Wb(f), b.push({
                                ROW: f[e].da,
                                COL: f[e].ba,
                                type: 3
                            }), Vb(this, 4, !0, f[e].da, f[e].ba, f[e].fa)) : 4 === f.length && (e = Wb(f), b.push({
                                ROW: f[e].da,
                                COL: f[e].ba,
                                type: 1
                            }), Vb(this, 2, !0, f[e].da, f[e].ba, f[e].fa))), e = 0; e < f.length; e++) f[e].Ba();
                    for (d = 0; d < b.length; d++) a = b[d], this.j[a.ROW][a.COL].Pb(null, a.type), this.j[a.ROW][a.COL].bb = !1, this.k === u.Ea && Xb(this, a.ROW, a.COL);
                    this.bc();
                    this.ca = null;
                    this.Za += 1;
                    Tb(this)
                } else if (null !== this.ca) playSound("sndSwpB"),
                    Mb(this, this.ca.pb, this.ca.tb, this.ca.Gb, this.ca.Nb, null, this.ic), this.ca = null;
                else if (yb(this), 0 === this.sa.length) this.Oe();
                else if (this.k === u.ta && !0 === this.Zb) this.Zb = !1, this.vd();
                else if (this.k === u.xa) a: {
                    if (!0 !== this.Ma)
                        for (a = 0; a < this.f.o; a++)
                            if (b = this.j[this.f.$ - 1][a], -1 !== b && 5 === b.u) {
                                Yb(this, b);
                                break a
                            }
                    this.ic()
                }
                else this.ic()
            }
        },
        jc: function(a) {
            R = x.Dd;
            if (a) {
                for (var b = 0; b < this.f.$; b++)
                    for (var d = 0; d < this.f.o; d++)
                        if (null !== this.j[b][d] && -1 !== this.j[b][d]) {
                            var e = this.j[b][d];
                            e.na = []
                        }
                this.Ec = [];
                for (d =
                    0; d < this.f.o; d++) this.Ec[d] = 0
            }
            if (!0 !== Y(this, arguments.callee.Ib)) {
                for (b = 0; b < this.f.o; b++)
                    for (d = this.f.$ - 1; 0 <= d; d--)
                        if (null === this.j[d][b])
                            for (e = d - 1; 0 <= e; e--)
                                if (null !== this.j[e][b]) {
                                    if (-1 === this.j[e][b])
                                        if (!0 === this.f.Sc) break;
                                        else continue;
                                    this.j[d][b] = this.j[e][b];
                                    this.j[e][b] = null;
                                    this.j[d][b].Qa(b, d);
                                    for (var f = this.j[d][b], g = 1; g <= Math.abs(e - d); g++) f.na.push({
                                        zb: e + g,
                                        ub: b
                                    });
                                    void 0 === f.na.delay && (f.na.delay = 0);
                                    void 0 === f.na.cc && (f.na.cc = !1);
                                    break
                                }
                if (!0 === this.f.Sc) {
                    Zb(this);
                    if (!0 === this.Tc) {
                        this.jc(!1);
                        return
                    }
                    $b(this);
                    if (!0 === this.bd) {
                        Zb(this);
                        this.jc(!1);
                        return
                    }
                } else $b(this);
                f = !1;
                for (b = 0; b < this.f.$; b++)
                    for (d = 0; d < this.f.o; d++)
                        if (X(this, d, b) && (e = this.j[b][d], 0 < e.na.length)) {
                            for (var f = {
                                    x: [],
                                    y: []
                                }, h = g = 0; h < e.na.length; h++) {
                                var n = J(e.na[h].ub, e.na[h].zb);
                                f.x.push(n[0]);
                                f.y.push(n[1]);
                                g++
                            }
                            e.cb = !0;
                            game.add.tween(e).to(f, 140 * g, Phaser.Easing.Linear.In, !0, e.na.delay).onComplete.add(this.Rd, this);
                            e.na.cc && game.add.tween(e.scale).to({
                                x: 1
                            }, 100, Phaser.Easing.Linear.In, !0, e.na.delay);
                            f = !0
                        }!1 === f && this.Ub()
            }
        },
        Rd: function(a) {
            a.cb = !1;
            Qb(this) || this.Ub()
        },
        bc: function() {
            if (!0 !== Y(this, arguments.callee.Ib))
                for (var a = function(a, b) {
                            if (X(this, b, a) && !0 === this.j[a][b].bb) {
                                var d = 0,
                                    h = !1;
                                this.k === u.Ea && Xb(this, a, b);
                                var n = this.j[a][b];
                                this.j[a][b] = null;
                                1 === n.u ? !0 === n.vc && (d += 1 * this.Za, h = !0, playSound("sndBombExplode")) : 2 === n.u ? !0 === n.vc && (d += 1 * this.Za, h = !0, playSound("sndBombExplode")) : 0 === n.u ? !0 === n.vc && (d += 1 * this.Za, h = !0) : 4 === n.u && (d += 1 * this.Za, h = !0, playSound("escPop"));
                                0 < d && Vb(this, d, h, n.da, n.ba, n.fa);
                                playSound("sndExpl" + B(1, 5));
                                ac(this, n)
                            }
                        }.bind(this),
                        b = 0; b < this.f.$; b++)
                    for (var d = 0; d < this.f.o; d++) a(b, d)
        },
        vd: function() {
            if (!0 !== this.Ma && (R = x.Fd, !0 !== Y(this, arguments.callee.Ib))) {
                tb(this.f, this.f.qa);
                this.Yb = !1;
                for (var a = 0, b = 0; b < this.f.$; b++)
                    for (var d = 0; d < this.f.o; d++) {
                        var e = this.j[b][d];
                        if (0 === b && 4 === e.u) {
                            this.rb = 2;
                            this.q[this.k].levelRunning = !1;
                            this.q[this.k].gameRunning = !1;
                            this.Lb = !0;
                            this.kc();
                            return
                        }
                        if (4 === e.u) {
                            var f = e.da - 1,
                                g = e.ba;
                            if (-1 === this.j[f][g]) {
                                var g = qa(),
                                    h = e.ba + g;
                                if (0 <= h && h < this.f.o && -1 !== this.j[f][h] && 4 !== this.j[f][h].u) g = h;
                                else if (g *=
                                    -1, h = e.ba + g, 0 <= h && h < this.f.o && -1 !== this.j[f][h] && 4 !== this.j[f][h].u) g = h;
                                else continue
                            }
                            Mb(this, e.ba, e.da, g, f, x.Yc, this.Ic);
                            a += 1
                        }
                    }
                0 === a && this.Ic()
            }
        },
        Ic: function() {
            if (!0 !== this.Ma && (R = x.Yc, !0 !== Y(this, arguments.callee.Ib))) {
                for (var a = [], b = 0; b < this.$b.length; b++) a.push(this.$b[b]);
                b = null;
                do {
                    if (0 === a.length) break;
                    var d = B(0, a.length - 1),
                        e = a[d];
                    a.splice(d, 1);
                    var f = e.da,
                        g = e.ba;
                    if (0 === this.j[f][g].u) {
                        b = e;
                        break
                    }
                } while (1);
                null === b ? this.kd() : (f = b.da, g = b.ba, game.add.tween(this.j[f][g].scale).to({
                    x: 0,
                    y: 0
                }, 220, Phaser.Easing.Linear.None, !0).onComplete.add(function() {
                    this.j[f][g].Pb(null, 4);
                    this.j[f][g].scale.set(0);
                    game.add.tween(this.j[f][g].scale).to({
                        x: 1,
                        y: 1
                    }, 150, Phaser.Easing.Back.Out, !0).onComplete.add(this.kd, this)
                }, this))
            }
        },
        kd: function() {
            this.Ub()
        },
        Je: function(a) {
            this.f.ua += 1;
            ob(this.f.ua, this.f.Ka);
            playSound("downflsuccess");
            var b = game.add.tween(a.scale).to({
                x: 0,
                y: 0
            }, 250, Phaser.Easing.Back.In, !0, 100);
            b.Fe = a;
            b.onComplete.add(function(a, b) {
                b.Fe.kill()
            });
            this.jc(!0)
        },
        uc: function() {
            0 < this.f.fb ? bc(this) : cc(this)
        },
        Kd: function() {
            this.j[this.Mb.zb][this.Mb.ub].Pb(null,
                2);
            Vb(this, 40, !0, this.Mb.zb, this.Mb.ub, this.j[this.Mb.zb][this.Mb.ub].fa);
            bc(this)
        },
        kc: function() {
            Q = v.Rb;
            R = x.Rb;
            if (1 === this.rb) N(gameState, gameState.gameOverWin), playSound("sndWin");
            else {
                playSound("sndLose");
                N(gameState, gameState.gameOverLose);
                var a = ia(this.k);
            }
            Pb(this);
        }
    };

    function cb(a, b, d) {
        a = a.q[b][d];
        return void 0 === a ? 0 : a
    }

    function Pb(a) {
        a.q[a.k].scoreLevel = a.Xb;
        a.q[a.k].scoreTotal = a.nb;
        a.q[a.k].level = a.Ta;
        a.q[a.k].gameTime = rb;
        a.q[a.k].progressCurrent = a.f.Oa;
        if (!0 === a.q[a.k].gameRunning && !0 === a.q[a.k].levelRunning)
            if (a.k === u.Db || a.k === u.ob || a.k === u.xa || a.k === u.ta) {
                a.q[a.k].paramsCount = 2;
                a.q[a.k].gameField = [];
                for (var b = 0; b < a.f.$; b++)
                    for (var d = 0; d < a.f.o; d++) a.q[a.k].gameField.push(a.j[b][d].fa), a.q[a.k].gameField.push(a.j[b][d].u)
            } else {
                if (a.k === u.Ea)
                    for (a.q[a.k].paramsCount = 3, a.q[a.k].gameField = [], b = 0; b < a.f.$; b++)
                        for (d =
                            0; d < a.f.o; d++) a.q[a.k].gameField.push(a.j[b][d].fa), a.q[a.k].gameField.push(a.j[b][d].u), a.q[a.k].gameField.push(a.jb[b][d].Sb)
            }
        else a.q[a.k].gameField = null;
        if (a.k === u.xa || a.k === u.ta) a.q[a.k].collectGemsCurrent = a.f.ua;
        void 0 === a.q[a.k].highScore && (a.q[a.k].highScore = a.q[a.k].scoreTotal);
        a.q[a.k].scoreTotal > a.q[a.k].highScore && (a.q[a.k].highScore = a.q[a.k].scoreTotal);
        dc()
    }

    function Y(a, b) {
        return a.isPaused ? (a.Fc = b, !0) : !1
    }

    function cc(a) {
        for (var b = !1, d = 0; d < a.f.$; d++)
            for (var e = 0; e < a.f.o; e++)
                if (X(a, e, d)) {
                    var f = a.j[d][e];
                    1 === f.u && (f.Ba(), b = !0);
                    2 === f.u && (f.Ba(), b = !0)
                }
        if (!0 === b) a.bc();
        else {
            b = [];
            for (d = 0; d < a.f.$; d++)
                for (e = 0; e < a.f.o; e++)
                    if (X(a, e, d) && (f = a.j[d][e], 3 === f.u)) {
                        do var f = B(0, a.f.$ - 1),
                            g = B(0, a.f.o - 1); while (null === a.j[f][g] || -1 === a.j[f][g] || 5 === a.j[f][g].u);
                        b.push([d, e]);
                        b.push([f, g]);
                        d = a.f.$;
                        e = a.f.o
                    }
            0 < b.length ? (Sb(a, 0, [a.j[b[0][0]][b[0][1]], a.j[b[1][0]][b[1][1]]]), a.ca = null) : (Q = v.Rb, R = x.Rb, game.time.events.add(1E3,
                a.kc, a))
        }
    }

    function bc(a) {
        var b;
        if (b = 0 < a.f.fb) a: {
            for (b = 0; b < a.f.$; b++)
                for (var d = 0; d < a.f.o; d++)
                    if (null !== a.j[b][d] && -1 !== a.j[b][d] && 0 == a.j[b][d].u) {
                        b = !0;
                        break a
                    }
            b = !1
        }
        if (b) {
            a.f.fb--;
            gameState.Se(a.f.fb);
            do b = B(0, a.f.$ - 1), d = B(0, a.f.o - 1); while (null === a.j[b][d] || -1 === a.j[b][d] || 0 !== a.j[b][d].u);
            a.Mb = {
                zb: b,
                ub: d
            };
            Ha(a.hb, a.j[b][d].x, a.j[b][d].y, a.Kd, a)
        } else cc(a)
    }

    function Nb(a) {
        if (!0 === a.Ma) a.uc();
        else {
            var b = !1;
            if (a.k === u.ob || a.k === u.xa || a.k === u.Ea || a.k === u.Db)
                if (0 > V(a.f) || 1 < V(a.f)) b = !0;
            a.k === u.xa && a.f.ua >= a.f.Ka && (b = !0);
            if (a.k === u.Ea) {
                for (var d = 0, e = 0; e < a.f.$; e++)
                    for (var f = 0; f < a.f.o; f++) 0 < a.jb[e][f].Sb && d++;
                0 >= d && (b = !0)
            }
            a.k === u.ta && (a.f.ua >= a.f.Ka && (b = !0), 0 > V(a.f) && a.vd());
            if (!0 === b) {
                a.Lb = !0;
                a.rb = 1;
                0 > V(a.f) && (a.rb = 2);
                a.q[a.k].levelRunning = !1;
                if (1 === a.rb) {
                    a.f.Vb = 7;
                    b = !1;
                    for (d = 0; d < a.f.$; d++)
                        for (e = 0; e < a.f.o; e++) X(a, e, d) && (f = a.j[d][e], 1 === f.u || 2 === f.u || 3 === f.u) &&
                            (b = !0, d = e = 50);
                    !0 === b || 0 < a.f.fb ? (R = x.Ed, !1 === a.Ma ? (a.Ma = !0, Ia("msg_happy"), playSound("happymmnt"), game.time.events.add(1E3, a.uc, a)) : a.uc()) : game.time.events.add(1E3, a.kc, a)
                }
                2 === a.rb && (a.q[a.k].gameRunning = !1, a.kc());
                return !0
            }
            return !1
        }
    }

    function Yb(a, b) {
        a.j[b.da][b.ba] = null;
        gameState.gameScreen.p.qb.bringToTop(b);
        game.add.tween(b).to({
            x: gameState.gameScreen.lb.worldPosition.x - gameState.gameScreen.p.worldPosition.x - 20,
            y: [100, gameState.gameScreen.lb.worldPosition.y - gameState.gameScreen.p.worldPosition.y]
        }, 700, Phaser.Easing.Quadratic.Out, !0).interpolation(function(a, b) {
            return Phaser.Math.bezierInterpolation(a, b)
        }).onComplete.add(a.Je, a)
    }

    function xb(a) {
        a.$b = [];
        a.Zb = !1;
        for (var b = 0; b < a.f.o; b++) a.$b.push({
            da: a.f.$ - 1,
            ba: b
        })
    }

    function Xb(a, b, d) {
        a = a.jb[b][d];
        if (0 < a.Sb) {
            a.Sb--;
            b = a.worldPosition.x;
            d = a.worldPosition.y;
            var e = gameState,
                f = 2;
            void 0 === f && (f = 1);
            for (var g = 0; g < f && !(30 < e.xb.countLiving()); g++) {
                var h = e.xb.getFirstDead();
                null === h && (h = e.xb.create(0, 0), C(h, .5, .5), game.physics.enable(h, Phaser.Physics.ARCADE));
                h.loadTexture("blockParticle" + B(1, 3));
                h.reset(b, d);
                h.alpha = B(40, 70) / 100;
                h.angle = Math.floor(90 * Math.random()) - 45;
                h.lifespan = 1100;
                h.sb = Math.floor(200 * Math.random()) / 10 - 10;
                h.scale.set(.3 + Math.floor(15 * Math.random()) / 100);
                h.angle =
                    Math.floor(360 * Math.random());
                h.allowGravity = !0;
                h.body.gravity.y = B(300, 1E3);
                h.body.velocity.y = -(40 * B(1, 4));
                h.body.velocity.x = B(-150, 150);
                game.tweens.removeFrom(h, !0);
                game.add.tween(h).to({
                    alpha: 0
                }, 600, Phaser.Easing.Linear.None, !0, 500);
                h.revive()
            }
            a.fc(a.Sb);
            playSound("blockBrk")
        }
    }

    function wb(a) {
        for (var b = 0; b < a.f.$; b++)
            for (var d = 0; d < a.f.o; d++) - 1 === a.j[b][d] ? a.jb[b][d].fc(-1) : 0 < a.f.m[b * a.f.o + d] ? (a.jb[b][d].fc(a.f.m[b * a.f.o + d]), a.jb[b][d].revive()) : a.jb[b][d].fc(-1)
    }

    function ec(a, b, d) {
        var e = gameState.gameScreen.p.Hc.create(0, 0, "blockImg", 0);
        C(e, .5, .5);
        e.Ba = function() {}.bind(a);
        e.fc = function(a) {
            0 > a && (a = 0);
            e.Sb = a;
            0 === a && e.kill();
            0 < a && (e.frame = a - 1);
            3 === a && (e.alpha = 1);
            2 === a && (e.alpha = .7);
            1 === a && (e.alpha = .4)
        };
        a = J(d, b);
        e.reset(a[0], a[1]);
        e.ba = d;
        e.da = b;
        e.fc(-1);
        return e
    }

    function Lb(a) {
        for (var b = 0; 8 > b; b++) {
            a.jb[b] = [];
            for (var d = 0; 8 > d; d++) a.jb[b][d] = ec(a, b, d)
        }
        gameState.gameScreen.p.Hc.callAll("kill")
    }

    function Vb(a, b, d, e, f, g) {
        var h = (10 * b * a.Za * a.Ta + 40 * b * a.Ta) / 10;
        a.Xb += h;
        a.nb += h;
        a.Ca += h;
        !0 === d && (d = J(f, e), Ja(d[0], d[1], h, g));
        a.k === u.Db ? Gb(a.f, h) : a.k === u.ob && Gb(a.f, b * a.f.eb)
    }

    function J(a, b) {
        return [(ja >> 1) + a * (ja + 0), (ka >> 1) + b * (ka + 0)]
    }

    function Kb() {
        ra(gameState.gameScreen.p.qb);
        gameState.gameScreen.p.qb.callAll("kill")
    }

    function ib(a) {
        Kb();
        gameState.gameScreen.p.Hc.callAll("kill");
        a.$b = [];
        a.Zb = !1;
        a.j = [];
        a.sa = [];
        a.Hb = 0;
        a.Da = null;
        a.ca = null;
        a.Ob = [];
        a.isPaused = !1;
        a.Qb = !1
    }

    function Qb(a) {
        for (var b = 0; b < a.f.$; b++)
            for (var d = 0; d < a.f.o; d++)
                if (null !== Z(a, d, b) && !0 === Z(a, d, b).cb) return !0;
        return !1
    }

    function fc(a, b, d) {
        for (var e = a.j[d][b].fa, f = a.j[d][b].u, g = 1, h = b - 1; 0 <= h; h--)
            if (null !== a.j[d][h] && -1 !== a.j[d][h] && a.j[d][h].fa === e && 5 !== f && 3 !== f) g += 1;
            else break;
        for (h = b + 1; h < a.f.o; h++)
            if (null !== a.j[d][h] && -1 !== a.j[d][h] && a.j[d][h].fa === e && 5 !== f && 3 !== f) g += 1;
            else break;
        if (3 <= g) a = !0;
        else {
            e = a.j[d][b].fa;
            f = a.j[d][b].u;
            g = 1;
            for (h = d - 1; 0 <= h; h--)
                if (null !== a.j[h][b] && -1 !== a.j[h][b] && a.j[h][b].fa === e && 5 !== f && 3 !== f) g += 1;
                else break;
            for (h = d + 1; h < a.f.$; h++)
                if (null !== a.j[h][b] && -1 !== a.j[h][b] && a.j[h][b].fa === e && 5 !== f &&
                    3 !== f) g += 1;
                else break;
            a = 3 <= g
        }
        return a
    }

    function yb(a) {
        a.sa = [];
        for (var b = 0; b < a.f.$; b++)
            for (var d = 0; d < a.f.o - 1; d++) {
                var e = a.j[b][d],
                    f = a.j[b][d + 1];
                null !== e && -1 !== e && null !== f && -1 !== f && (a.j[b][d + 1] = e, a.j[b][d] = f, fc(a, d, b) ? a.sa.push([
                    [b, d + 1],
                    [b, d]
                ]) : fc(a, d + 1, b) && a.sa.push([
                    [b, d],
                    [b, d + 1]
                ]), a.j[b][d] = e, a.j[b][d + 1] = f)
            }
        for (b = 0; b < a.f.$ - 1; b++)
            for (d = 0; d < a.f.o; d++) e = a.j[b][d], f = a.j[b + 1][d], null !== e && -1 !== e && null !== f && -1 !== f && (a.j[b + 1][d] = e, a.j[b][d] = f, fc(a, d, b) ? a.sa.push([
                    [b + 1, d],
                    [b, d]
                ]) : fc(a, d, b + 1) && a.sa.push([
                    [b, d],
                    [b + 1, d]
                ]), a.j[b][d] = e, a.j[b + 1][d] =
                f);
        if (0 === a.sa.length)
            for (e = [
                    [0, -1],
                    [0, 1],
                    [-1, 0],
                    [1, 0]
                ], b = 0; b < a.f.$; b++)
                for (d = 0; d < a.f.o; d++)
                    if (3 === a.j[b][d].u)
                        for (f = 0; f < e.length; f++) {
                            if (-1 !== a.j[b + e[f][0]][d + e[f][1]].u && 5 !== a.j[b + e[f][0]][d + e[f][1]].u) {
                                a.sa.push([
                                    [b, d]
                                ]);
                                break
                            }
                        } else
                            for (f = 0; f < e.length; f++) X(a, d + e[f][1], b + e[f][0]) && !1 !== Ub(a.j[b][d], a.j[b + e[f][0]][d + e[f][1]]) && a.sa.push([
                                [b, d],
                                [b + e[f][0], d + e[f][1]]
                            ]);
        a.Hb = B(0, a.sa.length - 1)
    }

    function ac(a, b) {
        b.bb = !1;
        b.kill();
        !0 !== function() {
            for (var a = 0; a < gameState.gameScreen.p.qb.length; a++) {
                var b = gameState.gameScreen.p.qb.getChildAt(a);
                if (null !== b && !0 === b.bb) return !0
            }
            return !1
        }() && game.time.events.add(250, function() {
            this.jc(!0)
        }, a)
    }

    function gc(a, b, d, e, f) {
        a.j[f][e] = a.j[d][b];
        a.j[d][b] = null;
        a.j[f][e].Qa(e, f);
        a = a.j[f][e];
        a.na.push({
            zb: f,
            ub: e
        });
        void 0 === a.na.delay && (a.na.delay = 0);
        void 0 === a.na.cc && (a.na.cc = !1)
    }

    function Zb(a) {
        a.Tc = !1;
        for (var b = a.f.$ - 2; 0 <= b; b--)
            for (var d = 0; d < a.f.o; d++) null !== a.j[b][d] && -1 !== a.j[b][d] && (hc(a, d - 1, b) && ic(a, d - 1, b + 1) ? (gc(a, d, b, d - 1, b + 1), a.Tc = !0) : hc(a, d + 1, b) && ic(a, d + 1, b + 1) && (gc(a, d, b, d + 1, b + 1), a.Tc = !0))
    }

    function $b(a) {
        a.bd = !1;
        for (var b = 0; b < a.f.o; b++) {
            for (var d = A(a.f.Vb), e = [], f = 0; f < a.f.$ && (!0 !== a.f.Sc || -1 !== a.j[f][b]); f++)
                if (null === a.j[f][b]) {
                    var g;
                    do g = A(a.f.Vb); while (g === d);
                    d = g;
                    g = vb(a, b, -1, g, 0);
                    a.bd = !0;
                    var h;
                    if (h = a.k === u.xa) {
                        for (var n = h = 0; n < a.f.$; n++)
                            for (var w = 0; w < a.f.o; w++) null !== a.j[n][w] && 5 === a.j[n][w].u && h++;
                        h = h < a.f.mc && !0 === a.wc
                    }
                    h && (a.wc = !1, g.Pb(null, 5));
                    g.scale.set(0, 1);
                    e.push({
                        Ce: g,
                        Pd: f,
                        Od: b
                    });
                    a.j[f][b] = g;
                    a.j[f][b].Qa(b, f)
                }
            for (d = e.length - 1; 0 <= d; d--) {
                f = e[d].Ce;
                for (g = 0; g <= e[d].Pd; g++) f.na.push({
                    zb: g,
                    ub: e[d].Od
                });
                a.Ec[b]++;
                f.na.delay = 140 * a.Ec[b];
                f.na.cc = !0
            }
        }
    }

    function Sb(a, b, d) {
        if (2 === b) {
            for (var e = 0; e < a.f.$; e++)
                for (var f = 0; f < a.f.o; f++)
                    if (X(a, f, e)) {
                        var g = a.j[e][f];
                        g.Ba()
                    }
            d[0].bb = !0;
            d[1].bb = !0;
            a.bc();
            playSound("spectFlame")
        } else {
            for (var e = 0 === b ? 1 : 0, h = d[e].fa, n = d[e].u, w = [], e = 0; e < a.f.$; e++)
                for (f = 0; f < a.f.o; f++) X(a, f, e) && (g = a.j[e][f], g.fa === h && (1 === n && (g.u = 1), 2 === n && (g.u = 2), w.push([g.da, g.ba]), Fa(a.hb, d[b].x, d[b].y, g.x, g.y)));
            d[b].bb = !0;
            game.time.events.add(500, function() {
                for (var a = 0; a < w.length; a++) this.j[w[a][0]][w[a][1]].Ba();
                this.bc();
                playSound("spectFlame")
            }, a)
        }
    }

    function Ub(a, b) {
        return 2 === a.u && 2 === b.u ? 2 : 1 === a.u && 1 === b.u ? 1 : 2 !== a.u && 1 !== a.u || 2 !== b.u && 1 !== b.u ? !1 : !0
    }

    function Tb(a) {
        !1 !== a.Qb && (a.Qb = !1, !0 === a.f.Jd && (a.f.fb--, 0 > a.f.fb && (a.f.fb = 0), gameState.Se(a.f.fb)))
    }

    function jc(a) {
        null !== a.Pc && (R = a.Pc, a.Pc = null);
        if (null !== a.Oc) {
            var b = a.Oc;
            a.Oc = null;
            b.call(a)
        }
    }

    function Mb(a, b, d, e, f, g, h) {
        a.Pc = g;
        a.Oc = h;
        R = x.Id;
        g = !1;
        if (!1 !== X(a, e, f)) {
            var n = Z(a, b, d),
                w = Z(a, e, f);
            kc(n);
            kc(w);
            n.Qa(e, f);
            ub(a, b, d, w);
            w.Qa(b, d);
            ub(a, e, f, n);
            g ? (e = J(e, f), n.x = e[0], n.y = e[1], e = J(b, d), w.x = e[0], w.y = e[1]) : (game.tweens.removeFrom(n, !0), game.tweens.removeFrom(w, !0), e = J(e, f), n.cb = !0, game.add.tween(n.position).to({
                x: e[0],
                y: e[1]
            }, 140, Phaser.Easing.Linear.In, !0, 0).onComplete.add(function() {
                n.cb = !1;
                Qb(this) || jc(this)
            }, a), w.cb = !0, e = J(b, d), game.add.tween(w.position).to({
                x: e[0],
                y: e[1]
            }, 140, Phaser.Easing.Linear.In, !0, 0).onComplete.add(function() {
                w.cb = !1;
                Qb(this) || jc(this)
            }, a))
        }
    }

    function ub(a, b, d, e) {
        0 > d || 0 > b || d >= a.f.$ || b >= a.f.o || -1 !== a.j[d][b] && (a.j[d][b] = e)
    }

    function Z(a, b, d) {
        return 0 > d || 0 > b || d >= a.f.$ || b >= a.f.o || -1 === a.j[d][b] ? null : a.j[d][b]
    }

    function ic(a, b, d) {
        return 0 > d || 0 > b || d >= a.f.$ || b >= a.f.o || -1 === a.j[d][b] ? !1 : null === a.j[d][b] ? !0 : !1
    }

    function hc(a, b, d) {
        return 0 > d || 0 > b || d >= a.f.$ || b >= a.f.o ? !1 : -1 === a.j[d][b] ? !0 : !1
    }

    function X(a, b, d) {
        return 0 > d || 0 > b || d >= a.f.$ || b >= a.f.o || -1 === Z(a, b, d) || null === Z(a, b, d) ? !1 : !0
    }

    function Wb(a) {
        for (var b = 0, d = 0, e = 0; e < a.length; e++) a[e].pd > b && (b = a[e].pd, d = e);
        return d
    }

    function kc(a) {
        if (!1 !== lc(a) && 0 !== a.gb.length) {
            for (var b = 0; b < a.gb.length; b++) a.gb[b].stop();
            a.scale.set(1);
            b = J(a.ba, a.da);
            a.reset(b[0], b[1])
        }
    }

    function Rb(a) {
        for (var b = 0; b < a.f.$; b++)
            for (var d = 0; d < a.f.o; d++) X(a, d, b) && kc(a.j[b][d])
    }

    function lc(a) {
        if (void 0 === a.gb) return !1;
        for (var b = 0; b < a.gb.length; b++)
            if (!0 === a.gb[b].isRunning) return !0;
        return !1
    }

    function Ob(a, b) {
        if (!0 !== lc(b)) {
            var d = a(b),
                e = 0;
            void 0 !== d.delay && (e = d.delay);
            b.gb = [];
            void 0 !== d.scale && b.gb.push(game.add.tween(b.scale).to({
                x: d.scale.x,
                y: d.scale.y
            }, d.time, Phaser.Easing.Linear.None, !0, e));
            void 0 !== d.position && b.gb.push(game.add.tween(b).to({
                x: d.position.x,
                y: d.position.y
            }, d.time, Phaser.Easing.Linear.None, !0, e))
        }
    }

    function vb(a, b, d, e, f) {
        var g = gameState.gameScreen.p.qb.getFirstDead();
        if (null === g) {
            g = gameState.gameScreen.p.qb.create(0, 0);
            C(g, .5, .5);
            var h = game.make.sprite(0, 0, "gameBonusBmbSprs", 0);
            h.anchor.set(.5);
            g.ha = g.addChild(h);
            g.ha.kill();
            g.ha.animations.add("glw", [0, 1, 2, 3], 10, !0);
            g.ha.mf = function() {
                g.ha.frame = 0;
                g.ha.revive();
                g.ha.animations.play("glw")
            };
            g.ha.nf = function() {
                g.ha.frame = 2;
                g.ha.revive();
                g.ha.scale.set(1);
                game.add.tween(g.ha.scale).to({
                    x: [1.5, 1],
                    y: [1.5, 1]
                }, 400, Phaser.Easing.Linear.None, !0, 0, -1)
            };
            g.ha.of = function() {
                g.ha.loadTexture("gameEscapeBg");
                g.ha.frame = 1;
                g.ha.revive();
                g.ha.scale.set(1);
                game.add.tween(g.ha.scale).to({
                    x: [1.05, 1, .95, 1],
                    y: [.88, 1, 1.12, 1]
                }, 800, Phaser.Easing.Linear.None, !0, 0, -1)
            };
            h = game.make.sprite(0, 0, "gameCharactersImg", 0);
            C(h, .5, 1);
            g.za = g.addChild(h);
            h.animations.add("anim10", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 13, !0);
            h.animations.add("anim5", [0, 1, 2, 3, 4], 13, !0);
            g.za.inputEnabled = !0;
            g.za.events.onInputDown.add(function() {
                    var a = g;
                    Q === v.Bb && R === x.Cb && (this.Da = a, this.Ob = [game.input.x, game.input.y], gameState.gameScreen.p.qb.bringToTop(a), Ob(aboutScreen, a), Ob(na, this.j[this.sa[this.Hb][0][0]][this.sa[this.Hb][0][1]]))
                },
                a);
            g.za.events.onInputUp.add(function() {
                Q === v.Bb && R === x.Cb && (this.Da = null, this.Ob = [])
            }, a);
            g.Pb = function(a, b) {
                g.ha.animations.stop();
                g.animations.stop();
                ra(g);
                g.ha.kill();
                g.scale.set(1);
                g.ha.scale.set(1);
                void 0 === a || null === a ? a = g.fa : g.fa = a;
                void 0 === b || null === b || (g.u = b);
                1 === g.u ? (g.ha.loadTexture("gameBonusBmbSprs"), g.ha.mf(), playSound("sndBombCreate_" + B(1, 3))) : 2 === g.u ? (g.ha.loadTexture("gameBonusCrssSprs"), g.ha.nf(), playSound("sndBombCreate_" + B(1, 3))) : 4 === g.u && g.ha.of();
                g.za.loadTexture("gameCharactersImg");
                g.za.frame =
                    a;
                5 === g.u && (g.za.loadTexture("gameCharFall"), g.fa = null, g.za.frame = 0, g.za.animations.play("anim5"));
                3 === g.u && (playSound("spectCrt"), g.za.loadTexture("gameBonusSpectSprs"), g.fa = null, g.za.frame = 0, g.za.animations.play("anim10"));
                g.za.anchor.set(.5, 1);
                g.za.y = g.za.height / 2
            }.bind(a);
            g.u = 0;
            g.GameState = function(a, b) {
                var d = J(a, b);
                g.reset(d[0], d[1]);
                g.Qa(a, b)
            }.bind(a);
            g.Qa = function(a, b) {
                g.ba = a;
                g.da = b;
                g.pd = Date.now()
            }.bind(a);
            g.Ba = function() {
                if (!0 !== g.bb && 5 !== g.u && 3 !== g.u) {
                    g.bb = !0;
                    var a = g.da,
                        b = g.ba,
                        d = Na(this.hb);
                    d.GameState(b, a);
                    d.alpha = 1;
                    d.scale.set(1);
                    d.animations.play("explode!");
                    var a = g.worldPosition.x,
                        b = g.worldPosition.y,
                        d = g.fa,
                        e = gameState,
                        f = B(1, 3);
                    void 0 == f && (f = 1);
                    for (var h = 0; h < f && !(50 < e.xb.countLiving()); h++) {
                        var z = e.xb.getFirstDead();
                        null == z && (z = e.xb.create(0, 0, "gameCharactersParticl"), C(z, .5, .5), game.physics.enable(z, Phaser.Physics.ARCADE));
                        z.loadTexture("gameCharactersParticl");
                        z.frame = 3 * (6 - d) + B(0, 2);
                        z.reset(a, b);
                        z.angle = Math.floor(90 * Math.random()) - 45;
                        z.sb = Math.floor(200 * Math.random()) / 10 - 10;
                        z.angle = Math.floor(360 * Math.random());
                        z.allowGravity = !0;
                        z.body.gravity.y = 300 + Math.floor(800 * Math.random());
                        z.body.velocity.y = -(25 * Math.floor(15 * Math.random() + 1));
                        z.body.velocity.x = Math.floor(300 * Math.random()) - 150;
                        z.revive()
                    }
                    if (1 === g.u) {
                        a = g.da - 1;
                        b = g.ba - 1;
                        for (d = a; d < a + 3; d++)
                            for (e = b; e < b + 3; e++) X(this, e, d) && Z(this, e, d).Ba();
                        La(this.hb, g.da, g.ba);
                        a = gameState;
                        a.gc = 10;
                        a.Eb = .5;
                        null == a.Xa && (a.Xa = Phaser.Utils.extend(!1, {}, game.world.bounds));
                        game.world.setBounds(a.Xa.x - a.Eb, a.Xa.y - a.Eb, a.Xa.width + 2 * a.Eb, a.Xa.height + 2 * a.Eb)
                    } else if (2 === g.u) {
                        d = g.da;
                        for (e =
                            0; e < this.f.o; e++) X(this, e, d) && Z(this, e, d).Ba();
                        e = g.ba;
                        for (d = 0; d < this.f.$; d++) X(this, e, d) && Z(this, e, d).Ba();
                        a = this.hb;
                        b = g.da;
                        d = g.ba;
                        e = Ka(a);
                        e.angle = 0;
                        e.anchor.set(.5);
                        e.GameState(d, b);
                        game.add.tween(e.scale).to({
                            x: [4, 0],
                            y: [1.5, 0]
                        }, 225, Phaser.Easing.Linear.None, !0);
                        e.lifespan = 225;
                        e = Ka(a);
                        e.angle = 90;
                        e.anchor.set(.5);
                        e.GameState(d, b);
                        game.add.tween(e.scale).to({
                            x: [4, 0],
                            y: [1.5, 0]
                        }, 225, Phaser.Easing.Linear.None, !0);
                        e.lifespan = 225
                    }
                    4 === g.u && (this.f.ua += 1, ob(this.f.ua, this.f.Ka))
                }
            }.bind(a)
        }
        g.ha.animations.stop();
        g.ha.kill();
        g.ha.scale.set(1);
        g.scale.set(1);
        g.animations.stop();
        ra(g);
        g.gb = [];
        g.na = [];
        g.Pb(e, f);
        g.GameState(b, d);
        g.bb = !1;
        g.cb = !1;
        g.vc = !0;
        return g
    }

    function mc(a) {
        for (var b = function(a, b) {
                var d = 0;
                do d = A(this.f.Vb); while (2 <= a && null !== this.j[b][a - 2] && -1 !== this.j[b][a - 2] && this.j[b][a - 2].fa === d && null !== this.j[b][a - 1] && this.j[b][a - 1].fa === d || 2 <= b && null !== this.j[b - 2][a] && -1 !== this.j[b - 2][a] && this.j[b - 2][a].fa === d && null !== this.j[b - 1][a] && this.j[b - 1][a].fa === d);
                return d
            }.bind(a), d = 0; d < a.f.$; d++) {
            a.j[d] = [];
            for (var e = 0; e < a.f.o; e++) ub(a, e, d, vb(a, e, d, b(e, d), 0))
        }
    }

    function gb(a) {
        Q = v.Xc;
        ib(a);
        rb = 0;
        a.Ta = cb(a, a.k, "level") + 1;
        a.nb = a.q[a.k].scoreTotal;
        a.Xb = 0;
        sb(a.f, a.k, a.Ta);
        var b = a.f;
        switch (a.k) {
            case u.Db:
                b.Oa = 0;
                break;
            case u.ob:
                b.Oa = b.qa / 2;
                break;
            case u.ta:
                b.ua = 0;
                b.Oa = b.qa;
                break;
            case u.xa:
                b.ua = 0;
                b.Oa = b.qa;
                break;
            case u.Ea:
                b.Oa = b.qa
        }
        do Kb(), mc(a), yb(a); while (0 === a.sa.length);
        a.k === u.Ea && wb(a);
        a.k === u.ta && (xb(a), a.Ic());
        if (a.k === u.xa)
            for (b = 0; b < a.f.yd.length; b++) !0 === a.f.yd[b] && a.j[Math.floor(b / a.f.o)][b % a.f.o].Pb(null, 5);
        a.Qb = !1;
        a.rb = 1;
        a.Ca = 0;
        a.Za = 0;
        a.Ma = !1;
        a.Lb = !1;
        a.isPaused = !1;
        qb(V(a.f), !1);
        pb(a.Ta);
        gameState.gameScreen.wb = a.nb;
        a.q[a.k].levelRunning = !0;
        a.q[a.k].gameRunning = !0;
        ob(a.f.ua, a.f.Ka)
    }

    function hb() {
        var a = E;
        a.q[a.k].level = 0;
        a.q[a.k].scoreTotal = 0;
        gb(a)
    };
    MusicPlayer = function() {
        this.Ha = !0;
        this.mb = [];
        this.sounds = [];
        this.Fb = null
    };
    MusicPlayer.prototype = {
        constructor: MusicPlayer,
        create: function() {
            this.mb[0] = game.add.audio("musicMenu", 1, !0);
            this.mb[1] = game.add.audio("musicGame", 1, !0);
            for (var a = 0; a < D.length; a++) {
                var b = 1;
                void 0 !== D[a].Ra && (b = D[a].Ra);
                this.sounds[D[a].ia] = game.add.audio(D[a].ia, b)
            }
        }
    };

    function Za() {
        var a = musicPlayer;
        if (q) {
            if (a.Ha) {
                if (a.Ha = !1, q)
                    for (var b = 0; b < a.mb.length; b++) a.mb[b].stop()
            } else a.Ha = !0, P(a, a.Fb, !0);
            dc()
        }
    }

    function playSound(a) {
        var b = musicPlayer;
        if (q && b.Ha) 
			try {
				b.sounds[a].play()
			} catch (d) {}
    }

    function P(a, b, d) {
        if (q && (b != a.Fb || 1 == d) && (a.Fb = b, a.Ha)) {
            for (b = 0; b < a.mb.length; b++) a.mb[b].stop();
            a.mb[a.Fb].play()
        }
    };
    var Q, R, E = new Jb,
        gameState = new GameState,
        musicPlayer = new MusicPlayer;

    function nc() {}
    nc.prototype = {
        preload: function() {
            ka = ja = 66;
            gameState.preload();
            E.preload();
            game.input.maxPointers = 1
        },
        create: function() {
            musicPlayer.create();
            gameState.create();
            E.create();
            Q = v.Zc;
            R = x.Vc;
            changeScreen(gameState, gameState.mainMenu);
            P(musicPlayer, 0);
            game.onPause.add(oc);
            game.onResume.add(pc);
            this.Gc = [];
            this.lc = Date.now()
        },
        update: function() {
            game.time.physicsElapsed = (Date.now() - this.lc) / 1E3;
            E.update();
            gameState.update();
            this.lc = Date.now();
            if (50 > this.Gc.length) {
                var a = Math.floor(1E3 / (Date.now() - this.lc));
                60 < a && (a = 60);
                this.lc = Date.now();
                if (0 != a) {
                    this.Gc.push(a);
                    for (var a = this.Gc, b = 0, d = 0; d < a.length; d++) b += a[d];
                    pa = Math.floor(b / a.length)
                }
            }
        }
    };

    function dc() {
        try {
            localStorage.setItem("jwch", JSON.stringify({
                snd: musicPlayer.Ha,
                profs: E.q
            }))
        } catch (a) {}
    }

    function oc() {
        !0 === gameState.gameScreen.visible && !0 === gameState.gameScreen.pc.inputEnabled && gameState.pause();
        var a = musicPlayer;
        q && a.Ha && a.mb[a.Fb].pause()
    }

    function pc() {
        var a = musicPlayer;
        q && a.Ha && a.mb[a.Fb].resume()
    };
	
    var xa = 800,
        ya = 480;
    resolutionX = xa;
    var resolutionY = 950,
        r = navigator.userAgent || navigator.vendor || window.opera;
    r.match(/iPad/i) || r.match(/iPhone/i) || r.match(/iPod/i);
    var qc = Phaser.CANVAS;
    da && (qc = Phaser.AUTO);
    var rc = 0,
        sc = /MSIE (\d+\.\d+);/.test(navigator.userAgent),
        tc = !!navigator.userAgent.match(/Trident\/7.0/),
        uc = navigator.userAgent.indexOf("rv:11.0");
    sc && (rc = new Number(RegExp.$1)); - 1 != navigator.appVersion.indexOf("MSIE 10") && (rc = 10);
    tc && -1 != uc && (rc = 11);
    11 == rc && (qc = Phaser.CANVAS);
    

    function start_game() {
        game = new Phaser.Game(resolutionX, resolutionY, qc, "");
        game.state.add("StateSplash", ua);
        game.state.add("StatePreload", za);
        game.state.add("StateGame", nc);
		game.I = gameState;
    }
    window.start_game = start_game;
    document.documentElement.style.overflow = "hidden";
    document.body.scroll = "no";
    window.addEventListener("contextmenu", function(a) {
        a.preventDefault()
    });
    fa || (document.addEventListener("touchstart", function(a) {
        a.preventDefault()
    }), document.addEventListener("touchmove", function(a) {
        a.preventDefault()
    }));
	
    window.addEventListener("touchend", function() {
        if (null !== game) try {
            "running" !== game.sound.context.state && game.sound.context.resume()
        } catch (a) {}
    }, !1);
	/*
    window.GD_OPTIONS = {
        gameId: "monkey_creative",
        onEvent: function(a) {
            switch (a.name) {
                case "SDK_GAME_START":
                    game.sound.mute = !1;
                    break;
                case "SDK_GAME_PAUSE":
                    game.sound.mute = !0;
                    if (!1 === t) break;
                    if (!0 === E.Ma) break;
                    if (!0 === E.Lb) break;
                    E.isPaused = !0;
                    Q = v.Wc;
                    N(gameState, gameState.pauseScreen)
            }
        }
    };
	*/
}();