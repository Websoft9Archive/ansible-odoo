# PostgreSQL

Database manager of Odoo can help you backup,duplicate,restore database online.

1. In the log in interface, you can click the link **Manage Database** to manage PostgreSQL
![Odoo manage database](https://libs.websoft9.com/Websoft9/DocsPicture/en/odoo/odoo-loginpage-websoft9.png)

2. Click **set a master password** to set a password for databases management(very important)
![Odoo set a password](https://libs.websoft9.com/Websoft9/DocsPicture/en/odoo/odoo-setmasterpw-websoft9.png)

3. Set a password
![Odoo set a password](https://libs.websoft9.com/Websoft9/DocsPicture/en/odoo/odoo-setapw-websoft9.png)

3. Manage databases
![Odoo set a password](https://libs.websoft9.com/Websoft9/DocsPicture/en/odoo/odoo-manages-websoft9.png)

## Create Database

Odoo support multi-enterpises, create database means add new company in Odoo. Multi company can use the Odoo in one Server Instance together

1. Go to the **Manage Databases** interface of of Odoo
2. Click the **create database**
   ![Odoo create database](https://libs.websoft9.com/Websoft9/DocsPicture/en/odoo/odoo-multidb-websoft9.png)
3. You can see the new database is listed when completed create database

## Backup

1. Go to the **Manage Databases** interface of of Odoo
2. Click the **backup**
   ![Odoo backup](https://libs.websoft9.com/Websoft9/DocsPicture/en/odoo/odoo-managesbk-websoft9.png)
3. After the backup is completed, the system will automatically download the backup data (zip file).

## Duplicate

You can completely copy a business organization as a data for a new business organization.

1. Go to the **Manage Databases** interface of of Odoo
2. Click the **Duplicate**
![Odoo Duplicate](https://libs.websoft9.com/Websoft9/DocsPicture/en/odoo/odoo-managesdp-websoft9.png)
3. You can see the new database is listed when completed duplicate database

> When you duplicate a local database, it is strongly advised to change the duplicated database’s uuid (Unniversally Unique Identifier), since this uuid is how your database identifies itself with our servers. Having two databases with the same uuid could result in invoicing problems or registration problems down the line.

## Delete

1. Go to the **Manage Databases** interface of of Odoo
2. Click the **Delete**

> Delete operation is irreversible, please be cautious

## Restore Database

After the database is deleted, it can be restored by backup.

1. Go to the **Manage Databases** interface of of Odoo
2. Click the **Delete**
3. Upload backup files and rename, then click **Continue**
![Odoo set a pssword](https://libs.websoft9.com/Websoft9/DocsPicture/en/odoo/odoo-managesrs-websoft9.png)
4. When you see the error "413 Request Entity Too Large" in the process of Restore, refer to [here](/zh/else-troubleshooting.md#odoo-related)

## Set Master Password

Only the master password can be modified. If you forget the master password, reset the password scheme to be studied.

## More

Websoft9 provide *[PostgreSQL guide](https://support.websoft9.com/docs/postgresql)* for more useful skills of MySQL, includes: modify password, create user, import/export data, enable or disable remote visit, log configuation and so on.