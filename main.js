(function($, undefined) {
	$(function() {
		var $menu_item_active = $('#menu').find('a.active');
		$('#menu').on('click', 'a', function(e) {
			var block = $(this).attr('href').slice(1);
			$('#' + $menu_item_active.attr('href').slice(1)).hide(300);
			$menu_item_active.removeClass('active');
			$menu_item_active = $(this);
			$menu_item_active.addClass('active');
			$('#' + block).show(300);
			return false;
		});
	});
})(jQuery);