const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config()
const port = process.env.PORT || 5000


const app = express()
const corsOptions = {
    origin: [
        'http://localhost:5173',
        'http://localhost:5174',
    ],
    credentials: true,
    optionSuccessStatus: 200,
}
app.use(cors(corsOptions))
app.use(express.json())
// soloSphere
// LAhD2lcmfxLefus7



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ycg9h6w.mongodb.net/?appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        const jobsCollection = client.db('soloSphere').collection('jobs')
        const bidsCollection = client.db('soloSphere').collection('bids')
        // Get All Jobs Data from db
        app.get('/jobs', async(req,res)=>{
            const result = await jobsCollection.find().toArray();
            res.send(result)
        })
        // Get a single data from db
        app.get('/job/:id', async(req,res)=>{
            const id = req.params.id
            const query = {_id : new ObjectId(id)}
            const result = await jobsCollection.findOne(query);
            res.send(result)
        })
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);

app.get('/', async (req, res) => {
    res.send("This server is Ok for everything");
})


app.listen(port, () => console.log(`Server running on port ${port}`))