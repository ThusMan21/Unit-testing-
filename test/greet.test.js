

describe('greet', function() {
    it('should greet a person with their name', function() {
        assert.equal(greet('Bob'), 'Hello, Bob', 'this should not be true');
    });

    it('should greet a person with another name', function() {
        assert.equal(greet('Alice'), 'Hello, Alice', 'this should not be true');
    });

    it('should greet a person with the name Ofhani', function() {
        assert.equal(greet('Ofhani'), 'Hello, Ofhani', 'this should not be true');
    });
});