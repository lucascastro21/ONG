export function initValidation() {
  const form = document.querySelector("form");
  form.addEventListener("submit", e => {
    e.preventDefault();
    let valid = true;

    const cpf = document.getElementById("cpf");
    const email = document.getElementById("email");
    const telefone = document.getElementById("telefone");

    if (!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf.value)) {
      alert("CPF inválido. Use o formato 000.000.000-00");
      valid = false;
    }
    if (!email.value.includes("@")) {
      alert("E-mail inválido.");
      valid = false;
    }
    if (!/^\(\d{2}\) \d{4,5}-\d{4}$/.test(telefone.value)) {
      alert("Telefone inválido. Use o formato (00) 00000-0000");
      valid = false;
    }

    if (valid) {
      alert("Formulário enviado com sucesso!");
      form.reset();
    }
  });
}
