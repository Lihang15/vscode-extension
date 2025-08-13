    // flow节点图形
    class TestFlowNodeGraphicsWidget extends FlowNodeGraphicsWidget{
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
                    nodes:[]
                 }
            ]
            this.branchs = [
                {
                    // 端口上的长线
                    topVLineItem: null,
                    //分支端口图
                    portWidget: null,
                    // 端口下线图元
                    bottomVLineItem: null,
                    // 因为不知道子节点所占的大小，必须要先计算子节点大小，需要通过递归确认图元关系 子图如果也有有分支的必须作为一个整体放入
                    branchNodes: [
                    ]
                },
              
            ]
            this.branchPortCount = 1
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
                this.branchs[i].topVLineItem = new LineGraphicsWidget(this.nodeStyle)
                this.branchs[i].bottomVLineItem = new LineGraphicsWidget(this.nodeStyle)
            }
         
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
                width: this.width,
                height: this.height
            }
        }
        getModel(){
            return {type:this.nodeStyle.type,text:this.nodeStyle.rectText,nodes:this.branchs_model[0].nodes}
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
        setOutputPortEnabled(isPortEnable){
            this.circle.setPortEnabled(isPortEnable)
        }
        clearAllGraphics(){
            this.container.removeChildren();
       }
        // 多个小图叠加，排列小图形位置 组装成一个整体，
        updateLayout() {
           
            const passBranch = this.branchs[0]; // pass分支对象
            // 计算pass节点的最大面积
            const passBranchBoundingInfo = this.calculateNodeSetBoundingInfo(passBranch.branchNodes);
            // pass最大宽高
            const { boundMaxWidth: spaceMaxWidth, boundHeight: spaceMaxHeight } = passBranchBoundingInfo
            this.container.addChild(this.bgcRect)
        
            // 整体高度
            this.height = spaceMaxHeight + this.nodeStyle.rectPadding * 2 + this.nodeStyle.rectHeight
            this.width = this.nodeStyle.rectWidth + this.nodeStyle.rectPadding*2 + spaceMaxWidth 
      
            
            this.rectbody.updateLayout({width: this.nodeStyle.rectWidth+spaceMaxWidth,height: spaceMaxHeight + this.nodeStyle.rectHeight,
                fontX:(this.nodeStyle.rectWidth+spaceMaxWidth)/2-16,fontY:5})
            this.rectbody.setPos(
                this.nodeStyle.rectPadding, this.nodeStyle.rectPadding
            )
            this.container.addChild(this.rectbody.getContainer())
                //单分支端口
            this.branchs[0].portWidget.setPos(
                (this.nodeStyle.rectWidth+spaceMaxWidth)/2+this.nodeStyle.rectPadding,
                43
            )
            this.container.addChild(this.branchs[0].portWidget.circle)


            this.branchs[0].topVLineItem.clearAndRedraw(
                this.nodeStyle.rectPadding,
                37,
                this.nodeStyle.rectWidth+this.nodeStyle.rectPadding+spaceMaxWidth,
                37
            )
            this.container.addChild(this.branchs[0].topVLineItem.line)
            this.branchs[0].bottomVLineItem.clearAndRedraw(
                (this.nodeStyle.rectWidth+spaceMaxWidth)/2+this.nodeStyle.rectPadding,
                47,
                (this.nodeStyle.rectWidth+spaceMaxWidth)/2+this.nodeStyle.rectPadding,
                60+spaceMaxHeight
            )
            this.container.addChild(this.branchs[0].bottomVLineItem.line)
            this.inputLine.clearAndRedraw((this.nodeStyle.rectWidth+spaceMaxWidth) / 2 + this.nodeStyle.rectPadding, 0, (this.nodeStyle.rectWidth+spaceMaxWidth) / 2 + this.nodeStyle.rectPadding, this.nodeStyle.inputLineHeight)
            this.circle.setPos(
                (this.nodeStyle.rectWidth+spaceMaxWidth) / 2 + this.nodeStyle.rectPadding,
                this.nodeStyle.rectHeight + this.nodeStyle.rectPadding + spaceMaxHeight+this.nodeStyle.circleRadius)

            // 设置输入位置x坐标
            this.inputXPos = (this.nodeStyle.rectWidth + spaceMaxWidth) / 2 + this.nodeStyle.rectPadding
            
            this.container.addChild(this.circle.circle)
            this.container.addChild(this.inputLine.line)
            // 设置左侧节点位置
            let passHeight = this.nodeStyle.rectHeight/10+42
            let prevOutputXPos =  (this.nodeStyle.rectWidth + spaceMaxWidth) / 2 + this.nodeStyle.rectPadding
            for (const passBranchNode of passBranch.branchNodes) {
                passBranchNode.setPos(prevOutputXPos - passBranchNode.getInputXPos(), passHeight)
                const { height } = passBranchNode.getSize()
                passHeight += height
                this.container.addChild(passBranchNode.getContainer())
            }
            
        }
    }