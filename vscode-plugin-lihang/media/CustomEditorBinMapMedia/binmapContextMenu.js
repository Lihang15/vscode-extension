
 document.addEventListener('contextmenu', function(event) {
		event.preventDefault(); // 阻止默认的右键菜单

		// 创建自定义的右键菜单
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
		addItem.textContent = 'Insert';
		addItem.addEventListener('click', function() {
			// 在此处执行添加操作
			vscode.postMessage({ type: 'add' });
		});
		menu.appendChild(addItem);

		const deleteItem = document.createElement('li');
        deleteItem.style.marginBottom = '10px'
        const deleteItemOriginalBackgroundColor = deleteItem.style.backgroundColor;
        deleteItem.addEventListener('mouseleave', () => {
            deleteItem.style.backgroundColor = deleteItemOriginalBackgroundColor; // 恢复原始背景色
        });
        deleteItem.addEventListener('mouseenter', () => {
            deleteItem.style.backgroundColor = '#f0f0f0'; // 鼠标悬停时的背景色
        });
		deleteItem.textContent = 'Remove';
		deleteItem.addEventListener('click', function() {
			// 在此处执行删除操作
			vscode.postMessage({ type: 'delete' });
		});
		menu.appendChild(deleteItem);

        const AppendBinRow = document.createElement('li');
		AppendBinRow.textContent = 'Append Bin Row';
        const AppendBinRowOriginalBackgroundColor = deleteItem.style.backgroundColor;
        AppendBinRow.addEventListener('mouseleave', () => {
            AppendBinRow.style.backgroundColor = AppendBinRowOriginalBackgroundColor; // 恢复原始背景色
        });
        AppendBinRow.addEventListener('mouseenter', () => {
            AppendBinRow.style.backgroundColor = '#f0f0f0'; // 鼠标悬停时的背景色
        });
		AppendBinRow.addEventListener('click', function() {
			// 在此处执行删除操作
			vscode.postMessage({ type: 'appendBinRow' });
		});
		menu.appendChild(AppendBinRow);

		// 设置菜单位置
		menu.style.left = event.clientX + 'px';
		menu.style.top = event.clientY + 'px';

		// 将菜单添加到文档中
		document.body.appendChild(menu);

		// 点击其他地方时隐藏菜单
		document.addEventListener('click', function() {
			document.body.removeChild(menu);
		});
	});