const STORAGE_KEY = 'gymAppState_v16';
const todayISO = () => new Date().toISOString().slice(0, 10);

const COMPLEXES = [
  {
    id: 'complex1',
    number: 1,
    title: 'Комплекс упражнений №1',
    subtitle: 'Базовый комплекс: шея, плечи, корпус, ноги',
    image: 'assets/cards/complex1.jpg',
    exercises: [
      { no: 1, title: 'Повороты головы', desc: 'Сидя на стуле, плавно поворачивать голову вправо и влево. Повторить по 4 раза в каждую сторону.', base: 40 },
      { no: 2, title: 'Круговые движения плечами', desc: 'Стоя, выполнять круговые движения плечами вперёд и назад. Повторить по 8 раз.', base: 45 },
      { no: 3, title: 'Повороты корпуса', desc: 'Сидя на стуле, руки на поясе, плавно поворачивать корпус вправо и влево. Повторить по 4 раза в каждую сторону.', base: 45 },
      { no: 4, title: 'Наклоны в стороны', desc: 'Стоя, руки на поясе, выполнять наклоны корпуса вправо и влево. Повторить по 6 раз в каждую сторону.', base: 45 },
      { no: 5, title: 'Разгибание ноги', desc: 'Сидя на стуле, поочерёдно выпрямлять ногу вперёд. Повторить по 6 раз на каждую ногу.', base: 50 },
      { no: 6, title: 'Подъём на носки', desc: 'Стоя, подниматься на носки и плавно опускаться. Повторить 10 раз.', base: 40 }
    ]
  },
  {
    id: 'complex2',
    number: 2,
    title: 'Комплекс упражнений №2',
    subtitle: 'Плечевой пояс, полуприседания, шаг на месте',
    image: 'assets/cards/complex2.jpg',
    exercises: [
      { no: 1, title: 'Наклоны головы вперёд и назад', desc: 'Сидя на стуле, наклонить голову вперёд, затем слегка назад. Повторить по 4 раза.', base: 40 },
      { no: 2, title: 'Подъём рук вверх', desc: 'Стоя, поднять обе руки вверх, потянуться, опустить руки вниз. Повторить 6 раз.', base: 40 },
      { no: 3, title: 'Сведение лопаток', desc: 'Сидя на стуле, руки на поясе или вдоль тела. Отвести плечи назад, свести лопатки. Повторить 8 раз.', base: 45 },
      { no: 4, title: 'Полуприседания', desc: 'Стоя, ноги на ширине плеч, руки вперёд. Выполнить комфортные полуприседания. Повторить 8 раз.', base: 55 },
      { no: 5, title: 'Перекаты стоп', desc: 'Сидя на стуле, попеременно поднимать носки вверх, затем пятки. Повторить 8 раз.', base: 45 },
      { no: 6, title: 'Шаг на месте', desc: 'Идите на месте, умеренно поднимая колени. Повторить по 10 раз на каждую ногу.', base: 60 }
    ]
  },
  {
    id: 'complex3',
    number: 3,
    title: 'Комплекс упражнений №3',
    subtitle: 'Спина, махи руками, колени, голеностоп',
    image: 'assets/cards/complex3.jpg',
    exercises: [
      { no: 1, title: 'Наклоны головы в стороны', desc: 'Сидя на стуле, плавно наклонять голову вправо и влево. Повторить по 4 раза в каждую сторону.', base: 40 },
      { no: 2, title: 'Махи руками', desc: 'Стоя, выполнять махи прямыми руками вперёд и назад в комфортной амплитуде. Повторить 8 раз.', base: 45 },
      { no: 3, title: 'Прогиб и округление спины', desc: 'Сидя на стуле, плавно прогибать спину, раскрывая грудь, затем округлять её. Повторить 6 раз.', base: 50 },
      { no: 4, title: 'Повороты корпуса', desc: 'Стоя, руки на поясе, плавно поворачивать корпус вправо и влево. Повторить по 6 раз в каждую сторону.', base: 45 },
      { no: 5, title: 'Круговые движения стопой', desc: 'Сидя на стуле, поочерёдно выполнять круговые движения одной стопой в голеностопе, затем другой. Повторить по 8 раз.', base: 50 },
      { no: 6, title: 'Подъём коленей', desc: 'Стоя, поочерёдно поднимать колени вверх на месте. Повторить по 10 раз на каждую ногу.', base: 60 }
    ]
  },
  {
    id: 'complex4',
    number: 4,
    title: 'Комплекс упражнений №4',
    subtitle: 'Кисти, наклоны, потягивание вверх',
    image: 'assets/cards/complex4.jpg',
    exercises: [
      { no: 1, title: 'Наклоны в стороны сидя', desc: 'Сидя на стуле, одна рука на поясе, другая поднята вверх. Наклоняться вправо и влево. Повторить по 4 раза.', base: 45 },
      { no: 2, title: 'Сгибание рук', desc: 'Стоя, сгибать и разгибать руки в локтях. Повторить 10 раз.', base: 40 },
      { no: 3, title: 'Наклон вперёд сидя', desc: 'Сидя на стуле, скользить руками к коленям, делая мягкий наклон вперёд, затем вернуться. Повторить 6 раз.', base: 45 },
      { no: 4, title: 'Отведение ноги назад', desc: 'Стоя, руки на поясе, поочерёдно отводить прямую ногу назад. Повторить по 6 раз на каждую ногу.', base: 50 },
      { no: 5, title: 'Вращение кистями', desc: 'Сидя на стуле, руки вытянуты вперёд. Вращать кистями по кругу в одну и другую сторону. Повторить по 10 раз.', base: 45 },
      { no: 6, title: 'Потягивание вверх', desc: 'Стоя, поднять обе руки вверх, потянуться всем телом вверх и вернуться. Повторить 6 раз.', base: 40 }
    ]
  }
];



