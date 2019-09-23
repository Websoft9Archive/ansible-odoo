# Username and Password

These accounts are required for Odoo image installation and configuration

## Odoo

Administrator account is set by yourselft at the time of Odoo installation wizard

## MySQL

* Administrator username: *`root`*
* Administrator password: stored in the file of your server instance: */credentials/password.txt*. You use the **online SSH interface on Cloud Console** and run the command `cat /credentials/password.txt` to get the database password
   ![Run the cat command](https://libs.websoft9.com/Websoft9/DocsPicture/zh/common/catdbpassword-websoft9.png)

> If you want to log in MySQL, refer to [MySQL Web interface Management](/admin-mysql.md)

## Linux

* Host Name: Internet IP or Public IP of your Instance
* Connect by: Online SSH on Cloud Console or SFTP/SSH tools on your local computer
* Password: It was set by yourself when created instance
* Username: Different Cloud Platform has differences
   |  Cloud Platform   |  Administrator Username   |
   | --- | --- |
   |  Azure   |  It was set by yourself when created instance   |
   |  AWS   |  ubuntu   |
   |  Alibaba Cloud, HUAWEI CLOUD, Tencent Cloud |  root   |

If don't remember the password of Linux, you should reset password on Cloud Console