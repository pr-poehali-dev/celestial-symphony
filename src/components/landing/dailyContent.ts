export interface DayContent {
  motivation: string
  motivationSub: string
  affirmation: string
  affirmationSub: string
  quote: string
  quoteAuthor: string
}

const dailyData: DayContent[] = [
  {
    motivation: "Этот день создан для тебя.",
    motivationSub: "Ты уже прошёл через многое, чтобы стоять здесь. Сделай сегодня один шаг вперёд — и этого достаточно.",
    affirmation: "Я достаточно хорош.",
    affirmationSub: "Твоих усилий, твоей доброты и твоей уникальности хватает — прямо сейчас, в эту минуту.",
    quote: "Верь, что сможешь — и ты уже на полпути.",
    quoteAuthor: "Теодор Рузвельт",
  },
  {
    motivation: "Маленький шаг — это уже победа.",
    motivationSub: "Не нужно менять всё сразу. Один добрый поступок, одна смелая мысль — и день прожит не зря.",
    affirmation: "Я открыт новым возможностям.",
    affirmationSub: "Сегодня мир готов удивить тебя. Оставь дверь открытой — и войдёт что-то прекрасное.",
    quote: "Начало — это уже половина дела.",
    quoteAuthor: "Аристотель",
  },
  {
    motivation: "Сегодня — твой день.",
    motivationSub: "Не ждать идеального момента. Идеальный момент — это сейчас, с тем, что у тебя есть.",
    affirmation: "Я заслуживаю любви и счастья.",
    affirmationSub: "Счастье не нужно заслуживать. Оно уже твоё — просто позволь себе его принять.",
    quote: "Ты сам — своя лучшая инвестиция.",
    quoteAuthor: "Уоррен Баффет",
  },
  {
    motivation: "Трудности — это рост.",
    motivationSub: "Каждое препятствие на пути делает тебя крепче, мудрее, глубже. Это не конец — это начало.",
    affirmation: "Мои усилия приносят плоды.",
    affirmationSub: "Даже если результат ещё не виден — зёрна посеяны. Продолжай поливать.",
    quote: "Падать семь раз, вставать восемь.",
    quoteAuthor: "Японская пословица",
  },
  {
    motivation: "Ты способен на большее.",
    motivationSub: "Не потолок, не обстоятельства — только ты сам знаешь, сколько в тебе нераскрытого потенциала.",
    affirmation: "Я выбираю радость сегодня.",
    affirmationSub: "Радость — это не везение. Это выбор, который ты можешь сделать прямо сейчас.",
    quote: "Счастье — это не судьба, это навык.",
    quoteAuthor: "Экхарт Толле",
  },
  {
    motivation: "Один день — одна победа.",
    motivationSub: "Не нужно покорять горы каждый день. Просто сделай сегодня то, чего вчера боялся.",
    affirmation: "Я доверяю своему пути.",
    affirmationSub: "Не всегда ясно куда идёшь — но каждый шаг приближает тебя к тому, кем ты становишься.",
    quote: "Путешествие в тысячу миль начинается с одного шага.",
    quoteAuthor: "Лао Цзы",
  },
  {
    motivation: "Твоя история только начинается.",
    motivationSub: "Всё, что было — лишь предисловие. Лучшие главы твоей жизни ещё не написаны.",
    affirmation: "Я создаю свою реальность.",
    affirmationSub: "Мысли, слова, поступки — всё это строительный материал твоего будущего. Строй смело.",
    quote: "Будущее принадлежит тем, кто верит в красоту своих мечтаний.",
    quoteAuthor: "Элеонора Рузвельт",
  },
]

export function getDayContent(): DayContent {
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 0)
  const diff = now.getTime() - start.getTime()
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24))
  return dailyData[dayOfYear % dailyData.length]
}

export function getTodayLabel(): string {
  const now = new Date()
  return now.toLocaleDateString('ru-RU', { weekday: 'long', day: 'numeric', month: 'long' })
}
