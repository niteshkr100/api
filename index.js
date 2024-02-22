import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app  = express();
const port =  3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", async(req, res)=>{
    try{
    const response = await axios.get("https://v2.jokeapi.dev/joke/Any?type=single");
    const result = response.data;
    console.log(result);
    res.render("index.ejs",{joke: result.joke});
}catch(error){
    console.log(error.response.data);
   
}
})


app.listen(port, (req,res)=>{
    console.log(`server is running on ${port}`);
})