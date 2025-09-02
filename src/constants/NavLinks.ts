import { AkChevronDownSmall } from '@kalimahapps/vue-icons'

export const homePageLinks = [
  {
    label: 'Strona Główna',
    path: '/',
  },
  {
    label: 'Korzyści z Shell ClubSmart',
    icon: AkChevronDownSmall,
    submenu: [
      {
        label: 'Przejdź do: Korzyści z Shell ClubSmart',
        path: '/clubsmart',
      },
      {
        label: 'Aplikacja Shell ClubSmart',
        path: '/clubsmart/aplikacja',
      },
      {
        label: 'Płatności mobilne Shell SmartPay',
        path: '/clubsmart/smartpay',
      },
      {
        label: 'Co zyskujesz z Shell CLubSmart?',
        icon: AkChevronDownSmall,
        submenu: [
          {
            label: 'Przejdź do: Co zyskujesz z Shell ClubSmart?',
            path: '/clubsmart/cozyskujesz',
          },
          {
            label: 'Produkty miesiąca',
            path: '/clubsmart/cozyskujesz/produkty-miesiaca',
          },
        ],
      },
    ],
  },
  {
    label: 'Stacje Shell',
    icon: AkChevronDownSmall,
  },
  {
    label: 'Ładowanie pojazdów elektrycznych',
    icon: AkChevronDownSmall,
  },
  {
    label: 'Paliwa, oleje i płyny chłodzące firmy Shell',
    icon: AkChevronDownSmall,
  },
]
