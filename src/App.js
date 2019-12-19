import React from 'react';

import { Grid } from '@material-ui/core';
import { SearchBar , VideoDetail , VideoList } from './components';
import youtube from './api/youtube';

class App extends React.Component {
    state={
        videos : [],
        selectedVideo: null,
    }

    componentDidMount(){
        this.handleSubmit('React js');
    }

    onVideoSelect=(video) => {
        this.setState({selectedVideo:video});
    }

    handleSubmit = async (searchTerm) => {
        const response = await youtube.get('search' ,
        {   
            params : {
                part: 'snippet',
                maxResults: 5,
                key: 'AIzaSyB42hehLWoc8PxQtmXRGNB_-ZapKELbrNo',
                q: searchTerm,
            }
        });
        this.setState({videos:response.data.items,selectedVideo:response.data.items[0]});
    }
    
    render(){
        const { selectedVideo } = this.state;
        const { videos } = this.state;
        return(
            <Grid justify="center" container >
                <Grid item xs={12}>
                    <Grid justify="center" container spacing={10}>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit={this.handleSubmit} />
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetail video={selectedVideo} />
                        </Grid>
                        <Grid item xs={4}>
                            <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default App;