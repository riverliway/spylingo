
export enum Language {
  English = 'en',
  Spanish = 'es',
  Portuguese = 'pt',
  French = 'fr',
  German = 'de',
  Polish = 'pl',
  Italian = 'it',
  Japanese = 'ja',
  Chinese = 'ch',
  Korean = 'ko',
  Dutch = 'nl',
  Turkish = 'tr',
  Swedish = 'sv',
  Indonesian = 'id',
  Filipino = 'ph',
  Ukrainian = 'uk',
  Greek = 'el',
  Czech = 'cs',
  Finnish = 'fi',
  Romanian = 'ro',
  Russian = 'ru',
  Danish = 'da',
  Bulgarian = 'bg',
  Malay = 'ms',
  Slovak = 'sk',
  Croatian = 'hr',
  Arabic = 'ar',
  Tamil = 'ta',
  Hindi = 'hi',
}

export const getLanguageName = (lang: Language, inLang: Language): string => {
  switch (inLang) {
    case Language.English: return EnglishLanguageNames[lang]
    case Language.Spanish: return SpanishLanguageNames[lang]
    case Language.Portuguese: return PortugueseLanguageNames[lang]
    case Language.French: return FrenchLanguageNames[lang]
    case Language.German: return GermanLanguageNames[lang]
    case Language.Polish: return PolishLanguageNames[lang]
    case Language.Italian: return ItalianLanguageNames[lang]
    case Language.Japanese: return JapaneseLanguageNames[lang]
    case Language.Chinese: return ChineseLanguageNames[lang]
    case Language.Korean: return KoreanLanguageNames[lang]
    case Language.Dutch: return DutchLanguageNames[lang]
    case Language.Turkish: return TurkishLanguageNames[lang]
    case Language.Swedish: return SwedishLanguageNames[lang]
    case Language.Indonesian: return IndonesianLanguageNames[lang]
    case Language.Filipino: return FilipinoLanguageNames[lang]
    case Language.Ukrainian: return UkrainianLanguageNames[lang]
    case Language.Greek: return GreekLanguageNames[lang]
    case Language.Czech: return CzechLanguageNames[lang]
    case Language.Finnish: return FinnishLanguageNames[lang]
    case Language.Romanian: return RomanianLanguageNames[lang]
    case Language.Russian: return RussianLanguageNames[lang]
    case Language.Danish: return DanishLanguageNames[lang]
    case Language.Bulgarian: return BulgarianLanguageNames[lang]
    case Language.Malay: return MalayLanguageNames[lang]
    case Language.Slovak: return SlovakLanguageNames[lang]
    case Language.Croatian: return CroatianLanguageNames[lang]
    case Language.Arabic: return ArabicLanguageNames[lang]
    case Language.Tamil: return TamilLanguageNames[lang]
    case Language.Hindi: return HindiLanguageNames[lang]
  }
}

const EnglishLanguageNames: Record<Language, string> = {
  [Language.English]: 'English',
  [Language.Spanish]: 'Spanish',
  [Language.Portuguese]: 'Portuguese',
  [Language.French]: 'French',
  [Language.German]: 'German',
  [Language.Polish]: 'Polish',
  [Language.Italian]: 'Italian',
  [Language.Japanese]: 'Japanese',
  [Language.Chinese]: 'Chinese',
  [Language.Korean]: 'Korean',
  [Language.Dutch]: 'Dutch',
  [Language.Turkish]: 'Turkish',
  [Language.Swedish]: 'Swedish',
  [Language.Indonesian]: 'Indonesian',
  [Language.Filipino]: 'Filipino',
  [Language.Ukrainian]: 'Ukrainian',
  [Language.Greek]: 'Greek',
  [Language.Czech]: 'Czech',
  [Language.Finnish]: 'Finnish',
  [Language.Romanian]: 'Romanian',
  [Language.Russian]: 'Russian',
  [Language.Danish]: 'Danish',
  [Language.Bulgarian]: 'Bulgarian',
  [Language.Malay]: 'Malay',
  [Language.Slovak]: 'Slovak',
  [Language.Croatian]: 'Croatian',
  [Language.Arabic]: 'Arabic',
  [Language.Tamil]: 'Tamil',
  [Language.Hindi]: 'Hindi'
}

const SpanishLanguageNames: Record<Language, string> = {
  [Language.English]: 'Inglés',
  [Language.Spanish]: 'Español',
  [Language.Portuguese]: 'Portugués',
  [Language.French]: 'Francés',
  [Language.German]: 'Alemán',
  [Language.Polish]: 'Polaco',
  [Language.Italian]: 'Italiano',
  [Language.Japanese]: 'Japonés',
  [Language.Chinese]: 'Chino',
  [Language.Korean]: 'Coreano',
  [Language.Dutch]: 'Holandés',
  [Language.Turkish]: 'Turco',
  [Language.Swedish]: 'Sueco',
  [Language.Indonesian]: 'Indonesio',
  [Language.Filipino]: 'Filipino',
  [Language.Ukrainian]: 'Ucranio',
  [Language.Greek]: 'Griego',
  [Language.Czech]: 'Checo',
  [Language.Finnish]: 'Finlandés',
  [Language.Romanian]: 'Rumano',
  [Language.Russian]: 'Ruso',
  [Language.Danish]: 'Danés',
  [Language.Bulgarian]: 'Búlgaro',
  [Language.Malay]: 'Malayo',
  [Language.Slovak]: 'Eslovaco',
  [Language.Croatian]: 'Croata',
  [Language.Arabic]: 'Árabe',
  [Language.Tamil]: 'Tamil',
  [Language.Hindi]: 'Hindi'
}

