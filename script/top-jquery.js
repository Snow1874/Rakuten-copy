$(function(){
  //すべての商品画像を、正方形にする
  // $('.item__img').each(function() {
  //   let imgWidth = $(this).width();
  //   console.log(imgWidth);
  //   $(this).height(imgWidth);
  // });

  //カレンダーの○をつくる
  function setThTdHeight(){
    let thWidth = $('.cal-table tr th').width();
    let tdWidth = $('.cal-table tr td').width();

    $('.cal-table tr th').css('line-height', `${thWidth}px`);
    $('.cal-table tr td').css('line-height', `${tdWidth}px`);
  }
  setThTdHeight();

$('#tab-1, #tab-2, #tab-3, #tab-4, #tab-5, #tab-6, #tab-7, #tab-8, #tab-9, #tab-10, #tab-11, #tab-12').scroll(function() {
  let left = $(this).scrollLeft();
  console.log(left);
  if( left < 180 ) {
    $('.pn.pagination-1').addClass('init-bg');
    $('.pn.pagination-2').removeClass('pn-active');
  } else if ( left < 360 ){
    $('.pn.pagination-1').removeClass('init-bg');
    $('.pn.pagination-3').removeClass('pn-active');
    $('.pn.pagination-2').addClass('pn-active');
  } else {
    $('.pn.pagination-2').removeClass('pn-active');
    $('.pn.pagination-3').addClass('pn-active');
  }
});



  $('#toggle-btn').click(function() {

    let slideview = $(this).parents('.main-visual').find('.main-visual__inner');
    let listview = $('#listview');
    let slideHeight = $(slideview).height();

    $(listview).height(slideHeight);

    if($(listview).hasClass('is-active')) {

      $(slideview).css('display', 'block');
      $(listview).css('display', 'none');
      $(listview).removeClass('is-active');

    } else {
      $(listview).addClass('is-active');
      $(slideview).css('display', 'none');
      $(listview).css('display', 'block');
    }

  });

  // swiper関連

    // swiper初期化
    let viewport = $(window).width();
    let windowSp = 768;
    let headerHeight = $('header').height();

    function setMainOffset() {
      if( viewport <= windowSp ) {
        $('main').css('margin-top', headerHeight )
      }
    }
    setMainOffset();

    function setSpmenuOffset() {
      if( viewport <= windowSp ) {
        $('.sp-head-menu').css('top', headerHeight )
      }
    }
    setSpmenuOffset();

    // if( viewport >= windowSp ) {
      var swiper = new Swiper('.swiper-container',{
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          // type: "custom",
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + '</span>';
      }
        },
        // mode:'horizontal',
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: true
        },
        spaceBetween: 0,
        speed: 1000,
        slidesPerView: 1,
        // centeredSlides : true,
        slideActiveClass: 'swiper-slide-active',
      });

    // キャプションの初期値
    function setInitialCap() {
      let initialCap = $('.swiper-slide.initial img').attr('alt');
      $('.swiper-slide-content').text( initialCap );
    }
    setInitialCap();

    // スライドが変わるたびにaltのテキストをキャプションに表示する
    swiper.on('slideChange', function () {

    let activeIndex = swiper.activeIndex;
    // スライドがloopするので９枚目のスライドと１枚目のスライドの行き来のさいには、クラスを指定する（例外）
    if( activeIndex == 10 ) {
      // スライドが９枚目（最後）から１枚めに変わったときの処理
      let activeClassName = 'slide-1';
      // console.log(activeClassName);
      let activeEml = document.getElementsByClassName(activeClassName);
      let activeCap = $(activeEml).attr('alt');
      $('.swiper-slide-content').text( activeCap );

    } else if ( activeIndex == 0 ) {
      // スライドが1枚目（最初）から９枚めに変わったときの処理
      let activeClassName = 'slide-9';
      // console.log(activeClassName);
      let activeEml = document.getElementsByClassName(activeClassName);
      let activeCap = $(activeEml).attr('alt');
      $('.swiper-slide-content').text( activeCap );

    } else {
      // それ以外の処理

      let activeClassName = 'slide-' + activeIndex ;
      // console.log(activeClassName);

      let activeEml = document.getElementsByClassName(activeClassName);
      let activeCap = $(activeEml).attr('alt');
      $('.swiper-slide-content').text( activeCap );
    }


  });

  //サイドバナーのoffsetをnew-itemsに揃える
  let mainInnerPos = $('.main-inner').offset().top;
  let newItemsPos = $('#new-items').offset().top;
  let setPos = newItemsPos - mainInnerPos; //.main-innerのtopから#new-itemsまでの距離(レスポンシブ)
  let footerPos = $('#footer').offset().top;
  let footerHeight = $('#footer').height();

  //#side-bannerの.main-innerのtopからの距離をsetPosにレスポンシブに揃える (.main-innerが#side-bannerに対してrelativeなため)
  $('#side-banner').css('top', setPos );
  let sideBannerPos = $('#side-banner').offset().top;

  $(window).scroll(function() {

    let scroll = $(window).scrollTop();
    let windowHeight = $(window).height();

    if ( scroll > sideBannerPos) {

      $('#side-banner').css('top', 0 );
      $('#side-banner').addClass('side-banner-fixed');

    } else {

      $('#side-banner').css('top', setPos );
      $('#side-banner').removeClass('side-banner-fixed');
    }
  });


  // お気に入りボタンホバーエフェクト
  // $('.btn-fav__img').hover(function() {
  //
  //     $(this).parents('.items__item-inner').next('.add-fav').css('opacity','1');
  //
  // }, function() {
  //
  //     $(this).parents('.items__item-inner').next('.add-fav').css('opacity','0');
  //
  // });


  // お気に入りボタンホバーエフェクト
  $('.btn-fav__img').hover(function() {

    let addFav = $(this).parents('.items__item-inner').next('.add-fav');

    $( addFav ).css('opacity','1');

  }, function() {

    let addFav = $(this).parents('.items__item-inner').next('.add-fav');
    $( addFav ).css('opacity','0');

  });

  // spページでは、ホバーではなく、クリックでテキストの表示を行う
  $('.btn-fav__img').click(function() {

    let addFav = $(this).parents('.items__item-inner').next('.add-fav');

    if( viewport <= windowSp ) {

      if( $( addFav ).hasClass('added')){
        // $( addFav ).css('opacity','0');
        $( addFav ).removeClass('added')
      } else {
        $( addFav ).css('opacity','1');
        $( addFav ).addClass('added');

        setTimeout(function() {
            $(addFav).css('opacity','0');
        }, 5000);
      }
    }
  });

  // お気に入りボタンファンクション
  $('.btn-fav__img').on('click', function() {

    let dataUrl = $(this).attr('data-url');
    let dataSrc = $(this).attr('data-src');

      if($(this).hasClass('is-added')){

        $(this).attr('src',dataSrc);
        $(this).attr('alt', 'REMOVED FROM MY FAVORITE');
        $(this).removeClass('is-added');
        $(this).parents('.items__item-inner').next('.add-fav').text('MY FAVORITEに登録できます')

      }else{

        $(this).addClass('is-added');
        $(this).attr('src',dataUrl);
        $(this).attr('alt', 'ADDED TO MY FAVORITE');
        $(this).parents('.items__item-inner').next('.add-fav').text('MY FAVORITEに登録済みです')

      }
  });

  // SPカテゴリーセクショントグル機能
  $('.toggle_switch').on('click', function() {
    if($(this).hasClass('open')){
        $(this).next('.toggle_contents').stop().slideToggle();
        $(this).removeClass('open');
        $(this).find('.cate-toggle-icon').text('+');
        $(this).find('.cate-toggle-icon').css('margin-right', 0);

    } else{
        $(this).next('.toggle_contents').stop().slideToggle();
        $(this).addClass('open');
        $(this).find('.cate-toggle-icon').text('-');
        $(this).find('.cate-toggle-icon').css('margin-right', 2.5);

    }
    // $(this).toggleClass('open');
    // $(this).next('.toggle_contents').slideToggle();
  });

  // spメニューボタン
  $('.sp-menu-btn').on('click', function() {
    if($('.sp-head-menu').hasClass('opened')) {
      $('.sp-head-menu').removeClass('opened');
    } else {
      $('.sp-head-menu').addClass('opened');
    }
  })

});