const STATUSS = [
  { min: 0, max: 3, name: 'Новичок', male: 'assets/status/male_1.png', female: 'assets/status/female_1.png', next: 4 },
  { min: 4, max: 6, name: 'Набираю обороты', male: 'assets/status/male_2.png', female: 'assets/status/female_2.png', next: 7 },
  { min: 7, max: 9, name: 'Бодрячком!', male: 'assets/status/male_3.png', female: 'assets/status/female_3.png', next: 10 },
  { min: 10, max: 13, name: 'В отличной форме', male: 'assets/status/male_4.png', female: 'assets/status/female_4.png', next: 14 },
  { min: 14, max: Infinity, name: 'Гуру гимнастики', male: 'assets/status/male_5.png', female: 'assets/status/female_5.png', next: null },
];

const EXERCISE_SPEECH = {
  'complex1_1': 'Упражнение 1. Повороты головы́. Сидя на стуле, плавно поворачивайте голову вправо и влево. Повторите по четыре раза в каждую сторону.',
  'complex1_2': 'Упражнение 2. Круговые движения плечами. Стоя, выполняйте круговые движения плечами вперёд и назад. Повторите по восемь раз.',
  'complex1_3': 'Упражнение 3. Повороты корпу́са. Сидя на стуле, руки на поясе, плавно поворачивайте корпус вправо и влево. Повторите по четыре раза в каждую сторону.',
  'complex1_4': 'Упражнение 4. Наклоны в стороны. Стоя, руки на поясе, выполняйте наклоны корпуса вправо и влево. Повторите по шесть раз в каждую сторону.',
  'complex1_5': 'Упражнение 5. Разгибание ноги. Сидя на стуле, поочерёдно выпрямляйте ногу вперёд. Повторите по шесть раз на каждую ногу.',
  'complex1_6': 'Упражнение 6. Подъём на носки́. Стоя, поднимайтесь на носки́ и плавно опускайтесь. Повторите десять раз.',
  'complex2_1': 'Упражнение 1. Наклоны головы́ вперёд и назад. Сидя на стуле, наклоните голову вперёд, затем слегка назад. Повторите по четыре раза.',
  'complex2_2': 'Упражнение 2. Подъём рук вверх. Стоя, поднимите обе руки вверх, потянитесь, затем опустите руки вниз. Повторите шесть раз.',
  'complex2_3': 'Упражнение 3. Сведение лопаток. Сидя на стуле, руки на поясе или вдоль тела. Отведите плечи назад, сведите лопатки. Повторите восемь раз.',
  'complex2_4': 'Упражнение 4. Полуприседания. Стоя, ноги на ширине плеч, руки вперёд. Выполните комфортные полуприседания. Повторите восемь раз.',
  'complex2_5': 'Упражнение 5. Перекаты стоп. Сидя на стуле, попеременно поднимайте носки́ вверх, затем пятки. Повторите восемь раз.',
  'complex2_6': 'Упражнение 6. Шаг на месте. Идите на месте, умеренно поднимая коле́ни. Повторите по десять раз на каждую ногу.',
  'complex3_1': 'Упражнение 1. Наклоны головы́ в стороны. Сидя на стуле, плавно наклоняйте голову вправо и влево. Повторите по четыре раза в каждую сторону.',
  'complex3_2': 'Упражнение 2. Махи руками. Стоя, выполняйте махи прямыми руками вперёд и назад в комфортной амплитуде. Повторите восемь раз.',
  'complex3_3': 'Упражнение 3. Прогиб и округление спины. Сидя на стуле, плавно прогибайте спину, раскрывая грудь, затем округляйте её. Повторите шесть раз.',
  'complex3_4': 'Упражнение 4. Повороты корпу́са. Стоя, руки на поясе, плавно поворачивайте корпус вправо и влево. Повторите по шесть раз в каждую сторону.',
  'complex3_5': 'Упражнение 5. Круговые движения стопо́й. Сидя на стуле, поочерёдно выполняйте круговые движения одной стопо́й в голеносто́пе, затем другой. Повторите по восемь раз.',
  'complex3_6': 'Упражнение 6. Подъём коле́ней. Стоя, поочерёдно поднимайте коле́ни вверх на месте. Повторите по десять раз на каждую ногу.',
  'complex4_1': 'Упражнение 1. Наклоны в стороны сидя. Сидя на стуле, одна рука на поясе, другая поднята вверх. Наклоняйтесь вправо и влево. Повторите по четыре раза.',
  'complex4_2': 'Упражнение 2. Сгибание рук. Стоя, сгибайте и разгибайте руки в локтях. Повторите десять раз.',
  'complex4_3': 'Упражнение 3. Наклон вперёд сидя. Сидя на стуле, скользите руками к коле́ням, делая мягкий наклон вперёд, затем вернитесь. Повторите шесть раз.',
  'complex4_4': 'Упражнение 4. Отведение ноги назад. Стоя, руки на поясе, поочерёдно отводите прямую ногу назад. Повторите по шесть раз на каждую ногу.',
  'complex4_5': 'Упражнение 5. Вращение кистями. Сидя на стуле, руки вытянуты вперёд. Вращайте кистями по кругу в одну и другую сторону. Повторите по десять раз.',
  'complex4_6': 'Упражнение 6. Потягивание вверх. Стоя, поднимите обе руки вверх, потянитесь всем телом вверх и вернитесь. Повторите шесть раз.',
};

const DEFAULT_MUSIC_SRC = 'assets/audio/default-background.mp3';

const ALT_MUSIC_SRC = 'assets/audio/alt-background.mp3';

const durationModes = {
  short: 0.8,
  normal: 1,
  long: 1.28,
};

