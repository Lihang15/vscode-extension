const vscode = acquireVsCodeApi();

let d3SvgApp = null
let testFlow = null
let selectedPortWidget = null
let selectedBgcWidget = null
let copyWidght = null
let isRun = false
// // Create a PixiJS application.

// 测试流编辑器入口，处理图形的显示和model交互
class TestFlowEditor {
    constructor(rootElement, data, options = {}) {
        this.rootElement = rootElement // canvas放到html哪个元素中，元素大小决定画布大小
        this.data = data  // 数据
        this.m_nodeWidgets = [] // 存放主轴的所有节点
        this.m_model_nodeWidgets = [] //存放主轴所有节点的model
        this.options = Object.assign(
            {
                description: 'Test Flow Main Class',

            },
            options // 初始化一些参数
        )
        this.app = null // pxixjs 的app对象，
        this.container = null //pixijs的container对象
        this.currentLevelHeight = 0 //当前层的高度，一层一层绘制
    }
    // 创建app（也就是画布）
    async createApp() {
        console.log('*******************')
        const app = new PIXI.Application();
        d3SvgApp=app
        // Intialize the application.
        let innerWidth = document.getElementById("canvas").offsetWidth
        let innerHeight = document.getElementById("canvas").offsetHeight
        console.log('innerWidth',innerWidth,innerHeight);
        
        await app.init({
            background: '#383838',
            resizeTo: this.rootElement,
            antialias: true,
            depth: true,
            hello: true,
            powerPreference: 'high-performance',
            width: innerWidth,
            height: innerHeight,
            backgroundColor: 0x383838,
            sharedTicker: true,
            resolution: window.devicePixelRatio, //innerWidth / innerHeight,
            isRenderGroup: true,
            sharedTicker: true
        });
        // Then adding the application's canvas to the DOM body.
        this.rootElement.appendChild(app.canvas);
        const container = new PIXI.Container();

        // Move the container to the center
        container.x = app.screen.width / 2;
        container.y = 60;
        app.stage.addChild(container)
        this.app = app
        this.container = container
    }

