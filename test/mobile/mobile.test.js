var getName = function(){
    return "张三"
};
describe("判断getName值是否符合条件！",function(){
    it("should return 张三",function(){
        getName().should.equal("张三")
    })
});