$.fn.extend({
    dropdown: function(option = new Array()) {
        $(this).each(function() {
            const id = $(this)[0].id;
            const self = this;
            const selector = $(self);
            const append = option.append == undefined ? "" : option.append;
            selector.children()
                .remove()
                .end()
                .append(append);
        });
    },
});