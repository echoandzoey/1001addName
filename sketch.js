let img;
let canvas;
let textAdded = false;

function preload() {
  img = loadImage('background.jpg'); // ��ȷ����ͬһĿ¼����һ����Ϊ background.jpg ��ͼƬ
}

function setup() {
  canvas = createCanvas(img.width, img.height);
  canvas.parent('canvas-container');
  imageMode(CORNER); // ��Ϊ CORNER ģʽ�����ڶ�λ
  textAlign(CENTER, TOP); // �ı�ˮƽ���У���ֱ������
  textSize(32);
  textFont('Dinxie'); // ��������Ϊ Dinxie
  fill(0); // ����������ɫΪ��ɫ
  noLoop(); // ֹͣ draw ѭ������Ϊ���ǲ���Ҫ��������
}

function draw() {
  // �������
  clear();
  // ���Ʊ���ͼƬ
  image(img, 0, 0, img.width, img.height);

  // ����Ѿ���������֣����������
  if (textAdded) {
    let name = document.getElementById('nameInput').value;
    let textYPosition = (740 / 1056) * img.height; // �������ֵ� Y ����
    text(name, width / 2, textYPosition); // �ڼ����λ�û�������
  }
}

function addTextToImage() {
  let name = document.getElementById('nameInput').value;
  if (name) {
    textAdded = true;
    redraw(); // ���»��ƻ���
    // ʹ�������������Ϊ�ļ������滻�ո�Ϊ�»���
    let fileName = name.replace(/\s+/g, '_'); // �滻�ո�Ϊ�»���
    saveCanvas(canvas, fileName, 'jpg'); // ����ͼƬ
  } else {
    alert('��������������');
  }
}
