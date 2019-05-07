meteor-autoform-duallistbox
=====================

Adds the ability to use a transfer select to Autoform. It uses the
[Bootstrap Dual Listbox](https://github.com/istvan-ujjmeszaros/bootstrap-duallistbox) library.

Install
-----
To install the package run the following command:
```
meteor add ecarlotti:autoform-duallistbox
```

Usage
-----

```
{{> afQuickField name='myOption' class='input-sm' type='duallistbox' multiple='true' options=selectTransferOptions}}
```

```
Template.x.helpers({
  selectTransferOptions: function() {
    return [
     { label: 'Some label', value: 'Some value'},
     { label: 'Some label 2', value: 'Some value2'},
     ...
    ];
  }
});
```
