# Troubleshooting

We collect the most common troubleshooting of using Odoo for your reference:

## Odoo related

#### Nginx “413 Request Entity Too Large” error?

The upload file size is limit 1M by default of Nginx, so you should lift this restrictions

1. Use WinSCP to connect Server
2. Edit [Nginx vhost configuration file](/stack-components.md#nginx)
3. Insert `client_max_body_size 0;` 
   ```
   server {
    listen 80;
    server_name _;
    client_max_body_size 0; #insert here
    ...
   ```
4. Save it and [Restart Nginx Service](/admin-services.md#nginx)

#### Could not upload file to Odoo program directory problem via SFTP?

Since some Ubuntu systems have created the default user name ubuntu by default, ubuntu does not have the right to operate the source code or directory of the odoo program for ordinary users. you need to execute the command:

```
sudo chmod o+rw  /usr/lib/python2.x/dist-packages/odoo   # odoo10
sudo chmod o+rw  /usr/lib/python3/dist-packages/odoo   # odoo11 or 12
```

#### Odoo can't print Chinese content?

When using the Odoo printing function, the downloaded PDF file is only in English and there is no Chinese part, resulting in incomplete printing. The reason is that the required Chinese font is not downloaded in the system environment. Solution: execute the following command to download fonts

~~~
sudo apt-get install ttf-wqy-zenhei
sudo apt-get install ttf-wqy-microhei
~~~


## Database related

#### Database service could not be started?

Insufficient disk space, insufficient memory, and configuration file errors can make database service could not be started  

It is recommended to first check through the command.

```shell
# restart mysql service
systemctl restart mysql

# view disk space
df -lh

# view memory rate
free -lh
```
## Server related

Cloud Server troubleshooting is closely related to the Instance provider that is Cloud Platform   
Please refer to [Cloud Platform Documentation](https://support.websoft9.com/docs/faq/tech-instance.html)