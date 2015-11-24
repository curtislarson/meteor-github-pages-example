Router.route("/", {
  name: "index",
  action: function() {
    this.render("index");
  }
});

Router.route("/quack", {
  name: "quack",
  action: function() {
    this.render("quack");
  }
});