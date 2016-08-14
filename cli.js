#!/usr/bin/env node
'use strict';
const meow = require('meow');
const githubUsername = require('github-username');

const cli = meow(`
	Usage
	  $ github-username <email> [--token=<token>]

	Example
	  $ github-username sindresorhus@gmail.com
	  sindresorhus
`);

const email = cli.input[0];

if (!email) {
	console.error('Specify an email');
	process.exit(1);
}

githubUsername(email, cli.flags.token).then(console.log);
