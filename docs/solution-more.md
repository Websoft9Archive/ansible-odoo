# More

Each of the following solutions has been proven to be effective and we hope to be helpful to you.

## Domain binding

The precondition for binding a domain is that Odoo can accessed by domain name.

Nonetheless, from the perspective of server security and subsequent maintenance considerations, the **Domain Binding** step cannot be omitted.

Odoo domain name binding steps:

1. Connect your Cloud Server
2. Modify [Nginx vhost configuration file](/stack-components.md#nginx), change the **server_name**'s value *metabase.example.com* to your domain name
   ```text
   server {
      listen 80;
      server_name    metabase.example.com; # Change to a your domain name
   ...
   ```
3. Save it and restart [Nginx Service](/admin-services.md#nginx)


## Other

Coming soon
