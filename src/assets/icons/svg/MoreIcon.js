import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function MoreIcon(props) {
   return (
      <Svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
         <Path
            d="M11 12.833a1.833 1.833 0 100-3.666 1.833 1.833 0 000 3.666zM11 6.417a1.833 1.833 0 100-3.667 1.833 1.833 0 000 3.667zM11 19.25a1.833 1.833 0 100-3.667 1.833 1.833 0 000 3.667z"
            fill="#000"
         />
      </Svg>
   )
}

export default MoreIcon
