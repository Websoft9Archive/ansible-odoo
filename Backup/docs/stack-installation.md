# Initial Installation

If you have completed the Odoo deployment on Cloud Platform, the following steps is for you to start use it quikly

## Preparation

1. Get the **Internet IP** on your Cloud Platform
2. Check you **[Inbound of Security Group Rule](https://support.websoft9.com/docs/faq/tech-instance.html)** of Cloud Console to ensure the TCP:80 is allowed
3. Make a domain resolution on your DNS Console if you want to use domain for Odoo

## Odoo Installation Wizard

1. Using local Chrome or Firefox to visit the URL *http://domain name* or *http://Internet IP*, you will enter installation wizard of Odoo
 ![Odoo初始化页面](https://libs.websoft9.com/Websoft9/DocsPicture/en/odoo/odoo-startcreatedb-websoft9.png)

2.Fill in all items, then click **create database** button to start create one Company's database
  > The Email and Password is credentials for log in to Odoo

3. After the create database is complete, log in to the Odoo Console and install the apps your required.
  ![Odoo APPS](https://libs.websoft9.com/Websoft9/DocsPicture/en/odoo/odoo-consoleui-websoft9.png)

4. Log out, click the **Manage Database** in the log in page of Odoo  
  ![Odoo manage database](https://libs.websoft9.com/Websoft9/DocsPicture/en/odoo/odoo-loginpage-websoft9.png)

5. Click the **set a master password** to set a management password for Odoo's databases(very important)
  ![Odoo set a pssword](https://libs.websoft9.com/Websoft9/DocsPicture/en/odoo/odoo-setmasterpw-websoft9.png)

6. Odoo Support for multi-enterprise, so you can **create database** again for creating new company
  ![Odoo create database again](https://libs.websoft9.com/Websoft9/DocsPicture/en/odoo/odoo-multidb-websoft9.png)

7. Return to log in page, you can see a new database listed for log in
  ![Odoo login](https://libs.websoft9.com/Websoft9/DocsPicture/en/odoo/odoo-multidblogin-websoft9.png)

> More useful Odoo guide, please refer to [Odoo Documentation](https://www.odoo.com/documentation/master/index.html)

## Q&A

#### I can't visit the start page of Odoo?

Your TCP:80 of Security Group Rules is not allowed so there no response from Chrome or Firefox

#### Which database does this Odoo use?

PostgreSQL

#### Check the Demo data, can you delete the data later?

Their no tools for you to delete Demo data. It is recommended to delete the database directly and then add it again (the Demo data is no longer checked)