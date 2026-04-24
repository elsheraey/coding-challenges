// JavaScript objects for books and albums
const book1 = {
  name: "Book 1",
  category: "Fiction",
  picture_url: "img/book1.jpg",
  price: 9.99,
  selling_points: ["Bestseller", "NY Times Recommended"],
};

const book2 = {
  name: "Book 2",
  category: "Non-fiction",
  picture_url: "img/book2.jpg",
  price: 14.99,
  selling_points: ["Acclaimed by Critics", "National Book Award Winner"],
};

const album1 = {
  name: "Album 1",
  category: "Pop",
  picture_url: "img/album1.jpg",
  price: 12.99,
  selling_points: ["Top 10 Billboard Album", "Grammy Award Winner"],
};

const album2 = {
  name: "Album 2",
  category: "Rock",
  picture_url: "img/album2.jpg",
  price: 8.99,
  selling_points: ["Classic Rock Album", "Rolling Stone Recommende"],
};

// Function to construct and append new HTML elements to the content div
function addToPage(product) {
  const productDiv = $('<div>')
    .attr('id', product.name)
    .addClass(`${product.category.toLowerCase()} product`);

  const imageDiv = $('<div>').addClass('image');
  const image = $('<img>').attr('src', product.picture_url);
  imageDiv.append(image);

  const infoDiv = $('<div>').addClass('info');

  const name = $('<div>').addClass('name').text(product.name);
  const category = $('<div>').addClass('category').text(product.category);
  const price = $('<div>').addClass('price').text(`$${product.price}`);
  const sellingPointsList = $('<ul>').addClass('selling-points');
  product.selling_points.forEach((point) => {
    const sellingPoint = $('<li>').text(point);
    sellingPointsList.append(sellingPoint);
  });

  infoDiv.append(name, category, price, sellingPointsList);
  
  productDiv.append(imageDiv, infoDiv);

  $('#content').append(productDiv);
}

// Add click events to nav bar
$('#nav-books').click(() => {
  $('#content').empty();
  addToPage(book1);
  addToPage(book2);
});

$('#nav-music').click(() => {
  $('#content').empty();
  addToPage(album1);
  addToPage(album2);
});

$('#nav-all').click(() => {
  $('#content').empty();
  addToPage(book1);
  addToPage(book2);
  addToPage(album1);
  addToPage(album2);
});