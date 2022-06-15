const express = require("express");
const app = express();
const port = 3000;
const articelRouter = require("./routes/articles");
const mongoose = require("mongoose");
//
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/blog");
}
//
app.get("/", (req, res) => {
  const articles = [
    {
      title: "test article",
      createdAt: new Date(),
      description: "test desc",
    },
  ];
  res.render("articles/index", { articles: articles });
});

app.listen(3000, () => {
  console.log(`Example app listening on port ${port}`);
});

app.use("/articles", articelRouter);
