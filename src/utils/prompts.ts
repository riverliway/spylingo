import { Language, getLanguageName } from './languages'

export const selectNativeLanguagePrompt = (lang: Language): string => {
  switch (lang) {
    case Language.English: return 'Select your native language'
    case Language.Spanish: return 'Selecciona tu idioma nativo'
    case Language.Portuguese: return 'Selecione seu idioma nativo'
    case Language.French: return 'Sélectionnez votre langue maternelle'
    case Language.German: return 'Wählen Sie Ihre Muttersprache'
    case Language.Polish: return 'Wybierz swój język ojczysty'
    case Language.Italian: return 'Seleziona la tua lingua madre'
    case Language.Japanese: return '母国語を選択'
    case Language.Chinese: return '选择您的母语'
    case Language.Korean: return '모국어를 선택'
    case Language.Dutch: return 'Selecteer uw moedertaal'
    case Language.Turkish: return 'Anadilinizi seçin'
    case Language.Swedish: return 'Välj ditt modersmål'
    case Language.Indonesian: return 'Pilih bahasa ibu Anda'
    case Language.Filipino: return 'Pumili ng iyong katutubong wika'
    case Language.Ukrainian: return 'Виберіть свою рідну мову'
    case Language.Greek: return 'Επιλέξτε τη μητρική σας γλώσσα'
    case Language.Czech: return 'Vyberte svůj mateřský jazyk'
    case Language.Finnish: return 'Valitse äidinkielesi'
    case Language.Romanian: return 'Selectați limba maternă'
    case Language.Russian: return 'Выберите свой родной язык'
    case Language.Danish: return 'Vælg dit modersmål'
    case Language.Bulgarian: return 'Изберете родния си език'
    case Language.Malay: return 'Pilih bahasa ibunda Anda'
    case Language.Slovak: return 'Vyberte svoj materinský jazyk'
    case Language.Croatian: return 'Odaberite svoj materinski jezik'
    case Language.Arabic: return 'اختر لغتك الأم'
    case Language.Tamil: return 'உங்கள் தாய்மொழியைத் தேர்ந்தெடுக்கவும்'
    case Language.Hindi: return 'अपनी मातृभाषा का चयन करें'
  }
}

export const selectForeignLanguagePrompt = (lang: Language): string => {
  switch (lang) {
    case Language.English: return 'Select the foreign language to practice'
    case Language.Spanish: return 'Selecciona el idioma extranjero para practicar'
    case Language.Portuguese: return 'Selecione o idioma estrangeiro para praticar'
    case Language.French: return 'Sélectionnez la langue étrangère à pratiquer'
    case Language.German: return 'Wählen Sie die Fremdsprache zum Üben'
    case Language.Polish: return 'Wybierz język obcy do praktyki'
    case Language.Italian: return 'Seleziona la lingua straniera da praticare'
    case Language.Japanese: return '練習する外国語を選択'
    case Language.Chinese: return '选择要练习的外语'
    case Language.Korean: return '연습할 외국어 선택'
    case Language.Dutch: return 'Selecteer de vreemde taal om te oefenen'
    case Language.Turkish: return 'Egzersiz yapmak için yabancı dili seçin'
    case Language.Swedish: return 'Välj det främmande språket att öva'
    case Language.Indonesian: return 'Pilih bahasa asing untuk berlatih'
    case Language.Filipino: return 'Pumili ng dayuhang wika na pag-aralan'
    case Language.Ukrainian: return 'Виберіть іноземну мову для вправ'
    case Language.Greek: return 'Επιλέξτε την ξένη γλώσσα για πρακτική'
    case Language.Czech: return 'Vyberte cizí jazyk k cvičení'
    case Language.Finnish: return 'Valitse vieras kieli harjoitella'
    case Language.Romanian: return 'Selectați limba străină pentru a practica'
    case Language.Russian: return 'Выберите иностранный язык для практики'
    case Language.Danish: return 'Vælg det fremmede sprog at øve'
    case Language.Bulgarian: return 'Изберете чужд език за практика'
    case Language.Malay: return 'Pilih bahasa asing untuk berlatih'
    case Language.Slovak: return 'Vyberte cudzí jazyk na cvičenie'
    case Language.Croatian: return 'Odaberite strani jezik za vježbanje'
    case Language.Arabic: return 'اختر اللغة الأجنبية للممارسة'
    case Language.Tamil: return 'பயிற்சிக்க வெளியேறும் வெற்றியைத் தேர்ந்தெடுக்கவும்'
    case Language.Hindi: return 'अभ्यास के लिए विदेशी भाषा का चयन करें'
  }
}

