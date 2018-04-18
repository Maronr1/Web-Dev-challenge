var $off = $("#who").offset().top;
//przesuwanie do czesci strony po kliknieciu
$("#about").on("click", function(){
$("html").animate({
scrollTop: $("#who").offset().top}, 1000)
})
$("#services").on("click", function(){
$("html").animate({
scrollTop: $("#what").offset().top}, 1000)
})
$("#work").on("click", function(){
$("html").animate({
scrollTop: $("#how").offset().top}, 1000)
})
$("#team").on("click", function(){
$("html").animate({
scrollTop: $("#our").offset().top}, 1000)
})
$("#progress").on("click", function(){
$("html").animate({
scrollTop: $("footer").offset().top}, 1000)
})
$("#clients").on("click", function(){
$("html").animate({
scrollTop: $("#say").offset().top}, 1000)
})
$("#home").on("click", function(){
$("html").animate({
scrollTop: $("#glowny").offset().top}, 1000)
})
$("#agency").on("click", function(){
$("html").animate({
scrollTop: $("#glowny").offset().top}, 1000)
})
//pojawienie sie tekstu po najechaniu na obrazek1
$("#obrazek1, obrazek1 h4").on({"mouseover": function(){
$("#obrazek1 h4").stop().animate({top:'20%', left:'12%'},300)},
"mouseout": function() {
$("#obrazek1 h4").stop().animate({top:'60%', left:'10%'},300)}
})

$("#obrazek1, obrazek1 p").on({"mouseover": function(){
$("#obrazek1 p").stop().animate({top:'58%', left:'25%', opacity: '1'},300)},
"mouseout": function() {
$("#obrazek1 p").stop().animate({top:'98%', left:'23%', opacity: '0'},300)}
})
//przesuniecia po najechaniu na obrazek2
$("#obrazek2").on({"mouseover": function(){
$("#obrazek2").stop().animate({left:'54%'}, 500)},
"mouseout": function(){
$("#obrazek2").stop().animate({left:'57%'}, 500)}
})
$("#obrazek2").on({"mouseover": function(){
$("#obrazek3").stop().animate({left:'78%'}, 500)},
"mouseout": function(){
$("#obrazek3").stop().animate({left:'81%'}, 500)}
})
//pojawienie sie tekstu po najechaniu na obrazek2
$("#obrazek2, obrazek2 h4").on({"mouseover": function(){
$("#obrazek2 h4").stop().animate({top:'20%', left:'12%'},300)},
"mouseout": function() {
$("#obrazek2 h4").stop().animate({top:'60%', left:'10%'},300)}
})
$("#obrazek2, obrazek2 p").on({"mouseover": function(){
$("#obrazek2 p").stop().animate({top:'58%', left:'25%', opacity: '1'},300)},
"mouseout": function() {
$("#obrazek2 p").stop().animate({top:'98%', left:'23%', opacity: '0'},300)}
})
//pojawienie sie tekstu po najechaniu na obrazek3
$("#obrazek3, obrazek3 h4").on({"mouseover": function(){
$("#obrazek3 h4").stop().animate({top:'20%', left:'12%'},300)},
"mouseout": function() {
$("#obrazek3 h4").stop().animate({top:'60%', left:'10%'},300)}
})
$("#obrazek3, obrazek3 p").on({"mouseover": function(){
$("#obrazek3 p").stop().animate({top:'58%', left:'25%', opacity: '1'},300)},
"mouseout": function() {
$("#obrazek3 p").stop().animate({top:'98%', left:'23%', opacity: '0'},300)}
})
//przesuniecia dla obrazka3

$("#obrazek3").on({"mouseover": function(){
$("#obrazek2").stop().animate({left:'54%'}, 500)},
"mouseout": function(){
$("#obrazek2").stop().animate({left:'57%'}, 500)}
})
$("#obrazek3").on({"mouseover": function(){
$("#obrazek3").stop().animate({left:'75%'}, 500)},
"mouseout": function(){
$("#obrazek3").stop().animate({left:'81%'}, 500)}
})

//tworze funkcje dla zmiany polozenia slajdow

let i=0;

