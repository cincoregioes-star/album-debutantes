const stickers = [
  {
    "id": 1,
    "title": "O Início de Tudo",
    "desc": "O dia em que o mundo ganhou mais cor e a família descobriu o significado de um amor sem limites. O primeiro suspiro, a primeira roupinha e o começo de uma história linda.",
    "type": "Especial Brilhante",
    "img": "figurinhas/01.jpg",
    "label": "FIG. 01"
  },
  {
    "id": 2,
    "title": "Alegria em Bolhas",
    "desc": "Risadas, água espalhada por todo lado e muitas bolhas de sabão! A hora do banho sempre foi o momento de maior diversão e das gargalhadas mais gostosas da casa.",
    "type": "Comum",
    "img": "figurinhas/02.jpg",
    "label": "FIG. 02"
  },
  {
    "id": 3,
    "title": "O Sorriso Banguela",
    "desc": "Aquele clássico sorriso sem dentinhos que derretia o coração de qualquer um. Bastava ela olhar para cima no berço que o dia de todo mundo ficava instantaneamente melhor.",
    "type": "Comum",
    "img": "figurinhas/03.jpg",
    "label": "FIG. 03"
  },
  {
    "id": 4,
    "title": "O Primeiro Grande Bolo",
    "desc": "Completar 1 aninho exige uma comemoração à altura! A regra era clara: quanto mais glacê espalhado pelas mãos, pelo rosto e pelo chão, melhor estava a festa.",
    "type": "Comum",
    "img": "figurinhas/04.jpg",
    "label": "FIG. 04"
  },
  {
    "id": 5,
    "title": "Conquistando o Mundo",
    "desc": "Um passinho de cada vez, com perninhas trêmulas, mas segurando firme nas mãos de quem a guiava. Foi aqui que o mundo começou a ficar pequeno para ela.",
    "type": "Comum",
    "img": "figurinhas/05.jpg",
    "label": "FIG. 05"
  },
  {
    "id": 6,
    "title": "Castelos de Areia",
    "desc": "Sol, mar e muita imaginação. Os primeiros contatos com a natureza renderam castelos de areia (que não duravam muito) e memórias que durarão para sempre.",
    "type": "Comum",
    "img": "figurinhas/06.jpg",
    "label": "FIG. 06"
  },
  {
    "id": 7,
    "title": "A Vida Escolar",
    "desc": "O primeiro dia de aula! A mochila nas costas parecia maior que ela, mas a coragem no olhar mostrava que ela estava pronta para fazer novos amigos e aprender tudo.",
    "type": "Comum",
    "img": "figurinhas/07.jpg",
    "label": "FIG. 07"
  },
  {
    "id": 8,
    "title": "Dia de Realeza",
    "desc": "Fantasiada para a festa da escola, ela encarnou a personagem com perfeição. Um dia de mágica, varinha de condão e a certeza de que toda menina é uma princesa.",
    "type": "Comum",
    "img": "figurinhas/08.jpg",
    "label": "FIG. 08"
  },
  {
    "id": 9,
    "title": "Amor de Quatro Patas",
    "desc": "Um encontro de almas. O abraço sincero que marcou o início de uma das amizades mais leais e puras de toda a sua infância.",
    "type": "Comum",
    "img": "figurinhas/09.jpg",
    "label": "FIG. 09"
  },
  {
    "id": 10,
    "title": "A Visita da Fada",
    "desc": "A primeira janelinha a gente nunca esquece! O sorriso orgulhoso de quem passou o dia inteiro esperando ansiosamente pela visita da famosa Fada do Dente.",
    "type": "Comum",
    "img": "figurinhas/10.jpg",
    "label": "FIG. 10"
  },
  {
    "id": 11,
    "title": "O Equilíbrio (Parte 1)",
    "desc": "Aprender a andar de bicicleta sem rodinhas exige confiança. Aquele momento de frio na barriga, sabendo que as mãos protetoras estavam ali para segurar o guidão.",
    "type": "Dupla",
    "img": "figurinhas/11.jpg",
    "label": "FIG. 11"
  },
  {
    "id": 12,
    "title": "A Liberdade (Parte 2)",
    "desc": "O vento no rosto e a sensação de voar! O instante exato em que o apoio foi solto e ela percebeu que conseguia pedalar e manter o equilíbrio sozinha.",
    "type": "Dupla",
    "img": "figurinhas/12.jpg",
    "label": "FIG. 12"
  },
  {
    "id": 13,
    "title": "O Doce Tamanho Família",
    "desc": "Dia de parque de diversões tem que ter adrenalina e, claro, um algodão doce gigante. A alegria de um dia perfeito estampada em um sorriso açucarado.",
    "type": "Comum",
    "img": "figurinhas/13.jpg",
    "label": "FIG. 13"
  },
  {
    "id": 14,
    "title": "Dedicação e Arte",
    "desc": "Foco, disciplina e muita graciosidade. Os primeiros ensaios mostraram o amor pela arte e a dedicação que ela passou a colocar em tudo o que faz.",
    "type": "Comum",
    "img": "figurinhas/14.jpg",
    "label": "FIG. 14"
  },
  {
    "id": 15,
    "title": "Segredos da Madrugada",
    "desc": "Uma cabana iluminada, histórias contadas baixinho e muitas risadas. As festas do pijama foram o cenário das memórias mais divertidas com as melhores amigas.",
    "type": "Comum",
    "img": "figurinhas/15.jpg",
    "label": "FIG. 15"
  },
  {
    "id": 16,
    "title": "Acordes do Coração",
    "desc": "Descobrindo novos talentos e paixões. A música se tornou um refúgio e a forma mais bonita que ela encontrou de expressar o que sente.",
    "type": "Comum",
    "img": "figurinhas/16.jpg",
    "label": "FIG. 16"
  },
  {
    "id": 17,
    "title": "A Era Digital",
    "desc": "A primeira selfie oficial de muitas! A pré-adolescência chegando com tudo, mostrando um estilo próprio que começava a ganhar forma diante do espelho.",
    "type": "Comum",
    "img": "figurinhas/17.jpg",
    "label": "FIG. 17"
  },
  {
    "id": 18,
    "title": "Magia no Inverno",
    "desc": "Uma viagem inesquecível, casacos pesados e o encanto da neve. Um cenário de filme para guardar no coração e no álbum da família.",
    "type": "Comum",
    "img": "figurinhas/18.jpg",
    "label": "FIG. 18"
  },
  {
    "id": 19,
    "title": "Entre Fatias e Amigos",
    "desc": "Comemorar a vida com a turma reunida! A receita perfeita para um aniversário aos 12 anos: boas amizades, muita conversa e fatias infinitas de pizza.",
    "type": "Comum",
    "img": "figurinhas/19.jpg",
    "label": "FIG. 19"
  },
  {
    "id": 20,
    "title": "Renovando Visual",
    "desc": "Mudanças são sempre um respiro de novidade. Um corte de cabelo diferente que trouxe ainda mais atitude e mostrou a confiança brilhando no olhar.",
    "type": "Comum",
    "img": "figurinhas/20.jpg",
    "label": "FIG. 20"
  },
  {
    "id": 21,
    "title": "O Primeiro Diploma",
    "desc": "Um ciclo que se encerra com chave de ouro. A beca, o canudo nas mãos e o orgulho de quem sabe que o futuro guarda coisas gigantes.",
    "type": "Especial Brilhante",
    "img": "figurinhas/21.jpg",
    "label": "FIG. 21"
  },
  {
    "id": 22,
    "title": "O Cenário Perfeito (Parte 1)",
    "desc": "Aquelas férias em que tudo pareceu mágico. O lado esquerdo da nossa memória mais bonita, onde a natureza foi o palco de grandes alegrias em família.",
    "type": "Dupla",
    "img": "figurinhas/22.jpg",
    "label": "FIG. 22"
  },
  {
    "id": 23,
    "title": "A Viagem dos Sonhos (Parte 2)",
    "desc": "O centro da nossa melhor lembrança! Desbravando novos horizontes e criando laços que nenhuma distância ou tempo poderão apagar.",
    "type": "Dupla",
    "img": "figurinhas/23.jpg",
    "label": "FIG. 23"
  },
  {
    "id": 24,
    "title": "A Dona de Si",
    "desc": "Cheia de atitude, personalidade e com um guarda-roupa que é só dela. Mostrando ao mundo sua versão mais autêntica e urbana.",
    "type": "Comum",
    "img": "figurinhas/24.jpg",
    "label": "FIG. 24"
  },
  {
    "id": 25,
    "title": "Ao Som da Vida",
    "desc": "A energia surreal do primeiro grande festival. Cantar a música favorita a plenos pulmões, com os braços pro alto e as luzes refletindo na alma.",
    "type": "Comum",
    "img": "figurinhas/25.jpg",
    "label": "FIG. 25"
  },
  {
    "id": 26,
    "title": "Construindo o Futuro",
    "desc": "Nem só de festa vive a adolescência. Horas de concentração, fones de ouvido e a determinação silenciosa de quem estuda muito para chegar longe.",
    "type": "Comum",
    "img": "figurinhas/26.jpg",
    "label": "FIG. 26"
  },
  {
    "id": 27,
    "title": "Celebrando a Amizade",
    "desc": "Maquiagem pronta e look escolhido. Uma noite dedicada a celebrar os 15 anos de uma amiga especial, já sonhando acordada com o próprio grande dia.",
    "type": "Comum",
    "img": "figurinhas/27.jpg",
    "label": "FIG. 27"
  },
  {
    "id": 28,
    "title": "O Olhar do Futuro",
    "desc": "Um retrato atemporal e profundo. A menina vai dando espaço para uma jovem mulher, cheia de sonhos, mistérios e certezas dentro de si.",
    "type": "Comum",
    "img": "figurinhas/28.jpg",
    "label": "FIG. 28"
  },
  {
    "id": 29,
    "title": "O Início do Sonho",
    "desc": "O momento em que a ficha caiu: a festa vai acontecer! Escolhendo a dedo cada cor, tecido e paleta que fariam parte da noite mais mágica de todas.",
    "type": "Comum",
    "img": "figurinhas/29.jpg",
    "label": "FIG. 29"
  },
  {
    "id": 30,
    "title": "Leveza no Campo",
    "desc": "Uma tarde de sol, flores e sorrisos sinceros. O ensaio pré-debutante capturou a essência mais pura, livre e feliz de quem está prestes a celebrar 15 anos.",
    "type": "Comum",
    "img": "figurinhas/30.jpg",
    "label": "FIG. 30"
  },
  {
    "id": 31,
    "title": "Sofisticação Urbana",
    "desc": "Atitude de sobra e elegância sob medida. Um ensaio fotográfico no coração da cidade que provou o quanto ela cresceu e domina qualquer cenário.",
    "type": "Comum",
    "img": "figurinhas/31.jpg",
    "label": "FIG. 31"
  },
  {
    "id": 32,
    "title": "O Passaporte da Noite",
    "desc": "O convite oficial ganhando vida nas mãos dela. O símbolo físico de que o tempo voou e a celebração de uma vida inteira finalmente chegou.",
    "type": "Comum",
    "img": "figurinhas/32.jpg",
    "label": "FIG. 32"
  },
  {
    "id": 33,
    "title": "O Segredo do Cabide (Parte 1)",
    "desc": "Os bastidores do encanto. Rendas, bordados e o brilho de um vestido que foi idealizado durante anos, esperando o momento certo para brilhar.",
    "type": "Dupla",
    "img": "figurinhas/33.jpg",
    "label": "FIG. 33"
  },
  {
    "id": 34,
    "title": "A Obra de Arte (Parte 2)",
    "desc": "A perfeição em forma de tecido. O vestido dos sonhos aguardando ansiosamente para transformar a aniversariante na estrela principal da noite.",
    "type": "Dupla",
    "img": "figurinhas/34.jpg",
    "label": "FIG. 34"
  },
  {
    "id": 35,
    "title": "A Estrela Principal",
    "desc": "Radiante, deslumbrante e infinitamente feliz. O retrato oficial da nossa Debutante, pronta para viver a noite mais inesquecível da sua vida.",
    "type": "Especial Brilhante",
    "img": "figurinhas/35.jpg",
    "label": "FIG. 35"
  },
  {
    "id": 36,
    "title": "A Marca de uma Era",
    "desc": "O brasão que sela este álbum e esta história. Mais do que uma festa, um marco de amor, crescimento e o lindo início de uma nova fase.",
    "type": "Brilhante Super Especial",
    "img": "figurinhas/36.jpg",
    "label": "FIG. 36"
  }
];

