import React from 'react'

var component = Ractive.extend({
    isolated: true,
    template: 'Change username:    <input type="text" value="{{ text }}" />    <input type="button" on-click="sendText" value="Change me" />',
    data:{
        text: ''
    },
    oninit: function () {
        this.on('sendText', function (event) {
	    	this.get('sendText')(this.get('text'))
        });
    }
});

var main = Ractive.extend({
    template: '<p>Welcome {{ text }}!</p>    <component text="[[ text ]]" />',
    data:{
        text: 'Mention',
        handleNewUsername: function (username) {
            this.set('text', text)
        }
    },
    components: {
        component: component
    },
});

function bootstrap(el) {

    new Ractive({
        el: el,
        template: "<main />",
        components: {
            main: main
        },
    });
}

var appStyle = {
    fontSize: '1.4em'
}

module.exports = React.createClass({

    render: function () {
        return <div style={appStyle} />
    },

    componentDidMount: function () {
        bootstrap(React.findDOMNode(this))
    }
})