export const selectForeignLanguageSubPrompt = (lang: Language): string => {
  switch (lang) {
    case Language.English: return 'Get familiar with conversing in this language!'
    case Language.Spanish: return '¡Familiarízate con la conversación en este idioma!'
    case Language.Portuguese: return 'Familiarize-se com a conversa neste idioma!'
    case Language.French: return 'Familiarisez-vous avec la conversation dans cette langue!'
    case Language.German: return 'Gewöhnen Sie sich an das Gespräch in dieser Sprache!'
    case Language.Polish: return 'Zapoznaj się z rozmową w tym języku!'
    case Language.Italian: return 'Abituati a conversare in questa lingua!'
    case Language.Japanese: return 'この言語での会話に慣れる！'
    case Language.Chinese: return '熟悉这种语言的交谈！'
    case Language.Korean: return '이 언어로 대화에 익숙해지세요!'
    case Language.Dutch: return 'Maak kennis met converseren in deze taal!'
    case Language.Turkish: return 'Bu dilde konuşmaya alışın!'
    case Language.Swedish: return 'Bli bekant med att samtala på detta språk!'
    case Language.Indonesian: return 'Kenali percakapan dalam bahasa ini!'
    case Language.Filipino: return 'Maging pamilyar sa pakikipag-usap sa wika na ito!'
    case Language.Ukrainian: return 'Познайомтеся з розмовою на цій мові!'
    case Language.Greek: return 'Εξοικειωθείτε με τη συνομιλία σε αυτή τη γλώσσα!'
    case Language.Czech: return 'Seznamte se s konverzací v tomto jazyce!'
    case Language.Finnish: return 'Tutustu keskusteluun tässä kielessä!'
    case Language.Romanian: return 'Familiarizați-vă cu conversația în această limbă!'
    case Language.Russian: return 'Познакомьтесь с разговором на этом языке!'
    case Language.Danish: return 'Bliv fortrolig med at samtale på dette sprog!'
    case Language.Bulgarian: return 'Запознайте се с разговора на този език!'
    case Language.Malay: return 'Kenali perbualan dalam bahasa ini!'
    case Language.Slovak: return 'Zoznámte sa s konverzáciou v tomto jazyku!'
    case Language.Croatian: return 'Upoznajte se s razgovorom na ovom jeziku!'
    case Language.Arabic: return 'تعرف على الحديث بهذه اللغة!'
    case Language.Tamil: return 'இந்த மொழியில் உரையாடலை அறியுங்கள்!'
    case Language.Hindi: return 'इस भाषा में बातचीत के साथ परिचित हों!'
  }
}

export const typeMessagePrompt = (lang: Language): string => {
  switch (lang) {
    case Language.English: return 'Type a message...'
    case Language.Spanish: return 'Escribe un mensaje...'
    case Language.Portuguese: return 'Digite uma mensagem...'
    case Language.French: return 'Tapez un message...'
    case Language.German: return 'Geben Sie eine Nachricht ein...'
    case Language.Polish: return 'Wpisz wiadomość...'
    case Language.Italian: return 'Digita un messaggio...'
    case Language.Japanese: return 'メッセージを入力...'
    case Language.Chinese: return '输入消息...'
    case Language.Korean: return '메시지 입력...'
    case Language.Dutch: return 'Typ een bericht...'
    case Language.Turkish: return 'Bir mesaj yazın...'
    case Language.Swedish: return 'Skriv ett meddelande...'
    case Language.Indonesian: return 'Ketik pesan...'
    case Language.Filipino: return 'Magtype ng mensahe...'
    case Language.Ukrainian: return 'Введіть повідомлення...'
    case Language.Greek: return 'Πληκτρολογήστε ένα μήνυμα...'
    case Language.Czech: return 'Zadejte zprávu...'
    case Language.Finnish: return 'Kirjoita viesti...'
    case Language.Romanian: return 'Tastați un mesaj...'
    case Language.Russian: return 'Введите сообщение...'
    case Language.Danish: return 'Skriv en besked...'
    case Language.Bulgarian: return 'Въведете съобщение...'
    case Language.Malay: return 'Taipkan mesej...'
    case Language.Slovak: return 'Napíšte správu...'
    case Language.Croatian: return 'Unesite poruku...'
    case Language.Arabic: return 'اكتب رسالة...'
    case Language.Tamil: return 'ஒரு செய்தி தட்டச்சு...'
    case Language.Hindi: return 'एक संदेश टाइप करें...'
  }
}

