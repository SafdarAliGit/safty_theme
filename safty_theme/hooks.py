app_name = "safty_theme"
app_title = "Safty Theme"
app_publisher = "safdar211@gmail.com"
app_description = "this is safty theme"
app_email = "safdar211@gmail.com"
app_license = "mit"
# required_apps = []

# Includes in <head>
# ------------------

# include js, css files in header of desk.html
# app_include_css = "/assets/safty_theme/css/safty_theme.css"
# app_include_js = "/assets/safty_theme/js/safty_theme.js"

# include js, css files in header of web template
# web_include_css = "/assets/safty_theme/css/safty_theme.css"
# web_include_js = "/assets/safty_theme/js/safty_theme.js"

# include custom scss in every website theme (without file extension ".scss")
# website_theme_scss = "safty_theme/public/scss/website"

# include js, css files in header of web form
# webform_include_js = {"doctype": "public/js/doctype.js"}
# webform_include_css = {"doctype": "public/css/doctype.css"}

# include js in page
# page_js = {"page" : "public/js/file.js"}

# include js in doctype views
# doctype_js = {"doctype" : "public/js/doctype.js"}
# doctype_list_js = {"doctype" : "public/js/doctype_list.js"}
# doctype_tree_js = {"doctype" : "public/js/doctype_tree.js"}
# doctype_calendar_js = {"doctype" : "public/js/doctype_calendar.js"}

# Svg Icons
# ------------------
# include app icons in desk
# app_include_icons = "safty_theme/public/icons.svg"

# Home Pages
# ----------

# application home page (will override Website Settings)
# home_page = "login"

# website user home page (by Role)
# role_home_page = {
# 	"Role": "home_page"
# }

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Jinja
# ----------

# add methods and filters to jinja environment
# jinja = {
# 	"methods": "safty_theme.utils.jinja_methods",
# 	"filters": "safty_theme.utils.jinja_filters"
# }

# Installation
# ------------

# before_install = "safty_theme.install.before_install"
# after_install = "safty_theme.install.after_install"

# Uninstallation
# ------------

# before_uninstall = "safty_theme.uninstall.before_uninstall"
# after_uninstall = "safty_theme.uninstall.after_uninstall"

# Integration Setup
# ------------------
# To set up dependencies/integrations with other apps
# Name of the app being installed is passed as an argument

# before_app_install = "safty_theme.utils.before_app_install"
# after_app_install = "safty_theme.utils.after_app_install"

# Integration Cleanup
# -------------------
# To clean up dependencies/integrations with other apps
# Name of the app being uninstalled is passed as an argument

# before_app_uninstall = "safty_theme.utils.before_app_uninstall"
# after_app_uninstall = "safty_theme.utils.after_app_uninstall"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "safty_theme.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
# 	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
# 	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

# DocType Class
# ---------------
# Override standard doctype classes

# override_doctype_class = {
# 	"ToDo": "custom_app.overrides.CustomToDo"
# }

# Document Events
# ---------------
# Hook on document methods and events

# doc_events = {
# 	"*": {
# 		"on_update": "method",
# 		"on_cancel": "method",
# 		"on_trash": "method"
# 	}
# }

# Scheduled Tasks
# ---------------

# scheduler_events = {
# 	"all": [
# 		"safty_theme.tasks.all"
# 	],
# 	"daily": [
# 		"safty_theme.tasks.daily"
# 	],
# 	"hourly": [
# 		"safty_theme.tasks.hourly"
# 	],
# 	"weekly": [
# 		"safty_theme.tasks.weekly"
# 	],
# 	"monthly": [
# 		"safty_theme.tasks.monthly"
# 	],
# }

# Testing
# -------

# before_tests = "safty_theme.install.before_tests"

# Overriding Methods
# ------------------------------
#
# override_whitelisted_methods = {
# 	"frappe.desk.doctype.event.event.get_events": "safty_theme.event.get_events"
# }
#
# each overriding function accepts a `data` argument;
# generated from the base implementation of the doctype dashboard,
# along with any modifications made in other Frappe apps
# override_doctype_dashboards = {
# 	"Task": "safty_theme.task.get_dashboard_data"
# }

# exempt linked doctypes from being automatically cancelled
#
# auto_cancel_exempted_doctypes = ["Auto Repeat"]

# Ignore links to specified DocTypes when deleting documents
# -----------------------------------------------------------

# ignore_links_on_delete = ["Communication", "ToDo"]

# Request Events
# ----------------
# before_request = ["safty_theme.utils.before_request"]
# after_request = ["safty_theme.utils.after_request"]

# Job Events
# ----------
# before_job = ["safty_theme.utils.before_job"]
# after_job = ["safty_theme.utils.after_job"]

# User Data Protection
# --------------------

# user_data_fields = [
# 	{
# 		"doctype": "{doctype_1}",
# 		"filter_by": "{filter_by}",
# 		"redact_fields": ["{field_1}", "{field_2}"],
# 		"partial": 1,
# 	},
# 	{
# 		"doctype": "{doctype_2}",
# 		"filter_by": "{filter_by}",
# 		"partial": 1,
# 	},
# 	{
# 		"doctype": "{doctype_3}",
# 		"strict": False,
# 	},
# 	{
# 		"doctype": "{doctype_4}"
# 	}
# ]

# Authentication and authorization
# --------------------------------

# auth_hooks = [
# 	"safty_theme.auth.validate"
# ]

# Automatically update python controller files with type annotations for this app.
# export_python_type_annotations = True

# default_log_clearing_doctypes = {
# 	"Logging DocType Name": 30  # days to retain logs
# }

website_context = {
    "favicon": "/assets/safty_theme/images/sauce.png",
    "splash_image": "/assets/safty_theme/images/sauce.png"
}

app_include_css = [
    # "/assets/safty_theme/css/healthcare_theme_app.css"
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css",
    "/assets/safty_theme/css/dashboard.css",
    "/assets/safty_theme/css/form_view.css",
    "/assets/safty_theme/css/sidebar.css",
    "/assets/safty_theme/css/style.css"

]
web_include_css = [
     "/assets/safty_theme/css/fairvalue_theme_web.css"

]