const express = require("express")
const path = require("path")
const {v4: uuidv4} = require("uuid")
// uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
const methodOverrride = require("method-override")

const app = express()

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

let port = 3000

app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, "public")))

app.use(methodOverrride('_method'))

let posts = [
    {
        id: uuidv4(),
        username: "VIIT",
        content: "I love coding"
    },
    {
        id: uuidv4(),
        username: "Microsoft",
        content: "Hard work is important to achive success"
    },
    {
        id: uuidv4(),
        username: "rahulkumar",
        content: "I got selected for my 1st internship"
    }
]

app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`);
})

app.get("/posts", (req, res)=>{
    res.render("index.ejs", {posts})
})

app.get("/posts/new", (req, res)=>{
    res.render("new.ejs")
})

app.post("/posts", (req, res)=>{
    console.log(req.body);
    let {username, content} = req.body
    let id = uuidv4()
    posts.push({id, username, content})
    
    res.redirect("/posts")
})

app.get("/posts/:id", (req, res)=>{
    let {id} = req.params
    let post = posts.find((p) => id===p.id )
    console.log(post);
    res.render("show.ejs", {post})
    
})

app.patch("/posts/:id", (req, res)=>{
    let {id} = req.params
    console.log(id);

    let newContent = req.body.content
    console.log(newContent);

    let post = posts.find((p)=>id===p.id)
    post.content = newContent
    console.log(post);

    res.redirect("/posts")
        
    // console.log('patch request working');
    // res.send("patch request working");
    
})

app.get("/posts/:id/edit", (req, res)=>{
    let { id } = req.params
    let post = posts.find((p) => id === p.id)
    res.render("edit.ejs", {post})
})

app.delete("/posts/:id", (req, res)=>{
    let {id} = req.params
    posts = posts.filter((p) => id !== p.id)
    // res.send("delete successful")

    res.redirect("/posts")
})