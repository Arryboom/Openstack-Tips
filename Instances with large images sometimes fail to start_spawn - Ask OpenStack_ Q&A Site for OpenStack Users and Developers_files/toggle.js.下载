var Toggle = function() {
    this._state = 'off-state';
    this._messages = {};
    this._states = [
        'on-state',
        'off-state',
        'on-prompt',
        'off-prompt'
    ];
};
inherits(Toggle, SimpleControl);

Toggle.prototype.resetStyles = function () {
    var element = this._element;
    var states = this._states;
    $.each(states, function (idx, state) {
        element.removeClass(state);
    });
    this.setText('');
};

Toggle.prototype.isOn = function () {
    return this._element.data('isOn');
};

Toggle.prototype.isCheckBox = function () {
    var element = this._element;
    return element.attr('type') === 'checkbox';
};

Toggle.prototype.setState = function (state) {
    var element = this._element;
    var oldState = this._state;
    this._state = state;
    if (element) {
        this.resetStyles();
        element.addClass(state);
        if (state === 'on-state') {
            element.data('isOn', true);
        } else if (state === 'off-state') {
            element.data('isOn', false);
        }
        if (this.isCheckBox()) {
            if (state === 'on-state') {
                element.attr('checked', true);
            } else if (state === 'off-state') {
                element.attr('checked', false);
            }
        } else {
            this.setText(this._messages[state]);
        }
        this._element.trigger(
            'askbot.Toggle.stateChange',
            {'oldState': oldState, 'newState': state}
        );
    }
};

Toggle.prototype.toggleState = function () {
    if (this.isOn()) {
        this.setState('off-state');
    } else {
        this.setState('on-state');
    }
};

Toggle.prototype.setText = function (text) {
    var btnText = this._element.find('.js-btn-text');
    var where  = btnText.length ? btnText : this._element;
    where.html(text);
};

Toggle.prototype.setMessages = function(messages) {
    $.extend(this._messages, messages);
};

Toggle.prototype.setMessage = function(state, text) {
    this._messages[state] = text;
};

Toggle.prototype.createDom = function () {
    //limitation is that we make a div with createDom
    var element = this.makeElement('div');
    this._element = element;

    var messages = this._messages || {};

    messages['on-state'] = messages['on-state'] || gettext('enabled');
    messages['off-state'] = messages['off-state'] || gettext('disabled');

    element.data('onStateText', messages['on-state']);
    element.data('offStateText', messages['off-state']);
    element.data('onPromptText', messages['on-prompt'] || messages['off-state']);
    element.data('offPromptText', messages['off-prompt'] || messages['on-state']);

    this.decorate(element);
};

Toggle.prototype.decorate = function (element) {
    this._element = element;
    //read messages for all states
    var messages = {};
    messages['on-state'] = element.data('onStateText') || gettext('enabled');
    messages['off-state'] = element.data('offStateText') || gettext('disabled');
    messages['on-prompt'] = element.data('onPromptText') || messages['off-state'];
    messages['off-prompt'] = element.data('offPromptText') || messages['on-state'];
    this._messages = messages;


    //detect state and save it
    if (this.isCheckBox()) {
        this._state = this._state || (element.is(':checked') ? 'on-state' : 'off-state');
    } else {
        this._state = this._state || (element.data('isOn') ? 'on-state' : 'off-state');
    }
    this.setState(this._state);

    //set mouseover handler only for non-checkbox version
    if (this.isCheckBox() === false) {
        var me = this;
        element.mouseover(function () {
            var is_on = me.isOn();
            if (is_on) {
                me.setState('off-prompt');
            } else {
                me.setState('on-prompt');
            }
            return false;
        });
        element.mouseout(function () {
            var is_on = me.isOn();
            if (is_on) {
                me.setState('on-state');
            } else {
                me.setState('off-state');
            }
            return false;
        });
    }

    setupButtonEventHandlers(element, this.getHandler());
};
