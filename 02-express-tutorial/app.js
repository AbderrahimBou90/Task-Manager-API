// ***********************    Http basics   *************************

// const http = require('http')

// const server = http.createServer((req,res)=>{
 //   console.log('user hit the server')
 //   // when we create a server and we get req the browser stay loading because he does'nt have response and he is confusing what is the response for that we must to send back some info to the browser as response for that res.end() Must be called on each response.
 //   res.end('home page')
 // })
 
 // server.listen(5000)
 
 // ***********************    Http - Headers   *************************
 
 // providing more info to the browser of what we're actually sending back
 // res.writeHead(status code, headers) we providing headers so we providing metadata about our response we say to browser hey listen we sending back html or css or image so browser knows how to render this content 
 
 // const http = require('http')
 
 // const server = http.createServer((req,res)=>{
 //  // the content-type matters if we change html to plain does'nt rend html 
 //  // and very important to use correct status code 
 //  res.writeHead(200,{'content-type':'text/html'})
 // body 
 //  res.write('<h1>home page</h1>')
 //  res.end()
 // })
 
 // server.listen(5000)
 
 
 // ***********************  Http - Request Object  *********************
 
 
 // const http = require("http");
 
 // const server = http.createServer((req, res) => {
 //  // console.log(req.method)
 //  const url = req.url
 //  console.log(url)
 //  // home page 
 //  if(url === '/'){
 //   res.writeHead(200, { "content-type": "text/html" });
 //   res.write("<h1>home page</h1>");
 //   res.end();
 //  } 
 //  // about page 
 //  else if (url === '/about'){
 //   res.writeHead(200, { "content-type": "text/html" });
 //   res.write("<h1>about page</h1>");
 //   res.end();
 //  } 
 //  // 404
 //  else {
 //   res.writeHead(404, { "content-type": "text/html" });
 //   res.write("<h1>page not found</h1>");
 //   res.end();
 //  }
 // });
 
 // server.listen(5000);
 

 // ***********************  Http - Html File  *********************

 // const http = require("http");
 // const {readFileSync} = require('fs')

 // // get all files 
 // const homePage = readFileSync('./index.html')

 // const server = http.createServer((req, res) => {
 //   // console.log(req.method)
 //   const url = req.url;
 //   console.log(url);
 //   // home page
 //   if (url === "/") {
 //     res.writeHead(200, { "content-type": "text/html" });
 //     // we'll be passing in the contents of the file not the file its self 
 //     res.write(homePage);
 //     res.end();
 //   }
 //   // about page
 //   else if (url === "/about") {
 //     res.writeHead(200, { "content-type": "text/html" });
 //     res.write("<h1>about page</h1>");
 //     res.end();
 //   }
 //   // 404
 //   else {
 //     res.writeHead(404, { "content-type": "text/html" });
 //     res.write("<h1>page not found</h1>");
 //     res.end();
 //   }
 // });

 // server.listen(5000);

// ***********************  Http - App Example  *********************

// const http = require("http");
//  const {readFileSync} = require('fs')

//  // get all files 
//  const homePage = readFileSync('./navbar-app/index.html')
//  const homeStyles = readFileSync('./navbar-app/styles.css')
//  const homeLogo = readFileSync('./navbar-app/logo.svg')
//  const homeLogic = readFileSync('./navbar-app/browser-app.js')

//  const server = http.createServer((req, res) => {
//    // console.log(req.method)
//    const url = req.url;
//    console.log(url);
//    // home page
//    if (url === "/") {
//      res.writeHead(200, { "content-type": "text/html" });
//      // we'll be passing in the contents of the file not the file its self 
//      res.write(homePage);
//      res.end();
//    }
//    // about page
//    else if (url === "/about") {
//      res.writeHead(200, { "content-type": "text/html" });
//      res.write("<h1>about page</h1>");
//      res.end();
//    }
//    // styles 
//    else if (url === "/styles.css") {
//      res.writeHead(200, { "content-type": "text/css" });
//      res.write(homeStyles);
//      res.end();
//    }
//    // logo/image 
//    else if (url === "/logo.svg") {
//      res.writeHead(200, { "content-type": "image/svg+xml" });
//      res.write(homeLogo);
//      res.end();
//    }
//    // logic
//    else if (url === "/browser-app.js") {
//      res.writeHead(200, { "content-type": "text/javascript" });
//      res.write(homeLogic);
//      res.end();
//    }
//    // 404
//    else {
//      res.writeHead(404, { "content-type": "text/html" });
//      res.write("<h1>page not found</h1>");
//      res.end();
//    }
//  });

// server listen or runing in port 5000
//  server.listen(5000);

// *********************  Express basics  ***************************
// and you can also see
// const app = require('express')()

// const express = require('express')
// // we're getting function back from express and we just invoke it 
// const app = express()
// // console.log(app)