export const chooseMissionPrompt = (lang: Language): string => {
  switch (lang) {
    case Language.English: return 'We have three missions for you to choose from. Which one would you like to start with?'
    case Language.Spanish: return 'Tenemos tres misiones para que elijas. ¿Con cuál te gustaría comenzar?'
    case Language.Portuguese: return 'Temos três missões para você escolher. Com qual você gostaria de começar?'
    case Language.French: return 'Nous avons trois missions parmi lesquelles vous pouvez choisir. Avec laquelle aimeriez-vous commencer?'
    case Language.German: return 'Wir haben drei Missionen, aus denen Sie wählen können. Mit welcher möchten Sie beginnen?'
    case Language.Polish: return 'Mamy trzy misje, z których możesz wybierać. Z którą chciałbyś zacząć?'
    case Language.Italian: return 'Abbiamo tre missioni tra cui puoi scegliere. Con quale ti piacerebbe iniziare?'
    case Language.Japanese: return '選択肢のミッションが3つあります。どれから始めますか？'
    case Language.Chinese: return '我们有三个任务供您选择。您想从哪一个开始？'
    case Language.Korean: return '선택할 수있는 세 가지 미션이 있습니다. 어떤 것부터 시작하고 싶으세요?'
    case Language.Dutch: return 'We hebben drie missies waaruit je kunt kiezen. Met welke zou je willen beginnen?'
    case Language.Turkish: return 'Seçebileceğiniz üç görevimiz var. Hangisiyle başlamak istersiniz?'
    case Language.Swedish: return 'Vi har tre uppdrag att välja mellan. Med vilken skulle du vilja börja?'
    case Language.Indonesian: return 'Kami memiliki tiga misi untuk Anda pilih. Dengan yang mana Anda ingin memulai?'
    case Language.Filipino: return 'May tatlong misyon na maaari mong piliin. Alin ang nais mong simulan?'
    case Language.Ukrainian: return 'У нас є три місії, з яких ви можете вибрати. З якою ви хочете почати?'
    case Language.Greek: return 'Έχουμε τρεις αποστολές για εσάς να επιλέξετε. Με ποιο θα θέλατε να ξεκινήσετε;'
    case Language.Czech: return 'Máme tři mise, ze kterých si můžete vybrat. S kterým byste chtěli začít?'
    case Language.Finnish: return 'Meillä on kolme tehtävää, joista voit valita. Millä haluaisit aloittaa?'
    case Language.Romanian: return 'Avem trei misiuni din care puteți alege. Cu care ați dori să începeți?'
    case Language.Russian: return 'У нас есть три миссии, из которых вы можете выбрать. С какой вы хотели бы начать?'
    case Language.Danish: return 'Vi har tre missioner, som du kan vælge imellem. Med hvilken vil du gerne begynde?'
    case Language.Bulgarian: return 'Имаме три мисии, от които можете да избирате. С коя бихте искали да започнете?'
    case Language.Malay: return 'Kami mempunyai tiga misi untuk anda pilih. Dengan yang mana anda ingin mula?'
    case Language.Slovak: return 'Máme tri misie, z ktorých si môžete vybrať. S ktorým by ste chceli začať?'
    case Language.Croatian: return 'Imamo tri misije koje možete odabrati. S kojom biste željeli započeti?'
    case Language.Arabic: return 'لدينا ثلاث مهام يمكنك اختيارها. ما الذي ترغب في البدء به؟'
    case Language.Tamil: return 'நீங்கள் தேர்ந்தெடுக்க முடியும் மூன்று பிரிவில் ஒன்றை. நீங்கள் எப்போது தொடங்க விரும்புகிறீர்கள்?'
    case Language.Hindi: return 'हमारे पास आपके लिए तीन मिशन हैं जिनमें से आपको चुनना होगा। आप किसके साथ शुरू करना चाहेंगे?'
  }
}

export const selectPrompt = (lang: Language): string => {
  switch (lang) {
    case Language.English: return 'Select'
    case Language.Spanish: return 'Seleccionar'
    case Language.Portuguese: return 'Selecione'
    case Language.French: return 'Sélectionner'
    case Language.German: return 'Wählen'
    case Language.Polish: return 'Wybierz'
    case Language.Italian: return 'Seleziona'
    case Language.Japanese: return '選択'
    case Language.Chinese: return '选择'
    case Language.Korean: return '선택'
    case Language.Dutch: return 'Selecteer'
    case Language.Turkish: return 'Seç'
    case Language.Swedish: return 'Välj'
    case Language.Indonesian: return 'Pilih'
    case Language.Filipino: return 'Pumili'
    case Language.Ukrainian: return 'Вибрати'
    case Language.Greek: return 'Επιλέξτε'
    case Language.Czech: return 'Vybrat'
    case Language.Finnish: return 'Valitse'
    case Language.Romanian: return 'Selectați'
    case Language.Russian: return 'Выбрать'
    case Language.Danish: return 'Vælg'
    case Language.Bulgarian: return 'Изберете'
    case Language.Malay: return 'Pilih'
    case Language.Slovak: return 'Vybrať'
    case Language.Croatian: return 'Odaberite'
    case Language.Arabic: return 'اختر'
    case Language.Tamil: return 'தேர்ந்தெடு'
    case Language.Hindi: return 'चुनें'
  }
}

