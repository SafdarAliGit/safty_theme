import EditorJS from "@editorjs/editorjs";
import Undo from "editorjs-undo";

frappe.standard_pages["Workspaces"] = function () {
	var wrapper = frappe.container.add_page("Workspaces");

	frappe.ui.make_app_page({
		parent: wrapper,
		name: "Workspaces",
		title: __("Workspace"),
	});

	frappe.workspace = new frappe.views.Workspace(wrapper);
	$(wrapper).bind("show", function () {
		frappe.workspace.show();
	});
};

frappe.views.Workspace.prototype.show = function () {

    if (!this.all_pages) {
        // pages not yet loaded, call again after a bit
        setTimeout(() => this.show(), 100);
        return;
    }
    this.in_customize_mode = false
    let page = this.get_page_to_show();
    this.page.set_title(__(page.name));

    this.update_selected_sidebar(this.current_page, false); //remove selected from old page
    this.update_selected_sidebar(page, true); //add selected on new page

    if (!frappe.router.current_route[0]) {
        frappe.router.current_route = !page.public
            ? ["Workspaces", "private", page.name]
            : ["Workspaces", page.name];
    }

    this.show_page(page);
}
frappe.views.Workspace.prototype.show_page = async function(page) {
    if (page.name == 'Home'){
        this.remove_page_skeleton();
        $(this.wrapper).find('[data-page-route=Workspaces] .sidebar-toggle-btn').remove()
        let workspace_html = "workspace"
        let workspace_details = {
            "total_employee": 208,
            "total_new_join": 8,
            "employees_left":5,
            "total_applicant":25,
            "total_active_employee":50
        }
		this.body.prepend(frappe.render_template(workspace_html, workspace_details));
        this.body.find(".codex-editor").addClass("hidden");
    }
    else {
        if (!this.body.find("#editorjs")[0]) {
            this.$page = $(`
                <div id="editorjs" class="desk-page page-main-content"></div>
            `).appendTo(this.body);
        }
        if (this.all_pages.length) {
            this.create_page_skeleton();
            let pages =
                page.public && this.public_pages.length ? this.public_pages : this.private_pages;
            let current_page = pages.filter((p) => p.title == page.name)[0];
            this.content = current_page && JSON.parse(current_page.content);

            this.content && this.add_custom_cards_in_content();

            $(".item-anchor").addClass("disable-click");

            if (this.pages && this.pages[current_page.name]) {
                this.page_data = this.pages[current_page.name];
            } else {
                await frappe.after_ajax(() => this.get_data(current_page));
            }

            this.setup_actions(page);

            this.prepare_editorjs();
            $(".item-anchor").removeClass("disable-click");

            this.remove_page_skeleton();
        }
    }

    var options = {
            plotOptions: {
              bar: {
                distributed: true,
                borderRadius: 10,
                columnWidth: '70%',

              }
            },
        chart: {
            type: 'bar'
        },
        colors: ['#00665F', '#FD7B9A'],

        series: [{
            name: 'sales',
            data: [90000, 60000, 55000, 80000, 69000, 60000, 70000]
        }],
        legend: {
            show: false
          },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July'],
            show: false,

        },
        yaxis: {
            min: 40000,
            max: 100000,
            tickAmount: 6,
          },
          dataLabels: {
            enabled: false,

          }

    }
    var chart = new ApexCharts(document.querySelector("#chart"), options);

    chart.render();

}
// frappe.views.Workspace.prototype.prepare_container = function () {
//     const current = frappe.get_route()
//     if (current.length > 1) {
//         if (current[0] == "Workspaces" && current[1] !== "") {
//             location.href = '/app'
//         }
//     }
//     let list_sidebar = $(`
//         <div class="list-sidebar overlay-sidebar hidden-xs hidden-sm">
//             <div class="desk-sidebar list-unstyled sidebar-menu"></div>
//         </div>
//     `).appendTo(this.wrapper.find(".layout-side-section"));
//     this.sidebar = list_sidebar.find(".desk-sidebar");

//     this.body = this.wrapper.find(".layout-main-section");
// }