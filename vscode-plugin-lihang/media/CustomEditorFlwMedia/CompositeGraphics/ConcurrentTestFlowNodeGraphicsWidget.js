   //Concurrent节点图形
   class ConcurrentTestFlowNodeGraphicsWidget extends FlowNodeGraphicsWidget {
    constructor(nodeStyle) {
        super(nodeStyle)
        this.container = null
        this.rectbody = null
        this.nodeBodyHeaderWidget = null
        this.circle = null //输出端口小圆
        this.inputLine = null
        this.topOutputLineItem = null
        this.bottomOutputLineItem = null
        this.leftTopHBranchLineItem = null
        this.leftBottomHBranchLineItem = null
        this.rightTopHBranchLineItem = null
        this.rightBottomHBranchLineItem = null
        this.isPress = null
        this.nodeName = null
        this.bgcRect = null
        this.type = null
        this.parentWidget = null // 所在父图形的指针
        this.branchIdInParent = null
        this.isTopNode = false
        this.branchs_model = [
            // {
            //     nodes:[]
            // }
        ]
        this.branchs = [
            //通过递归动态构建
            // {
            //     bottomVLineItem: null,
            //     branchNodes: [
            //     ]
            // },
            // {
            //     bottomVLineItem: null,
            //     branchNodes: [
            //     ]
            // },

        ]
        this.subFlowCountMin = 2
        this.inputXPos = 0
        this.width = 0
        this.height = 0
        this.initGraphics()
    }
    initGraphics() {
        this.container = new PIXI.Container();
        this.rectbody = new RectBodyGraphicsWidget(this.nodeStyle)
        this.nodeBodyHeaderWidget = new RectBodyGraphicsWidget(this.nodeStyle)
        this.circle = new CircleGraphicsWidget(this.nodeStyle)
        this.bgcRect = new PIXI.Graphics()
        this.circle.setPortId(-1)
        this.circle.setParentWidget(this)
        this.inputLine = new LineGraphicsWidget(this.nodeStyle)
        //通过递归动态构建
        // for (let i = 0; i < this.subFlowCountMin; i++) {
        //     this.branchs[i].bottomVLineItem = new LineGraphicsWidget(this.nodeStyle)
        // }
        this.topOutputLineItem = new LineGraphicsWidget(this.nodeStyle)
        this.bottomOutputLineItem = new LineGraphicsWidget(this.nodeStyle)
        this.leftTopHBranchLineItem = new LineGraphicsWidget(this.nodeStyle)
        this.leftBottomHBranchLineItem = new LineGraphicsWidget(this.nodeStyle)
        this.rightTopHBranchLineItem = new LineGraphicsWidget(this.nodeStyle)
        this.rightBottomHBranchLineItem = new LineGraphicsWidget(this.nodeStyle)
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
        const flowNodes = []
        for(const branch_model of this.branchs_model){
            // 每个nodes 只有一个flow
            flowNodes.push(branch_model.nodes[0])
        }
        return {type:this.nodeStyle.type,text:this.nodeStyle.rectText,flowNodes}
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
    insertSubFlowNode(branchId, subFlowNodeWidget){
        if (null == subFlowNodeWidget || branchId < 0 || branchId > this.branchs.length)
            {
                return;
            }
        this.branchs[branchId] = {
            bottomVLineItem:null,
            branchNodes:[]
        } 
        this.branchs_model[branchId] = {
            nodes:[]
        }
        this.branchs[branchId].bottomVLineItem = new LineGraphicsWidget(this.nodeStyle)
        this.insertNodeToBranch(branchId,0,subFlowNodeWidget)

    }
    getBranchCount(){
       return this.branchs.length
    }
    clearAllGraphics(){
        this.container.removeChildren();
    }
    // 多个小图叠加，排列小图形位置 组装成一个整体，
    updateLayout() {
        if(this.branchs.length<this.subFlowCountMin){
            return
        }
        const inputLineHeight = this.nodeStyle.inputLineHeight
        const portHeight = this.nodeStyle.circleRadius*2
        
        // 计算分支信息
        // 最大分支高度
        let maxBranchBoundingHeight = 0
        // 所有分支的整体节点包围信息
        let branchBoundingInfos = []
        for(const branch of this.branchs){
            const boundingInfo = this.calculateNodeSetBoundingInfo(branch.branchNodes)
            if(boundingInfo.boundHeight>maxBranchBoundingHeight){
                maxBranchBoundingHeight = boundingInfo.boundHeight
            }
            branchBoundingInfos.push(boundingInfo)
        }
        // 输入位置左右侧顶部水平分支线长度
        let leftTopHBranchLineLength = 0
        let rightTopHBranchLineLength = 0
        // 判断当前分支数量奇偶数
        const isOddNumber = this.branchs.length % 2
        // 中间位置的分支索引
        const middleIndex = parseInt(this.branchs.length / 2)
        // 计算偏移值，也就是分支线长
        let branchInputXPosOffsets = []
        // 分支线为奇数,中间分支会与inputX重合，不存偏移信息
        if(isOddNumber){
            // 计算左侧水平分支线长度
           for(let i = middleIndex; i > 0; --i){
             leftTopHBranchLineLength += branchBoundingInfos[i].boundInputleftWidth + branchBoundingInfos[i+1].boundInputRightWidth + this.nodeStyle.nodeMarginWidth
             branchInputXPosOffsets[i-1] = -leftTopHBranchLineLength
           }
           // 计算右侧水平分支线长度
           for(let i = middleIndex;i<this.branchs.length-1;++i){
              rightTopHBranchLineLength += branchBoundingInfos[i].boundInputRightWidth+branchBoundingInfos[i+1].boundInputleftWidth+this.nodeStyle.nodeMarginWidth
              branchInputXPosOffsets[i+1] = rightTopHBranchLineLength 
           }
        }else{  //  分支线为偶数

            //计算左侧水平分支线长度
            for(let i = middleIndex;i > 0;--i){
                
                if(i==middleIndex){ //额外处理左侧第一个节点与输入位置的间隔
                   leftTopHBranchLineLength += branchBoundingInfos[i-1].boundInputRightWidth + this.nodeStyle.nodeMarginWidth/2
                }else{
                    leftTopHBranchLineLength += branchBoundingInfos[i].boundInputleftWidth+branchBoundingInfos[i-1].boundInputRightWidth+this.nodeStyle.nodeMarginWidth
                }
                branchInputXPosOffsets[i - 1] = -leftTopHBranchLineLength;
            }
            // 计算右侧水平分支线长度
            for(let i = middleIndex-1;i<this.branchs.length-1;++i){
                if (i == middleIndex - 1) // 额外处理右侧第一个节点与输入位置的间隔
                {
                    rightTopHBranchLineLength += branchBoundingInfos[i + 1].boundInputleftWidth +this.nodeStyle.nodeMarginWidth / 2;
                }
                else
                {
                    rightTopHBranchLineLength += 
                        branchBoundingInfos[i].boundInputRightWidth +
                        branchBoundingInfos[i + 1].boundInputleftWidth +
                        this.nodeStyle.nodeMarginWidth
                }

                branchInputXPosOffsets[i + 1] = rightTopHBranchLineLength;
            }
        }
      
        // 计算节点宽度
        let leftTotalLength = 0   // 线长+左侧第一个节点左半部分
        let rightTotalLength = 0
      
        leftTotalLength = leftTopHBranchLineLength+branchBoundingInfos[0].boundInputleftWidth
        rightTotalLength = rightTopHBranchLineLength+branchBoundingInfos[branchBoundingInfos.length-1].boundInputRightWidth
        let nodeBodyWidth = leftTotalLength + rightTotalLength + this.nodeStyle.nodeMarginWidth * 2;
        let isDefaultHeaderSizeUsed = nodeBodyWidth < this.nodeStyle.rectWidth
        if(isDefaultHeaderSizeUsed){
            nodeBodyWidth = this.nodeStyle.rectWidth
        }
      
        // 计算整个concurrent节点宽度
        this.width = nodeBodyWidth + this.nodeStyle.rectPadding*2
        // 计算整个concurrent节点高度
        const topOutputLineLength = inputLineHeight
        const bottomOutputLineLength = inputLineHeight
        const branchTotalHeight = maxBranchBoundingHeight + inputLineHeight+ this.nodeStyle.rectBorder
        this.height = inputLineHeight + this.nodeStyle.rectHeight+topOutputLineLength+bottomOutputLineLength+branchTotalHeight+portHeight 
        const nodeBodyHeight = this.nodeStyle.rectHeight+topOutputLineLength+bottomOutputLineLength+branchTotalHeight
        // 计算输入位置x坐标
        this.inputXPos = this.nodeStyle.rectPadding+isDefaultHeaderSizeUsed?nodeBodyWidth/2:leftTotalLength+this.nodeStyle.nodeMarginWidth

        // 设置上下输出线位置
        const topOutputLineYStartPos = inputLineHeight + this.nodeStyle.rectHeight;
        const topHBranchLineYPos = topOutputLineYStartPos + topOutputLineLength;
        const bottomHBranchLineYPos = topHBranchLineYPos + branchTotalHeight;
        // 上线
        this.topOutputLineItem.clearAndRedraw(
            this.inputXPos,
            topOutputLineYStartPos,
            this.inputXPos,
            topOutputLineYStartPos + topOutputLineLength)
      
        // 下线
        this.bottomOutputLineItem.clearAndRedraw(
            this.inputXPos,
            bottomHBranchLineYPos,
            this.inputXPos,
            bottomHBranchLineYPos + bottomOutputLineLength);
      
          // 设置水平分支线位置
          this.leftTopHBranchLineItem.clearAndRedraw(
            this.inputXPos - leftTopHBranchLineLength,
            topHBranchLineYPos,
            this.inputXPos,
            topHBranchLineYPos);
       
        this.rightTopHBranchLineItem.clearAndRedraw(
            this.inputXPos,
            topHBranchLineYPos,
            this.inputXPos + rightTopHBranchLineLength,
            topHBranchLineYPos);
   
        this.leftBottomHBranchLineItem.clearAndRedraw(
            this.inputXPos,
            bottomHBranchLineYPos,
            this.inputXPos - leftTopHBranchLineLength,
            bottomHBranchLineYPos);
     
        this.rightBottomHBranchLineItem.clearAndRedraw(
            this.inputXPos,
            bottomHBranchLineYPos,
            this.inputXPos + rightTopHBranchLineLength,
            bottomHBranchLineYPos);

        this.nodeBodyHeaderWidget.updateLayout(
            {
                width: nodeBodyWidth,
                height: this.nodeStyle.rectHeight,
                fontX: nodeBodyWidth/2.5,
                fontY: 2
            }
        )
        this.nodeBodyHeaderWidget.setPos(
            this.nodeStyle.rectPadding,
            this.nodeStyle.rectPadding
        )
        this.rectbody.updateLayout({width:nodeBodyWidth,height: nodeBodyHeight, isVisibleFont: true})
        this.rectbody.setPos(
            this.nodeStyle.rectPadding, this.nodeStyle.rectPadding
        )
        this.inputLine.clearAndRedraw(
            this.inputXPos,
            0,
            this.inputXPos,
            inputLineHeight)
        this.circle.setPos(
            this.inputXPos,
            this.height - this.nodeStyle.circleRadius
           )
    
        this.container.addChild(this.bgcRect)
        this.container.addChild(this.circle.circle)
        this.container.addChild(this.inputLine.line)
        this.container.addChild(this.rectbody.getContainer())
        this.container.addChild(this.nodeBodyHeaderWidget.getContainer())
        this.container.addChild(this.topOutputLineItem.line)
        this.container.addChild(this.bottomOutputLineItem.line)
        this.container.addChild(this.leftTopHBranchLineItem.line)
        this.container.addChild(this.rightTopHBranchLineItem.line)
        this.container.addChild(this.leftBottomHBranchLineItem.line)
        this.container.addChild(this.rightBottomHBranchLineItem.line)

        //设置各分支图元尺寸及位置
        for(let i = 0;i<this.branchs.length;++i){
            let branchInputXPos = this.inputXPos + branchInputXPosOffsets[i]
            // 单独处理奇数情况分支的x坐标
            if(isOddNumber){
                if(middleIndex===i){
                    branchInputXPos = this.inputXPos
                }
                
            }
            // 节点顶部竖直分支线Y起始位置
            const bottomVLineYStartPos = topHBranchLineYPos +
                branchBoundingInfos[i].boundHeight                                                

            this.branchs[i].bottomVLineItem.clearAndRedraw(
                branchInputXPos,
                bottomVLineYStartPos+ this.nodeStyle.rectBorder,
                branchInputXPos,
                bottomVLineYStartPos + maxBranchBoundingHeight - branchBoundingInfos[i].boundHeight + this.nodeStyle.inputLineHeight
            )
            this.container.addChild(this.branchs[i].bottomVLineItem.line)
            // 设置分支节点位置
            let startYPos = topHBranchLineYPos + this.nodeStyle.rectBorder;
            for(const node of this.branchs[i].branchNodes){
                node.setPos(branchInputXPos-node.getInputXPos(),
                startYPos
                )
                this.container.addChild(node.getContainer())
                const { height } = node.getSize()
                startYPos += height
            }
        }
        
    }

}