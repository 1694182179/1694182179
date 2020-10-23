var
    $item = $(".carousel-inner .item");
$btn = $(".carousel-btn .btn");
$prev = $(".carousel .prev");
$next = $(".carousel .next");
i = 0;

function slide(num) {
    $item.eq(num).fadeIn(1000).css({ "display": "block" });;
    $item.not($item.eq(num)).fadeOut("slow");
    $btn.eq(num).addClass("active");
    $btn.not($btn.eq(num)).removeClass("active");
}
$btn.on("click", function() {
    i = $(this).index();
    slide(i);
})
$prev.on("click", function() {
    i <= -5 ? i = 0 : i = i - 1;
    slide(i);
})
$next.on("click", function() {
    i >= 5 ? i = 0 : i++;
    slide(i);
})

function car() {
    cartime = setInterval(function() {
        i >= 5 ? i = 0 : i++;
        slide(i);
    }, 2000);
}
car();
$(".carousel").hover(function() { clearInterval(cartime); }, car)

function goods(btn, unit, list) {
    list.css({ "margin-left": -unit + "px", "transition": "margin-left 0.5s ease" });
    btn.addClass("btn-default");
    $(".title-more a").not(btn).removeClass("btn-default");
}
var
    $slist = $(".sgoods-list");
$sprev = $(".title-more .s-prev");
$snext = $(".title-more .s-next");
$rlist = $(".reco-list");
$rprev = $(".title-more .reco-prev");
$rnext = $(".title-more .reco-next");
$sprev.on("click", function() { goods($(this), 0, $slist); })
$snext.on("click", function() { goods($(this), 1224, $slist); })
setInterval(function() {
    leng = parseInt($slist.css("margin-left"));
    if (leng >= 0) {
        goods($(this), 1224, $slist);
        goods($(this), 1224, $rlist);
    } else {
        goods($(this), 0, $slist);
        goods($(this), 0, $rlist);
    }
}, 10000)
$rprev.click(function() { goods($(this), 0, $rlist); })
$rnext.click(function() { goods($(this), 1224, $rlist); })
var
    $hlist = $(".home-ce .goods-list");
$htext = $(".home-ce .more-text")
$ilist = $(".ide .goods-list");
$itext = $(".ide .more-text");
$clist = $(".asst .goods-list");
$ctext = $(".asst .more-text");
$parlist = $(".parts .goods-list");
$partext = $(".parts .more-text");
$pialist = $(".pia .goods-list");
$piatext = $(".pia .more-text");
$gitem = $(".goods-item");
$mtext = $(".more-text");
$gitem.hover(function() { $(this).addClass("item-active"); }, function() { $(this).removeClass("item-active"); })

function fade(t, list, mtext) {
    $(t).addClass("active");
    mtext.not($(t)).removeClass("active");
    var index = $(t).index();
    list.eq(index).css({ "display": "block" });
    list.not(list.eq(index)).css({ "display": "none" });
}
$htext.mouseover(function() { fade(this, $hlist, $htext); })
$itext.mouseover(function() { fade(this, $ilist, $itext); })
$ctext.mouseover(function() { fade(this, $clist, $ctext); })
$partext.mouseover(function() { fade(this, $parlist, $partext); })
$piatext.mouseover(function() { fade(this, $pialist, $piatext); })
$(".review-text").each(function() {
    if ($(this).text().length > 10) {
        var text = $(this).text().substring(0, 10) + "...";
        $(this).text(text);
    }
})
var
    $pprev = $(".other-photo .o-prev");
$pnext = $(".other-photo .o-next");
$ptext = $(".other-photo .other-silde");
$tprev = $(".other-theme .o-prev");
$tnext = $(".other-theme .o-next");
$ttext = $(".other-theme .other-silde");
$gprev = $(".other-game .o-prev");
$gnext = $(".other-game .o-next");
$gtext = $(".other-game .other-silde");
$aprev = $(".other-app .o-prev");
$anext = $(".other-app .o-next");
$atext = $(".other-app .other-silde");

