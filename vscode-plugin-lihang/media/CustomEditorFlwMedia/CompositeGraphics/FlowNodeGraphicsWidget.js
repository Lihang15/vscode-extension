 // 所有图形的父类 统一处理样式
 class FlowNodeGraphicsWidget {
   
    constructor(nodeStyle) {
        this.nodeStyle = nodeStyle
        this.isBypass = new PIXI.Graphics()
    }
    calculateNodeSetBoundingInfo(nodes) {
        if (!nodes) {
            return null
        }
        let boundHeight = 0
        let boundMaxWidth = 0
        let boundInputleftWidth = 0
        let boundInputRightWidth = 0
        for (const node of nodes) {
            const { width, height } = node.getSize()
            const nodeLeftXPos = node.getInputXPos()
            const nodeRightXPos = width-nodeLeftXPos
            boundHeight += height
            boundMaxWidth = Math.max(boundMaxWidth, width)
            boundInputleftWidth = Math.max(boundInputleftWidth,nodeLeftXPos)
            boundInputRightWidth = Math.max(boundInputRightWidth,nodeRightXPos)
        }
        return {
            boundMaxWidth, boundHeight,boundInputleftWidth,boundInputRightWidth
        }
    }


}


 // nodestyle的数据类型
    // type nodeStyle = {
    //     circleRadius?: number
    //     circleFillColor?: number
    //     circleBorder?: number
    //     circleBorderColor?: string
    //     lineWidth?: number
    //     lineColor?: string
    //     rectWidth?: number
    //     rectHeight?: number
    //     rectText?: string
    //     rectPadding?: number
    //     rectBorder?: number
    //     rectBorderColor?: string
    //     inputLineHeight?: number
    // }