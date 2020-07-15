#!/bin/bash
read -p "已获得试用秘钥？[ y/n ]:" getkkey
if [ $getkkey = "n" ]; then echo -e "\n请通过浏览器访问 http://服务器公网IP 获取秘钥"&&exit; fi

password_md5=ce51fc1c9a0d4ff09bb512b403daff98
while true;
do
  read -p "请输入试用秘钥:" password
  password_do_md5=$(echo -n $password | md5sum | cut -d " " -f 1)
  if [ $password_md5 == $password_do_md5 ];then
          rm -rf /data/wwwroot/odoo.html
          rm -rf /etc/nginx/conf.d/default.conf
          mv /etc/nginx/conf.d/default*[@]* /etc/nginx/conf.d/default.conf &>> /dev/null
          systemctl restart nginx
          echo -e "\033[32m \n解锁成功！请清空浏览器[缓存]后，重新访问 Odoo \033[0m"
          break
  fi
echo -e "\033[31m 秘钥错误！请重新输入\033[0m"
done
