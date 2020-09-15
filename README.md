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

> Use the Wireframes section to display desktop, tablet and mobile views. No hand-drawn wireframes. Use a tool like wireframe.cc, Whimsical or AdobeXD

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

#### Component Tree

> Use this section to display the structure of how your React components are being rendered. This should show the parent to child relation between you components. In other words, show which components are rendering the other components. 

#### Component Hierarchy

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

**Font-End Structure**

- src/
  - assets/
  - components/
    - ArticleTab.jsx
    - CommentsTab.jsx
    - ArticleEditor.jsx
    - Navigation.jsx
    - pdr
  - containers/
    - ArticleContainer.jsx
  - layouts/
    - Layout.jsx
  - screens/
    - Home.jsx
    - ArticleList.jsx
    - ViewArticle.jsx
    - CreateArticle.jsx
    - EditArticle.jsx
    - Login.jsx
    - Register.jsx
  - services/
    - api-config.js
    - auth.js
    - articles.js
    

#### Component Breakdown

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the navigation and logo._               |
|  Navigation  | functional |   n   |   n   | _The navigation will provide a link to each of the pages._       |
|   Gallery    |   class    |   y   |   n   | _The gallery will render the posts using cards in flexbox._      |
| Gallery Card | functional |   n   |   y   | _The cards will render the post info via props._                 |
|    Footer    | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._ |

#### Time Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |

<br>

### Server (Back End)

#### ERD Model

> Use this section to display an image of a computer generated ERD model. You can use draw.io, Lucidchart or another ERD tool.

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
