# FAQ

#### Odoo support multi-language?

Yes, refer to [Add language](/solution-odoo.md#add-your-language)

#### Where is the database connection configuration of Odoo?

Odoo used the [Peer Authentication](https://www.postgresql.org/docs/10/auth-methods.html#AUTH-PEER) to connect PostgreSQL, the peer authentication method works by obtaining the client's operating system user name from the kernel and using it as the allowed database user name (with optional user name mapping). This method is only supported on local connections.

### Why can't I see the Odoo Updates feature in the Settings panel?

The function is only used in the developer mode, make sure you have change to [Developer Mode](/solution-odoo.md#enable-developer-mode)

#### How can I delete the Demo data of Odoo?

It is recommended to delete the database directly and then add it again (the Demo data is no longer checked)

#### Can Odoo export PDF files?

Yes, you can test it from the modules: Invoice, Purchase
![Odoo print to PDF](https://libs.websoft9.com/Websoft9/DocsPicture/en/odoo/odoo-printtopdf-websoft9.png)

#### If there is no domain name, can I deploy Odoo?

Yes, visit Odoo by *http://Internet IP*

#### What is the password for the database root user?

The password is stored in the server related file: `/credentials/password.txt`

#### Is there a web-base GUI database management tools?

Yes, Odoo includes the database GUI functions, refer to [Odoo Mange Database function](/admin-postgresql.md) 

#### Is it possible to modify the source path of Odoo?

No

#### How to change the permissions of filesytem?

Change owner(group) or permissions like below:

```shell
chown -R nginx.nginx /data
find /data -type d -exec chmod 750 {} \;
find /data -type f -exec chmod 640 {} \;
```
#### What's the difference between Deployment and Installation?

- Deployment is a process of installing and configuring a sequence of software in sequence in a different order, which is a complex system engineering.  
- Installation is the process of starting the initial wizard after the application is prepared.  
- Installation is simpler than deployment. 

#### What's Cloud Platform?

Cloud platform refers to platform manufacturers that provide cloud computing services, such as: **Azure, AWS, Alibaba Cloud, HUAWEI CLOUD, Tencent Cloud**, etc.

#### What is the difference between Instance, Cloud Server, Virtual Machine, ECS, EC2, CVM, and VM?

No difference, just the terminology used by different manufacturers, actually cloud servers