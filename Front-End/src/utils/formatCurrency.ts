export function formatCurrency(value: number | undefined) {
  if (value === undefined) {
    return undefined;
  }

  return  new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(value);
}