const STORAGE_KEY = 'album_valentina_coladas_v4_game';
const INITIAL_PACK_KEY = 'album_valentina_pacote_inicial_v4';
const PHASE_KEY = 'album_valentina_fases_v4';
let collected = new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'));
let completedPhases = new Set(JSON.parse(localStorage.getItem(PHASE_KEY) || '[]'));
let spread = 0;
const perPage = 4;
const totalStickerPages = Math.ceil(stickers.length / perPage);
const totalSpreads = Math.ceil((totalStickerPages + 2) / 2);
const totalPhases = 8;

const book = document.getElementById('book');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const pageIndicator = document.getElementById('pageIndicator');
const progressText = document.getElementById('progressText');
const progressBar = document.getElementById('progressBar');
const toast = document.getElementById('toast');
const viewer = document.getElementById('viewer');
const viewerImg = document.getElementById('viewerImg');
const viewerTitle = document.getElementById('viewerTitle');
const viewerMeta = document.getElementById('viewerMeta');
const viewerDesc = document.getElementById('viewerDesc');
const gameModal = document.getElementById('gameModal');
const gemBoard = document.getElementById('gemBoard');
const gamePhase = document.getElementById('gamePhase');
const gameScore = document.getElementById('gameScore');
const gameTarget = document.getElementById('gameTarget');
const gameBar = document.getElementById('gameBar');
const gameMessage = document.getElementById('gameMessage');
const startPhaseBtn = document.getElementById('startPhaseBtn');
const nextPhaseBtn = document.getElementById('nextPhaseBtn');

