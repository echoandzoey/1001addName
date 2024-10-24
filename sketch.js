let img;
let canvas;
let textAdded = false;

function preload() {
  img = loadImage('background.jpg'); // 请确保在同一目录下有一个名为 background.jpg 的图片
}

function setup() {
  canvas = createCanvas(img.width, img.height);
  canvas.parent('canvas-container');
  imageMode(CORNER); // 改为 CORNER 模式，便于定位
  textAlign(CENTER, TOP); // 文本水平居中，垂直顶对齐
  textSize(32);
  textFont('Dinxie'); // 设置字体为 Dinxie
  fill(0); // 设置文字颜色为黑色
  noLoop(); // 停止 draw 循环，因为我们不需要持续绘制
}

function draw() {
  // 清除画布
  clear();
  // 绘制背景图片
  image(img, 0, 0, img.width, img.height);

  // 如果已经添加了文字，则绘制文字
  if (textAdded) {
    let name = document.getElementById('nameInput').value;
    let textYPosition = (740 / 1056) * img.height; // 计算文字的 Y 坐标
    text(name, width / 2, textYPosition); // 在计算的位置绘制文字
  }
}

function addTextToImage() {
  let name = document.getElementById('nameInput').value;
  if (name) {
    textAdded = true;
    redraw(); // 重新绘制画布
    // 使用输入的名字作为文件名，替换空格为下划线
    let fileName = name.replace(/\s+/g, '_'); // 替换空格为下划线
    saveCanvas(canvas, fileName, 'jpg'); // 保存图片
  } else {
    alert('请输入您的名字');
  }
}
