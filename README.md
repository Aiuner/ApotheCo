# ApotheCo <!-- omit in toc -->

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**ApotheCo** is an informational wiki containing a growing collection of articles on various plants, fungi, animal byproducts, etc. with information on their identification, properties, and uses in several contexts. Users of the wiki are able to make accounts and create their own articles, and suggest edits/comment on articles written by others._

<br>

## MVP

_The **ApotheCo** MVP is to have a functional full-stack web application with a Postgres database serving data to the client-side via axios calls, and a simple and attractive user interface. The application will also feature user authentication, allowing individuals to have accounts with which to create and edit new articles and post comments on other articles._

<br>

### Goals

- _Ruby on Rails back-end. RESTful JSON API with a Postgres database that has tables for users, articles, and suggested edits/comments._
- _Full CRUD for articles and suggested edits/comments._
- _React.js front-end with full CRUD for articles and suggested edits/comments._
- _Make API calls from my front-end to my back-end to populate app with data from my database._
- _Have a simple, clean, and stylish interface for users to explore the wiki and add new content._

<br>

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _A Javascript framework and library used to quickly build responsive single-page web applications._ |
|   React Router   | _Used to allow react applications to have different components render different React components to the page based on the url pathname._ |
|      Axios       | _Used to interact with APIs and fetch data from their respective databases._ |

<br>

### Client (Front End)

#### Wireframes

![Homepage](https://media.discordapp.net/attachments/447199538105810945/755227919676211200/unknown.png)

- Desktop Homepage

![Dummy Link](https://media.discordapp.net/attachments/447199538105810945/755227983337488394/unknown.png)

- Log-In Screen

![Dummy Link](https://media.discordapp.net/attachments/447199538105810945/755228076958548088/unknown.png)

- Register Screen

![Article Screen](https://media.discordapp.net/attachments/447199538105810945/755228179089588336/unknown.png)

- Desktop Article Screen - Article Tab Open

![Article Screen](https://media.discordapp.net/attachments/447199538105810945/755230880129351830/unknown.png)

- Desktop Article Screen - Comments Tab Open

![Mobile Homepage](https://media.discordapp.net/attachments/447199538105810945/755231758936440961/unknown.png)

- Mobile Homepage

![Mobile Navigation Menu](https://media.discordapp.net/attachments/447199538105810945/755233412473815101/unknown.png)

- Mobile Navigation Menu

<br>

#### Component Tree

> Layout is the wrapper for all other components.

![ApotheCo Component Tree](https://media.discordapp.net/attachments/447199538105810945/755467841314095154/a87bf330-b0f8-45b6-9cde-5bdf81b2069d.png?width=1574&height=908)


#### Component Hierarchy

**Font-End Structure**

- src/
  - assets/
  - components/
    - ArticleTab.jsx
    - CommentsTab.jsx
    - ArticleEditor.jsx
    - Navigation.jsx
    - CreateNewArticle.jsx
    - CreateNewComment.jsx
    - CommentEditor.jsx
    - CurrentUser.jsx
  - containers/
    - ArticleContainer.jsx
  - layouts/
    - Layout.jsx
  - screens/
    - Home.jsx
    - Index.jsx
    - ViewArticle.jsx
    - CreateArticle.jsx
    - EditArticle.jsx
    - Login.jsx
    - Register.jsx
  - services/
    - api-config.js
    - auth.js
    - articles.js

<br>

#### Component Breakdown

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
| ArticlesTab      | functional |   y   |   n   | _Contains the article information when active._               |
| CommentsTab      | functional |   y   |   n   | _Displays all the comments when active, plus the new comment field._       |
| ArticleEditor    | functional |   n   |   n   | _Allows the user to edit an existing article and save the changes to the database._      |
| Navigation       | functional |   n   |   n   | _Navigation menu. Used to navigate the application._                 |
| CreateNewArticle | functional |   n   |   n   | _Allows the user to create a new article and save it to the database._ |
| CreateNewComment | functional |   n   |   n   | _Shows up in the comments tab (CommentsTab subcomponent) and allows the user to submit new comments._      |
| CommentEditor    | functional |   n   |   n   | _Allows the user to edit an existing comment and save the changes to the database._                 |
| CurrentUser      | functional |   n   |   y   | _Displays the currently logged in user, or tells a guest to log in or register._ |

<br>

#### Time Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Build out the back-end           |    H     |     5 hrs      |     <1 hr     |    -----    |
| Create CRUD Actions on back-end  |    H     |     3 hrs      |     <1 hr     |    -----    |
| Create User authentication       |    H     |     3 hrs      |     <1 hr     |     1 hr    |
| Debugging back-end               |    M     |     3 hrs      |     <1 hr     |    -----    |
| Build out the front-end skeleton |    H     |     5 hrs      |     <1 hr     |    -----    |
| Create CRUD axios functions      |    H     |     3 hrs      |     <1 hr     |    2 hrs    |
| Build up the react components    |    H     |     8 hrs      | WIP 5 hrs     |             |
| Debugging the front-end          |    M     |     3 hrs      | WIP  1 hr     |             |
| Basic CSS Styling                |    H     |     3 hrs      |     <1 hr     |             |
| More Comprehensive CSS Styling   |    M     |     8 hrs      |               |             |
| Post-MVP                         |    L     |     -----      |               |             |
| TOTAL                            |          |    52 hrs      |     -----     |     TBD     |

<br>

### Server (Back End)

#### ERD Model

![ApotheCo ERD Model](https://media.discordapp.net/attachments/447199538105810945/755244325675335750/ApotheCo_ERD.png)

<br>

***

## Post-MVP

- _Two selectable themes. One Light, one Dark._
- _Ability to search by either scientific name or common name for plants/fungi._
- _Figure out how to write & save articles using markdown or bbcode formatting._
- _If I successfully figure out the above, figure out a way to preview before submitting._
- _Separate suggested edits from comments and allow users to mark where in the article a suggested edit should go._
- _Add an image uploading feature for articles & user profile photos._

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
