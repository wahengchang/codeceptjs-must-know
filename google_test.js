var assert = require('assert');

Feature('search');

Scenario('test something', function* (I) {
    console.log('1 ------------- ')
    I.amOnPage('/');

    console.log('2 ------------- ')
    I.seeInTitle('Google')

    console.log('3 ------------- ')
    // I.click('#tsf input[value=submit]')

    // const iconId = '#hplogo'


    var title = yield I.grabTitle();

    console.log('4 ------------- ')
    console.log('title: ', title)
    // assert.equal(title, 'CodeceptJS');
    
  });
