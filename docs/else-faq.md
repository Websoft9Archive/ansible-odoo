# FAQ

#### Odoo support multi-language?

Yes

#### Where is the database connection configuration of Odoo?

Database configuration information in *metabase.conf* in the Odoo installation directory, [refer to the installation directory](/stack-components.md#metabase)

#### If there is no domain name, can I deploy Odoo?

Yes, visit Odoo by *http://Internet IP*

#### What is the password for the database root user?

The password is stored in the server related file: `/credentials/password.txt`

#### Is there a web-base GUI database management tools?

Yes, phpMyAdmin is on it, visit by http://Internet IP:9090

#### How to disable phpMyAdmin access?

Disable port 9090 of the server security group

#### Is it possible to modify the source path of Odoo?

Yes, modify it by [Nginx vhost configuration file](/stack-components.md)

#### How to change the permissions of filesytem?

Change owner(group) or permissions like below:

```shell
chown -R nginx.nginx /data/wwwroot
find /data/wwwroot -type d -exec chmod 750 {} \;
find /data/wwwroot -type f -exec chmod 640 {} \;
```
#### What's the difference between Deployment and Installation?

- Deployment is a process of installing and configuring a sequence of software in sequence in a different order, which is a complex system engineering.  
- Installation is the process of starting the initial wizard after the application is prepared.  
- Installation is simpler than deployment. 

#### What's Cloud Platform?

Cloud platform refers to platform manufacturers that provide cloud computing services, such as: **Azure, AWS, Alibaba Cloud, HUAWEI CLOUD, Tencent Cloud**, etc.

#### What is the difference between Instance, Cloud Server, Virtual Machine, ECS, EC2, CVM, and VM?

No difference, just the terminology used by different manufacturers, actually cloud servers