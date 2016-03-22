Package.describe({
  summary: 'Autoform input type for a transfer select',
  version: '0.0.1',
  name: 'gfknl:autoform-select-transfer'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('templating@1.0.0');
  api.use('blaze@2.0.0');
  api.use('aldeed:autoform@5.0.0');
  api.addFiles([
    'lib/bootstrap-duallistbox.css',
    'lib/jquery.bootstrap-duallistbox.js',
    'select-transfer.html',
    'select-transfer.js'
  ], 'client');
});
