import * as React from 'react';

type Props = {
    logo: string
}

const Header = ({ logo }: Props) => {
    return (
        <React.Fragment>
            <h1>{logo}</h1>
        </React.Fragment>
    );
}

export default Header;