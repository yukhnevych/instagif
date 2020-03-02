# Instagif

### To run the project follow these steps:

1. Open terminal
2. Go to project folder `cd instagif`
3. Run `npm i` to install all dependencies
4. Run `npm start` to open devserver and view the app

I've used create-react-app to bootstrap application and quickly setup dev environment.

### To test the project follow these steps:

1. Open terminal
2. Go to project folder `cd instagif`
3. Run `npm test` to run unit tests

### Technologies used
- `React` - to be able to render all UI
- `Redux` - to store application state
    - `redux-promise-middleware` - used to simplify async actions in `Redux`
- `Bulma` - to quickly style the application
- `Jest` - for unit testing
- `Enzyme` - for React component testing

### Project structure
```
├── public/                         (Project static files)
│   ├── favicon.ico                 (Project favicon)
│   ├── index.html
│
├── src/                            (Project source)
│   ├── __tests__/                  (Unit tests)
│   │   ├── store/                  (Redux store unit tests for actions and reducers)
│   │   ├── components/             (React components tests)
│   ├── components/                 (React dumb components e.g. w/o logic, components)
│   ├── containers/                 (React smart components e.g. w/ logic, containers)
│   ├── store/                      (Redux store)
│   │   ├── reducers/               (Redux reducers to modify state)
│   │   ├── actions.js              (Redux action creators)
│   │   ├── actionTypes.js          (Redux action types)
│   │   ├── index.js                (Redux store configuration)
│   ├── styles/                     (Application styles)
│   ├── App.js                      (Main component, store provider)
│   ├── constants.js                (Application contants)
│   ├── index.js                    (Main entrypoint)
│   ├── requester.js                (File responsible for Giphy requests)
│   ├── setupTests.js               (Test configuration for jest)
│
├── .gitignore
├── package.json
└── README.md

```

### Next steps
1. Improve UI
2. Replace `bulma` css framework with custom styles
3. Usage of css modules to provide better scoping
4. Better test coverage
