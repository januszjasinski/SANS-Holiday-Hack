setInterval(function() {
    $('.player').not('.me').find('img').css({transform:'translateY(40px) scale(0.5)'});
    $('.player').not('.me').find('.player-badge').hide();
    $('.player').find('.player-username').css({transform:'translateY(180px) scale(0.75)'});
},2000);
