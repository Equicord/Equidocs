---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Equicord Docs"
  text: "Documentation for Discord's other cutest client"
  actions:
    - theme: brand
      text: Getting Started
      link: /getting-started
    - theme: alt
      text: Installation
      link: /installation
    - theme: alt
      text: FAQ
      link: /faq

features:
  - title: Getting Started
    details: Learn how to set up and use Equicord.
    link: /getting-started
  - title: Installation
    details: Step-by-step guides for installing Equicord on all platforms.
    link: /installation
  - title: Plugin Development
    details: Explore how to install user plugins for Equicord.
    link: /plugins
  - title: FAQ
    details: Find answers to common questions and troubleshooting tips.
    link: /faq
---

<script setup lang="ts">
import { VPTeamMembers } from 'vitepress/theme'
const svgIcon = {svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 3h6v6m-11 5L21 3m-3 10v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>'}
const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/78185467?v=4',
    name: 'thororen',
    title: 'Owner',
    links: [
      { icon: 'github', link: 'https://github.com/thororen1234' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/62218284?v=4',
    name: 'vmohammad',
    title: 'Team',
    links: [
      { icon: 'github', link: 'https://github.com/vmohammad24/' },
      { icon: svgIcon, link: 'https://vmohammad.dev/' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/60797172?v=4',
    name: 'nyx',
    title: 'Team',
    links: [
      { icon: 'github', link: 'https://github.com/verticalsync' },

    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/150982280?v=4',
    name: 'Krystal / Juniper🌸🎀',
    title: 'Team',
    links: [
      { icon: 'github', link: 'https://github.com/KrstlSkll69' },
      { icon: svgIcon, link: 'https://krstlskll69.github.io' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/126973723?v=4',
    name: 'Cortex',
    title: 'Team',
    links: [
      { icon: 'github', link: 'https://github.com/refurbishing' },
      { icon: svgIcon, link: 'https://cortex.rest/' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/71186972?v=4',
    name: 'creations',
    title: 'Team',
    links: [
      { icon: 'github', link: 'https://github.com/creationsss' },
      { icon: svgIcon, link: 'https://creations.works/' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/33640860?v=4',
    name: 'Aspy',
    title: 'Helper',
    links: [
      { icon: 'github', link: 'https://github.com/SomeAspy' },
      { icon: svgIcon, link: 'https://aspy.dev/' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/143244075?v=4',
    name: 'S€th',
    title: 'Helper',
    links: [
      { icon: 'github', link: 'https://github.com/wont-stream' },
      { icon: svgIcon, link: 'https://ipv4.army/' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/48805031?v=4',
    name: 'Crxa',
    title: 'Helper',
    links: [
      { icon: 'github', link: 'https://github.com/sitescript' },
      { icon: svgIcon, link: 'https://www.crxaw.tech/' }
    ]
  }
]
</script>

<div style="margin-top: 48px;"> 
  <h2 style="text-align: center; font-size: 24px; font-weight: 600; margin-bottom: 24px;">Our Team</h2>
  <VPTeamMembers size="medium" :members="members" />
</div>

