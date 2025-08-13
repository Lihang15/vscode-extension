// @ts-check

// Script run within the webview itself.
const vscode = acquireVsCodeApi();
(function () {

	// Get a reference to the VS Code webview api.
	// We use this API to post messages back to our extension.

	// @ts-ignore
	
	const container = /** @type {HTMLElement} */ (document.querySelector('.container'));

	const errorContainer = document.createElement('div');
	document.body.appendChild(errorContainer);
	errorContainer.className = 'error'
	errorContainer.style.display = 'none'

	/**
	 * Render the document in the webview.
	 */
function updateContent(/** @type {string} */ text, diagnostics) {
    console.log(text,'diagnostics', diagnostics);

    let json;
    try {
        if (!text) {
            text = '{}';
        }
        json = JSON.parse(text);
    } catch {
        errorContainer.innerText = 'Error: Document is not valid json';
        errorContainer.style.display = '';
        return;
    }
    container.style.display = '';
    errorContainer.style.display = 'none';

    const tableBody = document.getElementById('table-body'); 
    tableBody.innerHTML = '';
    
    let rowIndex = 0;

    // 提前收集 diagnostics 中所有的 error 数字
    const errorValues = (diagnostics || []).reduce((acc, item) => acc.concat(item.error), []);;

    for (const item of json.tableData || []) {
        const row = document.createElement('tr');  

        // ✅ 检查当前行的 SoftwareBinNumber 是否在 errorValues 里
        let hasError = []
		
        if(item.text.SoftwareBinNumber){
            hasError = errorValues.includes(parseInt(item.text.SoftwareBinNumber));
        }
        console.log('errorv',errorValues)
		console.log('value',item.text.SoftwareBinNumber)
		console.log('haserr',hasError)
        row.innerHTML = `  
            <td>${item.text.ID}</td>
            <td>
                <input 
                    type="number" 
                    class="software-bin-input ${hasError ? 'input-error' : ''}" 
                    data-id="${item.text.ID}" 
                    value="${item.text.SoftwareBinNumber}">
            </td>    
            <td>${item.text.SoftwareBinName}</td>  
            <td>${item.text.hardwareBinNumber}</td>  
            <td>${item.text.HardwareBinName}</td>  
            <td>${item.text.BinMode}</td>  
            <td>${item.text.BinPriority}</td>  
            <td>${item.text.BinColor}</td>  
        `;  

        if (++rowIndex === 21) {  
            row.style.border = '2px solid red';  
        }  
        tableBody.appendChild(row);  
    }

    //  给所有 input 绑定事件（失焦或输入后发送修改）
    tableBody.querySelectorAll('.software-bin-input').forEach(input => {
        input.addEventListener('change', (e) => {
            const target = e.target;
            vscode.postMessage({
                type: 'edit',
                message: {
                    id: target.dataset.id,
                    field: 'SoftwareBinNumber',
                    value: parseInt(target.value)
                }
            });
        });
    });
}


	// Handle messages sent from the extension to the webview
	window.addEventListener('message', event => {
		const message = event.data; // The json data that the extension sent
		switch (message.type) {
			case 'update':
				const text = message.text;
                const diagnostics = message.diagnostics
				// Update our webview's content
				updateContent(text,diagnostics);

				// Then persist state information.
				// This state is returned in the call to `vscode.getState` below when a webview is reloaded.
				vscode.setState({ text,diagnostics });

				return;
			case 'diagnostic':
				console.log(message.text);
		}
	});

	// Webviews are normally torn down when not visible and re-created when they become visible again.
	// State lets us save information across these re-loads
	// 页面标签切换后，html端会重新加载，插件端不会重新加载，
    // 页签关闭后，html端和插件端都会重新加载
	// 缓存model数据，用于标签页切换
	const state = vscode.getState();
	if (state) {
		updateContent(state.text,state.diagnostics);
	}
	console.log('state',state);
}());
