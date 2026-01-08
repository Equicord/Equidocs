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
  - title: Plugins & Development
    details: Learn to install user plugins and build custom ones.
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
    avatar: 'https://avatars.githubusercontent.com/u/78185467',
    name: 'thororen',
    title: 'Owner',
    links: [
      { icon: 'github', link: 'https://github.com/thororen1234' },
      { icon: svgIcon, link: 'https://www.thororen.com' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/81579850',
    name: 'Naibuu',
    title: 'Team',
    links: [
      { icon: 'github', link: 'https://github.com/Naibuu' },
      { icon: svgIcon, link: 'https://www.naibuu.dev' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/150982280',
    name: 'Krystal / Juniper🌸🎀',
    title: 'Team',
    links: [
      { icon: 'github', link: 'https://github.com/KrstlSkll69' },
      { icon: svgIcon, link: 'https://krystal.thororen.com' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/126973723',
    name: 'Cortex',
    title: 'Team',
    links: [
      { icon: 'github', link: 'https://github.com/refurbishing' },
      { icon: svgIcon, link: 'https://cortex.rest' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/71186972',
    name: 'creations',
    title: 'Team',
    links: [
      { icon: 'github', link: 'https://github.com/creationsss' },
      { icon: svgIcon, link: 'https://creations.works' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/159411967?v=4',
    name: 'DrWhoFan13',
    title: 'Helper',
    links: [
      { icon: 'github', link: 'https://github.com/DrWhoFan13' },
    ]
  },
  {
    avatar: 'https://cdn.nest.rip/uploads/3c0a913e-f1b3-4529-9cad-45d18330af66.png',
    name: 'Rotes',
    title: 'Helper',
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/92535668',
    name: 'Murphy',
    title: 'Helper',
    links: [
      { icon: 'github', link: 'https://github.com/EtorixDev' },
      { icon: svgIcon, link: 'https://etorix.dev' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/134332787',
    name: 'Jake',
    title: 'Helper',
    links: [
      { icon: 'github', link: 'https://github.com/justjxke' },
    ]
  },
  {
  	avatar: 'https://avatars.githubusercontent.com/u/69634294',
   	name: 'Prism',
    title: 'Helper',
    links: [
    	{ icon: 'github', link: 'https://github.com/imjustprism' }
    ]
  },
  {
  	avatar: 'https://avatars.githubusercontent.com/u/83366426',
   	name: 'g',
    title: 'Helper',
    links: [
    	{ icon: 'github', link: 'https://github.com/sankoofa' }
    ]
  },
]
</script>

<div style="margin-top: 48px;"> 
  <h2 style="text-align: center; font-size: 24px; font-weight: 600; margin-bottom: 24px;">Our Team</h2>
  <VPTeamMembers size="small" :members="members" />
</div>

