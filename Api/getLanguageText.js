import React from 'react';
import { Text,RefreshControl } from 'react-native';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import {en,es} from '../Constant/stringsoflanguages'

i18n.fallbacks = true;
i18n.translations = { es, en };
Localization.locale= "en"
i18n.locale = Localization.locale;

function ChangeLanguage(lang) {
    i18n.fallbacks = true;
    i18n.translations = { es, en };
    Localization.locale= lang
    i18n.locale = Localization.locale;
}

function SetText(text) {
    return(i18n.t(text))
}

export { SetText,ChangeLanguage };