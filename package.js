Package.describe({
  summary: 'Autoform input type for a Bootstrap DualListBox',
  version: '0.0.1',
  name: 'ecarlotti:autoform-duallistbox'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('templating');
  api.use('blaze');
  api.use('aldeed:autoform');
  api.addFiles([
    'lib/bootstrap-duallistbox.css',
    'lib/jquery.bootstrap-duallistbox.js',
    'afduallistbox.html',
    'afduallistbox.js'
  ], 'client');
});
