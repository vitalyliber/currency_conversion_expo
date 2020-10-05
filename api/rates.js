export const fetchRates = async () => {
  const result = await fetch('http://localhost:3000/rates')
  return result.json();
}
