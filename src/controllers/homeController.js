const Contato = require('../models/ContatoModels');

exports.index = async (req, res) => {
    const contatos = await Contato.buscaContatos();
    console.log(contatos);
    res.render('index', { contatos });
};
