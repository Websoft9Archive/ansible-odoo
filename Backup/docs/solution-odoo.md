# Odoo Configuration

This chapter lists some of the most common configurations of Odoo.

## Basic Settings

Go to Odoo's Settings panel

1. Log in Odoo, and click the **Settings icon** in the left top menu
   ![Odoo  Settings ](https://libs.websoft9.com/Websoft9/DocsPicture/en/odoo/odoo-settingspanel-websoft9.png)
2. Then, you can install apps, set language, add user, set up company and more

### Set your Logo

![Odoo set logo](https://libs.websoft9.com/Websoft9/DocsPicture/en/odoo/odoo-settingslogo-websoft9.png)

### Add your language

1. Go to **Settings** console to add a new language
  ![Odoo add new language](https://libs.websoft9.com/Websoft9/DocsPicture/en/odoo/odoo-settingslangs-websoft9.png)
2. Then go to **Administrator** > **Prefrences**    
  ![Odoo user prefrences](https://libs.websoft9.com/Websoft9/DocsPicture/en/odoo/odoo-pref-websoft9.png)
3. Set language for administrator
  ![Odoo set language](https://libs.websoft9.com/Websoft9/DocsPicture/en/odoo/odoo-language002-websoft9.png)

## Enable developer mode

1. Log in to Odoo, open the **Settings** item by clicking the settings icon in the upper left corner.
2. Click **Active the developer mode** on the lower right of the Settings screen.
   ![Odoo Developer Mode](https://libs.websoft9.com/Websoft9/DocsPicture/en/odoo/odoo-enabledev-websoft9.png)
3. In the developer mode, the Settings console has more features.

## Install wkhtmltopdf

Odoo has installed the wkhtmltopdf, if you want to reintall it, follow is the steps:

1.  Remove the old version of wkhtmltopdf

    ~~~
    ~# sudo apt-get remove wkhtmltopdf 
    ~# sudo apt-get autoremove
    ~~~

2.  Download wkhtmltopdf tar file from Github

    ~~~
    ~# wget https://github.com/wkhtmltopdf/wkhtmltopdf/releases/download/0.12.4/wkhtmltox-0.12.4_linux-generic-amd64.tar.xz
    ~~~

3.  Unzip it and you can find a new folder named wkhtmltox in your Server

    ~~~
    ~# tar –xf [filename]
    ~~~

4.  Copy the file *wkhtmltox/bin/wkhtmltomage* and *wkhtmmltox/bin/wkhtmltoodf* the directory */usr/bin*

    ~~~
    ~# cp wkhtmltox/bin/wkhtmltoimage /usr/bin/
    ~# cp wkhtmmltox/bin/wkhtmltoodf /usr/bin/
    ~~~

5.  Restart Odoo service

    ~~~
    ~# systemctl restart odoo
    ~~~

## Apps Marketplace

In addition to the base modules, Odoo offers a number of premium third-party modules through [Odoo Apps Marketplace](https://www.odoo.com/apps/modules)