const PortugueseLanguageNames: Record<Language, string> = {
  [Language.English]: 'Inglês',
  [Language.Spanish]: 'Espanhol',
  [Language.Portuguese]: 'Português',
  [Language.French]: 'Francês',
  [Language.German]: 'Alemão',
  [Language.Polish]: 'Polonês',
  [Language.Italian]: 'Italiano',
  [Language.Japanese]: 'Japonês',
  [Language.Chinese]: 'Chinês',
  [Language.Korean]: 'Coreano',
  [Language.Dutch]: 'Holandês',
  [Language.Turkish]: 'Turco',
  [Language.Swedish]: 'Sueco',
  [Language.Indonesian]: 'Indonésio',
  [Language.Filipino]: 'Filipino',
  [Language.Ukrainian]: 'Ucraniano',
  [Language.Greek]: 'Grego',
  [Language.Czech]: 'Tcheco',
  [Language.Finnish]: 'Finlandês',
  [Language.Romanian]: 'Romeno',
  [Language.Russian]: 'Russo',
  [Language.Danish]: 'Dinamarquês',
  [Language.Bulgarian]: 'Búlgaro',
  [Language.Malay]: 'Malaio',
  [Language.Slovak]: 'Eslovaco',
  [Language.Croatian]: 'Croata',
  [Language.Arabic]: 'Árabe',
  [Language.Tamil]: 'Tâmil',
  [Language.Hindi]: 'Hindi'
}

const FrenchLanguageNames: Record<Language, string> = {
  [Language.English]: 'Anglais',
  [Language.Spanish]: 'Espagnol',
  [Language.Portuguese]: 'Portugais',
  [Language.French]: 'Français',
  [Language.German]: 'Allemand',
  [Language.Polish]: 'Polonais',
  [Language.Italian]: 'Italien',
  [Language.Japanese]: 'Japonais',
  [Language.Chinese]: 'Chinois',
  [Language.Korean]: 'Coréen',
  [Language.Dutch]: 'Néerlandais',
  [Language.Turkish]: 'Turc',
  [Language.Swedish]: 'Suédois',
  [Language.Indonesian]: 'Indonésien',
  [Language.Filipino]: 'Philippin',
  [Language.Ukrainian]: 'Ukrainien',
  [Language.Greek]: 'Grec',
  [Language.Czech]: 'Tchèque',
  [Language.Finnish]: 'Finlandais',
  [Language.Romanian]: 'Roumain',
  [Language.Russian]: 'Russe',
  [Language.Danish]: 'Danois',
  [Language.Bulgarian]: 'Bulgare',
  [Language.Malay]: 'Malais',
  [Language.Slovak]: 'Slovaque',
  [Language.Croatian]: 'Croate',
  [Language.Arabic]: 'Arabe',
  [Language.Tamil]: 'Tamoul',
  [Language.Hindi]: 'Hindi'
}

const GermanLanguageNames: Record<Language, string> = {
  [Language.English]: 'Englisch',
  [Language.Spanish]: 'Spanisch',
  [Language.Portuguese]: 'Portugiesisch',
  [Language.French]: 'Französisch',
  [Language.German]: 'Deutsch',
  [Language.Polish]: 'Polnisch',
  [Language.Italian]: 'Italienisch',
  [Language.Japanese]: 'Japanisch',
  [Language.Chinese]: 'Chinesisch',
  [Language.Korean]: 'Koreanisch',
  [Language.Dutch]: 'Niederländisch',
  [Language.Turkish]: 'Türkisch',
  [Language.Swedish]: 'Schwedisch',
  [Language.Indonesian]: 'Indonesisch',
  [Language.Filipino]: 'Filipino',
  [Language.Ukrainian]: 'Ukrainisch',
  [Language.Greek]: 'Griechisch',
  [Language.Czech]: 'Tschechisch',
  [Language.Finnish]: 'Finnisch',
  [Language.Romanian]: 'Rumänisch',
  [Language.Russian]: 'Russisch',
  [Language.Danish]: 'Dänisch',
  [Language.Bulgarian]: 'Bulgarisch',
  [Language.Malay]: 'Malaiisch',
  [Language.Slovak]: 'Slowakisch',
  [Language.Croatian]: 'Kroatisch',
  [Language.Arabic]: 'Arabisch',
  [Language.Tamil]: 'Tamilisch',
  [Language.Hindi]: 'Hindi'
}

const PolishLanguageNames: Record<Language, string> = {
  [Language.English]: 'Angielski',
  [Language.Spanish]: 'Hiszpański',
  [Language.Portuguese]: 'Portugalski',
  [Language.French]: 'Francuski',
  [Language.German]: 'Niemiecki',
  [Language.Polish]: 'Polski',
  [Language.Italian]: 'Włoski',
  [Language.Japanese]: 'Japoński',
  [Language.Chinese]: 'Chiński',
  [Language.Korean]: 'Koreański',
  [Language.Dutch]: 'Holenderski',
  [Language.Turkish]: 'Turecki',
  [Language.Swedish]: 'Szwedzki',
  [Language.Indonesian]: 'Indonezyjski',
  [Language.Filipino]: 'Filipiński',
  [Language.Ukrainian]: 'Ukraiński',
  [Language.Greek]: 'Grecki',
  [Language.Czech]: 'Czeski',
  [Language.Finnish]: 'Fiński',
  [Language.Romanian]: 'Rumuński',
  [Language.Russian]: 'Rosyjski',
  [Language.Danish]: 'Duński',
  [Language.Bulgarian]: 'Bułgarski',
  [Language.Malay]: 'Malajski',
  [Language.Slovak]: 'Słowacki',
  [Language.Croatian]: 'Chorwacki',
  [Language.Arabic]: 'Arabski',
  [Language.Tamil]: 'Tamilski',
  [Language.Hindi]: 'Hindi'
}

