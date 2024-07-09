describe('isWeekday', function() {
    it('should return true for Monday', function() {
        assert.isTrue(isWeekday('Monday'));
    });

    it('should return true for Friday', function() {
        assert.isTrue(isWeekday('Friday'));
    });

    it('should return false for Saturday', function() {
        assert.isFalse(isWeekday('Saturday'));
    });

    it('should return false for Sunday', function() {
        assert.isFalse(isWeekday('Sunday'));
    });
});