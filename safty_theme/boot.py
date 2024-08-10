
import subprocess
import frappe
from hrms.hr.doctype.leave_application.leave_application import get_leave_details
from frappe.utils import flt, cint, slug
import datetime
from datetime import datetime
from datetime import datetime, timedelta
from frappe.permissions import get_valid_perms


def boot_session(bootinfo):
    # bootinfo.language_1 = frappe.local.lang
    # bootinfo.role_profile = frappe.db.get_value("User", frappe.session.user, "role_profile_name")
    bootinfo.eko_navbar_reports = get_fairvalue_navbar_reports()
    bootinfo.eko_navbar_settings = {}
    # bootinfo.user_type = frappe.db.get_value("User", frappe.session.user, "user_type")



def get_fairvalue_navbar_reports():
    eko_navbar_settings = frappe.get_single("Fairvalue Navbar Settings").as_dict()
    report_list = []
    for d in eko_navbar_settings.get("reports_dropdown"):
        report_list
        if d.get("report_type") == "Report Menu":
            if frappe.db.exists("Report Menu", d.get("report")):
                reports = frappe.get_all("Report Menu Collection", {"parent": d.get("report")}, "report")
                if reports:
                    eko_navbar_settings[d.get("report")] = [get_report_route(d.report) for d in reports]

                    report_list.append({"is_submenu": 1, "title":  d.get("report"), "report_list": [{"title": d.report, "report_route": get_report_route(d.report)} for d in reports]})

        elif d.get("report_type") == "Report":
            report_list.append({"is_submenu": 0, "title":  d.get("report"), "report_route": get_report_route( d.get("report"))})

    return report_list


def get_report_route(report):
    report_doc = frappe.get_cached_value("Report", report, ["ref_doctype", "report_type"], as_dict=1)

    if report_doc.get("report_type") in ["Query Report", "Script Report", "Custom Report"]:
        report_route = "query-report/{0}".format(report)
    else:
        ref_doctype = slug(report_doc.get("ref_doctype"))
        report_route = "{0}/view/report/{1}".format(ref_doctype, report)

    return report_route