const ItalianLanguageNames: Record<Language, string> = {
  [Language.English]: 'Inglese',
  [Language.Spanish]: 'Spagnolo',
  [Language.Portuguese]: 'Portoghese',
  [Language.French]: 'Francese',
  [Language.German]: 'Tedesco',
  [Language.Polish]: 'Polacco',
  [Language.Italian]: 'Italiano',
  [Language.Japanese]: 'Giapponese',
  [Language.Chinese]: 'Cinese',
  [Language.Korean]: 'Coreano',
  [Language.Dutch]: 'Olandese',
  [Language.Turkish]: 'Turco',
  [Language.Swedish]: 'Svedese',
  [Language.Indonesian]: 'Indonesiano',
  [Language.Filipino]: 'Filippino',
  [Language.Ukrainian]: 'Ucraino',
  [Language.Greek]: 'Greco',
  [Language.Czech]: 'Ceco',
  [Language.Finnish]: 'Finlandese',
  [Language.Romanian]: 'Rumeno',
  [Language.Russian]: 'Russo',
  [Language.Danish]: 'Danese',
  [Language.Bulgarian]: 'Bulgaro',
  [Language.Malay]: 'Malese',
  [Language.Slovak]: 'Slovacco',
  [Language.Croatian]: 'Croato',
  [Language.Arabic]: 'Arabo',
  [Language.Tamil]: 'Tamil',
  [Language.Hindi]: 'Hindi'
}

const JapaneseLanguageNames: Record<Language, string> = {
  [Language.English]: '英語',
  [Language.Spanish]: 'スペイン語',
  [Language.Portuguese]: 'ポルトガル語',
  [Language.French]: 'フランス語',
  [Language.German]: 'ドイツ語',
  [Language.Polish]: 'ポーランド語',
  [Language.Italian]: 'イタリア語',
  [Language.Japanese]: '日本語',
  [Language.Chinese]: '中国語',
  [Language.Korean]: '韓国語',
  [Language.Dutch]: 'オランダ語',
  [Language.Turkish]: 'トルコ語',
  [Language.Swedish]: 'スウェーデン語',
  [Language.Indonesian]: 'インドネシア語',
  [Language.Filipino]: 'フィリピン語',
  [Language.Ukrainian]: 'ウクライナ語',
  [Language.Greek]: 'ギリシャ語',
  [Language.Czech]: 'チェコ語',
  [Language.Finnish]: 'フィンランド語',
  [Language.Romanian]: 'ルーマニア語',
  [Language.Russian]: 'ロシア語',
  [Language.Danish]: 'デンマーク語',
  [Language.Bulgarian]: 'ブルガリア語',
  [Language.Malay]: 'マレー語',
  [Language.Slovak]: 'スロバキア語',
  [Language.Croatian]: 'クロアチア語',
  [Language.Arabic]: 'アラビア語',
  [Language.Tamil]: 'タミル語',
  [Language.Hindi]: 'ヒンディー語'
}

const ChineseLanguageNames: Record<Language, string> = {
  [Language.English]: '英语',
  [Language.Spanish]: '西班牙语',
  [Language.Portuguese]: '葡萄牙语',
  [Language.French]: '法语',
  [Language.German]: '德语',
  [Language.Polish]: '波兰语',
  [Language.Italian]: '意大利语',
  [Language.Japanese]: '日语',
  [Language.Chinese]: '中文',
  [Language.Korean]: '韩语',
  [Language.Dutch]: '荷兰语',
  [Language.Turkish]: '土耳其语',
  [Language.Swedish]: '瑞典语',
  [Language.Indonesian]: '印尼语',
  [Language.Filipino]: '菲律宾语',
  [Language.Ukrainian]: '乌克兰语',
  [Language.Greek]: '希腊语',
  [Language.Czech]: '捷克语',
  [Language.Finnish]: '芬兰语',
  [Language.Romanian]: '罗马尼亚语',
  [Language.Russian]: '俄语',
  [Language.Danish]: '丹麦语',
  [Language.Bulgarian]: '保加利亚语',
  [Language.Malay]: '马来语',
  [Language.Slovak]: '斯洛伐克语',
  [Language.Croatian]: '克罗地亚语',
  [Language.Arabic]: '阿拉伯语',
  [Language.Tamil]: '泰米尔语',
  [Language.Hindi]: '印地语'
}

const KoreanLanguageNames: Record<Language, string> = {
  [Language.English]: '영어',
  [Language.Spanish]: '스페인어',
  [Language.Portuguese]: '포르투갈어',
  [Language.French]: '프랑스어',
  [Language.German]: '독일어',
  [Language.Polish]: '폴란드어',
  [Language.Italian]: '이탈리아어',
  [Language.Japanese]: '일본어',
  [Language.Chinese]: '중국어',
  [Language.Korean]: '한국어',
  [Language.Dutch]: '네덜란드어',
  [Language.Turkish]: '터키어',
  [Language.Swedish]: '스웨덴어',
  [Language.Indonesian]: '인도네시아어',
  [Language.Filipino]: '필리핀어',
  [Language.Ukrainian]: '우크라이나어',
  [Language.Greek]: '그리스어',
  [Language.Czech]: '체코어',
  [Language.Finnish]: '핀란드어',
  [Language.Romanian]: '루마니아어',
  [Language.Russian]: '러시아어',
  [Language.Danish]: '덴마크어',
  [Language.Bulgarian]: '불가리아어',
  [Language.Malay]: '말레이어',
  [Language.Slovak]: '슬로바키아어',
  [Language.Croatian]: '크로아티아어',
  [Language.Arabic]: '아랍어',
  [Language.Tamil]: '타밀어',
  [Language.Hindi]: '힌디어'
}

