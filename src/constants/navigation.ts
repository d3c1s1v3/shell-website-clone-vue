import {
  AnOutlinedQuestionCircle,
  BxGasPump,
  BxSearch,
  ReBattery2ChargeFill,
} from '@kalimahapps/vue-icons'

import type { IconItemT, MenuItemT } from '@/models/models'

const menuItems: MenuItemT[] = [
  {
    id: 'home',
    label: 'Strona Główna',
    type: 'link',
    to: '/',
  },
  {
    id: 'clubsmart',
    label: 'Korzyści z Shell ClubSmart',
    type: 'expandable',

    children: [
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

        children: [
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
    id: 'stacje-shell',
    label: 'Stacje Shell',
    type: 'expandable',

    children: [
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

        children: [
          {
            id: 'stations-offers-main',
            label: 'Przejdź do: Oferty i promocje',
            type: 'link',
            to: '/stacje-shell/oferty-i-promocje',
          },
          {
            id: 'hot-dog-festival',
            label: 'Zapraszamy na Hot dog festiwal!',
            type: 'link',
            to: '/stacje-shell/oferty-i-promocje/hot-dog-festiwal',
          },
          {
            id: 'large-family-card',
            label: 'Karta Dużej Rodziny na Shell',
            type: 'link',
            to: '/stacje-shell/oferty-i-promocje/karta-duzej-rodziny',
          },
          {
            id: 'clubsmart-points-opinion',
            label: '200 punktów Shell ClubSmart za Twoją opinię!',
            type: 'link',
            to: '/stacje-shell/oferty-i-promocje/200-punktow-za-opinie',
          },
          {
            id: 'gift-card',
            label: 'Podaruj bliskim swobodę wyboru z kartą podarunkową Shell!',
            type: 'link',
            to: '/stacje-shell/oferty-i-promocje/karta-podarunkowa',
          },
          {
            id: 'truck-driver-discount',
            label: 'Kierowco Ciężarówki, Zrób Pauzę i Odbierz Zniżkę',
            type: 'link',
            to: '/stacje-shell/oferty-i-promocje/znizka-dla-kierowcow-ciezarowek',
          },
          {
            id: 'fourth-wash-free',
            label: '4 mycie GRATIS i punkty do tego!',
            type: 'link',
            to: '/stacje-shell/oferty-i-promocje/4-mycie-gratis',
          },
          {
            id: 'clubsmart-stamps',
            label: 'Pieczątki w aplikacji Shell ClubSmart',
            type: 'link',
            to: '/stacje-shell/oferty-i-promocje/pieczatki-clubsmart',
          },
          {
            id: 'vpower-promo',
            label: 'Paliwa premium ShellV-Power w cenie paliw podstawowych!',
            type: 'link',
            to: '/stacje-shell/oferty-i-promocje/vpower-w-cenie-podstawowych',
          },
          {
            id: 'coffee-duet',
            label: 'Kawa w duecie za 15 zł i dodatkowe punkty Shell ClubSmart',
            type: 'link',
            to: '/stacje-shell/oferty-i-promocje/kawa-w-duetcie',
          },
          {
            id: 'coffee-coupon',
            label: 'Kupon zniżkowy na kawę Shell Café',
            type: 'link',
            to: '/stacje-shell/oferty-i-promocje/kupon-na-kawe',
          },
        ],
      },
      {
        id: 'stations-cosmetics',
        label: 'Kosmetyki samochodowe',
        type: 'expandable',

        children: [
          {
            id: 'stations-cosmetics-main',
            label: 'Przejdź do: Kosmetyki samochodowe',
            type: 'link',
            to: '/stacje-shell/kosmetyki-samochodowe',
          },
          {
            id: 'stations-cosmetics-accessories',
            label: 'Akcesoria',
            type: 'link',
            to: '/stacje-shell/kosmetyki-samochodowe/akcesoria',
          },
          {
            id: 'stations-cosmetics-interior',
            label: 'Preparaty do czyszczenia i odświeżania wnętrza',
            type: 'link',
            to: '/stacje-shell/kosmetyki-samochodowe/czyszczenie-wnetrza',
          },
          {
            id: 'stations-cosmetics-body',
            label: 'Preparaty do czyszczenia karoserii',
            type: 'link',
            to: '/stacje-shell/kosmetyki-samochodowe/czyszczenie-karoserii',
          },
          {
            id: 'stations-cosmetics-coolant-brake',
            label: 'Płyny do chłodnic i płyny hamulcowe',
            type: 'link',
            to: '/stacje-shell/kosmetyki-samochodowe/plyny-chlodnicze-hamulcowe',
          },
          {
            id: 'stations-cosmetics-adblue',
            label: 'AdBlue® na stacjach Shell',
            type: 'expandable',
            children: [
              {
                id: 'stations-cosmetics-adblue-main',
                label: 'Przejdź do: AdBlue® na stacjach Shell',
                type: 'link',
                to: '/stacje-shell/kosmetyki-samochodowe/adblue',
              },
              {
                id: 'stations-cosmetics-adblue-faq',
                label: 'Najczęściej zadawane pytania dotyczące Adblue®',
                type: 'link',
                to: '/stacje-shell/kosmetyki-samochodowe/adblue/faq',
              },
            ],
          },
          {
            id: 'stations-cosmetics-technical',
            label: 'Preparaty techniczne',
            type: 'link',
            to: '/stacje-shell/kosmetyki-samochodowe/preparaty-techniczne',
          },
          {
            id: 'stations-cosmetics-glass',
            label: 'Preparaty do czyszczenia szyb',
            type: 'link',
            to: '/stacje-shell/kosmetyki-samochodowe/czyszczenie-szyb',
          },
          {
            id: 'stations-cosmetics-shell',
            label: 'Płyny i kosmetyki Shell',
            type: 'link',
            to: '/stacje-shell/kosmetyki-samochodowe/plyny-i-kosmetyki-shell',
          },
        ],
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
    type: 'expandable',
  },
  {
    id: 'products',
    label: 'Paliwa, oleje i płyny chłodzące firmy Shell',
    type: 'expandable',
  },
]

const iconItems: IconItemT[] = [
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
