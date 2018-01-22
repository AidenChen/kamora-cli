#!/usr/bin/env node

const program = require('commander')
const init = require('./lib/init')

program
  .version(require('./package').version)
  .command('init <name>')
  .action(init)

program.parse(process.argv)
