Organic is a grocery SPA site. Where you can order fresh products for every taste.
The project consists of server and client parts.
The server part was built on the following technologies: Node.js, Express, Mongoose.
Database - MongoDB.
For the client side, I used the following technology stack: React, Redux Toolkit, Axios, Sass.

========================= To run the application you need: ====================
Connect DB

1. Go to the MongoDB website and create a classter there.
2. After create user. The default login is admin, and specify the password yourself.
3. Back up your IP address by clicking on the button below.
4. Press the button "Browse Collections" and press "Create Database".
5. Database name "organic" and collection name - "products".
6. Then go to the folder with the project and copy the contents in the file "products.json".
7. Go to our collection of "products" and click on the "Insert Document" button and paste all the products there.
8. Then press the "Connect" button and after press "Connect your application".
9. Сopy the link and go to the server folder in our project.
10. In the "server" folder and the "index.js" file on the 7th line we are looking for a "mongoose.connect" and replace the line with yours.
11. She'll be something like this 'mongodb+srv://<login>:<password>@cluster0.estzqnq.mongodb.net/?retryWrites=true&w=majority'
12. Change the login and password to the one you did during registration and add the name of our database "organic".
13. The link should look like this 'mongodb+srv://admin:1q2w3e@cluster0.estzqnq.mongodb.net/organic?retryWrites=true&w=majority'

Server

1. Open a terminal in the server folder. You can also go there with the "cd server" command.
2. Enter the command "npm i".
3. After loading the data, enter the command "npm start".
4. Should be displayed in the console "Server ok" and "DB ok"

Client

1. Open the terminal and do the same in the client folder.
2. when you are in the client folder, enter the command "npm i".
3. And after loading - "npm start"

After that the application should work!