import React    	from 'react';
import { connect } from 'react-redux';
// import { fetchShelf, fetchTracks, fetchGithub } from '../../actions'; 
// import axios from 'axios';
// import DataStore    from './../../stores/DataStore.js';
import styled from 'styled-components';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

const DefaultContainer = styled.div`
max-width: 960px;
margin: 0 auto;
padding: 0 24px;
@media (min-width: 1080px) {
    padding: 0;
}
`;

const Buffer = styled.div`
padding: 24px 0;
@media (min-width: 1080px) {
    padding: 100px 0 50px;
}
`;

const ContentContainer = styled.div`
    max-width: 800px;
    p {
        font-family: 'Roboto', sans-serif;
    }
`;

class About extends React.Component {

    render() {

        if (this.props.data != undefined){
            let AboutContent = this.props.data.content.rendered;
            return (
                <DefaultContainer>
                    <Buffer>
                        <h1>About</h1>
                        <ContentContainer>{ReactHtmlParser(AboutContent)}</ContentContainer>
                    </Buffer>
                </DefaultContainer>
            );
        } else {
            return (
                <div></div>
            )
        }

    }
}

const mapStateToProps = function(state){
    return {
        data: state.pages['about']
        // shelf: state.shelf,
        // tracks: state.tracks,
        // github: state.github
    }
}
  

export default connect(mapStateToProps)(About)
// export default About;