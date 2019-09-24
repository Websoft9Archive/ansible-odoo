# Odoo Configuration

本章列出使用 Odoo 过程中最常见的一些配置

## 普通设置

Odoo 后台提供了设置界面，参考：

1. 登录 Odoo 后，打开点击左上角的设置图标，打开【Settings】项
   ![Odoo设置界面](http://libs.websoft9.com/Websoft9/DocsPicture/en/odoo/odoo-settingspanel-websoft9.png)
2. 接下来可以进行：安装apps，设置语言，增加用户，企业初始化等操作

### 设置企业 Logo
![Odoo 设置logo](http://libs.websoft9.com/Websoft9/DocsPicture/en/odoo/odoo-settingslogo-websoft9.png)

### 增加语言
1. 通过【Settings】控制台增加一个语言
  ![Odoo 增加语言](http://libs.websoft9.com/Websoft9/DocsPicture/en/odoo/odoo-settingslangs-websoft9.png)
2. 转到【Administrator】>【Prefrences】  
  ![Odoo 用户管理](http://libs.websoft9.com/Websoft9/DocsPicture/en/odoo/odoo-pref-websoft9.png)
3. 给用户设置语言
  ![Odoo 设置语言](http://libs.websoft9.com/Websoft9/DocsPicture/en/odoo/odoo-language002-websoft9.png)

## 开发者模式

Odoo 默认是管理者模式，如果需要深度设置，请先开启开发者模式

1. 登录 Odoo 后，打开点击左上角的设置图标，打开【Settings】项
2. 在 Settings 界面的右下点击【Active the developer mode】
   ![Odoo 开发者模式](https://libs.websoft9.com/Websoft9/DocsPicture/en/odoo/odoo-enabledev-websoft9.png)
3. 在开发者模式下，Settings 控制台的功能更多了

## 安装wkhtmltopdf

Odoo 镜像默认已经安装 wkhtmltopdf，如何你想重新安装它，具体操作步骤如下：

1.  卸载已经安装的 wkhtmltopdf 旧版本:

    ~~~
    ~# sudo apt-get remove wkhtmltopdf 
    ~# sudo apt-get autoremove
    ~~~

2.  去官网下载最新版本的 wkhtmltopdf 压缩包:

    ~~~
    ~# wget https://github.com/wkhtmltopdf/wkhtmltopdf/releases/download/0.12.4/wkhtmltox-0.12.4_linux-generic-amd64.tar.xz
    ~~~

3.  解压下载好的压缩包，得到一个名为：wkhtmltox 的文件夹：

    ~~~
    ~# tar –xf [filename]
    ~~~

4.  将 wkhtmltox/bin/wkhtmltomage 和 wkhtmmltox/bin/wkhtmltoodf 这两个文件复制到 /usr/bin 目录下去：

    ~~~
    ~# cp wkhtmltox/bin/wkhtmltoimage /usr/bin/
    ~# cp wkhtmmltox/bin/wkhtmltoodf /usr/bin/
    ~~~

5.  重启Odoo服务

    ~~~
    ~# systemctl restart odoo
    ~~~

## Apps市场

Odoo除了基础模块之外，通过[Odoo Apps市场](https://www.odoo.com/apps/modules)提供了大量优质的第三方模块。通过使用第三方模块，用户可以快速找到所需的功能，以免费或极小的代价满足需求，快速上线业务，这是Odoo开源生态的带给用户的巨大价值，商业ERP在这方面是无法取代的。