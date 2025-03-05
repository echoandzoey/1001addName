let img;
let canvas;
let textAdded = false;
//
function preload() {
  img = loadImage('backgroundWomenDay.jpg'); // 确保在同一目录下有一张名为 background.jpg 的图片
}

function setup() {
  canvas = createCanvas(img.width, img.height);
  canvas.parent('canvas-container');
  imageMode(CORNER); // 为 CORNER 模式，以便在第二位
  textAlign(CENTER, TOP); // 更改水平和垂直对齐方式
  textSize(42);
  textFont('DinkieBitmap'); // 确保使用正确的字体
  fill(0); // 确保使用黑色
  noLoop(); // 停止 draw 循环，因为不需要每次都绘制
}

function draw() {
  // 清除屏幕
  clear();
  // 绘制背景图像
  image(img, 0, 0, img.width, img.height);

  // 如果已经添加了文本，则绘制文本
  if (textAdded) {
    let name = document.getElementById('nameInput').value;
    let textYPosition = (680 / 1056) * img.height; // 计算 Y 位置
    textFont('DinkieBitmap'); // 确保使用正确的字体
    fill(0, 0, 0, 230);
    textSize(100); // 增大字体大小
    text(name, width / 2, textYPosition); // 在指定位置绘制文本
  }
}

function addTextToImage() {
  let name = document.getElementById('nameInput').value;
  if (name) {
    textAdded = true;
    redraw(); // 重绘整个画布
    // 使用输入的名称替换空格为下划线
    let fileName = name.replace(/\s+/g, '_'); // 替换空格为下划线
    saveCanvas(canvas, fileName, 'jpg'); // 保存图像
  } else {
    alert('请输入名称');
  }
}
