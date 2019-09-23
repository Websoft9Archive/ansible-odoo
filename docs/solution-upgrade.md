# Update & Upgrade

Updates and upgrades are one of the maintenance tasks for sytem. Programs that are not upgraded for a long time, like buildings that are not maintained for a long time, will accelerate aging and gradually lose functionality until they are unavailable.

You should know the differences between the terms **Update** and **Upgrade**([Extended reading](https://support.websoft9.com/docs/faq/tech-upgrade.html#update-vs-upgrade))
- Operating system patching is **Update**, Ubuntu16.04 to Ubuntu18.04 is **Upgrade**
- MySQL5.6.25 to MySQL5.6.30 is **Update**, MySQL5.6 to MySQL5.7 is **Upgrade**

For Odoo maintenance, focus on the following two Update & Upgrade jobs

- Sytem update(Operating System and Running Environment) 
- Odoo upgrade 

## System Update

Run an update command to complete the system update:

``` shell
#For Centos&Redhat
yum update -y

#For Ubuntu&Debian
apt update && apt upgrade -y
```
> This deployment package is preconfigured with a scheduled task for automatic updates. If you want to remove the automatic update, please delete the corresponding Cron

## Odoo Upgrade

Follow the steps below to complete the upgrade:

1. Log in Odoo, go to Admin->Setting->Updates, the system will give you a reminder if there is a new upgrade package
![Odoo updates reminder](https://libs.websoft9.com/Websoft9/DocsPicture/en/metabase/metabase-updatereminder-websoft9.png)

2. Click the **Upgrade** button, go to the [Odoo Install](https://metabase.com/start/) page

3. The deployment package we provide is in the jar package installation mode, so on the installation page we select the **Custom install** mode.
![Odoo install](https://libs.websoft9.com/Websoft9/DocsPicture/zh/metabase/metabase-updatedl-websoft9.png)

3. Download teh Odoo.jar pakage and upload to your instance's directory `/data/wwwroot/metabase`
![Odoo upload](https://libs.websoft9.com/Websoft9/DocsPicture/zh/metabase/metabase-updatereplace-websoft9.png)

4. Overwrite existing files and reload the Odoo