const DutchLanguageNames: Record<Language, string> = {
  [Language.English]: 'Engels',
  [Language.Spanish]: 'Spaans',
  [Language.Portuguese]: 'Portugees',
  [Language.French]: 'Frans',
  [Language.German]: 'Duits',
  [Language.Polish]: 'Pools',
  [Language.Italian]: 'Italiaans',
  [Language.Japanese]: 'Japans',
  [Language.Chinese]: 'Chinees',
  [Language.Korean]: 'Koreaans',
  [Language.Dutch]: 'Nederlands',
  [Language.Turkish]: 'Turks',
  [Language.Swedish]: 'Zweeds',
  [Language.Indonesian]: 'Indonesisch',
  [Language.Filipino]: 'Filipijns',
  [Language.Ukrainian]: 'Oekraïens',
  [Language.Greek]: 'Grieks',
  [Language.Czech]: 'Tsjechisch',
  [Language.Finnish]: 'Fins',
  [Language.Romanian]: 'Roemeens',
  [Language.Russian]: 'Russisch',
  [Language.Danish]: 'Deens',
  [Language.Bulgarian]: 'Bulgaars',
  [Language.Malay]: 'Maleis',
  [Language.Slovak]: 'Slowaaks',
  [Language.Croatian]: 'Kroatisch',
  [Language.Arabic]: 'Arabisch',
  [Language.Tamil]: 'Tamil',
  [Language.Hindi]: 'Hindi'
}

const TurkishLanguageNames: Record<Language, string> = {
  [Language.English]: 'İngilizce',
  [Language.Spanish]: 'İspanyolca',
  [Language.Portuguese]: 'Portekizce',
  [Language.French]: 'Fransızca',
  [Language.German]: 'Almanca',
  [Language.Polish]: 'Lehçe',
  [Language.Italian]: 'İtalyanca',
  [Language.Japanese]: 'Japonca',
  [Language.Chinese]: 'Çince',
  [Language.Korean]: 'Korece',
  [Language.Dutch]: 'Felemenkçe',
  [Language.Turkish]: 'Türkçe',
  [Language.Swedish]: 'İsveççe',
  [Language.Indonesian]: 'Endonezyaca',
  [Language.Filipino]: 'Filipince',
  [Language.Ukrainian]: 'Ukraynaca',
  [Language.Greek]: 'Yunanca',
  [Language.Czech]: 'Çekçe',
  [Language.Finnish]: 'Fince',
  [Language.Romanian]: 'Romence',
  [Language.Russian]: 'Rusça',
  [Language.Danish]: 'Danca',
  [Language.Bulgarian]: 'Bulgarca',
  [Language.Malay]: 'Malayca',
  [Language.Slovak]: 'Slovakça',
  [Language.Croatian]: 'Hırvatça',
  [Language.Arabic]: 'Arapça',
  [Language.Tamil]: 'Tamilce',
  [Language.Hindi]: 'Hintçe'
}

const SwedishLanguageNames: Record<Language, string> = {
  [Language.English]: 'Engelska',
  [Language.Spanish]: 'Spanska',
  [Language.Portuguese]: 'Portugisiska',
  [Language.French]: 'Franska',
  [Language.German]: 'Tyska',
  [Language.Polish]: 'Polska',
  [Language.Italian]: 'Italienska',
  [Language.Japanese]: 'Japanska',
  [Language.Chinese]: 'Kinesiska',
  [Language.Korean]: 'Koreanska',
  [Language.Dutch]: 'Holländska',
  [Language.Turkish]: 'Turkiska',
  [Language.Swedish]: 'Svenska',
  [Language.Indonesian]: 'Indonesiska',
  [Language.Filipino]: 'Filipino',
  [Language.Ukrainian]: 'Ukrainska',
  [Language.Greek]: 'Grekiska',
  [Language.Czech]: 'Tjeckiska',
  [Language.Finnish]: 'Finska',
  [Language.Romanian]: 'Rumänska',
  [Language.Russian]: 'Ryska',
  [Language.Danish]: 'Danska',
  [Language.Bulgarian]: 'Bulgariska',
  [Language.Malay]: 'Malaysiska',
  [Language.Slovak]: 'Slovakiska',
  [Language.Croatian]: 'Kroatiska',
  [Language.Arabic]: 'Arabiska',
  [Language.Tamil]: 'Tamil',
  [Language.Hindi]: 'Hindi'
}

const IndonesianLanguageNames: Record<Language, string> = {
  [Language.English]: 'Inggris',
  [Language.Spanish]: 'Spanyol',
  [Language.Portuguese]: 'Portugis',
  [Language.French]: 'Perancis',
  [Language.German]: 'Jerman',
  [Language.Polish]: 'Polandia',
  [Language.Italian]: 'Italia',
  [Language.Japanese]: 'Jepang',
  [Language.Chinese]: 'Cina',
  [Language.Korean]: 'Korea',
  [Language.Dutch]: 'Belanda',
  [Language.Turkish]: 'Turki',
  [Language.Swedish]: 'Swedia',
  [Language.Indonesian]: 'Indonesia',
  [Language.Filipino]: 'Filipina',
  [Language.Ukrainian]: 'Ukraina',
  [Language.Greek]: 'Yunani',
  [Language.Czech]: 'Ceko',
  [Language.Finnish]: 'Finlandia',
  [Language.Romanian]: 'Rumania',
  [Language.Russian]: 'Rusia',
  [Language.Danish]: 'Denmark',
  [Language.Bulgarian]: 'Bulgaria',
  [Language.Malay]: 'Malay',
  [Language.Slovak]: 'Slovakia',
  [Language.Croatian]: 'Kroasia',
  [Language.Arabic]: 'Arab',
  [Language.Tamil]: 'Tamil',
  [Language.Hindi]: 'Hindi'
}

