export function formatDate(date) {
  return new Date(date).toLocaleDateString();
}

export function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
