import React from 'react'
import { PROPERTY_TEST } from './actionTypes'

import { MatressIcon, BathtubIcon, FieldIcon } from '@svgIcons'

const initialState = {
   listInitialProperty: [
      {
         id: 1,
         username: 'Henry Scott',
         userLocation: 'Century 21 BSD',
         categoryName: 'Rumah',
         isPublic: true,
         isMonthly: false,
         property: {
            name: 'Nava Park BSD City',
            location: 'Jl. Edutown Kav III.1, BSD, Tangerang Selatan',
            image: require('../assets/images/property-example.png'),
         },
         price: 6500000000,
         type: 1,
         facilities: [
            {
               idFac: 1,
               title: 'K. Tidur',
               ability: '3+1',
               icon: <MatressIcon />,
            },
            {
               idFac: 2,
               title: 'K. Mandi',
               ability: '3+1',
               icon: <BathtubIcon />,
            },
            {
               idFac: 3,
               title: 'L. Tanah',
               ability: '300 M',
               icon: <FieldIcon />,
            },
         ],
      },
      {
         id: 2,
         username: 'Henry Scott',
         userLocation: 'Century 21 BSD',
         categoryName: 'Apartement',
         isPublic: false,
         isMonthly: true,
         property: {
            name: 'Woody Residence Foresta',
            location: 'Jl. Edutown Kav III.1, BSD, Tangerang Selatan',
            image: require('../assets/images/property-list-2.png'),
         },
         price: 10000000,
         type: 2,
         facilities: [
            {
               idFac: 1,
               title: 'K. Tidur',
               ability: '4  ',
               icon: <MatressIcon />,
            },
            {
               idFac: 2,
               title: 'K. Mandi',
               ability: '4  ',
               icon: <BathtubIcon />,
            },
            {
               idFac: 3,
               title: 'L. Tanah',
               ability: '275 M',
               icon: <FieldIcon />,
            },
         ],
      },
   ],
   listFavProperty: [
      {
         id: 1,
         username: 'Henry Scott',
         userLocation: 'Century 21 BSD',
         categoryName: 'Rumah',
         isPublic: true,
         isMonthly: false,
         property: {
            name: 'B Residence BSD Signature Lotus …',
            location: 'Jl. Edutown Kav III.1, BSD, Tangerang Selatan',
            image: require('../assets/images/property-fav.png'),
         },
         price: 2500000000,
         type: 1,
         facilities: [
            {
               idFac: 1,
               title: 'K. Tidur',
               ability: '3+1',
               icon: <MatressIcon />,
            },
            {
               idFac: 2,
               title: 'K. Mandi',
               ability: '2+1',
               icon: <BathtubIcon />,
            },
            {
               idFac: 3,
               title: 'L. Tanah',
               ability: '50  M',
               icon: <FieldIcon />,
            },
         ],
      },
      {
         id: 2,
         username: 'Henry Scott',
         userLocation: 'Century 21 BSD',
         categoryName: 'Apartement',
         isPublic: true,
         isMonthly: false,
         property: {
            name: 'The Branz Apartement BSD City',
            location: 'Jl. Edutown Kav III.1, BSD, Tangerang Selatan',
            image: require('../assets/images/property-fav.png'),
         },
         price: 10000000,
         type: 1,
         facilities: [
            {
               idFac: 1,
               title: 'K. Tidur',
               ability: '3+1',
               icon: <MatressIcon />,
            },
            {
               idFac: 2,
               title: 'K. Mandi',
               ability: '2+1',
               icon: <BathtubIcon />,
            },
            {
               idFac: 3,
               title: 'L. Tanah',
               ability: '118 M',
               icon: <FieldIcon />,
            },
         ],
      },
   ],
   listArchProperty: [
      {
         id: 1,
         username: 'Henry Scott',
         userLocation: 'Century 21 BSD',
         categoryName: 'Apartement',
         isPublic: false,
         isMonthly: true,
         property: {
            name: 'B Residence BSD Signature Lotus …',
            location: 'Jl. Edutown Kav III.1, BSD, Tangerang Selatan',
            image: require('../assets/images/property-fav.png'),
         },
         price: 4000000,
         type: 2,
         facilities: [
            {
               idFac: 1,
               title: 'K. Tidur',
               ability: '2  ',
               icon: <MatressIcon />,
            },
            {
               idFac: 2,
               title: 'K. Mandi',
               ability: '2   ',
               icon: <BathtubIcon />,
            },
            {
               idFac: 3,
               title: 'L. Tanah',
               ability: '50  M',
               icon: <FieldIcon />,
            },
         ],
      },
      {
         id: 2,
         username: 'Henry Scott',
         userLocation: 'Century 21 BSD',
         categoryName: 'Rumah',
         isPublic: true,
         isMonthly: false,
         property: {
            name: 'Foresta Ultimo BSD City',
            location: 'Jl. Edutown Kav III.1, BSD, Tangerang Selatan',
            image: require('../assets/images/property-fav.png'),
         },
         price: 2500000000,
         type: 1,
         facilities: [
            {
               idFac: 1,
               title: 'K. Tidur',
               ability: '3+1',
               icon: <MatressIcon />,
            },
            {
               idFac: 2,
               title: 'K. Mandi',
               ability: '2+1',
               icon: <BathtubIcon />,
            },
            {
               idFac: 3,
               title: 'L. Tanah',
               ability: '118 M',
               icon: <FieldIcon />,
            },
         ],
      },
   ],
}

export const mainReducer = (state = initialState, action) => {
   switch (action.type) {
      case PROPERTY_TEST:
         return { ...state, listingProperty: state.listingProperty.filter((filter) => filter.id === 2) }

      default:
         return state
   }
}
