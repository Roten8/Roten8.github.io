$(function() {
    console.log('sdfsdf');
    var processLable = document.getElementById('processLable');
    var processLine = document.getElementsByClassName('processLine')[0];
    var enterView = document.getElementsByClassName('enter-view')[0];
    var remindView = document.getElementsByClassName('remind')[0];

    var process = 0;
    var timer = setInterval(function() {
        processLable.innerText = process + "%";
        processLine.style.width = process * 70 / 100 + '%';
        if (process == 59) {
            clearInterval(timer);
            setTimeout(() => {
                var timer2 = setInterval(function() {
                    processLable.innerText = process + "%";
                    processLine.style.width = process * 70 / 100 + '%';
                    if (process == 99) {
                        clearInterval(timer2);
                        processLable.innerText = "100%";
                        processLine.style.width = '70%';
                        remindView.style.display = 'none';
                        enterView.style.display = 'block';
                        $('.rotate-arrows').addClass('rotate');
                        $('.rotate-phone').addClass('phone-rotate-ani');
                    }
                    process++;
                }, 30)
            }, 500);
        }
        process++;
    }, 35);
})

$('#clickPlay').on('click', function() {
    $('.special').fadeIn(500);
    // 判断是否播放结束
    var mds = document.getElementById('video-s')
    mds.onplay = function() {
        console.log('开始播放第一个视频');
        setTimeout(() => {
            $('.one').hide();
        }, 1000);
    }
    mds.play();

    // 判断是否播放结束
    mds.onended = function() {
        $("body").css("background", "#fff");
        $(".one").hide();
        $(".five").fadeIn(900);
        mds.addEventListener('ended', function() {
            $('.five').fadeIn(300)
        })
    }
});

$('.gotoTicket').on('click', function() {
    window.location.href = 'http://survey.aonhewitt.cn/index.php?r=survey/index&sid=111616&lang=zh-Hans';
});

$('.share').on('click', function() {
    $('.share-div').fadeIn(300)
});

$('.playAgain').on('click', function() {
    // 判断是否播放结束
    var mds = document.getElementById('video-s')
    mds.currentTime = 0;
    $('.five').hide();
    mds.onplay = function() {
        console.log('开始播放第一个视频');
        setTimeout(() => {
            $('.one').hide();
        }, 1000);
    }
    mds.play();
    // 判断是否播放结束
    mds.onended = function() {
        $("body").css("background", "#fff");
        $(".one").hide();
        $(".five").fadeIn(900);
        mds.addEventListener('ended', function() {
            $('.five').fadeIn(300)
        })
    }
});

$(".share-div").on("click", function() {
    $(this).css("display", "none");
})