    //遍历数据，渲染视图
    async dataRender() {
        // 清除所有图形
        // this.container.removeChildren();
        // start节点固定 先把start图形初始化
        const startFlowNodeGraphicsWidget = new StartFlowNodeGraphicsWidget({
            rectWidth: 72,
            rectHeight: 30,
            rectText: 'Start',
            rectBorder: 1,
            rectBorderColor: 0xf4f4f4,
            circleRadius: 5,
            circleBorder: 1,
            circleBorderColor: 0xf4f4f4
        })
        startFlowNodeGraphicsWidget.setNodeName('Start')
        startFlowNodeGraphicsWidget.isTopNode = true
        startFlowNodeGraphicsWidget.updateLayout()
        // this.container.addChild(startFlowNodeGraphicsWidget.getContainer())
        this.m_nodeWidgets.push(startFlowNodeGraphicsWidget)
        let prevDstPortWidget = startFlowNodeGraphicsWidget.getOutputPort()
        // selectedPortWidget = prevDstPortWidget
        // selectedPortWidget.setSelectedPortWidget(true)
        handleSelectedPortWidget(prevDstPortWidget)
        const { nodes } = this.data
        // 拿到所有节点 
        for (const nodeModel of nodes) {
            const newNodeWidget = this.createNode(nodeModel)
            newNodeWidget.isTopNode = true
            if (null !== newNodeWidget) {
                this.insertNode(newNodeWidget, prevDstPortWidget)
                prevDstPortWidget = newNodeWidget.getOutputPort()
            }
        }
    }
    // 初始化图形
    createNode(nodeModel) {
        let newNodeWidget = null
        if (nodeModel.type === 'runNode') {
            const runTestFlowNodeGraphicsWidget = new RunTestFlowNodeGraphicsWidget(
                {
                    circleRadius: 5,
                    circleBorder: 1,
                    circleBorderColor: 0xf4f4f4,
                    lineWidth: 1,
                    lineColor: 0xf4f4f4,
                    rectWidth: 100,
                    rectHeight: 30,
                    rectText: nodeModel.text,
                    type: nodeModel.type,
                    rectPadding: 10,
                    rectBorder: 1,
                    rectBorderColor: 0xf4f4f4,
                    inputLineHeight: 10,
                    isRunStatus: isRun?'false':'',
                    runtime : isRun?'10s':''
                }
            )
            runTestFlowNodeGraphicsWidget.setNodeName(nodeModel.text)
            runTestFlowNodeGraphicsWidget.setNodeType(nodeModel.type)
            newNodeWidget = runTestFlowNodeGraphicsWidget
        }
        if (nodeModel.type === 'runBranchNode') {
            const runAndBranchTestFlowNodeGraphicsWidget = new RunAndBranchTestFlowNodeGraphicsWidget(
                {
                    circleRadius: 5,
                    circleBorder: 1,
                    circleBorderColor: 0xf4f4f4,
                    lineWidth: 1,
                    lineColor: 0xf4f4f4,
                    rectWidth: 100,
                    rectHeight: 30,
                    rectText: nodeModel.text,
                    type: nodeModel.type,
                    rectPadding: 10,
                    rectBorder: 1,
                    rectBorderColor: 0xf4f4f4,
                    inputLineHeight: 10,
                    isRunStatus: isRun?'true':'',
                    runtime : isRun?'3s':''
                }
            )
            runAndBranchTestFlowNodeGraphicsWidget.setNodeType(nodeModel.type)
            for (let branchId = 0; branchId < 2; branchId++) {
                let subFlowModel = nodeModel.Branchs[branchId]

                let prevDstPortWidget = runAndBranchTestFlowNodeGraphicsWidget.getBranchOutputPort(branchId);
                for (const subNodeModel of subFlowModel.nodes) {
                    // console.log('subNodeModel',subFlowModel);
                    // 创建分支子节点图元对象
                    const subNodeWidget = this.createNode(subNodeModel);
                    if (null == subNodeWidget) {
                        continue;
                    }

                    // 将子节点插入到父节点中
                    this.insertNode(subNodeWidget, prevDstPortWidget);
                    // prevDstPortWidget = subNodeWidget.getOutputPort()
                }


            }

            runAndBranchTestFlowNodeGraphicsWidget.setNodeName(nodeModel.text)
            newNodeWidget = runAndBranchTestFlowNodeGraphicsWidget
        }
        if(nodeModel.type === 'passBin'){
            const passBinTestFlowNodeGraphicsWidget = new PassBinTestFlowNodeGraphicsWidget(
                {
                    circleRadius: 5,
                    circleBorder: 1,
                    circleBorderColor: 0xf4f4f4,
                    lineWidth: 1,
                    lineColor: 0xf4f4f4,
                    rectWidth: 100,
                    rectHeight: 30,
                    rectText: nodeModel.text,
                    type: nodeModel.type,
                    rectPadding: 10,
                    rectBorder: 1,
                    rectBorderColor: 0xf4f4f4,
                    inputLineHeight: 10,
                    triangleText: nodeModel.text
                }
            )
            passBinTestFlowNodeGraphicsWidget.setNodeName(nodeModel.text)
            passBinTestFlowNodeGraphicsWidget.setNodeType(nodeModel.type)
            newNodeWidget = passBinTestFlowNodeGraphicsWidget
        }
        if(nodeModel.type==='flow'){
            
            const testFlowNodeGraphicsWidget = new TestFlowNodeGraphicsWidget(
                {
                    circleRadius: 5,
                    circleBorder: 1,
                    circleBorderColor: 0xf4f4f4,
                    lineWidth: 1,
                    lineColor: 0xf4f4f4,
                    rectWidth: 100,
                    rectHeight: 50,
                    rectText: nodeModel.text,
                    type: nodeModel.type,
                    rectPadding: 10,
                    rectBorder: 1,
                    rectBorderColor: 0xf4f4f4,
                    inputLineHeight: 10
                }
            )
            testFlowNodeGraphicsWidget.setNodeType(nodeModel.type)
        
            let prevDstPortWidget = testFlowNodeGraphicsWidget.getBranchOutputPort(0);
            for (const subNodeModel of nodeModel.nodes) {
                // 创建分支子节点图元对象
                const subNodeWidget = this.createNode(subNodeModel);
                if (null == subNodeWidget) {
                    continue;
                }

                // 将子节点插入到父节点中
                this.insertNode(subNodeWidget, prevDstPortWidget);
                // prevDstPortWidget = subNodeWidget.getOutputPort()
            }
            testFlowNodeGraphicsWidget.setNodeName(nodeModel.text)
            newNodeWidget = testFlowNodeGraphicsWidget
        }
        if(nodeModel.type==='concurrent'){
            const concurrentTestFlowNodeGraphicsWidget  = new ConcurrentTestFlowNodeGraphicsWidget({
                circleRadius: 5,
                circleBorder: 1,
                circleBorderColor: 0xf4f4f4,
                lineWidth: 1,
                lineColor: 0xf4f4f4,
                rectWidth: 100,
                rectHeight: 20,
                rectText: nodeModel.text,
                type: nodeModel.type,
                rectPadding: 10,
                rectBorder: 1,
                rectBorderColor: 0xf4f4f4,
                inputLineHeight: 10,
                // nodeSpacingWidth: 50,
                nodeMarginWidth: 50,
            })
            const subFlowsModel = nodeModel.flowNodes
            for(const subFlowModel of subFlowsModel){
                const subFlowNodeWidget = this.createNode(subFlowModel)
                if(null === subFlowNodeWidget){
                    continue
                }
                subFlowNodeWidget.setOutputPortEnabled(false)
                // 将subFlow插入到concurrent中
                concurrentTestFlowNodeGraphicsWidget.insertSubFlowNode(concurrentTestFlowNodeGraphicsWidget.getBranchCount(), subFlowNodeWidget);
            }
            concurrentTestFlowNodeGraphicsWidget.setNodeName(nodeModel.text)
            concurrentTestFlowNodeGraphicsWidget.setNodeType(nodeModel.type)
            
            newNodeWidget = concurrentTestFlowNodeGraphicsWidget
        }
        return newNodeWidget
    }
    // 将nodeWidget 插入对应的端口下
    // dstPortWidget 目标端口
    insertNode(nodeWidget, dstPortWidget) {
        if (null == nodeWidget || null == dstPortWidget) {
            return;
        }
            // 获取端口所属图形
            const dstWidget = dstPortWidget.getParentWidget()

        // 插入新节点，如果选中的是主轴输出端口，则需要在其所属节点的同级后方插入新节点；
        // 反之选中的则是分支端口，需要在端口的分支节点最前方插入新节点
        
        // dstPortWidget是主轴输出端口
        if (dstPortWidget.getPortId() < 0) {
            const srcNodeIndex = this.m_nodeWidgets.indexOf(dstWidget);
            if (srcNodeIndex < 0) {
                return;
            }
            this.m_nodeWidgets.splice(srcNodeIndex + 1, 0, nodeWidget);
            this.m_model_nodeWidgets.splice(srcNodeIndex,0,nodeWidget.getModel())
            nodeWidget.setParentWidget(this)
            nodeWidget.updateLayout();

        } else {
            // 在所选的分支端口的分支节点列表最前方插入新节点
            dstWidget.insertNodeToBranch(dstPortWidget.getPortId(), null, nodeWidget);
        }
    }
    // 设置主轴所有图形位置
    setMNodeWidgetsPos() {
        // console.log('model data',this.m_model_nodeWidgets);
        // console.log('all node graphics',this.m_nodeWidgets);
        let inputXPos = 0
        for (const m_nodeWidget of this.m_nodeWidgets) {
            this.container.addChild(m_nodeWidget.getContainer())
            if(m_nodeWidget.nodeName === 'Start'){
                m_nodeWidget.setPos(0,0)
                inputXPos = m_nodeWidget.getInputXPos()
            }else{
                m_nodeWidget.setPos(inputXPos-m_nodeWidget.getInputXPos(), this.currentLevelHeight)
            }
            const { height } = m_nodeWidget.getSize()
            this.currentLevelHeight += height
        }
    }

