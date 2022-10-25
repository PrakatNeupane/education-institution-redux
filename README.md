## Overview

The project is a react application where state management is done via redux. The UI package used is react bootsrap and bootstrap. In order to fetch data from the api, axios is used.

## Running the project locally

1. Clone or download the project into your local directory
2. Download node (skip if you already have one. to check just type `node` in the command line and it should show the version)
3. Run `npm install` to setup the node package manager in the project and get node modules
4. Some other packages that you might want to install are axios, bootstrap, react-bootstrap
5. Run `npm start` and the project should run in your localhost

## Development process

### Fetching the api

Axios has been used for the simplicity of it. In the file `axiosHelper.js`, the api `http://universities.hipolabs.com/search?country=Australia` is called by `axios.get` method.

### Setting up the redux store

The initial state in the slice file is as follows
`const initialState = { isLoading: false, dataFromApi: [], dataToDisplay: [], }`

Basically, `isLoading` property would store information needed so that when the data is being fetched, a spinner can be displayed and as soon as the data is displayed, the spinner disappears.

`dataFromApi` and `dataToDisplay` store fetched information in form of an array in the global store to display in the table.

### Implementing delete and add function

In order to implement delete function while clicking the delete button, the last element from `dataFromApi` is deleted by using `.pop()` method and the remaining elements are displayed.

In order to implement add function, the first element from the array is pushed back in to the same array. This assures that the first item gets inserted to the last without losing that first item itself.

## Further enhancements

In availability of sufficient time, unit testing could have been done for individual components, functions, and data fetching by using JEST.
