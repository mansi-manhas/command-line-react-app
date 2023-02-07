#!/usr/bin/env node
const React = require('react');
const importJsx = require('import-jsx');
const {render} = require('ink');
const meow = require('meow');

const ui = importJsx('./ui');

const cli = meow(`
	Usage
	  $ command-line-app-crypto

	Options
		--name  Your name

	Examples
	  $ command-line-app-crypto --name=Jane
	  Hello, Jane
`);

render(React.createElement(ui, cli.flags));