    // 内层数据变化对外层有影响，更新所有的节点布局
    findAllNodesUpdateLayout(){
        for(const m_nodeWidget of this.m_nodeWidgets){
        if(m_nodeWidget.nodeName === 'Start'){
            continue
        }
        this.findAllNodes(m_nodeWidget)
        // m_nodeWidget.clearAllGraphics()
        m_nodeWidget.updateLayout()
        }
    }
    findAllNodes(nodeWidget){
        let resultNodeWidget = null
        if (nodeWidget.type === 'runNode') {
            resultNodeWidget = nodeWidget
        }
        // 递归查找到 所有子节点
        if (nodeWidget.type === 'runBranchNode') {
            for (let branchId = 0; branchId < 2; branchId++) {
                let subFlow = nodeWidget.branchs[branchId]
                for (const subNode of subFlow.branchNodes) {
                    const subNodeWidget = this.findAllNodes(subNode);
                    // console.log('subNode',subNodeWidget.nodeName);
                    if (null == subNodeWidget) {
                        continue;
                    }
                    // subNodeWidget.clearAllGraphics()
                    subNodeWidget.updateLayout()
                }
            }
            resultNodeWidget = nodeWidget
        }
        if(nodeWidget.type === 'passBin'){

            resultNodeWidget = nodeWidget
        }
        if(nodeWidget.type === 'flow'){
            const subFlow = nodeWidget.branchs[0]
            for (const subNode of subFlow.branchNodes) {
                // 创建分支子节点图元对象
                const subNodeWidget = this.findAllNodes(subNode);
                if (null == subNodeWidget) {
                    continue;
                }
                subNodeWidget.updateLayout()
            }
            resultNodeWidget = nodeWidget
        }
        if(nodeWidget.type === 'concurrent'){
            for(const branch of nodeWidget.branchs){
                if(branch.branchNodes){
                    for(const subNode of branch.branchNodes){
                        const subNodeWidget = this.findAllNodes(subNode)
                        if (null == subNodeWidget) {
                            continue;
                        }
                        subNodeWidget.updateLayout()
                    }
                }
            }
            resultNodeWidget = nodeWidget
        }
        return resultNodeWidget
    }
    clearAllGraphics(){
        this.app.stage.removeChildren()
        const container = new PIXI.Container();
        // Move the container to the center
        container.x = this.app.screen.width / 2;
        container.y = 60;
        this.app.stage.addChild(container)
        this.container = container
    }

}

