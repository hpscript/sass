# sass & gulp 環境構築
ESlint, sass-lint, prettierを入れています
### ruby・gemインストール
$ ruby -v<br>
$ sudo yum install rubygems<br>
$ gem update –system 2.7.10

### gulp.js
$ sudo npm i -g gulp<br>
$ gulp -v<br>
$ mkdir front<br>
$ cd front<br>
$ npm init<br>
$ npm install --save-dev gulp

### gulp-imagein
$ sudo npm config set strict-ssl false<br>
$ sudo npm i -D gulp-imagemin<br>
$ sudo npm config set strict-ssl true

### sass, gulp-plumber, webserber, lint, prettier
$ npm i -D gulp-plumber gulp-sass gulp-sass-lint gulp-eslint<br>
$ npm i -D gulp-webserver<br>
$ sudo npm i -D prettier gulp-prettier-plugin

### gulpfile.jsの編集
### srcで、*.html, *.js, *.sass, *.png|.jpg|.gif　の編集

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
