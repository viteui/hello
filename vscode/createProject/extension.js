// import * as vscode from 'vscode';
const vscode = require("vscode");
// import * as path from 'path';
// import * as fs from 'fs';
function activate(context) {
	console.log('插件已经被激活',context);
   const createVueFileDisposable = vscode.commands.registerCommand('yunyin.createKunlunPage', (uri) => {
       console.log(uri.path)
    });
    context.subscriptions.push(createVueFileDisposable);

    // let createLessFileDisposable = vscode.commands.registerCommand('extension.createLessFile', (uri) => {
    //     createFile(uri, '.less');
    // });
    // context.subscriptions.push(createLessFileDisposable);
	
}

// function createFile(uri, extname) {
//     let folderPath = path.dirname(uri.fsPath);
//     let fileName = path.basename(uri.fsPath, path.extname(uri.fsPath)) + extname;
//     let filePath = path.join(folderPath, fileName);
//     if (fs.existsSync(filePath)) {
//         vscode.window.showErrorMessage(`File ${fileName} already exists`);
//         return;
//     }
//     fs.writeFileSync(filePath, '');
//     vscode.workspace.openTextDocument(filePath).then((document) => {
//         vscode.window.showTextDocument(document);
//     });
// }


module.exports = {
	activate
} 