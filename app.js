const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");


const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let firstChosenArr = [];
let secoundChosenArr = [];
let compareArr= [];
let dataSetChoice;

const applicantsData = 
[
    {
        id: 1,
        image: "Martijn",
        name: "Martijn Klaver",
        live: "Amesterdam",
        age: "32 Years",
        nationality: "Dutch",
        experience: "8 years in Product Mang",
        degree: "Bachelors in Marketing",
        skills: "Market Research, Analytical Skills, Time Management, Communications, Presentation, Negotiation"
    },

    {
        id: 2,
        image: "Sonya",
        name: "Sonya Shee",
        live: "Arnhem",
        age: "28 Years",
        nationality: "Indonesian",
        experience: "5 years in Product Mang",
        degree: "Business Management",
        skills: "Strategy, Roadmaps, Leadership, research, Presentation, Project Management"
    },

    {
        id: 3,
        image: "Marijne",
        name: "Marijne Kruse",
        live: "Almere",
        age: "26 Years",
        nationality: "Dutch",
        experience: "4 years in Product Mang",
        degree: "Engineering Management",
        skills: "Agile, Software, Testing, Team leading, Analytical skills, Business skills"
    },

    {
        id: 4,
        image: "Obinna",
        name: "Obinna Iblo",
        live: "Rotterdam",
        age: "38 Years",
        nationality: "Nigerian",
        experience: "12 years in Software",
        degree: " Computer Science",
        skills: "Product, Software, Agile, Roadmaps, Team leading, Delegation"
    },

    {
        id: 5,
        image: "Adil",
        name: "Adil Omar",
        live: "Amesterdam",
        age: "48 Years",
        nationality: "Moroccan",
        experience: "26 years in Product Mang",
        degree: " Bachelor in Mathematics",
        skills: "Design, Roadmaps, Agile/Scrum, User focused, Data Analytics, Software"
    },

    {
        id: 6,
        image: "Bart",
        name: "Bart van Dinter",
        live: "Den Haag",
        age: "51 Years",
        nationality: "Dutch",
        experience: "18 years in Software",
        degree: " MBA/ Bach. Computer Science ",
        skills: "Management, Leadership, Software, Story telling, Customer focus, Negotiation"
    },

    {
        id: 7,
        image: "Emre",
        name: "Emre Kaplan",
        live: "Utrecht",
        age: "34 Years",
        nationality: "Turkish",
        experience: "8 years in Product Mang",
        degree: " Masters in Computer Science ",
        skills: "Software, Project Management, Leadership, Communications, Roadmaps, Negotiation"
    },

    {
        id: 8,
        image: "Rebecca",
        name: "Rebecca Vera",
        live: "Maastricht",
        age: "31 Years",
        nationality: "Spanish",
        experience: "7 years in Technology Mng",
        degree: " Masters in Management ",
        skills: "Product, Data Analytics, Machine Learning, AI, Agile, Team leading"
    },


    {
        id: 9,
        image: "Eliza",
        name: "Eliza Van Oort",
        live: "Rotterdam",
        age: "36 Years",
        nationality: "Dutch",
        experience: "13 years in Software",
        degree: " Msc in Computer Science",
        skills: "Javascript, Automated Testing, HTML/CSS, Python, Technical management, Mobile Development"
    },

    {
        id: 10,
        image: "Asha",
        name: "Asha Elvira",
        live: "Amsterdam",
        age: "38 Years",
        nationality: "Dutch",
        experience: "15 years in Project Mang.",
        degree: " Bachelor in Engineering ",
        skills: "Hardware, Engineering Management, Scrum, Presentation, Team leading, Project Management"
    }


    
];