// we need to provide two things path actually what user try to access and callback function 

// app.get('/',(req,res)=>{
//  console.log('user hit the resource')
//  res.status(200).send('Home Page')
// })

// app.get('/about',(req,res)=>{
//  res.status(200).send('About Page')
// })

// // all() method cover  all http methods: get,post,put,delete 
// // whatever the user want the all() method response all methods 
// app.all('*',(req,res)=>{
//  res.status(404).send('<h1>resource not found</h1>')
// })

// app.listen(5000,()=>{
//  console.log('srever is listening on port 5000')
// })

// the method that we use most:
// app.get()
// app.post()
// app.put()
// app.delete()
// app.all()  - just works with all of them 
// app.use()  -  is responsible for midlleware 
// app.listen()

// ********************* Express - App Example ********************

// const express = require('express')
// const path = require('path')

// const app = express()

// // setup static and middleware 
// // static assets are just files that server doesn't have to change 
// app.use(express.static('./public'))


// app.get('/',(req,res)=>{
// res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
// })

// app.all('*',(req,res)=>{
//  res.status(404).send('resource not found')
// })

// app.listen(5000,()=>{
//  console.log('server is listening or runing on port 5000....')
// })

// ****************** Express - All Static ********************

// you can also add index.html on static folder 

// const express = require('express')
// const path = require('path')
// const app = express()

// // midllware 
// app.use(express.static('./public'))

// // app.get('/',(req,res)=>{
// // res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
// // adding to static assets 
// // SSR
// // })

// app.all('*',(req,res)=>{
//  res.status(404).send('recourse not found')
// })

// app.listen(5000,()=>{
//  console.log('server is listening or runing on port 5000')
// })


// ***********************  Express - API VS SSR  ***********************

// if you understand API approach you automaticlly understand SSR 

// API - JSON          SSR  -  TEMPLATE
// send data           send template 
// res.json()          res.render()

// ***********************   JSON - Basics   *************************


// const express = require('express')
// const app = express()
// const {products} = require('./data')

// app.get('/',(req,res)=>{
//  res.json(products)
// })

// app.listen(5000,()=>{
//  console.log('server is listening or runing on port 5000...')
// })


// *******************  Params, Query String -Setup  *****************

// const express = require('express')
// const app = express()
// const {products} = require('./data')

// app.get('/',(req,res)=>{
//  res.send('<h1>Home Page</h1><a href="/api/products">products</a>')
// })

// app.get('/api/products',(req,res)=>{
//  // we send name,id,image as json but not desc and price 
//  // we can send what we would want 
//  const newProducts = products.map((item)=>{
//   console.log(item)
//   const {id,name,image} = item 
//   return {id,name,image}
//  })
//  res.json(newProducts)
// })



// app.listen(5000,()=>{
//  console.log('server is listening or runing on port 5000...')
// })

// ****************  Route Params  **********************


// const express = require('express')
// const app = express()

// const {products} = require('./data')

// app.get('/',(req,res)=>{
//  res.send('<h1>Home Page</h1><a href="/api/products">products</a>')
// })

// app.get('/api/products',(req,res)=>{
//  // we send name,id,image as json but not desc and price 
//  // we can send what we would want 
//  const newProducts = products.map((item)=>{
//   console.log(item)
//   const {id,name,image} = item 
//   return {id,name,image}
//  })
//  res.json(newProducts)
// })

// // app.get("/api/products/1", (req, res) => {
// //   const singleProduct = products.find((item) => {
// //     return item.id === 1
// //   });
// //   res.json(singleProduct);
// // });

// app.get("/api/products/:productID", (req, res) => {
//  console.log(req)
//  console.log(req.params)
//  const {productID} = req.params
//   const singleProduct = products.find((item) => {
//     return item.id === Number(productID)
//   });
//   if(!singleProduct){
//    res.status(404).send('product does not exist')
//   }

//   return res.json(singleProduct);
// });

// // –––––––––––––––––  Params - Extra Info –––––––––––––––––––––––––––
// // route parameters can get way complex, you can get more than one params

// app.get("/api/products/:productID/reviews/:reviewsID",(req,res)=>{
//  console.log(req.params)
//  res.send('hello world')
// });

// app.listen(5000,()=>{
//  console.log('server is listening or runing on port 5000... ')
// })


// *******************  Query String or url parameters *********************

// const express = require('express')
// const app = express()

// const {products} = require('./data')

// app.get('/api/v1/query',(req,res)=>{
//  console.log(req.query)
//  const {search,limit} = req.query
//  let sortedProducts = [...products]

