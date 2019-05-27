/* global OC:false, OCA:false */

const newFileMenuPlugin = require('./newFileMenuPlugin')
OCA.Geowiki = require('./editor')
OCA.Files.fileActions.registerAction({
  name: 'Edit',
  mime: 'application/vnd.geo+json',
  actionHandler: OCA.Geowiki._onEditorTrigger.bind(OCA.Geowiki),
  permissions: OC.PERMISSION_READ,
  icon: function () {
    return OC.imagePath('core', 'actions/edit')
  }
})
OCA.Files.fileActions.setDefault('application/vnd.geo+json', 'Edit')

OC.Plugins.register('OCA.Files.NewFileMenu', newFileMenuPlugin)
