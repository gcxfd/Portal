import React, {Component} from 'react';
import {createPortal} from 'react-dom';

export default class Frame extends Component {
    componentDidMount() {
        let node = this.node, doc = node.contentWindow.document;
        node.addEventListener('load', this.handleLoad);
        doc.write('<!DOCTYPE html>'); 
        doc.close();
    }

    handleLoad = () => {
        this.setupFrameBaseStyle();
    };

    componentWillUnmout() {
        this.node.removeEventListener('load', this.handleLoad);
    }

    setupFrameBaseStyle() {
        if (this.node.contentDocument) {
            this.iframeHtml = this.node.contentDocument.documentElement;
            this.iframeHead = this.node.contentDocument.head;
            this.iframeRoot = this.node.contentDocument.body;
            this.forceUpdate();
        }
    }

    render() {
        const {children, head, title = '', style = {}, ...rest} = this.props;
        return (
            //srcDoc={`<!DOCTYPE html>`}
            <iframe src="about:blank" {...rest} ref={node => (this.node = node)} title={title} style={style} frameBorder="0">
                {this.iframeHead && createPortal(head, this.iframeHead)}
                {this.iframeRoot && createPortal(children, this.iframeRoot)}
            </iframe>
        );
    }
}