//  if(search){
//   sortedProducts = sortedProducts.filter((product)=>{
//    return product.name.startsWith(search)
//   })
//  }
//  if(limit){
//   sortedProducts = sortedProducts.slice(0,Number(limit))
//  }
//  if(sortedProducts.length < 1){
//   // res.status(200).send('<h1>no products matched your search</h1>')
//   // most common approach is send json
//   // ––––––––––––––– Additional Params and Query String Info ––––––––––––
//   // and always always always make sur to type return otherwise you make  express confusing about response, you can not send two responses from one request
//  return res.status(200).json({success:true,data:[]})
// }
// return res.status(200).json(sortedProducts)

//  // res.send('hello world')
// })



// app.listen(5000,()=>{
//  console.log('server is listening or runing on port 5000....')
// })

// **********************  Middleware Setup (so important) ******************


// middlewars are functions excute during the request to the server each middleware function has access to request and response objects, and when comes to functionality sky the limit.
// middleware is leterally everywhere in express. 
// if you strugle a little bit don't panic the more example you'll do the better you will understand it.


// const express = require('express')
// const app = express()


// // req => middleware => res 
// const logger = (req,res,next) =>{
//  const method = req.method;
//  const url = req.url;
//  const time = new Date().getFullYear();
//  console.log(method, url, time);
//  // when you work with middleware you must must must must pass it on to a next middleware unless you terminate your cycle by sending back the response res.send('Home page ')
//  next()
// }


// app.get('/',logger,(req,res)=>{
//  // middleware hlep us not repeat code in each route by using function and reference it app methods 
//  // const method = req.method;
//  // const url = req.url;
//  // const time = new Date().getFullYear();
//  // console.log(method, url, time);
//  res.send('Home')
// })

// app.get('/about',logger,(req,res)=>{
//  res.send('About ')
// })




// app.listen(5000,()=>{
//  console.log('server is listening or runing on port 5000...')
// })

// **********************  App.use()  **************************

// there is two issues :
// app.js is getting somewhat busy, it is gonna be nicer if we have this logger function in a separate  file. (logger.js)
// we use app.use() method to add middleware function referance to all routes automaticlly 

// const express = require('express')
// const app = express()

// const logger = require('./logger')

// app.use() invok middleware (logger) for any route 
// keep in mind order matter you have middelware functions first and routes second.
// when you apply path in use('/api') method it's gonna apply to any route after this api (means start with api) 
// app.use('/api',logger)

// app.get('/',(req,res)=>{
//  res.send('Home page')
// })
// app.get('/about',(req,res)=>{
//  res.send('About page')
// })
// app.get('/api/products',(req,res)=>{
//  res.send('Product page')
// })
// app.get('/api/items',logger,(req,res)=>{
//  res.send('Items page')
// })



// app.listen(5000,()=>{
//  console.log('server listening or runing on port 5000...')
// })

// *****************  Multiple middleware functions ****************

// const express = require('express')
// const app = express()

// const logger = require('./logger')
// const authorize = require('./authorize')

// // the way to execute multiple middleware functions in app.use() we simply place them in the array 
// // the order matter in the array 
// app.use([logger,authorize])

// app.get('/',(req,res)=>{
//  res.send('Home page')
// })
// app.get('/about',(req,res)=>{
//  res.send('About page')
// })
// app.get('/api/products',(req,res)=>{
//  res.send('Products page')
// })
// app.get('/api/items',(req,res)=>{
//  res.send('Items page')
// })


// app.listen(5000,()=>{
//  console.log('server listening or runing on port 5000...')
// })

// *******************  Additional Middleware Info ***********************

// const express = require("express");
// const app = express();
// const morgan = require('morgan')
// const logger = require("./logger");
// const authorize = require("./authorize");

// // 1. use vs route
// // 2. options - our own / express / third party 

// // app.use([logger, authorize]);
// // 1. you can pass two middleware in single route by adding array of middlewar functions to that specific route.
//  // 2. the type of options for middleware:
//  // - you can setup our own middleware.
//  // - express - express provides quite a few middleware methods for example:
//  // app.use(express.static('./public'))
//  // - third party middleware is npm for example : morgan npm 

//  app.use(morgan('tiny'))


// app.get("/", (req, res) => {
//   res.send("Home page");
// });
// app.get("/about", (req, res) => {
//   res.send("About page");
// });
// app.get("/api/products", (req, res) => {
//   // console.log(req.user)
//   res.send("Products page");
// });
// app.get("/api/items", [logger, authorize], (req, res) => {
//   res.send("Items page");
// });

// app.listen(5000, () => {
//   console.log("server listening or runing on port 5000...");
// });

// ****************  Methods - GET  *************************

// const express = require('express')
// const app = express()

// let {people} = require('./data')


// app.get('/api/people',(req,res)=>{
//  res.status(200).json({success:true,data:people})
// })



// app.listen(5000,()=>{
//  console.log('server listening or runing on port 5000...')
// })

