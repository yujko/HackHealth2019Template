# HackHealth 2019 Web Template

This project aims at demonstrating how to utilize the existing material web
components packages based on the material design guidelines.

## Goal

Mock a health plan recommendation system to demonstrate how to
structure an app with material design and provide a novel input.
It is a **mobile-first** design.


## Build Environment

npm 6.8.0


## Installation

    git clone https://github.com/yujko/hh2019ui.git
    cd hh2019ui/static
    npm install

## Usage

### static development

    git fetch && git checkout master
    npm start

### workshop

    git fetch && git checkout plain
    npm start


### server

Expect to be Flask based server. TBD.


## Structures

    server/                  # Should be a directory host Flask
    static/                  # Static webpages and style, could be used as
                             # server templates
        images/              # store static images
        _variables.scss      # store variable for all pre processing scss files
        _common.scss         # store imported packages from material web
                             # component

        calculator.html      # login-panel like interface
        calculator.scss      # css preprocessing scripts, used to add material
                             # design style
        calculator.js        # add material design
        result.*             # listing results

        webpack.config.js    # state how webpack should work

        package.json         # store npm managed packages



## Branches

+ `plain`  - baseline interface for the workshop demonstration
+ `master` - results of the workshop, could be treated as template for hackathon


## References

+ [App Structure](https://codeburst.io/creating-a-full-stack-web-application-with-python-npm-webpack-and-react-8925800503d9)
+ [Simulating Mobile Devices](https://developers.google.com/web/tools/chrome-devtools/device-mode/)
+ [MDC Codelab](https://codelabs.developers.google.com/codelabs/mdc-101-web/)
+ [MLH Flask Starter](https://github.com/MLH/mlh-hackathon-flask-starter)
+ [Workshop Slides](https://drive.google.com/file/d/1MtNUw-H6J4BFdqQ2x5Ketwc6ECD0GDA1/view?usp=sharing)
