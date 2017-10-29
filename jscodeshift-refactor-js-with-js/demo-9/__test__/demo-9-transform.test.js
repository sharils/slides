jest.autoMockOff();
const defineTest = require('jscodeshift/dist/testUtils').defineTest;
const defineInlineTest = require('jscodeshift/dist/testUtils').defineInlineTest;
const transform = require('../demo-9-transform');

defineTest(__dirname, 'demo-9-transform');
