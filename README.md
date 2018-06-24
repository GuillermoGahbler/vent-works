# vent-works

### Development
  1. clone the project `git clone https://github.com/EdgarSpickerman/vent-works.git`
  2. install project dependencies `npm install`
  3. start the development environment `npm run develop` or `yarn develop`
    * this will start the development server
    * this will start the back end server
  4. In a terminal make sure to start your mongo server by typing in the following command `mongod`
  5. The developement environment is setup to proxy the backend api for information.

### Build for distribution
  1. running `npm run build` or `yarn build` will compile the src code and output the contents to `/dist`

### Production
  1. type `npm start` to start the application in production mode.
    * this will build and compile the src code
    * this will start the back end api 

### MVC Appoarch
  Our appoarch to MVC is defining a context for each `mongo collection`. There is an example of the structure below. We used `contexts/index.js` to export out all contexts to the router. We then have each contexts controller talk to the respective model. These models then talk to their respective mongo collection. The controller's job is to provide crud operations as they relate to models. We also have a ulit context for common controller functionality in an effort to maintain dry principles.

  ```
  contexts
  --> vents
      --> controller.js
      --> model.js
  --> index.js
  ```

  Our appoarch to the router is to allow the router to talk to the crud operations of context. Here is a sample of some code that demonstrates this.
  ```
    const {controller_1, controller_2,....) = require("../contexts");
    router
      .get("/vents",(req,res,next)=>{
        vent_controller.index((err,docs)=>{
          if(err) throw err;
          else res.json(docs)
        })
      })
  ```
### Webpack
  We opted to create our own webpack configurations in an effort to learn the framework/tool as well as to try to keep things lightweight. These configs can be found in `/configs`.