const applicantsDataSc = 
[
    {
        id: 4,
        image: "Obinna",
        name: "Obinna Iblo",
        live: "Rotterdam",
        age: "38 Years",
        nationality: "Nigerian",
        experience: "12 years in Software",
        degree: " Computer Science",
        skills: "Product, Software, Agile, Roadmaps, Team leading, Delegation"
    },

    {
        id: 8,
        image: "Rebecca",
        name: "Rebecca Vera",
        live: "Maastricht",
        age: "31 Years",
        nationality: "Spanish",
        experience: "7 years in Technology Mng",
        degree: " Masters in Management ",
        skills: "Product, Data Analytics, Machine Learning, AI, Agile, Team leading"
    },

    {
        id: 9,
        image: "Eliza",
        name: "Eliza Van Oort",
        live: "Rotterdam",
        age: "36 Years",
        nationality: "Dutch",
        experience: "13 years in Software",
        degree: " Msc in Computer Science",
        skills: "Javascript, Automated Testing, HTML/CSS, Python, Technical management, Mobile Development"
    },

    {
        id: 5,
        image: "Adil",
        name: "Adil Omar",
        live: "Amesterdam",
        age: "48 Years",
        nationality: "Moroccan",
        experience: "26 years in Product Mang",
        degree: " Bachelor in Mathematics",
        skills: "Design, Roadmaps, Agile/Scrum, User focused, Data Analytics, Software"
    },


    {
        id: 3,
        image: "Marijne",
        name: "Marijne Kruse",
        live: "Almere",
        age: "26 Years",
        nationality: "Dutch",
        experience: "4 years in Product Mang",
        degree: "Engineering Management",
        skills: "Agile, Software, Testing, Team leading, Analytical skills, Business skills"
    },

    {
        id: 1,
        image: "Martijn",
        name: "Martijn Klaver",
        live: "Amesterdam",
        age: "32 Years",
        nationality: "Dutch",
        experience: "8 years in Product Mang",
        degree: "Bachelors in Marketing",
        skills: "Market Research, Analytical Skills, Time Management, Communications, Presentation, Negotiation"
    },

    {
        id: 10,
        image: "Asha",
        name: "Asha Elvira",
        live: "Amsterdam",
        age: "38 Years",
        nationality: "Dutch",
        experience: "15 years in Project Mang.",
        degree: " Bachelor in Engineering ",
        skills: "Hardware, Engineering Management, Scrum, Presentation, Team leading, Project Management"
    },

    {
        id: 7,
        image: "Emre",
        name: "Emre Kaplan",
        live: "Utrecht",
        age: "34 Years",
        nationality: "Turkish",
        experience: "8 years in Product Mang",
        degree: " Masters in Computer Science ",
        skills: "Software, Project Management, Leadership, Communications, Roadmaps, Negotiation"
    },

    {
        id: 2,
        image: "Sonya",
        name: "Sonya Shee",
        live: "Arnhem",
        age: "28 Years",
        nationality: "Indonesian",
        experience: "5 years in Product Mang",
        degree: "Business Management",
        skills: "Strategy, Roadmaps, Leadership, research, Presentation, Project Management"
    },

    {
        id: 6,
        image: "Bart",
        name: "Bart van Dinter",
        live: "Den Haag",
        age: "51 Years",
        nationality: "Dutch",
        experience: "18 years in Software",
        degree: " MBA/ Bach. Computer Science ",
        skills: "Management, Leadership, Software, Story telling, Customer focus, Negotiation"
    },

];

let frDataTraining = [
    {
        id: 3,
        image: "Marijne",
        name: "Marijne Kruse",
        live: "Almere",
        age: "26 Years",
        nationality: "Dutch",
        experience: "4 years in Product Mang",
        degree: "Engineering Management",
        skills: "Agile, Software, Testing, Team leading, Analytical skills, Business skills"
    },
    {
        id: 4,
        image: "Obinna",
        name: "Obinna Iblo",
        live: "Rotterdam",
        age: "38 Years",
        nationality: "Nigerian",
        experience: "12 years in Software",
        degree: " Computer Science",
        skills: "Product, Software, Agile, Roadmaps, Team leading, Delegation"
    },
    {
        id: 6,
        image: "Bart",
        name: "Bart van Dinter",
        live: "Den Haag",
        age: "51 Years",
        nationality: "Dutch",
        experience: "18 years in Software",
        degree: " MBA/ Bach. Computer Science ",
        skills: "Management, Leadership, Software, Story telling, Customer focus, Negotiation"
    },
]

