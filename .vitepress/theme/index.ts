import DefaultTheme from 'vitepress/theme'
import { 
  Puzzle,       // 🧩
  TriangleAlert, // ⚠️
  Factory,      // 🏭
  CheckCircle2, // ✅
  XCircle,      // ❌
  Hammer,       // 🛠️
  Download,     // 📥
  RefreshCw,    // 🔃
  Brain,        // 🧠
  FlaskConical, // 🧪
  HelpCircle,   // ❓ / ❔
  MessageSquare // 💬
} from 'lucide-vue-next'
import type { App } from 'vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.component('IconPuzzle', Puzzle)
    app.component('IconAlert', TriangleAlert)
    app.component('IconFactory', Factory)
    app.component('IconCheck', CheckCircle2)
    app.component('IconX', XCircle)
    app.component('IconHammer', Hammer)
    app.component('IconDownload', Download)
    app.component('IconRefresh', RefreshCw)
    app.component('IconBrain', Brain)
    app.component('IconFlask', FlaskConical)
    app.component('IconHelp', HelpCircle)
    app.component('IconChat', MessageSquare)
  }
}