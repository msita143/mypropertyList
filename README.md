Please unzip myproject.zip and then go to myproject directroy and perfrom 
 `yarn install`

 After it is done perform

 `yarn start` which will launch the browser with the app.


Here are come os the decision I took:

1. Did not use external lib like material ui for tabs and etc.
2. Used css module to avoid name collision.
3. Used scss so that I can use variables.
4. Created components dir which contain all the App component, directly name are self explainaorty.
5. `constant` directory contains data and all the constant string (not done  yet)
6. `assests` directory contain all images and/or fonts needed or used in app.
7. `styles` directory contain all css vaiable declaration, used in app (still need to move all values in this dir).
8. `api` directory contain all the api calls made in this app.


Still need to write test.

