// Құлыншақ AR — ортақ көрініс құрастырғыш:
// нағыз кесу геометриясынан фанер фигура + шахмат тақтасы + неон жүріс-стрелкалар.
// index.html (AR режимі) де, ?piece= алдын ала қарау режимі де осыны қолданады.
import * as THREE from 'three';
import { PIECES } from './pieces.js';

export const ORDER = ['king', 'queen', 'bishop', 'knight', 'rook', 'pawn'];
export const INFO = {
  king:   { name: 'Патша',  rule: 'Кез келген бағытта — 1 шаршы' },
  queen:  { name: 'Уәзір',  rule: 'Түзу және диагональ — шектеусіз' },
  bishop: { name: 'Піл',    rule: 'Тек диагональ бойымен' },
  knight: { name: 'Ат',     rule: '«Г» әрпімен секіреді (2+1)' },
  rook:   { name: 'Тұра',   rule: 'Тік және көлденең түзу' },
  pawn:   { name: 'Сарбаз', rule: 'Алға жүреді, қиғаш соғады' },
};

const THICK = 4, BASE_R = 15.6, BASE_H = 4;
const SLOTS = [[0, 0], [0, 10], [0, -10], [10, 0], [-10, 0]];
const SCALE = 0.95 / PIECES.king.H;   // патша ≈ 0.95 бірлік, қалғаны пропорциялы
const U = 0.38;                        // тақта шаршысының қадамы
const NEON = 0x35f2d5;
const AMBER = 0xe7a13f;