const FilipinoLanguageNames: Record<Language, string> = {
  [Language.English]: 'Ingles',
  [Language.Spanish]: 'Espanyol',
  [Language.Portuguese]: 'Portuges',
  [Language.French]: 'Pranses',
  [Language.German]: 'Aleman',
  [Language.Polish]: 'Polish',
  [Language.Italian]: 'Italyano',
  [Language.Japanese]: 'Hapones',
  [Language.Chinese]: 'Intsik',
  [Language.Korean]: 'Koreano',
  [Language.Dutch]: 'Olandes',
  [Language.Turkish]: 'Turko',
  [Language.Swedish]: 'Swedish',
  [Language.Indonesian]: 'Indones',
  [Language.Filipino]: 'Filipino',
  [Language.Ukrainian]: 'Ukranyan',
  [Language.Greek]: 'Griyego',
  [Language.Czech]: 'Czech',
  [Language.Finnish]: 'Finnish',
  [Language.Romanian]: 'Rumano',
  [Language.Russian]: 'Ruso',
  [Language.Danish]: 'Danish',
  [Language.Bulgarian]: 'Bulgarian',
  [Language.Malay]: 'Malay',
  [Language.Slovak]: 'Slovak',
  [Language.Croatian]: 'Croatian',
  [Language.Arabic]: 'Arabo',
  [Language.Tamil]: 'Tamil',
  [Language.Hindi]: 'Hindi'
}

const UkrainianLanguageNames: Record<Language, string> = {
  [Language.English]: 'Англійська',
  [Language.Spanish]: 'Іспанська',
  [Language.Portuguese]: 'Португальська',
  [Language.French]: 'Французька',
  [Language.German]: 'Німецька',
  [Language.Polish]: 'Польська',
  [Language.Italian]: 'Італійська',
  [Language.Japanese]: 'Японська',
  [Language.Chinese]: 'Китайська',
  [Language.Korean]: 'Корейська',
  [Language.Dutch]: 'Голландська',
  [Language.Turkish]: 'Турецька',
  [Language.Swedish]: 'Шведська',
  [Language.Indonesian]: 'Індонезійська',
  [Language.Filipino]: 'Філіппінська',
  [Language.Ukrainian]: 'Українська',
  [Language.Greek]: 'Грецька',
  [Language.Czech]: 'Чеська',
  [Language.Finnish]: 'Фінська',
  [Language.Romanian]: 'Румунська',
  [Language.Russian]: 'Російська',
  [Language.Danish]: 'Данська',
  [Language.Bulgarian]: 'Болгарська',
  [Language.Malay]: 'Малайська',
  [Language.Slovak]: 'Словацька',
  [Language.Croatian]: 'Хорватська',
  [Language.Arabic]: 'Арабська',
  [Language.Tamil]: 'Тамільська',
  [Language.Hindi]: 'Гінді'
}

const GreekLanguageNames: Record<Language, string> = {
  [Language.English]: 'Αγγλικά',
  [Language.Spanish]: 'Ισπανικά',
  [Language.Portuguese]: 'Πορτογαλικά',
  [Language.French]: 'Γαλλικά',
  [Language.German]: 'Γερμανικά',
  [Language.Polish]: 'Πολωνικά',
  [Language.Italian]: 'Ιταλικά',
  [Language.Japanese]: 'Ιαπωνικά',
  [Language.Chinese]: 'Κινεζικά',
  [Language.Korean]: 'Κορεατικά',
  [Language.Dutch]: 'Ολλανδικά',
  [Language.Turkish]: 'Τουρκικά',
  [Language.Swedish]: 'Σουηδικά',
  [Language.Indonesian]: 'Ινδονησιακά',
  [Language.Filipino]: 'Φιλιππινέζικα',
  [Language.Ukrainian]: 'Ουκρανικά',
  [Language.Greek]: 'Ελληνικά',
  [Language.Czech]: 'Τσεχικά',
  [Language.Finnish]: 'Φινλανδικά',
  [Language.Romanian]: 'Ρουμανικά',
  [Language.Russian]: 'Ρωσικά',
  [Language.Danish]: 'Δανικά',
  [Language.Bulgarian]: 'Βουλγαρικά',
  [Language.Malay]: 'Μαλαϊκά',
  [Language.Slovak]: 'Σλοβακικά',
  [Language.Croatian]: 'Κροατικά',
  [Language.Arabic]: 'Αραβικά',
  [Language.Tamil]: 'Ταμίλ',
  [Language.Hindi]: 'Χίντι'
}

const CzechLanguageNames: Record<Language, string> = {
  [Language.English]: 'Angličtina',
  [Language.Spanish]: 'Španělština',
  [Language.Portuguese]: 'Portugalština',
  [Language.French]: 'Francouzština',
  [Language.German]: 'Němčina',
  [Language.Polish]: 'Polština',
  [Language.Italian]: 'Italština',
  [Language.Japanese]: 'Japonština',
  [Language.Chinese]: 'Čínština',
  [Language.Korean]: 'Korejština',
  [Language.Dutch]: 'Holandština',
  [Language.Turkish]: 'Turečtina',
  [Language.Swedish]: 'Švédština',
  [Language.Indonesian]: 'Indonéština',
  [Language.Filipino]: 'Filipínština',
  [Language.Ukrainian]: 'Ukrajinština',
  [Language.Greek]: 'Řečtina',
  [Language.Czech]: 'Čeština',
  [Language.Finnish]: 'Finština',
  [Language.Romanian]: 'Rumunština',
  [Language.Russian]: 'Ruština',
  [Language.Danish]: 'Dánština',
  [Language.Bulgarian]: 'Bulharština',
  [Language.Malay]: 'Malajština',
  [Language.Slovak]: 'Slovenština',
  [Language.Croatian]: 'Chorvatština',
  [Language.Arabic]: 'Arabština',
  [Language.Tamil]: 'Tamilština',
  [Language.Hindi]: 'Hindština'
}