let scDataTraining = [
    {
        id: 1,
        image: "Martijn",
        name: "Martijn Klaver",
        live: "Amesterdam",
        age: "32 Years",
        nationality: "Dutch",
        experience: "8 years in Product Mang",
        degree: "Bachelors in Marketing",
        skills: "Market Research, Analytical Skills, Time Management, Communications, Presentation, Negotiation"
    },
    {
        id: 9,
        image: "Eliza",
        name: "Eliza Van Oort",
        live: "Rotterdam",
        age: "36 Years",
        nationality: "Dutch",
        experience: "13 years in Software",
        degree: " Msc in Computer Science",
        skills: "Javascript, Automated Testing, HTML/CSS, Python, Technical management, Mobile Development"
    },
    {
        id: 10,
        image: "Asha",
        name: "Asha Elvira",
        live: "Amsterdam",
        age: "38 Years",
        nationality: "Dutch",
        experience: "15 years in Project Mang.",
        degree: " Bachelor in Engineering ",
        skills: "Hardware, Engineering Management, Scrum, Presentation, Team leading, Project Management"
    },
]

let thrDataTraining = [
    {
        id: 2,
        image: "Sonya",
        name: "Sonya Shee",
        live: "Arnhem",
        age: "28 Years",
        nationality: "Indonesian",
        experience: "5 years in Product Mang",
        degree: "Business Management",
        skills: "Strategy, Roadmaps, Leadership, research, Presentation, Project Management"
    },
    {
        id: 5,
        image: "Adil",
        name: "Adil Omar",
        live: "Amesterdam",
        age: "48 Years",
        nationality: "Moroccan",
        experience: "26 years in Product Mang",
        degree: " Bachelor in Mathematics",
        skills: "Design, Roadmaps, Agile/Scrum, User focused, Data Analytics, Software"
    },
    {
        id: 7,
        image: "Emre",
        name: "Emre Kaplan",
        live: "Utrecht",
        age: "34 Years",
        nationality: "Turkish",
        experience: "8 years in Product Mang",
        degree: " Masters in Computer Science ",
        skills: "Software, Project Management, Leadership, Communications, Roadmaps, Negotiation"
    },
]

let frReason = [
    "10+ years in Software Management", "between 32 and 55 years", "Bachelor in Computer Science"
]

let frVideo = "https://drive.google.com/file/d/1oMQ7PgSBa5USdf7UWAdkaKEnQaATTGxj/preview"

let scReason = [
    "Dutch Nationality", "30+ years", "Living in Rotterdam or Amesterdam"
]

let scVideo = "https://drive.google.com/file/d/1fPOP7wY5WkfHkej-Bn-xmrKKMRynr0tm/preview"

let thrReason = [
    "Experience working as Product Mng", "skills: Roadmaps, Agile, Strategy", "B28 to 50 years age"
]

let thrVideo = "https://drive.google.com/file/d/13DOy5DdpwheJJ4bhFGLr4LeOhpmnIkQX/preview"



app.get("/", (req,res) =>{
    compareArr =[];
    firstChosenArr = [];
    secoundChosenArr = [];
    dataSetChoice = "";
    res.render("home");
});

app.get("/intro-manager", (req,res) =>{
    compareArr =[];
    firstChosenArr = [];
    secoundChosenArr = [];
    dataSetChoice = "";
    res.render("intro-manager");
});

app.get("/choose-cvs-first", (req,res) =>{
    firstChosenArr = [];
    secoundChosenArr = [];
    res.render("choose-cvs",{
        data: applicantsData
    })
});

