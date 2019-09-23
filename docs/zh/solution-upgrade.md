# 更新升级

网站技术日新月异，**更新升级**是维护工作之一，长时间不升级的程序，就如长时间不维护的建筑物一样，会加速老化、功能逐渐缺失直至无法使用。  

这里注意更新与升级这两词的差异（[延伸阅读](https://support.websoft9.com/docs/faq/zh/tech-upgrade.html#更新-vs-升级)），例如：
- 操作系统打个补丁常称之为**更新**，Ubuntu16.04 变更为 Ubuntu18.04，称之为**升级**
- MySQL5.6.25-->MySQL5.6.30 常称之为**更新**，MySQL5.6->MySQL5.7 称之为**升级**

Odoo 完整的更新升级包括：系统级更新（操作系统和运行环境）和 Odoo 程序升级两种类型

## 系统级更新

运行一条更新命令，即可完成系统级更新：

``` shell
#For Centos&Redhat
yum update -y

#For Ubuntu&Debian
apt update && apt upgrade -y
```
> 本部署包已预配置一个用于自动更新的计划任务。如果希望去掉自动更新，请删除对应的Cron


## Odoo升级

Odoo有升级包的时候，后台会及时给出提示。参考下面的步骤完成升级：

1. Odoo后台->设置->升级，如果有新的升级包，系统会给与提示
![Odoo升级提示](https://libs.websoft9.com/Websoft9/DocsPicture/zh/metabase/metabase-updatereminder-websoft9.png)

2. 点击“更新”按钮后，系统会跳转到Odoo官方的安装页面。
3. 我们提供的部署包采用的是jar包安装模式，因此在安装页面我们选择“Custom install”模式，
![Odoo升级提示](https://libs.websoft9.com/Websoft9/DocsPicture/zh/metabase/metabase-updatedl-websoft9.png)

3. 下载Odoo.jar包后，上传到服务器 `/data/wwwroot/metabase`, 覆盖已有的同名文件
![Odoo升级提示](https://libs.websoft9.com/Websoft9/DocsPicture/zh/metabase/metabase-updatereplace-websoft9.png)

4. 重新加载Odoo，升级成功