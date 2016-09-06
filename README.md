# [Lynda.com / Alexander Zanfir] MEAN Stack and MongoDB Development Techniques [2016, ENG]


I'm working on Ubuntu in docker container with debian jessie:

    $ lsb_release -a
    Description:	Ubuntu 14.04.5 LTS
    Codename:	trusty

<br/>

    $ docker -v
    Docker version 1.9.1, build a34a1d5


<a href="http://jsdev.org/env/docker/run-container/">How to run docker container for start development</a>
(If link will not work give me to know about it)



<br/>

### 1 Setup


<br/>

    http://yeoman.io/generators/
    https://github.com/swiip/generator-gulp-angular#readme


    # npm install -g yo gulp bower
    # npm install -g generator-gulp-angular


<br/>

    $ cd /projects/
    $ mkdir front-end
    $ cd front-end
    $ yo gulp-angular my-message-front

<br/>

    Which version of Angular do you want? 1.5.x (stable)
    What Angular modules would you like to have? all
    Do you need jQuery or perhaps Zepto? None (Angular will use its own jqLite)
    Would you like to use a REST resource library? None, $http is enough!
    Would you like to use a router? UI Router, flexible routing with nested views
    Which UI framework do you want? Bootstrap, the most popular HTML, CSS, and JS framework
    How do you want to implement your Bootstrap components? Angular UI Bootstrap, Bootstrap components written in pure AngularJS by the AngularUI Team
    Which CSS preprocessor do you want? Sass (Node), Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.
    Which JS preprocessor do you want? ES6 (Babel formerly 6to5), ECMAScript 6 compiled with Babel which requires no runtime.
    Which HTML template engine would you want? None, I like to code in standard HTML.

<br/>

    $ gulp
    $ gulp serve

http://localhost:3000/


![Mean](/img/01-setup.png?raw=true)


<br/>

### 2 Message Posting

1 - Make an Angular post form


![Mean](/img/02-01.png?raw=true)


<br/>

2 - Create a post endpoint with Express


    $ cd /projects/
    $ mkdir back-end
    $ cd back-end
    $ npm init

<br/>

    name: (back-end) my-message-backend

<br/>

    $ npm install --save express
    $ npm install --save body-parser

    $ node server.js

    PostMan:  
    https://www.getpostman.com/

    POST: http://localhost:9000/api/message

    Body --> raw --> JSON (application/json)

    {
    "test": "works"
    }

    SEND

<br/>

    3 - Send a post from Angular to the endpoint

<br/>

    4 - Save to Mongo from the endpoint

    $ npm install mongodb

    // start mongodb server
    $ mongod

    // connect to mongodb server
    $ mongo
    > db.messages.find();


<br/>

### 3 Display Messages

1 - Create a message list query with Mongo


    $ npm install --save mongoose


<br/>

2 - Create a message list endpoint with Express

http://localhost:9000/api/message

<br/>

3 - Create a message list view in Angular


![Mean](/img/03-01.png?raw=true)



<br/>

### 4 Registration

1 - Create a registration view in Angular


![Mean](/img/04-01.png?raw=true)


<br/>

2 - Create a password match Angular directive

![Mean](/img/04-02.png?raw=true)

<br/>

3 - Set up Satellizer for registration

https://github.com/sahat/satellizer


    $ pwd
    /projects/front-end

    $ bower install --save satellizer


![Mean](/img/04-03.png?raw=true)


<br/>

4 - Create a registration endpoint with Express

<br/>

5 - Save a user with Mongo


    > db.users.find()

<br/>

    $ npm install --save jwt-simple
    $ npm install --save moment


![Mean](/img/04-04.png?raw=true)


<br/>

6 - Associate a user with post when making a post


    > db.messages.find();


<br/>

### 5 Logging In

1 - Set up Satellizer for login

<br/>

2 - Create a login endpoint with Express

![Mean](/img/05-01.png?raw=true)


<br/>

3 - Show logout in our navbar

![Mean](/img/05-02.png?raw=true)

![Mean](/img/05-03.png?raw=true)

![Mean](/img/05-04.png?raw=true)


___


    $ npm list -g --depth=0
    /usr/local/lib
    ├── bower@1.7.9
    ├── generator-gulp-angular@1.1.1
    ├── gulp@3.9.1
    ├── npm@2.15.9
    └── yo@1.8.4

<br/>

    $ npm list --depth=0
    myMessageFront@0.0.0 /projects/front-end
    ├── babel-core@6.7.7
    ├── babel-loader@6.2.5
    ├── babel-preset-es2015@6.6.0
    ├── browser-sync@2.9.12
    ├── browser-sync-spa@1.0.3
    ├── chalk@1.1.3
    ├── del@2.0.2
    ├── eslint@1.10.3
    ├── eslint-loader@1.1.1
    ├── eslint-plugin-angular@0.12.0
    ├── estraverse@4.1.1
    ├── gulp@3.9.1
    ├── gulp-angular-templatecache@1.8.1
    ├── gulp-autoprefixer@3.0.2
    ├── gulp-cssnano@2.1.2
    ├── gulp-eslint@1.0.0
    ├── gulp-filter@3.0.1
    ├── gulp-flatten@0.2.0
    ├── gulp-htmlmin@1.3.0
    ├── gulp-inject@3.0.0
    ├── gulp-load-plugins@0.10.0
    ├── gulp-protractor@2.1.0
    ├── gulp-rename@1.2.2
    ├── gulp-replace@0.5.4
    ├── gulp-rev@6.0.1
    ├── gulp-rev-replace@0.4.3
    ├── gulp-sass@2.0.4
    ├── gulp-size@2.0.0
    ├── gulp-sourcemaps@1.6.0
    ├── gulp-uglify@1.4.2
    ├── gulp-useref@3.0.8
    ├── gulp-util@3.0.7
    ├── http-proxy-middleware@0.9.1
    ├── jasmine-core@2.4.1
    ├── karma@0.13.22
    ├── karma-coverage@0.5.5
    ├── karma-jasmine@0.3.8
    ├── karma-ng-html2js-preprocessor@0.2.2
    ├── karma-phantomjs-launcher@0.2.3
    ├── karma-phantomjs-shim@1.2.0
    ├── lodash@3.10.1
    ├── main-bower-files@2.9.0
    ├── ng-annotate-loader@0.0.10
    ├── phantomjs@1.9.20
    ├── uglify-save-license@0.4.1
    ├── webpack@1.13.2
    ├── webpack-stream@2.1.1
    └── wiredep@2.2.2

<br/>

    $ npm list --depth=0
    my-message-backend@1.0.0 /projects/back-end
    ├── body-parser@1.15.2
    ├── express@4.14.0
    ├── jwt-simple@0.5.0
    ├── moment@2.14.1
    ├── mongodb@2.2.9
    └── mongoose@4.6.0



<br/><br/>

___

**Marley**

<a href="https://jsdev.org">jsdev.org</a>

email:  
![Marley](http://img.fotografii.org/a3333333mail.gif "Marley")
