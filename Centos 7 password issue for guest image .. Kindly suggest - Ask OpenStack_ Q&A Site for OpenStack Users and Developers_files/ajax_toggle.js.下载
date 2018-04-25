/**
 * A button on which user can click
 * and change status with regard to certain item (follow/unfollow something,
 * join/leave group, or toggle some state)
 * The button has four states on-prompt, off-prompt, on-state and off-state
 * on-prompt is activated on mouseover, when user is not part of group
 * off-prompt - on mouseover, when user is part of group
 * on-state - when user is part of group and mouse is not over the button
 * off-state - same as above, but when user is not part of the group
 */
var AjaxToggle = function () {
    Toggle.call(this);
    this._handler = this.getDefaultHandler();
    this._postData = {};
    this.toggleUrl = '';//public property
    this.setupDefaultDataValidators();
};
inherits(AjaxToggle, Toggle);

AjaxToggle.prototype.setPostData = function (data) {
    this._postData = data;
};

AjaxToggle.prototype.getPostData = function () {
    return this._postData;
};

AjaxToggle.prototype.setupDefaultDataValidators = function () {
    this._validators = {
        'success': function (data) { return data.success; },
        'enabled': function (data) { return data.is_enabled; }
    }
};

AjaxToggle.prototype.setDataValidator = function (name, func) {
    if (name === 'success' || name === 'enabled') {
        this._validators[name] = func;
    } else {
        throw 'unknown validator name ' + name;
    }
};

/**
 * func must either return `true` or `false`
 * if `false` is returned, data submission will be canceled
 */
AjaxToggle.prototype.setBeforeSubmitHandler = function(func) {
    this._beforeSubmitHandler = func;
};

AjaxToggle.prototype.getBeforeSubmitHandler = function () {
    return this._beforeSubmitHandler;
};

AjaxToggle.prototype.datumIsValid = function (validatorName, data) {
    return this._validators[validatorName](data);
};

AjaxToggle.prototype.getDefaultHandler = function () {
    var me = this;
    return function () {
        var handler = me.getBeforeSubmitHandler();
        if (handler && handler() === false) {
            return;
        }
        var data = me.getPostData();
        data.disable = me.isOn();
        /* @todo: need ability to prevent the ajax call
         * and do something else in certain conditions.
         * For example - invite an unauthenticated user to log in.
         * This functionality can be better
         * defined in the "SimpleControl".
         */
        $.ajax({
            type: 'POST',
            dataType: 'json',
            cache: false,
            url: me.toggleUrl,
            data: data,
            success: function (data) {
                if (me.datumIsValid('success', data)) {
                    if (me.datumIsValid('enabled', data)) {
                        me.setState('on-state');
                    } else {
                        me.setState('off-state');
                    }
                    me.getElement().trigger('askbot.two-state-toggle.success', data);
                } else {
                    if (data.message) {
                        showMessage(me.getElement(), data.message);
                    }
                    me.getElement().trigger('askbot.two-state-toggle.error', data);
                }
            }
        });
    };
};

AjaxToggle.prototype.decorate = function (element) {
    this.toggleUrl = element.data('toggleUrl');
    getSuperClass(AjaxToggle).decorate.call(this, element);
};
