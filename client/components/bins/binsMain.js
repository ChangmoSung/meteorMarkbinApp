import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data'
import { Bins } from '../../../imports/collections/bins'
import BinsEditor from './binsEditor'

class BinsMain extends Component {
    render() { 
        if(!this.props.bin) return <div>Loading...</div>
        
        return ( 
            <div>
                <BinsEditor bin={this.props.bin} />
            </div>
        );
    }
}
 
export default withTracker(props => {
    const handle = Meteor.subscribe('bins')
    const { binId } = props.match.params

    return {
        loading: !handle.ready(),
        bin: Bins.findOne(binId)
    }
})(BinsMain)