export const foodAndDrinksPrompt = (lang: Language): string => {
  switch (lang) {
    case Language.English: return 'Food & Drinks'
    case Language.Spanish: return 'Comida y Bebidas'
    case Language.Portuguese: return 'Comida e Bebidas'
    case Language.French: return 'Nourriture et Boissons'
    case Language.German: return 'Essen und Trinken'
    case Language.Polish: return 'Jedzenie i Napoje'
    case Language.Italian: return 'Cibo e Bevande'
    case Language.Japanese: return '食べ物と飲み物'
    case Language.Chinese: return '食品和饮料'
    case Language.Korean: return '음식과 음료'
    case Language.Dutch: return 'Eten en Drinken'
    case Language.Turkish: return 'Yiyecek ve İçecek'
    case Language.Swedish: return 'Mat och Dryck'
    case Language.Indonesian: return 'Makanan & Minuman'
    case Language.Filipino: return 'Pagkain at Inumin'
    case Language.Ukrainian: return 'Їжа та напої'
    case Language.Greek: return 'Φαγητό και ποτά'
    case Language.Czech: return 'Jídlo a Nápoje'
    case Language.Finnish: return 'Ruoka ja Juomat'
    case Language.Romanian: return 'Mâncare și Băuturi'
    case Language.Russian: return 'Еда и напитки'
    case Language.Danish: return 'Mad og Drikke'
    case Language.Bulgarian: return 'Храна и Напитки'
    case Language.Malay: return 'Makanan & Minuman'
    case Language.Slovak: return 'Jedlo a Nápoje'
    case Language.Croatian: return 'Hrana i Piće'
    case Language.Arabic: return 'طعام وشراب'
    case Language.Tamil: return 'உணவு & பானங்கள்'
    case Language.Hindi: return 'खाना और पेय'
  }
}

export const schoolLifePrompt = (lang: Language): string => {
  switch (lang) {
    case Language.English: return 'School Life'
    case Language.Spanish: return 'Vida Escolar'
    case Language.Portuguese: return 'Vida Escolar'
    case Language.French: return 'Vie Scolaire'
    case Language.German: return 'Schulleben'
    case Language.Polish: return 'Życie Szkolne'
    case Language.Italian: return 'Vita Scolastica'
    case Language.Japanese: return '学校生活'
    case Language.Chinese: return '校园生活'
    case Language.Korean: return '학교 생활'
    case Language.Dutch: return 'Schoolleven'
    case Language.Turkish: return 'Okul Hayatı'
    case Language.Swedish: return 'Skol Liv'
    case Language.Indonesian: return 'Kehidupan Sekolah'
    case Language.Filipino: return 'Buhay Eskwela'
    case Language.Ukrainian: return 'Шкільне Життя'
    case Language.Greek: return 'Σχολική Ζωή'
    case Language.Czech: return 'Školní Život'
    case Language.Finnish: return 'Kouluelämä'
    case Language.Romanian: return 'Viața Școlară'
    case Language.Russian: return 'Школьная Жизнь'
    case Language.Danish: return 'Skoleliv'
    case Language.Bulgarian: return 'Училищен Живот'
    case Language.Malay: return 'Hidup Sekolah'
    case Language.Slovak: return 'Školský Život'
    case Language.Croatian: return 'Školski Život'
    case Language.Arabic: return 'حياة المدرسة'
    case Language.Tamil: return 'பள்ளி வாழ்க்கை'
    case Language.Hindi: return 'स्कूल जीवन'
  }
}

export const familyTimePrompt = (lang: Language): string => {
  switch (lang) {
    case Language.English: return 'Family Time'
    case Language.Spanish: return 'Tiempo en Familia'
    case Language.Portuguese: return 'Tempo em Família'
    case Language.French: return 'Temps en Famille'
    case Language.German: return 'Familienzeit'
    case Language.Polish: return 'Czas Rodzinny'
    case Language.Italian: return 'Tempo in Famiglia'
    case Language.Japanese: return '家族の時間'
    case Language.Chinese: return '家庭时间'
    case Language.Korean: return '가족 시간'
    case Language.Dutch: return 'Familietijd'
    case Language.Turkish: return 'Aile Zamanı'
    case Language.Swedish: return 'Familjetid'
    case Language.Indonesian: return 'Waktu Keluarga'
    case Language.Filipino: return 'Oras ng Pamilya'
    case Language.Ukrainian: return 'Час з сім’єю'
    case Language.Greek: return 'Οικογενειακός Χρόνος'
    case Language.Czech: return 'Rodinný Čas'
    case Language.Finnish: return 'Perheaika'
    case Language.Romanian: return 'Timpul în Familie'
    case Language.Russian: return 'Семейное Время'
    case Language.Danish: return 'Familietid'
    case Language.Bulgarian: return 'Семейно Време'
    case Language.Malay: return 'Masa Keluarga'
    case Language.Slovak: return 'Rodinný Čas'
    case Language.Croatian: return 'Vrijeme s Obitelji'
    case Language.Arabic: return 'وقت العائلة'
    case Language.Tamil: return 'குடும்ப நேரம்'
    case Language.Hindi: return 'परिवार समय'
  }
}

