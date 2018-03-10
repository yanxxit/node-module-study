describe('#indexOf()', function () {
    it('should return -1 when not present', function () {
        [1, 2, 3].indexOf(4).should.equal(-1);
    });
    it('should return index when present', function () {
        [1, 2, 3].indexOf(1).should.equal(0);[1, 2, 3].indexOf(2).should.equal(1);[1, 2, 3].indexOf(3).should.equal(2);
    });
});
