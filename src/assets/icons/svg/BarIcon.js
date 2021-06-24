import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

import PropTypes from 'prop-types'

function BarIcon({ color, width, height, ...props }) {
   return (
      <Svg width={width} height={height} viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
         <Path
            d="M23.75 0H1.25C.56 0 0 .448 0 1s.56 1 1.25 1h22.5C24.44 2 25 1.552 25 1s-.56-1-1.25-1zM1.25 12h22.5c.69 0 1.25-.448 1.25-1s-.56-1-1.25-1H1.25C.56 10 0 10.448 0 11s.56 1 1.25 1zM1.25 7h22.5C24.44 7 25 6.552 25 6s-.56-1-1.25-1H1.25C.56 5 0 5.448 0 6s.56 1 1.25 1z"
            fill={color}
         />
      </Svg>
   )
}

BarIcon.propTypes = {
   color: PropTypes.string,
   width: PropTypes.number,
   height: PropTypes.number,
}

BarIcon.defaultProps = {
   color: '#031615',
   width: 25,
   height: 12,
}

export default BarIcon
