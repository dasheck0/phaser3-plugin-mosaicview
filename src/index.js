import Creator from './Creator';

export default class MosaicViewPlugin extends Phaser.Plugins.BasePlugin {
    constructor(pluginManager) {
        super(pluginManager);
        pluginManager.registerGameObject('mosaicView', Creator);
    }
}
