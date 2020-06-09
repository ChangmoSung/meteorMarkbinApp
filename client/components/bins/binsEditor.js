import React, { Component } from 'react';
import CodeMirror from 'react-codemirror'
import 'codemirror/mode/markdown/markdown'

class BinsEditor extends Component {
    editorChange = content => {
        Meteor.call('bins.update', this.props.bin, content)
    }

    render() { 
        return ( 
            <div className='col-xs-8'>
                <h5>Input</h5>

                <CodeMirror 
                    value={this.props.bin.content}
                    onChange={this.editorChange}
                    option={{ mode: 'markdown', lineNumbers: true }} 
                />
            </div>
         );
    }
}
 
export default BinsEditor;