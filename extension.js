// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	const createSvelte = vscode.commands.registerCommand('svelte-vgs.createSvelte', uri => {
		vscode.window.showInformationMessage('Svelte starting');

		// Kill all running terminals
		vscode.window.terminals.forEach(t => {
			t.dispose();
		})

		const terminal = vscode.window.createTerminal("svelte-terminal");
		terminal.show();
		terminal.sendText(`cd "${uri.fsPath}"`);
		terminal.sendText("npx degit https://github.com/thorcc/svelte-eksamen-starter .");
		terminal.sendText("npm install");
		terminal.sendText("npm run dev");
	});

	const buildSvelte = vscode.commands.registerCommand('svelte-vgs.buildSvelte', uri => {
		vscode.window.showInformationMessage('Building Svelte project');

		// Kill all running terminals
		vscode.window.terminals.forEach(t => {
			t.dispose();
		})
		const terminal = vscode.window.createTerminal("svelte-terminal");
		terminal.show();
		terminal.sendText(`cd "${uri.fsPath}"`);
		terminal.sendText("npm run build");
	})

	const runSvelte = vscode.commands.registerCommand('svelte-vgs.runSvelte', uri => {
		vscode.window.showInformationMessage('Running Svelte project');

		// Kill all running terminals
		vscode.window.terminals.forEach(t => {
			t.dispose();
		})
		const terminal = vscode.window.createTerminal("svelte-terminal");
		terminal.show();
		terminal.sendText(`cd "${uri.fsPath}"`);
		terminal.sendText("npm run dev");
	})

	context.subscriptions.push(createSvelte, buildSvelte, runSvelte);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
