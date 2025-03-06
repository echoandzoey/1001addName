let img;
let canvas;
let textAdded = false;
let womenDayImage; // 用于存储 Women Day 背景图像的尺寸
let Ptextposition = 720;

function preload() {
  womenDayImage = loadImage('backgroundWomenDay.jpg'); // 预加载 Women Day 背景图像
  img = loadImage('backgroundNormal.jpg'); // 默认背景图像
}

function setup() {
  canvas = createCanvas(womenDayImage.width, womenDayImage.height); // 使用 Women Day 的尺寸
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
  image(img, 0, 0, width, height); // 使用画布的宽高绘制图像

  // 如果已经添加了文本，则绘制文本
  if (textAdded) {
    let name = document.getElementById('nameInput').value;
    let textYPosition = (Ptextposition / 1056) * height; // 计算 Y 位置
    textFont('DinkieBitmap'); // 确保使用正确的字体
    fill(78, 37, 93, 255); // 使用不透明的紫色
    textSize(100); // 增大字体大小
    text(name, width / 2, textYPosition); // 在指定位置绘制文本
  }
}

function changeBackground() {
  let selectedValue = document.getElementById('backgroundSelect').value;
  let newImagePath = selectedValue === 'normal' ? 'backgroundNormal.jpg' : 'backgroundWomenDay.jpg';

  loadImage(newImagePath, (loadedImage) => {
    img = loadedImage; // 更新图像
    img.resize(womenDayImage.width, womenDayImage.height); // 调整图像大小以匹配 Women Day 的尺寸
    clear(); // 清除画布
    image(img, 0, 0, width, height); // 绘制新背景

    // 根据选择的背景设置 Ptextposition
    if (selectedValue === 'normal') {
      Ptextposition = 720; // Normal 背景的文本位置
    } else if (selectedValue === 'womenday') {
      Ptextposition = 680; // Women Day 背景的文本位置
    }
  });
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
