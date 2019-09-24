# Username and Password

These accounts are required for Odoo image installation and configuration

## Odoo

Administrator account is set by yourselft at the time of Odoo installation wizard

## PostgreSQL

Odoo used the [Peer Authentication](https://www.postgresql.org/docs/10/auth-methods.html#AUTH-PEER) to connect PostgreSQL, the peer authentication method works by obtaining the client's operating system user name from the kernel and using it as the allowed database user name (with optional user name mapping). This method is only supported on local connections.

Odoo's log in page have provided the database GUI management tools, refer to [Manage databases](/admin-postgresql.md)

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