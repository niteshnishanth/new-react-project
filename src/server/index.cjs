const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const port = 5000;
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://niteshnishanth:nitesh123@cluster0.cwczvul.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => { console.log('Connected to MongoDB') })
    .catch((err) => { console.log('Error connecting', err) })

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String
});
const User = mongoose.model('User', userSchema);

app.use(express.json());

// Registration endpoint (unchanged)
app.post('/api/users', async (req, res) => {
    try {
        const { username, password, email } = req.body;
        console.log('Received:', username, email);

        const isValid = await ValidateUser(username, email);

        if (isValid) {
            await InsertUser(username, password, email);
            res.json({ message: "User inserted" });
        } else {
            res.json({ message: "User already exists" });
        }
    } catch (err) {
        console.log('Error:', err);
        res.json({ message: "error" });
    }
});

// Login endpoint
app.post('/api/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username: username });
        if (!user) {
            return res.json({ success: false, message: "User not found" });
        }
        if (user.password !== password) {
            return res.json({ success: false, message: "Incorrect password" });
        }
        res.json({ success: true, message: "Login successful" });
    } catch (err) {
        console.log('Login error:', err);
        res.json({ success: false, message: "Server error" });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

async function ValidateUser(username, email) {
    const uname = await User.findOne({ username: username });
    const mail = await User.findOne({ email: email });
    if (uname != null || mail != null) {
        return false;
    }
    return true;
}

async function InsertUser(username, password, email) {
    const newUser = new User({ username, password, email });
    const result = await newUser.save();
    console.log('User inserted to MongoDB with id:', result._id);
}