// 生成 0 - max 的随机数
const randomNum = (max) => {
    var r = Math.random() * max;
    var re = Math.round(r);
    re = Math.max(Math.min(re, max), 0);
    return re;
};

module.exports = {
    randomNum,
};