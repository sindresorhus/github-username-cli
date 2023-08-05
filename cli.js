#!/usr/bin/env node
import process from 'node:process';
import meow from 'meow';
import githubUsername from 'github-username';

const cli = meow(`
	Usage
	  $ github-username <email> [--token=<token>]

	Example
	  $ github-username sindresorhus@gmail.com
	  sindresorhus
`, {
	importMeta: import.meta,
});

const email = cli.input[0];
const {token} = cli.flags;

if (!email) {
	console.error('Specify an email');
	process.exit(1);
}

console.log(await githubUsername(email, {token}));
