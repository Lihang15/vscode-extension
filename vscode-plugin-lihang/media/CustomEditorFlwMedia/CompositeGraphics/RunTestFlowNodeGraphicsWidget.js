    //Run节点图形

    class RunTestFlowNodeGraphicsWidget extends FlowNodeGraphicsWidget {
        constructor(nodeStyle) {
            super(nodeStyle)
            this.nodeStyle = nodeStyle
            this.container = null
            this.rectbody = null
            this.circle = null
            this.inputLine = null
            this.nodeName = null
            this.type = null
            this.isBypass = null
            this.isPress = null
            this.bgcRect = null
            this.inputXPos = 0
            this.isTopNode = false
            this.parentWidget = null // 所在父图形的指针
            this.branchIdInParent = null // 如果所在的父图形有分支，记录所在分支id
            this.initGraphics()   
        }
        initGraphics() {
            this.container = new PIXI.Container();
            this.rectbody = new RectBodyGraphicsWidget(this.nodeStyle)
            this.circle = new CircleGraphicsWidget(this.nodeStyle)
            this.inputLine = new LineGraphicsWidget(this.nodeStyle)
            this.bgcRect = new PIXI.Graphics()
            this.isBypass = new PIXI.Graphics()
            this.circle.setPortId(-1)
            this.circle.setParentWidget(this)
            this.rect = this.rectbody.getRectGraphics()
            this.rect.eventMode = 'static'
            this.rect.on('click', ()=>{
                handleSelectedBgcWidget(this)
            })
        }
        setPos(x, y) {
            this.container.x = x
            this.container.y = y
        }
        getSize() {
            return {
                width: this.nodeStyle.rectWidth + this.nodeStyle.rectPadding * 2,
                height: this.nodeStyle.rectHeight + this.nodeStyle.rectPadding * 2
            }
        }
        getModel(){
            return {type:this.nodeStyle.type,text:this.nodeStyle.rectText}
        }
        setBypass(isBypass){
            if(isBypass){
                this.isBypass.clear()
                this.isBypass.rect(9, 9, this.nodeStyle.rectWidth+3, this.nodeStyle.rectHeight+3)
                this.isBypass.fill(0xFF0000)
               
            }else{
                this.isBypass.clear()
            }
        }
        setSelectedBgc(isPress){
            // console.log('click');
            this.isPress = isPress
            this.updateBgcColor()
        }
        updateBgcColor(){
            if(this.isPress){
                this.bgcRect.clear()
                const { width, height } = this.getSize()
                this.bgcRect.rect(0, 0, width, height)
                this.bgcRect.fill(0x406f8e)
               
            }else{
                this.bgcRect.clear()
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
            this.rectbody.updateLayout()
            this.rectbody.setPos(
                this.nodeStyle.rectPadding, this.nodeStyle.rectPadding
            )

            this.inputLine.setPos(this.nodeStyle.rectWidth / 2 + this.nodeStyle.rectPadding, 0, this.nodeStyle.rectWidth / 2 + this.nodeStyle.rectPadding, this.nodeStyle.inputLineHeight)
            this.circle.setPos(
                this.nodeStyle.rectWidth / 2 + this.nodeStyle.rectPadding, this.nodeStyle.rectHeight + this.nodeStyle.rectPadding + this.nodeStyle.circleRadius,
            )
            // 设置输入位置x坐标
            this.inputXPos = this.nodeStyle.rectWidth / 2 + this.nodeStyle.rectPadding
            this.container.addChild(this.bgcRect)
            this.container.addChild(this.isBypass)
            this.container.addChild(this.rectbody.getContainer())
            this.container.addChild(this.circle.circle)
            this.container.addChild(this.inputLine.line)
            
        }
    }