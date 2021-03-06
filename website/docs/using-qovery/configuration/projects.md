---
last_modified_on: "2020-10-14"
title: "Projects"
description: "Learn how to configure Projects on Qovery"
---
import Jump from '@site/src/components/Jump';

**Projects** allow you to group **a set of applications and their dependencies** (databases & other services).
To learn more about Projects, read a high-level description of what Project concept means at Qovery.

<Jump to="/docs/main-concepts/project">Project</Jump>

<!--
     THIS FILE IS AUTOGENERATED!

     To make changes please edit the template located at:

     website/docs/using-qovery/configuration/projects.md.erb
-->

## Creating Projects

Creating a new project is as simple as choosing its name in your application configs(`.qovery.yml`):

```yml {3}
application:
  name: myApp
  project: myProject
```

Above snippet creates a project named `myProject` and adds `myApp` as one of its applications.

## Renaming Projects

To give to your project a new name, just type `qovery project rename $NEW_NAME`, where `$NEW_NAME` is a placeholder for the new name you want to use.
After it's done, you need to update your `.qovery.yml` configuration file to match your new project name.



