# mytest

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
## git step
``` bash
# git init
# git add
# git remote 
# git push -u origin master

git config --global user.name "fdArcher"
git config --global user.name "***@***.com"

cd C:/users/administrator/.ssh
open git bash here
$ ssh-keygen -t rsa -C "***@***.com"
copy  .pub  to your github settings/sshkey

cd yourProgram/root
open git bash here
$ ssh-keyscan -H github.com >> ~/.ssh/known_hosts
```
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
