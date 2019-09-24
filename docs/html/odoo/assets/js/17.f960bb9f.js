(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{203:function(e,t,r){"use strict";r.r(t);var o=r(0),n=Object(o.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"parameters"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#parameters","aria-hidden":"true"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),r("p",[e._v('The Odoo deployment package contains a sequence software (referred to as "components") required for Odoo to run. The important information such as the component name, installation directory path, configuration file path, port, version, etc. are listed below.')]),e._v(" "),r("h2",{attrs:{id:"path"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#path","aria-hidden":"true"}},[e._v("#")]),e._v(" Path")]),e._v(" "),r("h3",{attrs:{id:"odoo"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#odoo","aria-hidden":"true"}},[e._v("#")]),e._v(" Odoo")]),e._v(" "),r("p",[e._v("Odoo installation directory: "),r("em",[e._v("/usr/lib/python3/dist-packages/odoo")]),r("br"),e._v("\nOdoo configuration file: "),r("em",[e._v("/etc/odoo/odoo.conf")]),r("br"),e._v("\nOdoo log directory: "),r("em",[e._v("/var/log/odoo")])]),e._v(" "),r("h3",{attrs:{id:"python"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#python","aria-hidden":"true"}},[e._v("#")]),e._v(" Python")]),e._v(" "),r("p",[e._v("Python installation directory: * /usr/lib/python-v*"),r("br"),e._v("\nPython VM directory: "),r("em",[e._v("/usr/bin/python-v")])]),e._v(" "),r("p",[e._v("-v is version 2.7/3/3.6/3.7")]),e._v(" "),r("h3",{attrs:{id:"nginx"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#nginx","aria-hidden":"true"}},[e._v("#")]),e._v(" Nginx")]),e._v(" "),r("p",[e._v("Nginx vhost configuration file: "),r("em",[e._v("/etc/nginx/sites-available/default")]),r("br"),e._v("\nNginx main configuration file: "),r("em",[e._v("/etc/nginx/nginx.conf")]),r("br"),e._v("\nNginx logs file: "),r("em",[e._v("/var/log/nginx/")])]),e._v(" "),r("h3",{attrs:{id:"postgresql"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#postgresql","aria-hidden":"true"}},[e._v("#")]),e._v(" PostgreSQL")]),e._v(" "),r("p",[e._v("PostgreSQL installation directory: "),r("em",[e._v("/usr/bin/psql")]),r("br"),e._v("\nPostgreSQL data file: "),r("em",[e._v("/var/lib/postgresql")]),r("br"),e._v("\nPostgreSQL configuration file: "),r("em",[e._v("/etc/postgresql/10/main/postgresql.conf")]),r("br"),e._v("\nPostgreSQL log directory: "),r("em",[e._v("/var/log/postgresql")]),r("br"),e._v("\nPostgreSQL GUI management: Odoo's log in page have provided the database GUI management tools")]),e._v(" "),r("h2",{attrs:{id:"ports"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ports","aria-hidden":"true"}},[e._v("#")]),e._v(" Ports")]),e._v(" "),r("p",[e._v("You can control(open or shut down) ports by "),r("strong",[r("a",{attrs:{href:"https://support.websoft9.com/docs/faq/zh/tech-instance.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Security Group Setting"),r("OutboundLink")],1)]),e._v(" of your Cloud Server whether the port can be accessed from Internet.")]),e._v(" "),r("p",[e._v("These ports should be opened for this application:")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Name")]),e._v(" "),r("th",[e._v("Number")]),e._v(" "),r("th",[e._v("Use")]),e._v(" "),r("th",[e._v("Necessity")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("MySQL")]),e._v(" "),r("td",[e._v("3306")]),e._v(" "),r("td",[e._v("Remote connect MySQL")]),e._v(" "),r("td",[e._v("Optional")])]),e._v(" "),r("tr",[r("td",[e._v("HTTP")]),e._v(" "),r("td",[e._v("80")]),e._v(" "),r("td",[e._v("HTTP requests for Odoo")]),e._v(" "),r("td",[e._v("Required")])]),e._v(" "),r("tr",[r("td",[e._v("HTTPS")]),e._v(" "),r("td",[e._v("443")]),e._v(" "),r("td",[e._v("HTTPS requests Odoo")]),e._v(" "),r("td",[e._v("Optional")])]),e._v(" "),r("tr",[r("td",[e._v("PostgreSQL")]),e._v(" "),r("td",[e._v("5432")]),e._v(" "),r("td",[e._v("Remote connect PostgreSQL")]),e._v(" "),r("td",[e._v("Optional")])])])]),e._v(" "),r("h2",{attrs:{id:"version"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#version","aria-hidden":"true"}},[e._v("#")]),e._v(" Version")]),e._v(" "),r("p",[e._v("You can see the version from product page of Marketplace. However, after being deployed to your server, the components will be automatically updated, resulting in a certain change in the version number. Therefore, the exact version number should be viewed by running the command on the server:")]),e._v(" "),r("div",{staticClass:"language-shell extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("# Linux Version\nlsb_release -a\n\n# Python Version\npython --version  \npython3 --version\n\n# Nginx version:\nnginx -v\n\n# PostgeSQL version:\npsql --version\n")])])])])},[],!1,null,null,null);t.default=n.exports}}]);