export function createMarkupProduct(arr, ref) {
  const markup = arr
    .map(
      ({ images, title, description }) =>
        `<li><img src='${images[0]}' alt='${title}'><h2>${title}</h2><p>${description}</p></li>`
    )
    .join("");

  ref.innerHTML = markup;
}
