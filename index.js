require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const { userRouter } = require("./routes/user");

const { adminRouter } = require("./routes/admin");

const app = express();
app.use(express.json());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/course", courseRouter);

const PORT = process.env.PORT || 3000;

async function main() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB connected ✅");

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT} 🚀`);
        });

    } catch (err) {
        console.error("DB connection failed ❌", err);
    }
}

main();