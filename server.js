const express = require("express");
const app = express();
const port = 3000;
const articelRouter = require("./routes/articles");
app.use("/articles", articelRouter);
//
app.set("view engine", "ejs");
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