function stickerTexture(hex) {
  const c = document.createElement('canvas'); c.width = 128; c.height = 128;
  const x = c.getContext('2d');
  x.fillStyle = hex; x.fillRect(0, 0, 128, 128);
  for (let i = 0; i < 600; i++) { x.fillStyle = 'rgba(0,0,0,' + (Math.random() * 0.04) + ')'; x.fillRect(Math.random() * 128, Math.random() * 128, 1.4, 1.4); }
  for (let i = 0; i < 200; i++) { x.fillStyle = 'rgba(255,255,255,' + (Math.random() * 0.05) + ')'; x.fillRect(Math.random() * 128, Math.random() * 128, 1.4, 1.4); }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
function edgeTexture() {
  const c = document.createElement('canvas'); c.width = 8; c.height = 48;
  const x = c.getContext('2d');
  const plies = ['#e7cf98', '#c9a15c', '#e2c589', '#bd8f4c', '#e7cf98'];
  const bh = 48 / plies.length;
  for (let i = 0; i < plies.length; i++) { x.fillStyle = plies[i]; x.fillRect(0, i * bh, 8, bh + 1); x.fillStyle = 'rgba(70,40,15,.35)'; x.fillRect(0, i * bh, 8, 1); }
  x.fillStyle = 'rgba(30,16,6,.55)'; x.fillRect(0, 0, 8, 3); x.fillRect(0, 45, 8, 3);
  const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(6, 1); t.colorSpace = THREE.SRGBColorSpace; return t;
}

const edgeMat = new THREE.MeshStandardMaterial({ map: edgeTexture(), roughness: .8, metalness: .02 });
const faceMat = new THREE.MeshStandardMaterial({ map: stickerTexture('#e8d3a8'), roughness: .85, metalness: 0 });

function shapeFrom(o) { const s = new THREE.Shape(); o.forEach((p, i) => i ? s.lineTo(p[0], p[1]) : s.moveTo(p[0], p[1])); return s; }
function silMesh(outer) {
  const geo = new THREE.ExtrudeGeometry(shapeFrom(outer), { depth: THICK, bevelEnabled: false, steps: 1 });
  geo.translate(0, 0, -THICK / 2); geo.computeVertexNormals();
  return new THREE.Mesh(geo, [faceMat, edgeMat]);
}
function baseWithSlots() {
  const shape = new THREE.Shape(); shape.absarc(0, 0, BASE_R, 0, Math.PI * 2, false);
  const s = 2.1;
  SLOTS.forEach(([sx, sy]) => {
    const h = new THREE.Path();
    h.moveTo(sx - s, sy - s); h.lineTo(sx - s, sy + s); h.lineTo(sx + s, sy + s); h.lineTo(sx + s, sy - s); h.lineTo(sx - s, sy - s);
    shape.holes.push(h);
  });
  const geo = new THREE.ExtrudeGeometry(shape, { depth: BASE_H, bevelEnabled: false, steps: 1, curveSegments: 48 });
  geo.rotateX(-Math.PI / 2); geo.computeVertexNormals();
  return new THREE.Mesh(geo, [faceMat, edgeMat]);
}

// Нағыз фигура: 2 айқас профиль + ойықты түпқойма (мм → бірлік SCALE арқылы)
export function buildPiece(key) {
  const g = new THREE.Group();
  const d = PIECES[key];
  const a = silMesh(d.A);
  const b = silMesh(d.B); b.rotation.y = Math.PI / 2;
  g.add(a, b, baseWithSlots());
  g.scale.setScalar(SCALE);
  return g;
}

// Крафт тақта: 5×5, кремовый/жасыл, қола жиек — canvas текстурасы
export function buildBoard() {
  const n = 5, px = 96;
  const c = document.createElement('canvas'); c.width = c.height = n * px + 32;
  const x = c.getContext('2d');
  x.fillStyle = '#37473C'; x.fillRect(0, 0, c.width, c.height);
  x.strokeStyle = '#A9835B'; x.lineWidth = 5; x.strokeRect(8, 8, c.width - 16, c.height - 16);
  for (let r = 0; r < n; r++) for (let f = 0; f < n; f++) {
    x.fillStyle = (r + f) % 2 ? '#4C6653' : '#EFE4C4';
    x.fillRect(16 + f * px, 16 + r * px, px, px);
  }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  const size = n * U + 0.12;
  const m = new THREE.Mesh(new THREE.PlaneGeometry(size, size),
    new THREE.MeshBasicMaterial({ map: t, transparent: true, opacity: 0.93, side: THREE.DoubleSide }));
  m.rotation.x = -Math.PI / 2;   // XZ жазықтығына жатқызамыз (Y-up әлемінде)
  m.position.y = 0.002;
  return m;
}

// Жалпақ неон стрелка: (0,0)-ден бағыт бойымен len қашықтыққа, ұшында үшбұрыш бас
function arrowShape(len, w, head, headW) {
  const s = new THREE.Shape();
  const body = len - head;
  s.moveTo(-w / 2, 0); s.lineTo(-w / 2, body); s.lineTo(-headW / 2, body);
  s.lineTo(0, len); s.lineTo(headW / 2, body); s.lineTo(w / 2, body); s.lineTo(w / 2, 0);
  s.closePath();
  return s;
}
function flatArrow(from, to, color, w = 0.085) {
  const dx = to[0] - from[0], dz = to[1] - from[1];
  const len = Math.hypot(dx, dz);
  const grp = new THREE.Group();
  const mk = (width, opacity, y) => {
    const geo = new THREE.ShapeGeometry(arrowShape(len, width, Math.min(0.16, len * 0.35), width * 2.6));
    const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color, transparent: true, opacity, side: THREE.DoubleSide, depthWrite: false }));
    m.rotation.x = -Math.PI / 2;
    m.position.y = y;
    return m;
  };
  const under = mk(w * 3.1, 0.5, 0.005);
  under.material.color.set(0x06231c);
  const glow = mk(w * 2.4, 0.22, 0.008);
  const core = mk(w, 0.95, 0.012);
  grp.add(under, glow, core);
  grp.userData = { glow, core };
  grp.position.set(from[0], 0, from[1]);
  grp.rotation.y = Math.atan2(dx, dz) + Math.PI;   // shape +Z бойымен салынған; бағытқа бұрамыз
  return grp;
}
// Г-тәрізді стрелка (ат үшін): бұрылысы бар жолақ + соңында бас
function lArrow(mid, end, color) {
  const grp = new THREE.Group();
  const seg1 = flatArrow([0, 0], mid, color, 0.07);
  seg1.traverse((o) => { if (o.geometry) { /* бас керек емес — қысқартамыз */ } });
  // бірінші сегментті бассыз жасау үшін жай тікбұрыш:
  grp.remove(seg1);
  const mkRect = (from, to, width, opacity, y) => {
    const dx = to[0] - from[0], dz = to[1] - from[1];
    const len = Math.hypot(dx, dz);
    const m = new THREE.Mesh(new THREE.PlaneGeometry(width, len),
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity, side: THREE.DoubleSide, depthWrite: false }));
    m.rotation.x = -Math.PI / 2;
    m.position.set((from[0] + to[0]) / 2, y, (from[1] + to[1]) / 2);
    m.rotation.z = -Math.atan2(dx, dz);
    return m;
  };
  const underR = mkRect([0, 0], mid, 0.07 * 3.1, 0.5, 0.005);
  underR.material.color.set(0x06231c);
  grp.add(underR);
  grp.add(mkRect([0, 0], mid, 0.07 * 2.4, 0.22, 0.008));
  grp.add(mkRect([0, 0], mid, 0.07, 0.95, 0.012));
  const a2 = flatArrow(mid, end, color, 0.07);
  grp.add(a2);
  grp.userData = a2.userData;
  return grp;
}

