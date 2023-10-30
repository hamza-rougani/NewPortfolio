const express=  require("express");
const multer=  require("multer")
const path = require("path")
const bcrypt=  require("bcrypt")
const jwt = require("jsonwebtoken")
const isAthenticated = require("./Auth/auth.js")
const uploadimage = require("./uploadimage.js")
require('dotenv').config();
const app = express();
// const the cors middleware
//Middleware
app.get(express.json())
const cors = require("cors")
app.use(cors({
    origin: `${process.env.VITE_LOCAL_SERVER}`, // Replace with the actual origin of your client app
    methods: 'GET,POST,PUT,DELETE',
    // optionsSuccessStatus: 200, // Some legacy browsers (IE11) choke on a 204 response
  }));

 
//connect to database mongodb
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    const extname = path.extname(file.originalname);
    cb(null,file.fieldname+"-"+Date.now() + extname);
  },
});


const upload = multer({ limits: { fieldSize: 25 * 1024 * 1024 } }); // Set a reasonable limit

const connectDB = require('./connectMongo')
const Post=  require("./Model/Post.model.js")
const NewsPost=  require("./Model/NewsPost.model.js");
const NewsProject=  require("./Model/NewsProject.model.js");
const User=  require("./Model/Admin.model.js")
const Project=  require("./Model/Projects.model.js")
connectDB()
  app.get("/project",async(req,res)=>{
    try{
    const projects =await Project.find().sort({"_id":-1})
    res.status(200).json({data:projects})
    }
    catch(err){
      res.status(400).json({err:err})
    }
    })
  //show Project
  app.get("/show/:id",async(req,res)=>{
    const objectId  = req.params.id
    try{
    let project =await Project.findOne({_id:objectId})
    res.status(200).json({data:project})
    }
    catch(err){
      res.status(400).json({err:err})
    }
    })
  //store Project
  app.post('/create',isAthenticated,upload.none(), async (req, res) => {
      try {
  
      const Introduct = JSON.parse(req.body.Introduct)
      const Overview = JSON.parse(req.body.Overview)
      const Problem = JSON.parse(req.body.Problem)
      const Solution = JSON.parse(req.body.Solution)
      const Diagrams = JSON.parse(req.body.Diagrams)
      const Realization = JSON.parse(req.body.Realization)
            var introductImage;
            var DImage;
            var RImage;
    await  uploadimage(req.body.Image)
      .then((url)=>{
         introductImage = url
      }).catch(err=>console.log(err))
   await   uploadimage.uploadMultiImages(JSON.parse(req.body.ImagesD))
      .then((urls)=>{
        DImage = urls
      }).catch(err=>console.log(err))
   await   uploadimage.uploadMultiImages(JSON.parse(req.body.ImagesR))
      .then((urls)=>{
        RImage = urls
      }).catch(err=>console.log(err))
            const projectData = {
      
              Introduct: {
                  title: Introduct.title,
                  desc: Introduct.desc,
                  tools: Introduct.tools,
                  image:introductImage,
                },
              Overview: {
                title: Overview.title,
                desc: Overview.desc,
              },
              Problem: {
                title: Problem.title,
                desc: Problem.desc,
              },
              Solution: {
                title: Solution.title,
                desc: Solution.desc,
              },
              Diagrams: {
                title: Diagrams.title,
                desc: Diagrams.desc,
                images: DImage,
              },
              Realization: {
                title: Realization.title,
                desc: Realization.desc,
                images: RImage,
              },
              
              
            };
            
            const project = new Project(projectData);
        
            // Save the project data to the database
            await project.save();
        
            res.status(201).json({ body:project});
     
  
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error', error: error.message });
      }
    });
  
   
  //update Project
  app.put('/updateproject/:id',isAthenticated,upload.none(), async (req, res) => {
    try {
    const id = req.params.id.toString()
    const Introduct = JSON.parse(req.body.Introduct)
    const Overview = JSON.parse(req.body.Overview)
    const Problem = JSON.parse(req.body.Problem)
    const Solution = JSON.parse(req.body.Solution)
    const Diagrams = JSON.parse(req.body.Diagrams)
    const Realization = JSON.parse(req.body.Realization)
    var imagesRialization = []
    var item = "ImagesR"
    JSON.parse(req.body.R).map((path)=>{
     if(path.includes(item)){
      imagesRialization.push(path)
     }else{
      var find = req.files["ImagesR"].find(i=>i.originalname==path);
      imagesRialization.push(find.path)
     }
    })
    var imagesDiagrams = []
    var item = "ImagesD"
    JSON.parse(req.body.D).map((path)=>{
     if(path.includes(item)){
      imagesDiagrams.push(path)
     }else{
      var find = req.files["ImagesD"].find(i=>i.originalname==path);
      imagesDiagrams.push(find.path)
     }
    })
    // console.log(req.body.)
   if(req.files["Image"]){
    var  introductImage = req.files["Image"][0].path
    
   }else{
    var  introductImage = req.body.Image
   }
          const projectData = {
       
            Introduct: {
                title: Introduct.title,
                desc: Introduct.desc,
                tools: Introduct.tools,
                image:introductImage,
              },
            Overview: {
              title: Overview.title,
              desc: Overview.desc,
            },
            Problem: {
              title: Problem.title,
              desc: Problem.desc,
            },
            Solution: {
              title: Solution.title,
              desc: Solution.desc,
            },
            Diagrams: {
              title: Diagrams.title,
              desc: Diagrams.desc,
              images: imagesDiagrams,
            },
            Realization: {
              title: Realization.title,
              desc: Realization.desc,
              images: imagesRialization,
            },
            
            
          };
          
         await  Project.findByIdAndUpdate({'_id':id},projectData);
          res.status(201).json({message:"the project has been updated successfully"});
   
  
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error', error: error.message });
    }
  });
  //destroy Project
  app.delete("/project/:id",isAthenticated,async(req,res)=>{
    try{
      const id = req.params.id.toString()
       await Project.findByIdAndDelete({'_id':id})
      res.status(200).send({messsage:"project has been deleted"})
    }catch(err){
      res.status(400).json({err:err})
    }
  })
  // app.get("/test",async(req,res)=>{
  //   try{
  //     const count =await User.find().count()
  //     res.status(200).send({count:count})
  //   }catch(err){
  //     res.status(400).send(err)
  //   }
  
  
  // })
  //create post
  app.post("/createpost",isAthenticated,upload.none(),async(req,res)=>{
  uploadimage(req.body.image)
  .then((url)=>{
    const CPost = new Post({
         post:req.body.post,
         image:url,
        })
       CPost.save().then((data)=>res.status(200).json({path:data}))
       .catch(err=>res.status(400).json({err:err}))
  })
  .catch((err)=>res.status(400).json({err:err}))
 
  })
  //get posts
  app.get("/posts",async(req,res)=>{
    try{
  const posts =await Post.find().sort({"_id":-1});
  res.status(200).json({data:posts})
    }catch(err){
      res.status(400).json({err:err})
    }
  })
  //get posts
  app.get("/post/:id",async(req,res)=>{
    try{
      const id = req.params.id.toString()
  const post =await Post.find({'_id':id});
  res.status(200).json({data:post})
    }catch(err){
      res.status(400).json({err:err})
    }
  })
  //destroy post
  app.delete("/post/:id",isAthenticated,async(req,res)=>{
    try{
      const id = req.params.id.toString()
       await Post.findByIdAndDelete({'_id':id})
      res.status(200).send({messsage:"post has been deleted"})
    }catch(err){
      res.status(400).json({err:err})
    }
  })
  //update post
  app.put("/updatepost/:id",isAthenticated,upload.fields([{name:"image",maxCount:1}]),async(req,res)=>{
   try{
    const imagepath = req.files["image"][0].path
    const dataUpdate = {post:req.body.post,image:imagepath}
    const id = req.params.id.toString()
    await Post.findByIdAndUpdate({'_id':id},dataUpdate)
    res.status(200).json({message:"the post has been updated"})
   }catch(err){
    res.status(400).json({err:err})
   }
  })
  
  //create admin
  app.post('/register', upload.none(), async (req, res) => {
    try {
      const count =await User.find().count()
      if(count==0){
    const {username,password} = req.body;
  
    // Hash the user's password
    const hashedPassword = await bcrypt.hash(password.toString(), 10);
  
    const user = new User({
        username:username,
        password: hashedPassword,
        isAdmin:false,
    });
        await user.save();
        res.status(201).json({user:req.body});
      }else{
        res.status(400).send("nuh bro")
       }
    } catch (err) {
        res.status(500).send(err.message);
    }
  });
 
  app.post("/loginAdmin", upload.none(), async (req, res, next) => {
    User.findOne({ username: req.body.username })
      .then(user => {
        if (!user) {
          return res.status(401).json({ error: 'Utilisateur non trouvé !' });
        }
        
        bcrypt.compare(req.body.password.toString(), user.password)
          .then(valid => {
            if (!valid) {
              return res.status(401).json({ error: 'Mot de passe incorrect !' });
            }
            
            // Use process.env.JWT_SECRET to sign the token
            const token = jwt.sign(
              { userId: user._id },
              'RANDOM_TOKEN_SECRET', // Use the environment variable for the secret
              { expiresIn: '24h' }
            );
            
            res.status(200).json({
              userId: user._id,
              token: token,
              isAdmin: user.isAdmin,
            });
          })
          .catch(error => res.status(500).json({ error: error.message }));
      })
      .catch(error => res.status(500).json({ error: error.message }));
  });
  
  // post NewsPost
  app.post("/NewsPost",isAthenticated,upload.none(),async(req,res)=>{
    uploadimage(req.body.image)
    .then((url)=>{
        const NewsPostU =  new NewsPost({NewsPostImage:url})
         NewsPostU.save().then(()=> res.status(200).json({res:"the NewsPost created successfully"}))
         .catch(err=>res.status(404).json({err:err.message}))
    })
    .catch(err=>{
        console.log(err)
    })
    
   
  })
  // get NewsPost
  app.get("/NewsPost",async(req,res)=>{
    try{
     const data = await NewsPost.find().sort({"_id":-1})
      res.status(200).json({data:data})
    }catch(err){
      res.status(404).json({err:err.message})
    }
  })
  // show NewsPost
  app.get("/NewsPost/:id",async(req,res)=>{
    try{
     const id =req.params.id
     const data = await NewsPost.find({'_id':id})
      res.status(200).json({data:data})
    }catch(err){
      res.status(404).json({err:err.message})
    }
  })
  // delete NewsPost
  app.delete("/NewsPost/:id",async(req,res)=>{
    try{
     const id = req.params.id
    await NewsPost.findByIdAndDelete({'_id':id})
      res.status(200).json({res:"the NewsPost has been deleted"})
    }catch(err){
      res.status(404).json({err:err.message})
    }
  })
  // delete NewsPost
  app.put("/NewsPost/:id",isAthenticated,upload.none(),async(req,res)=>{
    try{
     const id = req.params.id
     const ImageUpdate = req.files["NewsPost"][0].path
    await NewsPost.findByIdAndUpdate({'_id':id},{NewsPostImage:ImageUpdate})
      res.status(200).json({res:"the NewsPost has been updated"})
    }catch(err){
      res.status(404).json({err:err.message})
    }
  })
  
  
  
  // post NewsProject
  app.post("/NewsProject",isAthenticated,upload.none(),async(req,res)=>{
    uploadimage(req.body.image)
    .then((url)=>{
      const NewsProjectU =  new NewsProject({NewsProjectImage:url})
      NewsProjectU.save().then(()=> res.status(200).json({res:"the NewsProject created successfully"}))
         .catch(err=>res.status(404).json({err:err.message}))
    })
    .catch(err=>{
        console.log(err)
    })
  })
  // show NewsProject
  app.get("/NewsProject/:id",async(req,res)=>{
    try{
     const id =req.params.id
     const data = await NewsProject.find({'_id':id})
      res.status(200).json({data:data})
    }catch(err){
      res.status(404).json({err:err.message})
    }
  })
  // get NewsProject
  app.get("/NewsProject",async(req,res)=>{
    try{
     const dataP = await NewsProject.find().sort({"_id":-1})
      res.status(200).json({data:dataP})
    }catch(err){
      res.status(404).json({err:err.message})
    }
  })
  // delete NewsPost
  app.delete("/NewsProject/:id",async(req,res)=>{
    try{
     const id = req.params.id
    await NewsProject.findByIdAndDelete({'_id':id})
      res.status(200).json({res:"the NewsProject has been deleted"})
    }catch(err){
      res.status(404).json({err:err.message})
    }
  })
  // delete NewsPost
  app.put("/NewsProject/:id",isAthenticated,upload.fields([{name:"NewsProject"}]),async(req,res)=>{
    try{
     const id = req.params.id
     const ImageUpdateP = req.files["NewsProject"][0].path
    await NewsProject.findByIdAndUpdate({'_id':id},{NewsProjectImage:ImageUpdateP})
      res.status(200).json({res:"the NewsPost has been updated"})
    }catch(err){
      res.status(404).json({err:err.message})
    }
  })
  

  app.use('/uploads', express.static('uploads'));
  


app.listen(process.env.VITE_BACK_PORT_URL,(req,res)=>{
    console.log("the server is runing on port 3000");
})