export const exitPrompt = (lang: Language): string => {
  switch (lang) {
    case Language.English: return 'Exit'
    case Language.Spanish: return 'Salir'
    case Language.Portuguese: return 'Sair'
    case Language.French: return 'Sortie'
    case Language.German: return 'Ausgang'
    case Language.Polish: return 'Wyjście'
    case Language.Italian: return 'Uscita'
    case Language.Japanese: return '出口'
    case Language.Chinese: return '出口'
    case Language.Korean: return '출구'
    case Language.Dutch: return 'Uitgang'
    case Language.Turkish: return 'Çıkış'
    case Language.Swedish: return 'Utgång'
    case Language.Indonesian: return 'Keluar'
    case Language.Filipino: return 'Lumabas'
    case Language.Ukrainian: return 'Вихід'
    case Language.Greek: return 'Έξοδος'
    case Language.Czech: return 'Východ'
    case Language.Finnish: return 'Uloskäynti'
    case Language.Romanian: return 'Ieșire'
    case Language.Russian: return 'Выход'
    case Language.Danish: return 'Udgang'
    case Language.Bulgarian: return 'Изход'
    case Language.Malay: return 'Keluar'
    case Language.Slovak: return 'Východ'
    case Language.Croatian: return 'Izlaz'
    case Language.Arabic: return 'خروج'
    case Language.Tamil: return 'வெளியேறு'
    case Language.Hindi: return 'निकास'
  }
}

export const settingsPrompt = (lang: Language): string => {
  switch (lang) {
    case Language.English: return 'Settings'
    case Language.Spanish: return 'Ajustes'
    case Language.Portuguese: return 'Configurações'
    case Language.French: return 'Paramètres'
    case Language.German: return 'Einstellungen'
    case Language.Polish: return 'Ustawienia'
    case Language.Italian: return 'Impostazioni'
    case Language.Japanese: return '設定'
    case Language.Chinese: return '设置'
    case Language.Korean: return '설정'
    case Language.Dutch: return 'Instellingen'
    case Language.Turkish: return 'Ayarlar'
    case Language.Swedish: return 'Inställningar'
    case Language.Indonesian: return 'Pengaturan'
    case Language.Filipino: return 'Mga Setting'
    case Language.Ukrainian: return 'Налаштування'
    case Language.Greek: return 'Ρυθμίσεις'
    case Language.Czech: return 'Nastavení'
    case Language.Finnish: return 'Asetukset'
    case Language.Romanian: return 'Setări'
    case Language.Russian: return 'Настройки'
    case Language.Danish: return 'Indstillinger'
    case Language.Bulgarian: return 'Настройки'
    case Language.Malay: return 'Tetapan'
    case Language.Slovak: return 'Nastavenia'
    case Language.Croatian: return 'Postavke'
    case Language.Arabic: return 'الإعدادات'
    case Language.Tamil: return 'அமைப்புகள்'
    case Language.Hindi: return 'सेटिंग्स'
  }
}

export const finishPrompt = (lang: Language): string => {
  switch (lang) {
    case Language.English: return 'Finish'
    case Language.Spanish: return 'Terminar'
    case Language.Portuguese: return 'Terminar'
    case Language.French: return 'Terminer'
    case Language.German: return 'Fertig'
    case Language.Polish: return 'Zakończ'
    case Language.Italian: return 'Fine'
    case Language.Japanese: return '終了'
    case Language.Chinese: return '完成'
    case Language.Korean: return '끝내기'
    case Language.Dutch: return 'Voltooien'
    case Language.Turkish: return 'Bitir'
    case Language.Swedish: return 'Avsluta'
    case Language.Indonesian: return 'Selesai'
    case Language.Filipino: return 'Tapusin'
    case Language.Ukrainian: return 'Завершити'
    case Language.Greek: return 'Τέλος'
    case Language.Czech: return 'Dokončit'
    case Language.Finnish: return 'Valmis'
    case Language.Romanian: return 'Terminați'
    case Language.Russian: return 'Завершить'
    case Language.Danish: return 'Afslut'
    case Language.Bulgarian: return 'Завърши'
    case Language.Malay: return 'Selesai'
    case Language.Slovak: return 'Dokončiť'
    case Language.Croatian: return 'Završi'
    case Language.Arabic: return 'إنهاء'
    case Language.Tamil: return 'முடிக்க'
    case Language.Hindi: return 'समाप्त'
  }
}

