import DefaultTheme from 'vitepress/theme'
import * as Lucide from 'lucide-vue-next'
import './custom.css'

const icons = {
  IconPuzzle:        { comp: Lucide.Puzzle,        emoji: '🧩' },
  IconAlert:         { comp: Lucide.TriangleAlert, emoji: '⚠️' },
  IconCheck:         { comp: Lucide.CheckCircle2,  emoji: '✅' },
  IconX:             { comp: Lucide.XCircle,       emoji: '❌' },
  IconHammer:        { comp: Lucide.Hammer,        emoji: '🔨' },
  IconFlask:         { comp: Lucide.FlaskConical,  emoji: '🧪' },
  IconHelp:          { comp: Lucide.HelpCircle,    emoji: '❓' },
  IconRocket:        { comp: Lucide.Rocket,        emoji: '🚀' },
  IconTarget:        { comp: Lucide.Target,        emoji: '🎯' },
  IconPlug:          { comp: Lucide.Plug,          emoji: '🔌' },
  IconConstruction:  { comp: Lucide.Construction,  emoji: '🚧' },
  IconInfo:          { comp: Lucide.Info,          emoji: 'ℹ️' }
}

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    Object.entries(icons).forEach(([name, { comp }]) => {
      app.component(name, comp)
    })
  }
}