const FinnishLanguageNames: Record<Language, string> = {
  [Language.English]: 'Englanti',
  [Language.Spanish]: 'Espanja',
  [Language.Portuguese]: 'Portugali',
  [Language.French]: 'Ranska',
  [Language.German]: 'Saksa',
  [Language.Polish]: 'Puola',
  [Language.Italian]: 'Italia',
  [Language.Japanese]: 'Japani',
  [Language.Chinese]: 'Kiina',
  [Language.Korean]: 'Korea',
  [Language.Dutch]: 'Hollanti',
  [Language.Turkish]: 'Turkki',
  [Language.Swedish]: 'Ruotsi',
  [Language.Indonesian]: 'Indonesia',
  [Language.Filipino]: 'Filippiinit',
  [Language.Ukrainian]: 'Ukraina',
  [Language.Greek]: 'Kreikka',
  [Language.Czech]: 'Tšekki',
  [Language.Finnish]: 'Suomi',
  [Language.Romanian]: 'Romania',
  [Language.Russian]: 'Venäjä',
  [Language.Danish]: 'Tanska',
  [Language.Bulgarian]: 'Bulgaria',
  [Language.Malay]: 'Malesia',
  [Language.Slovak]: 'Slovakia',
  [Language.Croatian]: 'Kroatia',
  [Language.Arabic]: 'Arabia',
  [Language.Tamil]: 'Tamil',
  [Language.Hindi]: 'Hindi'
}

const RomanianLanguageNames: Record<Language, string> = {
  [Language.English]: 'Engleză',
  [Language.Spanish]: 'Spaniolă',
  [Language.Portuguese]: 'Portugheză',
  [Language.French]: 'Franceză',
  [Language.German]: 'Germană',
  [Language.Polish]: 'Poloneză',
  [Language.Italian]: 'Italiană',
  [Language.Japanese]: 'Japoneză',
  [Language.Chinese]: 'Chineză',
  [Language.Korean]: 'Coreeană',
  [Language.Dutch]: 'Olandeză',
  [Language.Turkish]: 'Turcă',
  [Language.Swedish]: 'Suedeză',
  [Language.Indonesian]: 'Indoneziană',
  [Language.Filipino]: 'Filipineză',
  [Language.Ukrainian]: 'Ucraineană',
  [Language.Greek]: 'Greacă',
  [Language.Czech]: 'Cehă',
  [Language.Finnish]: 'Finlandeză',
  [Language.Romanian]: 'Română',
  [Language.Russian]: 'Rusă',
  [Language.Danish]: 'Daneză',
  [Language.Bulgarian]: 'Bulgară',
  [Language.Malay]: 'Malaeză',
  [Language.Slovak]: 'Slovacă',
  [Language.Croatian]: 'Croată',
  [Language.Arabic]: 'Arabă',
  [Language.Tamil]: 'Tamil',
  [Language.Hindi]: 'Hindi'
}

const RussianLanguageNames: Record<Language, string> = {
  [Language.English]: 'Английский',
  [Language.Spanish]: 'Испанский',
  [Language.Portuguese]: 'Португальский',
  [Language.French]: 'Французский',
  [Language.German]: 'Немецкий',
  [Language.Polish]: 'Польский',
  [Language.Italian]: 'Итальянский',
  [Language.Japanese]: 'Японский',
  [Language.Chinese]: 'Китайский',
  [Language.Korean]: 'Корейский',
  [Language.Dutch]: 'Голландский',
  [Language.Turkish]: 'Турецкий',
  [Language.Swedish]: 'Шведский',
  [Language.Indonesian]: 'Индонезийский',
  [Language.Filipino]: 'Филиппинский',
  [Language.Ukrainian]: 'Украинский',
  [Language.Greek]: 'Греческий',
  [Language.Czech]: 'Чешский',
  [Language.Finnish]: 'Финский',
  [Language.Romanian]: 'Румынский',
  [Language.Russian]: 'Русский',
  [Language.Danish]: 'Датский',
  [Language.Bulgarian]: 'Болгарский',
  [Language.Malay]: 'Малайский',
  [Language.Slovak]: 'Словацкий',
  [Language.Croatian]: 'Хорватский',
  [Language.Arabic]: 'Арабский',
  [Language.Tamil]: 'Тамильский',
  [Language.Hindi]: 'Хинди'
}

