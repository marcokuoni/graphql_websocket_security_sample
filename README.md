# GraphQL Websocket Concrete5 Security Sample Composer Package
The idea of this repo is to show how to use the [GraphQL and Websockets Security Composer Package](https://github.com/lemonbrain-mk/graphql_websocket_security) in Concrete5.

Use this package just as a composer Concrete5 package, cause of the composer requirings

We build a C5 Version with Siler GraphQL, Apollo V2, React and Material UI. checkout the showdown here [concrete5.lemonbrain.ch](https://concrete5.lemonbrain.ch/index.php/person#/)

This package is based on two other [GraphQL/Websockets](https://github.com/lemonbrain-mk/graphql_websocket), [GraphQL/Websockets security](https://github.com/lemonbrain-mk/graphql_websocket_security) and the documentation for it are here [GraphQL/Websockets Wiki](https://github.com/lemonbrain-mk/graphql_websocket/wiki), [GraphQL/Websockets Security Wiki](https://github.com/lemonbrain-mk/graphql_websocket_security/wiki).

This project is a concrete5 package that is powered entirely by [composer](https://getcomposer.org).

To install this package on a [composer based concrete5](https://github.com/concrete5/composer) site, make sure you already have `composer/installers` then run:

```sh
$ composer require lemonbrain/concrete5_graphql_websocket_security_sample
```

Then install npm requirements

```sh
$ cd ./public/packages/concrete5_graphql_websocket_security_sample
$ npm install
$ npx webpack --watch
```

Then install the package on Concrete5

```sh
$ ./vendor/bin/concrete5 c5:package-install concrete5_graphql_websocket_security_sample
```