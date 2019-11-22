# sass & gulp 環境構築
### ruby・gemインストール
$ ruby -v<br>
$ sudo yum install rubygems<br>
$ gem update –system 2.7.10

### gulp.js
$ sudo npm i -g gulp<br>
$ gulp -v<br>
$ npm init<br>
$ npm install --save-dev gulp

### gulp-imagein
$ sudo npm config set strict-ssl false<br>
$ sudo npm i -D gulp-imagemin<br>
$ sudo npm config set strict-ssl true

### gulp-plumber, webserber
$ npm i -D gulp-plumber<br>
$ npm i -D gulp-sass<br>
$ npm i -D gulp-webserver

### gulpの実行
$ gulp


# sassのみの場合
### sassインストール
$ gem install sass<br>
$ sass -v

### 自動変換
$ sass –style expanded –watch scss:css

### module一覧
https://sass-lang.com/documentation/modules

# sass-lint, es-lint
# インストール
$ npm i -D gulp-sass-lint<br>
$ npm i -D gulp-eslint<br>
$ npm i -D prettier gulp-prettier-plugin
