import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

import PropTypes from 'prop-types'

function HomeBackground({ color, width, height, ...props }) {
   return (
      <Svg
         width={width}
         height={height}
         viewBox="0 0 375 303"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         {...props}>
         <Path
            d="M504 317c0 175.074-141.926 317-317 317s-317-141.926-317-317S11.926 0 187 0s317 141.926 317 317z"
            fill={color}
            fillOpacity={0.8}
         />
      </Svg>
   )
}

HomeBackground.propTypes = {
   color: PropTypes.string,
   width: PropTypes.number,
   height: PropTypes.number,
}

HomeBackground.defaultProps = {
   color: '#34495E',
   width: 375,
   height: 303,
}

export default HomeBackground
