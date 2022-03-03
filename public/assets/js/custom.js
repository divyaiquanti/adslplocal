jQuery(document).ready(function() {

jQuery(window).on('resize', function() {
  if (window.matchMedia("only screen and (max-width: 991.98px)").matches) {
    jQuery(".nav__button").off("click").on("click",function(a){jQuery(a.target).hasClass("open")?(jQuery(a.target).attr("aria-expanded","false"),jQuery(window).width()<1200&&jQuery("[data-nav-menu-item] > a, [data-nav-menu-item] > ul > li > a").attr("tabindex","-1")):(jQuery(a.target).attr("aria-expanded","true"),jQuery(window).width()<1200&&(jQuery("[data-nav-menu-item] > a, [data-nav-menu-item] > ul > li > a").attr("tabindex","0"),jQuery(".nav__nav > .main-nav > li:last-child > a:last-child").on("focusout",()=>{jQuery(".nav__button").focus()}))),jQuery(this).toggleClass("open"),jQuery(".nav__nav").toggleClass("open")});
  } 
});
	
if(jQuery(window).width()> 768){
  //top menubar
  
  jQuery(window).scroll(function(){
	  var sticky = jQuery('.fixdiv'),
		  scroll = jQuery(window).scrollTop();
		  
		if(sticky.hasClass('fixedmobile')) sticky.removeClass('fixedmobile');

	  if (scroll >= 520) sticky.addClass('fixed');
	  else sticky.removeClass('fixed');
	});
 }
 else{
	var sticky = jQuery('.fixdiv'); sticky.removeClass('fixed').addClass('fixedmobile');
	
	
 }
 jQuery(".hideAccordianCards").click(function(e) {
	 e.preventDefault(); 
	 jQuery('.card-header').find('.btn-link').addClass('collapsed'); 
	 jQuery('.collapse').removeClass('show'); 
	 //8.	Expand all / Collapse all
	 /*var s=s_gi('{{reporting suite}}'); 
	 s.tl(this, 'e','Collapse All');*/
 });
jQuery(".showAccordianCards").click(function(e) {
	e.preventDefault(); 
	jQuery('.card-header').find('.btn-link').removeClass('collapsed'); 
	jQuery('.collapse').addClass('show'); 
	
	//8.	Expand all / Collapse all
	/* var s=s_gi('{{reporting suite}}'); 
	 s.tl(this, 'e','Expand All');*/
 });
 
 jQuery('.form-close').click(function(e){
	jQuery(this).parent().find('.form-control').val(0);
 });
 
 
 
 
});