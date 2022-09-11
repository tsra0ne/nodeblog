const Blog = require('../models/blog');

const blog_index = (req, res) => {
    Blog.find().sort({ createdAt: -1 })
      .then((result) => {
        res.render("blogs/index", { title: "All Blogs", blogs: result });
    })
      .catch((err) => {
        console.log(err);
    });
};

const blog_create = (req, res) => {
    const blog = new Blog(req.body);
    blog.save()
      .then((result) => {
        res.redirect('/blogs');
    })
      .catch((err) => {
        console.log(err);
    })
};

const blog_create_get = (req, res) => {
    res.render("blogs/create", { title: "Create a new Blog" });
};

const blog_details_get = (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
      .then((blog) => {
        res.render('blogs/details', { title: 'Blog Details', blog });
      })
      .catch((err) => {
        console.log(err);
      })
};

const blog_details_delete = (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
      .then((result) => {
            res.json({ redirect: '/blogs'});
        })
        .catch((err) => {
            console.log(err);
        })
}

module.exports = {
    blog_index,
    blog_create,
    blog_create_get,
    blog_details_get,
    blog_details_delete
}