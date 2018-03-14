let calcu = require('./a');
let should = require("should");
let fs = require("fs");

// describe 表示测试套件，是一序列相关程序的测试
// it表示单元测试(unit test)，也就是测试的最小单位。
describe("add func test", () => {
    it('2 add 2 should equal 4', () => {
        calcu.add(2, 2).should.equal(4)
    })
    it('203 add 2 should equal 205', () => {
        calcu.add(203, 2).should.equal(205)
    })

    it("1 add 1 not should equal 3", () => {
        calcu.add(1, 1).should.not.equal(3);
    })
    it("1 add 1 not should equal 2", () => {
        calcu.add(1, 1).should.not.equal(2);
    })
})

describe("测试add func test", () => {
    it('2 add 2 should equal 4', () => {
        calcu.add(2, 2).should.equal(4)
    })
    it('203 add 2 should equal 205', () => {
        calcu.add(203, 2).should.equal(205)
    })

    it("1 add 1 not should equal 3", () => {
        calcu.add(1, 1).should.not.equal(3);
    })
    it("1 add 1 not should equal 3", () => {
        calcu.add(1, 1).should.not.equal(3);
    })
})

describe('#indexOf()', function () {
    it('should return -1 when not present', function () {
        [1, 2, 3].indexOf(4).should.equal(-1);
    });
    it('should return index when present', function () {
        [1, 2, 3].indexOf(1).should.equal(0);[1, 2, 3].indexOf(2).should.equal(1);[1, 2, 3].indexOf(3).should.equal(2);
    });
});

it('fs.readFile should be ok', function (done) {
    fs.readFile('file_path', 'utf-8', function (err, data) {
        should.not.exist(err);
        done();
    });
});