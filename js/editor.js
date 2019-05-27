const Editor = require('geowiki-editor')

module.exports = {
  initialize (container) {
    if (!$('#content.app-files').length) {
      return
    }

    this.$container = container
  },

  _onEditorTrigger (filename, context) {
    let editor
    let mtime
    let parentDom = document.getElementById('content')

    let dom = document.createElement('div')
    dom.id = 'geowiki'
    parentDom.style.position = 'relative'
    parentDom.appendChild(dom)

    let controls = document.createElement('div')
    controls.className = 'editor_controls'
    dom.appendChild(controls)

    let x = document.createElement('small')
    x.className = 'filename'
    x.appendChild(document.createTextNode(filename))
    controls.appendChild(x)

    x = document.createElement('button')
    x.className = 'icon-close svg'
    controls.appendChild(x)
    x.onclick = () => parentDom.removeChild(dom)

    x = document.createElement('button')
    x.appendChild(document.createTextNode('💾'))
    controls.appendChild(x)
    x.onclick = () => {
      console.log('here')
      this.saveFile(context.dir, filename, editor.save(), mtime, err => {
        if (err) {
          return console.error(err)
        }
      })
    }

    let mapDiv = document.createElement('div')
    mapDiv.className = 'map'
    dom.appendChild(mapDiv)

    editor = new Editor({ dom: mapDiv })

    this.loadFile(context.dir, filename, (err, filedata) => {
      if (err) {
        return console.error(err)
      }

      mtime = filedata.mtime
      editor.load(filedata.filecontents)
    })
  },

  loadFile(dir, filename, callback) {
    $.get(OC.generateUrl('/apps/geowiki/ajax/loadfile'), { dir, filename })
      .done(data => callback(null, data))
      .fail(err => callback(JSON.parse(err.responseText).message))
  },

  saveFile(dir, filename, filecontents, mtime, callback) {
    $.ajax({
      type: 'PUT',
      url: OC.generateUrl('/apps/geowiki/ajax/savefile'),
      data: {
        path: dir + '/' + filename,
        filecontents,
        mtime
      }
    })
      .done(data => callback(null, data))
      .fail(err => callback(JSON.parse(err.responseText).message))
  }
}
