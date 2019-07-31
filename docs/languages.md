# Supported Languages

Find your language below and learn, how many plural forms will be needed in localized messages with cardinals and what rules will decide the right plural form.

## Plural rule #0 (1 form)

```txt
  Families: Asian (Chinese, Japanese, Korean), Persian,
    Turkic/Altaic (Turkish), Thai, Lao
  Locales: ay (Aymará), bo (Tibetan), cgg (Chiga), dz (Dzongkha),
    id (Indonesian), ja (Japanese), jbo (Lojban), ka (Georgian),
    km (Khmer), ko (Korean), lo (Lao), ms (Malay), my (Burmese),
    sah (Yakut), su (Sundanese), th (Thai), tt (Tatar), ug (Uyghur),
    vi (Vietnamese), wo (Wolof), zh-CN (Simplified Chinese)
  Forms: other
  everything: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
  18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
  36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, ...
```

## Plural rule #1 (2 forms)

```txt
  Families: Germanic (Danish, Dutch, English, Faroese, Frisian, German,
    Norwegian, Swedish), Finno-Ugric (Estonian, Finnish, Hungarian), Language
    isolate (Basque), Latin/Greek (Greek), Semitic (Hebrew), Romanic (Italian,
    Portuguese, Spanish, Catalan), Vietnamese
  Locales: af (Afrikaans), an (Aragonese), anp (Angika), as (Assamese),
    ast (Asturian), az (Azerbaijani), bg (Bulgarian), bn (Bengali),
    brx (Bodo), ca (Catalan), da (Danish), de (German), doi (Dogri),
    el (Greek), en (English), eo (Esperanto), es (Spanish),
    es-AR (Argentinean Spanish), et (Estonian), eu (Basque),
    ff (Fulah), fi (Finnish), fo (Faroese), fur (Friulian),
    fy (Frisian), gl (Galician), gu (Gujarati), ha (Hausa),
    he (Hebrew), hi (Hindi), hne (Chhattisgarhi), hu (Hungarian),
    hy (Armenian), ia (Interlingua), it (Italian), kk (Kazakh),
    kl (Greenlandic), kn (Kannada), ku (Kurdish), ky (Kyrgyz),
    lb (Letzeburgesch), mai (Maithili), ml (Malayalam), mn (Mongolian),
    mni (Manipuri), mr (Marathi), nah (Nahuatl), nap (Neapolitan),
    nb (Norwegian Bokmal), ne (Nepali), nl (Dutch),
    nn (Norwegian Nynorsk), no (Norwegian), nso (Northern Sotho),
    or (Oriya), pa (Punjabi), pap (Papiamento), pms (Piemontese),
    ps (Pashto), pt (Portuguese), rm (Romansh), rw (Kinyarwanda),
    sat (Santali), sco (Scots), sd (Sindhi), se (Northern Sami),
    si (Sinhala), so (Somali), son (Songhay), sq (Albanian),
    sv (Swedish), sw (Swahili), ta (Tamil), te (Telugu), tk (Turkmen),
    ur (Urdu), yo (Yoruba)
  Forms: one, other
  is 1: 1
  everything else: 0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
  17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
  35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, ...
```

## Plural rule #2 (2 forms)

```txt
  Families: Romanic (French, Brazilian Portuguese)
  Locales: ach (Acholi), ak (Akan), am (Amharic), arn (Mapudungun),
    br (Breton), fa (Persian), fil (Filipino), fr (French), gun (Gun),
    ln (Lingala), mfe (Mauritian Creole), mg (Malagasy), mi (Maori),
    oc (Occitan), pt-BR (Brazilian Portuguese), tg (Tajik), ti (Tigrinya),
    tr (Turkish), uz (Uzbek), wa (Walloon), zh-TW (Traditional Chinese)
  Forms: one, other
  is 0 or 1: 0, 1
  everything else: 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
  18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
  36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, ...
```

## Plural rule #3 (3 forms)

```txt
  Families: Baltic (Latvian, Latgalian)
  Locales: lv (Latvian)
  Forms: zero, one, other
  ends in 0: 0
  ends in 1, excluding 11: 1, 21, 31, 41, 51, 61, 71, 81, 91, 101, 121, 131,
  141, 151, 161, 171, 181, 191, 201, 221, 231, 241, 251, 261, 271, 281, 291,
  ...
  everything else: 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18,
  19, 22, 23, 24, 25, 26, 27, 28, 29, 32, 33, 34, 35, 36, 37, 38, 39, 42,
  43, 44, 45, 46, 47, 48, 49, 52, 53, ...
```

