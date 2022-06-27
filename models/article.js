const mongoose = require("mongoose");
const { Schema } = mongoose;
const slugify = require("slugify");
const marked = require("marked");
const createDomPurifier = require("dompurify");
const { JSDOM } = requrie("jsdom");
const dompurify = createDomPurifier(new JSDOM().window);

const articleSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  markdown: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
});

articleSchema.pre("validate", function (next) {
  if (this.title) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }
  next();
});

module.exports = mongoose.model("Article", articleSchema);
