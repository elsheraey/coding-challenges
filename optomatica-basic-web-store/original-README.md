# basic-web-store

*Please note that this repository was created as a task to guide a young man through the basics of web development, but it can be used by anyone who wants to illustrate, learn more about how to reach a similar goal, or even use it as a take-home assignment for junior frontend developers.*

The code is in HTML, CSS, and JS and is spread over [three different branches](https://github.com/elsheraey/basic-web-store/branches) reflecting and named after the phases outlined below excluding the last one which I added for the sole purpose of completeness in case this is used as a take-home assignment for junior frontend developers.

## Initial Phase

- To begin, you should create an HTML document and include jQuery and Bootstrap (or another CSS framework, if preferred).

- Set up the HTML document to include a navigation bar and a content area. Within the content area, create two divs named `<div id="book1">` and `<div id="book2">` and fill them with information about books (or any other items) for sale. Each product should have the following properties: name, category, price, picture, and a list of selling points.

- Assign the outermost div an id with the book's name, a class based on its category, and a general class of product. For example, `<div id='twilight' class='book product'>`.

- Assign the appropriate class to the inner HTML elements based on the information they contain. For instance, use `<div class="name">`, `<div class="category">`, and `<div class="price">`, among others.

- Add various CSS selectors and properties to the page to make each section stand out.

- Next, create a second page identical to the first one, but with two music albums (or any other category of item) for sale. Link the two pages together in the navigation bar to allow users to switch back and forth between books and music.

- Note that duplicating the same work in two different places is not only tedious but also leads to significant problems if one page is updated and the other is not. As the complexity of an application grows, it is essential to avoid repetition. The rule is to "Don't Repeat Yourself" (DRY).

## Single Page

Let's refactor the site to become a Single Page Application, where we load all the HTML, CSS, and JS once and dynamically modify the page state using JS. Here's how to do it:

- First, copy the HTML that displays the two albums into the content area on the books page so that books and music are together.

- Create JavaScript objects for each book and album by taking all the information about them and creating variables such as book1, book2, album1, and album2. Set each variable equal to an object with keys such as name, category (which holds a string value), picture_url, price (which holds a number value), and selling_points (which is an array of strings).

- Refactor the code so that the content div is empty on page load, and create an addToPage function that generates and appends new HTML elements into it. Here is an example code: `$('#content').append($('<div id=book1>').html($('<div class=name>').text(book1.name)))`.

- Make sure to generate the appropriate class and id attributes for each book or album's div without modifying any CSS while refactoring.

- Add click events to the navigation bar so that when the user clicks on books, the books for sale appear in the `<div id=content>`, but the albums are removed, and vice versa. Use `$('#content').empty()` to remove the previous content before adding new content.

- Include a "show all" button in the nav bar that shows all the products for sale.

## Generalization

- Start by creating two arrays: books and albums. Each array should contain JavaScript objects representing the books and albums for sale. Each object should have the following properties: name, category, picture_url, price, and selling_points which is an array of strings.

- Refactor your code to use a for loop to iterate over the books array and the albums array to add the products to the page. You should no longer use separate variables like book1, book2, album1, album2, etc.

- Make sure your nav bar switching still works with the new structure.

- Refactor your code so that you have only a single object called products with keys books and albums whose values are arrays of book and album objects respectively.

- Refactor the nav bar to use a dropdown menu instead of links. Use the `.change()` event listener to observe the selected value and determine which products to display.

- Construct the dropdown menu dynamically using a `for...in` loop through the properties of products. Avoid hardcoding the words "books" and "albums" in your code.
Check to see if you can add a third category like electronics to the products object and not have to change a single line of code to have your page still work. If not, make the necessary adjustments.

## Final Phase

- Add a search box and show only products whose names or features include that word.
- Add a button to create a new product; this could be a book, music album or other product.
- Clicking the add button should display a form for you to enter the relevant information.
- Convert the developed page to use ReactJS.