let currentPhase = Math.min(completedPhases.size + 1, totalPhases);
let score = 0;
let target = 300;
let phaseActive = false;
let bgPlaying = false;
let albumMusicWasPlayingBeforeGame = false;

function saveAlbum(){ localStorage.setItem(STORAGE_KEY, JSON.stringify([...collected])); }
function setAlbumMusic(shouldPlay){
  const bg=document.getElementById('bgMusic');
  const btn=document.getElementById('musicBtn');
  if(!bg || !btn) return;
  if(shouldPlay){
    bg.volume=.45;
    bg.play().then(()=>{ bgPlaying=true; btn.textContent='⏸ Música'; }).catch(()=>{ bgPlaying=false; btn.textContent='🎵 Música'; });
  } else {
    bg.pause();
    bgPlaying=false;
    btn.textContent='🎵 Música';
  }
}

function syncGameAudio(shouldPlay){
  const frame=document.getElementById('gameFrame');
  if(!frame) return;
  try {
    const cw = frame.contentWindow;
    if(cw && typeof cw.setGameAudioState === 'function') cw.setGameAudioState(shouldPlay);
    cw && cw.postMessage({ type:'VALENTINA_GAME_AUDIO', on:shouldPlay }, '*');
  } catch(e) {}
}

function savePhases(){ localStorage.setItem(PHASE_KEY, JSON.stringify([...completedPhases])); }
function pad(n){ return String(n).padStart(2,'0'); }
function play(id){ const a=document.getElementById(id); if(a){ a.currentTime=0; a.play().catch(()=>{}); } }
function showToast(msg){ toast.textContent=msg; toast.classList.add('show'); clearTimeout(window.__toastTimer); window.__toastTimer=setTimeout(()=>toast.classList.remove('show'), 2600); }
function stickerSrc(s){ return `figurinhas/${pad(s.id)}.webp`; }

