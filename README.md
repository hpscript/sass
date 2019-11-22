# sass環境構築
### ruby・gemインストール
$ ruby -v
$ sudo yum install rubygems
$ gem update –system 2.7.10

### sassインストール
$ gem install sass
$ sass -v

### 自動変換
$ sass –style expanded –watch scss:css

### module一覧
https://sass-lang.com/documentation/modules


# gulp.js
$ sudo npm i -g gulp<br>
$ gulp -v<br>
$ npm init<br>
$ npm install --save-dev gulp

### gulp-imagein
$ sudo npm config set strict-ssl false<br>
$ sudo npm i -D gulp-imagemin<br>
$ sudo npm config set strict-ssl true

### gulpの実行
$ gulp