const defaultState = () => ({
  profile: { gender: 'male' },
  settings: { music: true, musicVolume: 45, musicPreset: 'preset1', customMusicData: null, customMusicName: '', autoVoice: true, durationMode: 'normal' },
  progress: {
    reputation: 0,
    stars: 0,
    level: 1,
    streak: 0,
    bestStreak: 0,
    completedComplexCount: 0,
    activeDays: 0,
    lastActiveDate: null,
    lastCompletedComplexName: null,
    completedDays: {},
    completedExercisesByDay: {},
    statusScore: 0,
    inactivityStreak: 0,
    processedThroughDate: null,
  }
});

let state = loadState();
let deferredPrompt = null;
let activeScreen = 'home';
let currentComplexId = null;
let activeExercise = null;
let exerciseTimerId = null;
let exerciseTimeLeft = 0;
let ambientEngine = null;
let audioContext = null;
let toastTimer = null;
const THEME_META_COLORS = { light: '#1274d2', dark: '#0f1724' };


function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return defaultState();
    return deepMerge(defaultState(), JSON.parse(saved));
  } catch {
    return defaultState();
  }
}

function deepMerge(base, patch) {
  const output = { ...base };
  Object.keys(patch || {}).forEach((key) => {
    if (patch[key] && typeof patch[key] === 'object' && !Array.isArray(patch[key])) {
      output[key] = deepMerge(base[key] || {}, patch[key]);
    } else {
      output[key] = patch[key];
    }
  });
  return output;
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function ensureDecay() { recomputeProgress(); }

function dayDiff(fromISO, toISO) {
  const a = new Date(fromISO + 'T00:00:00');
  const b = new Date(toISO + 'T00:00:00');
  return Math.round((b - a) / 86400000);
}

function computeLevel(reputation) {
  return Math.max(1, Math.floor(reputation / 40) + 1);
}

function calculateExerciseDuration(base) {
  const mode = state.settings.durationMode || 'normal';
  return Math.max(20, Math.round(base * (durationModes[mode] || 1)));
}


function getStatusByScore(score) {
  return STATUSS.find((status) => score >= status.min && score <= status.max) || STATUSS[0];
}

function getStatusIndexByScore(score) {
  return STATUSS.findIndex((status) => score >= status.min && score <= status.max);
}

function getNextStatusHint(score) {
  const status = getStatusByScore(score);
  if (!status.next) return 'Максимальный статус достигнут';
  const left = Math.max(0, status.next - score);
  const word = left === 1 ? 'день' : (left >= 2 && left <= 4 ? 'дня' : 'дней');
  return `До следующего статуса: ещё ${left} активных ${word}`;
}

function downgradeStatusScore(score) {
  const idx = getStatusIndexByScore(score);
  if (idx <= 0) return 0;
  return STATUSS[idx - 1].min;
}

function getStatusAvatarSrc(gender, score) {
  const status = getStatusByScore(score);
  return gender === 'female' ? status.female : status.male;
}

function eachDateInclusive(startISO, endISO) {
  const out = [];
  let current = new Date(startISO + 'T00:00:00');
  const end = new Date(endISO + 'T00:00:00');
  while (current <= end) {
    out.push(current.toISOString().slice(0, 10));
    current.setDate(current.getDate() + 1);
  }
  return out;
}

function getLastCompletedComplexName(dayISO) {
  const list = state.progress.completedDays?.[dayISO] || [];
  const lastId = list[list.length - 1];
  return COMPLEXES.find((c) => c.id === lastId)?.title || '—';
}

function recomputeProgress() {
  const p = state.progress;
  const dayMap = p.completedDays || {};
  const activeDates = Object.keys(dayMap).filter((day) => Array.isArray(dayMap[day]) && dayMap[day].length > 0).sort();
  p.activeDays = activeDates.length;
  p.completedComplexCount = activeDates.reduce((sum, day) => sum + dayMap[day].length, 0);
  p.reputation = p.completedComplexCount * 10;
  p.stars = p.completedComplexCount;
  p.lastActiveDate = activeDates.length ? activeDates[activeDates.length - 1] : null;
  p.lastCompletedComplexName = p.lastActiveDate ? getLastCompletedComplexName(p.lastActiveDate) : null;

  let bestStreak = 0;
  let running = 0;
  let prevDay = null;
  activeDates.forEach((day) => {
    if (prevDay && dayDiff(prevDay, day) === 1) running += 1;
    else running = 1;
    bestStreak = Math.max(bestStreak, running);
    prevDay = day;
  });
  p.bestStreak = bestStreak;
  if (!p.lastActiveDate) {
    p.streak = 0;
  } else {
    const gap = dayDiff(p.lastActiveDate, todayISO());
    p.streak = gap <= 1 ? running : 0;
  }

  let statusScore = 0;
  let inactivity = 0;
  if (activeDates.length) {
    const firstDay = activeDates[0];
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayISO = yesterday.toISOString().slice(0, 10);
    if (firstDay <= yesterdayISO) {
      eachDateInclusive(firstDay, yesterdayISO).forEach((day) => {
        if ((dayMap[day] || []).length > 0) {
          statusScore += 1;
          inactivity = 0;
        } else {
          inactivity += 1;
          while (inactivity >= 3) {
            statusScore = downgradeStatusScore(statusScore);
            inactivity -= 3;
          }
        }
      });
    }
    if ((dayMap[todayISO()] || []).length > 0) {
      statusScore += 1;
      inactivity = 0;
    }
  }
  p.statusScore = statusScore;
  p.inactivityStreak = inactivity;
  p.processedThroughDate = todayISO();
}

function getExerciseSpeechText(exercise) {
  return EXERCISE_SPEECH[`${exercise.complexId}_${exercise.no}`] || `Упражнение ${exercise.no}. ${exercise.title}. ${exercise.desc}`;
}


function getExercisePreviewPath(complexId, exerciseNo) {
  return `assets/exercises/${complexId}_${exerciseNo}.jpg`;
}

function buildExercisePreview(complex, exercise) {
  const previewPath = getExercisePreviewPath(complex.id, exercise.no);
  return `
    <div class="exercise-preview-wrap">
      <div class="exercise-preview-card">
        <img class="exercise-preview-image" src="${previewPath}" alt="${exercise.title}" loading="eager" decoding="async" />
      </div>
      <div class="demo-caption">Фрагмент карточки комплекса с наглядным выполнением упражнения</div>
    </div>`;
}

function init() {
  ensureDecay();
  bindEvents();
  renderComplexes();
  renderAll();
  restoreAudioSettings();
  registerSW();
}

function bindEvents() {
  document.querySelectorAll('.nav-btn').forEach((btn) => btn.addEventListener('click', () => switchScreen(btn.dataset.screen)));
  document.querySelectorAll('[data-nav="complexes"]').forEach((btn) => btn.addEventListener('click', () => switchScreen('complexes')));
  document.querySelectorAll('[data-nav="info"]').forEach((btn) => btn.addEventListener('click', () => switchScreen('info')));
  document.getElementById('infoBtn').addEventListener('click', () => switchScreen('info'));
  document.getElementById('avatarHeroWrap').addEventListener('click', openAvatarPreview);
  document.querySelectorAll('[data-music-preset]').forEach((btn) => btn.addEventListener('click', () => setMusicPreset(btn.dataset.musicPreset)));
  document.getElementById('musicVolumeInput').addEventListener('input', onMusicVolumeChange);
  document.getElementById('musicVolumeInput').addEventListener('change', onMusicVolumeChange);
  document.getElementById('customMelodyInput').addEventListener('change', onCustomMelodyUpload);
  document.getElementById('clearCustomMelodyBtn').addEventListener('click', clearCustomMelody);
  document.getElementById('musicToggle').addEventListener('change', onMusicToggle);
  document.getElementById('autoVoiceToggle').addEventListener('change', (e) => {
    state.settings.autoVoice = e.target.checked;
    saveState();
  });
  document.querySelectorAll('.duration-pill[data-duration-mode]').forEach((btn) => btn.addEventListener('click', () => {
    state.settings.durationMode = btn.dataset.durationMode;
    saveState();
    renderAll();
    if (currentComplexId) openComplex(currentComplexId);
  }));
  document.getElementById('resetAllBtn').addEventListener('click', () => {
    if (!confirm('Сбросить весь локальный прогресс на этом устройстве?')) return;
    state = defaultState();
    saveState();
    renderAll();
    renderComplexes();
    showToast('Прогресс полностью сброшен.');
  });
  document.getElementById('resetDayBtn').addEventListener('click', resetTodayMark);
  document.querySelectorAll('[data-close-modal="complex"]').forEach((el) => el.addEventListener('click', closeComplexModal));
  document.querySelectorAll('[data-close-modal="avatar"]').forEach((el) => el.addEventListener('click', closeAvatarPreview));
  document.querySelectorAll('[data-gender]').forEach((btn) => btn.addEventListener('click', () => setGender(btn.dataset.gender)));
  document.getElementById('exerciseCloseBtn').addEventListener('click', cancelExercise);
  document.getElementById('exportBtn').addEventListener('click', exportState);
  document.getElementById('importInput').addEventListener('change', importState);
  const installBtn = document.getElementById('installBtn');
  if (installBtn) installBtn.addEventListener('click', installApp);
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    if (installBtn) installBtn.classList.remove('hidden');
    const hint = document.getElementById('installHint');
    if (hint) hint.textContent = 'Можно установить приложение на главный экран телефона.';
  });
}