// 鼠标按下后监听Ctrl+C
document.body.addEventListener('keydown', function(event) {  
    if (event.ctrlKey && event.key === 'c') {   
        // 注意：这里不能直接访问剪贴板内容
        copyWidght = selectedBgcWidget
    }  
});
// 监听 ctrl+v
document.body.addEventListener('paste',(e)=>{
    // 将复制的节点插入对应的端口
    // 端口所属父图形
    const srcNode  = selectedPortWidget.getParentWidget()
    if(selectedPortWidget.getPortId() < 0){
        if(srcNode.isTopNode){
            testFlow.insertNode(copyWidght, selectedPortWidget)
            copyWidght.isTopNode = true
        }else{
            const dstBranchId = srcNode.getBranchIdInParent()
            // 端口所属父图形所在的分支图形
            const srcBranchNode = srcNode.getParentWidget()
            const srcNodeIndex =  srcBranchNode.nodeIndexInBranch(dstBranchId,srcNode)
            srcBranchNode.insertNodeToBranch(dstBranchId, srcNodeIndex, copyWidght)
            runTestFlowNodeGraphicsWidget.isTopNode = false
            // srcBranchNode.updateLayout()
        }
    }else{
    
        const srcNodeIndex = srcNode.nodeIndexInBranch(selectedPortWidget.getPortId(),srcNode)
        srcNode.insertNodeToBranch(selectedPortWidget.getPortId(), srcNodeIndex, copyWidght)
        srcNode.isTopNode = false
        // srcNode.updateLayout()
        
    }
    // testFlow.findAllNodesUpdateLayout()
    // testFlow.currentLevelHeight = 0
    // testFlow.setMNodeWidgetsPos()
    if(selectedBgcWidget){
        selectedBgcWidget.setSelectedBgc(true)
    }
    
    vscode.postMessage({
        type:'addNode',
        text: {nodes: testFlow.m_model_nodeWidgets}
    })

})
// 缩放
function D3ZoomFun(app)  {
    // 设置D3 zoom行为
    const zoom = d3.zoom()
        .filter(event => {
        // 如果事件类型为双击，则忽略
        if (event.type === 'dblclick') {
            return false;
        } else if (event.type === 'click') {
            return false;
        }
        return true;
        })
        .scaleExtent([0.1, 2]).on("zoom", zoomed);
    d3.select(app.canvas).call(zoom);
    // 缩放和平移时的回调函数
    function zoomed(event) {
        const { transform } = event;
        const newScale = transform.k;
        const translateX = transform.x;
        const translateY = transform.y;
        // 更新Pixi.js舞台的缩放和位置
        app.stage.scale.set(newScale);
        app.stage.position.set(translateX, translateY);
    }
    }