function drawUniquePack(qtd=4){
  const missing = stickers.filter(s=>!collected.has(s.id));
  if(!missing.length) return [];
  const pack=[];
  while(pack.length<qtd && missing.length){
    const i=Math.floor(Math.random()*missing.length);
    const s=missing.splice(i,1)[0];
    collected.add(s.id);
    pack.push(s);
  }
  saveAlbum();
  render();
  return pack;
}

function awardPack(reason){
  const pack = drawUniquePack(4);
  if(pack.length){
    play('packSound');
    showToast(`${reason}: pacote liberado com ${pack.length} figurinha(s) sem repetidas!`);
  } else {
    showToast('Álbum completo! Não há mais figurinhas para liberar.');
  }
}

function firstVisitPack(){
  if(localStorage.getItem(INITIAL_PACK_KEY)) return;
  localStorage.setItem(INITIAL_PACK_KEY, 'sim');
  setTimeout(()=>awardPack('Brinde de primeira abertura'), 700);
}

function render(){
  book.innerHTML = '';
  const leftIndex = spread * 2;
  [leftIndex, leftIndex + 1].forEach(pageIndex => book.appendChild(renderPage(pageIndex)));
  prevBtn.disabled = spread === 0;
  nextBtn.disabled = spread >= totalSpreads - 1;
  pageIndicator.textContent = `Página ${spread + 1} de ${totalSpreads}`;
  updateProgress();
}

