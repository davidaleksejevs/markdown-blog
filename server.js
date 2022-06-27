const express = require("express");
const app = express();
const port = 3000;
const Article = require("./models/article");
const articelRouter = require("./routes/articles");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
//
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use(methodOverride("_method"));
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/blog");
}
//
app.get("/", async (req, res) => {
  const articles = await Article.find().sort({ createdAt: "desc" });
  res.render("articles/index", { articles: articles });
});

app.listen(3000, () => {
  console.log(`Example app listening on port ${port}`);
});

app.use("/articles", articelRouter);
