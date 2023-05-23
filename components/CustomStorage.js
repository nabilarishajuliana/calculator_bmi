const storage = {};

export function getItem(key) {
  return storage[key] || null;
}

export function setItem(key, value) {
  storage[key] = value;
}
