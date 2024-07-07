import {
  createCanvas,
  loadImage,
  CanvasRenderingContext2D,
  Image,
} from 'canvas';
import * as path from 'path';
import * as fs from 'fs';

interface LegofyOptions {
  quality: 'fast' | 'good' | 'best' | 'nearest' | 'bilinear';
  count: number;
  blendMode: GlobalCompositeOperation;
  pixelInterval?: number;
}

const filePath = path.resolve('./public/images/bricks/LEGO_gray_120x120.png');
const fileContents = fs.readFileSync(filePath);

const defaultOpts: LegofyOptions = {
  quality: 'good',
  count: 8,
  blendMode: 'hard-light',
};

const pixelIntervalPreset: Record<string, number> = {
  fast: 8,
  good: 5,
  best: 3,
  nearest: 2,
  bilinear: 1,
};

const makeGetAverageColor =
  (pixelInterval: number) => (data: Uint8ClampedArray) => {
    const rgb = [0, 0, 0, 0];

    for (let i = 0; i < data.length; i++) {
      if (i % (pixelInterval * 4) < 4) rgb[i % 4] += data[i];
    }
    return rgb.map((channel) =>
      Math.floor(channel / (data.length / pixelInterval / 4)),
    ) as [number, number, number];
  };

const makeRenderBrick =
  (
    brick: Image,
    getAverageColor: (data: Uint8ClampedArray) => [number, number, number],
    ctx: CanvasRenderingContext2D,
  ) =>
  (x: number, y: number) => {
    const { data } = ctx.getImageData(x, y, brick.width, brick.height);
    const color = getAverageColor(data);

    ctx.clearRect(x, y, brick.width, brick.height);
    ctx.drawImage(brick, x, y);
    ctx.fillStyle = formatColor(color);
    ctx.fillRect(x, y, brick.width, brick.height);
  };

const formatColor = ([r, g, b]: [number, number, number]) =>
  `rgba(${r},${g},${b}, 1)`;

const render = async (src: File, opts: LegofyOptions) => {
  const arrayBuffer = await src.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const image = await loadImage(buffer);
  const brick = await loadImage(fileContents);

  const aspectRatio = image.width / image.height;
  const outputXCount = Math.floor(aspectRatio * opts.count);
  const outputYCount = opts.count;
  const outputWidth = outputXCount * brick.width;
  const outputHeight = outputYCount * brick.height;

  const scaleX = outputWidth / image.width;
  const scaleY = outputHeight / image.height;
  const scale = Math.min(scaleX, scaleY);
  const scaledWidth = Math.floor(image.width * scale);
  const scaledHeight = Math.floor(image.height * scale);

  const canvas = createCanvas(outputWidth, outputHeight);
  const ctx = canvas.getContext('2d');

  const pixelInterval = opts.pixelInterval || pixelIntervalPreset[opts.quality];
  const getAverageColor = makeGetAverageColor(pixelInterval);
  const renderBrick = makeRenderBrick(brick, getAverageColor, ctx);

  ctx.patternQuality = opts.quality;
  // ctx.filter = opts.quality;

  ctx.globalCompositeOperation = opts.blendMode;
  ctx.drawImage(image, 0, 0, scaledWidth, scaledHeight);

  for (let x = 0; x < outputXCount; x++) {
    for (let y = 0; y < outputYCount; y++) {
      renderBrick(x * brick.width, y * brick.height);
    }
  }

  return canvas;
};

export default async function legofy(
  src: File,
  opts: LegofyOptions = defaultOpts,
) {
  const canvas = await render(src, opts);

  return canvas.toDataURL();
}
