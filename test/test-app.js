var expect = require('chai').expect;

var app = require('../app.js');

it('will return true when we call the poop() function', function() {

    expect( app._derekTest_.poop() ).to.equal( true );

});