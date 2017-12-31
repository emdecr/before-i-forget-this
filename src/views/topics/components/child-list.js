import React    from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

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

class ChildList extends React.Component {
    
    render() {
        
        // Object = {artist:trackArtist, name:trackName, image:trackImage}
        let props = this.props
        // console.log(props.tracks);
        if (props.topics.length > 0) {
            return (
                <List>
                    {props.topics.map((item) =>
                        {
                            if (item.parent == props.parent){
                                return <li key={item.id}><Link to={`/topics/${item.slug}`} >{item.name}</Link></li>
                            }else{
                                return
                            }
                        }
                    )}
                </List>
            )
        } else {
            return (
                <div></div>
            );
        }
        
    }
}
  
export default ChildList