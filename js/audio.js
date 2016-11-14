/*jslint browser: true*/
/*global $, jQuery, alert*/


$(document).ready(function () {
    'use strict';
    $('#leaderalbums').hide();
    $('#sidealbums').hide();
    $('#otheralbums').hide();
    $('#leader').click(function () {
        $('#leaderalbums').show('slow');
        $('.wrapper').css('width', '75%');
    });
    $('#side').click(function () {
        $('#sidealbums').show('slow');
        $('.wrapper').css('width', '75%');
    });
    $('#uncollected').click(function () {
        $('#otheralbums').show('slow');
        $('.wrapper').css('width', '75%');
    });
    $('#leaderSidebar').click(function () {
        $('#leaderalbums').hide();
        if ($('#sidealbums').is(':hidden') || $('#otheralbums').is(':visible')) {
            $('.wrapper').css('width', '55%');
        }
    });
    $('#sideSidebar').click(function () {
        $('#sidealbums').hide();
        if ($('#leaderalbums').is(':hidden') || $('#otheralbums').is(':visible')) {
            $('.wrapper').css('width', '55%');
        }
    });
    $('#otherSidebar').click(function () {
        $('#otheralbums').hide();
        if ($('#sidealbums').is(':hidden') || $('#leaderalbums').is(':visible')) {
            $('.wrapper').css('width', '55%');
        }
    });
        
});