
   function fn1(){
    //alert("123");
    $('.lebenslauf').addClass('active').siblings().removeClass('active');
    $('.a1').addClass('current');
    $('.a2').removeClass('current');
    $('.a3').removeClass('current');
    }

    function fn2(){
    //alert("456");
    $('.urkunde').addClass('active').siblings().removeClass('active');
    $('.a2').addClass('current');
    $('.a1').removeClass('current');
    $('.a3').removeClass('current');
    }

    function fn3(){
    //alert("789");
    $('.SAP').addClass('active').siblings().removeClass('active');
    $('.a3').addClass('current');
    $('.a2').removeClass('current');
    $('.a1').removeClass('current');
    }

