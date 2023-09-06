import { resolveAvatars, type Sponsorship, type Sponsor } from 'sponsorkit'

const specialSponsors: Sponsor[] = [
  {
    type: 'User',
    login: 'zhangmo8',
    name: 'xiaomo',
    avatarUrl: 'https://avatars.githubusercontent.com/u/43628500?v=4',
    linkUrl: 'https://github.com/zhangmo8',
    websiteUrl: 'https://github.com/zhangmo8',
  },
  {
    type: 'User',
    login: 'qytayh',
    name: 'Joker',
    avatarUrl: 'https://avatars.githubusercontent.com/u/39668309?v=4',
    linkUrl: 'https://github.com/qytayh',
    websiteUrl: 'https://github.com/qytayh',
  },
  {
    type: 'User',
    login: 'chenQushai',
    name: 'chenQushai',
    avatarUrl: 'https://avatars.githubusercontent.com/u/45193230?v=4',
    linkUrl: 'https://github.com/chenQushai',
    websiteUrl: 'https://github.com/chenQushai',
  },
  {
    type: 'User',
    login: 'chouchouji',
    name: 'chouchouji',
    avatarUrl: 'https://avatars.githubusercontent.com/u/70570907?v=4',
    linkUrl: 'https://github.com/chouchouji',
    websiteUrl: 'https://github.com/chouchouji',
  },
]

export const specialMonthlyDollars = 6

export async function genSpecialSponsorShips() {
  const sponsorShips: Sponsorship[] = specialSponsors.map((sponsor) => ({
    tierName: 'github',
    monthlyDollars: specialMonthlyDollars,
    sponsor,
  }))

  await resolveAvatars(sponsorShips, '')

  return sponsorShips
}
