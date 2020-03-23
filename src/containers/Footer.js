import React from 'react';
import { connect } from 'react-redux'

import Box from 'grommet/components/Box'
import Paragraph from 'grommet/components/Paragraph'

const Footer = () => (
    <Box align='center'>
        <Paragraph>&copy; 2020, <a href="https://sineo.co.kr">Powered By SineoPlatform</a></Paragraph>
    </Box>
)

function mapStateToProps(state) {
    return { }
}

export default connect(mapStateToProps)(Footer)
