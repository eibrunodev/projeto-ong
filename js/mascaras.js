// Máscaras de entrada para CPF, Telefone e CEP
// Aplicadas em tempo real, complementando os atributos "pattern" do HTML5.

function aplicarMascaraCPF(campo) {
  campo.addEventListener("input", () => {
    let valor = campo.value.replace(/\D/g, "").slice(0, 11);
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    campo.value = valor;
  });
}

function aplicarMascaraTelefone(campo) {
  campo.addEventListener("input", () => {
    let valor = campo.value.replace(/\D/g, "").slice(0, 11);
    valor = valor.replace(/(\d{2})(\d)/, "($1) $2");
    valor = valor.replace(/(\d{4,5})(\d{4})$/, "$1-$2");
    campo.value = valor;
  });
}

function aplicarMascaraCEP(campo) {
  campo.addEventListener("input", () => {
    let valor = campo.value.replace(/\D/g, "").slice(0, 8);
    valor = valor.replace(/(\d{5})(\d)/, "$1-$2");
    campo.value = valor;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const cpf = document.getElementById("cpf");
  const telefone = document.getElementById("telefone");
  const cep = document.getElementById("cep");

  if (cpf) aplicarMascaraCPF(cpf);
  if (telefone) aplicarMascaraTelefone(telefone);
  if (cep) aplicarMascaraCEP(cep);
});
