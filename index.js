#!/usr/bin/env node

import init from "./setup.js";
import main from "./script.js"

const command = process.argv[2];

if (command === 'check') {
  main()
} else if (command === 'init') {
  init()
}