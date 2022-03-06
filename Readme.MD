# TRACKTIK ASSIGNMENT 



# NOTE:

1. Please find the test scenarios covered by automation in a file named "Test Scenarios" which is placed in the root of this REPO

2. To run the tests, you need to create a cypress.env.json file and specify the login credentials in the below format:

Example:

{
    "user": "abc",
    "email": "test@gmail.com",
    "pwd": "test123"
}


##  Scripts

In the project directory, you can run:

### `npm install`

installs the dev dependencies

### `npm run test_ca`

script to run the tests for canada account with default config file

### `npm run test_us`

script to run the tests for USA account with cypress_us.json config file


## Build a custom docker image

### `docker build -t test-image .`

Above command will build the image with the image name specified.

Now, use the below command to run the docker image

### `docker run -t test-image .`


