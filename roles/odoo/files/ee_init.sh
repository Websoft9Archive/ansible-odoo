#!/bin/bash
read -p "是否已经联系Odoo获取试用秘钥[ y/n ]:" getkkey
if [ $getkkey = "n" ]; then echo -e "\n请通过浏览器访问 http://服务器公网IP 获取秘钥"&&exit; fi
rm -rf /data/wwwroot/odoo.html
rm -rf /etc/nginx/conf.d/default.conf
mv /etc/nginx/conf.d/default*[@]* /etc/nginx/conf.d/default.conf &>> /dev/null
systemctl restart nginx
echo -e "\n解锁成功！请清空浏览器[缓存]后，重新访问 Odoo"
