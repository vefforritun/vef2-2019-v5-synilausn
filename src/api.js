/**
 * "Gervi" API sem skilar statískum gögnum fyrir fyrirlestra. Gætum hæglega
 * tengt hérna við "alvöru" API.
 * Sameinar statísk gögn við gögn geymd í localStorage.
 */

import data from './lectures.json';

// Lykill sem við geymum vistaðar færslur undir.
const LOCALSTORAGE_KEY = 'saved_lectures';

/**
 * Sækir alla vistaða fyrirlestra í localStorage.
 * @returns {array} Fylki af slug fyrir vistaða fyrirlestra.
 */
function loadSavedLectures() {
  const savedJson = localStorage.getItem(LOCALSTORAGE_KEY);
  const saved = JSON.parse(savedJson) || [];

  return saved;
}

/**
 * Skilar lista af fyrirlestrum, síuuðum eftir flokkum eða ekki. Gögn um það
 * hvort notandi hafi klárað fyrirlestrar er bætt við gögn.
 *
 * @param {array} filters Fylki af flokkum sem fyrirlestrar mega vera í.
 *                        Sjálfgefið [].
 * @returns {array} Fylki af fyrirlestrum.
 */
export function getLectureList(filters = []) {
  const { lectures } = data;

  const saved = loadSavedLectures();

  return lectures
    .filter(i => filters.length === 0 || filters.indexOf(i.category) >= 0)
    .map((i) => {
      i.finished = saved.indexOf(i.slug) >= 0;
      return i;
    });
}

/**
 * Sækir ákveðinn fyrirlestur eftir slug. Bætir við upplýsingum um hvort
 * fyrirlestur sé kláraður ekki.
 *
 * @param {string} slug Slug á fyrirlestri sem sækja á.
 * @returns {object} Fyrirlestri sem fannst eða null ef engin fannst.
 */
export function getLecture(slug) {
  const { lectures } = data;

  const found = lectures.find(i => i.slug === slug);

  if (!found) {
    return null;
  }

  const saved = loadSavedLectures();

  found.finished = saved.indexOf(found.slug) >= 0;

  return found;
}

/**
 * Setur fyrirlestur sem kláraðann eða ekki eftir slug. Ef fyrirlestur var
 * kláraðar er hann settur sem ókláraður og öfugt.
 *
 * @param {string} slug Slug á fyrirlestri sem klára á.
 */
export function toggleLectureFinish(slug) {
  const saved = loadSavedLectures();

  const index = saved.indexOf(slug);

  if (index >= 0) {
    saved.splice(index, 1);
  } else {
    saved.push(slug);
  }

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(saved));
}
