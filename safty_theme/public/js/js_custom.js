frappe.views.Workspace.prototype.make_blocks_sortable = function () {
    let me = this;
    this.page_sortable = Sortable.create(
        this.page.main.find(".codex-editor__redactor").get(0),
        {
            handle: ".drag-handle",
            draggable: ".ce-block",
            animation: 150,
            onEnd: function (evt) {
                me.editor.blocks.move(evt.newIndex, evt.oldIndex);
            },
            setData: function () {
                //Do Nothing
            },
        }
    );}

    frappe.views.ListView.prototype.get_no_result_message = function () {
        let help_link = this.get_documentation_link();
		let filters = this.filter_area && this.filter_area.get();

		let has_filters_set = filters && filters.length;
		let no_result_message = has_filters_set
			? __("No {0} found with matching filters. Clear filters to see all {0}.", [
					__(this.doctype),
			  ])
			: __("You haven't created a {0} yet", [__(this.doctype)]);
		let new_button_label = has_filters_set
			? __("Create a new {0}", [__(this.doctype)], "Create a new document from list view")
			: __(
					"Create your first {0}",
					[__(this.doctype)],
					"Create a new document from list view"
			  );
		let empty_state_image =
			this.settings.empty_state_image ||
			"/assets/fairvalue_theme/images/empty_state.png";

		const new_button = this.can_create
			? `<p><button class="btn btn-primary btn-sm btn-new-doc hidden-xs">
				${new_button_label}
			</button> <button class="btn btn-primary btn-new-doc visible-xs">
				${__("Create New", null, "Create a new document from list view")}
			</button></p>`
			: "";

		return `<div class="msg-box no-border">
			<div>
				<img src="${empty_state_image}" alt="Generic Empty State" class="null-state">
			</div>
			<p>${no_result_message}</p>
			${new_button}
			${help_link}
		</div>`;

    }