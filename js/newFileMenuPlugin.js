/* global t:false */

module.exports = {
  attach: function (menu) {
    if (menu.fileList.id !== 'files') {
      return
    }

    menu.addMenuEntry({
      id: 'geoedit',
      displayName: t('geoedit', 'New Geo file'),
      templateName: t('geoedit', 'New Geo file.geojson'),
      iconClass: 'icon-filetype-text',
      fileType: 'file',
      actionHandler: function (name) {
        let dir = menu.fileList.getCurrentDirectory()

        menu.fileList.createFile(name).then(function () {
          console.log('should now edit the new file')
        })
      }
    })
  }
}
