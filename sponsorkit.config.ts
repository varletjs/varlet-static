import { defineConfig, presets } from 'sponsorkit'
import { genSpecialSponsorShips, specialMonthlyDollars } from './specialSponsors'

export default defineConfig({
  tiers: [
    {
      title: 'Past Sponsors',
      monthlyDollars: -1,
      preset: {
        avatar: {
          size: 20,
        },
        boxWidth: 22,
        boxHeight: 22,
        container: {
          sidePadding: 35,
        },
      },
    },
    {
      title: 'Backers',
      preset: presets.small,
    },
    {
      title: 'Sponsors',
      monthlyDollars: 5,
      preset: {
        avatar: {
          size: 42,
        },
        boxWidth: 52,
        boxHeight: 52,
        container: {
          sidePadding: 30,
        },
      },
    },
    // Sponsors who support this project on a long-term basis through a one-time sponsorship
    {
      title: 'Special Sponsor',
      // sort only
      monthlyDollars: specialMonthlyDollars,
    },
    {
      title: 'Silver Sponsors',
      monthlyDollars: 25,
      preset: presets.medium,
    },
    {
      title: 'Gold Sponsors',
      monthlyDollars: 50,
      preset: presets.large,
    },
    {
      title: 'Platinum Sponsors',
      monthlyDollars: 200,
      preset: presets.xl,
    },
  ],

  async onSponsorsReady(allSponsorShips) {
    return [...allSponsorShips, ...await genSpecialSponsorShips()]
  }
})
