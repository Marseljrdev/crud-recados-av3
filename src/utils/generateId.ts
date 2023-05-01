export default function generateId() {
  return Math.random().toString(14).substring(2) + Math.random().toString(14).substring(2);
};