var LayoutAlignment = require('./LayoutAlignment');

/**
 * HorizontalLayout - just set alignment to
 * LayoutAlignment.HORIZONTAL_ALIGNMENT
 *
 * @class HorizontalLayout
 * @extends PIXI_UI.LayoutAlignment
 * @memberof PIXI_UI
 * @constructor
 */
function HorizontalLayout() {
    LayoutAlignment.call(this);
    this.alignment = LayoutAlignment.HORIZONTAL_ALIGNMENT;
}

HorizontalLayout.prototype = Object.create( LayoutAlignment.prototype );
HorizontalLayout.prototype.constructor = HorizontalLayout;
module.exports = HorizontalLayout;
