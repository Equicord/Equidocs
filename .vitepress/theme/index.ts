import DefaultTheme from 'vitepress/theme'
import { 
  Puzzle, 
  Settings, 
  Zap, 
  BookOpen 
} from 'lucide-vue-next'
import type { App } from 'vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.component('IconPuzzle', Puzzle)
    app.component('IconSettings', Settings)
    app.component('IconZap', Zap)
    app.component('IconBook', BookOpen)
  }
}