const DanishLanguageNames: Record<Language, string> = {
  [Language.English]: 'Engelsk',
  [Language.Spanish]: 'Spansk',
  [Language.Portuguese]: 'Portugisisk',
  [Language.French]: 'Fransk',
  [Language.German]: 'Tysk',
  [Language.Polish]: 'Polsk',
  [Language.Italian]: 'Italiensk',
  [Language.Japanese]: 'Japansk',
  [Language.Chinese]: 'Kinesisk',
  [Language.Korean]: 'Koreansk',
  [Language.Dutch]: 'Hollandsk',
  [Language.Turkish]: 'Tyrkisk',
  [Language.Swedish]: 'Svensk',
  [Language.Indonesian]: 'Indonesisk',
  [Language.Filipino]: 'Filippinsk',
  [Language.Ukrainian]: 'Ukrainsk',
  [Language.Greek]: 'Græsk',
  [Language.Czech]: 'Tjekkisk',
  [Language.Finnish]: 'Finsk',
  [Language.Romanian]: 'Rumænsk',
  [Language.Russian]: 'Russisk',
  [Language.Danish]: 'Dansk',
  [Language.Bulgarian]: 'Bulgarsk',
  [Language.Malay]: 'Malaysisk',
  [Language.Slovak]: 'Slovakisk',
  [Language.Croatian]: 'Kroatisk',
  [Language.Arabic]: 'Arabisk',
  [Language.Tamil]: 'Tamil',
  [Language.Hindi]: 'Hindi'
}

const BulgarianLanguageNames: Record<Language, string> = {
  [Language.English]: 'Английски',
  [Language.Spanish]: 'Испански',
  [Language.Portuguese]: 'Португалски',
  [Language.French]: 'Френски',
  [Language.German]: 'Немски',
  [Language.Polish]: 'Полски',
  [Language.Italian]: 'Италиански',
  [Language.Japanese]: 'Японски',
  [Language.Chinese]: 'Китайски',
  [Language.Korean]: 'Корейски',
  [Language.Dutch]: 'Холандски',
  [Language.Turkish]: 'Турски',
  [Language.Swedish]: 'Шведски',
  [Language.Indonesian]: 'Индонезийски',
  [Language.Filipino]: 'Филипински',
  [Language.Ukrainian]: 'Украински',
  [Language.Greek]: 'Гръцки',
  [Language.Czech]: 'Чешки',
  [Language.Finnish]: 'Фински',
  [Language.Romanian]: 'Румънски',
  [Language.Russian]: 'Руски',
  [Language.Danish]: 'Датски',
  [Language.Bulgarian]: 'Български',
  [Language.Malay]: 'Малайски',
  [Language.Slovak]: 'Словашки',
  [Language.Croatian]: 'Хърватски',
  [Language.Arabic]: 'Арабски',
  [Language.Tamil]: 'Тамилски',
  [Language.Hindi]: 'Хинди'
}

const MalayLanguageNames: Record<Language, string> = {
  [Language.English]: 'Inggeris',
  [Language.Spanish]: 'Sepanyol',
  [Language.Portuguese]: 'Portugis',
  [Language.French]: 'Perancis',
  [Language.German]: 'Jerman',
  [Language.Polish]: 'Poland',
  [Language.Italian]: 'Itali',
  [Language.Japanese]: 'Jepun',
  [Language.Chinese]: 'Cina',
  [Language.Korean]: 'Korea',
  [Language.Dutch]: 'Belanda',
  [Language.Turkish]: 'Turki',
  [Language.Swedish]: 'Sweden',
  [Language.Indonesian]: 'Indonesia',
  [Language.Filipino]: 'Filipina',
  [Language.Ukrainian]: 'Ukraine',
  [Language.Greek]: 'Greek',
  [Language.Czech]: 'Czech',
  [Language.Finnish]: 'Finland',
  [Language.Romanian]: 'Romania',
  [Language.Russian]: 'Rusia',
  [Language.Danish]: 'Denmark',
  [Language.Bulgarian]: 'Bulgaria',
  [Language.Malay]: 'Melayu',
  [Language.Slovak]: 'Slovak',
  [Language.Croatian]: 'Croatia',
  [Language.Arabic]: 'Arab',
  [Language.Tamil]: 'Tamil',
  [Language.Hindi]: 'Hindi'
}

const SlovakLanguageNames: Record<Language, string> = {
  [Language.English]: 'Angličtina',
  [Language.Spanish]: 'Španielčina',
  [Language.Portuguese]: 'Portugalčina',
  [Language.French]: 'Francúzština',
  [Language.German]: 'Nemčina',
  [Language.Polish]: 'Poľština',
  [Language.Italian]: 'Taliančina',
  [Language.Japanese]: 'Japončina',
  [Language.Chinese]: 'Čínština',
  [Language.Korean]: 'Kórejčina',
  [Language.Dutch]: 'Holandčina',
  [Language.Turkish]: 'Turečtina',
  [Language.Swedish]: 'Švédčina',
  [Language.Indonesian]: 'Indonézština',
  [Language.Filipino]: 'Filipínčina',
  [Language.Ukrainian]: 'Ukrajinčina',
  [Language.Greek]: 'Gréčtina',
  [Language.Czech]: 'Čeština',
  [Language.Finnish]: 'Fínčina',
  [Language.Romanian]: 'Rumunčina',
  [Language.Russian]: 'Ruština',
  [Language.Danish]: 'Dánčina',
  [Language.Bulgarian]: 'Bulharčina',
  [Language.Malay]: 'Malajčina',
  [Language.Slovak]: 'Slovenčina',
  [Language.Croatian]: 'Chorvátčina',
  [Language.Arabic]: 'Arabčina',
  [Language.Tamil]: 'Tamilčina',
  [Language.Hindi]: 'Hindčina'
}