// 设置被选中的端口
function handleSelectedPortWidget(portWidget){
    console.log('selectedPortWidget',selectedPortWidget);
    if(selectedPortWidget){
        selectedPortWidget.setSelectedPortWidget(false)
    }
    
    selectedPortWidget = portWidget
    selectedPortWidget.setSelectedPortWidget(true)
    
}
// 设置被选中的节点
function handleSelectedBgcWidget(bgcWidget){
    console.log('selectedBgcWidget',bgcWidget);
    if(selectedBgcWidget){
        selectedBgcWidget.setSelectedBgc(false)
    }
    
    selectedBgcWidget = bgcWidget
    selectedBgcWidget.setSelectedBgc(true)
    propertyValues(selectedBgcWidget)
}
// 节点选中后，属性面板 节点值展示
function propertyValues(selectedBgcWidget){
     // 设置 propertyNodeName 的内容
     document.getElementById('propertyNodeName').innerHTML = `Node Name：&nbsp;&nbsp;&nbsp;&nbsp;${selectedBgcWidget.nodeName}`;

     // 设置 propertyNodeType 的内容
     document.getElementById('propertyNodeType').innerHTML = `Node Type：&nbsp;&nbsp;&nbsp;&nbsp;${selectedBgcWidget.type}`;

     document.getElementById('toggleSwitch').checked=false;
}
const toggleSwitch = document.getElementById('toggleSwitch');

