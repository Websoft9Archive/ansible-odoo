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
#For Ubuntu&Debian
apt update && apt upgrade -y

#For Centos&Redhat
yum update -y
```
> This deployment package is preconfigured with a scheduled task for automatic updates. If you want to remove the automatic update, please delete the corresponding Cron

## Odoo Upgrade

Odoo can be upgraded from Console, online follow the steps below to complete the upgrade:

1. Log in Odoo Console, [Enable developer mode](/solution-odoo.md#enable-developer-mode)
2. Go to **Settings** > **Updates** to start upgrade Odoo
   ![Odoo upgrade reminder](https://libs.websoft9.com/Websoft9/DocsPicture/en/odoo/odoo-upgradesui-websoft9.png)
3. When completed the upgrade, you can get the successful reminder “Well done...”
4. Click the **Update Apps list** to upgrade all Odoo's Modules if you need

More details please refer to official docs [Odoo Update](https://www.odoo.com/documentation/master/setup/update.html)