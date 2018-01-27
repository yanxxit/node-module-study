var Threshold = {};
var fg = new Swiper('.foreign', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    autoHeight: true,
    paginationBulletRender: function (swiper, index, className) {
        switch (index) {
            case 0:
                name = "阈值提醒";
                break;
            case 1:
                name = "超量提醒";
                break;
            case 2:
                name = "用量不足提醒";
                break;
            default:
                name = '';
        }
        return '<span class="' + className + '">' + name + '</span>';
    }
});
$('.wran').html('温馨提示：若取消关注微信公众号，将不会收到主动提醒哦~');

$('.lt-view1').click(function () {
    if (vm.status == 200) {
        var id = $(this).attr('data-id');
        var item = vm.WarningList[id];
        vm.item = vm.WarningList[id];
        console.log(JSON.stringify(item));

        vm.OpeData = {
            wechat: {
                ope: 0,//0 表示没有操作 1 表示操作了，需要提交
                status: 0 // 0 表示需要关闭  1 表示需要开启
            },
            cms: {
                ope: 0,
                status: 0
            }
        };
        vm.$nextTick(function(){
            $('.bound1').find('h1').html(item.info);
            $('.bound1').addClass('is-vis');
        });
    } else if (vm.status == -1) {
        Threshold.statusQuery();
    }
});

$('.lt-view3').click(function () {
    if (vm.status == 200) {
        var id = $(this).attr('data-id');
        var item = vm.WarningList[id];
        vm.item = vm.WarningList[id];
        console.log(JSON.stringify(item));
        vm.OpeData = {
            wechat: {
                ope: 0,//0 表示没有操作 1 表示操作了，需要提交
                status: 0 // 0 表示需要关闭  1 表示需要开启
            },
            cms: {
                ope: 0,
                status: 0
            }
        };
        vm.$nextTick(function(){
            $('.bound3').find('h1').html(item.info);
            $('.bound3').addClass('is-vis');
        });
    } else if (vm.status == -1) {
        Threshold.statusQuery();
    }
});

$('.two span').click(function () {
    if ($(this).hasClass('cur')) {
        $(this).removeClass('cur');
    } else {
        if ($('.two .cur').length < 2) {
            $(this).addClass('cur');
        } else {
        }
    }
});

$('.tsd-btn-submit').click(function () {
    Threshold.submit(this);
});

$('.tsd-btn-close').click(function () {
    $('.tsd-success').removeClass('bound-result');
    //window.location.reload();
});

$('.bound').click(function (event) {
    if ($(event.target).is('.close') || $(event.target).is('.bound-inner') || $(event.target).is('.tsd-btn-submit')) {
        event.preventDefault();
        $(this).removeClass('is-vis');
    }
});
$('.bound-con li h2').click(function () {
    if ($(this).hasClass('on')) {
        $(this).removeClass('on');
    } else {
        $(this).addClass('on');
    }
    var OpeData = vm.OpeData;
    if ($(this).attr('data-mark') == 'wechat') {//微信操作
        if (OpeData.wechat.ope == 0) {
            OpeData.wechat.ope = 1;//0 表示没有操作 1 表示已经操作了
        } else {
            OpeData.wechat.ope = 0;
        }
    } else if ($(this).attr('data-mark') == 'cms') {
        if (OpeData.cms.ope == 0) {
            OpeData.cms.ope = 1;//0 表示没有操作 1 表示已经操作了
        } else {
            OpeData.cms.ope = 0;
        }
    }
    console.log(JSON.stringify(OpeData))

});


Threshold.statusQuery = function () {
    $.getJSON('/' + app + '/threshold/statusQuery?deviceno=' + deviceno, function (data) {
        console.log('查询状态结果：' + JSON.stringify(data));
        vm.item = {};
        if (data.status == 200) {
            vm.status = 200;
            vm.WarningList = data.data;
        } else {
            vm.status = -1;
        }
    })
};

Threshold.submit = function (obj) {
    var id = $(obj).attr('data-submit');
    var item = vm.WarningList[id];
    //console.log(JSON.stringify(item));
    var mobile = deviceno;
    var productId = item.id;
    var percents = item.percents;

    var OpeData = vm.OpeData;
    if (OpeData.wechat.ope == 1) {
        OpeData.wechat.status = item.wechat == 1 ? 1 : 0;
    }
    if (OpeData.cms.ope == 1) {
        OpeData.cms.status = item.cms == 1 ? 1 : 0;
    }

    var OpeChose = '';
    $('.two .cur').each(function () {
        OpeChose = OpeChose + $(this).attr('data-value') + ','
    });
    var parmas = {
        mobile: mobile,
        productId: productId,
        percents: percents,
        OpeData: OpeData,
        OpeChose: OpeChose
    };
    $(obj).html('loading...');
    $(obj).unbind();
    $.post('/' + app + '/threshold/submit', parmas, function (data) {
        console.log(JSON.stringify(data));
        vm.status = 0;
        vm.item = {};
        Threshold.statusQuery();
        $('.tsd-success').addClass('bound-result');
        $(obj).html('确认');
        $(obj).click(function () {
            Threshold.submit(this);
        });
    });
};

Threshold.statusQuery();
    