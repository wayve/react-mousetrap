import React from 'react';

export function mouseTrap(Base){

    return class extends React.Component {
        constructor(props){
            super(props);
            this.__mousetrapBindings = [];
            this.Mousetrap = require('mousetrap');

            const Mousetrap = this.Mousetrap;
            require('mousetrap-global-bind');
        }

        bindShortcut (key, callback) {
          this.Mousetrap.bind(key, callback);
          this.__mousetrapBindings.push(key);
        }

        bindGlobalShortcut (key, callback) {
          this.Mousetrap.bindGlobal(key, callback);
          this.__mousetrapBindings.push(key);
        }

        unbindShortcut (key) {
            var index = this.__mousetrapBindings.indexOf(key);

            if (index > -1) {
                this.__mousetrapBindings.splice(index, 1);
            }

            this.Mousetrap.unbind(key);
        }

        unbindAllShortcuts () {
            if (this.__mousetrapBindings.length < 1) {
                return;
            }

            this.__mousetrapBindings.forEach((binding) => {
                this.Mousetrap.unbind(binding);
            });
            this.__mousetrapBindings = [];
        }

        componentWillUnmount () {
            this.unbindAllShortcuts();
        }

        render () {
            return <Base
                {...this.props}
                bindShortcut={this.bindShortcut.bind(this)}
                bindGlobalShortcut={this.bindGlobalShortcut.bind(this)}
                unbindShortcut={this.unbindShortcut.bind(this)} />
        }
    };
}
