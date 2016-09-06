# MEAN Stack and MongoDB Development Techniques


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





<br/><br/>

___

**Marley**

<a href="https://jsdev.org">jsdev.org</a>

email:  
![Marley](http://img.fotografii.org/a3333333mail.gif "Marley")
