export function formatToCurrency(number: number) {
  return number.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2, // Mostrar hasta 4 decimales
    maximumFractionDigits: 4,
  });
}
