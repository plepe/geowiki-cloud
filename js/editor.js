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
  }
}
