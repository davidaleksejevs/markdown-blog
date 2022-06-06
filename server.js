const express = require("express");
const app = express();
const port = 3000;
const articelRouter = require("./routes/articles");
app.use("/articles", articelRouter);
//
app.set("view engine", "ejs");
//
app.get("/", (req, res) => {
  res.render("index", { text: "hello" });
});

app.listen(3000, () => {
  console.log(`Example app listening on port ${port}`);
});
