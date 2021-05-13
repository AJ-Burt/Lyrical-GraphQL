import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import {Link} from 'react-router';
import fetchSong from '../queries/fetchSong';

class SongDetail extends Component {
    render() {
        const {song} = this.props.data;

        // Disabled because loading is so fast
        // if(!song) {
        //     return <div>Loading...</div>
        // }

        return(
            <div>
                <h3>{song.title}</h3>
            </div>
        )
    }
}

export default (fetchSong, {
    options: (props) => {return {variables: {id: props.params.id}}}
})(SongDetail);