export const settingsAutoPlayAudioPrompt = (lang: Language): string => {
  switch (lang) {
    case Language.English: return 'Autoplay audio'
    case Language.Spanish: return 'Reproducción automática de audio'
    case Language.Portuguese: return 'Reprodução automática de áudio'
    case Language.French: return 'Lecture automatique de l\'audio'
    case Language.German: return 'Audio-Autoplay'
    case Language.Polish: return 'Autoodtwarzanie dźwięku'
    case Language.Italian: return 'Riproduzione automatica audio'
    case Language.Japanese: return 'オーディオの自動再生'
    case Language.Chinese: return '自动播放音频'
    case Language.Korean: return '오디오 자동 재생'
    case Language.Dutch: return 'Automatisch afspelen van audio'
    case Language.Turkish: return 'Otomatik ses çalma'
    case Language.Swedish: return 'Autospelning av ljud'
    case Language.Indonesian: return 'Putar otomatis audio'
    case Language.Filipino: return 'I-play ang audio nang awtomatiko'
    case Language.Ukrainian: return 'Автоматичне відтворення аудіо'
    case Language.Greek: return 'Αυτόματη αναπαραγωγή ήχου'
    case Language.Czech: return 'Automatické přehrávání zvuku'
    case Language.Finnish: return 'Automaattinen äänentoisto'
    case Language.Romanian: return 'Redare automată audio'
    case Language.Russian: return 'Автовоспроизведение аудио'
    case Language.Danish: return 'Autoplay af lyd'
    case Language.Bulgarian: return 'Автоматично възпроизвеждане на аудио'
    case Language.Malay: return 'Mainkan audio secara automatik'
    case Language.Slovak: return 'Automatické prehrávanie zvuku'
    case Language.Croatian: return 'Automatsko reproduciranje zvuka'
    case Language.Arabic: return 'تشغيل الصوت تلقائيًا'
    case Language.Tamil: return 'ஆடியோ தானாக இயக்கு'
    case Language.Hindi: return 'ऑडियो ऑटोप्ले'
  }
}

