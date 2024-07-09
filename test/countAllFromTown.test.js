describe('countAllFromTown', function() {
    it('should count registration numbers from a specific town', function() {
        assert.strictEqual(countAllFromTown('CL 123, CJ 456, CY 789, CJ 321', 'CJ'), 2);
    });

    it('should handle no matching town registration numbers gracefully', function() {
        assert.strictEqual(countAllFromTown('CA 123, CY 789', 'CJ'), 0);
    });

    it('should handle empty string gracefully', function() {
        assert.strictEqual(countAllFromTown('', 'CJ'), 0);
    });
});