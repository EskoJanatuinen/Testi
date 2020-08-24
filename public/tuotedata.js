const data = [
  ["shampoo", "Shampoo", "Kosmetiikka"],
  ["saippua", "Saippua", "Kosmetiikka"],
  ["hammastahna", "Hammastahna", "Kosmetiikka"],
  ["siniLiinat", "Sini-siivousliinat", "Kodinhoito"],
  ["pakastepussit", "Pakastepussit", "Kodinhoito"],
  ["kirjopesuaine", "Kirjopesuaine", "Kodinhoito"],
  ["valkopesuaine", "Valkopesuaine", "Kodinhoito"],
  ["astianpesuaine", "astianpesuaine", "Kodinhoito"],
  ["vessapaperi", "Vessapaperi", "Kodinhoito"],
  ["talouspaperi", "Talouspaperi", "Kodinhoito"],
  ["kosteaVessapaperi", "Kostea vessapaperi", "Kodinhoito"],
  ["taiteltuTalouspaperi", "Taiteltu talouspaperi", "Kodinhoito"],
  ["vaipat", "Vaipat", "Kodinhoito"],
  ["vauvanruoka", "Vauvanruoka", "Kodinhoito"],
  ["kurkku", "Kurkku", "Hedelmät ja vihannekset"],
  ["peruna", "Peruna", "Hedelmät ja vihannekset"],
  ["sipuli", "Sipuli", "Hedelmät ja vihannekset"],
  ["tomaatti", "Tomaatti", "Hedelmät ja vihannekset"],
  ["kirsikkatomaatti", "Kirsikkatomaatti", "Hedelmät ja vihannekset"],
  ["salaatti", "Salaatti", "Hedelmät ja vihannekset"],
  ["mansikka", "Mansikat", "Hedelmät ja vihannekset"],
  ["mustikka", "Mustikat", "Hedelmät ja vihannekset"],
  ["banaani", "Banaani", "Hedelmät ja vihannekset"],
  ["paaryna", "Päärynä", "Hedelmät ja vihannekset"],
  ["omena", "Omena", "Hedelmät ja vihannekset"],
  ["viinirypaleet", "Viinirypäleet", "Hedelmät ja vihannekset"],
  ["sitruna", "Sitruuna", "Hedelmät ja vihannekset"],
  ["avokado", "Avokado", "Hedelmät ja vihannekset"],
  ["sipsit", "Sipsit", "Sipsit, pähkinät"],
  ["cashew", "Cashew-pähkinät", "Sipsit, pähkinät"],
  ["kananmunat", "Kananmunat", "Voi, kananmunat"],
  ["margariini", "Margariini", "Voi, kananmunat"],
  ["voi", "Voi", "Voi, kananmunat"],
  ["majoneesi", "Majoneesi", "Voi, kananmunat"],
  ["vesi", "Vesi", "Juomat"],
  ["pikkuvichy", "Vichy 0,33l 24-pack", "Juomat"],
  ["isovicy", "Vichy 1,5l 2-pack", "Juomat"],
  ["appelsiinimehu", "Appelsiinimehu", "Juomat"],
  ["pepsi", "Pepsi 0,33l 6-pack", "Juomat"],
  ["isoPepsi", "Pepsi 1,5l", "Juomat"],
  ["jaffa", "Jaffa 1,5l", "Juomat"],
  ["olut", "Olut", "Juomat"],
  ["siideri", "Siideri", "Juomat"],
  ["makaronilaatikko", "Makaronilaatikko", "Einekset, juustot, makkarat"],
  ["maksalaatikko", "Maksalaatikko", "Einekset, juustot, makkarat"],
  ["lihapullat", "Lihapullat", "Einekset, juustot, makkarat"],
  ["kotkot", "KotKot-pullat", "Einekset, juustot, makkarat"],
  ["nakit", "Nakit", "Einekset, juustot, makkarat"],
  ["kanafilee", "maalaisfilee", "Einekset, juustot, makkarat"],
  ["juusto", "Herkkutilan gouda", "Einekset, juustot, makkarat"],
  ["feta", "Feta-juusto", "Einekset, juustot, makkarat"],
  ["tuorejuusto", "Tuorejuusto", "Einekset, juustot, makkarat"],
  ["alpro", "Alpro Mango", "Maitotuotteet"],
  ["actimel", "Actimel, sokeriton", "Maitotuotteet"],
  ["turkkilainenJogu", "Turkkilainen jogurtti", "Maitotuotteet"],
  ["raejuusto", "Raejuusto", "Maitotuotteet"],
  ["maitorahka", "Maitorahka", "Maitotuotteet"],
  ["cremeFraiche", "Creme fraiche", "Maitotuotteet"],
  ["maito", "Maito", "Maitotuotteet"],
  ["kerma", "Kerma 5dl", "Maitotuotteet"],
  ["kanankoivet", "Kanankoivet", "Liha ja kala"],
  ["jauheliha", "Jauheliha", "Liha ja kala"],
  ["lohi", "Lohi", "Liha ja kala"],
  ["kylmasavulohi", "Kylmäsavulohi", "Liha ja kala"],
  ["herkkuleipa", "Herkkuleipä", "Leipä"],
  ["ruispalat", "Ruispalat", "Leipä"],
  ["gluteenitonLeipa", "Gluteeniton leipä", "Leipä"],
  ["riisipiirakka", "Riisipiirakka", "Leipä"],
  ["tee", "Tee", "Kuivatuotteet"],
  ["kahvi", "Kahvi", "Kuivatuotteet"],
  ["finmix", "FinMix-jauho", "Kuivatuotteet"],
  ["grovmix", "GrovMix-jauho", "Kuivatuotteet"],
  ["pasta", "Pasta", "Kuivatuotteet"],
  ["riisi", "Riisi", "Kuivatuotteet"],
  ["perunamuussi", "Perunamuussijauhe", "Kuivatuotteet"],
  ["dominokeksit", "Dominokeksit", "Kuivatuotteet"],
  ["muumikeksit", "Muumikeksit", "Kuivatuotteet"],
  ["suklaakeksit", "Suklaakeksit", "Kuivatuotteet"],
  ["digestiivit", "Digestiivit", "Kuivatuotteet"],
  ["sokeri", "Sokeri", "Kuivatuotteet"],
  ["hyyteloSokeri", "Hyytelösokeri", "Kuivatuotteet"],
  ["karpalomehu", "Karpalomehu", "Hillot ja säilykkeet"],
  ["mansikkamehu", "Mansikkamehu", "Hillot ja säilykkeet"],
  ["sinappi", "Sinappi", "Hillot ja säilykkeet"],
  ["ketsuppi", "Ketsuppi", "Hillot ja säilykkeet"],
  ["mansikkahillo", "Mansikkahillo", "Hillot ja säilykkeet"],
  ["oliivit", "Oliivit", "Hillot ja säilykkeet"],
  ["suolakurkut", "suolakurkut", "Hillot ja säilykkeet"],
  ["tonnikala", "Tonnikala", "Hillot ja säilykkeet"],
  ["sirkusAakkoset", "Sirkus-Aakkoset", "Makeiset"],
  ["suklaarusinat", "Suklaarusinat", "Makeiset"],
  ["cocktailPiirakat", "Coctail-piirakat", "Pakasteet"],
  ["pakastePizza", "Pakastepizza", "Pakasteet"],
  ["katkaravut", "Katkaravut", "Pakasteet"],
  ["pinaatti", "Pinaatti", "Pakasteet"],
  ["ranskalaiset", "Ranskalaiset", "Pakasteet"],
  ["vaniljajaatelo", "Vaniljaäätelö", "Pakasteet"],
  ["kinuskiJaatelo", "Kinuski-jäätelö", "Pakasteet"],
  ["jaatelopuikot", "Jäätelöpuikot", "Pakasteet"],
];

var osastot = [
  "Kosmetiikka",
  "Kodinhoito",
  "Hedelmät ja vihannekset",
  "Sipsit, pähkinät",
  "Voi, kananmunat",
  "Juomat",
  "Einekset, juustot, makkarat",
  "Maitotuotteet",
  "Liha ja kala",
  "Leipä",
  "Kuivatuotteet",
  "Hillot ja säilykkeet",
  "Makeiset",
  "Pakasteet",
];

exports.data = data;
exports.osastot = osastot;