toggleSwitch.addEventListener('change', () => {
    if (toggleSwitch.checked) {
        console.log('True');  // 开关为 true
        selectedBgcWidget.setBypass(true)
    } else {
        console.log('False'); // 开关为 false
        selectedBgcWidget.setBypass(false)
    }
});
// 插入节点，数据变更逻辑，这里会把变更的model传给插件端
function insertData(type){
    let runTestFlowNodeGraphicsWidget =null
    if(type==='runNode'){
        runTestFlowNodeGraphicsWidget =  new RunTestFlowNodeGraphicsWidget(
            {
                circleRadius: 5,
                circleBorder: 1,
                circleBorderColor: 0xf4f4f4,
                lineWidth: 1,
                lineColor: 0xf4f4f4,
                rectWidth: 100,
                rectHeight: 30,
                rectText: 'Test100',
                type: 'runNode',
                rectPadding: 10,
                rectBorder: 1,
                rectBorderColor: 0xf4f4f4,
                inputLineHeight: 10
            }
        )
        runTestFlowNodeGraphicsWidget.setNodeName('Test100')
        runTestFlowNodeGraphicsWidget.setNodeType('runNode')
    }
    if(type==='runBranchNode'){
        runTestFlowNodeGraphicsWidget = new RunAndBranchTestFlowNodeGraphicsWidget(
            {
                circleRadius: 5,
                circleBorder: 1,
                circleBorderColor: 0xf4f4f4,
                lineWidth: 1,
                lineColor: 0xf4f4f4,
                rectWidth: 100,
                rectHeight: 30,
                rectText: 'Test99',
                type: 'runBranchNode',
                rectPadding: 10,
                rectBorder: 1,
                rectBorderColor: 0xf4f4f4,
                inputLineHeight: 10
            }
        )
        runTestFlowNodeGraphicsWidget.setNodeName('Test99')
        runTestFlowNodeGraphicsWidget.setNodeType('runBranchNode')
    }
    if(type==='passBin'){
        runTestFlowNodeGraphicsWidget = new PassBinTestFlowNodeGraphicsWidget(
            {
                circleRadius: 5,
                circleBorder: 1,
                circleBorderColor: 0xf4f4f4,
                lineWidth: 1,
                lineColor: 0xf4f4f4,
                rectWidth: 100,
                rectHeight: 30,
                rectText: 'Stop',
                type: 'passBin',
                rectPadding: 10,
                rectBorder: 1,
                rectBorderColor: 0xf4f4f4,
                inputLineHeight: 10,
                triangleText: 'Stop'
            }
        )
        runTestFlowNodeGraphicsWidget.setNodeName('Stop')
        runTestFlowNodeGraphicsWidget.setNodeType('passBin')
    }
    if(type==='flow'){
        runTestFlowNodeGraphicsWidget = new TestFlowNodeGraphicsWidget(
            {
                circleRadius: 5,
                circleBorder: 1,
                circleBorderColor: 0xf4f4f4,
                lineWidth: 1,
                lineColor: 0xf4f4f4,
                rectWidth: 100,
                rectHeight: 50,
                rectText: 'Flow9',
                type: 'flow',
                rectPadding: 10,
                rectBorder: 1,
                rectBorderColor: 0xf4f4f4,
                inputLineHeight: 10
            }
        )
        runTestFlowNodeGraphicsWidget.setNodeName('subFlow1')
        runTestFlowNodeGraphicsWidget.setNodeType('flow')
    }
    if(type==='concurrent'){
        let flow1= new TestFlowNodeGraphicsWidget(
            {
                circleRadius: 5,
                circleBorder: 1,
                circleBorderColor: 0xf4f4f4,
                lineWidth: 1,
                lineColor: 0xf4f4f4,
                rectWidth: 100,
                rectHeight: 50,
                rectText: 'Flowx',
                type: 'flow',
                rectPadding: 10,
                rectBorder: 1,
                rectBorderColor: 0xf4f4f4,
                inputLineHeight: 10
            }
        )
        flow1.setNodeName('subFlow1')
        flow1.setNodeType('flow')

        let flow2 = new TestFlowNodeGraphicsWidget(
            {
                circleRadius: 5,
                circleBorder: 1,
                circleBorderColor: 0xf4f4f4,
                lineWidth: 1,
                lineColor: 0xf4f4f4,
                rectWidth: 100,
                rectHeight: 50,
                rectText: 'Flowx1',
                type: 'flow',
                rectPadding: 10,
                rectBorder: 1,
                rectBorderColor: 0xf4f4f4,
                inputLineHeight: 10
            }
        )
        flow2.setNodeName('subFlow1')
        flow2.setNodeType('flow')

        const concurrentTestFlowNodeGraphicsWidget  = new ConcurrentTestFlowNodeGraphicsWidget({
            circleRadius: 5,
            circleBorder: 1,
            circleBorderColor: 0xf4f4f4,
            lineWidth: 1,
            lineColor: 0xf4f4f4,
            rectWidth: 100,
            rectHeight: 20,
            rectText: 'Concurrentx',
            type: 'concurrent',
            rectPadding: 10,
            rectBorder: 1,
            rectBorderColor: 0xf4f4f4,
            inputLineHeight: 10,
            // nodeSpacingWidth: 50,
            nodeMarginWidth: 50,
        })
        concurrentTestFlowNodeGraphicsWidget.branchs.push(
            {
            branchNodes:[flow1],
            bottomVLineItem: new LineGraphicsWidget({
                lineWidth: 1,
                lineColor: 0xf4f4f4,
            })
            }
        )
        concurrentTestFlowNodeGraphicsWidget.branchs.push(
            {
                branchNodes:[flow2],
                bottomVLineItem: new LineGraphicsWidget({
                    lineWidth: 1,
                    lineColor: 0xf4f4f4,
                })
            }
            )
        concurrentTestFlowNodeGraphicsWidget.branchs_model.push({nodes:[{type:'flow',text:'flowx',nodes:[]}]})
        concurrentTestFlowNodeGraphicsWidget.branchs_model.push({nodes:[{type:'flow',text:'flowx1',nodes:[]}]})
        runTestFlowNodeGraphicsWidget = concurrentTestFlowNodeGraphicsWidget
        runTestFlowNodeGraphicsWidget.setNodeName('Concurrentx')
        runTestFlowNodeGraphicsWidget.setNodeType('concurrent')

    }
    // 端口所属父图形
    const srcNode  = selectedPortWidget.getParentWidget()
    if(selectedPortWidget.getPortId() < 0){
        if(srcNode.isTopNode){
            testFlow.insertNode(runTestFlowNodeGraphicsWidget, selectedPortWidget)
            runTestFlowNodeGraphicsWidget.isTopNode = true
        }else{
            const dstBranchId = srcNode.getBranchIdInParent()
            // 端口所属父图形所在的分支图形
            const srcBranchNode = srcNode.getParentWidget()
            const srcNodeIndex =  srcBranchNode.nodeIndexInBranch(dstBranchId,srcNode)
            srcBranchNode.insertNodeToBranch(dstBranchId, srcNodeIndex, runTestFlowNodeGraphicsWidget)
            runTestFlowNodeGraphicsWidget.isTopNode = false
            // srcBranchNode.updateLayout()
        }
    }else{
        
        const srcNodeIndex = srcNode.nodeIndexInBranch(selectedPortWidget.getPortId(),srcNode)
        srcNode.insertNodeToBranch(selectedPortWidget.getPortId(), srcNodeIndex, runTestFlowNodeGraphicsWidget)
        srcNode.isTopNode = false
        // srcNode.updateLayout()
        
    }
    // testFlow.findAllNodesUpdateLayout()
    // testFlow.currentLevelHeight = 0
    // testFlow.setMNodeWidgetsPos()
    if(selectedBgcWidget){
        selectedBgcWidget.setSelectedBgc(true)
    }
    vscode.postMessage({
        type:'addNode',
        text: {nodes: testFlow.m_model_nodeWidgets}
    })
    // console.log(testFlow.m_nodeWidgets);
}
// 追加subflow节点到concurent节点，这里会把变更的model传给插件端
function appendSubNodeData(){
    if(selectedBgcWidget.type!=='concurrent'){
        return
    }
    const flowNodeGraphicsWidget = new TestFlowNodeGraphicsWidget(
        {
            circleRadius: 5,
            circleBorder: 1,
            circleBorderColor: 0xf4f4f4,
            lineWidth: 1,
            lineColor: 0xf4f4f4,
            rectWidth: 100,
            rectHeight: 50,
            rectText: 'Flow10',
            type: 'flow',
            rectPadding: 10,
            rectBorder: 1,
            rectBorderColor: 0xf4f4f4,
            inputLineHeight: 10
        }
    )
    flowNodeGraphicsWidget.setNodeName('subFlow1')
    flowNodeGraphicsWidget.setNodeType('flow')
    flowNodeGraphicsWidget.setOutputPortEnabled(false)
    selectedBgcWidget.insertSubFlowNode(selectedBgcWidget.getBranchCount(), flowNodeGraphicsWidget);
    // testFlow.findAllNodesUpdateLayout()
    // testFlow.currentLevelHeight = 0
    // testFlow.setMNodeWidgetsPos()
    if(selectedBgcWidget){
        selectedBgcWidget.setSelectedBgc(true)
    }
    // 拿到主轴的所有concurrent图形，更新model
    for(let i=1;i<testFlow.m_nodeWidgets.length; i++ ){
        if(testFlow.m_nodeWidgets[i]===selectedBgcWidget){
            testFlow.m_model_nodeWidgets[i-1] = selectedBgcWidget.getModel()
            break
        }
        
    }
    // 如果concurrent在深层，需要递归进入深层，更新model
    // todo
        vscode.postMessage({
            type:'addNode',
            text: {nodes: testFlow.m_model_nodeWidgets}
        })   
    
}

