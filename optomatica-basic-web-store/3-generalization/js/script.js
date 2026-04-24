// JavaScript objects for books and albums
let products = {
  books: [
    {
      name: "Book 1",
      category: "Fiction",
      picture_url: "img/book1.jpg",
      price: 9.99,
      selling_points: ["Bestseller", "NY Times Recommended"],
    },
    {
      name: "Book 2",
      category: "Non-fiction",
      picture_url: "img/book2.jpg",
      price: 14.99,
      selling_points: ["Acclaimed by Critics", "National Book Award Winner"],
    }
  ],
  albums: [
    {
      name: "Album 1",
      category: "Pop",
      picture_url: "img/album1.jpg",
      price: 12.99,
      selling_points: ["Top 10 Billboard Album", "Grammy Award Winner"],
    },
    {
      name: "Album 2",
      category: "Rock",
      picture_url: "img/album2.jpg",
      price: 8.99,
      selling_points: ["Classic Rock Album", "Rolling Stone Recommended"],
    }
  ],
  electronics: [
    {
      name: "Electronic 1",
      category: "PC",
      picture_url: "img/album1.jpg",
      price: 12.99,
      selling_points: ["RAM EATER", "Kill"],
    },
  ]
}

function addToPage(productArray) {
  // iterate over the array of objects and append to the page
  productArray.forEach(function (product, index) {
    // create a new div to hold the product
    var $productDiv = $('<div>').addClass('product').attr('id', product.category + index);

    // add the name and category to the div
    $productDiv.append($('<h2>').addClass('name').text(product.name));
    $productDiv.append($('<p>').addClass('category').text(product.category));

    // add the picture and selling points to the div
    $productDiv.append($('<img>').addClass('image').attr('src', product.picture_url));
    var sellingPointsList = $('<ul>').addClass('selling-points');
    product.selling_points.forEach(function (point) {
      sellingPointsList.append($('<li>').text(point));
    });
    $productDiv.append(sellingPointsList);

    // add the price and "add to cart" button to the div
    $productDiv.append($('<p>').addClass('price').text('$' + product.price.toFixed(2)));
    $productDiv.append($('<button>').addClass('add-to-cart').text('Add to Cart'));

    // append the new div to the content area
    $('#content').append($productDiv);
  });
}

function capitalizeFirstLetter(text) {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

$(document).ready(function() {
  for (var product in products) {
    $('#product-selector').append($("<option>").text(capitalizeFirstLetter(product)).attr("value", product));
  }

  // Add event listener for dropdown menu
  $('#product-selector').change(function() {
    // Clear content div
    $('#content').empty();

    var selectedOption = $(this).val();

    if (selectedOption == "all") {
      for (var category in products) {
        var categoryProducts = products[category];
        addToPage(categoryProducts);
      }
    }
    else {
      var selectedProducts = products[selectedOption];
      // Add selected products to content div
      addToPage(selectedProducts);
    }
  });
});