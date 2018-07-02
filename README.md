[![Build Status](https://travis-ci.org/gerisztein/plp-poc.svg?branch=master)](https://travis-ci.org/gerisztein/plp-poc)
[![Live Demo](https://img.shields.io/website-up-down-green-red/http/shields.io.svg?label=live-demo)](https://gerisztein.github.io/plp-poc)
![license](https://img.shields.io/github/license/mashape/apistatus.svg)


# plp-poc
Product Listing Page

## TL;DR

You can run the project locally by typing

```shell
$ yarn install
$ yarn serve
```

or access the [live demo](https://gerisztein.github.io/plp-poc/).

## Description

A *proof of concept* of a **PDP** (Product Listing Page) for an e-commerce website using basic **filters** and **sorting**.

The results can be sorted by **Rating**, **Name** (ascending and descending) and **Price** (also ascending and descending) and filtered by **Brand**, **Size** and **Type**.

This project was made using mock data, so the filtering and sorting are using those data instead of making a new request. That's why also there's no pagination so far.

## Installation

Clone the repository

```shell
$ git clone git@github.com:gerisztein/plp-poc.git
```

Install all the dependencies

```shell
$ yarn install
```

Serve

```shell
$ yarn serve
```

Access the URL provided in the terminal, usually it is:  [http://localhost:8080](http://localhost:8080)

## Tech Stack

- [Vue](https://www.vuejs.org/) - Javascript framework
- [Vue Router](https://router.vuejs.org/) - Router
- [Vuex](https://vuex.vuejs.org/) - State management tool
- [Pug](https://pugjs.org/) - Template engine
- [Stylus](http://stylus-lang.com/) - CSS Preprocessor
- [TravisCI](https://travis-ci.org/) - Continuous integration
- [Yarn](https://yarnpkg.com/) - Package manager
- [Husky](https://github.com/typicode/husky) and [Commitlint](https://github.com/marionebl/commitlint) - Git hooks and commit linter

## License

MIT License