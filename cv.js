function scrollSkip($node,dis){
  $node.click(function(e){
      e.preventDefault();
      $('html').animate({scrollTop:dis},500)
      $(this).parent('.top-nav-tab').removeClass('show');
  })
}
var distance=[$('#about').offset().top,$('#porfolio').offset().top,$('#skill').offset().top,$('#contact').offset().top]
var $navTab=$('.nav-tab').find('li');
var $topNavTab=$('.top-nav-tab').find('li');
var len=$navTab.length;
//init
$navTab.eq(0).addClass('active');

for(var i=0; i<len; i++){
  scrollSkip($navTab.eq(i),distance[i])
}
for(var i=0; i<len; i++){
  scrollSkip($topNavTab.eq(i),distance[i])
}

$('.tab-show').click(function(e){
  e.preventDefault();
  $('.top-nav-tab').toggleClass('show')
})
$(window).scroll(function(){
  var scrollTop=$(this).scrollTop();
  var arr=[...distance];
  arr = arr.map(item=>{
      return item-3
  })
  arr.push(scrollTop)
  arr.sort((a,b)=>{
      return a-b
  })
  var index=arr.indexOf(scrollTop);
  $navTab.removeClass('active');
  $navTab.eq(index).addClass('active')
})