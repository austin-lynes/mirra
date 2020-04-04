[![Codacy Badge](https://api.codacy.com/project/badge/Grade/9b32867da789402591dfe2cff00f6009)](https://www.codacy.com/gh/austin-lynes/mirra?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=austin-lynes/mirra&amp;utm_campaign=Badge_Grade)
[![Codacy Badge](https://api.codacy.com/project/badge/Coverage/9b32867da789402591dfe2cff00f6009)](https://www.codacy.com/gh/austin-lynes/mirra?utm_source=github.com&utm_medium=referral&utm_content=austin-lynes/mirra&utm_campaign=Badge_Coverage)

![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg)

# Mirra

You can find the deployed project at [Heroku]().

## Contributors

## Austin Lynes
[<img src="https://ca.slack-edge.com/T4JUEB3ME-UF3B2ME82-505b9a4c929c-512" width = "150" />](https://github.com/AustinLynes)       


## Project Overview

[Trello Board]()

[Product Canvas]()

[UX Design files]()

### pitch

### Key Features



## Tech Stack

#### [Front end]() built using:


#### [Back end]() built using:

#### Nodejs/express

- Simplified HTTP server
- Pure Javascript
- NPM access
- Middleware

#### bcryptjs

- One way hashing
- Salting
- Random salt for each request

#### jsonwebtoken

- Authentication
- Authorization
- Validation

#### knex

- SQL queries in JS
- Database migrations and seeding
- Database control

#### postgres

- Relational data management
- Data integrity

# APIs


# Environment Variables

In order for the app to function correctly, the user must set up their own environment variables. There should be a env file containing the following:

       BACKEND_URL: 'Enter URL to server'

# Content Licenses

| Image Filename | Source / Creator | License |
| -------------- | ---------------- | ------- |


# Testing

Jest

# Installation Instructions

1.  Clone this repository to your local machine

        git clone https://github.com/austin-lynes/mirra.git

2.  Once downloaded, enter the project directory
3.  With your package manager of choice, install the dependencies

    - `yarn install` or `npm install`

4.  Start the client
    - `yarn dev` or `npm run dev`

## Other Scripts

    * dev - creates a dev build of the application (refreshes upon update)
    * build - builds the application
    * start - starts an instance of the application
    * cypress - initializes the cypress testing suite

# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./CODE_OF_CONDUCT.md). Please follow it in all your interactions with the project.

## Issue/Bug Request

**If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

- Check first to see if your issue has already been reported.
- Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
- Create a live example of the problem.
- Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See [Backend Documentation](https://github.com/austin-lynes/mirra-api) for details on the backend of our project.
