import * as React from 'react'
import Svg, { Path, Defs, Pattern, Use, Image } from 'react-native-svg'

import PropTypes from 'prop-types'

function WeightIcon({ width, height, ...props }) {
   return (
      <Svg
         width={width}
         height={height}
         viewBox="0 0 24 25"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         xmlnsXlink="http://www.w3.org/1999/xlink"
         {...props}>
         <Path fill="url(#prefix__pattern0)" d="M0 0h24v25H0z" />
         <Defs>
            <Pattern id="prefix__pattern0" patternContentUnits="objectBoundingBox" width={1} height={1}>
               <Use xlinkHref="#prefix__image0" transform="matrix(.00463 0 0 .00444 -.02 0)" />
            </Pattern>
            <Image
               id="prefix__image0"
               width={225}
               height={225}
               xlinkHref="data:image/png;base64,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"
            />
         </Defs>
      </Svg>
   )
}

WeightIcon.propTypes = {
   width: PropTypes.number,
   height: PropTypes.number,
}

WeightIcon.defaultProps = {
   width: 24,
   height: 25,
}

export default WeightIcon
