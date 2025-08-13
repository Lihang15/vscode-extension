import * as assert from 'assert';
import { getNumber } from '../util';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
// import * as myExtension from '../../extension';

suite('Extension Test Suite', () => {
	vscode.window.showInformationMessage('Start all tests.');
    console.log('test start');
	
	test('getNumber function if1 test', () => {
		const result = getNumber("1");
		console.log('result if1:',result);
		assert.strictEqual(result, 3);
	});

	test('getNumber function if2 test', () => {
		const result = getNumber("2");
		assert.strictEqual(result, 2);
	});

	test('getNumber function other test', () => {
		const result = getNumber("3");
		assert.strictEqual(result, 3);
	});
});
