import React from 'react'

var Component = React.createClass({

    propTypes: {
        handleText: React.PropTypes.func.isRequired
    },

    getInitialState: function() {
        return {
            text: this.props.text
        }
    },

    render: function() {
        return (
            <div>
                Change username:
                <input type="text" value={ this.state.text } onChange={ this.handleChange } />
                <input type="button" onClick={ this.sendText } value="Change me" />
            </div>
        )
    },

    handleChange: function(e) {
        this.setState({ text: e.target.value })
    },

    sendText: function () {
        this.props.handleText(this.state.text)
    }
});

var Main = React.createClass({

    getInitialState: function() {
        return {
            text: 'Mention'
        }
    },

    render: function() {
        return (
            <div>
                <p>Welcome { this.state.text }!</p>
                <Component text={ this.state.text } handleText={ this.handleNewUsername }/>
            </div>
        )
    },

    handleNewUsername: function (username) {
        this.setState({ text:  username })
    }
});

var appStyle = {
    fontSize: '1.4em'
}

module.exports = React.createClass({

    render: function () {
        return <div style={appStyle}><Main /></div>
    }
})
