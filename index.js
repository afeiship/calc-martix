
/*
钻了关于CSS3 transform matrix(),transform的矩阵运算的牛角尖了
transform:matrix(a,b,c,d,e,f)
a , d 是scale的参数　　 scale(sx,sy)可以由matrix(sx,0,0,sy,0,0)运算而来
e , f 是translate的参数　 translate(tx,ty)可以由matrix(1,0,0,1,tx,ty)运算而来，
b , c 是skew的参数　　 skew(θx，θy)可以由matrix(1,tan(θy),tan(θx),1,0,0)运算而来
a, b, c, d 是rotate的参数 rotate(θ)可以有matrix(cosθ,sinθ,-sinθ,cosθ,0,0)运算而来

*/
module.exports = function(inMatrix){
  var wcMatrix = new WebKitCSSMatrix(inMatrix);
  return {
    scaleX:wcMatrix.m11,
    scaleY:wcMatrix.m22,
    scaleZ:wcMatrix.m33
  };
};
