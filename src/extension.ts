import * as vscode from 'vscode'

export function activate(context: vscode.ExtensionContext) {
  console.log(
    'Congratulations, your extension "smaple-vscode-extension" is now active!'
  )

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand(
    'smaple-vscode-extension.helloWorld',
    () => {
      vscode.window
        .showInputBox({
          prompt: 'Tiny Calculator: ',
          validateInput: (param) => {
            const regex = /\d+\s*[-+*/]\s*\d/
            return regex.test(param) ? '' : 'input: number [-+*/] number'
          },
        })
        .then((value) => {
          if (value === undefined) {
            return
          }
          const result = eval(value)
          vscode.window.showInformationMessage(value + '=' + result)
        })
    }
  )

  context.subscriptions.push(disposable)
}

// this method is called when your extension is deactivated
export function deactivate() {}