function raz(){
$("#center").animate({left:'18%', top:'417%', opacity: '0.8', transform: 'scale(0.733)', borderWidth: '2px'}, 800);
$("#left").animate({left:'62%', top:'417%', opacity: '0.8', transform: 'scale(1)'}, 800);
$("#right").animate({zIndex: '4' },10);
$("#center").animate({zIndex: '3' },10);
$("#left").animate({zIndex: '2' },10);
$("#right").animate({left:'40%', top:'417%', opacity: '1', transform: 'scale(1.36)'}, 800);
$("#right img").animate({width: "415px"}, 800);
$("#zawod1").animate({opacity: '0' }, 600);
$("#zawod3").animate({opacity: '1' }, 600);
$("#zawod2").animate({opacity: '0' }, 600);
};

function dwa(){
$("#right").animate({left:'18%', top:'416%', opacity: '0.8', transform: 'scale(1)'}, 800);
$("#center").animate({left:'62%', top:'417%', opacity: '0.8', borderWidth: '15px', transform: 'scale(0.733)'}, 800);
$("#left").animate({zIndex: '3' },10);
$("#right").animate({zIndex: '2' },10);
$("#center").animate({zIndex: '2' },10);
$("#left").animate({left:'40%', top:'417%', opacity: '1', transform: 'scale(1.36)'}, 800);
$("#left img").animate({width: "415px"}, 800);
$("#zawod2").animate({opacity: '1' }, 600);
$("#zawod3").animate({opacity: '0' }, 600);
$("#zawod1").animate({opacity: '0' }, 600);
};

function trzy (){
$("#left").animate({left:'18%', top:'416%', opacity: '0.8', transform: 'scale(1)'}, 800);
$("#right").animate({left:'62%', top:'416%', opacity: '0.8', transform: 'scale(1)'}, 800);
$("#center").animate({zIndex: '3' },10);
$("#left").animate({zIndex: '2' },10);
$("#right").animate({zIndex: '2' },10);
$("#center").animate({left:'37%', top:'410%', opacity: '1', transform: 'scale(1)', borderWidth: '15px'}, 800);
$("#zawod1").animate({opacity: '1' }, 600);
$("#zawod2").animate({opacity: '0' }, 600);
$("#zawod3").animate({opacity: '0' }, 600);
};

// Funkcje zmiany slajdu w zaleznosci od i
const tab = [raz, dwa, trzy];
function lewo (){
if (i === 0){
raz();
i=1;
}
else if (i=== 1){
dwa();
i=2;
}
else {
trzy();
i=0
}
}

function prawo (){
if (i === 0){
dwa();
i=2;
}
else if (i=== 2){
raz();
i=1;
}
else {
trzy();
i=0;
}
}


// przypisanie funkcji do zdarzenia
$("#arrowleft").on({'click': lewo})
$("#arrowright").on({'click': prawo})


// pokazywanie zdjęcia po kliknieciu
$("#other1").on({"click": function(){
$("#mainpic img").attr("src", "img/Leftside.png"),
$("#mainpic img").css({transform: "scale(1) rotate(-45deg)", top: "-40px", left: "-50px"}),
$("#something p").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi."),
$("#something h6").text("John Doe, Developer")
}
})

$("#other2").on({"click": function(){
$("#mainpic img").attr("src", "img/Rightside.png"),
$("#mainpic img").css({transform: "scale(1) rotate(-45deg)", top: "-50px", left: "-50px"}),
$("#something p").text("Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt ullamco laboris nisi voluptatem."),
$("#something h6").text("Jimmi Doe, Designer")}})

$("#other3").on({"click": function(){
$("#mainpic img").attr("src", "img/center.png"),
$("#mainpic img").css({transform: "scale(0.7) rotate(-45deg)", top: "-110px", left: "-130px"}),
$("#something p").text("Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."),
$("#something h6").text("Jenna Doe, Graphic")}})


$("#button").on({"mouseover": function(){
$("#button img").stop().animate({width: '105%'}, 500)},
"mouseout": function(){
$("#button img").stop().animate({width:'100%'}, 500)}
})
$("#butread img").on({"mouseover": function(){
$("#butread img").stop().animate({width: '105%'}, 500)},
"mouseout": function(){
$("#butread img").stop().animate({width:'100%'}, 500)}
})