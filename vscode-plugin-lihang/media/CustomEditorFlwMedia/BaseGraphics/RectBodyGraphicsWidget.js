  // 长方形体
  class RectBodyGraphicsWidget extends FlowNodeGraphicsWidget {
    constructor(nodeStyle) {
        super(nodeStyle)
        this.container = null
        this.rect = null
        this.basicText = null
        this.basicTextRunTime = null
        this.isRunStatus = this.nodeStyle.isRunStatus
        this.runtime = this.nodeStyle.runtime
        this.initGraphics()
    }
    initGraphics() {
        this.container = new PIXI.Container();
        this.rect = new PIXI.Graphics()
        this.basicText = new TextGraphicsWidget(this.nodeStyle.rectText)
    }
    setPos(x, y) {
        this.container.x = x
        this.container.y = y
    }
    getSize() {
        return {
            width: this.nodeStyle.rectWidth,
            height: this.nodeStyle.rectHeight
        }
    }
    getContainer() {
        return this.container
    }
    getRectGraphics(){
        return this.rect
    }
    // 多个小图叠加，排列小图形位置 组装成一个整体，
    updateLayout(size) {
        this.rect.rect(0, 0, this.nodeStyle.rectWidth, this.nodeStyle.rectHeight)
        
        if(this.isRunStatus==='true'){
            this.rect.fill(0x00FF00)
            this.basicTextRunTime = new TextGraphicsWidget(this.runtime)
            this.basicTextRunTime.setPos(this.nodeStyle.rectWidth+10,0)
            this.container.addChild(this.basicTextRunTime.basicText)
        }else if(this.isRunStatus==='false'){
            this.rect.fill(0xFF0000)
            this.basicTextRunTime = new TextGraphicsWidget(this.runtime)
            this.basicTextRunTime.setPos(this.nodeStyle.rectWidth+10,0)
            this.container.addChild(this.basicTextRunTime.basicText) 
        }
            
            
        this.rect.fill(0x383838)
        this.rect.stroke({ width: this.nodeStyle.rectBorder, color: this.nodeStyle.rectBorderColor });
      
        this.basicText.setPos(
            this.nodeStyle.rectWidth / 2-16,
            5
        )
        // （右键插入节点会用，基于原内存重建）图形初始化尺寸变更，根据传入新尺寸，擦除重新绘制（flow和concurrent节点 递归重组数据时候，需要把矩形放大，原先布局的矩形擦除)
        if(size){
            const { width, height, fontX, fontY, isVisibleFont } = size
            this.rect.clear()
            this.rect.rect(0, 0, width, height)
            this.rect.fill(0x383838)
            this.rect.stroke({ width: this.nodeStyle.rectBorder, color: this.nodeStyle.rectBorderColor });
            this.basicText.setPos(
                fontX,
                fontY
            )
            if(isVisibleFont){
                this.basicText.basicText.visible = true
            }
        }

        this.container.addChild(this.rect)
        this.container.addChild(this.basicText.basicText)
    }
   
}