function registerSW() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }
}

function switchScreen(screen) {
  activeScreen = screen;
  document.querySelectorAll('.screen').forEach((s) => s.classList.toggle('active', s.id === `screen-${screen}`));
  document.querySelectorAll('.nav-btn').forEach((b) => b.classList.toggle('active', b.dataset.screen === screen));
}


function openAvatarPreview() {
  const modal = document.getElementById('avatarModal');
  const content = document.getElementById('avatarModalContent');
  const status = getStatusByScore(state.progress.statusScore || 0);
  const src = getStatusAvatarSrc(state.profile.gender || 'male', state.progress.statusScore || 0);
  content.innerHTML = `
    <div class="avatar-preview-content">
      <img src="${src}" alt="${status.name}" class="avatar-preview-image" />
      <div class="avatar-preview-text">
        <div class="eyebrow">Текущий аватар</div>
        <h3>${status.name}</h3>
      </div>
    </div>`;
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
}

function closeAvatarPreview() {
  const modal = document.getElementById('avatarModal');
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
}

function toggleAvatar() {
  switchScreen('settings');
  document.getElementById('avatarSettingsCard')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function setGender(gender) {
  state.profile.gender = gender;
  saveState();
  renderAll();
}



function restoreAudioSettings() {
  document.getElementById('musicToggle').checked = !!state.settings.music;
  document.getElementById('autoVoiceToggle').checked = !!state.settings.autoVoice;
}




function renderAll() {
  recomputeProgress();
  renderHeroAvatar();
  renderMusicSettings();

  const status = getStatusByScore(state.progress.statusScore || 0);
  document.getElementById('heroStatusName').textContent = status.name;
  document.getElementById('nextStatusHint').textContent = getNextStatusHint(state.progress.statusScore || 0);
  document.getElementById('heroActiveDaysValue').textContent = state.progress.activeDays;
  document.getElementById('heroRecordValue').textContent = state.progress.bestStreak;
  document.getElementById('heroComplexesValue').textContent = state.progress.completedComplexCount;

  document.getElementById('activeDaysValue').textContent = state.progress.activeDays;
  document.getElementById('bestStreakValue').textContent = state.progress.bestStreak;
  document.getElementById('complexCountValue').textContent = state.progress.completedComplexCount;
  document.getElementById('progressStatusValue').textContent = status.name;
  document.getElementById('musicVolumeInput').value = state.settings.musicVolume ?? 45;
  document.getElementById('musicVolumeValue').textContent = `${state.settings.musicVolume ?? 45}%`;
  document.getElementById('todayStatus').textContent = getTodayActivityStatusText();

  document.querySelectorAll('.duration-pill[data-duration-mode]').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.durationMode === state.settings.durationMode);
  });
  document.getElementById('musicToggle').checked = !!state.settings.music;
  document.getElementById('autoVoiceToggle').checked = !!state.settings.autoVoice;
  document.querySelectorAll('[data-gender]').forEach((btn) => btn.classList.toggle('active', btn.dataset.gender === (state.profile.gender || 'male')));

  renderCalendar();
  renderComplexes();
}



