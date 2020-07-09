#!/bin/bash

read -p "Input You Domain:" domain
rm -rf /data/wwwroot/graylog.html
rm -rf /etc/nginx/conf.d/default.conf
mv /etc/nginx/conf.d/default.conf.graylog /etc/nginx/conf.d/default.conf
sed -i "s/www.example.com/$domain/" /etc/nginx/conf.d/default.conf
systemctl restart nginx