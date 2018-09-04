jest.autoMockOff();
const defineTest = require('jscodeshift/dist/testUtils').defineTest;

defineTest(__dirname, 'demo-8-transform');