function renderHeroAvatar() {
  const avatarEl = document.getElementById('avatarHero');
  const src = getStatusAvatarSrc(state.profile.gender || 'male', state.progress.statusScore || 0);
  const status = getStatusByScore(state.progress.statusScore || 0);
  avatarEl.innerHTML = `<img src="${src}" alt="${status.name}" class="hero-avatar-image" />`;
  avatarEl.className = 'hero-avatar image-avatar';
}

function renderAvatarOptions() {
  return;
}

function renderMusicSettings() {
  const nameEl = document.getElementById('customMelodyName');
  const clearBtn = document.getElementById('clearCustomMelodyBtn');
  const customWrap = document.getElementById('customMelodyWrap');
  document.querySelectorAll('[data-music-preset]').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.musicPreset === (state.settings.musicPreset || 'preset1'));
  });
  if (!nameEl || !clearBtn || !customWrap) return;
  const preset = state.settings.musicPreset || 'preset1';
  if (preset === 'custom') {
    customWrap.classList.remove('hidden');
    if (state.settings.customMusicData) {
      nameEl.textContent = `Сейчас используется: ${state.settings.customMusicName || 'своя мелодия'}`;
      clearBtn.classList.remove('hidden');
    } else {
      nameEl.textContent = 'Сначала загрузите свою мелодию.';
      clearBtn.classList.add('hidden');
    }
  } else {
    customWrap.classList.add('hidden');
    const labels = { preset1: 'Сейчас используется Вариант 1.', preset2: 'Сейчас используется Вариант 2.' };
    nameEl.textContent = labels[preset] || 'Сейчас используется мелодия по умолчанию.';
    clearBtn.classList.add('hidden');
  }
}



function setMusicPreset(preset) {
  state.settings.musicPreset = preset;
  saveState();
  renderMusicSettings();
  previewSelectedMusic();
}

function getSelectedMusicSrc() {
  const preset = state.settings.musicPreset || 'preset1';
  if (preset === 'preset2') return ALT_MUSIC_SRC;
  if (preset === 'custom') return state.settings.customMusicData || DEFAULT_MUSIC_SRC;
  return DEFAULT_MUSIC_SRC;
}

function isExerciseFlowOpen() {
  const complexOpen = !document.getElementById('complexModal').classList.contains('hidden');
  const exerciseOpen = !document.getElementById('exerciseModal').classList.contains('hidden');
  return complexOpen || exerciseOpen;
}

let musicPreviewTimer = null;

function previewSelectedMusic() {
  clearTimeout(musicPreviewTimer);
  const wasEnabled = state.settings.music;
  state.settings.music = true;
  startAmbientMusic();
  state.settings.music = wasEnabled;
  musicPreviewTimer = setTimeout(() => {
    if (!isExerciseFlowOpen()) stopAmbientMusic();
  }, 1600);
}

function formatDateShort(iso) {
  const d = new Date(iso + 'T00:00:00');
  return d.toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit' });
}

function hasCompletedToday() {
  const dayData = state.progress.completedDays[todayISO()];
  return Array.isArray(dayData) && dayData.length > 0;
}

function getCompletedComplexIdsForDay(dayISO) {
  const list = state.progress.completedDays?.[dayISO] || [];
  return Array.isArray(list) ? list : [];
}

function getPartialComplexIdsForDay(dayISO) {
  const doneIds = new Set(getCompletedComplexIdsForDay(dayISO));
  const partialMap = state.progress.completedExercisesByDay?.[dayISO] || {};
  return Object.entries(partialMap)
    .filter(([complexId, exercises]) => Array.isArray(exercises) && exercises.length > 0 && !doneIds.has(complexId))
    .map(([complexId]) => complexId);
}

function pluralizeComplex(count) {
  const mod10 = count % 10;
  const mod100 = count % 100;
  if (mod10 === 1 && mod100 !== 11) return 'комплекс';
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return 'комплекса';
  return 'комплексов';
}

function getTodayActivityStatusText() {
  const today = todayISO();
  const completedCount = getCompletedComplexIdsForDay(today).length;
  const partialCount = getPartialComplexIdsForDay(today).length;

  if (completedCount > 0 && partialCount > 0) {
    return `Сегодня выполнено ${completedCount} ${pluralizeComplex(completedCount)}. Не завершено ${partialCount} ${pluralizeComplex(partialCount)}.`;
  }
  if (completedCount > 0) {
    return `Сегодня выполнено ${completedCount} ${pluralizeComplex(completedCount)}. Можно пройти ещё один.`;
  }
  if (partialCount > 0) {
    return `Сегодня есть незавершённые комплексы: ${partialCount}. Чтобы день стал активным, завершите любой комплекс полностью.`;
  }
  return 'Сегодня комплекс ещё не завершён.';
}

