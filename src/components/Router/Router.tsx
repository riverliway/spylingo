import React, { useState } from 'react'
import { Language } from '../../utils/languages'
import { ChooseLanguage } from '../ChooseLanguage/ChooseLanguage'

/**
 * Determines which page to show
 */
export const Router: React.FC = () => {
  const [nativeLanguage, setNativeLanguage] = useState<Language | undefined>()
  const [foreignLanguage, setForeignLanguage] = useState<Language | undefined>()

  if (nativeLanguage === undefined) {
    return (
      <ChooseLanguage
        title='Select your native language'
        subTitle='Select your native language'
        setLanguage={setNativeLanguage}
      />
    )
  }

  if (foreignLanguage === undefined) {
    return (
      <ChooseLanguage
        title='Select the foreign language to practice'
        setLanguage={setForeignLanguage}
        hiddenLanguage={nativeLanguage}
      />
    )
  }

  return (
    <div>
      hi
    </div>
  )
}
