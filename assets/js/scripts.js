
document.addEventListener('DOMContentLoaded', function () {
  const cpf = document.getElementById('cpf');
  const telefone = document.getElementById('telefone');
  const cep = document.getElementById('cep');

  function mascaraCPF(valor) {
    return valor.replace(/\D/g, '')
                .replace(/(\d{3})(\d)/, '$1.$2')
                .replace(/(\d{3})(\d)/, '$1.$2')
                .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  }

  function mascaraTelefone(valor) {
    return valor.replace(/\D/g, '')
                .replace(/(\d{2})(\d)/, '($1) $2')
                .replace(/(\d{4,5})(\d{4})$/, '$1-$2');
  }

  function mascaraCEP(valor) {
    return valor.replace(/\D/g, '')
                .replace(/(\d{5})(\d{3})$/, '$1-$2');
  }

  cpf.addEventListener('input', () => cpf.value = mascaraCPF(cpf.value));
  telefone.addEventListener('input', () => telefone.value = mascaraTelefone(telefone.value));
  cep.addEventListener('input', () => cep.value = mascaraCEP(cep.value));
});
