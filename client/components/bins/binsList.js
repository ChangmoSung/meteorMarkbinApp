import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data'
import { Bins } from '../../../imports/collections/bins'

class BinsList extends Component {
    render() { 
        console.log(this.props.bins)
        return ( 
            <div>Bins List</div>
         );
    }
}
 
export default withTracker(() => {
    const handle = Meteor.subscribe('bins')

    return {
        isLoading: !handle.ready(),
        bins: Bins.find({}).fetch()
    }
})(BinsList)