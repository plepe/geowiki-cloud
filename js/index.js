/* global OC:false, OCA:false */

const newFileMenuPlugin = require('./newFileMenuPlugin')
OCA.Geoedit = require('./editor')
OCA.Files.fileActions.registerAction({
  name: 'Edit',
  mime: 'application/vnd.geo+json',
  actionHandler: OCA.Geoedit._onEditorTrigger.bind(OCA.Geoedit),
  permissions: OC.PERMISSION_READ,
  icon: function () {
    return OC.imagePath('core', 'actions/edit')
  }
})
OCA.Files.fileActions.setDefault('application/vnd.geo+json', 'Edit')

OC.Plugins.register('OCA.Files.NewFileMenu', newFileMenuPlugin)