function renderComplexes() {
  const list = document.getElementById('complexList');
  list.innerHTML = '';
  const today = todayISO();
  const doneToday = getCompletedComplexIdsForDay(today);
  const partialToday = new Set(getPartialComplexIdsForDay(today));

  COMPLEXES.forEach((complex) => {
    const isDoneToday = doneToday.includes(complex.id);
    const isPartial = partialToday.has(complex.id);
    const card = document.createElement('button');
    card.className = 'complex-card';
    card.innerHTML = `
      <div class="complex-thumb"><img src="${complex.image}" alt="${complex.title}" /></div>
      <div class="complex-meta compact-meta">
        <div class="badge-row badge-row-complexes">
          <div class="badge">6 упражнений</div>
          <div class="badge">7–10 минут</div>
          ${isDoneToday ? '<div class="badge done">Выполнен сегодня</div>' : ''}
          ${isPartial ? '<div class="badge pending">Не завершён</div>' : ''}
        </div>
      </div>`;
    card.addEventListener('click', () => openComplex(complex.id));
    list.appendChild(card);
  });
}

function openComplex(id) {
  currentComplexId = id;
  const complex = COMPLEXES.find((c) => c.id === id);
  const modal = document.getElementById('complexModal');
  const content = document.getElementById('complexModalContent');
  const doneMap = getExercisesDoneForDay(id, todayISO());

  content.innerHTML = `
    <div class="complex-modal-header">
      <img src="${complex.image}" alt="${complex.title}" />
      <div class="complex-overlay">
        <div class="eyebrow light">Комплекс ${complex.number}</div>
        <h2 style="margin:6px 0 0;">${complex.title}</h2>
        <div class="tiny" style="opacity:.9; margin-top:8px;">Нажмите на упражнение — оно откроется, а таймер запустится после кнопки «Старт».</div>
      </div>
    </div>
    <div class="exercise-list">
      ${complex.exercises.map((exercise, index) => `
        <button class="exercise-item ${doneMap.includes(exercise.no) ? 'done' : ''}" data-exercise-open="${exercise.no}" style="animation-delay:${index * 60}ms;">
          <div class="exercise-number">${exercise.no}</div>
          <div>
            <div class="exercise-item-title">${exercise.title}</div>
            <div class="exercise-item-desc">${exercise.desc}</div>
          </div>
          <div class="item-time">${calculateExerciseDuration(exercise.base)}с</div>
        </button>
      `).join('')}
    </div>
  `;
  content.querySelectorAll('[data-exercise-open]').forEach((btn) => {
    btn.addEventListener('click', () => openExercise(id, Number(btn.dataset.exerciseOpen)));
  });
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
  if (state.settings.music) startAmbientMusic();
}

function closeComplexModal() {
  document.getElementById('complexModal').classList.add('hidden');
  document.getElementById('complexModal').setAttribute('aria-hidden', 'true');
  stopAmbientMusic();
}

function getExercisesDoneForDay(complexId, dayISO) {
  const day = state.progress.completedExercisesByDay[dayISO] || {};
  return day[complexId] || [];
}

function markExerciseDone(complexId, exerciseNo) {
  const day = todayISO();
  if (!state.progress.completedExercisesByDay[day]) state.progress.completedExercisesByDay[day] = {};
  if (!state.progress.completedExercisesByDay[day][complexId]) state.progress.completedExercisesByDay[day][complexId] = [];
  const arr = state.progress.completedExercisesByDay[day][complexId];
  if (!arr.includes(exerciseNo)) arr.push(exerciseNo);
  arr.sort((a, b) => a - b);
}

function openExercise(complexId, exerciseNo) {
  const complex = COMPLEXES.find((c) => c.id === complexId);
  const exercise = complex.exercises.find((e) => e.no === exerciseNo);
  const duration = calculateExerciseDuration(exercise.base);
  activeExercise = { complexId, exerciseNo, total: duration, started: false, paused: false };
  exerciseTimeLeft = duration;
  document.getElementById('exerciseModalContent').innerHTML = `
    <div class="exercise-inner">
      <div class="exercise-badge">Упражнение ${exercise.no} из 6</div>
      ${buildExercisePreview(complex, exercise)}
      <h3 class="exercise-title">${exercise.title}</h3>
      <p class="exercise-desc">${exercise.desc}</p>
      <div id="timerCircle" class="timer-circle">
        <div class="timer-circle-inner">
          <div id="timerSeconds" class="timer-seconds">${exerciseTimeLeft}</div>
          <div class="timer-label">секунд</div>
        </div>
      </div>
      <div class="hint-box">Сначала посмотрите карточку упражнения. Когда будете готовы, нажмите «Старт».</div>
      <div id="exerciseStatus" class="status-line">Таймер ещё не запущен. Нажмите кнопку ниже.</div>
      <div class="exercise-actions exercise-actions-3">
        <button id="startExerciseBtn" class="primary-btn">Старт</button>
        <button id="pauseExerciseBtn" class="secondary-btn" disabled>Пауза</button>
        <button id="restartExerciseBtn" class="secondary-btn" disabled>Заново</button>
      </div>
    </div>
  `;
  document.getElementById('exerciseModal').classList.remove('hidden');
  document.getElementById('exerciseModal').setAttribute('aria-hidden', 'false');
  document.getElementById('startExerciseBtn').addEventListener('click', startExerciseCountdown);
  document.getElementById('pauseExerciseBtn').addEventListener('click', togglePauseExercise);
  document.getElementById('restartExerciseBtn').addEventListener('click', restartExercise);

  updateTimerUI(duration, duration, 'Сначала прочитайте описание и нажмите «Старт».');
  if (state.settings.autoVoice) {
    speakText(getExerciseSpeechText({ ...exercise, complexId }));
  }
}

