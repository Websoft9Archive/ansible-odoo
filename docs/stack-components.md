# Parameters

The Odoo deployment package contains a sequence software (referred to as "components") required for Odoo to run. The important information such as the component name, installation directory path, configuration file path, port, version, etc. are listed below.

## Path

### Odoo

Odoo installation directory: */data/wwwroot/metabase*  
Odoo configuration file: */data/wwwroot/metabase/metabase.conf*  

### Java

Java Directory: */usr/lib/jvm*

### Nginx

Nginx vhost configuration file: */etc/nginx/sites-available/default.conf*  
Nginx main configuration file: */etc/nginx/nginx.conf*  
Nginx logs file: */var/log/nginx/*

### MYSQL

MySQL installation directory: */usr/local/mysql*  
MySQL data directory: */data/mysql*  
MySQL configuration file: */etc/my.cnf*    
MySQL Web Management URL: *http://Internet IP:9090*, get credential from [Username and Password](/stack-accounts.md)


## Ports

You can view all the used ports from the official docs [Package defaults](https://docs.gitlab.com/omnibus/package-information/defaults.html) . You can control(open or shut down) ports by **[Security Group Setting](https://support.websoft9.com/docs/faq/zh/tech-instance.html)** of your Cloud Server whether the port can be accessed from Internet.

These ports should be opened for this application:

| Name | Number | Use |  Necessity |
| --- | --- | --- | --- |
| MySQL | 3306 | Remote connect MySQL | Optional |
| HTTP | 80 | HTTP requests for Odoo | Required |
| HTTPS | 443 | HTTPS requests Odoo | Optional |
| phpMyAdmin on Docker | 9090 | Web managment GUI for MySQL | Optional |

## Version

You can see the version from product page of Marketplace. However, after being deployed to your server, the components will be automatically updated, resulting in a certain change in the version number. Therefore, the exact version number should be viewed by running the command on the server:

```shell
# Linux Version
lsb_release -a

# Java Version
java --version

# Nginx version:
nginx -v

# MySQL version:
mysql -V

# Dokcer:
docker --version
```