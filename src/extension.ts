import * as vscode from 'vscode'

export function activate(context: vscode.ExtensionContext) {
  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand(
    'smaple-vscode-extension.convertAllTextToSample',
    () => {
      console.log('sampleEditor')

      const editor = vscode.window.activeTextEditor
      const doc = editor?.document
      let currentSelection = editor?.selection

      if (editor?.selection.isEmpty && doc) {
        const startPos = new vscode.Position(0, 0)
        const endPos = new vscode.Position(doc.lineCount - 1, 100000)
        currentSelection = new vscode.Selection(startPos, endPos)
      }
      editor?.edit((edit) => {
        edit.replace(currentSelection!, 'sample')
      })
    }
  )

  context.subscriptions.push(disposable)
}

// this method is called when your extension is deactivated
export function deactivate() {}
