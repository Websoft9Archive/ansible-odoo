#!/bin/bash

read -p "Input your test key:" domain
rm -rf /data/wwwroot/odoo.html
rm -rf /etc/nginx/conf.d/default.conf
mv /etc/nginx/conf.d/default*[@]* /etc/nginx/conf.d/default.conf
systemctl restart nginx
