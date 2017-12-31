import React    from 'react';
import styled   from 'styled-components';

const DefaultContainer = styled.div`
max-width: 960px;
margin: 0 auto;
padding: 0 24px;
@media (min-width: 700px) {
    padding: 0;
}
`;

const Buffer = styled.div`
padding: 50px 0 150px;
@media (min-width: 700px) {
    padding: 32px 0 24px;
}
`;

class ComingSoon extends React.Component {

    render() {
            
        return (
            <div>
                <DefaultContainer>
                    <Buffer>
                        <p>Coming soon.</p>
                    </Buffer>
                </DefaultContainer>
            </div>
        );
    }
}

export default ComingSoon;