export function createMarkupProducts(arr, ref) {
  const markup = arr
    .map(
      ({ images, title, description }) =>
        `<li><img src='${images[0]}' alt='${title}'><h2>${title}</h2><p>${description}</p></li>`
    )
    .join("");

  ref.innerHTML = markup;
};

export function createMarkupProduct({ images, title, description }, ref) {
  const markup = `<li><img src='${images[0]}' alt='${title}'><h2>${title}</h2><p>${description}</p></li>`;
  ref.innerHTML = markup;
}