function renderPage(pageIndex){
  if(pageIndex === 0) return coverPage();
  if(pageIndex === totalStickerPages + 1) return finalPage();
  if(pageIndex > totalStickerPages + 1){
    const blank=document.createElement('section');
    blank.className='page final';
    blank.innerHTML='<div class="final-content"><div class="rose-line">❦</div><p>Fim do álbum</p></div>';
    return blank;
  }
  const start = (pageIndex - 1) * perPage;
  const pageStickers = stickers.slice(start, start + perPage);
  const page=document.createElement('section');
  page.className='page';
  page.innerHTML = `
    <div class="page-title"><h3>Capítulo ${pageIndex}</h3><span>${pad(start+1)}–${pad(Math.min(start+perPage, stickers.length))}</span></div>
    <div class="grid"></div>`;
  const grid=page.querySelector('.grid');
  pageStickers.forEach(s => grid.appendChild(stickerCard(s)));
  return page;
}

function coverPage(){
  const page=document.createElement('section');
  page.className='page cover';
  page.innerHTML=`<div class="cover-content"><div class="monogram">V</div><p class="eyebrow">Álbum premium de debutante</p><h2>A Jornada de Valentina</h2><div class="rose-line">✦ ✿ ✦</div><p>Uma experiência digital colecionável, delicada e inesquecível para celebrar os 15 anos.</p><p><strong>Nascimento: 12 de Julho de 2011</strong></p><div class="cover-rules">1 pacote grátis na primeira abertura · novas figurinhas ao vencer fases no game</div></div>`;
  return page;
}

function finalPage(){
  const page=document.createElement('section');
  page.className='page final super';
  page.innerHTML=`<div class="final-content"><div class="monogram">V</div><p class="eyebrow">Brasão Oficial</p><h2>Valentina</h2><div class="rose-line">✿ 15 Anos ✿</div><p>Um marco de amor, crescimento e o início de uma nova fase.</p></div>`;
  return page;
}

function stickerCard(s){
  const isCollected = collected.has(s.id);
  const card=document.createElement('article');
  const cls = s.type.includes('Super') ? 'super' : s.type.includes('Especial') ? 'special' : s.type.includes('Dupla') ? 'dupla' : '';
  card.className=`slot ${cls} ${isCollected ? 'collected' : 'missing'}`;
  card.onclick=()=>handleStickerClick(s);
  card.innerHTML=`
    <div class="sticker-frame">
      <img class="sticker-img" src="${stickerSrc(s)}" alt="${s.label} - ${s.title}" onerror="this.style.display='none'">
      ${isCollected ? '' : `<div class="placeholder">${s.label}<br>Bloqueada<br><small>Ganhe no game</small></div>`}
    </div>`;
  return card;
}

