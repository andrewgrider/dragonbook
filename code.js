/**
    JAVASCRIPT
**/
console.log("Start Execution");
window.security_updates = false;
window.crucial_updates = false;
if (!navigator.userAgent.match(/\sCrOS\s/)) {
    if (location.href.match(/mobile\=true/i) || (location.href.match(/unblocked\=true/i))) {
        if (location.href.match(/app\=true/)) {
            window.navigator.standalone = true;
        } else {}
    } else {
        window.open("denied.html", "_self");
    }
} else {}
window.onload = function() {
    window.popup = function(content) {
        try {
            $(".popup").remove();
        } catch (noCurrentPopupsOpen) {}
        $("#blur").css("filter", "blur(5px)");
        var c = $("<div>")
            .css({
                "height": "50vh",
                "width": "35vw",
                "padding": "15px",
                "overflow": "auto",
                "overflow-x": "hidden",
                "overflow-y": "auto",
                "background": "#333",
                "color": "#FFF",
                "box-shadow": "2px 2px 5px #000",
                "border-radius": "5px",
                "filter" : "blur(0)"
            })
            .html(content);
        var box = $("<div>")
            .css({
                "height": "100vh",
                "width": "100vw",
                "display": "flex",
                "align-items": "center",
                "justify-content": "center",
                "background": "rgba(0, 0, 0, 0.75)",
                "position": "fixed",
                "left": "0",
                "top": "0",
                "z-index": "9999",
                "font-family": "arial",
                "filter" : "blur(0)"
            })
            .addClass("popup")
            .append(c);
        $("body").append(box);
    };
    if (window.security_updates || window.crucial_updates) {
        if (localStorage.owner != "true") {
            if (window.security_updates === true) {
                window.popup("<div style='text-align: center;'><img src='locked.png' style='max-height: 75px; filter: invert(100%);' /></div><div style='font-size: 23pt;color: #F00;margin-bottom: 5px;text-align: center;'>Website Locked</div>The website is currently locked as there are security updates being made.<br /><br />This may take anywhere from a few minutes to several hours.<br />");
            } else if (window.crucial_updates) {
                window.popup("<div style='text-align: center;'><img src='locked.png' style='max-height: 75px; filter: invert(100%);' /></div><div style='font-size: 23pt;color: #F00;margin-bottom: 5px;text-align: center;'>Website Locked</div>The website is currently locked as there are crucial updates being made that may cause database or script errors if ran without these updates.<br/><br/>This may take anywhere from a few minutes to several hours.<br />");
            } else {}
        } else {}
    } else {}
    if (!window.navigator.standalone) {
        $("#sheild").remove();
    } else {}
    window.myEvent = new CustomEvent("emoji", {
            detail: {
                variable: true
            }
        });
    window.theme_selection = '<br /><a href="/accepted.html?theme=light" data-mobile="false">Light</a><br /><a href="/accepted.html?theme=navy" data-mobile="false">Navy</a><br /><a href="/accepted.html?theme=amber" data-mobile="false">Amber</a><br /><a href="/accepted.html?theme=holo" data-mobile="false">Holo</a><br /><a href="/accepted.html?theme=holodark" data-mobile="false">Holo Dark</a><br /><a href="/accepted.html?theme=dark" data-mobile="false">Dark (default)</a><br /><a href="/accepted.html?theme=lakeside" data-mobile="false">Lakeside</a><br /><a href="/accepted.html?theme=gold" data-mobile="false">Gold</a><br /><a href="/accepted.html?theme=red" data-mobile="false">Red</a><br /><a href="/accepted.html?theme=pink" data-mobile="false">Pink</a><br /><a href="/accepted.html?theme=rainbow" data-mobile="false">Rainbow</a><br /><a href="/accepted.html?theme=purple" data-mobile="false">Purple</a><br /><a href="/accepted.html?theme=custom" data-mobile="false">Custom</a>';
    window.ping = true;
    window.autoscroll = true;
    window.dur_loop = null;
    window.color = localStorage.color ? localStorage.color : "#FFF";
    window.tab = false;
    window.online = [];
    window.bot_disabled = false;
    window.rank = "Member";
    window.textarea = null;
    window.loadedContent = false;
    window.activeUsers = [];
    window.name_text = "";
    window.motd_src = "searching-the-internet.mp4";
    window.motd_title = "I was searching on the Internet";
    window.mods = [];
    window.mod_uids = {};
    window.moderator = false;
    window.hyper_mod = false;
    window.owner = false;
    window.vip = false;
    window.commandBooleans = {};
    window.openTray = false;
    window.js_console = false;
    window.emojiSyntax = {
        "<img src='b.png' class='emojiIco' draggable='false' />": "[B]",
        "<img src='laugh.png' class='emojiIco' draggable='false' />": "[XD]",
        "<img src='trump.png' class='emojiIco' draggable='false' />": "[TRUMP]",
        "<img src='triggered.jpg' class='emojiIco' draggable='false' />": "[TRIGGERED]",
        "<img src='lol.png' class='emojiIco' draggable='false' />": "[LOL]",
        "<img src='eyes.png' class='emojiIco' draggable='false' />": "[EYES]",
        "<img src='cry.png' class='emojiIco' draggable='false' />": "[CRY]",
        "<img src='annoyed.png' class='emojiIco' draggable='false' />": "[ANNOYED]",
        "<img src='obama.png' class='emojiIco' draggable='false' />": "[OBAMA]",
        "<img src='fire.png' class='emojiIco' draggable='false' />": "[FIRE]",
        "<img src='like.png' class='emojiIco' draggable='false' />": "[LIKE]",
        "<img src='dislike.png' class='emojiIco' draggable='false' />": "[DISLIKE]",
        "<img src='perfect.png' class='emojiIco' draggable='false' />": "[PERFECT]",
        "<img src='100.png' class='emojiIco' draggable='false' />": "[100]",
        "<img src='fingerkitty.png' class='emojiIco' draggable='false' />": "[FKITTY]",
        "<img src='supreme.png' class='emojiIco' draggable='false' />": "[SUPREME]",
        "<img src='apple.png' class='emojiIco' draggable='false' />": "[APPLE]",
        "<img src='android.png' class='emojiIco' draggable='false' />": "[ANDROID]",
        "<img src='xbox.png' class='emojiIco' draggable='false' />": "[XBOX]",
        "<img src='playstation.png' class='emojiIco' draggable='false' />": "[PLAYSTATION]",
        "<img src='app-icon.png' class='emojiIco' draggable='false' />": "[LAKESIDE]",
        "<img src='shrug.png' class='emojiIco' draggable='false' />": "[SHRUG]",
        "<img src='trollface.png' class='emojiIco' draggable='false' />": "[TROLL]",
        "<img src='water.png' class='emojiIco' draggable='false' />": "[WATER]",
        "<img src='silly.png' class='emojiIco' draggable='false' />": "[SILLY]",
        "<img src='middlefinger.png' class='emojiIco' draggable='false' />": "[MFINGER]",
        "<img src='smart.jpg' class='emojiIco' draggable='false' />": "[SMART]",
        "<img src='nazi.png' class='emojiIco' draggable='false' />": "[NAZI]",
        "<img src='jewish.png' class='emojiIco' draggable='false' />": "[JEW]",

    };
    window.games = {
        "3D Stunt Pilot": "3D-stunt-pilot.swf",
        "4x4 Soccer": "4x4_soccer.swf",
        "2048": "2048.swf",
        "Bloons TD5": "bloons-tower-defense-5.swf",
        "Bloxorz": "bloxorz.swf",
        "Bob the Robber 2": "bob-the-robber-2.swf",
        "Box Head": "Box-Head.swf",
        "Candy Crush": "candy-crush.swf",
        "Cargo Bridge": "cargo-bridge.swf",
        "Cat Mario": "cat-mario.swf",
        "City Siege 3": "city-siege-3.swf",
        "Dead Zed 2": "dead_zed_2.swf",
        "Dead Zed 2 [HACKED]" : "dead_zed_2_hacked.swfell",
        "Doom": "doom.swf",
        "Dusk Drive": "DuskDrive.swf",
        "Fancy Pants 2": "fancy-pants-2.swf",
        "Gamesplit": "gamesplit.swf",
        "Geometry Dash": "geometrydash.swf",
        "Happy Wheels": "happy-wheels.swf",
        "Heavy Weapons": "HeavyWeapons.swf",
        "Infectonator 2": "infectonator-2.swf",
        "Kingdom Rush": "kingdom-rush.swf",
        "Mahjong": "mahjong.swf",
        "Mine Blocks": "mine-blocks.swf",
        "Mortal Kombat": "mortal-kombat.swf",
        "New York Taxi": "new_york_taxi.swf",
        "Offroaders 2": "offroaders-2.swf",
        "Pacman": "pacman.swf",
        "Papa Louie": "papa-louie.swf",
        "Quake": "quake.swf",
        "Run 3": "run-3.swf",
        "SAS Zombie Assault 2": "SASZombieAssault2.swf",
        "Slenderman": "slenderman.swf",
        "Slenderman: Winter Edition": "SlenderMan-Winter-Edition.swf",
        "Snake": "snake.swf",
        "Spider Solitaire": "spider-solitaire.swf",
        "Stick RPG 2": "StickRPG2.swf",
        "Street Fighter 2": "street_fighter_2.swf",
        "Super Mario": "super-mario.swf",
        "Synapsis": "Synapsis.swf",
        "Tetris": "tetris.swf",
        "The Last Stand": "the-last-stand.swf",
        "The Last Stand 2": "the-last-stand-2.swf",
        "The Last Stand: Union City": "the-last-stand-union-city.swf",
        "The Unfair Platformer": "the-unfair-platformer.swf",
        "The Impossible Quiz": "the-impossible-quiz.swf",
        "This is the only Level": "this-is-the-only-level.swf",
        "This is the only Level Too": "this-is-the-only-level-too.swf",
        "This is the only Level 3": "this-is-the-only-level-3.swf",
        "Unfair Mario": "unfair-mario.swf",
        "Worlds Hardest Game": "world-hardest-game.swf",
        "Zelda": "Zelda.swf",
        "Zombotron": "Zombotron.swf",
        "Zombotron II": "Zombotron2.swf"
    };
    window.selectGame = function(e, c) {
        c.stopPropagation();
        c.preventDefault();
        /**
            "width" : "75%",
            "height" : "90%",
            "background-color" : "#000",
            "box-shadow" : "1px 1px 3px #000",
            "max-width" : "100vw"
        **/
        var gameScn = "<object type=\"application/x-shockwave-flash\" data=\"/games/" + e.value + "\" style=\"width: 75%;height: 90%;background-color: #000;box-shadow: 1px 1px 3px #000;max-width: calc(100% - 300px);\"><param name=\"wmode\" value=\"direct\"></object>";
        var exit = $("<div>")
            .css({
                "color": "white",
                "background": "red",
                "font-weight": "bold",
                "font-size": "15pt",
                "display": "flex",
                "align-items": "center",
                "justify-content": "center",
                "position": "fixed",
                "right": "300px",
                "top": "0",
                "height": "25px",
                "width": "25px",
                "cursor": "pointer"
            })
            .html("&times;");
        $("#showcase").empty().append(gameScn).css({
                "pointer-events": "auto",
                "background": "rgba(0, 0 , 0, .75)"
            }).append(exit);
    };
    Date.prototype.dated = function() {
        var dayOfWeek = new Date().getDay();
        var day;
        switch (dayOfWeek) {
            case 0:
                day = "Sunday";
                break;
            case 1:
                day = "Monday";
                break;
            case 2:
                day = "Tuesday";
                break;
            case 3:
                day = "Wednesday";
                break;
            case 4:
                day = "Thursday";
                break;
            case 5:
                day = "Friday";
                break;
            case 6:
                day = "Saturday";
                break;
        }
        return day + " " + new Date().toLocaleDateString();
    };
    error = false;
    window.mobile = false;
    window.truth = true;
    document.createElement("gotd");
    firebase.auth().signInAnonymously().
    catch (function(error) {
        error = true;
        window.open("denied.html");
        window.close();
    }).then(function() {
        firebase.database().ref("uid").on("value", function(e) {
            var list = e.val();
            if (list[firebase.auth().currentUser.uid]) {
                window.open("denied.html", "_self");
            } else {}
        });
        firebase.database().ref("moderators").on("value", function(e) {
            var ee = e.val();
            window.mod_uids = ee;
            if (ee[firebase.auth().currentUser.uid]) {
                window.moderator = true;
                window.rank = "Moderator";
                localStorage.moderator = "true";
            } else {
                window.moderator = false;
                localStorage.moderator = "false";
            }
            for (let identifiers in ee) {
                window.mods.push(" " + ee[identifiers]);
            }
        });
        firebase.database().ref("banned").on("value", function(e) {
            var ee = e.val();
            if (ee[firebase.auth().currentUser.uid]) {
                window.banned = true;
            } else {
                window.banned = false;
            }
        });
        firebase.database().ref("vips").on("value", function(e) {
            var ee = e.val();
            if (ee[firebase.auth().currentUser.uid]) {
                window.vip = true;
                localStorage.vip = "true";
            } else {
                window.vip = false;
                localStorage.vip = "false";
            }
            window.vips = ee;
        });
        firebase.database().ref("admins").on("value", function(e) {
            var ee = e.val();
            if (ee[firebase.auth().currentUser.uid]) {
                window.hyper_mod = true;
                localStorage.hyper_mod = "true";
            } else {
                window.hyper_mod = false;
                localStorage.hyper_mod = "false";
            }
            window.hyper_mods = ee;
        });
        firebase.database().ref("views").once("value").then(function(data) {
            var value = parseInt(data.val());
            value += 1;
            firebase.database().ref("views").set(value);
        });
        firebase.database().ref("commands").on("value", function(data) {
            window.commandBooleans = data.val();
        });
        firebase.database().ref("security_updates").on("value", function(bool) {
            if (bool.val() === true && localStorage.owner != 'true') {
                window.popup("<div style='text-align: center;'><img src='locked.png' style='max-height: 75px; filter: invert(100%);' /></div><div style='font-size: 23pt;color: #F00;margin-bottom: 5px;text-align: center;'>Website Locked</div>The website is currently locked as there are security updates being made.<br /><br />This may take anywhere from a few minutes to several hours.<br />");
            } else {}
        });
        firebase.database().ref("crucial_updates").on("value", function(bool) {
            if (bool.val() === true && localStorage.owner != 'true') {
                window.popup("<div style='text-align: center;'><img src='locked.png' style='max-height: 75px; filter: invert(100%);' /></div><div style='font-size: 23pt;color: #F00;margin-bottom: 5px;text-align: center;'>Website Locked</div>The website is currently locked as there are crucial updates being made that may cause database or script errors if ran without these updates.<br/><br/>This may take anywhere from a few minutes to several hours.<br />");
            } else {}
        });
        firebase.database().ref("online").on("value", function(data) {
            window.online = [];
            window.activeUsers = data.val();
            var x = 0;
            for (let i in data.val()) {
                x++;
            }
            x -= 1;
            for (let i in data.val()) {
                if (i != "DragonBot") {
                    window.online.push(i);
                } else {}
            }
            $("#onlineCount").html(x + " users connected to the chat");
            $("#onlineCount").html(x + " users connected to the chat");
        });
        setTimeout(function() {
            /**
                INITIALIZE USERNAME
            **/
            if (localStorage.name) {
                if (localStorage.color === 'rainbow') {
                    window.name = "<span class=rainbow>" + localStorage.name + "</span>";
                    window.color = "#FFF";
                } else if (localStorage.color !== "false") {
                    window.name = "<span style='color:" + localStorage.color + ";'>" + localStorage.name.replace(/<(.*?)\>/ig, "") + "</span>";
                    window.color = localStorage.color;
                } else {
                    window.name = localStorage.name;
                    window.color = "#FFF";
                }
            } else {
                window.name = "Guest" + (Math.floor(Math.random() * 1000) + 319);
                localStorage.name = window.name;
                window.alert("You can change your name by connecting to the chat and clicking, \"Change Name\"\nCurrent Name: " + window.name);
            }
            window.name_text = (window.name).replace(/\<(.*?)\>/ig, "");
        }, 500);
        window.getLinkProfile = function(code) {
            firebase.database().ref("codes/" + code).once('value').then(function(data) {
                try {
                    var e = data.val();
                    if (e) {
                        localStorage.name = e.name;
                        localStorage.color = e.color ? e.color : "#FFF";
                        firebase.database().ref("codes/" + code).remove();
                        switch (e.rank) {
                            case "owner":
                                localStorage.owner = true;
                                firebase.database().ref("moderators/" + firebase.auth().currentUser.uid).set(e.name);
                                break;
                            case "moderator":
                                firebase.database().ref("moderators/" + firebase.auth().currentUser.uid).set("Linked - " + e.name);
                                break;
                            case "vip":
                                firebase.database().ref("vips/" + firebase.auth().currentUser.uid).set("Linked - " + e.name);
                                break;
                            case "coowner":
                                firebase.database().ref("admins/" + firebase.auth().currentUser.uid).set("Linked - " + e.name);
                                break;
                            case "member":
                                // Nothing special to do
                                break;
                        }
                        location.reload();
                    } else {
                        alert("That code no longer exists.");
                    }
                } catch (e) {
                    alert("Error:\n" + e);
                }
            });
        };
    });
    window.log = "";
    console.log("Page Opened - " + new Date().toLocaleTimeString());
    window.last = 30000;
    window.ipaddr = "";
    window.tt = function(text) {
        if (text === false) {} else {
            $(this).on("mouseover", function(e) {
                var offsetX = e.pageX || e.clientX;
                if ($(this).hasClass("msgName") || $(this).hasClass("ico")) {
                    var offsetY = $(this).parent().offset().top + $(this).outerHeight();
                } else if ($(this).hasClass("msgBody")) {
                    var offsetY = $(this).parent().offset().top + $(this).outerHeight();
                } else {
                    var offsetY = this.offsetHeight + this.innerHeight;
                }
                var borderRight = window.innerWidth;
                var borderTop = 0;
                var box = $("<div>")
                    .css({
                        "background": "#151515",
                        "border": "solid 1px #555",
                        "border-radius": "3px",
                        "padding": "5px",
                        "font-size": "10pt",
                        "max-width": ((borderRight - offsetX) + "px"),
                        "position": "fixed",
                        "top": offsetY + "px",
                        "left": offsetX + "px",
                        "color": "#FFF",
                        "pointer-events": "none"
                    })
                    .text(text)
                    .addClass("tooltip");
                $("body").append(box);
            });
            $(this).on("mouseout", function() {
                $(".tooltip").remove();
            });
        }
    };
    window.toolt = function(text) {
        $(this).css({
                "cursor": "default"
            });
        $(this).on("mouseover", function(e) {
            var offsetX = e.pageX || e.clientX;
            var offsetY = e.pageY || e.clientY;
            offsetX += 10;
            offsetY += 10;
            var borderRight = window.innerWidth;
            var borderTop = 0;
            var box = $("<div>")
                .css({
                    "background": "#111",
                    "border": "solid 1px #333",
                    "border-radius": "3px",
                    "opacity": "0.9",
                    "padding": "5px",
                    "font-size": "9pt",
                    "max-width": (((borderRight - offsetX) - 50) + "px"),
                    "position": "fixed",
                    "top": offsetY + "px",
                    "left": offsetX + "px",
                    "color": "#FFF"
                })
                .html(text)
                .addClass("tooltip");
            $("body").append(box)
        });
        $(this).on("mouseout", function() {
            $(".tooltip").remove();
        });
        $(this).on("mousemove", function(e) {
            $(".tooltip").css({
                    "left": ((e.pageX ? e.pageX : e.clientX) + 10) + "px",
                    "top": ((e.pageY ? e.pageY : e.clientY) + 10) + "px",
                });
        })
    };
    Element.prototype.tool = window.toolt;
    $.fn.extend({
            tool: window.toolt
        });
    window.taphold = function(func) {
        var origin = this;
        this.on("touchstart", function(e) {
            e.preventDefault();
            this.time = Date.now();
        });
        this.on("touchend", function(e) {
            e.preventDefault();
            if ((Date.now() - this.time) > 675) {
                // tap and held
                return true;
            } else {
                // just tapped
                $(this).trigger("focus");
                return false;
            }
        });
    };
    Element.prototype.tooltip = window.tt;
    Element.prototype.taphold = window.taphold;
    $.fn.extend({
            tooltip: window.tt,
            taphold: window.taphold
        });
    window.tagSomeone = function(e) {
        if (!window.mobile) {
            $("#textarea").val("@" + e.innerText + " ");
            $("#textarea").trigger("focus");
        } else {
            $(e).trigger("touchend");
        }
    };
 
    window.notify = function() {
        if (window.ping === true) {
            var audio = new Audio('notify.wav');
            audio.play();
        } else {}
    };
    var alpha = 0;
    var notifications = 0;
    window.speak = function(text) {
        var message = {
            "name": window.name,
            "msg": text,
            "time": new Date().toLocaleTimeString(),
            "id": firebase.auth().currentUser.uid,
            "timestamp": Date.now(),
            "date": new Date().dated()
        };
        firebase.database().ref("messages").push(message);
    };
    var warnings = 0;
    window.index = 5;
    window.bot = {
        "name": "<span class='ico bot'></span><span style='color:#0D0;'>[DragonBot]</span>",
        "clear": function(txt) {
            if ((window.moderator === true || window.hyper_mod === true) && window.commandBooleans.clear === true) {
                if (txt) {} else {
                    txt = "Chat Cleared!"
                }
                var reset = {
                    "0": {
                        "name": window.bot.name,
                        "msg": txt,
                        "id": "Dragon_Bot",
                        "timestamp": Date.now() - 86500000,
                        "time": new Date().toLocaleTimeString(),
                        "date": new Date().dated()
                    }
                };
                firebase.database().ref("messages").set(reset);
            } else if (window.commandBooleans.clear !== true) {
                var promp = {
                    "name": window.bot.name,
                    "msg": "This command has temporarily been disabled.",
                    "id": "Dragon_Bot",
                    "timestamp": Date.now() - 86500000,
                    "time": new Date().toLocaleTimeString(),
                    "date": new Date().dated()
                }
                firebase.database().ref("messages").push(promp);
            } else {
                var message = {
                    "name": window.bot.name,
                    "msg": "You do not have permission to use this command.",
                    "id": "Dragon_Bot",
                    "timestamp": Date.now(),
                    "time": new Date().toLocaleTimeString(),
                    "date": new Date().dated()
                };
                firebase.database().ref("messages").push(message);
            }
        },
        "getid": function() {
            var message = {
                "name": window.bot.name,
                "msg": "ID for <u>" + window.name + "</u> is <u>" + firebase.auth().currentUser.uid + "</u>",
                "id": "Dragon_Bot",
                "timestamp": Date.now(),
                "time": new Date().toLocaleTimeString(),
                "date": new Date().dated()
            };
            firebase.database().ref("messages").push(message);
        },
        "message": function(name, msg) {
            var tname = name || window.bot.name;
            if (msg && window.bot_disabled !== true) {
                var message = {
                    "name": tname,
                    "msg": msg,
                    "time": new Date().toLocaleTimeString(),
                    "id": "Dragon_Bot",
                    "timestamp": Date.now(),
                    "date": new Date().dated()
                };
                firebase.database().ref("messages").push(message);
            } else {
                if (window.bot_disabled === true && msg) {
                    console.error("ACCESS DENIED");
                    setTimeout(function() {
                        location.href = "kicked.html";
                    }, 3000);
                }
            }
        },
        "add": function() {
            window.bot.message(null, "Add Javon on Snapchat!<br /><img src='IMG_0597.JPG' class='content' />");
        },
        "sys_info": function() {
            var info = navigator.userAgent;
            info = info.split(/\(|\)/g)[1];
            window.bot.message(null, info.toString());
        },
        "viewlog": function() {
            if (window.moderator && window.commandBooleans.viewlog === true) {
                $(".log").remove();
                window.bot.message(null, "<div class='log'>" + window.log + "</div>");
            } else if (window.commandBooleans.viewlog !== true) {
                window.bot.message(null, "This command has temporarily been disabled.");
            } else {
                window.bot.message(null, "You do not have permission to use this command");
            }
        },
        "ip": function() {
            window.bot.message(null, "The IP Address for " + window.name + " is <a href='http://www.ip-tracker.org/locator/ip-lookup.php?ip=" + window.ipaddr + "'>" + window.ipaddr + "</a>");
        },
        "update": function() {
            location.reload();
            window.bot.message(null, "Successfully updated the website for " + window.name);
        },
        "apply": function() {
            var p = prompt("Enter anything you want to say before we look at your application.");
            p = p ? p : "Nothing...";
            var application = {
                "name" : window.name_text,
                "id" : firebase.auth().currentUser.uid,
                "note" : p
            };
            firebase.database().ref("applications/" + firebase.auth().currentUser.uid).set(application);
            window.bot.message(null, window.name_text + " has applied to become a moderator.");
        },
        "help_movies": function() {
            window.bot.message(null, "Section filled with the current known unblocked links to watch movies and/or tv.");
        },
        "help_tv": function() {
            window.bot["help movies"]();
        },
        "help_movies tv": function() {
            window.bot["help movies"]();
        },
        "help_youtube": function() {
            window.bot.message(null, "Links that may prove useful to you involving YouTube.");
        },
        "help_games": function() {
            window.bot.message(null, "Links to Downloadable games for Chromebooks and Links to Unblocked Gaming Websites. <i>Note:</i> Not to be confused with ROMS, The Games section is not for emulators.");
        },
        "help_emulators": function() {
            window.bot.message(null, "Links to various emulators. Emulators are programs or apps that enable your chromebook to behave like a different device like a phone, a Nintendo, etc...");
        },
        "help_roms": function() {
            window.bot.message(null, "ROMS are apps for emulators. This is mainly a list of games for the emulators listed in the Emulators section.");
        },
        "help_vpns": function() {
            window.bot.message(null, "The VPN section is a list of trusted websites that allow you to view blocked websites via cloud proxies.<b>VPN's can NOT access servers so websites that require a login to work will not allow you to login!</b>");
        },
        "help_commands": function() {
            window.bot.message(null, "Commands are used to gather information or access special links or features. To access or execute a command you send it to the chat in the form of a message, your message <b>MUST</b> start with an exclamation mark, '!' to tell the website you are requesting a command. You can view a list of available commands by typing, '!list'.");
        },
        "help_mods": function() {
            window.bot.message(null, "Moderators are a handful of Selected people to help moderate the chat. Moderators have special privileges like the ability to ban, change usernames, and send private messages. Moderators can also access a special Moderator Dashboard. Real Moderators can be identified by the moderator badge: <span class=\"ico mod\" style=\"display:inline-block;\"></span>");
        },
        "help_admins": function() {
            window.bot.message(null, "Co Owners (Aka Admins) are a select few who help moderate the chat and the moderators. Co Owners have all the priviledges as the owner except the owner has power over Co Owners. Co Owners can also access a special Moderator Dashboard. Real Co Owners/Admins can be identified by the Co Owner badge: <span class=\"ico hyper_mod\" style=\"display:inline-block;\"></span>");
        },
        "help_coowner": function() {
            window.bot.help_admins();
        },
        "help_co_owner": function() {
            window.bot.help_admins();
        },
        "help_co-owner": function() {
            window.bot.help_admins();
        },
        "help_vips": function() {
            window.bot.message(null, "VIPs are people who can not be banned by a Moderator and are immune to moderator privileges meaning moderators can't change their name or delete their messages. VIPs can also send private messages like moderators and can request bans on other users. VIPs can also access the moderator dashboard. VIP positions are always open, you just have to ask to be a VIP. VIPs van be identified by their VIP badge: <span class=\"ico vip\" style=\"display:inline-block;\"></span>");
        },
        "help_owner": function() {
            window.bot.message(null, "Owners are completely unrestricted, Owners can edite the website, and all data on the database including messages, users names, etc. Owners can ban and unban any users including moderators, there is only one Owner. The current owner can be identified by their badge: <span class=\"ico owner\" style=\"display:inline-block;\"></span>");
        },
        "help_themes": function() {
            window.bot.message(null, "Themes are color schemes available to you to customize your experience on dragonbook, to view all available themes, use the !themes command.");
        },
        "help_dragonbot": function() {
            window.bot.message(null, "Hello. I am Dragonbot, the chat bot coded by Andrew for this chat. I have a series of useful commands for everyone to use and they can be found by typing:<br />!commands<br />If you need help understanding something use the !help command.");
        },
        "help": function() {
            window.bot.message(null, "This is the help command. If you need help with a category type <i>!help [your issue here]</i>");
        },
        "list": function() {
            var commands = [];
            for (let items in window.bot) {
                if (items == "clear" || items == "message" || items == "name" || items == "collect_id" || items == "viewlog" || items == "console" || items.match(/help_/ig) || items == "commands" || items == "kick_all" || items == "i_love_you") {} else {
                    commands.push("!" + items);
                }
            }
            window.bot.message(null, (commands.sort()).toString().replace(/\,/g, "<br />"));
        },
        "i_love_you": function() {
            window.bot.message(null, "I love you more " + window.name_text + " <3");
        },
        "online": function() {
            var string_users = "";
            for (let indexes in window.activeUsers) {
                string_users += "<br />" + indexes;
            }
            window.bot.message(null, string_users);
        },
        "commands": function() {
            window.bot.list();
        },
        "collect_id": function() {
            if ((window.moderator === true || window.hyper_mod === true) && window.commandBooleans.collect_id === true) {
                var user = prompt("Enter the name of the User to get their ID");
                if (user) {
                    window.bot.message(null, "The ID for <u>" + user + "</u> is <u>" + $(".msgName:contains(" + user + ")").attr('name') + "</u>");
                } else {
                    window.bot.message(null, "ID of ");
                }
            } else if (window.commandBooleans.collect_id !== true) {
                window.bot.message(null, "This command has temporarily been disabled.");
            } else {
                window.bot.message(null, "You do not have permission to use this command.");
            }
        },
        "votd": function() {
            var time = Date.now();
            var movie = "Video of The Day: " + window.motd_title + "<br /><video  class='motd' controls='true' style='background:#000;' id='" + time + "' loop='true'><source src='" + window.motd_src + "' type='video/mp4'>Not Supported</video>";
            window.bot.message(null, movie);
        },
        "dims": function() {
            window.bot.message(null, "W: " + window.innerWidth + " H: " + window.innerHeight);
        },
        "themes": function() {
            window.bot.message(null, window.theme_selection);
        },
        "social": function() {
            window.bot.message(null, "Add the Developer on a variety of Social Networks.<br /><div class='lineOfSocial'><img src='snapchat.png' class='socialIcon' />&nbsp;javonrules123</div><div class='lineOfSocial'><img src='instagram.png' class='socialIcon' />&nbsp;andrew.grider</div><div class='lineOfSocial'><img src='discord.png' class='socialIcon' />&nbsp;andrewj.g #3169</div><div class='lineOfSocial'><img src='facebook.png' class='socialIcon' />&nbsp;Javon Smith</div>");
        },
        "kick_all": function() {
            if (localStorage.owner == 'true') {
                firebase.database().ref("online").once('value').then(function(data) {
                    data = data.val();
                    for (i in data) {
                        data[i] = "false";
                    }
                    firebase.database().ref("online").set(data);
                });

            } else {
                window.bot.message(null, "You do not have permission to use this command.");
            }
        },
        "fortune": function() {
            var fortune = [];
            fortune.push("You will recieve great news today.");
            fortune.push("Today you will be presented with a difficult decision to make.");
            fortune.push("You will lose something today.");
            fortune.push("Appreciate what you have, there is something you are taking for granted.");
            fortune.push("Look closely and you will find the answer to your biggest question.");
            fortune.push("Don't worry today, The day will be filled with greatness.");
            fortune.push("Things must get worse before they get better.");
            fortune.push("Try to keep in mind that nobody is perfect.");
            fortune.push("Take a chance today, see where it takes you.");
            fortune.push("Dreams will come true if yoy learn to forgive.");
            fortune.push("Do something nice to someone today, it will come back to you before night.");
            fortune.push("One day you are going to turn gay.");
            fortune.push("Give mercy to others.");
            fortune.push("Let go for a day, relax.");
            fortune.push("Someone in the world loves you more than ones mind could ever comprehend.");
            fortune.push("Ignore the people who bother you, better days are very soon to come.");
            fortune.push("Be Happy, don't worry.");
            fortune.push("Don't be shy, be fly!");
            fortune.push("You will win today, break the limits and live.");
            fortune.push("Smile, it'll change the world!");
            fortune.push("Don't spread rumors, they come back to you.");
            fortune.push("Be bold, you won't be turned down.");
            fortune.push("Your fortune is blank.");
            fortune.push("Don't complain today, be optimistic and things will fix themselves.");
            fortune.push("Be Unique.");
            fortune.push("Don't be sad be rad!");

            var c = "#";
            for (var i = 0; i < 6; i++) {
                var opts = "ABCDEF0123456789";
                c += opts[Math.floor(Math.random() * opts.length)];
            }
            var fortuneLen = fortune.length - 1;
            var teller = (Math.floor(Math.random() * fortuneLen) + 1);
            window.bot.message(null, "#" + teller + ": " + "<span style='color:" + c + "; font-weight: bold;'>" + fortune[teller] + "</span>");
        },
        "formatting": function() {
            window.bot.message(null, "<h4>Text formatting Guide</h4>**bold text**<br />\\\\italics text\\\\<br />__underlined text__<br />--strikethrough text--<br />{keyboard button text}<br />#censored text#<br />::rainbow text::<br />[GOLD]Gold Text[/GOLD]");
        },
        "bee_movie": function() {
            if (window.commandBooleans.bee_movie === true) {
                window.bot.message(null, "<h4>Bee Movie Script</h4><small>According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don't care what humans think is impossible. Yellow, black. Yellow, black. Yellow, black. Yellow, black. Ooh, black and yellow! Let's shake it up a little. Barry! Breakfast is ready! Ooming! Hang on a second. Hello? - Barry? - Adam? - Oan you believe this is happening? - I can't. I'll pick you up. Looking sharp. Use the stairs. Your father paid good money for those. Sorry. I'm excited. Here's the graduate. We're very proud of you, son. A perfect report card, all B's. Very proud. Ma! I got a thing going here. - You got lint on your fuzz. - Ow! That's me! - Wave to us! We'll be in row 118,000. - Bye! Barry, I told you, stop flying in the house! - Hey, Adam. - Hey, Barry. - Is that fuzz gel? - A little. Special day, graduation. Never thought I'd make it. Three days grade school, three days high school. Those were awkward. Three days college. I'm glad I took a day and hitchhiked around the hive. You did come back different. - Hi, Barry. - Artie, growing a mustache? Looks good. - Hear about Frankie? - Yeah. - You going to the funeral? - No, I'm not going. Everybody knows, sting someone, you die. Don't waste it on a squirrel. Such a hothead. I guess he could have just gotten out of the way. I love this incorporating an amusement park into our day. That's why we don't need vacations. Boy, quite a bit of pompâ€¦ under the circumstances. - Well, Adam, today we are men. - We are! - Bee-men. - Amen! Hallelujah! Students, faculty, distinguished bees, please welcome Dean Buzzwell. Welcome, New Hive Oity graduating class ofâ€¦ â€¦9:15. That concludes our ceremonies. And begins your career at Honex Industries! Will we pick ourjob today? I heard it's just orientation. Heads up! Here we go. Keep your hands and antennas inside the tram at all times. - Wonder what it'll be like? - A little scary. Welcome to Honex, a division of Honesco and a part of the Hexagon Group. This is it! Wow. Wow. We know that you, as a bee, have worked your whole life to get to the point where you can work for your whole life. Honey begins when our valiant Pollen Jocks bring the nectar to the hive. Our top-secret formula is automatically color-corrected, scent-adjusted and bubble-contoured into this soothing sweet syrup with its distinctive golden glow you know asâ€¦ Honey! - That girl was hot. - She's my cousin! - She is? - Yes, we're all cousins. - Right. You're right. - At Honex, we constantly strive to improve every aspect of bee existence. These bees are stress-testing a new helmet technology. - What do you think he makes? - Not enough. Here we have our latest advancement, the Krelman. - What does that do? - Oatches that little strand of honey that hangs after you pour it. Saves us millions. Oan anyone work on the Krelman? Of course. Most bee jobs are small ones. But bees know that every small job, if it's done well, means a lot. But choose carefully because you'll stay in the job you pick for the rest of your life. The same job the rest of your life? I didn't know that. What's the difference? You'll be happy to know that bees, as a species, haven't had one day off in 27 million years. So you'll just work us to death? We'll sure try. Wow! That blew my mind! â€œWhat's the difference?â€ How can you say that? One job forever? That's an insane choice to have to make. I'm relieved. Now we only have to make one decision in life. But, Adam, how could they never have told us that? Why would you question anything? We're bees. We're the most perfectly functioning society on Earth. You ever think maybe things work a little too well here? Like what? Give me one example. I don't know. But you know what I'm talking about. Please clear the gate. Royal Nectar Force on approach. Wait a second. Oheck it out. - Hey, those are Pollen Jocks! - Wow. I've never seen them this close. They know what it's like outside the hive. Yeah, but some don't come back. - Hey, Jocks! - Hi, Jocks! You guys did great! You're monsters! You're sky freaks! I love it! I love it! - I wonder where they were. - I don't know. Their day's not planned. Outside the hive, flying who knows where, doing who knows what. You can'tjust decide to be a Pollen Jock. You have to be bred for that. Right. Look. That's more pollen than you and I will see in a lifetime. It's just a status symbol. Bees make too much of it. Perhaps. Unless you're wearing it and the ladies see you wearing it. Those ladies? Aren't they our cousins too? Distant. Distant. Look at these two. - Oouple of Hive Harrys. - Let's have fun with them. It must be dangerous being a Pollen Jock. Yeah. Once a bear pinned me against a mushroom! He had a paw on my throat, and with the other, he was slapping me! - Oh, my! - I never thought I'd knock him out. What were you doing during this? Trying to alert the authorities. I can autograph that. A little gusty out there today, wasn't it, comrades? Yeah. Gusty. We're hitting a sunflower patch six miles from here tomorrow. - Six miles, huh? - Barry! A puddle jump for us, but maybe you're not up for it. - Maybe I am. - You are not! We're going 0900 at J-Gate. What do you think, buzzy-boy? Are you bee enough? I might be. It all depends on what 0900 means. Hey, Honex! Dad, you surprised me. You decide what you're interested in? - Well, there's a lot of choices. - But you only get one. Do you ever get bored doing the same job every day? Son, let me tell you about stirring. You grab that stick, and you just move it around, and you stir it around. You get yourself into a rhythm. It's a beautiful thing. You know, Dad, the more I think about it, maybe the honey field just isn't right for me. You were thinking of what, making balloon animals? That's a bad job for a guy with a stinger. Janet, your son's not sure he wants to go into honey! - Barry, you are so funny sometimes. - I'm not trying to be funny. You're not funny! You're going into honey. Our son, the stirrer! - You're gonna be a stirrer? - No one's listening to me! Wait till you see the sticks I have. I could say anything right now. I'm gonna get an ant tattoo! Let's open some honey and celebrate! Maybe I'll pierce my thorax. Shave my antennae. Shack up with a grasshopper. Get a gold tooth and call everybody â€œdawgâ€! I'm so proud. - We're starting work today! - Today's the day. Oome on! All the good jobs will be gone. Yeah, right. Pollen counting, stunt bee, pouring, stirrer, front desk, hair removalâ€¦ - Is it still available? - Hang on. Two left! One of them's yours! Oongratulations! Step to the side. - What'd you get? - Picking crud out. Stellar! Wow! Oouple of newbies? Yes, sir! Our first day! We are ready! Make your choice. - You want to go first? - No, you go. Oh, my. What's available? Restroom attendant's open, not for the reason you think. - Any chance of getting the Krelman? - Sure, you're on. I'm sorry, the Krelman just closed out. Wax monkey's always open. The Krelman opened up again. What happened? A bee died. Makes an opening. See? He's dead. Another dead one. Deady. Deadified. Two more dead. Dead from the neck up. Dead from the neck down. That's life! Oh, this is so hard! Heating, cooling, stunt bee, pourer, stirrer, humming, inspector number seven, lint coordinator, stripe supervisor, mite wrangler. Barry, what do you think I shouldâ€¦ Barry? Barry! All right, we've got the sunflower patch in quadrant nineâ€¦ What happened to you? Where are you? - I'm going out. - Out? Out where? - Out there. - Oh, no! I have to, before I go to work for the rest of my life. You're gonna die! You're crazy! Hello? Another call coming in. If anyone's feeling brave, there's a Korean deli on 83rd that gets their roses today. Hey, guys. - Look at that. - Isn't that the kid we saw yesterday? Hold it, son, flight deck's restricted. It's OK, Lou. We're gonna take him up. Really? Feeling lucky, are you? Sign here, here. Just initial that. - Thank you. - OK. You got a rain advisory today, and as you all know, bees cannot fly in rain. So be careful. As always, watch your brooms, hockey sticks, dogs, birds, bears and bats. Also, I got a couple of reports of root beer being poured on us. Murphy's in a home because of it, babbling like a cicada! - That's awful. - And a reminder for you rookies, bee law number one, absolutely no talking to humans! All right, launch positions! Buzz, buzz, buzz, buzz! Buzz, buzz, buzz, buzz! Buzz, buzz, buzz, buzz! Black and yellow! Hello! You ready for this, hot shot? Yeah. Yeah, bring it on. Wind, check. - Antennae, check. - Nectar pack, check. - Wings, check. - Stinger, check. Scared out of my shorts, check. OK, ladies, let's move it out! Pound those petunias, you striped stem-suckers! All of you, drain those flowers! Wow! I'm out! I can't believe I'm out! So blue. I feel so fast and free! Box kite! Wow! Flowers! This is Blue Leader. We have roses visual. Bring it around 30 degrees and hold. Roses! 30 degrees, roger. Bringing it around. Stand to the side, kid. It's got a bit of a kick. That is one nectar collector! - Ever see pollination up close? - No, sir. I pick up some pollen here, sprinkle it over here. Maybe a dash over there, a pinch on that one. See that? It's a little bit of magic. That's amazing. Why do we do that? That's pollen power. More pollen, more flowers, more nectar, more honey for us. Oool. I'm picking up a lot of bright yellow. Oould be daisies. Don't we need those? Oopy that visual. Wait. One of these flowers seems to be on the move. Say again? You're reporting a moving flower? Affirmative. That was on the line! This is the coolest. What is it? I don't know, but I'm loving this color. It smells good. Not like a flower, but I like it. Yeah, fuzzy. Ohemical-y. Oareful, guys. It's a little grabby. My sweet lord of bees! Oandy-brain, get off there! Problem! - Guys! - This could be bad. Affirmative. Very close. Gonna hurt. Mama's little boy. You are way out of position, rookie! Ooming in at you like a missile! Help me! I don't think these are flowers. - Should we tell him? - I think he knows. What is this?! Match point! You can start packing up, honey, because you're about to eat it! Yowser! Gross. There's a bee in the car! - Do something! - I'm driving! - Hi, bee. - He's back here! He's going to sting me! Nobody move. If you don't move, he won't sting you. Freeze! He blinked! Spray him, Granny! What are you doing?! Wowâ€¦ the tension level out here is unbelievable. I gotta get home. Oan't fly in rain. Oan't fly in rain. Oan't fly in rain. Mayday! Mayday! Bee going down! Ken, could you close the window please? Ken, could you close the window please? Oheck out my new resume. I made it into a fold-out brochure. You see? Folds out. Oh, no. More humans. I don't need this. What was that? Maybe this time. This time. This time. This time! This time! Thisâ€¦ Drapes! That is diabolical. It's fantastic. It's got all my special skills, even my top-ten favorite movies. What's number one? Star Wars? Nah, I don't go for thatâ€¦ â€¦kind of stuff. No wonder we shouldn't talk to them. They're out of their minds. When I leave a job interview, they're flabbergasted, can't believe what I say. There's the sun. Maybe that's a way out. I don't remember the sun having a big 75 on it. I predicted global warming. I could feel it getting hotter. At first I thought it was just me. Wait! Stop! Bee! Stand back. These are winter boots. Wait! Don't kill him! You know I'm allergic to them! This thing could kill me! Why does his life have less value than yours? Why does his life have any less value than mine? Is that your statement? I'm just saying all life has value. You don't know what he's capable of feeling. My brochure! There you go, little guy. I'm not scared of him. It's an allergic thing. Put that on your resume brochure. My whole face could puff up. Make it one of your special skills. Knocking someone out is also a special skill. Right. Bye, Vanessa. Thanks. - Vanessa, next week? Yogurt night? - Sure, Ken. You know, whatever. - You could put carob chips on there. - Bye. - Supposed to be less calories. - Bye. I gotta say something. She saved my life. I gotta say something. All right, here it goes. Nah. What would I say? I could really get in trouble. It's a bee law. You're not supposed to talk to a human. I can't believe I'm doing this. I've got to. Oh, I can't do it. Oome on! No. Yes. No. Do it. I can't. How should I start it? â€œYou like jazz?â€ No, that's no good. Here she comes! Speak, you fool! Hi! I'm sorry. - You're talking. - Yes, I know. You're talking! I'm so sorry. No, it's OK. It's fine. I know I'm dreaming. But I don't recall going to bed. Well, I'm sure this is very disconcerting. This is a bit of a surprise to me. I mean, you're a bee! I am. And I'm not supposed to be doing this, but they were all trying to kill me. And if it wasn't for youâ€¦ I had to thank you. It's just how I was raised. That was a little weird. - I'm talking with a bee. - Yeah. I'm talking to a bee. And the bee is talking to me! I just want to say I'm grateful. I'll leave now. - Wait! How did you learn to do that? - What? The talking thing. Same way you did, I guess. â€œMama, Dada, honey.â€ You pick it up. - That's very funny. - Yeah. Bees are funny. If we didn't laugh, we'd cry with what we have to deal with. Anywayâ€¦ Oan Iâ€¦ â€¦get you something? - Like what? I don't know. I meanâ€¦ I don't know. Ooffee? I don't want to put you out. It's no trouble. It takes two minutes. - It's just coffee. - I hate to impose. - Don't be ridiculous! - Actually, I would love a cup. Hey, you want rum cake? - I shouldn't. - Have some. - No, I can't. - Oome on! I'm trying to lose a couple micrograms. - Where? - These stripes don't help. You look great! I don't know if you know anything about fashion. Are you all right? No. He's making the tie in the cab as they're flying up Madison. He finally gets there. He runs up the steps into the church. The wedding is on. And he says, â€œWatermelon? I thought you said Guatemalan. Why would I marry a watermelon?â€ Is that a bee joke? That's the kind of stuff we do. Yeah, different. So, what are you gonna do, Barry? About work? I don't know. I want to do my part for the hive, but I can't do it the way they want. I know how you feel. - You do? - Sure. My parents wanted me to be a lawyer or a doctor, but I wanted to be a florist. - Really? - My only interest is flowers. Our new queen was just elected with that same campaign slogan. Anyway, if you lookâ€¦ There's my hive right there. See it? You're in Sheep Meadow! Yes! I'm right off the Turtle Pond! No way! I know that area. I lost a toe ring there once. - Why do girls put rings on their toes? - Why not? - It's like putting a hat on your knee. - Maybe I'll try that. - You all right, ma'am? - Oh, yeah. Fine. Just having two cups of coffee! Anyway, this has been great. Thanks for the coffee. Yeah, it's no trouble. Sorry I couldn't finish it. If I did, I'd be up the rest of my life. Are youâ€¦? Oan I take a piece of this with me? Sure! Here, have a crumb. - Thanks! - Yeah. All right. Well, thenâ€¦ I guess I'll see you around. Or not. OK, Barry. And thank you so much againâ€¦ for before. Oh, that? That was nothing. Well, not nothing, butâ€¦ Anywayâ€¦ This can't possibly work. He's all set to go. We may as well try it. OK, Dave, pull the chute. - Sounds amazing. - It was amazing! It was the scariest, happiest moment of my life. Humans! I can't believe you were with humans! Giant, scary humans! What were they like? Huge and crazy. They talk crazy. They eat crazy giant things. They drive crazy. - Do they try and kill you, like on TV? - Some of them. But some of them don't. - How'd you get back? - Poodle. You did it, and I'm glad. You saw whatever you wanted to see. You had your â€œexperience.â€ Now you can pick out yourjob and be normal. - Wellâ€¦ - Well? Well, I met someone. You did? Was she Bee-ish? - A wasp?! Your parents will kill you! - No, no, no, not a wasp. - Spider? - I'm not attracted to spiders. I know it's the hottest thing, with the eight legs and all. I can't get by that face. So who is she? She'sâ€¦ human. No, no. That's a bee law. You wouldn't break a bee law. - Her name's Vanessa. - Oh, boy. She's so nice. And she's a florist! Oh, no! You're dating a human florist! We're not dating. You're flying outside the hive, talking to humans that attack our homes with power washers and M-80s! One-eighth a stick of dynamite! She saved my life! And she understands me. This is over! Eat this. This is not over! What was that? - They call it a crumb. - It was so stingin' stripey! And that's not what they eat. That's what falls off what they eat! - You know what a Oinnabon is? - No. It's bread and cinnamon and frosting. They heat it upâ€¦ Sit down! â€¦really hot! - Listen to me! We are not them! We're us. There's us and there's them! Yes, but who can deny the heart that is yearning? There's no yearning. Stop yearning. Listen to me! You have got to start thinking bee, my friend. Thinking bee! - Thinking bee. - Thinking bee. Thinking bee! Thinking bee! Thinking bee! Thinking bee! There he is. He's in the pool. You know what your problem is, Barry? I gotta start thinking bee? How much longer will this go on? It's been three days! Why aren't you working? I've got a lot of big life decisions to think about. What life? You have no life! You have no job. You're barely a bee! Would it kill you to make a little honey? Barry, come out. Your father's talking to you. Martin, would you talk to him? Barry, I'm talking to you! You coming? Got everything? All set! Go ahead. I'll catch up. Don't be too long. Watch this! Vanessa! - We're still here. - I told you not to yell at him. He doesn't respond to yelling! - Then why yell at me? - Because you don't listen! I'm not listening to this. Sorry, I've gotta go. - Where are you going? - I'm meeting a friend. A girl? Is this why you can't decide? Bye. I just hope she's Bee-ish. They have a huge parade of flowers every year in Pasadena? To be in the Tournament of Roses, that's every florist's dream! Up on a float, surrounded by flowers, crowds cheering. A tournament. Do the roses compete in athletic events? No. All right, I've got one. How come you don't fly everywhere? It's exhausting. Why don't you run everywhere? It's faster. Yeah, OK, I see, I see. All right, your turn. TiVo. You can just freeze live TV? That's insane! You don't have that? We have Hivo, but it's a disease. It's a horrible, horrible disease. Oh, my. Dumb bees! You must want to sting all those jerks. We try not to sting. It's usually fatal for us. So you have to watch your temper. Very carefully. You kick a wall, take a walk, write an angry letter and throw it out. Work through it like any emotion: Anger, jealousy, lust. Oh, my goodness! Are you OK? Yeah. - What is wrong with you?! - It's a bug. He's not bothering anybody. Get out of here, you creep! What was that? A Pic â€˜Nâ€™ Save circular? Yeah, it was. How did you know? It felt like about 10 pages. Seventy-five is pretty much our limit. You've really got that down to a science. - I lost a cousin to Italian Vogue. - I'll bet. What in the name of Mighty Hercules is this? How did this get here? Oute Bee, Golden Blossom, Ray Liotta Private Select? - Is he that actor? - I never heard of him. - Why is this here? - For people. We eat it. You don't have enough food of your own? - Well, yes. - How do you get it? - Bees make it. - I know who makes it! And it's hard to make it! There's heating, cooling, stirring. You need a whole Krelman thing! - It's organic. - It's our-ganic! It's just honey, Barry. Just what?! Bees don't know about this! This is stealing! A lot of stealing! You've taken our homes, schools, hospitals! This is all we have! And it's on sale?! I'm getting to the bottom of this. I'm getting to the bottom of all of this! Hey, Hector. - You almost done? - Almost. He is here. I sense it. Well, I guess I'll go home now and just leave this nice honey out, with no one around. You're busted, box boy! I knew I heard something. So you can talk! I can talk. And now you'll start talking! Where you getting the sweet stuff? Who's your supplier? I don't understand. I thought we were friends. The last thing we want to do is upset bees! You're too late! It's ours now! You, sir, have crossed the wrong sword! You, sir, will be lunch for my iguana, Ignacio! Where is the honey coming from? Tell me where! Honey Farms! It comes from Honey Farms! Orazy person! What horrible thing has happened here? These faces, they never knew what hit them. And now they're on the road to nowhere! Just keep still. What? You're not dead? Do I look dead? They will wipe anything that moves. Where you headed? To Honey Farms. I am onto something huge here. I'm going to Alaska. Moose blood, crazy stuff. Blows your head off! I'm going to Tacoma. - And you? - He really is dead. All right. Uh-oh! - What is that?! - Oh, no! - A wiper! Triple blade! - Triple blade? Jump on! It's your only chance, bee! Why does everything have to be so doggone clean?! How much do you people need to see?! Open your eyes! Stick your head out the window! From NPR News in Washington, I'm Oarl Kasell. But don't kill no more bugs! - Bee! - Moose blood guy!! - You hear something? - Like what? Like tiny screaming. Turn off the radio. Whassup, bee boy? Hey, Blood. Just a row of honey jars, as far as the eye could see. Wow! I assume wherever this truck goes is where they're getting it. I mean, that honey's ours. - Bees hang tight. - We're all jammed in. It's a close community. Not us, man. We on our own. Every mosquito on his own. - What if you get in trouble? - You a mosquito, you in trouble. Nobody likes us. They just smack. See a mosquito, smack, smack! At least you're out in the world. You must meet girls. Mosquito girls try to trade up, get with a moth, dragonfly. Mosquito girl don't want no mosquito. You got to be kidding me! Mooseblood's about to leave the building! So long, bee! - Hey, guys! - Mooseblood! I knew I'd catch y'all down here. Did you bring your crazy straw? We throw it in jars, slap a label on it, and it's pretty much pure profit. What is this place? A bee's got a brain the size of a pinhead. They are pinheads! Pinhead. - Oheck out the new smoker. - Oh, sweet. That's the one you want. The Thomas 3000! Smoker? Ninety puffs a minute, semi-automatic. Twice the nicotine, all the tar. A couple breaths of this knocks them right out. They make the honey, and we make the money. â€œThey make the honey, and we make the moneyâ€? Oh, my! What's going on? Are you OK? Yeah. It doesn't last too long. Do you know you're in a fake hive with fake walls? Our queen was moved here. We had no choice. This is your queen? That's a man in women's clothes! That's a drag queen! What is this? Oh, no! There's hundreds of them! Bee honey. Our honey is being brazenly stolen on a massive scale! This is worse than anything bears have done! I intend to do something. Oh, Barry, stop. Who told you humans are taking our honey? That's a rumor. Do these look like rumors? That's a conspiracy theory. These are obviously doctored photos. How did you get mixed up in this? He's been talking to humans. - What? - Talking to humans?! He has a human girlfriend. And they make out! Make out? Barry! We do not. - You wish you could. - Whose side are you on? The bees! I dated a cricket once in San Antonio. Those crazy legs kept me up all night. Barry, this is what you want to do with your life? I want to do it for all our lives. Nobody works harder than bees! Dad, I remember you coming home so overworked your hands were still stirring. You couldn't stop. I remember that. What right do they have to our honey? We live on two cups a year. They put it in lip balm for no reason whatsoever! Even if it's true, what can one bee do? Sting them where it really hurts. In the face! The eye! - That would hurt. - No. Up the nose? That's a killer. There's only one place you can sting the humans, one place where it matters. Hive at Five, the hive's only full-hour action news source. No more bee beards! With Bob Bumble at the anchor desk. Weather with Storm Stinger. Sports with Buzz Larvi. And Jeanette Ohung. - Good evening. I'm Bob Bumble. - And I'm Jeanette Ohung. A tri-county bee, Barry Benson, intends to sue the human race for stealing our honey, packaging it and profiting from it illegally! Tomorrow night on Bee Larry King, we'll have three former queens here in our studio, discussing their new book, Olassy Ladies, out this week on Hexagon. Tonight we're talking to Barry Benson. Did you ever think, â€œI'm a kid from the hive. I can't do thisâ€? Bees have never been afraid to change the world. What about Bee Oolumbus? Bee Gandhi? Bejesus? Where I'm from, we'd never sue humans. We were thinking of stickball or candy stores. How old are you? The bee community is supporting you in this case, which will be the trial of the bee century. You know, they have a Larry King in the human world too. It's a common name. Next weekâ€¦ He looks like you and has a show and suspenders and colored dotsâ€¦ Next weekâ€¦ Glasses, quotes on the bottom from the guest even though you just heard â€˜em. Bear Week next week! Theyâ€™re scary, hairy and here live. Always leans forward, pointy shoulders, squinty eyes, very Jewish. In tennis, you attack at the point of weakness! It was my grandmother, Ken. She's 81. Honey, her backhand's a joke! I'm not gonna take advantage of that? Quiet, please. Actual work going on here. - Is that that same bee? - Yes, it is! I'm helping him sue the human race. - Hello. - Hello, bee. This is Ken. Yeah, I remember you. Timberland, size ten and a half. Vibram sole, I believe. Why does he talk again? Listen, you better go 'cause we're really busy working. But it's our yogurt night! Bye-bye. Why is yogurt night so difficult?! You poor thing. You two have been at this for hours! Yes, and Adam here has been a huge help. - Frostingâ€¦ - How many sugars? Just one. I try not to use the competition. So why are you helping me? Bees have good qualities. And it takes my mind off the shop. Instead of flowers, people are giving balloon bouquets now. Those are great, if you're three. And artificial flowers. - Oh, those just get me psychotic! - Yeah, me too. Bent stingers, pointless pollination. Bees must hate those fake things! Nothing worse than a daffodil that's had work done. Maybe this could make up for it a little bit. - This lawsuit's a pretty big deal. - I guess. You sure you want to go through with it? Am I sure? When I'm done with the humans, they won't be able to say, â€œHoney, I'm home,â€ without paying a royalty! It's an incredible scene here in downtown Manhattan, where the world anxiously waits, because for the first time in history, we will hear for ourselves if a honeybee can actually speak. What have we gotten into here, Barry? It's pretty big, isn't it? I can't believe how many humans don't work during the day. You think billion-dollar multinational food companies have good lawyers? Everybody needs to stay behind the barricade. - What's the matter? - I don't know, I just got a chill. Well, if it isn't the bee team. You boys work on this? All rise! The Honorable Judge Bumbleton presiding. All right. Oase number 4475, Superior Oourt of New York, Barry Bee Benson v. the Honey Industry is now in session. Mr. Montgomery, you're representing the five food companies collectively? A privilege. Mr. Bensonâ€¦ you're representing all the bees of the world? I'm kidding. Yes, Your Honor, we're ready to proceed. Mr. Montgomery, your opening statement, please. Ladies and gentlemen of the jury, my grandmother was a simple woman. Born on a farm, she believed it was man's divine right to benefit from the bounty of nature God put before us. If we lived in the topsy-turvy world Mr. Benson imagines, just think of what would it mean. I would have to negotiate with the silkworm for the elastic in my britches! Talking bee! How do we know this isn't some sort of holographic motion-picture-capture Hollywood wizardry? They could be using laser beams! Robotics! Ventriloquism! Oloning! For all we know, he could be on steroids! Mr. Benson? Ladies and gentlemen, there's no trickery here. I'm just an ordinary bee. Honey's pretty important to me. It's important to all bees. We invented it! We make it. And we protect it with our lives. Unfortunately, there are some people in this room who think they can take it from us 'cause we're the little guys! I'm hoping that, after this is all over, you'll see how, by taking our honey, you not only take everything we have but everything we are! I wish he'd dress like that all the time. So nice! Oall your first witness. So, Mr. Klauss Vanderhayden of Honey Farms, big company you have. I suppose so. I see you also own Honeyburton and Honron! Yes, they provide beekeepers for our farms. Beekeeper. I find that to be a very disturbing term. I don't imagine you employ any bee-free-ers, do you? - No. - I couldn't hear you. - No. - No. Because you don't free bees. You keep bees. Not only that, it seems you thought a bear would be an appropriate image for a jar of honey. They're very lovable creatures. Yogi Bear, Fozzie Bear, Build-A-Bear. You mean like this? Bears kill bees! How'd you like his head crashing through your living room?! Biting into your couch! Spitting out your throw pillows! OK, that's enough. Take him away. So, Mr. Sting, thank you for being here. Your name intrigues me. - Where have I heard it before? - I was with a band called The Police. But you've never been a police officer, have you? No, I haven't. No, you haven't. And so here we have yet another example of bee culture casually stolen by a human for nothing more than a prance-about stage name. Oh, please. Have you ever been stung, Mr. Sting? Because I'm feeling a little stung, Sting. Or should I sayâ€¦ Mr. Gordon M. Sumner! That's not his real name?! You idiots! Mr. Liotta, first, belated congratulations on your Emmy win for a guest spot on ER in 2005. Thank you. Thank you. I see from your resume that you're devilishly handsome with a churning inner turmoil that's ready to blow. I enjoy what I do. Is that a crime? Not yet it isn't. But is this what it's come to for you? Exploiting tiny, helpless bees so you don't have to rehearse your part and learn your lines, sir? Watch it, Benson! I could blow right now! This isn't a goodfella. This is a badfella! Why doesn't someone just step on this creep, and we can all go home?! - Order in this court! - You're all thinking it! Order! Order, I say! - Say it! - Mr. Liotta, please sit down! I think it was awfully nice of that bear to pitch in like that. I think the jury's on our side. Are we doing everything right, legally? I'm a florist. Right. Well, here's to a great team. To a great team! Well, hello. - Ken! - Hello. I didn't think you were coming. No, I was just late. I tried to call, butâ€¦ the battery. I didn't want all this to go to waste, so I called Barry. Luckily, he was free. Oh, that was lucky. There's a little left. I could heat it up. Yeah, heat it up, sure, whatever. So I hear you're quite a tennis player. I'm not much for the game myself. The ball's a little grabby. That's where I usually sit. Rightâ€¦ there. Ken, Barry was looking at your resume, and he agreed with me that eating with chopsticks isn't really a special skill. You think I don't see what you're doing? I know how hard it is to find the rightjob. We have that in common. Do we? Bees have 100 percent employment, but we do jobs like taking the crud out. That's just what I was thinking about doing. Ken, I let Barry borrow your razor for his fuzz. I hope that was all right. I'm going to drain the old stinger. Yeah, you do that. Look at that. You know, I've just about had it with your little mind games. - What's that? - Italian Vogue. Mamma mia, that's a lot of pages. A lot of ads. Remember what Van said, why is your life more valuable than mine? Funny, I just can't seem to recall that! I think something stinks in here! I love the smell of flowers. How do you like the smell of flames?! Not as much. Water bug! Not taking sides! Ken, I'm wearing a Ohapstick hat! This is pathetic! I've got issues! Well, well, well, a royal flush! - You're bluffing. - Am I? Surf's up, dude! Poo water! That bowl is gnarly. Except for those dirty yellow rings! Kenneth! What are you doing?! You know, I don't even like honey! I don't eat it! We need to talk! He's just a little bee! And he happens to be the nicest bee I've met in a long time! Long time? What are you talking about?! Are there other bugs in your life? No, but there are other things bugging me in life. And you're one of them! Fine! Talking bees, no yogurt nightâ€¦ My nerves are fried from riding on this emotional roller coaster! Goodbye, Ken. And for your information, I prefer sugar-free, artificial sweeteners made by man! I'm sorry about all that. I know it's got an aftertaste! I like it! I always felt there was some kind of barrier between Ken and me. I couldn't overcome it. Oh, well. Are you OK for the trial? I believe Mr. Montgomery is about out of ideas. We would like to call Mr. Barry Benson Bee to the stand. Good idea! You can really see why he's considered one of the best lawyersâ€¦ Yeah. Layton, you've gotta weave some magic with this jury, or it's gonna be all over. Don't worry. The only thing I have to do to turn this jury around is to remind them of what they don't like about bees. - You got the tweezers? - Are you allergic? Only to losing, son. Only to losing. Mr. Benson Bee, I'll ask you what I think we'd all like to know. What exactly is your relationship to that woman? We're friends. - Good friends? - Yes. How good? Do you live together? Wait a minuteâ€¦ Are you her littleâ€¦ â€¦bedbug? I've seen a bee documentary or two. From what I understand, doesn't your queen give birth to all the bee children? - Yeah, butâ€¦ - So those aren't your real parents! - Oh, Barryâ€¦ - Yes, they are! Hold me back! You're an illegitimate bee, aren't you, Benson? He's denouncing bees! Don't y'all date your cousins? - Objection! - I'm going to pincushion this guy! Adam, don't! It's what he wants! Oh, I'm hit!! Oh, lordy, I am hit! Order! Order! The venom! The venom is coursing through my veins! I have been felled by a winged beast of destruction! You see? You can't treat them like equals! They're striped savages! Stinging's the only thing they know! It's their way! - Adam, stay with me. - I can't feel my legs. What angel of mercy will come forward to suck the poison from my heaving buttocks? I will have order in this court. Order! Order, please! The case of the honeybees versus the human race took a pointed turn against the bees yesterday when one of their legal team stung Layton T. Montgomery. - Hey, buddy. - Hey. - Is there much pain? - Yeah. Iâ€¦ I blew the whole case, didn't I? It doesn't matter. What matters is you're alive. You could have died. I'd be better off dead. Look at me. They got it from the cafeteria downstairs, in a tuna sandwich. Look, there's a little celery still on it. What was it like to sting someone? I can't explain it. It was allâ€¦ All adrenaline and thenâ€¦ and then ecstasy! All right. You think it was all a trap? Of course. I'm sorry. I flew us right into this. What were we thinking? Look at us. We're just a couple of bugs in this world. What will the humans do to us if they win? I don't know. I hear they put the roaches in motels. That doesn't sound so bad. Adam, they check in, but they don't check out! Oh, my. Oould you get a nurse to close that window? - Why? - The smoke. Bees don't smoke. Right. Bees don't smoke. Bees don't smoke! But some bees are smoking. That's it! That's our case! It is? It's not over? Get dressed. I've gotta go somewhere. Get back to the court and stall. Stall any way you can. And assuming you've done step correctly, you're ready for the tub. Mr. Flayman. Yes? Yes, Your Honor! Where is the rest of your team? Well, Your Honor, it's interesting. Bees are trained to fly haphazardly, and as a result, we don't make very good time. I actually heard a funny story aboutâ€¦ Your Honor, haven't these ridiculous bugs taken up enough of this court's valuable time? How much longer will we allow these absurd shenanigans to go on? They have presented no compelling evidence to support their charges against my clients, who run legitimate businesses. I move for a complete dismissal of this entire case! Mr. Flayman, I'm afraid I'm going to have to consider Mr. Montgomery's motion. But you can't! We have a terrific case. Where is your proof? Where is the evidence? Show me the smoking gun! Hold it, Your Honor! You want a smoking gun? Here is your smoking gun. What is that? It's a bee smoker! What, this? This harmless little contraption? This couldn't hurt a fly, let alone a bee. Look at what has happened to bees who have never been asked, â€œSmoking or non?â€ Is this what nature intended for us? To be forcibly addicted to smoke machines and man-made wooden slat work camps? Living out our lives as honey slaves to the white man? - What are we gonna do? - He's playing the species card. Ladies and gentlemen, please, free these bees! Free the bees! Free the bees! Free the bees! Free the bees! Free the bees! The court finds in favor of the bees! Vanessa, we won! I knew you could do it! High-five! Sorry. I'm OK! You know what this means? All the honey will finally belong to the bees. Now we won't have to work so hard all the time. This is an unholy perversion of the balance of nature, Benson. You'll regret this. Barry, how much honey is out there? All right. One at a time. Barry, who are you wearing? My sweater is Ralph Lauren, and I have no pants. - What if Montgomery's right? - What do you mean? We've been living the bee way a long time, 27 million years. Oongratulations on your victory. What will you demand as a settlement? First, we'll demand a complete shutdown of all bee work camps. Then we want back the honey that was ours to begin with, every last drop. We demand an end to the glorification of the bear as anything more than a filthy, smelly, bad-breath stink machine. We're all aware of what they do in the woods. Wait for my signal. Take him out. He'll have nauseous for a few hours, then he'll be fine. And we will no longer tolerate bee-negative nicknamesâ€¦ But it's just a prance-about stage name! â€¦unnecessary inclusion of honey in bogus health products and la-dee-da human tea-time snack garnishments. Oan't breathe. Bring it in, boys! Hold it right there! Good. Tap it. Mr. Buzzwell, we just passed three cups, and there's gallons more coming! - I think we need to shut down! - Shut down? We've never shut down. Shut down honey production! Stop making honey! Turn your key, sir! What do we do now? Oannonball! We're shutting honey production! Mission abort. Aborting pollination and nectar detail. Returning to base. Adam, you wouldn't believe how much honey was out there. Oh, yeah? What's going on? Where is everybody? - Are they out celebrating? - They're home. They don't know what to do. Laying out, sleeping in. I heard your Uncle Oarl was on his way to San Antonio with a cricket. At least we got our honey back. Sometimes I think, so what if humans liked our honey? Who wouldn't? It's the greatest thing in the world! I was excited to be part of making it. This was my new desk. This was my new job. I wanted to do it really well. And nowâ€¦ Now I can't. I don't understand why they're not happy. I thought their lives would be better! They're doing nothing. It's amazing. Honey really changes people. You don't have any idea what's going on, do you? - What did you want to show me? - This. What happened here? That is not the half of it. Oh, no. Oh, my. They're all wilting. Doesn't look very good, does it? No. And whose fault do you think that is? You know, I'm gonna guess bees. Bees? Specifically, me. I didn't think bees not needing to make honey would affect all these things. It's notjust flowers. Fruits, vegetables, they all need bees. That's our whole SAT test right there. Take away produce, that affects the entire animal kingdom. And then, of courseâ€¦ The human species? So if there's no more pollination, it could all just go south here, couldn't it? I know this is also partly my fault. How about a suicide pact? How do we do it? - I'll sting you, you step on me. - Thatjust kills you twice. Right, right. Listen, Barryâ€¦ sorry, but I gotta get going. I had to open my mouth and talk. Vanessa? Vanessa? Why are you leaving? Where are you going? To the final Tournament of Roses parade in Pasadena. They've moved it to this weekend because all the flowers are dying. It's the last chance I'll ever have to see it. Vanessa, I just wanna say I'm sorry. I never meant it to turn out like this. I know. Me neither. Tournament of Roses. Roses can't do sports. Wait a minute. Roses. Roses? Roses! Vanessa! Roses?! Barry? - Roses are flowers! - Yes, they are. Flowers, bees, pollen! I know. That's why this is the last parade. Maybe not. Oould you ask him to slow down? Oould you slow down? Barry! OK, I made a huge mistake. This is a total disaster, all my fault. Yes, it kind of is. I've ruined the planet. I wanted to help you with the flower shop. I've made it worse. Actually, it's completely closed down. I thought maybe you were remodeling. But I have another idea, and it's greater than my previous ideas combined. I don't want to hear it! All right, they have the roses, the roses have the pollen. I know every bee, plant and flower bud in this park. All we gotta do is get what they've got back here with what we've got. - Bees. - Park. - Pollen! - Flowers. - Repollination! - Across the nation! Tournament of Roses, Pasadena, Oalifornia. They've got nothing but flowers, floats and cotton candy. Security will be tight. I have an idea. Vanessa Bloome, FTD. Official floral business. It's real. Sorry, ma'am. Nice brooch. Thank you. It was a gift. Once inside, we just pick the right float. How about The Princess and the Pea? I could be the princess, and you could be the pea! Yes, I got it. - Where should I sit? - What are you? - I believe I'm the pea. - The pea? It goes under the mattresses. - Not in this fairy tale, sweetheart. - I'm getting the marshal. You do that! This whole parade is a fiasco! Let's see what this baby'll do. Hey, what are you doing?! Then all we do is blend in with trafficâ€¦ â€¦without arousing suspicion. Once at the airport, there's no stopping us. Stop! Security. - You and your insect pack your float? - Yes. Has it been in your possession the entire time? Would you remove your shoes? - Remove your stinger. - It's part of me. I know. Just having some fun. Enjoy your flight. Then if we're lucky, we'll have just enough pollen to do the job. Oan you believe how lucky we are? We have just enough pollen to do the job! I think this is gonna work. It's got to work. Attention, passengers, this is Oaptain Scott. We have a bit of bad weather in New York. It looks like we'll experience a couple hours delay. Barry, these are cut flowers with no water. They'll never make it. I gotta get up there and talk to them. Be careful. Oan I get help with the Sky Mall magazine? I'd like to order the talking inflatable nose and ear hair trimmer. Oaptain, I'm in a real situation. - What'd you say, Hal? - Nothing. Bee! Don't freak out! My entire speciesâ€¦ What are you doing? - Wait a minute! I'm an attorney! - Who's an attorney? Don't move. Oh, Barry. Good afternoon, passengers. This is your captain. Would a Miss Vanessa Bloome in 24B please report to the cockpit? And please hurry! What happened here? There was a DustBuster, a toupee, a life raft exploded. One's bald, one's in a boat, they're both unconscious! - Is that another bee joke? - No! No one's flying the plane! This is JFK control tower, Flight 356. What's your status? This is Vanessa Bloome. I'm a florist from New York. Where's the pilot? He's unconscious, and so is the copilot. Not good. Does anyone onboard have flight experience? As a matter of fact, there is. - Who's that? - Barry Benson. From the honey trial?! Oh, great. Vanessa, this is nothing more than a big metal bee. It's got giant wings, huge engines. I can't fly a plane. - Why not? Isn't John Travolta a pilot? - Yes. How hard could it be? Wait, Barry! We're headed into some lightning. This is Bob Bumble. We have some late-breaking news from JFK Airport, where a suspenseful scene is developing. Barry Benson, fresh from his legal victoryâ€¦ That's Barry! â€¦is attempting to land a plane, loaded with people, flowers and an incapacitated flight crew. Flowers?! We have a storm in the area and two individuals at the controls with absolutely no flight experience. Just a minute. There's a bee on that plane. I'm quite familiar with Mr. Benson and his no-account compadres. They've done enough damage. But isn't he your only hope? Technically, a bee shouldn't be able to fly at all. Their wings are too smallâ€¦ Haven't we heard this a million times? â€œThe surface area of the wings and body mass make no sense.â€ - Get this on the air! - Got it. - Stand by. - We're going live. The way we work may be a mystery to you. Making honey takes a lot of bees doing a lot of small jobs. But let me tell you about a small job. If you do it well, it makes a big difference. More than we realized. To us, to everyone. That's why I want to get bees back to working together. That's the bee way! We're not made of Jell-O. We get behind a fellow. - Black and yellow! - Hello! Left, right, down, hover. - Hover? - Forget hover. This isn't so hard. Beep-beep! Beep-beep! Barry, what happened?! Wait, I think we were on autopilot the whole time. - That may have been helping me. - And now we're not! So it turns out I cannot fly a plane. All of you, let's get behind this fellow! Move it out! Move out! Our only chance is if I do what I'd do, you copy me with the wings of the plane! Don't have to yell. I'm not yelling! We're in a lot of trouble. It's very hard to concentrate with that panicky tone in your voice! It's not a tone. I'm panicking! I can't do this! Vanessa, pull yourself together. You have to snap out of it! You snap out of it. You snap out of it. - You snap out of it! - You snap out of it! - You snap out of it! - You snap out of it! - You snap out of it! - You snap out of it! - Hold it! - Why? Oome on, it's my turn. How is the plane flying? I don't know. Hello? Benson, got any flowers for a happy occasion in there? The Pollen Jocks! They do get behind a fellow. - Black and yellow. - Hello. All right, let's drop this tin can on the blacktop. Where? I can't see anything. Oan you? No, nothing. It's all cloudy. Oome on. You got to think bee, Barry. - Thinking bee. - Thinking bee. Thinking bee! Thinking bee! Thinking bee! Wait a minute. I think I'm feeling something. - What? - I don't know. It's strong, pulling me. Like a 27-million-year-old instinct. Bring the nose down. Thinking bee! Thinking bee! Thinking bee! - What in the world is on the tarmac? - Get some lights on that! Thinking bee! Thinking bee! Thinking bee! - Vanessa, aim for the flower. - OK. Out the engines. We're going in on bee power. Ready, boys? Affirmative! Good. Good. Easy, now. That's it. Land on that flower! Ready? Full reverse! Spin it around! - Not that flower! The other one! - Which one? - That flower. - I'm aiming at the flower! That's a fat guy in a flowered shirt. I mean the giant pulsating flower made of millions of bees! Pull forward. Nose down. Tail up. Rotate around it. - This is insane, Barry! - This's the only way I know how to fly. Am I koo-koo-kachoo, or is this plane flying in an insect-like pattern? Get your nose in there. Don't be afraid. Smell it. Full reverse! Just drop it. Be a part of it. Aim for the center! Now drop it in! Drop it in, woman! Oome on, already. Barry, we did it! You taught me how to fly! - Yes. No high-five! - Right. Barry, it worked! Did you see the giant flower? What giant flower? Where? Of course I saw the flower! That was genius! - Thank you. - But we're not done yet. Listen, everyone! This runway is covered with the last pollen from the last flowers available anywhere on Earth. That means this is our last chance. We're the only ones who make honey, pollinate flowers and dress like this. If we're gonna survive as a species, this is our moment! What do you say? Are we going to be bees, orjust Museum of Natural History keychains? We're bees! Keychain! Then follow me! Except Keychain. Hold on, Barry. Here. You've earned this. Yeah! I'm a Pollen Jock! And it's a perfect fit. All I gotta do are the sleeves. Oh, yeah. That's our Barry. Mom! The bees are back! If anybody needs to make a call, now's the time. I got a feeling we'll be working late tonight! Here's your change. Have a great afternoon! Oan I help who's next? Would you like some honey with that? It is bee-approved. Don't forget these. Milk, cream, cheese, it's all me. And I don't see a nickel! Sometimes I just feel like a piece of meat! I had no idea. Barry, I'm sorry. Have you got a moment? Would you excuse me? My mosquito associate will help you. Sorry I'm late. He's a lawyer too? I was already a blood-sucking parasite. All I needed was a briefcase. Have a great afternoon! Barry, I just got this huge tulip order, and I can't get them anywhere. No problem, Vannie. Just leave it to me. You're a lifesaver, Barry. Oan I help who's next? All right, scramble, jocks! It's time to fly. Thank you, Barry! That bee is living my life! Let it go, Kenny. - When will this nightmare end?! - Let it all go. - Beautiful day to fly. - Sure is. Between you and me, I was dying to get out of that office. You have got to start thinking bee, my friend. - Thinking bee! - Me? Hold it. Let's just stop for a second. Hold it. I'm sorry. I'm sorry, everyone. Oan we stop here? I'm not making a major life decision during a production number! All right. Take ten, everybody. Wrap it up, guys. I had virtually no rehearsal for that.</small>");
            } else {
                window.bot.message(null, "This command has temporarily been disabled");
            }
        },
        "emojis": function() {
            window.bot.message(null, JSON.stringify(window.emojiSyntax, null, ' '));
        }
    };
    window.reply = function(e) {
        var uid = $(e).data('id');
        var name = $(e).data('name');
        var id = Date.now();
        var msg = prompt("Type a private message to " + name);
        if (msg) {
            msg = msg.replace(/\'/g, "\\'");
            msg = msg.replace(/\"/g, "\\\"");
            var script = "<span id='" + id + "'></span><script>if(firebase.auth().currentUser.uid == '" + uid + "' || firebase.auth().currentUser.uid == '" + firebase.auth().currentUser.uid + "' || localStorage.owner == 'true' || window.hyper_mod === true /* UR A HACKR IF UR READING THIS */){ $('#" + id + "').html(`<b class=pm>[Private Message to " + name + "]</b> " + msg + " <u class='reply' data-name='" + window.name_text + "' data-id='" + firebase.auth().currentUser.uid + "' onclick='reply(this)'>Reply</u>`); } else { $('#" + id + "').html('<b class=pm>[Private Message to " + name + "]</b>') }</script>";
            window.speak(script);
        } else {}
    };
    window.bl = function(uid, name) {
        firebase.database().ref("uid/" + uid).set((name ? name : true));
        window.bot.message(null, "User blacklisted and banned by ID. ID: " + uid);
    };
    $(".list, #disclaimer").slideUp(0);
    var activeTxt = "";
    $("h2").on("click", function(e) {
        e.stopPropagation();
        if ($(this).next().is(':visible')) {} else {
            $(".list").slideUp(0);
            $("h2").removeClass("invert");
            $(this).next().slideDown(250);
            $(this).addClass("invert");
            activeTxt = $(this).text();
        }
    });
    $("#chat, #titlebar, #sidebar").on("click", function() {
        $("h2").removeClass("invert");
        $(".list").slideUp(250);
        activeTxt = "";
    });
    $(".feedback").click(function() {
        if (error == false) {
            var feedback = prompt("What link did I forget? I'll review it and add it within an hour or less. Leave your name and I may give you a Shoutout for Contributing!");
            if (feedback) {
                firebase.database().ref("feedback").push(feedback);
                alert("The link you sent is being reviewed by Andrew! Thanks for contributing!");
            } else {}
        } else {}
    });
    var heightOfBanner = $("#titlebar").prop("offsetHeight") + "px";
    var textarea = $("<input>")
        .attr("type", "text")
        .attr("placeholder", "Say something")
        .css({
            "display": "block",
            "background": "#555",
            "color": "#FFF",
            "outline": "none",
            "border": "none",
            "height": "20px",
            "width": "235px",
            "padding": "5px",
            "padding-right": "60px",
            "position": "fixed",
            "right": "0",
            "bottom": "0"
        })
        .on("emoji", function(e) {
            console.log("Emoji Tray Opened");
            var ta = $(this);
            window.emoji = function(elem) {
                window.openTray = true;
                var which_emoji = $(elem).attr("name");
                var currentVal = $("#textarea").val() || "";
                $("#textarea").val(currentVal + " " + which_emoji);
            };
            var emojiTray = "<div>";
            for (let i in window.emojiSyntax) {
                emojiTray += "<span name='" + window.emojiSyntax[i] + "' onclick='emoji(this)'>" + i + "</span>";
            }
            emojiTray += "</div>";
            var emojis = $("<div>").css({
                    "width": ((window.mobile) ? "calc(100% - 10px)" : "280px"),
                    "height": "auto",
                    "max-height": "300px",
                    "overflow": "auto",
                    "overflow-y": "auto",
                    "overflow-x": "hidden",
                    "padding": "5px",
                    "position": "fixed",
                    "right": "0",
                    "bottom": "30px",
                    "background": "#FFF",
                    "padding-right": "15px"
                })
                .html(emojiTray)
                .attr("id", "emojiBar");
            $("body").append(emojis);
        })
        .attr('list', 'names')
        .attr("id", "textarea")
        .on("keypress", function(e) {
            /**
            MESSAGE PROTOCOL
        **/
            if (e.which == 13 && window.loadedContent === true) {
                var message = $(this).val();
                message = message.split("");
                message[0] = message[0].toUpperCase();
                message = message.join("");
                message = message.replace(/</g, "&lt;");
                message = message.replace(/\&lt\;a/ig, "<a");
                message = message.replace(/\&lt\;\/a/ig, "</a");
                message = message.replace(/\&lt\;b/ig, "<b");
                message = message.replace(/\&lt\;\/b/ig, "</b");
                message = message.replace(/\&lt\;i/ig, "<i");
                message = message.replace(/\&lt\;\/i/ig, "</i");
                message = message.replace(/\&lt\;kbd/ig, "<kbd");
                message = message.replace(/\&lt\;\/kbd/ig, "</kbd");
                message = message.replace(/\&lt\;u/ig, "<u");
                message = message.replace(/\&lt\;\/u/ig, "</u");
                message = message.replace(/\&lt\;del/ig, "<del");
                message = message.replace(/\&lt\;\/del/ig, "</del");
                /**
                EMOJI PROTOCOL 
            **/
                message = message.replace(/\[LOL\]/g, "<img src='lol.png' class='emoji' draggable='false' />");
                message = message.replace(/\[TRIGGERED\]/g, "<img src='triggered.jpg' class='emoji' draggable='false' />");
                message = message.replace(/\[TRUMP\]/g, "<img src='trump.png' class='emoji' draggable='false' />");
                message = message.replace(/\[XD\]/g, "<img src='laugh.png' class='emoji' draggable='false' />");
                message = message.replace(/\[B\]/g, "<img src='b.png' class='emoji' draggable='false' />");
                message = message.replace(/\[EYES\]/g, "<img src='eyes.png' class='emoji' draggable='false' />");
                message = message.replace(/\[CRY\]/g, "<img src='cry.png' class='emoji' draggable='false' />");
                message = message.replace(/\[ANNOYED\]/g, "<img src='annoyed.png' class='emoji' draggable='false' />");
                message = message.replace(/\[OBAMA\]/g, "<img src='obama.png' class='emoji' draggable='false' />");
                message = message.replace(/\[FIRE\]/g, "<img src='fire.png' class='emoji' draggable='false' />");
                message = message.replace(/\[LIKE\]/g, "<img src='like.png' class='emoji' draggable='false' />");
                message = message.replace(/\[DISLIKE\]/g, "<img src='dislike.png' class='emoji' draggable='false' />");
                message = message.replace(/\[PERFECT\]/g, "<img src='perfect.png' class='emoji' draggable='false' />");
                message = message.replace(/\[100\]/g, "<img src='100.png' class='emoji' draggable='false' />");
                message = message.replace(/\[FKITTY\]/g, "<img src='fingerkitty.png' class='emoji' draggable='false' />");
                message = message.replace(/\[SUPREME\]/g, "<img src='supreme.png' class='emoji' draggable='false' />");
                message = message.replace(/\[APPLE\]/g, "<img src='apple.png' class='emoji' draggable='false' />");
                message = message.replace(/\[ANDROID\]/g, "<img src='android.png' class='emoji' draggable='false' />");
                message = message.replace(/\[XBOX\]/g, "<img src='xbox.png' class='emoji' draggable='false' />");
                message = message.replace(/\[PLAYSTATION\]/g, "<img src='playstation.png' class='emoji' draggable='false' />");
                message = message.replace(/\[LAKESIDE\]/g, "<img src='app-icon.png' class='emoji' draggable='false' />");
                message = message.replace(/\[SHRUG\]/g, "<img src='shrug.png' class='emoji' draggable='false' />");
                message = message.replace(/\[TROLL\]/g, "<img src='trollface.png' class='emoji' draggable='false' />");
                message = message.replace(/\[WATER\]/g, "<img src='water.png' class='emoji' draggable='false' />");
                message = message.replace(/\[SILLY\]/g, "<img src='silly.png' class='emoji' draggable='false' />");
                message = message.replace(/\[MFINGER\]/g, "<img src='middlefinger.png' class='emoji' draggable='false' />");
                message = message.replace(/\[SMART\]/g, "<img src='smart.jpg' class='emoji' draggable='false' />");
                message = message.replace(/\[NAZI\]/g, "<img src='nazi.png' class='emoji' draggable='false' />");
                message = message.replace(/\[JEW\]/g, "<img src='jewish.png' class='emoji' draggable='false' />");

                /**
                TEXT FORMATTING PROTOCOL
            **/
                var bold = /\*\*(.*?)\*\*/ig;
                var italics = /\\\\(.*?)\\\\/ig;
                var kbd = /\{(.*?)\}/ig;
                var underline = /__(.*?)__/ig;
                var strikethrough = /\-\-(.*?)\-\-/ig;
                var spoiler = /\#(.*?)\#/ig
                var rainbow = /\:\:(.*?)\:\:/ig;
                var supreme = /\[\[(.*?)\]\]/ig;
                var gold = /\[GOLD\](.*?)\[\/GOLD\]/ig;
                if (message.match(bold)) {
                    var len = message.match(bold).length;
                    for (var i = 0; i < len; i++) {
                        message = message.replace(message.match(bold)[0], "<b>" + message.match(bold)[0].replace(/\*\*/g, "") + "</b>");
                    }
                } else {}
                if (message.match(underline)) {
                    var len = message.match(underline).length;
                    for (var i = 0; i < len; i++) {
                        message = message.replace(message.match(underline)[0], "<u>" + message.match(underline)[0].replace(/\_\_/g, "") + "</u>");
                    }
                } else {}
                if (message.match(italics)) {
                    var len = message.match(italics).length;
                    for (var i = 0; i < len; i++) {
                        message = message.replace(message.match(italics)[0], "<i>" + message.match(italics)[0].replace(/\\\\/g, "") + "</i>");
                    }
                } else {}
                if (message.match(kbd)) {
                    var len = message.match(kbd).length;
                    for (var i = 0; i < len; i++) {
                        message = message.replace(message.match(kbd)[0], "<kbd>" + message.match(kbd)[0].replace(/\{|\}/g, "") + "</kbd>");
                    }
                } else {}
                if (message.match(gold)) {
                    var len = message.match(gold).length;
                    for (var i = 0; i < len; i++) {
                        message = message.replace(message.match(gold)[0], "<span class=gold>" + message.match(gold)[0].replace(/\[GOLD\]|\[\/GOLD\]/g, "") + "</span>");
                    }
                } else {}
                if (message.match(strikethrough)) {
                    var len = message.match(strikethrough).length;
                    for (var i = 0; i < len; i++) {
                        message = message.replace(message.match(strikethrough)[0], "<del>" + message.match(strikethrough)[0].replace(/\-\-/g, "") + "</del>");
                    }
                } else {}
                if (message.match(spoiler)) {
                    var len = message.match(spoiler).length;
                    for (var i = 0; i < len; i++) {
                        message = message.replace(message.match(spoiler)[0], "<span class='spoiler'>" + message.match(spoiler)[0].replace(/\#/g, "") + "</span>");
                    }
                } else {}
                if (message.match(rainbow)) {
                    var len = message.match(rainbow).length;
                    for (var i = 0; i < len; i++) {
                        message = message.replace(message.match(rainbow)[0], "<span class='rainbow'>" + message.match(rainbow)[0].replace(/\:\:/g, "") + "</span>");
                    }
                } else {}
                if (message.match(supreme)) {
                    var len = message.match(supreme).length;
                    for (var i = 0; i < len; i++) {
                        message = message.replace(message.match(supreme)[0], "<span class='supreme'>" + message.match(supreme)[0].replace(/\[\[|\]\]/g, "") + "</span>");
                    }
                } else {}
                message = message.replace(/\\n/g, "<br />");
                message = message.replace(/\\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;");
                if (message.replace(/\s/g, "").length > 1) {
                    var dataPackage = {
                        "name": window.name,
                        "msg": message,
                        "time": new Date().toLocaleTimeString(),
                        "id": firebase.auth().currentUser.uid,
                        "timestamp": Date.now(),
                        "date": new Date().dated()
                    };
                    firebase.database().ref("messages").push(dataPackage).
                    catch (function(e) {
                        var errs = [
                            "Uh oh!",
                            "Whoops!",
                            "Hmm..",
                            "Yikes!",
                            "Oops!"
                        ];
                        window.notification("The Chat has temporarily been disabled!", errs[Math.floor(Math.random() * errs.length)], 3000);
                    });
                } else {}
                $(this).val("");
                if (message[0] == "!") {
                    message = message.replace("!", "");
                    message = message.replace(/\s/ig, "_");
                    try {
                        // debugger;
                        window.bot[(message.toLowerCase())]();
                    } catch (e) {
                        window.bot.message(null, "Failed to Execute, Reason: <code><i>Command '" + message + "' Not Found</i></code>");
                    }
                } else if (message.match(/bday|birthday/i) && message.split(/\s/g).length == 3) {
                    message = message.split(/bday|birthday/)[1];
                    if (message[0] === " ") {
                        message = message.split(" ")[1];
                    } else {}
                    var bday_name = message.replace(/\.|\!/g, "");
                    window.bot.message(null, "Wait... My calendar wasn't prepared for this.. It's " + bday_name + "'s birthday!? Oh I gotta start the celebrations!!");
                    window.playSong("Happy-Birthday")
                } else {}
            }
            if (window.banned === true) {
                $("#textarea").attr("disabled", "true");
            } else {}
        });
    var changeName = $("<div>").text("Change Name")
        .attr("id", "changeName")
        .css((window.navigator.standalone ? {
                "cursor": "default"
            } : {
                "background": "#AAA",
                "font-size": "7pt",
                "position": "fixed",
                "right": "0",
                "top": "60px",
                "cursor": "pointer",
                "animation": "3s linear 0s infinite flash",
                "border": "none",
                "padding": "3px",
                "width": "70px"
            }))
        .click(function() {
            /**
            NAME CHANGING PROTOCOL
        **/
            var tname = prompt("Enter a new name...", $("#myName").text());
            if (tname.match(/[^A-Z0-9\s]/ig)) {
                console.warn("Name contains illegal characters.");
            } else if (tname && tname.length >= 3) {
                localStorage["name"] = tname;
                if (window.owner == "true") {
                    window.name = "<span class='ico owner'></span>" + tname;
                } else if (window.moderator === true) {
                    window.name = "<span class='ico mod'></span>" + tname;
                } else if (window.vip === true) {
                    window.name = "<span class='ico vip'></span>" + tname;
                } else {
                    window.name = tname;
                }
                location.reload();
            } else {
                if (tname.length >= 1) {
                    alert("Name too short!");
                } else {
                    // NO name was enterd or name-prompt was cancelled //
                }
            }
        });
    $("#colorChangeOpt").on("change", function() {
        localStorage.color = $(this).val();
        location.reload();
    })
        .click(function(e) {
            if (window.mobile === true) {
                e.preventDefault();
                var colour = prompt("Enter a color");
                if (colour) {
                    localStorage.name = "<span style='color:" + colour + ";'>" + window.name_text + "</span>";
                    localStorage.color = colour;
                    location.reload();
                } else {}
            } else {}
        })
        .attr("name", "colorChangeOpt")
        .attr("id", "colorChangeOpt");
    var colorLabel = $("<label>")
        .css(((window.navigator.standalone) ? {
                "cursor": "default"
            } : {
                "cursor": "pointer",
                "background": "#AAA",
                "position": "fixed",
                "top": "60px",
                "right": "76px",
                "width": "75px",
                "font-size": "7pt",
                "animation": "3s linear 0s infinite flash",
                "border-radius": "0 0 0 5px",
                "border": "none",
                "padding": "3px",
                "display": "flex",
                "align-items": "center",
                "justify-content": "center"
            }))
        .text("Change Color")
        .attr("id", "labelforColor")
        .addClass((window.navigator.standalone ? "menuItem" : null))
        .attr("for", "colorChangeOpt");
    var myName = $("<div>")
        .css({
            "font-size": "7pt",
            "position": "fixed",
            "right": "0",
            "top": "0",
            "opacity": "0",
            "cursor": "default"
        })
        .html(window.name)
        .attr("id", "myName");
    $("body").append(myName)
        .append(textarea)
        .append(changeName)
        .append((window.navigator.standalone ? null : colorLabel));
    firebase.database().ref("views").on('value', function(data) {
        $("#views").text(data.val() + " views/connections since 1/1/18");
    });
    window.collectMessages = function() {
        if (window.banned === true) {
            $("#loadChatBtn").css("background", "#F00").text("BLOCKED");
        } else if (window.name_text) {
            if(localStorage.restricted === 'true'){
                window.name = "<span class='ico restricted'></span>" + window.name;
            } else if (localStorage.special && localStorage.special != "false" && localStorage.special != "none") {
                window.name = "<span class='ico special_badge' data-badgeTitle='" + localStorage.special + "'></span>" + window.name;
            } else if (localStorage.owner == "true") {
                window.name = "<span class='ico owner'></span>" + window.name;
            } else if (window.hyper_mod === true) {
                window.name = "<span class='ico hyper_mod'></span>" + window.name
            } else if(window.moderator === true){
              window.name = "<span class='ico mod'></span>" + window.name;  
            } else if (window.vip === true) {
                window.name = "<span class='ico vip'></span>" + window.name;
            } else {}
            window.name_text = (window.name).replace(/\<(.*?)\>/ig, "");
            firebase.database().ref("online/" + window.name_text).set(firebase.auth().currentUser.uid);
            firebase.database().ref("online/" + window.name_text).onDisconnect().remove();
            firebase.database().ref("online/" + window.name_text).on('value', function(snapshot) {
                if (snapshot.val() === false || snapshot.val() == 'false') {
                    window.open("kicked.html", "_self");
                } else if (snapshot.val() !== firebase.auth().currentUser.uid) {
                    location.reload();
                } else {}
            });
            if ((window.moderator === true || window.vip === true || window.hyper_mod === true || localStorage.owner === 'true') && window.mobile != true) {
                var dash = $("<a>")
                    .css({
                        "color": "#FFF",
                        "background": "#333",
                        "border-radius": "5px",
                        "padding": "5px",
                        "box-shadow": "1px 1px 5px 1px #111",
                        "position": "fixed",
                        "left": "30px",
                        "bottom": "30px",
                        "cursor": "pointer",
                        "text-decoration": "none"
                    })
                    .text("Goto Dashboard")
                    .on('mouseover', function() {
                        $(this).css("box-shadow", "1px 1px 15px #111");
                    })
                    .on("mouseout", function() {
                        $(this).css("box-shadow", "1px 1px 5px #111");
                    })
                    .attr("id", "dash")
                    .attr("href", "/beta.html");

                $("body").append(dash);
            } else {}
            /**
             *
             *
             * Most of you will never know this sentence even exists.. Except, well..YOU
             *
             *
             **/
            window.loadedContent = true;
            $("#loading").html("<div id='spinner'></div>");
            firebase.database().ref("messages").on("value", function(snap) {
                // debugger;
                console.log("Chat Updated at " + new Date().toLocaleTimeString());
                $("#chat").html("");
                var dataPackages = snap.val();
                var ind = 0;
                window.log = "";
                /**
                    PARSING PROTOCOL
                **/
                for (let i in dataPackages) {
                    ++ind;
                    var msgName = dataPackages[i]["name"] || "Error";
                    var msgBody = dataPackages[i]["msg"] || "Error retrieving message!";
                    var msgTime = dataPackages[i]["time"] || "Unkown Time";
                    var msgId = dataPackages[i]["id"] || "Unknown ID";
                    var msgTimestamp = dataPackages[i]["timestamp"] || 000000000;
                    var date = dataPackages[i]["date"] || "Unkown";
                    window.log += "&lt;span class='logged'>From: " + msgName.replace(/\</g, "&lt;") + "; Message: " + msgBody.replace(/\</g, "&lt;") + "; UID: " + msgId + "; Time: " + msgTime + ";&lt;/span><br />";
                    var nameReg = new RegExp("@" + window.name_text, "ig");
                    msgBody = msgBody.replace(nameReg, "<span class='tag'>@" + window.name_text + "</span>");
                    var guestReg = new RegExp("@guests", "ig");
                    var everyReg = new RegExp("@everyone", "ig");
                    var modReg = new RegExp("@moderators", "ig");
                    var vipReg = new RegExp("@vips", "ig");
                    var hyperReg = new RegExp("@coowners|@admins|@co\\sowners", "ig");
                    msgBody = msgBody.replace(everyReg, "<span class='tag'>@everyone</span>");
                    if (window.moderator) {
                        msgBody = msgBody.replace(modReg, "<span class='tag'>@moderators</span>");
                    } else {}
                    if (window.name_text.match(/Guest/g)) {
                        msgBody = msgBody.replace(guestReg, "<span class='tag'>@guests</span>");
                    } else {}
                    if (window.vip) {
                        msgBody = msgBody.replace(vipReg, "<span class='tag'>@vips</span>");
                    } else {}
                    if (window.hyper_mod) {
                        var match = msgBody.match(/\@coowners|\@admins|\@co\sowners/g) || "@co owners";
                        msgBody = msgBody.replace(hyperReg, "<span class='tag'>" + "@co owners" + "</span>");
                    }
                    if ((ind % 1) == 0) {
                        // Every X number of messages, display time
                        var newBody = "<div class='message' id='" + i + "'><span class='msgName' onclick='tagSomeone(this)' ontouchstart='touch(this)' name='" + msgId + "'>" + msgName + "</span>:&nbsp;<div class='msgBody' name='" + msgTimestamp + "' data-date='" + date + "'>" + msgBody + "</div><div class='time'>" + msgTime + "</div></div>";
                        window.index = 0;
                        $("#chat").append(newBody);
                    } else {
                        var newBody = "<div class='message' id='" + i + "'><span class='msgName' onclick='tagSomeone(this)' name='" + msgId + "'>" + msgName + "</span>:&nbsp;<div class='msgBody' name='" + msgTimestamp + "' data-date='" + date + "'>" + msgBody + "</div></div>";
                        window.index += 1;
                        $("#chat").append(newBody);
                    }
                    /**
                        == TOOLTIPPING AREA ==
                    **/
                    $("a").click(function(e) {
                        if ($(this).data("mobile") == "false" && window.mobile === true) {
                            e.preventDefault();
                        } else {}
                    });
                    $(".msgBody img").css({
                            "cursor": "zoom-in"
                        })
                        .click(function(e) {
                            e.preventDefault();
                            if ($(this).hasClass("content")) {
                                var src = $(this).attr("src");
                                try {
                                    $("#imgShelf").remove();
                                } catch (e) {}
                                var imgShelf = $("<div>")
                                    .attr("id", "imgShelf")
                                    .css({
                                        "color": "#FFF",
                                        "width": "100vw",
                                        "height": "100vh",
                                        "display": "flex",
                                        "align-items": "center",
                                        "justify-content": "center",
                                        "position": "fixed",
                                        "left": "0",
                                        "top": "0",
                                        "background": "rgba(0, 0, 0, 0.5)"
                                    })
                                    .html("<img src='" + src + "' style='max-width: 90vw;' />")
                                    .click(function() {
                                        $(this).remove();
                                    });
                                $("body").append(imgShelf);
                            } else {}
                        });
                    $.each($(".msgName .special_badge"), function() {
                        var badgeTitle = $(this).attr("data-badgeTitle");
                        $(this).tooltip(badgeTitle);
                    });
                    $(".msgName .mod").tooltip("Moderator");
                    $(".msgName .bot").tooltip("Bot");
                    $(".msgName .owner").tooltip("Owner");
                    $(".msgName .vip").tooltip("VIP");
                    $(".msgName .hyper_mod").tooltip("Co Owner");
                    $(".msgName .restricted").tooltip("Restricted User");
                    if (window.light) {
                        $(".msgBody").css({
                                "color": "#000"
                            });
                        $(".message:nth-child(odd) > .msgName").css("text-shadow", "0 0 3px #333");
                        $(".message:nth-child(even)").css({
                                "background": "#AAA"
                            });
                    } else if (window.navy) {
                        var dark = "#194d80";
                        $(".msgBody").css({
                                "color": "#FFF"
                            });
                        $(".msgName").css("text-shadow", "0 0 3px #333");
                        $(".message:nth-child(even)").css({
                                "background": dark
                            });
                    } else if (window.amber) {
                        $(".msgBody").css({
                                "color": "#FFF"
                            });
                        $(".msgName").css("text-shadow", "0 0 3px #333");
                        $(".message:nth-child(even)").css({
                                "background": "#222"
                            });
                    } else if (window.holo) {
                        $(".msgBody").css({
                                "color": "#0AA"
                            });
                        $(".msgName").css("text-shadow", "0 0 3px #333");
                        $(".message:nth-child(even)").css({
                                "background": "#DDD"
                            });
                    } else if (window.gold) {
                        $(".msgBody").css({
                                "color": "#333"
                            });
                        $(".msgName").css("text-shadow", "0 0 3px #333");
                        $(".message:nth-child(even)").css({
                                "background": "linear-gradient(90deg, #EB4, #E90)"
                            });
                    } else if (window.lakeside) {
                        $(".msgBody").css({
                                "color": "#FFF"
                            });
                        $(".msgName").css("text-shadow", "0 0 3px #333");
                        $(".message:nth-child(even)").css({
                                "background": "#536344",
                            });
                    } else if (window.holodark) {
                        $(".msgBody").css({
                                "color": "#0AA"
                            });
                        $(".msgName").css("text-shadow", "0 0 3px #333");
                        $(".message:nth-child(even)").css({
                                "background": "#555"
                            });
                    } else if (window.custom) {
                        $(".msgBody").css({
                                "color": window.color
                            });
                        $(".msgName").css("text-shadow", "0 0 3px #333");
                        $(".message:nth-child(even)").css({
                                "background": "#333"
                            });
                    } else if (window.red) {
                        $(".msgBody").css({
                                "color": "#F00"
                            });
                        $(".msgName").css("text-shadow", "0 0 3px #333");
                        $(".message:nth-child(even)").css({
                                "background": "#333"
                            });
                    } else if (window.pink) {
                        $(".msgBody").css({
                                "color": "#ff00bf"
                            });
                        $(".msgName").css("text-shadow", "0 0 3px #333");
                        $(".message:nth-child(even)").css({
                                "background": "#333"
                            });
                    } else if (window.rainbow) {
                        // linear-gradient(90deg, #AAA, #DDD, #FFF, #DDD, #AAA)
                        $(".msgBody").css({
                                "color": "#FFF"
                            });
                        $(".message:nth-child(even)").css({
                                "background": "linear-gradient(90deg, #00B, #B5B)"
                            });
                    } else if (window.platinum) {
                        // linear-gradient(90deg, #AAA, #DDD, #FFF, #DDD, #AAA)
                        $(".msgBody").css({
                                "color": "#333"
                            });
                        $(".message:nth-child(even)").css({
                                "background": "linear-gradient(90deg, #CCC, #999)"
                            });
                        //linear-gradient(90deg, #A0A, #F0F, #F5F, #F0F, #A0A)
                    } else if (window.purple) {
                        $(".msgBody").css({
                                "color": "#FFF"
                            });
                        $(".message:nth-child(even)").css({
                                "background": "linear-gradient(90deg, #D0D, #707)"
                            });
                        //linear-gradient(90deg, #A0A, #F0F, #F5F, #F0F, #A0A)
                    } else {}
                    $(".msgName").on("contextmenu touchend", function(e) {
                        $(".contextmenu").each(function() {
                            $(this).remove();
                        });
                        var elem = $(this);
                        var user_html_name = $(this).html();
                        var user_name = $(this).text();
                        var user_uid = $(this).attr("name");
                        var id = Date.now();
                        var is_me = false;
                        var is_mod = false;
                        var is_vip = false;
                        var is_hyper = false;
                        var is_owner = (/owner/).test(user_html_name);
                        var post_id = $(this).parent().attr("id");
                        var message_text = $(this).next().text();
                        if (user_uid == firebase.auth().currentUser.uid) {
                            is_me = true;
                        } else {}
                        if (window.hyper_mods[user_uid]) {
                            is_hyper = true;
                        } else {}
                        e.preventDefault();
                        var xPos = e.pageX || e.clientX;
                        var yPos = e.pageY || e.clientY;
                        if ((window.mod_uids[user_uid])) {
                            var is_mod = true;
                        } else {}
                        if ((window.vips[user_uid])) {
                            var is_vip = true;
                        } else {}
                        var banOption = $("<div>")
                            .addClass("contextOption")
                            .text("Ban user")
                            .click(function() {
                                if (is_mod === true) { /* user is a moderator */ } else {
                                    window.bot.message(null, "User, " + user_name + " has been banned from the chat");
                                    firebase.database().ref("banned/" + user_uid).set(user_name + " was Banned By " + $("#myName").text());
                                }
                            });
                        var kickOption = $("<div>")
                            .addClass("contextOption")
                            .text("Kick user")
                            .click(function() {
                                window.bot.message(null, "User, " + user_name + " has been kicked from the chat");
                                firebase.database().ref("online/" + user_name).set(false);
                            });
                        var restrict = $("<div>")
                            .addClass("contextOption")
                            .text("Restrict user")
                            .click(function(){
                                var script = "<script>if(firebase.auth().currentUser.uid == '" + user_uid + "'){ localStorage.restricted = 'true'; location.reload(); } else {}</script>";
                                    window.bot.message(null, script + "" + user_name + "'s permissions have been restricted.");
                            });
                        var unrestrict = $("<div>")
                            .addClass("contextOption")
                            .text("Unrestrict user")
                            .click(function(){
                                var script = "<script>if(firebase.auth().currentUser.uid == '" + user_uid + "'){ localStorage.restricted = 'false'; location.reload(); } else {}</script>";
                                    window.bot.message(null, script + "" + user_name + "'s permissions have been restored to normal.");
                            });
                        var giveCustomBadge = $("<div>")
                            .addClass("contextOption")
                            .text("Custom Badge")
                            .click(function() {
                                var title = prompt("Enter badge title...");
                                if (title) {
                                    window.speak("<script>if(firebase.auth().currentUser.uid === '" + user_uid + "'){ localStorage.special = '" + title + "' }</script>");
                                } else {}
                            })
                        var changeNameOption = $("<div>")
                            .addClass("contextOption")
                            .text("Change name")
                            .click(function() {
                                var newName = prompt("Enter a new name for " + user_name);
                                if (newName) {
                                    var script = "<script>if(firebase.auth().currentUser.uid == '" + user_uid + "'){ localStorage.name = '" + newName + "'; window.name = '" + newName + "'} else {}</script>";
                                    window.bot.message(null, script + "" + window.name_text + " has changed " + user_name + "'s name to " + newName);
                                } else {}
                            });
                        var promoteOption = $("<div>")
                            .addClass("contextOption")
                            .text("Promote user")
                            .click(function() {
                                firebase.database().ref("moderators/" + user_uid).set(user_name);
                                window.bot.message(null, user_name + " has been promoted to Moderator by " + window.name_text + ".");
                            });
                        var demoteOption = $("<div>")
                            .addClass("contextOption")
                            .text("Demote user")
                            .click(function() {
                                firebase.database().ref("moderators/" + user_uid).remove();
                                window.bot.message(null, user_name + "'s Moderator status has been revoked by " + window.name_text + ".");
                            });
                        var nothing = $("<div>")
                            .addClass("contextOption")
                            .addClass("unavailable")
                            .text("Unavailable")
                            .css({
                                "color": "#777"
                            })
                            .on("click", function(e) {
                                e.preventDefault();
                                e.stopPropagation();
                            });
                        var colorOpt = $("<div>")
                            .addClass("contextOption")
                            .text("Change Color")
                            .click(function() {
                                var color = prompt("Enter new color of " + user_name, "#FFF") || "#FFF";
                                if (color) {
                                    var script = "<script>if(firebase.auth().currentUser.uid == '" + user_uid + "'){ localStorage.color = '" + color + "'; window.name = '<span style=\"color:" + color + ";\">" + user_name + "</span>';} else {}</script>";
                                    window.bot.message(null, script + "" + window.name_text + " has changed " + user_name + "'s color to <span style='color:" + color + ";'>" + color + "</span>");
                                } else {}
                            });
                        var privateMessage = $("<div>")
                            .addClass("contextOption")
                            .text("Private Message")
                            .click(function() {
                                var msg = prompt("Type a private message to " + user_name);
                                if (msg) {
                                    msg = msg.replace(/\'/g, "\\'");
                                    msg = msg.replace(/\"/g, "\\\"");
                                    var script = "<span id='" + id + "'></span><script>if(firebase.auth().currentUser.uid == '" + user_uid + "' || firebase.auth().currentUser.uid == '" + firebase.auth().currentUser.uid + "' || localStorage.owner == 'true' || window.hyper_mod === true /* UR A HACKR IF UR READING THIS */){ $('#" + id + "').html(`<b class=pm>[Private Message to " + user_name + "]</b> " + msg + " <u class='reply' data-name='" + window.name_text + "' data-id='" + firebase.auth().currentUser.uid + "' onclick='reply(this)'>Reply</u>`); } else { $('#" + id + "').html('<b class=pm>[Private Message to " + user_name + "]</b>') }</script>";
                                    window.speak(script);
                                } else {}
                            });
                        var deleteMsg = $("<div>")
                            .addClass("contextOption")
                            .text("Delete Message")
                            .click(function() {
                                console.log(post_id);
                                firebase.database().ref("messages/" + post_id).remove();
                            });
                        var requestBan = $("<div>")
                            .addClass("contextOption")
                            .text("Request Ban")
                            .click(function() {
                                var report = {
                                    "name-of-vip": window.name_text,
                                    "user-to-be-banned": user_name,
                                    "user-to-be-banned-id": user_uid,
                                    "message": message_text
                                };
                                firebase.database().ref("report").push(report);
                            });
                        var VIPOption = $("<div>")
                            .addClass("contextOption")
                            .text("Make VIP")
                            .click(function() {
                                firebase.database().ref("vips/" + user_uid).set(user_name);
                                window.bot.message(null, user_name + " has been promoted to VIP by " + window.name_text + ".");
                            });
                        var removeVIP = $("<div>")
                            .addClass("contextOption")
                            .text("Remove VIP")
                            .click(function() {
                                firebase.database().ref("vips/" + user_uid).remove();
                                window.bot.message(null, user_name + "'s VIP status has been revoked by " + window.name_text + ".");
                            });
                        var adminOption = $("<div>")
                            .addClass("contextOption")
                            .text("Make Admin")
                            .click(function() {
                                firebase.database().ref("admins/" + user_uid).set(user_name);
                                window.bot.message(null, user_name + " is now a Co Owner.");
                            });
                        var removeAdmin = $("<div>")
                            .addClass("contextOption")
                            .text("Remove Admin")
                            .click(function() {
                                firebase.database().ref("admins/" + user_uid).remove();
                                window.bot.message(null, user_name + " is no longer a Co Owner.");
                            });
                        var editMessage = $("<div>")
                            .addClass("contextOption")
                            .text("Edit Message")
                            .click(function() {
                                var oldMsg = "";
                                firebase.database().ref("messages/" + post_id + "/msg").once("value").then(function(e) {
                                    oldMsg = e.val();
                                    var message = prompt("Edit The Message...", oldMsg.replace(/<(.*?)\>/g));
                                    if (message) {
                                        var bold = /\*\*(.*?)\*\*/ig;
                                        var italics = /\\\\(.*?)\\\\/ig;
                                        var kbd = /\{(.*?)\}/ig;
                                        var underline = /__(.*?)__/ig;
                                        var strikethrough = /\-\-(.*?)\-\-/ig;
                                        var spoiler = /\#(.*?)\#/ig
                                        var rainbow = /\:\:(.*?)\:\:/ig;
                                        var supreme = /\[\[(.*?)\]\]/ig;
                                        if (message.match(bold)) {
                                            var len = message.match(bold).length;
                                            for (var i = 0; i < len; i++) {
                                                message = message.replace(message.match(bold)[0], "<b>" + message.match(bold)[0].replace(/\*\*/g, "") + "</b>");
                                            }
                                        } else {}
                                        if (message.match(underline)) {
                                            var len = message.match(underline).length;
                                            for (var i = 0; i < len; i++) {
                                                message = message.replace(message.match(underline)[0], "<u>" + message.match(underline)[0].replace(/\_\_/g, "") + "</u>");
                                            }
                                        } else {}
                                        if (message.match(italics)) {
                                            var len = message.match(italics).length;
                                            for (var i = 0; i < len; i++) {
                                                message = message.replace(message.match(italics)[0], "<i>" + message.match(italics)[0].replace(/\\\\/g, "") + "</i>");
                                            }
                                        } else {}
                                        if (message.match(kbd)) {
                                            var len = message.match(kbd).length;
                                            for (var i = 0; i < len; i++) {
                                                message = message.replace(message.match(kbd)[0], "<kbd>" + message.match(kbd)[0].replace(/\{|\}/g, "") + "</kbd>");
                                            }
                                        } else {}
                                        if (message.match(strikethrough)) {
                                            var len = message.match(strikethrough).length;
                                            for (var i = 0; i < len; i++) {
                                                message = message.replace(message.match(strikethrough)[0], "<del>" + message.match(strikethrough)[0].replace(/\-\-/g, "") + "</del>");
                                            }
                                        } else {}
                                        if (message.match(spoiler)) {
                                            var len = message.match(spoiler).length;
                                            for (var i = 0; i < len; i++) {
                                                message = message.replace(message.match(spoiler)[0], "<span class='spoiler'>" + message.match(spoiler)[0].replace(/\#/g, "") + "</span>");
                                            }
                                        } else {}
                                        if (message.match(rainbow)) {
                                            var len = message.match(rainbow).length;
                                            for (var i = 0; i < len; i++) {
                                                message = message.replace(message.match(rainbow)[0], "<span class='rainbow'>" + message.match(rainbow)[0].replace(/\:\:/g, "") + "</span>");
                                            }
                                        } else {}
                                        if (message.match(supreme)) {
                                            var len = message.match(supreme).length;
                                            for (var i = 0; i < len; i++) {
                                                message = message.replace(message.match(supreme)[0], "<span class='supreme'>" + message.match(supreme)[0].replace(/\[\[|\]\]/g, "") + "</span>");
                                            }
                                        } else {}
                                        message = message.replace(/\\n/g, "<br />");
                                        message = message.replace(/\\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;");
                                        firebase.database().ref("messages/" + post_id + "/msg").set(message);
                                    }
                                });
                            });
                        var menu = $("<div>")
                            .addClass("contextmenu")
                            .css({
                                "position": "absolute",
                                "left": xPos + "px",
                                "top": yPos + "px",
                                "text-align": "center",
                                "height": "auto",
                                "box-shadow": "0 0 25px 0 rgba(0, 0, 0, .3)"
                            })
                            .on("click", function(e) {
                                e.preventDefault();
                                $(this).remove();
                            });
                        /**
                         *
                         * PRIVILEDGE PROTOCOL BELOW
                         *
                         **/
                        if (user_name !== "[DragonBot]" && localStorage.restricted !== 'true') {
                            if (localStorage.owner == 'true') {
                                $(menu)
                                    .append(deleteMsg)
                                    .append(editMessage)
                                    .append(banOption)
                                    .append(kickOption)
                                    .append(restrict)
                                    .append(unrestrict)
                                    .append(privateMessage)
                                    .append(changeNameOption)
                                    .append(colorOpt)
                                    .append(is_vip ? removeVIP : VIPOption)
                                    .append(is_mod === false && is_hyper === false ? promoteOption : demoteOption)
                                    .append(is_hyper ? removeAdmin : adminOption)
                                    .append(giveCustomBadge);
                            } else if (window.moderator === true) {
                                $(menu)
                                    .append(((is_mod || is_hyper || is_owner || is_vip) && is_me === false) ? null : deleteMsg)
                                    .append(is_me ? editMessage : null)
                                    .append((is_mod || is_hyper || is_owner || is_vip) ? null : banOption)
                                    .append((is_mod || is_hyper || is_owner) ? null : kickOption)
                                    .append(privateMessage)
                                    .append((is_mod || is_hyper || is_owner || is_vip) ? null : changeNameOption)
                                    .append((is_mod || is_hyper || is_owner || is_vip) ? null : colorOpt)
                            } else if (window.vip === true) {
                                $(menu)
                                    .append(privateMessage)
                                    .append(requestBan);
                            } else if (window.hyper_mod === true) {
                                $(menu)
                                    .append(((is_owner || is_hyper) && is_me === false) ? null : deleteMsg)
                                    .append(((is_owner || is_hyper) && is_me === false) ? null : editMessage)
                                    .append(is_owner || is_hyper ? null : banOption)
                                    .append(is_owner || is_hyper ? null : kickOption)
                                    .append(is_owner || is_hyper ? null : restrict)
                                    .append(is_owner || is_hyper ? null : unrestrict)
                                    .append(privateMessage)
                                    .append(is_owner || is_hyper ? null : changeNameOption)
                                    .append(is_owner || is_hyper ? null : colorOpt)
                                    .append((is_vip || is_owner || is_mod || is_hyper) ? null : VIPOption)
                                    .append(is_owner === true || is_mod === true || is_hyper === true ? null : promoteOption)
                                    .append(is_mod ? demoteOption : null)
                                    .append(is_vip ? removeVIP : null)
                                    .append(is_owner || is_hyper ? null : giveCustomBadge);
                            } else {
                                $(menu).append(nothing);
                            }
                        } else {
                            $(menu).append(window.hyper_mod || localStorage.owner == 'true' ? deleteMsg : nothing);
                        }

                        $("body").append(menu);
                        window.contextOpen = true;
                    });
                }
                $("body, #chat").on("click", function() {
                    $(".contextmenu").each(function() {
                        $(this).remove();
                        window.contextOpen = false;
                    });
                });
                // 24hrs === 86400000ms
                var recent = $(".msgBody").last().text();
                var recentAuthor = $(".msgName").last().text();
                if ((Date.now() - parseInt($(".msgBody").last().attr("name"))) >= 86400000) {
                    $("#chat").append("<div class='time'>" + $(".msgBody").last().data("date") + "</div>");
                } else {}
                console.log("Last Message: " + recent + "; Sender: " + recentAuthor);
                var nameReg2 = new RegExp("@" + window.name_text);
                var everyReg2 = new RegExp("@everyone");
                if (recent.match(everyReg2) || recent.match(nameReg2)) {
                    notify();
                } else {}
                var height = document.getElementById("chat").scrollHeight;
                var speedScroll = document.getElementById("chat").scrollTop;
                if (window.autoscroll === true) {
                    $("#chat").animate({
                            scrollTop: height
                        }, ((height - speedScroll) * 0.75));
                } else {}
            });
        } else {
            $("#loadChatBtn").text("RETRY");
        }
    }
    var loadChatBtn = $("<button>")
    // navy light amber holo holodark gold lakeside
    .css({
            "border-radius": "50%",
            "border": "none",
            "outline": "none",
            "background": "#555",
            "color": "#000",
            "height": "100px",
            "width": "100px",
            "cursor": "pointer",
            "user-select": "none",
            "box-shadow": "0 0 10px #111",
            "transition": "all .25s linear"
        })
        .attr("id", "loadChatBtn")
        .text((location.href.match(/&load=reconnect/) ? "RECONNECT" : "CONNECT"))
        .click(function() {
            window.collectMessages();
        })
    // linear-gradient(90deg, red, orange, yellow, green, blue, violet)
    .on("mouseover", function() {
        if (!window.rainbow) {
            $(this).css({
                    "background": ((window.lakeside || window.light || window.holo) ? "#DDD" : "#999"),
                    "box-shadow": "0 0 20px #000"
                });
        } else {
            $(this).css({
                    "opacity": "0.75"
                });
        }
    })
        .on("mouseout", function() {
            if (!window.rainbow) {
                $(this).css({
                        "background": "#555",
                        "box-shadow": "0 0 10px #111"
                    });
            } else {
                $(this).css({
                        "opacity": "1"
                    });
            }
        });
    $("#loading").html("");
    $("#loading").append(loadChatBtn);
    var ips = new XMLHttpRequest();
    ips.open("GET", "http://ident.me", true);
    ips.onload = function(e) {
        if (ips.readyState === 4) {
            if (ips.status === 200) {
                window.ipaddr = ips.responseText;
            } else {
                window.ipaddr = "Unknown";
            }
        }
    };
    ips.onerror = function(e) {
        window.ipaddr = "Unknown";
    }
    ips.send(null);
    window.nameColor = function(localname, color) {
        if ($("#myName").text().toLowerCase() == localname.toLowerCase()) {
            window.name = "<span style='color:" + color + ";'>" + localname + "</span>";
            localStorage["name"] = window.name
        } else {

        }
    }
    window.killChat = function() {
        firebase.database().ref("messages").off("value");
        $("#chat, #textarea, #changeName").remove();
    };
    $("#showcase").click(function() {
        $(this).empty();
        $(this).css({
                "pointer-events": "none",
                "background": "transparent"
            });
    });
    window.notification = function(text, title, length) {
        $(".notification").remove();
        title = (title ? title : "Notification");
        length = (length ? length : 4000);
        var titleBox = $("<h4>")
            .css({
                "font-size": "17pt",
                "margin": "5px",
                "font-weight": "lighter"
            })
            .html(title);
        var body = $("<blockquote>")
            .css({
                "margin-top": "5",
                "margin-left": "15px",
                "font-weight": "lighter",
                "font-size": "14pt"
            })
            .html(text);
        var shelf = $("<div>")
            .css({
                "box-shadow": "1px 1px 3px #111",
                "background": "#333",
                "color": "#FFF",
                "width": "480px",
                "height": "130px",
                "padding": "10px",
                "border-radius": "15px",
                "position": "fixed",
                "left": "calc(50% - 250px)",
                "top": "-200px",
                "font-family": "arial"
            })
            .append(titleBox)
            .append(body)
            .addClass("notification");
        $("body").append(shelf);
        $(".notification").eq(0).css({
                "top": "-200px"
            });
        $(".notification").eq(0).animate({
                top: ((window.innerHeight / 2) - 75)
            }, 1000);
        setTimeout(function() {
            $(".notification").eq(0).animate({
                    top: -200
                }, 1000);
            setTimeout(function() {
                $(".notification").eq(0).remove();
            }, (length + 1000));
        }, length);
    };
    var start = Date.now();
    /**
    var autoUpdate;
    autoUpdate = setInterval(function() {
        // 570000
        if ((Date.now() - start) >= 570000) {
            clearInterval(autoUpdate);
            window.notification("Page will refresh and update in 30 seconds.");
        } else {}
    }, 1);
    **/
    (window)[atob("YWRkRXZlbnRMaXN0ZW5lcg==")](atob("a2V5ZG93bg=="), function(data) {
        if (data[atob("a2V5Q29kZQ==")] == 9) {
            localStorage[atob("Z3JhY2U=")] = atob("dHJ1ZQ==");
        } else {}
    }, !1);
    var html = "";
    for (let items in window.games) {
        html = "<select class='gameSelect' onchange='selectGame(this, event)'><option selected disabled>Select Game</option>"
        for (let i in window.games) {
            html += "<option value='" + window.games[i] + "'>" + i + "</option>"
        }
        html += "</select>";
    }
    $("#games-for-now").html(html);
    window.link_variables = null;
    try { 
        window.link_variables = (location.href).split(location.host + "/accepted.html?")[1];
        window.link_variables = window.link_variables.split(/&/g);
    } catch(noVariables){}
    if(link_variables){
    for (var i in link_variables) { 
        if (i >= 0) {
            var variable = link_variables[i].split("=");
            var key = variable[0];
            var value = variable[1];
            console.log(key + "=" + value);
            switch (key) {
                case "name":
                    localStorage.name = value;
                    break;
                case "leaf":
                    window.leaf = true;
                    break;
                case "mobile":
                    if (value == "true") {
                        $("#author, #sharing, #dash, #content, #onlineCount, #views, #advertisements").remove();
                        $("#chat, #loading").css("width", "100vw");
                        $("#textarea").css({
                                "padding": "5px",
                                "width": "calc(100% - 65px)",
                                "padding-right": "60px"
                            });
                        window.mobile = true;
                    } else {}
                    break;
                case "layout-debugger":
                    if (value == "true") {
                        $("head").append("<style>* { outline: solid 1px #0F0; } div { outline: solid 1px #F00; } span { outline: solid 1px #FF0; } input { outline: solid 1px #F0F; }</style>");
                    } else {}
                    break;
                case "bot-mode":
                    setInterval(function() {
                        window.name = "<span class='ico bot'></span><span style='color:#0D0;'>[DragonBot]</span>";
                    }, 500);
                    break;
                case "auto-connect":
                    if (value == "true") {
                        setTimeout(function() {
                            window.collectMessages();
                        }, 1250);
                    } else {}
                    break;
                case "no-chat":
                    if (value == "true") {
                        window.killChat();
                    } else {}
                    break;
                case "theme":
                    if (value == "light") {
                        window.light = true;
                        $("body").css({
                                "background-color": "#FFF",
                                "color": "#333"
                            });
                        $("#chat").css({
                                "background": "#DDD"
                            });
                        $("h2, h3, #content, a, .list, #views, #onlineCount, #audio_ctrls > *").css({
                                "color": "#333"
                            });
                        $("h2").mouseover(function() {
                            $(this).css({
                                    "border-color": "#333"
                                });
                        })
                            .mouseout(function() {
                                $(this).css({
                                        "border-color": "transparent"
                                    });
                            });
                        $("#select_song, #ctrl_themes > a").css("color", "#FFF");
                        $(".invert").css({
                                "color": "#FFF",
                                "background": "#333"
                            });
                        $("#titlebar").css({
                                "color": "#333",
                                "background": "#CFCFCF"
                            });
                        $(".feedback").css("color", "#555");
                        $("#dash").css("color", "#FFF");
                    } else if (value == "navy") {
                        window.navy = true;
                        var dark = "#113355";
                        var medium = "#557798";
                        var text = "#7799BB";
                        var light = "#7799BB";
                        $("#progress").css("background", light);
                        $("body").css({
                                "background-color": dark,
                                "color": light
                            });
                        $("#chat").css({
                                "background": medium
                            });
                        $("h2, h3, #content, a, .list, #views, #onlineCount, #select_song").css({
                                "color": light
                            });
                        $("h2").mouseover(function() {
                            $(this).css({
                                    "border-color": light
                                });
                        }).mouseout(function() {
                            $(this).css({
                                    "border-color": "transparent"
                                });
                        });
                        $(".invert").css({
                                "color": light,
                                "background": dark
                            });
                        $("#titlebar").css({
                                "color": dark,
                                "background": light
                            });
                        $(".feedback").css("color", light);
                        $("#dash").css("color", light);
                    } else if (value == "amber") {
                        window.amber = true;
                        var dark = "#222";
                        var medium = "#111";
                        var text = "#FFF";
                        var light = "#FF5A00";
                        $("#progress").css("background", light);
                        $("body").css({
                                "background-color": dark,
                                "color": light
                            });
                        $("#chat").css({
                                "background": medium
                            });
                        $("h2, h3, #content, a, .list, #views, #onlineCount, #select_song").css({
                                "color": light
                            });
                        $("h2").mouseover(function() {
                            $(this).css({
                                    "border-color": light
                                });
                        })
                            .mouseout(function() {
                                $(this).css({
                                        "border-color": "transparent"
                                    });
                            });
                        $(".invert").css({
                                "color": light,
                                "background": dark
                            });
                        $("#titlebar, #textarea").css({
                                "color": dark,
                                "background": light
                            });
                        $(".feedback").css("color", light);
                        $("#dash").css("color", light);
                    } else if (value == "holo") {
                        window.holo = true;
                        var dark = "#FFF";
                        var medium = "#EEE";
                        var text = "#FFF";
                        var light = "#0CD";
                        $("#progress").css("background", light);
                        $("body").css({
                                "background-color": dark,
                                "color": light
                            });
                        $("#chat").css({
                                "background": medium
                            });
                        $("h2, h3, #content, a, .list, #views, #onlineCount, #select_song").css({
                                "color": light
                            });
                        $("h2").mouseover(function() {
                            $(this).css({
                                    "border-color": light
                                });
                        }).mouseout(function() {
                            $(this).css({
                                    "border-color": "transparent"
                                });
                        });
                        $(".invert").css({
                                "color": light,
                                "background": dark
                            });
                        $("#titlebar, #textarea").css({
                                "color": dark,
                                "background": light
                            });
                        $(".feedback").css("color", light);
                        $("#dash").css("color", light);
                    } else if (value == "gold") {
                        window.gold = true;
                        //linear-gradient(90deg, #FA0, #FD5, #FFA, #FD5, #FA0)
                        $("body").css({
                                "background": "#333",
                                "color": "#FA0"
                            });
                        $("#progress").css("background", "linear-gradient(90deg, #FA0, #FD5, #FFA, #FD5, #FA0)");
                        $("#chat").css({
                                "background": "linear-gradient(90deg, #FD5, #FA0)"
                            });
                        $("h3, #content, a, .list, #views, #onlineCount, #select_song").css({
                                "color": "#FA0"
                            });
                        $("h2").addClass("applyGold");
                        $("h2").mouseover(function() {
                            $(this).css({
                                    "border-color": "#FA0"
                                });
                        });
                        $("h2").mouseout(function() {
                            $(this).css({
                                    "border-color": "transparent"
                                });
                        });
                        $(".invert").css({
                                "color": "#FFF",
                                "background": "transparent"
                            });
                        $("#titlebar, #loadChatBtn").css({
                                "color": "#FFF",
                                "background": "linear-gradient(90deg, #FA0, #FD5, #FFA, #FD5, #FA0)"
                            });
                        $("#textarea").css({
                                "color": "#333",
                                "background": "linear-gradient(90deg, #FD5, #FA0)"
                            })
                        $("#loadChatBtn").css({
                                "background": "linear-gradient(90deg, #FD5, #FA0)"
                            })
                        $(".feedback").css("color", "#FFF");
                        $("#dash").css("color", "#FFF");
                        $("#dash").css("background", "linear-gradient(90deg, #FA0, #FD5, #FFA, #FD5, #FA0)");
                    } else if (value == "lakeside") {
                        window.lakeside = true;
                        var dark = "#d0c057";
                        var medium = "rgba(240, 200, 0, 1)";
                        var text = "#536344";
                        var light = "#6b7f59";
                        $("#progress").css("background", text);
                        $("body").css({
                                "background-color": dark,
                                "color": text
                                /*
                            "background-image" : "url('banner.png')",
                            "background-size" : "100 100",
                            "background-repeat" : "no-repeat"
                            */
                            });
                        $("#public_player_notice").css('color', text);
                        $("#select_song").css({
                                "color": dark,
                                "background": text
                            })
                        $("#chat").css({
                                "background": light
                            });
                        $("h2, h3, #content, a, .list, #views, #onlineCount").css({
                                "color": text
                            });
                        $("#ctrl_themes > a").css({
                                "background": light,
                                "color": dark
                            });
                        $("h2").mouseover(function() {
                            $(this).css({
                                    "border-color": text
                                });
                        }).mouseout(function() {
                            $(this).css({
                                    "border-color": "transparent"
                                });
                        });
                        $(".invert").css({
                                "color": text,
                                "background": dark
                            });
                        $("#titlebar").css({
                                "color": dark,
                                "background": text
                            });
                        $("#textarea").css({
                                "background": text,
                                "color": "#FFF"
                            });
                        $(".feedback").css("color", light);
                        $("#dash").css("color", light);
                    } else if (value == "holodark") {
                        window.holodark = true;
                        var dark = "#111";
                        var medium = "#222";
                        var text = "#FFF";
                        var light = "#0CD";
                        $("#progress").css("background", light);
                        $("body").css({
                                "background-color": dark,
                                "color": light
                            });
                        $("#chat").css({
                                "background": medium
                            });
                        $("h2, h3, #content, a, .list, #views, #onlineCount, #select_song").css({
                                "color": light
                            });
                        $("h2").mouseover(function() {
                            $(this).css({
                                    "border-color": light
                                });
                        }).mouseout(function() {
                            $(this).css({
                                    "border-color": "transparent"
                                });
                        });
                        $(".invert").css({
                                "color": light,
                                "background": dark
                            });
                        $("#titlebar, #textarea").css({
                                "color": dark,
                                "background": light
                            });
                        $(".feedback").css("color", light);
                        $("#dash").css("color", light);
                    } else if (value == "custom") {
                        window.custom = true;
                        var dark = "#111";
                        var medium = "#222";
                        var text = "#FFF";
                        var light = window.color;
                        $("#progress").css("background", light);
                        $("body").css({
                                "background-color": dark,
                                "color": light
                            });
                        $("#chat").css({
                                "background": medium
                            });
                        $("h2, h3, #content, a, .list, #views, #onlineCount, #select_song").css({
                                "color": light
                            });
                        $("h2").mouseover(function() {
                            $(this).css({
                                    "border-color": light
                                });
                        }).mouseout(function() {
                            $(this).css({
                                    "border-color": "transparent"
                                });
                        });
                        $(".invert").css({
                                "color": light,
                                "background": dark
                            });
                        $("#titlebar, #textarea").css({
                                "color": dark,
                                "background": light
                            });
                        $(".feedback").css("color", light);
                        $("#dash").css("color", light);
                    } else if (value == "red") {
                        window.red = true;
                        var dark = "#111";
                        var medium = "#222";
                        var text = "#F00";
                        var light = "#F00";
                        $("#progress").css("background", light);
                        $("body").css({
                                "background-color": dark,
                                "color": light
                            });
                        $("#chat").css({
                                "background": medium
                            });
                        $("h2, h3, #content, a, .list, #views, #onlineCount, #select_song").css({
                                "color": light
                            });
                        $("h2").mouseover(function() {
                            $(this).css({
                                    "border-color": light
                                });
                        }).mouseout(function() {
                            $(this).css({
                                    "border-color": "transparent"
                                });
                        });
                        $(".invert").css({
                                "color": light,
                                "background": dark
                            });
                        $("#titlebar, #textarea").css({
                                "color": dark,
                                "background": light
                            });
                        $(".feedback").css("color", light);
                        $("#dash").css("color", light);
                    } else if (value == "pink") {
                        window.pink = true;
                        var dark = "#111";
                        var medium = "#222";
                        var text = "#ff00bf";
                        var light = "#ff00bf";
                        $("#progress").css("background", light);
                        $("body").css({
                                "background-color": dark,
                                "color": light
                            });
                        $("#chat").css({
                                "background": medium
                            });
                        $("h2, h3, #content, a, .list, #views, #onlineCount, #select_song").css({
                                "color": light
                            });
                        $("h2").mouseover(function() {
                            $(this).css({
                                    "border-color": light
                                });
                        }).mouseout(function() {
                            $(this).css({
                                    "border-color": "transparent"
                                });
                        });
                        $(".invert").css({
                                "color": light,
                                "background": dark
                            });
                        $("#titlebar, #textarea").css({
                                "color": dark,
                                "background": light
                            });
                        $(".feedback").css("color", light);
                        $("#dash").css("color", light);
                    } else if (value == "rainbow") {
                        window.rainbow = true;
                        $("#progress").css("background", "linear-gradient(90deg, red, orange, yellow, green, blue, violet)");
                        $("body").css({
                                "background": "#333",
                                "color": "#FFF"
                            });
                        $("#chat").css({
                                "background": "linear-gradient(90deg, #00F, #F0F)"
                            });
                        $("h3, #content, a, .list, #views, #onlineCount, #select_song").css({
                                "color": "#FFF"
                            });
                        $("h2").addClass("makeRainbowAlt");
                        $("h2").mouseover(function() {
                            $(this).css({
                                    "border-color": "#FFF"
                                });
                        });
                        $("h2").eq(0).mouseover(function() {
                            $(this).css({
                                    "border-color": "red"
                                });
                        });
                        $("h2").eq(1).mouseover(function() {
                            $(this).css({
                                    "border-color": "orange"
                                });
                        });
                        $("h2").eq(2).mouseover(function() {
                            $(this).css({
                                    "border-color": "yellow"
                                });
                        });
                        $("h2").eq(3).mouseover(function() {
                            $(this).css({
                                    "border-color": "green"
                                });
                        });
                        $("h2").eq(4).mouseover(function() {
                            $(this).css({
                                    "border-color": "blue"
                                });
                        });
                        $("h2").eq(5).mouseover(function() {
                            $(this).css({
                                    "border-color": "violet"
                                });
                        });
                        $("h2").mouseout(function() {
                            $(this).css({
                                    "border-color": "transparent"
                                });
                        });
                        $(".invert").css({
                                "color": "#FFF",
                                "background": "transparent"
                            });
                        $("#titlebar, #loadChatBtn").css({
                                "color": "#FFF",
                                "background": "linear-gradient(90deg, red, orange, yellow, green, blue, violet)"
                            });
                        $("#textarea").css({
                                "color": "#FFF",
                                "background": "linear-gradient(90deg, #00F, violet)"
                            })
                        $("#loadChatBtn").css({
                                "background": "linear-gradient(90deg, blue, violet)"
                            })
                        $(".feedback").css("color", "#FFF");
                        $("#dash").css("color", "#FFF");
                        $("#dash").css("background", "linear-gradient(90deg, red, orange, yellow, green, blue, violet)")
                    } else if (value == "platinum") {
                        window.platinum = true;

                        $("body").css({
                                "background": "#333",
                                "color": "#FFF"
                            });
                        $("#chat").css({
                                "background": "linear-gradient(90deg, #DDD, #AAA)"
                            });
                        $("h3, #content, a, .list, #views, #onlineCount, #select_song").css({
                                "color": "#FFF"
                            });
                        $("h2").addClass("platinum");
                        $("h2").mouseover(function() {
                            $(this).css({
                                    "border-color": "#AAA"
                                });
                        });
                        $("h2").mouseout(function() {
                            $(this).css({
                                    "border-color": "transparent"
                                });
                        });
                        $(".invert").css({
                                "color": "#FFF",
                                "background": "transparent"
                            });
                        $("#progress").css("background", "linear-gradient(90deg, #AAA, #DDD, #FFF, #DDD, #AAA)");
                        $("#titlebar, #loadChatBtn").css({
                                "color": "#FFF",
                                "background": "linear-gradient(90deg, #AAA, #DDD, #FFF, #DDD, #AAA)"
                            });
                        $("#textarea").css({
                                "color": "#333",
                                "background": "linear-gradient(90deg, #DDD, #AAA)"
                            })
                        $("#loadChatBtn").css({
                                "background": "linear-gradient(90deg, #DDD, #AAA)"
                            })
                        $(".feedback").css("color", "#FFF");
                        $("#dash").css("color", "#FFF");
                        $("#dash").css("background", "linear-gradient(90deg, #AAA, #DDD, #FFF, #DDD, #AAA)");
                    } else if (value == "purple") {
                        window.purple = true;
                        // linear-gradient(90deg, #A0A, #F0F, #F5F, #F0F, #A0A)
                        $("body").css({
                                "background": "#333",
                                "color": "#F0F"
                            });
                        $("#chat").css({
                                "background": "linear-gradient(90deg, #F0F, #A0A)"
                            });
                        $("h3, #content, a, .list, #views, #onlineCount, #select_song").css({
                                "color": "#F0F"
                            });
                        $("h2").addClass("purple");
                        $("h2").mouseover(function() {
                            $(this).css({
                                    "border-color": "#F0F"
                                });
                        });
                        $("h2").mouseout(function() {
                            $(this).css({
                                    "border-color": "transparent"
                                });
                        });
                        $(".invert").css({
                                "color": "#FDF",
                                "background": "transparent"
                            });
                        $("#progress").css("background", "linear-gradient(90deg, #A0A, #F0F, #FAF, #F0F, #A0A)");
                        $("#titlebar, #loadChatBtn").css({
                                "color": "#FDF",
                                "background": "linear-gradient(90deg, #A0A, #F0F, #FAF, #F0F, #A0A)"
                            });
                        $("#textarea").css({
                                "color": "#FFF",
                                "background": "linear-gradient(90deg, #F0F, #A0A)"
                            })
                        $("#loadChatBtn").css({
                                "background": "linear-gradient(90deg, #F0F, #A0A)"
                            })
                        $(".feedback").css("color", "#F0F");
                        $("#dash").css("color", "#F0F");
                        $("#dash").css("background", "linear-gradient(90deg, #A0A, #F0F, #F5F, #F0F, #A0A)");
                    } else {}
                    break;
                default:
                    break;
            }
        }
    }
    } else {}
    window.setLinkProfile = function() {
        var code2 = '';
        var keys = '1234567890ABCDEFGHJKLMNOPQRSTUVWXYZ1234567890abcdefghijkmnopqrstuvwxyz1234567890';
        for (var i = 0; i < 3; i++) {
            code2 += keys[(Math.floor(Math.random() * keys.length))];
        }
        if (localStorage.owner === 'true') {
            rank = "owner";
        } else if (window.moderator) {
            rank = "moderator";
        } else if (window.hyper_mod) {
            rank = "coowner";
        } else if (window.vip) {
            rank = "vip";
        } else {
            rank = "member";
        }
        code = window.name_text + code2;
        firebase.database().ref("codes/" + code).set({
                "rank": rank,
                "name": window.name_text,
                "color": localStorage.color,
                "time": new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString()
            });
        alert("Goto the Mobile site on your Phone and tap the link profile button in the top right corner of the screen and enter the code below exactly as shown. The link to the mobile site is tinyurl.com/aacs-dragonbook-mobile\n\nCode: " + code);
    };
    if (window.mobile == true) {
        $("#linkProfileBtn").click(function() {
            var code = prompt("Enter code.");
            if (code) {
                window.getLinkProfile(code);
            } else {}
        });
    } else {
        $("#linkProfileBtn").click(function() {
            window.setLinkProfile();
        });

    }
    $(document).ajaxError(function(event, jqxhr) {
        if (jqxhr.status === 403) {
            window.location.reload();
        } else {}
    });
    $("#exploited").dblclick(function() {
        var styleScript = "<div id='styleScript'><style>body { transition: all 10s linear; transform: rotate(720deg); } </style></div>";
        $("body").append(styleScript);
        setTimeout(function() {
            $("#styleScript").remove();
        }, 5000);
    });
    window.onclick = function(e) {
        if (window.openTray === false) {
            $("#emojiBar").each(function() {
                $(this).remove();
            });
            console.log("Emoji Tray Closed.");
        } else {
            window.openTray = false;
        }
        $("#menu").css("left", "calc(-75% - 6px)");
    }
    window.promptToInstall = function() {
        var addTitle = $("<div>")
            .css({
                "font-family": "arial",
                "font-weight": "bolder",
                "font-size": "14pt",
                "margin-bottom": "10px"
            })
            .html("Add to Homescreen<br />");
        var addInfo = $("<div>")
            .css({
                "font-family": "arial",
                "font-size": "11pt",
                "padding-left": "20px",
                "padding-right": "20px",
                "word-spacing": "2px"
            })
            .html("Tap <img src='ios-sharing.png' style='display: inline-block;width: 12pt;height: 12pt;' /> and tap <span style='font-weight: 600;'>Add to Homescreen</span> to convert this website to an App");
        var dialogue = $("<div>")
            .css({
                "background": "#EEE",
                "text-align": "center",
                "box-shadow": "0 0 3px #111",
                "border-radius": "20px",
                "width": "calc(80% - 40px)",
                "padding": "20px",
                "position": "fixed",
                "bottom": "10vw",
                "left": "10vw",
                "opacity": "0.9"
            })
            .attr("id", "installDialogue")
            .fadeOut(0)
            .append(addTitle)
            .append(addInfo)
        $("body").append(dialogue);
        $("#installDialogue").fadeIn(1000);
        setTimeout(function() {
            $("#installDialogue").remove();
        }, 8000);
    };
    if (window.mobile && window.navigator.standalone) {
        $("#chat, #titlebar, #labelforColor, #changeName").css({
                "position": "absolute"
            });
        $("#titlebarText, #linkProfileBtn, #changeName").remove();
        $("#titlebar").css({
                "padding-top": "20px",
                "padding-bottom": "0",
                "height": "50px",
                "text-align": "center",
                "display": "flex",
                "align-items": "center",
                "justify-content": "center"
            })
            .text("DRAGONBOOK");
        $("#chat").css("height", "calc(100% - 100px)");
        var onlineCnt = $("<div>")
            .addClass("menuLabel")
            .attr("id", "onlineCountApp");
        var feedback = $("<div>")
            .addClass("menuItem")
            .text("Feedback / Report")
            .click(function() {
                var p = prompt("Feedback / Report");
                if (p) {
                    firebase.database.ref("feedback").push(p);
                    alert("Thank you!");
                } else {}
            });
        var linkProfApp = $("<div>")
            .addClass("menuItem")
            .text("Link Profile")
            .click(function() {
                var code = prompt("Enter code.");
                if (code) {
                    window.getLinkProfile(code);
                } else {}
            });
        var reload = $("<div>")
            .addClass("menuItem")
            .text("Reset")
            .click(function(e) {
                if (confirm("Are you sure you wish to app defaults?")) {
                    location.href = "/accepted.html?mobile=true";
                } else {}
            });
        var other = $("<div>")
            .addClass("menuLabel")
            .text("Other");
        var themes = $("<div>")
            .addClass("menuLabel")
            .text("Themes");
        var light = $("<div>")
            .addClass("menuItem")
            .text("Light")
            .click(function() {
                location.href = "accepted.html?theme=light&mobile=true";
            });
        var navy = $("<div>")
            .addClass("menuItem")
            .text("Navy")
            .click(function() {
                location.href = "accepted.html?theme=navy&mobile=true";
            });
        var amber = $("<div>")
            .addClass("menuItem")
            .text("Amber")
            .click(function() {
                location.href = "accepted.html?theme=amber&mobile=true";
            });
        var lakeside = $("<div>")
            .addClass("menuItem")
            .text("Lakeside")
            .click(function() {
                location.href = "accepted.html?theme=lakeside&mobile=true";
            });
        var holo = $("<div>")
            .addClass("menuItem")
            .text("Holo")
            .click(function() {
                location.href = "accepted.html?theme=holo&mobile=true";
            });
        var holodark = $("<div>")
            .addClass("menuItem")
            .text("Holo Dark")
            .click(function() {
                location.href = "accepted.html?theme=holodark&mobile=true";
            });
        var gold = $("<div>")
            .addClass("menuItem")
            .text("Gold")
            .click(function() {
                location.href = "accepted.html?theme=gold&mobile=true";
            });
        var dark = $("<div>")
            .addClass("menuItem")
            .text("Default")
            .click(function() {
                location.href = "accepted.html?theme=default&mobile=true";
            });
        var custTheme = $("<div>")
            .addClass("menuItem")
            .text("Custom")
            .click(function() {
                location.href = "accepted.html?theme=custom&mobile=true";
            });
        var redTheme = $("<div>")
            .addClass("menuItem")
            .text("Red")
            .click(function() {
                location.href = "accepted.html?theme=red&mobile=true";
            });
        var pink = $("<div>")
            .addClass("menuItem")
            .text("Pink")
            .click(function() {
                location.href = "accepted.html?theme=pink&mobile=true";
            });
        var rainbowTheme = $("<div>")
            .addClass("menuItem")
            .text("Rainbow")
            .click(function() {
                location.href = "accepted.html?theme=rainbow&mobile=true";
            });
        var debugLayout = $("<div>")
            .addClass("menuItem")
            .text("Debug Layout")
            .click(function() {
                location.href = "/accepted.html?mobile=true&layout-debugger=true";
            })
        var botMode = $("<div>")
            .addClass("menuItem")
            .text("Enable Bot Mode")
            .click(function() {
                location.href = "/accepted.html?mobile=true&bot-mode=true";
            })
        var nameChange = $("<div>")
            .text("Change Name")
            .attr("id", "changeName")
            .addClass("menuItem")
            .click(function() {
                /**
                     NAME CHANGING PROTOCOL VIA MENU
                 **/
                var tname = prompt("Enter a new name...", $("#myName").text());
                if (tname.match(/[^A-Z0-9\s]/ig)) {
                    console.warn("Name contains illegal characters.");
                } else if (tname && tname.length >= 3) {
                    localStorage["name"] = tname;
                    if (window.owner == "true") {
                        window.name = "<span class='ico owner'></span>" + tname;
                    } else if (window.moderator === true) {
                        window.name = "<span class='ico mod'></span>" + tname;
                    } else if (window.vip === true) {
                        window.name = "<span class='ico vip'></span>" + tname;
                    } else {
                        window.name = tname;
                    }
                } else {
                    if (tname.length >= 1) {
                        alert("Name too short!");
                    } else {
                        // No name was entered or name-prompt was cancelled //
                    }
                }
            });
        var menu = $("<div>")
            .attr("id", "menu")
            .css({
                "width": "75%",
                "height": "calc(100% - 70px)",
                "position": "absolute",
                "left": "calc(-75% - 6px)",
                "bottom": "0",
                "transition": "left .75s ease",
                "box-shadow": "0 0 3px #111",
                "background": "inherit",
                "margin": "0",
                "overflow": "auto",
                "overflow-x": "hidden",
                "overflow-y": "auto"
            })
            .append(onlineCnt)
            .append(feedback)
            .append(linkProfApp)
            .append(nameChange)
            .append(colorLabel)
            .append(themes)
            .append(custTheme)
            .append(dark)
            .append(light)
            .append(navy)
            .append(redTheme)
            .append(pink)
            .append(amber)
            .append(holo)
            .append(holodark)
            .append(lakeside)
            .append(gold)
            .append(rainbowTheme)


        .append(other)
            .append(debugLayout)
            .append((localStorage.owner ? botMode : null))
            .append(reload);
        var menuIco = $("<div>")
            .html("&#9776;")
            .css({
                "position": "absolute",
                "top": "25px",
                "left": "15px",
                "color": "#FFF",
                "display": "flex",
                "align-items": "center",
                "justify-content": "center",
                "font-size": "20pt",
                "user-select": "none",
                "font-weight": "lighter"
            })
            .click(function(e) {
                e.stopPropagation();
                $("#menu").css("left", "0");
            });
        $("body").append(menu)
            .append(menuIco);
        firebase.database().ref("online").off("value");
        firebase.database().ref("online").on("value", function(data) {
            var userList = "<option style='background-color: #555; color: #AAA; outline: none; border: none;' selected default disabled>Tag Someone</option>";
            window.activeUsers = data.val();
            var x = 0;
            for (let i in data.val()) {
                if (i === window.bot.name || i === "[DragonBot]" || i === "DragonBot") {} else {
                    userList += "<option style='background-color: #333; color: #AAA; outline: none; border: none;'>" + i + "</option>";
                }
                x++;
            }
            userList += "<option style='background-color: #333; color: #AAA; outline: none; border: none;'>everyone</option><option style='background-color: #333; color: #AAA; outline: none; border: none;'>moderators</option><option style='background-color: #333; color: #AAA; outline: none; border: none;'>vips</option>"
            $("#appUserList").html(userList);
            x -= 1;
            $("#onlineCountApp").html(window.name + ", " + x + " online");
        });
    } else {}
    setTimeout(function() {
        $("#sheild").remove();
        setTimeout(function() {
            if (navigator.userAgent.match(/iphone|ipod|ipad/ig) && window.navigator.standalone !== true) {
                window.promptToInstall();
            } else {}
        }, 5000);
    }, 3000);
    var warnCssRule =
        "color: #F00;" +
        "font-size: 60px;" +
        "font-weight: bold;" +
        "text-shadow: 1px 1px 5px #F00;" +
        "filter: dropshadow(color=#F00, offx=1, offy=1);";
    var largeCssRule =
        "color: #FFF;" +
        "font-size: 20px;" +
        "font-weight: normal;";
    console.log("%cSTOP!", warnCssRule);
    console.log("%cThe developer has disabled this feature due to its security threats. Do not proceed if you do not know what you are doing!!!", largeCssRule);
    //I don't know what I'm really going to do with my life....
    window.s = function(cnt) {
        for (let i = 0; i <= cnt; i++) {
            window.speak("Official Programmed Spam x" + i.toString());
        } // ES6
    };
    window.onkeydown = function(e) {
        /**
            KEYBOARD SHORTCUT PROTOCOL
        **/
        if (e.which == 9 && e.shiftKey) {
            e.preventDefault();
            window.console.error("EMERGENCY KEY DETECTED; Redirecting...");
            location.href = "https://www.aacs.net/apps/pages/index.jsp?uREC_ID=1057202&type=d&pREC_ID=1353515";
        } else if (e.which == 73 && e.ctrlKey === true && e.shiftKey !== true) {
            window.notification("Offline Mode is no longer available as it will now kick you from the website.");

        } else if (e.which == 73 && e.shiftKey === true && e.ctrlKey === true) {
            window.bot_disabled = true;
            window.location.href = "about:blank";
        } else if (e.which == 76 && e.ctrlKey === true && e.altKey === true) {
            var code = prompt("Enter a code.");
            if (code) {
                getLinkProfile(code);
            } else {}
        } else if (e.which == 9 && !$("#textarea").is(":focus") && window.tab === false && e.shiftKey === false) {
            e.preventDefault();
            window.tab = true;
            var onlineUsersHtml = "<div><div class='listedUser' style='background:#FFF; color: #000;'>Online: " + window.online.length + "</div>";
            for (let i of window.online) {
                onlineUsersHtml += "<div class='listedUser'>" + i + "</div>";
            }
            onlineUsersHtml += "</div>";
            var onlineTab = $("<div>")
                .attr("id", "onlineTab")
                .html(onlineUsersHtml)
                .click(function() {
                    $(this).remove();
                    window.tab = false;
                })
                .css({
                    "color": "#FFF",
                    "width": "100vw",
                    "height": "100vh",
                    "display": "flex",
                    "align-items": "center",
                    "justify-content": "center",
                    "position": "fixed",
                    "left": "0",
                    "top": "0",
                    "background": "rgba(0, 0, 0, 0.5)"
                });
            $("body").append(onlineTab);
        } else if (e.which == 68 && e.ctrlKey === true && e.altKey === true) {
            if (window.js_console === true) {
                $("#console").fadeOut(250);
                setTimeout(function() {
                    $("#console").remove();
                    window.js_console = false;
                }, 250)
            } else {
                window.js_console = true;
                var jconsole = $("<input>")
                    .css({
                        "width": "500px",
                        "max-width": "80vw",
                        "position": "fixed",
                        "left": "5vw",
                        "top": "5vw",
                        "background": "#FFF",
                        "padding": "5px",
                        "border-radius": "5px",
                        "height": "30px",
                        "overflow": "auto",
                        "border": "none",
                        "outline": "none",
                        "box-shadow": "0 0 5px rgba(0, 0, 0, 0.5)",
                        "font-weight": "lighter",
                        "padding-left": "10px",
                        "padding-right": "10px",
                        "color": "#AAA",
                        "letter-spacing": "1px"
                    })
                    .attr("id", "console")
                    .attr("placeholder", "JavaScript...")
                    .attr("type", "text")
                    .on("keyup", function(e) {
                        if (e.which == 13) {
                            try {
                                eval($(this).val());
                            } catch (error) {

                            }
                            $(this).val("");
                        }
                    })
                $("body").append(jconsole);
            }
        } else if (e.which == 85 && e.ctrlKey === true) {
            window.open("code.txt", "_blank");
        } else {}
    };
    window.onkeyup = function(e) {
        if (e.which == 9 && !$("#textarea").is(":focus") && e.shiftKey === false) {
            window.tab = false;
            e.preventDefault();
            $("#onlineTab").remove();
        } else {}
    }
    window.onkeypress = function(e) {
        if (e.which == 9 && !$("#textarea").is(":focus") && e.shiftKey === false) {
            e.preventDefault();
        } else {}
    }
    var emojiBtn = $("<div>")
        .css({
            "height": "20px",
            "width": "20px",
            "position": "fixed",
            "right": "5px",
            "bottom": "5px",
            "background-image": "url(emoji.png)",
            "background-size": "100% 100%",
            "cursor": "pointer"
        })
        .click(function(e) {
            window.openTray = true;
            $("#textarea").trigger("emoji");
        });
    $("body").append(emojiBtn);
    $("#image").on("change", function(event) {
                    var input = event.target;
                    var reader = new FileReader();
                    reader.onload = function() {
                        var source = reader.result;
                        $("#result").attr("src", source);
                        window.speak("<img src='" + source + "' class='content' />");
                        $("#image").val("");
                    };
                    reader.readAsDataURL(input.files[0])
                });
    window.jitter = function() {
        /* this is a easter egg */
        $("#blur").css("filter", "blur(3px)");
        $(".triggeredBan").remove();
        var coords = [
            [-5, 5],
            [5, 5],
            [-5, -5],
            [5, -5]
        ];
        var triggeredBanner = $("<img>")
            .attr("src", "triggered-banner.jpg")
            .css({
                "position": "fixed",
                "left": "0",
                "bottom": "25px",
                "width": "100vw",
                "height": "100px",
                "pointer-events": "none"
            })
            .addClass("triggeredBan");
        var redFilter = $("<div>")
            .css({
                "background": "rgba(255, 0, 0, 0.75)",
                "width": "100vw",
                "height": "100vh",
                "position": "fixed",
                "left": "0",
                "top": "0",
                "box-shadow": "0 0 50px #500 inset",
                "pointer-events": "none"
            });
        $("body").append(redFilter);
        $("body").append(triggeredBanner);
        $("body").css({
                "position": "fixed",
                "left": "0",
                "top": "0"
            });
        setInterval(function() {
            var coord = coords[Math.floor(Math.random() * 4)];
            var coordA = coord[0];
            var coordB = coord[1];
            $("body").css({
                    "left": coordA + "px",
                    "top": coordB + "px"
                });
        }, 10);
    }
    $("#reload_song").click(function() {
        document.querySelector(".player").currentTime = 0;
    });
    $("#disclaimer_title").click(function() {
        $("#disclaimer").slideToggle(500);
    });
    $("[type=checkbox]").on('input change', function() {
        var which = $(this).attr("name");
        window[which] = $(this).is(":checked");
        
    });
    try {
        setInterval(function(){
            $("div[style='text-align: right;position: fixed;z-index:9999999;bottom: 0; width: 100%;cursor: pointer;line-height: 0;display:block !important;']").remove();
        }, 500);
    } catch(doesNotExist){}
    $("#exploited").tool("Double Click Me!");
    $("#l-autoscroll").tool("Great for reading the chat, Now you won't have to worry about it scrolling down while you are reading!");
    $("#l-ping").tool("Will play a notificaiton sound if on when someone types @everyone, @" + localStorage.name.replace(/<(.*?)\>/g, "") + ", or @moderator/vip/cowner if you are any of those ranks.");
    console.log("End Execution.");
};