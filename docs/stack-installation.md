# Initial Installation

If you have completed the Odoo deployment on Cloud Platform, the following steps is for you to start use it quikly

## Preparation

1. Get the **Internet IP** on your Cloud Platform
2. Check you **[Inbound of Security Group Rule](https://support.websoft9.com/docs/faq/tech-instance.html)** of Cloud Console to ensure the TCP:80 is allowed
3. Make a domain resolution on your DNS Console if you want to use domain for Odoo

## Odoo Installation Wizard

1. Using local Chrome or Firefox to visit the URL *http://domain name* or *http://Internet IP*, you will enter the register interface of Odoo
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/en/metabase/metabase-start-websoft9.png)
2. You may wait for 1-3 Minutes for the loading of Odoo
![Start Odoo](https://libs.websoft9.com/Websoft9/DocsPicture/en/metabase/metabase-starty-websoft9.png)

3. Click the **Let's get started** button and set your administrator account, then go to next step
4. Add your data: you can select the type of Database which will be analyzed or  click **I'll add my data later** then Odoo will create a Demo from H2 Database
![Add data to Odoo](https://libs.websoft9.com/Websoft9/DocsPicture/en/metabase/metabase-installdb-websoft9.png)

5. Once you have completed the installation, click the button **Take me to Odoo** to log in Odoo Console
![Odoo installation successful](https://libs.websoft9.com/Websoft9/DocsPicture/en/metabase/metabase-installss-websoft9.png)

6. Take the H2 demo data as an example to start data analysis work.
![Odoo H2](https://libs.websoft9.com/Websoft9/DocsPicture/en/metabase/metabase-dashborad-websoft9.png)

7. Log in Odoo Console, go to **Odoo Admin** page like below
![Odoo Admin](https://libs.websoft9.com/Websoft9/DocsPicture/en/metabase/metabase-admin-websoft9.png)

8. Click **Add a database** to add a new data source for Odoo
![Odoo Data source](https://libs.websoft9.com/Websoft9/DocsPicture/en/metabase/metabase-adddb-websoft9.png)

9. Click **People** tab on the top of Odoo Admin, you can add user and modify password
![Odoo People](https://libs.websoft9.com/Websoft9/DocsPicture/en/metabase/metabase-users-websoft9.png)

> More useful Odoo guide, please refer to [Odoo Documentation](https://metabase.com/docs/latest/)

## Q&A

#### I can't visit the start page of Odoo?

Your TCP:80 of Security Group Rules is not allowed so there no response from Chrome or Firefox

#### Which database does this Odoo use?

MySQL

#### 勾选 Demo data了，以后还能删除这些数据吗？

You never use demo database for business
