AutoForm.addInputType("duallistbox", {
    template: "afDualListBox",
    valueIsArray: true,
    valueOut: function () {
        return AutoForm.Utility.getSelectValues(this[0]);
    },
    contextAdjust: function (context) {
        // build items list
        context.items = _.map(context.selectOptions, function (opt) {
            if (opt.optgroup) {
                var subItems = _.map(opt.options, function (subOpt) {
                    return {
                        name: context.name,
                        label: subOpt.label,
                        value: subOpt.value,
                        htmlAtts: _.omit(subOpt, 'label', 'value'),
                        // _id must be included because it is a special property that
                        // #each uses to track unique list items when adding and removing them
                        // See https://github.com/meteor/meteor/issues/2174
                        _id: subOpt.value,
                        selected: _.contains(context.value, subOpt.value),
                        atts: context.atts
                    };
                });
                return {
                    optgroup: opt.optgroup,
                    items: subItems
                };
            } else {
                return {
                    name: context.name,
                    label: opt.label,
                    value: opt.value,
                    htmlAtts: _.omit(opt, 'label', 'value'),
                    // _id must be included because it is a special property that
                    // #each uses to track unique list items when adding and removing them
                    // See https://github.com/meteor/meteor/issues/2174
                    _id: opt.value,
                    selected: _.contains(context.value, opt.value),
                    atts: context.atts
                };
            }
        });

        Tracker.afterFlush(function() {
            this.$('select').bootstrapDualListbox('refresh');
        });

        return context;
    }
});

Template.afDualListBox.onRendered(function () {
    this.$('select').bootstrapDualListbox(this.data.atts.bootstrapDualListboxOptions || {});
});

Template.afDualListBox.onDestroyed(function () {
    try {
        if (this.view && this.view._domrange) {
            this.$('select').bootstrapDualListbox('destroy');
        }
    } catch (error) {
    }
});
