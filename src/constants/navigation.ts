import {
  AnOutlinedQuestionCircle,
  BxGasPump,
  BxSearch,
  ReBattery2ChargeFill,
} from '@kalimahapps/vue-icons'

import type { IconItem, MenuItem } from '@/models/models'

const menuItems: MenuItem[] = [
  {
    id: 'home',
    label: 'Strona Główna',
    type: 'link',
    to: '/',
  },
  {
    id: 'clubsmart',
    label: 'Korzyści z Shell ClubSmart',
    type: 'dropdown',
    items: [
      {
        id: 'clubsmart-main',
        label: 'Przejdź do: Korzyści z Shell ClubSmart',
        type: 'link',
        to: '/clubsmart',
      },
      {
        id: 'clubsmart-app',
        label: 'Aplikacja Shell ClubSmart',
        type: 'link',
        to: '/clubsmart/aplikacja',
      },
      {
        id: 'clubsmart-pay',
        label: 'Płatności mobilne Shell SmartPay',
        type: 'link',
        to: '/clubsmart/smartpay',
      },
      {
        id: 'clubsmart-benefits',
        label: 'Co zyskujesz z Shell ClubSmart?',
        type: 'expandable',
        items: [
          {
            id: 'clubsmart-benefits-main',
            label: 'Przejdź do: Co zyskujesz z Shell ClubSmart?',
            type: 'link',
            to: '/clubsmart/cozyskujesz',
          },
          {
            id: 'clubsmart-products',
            label: 'Produkty miesiąca',
            type: 'link',
            to: '/clubsmart/cozyskujesz/produkty-miesiaca',
          },
        ],
      },
      {
        id: 'clubsmart-rewards',
        label: 'Nowe nagrody w katalogu nagród',
        type: 'link',
        to: '/clubsmart/nowe-nagrody-w-katalogu-nagród',
      },
    ],
  },
  {
    id: 'stations',
    label: 'Stacje Shell',
    type: 'dropdown',
    items: [
      {
        id: 'stations-main',
        label: 'Przejdź do: Stacje Shell',
        type: 'link',
        to: '/stacje-shell',
      },
      {
        id: 'stations-locator',
        label: 'Lokalizator stacji paliw Shell',
        type: 'link',
        to: '/stacje-shell/lokalizator-stacji-paliw-shell',
      },
      {
        id: 'stations-offers',
        label: 'Oferty i promocje',
        type: 'expandable',
        to: '/stacje-shell/oferty-i-promocje',
      },
      {
        id: 'stations-cosmetics',
        label: 'Kosmetyki samochodowe',
        type: 'expandable',
        to: '/stacje-shell/kosmetyki-samochodowe',
      },
      {
        id: 'stations-carwash',
        label: 'Myjnia',
        type: 'link',
        to: '/stacje-shell/myjnia',
      },
      {
        id: 'stations-services',
        label: 'Usługi na stacji',
        type: 'expandable',
        to: '/stacje-shell/uslugi-na-stacji',
      },
      {
        id: 'stations-helix',
        label: 'Shell Helix Top Up – uniwersalny olej na dolewki',
        type: 'link',
        to: '/stacje-shell/helix-top-up',
      },
      {
        id: 'stations-cafe',
        label: 'Shell Café – warto się zatrzymać!',
        type: 'link',
        to: '/stacje-shell/cafe',
      },
    ],
  },
  {
    id: 'ev-charging',
    label: 'Ładowanie pojazdów elektrycznych',
    type: 'dropdown',
  },
  {
    id: 'products',
    label: 'Paliwa, oleje i płyny chłodzące firmy Shell',
    type: 'dropdown',
  },
]

const iconItems: IconItem[] = [
  {
    id: 'gas-stations',
    type: 'link',
    to: '/stacje-shell/lokalizator-stacji-paliw-shell',
    icon: BxGasPump,
  },
  {
    id: 'ev-charging',
    type: 'link',
    to: '/ladowanie-samochodow-elektrycznych/find-an-ev-charge-point',
    icon: ReBattery2ChargeFill,
  },
  {
    id: 'help',
    type: 'external',
    href: 'https://shell.pl',
    target: '_blank',
    icon: AnOutlinedQuestionCircle,
  },
  {
    id: 'search',
    type: 'link',
    to: '/search',
    icon: BxSearch,
  },
]

export { menuItems, iconItems }
