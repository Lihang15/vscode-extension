  //RunBranch节点图形
  class RunAndBranchTestFlowNodeGraphicsWidget extends FlowNodeGraphicsWidget {
    constructor(nodeStyle) {
        super(nodeStyle)
        this.container = null
        this.rectbody = null
        this.circle = null //输出端口小圆
        this.inputLine = null
        this.isPress = null
        this.nodeName = null
        this.bgcRect = null
        this.type = null
        this.parentWidget = null // 所在父图形的指针
        this.branchIdInParent = null
        this.isTopNode = false
        this.branchs_model = [
            {
                branch: 'Pass',
                nodes: [

                ]
            },
            {
                branch: 'Fail',
                nodes: [

                ]
            }
        ]
        this.branchs = [
            {
                //p分支端口图
                portWidget: null,
                // 端口文字图
                portTextItem: null,
                // 端口上面线图 p不会被赋值
                topVLineItem: null,
                // 端口下线图元
                bottomVLineItem: null,
                //p端口下有多少节点
                // 因为不知道子节点所占的大小，必须要先计算子节点大小，需要通过递归确认图元关系 子图如果也有有分支的必须作为一个整体放入
                branchNodes: [
                ]
            },
            {
                //f分支端口图
                portWidget: null,
                // 端口文字图
                portTextItem: null,
                // 端口上面线图 p不会被赋值
                topVLineItem: null,
                // 端口下线图元
                bottomVLineItem: null,
                //f端口下有多少节点
                // 因为不知道子节点所占的大小，必须要先计算子节点大小，需要通过递归确认图元关系 子图如果也有有分支的必须作为一个整体放入
                branchNodes: []
            }
        ]
        this.outputLine = null
        this.rightTopHBranchLine = null;
        this.rightBottomHBranchLine = null;
        this.branchPortCount = 2
        this.inputXPos = 0
        this.width = 0
        this.height = 0
        this.initGraphics()
    }
    initGraphics() {
        this.container = new PIXI.Container();
        this.rectbody = new RectBodyGraphicsWidget(this.nodeStyle)
        this.circle = new CircleGraphicsWidget(this.nodeStyle)
        this.bgcRect = new PIXI.Graphics()
        this.circle.setPortId(-1)
        this.circle.setParentWidget(this)
        this.inputLine = new LineGraphicsWidget(this.nodeStyle)
        for (let i = 0; i < this.branchPortCount; i++) {
            const portWidget = new CircleGraphicsWidget(this.nodeStyle)
            portWidget.setPortId(i)
            portWidget.setParentWidget(this)
            this.branchs[i].portWidget = portWidget
            this.branchs[i].portTextItem = new TextGraphicsWidget(i === 0 ? 'P' : 'F')
            // f端口
            if (i === 1) {
                this.branchs[i].topVLineItem = new LineGraphicsWidget(this.nodeStyle)
            }
            this.branchs[i].bottomVLineItem = new LineGraphicsWidget(this.nodeStyle)
        }
        this.outputLine = new LineGraphicsWidget(this.nodeStyle)
        this.rightTopHBranchLine = new LineGraphicsWidget(this.nodeStyle)
        this.rightBottomHBranchLine = new LineGraphicsWidget(this.nodeStyle)
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
    insertNodeToBranch(dstBranchId, dstIndexInBranch, nodeWidget) {
        if(dstIndexInBranch || dstIndexInBranch===0){
            // console.log('haha',this.branchs[dstBranchId].branchNodes);
            this.branchs[dstBranchId].branchNodes.splice(dstIndexInBranch+1, 0, nodeWidget)
            nodeWidget.setParentWidget(this)
            nodeWidget.setBranchIdInParent(dstBranchId)
            this.branchs_model[dstBranchId].nodes.splice(dstIndexInBranch+1, 0, nodeWidget.getModel())
           
        }else{
            this.branchs[dstBranchId].branchNodes.splice(this.branchs[dstBranchId].branchNodes.length+1, 0, nodeWidget)
            nodeWidget.setParentWidget(this)
            nodeWidget.setBranchIdInParent(dstBranchId)
            this.branchs_model[dstBranchId].nodes.splice(this.branchs_model[dstBranchId].nodes.length+1, 0, nodeWidget.getModel())
        }
        nodeWidget.updateLayout();
    }
    nodeIndexInBranch(dstBranchId, nodeWidget){
        return this.branchs[dstBranchId].branchNodes.indexOf(nodeWidget)
    }
    getSize() {
        return {
            width: this.width+this.nodeStyle.rectPadding+70,
            height: this.height
        }
    }
    getModel(){
        return {type:this.nodeStyle.type,text:this.nodeStyle.rectText,Branchs:this.branchs_model}
    }
    getContainer() {
        return this.container
    }
    getOutputPort() {
        return this.circle
    }
    getBranchOutputPort(id){
        if (id === 0) {
            return this.branchs[id].portWidget
        }
        if (id === 1) {
            return this.branchs[id].portWidget
        }
    }
    getInputXPos() {
        return this.inputXPos
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
       
        const passBranch = this.branchs[0]; // pass分支对象
        const failBranch = this.branchs[1]; // fail分支对象
        // 计算pass节点的最大面积
        const passBranchBoundingInfo = this.calculateNodeSetBoundingInfo(passBranch.branchNodes);
        // 计算fail节点最大面积
        const failBranchBoundingInfo = this.calculateNodeSetBoundingInfo(failBranch.branchNodes);
        // pass最大宽高
        const { boundMaxWidth: passBoundWidth, boundHeight: passBoundHeight } = passBranchBoundingInfo
        // fail最大宽高
        const { boundMaxWidth: failBoundWidth, boundHeight: failBoundHeight } = failBranchBoundingInfo
        // let passBoundWidth = 200
        // let passBoundHeight = 200
        // let failBoundWidth = 200
        // let failBoundHeight= 200
        this.container.addChild(this.bgcRect)
        let spaceMaxWidth = passBoundWidth
        if(spaceMaxWidth===0&&failBoundWidth/2>30){
            spaceMaxWidth=100
        }
        let spaceMaxHeight = Math.max(passBoundHeight, failBoundHeight)
        // 整体高度
        this.height = spaceMaxHeight + this.nodeStyle.rectPadding * 2 + 10 * 2 + this.nodeStyle.circleRadius * 2 + this.nodeStyle.rectHeight
        this.width = this.nodeStyle.rectWidth + this.nodeStyle.rectPadding + 70 + spaceMaxWidth + failBoundWidth - (this.nodeStyle.rectWidth / 2 + this.nodeStyle.rectPadding)
        //p
        this.branchs[0].portWidget.setPos(
            this.nodeStyle.rectWidth / 2 + this.nodeStyle.rectPadding,
            this.nodeStyle.rectHeight + this.nodeStyle.rectPadding + this.nodeStyle.circleRadius
        )
        this.container.addChild(this.branchs[0].portWidget.circle)
        this.branchs[0].portTextItem.setPos(
            this.nodeStyle.rectWidth / 2 + this.nodeStyle.rectPadding + 10,
            this.nodeStyle.rectHeight + this.nodeStyle.rectPadding + this.nodeStyle.circleRadius - 5
        )
        this.container.addChild(this.branchs[0].portTextItem.basicText)
        this.branchs[0].bottomVLineItem.clearAndRedraw(
            this.nodeStyle.rectWidth / 2 + this.nodeStyle.rectPadding,
            this.nodeStyle.rectHeight + this.nodeStyle.rectPadding * 2,
            this.nodeStyle.rectWidth / 2 + this.nodeStyle.rectPadding,
            this.nodeStyle.rectHeight + this.nodeStyle.rectPadding * 2 + 10 + spaceMaxHeight
        )
        this.container.addChild(this.branchs[0].bottomVLineItem.line)
        // f
        this.branchs[1].portWidget.setPos(
            this.nodeStyle.rectWidth + this.nodeStyle.rectPadding + 70 + spaceMaxWidth,
            this.nodeStyle.rectHeight + this.nodeStyle.rectPadding + this.nodeStyle.circleRadius
        )
        this.container.addChild(this.branchs[1].portWidget.circle)
        this.branchs[1].portTextItem.setPos(
            this.nodeStyle.rectWidth + this.nodeStyle.rectPadding + 70 + spaceMaxWidth + 8,
            this.nodeStyle.rectPadding + this.nodeStyle.rectHeight / 2 + 10 + this.nodeStyle.circleRadius - 2
        )
        this.container.addChild(this.branchs[1].portTextItem.basicText)
        this.branchs[1].topVLineItem.clearAndRedraw(
            this.nodeStyle.rectWidth + this.nodeStyle.rectPadding + 70 + spaceMaxWidth,
            this.nodeStyle.rectPadding + this.nodeStyle.rectHeight / 2,
            this.nodeStyle.rectWidth + this.nodeStyle.rectPadding + 70 + spaceMaxWidth,
            this.nodeStyle.rectHeight + this.nodeStyle.rectPadding
        )
        this.container.addChild(this.branchs[1].topVLineItem.line)
        this.branchs[1].bottomVLineItem.clearAndRedraw(
            this.nodeStyle.rectWidth + this.nodeStyle.rectPadding + 70 + spaceMaxWidth,
            this.nodeStyle.rectHeight + this.nodeStyle.rectPadding + this.nodeStyle.circleRadius * 2,
            this.nodeStyle.rectWidth + this.nodeStyle.rectPadding + 70 + spaceMaxWidth,
            this.nodeStyle.rectHeight + this.nodeStyle.rectPadding * 2 + 10 + spaceMaxHeight
        )
        this.container.addChild(this.branchs[1].bottomVLineItem.line)

        this.rectbody.updateLayout()
        this.rectbody.setPos(
            this.nodeStyle.rectPadding, this.nodeStyle.rectPadding
        )

        this.inputLine.setPos(this.nodeStyle.rectWidth / 2 + this.nodeStyle.rectPadding, 0, this.nodeStyle.rectWidth / 2 + this.nodeStyle.rectPadding, this.nodeStyle.inputLineHeight)
        this.circle.setPos(
            this.nodeStyle.rectWidth / 2 + this.nodeStyle.rectPadding,
            this.nodeStyle.rectHeight + this.nodeStyle.rectPadding * 2 + 10 + spaceMaxHeight + this.nodeStyle.circleRadius + 10
        )
        this.outputLine.setPos(
            this.nodeStyle.rectWidth / 2 + this.nodeStyle.rectPadding,
            this.nodeStyle.rectHeight + this.nodeStyle.rectPadding * 2 + 10 + spaceMaxHeight,
            this.nodeStyle.rectWidth / 2 + this.nodeStyle.rectPadding,
            this.nodeStyle.rectHeight + this.nodeStyle.rectPadding * 2 + 10 + spaceMaxHeight + this.nodeStyle.circleRadius * 2
        )
        this.rightTopHBranchLine.clearAndRedraw(
            this.nodeStyle.rectWidth + this.nodeStyle.rectPadding, this.nodeStyle.rectPadding + this.nodeStyle.rectHeight / 2
            , this.nodeStyle.rectWidth + this.nodeStyle.rectPadding + 70 + spaceMaxWidth, this.nodeStyle.rectPadding + this.nodeStyle.rectHeight / 2
        )
        this.rightBottomHBranchLine.clearAndRedraw(
            this.nodeStyle.rectWidth / 2 + this.nodeStyle.rectPadding, this.nodeStyle.rectHeight + this.nodeStyle.rectPadding * 2 + 10 + spaceMaxHeight,
            this.nodeStyle.rectWidth + this.nodeStyle.rectPadding + 70 + spaceMaxWidth,
            this.nodeStyle.rectHeight + this.nodeStyle.rectPadding * 2 + 10 + spaceMaxHeight
        )
        // 设置输入位置x坐标
        this.inputXPos = this.nodeStyle.rectWidth / 2 + this.nodeStyle.rectPadding
        this.container.addChild(this.rectbody.getContainer())
        this.container.addChild(this.circle.circle)
        this.container.addChild(this.inputLine.line)
        this.container.addChild(this.outputLine.line)
        this.container.addChild(this.rightTopHBranchLine.line)
        this.container.addChild(this.rightBottomHBranchLine.line)
        // 设置左侧节点位置
        let passHeight = this.nodeStyle.rectHeight + this.nodeStyle.rectPadding * 2
        let prevOutputXPos = this.nodeStyle.rectWidth / 2 + this.nodeStyle.rectPadding
        for (const passBranchNode of passBranch.branchNodes) {
            passBranchNode.setPos(prevOutputXPos - passBranchNode.getInputXPos(), passHeight)
            const { height } = passBranchNode.getSize()
            passHeight += height
            this.container.addChild(passBranchNode.getContainer())
        }

        // 设置右侧节点位置
        let failHeight = this.nodeStyle.rectHeight + this.nodeStyle.rectPadding + this.nodeStyle.circleRadius * 2
        let prevFailOutputXPos = this.nodeStyle.rectWidth + this.nodeStyle.rectPadding + 70 + spaceMaxWidth
        for (const failBranchNode of failBranch.branchNodes) {
            const { height } = failBranchNode.getSize()
            failBranchNode.setPos(prevFailOutputXPos - failBranchNode.getInputXPos(), failHeight)
            failHeight += height
            this.container.addChild(failBranchNode.getContainer())
        }
        
    }

}