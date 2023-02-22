# React: Single Page Application(SPA).

React is a single page application. In a non-single page application, when you click on a link in the browser, a requesst is sent to the server before the HTML page gets rendered.

In React, the page contents are created from out components. So what react router does is intercept the request being sent to the server and then injects the contents dynamically from the components we have created.

When you create a new project, you'll always see an index.html file in the public folder. All the code you write in your App component which acts as the root component gets rendered to this HTML file. This means that there is only one HTML file where your code will be rendered to.

What happens when you have a different component you would prefer to render as a different page? Do you create a new HTML file? The answer is no. React Router – like the name implies – helps you route to/navigate to and render your new component in the index.html file.

So as a single page application, when you navigate to a new component using React Router, the index.html will be rewritten with the component's logic.

# React Router 

React Router is a standard library for routing in React. It enables routing navigation between views from different components in a React application, allows the browser URL to be changed, and keeps the UI in sync with the URL.

# Install React Router
```
npm install react-router-dom@6
```

# Flow:

Since the App component acts as the root component where our React code gets rendered from initially, so all the routes are to be created in this App component.

## HTML5 History API:

- The HTML5 history API gives you access to the browser navigation history via JavaScript. 
- The HTML5 history API enables a web page to listen for changes in the browser history. 
- The security restrictions apply here too, so a web page will not be notified of history changes that leads to URLs outside of the domain of the web page. 
- The HTML5 history API is really useful in single page web apps. 
- A single page web app can use the HTML5 history API to make a certain state.

## The main components of React Router are:

- BrowserRouter: BrowserRouter is a router implementation that uses the HTML5 history API(pushststate, replacestate, and popstate events) to keep your UI in sync with the URL. It is the parent component used to store all other components.

- Route: This is a new component introduced in v6 and an upgrade of the component. The main advantages of Switch Over Routes are:

Instead of traversing in sequence, routes are selected based on the best match.

- Route: A route is a conditionally shown component that provides UI when its path matches the current URL.

- Links: The Links component creates links for different routes and implements navigation around the application. It works as an HTML anchor tag.

## NavLink

The NavLink is used when you want to highlight a link as active. So, on every routing to a page, the link is highlighted according to the activeClassName . Link is for links that need no highlighting. And a is for external links.

## Outlet

The <Outlet> element is used as a placeholder. 
```
<Route path="/" element={<Home />}>
    <Route path="/home1" element={<div>Child Route 1</div>}/>
    <Route path="/home2" element={<div>Child Route 2</div>}/>
</Route>
```
In this case an <Outlet>enables the Users component to render its child routes. Thus the<Outlet> element will render either a <div>Child Route 1</div> or <div>Child Route 2</div> element depending on the current location.

# Sources:

- HTML5 History API: https://jenkov.com/tutorials/html5/history-api.html
- React Router: https://www.javatpoint.com/browserrouter-in-react
- React Router: https://www.freecodecamp.org/news/how-to-use-react-router-version-6/