app.post("/choose-cvs-first", (req,res) =>{
    if(req.body.Martijn){  
        const result = applicantsData.filter(applicant => applicant.image == "Martijn");
        firstChosenArr.push(result[0]);
    }

    if(req.body.Sonya){
        const result = applicantsData.filter(applicant => applicant.image == "Sonya");
        firstChosenArr.push(result[0]);
    }

    if(req.body.Marijne){
        const result = applicantsData.filter(applicant => applicant.image == "Marijne");
        firstChosenArr.push(result[0]);
    }

    if(req.body.Obinna){
        const result = applicantsData.filter(applicant => applicant.image == "Obinna");
        firstChosenArr.push(result[0]);
    }

    if(req.body.Adil){
        const result = applicantsData.filter(applicant => applicant.image == "Adil");
        firstChosenArr.push(result[0]);
    }

    if(req.body.Bart){
        const result = applicantsData.filter(applicant => applicant.image == "Bart");
        firstChosenArr.push(result[0]);
    }

    if(req.body.Emre){
        const result = applicantsData.filter(applicant => applicant.image == "Emre");
        firstChosenArr.push(result[0]);
    }

    if(req.body.Rebecca){
        const result = applicantsData.filter(applicant => applicant.image == "Rebecca");
        firstChosenArr.push(result[0]);
    }

    if(req.body.Eliza){
        const result = applicantsData.filter(applicant => applicant.image == "Eliza");
        firstChosenArr.push(result[0]);
    }

    if(req.body.Asha){
        const result = applicantsData.filter(applicant => applicant.image == "Asha");
        firstChosenArr.push(result[0]);
    }

    if(firstChosenArr.length == 3){
        res.redirect("blinding-qs");
    } 

    else if(firstChosenArr.length > 3){
        firstChosenArr = [];
        res.render("chose-more",{
            page: "choose-cvs-first"
        });
    }

    else if(firstChosenArr.length < 3){
        firstChosenArr = [];
        res.render("choose-more",{
            page: "choose-cvs-first"
        });
    }

    

});

app.get("/blinding-qs", (req,res) =>{
    res.render("blinding-qs");
});

app.get("/blinded-cvs", (req,res) =>{
    secoundChosenArr = [];
    if(firstChosenArr.length < 3 ){  
        res.redirect("/");
    }
    res.render("blinded-cvs",{
        data: applicantsDataSc
    })
});

app.post("/blinded-cvs", (req,res) =>{

    if(req.body.Martijn){  
        const result = applicantsData.filter(applicant => applicant.image == "Martijn");
        secoundChosenArr.push(result[0]);
    }

    if(req.body.Sonya){
        const result = applicantsData.filter(applicant => applicant.image == "Sonya");
        secoundChosenArr.push(result[0]);
    }

    if(req.body.Marijne){
        const result = applicantsData.filter(applicant => applicant.image == "Marijne");
        secoundChosenArr.push(result[0]);
    }

    if(req.body.Obinna){
        const result = applicantsData.filter(applicant => applicant.image == "Obinna");
        secoundChosenArr.push(result[0]);
    }

    if(req.body.Adil){
        const result = applicantsData.filter(applicant => applicant.image == "Adil");
        secoundChosenArr.push(result[0]);
    }

    if(req.body.Bart){
        const result = applicantsData.filter(applicant => applicant.image == "Bart");
        secoundChosenArr.push(result[0]);
    }

    if(req.body.Emre){
        const result = applicantsData.filter(applicant => applicant.image == "Emre");
        secoundChosenArr.push(result[0]);
    }

    if(req.body.Rebecca){
        const result = applicantsData.filter(applicant => applicant.image == "Rebecca");
        secoundChosenArr.push(result[0]);
    }

    if(req.body.Eliza){
        const result = applicantsData.filter(applicant => applicant.image == "Eliza");
        secoundChosenArr.push(result[0]);
    }

    if(req.body.Asha){
        const result = applicantsData.filter(applicant => applicant.image == "Asha");
        secoundChosenArr.push(result[0]);
    }

    if(secoundChosenArr.length == 3){
        res.redirect("compare-qs");
    } 

    else if(secoundChosenArr.length > 3){
        secoundChosenArr = [];
        res.render("chose-more",{
            page: "blinded-cvs"
        });
    }

    else if(secoundChosenArr.length < 3){
        secoundChosenArr = [];
        res.render("chose-more",{
            page: "blinded-cvs"
        });
    }

});

app.get("/compare-qs", (req,res) =>{
    compareArr =[];
    res.render("compare-qs");
});


