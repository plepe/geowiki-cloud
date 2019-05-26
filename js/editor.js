const Editor = require('geoedit-editor')

module.exports = {
  initialize (container) {
    if (!$('#content.app-files').length) {
      return
    }

    this.$container = container
  },

  _onEditorTrigger (filename, context) {
    let parentDom = document.getElementById('content')
    let dom = document.createElement('div')
    dom.id = 'geoedit'
    parentDom.style.position = 'relative'
    parentDom.appendChild(dom)

    let editor = new Editor({ dom })

    this.loadFile(context.dir, filename, (err, filedata) => {
      if (err) {
        return console.error(err)
      }

      editor.load(filedata.filecontents)
    })
  },

  loadFile(dir, filename, callback) {
    $.get(OC.generateUrl('/apps/geoedit/ajax/loadfile'), { dir, filename })
      .done(data => callback(null, data))
      .fail(err => callback(JSON.parse(err.responseText).message))
  }
}
