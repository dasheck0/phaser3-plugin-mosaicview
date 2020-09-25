import MosaicVieew from './MosaicView';

const GetValue = Phaser.Utils.Objects.GetValue;
const BuildGameObject = Phaser.GameObjects.BuildGameObject;

export default function (x, y, width, height, options) {
  const _x = x || 0;
  const _y = y || 0;
  const _width = width || 100;
  const _height = height || 100;

  const tileWidth = GetValue(options, 'tileWidth', 10);
  const tileHeight = GetValue(options, 'tileHeight', 10);

  const padding = GetValue(options, 'padding', 2);
  const startWithPadding = GetValue(options, 'startWithPadding', false);

  const rowCount = Math.ceil(_width / (tileWidth + padding));
  const columnCount = Math.ceil(_height / (tileHeight + padding));

  const color = GetValue(options, 'color', 0x0000ff);
  const backgroundColor = GetValue(options, 'backgroundColor', 0x00ff00);

  const minColorDeviation = GetValue(options, 'minColorDeviation', 0) * 25;
  const maxColorDeviation = Math.max(minColorDeviation, GetValue(options, 'maxColorDeviation', 0) * 25);

  const minAlpha = GetValue(options, 'minAlpha', 1);
  const maxAlpha = GetValue(options, 'maxAlpha', 1);

  const gameObject = new MosaicVieew(this.scene, _x, _y, _width, _height, {
    rowCount,
    columnCount,
    tileWidth,
    tileHeight,
    padding,
    color,
    backgroundColor,
    startWithPadding,
    minColorDeviation,
    maxColorDeviation,
    minAlpha,
    maxAlpha
  });

  BuildGameObject(this.scene, gameObject, Object.assign(options, {
    x: _x,
    y: _y,
    add: true
  }));

  return gameObject;
}
