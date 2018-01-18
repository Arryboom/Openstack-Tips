var ExpanderToggle = function (expandable) {
    Toggle.call(this);
    this.setExpandable(expandable);
    this._handler = this.getExpanderHandler();
};
inherits(ExpanderToggle, Toggle);

ExpanderToggle.prototype.setCollapsed = function (collapsed) {
    if (collapsed) {
        this.setState('off-state');
    } else {
        this.setState('on-state');
    }
};

ExpanderToggle.prototype.setExpandable = function(expandable) {
    this._expandable = expandable;
};

ExpanderToggle.prototype.getExpandable = function() {
    return this._expandable;
};

ExpanderToggle.prototype.getExpanderHandler = function () {
    var me = this;
    return function () {
        me.toggleState();
        var expandable = me.getExpandable();
        if (expandable) {
            if (me.isOn()) {
                expandable.show();
            } else {
                expandable.hide();
            }
        }
    };
};
