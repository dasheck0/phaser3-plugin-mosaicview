export default class MosaivView extends Phaser.GameObjects.Graphics {
    constructor(scene, x, y, width, height, options = {}) {
        super(scene);

        this.setPosition(x, y);
        this.width = width;
        this.height = height;

        this.rowCount = options.rowCount;
        this.columnCount = options.columnCount;

        this.tileWidth = options.tileWidth;
        this.tileHeight = options.tileHeight;

        this.padding = options.padding;
        this.startWithPadding = options.startWithPadding;

        this.color = options.color;
        this.backgroundColor = options.backgroundColor;
        this.minColorDeviation = options.minColorDeviation;
        this.maxColorDeviation = options.maxColorDeviation;
        this.minAlpha = options.minAlpha;
        this.maxAlpha = options.maxAlpha;

        scene.add.existing(this);

        this._drawMosaicView();

        const maskShape = scene.make.graphics();

        maskShape.fillStyle(0xffffff);
        maskShape.beginPath();
        maskShape.fillRect(0, 0, this.width, this.height);

        const mask = maskShape.createGeometryMask();
        this.setMask(mask);
    }

    destroy() {
        super.destroy();
    }

    _drawMosaicView() {
        this.clear();

        this.fillStyle(this.backgroundColor, 1);
        this.fillRect(0, 0, this.width, this.height);

        this.fillStyle(this.color, 1);

        for (let x = 0; x < this.rowCount; x++) {
            for (let y = 0; y < this.columnCount; y++) {
                if (this.minColorDeviation > 0 || this.maxColorDeviation > 0) {
                    const newColor = Phaser.Math.FloatBetween(0, 1) < 0.5 ? this._getRandomTintColor(this.color, this.minColorDeviation, this.maxColorDeviation) : this._getRandomShadeColor(this.color, this.minColorDeviation, this.maxColorDeviation);
                    this.fillStyle(this._getRandomTintColor(newColor, 0, 20), Phaser.Math.FloatBetween(this.minAlpha, this.maxAlpha));
                }

                this.fillRect(
                    x * (this.tileWidth + (this.padding)) + (this.startWithPadding ? this.padding : 0),
                    y * (this.tileHeight + (this.padding)) + (this.startWithPadding ? this.padding : 0),
                    this.tileWidth,
                    this.tileHeight);
            }
        }
    }

    _getRandomShadeColor(color, min, max) {
        const newColor = Phaser.Display.Color.ValueToColor(color);
        newColor.darken(Phaser.Math.Between(min, max));
        return Phaser.Display.Color.GetColor(newColor.red, newColor.green, newColor.blue);
    }

    _getRandomTintColor(color, min, max) {
        const newColor = Phaser.Display.Color.ValueToColor(color);
        newColor.lighten(Phaser.Math.Between(min, max));
        return Phaser.Display.Color.GetColor(newColor.red, newColor.green, newColor.blue);
    }
}
