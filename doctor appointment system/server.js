const express = require('express');
const colors = require('colors');
const moragan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require("./config/db.js")
const cors = require('cors');
const axios = require('axios');

//Openai Chatgpt
const bodyParser = require("body-parser");
const { Configuration, OpenAIApi } = require("openai");
const config = new Configuration({
    apiKey: "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",
})
const openai = new OpenAIApi(config);

//setup server
const app = express();
app.use(bodyParser.json());
app.use(cors());

//endpoint for chatgpt
app.post("/chat", async (req, res) => {

    const { prompt } = req.body;

    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        max_tokens: 512,
        temperature: 0,
        prompt: prompt,
    });

    res.send(completion.data.choices[0].text);

})


//dotenv config
dotenv.config();

//mongodb connection
connectDB();

//rest object
//const app = express();

//middlewares
app.use(express.json());
app.use(moragan('dev'));

//routes
//URL pattern and required user route file
app.use('/api/v1/user', require("./routes/userRoutes.js"));
app.use('/api/v1/admin', require("./routes/adminRoutes.js"));
app.use('/api/v1/doctor', require('./routes/doctorRoutes.js'));

// port
const port = process.env.PORT || 2112
//listen port
app.listen(port, () => {
    console.log(`Server Running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`
        .bgCyan.white
    )
})
