# PNfA (Push Notifications for All)

# Introduction

PNfA is a NodeJS application that sends push notifications through Firebase (FCM).
With PNfA you can send push notifications with a simple POST request.

Supported devices:
  - iOS
  - Android
  - Web browsers (Chrome, Firefox and Opera)

### Table of content


### Repositories

PNfA uses a bunch of NPM repos to work properly:

* [express] - Fast, unopinionated, minimalist web framework for Node.js
* [body-parser] - Node.js body parsing middleware.
* [fcm-push] - A Node.JS simple interface to Firebase Cloud Messaging (FCM) for Android and iOS
* [fcm-web-push] - Node.JS interface to Firebase Cloud Messaging for Web
* [firebase] - Mobile and web application platform with tools and infrastructure designed to help developers build high-quality apps.

### Installation

PNfA requires [Node.js](https://nodejs.org/) v4+ to run.
A package.json is included so you only need to run:

```sh
$ cd <PROJECT-DIR>
$ sudo npm install -g
```

To run the project: 
```sh
$ cd <PROJECT-DIR>
$ node app.js
```

**Note:** I recommend installing **Nodemon**. It monitors for any changes in your node.js application and automatically restart the server. 

Once installed, instead of **node app.js** run:
```sh
$ nodemon app.js
```

It will save you a lot of time in the long run, because you won't need to manually restart the server each time you make a small change in code.

I kept nodemon out of the package.json. This is optional but I highly recoment it. If you want to install it, run:

```sh
$ sudo npm install -g nodemon
```

### Test

You can use an application like Postman.
The service was build to run on port 3000. You can change this in the file config.json. 
Simply build a POST request with the following structure (this is an example):

POST /api/v1/send HTTP/1.1
Host: localhost:3000
Content-Type: application/json
Cache-Control: no-cache
Postman-Token: --------------



	{
	"deviceToken":["deviceToken"],
	
	"notification":{
		"title":"Test notification",
		"body":"This a test notification for PNfA",
		"sound":"",
		"clickAction":"https://www.youtube.com/watch?v=vCWJoGSmrM8",
		"bodyLocKey":"",
		"bodyLocArgs":[],
		"titleLocKey":"",
		"titleLocArgs":[],
		"badge":"0",
		"icon":"https://d30y9cdsu7xlg0.cloudfront.net/png/65534-200.png",
		"tag":"",
		"color":""
	},
	
	"data":{
		"dataTitle":"Hello data Title",
		"dataSubtitle":"This is the subtitle",
		"dataColor":"blue"
	    }
	}
	
If you are successful you will receive the notification on the desired device. 

**!ATTENTION!**
The **data** fields are custom. You can put any fields you want. You only need to edit/add those field in **push-sample-pushmanager -> controllers -> push.js** and then use the same name in your POST request.

### Mobile and Web app integration

You need to fill the **serviceAccountKey.json** file: 
Go to your firebase account and generate a num private key. Rename the file to serviceAccountKey.json or copy the information to the serviceAccountKey.json file already existent in the project. 


License
----

MIT


**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>

