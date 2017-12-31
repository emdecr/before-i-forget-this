import React    from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchTopics } from '../../actions'; 
import styled   from 'styled-components';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import ChildList 	from './components/child-list.js';

const DefaultContainer = styled.div`
max-width: 960px;
margin: 0 auto;
padding: 0 24px;
@media (min-width: 700px) {
    padding: 0;
}
`;

const ContentContainer = styled.div`
font-family: 'Roboto', sans-serif;
font-size: 1.3rem;
line-height: 1.7;
p {
    font-family: 'Roboto', sans-serif;
}
`;

const Buffer = styled.div`
padding: 24px 0;
@media (min-width: 700px) {
    padding: 100px 0 50px;
}
`;

const List = styled.ul`
list-style-type: none;
margin: 0;
padding: 0;
@media (min-width: 700px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
`;

const ListItem = styled.li`
margin-bottom: 40px;
@media (max-width: 400px) {
    text-align: center;
}
@media (min-width: 700px) {
    margin-bottom: 0;
    width: 20.5%;

    &:nth-child(5),
    &:nth-child(6),
    &:nth-child(7),
    &:nth-child(8) {
        margin-top: 32px;
    }

}
`;

const Filler = styled.div`
min-height: 100vh;
`;


class Topics extends React.Component {
    componentDidMount() {
        if (this.props.topics.length > 0) {
            return
        } else {
            this.props.fetchTopics();
        }    
        
    }

    render() {

        if (this.props.data != undefined && this.props.topics.length > 0 ){
            let TopicsContent = this.props.data.content.rendered;
            return (
                <DefaultContainer>
                    <Buffer>
                        <h1>Topics</h1>
                        <ContentContainer>{ReactHtmlParser(TopicsContent)}</ContentContainer>
                        <List>
                        {this.props.topics.map((item) =>
                            {
                                if (item.parent == 0){
                                    return <ListItem key={item.id}><h3><Link to={`/topics/${item.slug}`} >{item.name}</Link></h3><ChildList topics={this.props.topics} parent={item.id}/></ListItem>
                                }else{
                                    return
                                }
                            }
                        )}
                        </List>
                    </Buffer>
                </DefaultContainer>
            );
        } else {
            return (
                <div><Filler/></div>
            )
        }
    }
}

const mapStateToProps = function(state){
    return {
        data: state.pages['topics'],
        topics: state.topics,
    }
}
  

export default connect(mapStateToProps, { fetchTopics })(Topics)
// export default Projects;