const CroatianLanguageNames: Record<Language, string> = {
  [Language.English]: 'Engleski',
  [Language.Spanish]: 'Španjolski',
  [Language.Portuguese]: 'Portugalski',
  [Language.French]: 'Francuski',
  [Language.German]: 'Njemački',
  [Language.Polish]: 'Poljski',
  [Language.Italian]: 'Talijanski',
  [Language.Japanese]: 'Japanski',
  [Language.Chinese]: 'Kineski',
  [Language.Korean]: 'Korejski',
  [Language.Dutch]: 'Nizozemski',
  [Language.Turkish]: 'Turski',
  [Language.Swedish]: 'Švedski',
  [Language.Indonesian]: 'Indonezijski',
  [Language.Filipino]: 'Filipinski',
  [Language.Ukrainian]: 'Ukrajinski',
  [Language.Greek]: 'Grčki',
  [Language.Czech]: 'Češki',
  [Language.Finnish]: 'Finski',
  [Language.Romanian]: 'Rumunjski',
  [Language.Russian]: 'Ruski',
  [Language.Danish]: 'Danski',
  [Language.Bulgarian]: 'Bugarski',
  [Language.Malay]: 'Malajski',
  [Language.Slovak]: 'Slovački',
  [Language.Croatian]: 'Hrvatski',
  [Language.Arabic]: 'Arapski',
  [Language.Tamil]: 'Tamil',
  [Language.Hindi]: 'Hindi'
}

const ArabicLanguageNames: Record<Language, string> = {
  [Language.English]: 'الإنجليزية',
  [Language.Spanish]: 'الأسبانية',
  [Language.Portuguese]: 'البرتغالية',
  [Language.French]: 'الفرنسية',
  [Language.German]: 'الألمانية',
  [Language.Polish]: 'البولندية',
  [Language.Italian]: 'الإيطالية',
  [Language.Japanese]: 'اليابانية',
  [Language.Chinese]: 'الصينية',
  [Language.Korean]: 'الكورية',
  [Language.Dutch]: 'الهولندية',
  [Language.Turkish]: 'التركية',
  [Language.Swedish]: 'السويدية',
  [Language.Indonesian]: 'الإندونيسية',
  [Language.Filipino]: 'الفلبينية',
  [Language.Ukrainian]: 'الأوكرانية',
  [Language.Greek]: 'اليونانية',
  [Language.Czech]: 'التشيكية',
  [Language.Finnish]: 'الفنلندية',
  [Language.Romanian]: 'الرومانية',
  [Language.Russian]: 'الروسية',
  [Language.Danish]: 'الدانماركية',
  [Language.Bulgarian]: 'البلغارية',
  [Language.Malay]: 'الماليزية',
  [Language.Slovak]: 'السلوفاكية',
  [Language.Croatian]: 'الكرواتية',
  [Language.Arabic]: 'العربية',
  [Language.Tamil]: 'التاميلية',
  [Language.Hindi]: 'الهندية'
}

const TamilLanguageNames: Record<Language, string> = {
  [Language.English]: 'ஆங்கிலம்',
  [Language.Spanish]: 'ஸ்பானிஷ்',
  [Language.Portuguese]: 'போர்த்துகீசு',
  [Language.French]: 'பிரெஞ்சு',
  [Language.German]: 'ஜெர்மன்',
  [Language.Polish]: 'போலிஷ்',
  [Language.Italian]: 'இத்தாலியன்',
  [Language.Japanese]: 'ஜப்பானியம்',
  [Language.Chinese]: 'சீனம்',
  [Language.Korean]: 'கொரியன்',
  [Language.Dutch]: 'டச்சு',
  [Language.Turkish]: 'துருக்கி',
  [Language.Swedish]: 'ஸ்வீடிஷ்',
  [Language.Indonesian]: 'இந்தோனேஷியன்',
  [Language.Filipino]: 'பிலிப்பினோ',
  [Language.Ukrainian]: 'உக்ரேனியன்',
  [Language.Greek]: 'கிரேக்கம்',
  [Language.Czech]: 'செக்',
  [Language.Finnish]: 'பின்னிஷ்',
  [Language.Romanian]: 'ரோமேனியன்',
  [Language.Russian]: 'ரஷியன்',
  [Language.Danish]: 'டேனிஷ்',
  [Language.Bulgarian]: 'பல்கேரியன்',
  [Language.Malay]: 'மலேசியன்',
  [Language.Slovak]: 'ஸ்லோவாக்',
  [Language.Croatian]: 'குரோஷியன்',
  [Language.Arabic]: 'அரபிக்',
  [Language.Tamil]: 'தமிழ்',
  [Language.Hindi]: 'இந்தி'
}

const HindiLanguageNames: Record<Language, string> = {
  [Language.English]: 'अंग्रेज़ी',
  [Language.Spanish]: 'स्पेनिश',
  [Language.Portuguese]: 'पुर्तगाली',
  [Language.French]: 'फ्रांसीसी',
  [Language.German]: 'जर्मन',
  [Language.Polish]: 'पोलिश',
  [Language.Italian]: 'इटैलियन',
  [Language.Japanese]: 'जापानी',
  [Language.Chinese]: 'चीनी',
  [Language.Korean]: 'कोरियाई',
  [Language.Dutch]: 'डच',
  [Language.Turkish]: 'तुर्की',
  [Language.Swedish]: 'स्वीडिश',
  [Language.Indonesian]: 'इंडोनेशियाई',
  [Language.Filipino]: 'फिलिपिनो',
  [Language.Ukrainian]: 'यूक्रेनियाई',
  [Language.Greek]: 'यूनानी',
  [Language.Czech]: 'चेक',
  [Language.Finnish]: 'फिनिश',
  [Language.Romanian]: 'रोमानियाई',
  [Language.Russian]: 'रूसी',
  [Language.Danish]: 'डेनिश',
  [Language.Bulgarian]: 'बल्गेरियाई',
  [Language.Malay]: 'मलय',
  [Language.Slovak]: 'स्लोवाक',
  [Language.Croatian]: 'क्रोएशियाई',
  [Language.Arabic]: 'अरबी',
  [Language.Tamil]: 'तामिल',
  [Language.Hindi]: 'हिंदी'
}
