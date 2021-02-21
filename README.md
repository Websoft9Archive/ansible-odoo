# Odoo Cloud Installer

![](https://libs.websoft9.com/common/websott9-cloud-installer.png) 

## Introduction

[English](/README.md) | [简体中文](/README-zh.md)  

**Odoo Cloud Installer**, developed by [Websoft9](https://www.websoft9.com), is an automatic installation program of [Odoo Community Edition](https://nightly.odoo.com/) based on Ansible and shell. It helps user install Odoo and pre-configure required items automatically and users only need to run a command on Linux. It simplifies the complicated installation and initialization process.  

Improvements for Odoo deployment:

* Install htmltopdf and Chinese fonts which need for PDF form
* Install pgAdmin on Docker for manage database by GUI
* Install Nginx and Certbot, enable HTTPS very easy 

## System Requirement

System Requirement to install this repository are as following：

| Conditions       | Details                               | Notes                |
| ------------------- | --------------------------------| -------------------- |
| Operating System   | Ubuntu18.04, Ubuntu20.04| Optional                 |
| Public Cloud     | AWS, Azure, Alibaba Cloud, HUAWEI ClOUD, Tencent Cloud    | Optional                 |
| Private Cloud     | KVM, VMware, VirtualBox, OpenStack    | Optional                 |
| Server Configuration | vCPU no less than 2 core, Memory no less than  4 GIB, Storage no less than 40 GB, Bandwidth no less than 100M ||

To learn more information, please view [Server Requirements](https://www.odoo.com/zh_CN/forum/help-1/question/server-requirements-121217).

## Ecosystem

Core components of this repository: Odoo, Python, Nginx, PostgreSQL, pgAdmin on docker

Learn more about [Parameters](/docs/stack-components.md).

## Installation

You can install it by thi Cloud Installer solution all in one. In addition, you can deploy image published on major Cloud Platform by Websoft9.

#### All-in-one Installer

Run the automatic installation script with **root** authority to start the installation. If necessary, users need to make interactive choices, and then wait patiently until the installation is successful.

```
$ sudo su -
$ wget -N https://raw.githubusercontent.com/Websoft9/ansible-linux/main/scripts/install.sh; bash install.sh -r odoo
```

If the network is broken or blocked, SSH will be interrupted and the installation will fail. Please reinstall.

#### Image on Cloud 

Follow our [Odoo image](https://apps.websoft9.com/odoo) for installation on major Cloud Platform.

## Documentation

To get information about initial installation, default username and password, HTTPS, SMTP, Backup, Upgrade and more, please view **Odoo Administrator Guide** ([English](https://support.websoft9.com/docs/odoo) | [简体中文](https://support.websoft9.com/docs/odoo/zh))

## Changelog

Detailed changes are documented in the [CHANGELOG](/CHANGELOG.md).

## License

[LGPL-3.0](/License.md), Additional Terms: It is not allowed to publish free or paid image based on this repository in any Cloud platform's Marketplace.

Copyright (c) 2016-present, Websoft9

This program provided by Websoft9 contains a series of software with separate copyright notices and license terms. Your use of the source code for the software included is subject to the terms and conditions of its own license.

## FAQ

#### Can I run this repository on Ansible Tower? 

Yes.

#### How to install and view the latest release?

Get the Odoo version from [Odoo repository](https://nightly.odoo.com/). Odoo publish the latest version every night, Odoo version format sample: Odoo14-20210221

#### Is the default password safe?

Odoo Cloud Installer use the random password solution, every installation have different password, that mean your password is different from other users
