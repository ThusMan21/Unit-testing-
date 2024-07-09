describe('isFromBellville', function() {
    it('should confirm if a registration number is from Bellville', function() {
        assert.isTrue(isFromBellville('CY 123'));
        assert.isFalse(isFromBellville('CA 456'));
    });

    it('should handle empty string gracefully', function() {
        assert.isFalse(isFromBellville(''));
    });
});