function startExerciseCountdown() {
  if (!activeExercise) return;
  clearInterval(exerciseTimerId);
  activeExercise.started = true;
  activeExercise.paused = false;
  exerciseTimeLeft = activeExercise.total;
  const startBtn = document.getElementById('startExerciseBtn');
  const pauseBtn = document.getElementById('pauseExerciseBtn');
  const restartBtn = document.getElementById('restartExerciseBtn');
  if (startBtn) startBtn.disabled = true;
  if (pauseBtn) pauseBtn.disabled = false;
  if (restartBtn) restartBtn.disabled = false;
  playBell('start');
  if (state.settings.music) startAmbientMusic();
  updateTimerUI(exerciseTimeLeft, activeExercise.total, 'Выполняйте упражнение в комфортном темпе.');
  startExerciseTimer(activeExercise.total);
}

function startExerciseTimer(totalDuration) {
  clearInterval(exerciseTimerId);
  exerciseTimerId = setInterval(() => {
    if (!activeExercise || !activeExercise.started || activeExercise.paused) return;
    exerciseTimeLeft -= 1;
    updateTimerUI(exerciseTimeLeft, totalDuration, exerciseTimeLeft > 3 ? 'Выполняйте упражнение.' : 'Финиш через несколько секунд.');
    if (exerciseTimeLeft <= 0) {
      clearInterval(exerciseTimerId);
      finishExercise();
    }
  }, 1000);
}

function updateTimerUI(remaining, total, statusText) {
  const secEl = document.getElementById('timerSeconds');
  const circle = document.getElementById('timerCircle');
  const status = document.getElementById('exerciseStatus');
  if (!secEl || !circle || !status) return;
  secEl.textContent = Math.max(0, remaining);
  const progress = ((total - remaining) / total) * 360;
  circle.style.setProperty('--progress', `${progress}deg`);
  status.textContent = statusText;
}

function finishExercise() {
  if (!activeExercise) return;
  playBell('finish');
  stopSpeaking();
  markExerciseDone(activeExercise.complexId, activeExercise.exerciseNo);
  saveState();
  const complex = COMPLEXES.find((c) => c.id === activeExercise.complexId);
  const done = getExercisesDoneForDay(activeExercise.complexId, todayISO());
  updateTimerUI(0, 1, 'Упражнение завершено.');
  const status = document.getElementById('exerciseStatus');
  if (status) status.textContent = 'Упражнение завершено. Карточка закроется автоматически.';

  setTimeout(() => {
    closeExerciseModal();
    openComplex(activeExercise.complexId);
    if (done.length === complex.exercises.length) {
      completeComplex(activeExercise.complexId);
    } else {
      showToast(`Упражнение ${activeExercise.exerciseNo} завершено.`);
    }
    activeExercise = null;
  }, 1250);
}

function togglePauseExercise() {
  if (!activeExercise || !activeExercise.started) return;
  activeExercise.paused = !activeExercise.paused;
  const pauseBtn = document.getElementById('pauseExerciseBtn');
  if (pauseBtn) pauseBtn.textContent = activeExercise.paused ? 'Продолжить' : 'Пауза';
  const status = document.getElementById('exerciseStatus');
  if (status) status.textContent = activeExercise.paused ? 'Пауза. Нажмите «Продолжить».' : 'Выполняйте упражнение.';
  if (activeExercise.paused) stopSpeaking();
}

function restartExercise() {
  if (!activeExercise) return;
  clearInterval(exerciseTimerId);
  activeExercise.started = false;
  activeExercise.paused = false;
  exerciseTimeLeft = activeExercise.total;
  const startBtn = document.getElementById('startExerciseBtn');
  const pauseBtn = document.getElementById('pauseExerciseBtn');
  const restartBtn = document.getElementById('restartExerciseBtn');
  if (startBtn) startBtn.disabled = false;
  if (pauseBtn) {
    pauseBtn.disabled = true;
    pauseBtn.textContent = 'Пауза';
  }
  if (restartBtn) restartBtn.disabled = true;
  updateTimerUI(exerciseTimeLeft, activeExercise.total, 'Таймер сброшен. Нажмите «Старт», когда будете готовы.');
}

function cancelExercise() {
  clearInterval(exerciseTimerId);
  stopSpeaking();
  closeExerciseModal();
  showToast('Упражнение закрыто. Можно открыть и запустить снова.');
  activeExercise = null;
}

function closeExerciseModal() {
  document.getElementById('exerciseModal').classList.add('hidden');
  document.getElementById('exerciseModal').setAttribute('aria-hidden', 'true');
  clearInterval(exerciseTimerId);
}


function completeComplex(complexId) {
  const day = todayISO();
  if (!state.progress.completedDays[day]) state.progress.completedDays[day] = [];
  const dayList = state.progress.completedDays[day];
  const complex = COMPLEXES.find((c) => c.id === complexId);
  if (!dayList.includes(complexId)) {
    dayList.push(complexId);
    state.progress.lastCompletedComplexName = complex.title;
  }
  saveState();
  renderAll();
  showToast(`Комплекс завершён: ${complex.title}`);
}

function renderCalendar() {
  const grid = document.getElementById('calendarGrid');
  grid.innerHTML = '';
  const today = new Date();
  for (let offset = 29; offset >= 0; offset -= 1) {
    const d = new Date(today);
    d.setDate(today.getDate() - offset);
    const iso = d.toISOString().slice(0, 10);
    const active = (state.progress.completedDays[iso] || []).length > 0;
    const cell = document.createElement('div');
    cell.className = `calendar-day ${active ? 'active' : ''} ${iso === todayISO() ? 'today' : ''}`;
    cell.innerHTML = `<strong>${String(d.getDate()).padStart(2, '0')}</strong><span>${d.toLocaleDateString('ru-RU', { month: 'short' }).replace('.', '')}</span>`;
    grid.appendChild(cell);
  }
}

