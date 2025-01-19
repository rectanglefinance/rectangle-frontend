import { MenuEntry } from '@mozartfinance/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'http://localhost:3000/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'http://localhost:3000/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/rectangleofficial',
      },
      {
        label: 'Docs',
        href: 'https://rectangle.gitbook.io/whitepaper',
      },
      {
        label: 'Blog',
        href: 'https://medium.com/@rectanglertgofficial',
      },
    ],
  },
  {
    label: 'Submit Token',
    icon: 'TicketIcon',
    href: 'https://forms.gle/WGDLRiDtkzbNcJCa8',
  },
  {
    label: 'Airdrop',
    icon: 'InfoIcon',
    href: 'https://airdrop.rectangleofficial.com',
  },
]

export default config
