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
  const markup = `<img src='${images[0]}' alt='${title}'><h2>${title}</h2><p>${description}</p>`;
  ref.innerHTML = markup;
}

export function createMarkupAddProduct({title, description, price}, ref) {
  const markup = `<h2>${title}</h2><p>${description}</p><p>${price}</p>`;
  ref.innerHTML = markup;
}