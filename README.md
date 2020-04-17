# gatsby-action-sculpting

A minimalist action for
[gatsby-theme-sculpting](https://github.com/suziwen/gatsby-theme-sculpting).


![screenshot](https://github.com/suziwen/gatsby-theme-sculpting/blob/master/screenshot.png)


## Usage

1. fork this repo
2. goto `https://github.com/{yourname}/gatsby-action-sculpting/actions` , and enable `action` function
3. goto https://github.com/settings/tokens/new,  create a GitHub Personal Access Token with the `repo` scope
4. goto `https://github.com/{yourname}/gatsby-action-sculpting/settings/secrets`, add a new secret , which name is  `ACCESS_TOKEN` and value is the prev step generated token
5. upload [xsj'zip](http://markdown.xiaoshujiang.com) files at `posts` fold
5. use [story-writer](http://markdown.xiaoshujiang.com) export zip function, export your files to zip format
6. goto `https://github.com/{yourname}/gatsby-action-sculpting/tree/master/posts`, click `Upload Files` button , upload the prev step zip files
7. wait a moment, and visit `http://{yourname}.github.io/gatsby-action-sculpting`


## 使用

1. 克隆本仓库
2. 访问 `https://github.com/{yourname}/gatsby-action-sculpting/actions`, 激活 `action` 功能
3. 到 https://github.com/settings/tokens/new, 创建一个 GitHub Personal Access Token, token 范围选择 `repo`
4. 到 `https://github.com/{yourname}/gatsby-action-sculpting/settings/secrets` 页面, 添加一个 secret, 名称为
   `ACCESS_TOKEN` , 值为上一个步骤生成的 token
5. 使用[小书匠编辑器](http://markdown.xiaoshujiang.com)撰写文章,并导出为 zip 文件
6. 访问 `https://github.com/{yourname}/gatsby-action-sculpting/tree/master/posts`, 点击 `Upload Files` , 将上一步骤导出的 zip 文件上传到这里
7. 等 github action 自动编译完成后,就可以访问页面 `http://{yourname}.github.io/gatsby-action-sculpting`

注:

需要将 `{yourname}` 替换成你自己的 github 帐号名称
