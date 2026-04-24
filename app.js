const STORAGE_KEY = 'gymAppState_v8';
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

const durationModes = {
  short: 0.8,
  normal: 1,
  long: 1.28,
};

const defaultState = () => ({
  profile: { avatar: 'male' },
  settings: { music: false, voice: true, autoVoice: true, durationMode: 'normal' },
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

function ensureDecay() {
  const last = state.progress.lastActiveDate;
  if (!last) return;
  const diff = dayDiff(last, todayISO());
  if (diff <= 1) return;
  const missed = diff - 1;
  state.progress.streak = 0;
  state.progress.stars = Math.max(0, state.progress.stars - Math.min(3, missed));
  state.progress.reputation = Math.max(0, state.progress.reputation - missed * 2);
  saveState();
}

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
  document.getElementById('avatarToggleBtn').addEventListener('click', toggleAvatar);
  document.getElementById('musicToggle').addEventListener('change', onMusicToggle);
  document.getElementById('voiceToggle').addEventListener('change', (e) => {
    state.settings.voice = e.target.checked;
    saveState();
    renderAll();
  });
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

function toggleAvatar() {
  state.profile.avatar = state.profile.avatar === 'male' ? 'female' : 'male';
  saveState();
  renderAll();
}

function restoreAudioSettings() {
  document.getElementById('musicToggle').checked = !!state.settings.music;
  document.getElementById('voiceToggle').checked = !!state.settings.voice;
  document.getElementById('autoVoiceToggle').checked = !!state.settings.autoVoice;
}


function renderAll() {
  const avatarEl = document.getElementById('avatarHero');
  const isFemale = state.profile.avatar === 'female';
  avatarEl.textContent = isFemale ? '👩‍💼' : '🧑‍💼';
  avatarEl.className = `hero-avatar ${isFemale ? 'female' : 'male'}`;

  document.getElementById('welcomeText').textContent = isFemale ? 'Героиня дня готова!' : 'Герой дня готов!';
  document.getElementById('streakValue').textContent = state.progress.streak;
  document.getElementById('starsValue').textContent = state.progress.stars;
  document.getElementById('levelValue').textContent = state.progress.level;
  document.getElementById('reputationValue').textContent = state.progress.reputation;
  document.getElementById('complexCountValue').textContent = state.progress.completedComplexCount;
  document.getElementById('activeDaysValue').textContent = state.progress.activeDays;
  document.getElementById('bestStreakValue').textContent = state.progress.bestStreak;
  document.getElementById('lastComplexValue').textContent = state.progress.lastCompletedComplexName || '—';
  document.getElementById('lastDateValue').textContent = state.progress.lastActiveDate ? formatDateShort(state.progress.lastActiveDate) : '—';
  document.getElementById('todayStatus').textContent = hasCompletedToday()
    ? 'Сегодня уже есть завершённый комплекс. Можно пройти ещё один.'
    : 'Сегодня комплекс ещё не завершён.';

  document.querySelectorAll('.duration-pill[data-duration-mode]').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.durationMode === state.settings.durationMode);
  });
  document.getElementById('musicToggle').checked = !!state.settings.music;
  document.getElementById('voiceToggle').checked = !!state.settings.voice;
  document.getElementById('autoVoiceToggle').checked = !!state.settings.autoVoice;

  renderCalendar();
  renderComplexes();
}

function formatDateShort(iso) {
  const d = new Date(iso + 'T00:00:00');
  return d.toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit' });
}

function hasCompletedToday() {
  const dayData = state.progress.completedDays[todayISO()];
  return Array.isArray(dayData) && dayData.length > 0;
}

function renderComplexes() {
  const list = document.getElementById('complexList');
  list.innerHTML = '';
  const todayData = state.progress.completedDays[todayISO()] || [];

  COMPLEXES.forEach((complex) => {
    const doneToday = todayData.includes(complex.id);
    const card = document.createElement('button');
    card.className = 'complex-card';
    card.innerHTML = `
      <div class="complex-thumb"><img src="${complex.image}" alt="${complex.title}" /></div>
      <div class="complex-meta">
        <div>
          <h3 class="complex-title">${complex.title}</h3>
          <div class="muted tiny" style="margin-top:6px;">${complex.subtitle}</div>
        </div>
        <div class="badge-row">
          <div class="badge">6 упражнений</div>
          <div class="badge">7–10 минут</div>
          ${doneToday ? '<div class="badge done">Выполнен сегодня</div>' : ''}
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
}

function closeComplexModal() {
  document.getElementById('complexModal').classList.add('hidden');
  document.getElementById('complexModal').setAttribute('aria-hidden', 'true');
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
  if (state.settings.voice && state.settings.autoVoice) {
    speakText(`Упражнение ${exercise.no}. ${exercise.title}. ${exercise.desc}`);
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
  stopAmbientMusic();
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
  stopAmbientMusic();
  document.getElementById('exerciseModal').classList.add('hidden');
  document.getElementById('exerciseModal').setAttribute('aria-hidden', 'true');
  clearInterval(exerciseTimerId);
}

function completeComplex(complexId) {
  const day = todayISO();
  if (!state.progress.completedDays[day]) state.progress.completedDays[day] = [];
  const dayList = state.progress.completedDays[day];
  const firstComplexToday = dayList.length === 0;
  const complex = COMPLEXES.find((c) => c.id === complexId);
  if (!dayList.includes(complexId)) {
    dayList.push(complexId);
    state.progress.completedComplexCount += 1;
    state.progress.reputation += 10;
    state.progress.stars += 1;
    state.progress.lastCompletedComplexName = complex.title;
  }

  if (firstComplexToday) {
    state.progress.activeDays += 1;
    const diff = state.progress.lastActiveDate ? dayDiff(state.progress.lastActiveDate, day) : 1;
    state.progress.streak = diff === 1 ? state.progress.streak + 1 : 1;
    state.progress.bestStreak = Math.max(state.progress.bestStreak, state.progress.streak);
    state.progress.lastActiveDate = day;
  }

  state.progress.level = computeLevel(state.progress.reputation);
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
  if (state.settings.music) startAmbientMusic();
  else stopAmbientMusic();
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
  const ctx = ensureAudioContext();
  if (!ctx || ambientEngine) return;
  ambientEngine = { timers: [] };
  const notes = [261.63, 329.63, 392.0, 329.63];
  let step = 0;
  const loop = () => {
    if (!ambientEngine) return;
    const now = ctx.currentTime;
    const freq = notes[step % notes.length];
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.028, now + 0.3);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.9);
    osc.connect(gain).connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 2.0);
    step += 1;
    const timer = setTimeout(loop, 1800);
    ambientEngine.timers.push(timer);
  };
  loop();
}

function stopAmbientMusic() {
  if (!ambientEngine) return;
  ambientEngine.timers.forEach(clearTimeout);
  ambientEngine = null;
}

function stopSpeaking() {
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
}

function speakText(text) {
  if (!state.settings.voice || !('speechSynthesis' in window)) return;
  stopSpeaking();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'ru-RU';
  utterance.rate = 0.96;
  utterance.pitch = 1;
  const voices = window.speechSynthesis.getVoices();
  const ruVoice = voices.find((v) => v.lang?.toLowerCase().startsWith('ru'));
  if (ruVoice) utterance.voice = ruVoice;
  window.speechSynthesis.speak(utterance);
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
