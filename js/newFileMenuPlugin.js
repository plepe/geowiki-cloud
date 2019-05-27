/* global t:false */

module.exports = {
  attach: function (menu) {
    if (menu.fileList.id !== 'files') {
      return
    }

    menu.addMenuEntry({
      id: 'geowiki',
      displayName: t('geowiki', 'New Geowiki file'),
      templateName: t('geowiki', 'geowiki.geojson'),
      iconClass: 'icon-filetype-text',
      fileType: 'file',
      actionHandler: function (name) {
        let dir = menu.fileList.getCurrentDirectory()

        menu.fileList.createFile(name).then(function () {
          OCA.Geowiki._onEditorTrigger(
            name, { fileList, dir }
          )
        })
      }
    })
  }
}
