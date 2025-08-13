 //线
 class LineGraphicsWidget extends FlowNodeGraphicsWidget {
    constructor(nodeStyle) {
        super(nodeStyle)
        this.line = null
        this.startY = 0
        this.endY = 0
        this.initGraphics()
    }
    initGraphics() {
        this.line = new PIXI.Graphics();
    }
    setPos(startX, startY, endX, endY) {
        this.line.moveTo(startX, startY);
        this.line.lineTo(endX, endY);
        this.line.stroke({ width: this.nodeStyle.lineWidth, color: this.nodeStyle.lineColor })
        this.startY = startY
        this.endY = endY
    }
    // （右键插入节点会用，基于原内存重建）基本图形初始化尺寸变更，根据传入新尺寸，擦除重新绘制（runBranch 递归重组数据时候，需要把之前的线擦掉）
    clearAndRedraw(startX, startY, endX, endY){
        this.line.clear()
        this.line.moveTo(startX, startY);
        this.line.lineTo(endX, endY);
        this.line.stroke({ width: this.nodeStyle.lineWidth, color: this.nodeStyle.lineColor })
        this.startY = startY
        this.endY = endY
    }
    getSize() {
        return {
            height: this.endY - this.startY
        }
    }
}