const express = require("express");
const router = express.Router();
const cors = require("cors");

const app = express();
app.use(cors());

const port=process.env.PORT || 5000;

if (process.env.NODE_ENV === 'production') {
    //*Set static folder up in production
    app.use(express.static('build'));
    app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'build','index.html')));
  }

app.use("/", router);
app.listen(port, () => console.log("Server Running"));