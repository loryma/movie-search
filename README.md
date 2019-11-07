## SPA built with React that allows to seach IMDB database

Search input allows to searche movies by title and returns paginated result (10 movies per page)
Clicking on a movie opens a page with details about the movie

React application is contains only functional components where a state of the component is preserved with React Hook useState and side effects executed within useEffect hook.

State in the application is managed with `redux`
Async actions dispatched with `redux-thunk`
Routing in the application is implemented with `react-router-dom`
Data is fetched with `axios`
`styled-components` is used for styling
