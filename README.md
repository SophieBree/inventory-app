# Local Bookshop Inventory

This is an application to display the inventory of a local bookshop.

## Main Points

'Local Bookshop' is a server-side application made using MongoDB, Express, and Node.

The templating language that I used to build the views is pug.

The app allows users to sign up for an account, and **authenticates** them when they log in.

The app uses **authorisation** to only allow Administrator accounts to create, edit, and delete books.

If a regular member tries to access these functions, they will be redirected.

## Guided Tour

### Homepage

On the homepage, you are met with a greeting message, how many books/authors/genres the bookshop has, and a navigation sidebar. There is also a link in the top right to log in to your account.

The homepage does not render links to create, edit, or delete books unless an Admin account is logged in. Upon successful login of an Admin account, the links will be rendered in the sidebar.

### Book List
This page displays all of the books in the bookshop's inventory, in list form. Clicking on a book title will bring you to the book detail page.

### Book Detail
Here, some basic information about the book is recorded. The author, a summary of the book, its ISBN, genre, availability, and price are all listed here.

The author's name and genre(s) are links that take you to the detail page for those respective items.

### Author List
Same as the book list, displays a list of all authors, and clicking an author's name brings you to their detail page.

### Author Detail
The author's name, lifespan, and a list of their books is presented. The books' titles are links that bring you to the detail page for that book.

### Genre List
Same as the book and author lists, displays a list of all genres, and clicking on a genre brings you to the detail page for that genre.

### Genre Detail
Simply displays a list of all books in that genre. The books' titles are links that bring you to the detail page for that book.

## Challenges

This was the first project that I completed that used a backend, so learning how to program with that was an interesting challenge. I slowly understood more and more about how everything worked and connected together as I continued with the project, and by the end, I was comfortable enough to implement new features such as authentication and authorisation.
