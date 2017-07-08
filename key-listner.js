module.exports = function (app) {
  app.get('/key',function(req,res) {
    res.render('circle');
  });

};
