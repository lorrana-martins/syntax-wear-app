// Função auxiliar para validar o cálculo do CPF
export function isValidCPF(cpf: string): boolean {
  // Remove caracteres não numéricos
  const cleanCPF = cpf.replace(/\D/g, "");

  // CPF deve ter 11 dígitos e não pode ter todos os números iguais
  if (cleanCPF.length !== 11 || /^(\d)\1{10}$/.test(cleanCPF)) {
    return false;
  }

  let soma = 0;
  let resto: number;

  // Validação do 1º dígito verificador
  for (let i = 1; i <= 9; i++) {
    soma += parseInt(cleanCPF.substring(i - 1, i)) * (11 - i);
  }
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cleanCPF.substring(9, 10))) return false;

  // Validação do 2º dígito verificador
  soma = 0;
  for (let i = 1; i <= 10; i++) {
    soma += parseInt(cleanCPF.substring(i - 1, i)) * (12 - i);
  }
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cleanCPF.substring(10, 11))) return false;

  return true;
}