## Plural rule #4 (4 forms)

```txt
  Families: Celtic (Scottish Gaelic)
  Locales: gd (Scottish Gaelic)
  Forms: one, two, few, other
  is 1 or 11: 1, 11
  is 2 or 12: 2, 12
  is 3-10 or 13-19: 3, 4, 5, 6, 7, 8, 9, 10, 13, 14, 15, 16, 17, 18, 19
  everything else: 0, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
  33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
  51, ...
```

## Plural rule #5 (3 forms)

```txt
  Families: Romanic (Romanian)
  Locales: ro (Romanian)
  Forms: one, few, other
  is 1: 1
  is 0 or ends in 01-19, excluding 1: 0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
  13, 14, 15, 16, 17, 18, 19, 101, 102, 103, 104, 105, 106, 107, 108, 109,
  110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 201, 202, 203, 204, 205,
  206, 207, 208, 209, 210, 211, 212, ...
  everything else: 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,
  34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51,
  52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, ...
```

## Plural rule #6 (3 forms)

```txt
  Families: Baltic (Lithuanian)
  Locales: lt (Lithuanian)
  Forms: one, few, other
  ends in 1, excluding 11: 1, 21, 31, 41, 51, 61, 71, 81, 91, 101, 121, 131,
  141, 151, 161, 171, 181, 191, 201, 221, 231, 241, 251, 261, 271, 281, 291,
  ...
  ends in 0 or ends in 11-19: 0, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  30, 40, 50, 60, 70, 80, 90, 100, 110, 111, 112, 113, 114, 115, 116, 117,
  118, 119, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 211, 212, 213,
  214, 215, 216, 217, 218, 219, 220, ...
  everything else: 2, 3, 4, 5, 6, 7, 8, 9, 22, 23, 24, 25, 26, 27, 28, 29,
  32, 33, 34, 35, 36, 37, 38, 39, 42, 43, 44, 45, 46, 47, 48, 49, 52, 53,
  54, 55, 56, 57, 58, 59, 62, 63, 64, 65, 66, 67, 68, 69, 72, 73, ...
```

## Plural rule #7 (3 forms)

```txt
  Families: Slavic (Belarusian, Bosnian, Croatian, Serbian, Russian, Ukrainian)
  Locales: be (Belarusian), bs (Bosnian), hr (Croatian), ru (Russian),
    sr (Serbian), uk (Ukrainian)
  Forms: one, few, other
  ends in 1, excluding 11: 1, 21, 31, 41, 51, 61, 71, 81, 91, 101, 121, 131,
  141, 151, 161, 171, 181, 191, 201, 221, 231, 241, 251, 261, 271, 281, 291,
  ...
  ends in 2-4, excluding 12-14: 2, 3, 4, 22, 23, 24, 32, 33, 34, 42, 43, 44,
  52, 53, 54, 62, 63, 64, 72, 73, 74, 82, 83, 84, 92, 93, 94, 102, 103, 104,
  122, 123, 124, 132, 133, 134, 142, 143, 144, 152, 153, 154, 162, 163, 164,
  172, 173, 174, 182, 183, ...
  everything else: 0, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  20, 25, 26, 27, 28, 29, 30, 35, 36, 37, 38, 39, 40, 45, 46, 47, 48, 49,
  50, 55, 56, 57, 58, 59, 60, 65, 66, 67, 68, 69, 70, 75, 76, 77, ..., 112,
  113, ..., 212, 213, ...
```

## Plural rule #8 (3 forms)

```txt
  Families: Slavic (Slovak, Czech)
  Locales: cs (Czech), sk (Slovak)
  Forms: one, few, other
  is 1: 1
  is 2-4: 2, 3, 4
  everything else: 0, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
  38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, ...
```

## Plural rule #9 (3 forms)

