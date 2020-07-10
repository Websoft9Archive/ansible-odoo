#!/bin/bash

read -p "Input your test key:" domain
rm -rf /data/wwwroot/odoo.html
rm -rf /etc/nginx/conf.d/default.conf
mv /etc/nginx/conf.d/default*[@]* /etc/nginx/conf.d/default.conf &>> /dev/null
systemctl restart nginx
echo "Unlock Odoo enterprise successfully, please refresh and clear cach of your browser to visit Odoo again"