function handleStickerClick(s){
  play('clickSound');
  if(!collected.has(s.id)){
    showToast('Ganhe esta figurinha abrindo o álbum pela primeira vez ou vencendo uma fase no game.');
    return;
  }
  openViewer(s);
}

function openViewer(s){
  viewerImg.src = stickerSrc(s);
  viewerImg.alt = `${s.label} - ${s.title}`;
  viewerTitle.textContent = `${s.label} — ${s.title}`;
  viewerMeta.textContent = `${s.type} · Valentina · Nascimento: 12 de Julho de 2011`;
  viewerDesc.textContent = s.desc;
  viewer.classList.add('show');
  viewer.setAttribute('aria-hidden','false');
}
function closeViewer(){ viewer.classList.remove('show'); viewer.setAttribute('aria-hidden','true'); }

document.getElementById('closeViewer').onclick=closeViewer;
viewer.onclick=(e)=>{ if(e.target===viewer) closeViewer(); };
prevBtn.onclick=()=>{ if(spread>0){ spread--; play('pageSound'); render(); } };
nextBtn.onclick=()=>{ if(spread<totalSpreads-1){ spread++; play('pageSound'); render(); } };

document.getElementById('pasteAllBtn').onclick=()=>{
  stickers.forEach(s=>collected.add(s.id)); saveAlbum(); render(); play('placeSound'); showToast('Álbum completo liberado para apresentação.');
};

document.getElementById('resetBtn').onclick=()=>{
  if(confirm('Deseja reiniciar o álbum, o brinde inicial e as fases do jogo?')){
    collected.clear(); completedPhases.clear();
    localStorage.removeItem(STORAGE_KEY); localStorage.removeItem(PHASE_KEY); localStorage.removeItem(INITIAL_PACK_KEY); localStorage.removeItem(GAME_REWARD_KEY);
    currentPhase=1; score=0; phaseActive=false; render(); updateGame(); showToast('Álbum reiniciado. Abra novamente para ganhar o pacote inicial.');
    setTimeout(firstVisitPack, 500);
  }
};

document.getElementById('musicBtn').onclick=()=>{
  if(bgPlaying) setAlbumMusic(false);
  else setAlbumMusic(true);
};

// GAME
const gems = [
  {icon:'💎', points:40}, {icon:'💖', points:35}, {icon:'👑', points:55}, {icon:'🌟', points:30},
  {icon:'💐', points:25}, {icon:'✨', points:20}, {icon:'🎀', points:30}, {icon:'💍', points:60}
];
function phaseTarget(phase){ return 220 + phase * 80; }
function openGame(){
  albumMusicWasPlayingBeforeGame = bgPlaying;
  setAlbumMusic(false);
  gameModal.classList.add('show');
  gameModal.setAttribute('aria-hidden','false');
  const frame=document.getElementById('gameFrame');
  if(frame && !frame.src) frame.src='game/index.html';
  syncGameAudio(true);
  setTimeout(()=>syncGameAudio(true), 250);
  updateGame();
}
function closeGame(){
  syncGameAudio(false);
  gameModal.classList.remove('show');
  gameModal.setAttribute('aria-hidden','true');
  setAlbumMusic(true);
}
document.getElementById('gameBtn').onclick=openGame;
document.getElementById('closeGame').onclick=closeGame;
gameModal.onclick=(e)=>{ if(e.target===gameModal) closeGame(); };
const gameFrameEl = document.getElementById('gameFrame');
if(gameFrameEl){
  gameFrameEl.addEventListener('load', ()=>{
    if(gameModal.classList.contains('show')) syncGameAudio(true);
    else syncGameAudio(false);
  });
}

