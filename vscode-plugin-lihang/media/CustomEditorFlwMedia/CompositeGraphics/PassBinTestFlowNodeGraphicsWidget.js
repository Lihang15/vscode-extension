   //Pass Bin节点图形
   class PassBinTestFlowNodeGraphicsWidget extends FlowNodeGraphicsWidget {
    constructor(nodeStyle) {
        super(nodeStyle)
        this.nodeStyle = nodeStyle
        this.container = null
        this.circle = null
        this.inputLine = null
        this.nodeName = null
        this.type = null
        this.triangle = null
        this.inputXPos = 0
        this.isTopNode = false
        this.parentWidget = null // 所在父图形的指针
        this.branchIdInParent = null
        this.initGraphics()
    }
    initGraphics() {
        this.container = new PIXI.Container();
        this.circle = new CircleGraphicsWidget(this.nodeStyle)
        this.inputLine = new LineGraphicsWidget(this.nodeStyle)
        this.basicText = new TextGraphicsWidget(this.nodeStyle.triangleText)
        this.triangle = new PIXI.Graphics();
        this.circle.setPortId(-1)
        this.circle.setParentWidget(this)
    }
    setPos(x, y) {
        this.container.x = x
        this.container.y = y
    }
    getSize() {
        return {
            width: this.nodeStyle.rectWidth + this.nodeStyle.rectPadding * 2,
            height: this.nodeStyle.rectHeight + this.nodeStyle.rectPadding * 2+25
        }
    }
    getModel(){
        return {type:this.nodeStyle.type,text:this.nodeStyle.rectText}
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
    setNodeName(nodeName) {
        this.nodeName = nodeName
    }
    setNodeType(type){
        this.type = type
    }
    getParentWidget(){
        return this.parentWidget
    }
    setParentWidget(parentWidget){
        this.parentWidget = parentWidget
    }
    setBranchIdInParent(branchIdInParent){
        this.branchIdInParent = branchIdInParent
    }
    getBranchIdInParent(){
         return this.branchIdInParent
    }
    clearAllGraphics(){
        this.container.removeChildren();
   }
    // 多个小图叠加，排列小图形位置 组装成一个整体，
    updateLayout() {
     
        this.inputLine.setPos(this.nodeStyle.rectWidth / 2 + this.nodeStyle.rectPadding, 0, this.nodeStyle.rectWidth / 2 + this.nodeStyle.rectPadding, this.nodeStyle.inputLineHeight)
        this.circle.setPos(
            this.nodeStyle.rectWidth / 2 + this.nodeStyle.rectPadding, this.nodeStyle.rectHeight + this.nodeStyle.rectPadding + this.nodeStyle.circleRadius+25,
        )
        this.basicText.setPos(
            this.nodeStyle.rectWidth / 3+15,
            this.nodeStyle.rectHeight / 4+30
        )
        this.triangle.moveTo(59, 10);
        this.triangle.lineTo(95, 65);
        this.triangle.lineTo(25, 65);
        this.triangle.lineTo(59, 10);
        this.triangle.fill(0xff3300);
        this.triangle.stroke({ width: this.nodeStyle.lineWidth, color: this.nodeStyle.lineColor })
        // 设置输入位置x坐标
        this.inputXPos = this.nodeStyle.rectWidth / 2 + this.nodeStyle.rectPadding
        this.container.addChild(this.circle.circle)
        this.container.addChild(this.inputLine.line)
        this.container.addChild(this.triangle)
        this.container.addChild(this.basicText.basicText)
    }
}