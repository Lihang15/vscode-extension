    //圆
    class CircleGraphicsWidget extends FlowNodeGraphicsWidget {
        constructor(nodeStyle) {
            super(nodeStyle)
            this.circle = null
            this.portId = null
            this.isPress = false // 是否点击
            this.isPortEnable = true  //是否可以点击
            this.parentWidget = null // 所在父图形的指针
            this.initGraphics()
        }
        initGraphics() {
            this.circle = new PIXI.Graphics()
            this.circle.circle(0, 0, this.nodeStyle.circleRadius);
            this.circle.fill(this.isPortEnable?0x383838:0x46546, 1)
            this.circle.stroke({ width: this.nodeStyle.circleBorder, color: this.nodeStyle.circleBorderColor })
            this.circle.eventMode = 'static'
            this.circle.on('click',()=>{
                if(!this.isPortEnable){
                    return
                }
                handleSelectedPortWidget(this)
            })
         
        }
    
        setSelectedPortWidget(isPress){
            // console.log('click');
            this.isPress = isPress
            this.updateBgcColor()
        }
        setPortEnabled(isPortEnable){
            this.isPortEnable = isPortEnable
            this.updateBgcColor()
        }
        updateBgcColor(){
            if(this.isPortEnable){
                if(this.isPress){
                    this.circle.clear()
                   this.circle.circle(0, 0, this.nodeStyle.circleRadius);
                   this.circle.fill(0x49abed, 1)
                   this.circle.stroke({ width: this.nodeStyle.circleBorder, color: this.nodeStyle.circleBorderColor })
                  
               }else{
                   this.circle.clear()
                   this.circle.circle(0, 0, this.nodeStyle.circleRadius);
                   this.circle.fill(0x383838, 1)
                   this.circle.stroke({ width: this.nodeStyle.circleBorder, color: this.nodeStyle.circleBorderColor })
               }
            }else{
                this.circle.clear()
                this.circle.circle(0, 0, this.nodeStyle.circleRadius);
                this.circle.fill(0x46546, 1)
                this.circle.stroke({ width: this.nodeStyle.circleBorder, color: this.nodeStyle.circleBorderColor })
            }
           
           
        }
        setPos(x, y) {
            this.circle.pivot.set(0, 0)
            this.circle.x = x
            this.circle.y = y
        }
        setPortId(portId) {
            this.portId = portId
        }
        getPortId() {
            return this.portId
        }
        getParentWidget(){
            return this.parentWidget
        }
        setParentWidget(parentWidget){
            this.parentWidget = parentWidget
        }
        getSize() {
            return {
                width: this.nodeStyle.circleRadius * 2,
                height: this.nodeStyle.circleRadius * 2
            }
        }
    }