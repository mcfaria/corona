const OBRAS = [];

exports.salvarObra = (req, res) => {
  const obra = req.body;
  OBRAS.push (obra);

  res.status (200).json ({message: 'Obra adicionado com sucesso!'});
};

exports.listarObras = (req, res) => {
  res.status (200).json (OBRAS);
};

exports.limparObras = (req, res) => {
  while (OBRAS.length > 0) {
    OBRAS.pop ();
  }
  res.status (200).json (OBRAS);
};
