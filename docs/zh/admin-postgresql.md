# PosgreSQL

Odoo 预装包中内置 PosgreSQL 及可视化数据库管理功能 ，使用请参考如下步骤：

1. 在 Odoo 登录界面点击【Manage Database】链接  
![Odoo manage database](http://libs.websoft9.com/Websoft9/DocsPicture/en/odoo/odoo-loginpage-websoft9.png)

2. 点击【set a master password】给数据库设置一个主密码保护数据库（非常重要）
![Odoo set a pssword](http://libs.websoft9.com/Websoft9/DocsPicture/en/odoo/odoo-setmasterpw-websoft9.png)

3. 设置密码
![Odoo set a pssword](http://libs.websoft9.com/Websoft9/DocsPicture/en/odoo/odoo-setapw-websoft9.png)

3. 选择操作项，管理数据库
![Odoo set a pssword](http://libs.websoft9.com/Websoft9/DocsPicture/en/odoo/odoo-manages-websoft9.png)

## 备份

1. 输入密码，选择备份格式，点击【Backup】
![Odoo 备份](http://libs.websoft9.com/Websoft9/DocsPicture/en/odoo/odoo-managesbk-websoft9.png)

2. 备份完成后，系统会自动下载备份数据（zip文件）

## 复制

可以完整复制一个企业组织，作为新企业组织的数据

1. 输入密码，设置名称，点击【Continue】
![Odoo set a pssword](http://libs.websoft9.com/Websoft9/DocsPicture/en/odoo/odoo-managesdp-websoft9.png)

2. 复制成功后，数据库管理栏目会列出新复制的数据库

## 删除

请谨慎操作

## 恢复

数据库被删除后，可以通过备份进行恢复

1. 输入密码，选择备份文件，命名恢复后的数据库名称，点击【Continue】
![Odoo set a pssword](http://libs.websoft9.com/Websoft9/DocsPicture/en/odoo/odoo-managesrs-websoft9.png)

2. 数据库恢复过程中可能会出现"413 Request Entity Too Large"，待解决

## 修改主密码

只可以修改主密码，如果忘记了主密码，重置密码方案待研究

> 阅读Websoft9提供的 [《PostgreSQL教程》](https://support.websoft9.com/docs/postgresql/zh/) ，掌握更多的 PostgreSQL 实用技能：修改密码、导入/导出数据、创建用户、开启或关闭远程访问、日志配置等