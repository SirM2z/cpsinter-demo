// localStorage取出json对象
export function getLS (key) {
  return JSON.parse(localStorage.getItem(key))
}

// localStorage存入字符串
export function setLS (key, data) {
  localStorage.setItem(key, JSON.stringify(data))
}
