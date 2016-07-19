var read = require('read-directory')

var minidocs = require('minidocs')({
  title: 'minidocs',
  contents: './contents',
  markdown: './markdown',
  logo: './logo.svg'
})

var tree = minidocs.start()
document.body.appendChild(tree)
