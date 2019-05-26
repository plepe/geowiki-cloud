module.exports = {
  initialize (container) {
    if (!$('#content.app-files').length) {
      return
    }

    this.$container = container
  },

  _onEditorTrigger (filename, context) {
    console.log(filename, context)
  }
}
