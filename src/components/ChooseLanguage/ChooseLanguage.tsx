import React, { useEffect, useState } from 'react'
import { Language, languageNames } from '../../utils/languages'
import { paginateArray } from '../../utils/paginateArray'
import './ChooseLanguage.css'

interface ChooseLanguageProps {
  title: string | string[]
  subTitle?: string
  setLanguage: (lang: Language) => void
  hiddenLanguage?: Language
}

/**
 * Shows the available languages to choose from
 */
export const ChooseLanguage: React.FC<ChooseLanguageProps> = props => {
  const rawLanguageCodes = Object.values(Language)
  const languageCodes = paginateArray(rawLanguageCodes, 3)

  return (
    <div className='chooseLanguageContain'>
      <div className='chooseLanguageTitles'>
        <div className='chooseLanguageTitle'>
          {!Array.isArray(props.title) ? props.title : <RotatingTitle title={props.title} />}
        </div>
        {props.subTitle && (
          <div className='chooseLanguageSubtitle'>
            {props.subTitle}
          </div>
        )}
      </div>
      <div className='chooseLanguageOptions'>
        {languageCodes.map((page, i) => (
          <div key={i} className='chooseLanguagePage'>
            {page.map((lang, j) => (
              <div
                key={j}
                className={`chooseLanguageOption ${lang === props.hiddenLanguage ? 'chooseLanguageOptionHidden' : ''}`}
                onClick={() => lang !== props.hiddenLanguage && props.setLanguage(lang)}
              >
                {languageNames[lang]}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

const RotatingTitle: React.FC<{ title: string[] }> = props => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const callback = () => {
      setIndex(i => (i + 1) % props.title.length)
    }

    const interval = setInterval(callback, 3000)
    return () => clearInterval(interval)
  }, [])

  return props.title[index]
}
