/**
 * Created by hama on 2017/7/31.
 */
$(function () {
    /*顶部的鼠标移入颜色变化*/
    //1.发生的目标元素 a
    //2.什么事件 mouseover,mouseout
    //3.改变链接颜色
    $('.top a').mouseover(function (event) {
        $(this).css('color', '#fff');
    }).mouseout(function () {
        $(this).css('color', '#a4b094');
    })
    $('.shopCar').mouseover(function () {
        $(this).css({color: '#FF6700', background: '#fff'});
        $('.goods').stop(true, false).slideDown();
    }).mouseout(function () {
        $(this).css({color: '#a4b094', background: '#424242'});
        $('.goods').stop(true, false).slideUp();
    });

    var flag = true;
    /*表单的输入框移入效果*/
    $('.ser1').mouseover(function () {
        if (flag) {
            $('.ser1 input').css('border', '1px solid #000');
            $('.ser2').css('border', '1px solid #000').css('borderLeft', 'none');
        }
    }).mouseout(function () {
        if (flag) {
            $('.ser1 input').css('border', '1px solid #ccc');
            $('.ser2').css('border', '1px solid #ccc').css('borderLeft', 'none');
        }
    })
    /*热门搜索的移入效果*/
    $('.hot a').mouseover(function () {
        $(this).css({
            'color': '#fff',
            'background': 'orange'
        })
    }).mouseout(function () {
        $(this).css({
            'color': '#757575',
            'background': '#eee'
        })
    })
    $('.ser1 input').focus(function(){
        $('.hot').addClass('hide');//点击搜索栏隐藏 .hot 里的内容
        $('.keywordList').removeClass('hide');
        $(this).css('border','1px solid #ff6700');
        $('.ser2').css({border:'1px solid #ff6700',borderLeft:'none'});
        $('.keywordList').css('border','1px solid #ff6700');
    }).blur(function(){
        $('.hot').removeClass('hide');
        $('.keywordList').addClass('hide');
        $(this).css('border','1px solid #e0e0e0');
        $('.ser2').css('border','1px solid #e0e0e0');
    });

    /*按钮移入后的效果*/
    $('.ser2').mouseover(function () {
        if (flag) {
            $('.ser1 input').css({
                'border': '1px solid #000',
                'border-right': 'none'
            });
            $(this).css({
                'background': 'orange',
                'color': '#fff',
                'border': 'none'
            })
        }
    }).mouseout(function () {
        if (flag) {
            $('.ser1 input').css('border', '1px solid #ccc');
            $(this).css({
                'background': '#fff',
                'color': '#000',
                'border': '1px solid #ccc',
                'border-left': 'none'
            })
        }
    })

    /*表单获取焦点的时候*/
    $('.ser1 input').focus(function () {
        flag = false;
        $(this).css('border-color', 'orange');
        $('.ser2').css('border-color', 'orange');
        $('.keywordsList').show().css('border-color', 'orange');
    }).blur(function () {
        flag = true;
        $(this).css('border-color', '#ccc');
        $('.ser2').css('border-color', '#ccc');
        $('.keywordsList').hide().css('border-color', '#ccc');
    })

    /*导航效果开始*/
    $('.nav li').mouseover(function () {
        $(this).children('a').css('color', '#ff6700');
        if ($(this).index() < 7) {
            $('.select').removeClass('hide');
            $('.select').slideDown().finish();
            $('.select').find('ul').addClass('hide');
            $('.select').find('ul').eq($(this).index()).removeClass('hide');
        }
    }).mouseout(function () {
        $(this).children('a').css('color', '#333');
    })
    $('.nav').mouseout(function () {
        $('.select').slideUp()
    })
    $('.select').find('ul').mouseover(function () {
        $('.select').slideDown().finish();
    }).mouseout(function () {
        $('.select').slideUp()
    })

    /*===========轮播图效果============*/
    var num = 0;
    var timer;
    timer = setInterval(autoplay, 5000)
    $('.round li').mouseover(function () {
        clearInterval(timer);
        num = $(this).index();
        displayImg();
    })
    $('.banner').mouseover(function () {
        clearInterval(timer);
    }).mouseout(function () {
        timer = setInterval(autoplay, 5000)
    });
    $('.direcL').click(function () {
        //上一张
        clearInterval(timer);
        num = num - 1;
        if (num < 0) {
            num = 4;
        }
        displayImg();
    })
    $('.direcR').click(function () {
        //下一张
        clearInterval(timer);
        num = num + 1;
        if (num > 4) {
            num = 0;
        }
        displayImg();
    })
    function displayImg() {
        $('.round li').eq(num).css('background', 'orange').siblings().css({
            'background': "#000",
            'opacity': '0.5'
        });
        $('.banner > img').eq(num).removeClass('hide').siblings('img').addClass('hide');
    }

    function autoplay() {
        num++;
        if (num > 4) {
            num = 0;
        }
        displayImg();
    }

    /*==========隐藏的二级导航============*/
    $('.navL li').mouseover(function () {
        $(this).css('background', '#ff6700');
        $('.navHide').removeClass('hide');
        $('.ulHide').addClass('hide');
        $('.ulHide').eq($(this).index()).removeClass('hide');
    }).mouseout(function () {
        $(this).css('background', 'transparent');
    })
    /*============鼠标移出二级导航的范围后，让它消失=============*/
    $('.navL').mouseout(function () {
        $('.navHide').addClass('hide');
    })
    /*=============用户移入三级导航的时候，也要让它显示===============*/
    $('.ulHide').mouseover(function () {
        $('.navHide').removeClass('hide');
        $('.navL li').eq($(this).index()).css('background', '#ff6700');
    }).mouseout(function () {
        $('.navHide').addClass('hide');
        $('.navL li').eq($(this).index()).css('background', 'transparent');
    })
    $('.navHide p').mouseover(function () {
        $(this).css('color', '#ff6700')
    }).mouseout(function () {
        $(this).css('color', '')
    })
    $('.navHide .buy').mouseover(function () {
        $(this).css('background', '#ff6700')
    }).mouseout(function () {
        $(this).css('background', '#fff')
    })

    /*==============明星产品特效==============*/
    var clockLR
    $('.p').mouseover(function () {
        clearInterval(clockLR);
    }).mouseout(function () {
        clockLR = setInterval(autoLR, 10000);
    })
    //向左翻页
    $('.prev').mouseover(function () {
        if ($('.scroll').css('left') != '0px') {
            $(this).css({color: '#ff6700', cursor: 'pointer'});
        }
    }).click(function () {
        if ($('.scroll').css('left') != '0px') {
            $('.scroll').css('left', '0px');
            $(this).css({color: '#dfdfe0', cursor: 'default'});
            $('.next').css('color', '#b0b4bc');
        }
    }).mouseout(function () {
        if ($('.scroll').css('left') != '0px') {
            $(this).css('color', '#b0b4bc');
        } else {
            $(this).css('color', '#dfdfe0');
        }
    });
    //向右翻页
    $('.next').mouseover(function () {
        if ($('.scroll').css('left') == '0px') {
            $(this).css({color: '#ff6700', cursor: 'pointer'});
        }
    }).click(function () {
        if ($('.scroll').css('left') == '0px') {
            $('.scroll').css('left', '-100%');
            $(this).css({color: '#dfdfe0', cursor: 'default'});
            $('.prev').css('color', '#b0b4bc');
            // console.log($('.scroll').css('left'));
        }
    }).mouseout(function () {
        if ($('.scroll').css('left') == '0px') {
            $(this).css('color', '#b0b4bc');
        } else {
            $(this).css('color', '#dfdfe0');
        }
    });
    clockLR = setInterval(autoLR, 10000);

    function autoLR() {
        if ($('.scroll').css('left') != '0px') {
            $('.scroll').css('left', '0px');
        } else if ($('.scroll').css('left') == '0px') {
            $('.scroll').css('left', '-100%');
        }
    }

    /*============智能硬件小米净水器特效==============*/
    $('.product1 li').mouseover(function () {
        $(this).css('box-shadow', '0 0 28px #aaa').css('margin-top', '12px')
    }).mouseout(function () {
        $(this).css('box-shadow', '').css('margin-top', '14px')
    })
    /*==============智能硬件的查看全部特效==============*/
    $('.toAll').mouseover(function () {
        $(this).find('a').css('color', '#ff6700')
        $(this).find('i').css('color', '#ff6700')
    }).mouseout(function () {
        $(this).find('a').css('color', '')
        $(this).find('i').css('color', '')
    })
    /*=========智能硬件右边产品特效及字体颜色特效===========*/
    $('.productYJ li').mouseover(function () {
        $(this).css('box-shadow', '0 0 28px #aaa').css('margin-top', '12px')
    }).mouseout(function () {
        $(this).css('box-shadow', '').css('margin-top', '14px')
    })
    $('.productYJ a').mouseover(function () {
        $(this).css('color', '#ff6700')
    }).mouseout(function () {
        $(this).css('color', '')
    })

    /*============搭配、配件、周边左边的特效============*/
    $('.productL li').mouseover(function () {
        if ($(this).index() == 0) {
            $(this).css('box-shadow', '0 0 28px #aaa').css('margin-top', '12px');
            $(this).next().css('margin-top', '16px');
        }
        else {
            $(this).css('box-shadow', '0 0 28px #aaa').css('margin-top', '12px');
        }
    }).mouseout(function () {
        if ($(this).index() == 0) {
            $(this).css('box-shadow', '').css('margin-top', '14px');
            $(this).next().css('margin-top', '14px');
        }
        else {
            $(this).css('box-shadow', '').css('margin-top', '14px');
        }
    });
    /*==========搭配、配件、周边右边商品的特效===========*/
    $('.ProLi>li').mouseover(function () {
        $(this).find('.slideDiv').stop(true, false).slideDown('hide');
        if ($(this).index() != 7) {
            $(this).css('box-shadow', '0 0 28px #aaa').css('margin-top', '12px');
        }
    }).mouseout(function () {
        $(this).find('.slideDiv').stop(true, false).slideUp('hide');
        if ($(this).index() != 7) {
            $(this).css('box-shadow', '').css('margin-top', '14px');
        }
    });
    $('.ProLi a').mouseover(function () {
        $(this).css('color', '#ff6700')
    }).mouseout(function () {
        $(this).css('color', '')
    })

    $('.twoRow li').mouseover(function () {
        if ($(this).index() == 0) {
            $(this).css('box-shadow', '0 0 28px #aaa').css('margin-top', '12px');
            $(this).next().css('margin-top', '16px');
        }
        else {
            $(this).css('box-shadow', '0 0 28px #aaa').css('margin-top', '12px');
        }
    }).mouseout(function () {
        if ($(this).index() == 0) {
            $(this).css('box-shadow', '').css('margin-top', '14px');
            $(this).next().css('margin-top', '14px');
        }
        else {
            $(this).css('box-shadow', '').css('margin-top', '14px');
        }
    });
    function displayList(obj1, s1, obj2) {
        obj1.find(s1).mouseover(function () {
            var a = $(this).index();
            obj1.find(s1).css({color: '#000', borderBottom: 'none'});
            $(this).css({color: '#FF6700', borderBottom: '2px solid #FF6700'});
            obj2.addClass('hide');
            obj2.eq(a).removeClass('hide');
        });
        return;
    }
    /* ======================  搭配  特效 =======================*/
    displayList($('.list41'), 'li', $('.productR2>ul'));
     /* ====================== 配件  特效 =======================*/
    displayList($('.list42'), 'li', $('.productR3>ul'));
     /* ====================== 周边  特效 =======================*/
    displayList($('.list5'), 'li', $('.productR4>ul'));

    /*================为您推荐特效==================*/
    $('.scroll2 li').mouseover(function () {
        $(this).find('img').css('marginTop', '48px');
    }).mouseout(function () {
        $(this).find('img').css('marginTop', '50px');
    });
    //上一页
    $('.prev2').mouseover(function () {
        if ($('.scroll2').css('left') != '0px') {
            $(this).css({color: '#ff6700', cursor: 'pointer'});
        } else {
            $(this).css('color', '#dfdfe0');
        }
    }).click(function () {
        if ($('.scroll2').css('left') != '0px') {
            $('.scroll2').css('left', parseInt($('.scroll2').css('left')) + 1226 + 'px');
            if ($('.scroll2').css('left') != '-3678px') {
                $('.next2').css('color', '#b0b4bc');
            }
            if ($('.scroll2').css('left') == '0px') {
                $(this).css({color: '#dfdfe0', cursor: 'default'});
            }
        } else {
            $(this).css('color', '#dfdfe0');
        }
    }).mouseout(function () {
        if ($('.scroll2').css('left') != '0px') {
            $(this).css('color', '#b0b4bc');
        } else {
            $(this).css('color', '#dfdfe0');
        }
    });
    //下一页
    $('.next2').mouseover(function () {
        if ($('.scroll2').css('left') != '-3678px') {
            $(this).css({color: '#ff6700', cursor: 'pointer'});
        }
    }).click(function () {
        if ($('.scroll2').css('left') != '-3678px') {
            $('.scroll2').css('left', parseInt($('.scroll2').css('left')) - 1226 + 'px');
            if ($('.scroll2').css('left') != '0px') {
                $('.prev2').css('color', '#b0b4bc');
            }
            if ($('.scroll2').css('left') == '-3678px') {
                $(this).css({color: '#dfdfe0', cursor: 'default'});
            }
        } else {
            $(this).css('color', '#dfdfe0');
        }
    }).mouseout(function () {
        if ($('.scroll2').css('left') != '-3678px') {
            $(this).css('color', '#b0b4bc');
        } else {
            $(this).css('color', '#dfdfe0');
        }
    });

    /*===========热评产品===========*/
    $('.hotList li').mouseover(function () {
        $(this).css('box-shadow', ' 0 0 20px #aaa').css('margin-top', '12px')
    }).mouseout(function () {
        $(this).css('box-shadow', 'none').css('margin-top', '14px')
    })
    $('.hotList a').mouseover(function () {
        $(this).css('background', '#fff').css('color', '#000')
    }).mouseout(function () {
        $(this).css('background', '').css('color', '')
    })

    /*===============内容特效================*/
    /*显示左右翻页图标*/
    var index = 0;
    $('.contList > li').mouseover(function () {
        $(this).find('.p2').css('opacity', '1').css('cursor','pointer')
        index = $(this).index()
    }).mouseout(function () {
        $(this).find('.p2').css('opacity', '0').css('cursor','default')
    })

    function page() {
        $('.contBox').eq(index).find('li').eq(num2[index]).show().siblings().hide()
        $('.round2 ').eq(index).find('p').eq(num2[index]).css({
            'border': '2px solid #ff6700',
            'background': '#fff'
        }).siblings().css({
            'border': '2px solid #fff',
            'background': '#b0b0b0'
        })
    }
    var num2 = [0, 0, 0, 0]
    /*右翻页*/
    $('.r2').mouseover(function () {
        $(this).css('background', '#757575')
    }).mouseout(function () {
        $(this).css('background', '#b0b0b0')
    }).click(function () {
        if (num2[index] < 3) {
            num2.splice(index, 1, num2[index] + 1);
            page()//应用函数内容
        }
    })
    /*左翻页*/
    $('.l2').mouseover(function () {
        $(this).css('background', '#757575')
    }).mouseout(function () {
        $(this).css('background', '#b0b0b0')
    }).click(function () {
        if (num2[index] > 0) {
            num2.splice(index, 1, num2[index] - 1)
            page()//应用函数内容
        }
    })
    /*圆圈翻页*/
    $('.round2 p').mouseover(function () {
        if (num2[index] != $(this).index()) {
            $(this).css('background', '#ff6700')
        }
    }).mouseout(function () {
        if (num2[index] != $(this).index()) {
            $(this).css('background', '#b0b0b0')
        }
    }).click(function () {
        num2[index] = $(this).index()
        page()//应用函数内容
    })
    /*最后一张图片特效*/
    $('.goTo').mouseover(function () {
        $(this).css({
            color:'#fff',
            background:$(this).css('color')
        })
    }).mouseout(function () {
        $(this).css({
            background:'#fff',
            color:$(this).parent().css('color')
        })
    })

    /*========视频特效=========*/
    $('.videoList li').mouseover(function () {
        $(this).css('box-shadow', '0 0 20px #aaa').css('margin-top', '5px')
    }).mouseout(function () {
        $(this).css('box-shadow', '').css('margin-top', '')
    })
    $('.video .iconfont').mouseover(function () {
        $(this).css('color', '#ff6700')
    }).mouseout(function () {
        $(this).css('color', '')
    })
    $('.videoList a').mouseover(function () {
        $(this).css('color', '#ff6700')
    }).mouseout(function () {
        $(this).css('color', '')
    })
    $('.videoList li>img').mouseover(function () {
        $(this).next('.icon-bofang').css('color', '#ff6700');
    }).mouseout(function () {
        $(this).next('.icon-bofang').css('color', '#fff');
    });

    /*=============底部特效==============*/
    $('.nav1 li').mouseover(function () {
        $(this).find('a').css('color', '#ff6700')
        $(this).find('i').css('color', '#ff6700')
    }).mouseout(function () {
        $(this).find('a').css('color', '')
        $(this).find('i').css('color', '')
    })
    $('.nav2 a').mouseover(function () {
        $(this).css('color', '#ff6700')
    }).mouseout(function () {
        $(this).css('color', '')
    })
    $('#serv').mouseover(function () {
        $(this).css('background', '#ff6700').css('color', '#fff')
    }).mouseout(function () {
        $(this).css('background', '').css('color', '#ff6700')
    })
    $('.staTxt a').mouseover(function () {
        $(this).css('color','#ff6700')
    }).mouseout(function () {
        $(this).css('color','')
    })
})