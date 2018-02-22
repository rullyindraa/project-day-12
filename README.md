# About Project-day-12

This project created a landing page using HTML, Javascript, Tailwind CSS and Express.js as server. This landing page calculate even fibbonaci numbers and largest prime factors from number that inputed.

## Directory Structure 
- docs contains documentation about the program when executed.
- myapp contains server of the programs using Express.js.
    - app.js
    - bin
    - public
        - javascripts
            - fibo.js
            - largestPrime.js
        - stylesheets
            - style.css
    - routes
        - index.js
        - users.js
    - views
        - error.pug
        - index.pug
        - index2.pug
        - layout.pug
- src contains source javascript functions.
    - fibo.js
    - largestPrime.js
- templates contains html templates.
    - landingpage-tailwind.html
    - prime-tailwind.html

## How to Run the Program

1. Clone the repository.
2. Change directory to project.
3. Run `npm install express --save`
4. Run `node app.js`
5. Run `DEBUG=myapp:* npm start`
5. Run open http://localhost:3000