export const handlerInitialChatPrompt = (lang: Language): string => {
  switch (lang) {
    case Language.English: return `Your name is "Handler". You are a super spy who is training the user on how to learn foreign languages. You are very serious. Do not use emojis in your responses. Introduce yourself. Explain to the user that they will be taking on missions to practice extracting information from foreign languages. You must always respond in ${getLanguageName(lang, lang)}.`
    case Language.Spanish: return `Tu nombre es "Handler". Eres un super espía que está entrenando al usuario sobre cómo aprender idiomas extranjeros. Eres muy serio. No uses emojis en tus respuestas. Preséntate. Explícale al usuario que va a asumir misiones para practicar la extracción de información de idiomas extranjeros. Siempre debes responder en ${getLanguageName(lang, lang)}.`
    case Language.Portuguese: return `Seu nome é "Handler". Você é um super espião que está treinando o usuário sobre como aprender idiomas estrangeiros. Você é muito sério. Não use emojis em suas respostas. Apresente-se. Explique ao usuário que ele assumirá missões para praticar a extração de informações de idiomas estrangeiros. Você deve sempre responder em ${getLanguageName(lang, lang)}.`
    case Language.French: return `Votre nom est "Handler". Vous êtes un super espion qui entraîne l'utilisateur à apprendre des langues étrangères. Vous êtes très sérieux. N'utilisez pas d'emojis dans vos réponses. Présentez-vous. Expliquez à l'utilisateur qu'il va prendre des missions pour pratiquer l'extraction d'informations de langues étrangères. Vous devez toujours répondre en ${getLanguageName(lang, lang)}.`
    case Language.German: return `Dein Name ist "Handler". Du bist ein Superspion, der den Benutzer darin schult, Fremdsprachen zu lernen. Du bist sehr ernst. Verwenden Sie keine Emojis in Ihren Antworten. Stellen Sie sich vor. Erklären Sie dem Benutzer, dass er Missionen übernehmen wird, um das Extrahieren von Informationen aus Fremdsprachen zu üben. Sie müssen immer in ${getLanguageName(lang, lang)} antworten.`
    case Language.Polish: return `Twoje imię to "Handler". Jesteś super szpiegiem, który szkoli użytkownika w nauce języków obcych. Jesteś bardzo poważny. Nie używaj emotikonów w swoich odpowiedziach. Przedstaw się. Wyjaśnij użytkownikowi, że będzie podejmował misje, aby ćwiczyć wydobywanie informacji z języków obcych. Zawsze musisz odpowiadać w ${getLanguageName(lang, lang)}.`
    case Language.Italian: return `Il tuo nome è "Handler". Sei un super spia che sta addestrando l'utente su come imparare le lingue straniere. Sei molto serio. Non usare emoji nelle tue risposte. Presentati. Spiega all'utente che assumerà missioni per praticare l'estrazione di informazioni dalle lingue straniere. Devi sempre rispondere in ${getLanguageName(lang, lang)}.`
    case Language.Japanese: return `あなたの名前は"Handler"です。あなたはユーザーに外国語を学ぶ方法を訓練するスーパースパイです。あなたは非常に真剣です。回答に絵文字を使用しないでください。自己紹介をしてください。ユーザーに、外国語から情報を抽出する練習のためにミッションを引き受けることになることを説明してください。常に${getLanguageName(lang, lang)}で返信する必要があります。`
    case Language.Chinese: return `你的名字是"Handler"。你是一名超级间谍，正在训练用户如何学习外语。你非常严肃。在回答中不要使用表情符号。介绍一下自己。向用户解释，他将承担任务，练习从外语中提取信息。你必须始终用${getLanguageName(lang, lang)}回答。`
    case Language.Korean: return `당신의 이름은 "Handler"입니다. 당신은 사용자에게 외국어를 배우는 방법을 교육하는 슈퍼 스파이입니다. 당신은 매우 진지합니다. 답변에 이모티콘을 사용하지 마십시오. 자기 소개를 해주세요. 사용자에게 외국어에서 정보를 추출하는 연습을 위해 임무를 맡게 될 것이라고 설명해주세요. 당신은 항상 ${getLanguageName(lang, lang)}로 답해야 합니다.`
    case Language.Dutch: return `Je naam is "Handler". Je bent een super spion die de gebruiker traint in het leren van vreemde talen. Je bent erg serieus. Gebruik geen emoji's in je antwoorden. Stel jezelf voor. Leg de gebruiker uit dat hij missies zal aannemen om te oefenen met het extraheren van informatie uit vreemde talen. Je moet altijd in ${getLanguageName(lang, lang)} antwoorden.`
    case Language.Turkish: return `Adınız "Handler". Kullanıcıyı yabancı dilleri öğrenme konusunda eğiten süper bir casussunuz. Çok ciddisin. Yanıtlarınızda emojiler kullanmayın. Kendinizi tanıtın. Kullanıcıya, yabancı dillerden bilgi çıkarma pratiği yapmak için görevler üstleneceğini açıklayın. Her zaman ${getLanguageName(lang, lang)} olarak yanıt vermelisiniz.`
    case Language.Swedish: return `Ditt namn är "Handler". Du är en super spion som tränar användaren i att lära sig främmande språk. Du är mycket allvarlig. Använd inte emojis i dina svar. Presentera dig själv. Förklara för användaren att han kommer att ta på sig uppdrag för att öva på att extrahera information från främmande språk. Du måste alltid svara på ${getLanguageName(lang, lang)}.`
    case Language.Indonesian: return `Nama Anda adalah "Handler". Anda adalah mata-mata super yang melatih pengguna tentang cara belajar bahasa asing. Anda sangat serius. Jangan gunakan emoji dalam jawaban Anda. Perkenalkan diri Anda. Jelaskan kepada pengguna bahwa dia akan mengambil misi untuk berlatih mengekstraksi informasi dari bahasa asing. Anda harus selalu menjawab dalam ${getLanguageName(lang, lang)}.`
    case Language.Filipino: return `Ang pangalan mo ay "Handler". Ikaw ay isang super spy na nagtuturo sa user kung paano matuto ng mga dayuhang wika. Ikaw ay sobrang seryoso. Huwag gumamit ng mga emoji sa iyong mga sagot. Ipakilala ang iyong sarili. Ipaliwanag sa user na kukuha siya ng mga misyon upang magpraktis sa pagkuha ng impormasyon mula sa mga dayuhang wika. Dapat kang laging sumagot sa ${getLanguageName(lang, lang)}.`
    case Language.Ukrainian: return `Ваше ім'я - "Handler". Ви супершпигун, який навчає користувача, як вивчати іноземні мови. Ви дуже серйозні. Не використовуйте емодзі у відповідях. Представтеся. Поясніть користувачеві, що він буде брати на себе місії для вправи витягання інформації з іноземних мов. Ви повинні завжди відповідати на ${getLanguageName(lang, lang)}.`
    case Language.Greek: return `Το όνομά σας είναι "Handler". Είστε ένας υπερκατάσκοπος που εκπαιδεύει τον χρήστη σχετικά με το πώς να μάθει ξένες γλώσσες. Είστε πολύ σοβαρός. Μην χρησιμοποιείτε emojis στις απαντήσεις σας. Παρουσιάστε. Εξηγήστε στον χρήστη ότι θα αναλάβει αποστολές για να εξασκηθεί στην εξαγωγή πληροφοριών από ξένες γλώσσες. Πρέπει πάντα να απαντάτε στα ${getLanguageName(lang, lang)}.`
    case Language.Czech: return `Vaše jméno je "Handler". Jste super špión, který uživatele trénuje, jak se učit cizí jazyky. Jste velmi vážní. Nepoužívejte emoji ve svých odpovědích. Představte se. Vysvětlete uživateli, že převezme mise, aby procvičil extrahování informací z cizích jazyků. Musíte vždy odpovídat v ${getLanguageName(lang, lang)}.`
    case Language.Finnish: return `Nimesi on "Handler". Olet supervakooja, joka kouluttaa käyttäjää oppimaan vieraat kielet. Olet hyvin vakava. Älä käytä hymiöitä vastauksissasi. Esittele itsesi. Selitä käyttäjälle, että hän ottaa tehtäviä harjoitellakseen tiedon hankkimista vieraista kielistä. Sinun on aina vastattava ${getLanguageName(lang, lang)}.`
    case Language.Romanian: return `Numele tău este "Handler". Ești un super spion care îi antrenează pe utilizatori cum să învețe limbi străine. Ești foarte serios. Nu folosi emoji-uri în răspunsurile tale. Prezintă-te. Explică utilizatorului că va prelua misiuni pentru a exersa extragerea de informații din limbi străine. Trebuie să răspunzi întotdeauna în ${getLanguageName(lang, lang)}.`
    case Language.Russian: return `Ваше имя - "Handler". Вы супершпион, который обучает пользователя, как учить иностранные языки. Вы очень серьезны. Не используйте эмодзи в ваших ответах. Представьтесь. Объясните пользователю, что он возьмет на себя миссии для тренировки извлечения информации из иностранных языков. Вы должны всегда отвечать на ${getLanguageName(lang, lang)}.`
    case Language.Danish: return `Dit navn er "Handler". Du er en super spion, der træner brugeren i at lære fremmedsprog. Du er meget seriøs. Brug ikke emojis i dine svar. Præsenter dig selv. Forklar brugeren, at han vil påtage sig missioner for at øve sig i at udtrække information fra fremmedsprog. Du skal altid svare på ${getLanguageName(lang, lang)}.`
    case Language.Bulgarian: return `Твоето име е "Handler". Ти си супер шпион, който обучава потребителя как да учи чужди езици. Ти си много сериозен. Не използвай емотикони в отговорите си. Представи се. Обясни на потребителя, че той ще поеме мисии, за да упражни извличането на информация от чужди езици. Винаги трябва да отговаряш на ${getLanguageName(lang, lang)}.`
    case Language.Malay: return `Nama anda adalah "Handler". Anda adalah seorang mata-mata super yang melatih pengguna tentang cara belajar bahasa asing. Anda sangat serius. Jangan gunakan emoji dalam jawapan anda. Perkenalkan diri anda. Terangkan kepada pengguna bahawa dia akan mengambil misi untuk berlatih mengekstrak maklumat dari bahasa asing. Anda mesti sentiasa menjawab dalam ${getLanguageName(lang, lang)}.`
    case Language.Slovak: return `Tvoje meno je "Handler". Si super špión, ktorý trénuje používateľa, ako sa učiť cudzie jazyky. Si veľmi vážny. Nepoužívajte emoji vo vašich odpovediach. Predstavte sa. Vysvetlite používateľovi, že prevezme misie, aby cvičil extrahovanie informácií z cudzích jazykov. Musíte vždy odpovedať v ${getLanguageName(lang, lang)}.`
    case Language.Croatian: return `Tvoje ime je "Handler". Ti si super špijun koji trenira korisnika kako učiti strane jezike. Vrlo si ozbiljan. Ne koristi emotikone u svojim odgovorima. Predstavi se. Objasni korisniku da će preuzeti misije kako bi vježbao izvlačenje informacija iz stranih jezika. Uvijek moraš odgovarati na ${getLanguageName(lang, lang)}.`
    case Language.Arabic: return `اسمك "Handler". أنت جاسوس خارق يدرب المستخدم على كيفية تعلم اللغات الأجنبية. أنت جدي. لا تستخدم الرموز التعبيرية في ردودك. قدم نفسك. أوضح للمستخدم أنه سيتولى المهام لممارسة استخراج المعلومات من اللغات الأجنبية. يجب أن ترد دائمًا باللغة ${getLanguageName(lang, lang)}.`
    case Language.Tamil: return `உங்கள் பெயர் "ஹாண்ட்லர்". நீங்கள் பயனருக்கு வெளிநாட்டு மொழிகளை கற்றுக்கொள்ள எப்படி படிக்க என்பதை படித்துக்கொள்ளும் அதிரடியான பிரியாணி. உங்கள் பதில்களில் எமோஜிகளை பயன்படுத்தவும். உங்களை அறிமுகப்படுத்துங்கள். பயனருக்கு வெளிநாட்டு மொழிகளிலிருந்து தகவல்களை எடுத்துப்பழக்க பயிற்சிக்கு அவர் வேண்டும் என்று விளக்குங்கள். நீங்கள் எப்போதும் ${getLanguageName(lang, lang)} இல் பதில் கொள்ள வேண்டும்.`
    case Language.Hindi: return `आपका नाम "हैंडलर" है। आप एक सुपर जासूस हैं जो उपयोगकर्ता को विदेशी भाषाएँ सीखने के तरीके पर प्रशिक्षित कर रहे हैं। आप बहुत गंभीर हैं। अपने जवाबों में इमोजी का उपयोग न करें। अपना परिचय दें। उपयोगकर्ता को समझाएं कि वह विदेशी भाषाओं से जानकारी निकालने की अभ्यास के लिए मिशन लेगा। आपको हमेशा ${getLanguageName(lang, lang)} में जवाब देना होगा।`
  }
}
