var HoverCardTrigger = function() {
    WrappedElement.call(this);
    this._hoverCardClass = HoverCard;
};
inherits(HoverCardTrigger, WrappedElement);

HoverCardTrigger.prototype.decorate = function (element) {
    this._element = element;
    var hoverCard = new this._hoverCardClass();
    this._hoverCard = hoverCard;
    $('body').append(hoverCard.getElement());

    hoverCard.setTrigger(this);
    var url = element.data('fetchDataUrl');
    if (url) {
        hoverCard.setFetchDataUrl(url);
    }

    var onEnter = hoverCard.getOpenHandler();
    var onExit = hoverCard.getCloseHandler();
    element.hover(onEnter, onExit);
    var onClose = hoverCard.getBodyClickHandler();
    $('body').click(onClose);
};


var HoverCard = function () {
    WrappedElement.call(this);
    this._openTimeout = 'inactive';
    this._closeTimeout = 'inactive';
    this._dataStatus = 'not-loaded';//not-loaded|loading|loaded
    this._timeoutDuration = 300;
};
inherits(HoverCard, WrappedElement);

HoverCard.prototype.setContent = function (data) {
    this._element.html('This is a hovercard, use function setContent to customize');
};

HoverCard.prototype.setTrigger = function (trigger) {
    this._trigger = trigger;
};

HoverCard.prototype.setPosition = function () {
    var trigger = this._trigger.getElement();
    var coors = trigger.offset();
    var height = trigger.outerHeight();
    var triangle = this._element.find('.triangle');
    var triangleHeight = triangle.outerHeight();
    this._element.css({
        'top': coors.top + height + triangleHeight,
        'left': coors.left
    });
};

HoverCard.prototype.setFetchDataUrl = function (url) {
    this._fetchDataUrl = url;
};

HoverCard.prototype.startLoadingData = function () {
    var me = this;
    $.ajax({
        type: 'GET',
        dataType: 'json',
        cache: false,
        url: this._fetchDataUrl,
        success: function (data) {
            if (data.success) {
                me.setData(data);
                me.setDataStatus('loaded');
                var openStatus = me.getTimeoutStatus('open');
                var closeStatus = me.getTimeoutStatus('close');
                if (openStatus == 'expired' && closeStatus == 'inactive') {
                    me.show();
                }
            } else {
                notify.show(data.message);
            }
        }
    });
    me.setDataStatus('loading');
};

HoverCard.prototype.setDataStatus = function (dataStatus) {
    this._dataStatus = dataStatus;
};

HoverCard.prototype.getDataStatus = function () {
    return this._dataStatus;
};

HoverCard.prototype.setData = function (data) {
    this._data = data;
};

HoverCard.prototype.getData = function () {
    return this._data;
};

HoverCard.prototype.show = function () {
    this.setContent(this.getData());
    this.setPosition();
    this.getElement().show();
};

HoverCard.prototype.getOpenTimeoutHandler = function () {
    var me = this;
    return function () {
        me.setTimeout('open', 'expired');
        if (me.getDataStatus() == 'loaded') {
            me.clearTimeout('close');
            me.setTimeout('close', 'inactive');
            me.show();
        }
    };
};

HoverCard.prototype.getOpenHandler = function () {
    var me = this;
    var duration = this._timeoutDuration;
    return function () {
        me.clearTimeout('close');
        me.setTimeout('close', 'inactive');

        if (me.getTimeoutStatus('open') == 'active') {
            return;
        }

        var dataStatus = me.getDataStatus();
        if (dataStatus != 'loading' && dataStatus != 'loaded') {
            me.startLoadingData();
        }

        var openTimeout = setTimeout(me.getOpenTimeoutHandler(), duration); 
        me.setTimeout('open', openTimeout);

    };
};

HoverCard.prototype.clearTimeout = function (type) {
    var timeout = this.getTimeout(type);
    if (timeout != 'inactive' && timeout != 'expired') {
        clearTimeout(timeout);
    }
};

HoverCard.prototype.setTimeout = function (type, timeout) {
    if (type == 'close') {
        return this._closeTimeout = timeout;
    } else if (type == 'open') {
        return this._openTimeout = timeout;
    }
    throw 'unknown timeout type ' + type;
};

HoverCard.prototype.getTimeout = function (type) {
    if (type == 'close') {
        return this._closeTimeout;
    } else if (type == 'open') {
        return this._openTimeout;
    }
    throw 'unknown timeout type ' + type;
};

HoverCard.prototype.getTimeoutStatus = function (type) {
    var timeout = this.getTimeout(type);
    if (timeout == 'inactive' || timeout == 'expired') {
        return timeout;
    }
    return 'active';
}

HoverCard.prototype.getCloseTimeoutHandler = function () {
    var me = this;
    return function () {
        me.setTimeout('close', 'expired');
        me.hide();
    }
};

HoverCard.prototype.getCloseHandler = function () {
    var me = this;
    var duration = this._timeoutDuration;
    return function () {
        if (me.getTimeoutStatus('close') == 'active') {
            return;
        }

        if (me.getTimeoutStatus('open') == 'active') {
            me.clearTimeout('open');
            me.setTimeout('open', 'inactive');
            me.setTimeout('close', 'inactive');
            return;
        }

        var timeout = setTimeout(me.getCloseTimeoutHandler(), duration);
        me.setTimeout('close', timeout);
    };
};

HoverCard.prototype.getBodyClickHandler = function () {
    var me = this;
    return function () {
        me.clearTimeout('open');
        me.clearTimeout('close');
        me.setTimeout('close', 'inactive');
        me.setTimeout('open', 'inactive');
        me.hide();
    };
};

HoverCard.prototype.getKeepHandler = function () {
    var me = this;
    return function () {
        me.clearTimeout('close');
        me.setTimeout('close', 'inactive');
    };
};

HoverCard.prototype.createDom = function () {
    var element = this.makeElement('div');
    this._element = element;
    element.addClass('hovercard');
    element.hover(this.getKeepHandler(), this.getCloseHandler());
    element.click( function (evt) { evt.stopImmediatePropagation() });
    this.hide();
};
