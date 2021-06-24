import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import PropTypes from 'prop-types'

function ArrowLeftIcon({ color, width, height, ...props }) {
   return (
      <Svg width={width} height={height} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
         <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.33 6.373H3.166L7.83 1.707 6.665.541 0 7.206l6.665 6.665 1.166-1.167L3.166 8.04H13.33V6.373z"
            fill={color}
         />
      </Svg>
   )
}

ArrowLeftIcon.propTypes = {
   color: PropTypes.string,
   width: PropTypes.number,
   height: PropTypes.number,
}

ArrowLeftIcon.defaultProps = {
   color: '#000',
   width: 14,
   height: 14,
}

export default ArrowLeftIcon
