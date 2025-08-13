// 上下文菜单
document.body.addEventListener('contextmenu', (event) => {

    event.preventDefault();
    //     // 创建自定义的右键菜单
    const menu = document.createElement('ul');
    menu.style.position = 'absolute';
    menu.style.listStyleType = 'none';
    menu.style.backgroundColor = 'rgb(20, 3, 3)';
    menu.style.padding = '10px';

    // 添加菜单项
    const addItem = document.createElement('li');
    addItem.style.marginBottom = '10px'
    const originalBackgroundColor = addItem.style.backgroundColor;
    addItem.addEventListener('mouseleave', () => {
        addItem.style.backgroundColor = originalBackgroundColor; // 恢复原始背景色
    });
    addItem.addEventListener('mouseenter', () => {
        addItem.style.backgroundColor = '#f0f0f0'; // 鼠标悬停时的背景色
    });
    addItem.textContent = 'Run Node';
    addItem.addEventListener('click', function () {
        // 在此处执行添加操作
        // vscode.postMessage({ type: 'add' });
        // const nodeWidget = {
        //     type: 'runNode',
        //     text: 'Test100'
        // }
        insertData('runNode')  
    });
    menu.appendChild(addItem);
    //--------------------------------------------------
    const addRunBranchNode = document.createElement('li');
    addRunBranchNode.style.marginBottom = '10px'
    addRunBranchNode.textContent = 'Run Branch Node';
    addRunBranchNode.addEventListener('mouseleave', () => {
        addRunBranchNode.style.backgroundColor = originalBackgroundColor; // 恢复原始背景色
    });
    addRunBranchNode.addEventListener('mouseenter', () => {
        addRunBranchNode.style.backgroundColor = '#f0f0f0'; // 鼠标悬停时的背景色
    });
    addRunBranchNode.addEventListener('click', function () {
        // 在此处执行添加操作
        // vscode.postMessage({ type: 'add' });
        // 获取鼠标点击位置
        insertData('runBranchNode')
    });
    menu.appendChild(addRunBranchNode);
     //--------------------------------------------------
     const addPassBinNode = document.createElement('li');
     addPassBinNode.style.marginBottom = '10px'
     addPassBinNode.textContent = 'pass Bin Node';
     addPassBinNode.addEventListener('mouseleave', () => {
        addPassBinNode.style.backgroundColor = originalBackgroundColor; // 恢复原始背景色
     });
     addPassBinNode.addEventListener('mouseenter', () => {
        addPassBinNode.style.backgroundColor = '#f0f0f0'; // 鼠标悬停时的背景色
     });
     addPassBinNode.addEventListener('click', function () {
         // 在此处执行添加操作
         // vscode.postMessage({ type: 'add' });
         // 获取鼠标点击位置
         insertData('passBin')
     });
     menu.appendChild(addPassBinNode);

    //--------------------------------------------------
    const addFlowNode = document.createElement('li');
    addFlowNode.style.marginBottom = '10px'
    addFlowNode.textContent = 'flow Node';
    addFlowNode.addEventListener('mouseleave', () => {
        addFlowNode.style.backgroundColor = originalBackgroundColor; // 恢复原始背景色
    });
    addFlowNode.addEventListener('mouseenter', () => {
        addFlowNode.style.backgroundColor = '#f0f0f0'; // 鼠标悬停时的背景色
    });
    addFlowNode.addEventListener('click', function () {
        // 在此处执行添加操作
        // vscode.postMessage({ type: 'add' });
        // 获取鼠标点击位置
        insertData('flow')
    });
    menu.appendChild(addFlowNode);
     //--------------------------------------------------
     const addConcurrentNode = document.createElement('li');
     addConcurrentNode.style.marginBottom = '10px'
     addConcurrentNode.textContent = 'concurrent Node';
     addConcurrentNode.addEventListener('mouseleave', () => {
        addConcurrentNode.style.backgroundColor = originalBackgroundColor; // 恢复原始背景色
     });
     addConcurrentNode.addEventListener('mouseenter', () => {
        addConcurrentNode.style.backgroundColor = '#f0f0f0'; // 鼠标悬停时的背景色
     });
     addConcurrentNode.addEventListener('click', function () {
         // 在此处执行添加操作
         // vscode.postMessage({ type: 'add' });
         // 获取鼠标点击位置
         insertData('concurrent')
     });
     menu.appendChild(addConcurrentNode);

    //--------------------------------------------------
    const append = document.createElement('li');
    append.style.marginBottom = '10px'
    append.textContent = 'Append Sub Flow';
    append.addEventListener('mouseleave', () => {
        append.style.backgroundColor = originalBackgroundColor; // 恢复原始背景色
    });
    append.addEventListener('mouseenter', () => {
        append.style.backgroundColor = '#f0f0f0'; // 鼠标悬停时的背景色
    });
    append.addEventListener('click', function () {
        // 在此处执行添加操作
        // vscode.postMessage({ type: 'add' });
        // 获取鼠标点击位置
        appendSubNodeData()
    });
    menu.appendChild(append);
    //--------------------------------------------------
    const run = document.createElement('li');
    run.style.marginBottom = '10px'
    run.textContent = 'Run Test Flow';
    run.addEventListener('mouseleave', () => {
        run.style.backgroundColor = originalBackgroundColor; // 恢复原始背景色
    });
    run.addEventListener('mouseenter', () => {
        run.style.backgroundColor = '#f0f0f0'; // 鼠标悬停时的背景色
    });
    run.addEventListener('click', function () {
        // 在此处执行添加操作
        // vscode.postMessage({ type: 'add' });
        // 获取鼠标点击位置
        runTestFlow()
    });
    menu.appendChild(run);

    //--------------------------------------------------

    const cancel = document.createElement('li');
    cancel.style.marginBottom = '10px'
    cancel.textContent = 'Cancel Run Status';
    cancel.addEventListener('mouseleave', () => {
        cancel.style.backgroundColor = originalBackgroundColor; // 恢复原始背景色
    });
    cancel.addEventListener('mouseenter', () => {
        cancel.style.backgroundColor = '#f0f0f0'; // 鼠标悬停时的背景色
    });
    cancel.addEventListener('click', function () {
        // 在此处执行添加操作
        // vscode.postMessage({ type: 'add' });
        // 获取鼠标点击位置
        runTestFlowCancel()
    });
    menu.appendChild(cancel);

    //--------------------------------------------------
    // 设置菜单位置
    menu.style.left = event.clientX + 'px';
    menu.style.top = event.clientY + 'px';

    // 将菜单添加到文档中
    document.body.appendChild(menu);

    // 点击其他地方时隐藏菜单
    document.addEventListener('click', function () {
        if(document.contains(menu)){
            document.body.removeChild(menu);
        }
        
    });

});