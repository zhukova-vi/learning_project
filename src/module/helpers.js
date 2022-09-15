// Вспомогательная функция для получения элементов по селектору
export const getEl = (selector, all = false, el = document) =>
  all ? [...el.querySelectorAll(selector)] : el.querySelector(selector)

// Вспомогательная функция для генерации уникального `id`
export const uuid = (n) =>
  ([1e7] + -1e3 + -4e3 + -8e3 + -1e11)
    .replace(/[018]/g, (c) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    )
    .slice(0, n)
