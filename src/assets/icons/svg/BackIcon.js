import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

import PropTypes from 'prop-types'

function BackIcon({ color, width, height, ...props }) {
   return (
      <Svg width={width} height={height} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
         <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 10.938H5.937l8.75-8.75L12.5 0 0 12.5 12.5 25l2.188-2.188-8.75-8.75H25v-3.124z"
            fill={color}
         />
      </Svg>
   )
}

BackIcon.propTypes = {
   color: PropTypes.string,
   width: PropTypes.number,
   height: PropTypes.number,
}

BackIcon.defaultProps = {
   color: '#000',
   width: 25,
   height: 25,
}

export default BackIcon
