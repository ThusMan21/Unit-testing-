describe('countAllPaarl', function() {
    it('should count registration numbers from Paarl', function() {
        assert.strictEqual(countAllPaarl('CA 123, CJ 456, CY 789, CJ 321'), 2);
    });

    it('should handle no Paarl registration numbers gracefully', function() {
        assert.strictEqual(countAllPaarl('CA 123, CY 789'), 0);
    });

    it('should handle empty string gracefully', function() {
        assert.strictEqual(countAllPaarl(''), 0);
    });
});