```txt
  Families: Slavic (Polish)
  Locales: pl (Polish)
  Forms: one, few, other
  is 1: 1
  ends in 2-4, excluding 12-14: 2, 3, 4, 22, 23, 24, 32, 33, 34, 42, 43, 44,
  52, 53, 54, 62, 63, 64, 72, 73, 74, 82, 83, 84, 92, 93, 94, 102, 103, 104,
  122, 123, 124, 132, 133, 134, 142, 143, 144, 152, 153, 154, 162, 163, 164,
  172, 173, 174, 182, 183, ...
  everything else: 0, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  20, 21, 25, 26, 27, 28, 29, 30, 31, 35, 36, 37, 38, 39, 40, 41, 45, 46,
  47, 48, 49, 50, 51, 55, 56, 57, 58, 59, 60, 61, 65, 66, 67, 68, ...
```

## Plural rule #10 (4 forms)

```txt
  Families: Slavic (Slovenian, Sorbian)
  Locales: sl (Slovenian)
  Forms: one, two, few, other
  ends in 01: 1, 101, 201, ...
  ends in 02: 2, 102, 202, ...
  ends in 03-04: 3, 4, 103, 104, 203, 204, ...
  everything else: 0, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
  38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, ...
```

## Plural rule #11 (5 forms)

```txt
  Families: Celtic (Irish Gaelic)
  Locales: ga (Irish)
  Forms: one, two, few, many, other
  is 1: 1
  is 2: 2
  is 3-6: 3, 4, 5, 6
  is 7-10: 7, 8, 9, 10
  everything else: 0, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
  24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, ...
```

## Plural rule #12 (6 forms)

```txt
  Families: Semitic (Arabic)
  Locales: ar (Arabic)
  Forms: one, two, few, many, other, zero
  is 1: 1
  is 2: 2
  ends in 03-10: 3, 4, 5, 6, 7, 8, 9, 10, 103, 104, 105, 106, 107, 108, 109,
  110, 203, 204, 205, 206, 207, 208, 209, 210, ...
  everything else but is 0 and ends in 00-02, excluding 0-2: 11, 12, 13, 14,
  15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
  33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
  51, 52, 53, 54, 55, 56, 57, 58, 59, 60, ...
  ends in 00-02, excluding 0-2: 100, 101, 102, 200, 201, 202, ...
  is 0: 0
```

## Plural rule #13 (4 forms)

```txt
  Families: Semitic (Maltese)
  Locales: mt (Maltese)
  Forms: one, few, many, other
  is 1: 1
  is 0 or ends in 01-10, excluding 1: 0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 101,
  102, 103, 104, 105, 106, 107, 108, 109, 110, 201, 202, 203, 204, 205, 206,
  207, 208, 209, 210, ...
  ends in 11-19: 11, 12, 13, 14, 15, 16, 17, 18, 19, 111, 112, 113, 114,
  115, 116, 117, 118, 119, 211, 212, 213, 214, 215, 216, 217, 218, 219, ...
  everything else: 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,
  34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51,
  52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, ...
```

## Plural rule #14 (3 forms)

```txt
  Families: Unused
  Forms: one, few, other
  ends in 1: 1, 11, 21, 31, 41, 51, 61, 71, 81, 91, 101, 111, 121, 131, 141,
  151, 161, 171, 181, 191, 201, 211, 221, 231, 241, 251, 261, 271, 281, 291,
  ...
  ends in 2: 2, 12, 22, 32, 42, 52, 62, 72, 82, 92, 102, 112, 122, 132, 142,
  152, 162, 172, 182, 192, 202, 212, 222, 232, 242, 252, 262, 272, 282, 292,
  ...
  everything else: 0, 3, 4, 5, 6, 7, 8, 9, 10, 13, 14, 15, 16, 17, 18, 19,
  20, 23, 24, 25, 26, 27, 28, 29, 30, 33, 34, 35, 36, 37, 38, 39, 40, 43,
  44, 45, 46, 47, 48, 49, 50, 53, 54, 55, 56, 57, 58, 59, 60, 63, ...
```

## Plural rule #15 (2 forms)

```txt
  Families: Icelandic, Macedonian
  Locales: is (Icelandic), mk (Macedonian)
  Forms: one, other
  ends in 1, excluding 11: 1, 21, 31, 41, 51, 61, 71, 81, 91, 101, 121, 131,
  141, 151, 161, 171, 181, 191, 201, 221, 231, 241, 251, 261, 271, 281, 291,
  ...
  everything else: 0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
  17, 18, 19, 20, 22, 23, 24, 25, 26, 27, 28, 29, 30, 32, 33, 34, 35, 36,
  37, 38, 39, 40, 42, 43, 44, 45, 46, 47, 48, 49, 50, 52, 53, 54, ...
```

