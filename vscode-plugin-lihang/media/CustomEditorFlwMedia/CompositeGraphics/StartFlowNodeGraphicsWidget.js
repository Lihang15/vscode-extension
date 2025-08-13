  // start节点图形
  class StartFlowNodeGraphicsWidget extends FlowNodeGraphicsWidget {
    constructor(nodeStyle) {
        super(nodeStyle)
        this.container = null
        this.rectbody = null
        this.circle = null
        this.nodeName = null
        this.inputXPos = 0
        this.isTopNode = false
        this.initGraphics()
    }
    initGraphics() {
        this.container = new PIXI.Container();
        this.rectbody = new RectBodyGraphicsWidget(this.nodeStyle)
        this.circle = new CircleGraphicsWidget(this.nodeStyle)
        this.circle.setPortId(-1)
        this.circle.setParentWidget(this)
    }
    setPos(x, y) {
        this.container.x = x
        this.container.y = y
    }
    setNodeName(nodeName) {
        this.nodeName = nodeName
    }
    getSize() {
        return {
            width: this.nodeStyle.rectWidth,
            height: this.nodeStyle.rectHeight + this.nodeStyle.circleRadius * 2
        }
    }
    getContainer() {
        return this.container
    }
    getOutputPort() {
        return this.circle
    }
    getInputXPos() {
        return this.inputXPos
    }

    // 多个小图叠加，排列小图形位置 组装成一个整体，
    updateLayout() {
        this.inputXPos = this.nodeStyle.rectWidth / 2
        this.rectbody.updateLayout()
        this.rectbody.setPos(
            0, 0
        )
        this.circle.setPos(
            this.nodeStyle.rectWidth / 2, this.nodeStyle.rectHeight + this.nodeStyle.circleRadius, this.nodeStyle.circleRadius
        )
        this.container.addChild(this.rectbody.getContainer())
        this.container.addChild(this.circle.circle)
    }
}