// Фигураның жүріс стрелкалары («алға» = -Z, яғни маркердің жоғарғы жағы)
export function buildMoves(key) {
  const grp = new THREE.Group();
  const O = [[0, -1], [0, 1], [1, 0], [-1, 0]];
  const D = [[1, -1], [-1, -1], [1, 1], [-1, 1]];
  const far = 2.2 * U, near = 1 * U, start = 0.55 * U;
  const ray = (d, len, color) => grp.add(flatArrow([d[0] * start, d[1] * start], [d[0] * len, d[1] * len], color));
  if (key === 'rook' || key === 'queen') O.forEach((d) => ray(d, far, NEON));
  if (key === 'bishop' || key === 'queen') D.forEach((d) => ray(d, far, NEON));
  if (key === 'king') [...O, ...D].forEach((d) => ray(d, near, NEON));
  if (key === 'knight') {
    const L = [[1, -2], [-1, -2], [2, -1], [-2, -1], [2, 1], [-2, 1], [1, 2], [-1, 2]];
    L.forEach(([a, b]) => {
      const mid = Math.abs(b) === 2 ? [0, b * U] : [a * U, 0];
      grp.add(lArrow(mid, [a * U, b * U], NEON));
    });
  }
  if (key === 'pawn') {
    ray([0, -1], far, NEON);                                    // алға 2 шаршы
    grp.add(flatArrow([0.35 * U, -0.35 * U], [U, -U], AMBER)); // қиғаш соғу
    grp.add(flatArrow([-0.35 * U, -0.35 * U], [-U, -U], AMBER));
  }
  return grp;
}

// Толық көрініс: тақта + фигура + стрелкалар (Y-up әлемінде, түбі y=0)
export function buildScene(key) {
  const g = new THREE.Group();
  g.add(buildBoard());
  g.add(buildMoves(key));
  g.add(buildPiece(key));
  return g;
}

// Стрелкалардың жыпылықтауы — рендер циклінен шақырылады
export function pulseMoves(group, t) {
  const k = 0.55 + 0.45 * Math.sin(t * 3.0);
  group.traverse((o) => {
    if (o.userData && o.userData.core) {
      o.userData.core.material.opacity = 0.55 + 0.45 * k;
      o.userData.glow.material.opacity = 0.10 + 0.22 * k;
    }
  });
}
