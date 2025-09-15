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
            type: 'expandable',
            children: [
              {
                id: 'stations-cosmetics-shell-main',
                label: 'Przejdź do: Płyny i kosmetyki Shell',
                type: 'link',
                to: '/stacje-shell/kosmetyki-samochodowe/plyny-i-kosmetyki-shell',
              },
              {
                id: 'stations-cosmetics-shell-windscreen',
                label: 'Płyny do spryskiwaczy Shell',
                type: 'link',
                to: '/stacje-shell/kosmetyki-samochodowe/plyny-i-kosmetyki-shell/plyny-do-spryskiwaczy',
              },
            ],
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
        children: [
          {
            id: 'stations-services-main',
            label: 'Przejdź do: Usługi na stacji',
            type: 'link',
            to: '/stacje-shell/uslugi-na-stacji',
          },
          {
            id: 'stations-services-order-products',
            label: 'Zamów produkty ze stacji Shell do swojego domu',
            type: 'link',
            to: '/stacje-shell/uslugi-na-stacji/zamow-produkty',
          },
          {
            id: 'stations-services-parcels',
            label: 'Odbieraj i nadawaj przesyłki na Stacjach Shell!',
            type: 'link',
            to: '/stacje-shell/uslugi-na-stacji/przesylki',
          },
        ],
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
    id: 'ladowanie',
    label: 'Ładowanie pojazdów elektrycznych',
    type: 'expandable',
    children: [
      {
        id: 'ladowanie-pojazdow-elektrycznych-main',
        label: 'Przejdź do: Ładowanie pojazdów elektrycznych',
        type: 'link',
        to: '/ladowanie-samochodow-elektrycznych',
      },
      {
        id: 'ev-charging-find-point',
        label: 'Znajdź punkt ładowania pojazdu',
        type: 'link',
        to: '/ladowanie-samochodow-elektrycznych/find-an-ev-charge-point',
      },
    ],
  },
  {
    id: 'products',
    label: 'Paliwa, oleje i płyny chłodzące firmy Shell',
    type: 'expandable',
    children: [
      {
        id: 'products-main',
        label: 'Przejdź do: Paliwa, oleje i płyny chłodzące firmy Shell',
        type: 'link',
        to: '/produkty',
      },
      {
        id: 'fuels',
        label: 'Paliwa Shell – wydajność na najwyższym poziomie',
        type: 'expandable',
        children: [
          {
            id: 'fuels-main',
            label: 'Przejdź do: Paliwa Shell – wydajność na najwyższym poziomie',
            type: 'link',
            to: '/produkty/paliwa',
          },
          {
            id: 'shell-vpower',
            label: 'Shell V-Power',
            type: 'expandable',
            children: [
              {
                id: 'shell-vpower-main',
                label: 'Przejdź do: Shell V-Power',
                type: 'link',
                to: '/produkty/paliwa/shell-vpower',
              },
              {
                id: 'shell-vpower-racing',
                label: 'Shell V-Power Racing',
                type: 'link',
                to: '/produkty/paliwa/shell-vpower-racing',
              },
            ],
          },
          {
            id: 'shell-fuelsave',
            label: 'Shell FuelSave',
            type: 'link',
            to: '/produkty/paliwa/shell-fuelsave',
          },
          {
            id: 'shell-autogas-lpg',
            label: 'Shell AutoGas LPG',
            type: 'expandable',
            children: [
              {
                id: 'shell-autogas-lpg-main',
                label: 'Przejdź do: Shell AutoGas LPG',
                type: 'link',
                to: '/produkty/paliwa/shell-autogas-lpg',
              },
              {
                id: 'lpg-installation-myths',
                label: 'Instalacja gazowa – prawdy i mity',
                type: 'link',
                to: '/produkty/paliwa/shell-autogas-lpg/instalacja-gazowa-prawdy-i-mity',
              },
              {
                id: 'lpg-safe-refueling',
                label: 'Bezpieczne tankowanie LPG krok po kroku',
                type: 'link',
                to: '/produkty/paliwa/shell-autogas-lpg/bezpieczne-tankowanie-lpg',
              },
              {
                id: 'lpg-formalities',
                label: 'Instalacja gotowa – czas na formalności',
                type: 'link',
                to: '/produkty/paliwa/shell-autogas-lpg/formalnosci',
              },
              {
                id: 'lpg-where-install',
                label: 'LPG Auto – gdzie zamontować instalację gazową?',
                type: 'link',
                to: '/produkty/paliwa/shell-autogas-lpg/gdzie-zamontowac',
              },
              {
                id: 'lpg-car-care-tips',
                label: 'Jak dbać o swój samochód? Poznaj kilka wskazówek',
                type: 'link',
                to: '/produkty/paliwa/shell-autogas-lpg/jak-dbac-o-samochod',
              },
            ],
          },
          {
            id: 'petrol-e10',
            label: 'Benzyna silnikowa E10',
            type: 'link',
            to: '/produkty/paliwa/benzyna-e10',
          },
        ],
      },
      {
        id: 'oils-lubricants',
        label: 'Oleje silnikowe i środki smarne',
        type: 'expandable',
        children: [
          {
            id: 'oils-lubricants-main',
            label: 'Przejdź do: Oleje silnikowe i środki smarne',
            type: 'link',
            to: '/produkty/oleje-i-srodki-smarne',
          },
          {
            id: 'shell-helix',
            label: 'Oleje silnikowe Shell Helix',
            type: 'expandable',
            children: [
              {
                id: 'shell-helix-main',
                label: 'Przejdź do: Oleje silnikowe Shell Helix',
                type: 'link',
                to: '/produkty/oleje-i-srodki-smarne/shell-helix',
              },
              {
                id: 'shell-helix-general',
                label: 'Oleje silnikowe Shell Helix ogólnego zastosowania',
                type: 'expandable',
                children: [
                  {
                    id: 'shell-helix-general-main',
                    label: 'Przejdź do: Oleje silnikowe Shell Helix ogólnego zastosowania',
                    type: 'link',
                    to: '/produkty/oleje-i-srodki-smarne/shell-helix/ogolnego-zastosowania',
                  },
                  {
                    id: 'shell-helix-hx7-5w40',
                    label: 'Shell Helix HX7 5W-40',
                    type: 'link',
                    to: '/produkty/oleje-i-srodki-smarne/shell-helix/hx7-5w40',
                  },
                  {
                    id: 'shell-helix-hx8-synthetic-5w40',
                    label: 'Shell Helix HX8 Synthetic 5W-40',
                    type: 'link',
                    to: '/produkty/oleje-i-srodki-smarne/shell-helix/hx8-synthetic-5w40',
                  },
                  {
                    id: 'shell-helix-ultra-0w40',
                    label: 'Shell Helix Ultra 0W-40',
                    type: 'link',
                    to: '/produkty/oleje-i-srodki-smarne/shell-helix/ultra-0w40',
                  },
                  {
                    id: 'shell-helix-ultra-diesel-5w40',
                    label: 'Shell Helix Ultra Diesel 5W-40',
                    type: 'link',
                    to: '/produkty/oleje-i-srodki-smarne/shell-helix/ultra-diesel-5w40',
                  },
                  {
                    id: 'shell-helix-hx5-15w40',
                    label: 'Shell Helix HX5 15W-40',
                    type: 'link',
                    to: '/produkty/oleje-i-srodki-smarne/shell-helix/hx5-15w40',
                  },
                  {
                    id: 'shell-helix-hx7-diesel-10w40',
                    label: 'Shell Helix HX7 Diesel 10W-40',
                    type: 'link',
                    to: '/produkty/oleje-i-srodki-smarne/shell-helix/hx7-diesel-10w40',
                  },
                ],
              },
              {
                id: 'shell-helix-ect',
                label: 'Oleje silnikowe Shell Helix ECT',
                type: 'expandable',
                children: [
                  {
                    id: 'shell-helix-ect-main',
                    label: 'Przejdź do: Oleje silnikowe Shell Helix ECT',
                    type: 'link',
                    to: '/produkty/oleje-i-srodki-smarne/shell-helix/ect',
                  },
                  {
                    id: 'shell-helix-hx8-ect-5w40',
                    label: 'Shell Helix HX8 ECT 5W-40',
                    type: 'link',
                    to: '/produkty/oleje-i-srodki-smarne/shell-helix/hx8-ect-5w40',
                  },
                  {
                    id: 'shell-helix-hx8-5w30',
                    label: 'Olej silnikowy Shell Helix HX8 5W-30',
                    type: 'link',
                    to: '/produkty/oleje-i-srodki-smarne/shell-helix/hx8-5w30',
                  },
                  {
                    id: 'shell-helix-hx8-ect-c3',
                    label: 'Olej Shell Helix HX8 ECT C3',
                    type: 'link',
                    to: '/produkty/oleje-i-srodki-smarne/shell-helix/hx8-ect-c3',
                  },
                  {
                    id: 'shell-helix-ultra-0w30',
                    label: 'Olej silnikowy Shell Helix Ultra 0W-30',
                    type: 'link',
                    to: '/produkty/oleje-i-srodki-smarne/shell-helix/ultra-0w30',
                  },
                ],
              },
              {
                id: 'shell-helix-professional',
                label: 'Oleje silnikowe Shell Helix Professional',
                type: 'expandable',
                children: [
                  {
                    id: 'shell-helix-professional-main',
                    label: 'Przejdź do: Oleje silnikowe Shell Helix Professional',
                    type: 'link',
                    to: '/produkty/oleje-i-srodki-smarne/shell-helix/professional',
                  },
                  {
                    id: 'shell-helix-ultra-professional-0w30',
                    label: 'Olej silnikowy Shell Helix Ultra Professional 0W-30',
                    type: 'link',
                    to: '/produkty/oleje-i-srodki-smarne/shell-helix/ultra-professional-0w30',
                  },
                  {
                    id: 'shell-helix-ultra-professional-af-5w20',
                    label: 'Shell Helix Ultra Professional AF 5W-20',
                    type: 'link',
                    to: '/produkty/oleje-i-srodki-smarne/shell-helix/ultra-professional-af-5w20',
                  },
                  {
                    id: 'shell-helix-ultra-professional-apl-0w30',
                    label: 'Shell Helix Ultra Professional AP-L 0W-30',
                    type: 'link',
                    to: '/produkty/oleje-i-srodki-smarne/shell-helix/ultra-professional-apl-0w30',
                  },
                ],
              },
              {
                id: 'shell-helix-ultra-pureplus',
                label: 'Olej Shell Helix Ultra z Technologią PurePlus',
                type: 'link',
                to: '/produkty/oleje-i-srodki-smarne/shell-helix/ultra-pureplus',
              },
              {
                id: 'shell-helix-ultra-0w',
                label: 'Shell Helix Ultra 0W',
                type: 'link',
                to: '/produkty/oleje-i-srodki-smarne/shell-helix/ultra-0w',
              },
            ],
          },
          {
            id: 'shell-advance',
            label: 'Oleje silnikowe do motocykli Shell Advance',
            type: 'expandable',
            children: [
              {
                id: 'shell-advance-main',
                label: 'Przejdź do: Oleje silnikowe do motocykli Shell Advance',
                type: 'link',
                to: '/produkty/oleje-i-srodki-smarne/shell-advance',
              },
              {
                id: 'shell-advance',
                label: 'Shell Advance',
                type: 'link',
                to: '/produkty/oleje-i-srodki-smarne/shell-advance/shell-advance',
              },
              {
                id: 'shell-advance-2t',
                label: 'Oleje motocyklowe do silników dwusuwowych Shell Advance',
                type: 'expandable',
                children: [
                  {
                    id: 'shell-advance-2t-main',
                    label: 'Przejdź do: Oleje motocyklowe do silników dwusuwowych Shell Advance',
                    type: 'link',
                    to: '/produkty/oleje-i-srodki-smarne/shell-advance/2t',
                  },
                  {
                    id: 'shell-advance-ultra-2',
                    label: 'Shell Advance Ultra 2',
                    type: 'link',
                    to: '/produkty/oleje-i-srodki-smarne/shell-advance/ultra-2',
                  },
                ],
              },
              {
                id: 'shell-advance-4t',
                label: 'Oleje motocyklowe do silników czterosuwowych Shell Advance',
                type: 'expandable',
                children: [
                  {
                    id: 'shell-advance-4t-main',
                    label: 'Przejdź do: Oleje motocyklowe do silników czterosuwowych Shell Advance',
                    type: 'link',
                    to: '/produkty/oleje-i-srodki-smarne/shell-advance/4t',
                  },
                  {
                    id: 'shell-advance-4t-ax7-10w40',
                    label: 'Shell Advance 4T AX7 10W-40',
                    type: 'link',
                    to: '/produkty/oleje-i-srodki-smarne/shell-advance/4t-ax7-10w40',
                  },
                ],
              },
            ],
          },
          {
            id: 'shell-coolant',
            label: 'Płyny do chłodnic Shell Coolant',
            type: 'expandable',
            children: [
              {
                id: 'shell-coolant-main',
                label: 'Przejdź do: Płyny do chłodnic Shell Coolant',
                type: 'link',
                to: '/produkty/oleje-i-srodki-smarne/shell-coolant',
              },
              {
                id: 'coolant-faq',
                label: 'Płyny do chłodnic - FAQ',
                type: 'link',
                to: '/produkty/oleje-i-srodki-smarne/shell-coolant/faq',
              },
            ],
          },
          {
            id: 'shell-spirax',
            label: 'Oleje do automatycznych skrzyń biegów Shell Spirax',
            type: 'link',
            to: '/produkty/oleje-i-srodki-smarne/shell-spirax',
          },
          {
            id: 'oil-distributor-locator',
            label: 'Lokalizator dystrybutorów olejów Shell',
            type: 'link',
            to: '/produkty/oleje-i-srodki-smarne/lokalizator-dystrybutorow',
          },
          {
            id: 'lubricants-faq',
            label: 'Środki smarne - FAQ',
            type: 'link',
            to: '/produkty/oleje-i-srodki-smarne/faq',
          },
          {
            id: 'lubematch',
            label: 'Dobierz olej do silnika z Shell LubeMatch',
            type: 'link',
            to: '/produkty/oleje-i-srodki-smarne/lubematch',
          },
          {
            id: 'oils-blog',
            label: 'Blog o olejach silnikowych i środkach smarnych',
            type: 'expandable',
            children: [
              {
                id: 'oils-blog-main',
                label: 'Przejdź do: Blog o olejach silnikowych i środkach smarnych',
                type: 'link',
                to: '/produkty/oleje-i-srodki-smarne/blog',
              },
              {
                id: 'synthetic-vs-semisynthetic',
                label: 'Olej syntetyczny czy półsyntetyczny? Sprawdź różnice',
                type: 'link',
                to: '/produkty/oleje-i-srodki-smarne/blog/olej-syntetyczny-vs-polsyntetyczny',
              },
              {
                id: 'power-loss-causes',
                label: 'Nagły spadek mocy silnika podczas jazdy - przyczyny',
                type: 'link',
                to: '/produkty/oleje-i-srodki-smarne/blog/nagly-spadek-mocy-silnika',
              },
              {
                id: 'oil-viscosity-explained',
                label: 'Co oznacza lepkość oleju silnikowego? Sprawdź!',
                type: 'link',
                to: '/produkty/oleje-i-srodki-smarne/blog/lepkość-oleju-wyjasnienie',
              },
              {
                id: 'ev-battery-lifetime-fluids',
                label: 'Żywotność baterii w samochodach elektrycznych a stosowane płyny',
                type: 'link',
                to: '/produkty/oleje-i-srodki-smarne/blog/zywotnosc-baterii-a-plyny',
              },
              {
                id: 'gearbox-oil-choice',
                label: 'Jaki olej do skrzyni biegów? Podpowiadamy!',
                type: 'link',
                to: '/produkty/oleje-i-srodki-smarne/blog/jaki-olej-do-skrzyni-biegow',
              },
              {
                id: 'hydraulic-oil-change',
                label: 'Przepracowany olej hydrauliczny – wymiana',
                type: 'link',
                to: '/produkty/oleje-i-srodki-smarne/blog/wymiana-oleju-hydraulicznego',
              },
              {
                id: 'hybrid-oil-choice',
                label: 'Jaki olej do hybrydy?',
                type: 'link',
                to: '/produkty/oleje-i-srodki-smarne/blog/jaki-olej-do-hybrydy',
              },
              {
                id: 'motorcycle-oil-choice',
                label: 'Jaki olej do motocykla?',
                type: 'link',
                to: '/produkty/oleje-i-srodki-smarne/blog/jaki-olej-do-motocykla',
              },
              {
                id: 'tractor-oil-choice',
                label: 'Jaki olej do ciągnika wybrać? Doradzamy',
                type: 'link',
                to: '/produkty/oleje-i-srodki-smarne/blog/jaki-olej-do-ciagnika',
              },
              {
                id: 'excavator-hydraulic-oil',
                label: 'Jaki olej hydrauliczny do koparki?',
                type: 'link',
                to: '/produkty/oleje-i-srodki-smarne/blog/jaki-olej-hydrauliczny-do-koparki',
              },
              {
                id: 'high-fuel-consumption',
                label:
                  'Wysokie spalanie benzyny – przyczyny. Czy olej wpływa na nadmierne zużycie paliwa?',
                type: 'link',
                to: '/produkty/oleje-i-srodki-smarne/blog/wysokie-spalanie-benzyny',
              },
              {
                id: 'acea-classification',
                label: 'Klasyfikacja ACEA',
                type: 'link',
                to: '/produkty/oleje-i-srodki-smarne/blog/klasyfikacja-acea',
              },
              {
                id: 'engine-oil-leak',
                label: 'Wyciek oleju z silnika – przyczyny, objawy i konsekwencje',
                type: 'link',
                to: '/produkty/oleje-i-srodki-smarne/blog/wyciek-oleju-z-silnika',
              },
              {
                id: 'dynamic-oil-change',
                label: 'Dynamiczna wymiana oleju – jak przebiega?',
                type: 'link',
                to: '/produkty/oleje-i-srodki-smarne/blog/dynamiczna-wymiana-oleju',
              },
              {
                id: 'engine-lubrication-system',
                label:
                  'Układ smarowania silnika – budowa, działanie i rola w ochronie jednostki napędowej',
                type: 'link',
                to: '/produkty/oleje-i-srodki-smarne/blog/uklad-smarowania-silnika',
              },
              {
                id: 'no-oil-consequences',
                label: 'Brak oleju w silniku – czym skutkuje dalsza jazda?',
                type: 'link',
                to: '/produkty/oleje-i-srodki-smarne/blog/brak-oleju-w-silniku',
              },
              {
                id: 'oil-expiry-date',
                label: 'Czy olej silnikowy ma datę ważności? Zasady przechowywania otwartego oleju',
                type: 'link',
                to: '/produkty/oleje-i-srodki-smarne/blog/data-waznosci-oleju',
              },
            ],
          },
          {
            id: 'oil-viscosity',
            label: 'Lepkość oleju silnikowego',
            type: 'expandable',
            children: [
              {
                id: 'oil-viscosity-main',
                label: 'Przejdź do: Lepkość oleju silnikowego',
                type: 'link',
                to: '/produkty/oleje-i-srodki-smarne/lepkość-oleju-silnikowego',
              },
              {
                id: 'oil-viscosity-0w20',
                label: 'Oleje silnikowe 0W20',
                type: 'link',
                to: '/produkty/oleje-i-srodki-smarne/lepkość-oleju-silnikowego/0w20',
              },
              {
                id: 'oil-viscosity-5w30',
                label: 'Oleje silnikowe 5W-30',
                type: 'link',
                to: '/produkty/oleje-i-srodki-smarne/lepkość-oleju-silnikowego/5w30',
              },
              {
                id: 'oil-viscosity-10w60',
                label: 'Oleje silnikowe 10W60',
                type: 'link',
                to: '/produkty/oleje-i-srodki-smarne/lepkość-oleju-silnikowego/10w60',
              },
              {
                id: 'oil-viscosity-5w40',
                label: 'Oleje silnikowe 5W40',
                type: 'link',
                to: '/produkty/oleje-i-srodki-smarne/lepkość-oleju-silnikowego/5w40',
              },
              {
                id: 'oil-viscosity-10w40',
                label: 'Oleje silnikowe 10W40',
                type: 'link',
                to: '/produkty/oleje-i-srodki-smarne/lepkość-oleju-silnikowego/10w40',
              },
              {
                id: 'oil-viscosity-0w30',
                label: 'Oleje silnikowe 0W-30',
                type: 'link',
                to: '/produkty/oleje-i-srodki-smarne/lepkość-oleju-silnikowego/0w30',
              },
              {
                id: 'oil-viscosity-15w40',
                label: 'Oleje silnikowe 15W40',
                type: 'link',
                to: '/produkty/oleje-i-srodki-smarne/lepkość-oleju-silnikowego/15w40',
              },
            ],
          },
        ],
      },
      {
        id: 'motorsport',
        label: 'Sporty motorowe',
        type: 'expandable',
        children: [
          {
            id: 'motorsport-main',
            label: 'Przejdź do: Sporty motorowe',
            type: 'link',
            to: '/produkty/sporty-motorowe',
          },
          {
            id: 'motorsport-track-to-road',
            label: 'Z toru wyścigowego na drogę',
            type: 'link',
            to: '/produkty/sporty-motorowe/z-toru-na-droge',
          },
          {
            id: 'motorsport-75-years-ferrari',
            label: '75 lat współpracy z Ferrari',
            type: 'link',
            to: '/produkty/sporty-motorowe/75-lat-z-ferrari',
          },
        ],
      },
      {
        id: 'tips',
        label: 'Porady i wskazówki dla kierowców',
        type: 'link',
        to: '/produkty/porady-i-wskazowki',
      },
      {
        id: 'inspirations',
        label: 'Inspiracje do jazdy',
        type: 'expandable',
        children: [
          {
            id: 'inspirations-main',
            label: 'Przejdź do: Inspiracje do jazdy',
            type: 'link',
            to: '/produkty/inspiracje-do-jazdy',
          },
          {
            id: 'secret-routes',
            label: 'Sekretne trasy',
            type: 'expandable',
            children: [
              {
                id: 'secret-routes-main',
                label: 'Przejdź do: Sekretne trasy',
                type: 'link',
                to: '/produkty/inspiracje-do-jazdy/sekretne-trasy',
              },
              {
                id: 'secret-routes-amsterdam',
                label: 'Amsterdam',
                type: 'link',
                to: '/produkty/inspiracje-do-jazdy/sekretne-trasy/amsterdam',
              },
              {
                id: 'secret-routes-barcelona',
                label: 'Barcelona',
                type: 'link',
                to: '/produkty/inspiracje-do-jazdy/sekretne-trasy/barcelona',
              },
              {
                id: 'secret-routes-berlin',
                label: 'Berlin',
                type: 'link',
                to: '/produkty/inspiracje-do-jazdy/sekretne-trasy/berlin',
              },
              {
                id: 'secret-routes-london',
                label: 'Londyn',
                type: 'link',
                to: '/produkty/inspiracje-do-jazdy/sekretne-trasy/londyn',
              },
              {
                id: 'secret-routes-bruges',
                label: 'Brugia',
                type: 'link',
                to: '/produkty/inspiracje-do-jazdy/sekretne-trasy/brugia',
              },
              {
                id: 'secret-routes-madrid',
                label: 'Madryt',
                type: 'link',
                to: '/produkty/inspiracje-do-jazdy/sekretne-trasy/madryt',
              },
              {
                id: 'secret-routes-paris',
                label: 'Paryż',
                type: 'link',
                to: '/produkty/inspiracje-do-jazdy/sekretne-trasy/paryz',
              },
              {
                id: 'secret-routes-marrakesh',
                label: 'Marrakesz',
                type: 'link',
                to: '/produkty/inspiracje-do-jazdy/sekretne-trasy/marrakesz',
              },
              {
                id: 'secret-routes-prague',
                label: 'Praga',
                type: 'link',
                to: '/produkty/inspiracje-do-jazdy/sekretne-trasy/praga',
              },
              {
                id: 'secret-routes-rome',
                label: 'Rzym',
                type: 'link',
                to: '/produkty/inspiracje-do-jazdy/sekretne-trasy/rzym',
              },
              {
                id: 'secret-routes-san-francisco',
                label: 'San Francisco',
                type: 'link',
                to: '/produkty/inspiracje-do-jazdy/sekretne-trasy/san-francisco',
              },
              {
                id: 'secret-routes-tokyo',
                label: 'Tokio',
                type: 'link',
                to: '/produkty/inspiracje-do-jazdy/sekretne-trasy/tokio',
              },
              {
                id: 'secret-routes-warsaw',
                label: 'Warszawa',
                type: 'link',
                to: '/produkty/inspiracje-do-jazdy/sekretne-trasy/warszawa',
              },
            ],
          },
          {
            id: 'off-the-beaten-path',
            label: 'Poza utartym szlakiem',
            type: 'expandable',
            children: [
              {
                id: 'off-the-beaten-path-main',
                label: 'Przejdź do: Poza utartym szlakiem',
                type: 'link',
                to: '/produkty/inspiracje-do-jazdy/poza-utartym-szlakiem',
              },
              {
                id: 'biker',
                label: 'B jak biker',
                type: 'link',
                to: '/produkty/inspiracje-do-jazdy/poza-utartym-szlakiem/b-jak-biker',
              },
              {
                id: 'high-in-the-mountains',
                label: 'Wysoko w górach',
                type: 'link',
                to: '/produkty/inspiracje-do-jazdy/poza-utartym-szlakiem/wysoko-w-gorach',
              },
              {
                id: 'midnight-sun',
                label: 'Słońce o północy',
                type: 'link',
                to: '/produkty/inspiracje-do-jazdy/poza-utartym-szlakiem/slonce-o-polnocy',
              },
              {
                id: 'pacific-highway',
                label: 'Pacific Highway',
                type: 'link',
                to: '/produkty/inspiracje-do-jazdy/poza-utartym-szlakiem/pacific-highway',
              },
              {
                id: 'devils-race',
                label: 'Diabelski wyścig',
                type: 'link',
                to: '/produkty/inspiracje-do-jazdy/poza-utartym-szlakiem/diabelski-wyscig',
              },
              {
                id: 'road-to-norway',
                label: 'Droga do Norwegii',
                type: 'link',
                to: '/produkty/inspiracje-do-jazdy/poza-utartym-szlakiem/droga-do-norwegii',
              },
              {
                id: 'storm-warnings',
                label: 'Ostrzeżenia burzowe',
                type: 'link',
                to: '/produkty/inspiracje-do-jazdy/poza-utartym-szlakiem/ostrzezenia-burzowe',
              },
            ],
          },
          {
            id: 'car-routes',
            label: 'Trasy samochodowe',
            type: 'expandable',
            children: [
              {
                id: 'car-routes-main',
                label: 'Przejdź do: Trasy samochodowe',
                type: 'link',
                to: '/produkty/inspiracje-do-jazdy/trasy-samochodowe',
              },
              {
                id: 'european-trips',
                label: 'Najciekawsze wyprawy po Europie',
                type: 'link',
                to: '/produkty/inspiracje-do-jazdy/trasy-samochodowe/europa',
              },
              {
                id: 'world-best-routes',
                label: 'Najlepsze trasy świata',
                type: 'link',
                to: '/produkty/inspiracje-do-jazdy/trasy-samochodowe/swiat',
              },
            ],
          },
          {
            id: 'dream-routes',
            label: 'Trasy marzeń',
            type: 'expandable',
            children: [
              {
                id: 'dream-routes-main',
                label: 'Przejdź do: Trasy marzeń',
                type: 'link',
                to: '/produkty/inspiracje-do-jazdy/trasy-marzen',
              },
              {
                id: 'vicki-butler-henderson',
                label: 'Jazda z Vicki-Butler Henderson',
                type: 'link',
                to: '/produkty/inspiracje-do-jazdy/trasy-marzen/vicki-butler-henderson',
              },
              {
                id: 'dream-routes-drivers-bikers',
                label: 'Trasy marzeń dla kierowców i motocyklistów',
                type: 'link',
                to: '/produkty/inspiracje-do-jazdy/trasy-marzen/dla-kierowcow-i-motocyklistow',
              },
              {
                id: 'gary-inman-sandstorm',
                label: 'Gary Inman – Burza piaskowa',
                type: 'link',
                to: '/produkty/inspiracje-do-jazdy/trasy-marzen/gary-inman-burza-piaskowa',
              },
              {
                id: 'enzo-built-city',
                label: 'Miasto zbudowane przez Enzo',
                type: 'link',
                to: '/produkty/inspiracje-do-jazdy/trasy-marzen/miasto-zbudowane-przez-enzo',
              },
            ],
          },
        ],
      },
    ],
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
