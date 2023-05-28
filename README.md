
# RedBird - A Twitter Clone [@demo](https://twitter)

RedBird is a Twitter Clone made using M.E.R.N. Stack.




 


## Features

- Light/dark mode toggle
- Live previews
- Fullscreen mode
- Cross platform
- Authentication Login, SignUp a user.
- Users can Send Post Text Message, Images.
- A Users can follow other User.
- A user can Comment, like it, Retweet on other users post,
- Profile photo upload supports.

## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


## How to Run this project Locally

### 1) Clone the project

```bash
  git clone https://github.com/NirmalKAhirwar/RedBird_twitter_clone
```

### 2) Create a .env File inside the backend folder.
You can get your values for the first three variables by creating account on https://console.cloudinary.com On the dashboard you'll see all three values.

MONGODB_URI would be the connecting URL link of your database(I have used MongoDB ATLAS)

And you can generate your JWT_SECRET from here: https://jwt.io/
```
CLOUD_NAME =
CLOUD_API_KEY =
CLOUD_API_SECRET =
MONGODB_URI =
JWT_SECRET =
```
### 3) Setup MongoDB 

- Create a account at MongoDB website.
- Create a Atlas Cloud MongoDB.
- Get the `connection url` string from there and update it into the .env file.
- MONGODB_URI = 'mongodb+srv://your-db-connection'

### 4) Run Backend

Type in the terminal/cmd following commands
```bash

    $ cd backend
    $ npm install
    $ nodemon server.js
```

### 5) Run Frontend

```bash
    # open new terminal

    $ cd frontend
    $ npm install
    $ npm start
```
app will be running at http://localhost:3000

## Authors

- [@nirmalkahirwar](https://www.github.com/nirmalkahirwar)
- [@naitik](https://www.github.com/nirmalkahirwar)
- [@rishu](https://www.github.com/nirmalkahirwar)
- [@praful](https://www.github.com/nirmalkahirwar)

## License

[MIT](https://choosealicense.com/licenses/mit/)