async function installApp() {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  await deferredPrompt.userChoice.catch(() => null);
  deferredPrompt = null;
  document.getElementById('installBtn').classList.add('hidden');
}

function exportState() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `gym-progress-${todayISO()}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function importState(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      state = deepMerge(defaultState(), JSON.parse(reader.result));
          saveState();
      renderAll();
      showToast('Данные успешно импортированы.');
    } catch {
      showToast('Не удалось импортировать файл.');
    }
  };
  reader.readAsText(file, 'utf-8');
  event.target.value = '';
}

function resetTodayMark() {
  const day = todayISO();
  if (!state.progress.completedDays[day] && !state.progress.completedExercisesByDay[day]) {
    showToast('Сегодня ещё нет сохранённой активности.');
    return;
  }
  delete state.progress.completedDays[day];
  delete state.progress.completedExercisesByDay[day];
  if (state.progress.lastActiveDate === day) {
    state.progress.lastActiveDate = null;
    state.progress.streak = 0;
  }
  saveState();
  renderAll();
  showToast('Отметка за сегодня сброшена.');
}

function onMusicToggle(e) {
  state.settings.music = e.target.checked;
  saveState();
  if (state.settings.music && currentComplexId && !document.getElementById('complexModal').classList.contains('hidden')) {
    startAmbientMusic();
  } else {
    stopAmbientMusic();
  }
}

function onMusicVolumeChange(e) {
  state.settings.musicVolume = Number(e.target.value);
  document.getElementById('musicVolumeValue').textContent = `${state.settings.musicVolume}%`;
  saveState();
  if (ambientEngine?.audio) {
    ambientEngine.audio.volume = Math.max(0, Math.min(1, state.settings.musicVolume / 100));
  }
  previewSelectedMusic();
}


function onCustomMelodyUpload(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  if (!file.type.startsWith('audio/')) {
    showToast('Выберите аудиофайл.');
    event.target.value = '';
    return;
  }
  if (file.size > 2 * 1024 * 1024) {
    showToast('Файл слишком большой. Лучше до 2 МБ.');
    event.target.value = '';
    return;
  }
  const reader = new FileReader();
  reader.onload = () => {
    state.settings.customMusicData = reader.result;
    state.settings.customMusicName = file.name;
    state.settings.musicPreset = 'custom';
    saveState();
    renderMusicSettings();
    previewSelectedMusic();
    showToast('Своя мелодия загружена.');
  };
  reader.onerror = () => showToast('Не удалось загрузить мелодию.');
  reader.readAsDataURL(file);
  event.target.value = '';
}

function clearCustomMelody() {
  state.settings.customMusicData = null;
  state.settings.customMusicName = '';
  if (state.settings.musicPreset === 'custom') state.settings.musicPreset = 'preset1';
  saveState();
  renderMusicSettings();
  previewSelectedMusic();
  showToast('Возвращена предустановленная мелодия.');
}


function ensureAudioContext() {
  if (!audioContext) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    audioContext = new AC();
  }
  if (audioContext.state === 'suspended') audioContext.resume();
  return audioContext;
}

function playBell(type) {
  const ctx = ensureAudioContext();
  if (!ctx) return;
  const now = ctx.currentTime;
  const frequencies = type === 'start' ? [740, 988] : [988, 740, 523];
  frequencies.forEach((freq, i) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.0001, now + i * 0.12);
    gain.gain.exponentialRampToValueAtTime(0.15, now + i * 0.12 + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.12 + 0.18);
    osc.connect(gain).connect(ctx.destination);
    osc.start(now + i * 0.12);
    osc.stop(now + i * 0.12 + 0.2);
  });
}

function startAmbientMusic() {
  if (!state.settings.music) return;
  const src = getSelectedMusicSrc();
  const volume = Math.max(0, Math.min(1, (state.settings.musicVolume ?? 45) / 100));
  if (ambientEngine?.audio && ambientEngine.src === src) {
    ambientEngine.audio.volume = volume;
    ambientEngine.audio.play().catch(() => null);
    return;
  }
  stopAmbientMusic();
  const audio = new Audio(src);
  audio.loop = true;
  audio.volume = volume;
  audio.play().catch(() => null);
  ambientEngine = { type: 'audio', audio, src };
}

function stopAmbientMusic() {
  clearTimeout(musicPreviewTimer);
  if (!ambientEngine) return;
  if (ambientEngine.audio) {
    ambientEngine.audio.pause();
    ambientEngine.audio.currentTime = 0;
  }
  if (ambientEngine.timers) ambientEngine.timers.forEach(clearTimeout);
  ambientEngine = null;
}

function stopSpeaking() {
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
}

function speakText(text) {
  if (!state.settings.autoVoice || !('speechSynthesis' in window)) return;
  stopSpeaking();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'ru-RU';
  utterance.rate = 0.9;
  utterance.pitch = 1;
  const voices = window.speechSynthesis.getVoices();
  const ruVoice = chooseFemaleRussianVoice(voices);
  if (ruVoice) utterance.voice = ruVoice;
  utterance.pitch = 1.02;
  window.speechSynthesis.speak(utterance);
}
function chooseFemaleRussianVoice(voices) {
  const ruVoices = voices.filter((v) => v.lang?.toLowerCase().startsWith('ru'));
  const femaleHints = ['female', 'жен', 'alena', 'алена', 'irina', 'ирина', 'milena', 'милена', 'katya', 'катя', 'oksana', 'оксана', 'yandex'];
  return ruVoices.find((v) => femaleHints.some((hint) => v.name?.toLowerCase().includes(hint))) || ruVoices[0] || voices[0];
}
window.speechSynthesis?.addEventListener?.('voiceschanged', () => {});

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.remove('hidden');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.add('hidden'), 2500);
}

init();
