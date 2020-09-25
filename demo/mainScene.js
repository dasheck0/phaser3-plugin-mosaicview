import Phaser from 'phaser';

export default class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'main' });
  }

  preload() {
  }

  create() {
    this.cameras.main.setBackgroundColor(0x93baec);
    const margin = 50;

    const mosaicView = this.add.mosaicView(0 + margin, 0 + margin, 1024 / 2 - margin / 2, 768 / 2 - margin / 2, {
      tileWidth: 10,
      tileHeight: 10,
      padding: 1,
      startWithPadding: true,
      backgroundColor: 0x000000,
      color: 0xec844e,
      minColorDeviation: 0.1,
      maxColorDeviation: 0.2,
      minAlpha: 0.8
    });

    const mosaicView2 = this.add.mosaicView(1024 / 2 + margin / 2, 0 + margin, 1024 - margin, 768 / 2 - margin / 2, {
      tileWidth: 5,
      tileHeight: 5,
      padding: 1,
      backgroundColor: 0xffffff,
      color: 0xb5bb00,
      minColorDeviation: 0.1,
      maxColorDeviation: 0.2,
      minAlpha: 0.8
    });

    const mosaicView3 = this.add.mosaicView(0 + margin, 768 / 2 + margin / 2, 1024 / 2 - margin / 2, 768 - margin, {
      tileWidth: 5,
      tileHeight: 5,
      padding: 1,
      backgroundColor: 0x000000,
      color: 0x14cf14,
      minColorDeviation: 0.1,
      maxColorDeviation: 0.2,
      minAlpha: 0.5
    });

    const mosaicView4 = this.add.mosaicView(1024 / 2+margin/2, 768 / 2+margin/2, 1024-margin, 768-margin, {
      tileWidth: 20,
      tileHeight: 20,
      padding: 4,
      backgroundColor: 0x000088,
      color: 0x4363d2,
      startWithPadding: true,
      minColorDeviation: 0.5,
      maxColorDeviation: 1,
    });
  }
}
