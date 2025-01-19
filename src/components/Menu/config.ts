import { MenuEntry } from '@mozartfinance/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://rectangleswap.netlify.app',
  },
  {
    label: 'Trade',
    icon: 'IfoIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://rectangleswap.netlify.app/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://rectangleswap.netlify.app/#/pool',
      },
    ],
  },
  // {
  //   label: 'Farms',
  //   icon: 'FarmIcon',
  //   href: '/farms',
  // },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  {
    label: 'Submit Token',
    icon: 'TicketIcon',
    href: 'https://forms.gle/WGDLRiDtkzbNcJCa8',
  },
  {
    label: 'Airdrop',
    icon: 'ShieldIcon',
    href: 'https://airdrop.rectangleofficial.com',
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
]

export default config
