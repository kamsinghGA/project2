const Trader = require('../models/trader.js');

module.exports = {
    new: newTrader,
    index, 
    create,
    delete: deleteTrader,
    update,
    edit, 
    show
}

function newTrader(req, res) {
    res.render('traders/new', { errorMsg: ''})
}

async function index (req, res){
    const allTraders = await Trader.find();

    res.render('traders/index',{
      traders: allTraders
    });
}

async function create(req, res) {
    try{
        await Trader.create(req.body);
        res.redirect('/traders');
    } catch (err) {
        console.log(err);
        res.render('traders/new', { errorMsg: err.message})
    }
}

async function deleteTrader(req, res) {
    try {
      await Trader.findByIdAndRemove(req.params.id);
      res.redirect('/traders');
    }  catch (err) {
      res.render('/traders', { errorMsg: err.message });
    }
}

async function update(req, res) {
    try {
      await Trader.findByIdAndUpdate(req.params.id, req.body, {new:true})
      res.redirect(`/traders`);
    }  catch (err) {
      res.render(`/traders/${req.params.id}/edit`, { errorMsg: err.message });
    }
}

async function edit(req, res) {
  try {
    const trader = await Trader.findById(req.params.id);
    res.render('traders/edit', { trader });
  } catch (err) {
    res.render('traders', { errorMsg: err.message });
  }
}

async function show(req, res) {
  try {
    const trader = await Trader.findById(req.params.id);
    res.render('traders/show', { trader });
  } catch(err) {
    res.render('traders', { errorMsg: err.message });
  }
}


