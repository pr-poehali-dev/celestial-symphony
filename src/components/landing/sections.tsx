import { Badge } from "@/components/ui/badge"
import { getDayContent, getTodayLabel } from "./dailyContent"

const day = getDayContent()
const todayLabel = getTodayLabel()

export const sections = [
  {
    id: 'motivation',
    subtitle: <Badge variant="outline" className="text-white border-white capitalize">{todayLabel}</Badge>,
    title: day.motivation,
    content: day.motivationSub,
  },
  {
    id: 'affirmation',
    title: day.affirmation,
    content: day.affirmationSub,
  },
  {
    id: 'quote',
    title: `«${day.quote}»`,
    content: `— ${day.quoteAuthor}`,
  },
]