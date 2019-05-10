meteor-autoform-duallistbox
=====================

Adds the ability to use a transfer select to Autoform. It uses the
[Bootstrap Dual Listbox](https://github.com/istvan-ujjmeszaros/bootstrap-duallistbox) library.

Originally forked from [AutoForm Select Transfer](https://atmospherejs.com/gfknl/autoform-select-transfer).
The fork was done to update the bootstrap dual list box component to its latest version and also to add compatibility with some missing AutoForm settings, like the default "disabled" state which is not present by defaut in the bootstrapDualListBox component.

Install
-----
To install the package run the following command:
```
meteor add ecarlotti:autoform-duallistbox
```

Usage
-----

```
{{> afQuickField name='myOption' class='input-sm' type='duallistbox' multiple='true' options=selectOptions bootstrapDualListboxOptions=bootstrapDualListBoxOptions}}
```

```
Template.x.helpers({
  selectOptions: function() {
    return [
     { label: 'Some label', value: 'Some value'},
     { label: 'Some label 2', value: 'Some value2'},
     ...
    ];
  },
  bootstrapDualListBoxOptions: function() {
    return {
      moveOnSelect: false,
      moveOnDoubleClick: true,
      preserveSelectionOnMove: false,
      showFilterInputs: true,
      nonSelectedFilter: '',
      selectedFilter: '',
      btnClass: 'btn-default'
    };
  }
});
```
