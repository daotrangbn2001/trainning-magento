
define([
    'jquery',
    'mage/smart-keyboard-handler',
    'mage/mage',
    'mage/ie-class-fixer',
    'domReady!',
    'slick'
], function ($, keyboardHandler) {
    'use strict';

    $('.cart-summary').mage('sticky', {
        container: '#maincontent'
    });
    $('.panel.header > .header.links').clone().appendTo('#store\\.links');
    $('#store\\.links li a').each(function () {
        var id = $(this).attr('id');

        if (id !== undefined) {
            $(this).attr('id', id + '_mobile');
        }
    });
    keyboardHandler.apply();

    //Toggle Navbar
    $(document).on('click','.nav-toggle',function (event){
        if(innerWidth > 768) {
            $('.sections.nav-sections').toggle();
            $('.block.block-search').hide();
            $('.panel.wrapper').hide();
            $('.block.block-minicart').hide();
            event.stopPropagation();
        }
    })
    $(window).on('click',function (){
        if(innerWidth > 768) {
            $('.sections.nav-sections').hide();
        }
    })
    $('.navigation .level0 > .level-top').on('click',function (event){
        $(this).removeAttr('href');
        $(this).next().toggle();
        event.stopPropagation();
    })
    //Toggle-Search
    $('.customer-search').on('click',function (event){
        $('.block.block-search').toggle();
        $('.sections.nav-sections').hide();
        $('.panel.wrapper').hide();
        $('.block.block-minicart').hide();
        event.stopPropagation()
    })
    $('.block.block-search').on('click',function (event){
        event.stopPropagation()
    })
    $(window).on('click',function (){
        $('.block.block-search').hide();
    })
    //Toggle-Account
    $('.customer-welcome').on('click',function (event){
        $('.panel.wrapper').toggle();
        $('.sections.nav-sections').hide();
        $('.block.block-search').hide();
        $('.block.block-minicart').hide();
        event.stopPropagation()
    })
    $('.panel.wrapper').on('click',function (event){
        event.stopPropagation()
    })
    $(window).on('click',function (){
        $('.panel.wrapper').hide();
    })
    //Toggle Cart
    $('.minicart-wrapper .action.showcart').on('click',function (event){
        $('.block.block-minicart').toggle();
        $('.sections.nav-sections').hide();
        $('.block.block-search').hide();
        $('.panel.wrapper').hide();
        event.stopPropagation()
    })
    //Sticky
    $(window).scroll(function(){
        if($(window).scrollTop() > 10){
            $('.page-header').addClass('sticky');
        } else {
            $('.page-header').removeClass('sticky');
        }
    })

    //slick-slider right top footer
    $('.slick-slider').slick({
        dots: false,
        arrows: false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3
    });
})