function updateGame(){
  currentPhase = Math.min(completedPhases.size + 1, totalPhases);
  target = phaseTarget(currentPhase);
  if(completedPhases.size >= totalPhases){
    gamePhase.textContent='Fases concluídas'; gameScore.textContent='Álbum premiado'; gameTarget.textContent='Finalizado';
    gameBar.style.width='100%'; startPhaseBtn.disabled=true; nextPhaseBtn.disabled=true;
    gameMessage.textContent='Todas as fases foram concluídas. Parabéns!'; renderGems(false); return;
  }
  gamePhase.textContent=`Fase ${currentPhase}/${totalPhases}`;
  gameScore.textContent=`${score} pontos`;
  gameTarget.textContent=`Meta: ${target}`;
  gameBar.style.width=`${Math.min(100, Math.round(score/target*100))}%`;
  startPhaseBtn.disabled=phaseActive;
  nextPhaseBtn.disabled=true;
  if(!phaseActive && score===0) renderGems(false);
}

function renderGems(active=true){
  gemBoard.innerHTML='';
  for(let i=0;i<12;i++){
    const g=gems[Math.floor(Math.random()*gems.length)];
    const btn=document.createElement('button');
    btn.className='gem'; btn.textContent=g.icon; btn.disabled=!active;
    btn.onclick=()=>gemClick(g, btn);
    gemBoard.appendChild(btn);
  }
}
function startPhase(){
  if(completedPhases.size >= totalPhases) return;
  score=0; phaseActive=true; target=phaseTarget(currentPhase); gameMessage.textContent='Toque nas joias brilhantes até completar a meta da fase.'; renderGems(true); updateGame();
}
function gemClick(g, btn){
  if(!phaseActive) return;
  play('clickSound');
  score += g.points;
  btn.classList.add('hit'); btn.disabled=true;
  gameScore.textContent=`${score} pontos`;
  gameBar.style.width=`${Math.min(100, Math.round(score/target*100))}%`;
  if(score >= target) completePhase();
  else if([...gemBoard.querySelectorAll('.gem')].every(b=>b.disabled)) renderGems(true);
}
function completePhase(){
  phaseActive=false;
  completedPhases.add(currentPhase); savePhases();
  play('winSound');
  awardPack(`Fase ${currentPhase} concluída`);
  gameMessage.textContent=`Fase ${currentPhase} concluída! Você ganhou 1 pacote sem repetidas.`;
  renderGems(false);
  startPhaseBtn.disabled=true;
  nextPhaseBtn.disabled=completedPhases.size >= totalPhases;
  if(completedPhases.size >= totalPhases) setTimeout(updateGame, 900);
}
startPhaseBtn.onclick=startPhase;
nextPhaseBtn.onclick=()=>{ score=0; phaseActive=false; updateGame(); gameMessage.textContent='Próxima fase liberada. Clique em iniciar.'; };

function updateProgress(){
  const total=stickers.length;
  const done=collected.size;
  progressText.textContent=`${done}/${total} coladas`;
  progressBar.style.width=`${Math.round(done/total*100)}%`;
}


const GAME_REWARD_KEY = 'album_valentina_game_rewards_v6';
function getRewardedGamePhases(){
  try { return new Set(JSON.parse(localStorage.getItem(GAME_REWARD_KEY) || '[]')); }
  catch(e){ return new Set(); }
}
function saveRewardedGamePhases(set){ localStorage.setItem(GAME_REWARD_KEY, JSON.stringify([...set])); }
window.addEventListener('message', (event)=>{
  if(!event.data || event.data.type !== 'VALENTINA_GAME_PHASE_WON') return;
  const phaseNumber = Number(event.data.phase || 0);
  const rewarded = getRewardedGamePhases();
  if(phaseNumber && rewarded.has(phaseNumber)){
    showToast(`Fase ${phaseNumber} já premiada. Avance para ganhar novo pacote.`);
    return;
  }
  if(phaseNumber) rewarded.add(phaseNumber);
  saveRewardedGamePhases(rewarded);
  awardPack(`Fase ${phaseNumber || ''} concluída no game`);
});
window.addEventListener('keydown',e=>{
  if(e.key==='ArrowLeft') prevBtn.click();
  if(e.key==='ArrowRight') nextBtn.click();
  if(e.key==='Escape'){ closeViewer(); closeGame(); }
});

render();
updateGame();
firstVisitPack();
