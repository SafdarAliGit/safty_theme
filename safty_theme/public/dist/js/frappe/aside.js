frappe.provide("frappe.ui.toolbar");
frappe.provide('frappe.search');

frappe.ui.toolbar.MosyrSidebar = class {

	constructor() {
		let sidebar_items = []
		$('#mosyrsidebar').empty()
		$('#mosyrsidebar').html(frappe.render_template("sidebar"));

		this.make();
		this.bind_events()
	}

	make() {

	}

	bind_events() {

		$('#menu-button').click(function () {
			$('#mosyrsidebar').css("margin-left", "0")
			$('.close-icon').css("display", "block")
		});

		$('.close-icon').click(function () {
			$('#mosyrsidebar').css("margin-left", "-266px")
			$('.close-icon').css("display", "none")
		});
		$('.custom_btn_toggle').click(function () {
			$('.sidebar-item-label').toggleClass('hidden');
			$('.small-logo').toggleClass('hidden');
			$('.big-logo').toggleClass('hidden');
			$('#mosyrsidebar').toggleClass('sidebar-custome-width')
			$('.layout-page').toggleClass('layout-custome-width')

			$(".custom_btn_toggle").toggleClass('flip-icon')
			$(".nested-ddl-sidebar ").toggleClass('hidden')

			const current = frappe.get_route()
			if (current.length > 1) {
				if (current[0] !== "Workspaces" && current[1] !== "") {
					$('.layout-side-section').toggle();
				}
			}
		});

		$(window).on('load', function () {
			let xx = $('.form-sidebar.overlay-sidebar').is(":visible");
			if (!xx) {
				$('.layout-main .layout-side-section').css('display', 'none');

			}
			if ($('.form-sidebar.overlay-sidebar').css('display', "none")) {
				$('.layout-main .layout-side-section').css('display', 'none')
			}
		});

		$(document).on("page-change", function () {
			const current = frappe.get_route()
			if (current.length > 1) {
				if ((current[0] !== "Workspaces" && current[1] !== "")) {
					$('.sidebar-item-label').addClass('hidden');
					$('#mosyrsidebar').addClass('sidebar-custome-width')
					$('.layout-page').addClass('layout-custome-width')
					$(".nested-ddl-sidebar ").addClass('hidden')
					$('.small-logo').removeClass('hidden');
					$('.big-logo').addClass('hidden');
				}
				else {
					$('.sidebar-item-label').removeClass('hidden')
					$('#mosyrsidebar').removeClass('sidebar-custome-width')
					$('.layout-page').removeClass('layout-custome-width')
					$('.small-logo').addClass('hidden');
					$('.big-logo').removeClass('hidden');
					$(".nested-ddl-sidebar ").removeClass('hidden')
				}
			}
			if (current.length > 1) {
				if ((current[0] !== "Form" && current[1] !== "")) {
					$('.layout-main .layout-side-section').css('display', 'none');
				}
				else {
					let xx = $('.form-sidebar.overlay-sidebar').is(":visible");
					if (!xx) {
						$('.layout-main .layout-side-section').css('display', 'none');

					}
				}

			}
			const links = document.querySelectorAll(".sidebar-menu-link");
		for (let i = 0; i < links.length; i++) {
			const currentLink = links[i];
			if (window.location.href === currentLink.href) {
				$(".standard-sidebar-item").removeClass("selected");
				$(currentLink).children().addClass("selected");
				const $nextNestedDdl = $(currentLink).next('.nested-ddl-sidebar');
				if ($nextNestedDdl.length > 0) {
					$nextNestedDdl.css('color', '#fff');
				}
			}
		}




		const nestedlinks = document.querySelectorAll(".nested-menu-link");
		for (let i = 0; i < nestedlinks.length; i++) {
			const nestedcurrentLink = nestedlinks[i];
			if (window.location.href === nestedcurrentLink.href) {

				const $childItem = $('.nested-ddl-sidebar').siblings('.sidebar-child-item');

				// $childItem.removeClass('hidden');
				$(".standard-sidebar-item").removeClass("selected");
				$(nestedcurrentLink).children().addClass("selected");
				let parent_cont = $(nestedcurrentLink).parent().parent().parent()
				let list = $(parent_cont).find(".sidebar-child-item")
				list.each(function(el) {
					$(list[el]).removeClass('hidden')
				});
				// $(nestedcurrentLink).parent().parent().removeClass('hidden');;
				$('.sidebar-item-label').removeClass('hidden');

				$('.small-logo').addClass('hidden');
				$('.big-logo').removeClass('hidden');
				$('#mosyrsidebar').removeClass('sidebar-custome-width')
				$('.layout-page').removeClass('layout-custome-width')
				$('.nested-ddl-sidebar').removeClass('hidden')

			}
		}


		});

		$('.nested-ddl-sidebar').click(function (e) {
			var $childItem = $(this).siblings('.sidebar-child-item');
			$childItem.toggleClass('hidden');

		});
	}
}

frappe.Application.prototype.make_nav_bar = function () {

	// toolbar
	if (frappe.boot && frappe.boot.home_page !== 'setup-wizard') {
		frappe.frappe_toolbar = new frappe.ui.toolbar.Toolbar();
		frappe.frappe_mosyr_sidebar = new frappe.ui.toolbar.MosyrSidebar();
	}

	$(document).ready(function () {
		$(".standard-sidebar-item").click(function () {
			var $nestedDdlSidebar = $(this).next(".nested-ddl-sidebar");
			if ($nestedDdlSidebar.length > 0) {
				$(".nested-ddl-sidebar").css({
					"background-color": "",
					"color": ""
				});
				$nestedDdlSidebar.css({
					"color": "#ffffff"
				});
			}
			$(".standard-sidebar-item").removeClass("selected");
			$(this).addClass("selected");

		});

		$(document).click(function (event) {
			if (!$(event.target).closest('.standard-sidebar-item').length) {
				$(".nested-ddl-sidebar").css({
					"background-color": "",
					"color": ""
				});
				$(".standard-sidebar-item").removeClass("selected");
			}
		});
	});

}

