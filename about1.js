$('section').each(function(){
    var top=$(window).scrollTop();
    var id =$(this).attr('id');
    var height = $(this).height();
    var top = $(this).offset().top - 200;
    if(top >= offset+ top && top < height + offset){
$('.navbar ul li a').removeclass('active');
$('.navbar').find('[href="#' + id + '"] ').addclass('active')
