Package.describe({
  summary: 'Autoform input type for a Bootstrap DualListBox',
  version: '0.0.4',
  name: 'ecarlotti:autoform-duallistbox'
});

Package.onUse(function(api) {
  api.versionsFrom('1.8.0.2');
  api.use('templating@1.3.2');
  api.use('blaze@2.3.3');
  api.use('aldeed:autoform@6.3.0');
  api.addFiles([
    'lib/bootstrap-duallistbox.css',
    'lib/jquery.bootstrap-duallistbox.js',
    'afduallistbox.html',
    'afduallistbox.js'
  ], 'client');
});
