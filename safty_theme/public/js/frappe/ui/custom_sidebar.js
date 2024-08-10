//
// frappe.views.Workspace.prototype.build_sidebar_section = function (title, root_pages) {
// 	let sidebar_section = $(
// 		`<div class="standard-sidebar-section nested-container" data-title="${title}">
// 		</div>`
// 	);
//
// 	this.prepare_sidebar(root_pages, sidebar_section, this.sidebar);
//
//
// 	if (Object.keys(root_pages).length === 0) {
// 		sidebar_section.addClass("hidden");
// 	}
//
// 	if (
// 		sidebar_section.find(".sidebar-item-container").length &&
// 		sidebar_section.find("> [item-is-hidden='0']").length == 0
// 	) {
// 		sidebar_section.addClass("hidden show-in-edit-mode");
// 	}
// }

// ----------

frappe.views.Workspace.prototype.build_sidebar_section = function (title, root_pages) {
	let sidebar_section = $(
		`<div class="standard-sidebar-section nested-container" data-title="${title}">
		</div>`
	);

	this.prepare_sidebar(root_pages, sidebar_section, this.sidebar);


	if (Object.keys(root_pages).length === 0) {
		sidebar_section.addClass("hidden");
	}

	if (
		sidebar_section.find(".sidebar-item-container").length &&
		sidebar_section.find("> [item-is-hidden='0']").length == 0
	) {
		sidebar_section.addClass("hidden show-in-edit-mode");
	}
}