## Plural rule #16 (5 forms)

```txt
  Families: Celtic (Breton)
  Forms: one, two, few, many, other
  ends in 1, excluding 11, 71, 91: 21, 31, 41, 51, 61, 81, 101, 121, 131,
  141, 151, 161, 181, 201, 221, 231, 241, 251, 261, 281, ...
  ends in 2, excluding 12, 72, 92: 2, 22, 32, 42, 52, 62, 82, 102, 122, 132,
  142, 152, 162, 182, 202, 222, 232, 242, 252, 262, 282, ...
  ends in 3, 4 or 9 excluding 13, 14, 19, 73, 74, 79, 93, 94, 99: 3, 4, 9,
  23, 24, 29, 33, 34, 39, 43, 44, 49, 53, 54, 59, ...
  ends in 000000: 1000000, 2000000, 3000000, 4000000, 5000000,
  6000000, 7000000, 8000000, 9000000, 10000000, ...
  everything else: 0, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  20, 25, 26, 27, 28, 30, 35, 36, 37, 38, 40, ...
```

## Plural rule #17 (2 forms)

```txt
  Families: Ecuador indigenous languages (Shuar)
  Locales: jv (Javanese)
  Forms: zero, other
  is 0: 0
  everything else: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
  17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
  35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, ...
```

## Plural rule #18 (6 forms)

```txt
  Families: Welsh
  Locales: cy (Welsh)
  Forms: zero, one, two, few, many, other
  is 0: 0
  is 1: 1
  is 2: 2
  is 3: 3
  is 6: 6
  everything else: 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
  38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, ...
```

## Plural rule #19 (3 forms)

```txt
  Locales: csb (Kashubian)
  Forms: one, few, other
  is 1: 1
  ends in 2-4, excluding 12-14: 2, 3, 4, 22, 23, 24, 32, 33, 34, 42, 43, 44,
  52, 53, 54, 62, 63, 64, 72, 73, 74, 82, 83, 84, 92, 93, 94, 102, 103, 104,
  122, 123, 124, 132, 133, 134, 142, 143, 144, 152, 153, 154, 162, 163, 164,
  172, 173, 174, 182, 183, ...
  everything else: 0, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  20, 21, 25, 26, 27, 28, 29, 30, 31, 35, 36, 37, 38, 39, 40, 41, 45, 46,
  47, 48, 49, 50, 51, 55, 56, 57, 58, 59, 60, 61, 65, 66, 67, 68, 69, 70,
  71, 75, 76, 77, ..., 111, 115, ..., 211, 215, ...
```

## Plural rule #20 (4 forms)

```txt
  Locales: kw (Cornish)
  Forms: one, two, few, other
  is 1: 1
  is 2: 2
  is 3: 3
  everything else: 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
  38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, ...
```

## Plural rule #21 (3 forms)

```txt
  Locales: me (Montenegro)
  Forms: one, few, other
  ends in 1, excluding 11: 1, 21, 31, 41, 51, 61, 71, 81, 91, 101, 121, 131,
  141, 151, 161, 171, 181, 191, 201, 221, 231, 241, 251, 261, 271, 281, 291,
  ...
  ends in 2-4, excluding 12-14: 2, 3, 4, 22, 23, 24, 32, 33, 34, 42, 43, 44,
  52, 53, 54, 62, 63, 64, 72, 73, 74, 82, 83, 84, 92, 93, 94, 102, 103, 104,
  122, 123, 124, 132, 133, 134, 142, 143, 144, 152, 153, 154, 162, 163, 164,
  172, 173, 174, 182, 183, ...
  everything else: 0, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  20, 25, 26, 27, 28, 29, 30, 35, 36, 37, 38, 39, 40, 45, 46, 47, 48, 49,
  50, 55, 56, 57, 58, 59, 60, 65, 66, 67, 68, 69, 70, 75, 76, 77, ..., 112,
  113, ..., 212, 213, ...
```

## Plural rule #22 (3 forms)

```txt
  Locales: mnk (Mandinka)
  Forms: zero, one, other
  is 0: 0
  is 1: 1
  everything else: 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
  18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
  36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, ...
```

See also the [original list of plural rules and plural form numbers](https://developer.mozilla.org/en-US/docs/Mozilla/Localization/Localization_and_Plurals#List_of_Plural_Rules).