app.get("/comparison", (req,res) =>{

    let result;

    if(firstChosenArr.length !== 3 & secoundChosenArr.length !== 3){
        res.redirect("/");
    }

    if (firstChosenArr.length == 3 & secoundChosenArr.length == 3 ){

        for(let i=0; i <= firstChosenArr.length-1; i++ ){
            let data = secoundChosenArr.filter(applicant => applicant == firstChosenArr[i]);
            if(firstChosenArr[i] == data[0] ){
                compareArr.push("1");
            }
        }

        if( compareArr.length == 1){
            result = "1 of 3 resumes are matched between both choices";
            res.render("comparison",{
                frArr: firstChosenArr,
                scArr: secoundChosenArr,
                result: result
            });
        }
        if( compareArr.length == 2){
            result = "2 of 3 resumes are matched between both choices";
            res.render("comparison",{
                frArr: firstChosenArr,
                scArr: secoundChosenArr,
                result: result
            });
        }
        if( compareArr.length == 3){
            result = "3 of 3 resumes are matched between both choices";
            res.render("comparison",{
                frArr: firstChosenArr,
                scArr: secoundChosenArr,
                result: result
            });
        }

        if( compareArr.length == 0){
            result = "0 of 3 resumes are matched between both choices";
            res.render("comparison",{
                frArr: firstChosenArr,
                scArr: secoundChosenArr,
                result: result
            });
        }
    }
});

app.get("/machine-learning-qs", (req,res) =>{
    res.render("machine-learning-qs");
});


app.get("/machine-learning-choices", (req,res) =>{
    res.render("machine-learning-choices");
});


app.post("/machine-learning-choices", (req,res) =>{
    console.log(req.body);
    
    if(req.body.frChoice == "on"){
        dataSetChoice = "Successfully hired employees at the company";
        res.redirect("train-dataset-qs");
    }

    else if(req.body.scChoice == "on"){
        dataSetChoice = "Top 10% performers at the company";
        res.redirect("train-dataset-qs");
    }

    else if(req.body.thrChoice == "on"){
        dataSetChoice = "Similar “Product Manager” profiles in Netherlands";
        res.redirect("train-dataset-qs");
    }

    else if(!req.body.frChoice && !req.body.scChoice && !req.body.thrChoice){
        res.redirect("/machine-learning-choices");
    } 
    
});


app.get("/train-dataset-qs", (req,res) =>{
    res.render("train-dataset-qs",{
        choice: dataSetChoice
    });
});

app.get("/dataset-training", (req,res) =>{
    res.render("dataset-training");
});

app.get("/ai-choices", (req,res) =>{
    if (dataSetChoice == "Successfully hired employees at the company") {
        res.render("ai-choices",{
            data: frDataTraining
        });
    }

    if (dataSetChoice == "Top 10% performers at the company") {
        res.render("ai-choices",{
            data: scDataTraining
        });
    }

    if (dataSetChoice == "Similar “Product Manager” profiles in Netherlands") {
        res.render("ai-choices",{
            data: thrDataTraining
        });
    }
    
});

app.get("/ai-and-my-choices", (req,res) =>{
    if (dataSetChoice == "Successfully hired employees at the company") {
        res.render("ai-and-my-choices",{
            frChoice: firstChosenArr,
            scChoice: secoundChosenArr,
            aiChoices: frDataTraining
        });
    }

    if (dataSetChoice == "Top 10% performers at the company") {
        res.render("ai-and-my-choices",{
            frChoice: firstChosenArr,
            scChoice: secoundChosenArr,
            aiChoices: scDataTraining
        });
    }

    if (dataSetChoice == "Similar “Product Manager” profiles in Netherlands") {
        res.render("ai-and-my-choices",{
            frChoice: firstChosenArr,
            scChoice: secoundChosenArr,
            aiChoices: thrDataTraining
        });
    }
    
});

app.get("/ai-reason", (req,res) =>{
    if (dataSetChoice == "Successfully hired employees at the company") {
        res.render("ai-reason",{
            aiReason: frReason,
            video: frVideo
        });
    }

    if (dataSetChoice == "Top 10% performers at the company") {
        res.render("ai-reason",{
            aiReason: scReason,
            video: scVideo
        });
    }

    if (dataSetChoice == "Similar “Product Manager” profiles in Netherlands") {
        res.render("ai-reason",{
            aiReason: thrReason,
            video: thrVideo
        });
    }
    
});


app.get("/summary", (req,res) =>{
    res.render("summary");
});


app.get("/summary-2", (req,res) =>{
    res.render("summary-2");
});


app.get("/face-detection", (req,res) =>{
    res.render("face-detection");
});


app.get("/conclusion", (req,res) =>{
    res.render("conclusion");
});




app.listen(process.env.PORT || 3000);
