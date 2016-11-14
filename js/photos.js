/*jslint browser: true*/
/*global $, jQuery, alert*/

var main = function () {
    'use strict';
    
    // global variable for the player
    
    var player,
        tag = document.createElement('script'),
        firstScriptTag = document.getElementsByTagName('script')[0];
    
    tag.src = "https://www.youtube.com/iframe_api";
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


    // this function gets called when API is ready to use
    window.onYouTubePlayerAPIReady = function () { // Dave
        // create the global player from the specific iframe (#video)
        console.log("Player is Ready");
        player = new YT.Player('youtube', {
            events: {
                 // call this function when player is ready to use
                'onReady': onPlayerReady
            }
        });
    };

    function onPlayerReady(event) {
        // bind events
        var pauseButton = document.getElementsByClassName("pause-button");
        pauseButton.addEventListener("click", function () {
            player.stopVideo();
        });
    }
    
    $('.pause-button').click(function () {
        player.stopVideo();
    });
    
    $('.arrow-next').click(function () {
        
        
        var currentSlide = $('.active-slide'),
            nextSlide = currentSlide.next(),
            currentTn = $('.active-tn'),
            nextTn = currentTn.next();
        
        if (nextSlide.length === 0) {
            nextSlide = $('.slide').first();
            nextTn = $('.tn').first();
        }
        
        currentSlide.fadeOut(300).removeClass('active-slide');
        nextSlide.fadeIn(300).addClass('active-slide');
        currentTn.removeClass('active-tn');
        nextTn.addClass('active-tn');
    });
    
    $('.arrow-prev').click(function () {
        var currentSlide = $('.active-slide'),
            prevSlide = currentSlide.prev(),
            currentTn = $('.active-tn'),
            prevTn = currentTn.prev();
        
        if (prevSlide.length === 0) {
            prevSlide = $('.slide').last();
            prevTn = $('.tn').last();
        }
        
        currentSlide.fadeOut(500).removeClass('active-slide');
        prevSlide.fadeIn(500).addClass('active-slide');
        currentTn.removeClass('active-tn');
        prevTn.addClass('active-tn');
    });
    
    $('.tn').click(function () {
        var currentTn = $('.active-tn'),
            currentSlide = $('.active-slide'),
            newActive = $(this);
        currentTn.removeClass('active-tn');
        $(this).addClass('active-tn');
        
    });
    
    
    $('#tn1').click(function () {
        var currentSlide = $('.active-slide');
        
        currentSlide.fadeOut(500).removeClass('active-slide');
        $('#slide1').fadeIn(500).addClass('active-slide');
        
    });
    
    $('#tn2').click(function () {
        var currentSlide = $('.active-slide');
        
        currentSlide.fadeOut(500).removeClass('active-slide');
        $('#slide2').fadeIn(500).addClass('active-slide');
        
    });
    
    $('#tn3').click(function () {
        var currentSlide = $('.active-slide');
        
        currentSlide.fadeOut(500).removeClass('active-slide');
        $('#slide3').fadeIn(500).addClass('active-slide');
        
    });
  
    $('#tn4').click(function () {
        var currentSlide = $('.active-slide');
        
        currentSlide.fadeOut(500).removeClass('active-slide');
        $('#slide4').fadeIn(500).addClass('active-slide');
        
    });
    
    $('#tn5').click(function () {
        var currentSlide = $('.active-slide');
        
        currentSlide.fadeOut(500).removeClass('active-slide');
        $('#slide5').fadeIn(500).addClass('active-slide');
        
    });
    
    $('#tn6').click(function () {
        var currentSlide = $('.active-slide');
        
        currentSlide.fadeOut(500).removeClass('active-slide');
        $('#slide6').fadeIn(500).addClass('active-slide');
        
    });
    
    $('#tn7').click(function () {
        var currentSlide = $('.active-slide');
        
        currentSlide.fadeOut(500).removeClass('active-slide');
        $('#slide7').fadeIn(500).addClass('active-slide');
        
    });
    
    $('#tn8').click(function () {
        var currentSlide = $('.active-slide');
        
        currentSlide.fadeOut(500).removeClass('active-slide');
        $('#slide8').fadeIn(500).addClass('active-slide');
        
    });
    
    $('#tn9').click(function () {
        var currentSlide = $('.active-slide');
        
        currentSlide.fadeOut(500).removeClass('active-slide');
        $('#slide9').fadeIn(500).addClass('active-slide');
        
    });
    
    $('#tn10').click(function () {
        var currentSlide = $('.active-slide');
        
        currentSlide.fadeOut(500).removeClass('active-slide');
        $('#slide10').fadeIn(500).addClass('active-slide');
        
    });
    $('#tn11').click(function () {
        var currentSlide = $('.active-slide');
        
        currentSlide.fadeOut(500).removeClass('active-slide');
        $('#slide11').fadeIn(500).addClass('active-slide');
        
    });
    $('#tn12').click(function () {
        var currentSlide = $('.active-slide');
        
        currentSlide.fadeOut(500).removeClass('active-slide');
        $('#slide12').fadeIn(500).addClass('active-slide');
        
    });
    
    $('#tn13').click(function () {
        var currentSlide = $('.active-slide');
        
        currentSlide.fadeOut(500).removeClass('active-slide');
        $('#slide13').fadeIn(500).addClass('active-slide');
        
    });
    
    $('#tn14').click(function () {
        var currentSlide = $('.active-slide');
        
        currentSlide.fadeOut(500).removeClass('active-slide');
        $('#slide14').fadeIn(500).addClass('active-slide');
        
    });
    $('#tn15').click(function () {
        var currentSlide = $('.active-slide');
        
        currentSlide.fadeOut(500).removeClass('active-slide');
        $('#slide15').fadeIn(500).addClass('active-slide');
        
    });
};

$(document).ready(main);