// ******************  Methods - Post (Form Example) ***********************

// the request comming in but:
// first not handling that
// second don't have a middlewar that add data that we type (insert) in form to the request 

//•••••••••••••••••••••  important notes ••••••••••••••••••••••••••••••••••

// when user send a post request in form input he enter his info and click submit, and form submit by default to the server in frontend we prevent that by using e.preventDefault but in server we provide path in action attribut and type of method in this case POST like this:  
// <form action="/login" method="POST">
      //   <h3>Traditional Form</h3>
      //   <div class="form-row">
      //     <label for="name"> enter name </label>
      //     <input type="text" name="name" id="name" autocomplete="false" />
      //   </div>
      //   <button type="submit" class="block">submit</button>
      // </form>
// and in chrom devtool in status code in headers we see Request Method: POST and in payload in form data we get name: mohammed
// when we get data by the middleware app.use(express.urlencoded({extended:false})) to the request, we get key value pairs, the key is the value of name attribute in element input and the value is what we type in the form, and we get this data by req.body 

// •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
// const express = require('express')
// const app = express()
// const {people} = require('./data')

// // static assets 
// app.use(express.static('./methods-public'))

// // second in order to access this data in request we use built-in middleware
// app.use(express.urlencoded({extended:false}))

// // first
// app.post('/login',(req,res)=>{
//  console.log(req.body)
//  const {name} = req.body
//  if(name){
//   return res.status(200).send(`welcome mr ${name}`)
//  }else{
//   return res.status(401).send('please provide credentials')
//  }
//  // res.send('POST')
// })


// app.get('/api/people',(req,res)=>{
// res.status(200).json({success:true,data:people})
// })


// app.listen(5000,()=>{
//  console.log('server listening or runing on prot 5000...')
// })

// ********************* Methods - Post (Javascript Example) ***************

// const express = require("express");
// const app = express();
// const { people } = require("./data");

// // static assets
// app.use(express.static("./methods-public"));

// // in order to access this data in request we use built-in middleware
// // we're handling form submitoins data 
// app.use(express.urlencoded({ extended: false }));

// // in order to access this json data in request we use built-in middleware
// // we're handling incomming json data 
// app.use(express.json())

// // we response for geting data and we know how to send back json data 
// app.get("/api/people", (req, res) => {
//   res.status(200).json({ success: true, data: people });
// });

// // we posting data
// app.post('/api/people',(req,res)=>{
//  const {name} = req.body
//  if(!name){
//   return res.status(400).json({success:false,msg:'please provide name value'})
//  }
//  res.status(201).json({success:true,person:name})
// })


// // for testing postman purpose 
// app.post('/api/postman/people',(req,res)=>{
//  const {name} = req.body 
//  if (!name) {
//    return res
//      .status(400)
//      .json({ success: false, msg: "please provide name value" });
//  }
//   res.status(201).json({ success: true, person: [...people,{name,id:45}] });

// })

// // *********************** Methods - put **************************

// app.put('/api/people/:id',(req,res)=>{
//  const {id} = req.params
//  const {name} = req.body
//  console.log(id,name)

//  const person = people.find(person=>person.id === Number(id))
//  if (!person) {
//    return res
//      .status(404)
//      .json({ success: false, msg: `no person with id ${id}` });
//  }
//  const newPerson = people.map((person)=>{
//   if(person.id === Number(id)){
//    person.name = name 
//   }
//   return person 
//  })
//  res.status(200).json({success:true, person:newPerson})
// })

// // ***********************   Methods - delete   **********************

// app.delete('/api/people/:id',(req,res)=>{
//  const {id} = req.params

//  console.log(id)
//  const person = people.find(person => person.id === Number(id))
//  if(!person){
//   return res.status(404).json({success:false,data:`no person with id ${id}`})
//  }
//  const newArrPeoples = people.filter(person => person.id !== Number(id))
//  res.status(200).json({success:true,data:newArrPeoples})
//  // res.status(200).send('data deleted')
// })



// app.listen(5000, () => {
//   console.log("server listening or runing on prot 5000...");
// });


// ******** Express Router - Setup (code structur or desgine pattren) ****

// we group all routes in seprate folder (routes) and the routes began with same name of route we added in seprate file

const express = require("express");
const app = express();

const peopleRouter = require('./routes/people')
const authRouter = require('./routes/auth')

// static assets
app.use(express.static("./methods-public"));

// in order to access this data in request we use built-in middleware
// we're handling form submitoins data 
app.use(express.urlencoded({ extended: false }));

// in order to access this json data in request we use built-in middleware
// we're handling incomming json data 
app.use(express.json())




app.use('/api/people',peopleRouter)

app.use('/login',authRouter)







app.listen(5000, () => {
  console.log("server listening or runing on prot 5000...");
});








