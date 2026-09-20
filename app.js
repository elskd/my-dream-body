(function () {
  "use strict";

  var KEY = "my-dream-body-v1";
  var today = new Date();
  var iso = function (offset) {
    var d = new Date();
    d.setHours(12, 0, 0, 0);
    d.setDate(d.getDate() + (offset || 0));
    return d.toISOString().slice(0, 10);
  };

  var images = {
    salmon: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=85",
    bowl: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=900&q=85",
    toast: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&w=900&q=85",
    pasta: "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?auto=format&fit=crop&w=900&q=85",
    salad: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85",
    training: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1000&q=85"
  };

  function seed() {
    return {
      profile: { name: "Эля", target: 52, goal: "Плавное снижение веса", calories: 1500, protein: 110, fat: 55, carbs: 145 },
      meals: [
        { id: "m1", name: "Омлет с сыром и авокадо", date: iso(), kcal: 390, p: 27, f: 27, c: 12, eaten: true, image: images.toast },
        { id: "m2", name: "Курица с рисом и овощами", date: iso(), kcal: 430, p: 38, f: 10, c: 46, eaten: true, image: images.bowl },
        { id: "m3", name: "Греческий йогурт с ягодами", date: iso(), kcal: 180, p: 18, f: 4, c: 18, eaten: false, image: images.bowl },
        { id: "m4", name: "Лосось с картофелем", date: iso(), kcal: 470, p: 34, f: 22, c: 34, eaten: false, image: images.salmon }
      ],
      dishes: [
        { id: "d1", name: "Омлет с сыром и авокадо", kcal: 390, p: 27, f: 27, c: 12, tag: "Завтрак", image: images.toast },
        { id: "d2", name: "Курица с рисом и овощами", kcal: 430, p: 38, f: 10, c: 46, tag: "Высокий белок", image: images.bowl },
        { id: "d3", name: "Греческий йогурт с ягодами", kcal: 180, p: 18, f: 4, c: 18, tag: "Перекус", image: images.bowl },
        { id: "d4", name: "Тост с тунцом и авокадо", kcal: 360, p: 31, f: 15, c: 28, tag: "Высокий белок", image: images.toast },
        { id: "d5", name: "Паста с курицей", kcal: 510, p: 35, f: 14, c: 58, tag: "Ужин", image: images.pasta },
        { id: "d6", name: "Салат с тунцом", kcal: 290, p: 30, f: 12, c: 15, tag: "Лёгкий", image: images.salad }
      ],
      products: [
        { id: "p1", name: "Тунец", kcal: 132, p: 29, f: 1, c: 0, tag: "Белок", image: images.salmon },
        { id: "p2", name: "Авокадо", kcal: 160, p: 2, f: 15, c: 9, tag: "Полезные жиры", image: images.toast },
        { id: "p3", name: "Греческий йогурт", kcal: 73, p: 10, f: 2, c: 4, tag: "Белок", image: images.bowl },
        { id: "p4", name: "Рис", kcal: 130, p: 3, f: 0, c: 28, tag: "Углеводы", image: images.bowl }
      ],
      fridge: [
        { id: "p1", have: true }, { id: "p2", have: true }, { id: "p3", have: true }, { id: "p4", have: false }
      ],
      exercises: [
        { id: "e1", name: "Приседания с гантелями", muscle: "Ноги · ягодицы", equipment: "Гантели", sets: 4, reps: 12 },
        { id: "e2", name: "Ягодичный мост", muscle: "Ягодицы", equipment: "Скамья", sets: 4, reps: 12 },
        { id: "e3", name: "Тяга гантели", muscle: "Спина", equipment: "Гантель", sets: 3, reps: 10 },
        { id: "e4", name: "Жим гантелей лёжа", muscle: "Грудь · руки", equipment: "Гантели", sets: 3, reps: 10 }
      ],
      workouts: [
        { id: "w1", name: "Ягодицы + ноги", exerciseIds: ["e1", "e2"], minutes: 45, image: images.training },
        { id: "w2", name: "Верх тела", exerciseIds: ["e3", "e4"], minutes: 35, image: images.training }
      ],
      workoutPlan: [{ id: "wp1", date: iso(), workoutId: "w1", done: false }],
      logs: [
        { id: "l1", exerciseId: "e1", date: iso(-21), weight: 8, reps: 10 },
        { id: "l2", exerciseId: "e1", date: iso(-14), weight: 10, reps: 10 },
        { id: "l3", exerciseId: "e1", date: iso(-7), weight: 12, reps: 10 },
        { id: "l4", exerciseId: "e1", date: iso(), weight: 14, reps: 10 }
      ],
      weights: [{ date: iso(-21), value: 55.1 }, { date: iso(-14), value: 54.5 }, { date: iso(-7), value: 53.7 }, { date: iso(), value: 53.2 }],
      measures: [{ date: iso(-21), waist: 70, hips: 98, chest: 91 }, { date: iso(-14), waist: 69, hips: 97, chest: 90 }, { date: iso(-7), waist: 68, hips: 97, chest: 90 }, { date: iso(), waist: 67, hips: 96, chest: 89 }],
      settings: { nutrition: true, training: true, progress: true }
    };
  }

  var state = null;
  try { state = JSON.parse(localStorage.getItem(KEY) || "null"); } catch (e) { state = null; }
  if (!state || !state.profile || !state.meals || !state.dishes || !state.exercises) state = seed();

  var page = "home";
  var sub = { nutrition: "plan", training: "plan" };

  function esc(v) {
    return String(v == null ? "" : v).replace(/[&<>"']/g, function (x) {
      return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[x];
    });
  }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {}
  }
  function currentMeals() { return state.meals.filter(function (m) { return m.date === iso(); }); }
  function totals() {
    return currentMeals().reduce(function (a, m) {
      if (m.eaten) { a.k += m.kcal; a.p += m.p; a.f += m.f; a.c += m.c; }
      return a;
    }, { k: 0, p: 0, f: 0, c: 0 });
  }
  function pct(a, b) { return Math.max(0, Math.min(100, b ? a / b * 100 : 0)); }
  function navIcon(name) {
    var paths = {
      home: '<path d="M3 10.7 12 3l9 7.7v8.1a1.2 1.2 0 0 1-1.2 1.2h-5.1v-6.1h-5.4V20H4.2A1.2 1.2 0 0 1 3 18.8z"/>',
      food: '<path d="M7 3v7M4.5 3v7M9.5 3v7M7 10v11M16 3v18M16 3c2.2 0 3.5 1.8 3.5 4.1S18.2 11 16 11"/>',
      gym: '<path d="M6 7v10M3.5 9v6M18 7v10M20.5 9v6M6 12h12"/>',
      chart: '<path d="M4 19V9M9.3 19V5M14.7 19v-7M20 19V3"/><path d="M3 21h18"/>',
      user: '<circle cx="12" cy="8" r="3.5"/><path d="M5 21c.7-4 2.9-6 7-6s6.3 2 7 6"/>'
    };
    return '<svg viewBox="0 0 24 24" aria-hidden="true">' + paths[name] + '</svg>';
  }
  function iconButton(icon, label) { return '<button class="iconBtn" title="' + esc(label) + '">' + icon + '</button>'; }

  function shell(content) {
    var items = [
      ["home", "Главная", "home"],
      ["nutrition", "Питание", "food"],
      ["training", "Тренировки", "gym"],
      ["progress", "Прогресс", "chart"],
      ["settings", "Профиль", "user"]
    ].filter(function (x) { return x[0] === "home" || x[0] === "settings" || state.settings[x[0]] !== false; });

    var nav = items.map(function (x) {
      return '<button class="' + (page === x[0] ? "active" : "") + '" onclick="MDB.go(\'' + x[0] + '\')"><span class="navIcon">' + navIcon(x[2]) + '</span><span>' + x[1] + '</span></button>';
    }).join("");

    return '<div class="appShell">' +
      '<aside class="desktopNav"><div class="logo">my dream <b>body</b><i>✦</i></div><div class="navLinks">' + nav + '</div><div class="navQuote"><span>YOUR BODY</span><strong>YOUR<br>PROJECT</strong><small>♡</small></div></aside>' +
      '<main class="pageMain"><header class="topHeader"><div class="searchBox">⌕ <span>Найти в My Dream Body</span></div><div class="headerActions">' + iconButton("♡", "Избранное") + iconButton("♧", "Уведомления") + '<button class="profileMini" onclick="MDB.go(\'settings\')"><span>' + esc(state.profile.name.charAt(0)) + '</span>' + esc(state.profile.name) + '</button></div></header>' +
      '<div class="mobileHeader"><div class="logo">my dream <b>body</b></div><button class="roundIcon">♡</button></div>' +
      content +
      '</main><nav class="mobileNav">' + nav + '<button class="addFloat" onclick="MDB.quickAdd()">＋</button></nav></div>';
  }

  function title(title, subtitle) {
    return '<div class="pageTitle"><div><span class="eyebrow">MY DREAM BODY</span><h1>' + title + ' <em>✦</em></h1><p>' + subtitle + '</p></div><button class="todayPill">' + new Date().toLocaleDateString("ru-RU", { day: "numeric", month: "short" }) + ' <span>⌄</span></button></div>';
  }

  function progressRing(value, max) {
    return '<div class="progressRing" style="--value:' + pct(value, max) + '%"><div><strong>' + Math.max(0, Math.round(max - value)) + '</strong><span>ккал осталось</span></div></div>';
  }

  function macroCard(name, value, max, cls) {
    return '<div class="macroCard ' + cls + '"><div class="macroTop"><span>' + name + '</span><b>' + value + '<small> / ' + max + ' г</small></b></div><div class="macroTrack"><i style="width:' + pct(value, max) + '%"></i></div></div>';
  }

  function home() {
    var t = totals(), p = state.profile, meals = currentMeals(), weight = state.weights[state.weights.length - 1].value;
    var mealRows = meals.map(function (m) {
      return '<div class="mealRow"><img src="' + m.image + '"><div><strong>' + esc(m.name) + '</strong><span>' + m.kcal + ' ккал · Б ' + m.p + ' · Ж ' + m.f + ' · У ' + m.c + '</span></div><button class="mealCheck ' + (m.eaten ? "done" : "") + '" onclick="MDB.eat(\'' + m.id + '\')">' + (m.eaten ? "✓" : "") + '</button></div>';
    }).join("");

    return shell(title("Привет, " + esc(p.name) + "!", "Сегодня не про идеальность. Сегодня — про тебя.") +
      '<section class="panel nutritionSummaryPanel">' +
        '<div class="panelHead"><div><span class="eyebrow">TODAY NUTRITION</span><h3>Съедено сегодня</h3></div><span class="statusDot">● today</span></div>' +
        '<div class="nutritionSummary">' +
          '<div class="calorieSummary"><span>Калории</span><strong>' + t.k + '</strong><small>ккал</small></div>' +
          '<div class="summaryMacros">' +
            '<div class="summaryMacro protein"><span>Белки</span><strong>' + t.p + ' г</strong></div>' +
            '<div class="summaryMacro fat"><span>Жиры</span><strong>' + t.f + ' г</strong></div>' +
            '<div class="summaryMacro carbs"><span>Углеводы</span><strong>' + t.c + ' г</strong></div>' +
          '</div>' +
        '</div>' +
      '</section>' +
      '<section class="dashboardGrid">' +
        '<article class="panel mealPanel"><div class="panelHead"><div><span class="eyebrow">MEALS</span><h3>Питание сегодня</h3></div><button onclick="MDB.go(\'nutrition\')">Все →</button></div>' + mealRows + '<button class="wideAction" onclick="MDB.go(\'nutrition\')">+ Добавить в рацион</button></article>' +
        '<article class="panel workoutPanel"><div class="panelHead"><div><span class="eyebrow">MOVEMENT</span><h3>Тренировка</h3></div><span class="tinyPill">45 MIN</span></div><div class="workoutMini"><img src="' + images.training + '"><div><span>Сегодня</span><h4>Ягодицы + ноги</h4><p>4 упражнения · сила</p><button onclick="MDB.go(\'training\')">Открыть →</button></div></div></article>' +
        '<article class="panel weightPanel"><div class="panelHead"><div><span class="eyebrow">BODY LOG</span><h3>Вес</h3></div><button onclick="MDB.go(\'progress\')">Подробнее →</button></div><div class="weightNumber"><strong>' + weight + '</strong><span>кг</span><b>−1,9 кг</b></div><svg class="spark" viewBox="0 0 520 120" preserveAspectRatio="none"><path d="M5 82 C65 76, 80 62, 130 70 S210 82, 260 57 S350 68, 395 43 S470 45, 515 20"></path></svg></article>' +
      '</section>');
  }
  function nutrition() {
    var tab = sub.nutrition;
    var tabs = [["plan","План"],["kbu","КБЖУ"],["dishes","Блюда"],["products","Продукты"],["fridge","Холодильник"],["shopping","Покупки"]];
    var nav = tabs.map(function (x) { return '<button class="' + (tab === x[0] ? "selected" : "") + '" onclick="MDB.setSub(\'nutrition\',\'' + x[0] + '\')">' + x[1] + '</button>'; }).join("");
    var body = tab === "plan" ? mealPlan() : tab === "kbu" ? kbu() : tab === "dishes" ? cardsLibrary(state.dishes, "Блюда", "dish") : tab === "products" ? cardsLibrary(state.products, "Продукты", "product") : fridge(tab === "shopping");
    return shell(title("Питание", "Собери рацион заранее — и оставь голове меньше решений.") + '<div class="segmented">' + nav + '</div>' + body);
  }

  function mealPlan() {
    var days = [-2,-1,0,1,2,3,4].map(function (n) {
      var d = iso(n), dt = new Date(d), list = state.meals.filter(function (m) { return m.date === d; });
      return '<div class="dayColumn ' + (n === 0 ? "selectedDay" : "") + '"><div class="dayDate"><span>' + dt.toLocaleDateString("ru-RU", { weekday: "short" }) + '</span><b>' + dt.getDate() + '</b></div>' + list.map(function (m) {
        return '<div class="smallMeal"><img src="' + m.image + '"><div><strong>' + esc(m.name) + '</strong><span>' + m.kcal + ' ккал</span></div><button onclick="MDB.eat(\'' + m.id + '\')">' + (m.eaten ? "✓" : "○") + '</button></div>';
      }).join("") + '<button class="plusLine" onclick="MDB.addMealPrompt(\'' + d + '\')">＋ добавить</button></div>';
    }).join("");
    return '<section class="panel plannerPanel"><div class="sectionTop"><div><span class="eyebrow">WEEK PLAN</span><h3>Рацион на неделю</h3></div><button class="primaryBtn" onclick="MDB.addMealPrompt(\'' + iso() + '\')">＋ блюдо</button></div><div class="daysScroller">' + days + '</div></section>';
  }

  function kbu() {
    var t = totals(), p = state.profile;
    return '<section class="kbuHero"><div><span class="eyebrow">TODAY</span><h2>Осталось на сегодня</h2><p>Подбирай еду по цифрам, но не забывай про удовольствие.</p></div><div class="remaining"><strong>' + Math.max(0,p.calories-t.k) + '</strong><span>ккал</span></div></section><div class="fourStats">' +
      [["Белки",p.protein-t.p,p.protein,"г"],["Жиры",p.fat-t.f,p.fat,"г"],["Углеводы",p.carbs-t.c,p.carbs,"г"],["Калории",p.calories-t.k,p.calories,"ккал"]].map(function(x){return '<div><span>'+x[0]+'</span><strong>'+Math.max(0,Math.round(x[1]))+'</strong><small>'+x[3]+' осталось</small><i style="width:'+pct(x[1],x[2])+'%"></i></div>';}).join("") +
      '</div><section class="panel suggestionPanel"><div class="sectionTop"><div><span class="eyebrow">MATCH YOUR MACROS</span><h3>Что можно добавить</h3></div></div>' + state.dishes.map(function(d){return '<div class="suggestion"><img src="'+d.image+'"><div><strong>'+esc(d.name)+'</strong><span>'+d.kcal+' ккал · Б '+d.p+' · Ж '+d.f+' · У '+d.c+'</span></div><button class="primaryBtn" onclick="MDB.addDish(\''+d.id+'\')">＋</button></div>';}).join("") + '</section>';
  }

  function cardsLibrary(list, heading, kind) {
    return '<section class="panel libraryPanel"><div class="sectionTop"><div><span class="eyebrow">YOUR LIBRARY</span><h3>'+heading+'</h3></div><button class="primaryBtn" onclick="MDB.quickAdd(\''+kind+'\')">＋ добавить</button></div><div class="contentCards">'+list.map(function(x){return '<article class="contentCard"><img src="'+x.image+'"><div class="contentBody"><span class="tag">'+esc(x.tag)+'</span><h4>'+esc(x.name)+'</h4><p>'+x.kcal+' ккал · Б '+x.p+' · Ж '+x.f+' · У '+x.c+'</p><button class="outlineBtn" onclick="MDB.addDish(\''+x.id+'\')">В рацион</button></div></article>';}).join("")+'</div></section>';
  }

  function fridge(shopping) {
    var list = state.fridge.map(function(r){var p=state.products.find(function(x){return x.id===r.id;});return p?{r:r,p:p}:null;}).filter(Boolean);
    var have = list.filter(function(x){return x.r.have;});
    var buy = list.filter(function(x){return !x.r.have;});
    return '<section class="fridgeHero"><div><span class="eyebrow">'+(shopping?"SHOPPING LIST":"FRIDGE")+'</span><h2>'+(shopping?"Что нужно купить":"Что есть дома")+'</h2><p>'+(shopping?"Отмечай покупки — они вернутся в холодильник автоматически.":"Следи за базовыми продуктами для своего рациона.")+'</p></div><div class="fridgeBubble">'+(shopping?buy.length:have.length)+'<span>позиций</span></div></section><div class="fridgeGrid"><section class="panel"><div class="sectionTop"><h3>В наличии</h3></div>'+have.map(fridgeRow).join("")+'</section><section class="panel"><div class="sectionTop"><h3>Нужно купить</h3></div>'+buy.map(fridgeRow).join("")+'</section></div>';
  }
  function fridgeRow(x) { return '<div class="fridgeRow"><img src="'+x.p.image+'"><div><strong>'+esc(x.p.name)+'</strong><span>'+x.p.kcal+' ккал · '+esc(x.p.tag)+'</span></div><button onclick="MDB.toggleFridge(\''+x.p.id+'\')">'+(x.r.have?"Есть":"Куплено")+'</button></div>'; }

  function training() {
    var tab=sub.training, tabs=[["plan","План"],["exercises","Упражнения"],["workouts","Мои тренировки"],["progress","Прогресс"]];
    var nav=tabs.map(function(x){return '<button class="'+(tab===x[0]?"selected":"")+'" onclick="MDB.setSub(\'training\',\''+x[0]+'\')">'+x[1]+'</button>';}).join("");
    var body=tab==="plan"?trainPlan():tab==="exercises"?exerciseLibrary():tab==="workouts"?workoutLibrary():trainProgress();
    return shell(title("Тренировки","Сила растёт там, где появляется система.")+'<div class="segmented">'+nav+'</div>'+body);
  }
  function trainPlan() {
    var days=[0,1,2,3,4,5,6].map(function(n){var d=iso(n),dt=new Date(d), items=state.workoutPlan.filter(function(x){return x.date===d;});return '<div class="trainingDay '+(n===0?"selectedDay":"")+'"><div class="dayDate"><span>'+dt.toLocaleDateString("ru-RU",{weekday:"short"})+'</span><b>'+dt.getDate()+'</b></div>'+items.map(function(x){var w=state.workouts.find(function(z){return z.id===x.workoutId;});return '<div class="plannedWorkout"><img src="'+(w?w.image:images.training)+'"><div><strong>'+esc(w?w.name:"Тренировка")+'</strong><span>'+(w?w.minutes:45)+' мин · сила</span></div><button onclick="MDB.doneWorkout(\''+x.id+'\')">'+(x.done?"✓":"○")+'</button></div>';}).join("")+'<button class="plusLine" onclick="MDB.planWorkout(\''+d+'\')">＋ добавить</button></div>';}).join("");
    return '<section class="panel plannerPanel"><div class="sectionTop"><div><span class="eyebrow">WEEK PLAN</span><h3>Расписание тренировок</h3></div><button class="primaryBtn" onclick="MDB.planWorkout(\''+iso()+'\')">＋ тренировка</button></div><div class="daysScroller">'+days+'</div></section>';
  }
  function exerciseLibrary() { return '<section class="panel libraryPanel"><div class="sectionTop"><div><span class="eyebrow">MOVEMENT LIBRARY</span><h3>Упражнения</h3></div><button class="primaryBtn" onclick="MDB.quickAdd(\'exercise\')">＋ добавить</button></div><div class="exerciseCards">'+state.exercises.map(function(e){return '<article><span class="numberCircle">'+(state.exercises.indexOf(e)+1)+'</span><div><span class="tag">'+esc(e.muscle)+'</span><h4>'+esc(e.name)+'</h4><p>'+esc(e.equipment)+' · '+e.sets+' × '+e.reps+'</p></div></article>';}).join("")+'</div></section>'; }
  function workoutLibrary() { return '<section class="panel libraryPanel"><div class="sectionTop"><div><span class="eyebrow">WORKOUTS</span><h3>Мои тренировки</h3></div><button class="primaryBtn" onclick="MDB.quickAdd(\'workout\')">＋ создать</button></div><div class="workoutCards">'+state.workouts.map(function(w){return '<article><img src="'+w.image+'"><div><span class="tag">'+w.minutes+' MIN</span><h4>'+esc(w.name)+'</h4><p>'+w.exerciseIds.length+' упражнения</p></div></article>';}).join("")+'</div></section>'; }
  function trainProgress() { return '<section class="panel"><div class="sectionTop"><div><span class="eyebrow">STRENGTH LOG</span><h3>Прогресс по упражнениям</h3></div><button class="primaryBtn" onclick="MDB.quickAdd(\'log\')">＋ результат</button></div><div class="logRows">'+state.logs.slice().reverse().map(function(l){var e=state.exercises.find(function(x){return x.id===l.exerciseId;});return '<div class="logRow"><div class="numberCircle">↗</div><div><strong>'+esc(e?e.name:"Упражнение")+'</strong><span>'+l.date+'</span></div><b>'+l.weight+' кг × '+l.reps+'</b></div>';}).join("")+'</div></section>'; }

  function progress() {
    var w=state.weights, m=state.measures, current=w[w.length-1].value, start=w[0].value;
    return shell(title("Мой прогресс","Смотри на изменения не только в зеркале.")+'<div class="progressTabs"><button class="active">Неделя</button><button>Месяц</button><button>Год</button></div><section class="progressHero"><div><span class="eyebrow">CURRENT WEIGHT</span><div class="progressBig">'+current+' <small>кг</small></div><p>Изменение с первой записи <b>'+(current-start).toFixed(1)+' кг</b></p></div><div class="miniGoal"><span>Цель</span><strong>'+state.profile.target+' кг</strong><i><b style="width:'+pct(state.profile.target,current-start+current)+'%"></b></i></div></section><div class="bodyStats"><div><span>Талия</span><strong>'+m[m.length-1].waist+' см</strong><small>−3 см</small></div><div><span>Бёдра</span><strong>'+m[m.length-1].hips+' см</strong><small>−2 см</small></div><div><span>Грудь</span><strong>'+m[m.length-1].chest+' см</strong><small>−2 см</small></div></div><section class="panel chartPanel"><div class="sectionTop"><div><span class="eyebrow">WEIGHT JOURNAL</span><h3>Динамика веса</h3></div><button class="primaryBtn" onclick="MDB.quickAdd(\'weight\')">＋ запись</button></div><svg class="bigChart" viewBox="0 0 900 260" preserveAspectRatio="none"><path d="M10 210 C130 200, 150 155, 250 165 S380 190, 480 130 S610 125, 700 75 S810 70, 890 35"></path></svg>'+w.slice().reverse().map(function(x){return '<div class="logRow"><div><strong>'+x.date+'</strong></div><b>'+x.value+' кг</b></div>';}).join("")+'</section><section class="panel"><div class="sectionTop"><div><span class="eyebrow">BODY MEASUREMENTS</span><h3>Объёмы</h3></div><button class="primaryBtn" onclick="MDB.quickAdd(\'measure\')">＋ запись</button></div>'+m.slice().reverse().map(function(x){return '<div class="logRow"><div><strong>'+x.date+'</strong></div><span>Талия '+x.waist+' · Бёдра '+x.hips+' · Грудь '+x.chest+' см</span></div>';}).join("")+'</section>');
  }

  function settings() {
    var p=state.profile;
    return shell(title("Профиль","Настрой пространство под себя.")+'<div class="settingsGrid"><section class="panel profileCard"><div class="avatarLarge">'+esc(p.name.charAt(0))+'</div><span class="eyebrow">MY PROFILE</span><h2>'+esc(p.name)+'</h2><p>'+esc(p.goal)+'</p><form onsubmit="MDB.saveProfile(event)"><label>Имя<input name="name" value="'+esc(p.name)+'"></label><label>Целевой вес<input name="target" type="number" value="'+p.target+'"></label><label>Цель<input name="goal" value="'+esc(p.goal)+'"></label><button class="primaryWide">Сохранить изменения</button></form></section><section class="panel"><div class="sectionTop"><div><span class="eyebrow">DAILY TARGETS</span><h3>Мои цели</h3></div></div><form class="targetForm" onsubmit="MDB.saveTargets(event)"><label>Калории<input name="cal" type="number" value="'+p.calories+'"></label><label>Белки<input name="pro" type="number" value="'+p.protein+'"></label><label>Жиры<input name="fat" type="number" value="'+p.fat+'"></label><label>Углеводы<input name="carb" type="number" value="'+p.carbs+'"></label><button class="primaryWide">Обновить цели</button></form></section><section class="panel"><div class="sectionTop"><div><span class="eyebrow">APP SECTIONS</span><h3>Разделы</h3></div></div>'+["nutrition","training","progress"].map(function(k){return '<div class="settingRow"><span>'+({nutrition:"Питание",training:"Тренировки",progress:"Прогресс"}[k])+'</span><button class="switch '+(state.settings[k]?"on":"")+'" onclick="MDB.toggleSection(\''+k+'\')"><i></i></button></div>';}).join("")+'</section><section class="panel moodPanel"><span class="eyebrow">YOUR SPACE</span><h3>Это приложение — про твою жизнь.</h3><p>Планы, питание, тренировки и прогресс собраны в одном спокойном пространстве.</p><div class="moodOrb">✦</div></section></div>');
  }

  function modal(titleText, fields, onSave) {
    var form='<form id="mdbForm">'+fields.map(function(f){return '<label>'+f.label+(f.type==="select"?'<select name="'+f.name+'">'+f.options.map(function(o){return '<option value="'+esc(o[0])+'">'+esc(o[1])+'</option>';}).join("")+'</select>':'<input name="'+f.name+'" type="'+(f.type||"text")+'" value="'+esc(f.value||"")+'" '+(f.required?"required":"")+'>')+'</label>';}).join("")+'<button class="primaryWide">Сохранить</button></form>';
    document.body.insertAdjacentHTML("beforeend",'<div class="modalShade"><div class="modalBox"><div class="modalTitle"><div><span class="eyebrow">QUICK ADD</span><h2>'+titleText+'</h2></div><button type="button" class="roundIcon" onclick="MDB.closeModal()">×</button></div>'+form+'</div></div>');
    document.getElementById("mdbForm").onsubmit=function(e){e.preventDefault();onSave(new FormData(e.target));closeModal();render();};
  }
  function closeModal(){var x=document.querySelector(".modalShade");if(x)x.remove();}
  function addMealPrompt(date){modal("Добавить блюдо",[{label:"Блюдо",name:"name",required:true},{label:"Дата",name:"date",type:"date",value:date},{label:"Калории",name:"kcal",type:"number",required:true},{label:"Белки",name:"p",type:"number"},{label:"Жиры",name:"f",type:"number"},{label:"Углеводы",name:"c",type:"number"}],function(f){state.meals.push({id:"m"+Date.now(),name:f.get("name"),date:f.get("date"),kcal:+f.get("kcal"),p:+f.get("p")||0,f:+f.get("f")||0,c:+f.get("c")||0,eaten:false,image:images.bowl});save();});}
  function addDish(id){var d=state.dishes.concat(state.products).find(function(x){return x.id===id;});if(d){state.meals.push({id:"m"+Date.now(),name:d.name,date:iso(),kcal:d.kcal,p:d.p,f:d.f,c:d.c,eaten:false,image:d.image});save();render();}}
  function quickAdd(kind){if(kind==="exercise"){modal("Новое упражнение",[{label:"Название",name:"name",required:true},{label:"Группа мышц",name:"muscle"},{label:"Оборудование",name:"equipment"},{label:"Подходы",name:"sets",type:"number"},{label:"Повторения",name:"reps",type:"number"}],function(f){state.exercises.push({id:"e"+Date.now(),name:f.get("name"),muscle:f.get("muscle"),equipment:f.get("equipment"),sets:+f.get("sets")||3,reps:+f.get("reps")||10});save();});return;}
    if(kind==="workout"){modal("Новая тренировка",[{label:"Название",name:"name",required:true},{label:"Длительность, мин",name:"minutes",type:"number"}],function(f){state.workouts.push({id:"w"+Date.now(),name:f.get("name"),minutes:+f.get("minutes")||30,exerciseIds:[],image:images.training});save();});return;}
    if(kind==="log"){modal("Результат",[{label:"Упражнение",name:"exerciseId",type:"select",options:state.exercises.map(function(e){return[e.id,e.name];})},{label:"Вес, кг",name:"weight",type:"number"},{label:"Повторения",name:"reps",type:"number"}],function(f){state.logs.push({id:"l"+Date.now(),exerciseId:f.get("exerciseId"),date:iso(),weight:+f.get("weight"),reps:+f.get("reps")});save();});return;}
    if(kind==="weight"){modal("Новый вес",[{label:"Дата",name:"date",type:"date",value:iso()},{label:"Вес, кг",name:"value",type:"number",required:true}],function(f){state.weights.push({date:f.get("date"),value:+f.get("value")});save();});return;}
    if(kind==="measure"){modal("Новые объёмы",[{label:"Талия, см",name:"waist",type:"number"},{label:"Бёдра, см",name:"hips",type:"number"},{label:"Грудь, см",name:"chest",type:"number"}],function(f){state.measures.push({date:iso(),waist:+f.get("waist"),hips:+f.get("hips"),chest:+f.get("chest")});save();});return;}
    if(kind==="food"||kind==="product"){addMealPrompt(iso());return;}
    if(!kind){addMealPrompt(iso());}
  }
  function planWorkout(date){if(!state.workouts.length)return;modal("Запланировать тренировку",[{label:"Тренировка",name:"workoutId",type:"select",options:state.workouts.map(function(w){return[w.id,w.name];})},{label:"Дата",name:"date",type:"date",value:date}],function(f){state.workoutPlan.push({id:"wp"+Date.now(),date:f.get("date"),workoutId:f.get("workoutId"),done:false});save();});}
  function eat(id){var m=state.meals.find(function(x){return x.id===id;});if(m){m.eaten=!m.eaten;save();render();}}
  function doneWorkout(id){var x=state.workoutPlan.find(function(a){return a.id===id;});if(x){x.done=!x.done;save();render();}}
  function toggleFridge(id){var x=state.fridge.find(function(a){return a.id===id;});if(x){x.have=!x.have;save();render();}}
  function saveProfile(e){e.preventDefault();var f=new FormData(e.target);state.profile.name=f.get("name");state.profile.target=+f.get("target");state.profile.goal=f.get("goal");save();render();}
  function saveTargets(e){e.preventDefault();var f=new FormData(e.target);state.profile.calories=+f.get("cal");state.profile.protein=+f.get("pro");state.profile.fat=+f.get("fat");state.profile.carbs=+f.get("carb");save();render();}
  function toggleSection(k){state.settings[k]=!state.settings[k];save();render();}
  function setSub(k,v){sub[k]=v;render();}
  function go(p){page=p;if(p==="nutrition"&&!sub.nutrition)sub.nutrition="plan";if(p==="training"&&!sub.training)sub.training="plan";render();}
  function render(){var root=document.getElementById("app");if(!root)return;root.innerHTML=page==="home"?home():page==="nutrition"?nutrition():page==="training"?training():page==="progress"?progress():settings();}
  window.MDB={go:go,setSub:setSub,eat:eat,doneWorkout:doneWorkout,toggleFridge:toggleFridge,addDish:addDish,addMealPrompt:addMealPrompt,quickAdd:quickAdd,planWorkout:planWorkout,saveProfile:saveProfile,saveTargets:saveTargets,toggleSection:toggleSection,closeModal:closeModal};
  render();
})();