function cnext(text) {
    o = text.find(".active").attr("data-num");
    if (o == 3) { return false; } else {
        text.find(".btn").eq(o).addClass("active");
        text.find(".btn").not(text.find(".btn").eq(o)).removeClass("active");
        n = "-" + o * 100 + "%";
        text.css({ "margin-left": n, "transition": "margin-left 0.5s ease" });
        o++;
        if (o == 3) { text.find(".o-next").addClass("btn-default"); } else { text.find(".o-prev").removeClass("btn-default"); }
    }
}

function cprev(text) {
    o = text.find(".active").attr("data-num") - 1;
    if (o == 0) { return false; } else {
        o--;
        text.find(".btn").eq(o).addClass("active");
        text.find(".btn").not(text.find(".btn").eq(o)).removeClass("active");
        n = "-" + o * 100 + "%";
        text.css({ "margin-left": n, "transition": "margin-left 0.5s ease" });
        if (o == 0) { text.find(".o-prev").addClass("btn-default"); } else { text.find(".o-next").removeClass("btn-default"); }
    }
}
$pprev.on("click", function() { cprev($ptext); })
$pnext.on("click", function() { cnext($ptext); })
$tprev.on("click", function() { cprev($ttext); })
$tnext.on("click", function() { cnext($ttext); })
$gprev.on("click", function() { cprev($gtext); })
$gnext.on("click", function() { cnext($gtext); })
$aprev.on("click", function() { cprev($atext); })
$anext.on("click", function() { cnext($atext); })
$nav = $(".header-nav .item")
$mainnav = $(".main-nav")
$nav.hover(function() { set = setTimeout(function() { $mainnav.slideDown(); }, 2000) }, function() {
        clearTimeout(set);
        $mainnav.mouseleave(function() { $mainnav.slideUp(); })
    })
    // 倒计时秒杀
var hour = document.querySelector(".hour");
var minute = document.querySelector(".minute");
var second = document.querySelector(".second");
var inputTime = +new Date("25050-12-25 08:30:00"); //倒计时的结束时间，自己设置时间
countDown(); //先调用一次这个函数 防止第一次刷新页面有空白
//2、开启定时器
setInterval(countDown, 1000); //
//3、倒计时-时分秒函数
function countDown() {
    var nowTime = +new Date();
    var times = (inputTime - nowTime) / 1000; // 
    var h = parseInt(times / 60 / 60 % 24);
    h = h < 10 ? '0' + h : h;
    hour.innerHTML = h; //
    var m = parseInt(times / 60 % 60);
    m = m < 10 ? "0" + m : m;
    minute.innerHTML = m; //同上
    var s = parseInt(times % 60);
    s = s < 10 ? "0" + s : s;
    second.innerHTML = s; //同上
}
//悬浮
$(".con1-box-top li").mouseenter(function() {
    $(this).css({
        position: "relative",
        top: "-5px",
        boxShadow: "0 15px 30px 0 rgba(0,0,0,0.1)"
    })
})

$(".con1-box-top li").mouseleave(function() {
    $(this).css({
        position: '',
        top: '',
        boxShadow: ''
    })
})
$(".con06-con li").mouseenter(function() {
    $(this).css({
        position: "relative",
        top: "-5px",
        boxShadow: "0 15px 30px 0 rgba(0,0,0,0.1)"
    })
})

$(".con06-con li").mouseleave(function() {
    $(this).css({
        position: '',
        top: '',
        boxShadow: ''
    })
})
$(".con-one-left-box li").mouseenter(function() {
    $(this).css({
        position: "relative",
        top: "-5px",
        boxShadow: "0 15px 30px 0 rgba(0,0,0,0.1)"
    })
})

$(".con-one-left-box li").mouseleave(function() {
    $(this).css({
        position: '',
        top: '',
        boxShadow: ''
    })
})
$(".con-one-bottom-box li").mouseenter(function() {
    $(this).css({
        position: "relative",
        top: "-5px",
        boxShadow: "0 15px 30px 0 rgba(0,0,0,0.1)"
    })
})

$(".con-one-bottom-box li").mouseleave(function() {
    $(this).css({
        position: '',
        top: '',
        boxShadow: ''
    })
})