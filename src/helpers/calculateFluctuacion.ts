export const calculateFluctuation = (value: number) => {
  // Definimos un porcentaje de fluctuación basado en el valor de la criptomoneda
  let fluctuation = 0;
  if (value > 10000) {
    fluctuation = Math.random() * 200 - 100; // Bitcoin fluctúa hasta unos cientos
  } else if (value > 1000) {
    fluctuation = Math.random() * 20 - 10; // Ethereum fluctúa menos
  } else if (value > 1) {
    fluctuation = Math.random() * 2 - 1; // Solana fluctúa en menor escala
  } else {
    fluctuation = Math.random() * 0.02 - 0.01; // Cardano fluctúa en centavos
  }
  return fluctuation;
};