function runTestFlow(){
    isRun = true
    vscode.postMessage({
        type:'getNodes'
    })
}
function runTestFlowCancel(){
    isRun = false
    vscode.postMessage({
        type:'getNodes'
    })
}
// 初始化数据，每次数据更新，重新绘制整个canvas
async function clearAllGraphicsAndReDraw(data){
    if(testFlow){
        console.log('在testflow编辑器上做更新')
        testFlow.clearAllGraphics()
        testFlow.data = null
        testFlow.m_nodeWidgets = []
        testFlow.m_model_nodeWidgets = []
        selectedPortWidget = null
        selectedBgcWidget = null
        testFlow.data = data
        await testFlow.dataRender()
        testFlow.currentLevelHeight = 0
        testFlow.setMNodeWidgetsPos()
        return
    }
    console.log('初始化testflow编辑器')
    testFlow = new TestFlowEditor(document.getElementById('canvas'), data)
    await testFlow.createApp()
    await testFlow.dataRender()
    testFlow.setMNodeWidgetsPos()
    D3ZoomFun(d3SvgApp)
}
// 从插件端取出数据
async function getTestFlowData(text){
    // console.log("接手插件端数据",text);
    
    // 反序列化初始数据
    let json;
    try {
        if (!text) {
            text = '{}';
        }
        json = JSON.parse(text);
    } catch(e) {
        console.log(e);
        return;
    }
    clearAllGraphicsAndReDraw({nodes: json.nodes?json.nodes: []})
}
// Handle messages sent from the extension to the webview
window.addEventListener('message', event => {
    const message = event.data; // The json data that the extension sent
    switch (message.type) {
        case 'updateWebView':
            const text = message.text;
            // Update our webview's content
            // console.log('code',text);
            // 从后端拿数据
            getTestFlowData(text);
            // Then persist state information.
            // This state is returned in the call to `vscode.getState` below when a webview is reloaded.
            // vscode.setState({ text });

            return;
    }
});
// 第一次加载，插件端postMessage没收到情况,主动再像插件端请求初始化数据一次
function init(){
    if(testFlow){
        return
    }
    vscode.postMessage({
        type:'getNodes'
    })
}
init()





