/* @ds-bundle: {"format":3,"namespace":"DesignSystem_d688da","components":[{"name":"ChessBoard","sourcePath":"components/chess/ChessBoard.jsx"},{"name":"ChessPiece","sourcePath":"components/chess/ChessPiece.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Callout","sourcePath":"components/core/Callout.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"QRTag","sourcePath":"components/product/QRTag.jsx"},{"name":"StepList","sourcePath":"components/product/StepList.jsx"},{"name":"Sticker","sourcePath":"components/product/Sticker.jsx"}],"sourceHashes":{"components/chess/ChessBoard.jsx":"8f8711686ba4","components/chess/ChessPiece.jsx":"ab8c6b153bee","components/core/Badge.jsx":"d30cb37bffba","components/core/Button.jsx":"33213970fde4","components/core/Callout.jsx":"91b040b792fd","components/core/Card.jsx":"2ce6eb41aa89","components/core/IconButton.jsx":"6918a8cf0f21","components/forms/Checkbox.jsx":"220badca17b3","components/forms/Input.jsx":"ad74588a2f1b","components/forms/Radio.jsx":"c4ee972a0248","components/forms/Select.jsx":"7875b663f40d","components/forms/Switch.jsx":"808a6d2a4dc4","components/product/QRTag.jsx":"b9c7e8b6539c","components/product/StepList.jsx":"589bf0099703","components/product/Sticker.jsx":"847c9f5c305c","ui_kits/website/AssemblyScreen.jsx":"4c3726c76a69","ui_kits/website/Chrome.jsx":"2fb8959e33b9","ui_kits/website/HomeScreen.jsx":"65f49c93aa59","ui_kits/website/LearnScreen.jsx":"3c81c9c5f7e8","ui_kits/website/LessonScreen.jsx":"e25d6349b619","ui_kits/website/data.js":"5bc0873d5f75"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystem_d688da = window.DesignSystem_d688da || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/chess/ChessPiece.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Кулыншақ — ChessPiece
 * A single chess piece rendered from Unicode glyphs, in the brand's token/disc style.
 * The knight (♞ / «ат») is the mascot tie-in — a horse, like кулыншақ (foal).
 *
 * type: 'king'|'queen'|'rook'|'bishop'|'knight'|'pawn'
 * color: 'white' | 'black'  (piece colour, not the disc)
 */
const GLYPHS = {
  king: {
    black: '♚',
    white: '♔',
    kk: 'Патша'
  },
  queen: {
    black: '♛',
    white: '♕',
    kk: 'Уәзір'
  },
  rook: {
    black: '♜',
    white: '♖',
    kk: 'Тұра'
  },
  bishop: {
    black: '♝',
    white: '♗',
    kk: 'Піл'
  },
  knight: {
    black: '♞',
    white: '♘',
    kk: 'Ат'
  },
  pawn: {
    black: '♟',
    white: '♙',
    kk: 'Сарбаз'
  }
};
function ChessPiece({
  type = 'knight',
  color = 'black',
  // white | black
  size = 44,
  disc = false,
  // render on a token disc
  tone = 'brand',
  // disc tone: brand | teal | paper
  label = false,
  // show Kazakh name under the glyph
  style = {},
  ...rest
}) {
  const g = GLYPHS[type] || GLYPHS.knight;
  const glyph = g[color] || g.black;
  const discTones = {
    brand: 'var(--amber-100)',
    teal: 'var(--teal-100)',
    paper: 'var(--surface)'
  };
  const glyphEl = /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      fontSize: disc ? size * 0.62 : size,
      lineHeight: 1,
      color: color === 'white' ? 'var(--paper-hi)' : 'var(--ink)',
      textShadow: color === 'white' ? '0 0 1px var(--ink), 0 1px 0 rgba(33,29,26,0.35)' : 'none'
    }
  }, glyph);
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "img",
    "aria-label": `${g.kk}${color === 'white' ? ' (ақ)' : ' (қара)'}`,
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 4,
      ...style
    }
  }, rest), disc ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      borderRadius: 'var(--radius-pill)',
      background: discTones[tone] || discTones.brand,
      border: '2px solid var(--ink)',
      boxShadow: 'var(--shadow-sm)'
    }
  }, glyphEl) : glyphEl, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: `var(--fw-bold) var(--text-2xs)/1 var(--font-display)`,
      color: 'var(--ink-3)',
      letterSpacing: '0.03em'
    }
  }, g.kk));
}
ChessPiece.GLYPHS = GLYPHS;
Object.assign(__ds_scope, { ChessPiece });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chess/ChessPiece.jsx", error: String((e && e.message) || e) }); }

// components/chess/ChessBoard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Кулыншақ — ChessBoard
 * A teaching board. Renders an N×N grid (default 8), places pieces, and highlights
 * legal-move squares — built for the "how each piece moves" lessons.
 *
 * pieces: [{ square:'e4', type:'knight', color:'black' }]
 * moves:  ['c3','d2', ...]  -> clay dot highlights
 * origin: 'e4'              -> amber ring on the moving piece's square
 */
const FILES = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
function parseSquare(sq) {
  const file = FILES.indexOf(sq[0]);
  const rank = parseInt(sq[1], 10) - 1;
  return {
    file,
    rank
  };
}
function ChessBoard({
  size = 8,
  // board is size×size (use 8, or 5 for mini lessons)
  cell = 46,
  pieces = [],
  moves = [],
  origin = null,
  coords = true,
  style = {},
  ...rest
}) {
  const files = FILES.slice(0, size);
  const moveSet = new Set(moves);
  const pieceMap = {};
  pieces.forEach(p => {
    pieceMap[p.square] = p;
  });
  const rows = [];
  for (let r = size - 1; r >= 0; r--) {
    const cells = [];
    for (let f = 0; f < size; f++) {
      const sq = files[f] + (r + 1);
      const dark = (f + r) % 2 === 1;
      const p = pieceMap[sq];
      const isMove = moveSet.has(sq);
      const isOrigin = origin === sq;
      cells.push(/*#__PURE__*/React.createElement("div", {
        key: sq,
        style: {
          position: 'relative',
          width: cell,
          height: cell,
          background: dark ? 'var(--square-dark)' : 'var(--square-light)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: isOrigin ? 'inset 0 0 0 3px var(--amber-400)' : 'none'
        }
      }, isMove && !p && /*#__PURE__*/React.createElement("span", {
        style: {
          width: cell * 0.28,
          height: cell * 0.28,
          borderRadius: '50%',
          background: 'var(--square-move)'
        }
      }), isMove && p && /*#__PURE__*/React.createElement("span", {
        style: {
          position: 'absolute',
          inset: 3,
          borderRadius: '50%',
          boxShadow: 'inset 0 0 0 3px var(--square-move)'
        }
      }), p && /*#__PURE__*/React.createElement(__ds_scope.ChessPiece, {
        type: p.type,
        color: p.color,
        size: cell * 0.74
      }), coords && f === 0 && /*#__PURE__*/React.createElement("span", {
        style: {
          position: 'absolute',
          top: 2,
          left: 3,
          font: 'var(--fw-bold) 9px var(--font-mono)',
          color: dark ? 'var(--paper-hi)' : 'var(--ink-3)',
          opacity: 0.75
        }
      }, r + 1), coords && r === 0 && /*#__PURE__*/React.createElement("span", {
        style: {
          position: 'absolute',
          bottom: 1,
          right: 3,
          font: 'var(--fw-bold) 9px var(--font-mono)',
          color: dark ? 'var(--paper-hi)' : 'var(--ink-3)',
          opacity: 0.75
        }
      }, files[f])));
    }
    rows.push(/*#__PURE__*/React.createElement("div", {
      key: r,
      style: {
        display: 'flex'
      }
    }, cells));
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'inline-block',
      padding: 6,
      background: 'var(--ink)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-md)',
      lineHeight: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-xs)',
      overflow: 'hidden'
    }
  }, rows));
}
Object.assign(__ds_scope, { ChessBoard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chess/ChessBoard.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Кулыншақ — Badge
 * Small status/label pill. Use for lesson numbers, difficulty, "new", counts.
 */
function Badge({
  children,
  tone = 'brand',
  // brand | teal | clay | olive | neutral | ink
  variant = 'soft',
  // soft | solid | outline
  size = 'md',
  // sm | md
  iconLeft = null,
  style = {},
  ...rest
}) {
  const tones = {
    brand: {
      soft: ['var(--amber-100)', 'var(--amber-700)'],
      solid: ['var(--amber-400)', 'var(--ink)'],
      line: 'var(--amber-600)'
    },
    teal: {
      soft: ['var(--teal-100)', 'var(--teal-600)'],
      solid: ['var(--teal-400)', 'var(--paper-hi)'],
      line: 'var(--teal-500)'
    },
    clay: {
      soft: ['var(--clay-100)', 'var(--clay-600)'],
      solid: ['var(--clay-400)', 'var(--paper-hi)'],
      line: 'var(--clay-500)'
    },
    olive: {
      soft: ['var(--olive-100)', 'var(--olive-600)'],
      solid: ['var(--olive-400)', 'var(--paper-hi)'],
      line: 'var(--olive-600)'
    },
    neutral: {
      soft: ['var(--paper-deep)', 'var(--ink-2)'],
      solid: ['var(--ink-3)', 'var(--paper-hi)'],
      line: 'var(--line)'
    },
    ink: {
      soft: ['var(--ink)', 'var(--paper-hi)'],
      solid: ['var(--ink)', 'var(--paper-hi)'],
      line: 'var(--ink)'
    }
  };
  const t = tones[tone] || tones.brand;
  const isSolid = variant === 'solid' || tone === 'ink';
  const [bg, fg] = isSolid ? t.solid : t.soft;
  const dims = size === 'sm' ? {
    padding: '2px 8px',
    font: 'var(--text-2xs)'
  } : {
    padding: '4px 11px',
    font: 'var(--text-xs)'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '5px',
      padding: dims.padding,
      font: `var(--fw-bold) ${dims.font}/1.3 var(--font-display)`,
      letterSpacing: '0.02em',
      color: fg,
      background: variant === 'outline' ? 'transparent' : bg,
      border: variant === 'outline' ? `var(--bw-1) solid ${t.line}` : 'none',
      borderRadius: 'var(--radius-pill)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, iconLeft), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Кулыншақ — Button
 * Chunky, tactile, kid-friendly. Solid "printed edge" underneath that compresses on press.
 */
function Button({
  children,
  variant = 'primary',
  // primary | secondary | accent | outline | ghost
  size = 'md',
  // sm | md | lg
  iconLeft = null,
  iconRight = null,
  full = false,
  disabled = false,
  type = 'button',
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      height: 'var(--control-h-sm)',
      padding: '0 16px',
      font: 'var(--text-sm)',
      radius: 'var(--radius-sm)',
      gap: '8px'
    },
    md: {
      height: 'var(--control-h-md)',
      padding: '0 22px',
      font: 'var(--text-base)',
      radius: 'var(--radius-md)',
      gap: '9px'
    },
    lg: {
      height: 'var(--control-h-lg)',
      padding: '0 30px',
      font: 'var(--text-lg)',
      radius: 'var(--radius-lg)',
      gap: '11px'
    }
  };
  const variants = {
    primary: {
      bg: 'var(--amber-400)',
      fg: 'var(--ink)',
      edge: 'var(--amber-600)',
      border: 'transparent'
    },
    secondary: {
      bg: 'var(--teal-400)',
      fg: 'var(--paper-hi)',
      edge: 'var(--teal-600)',
      border: 'transparent'
    },
    accent: {
      bg: 'var(--clay-400)',
      fg: 'var(--paper-hi)',
      edge: 'var(--clay-600)',
      border: 'transparent'
    },
    outline: {
      bg: 'transparent',
      fg: 'var(--ink)',
      edge: 'var(--ink)',
      border: 'var(--ink)'
    },
    ghost: {
      bg: 'transparent',
      fg: 'var(--ink)',
      edge: 'transparent',
      border: 'transparent'
    }
  };
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;
  const flat = variant === 'ghost';
  const [pressed, setPressed] = React.useState(false);
  const lift = flat ? 0 : 4;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onPointerDown: () => setPressed(true),
    onPointerUp: () => setPressed(false),
    onPointerLeave: () => setPressed(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      width: full ? '100%' : 'auto',
      height: s.height,
      padding: s.padding,
      font: `var(--fw-bold) ${s.font}/1 var(--font-display)`,
      letterSpacing: '0.005em',
      color: v.fg,
      background: v.bg,
      border: `var(--bw-1) solid ${v.border}`,
      borderRadius: s.radius,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      boxShadow: flat ? 'none' : `0 ${pressed ? 1 : lift}px 0 ${v.edge}`,
      transform: pressed && !flat ? `translateY(${lift - 1}px)` : 'translateY(0)',
      transition: 'transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out), background var(--dur-fast)',
      WebkitTapHighlightColor: 'transparent',
      userSelect: 'none',
      ...style
    }
  }, rest), iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      fontSize: '1.15em'
    }
  }, iconLeft), children, iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      fontSize: '1.15em'
    }
  }, iconRight));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Callout.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Кулыншақ — Callout
 * Boxed tip/note for the booklet & lesson voice. A left "rule" strip + optional icon.
 * Tones map to teaching intents: tip, rule, warning, fun.
 */
function Callout({
  children,
  title,
  tone = 'tip',
  // tip | rule | warning | fun
  icon = null,
  style = {},
  ...rest
}) {
  const tones = {
    tip: {
      bg: 'var(--teal-100)',
      rule: 'var(--teal-400)',
      fg: 'var(--teal-700)',
      glyph: '💡'
    },
    rule: {
      bg: 'var(--paper-deep)',
      rule: 'var(--ink)',
      fg: 'var(--ink-2)',
      glyph: '♟'
    },
    warning: {
      bg: 'var(--clay-100)',
      rule: 'var(--clay-400)',
      fg: 'var(--clay-600)',
      glyph: '!'
    },
    fun: {
      bg: 'var(--amber-100)',
      rule: 'var(--amber-400)',
      fg: 'var(--amber-700)',
      glyph: '★'
    }
  };
  const t = tones[tone] || tones.tip;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "note",
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      padding: 'var(--space-4) var(--space-5)',
      background: t.bg,
      borderRadius: 'var(--radius-lg)',
      borderLeft: `5px solid ${t.rule}`,
      color: 'var(--ink)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      flex: '0 0 auto',
      fontSize: '1.25em',
      lineHeight: 1.2,
      color: t.fg
    }
  }, icon || t.glyph), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      font: `var(--fw-bold) var(--text-base)/1.3 var(--font-display)`,
      color: t.fg,
      marginBottom: '2px'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      font: `var(--fw-regular) var(--text-sm)/1.5 var(--font-body)`,
      color: 'var(--ink-2)'
    }
  }, children)));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Callout.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Кулыншақ — Card
 * Paper surface with a soft warm shadow. Variants echo the physical kit:
 *   paper   — default raised card
 *   cut     — printed "cut-line" ink border (like a piece to punch out)
 *   sunk    — recessed panel on the page
 */
function Card({
  children,
  variant = 'paper',
  // paper | cut | sunk
  pad = 'md',
  // none | sm | md | lg
  interactive = false,
  onClick,
  style = {},
  ...rest
}) {
  const pads = {
    none: '0',
    sm: 'var(--space-4)',
    md: 'var(--space-6)',
    lg: 'var(--space-8)'
  };
  const variants = {
    paper: {
      background: 'var(--surface)',
      border: '1px solid var(--line)',
      boxShadow: 'var(--shadow-md)'
    },
    cut: {
      background: 'var(--surface)',
      border: 'var(--bw-2) solid var(--ink)',
      boxShadow: 'none'
    },
    sunk: {
      background: 'var(--paper-deep)',
      border: '1px solid var(--line)',
      boxShadow: 'inset 0 2px 6px rgba(33,29,26,0.06)'
    }
  };
  const v = variants[variant] || variants.paper;
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    onPointerEnter: () => interactive && setHover(true),
    onPointerLeave: () => interactive && setHover(false),
    style: {
      borderRadius: 'var(--radius-xl)',
      padding: pads[pad] ?? pads.md,
      cursor: interactive ? 'pointer' : 'default',
      transform: hover ? 'translateY(-3px)' : 'none',
      boxShadow: hover ? 'var(--shadow-lg)' : v.boxShadow,
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      ...v,
      ...(hover ? {} : {}),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Кулыншақ — IconButton
 * Square/round tactile button for a single glyph (Lucide icon or Unicode chess piece).
 */
function IconButton({
  children,
  label,
  // accessible label (required in practice)
  variant = 'soft',
  // soft | solid | outline | ghost
  size = 'md',
  // sm | md | lg
  round = false,
  disabled = false,
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: 34,
    md: 44,
    lg: 54
  };
  const dim = sizes[size] || sizes.md;
  const variants = {
    soft: {
      bg: 'var(--amber-100)',
      fg: 'var(--amber-700)',
      border: 'transparent'
    },
    solid: {
      bg: 'var(--ink)',
      fg: 'var(--paper-hi)',
      border: 'transparent'
    },
    outline: {
      bg: 'var(--surface)',
      fg: 'var(--ink)',
      border: 'var(--ink)'
    },
    ghost: {
      bg: 'transparent',
      fg: 'var(--ink)',
      border: 'transparent'
    }
  };
  const v = variants[variant] || variants.soft;
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    onPointerEnter: () => setHover(true),
    onPointerLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dim,
      height: dim,
      fontSize: dim * 0.46,
      color: v.fg,
      background: v.bg,
      border: `var(--bw-1) solid ${v.border}`,
      borderRadius: round ? 'var(--radius-pill)' : 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transform: hover && !disabled ? 'translateY(-1px)' : 'none',
      boxShadow: hover && !disabled ? 'var(--shadow-sm)' : 'none',
      transition: 'transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast)',
      WebkitTapHighlightColor: 'transparent',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Кулыншақ — Checkbox
 * Chunky rounded checkbox with an ink check. Controlled or uncontrolled.
 */
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  tone = 'brand',
  // brand | teal
  style = {},
  id,
  ...rest
}) {
  const cbId = id || React.useId();
  const isControlled = checked !== undefined;
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : inner;
  const fill = tone === 'teal' ? 'var(--teal-400)' : 'var(--amber-400)';
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInner(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: cbId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 24,
      height: 24,
      flex: '0 0 auto',
      background: on ? fill : 'var(--surface)',
      border: `var(--bw-1) solid ${on ? 'transparent' : 'var(--ink-4)'}`,
      borderRadius: 'var(--radius-xs)',
      transition: 'background var(--dur-fast), border-color var(--dur-fast)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    id: cbId,
    checked: on,
    disabled: disabled,
    onChange: toggle,
    style: {
      position: 'absolute',
      opacity: 0,
      width: '100%',
      height: '100%',
      margin: 0,
      cursor: 'inherit'
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      color: 'var(--ink)',
      fontSize: 15,
      fontWeight: 900,
      lineHeight: 1,
      transform: on ? 'scale(1)' : 'scale(0)',
      transition: 'transform var(--dur-fast) var(--ease-bounce)'
    }
  }, "\u2713")), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: `var(--fw-medium) var(--text-base)/1.3 var(--font-body)`,
      color: 'var(--ink)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Кулыншақ — Input
 * Text field with optional label, hint, error, and leading glyph. Warm paper fill.
 */
function Input({
  label,
  hint,
  error,
  leading = null,
  size = 'md',
  // sm | md | lg
  full = true,
  style = {},
  id,
  ...rest
}) {
  const heights = {
    sm: 'var(--control-h-sm)',
    md: 'var(--control-h-md)',
    lg: 'var(--control-h-lg)'
  };
  const [focus, setFocus] = React.useState(false);
  const inputId = id || React.useId();
  const borderColor = error ? 'var(--clay-400)' : focus ? 'var(--teal-400)' : 'var(--line)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: full ? '100%' : 'auto',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: 'block',
      marginBottom: '6px',
      font: `var(--fw-bold) var(--text-sm)/1.2 var(--font-display)`,
      color: 'var(--ink-2)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      height: heights[size],
      padding: '0 14px',
      background: 'var(--surface)',
      border: `var(--bw-1) solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focus ? '0 0 0 3px var(--teal-100)' : 'none',
      transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)'
    }
  }, leading && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-3)',
      display: 'inline-flex'
    }
  }, leading), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      height: '100%',
      border: 'none',
      outline: 'none',
      background: 'transparent',
      color: 'var(--ink)',
      font: `var(--fw-regular) var(--text-base)/1 var(--font-body)`
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '5px',
      font: `var(--fw-medium) var(--text-xs)/1.3 var(--font-body)`,
      color: error ? 'var(--clay-500)' : 'var(--ink-3)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Кулыншақ — Radio & RadioGroup
 * Round selector with an amber dot. Use RadioGroup for a set.
 */
function Radio({
  label,
  value,
  checked,
  onChange,
  name,
  disabled = false,
  style = {},
  id,
  ...rest
}) {
  const rId = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: rId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 24,
      height: 24,
      flex: '0 0 auto',
      background: 'var(--surface)',
      border: `var(--bw-1) solid ${checked ? 'var(--amber-400)' : 'var(--ink-4)'}`,
      borderRadius: 'var(--radius-pill)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'border-color var(--dur-fast)'
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    id: rId,
    name: name,
    value: value,
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: '100%',
      height: '100%',
      margin: 0,
      cursor: 'inherit'
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      width: 12,
      height: 12,
      borderRadius: '50%',
      background: 'var(--amber-400)',
      transform: checked ? 'scale(1)' : 'scale(0)',
      transition: 'transform var(--dur-fast) var(--ease-bounce)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: `var(--fw-medium) var(--text-base)/1.3 var(--font-body)`,
      color: 'var(--ink)'
    }
  }, label));
}
function RadioGroup({
  name,
  value,
  onChange,
  options = [],
  gap = 12,
  direction = 'column',
  style = {}
}) {
  const norm = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  const groupName = name || React.useId();
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    style: {
      display: 'flex',
      flexDirection: direction,
      gap,
      ...style
    }
  }, norm.map(o => /*#__PURE__*/React.createElement(Radio, {
    key: o.value,
    name: groupName,
    value: o.value,
    label: o.label,
    checked: value === o.value,
    onChange: () => onChange && onChange(o.value)
  })));
}
Object.assign(__ds_scope, { Radio, RadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Кулыншақ — Select
 * Native-backed dropdown styled to match Input. Warm paper fill, chevron glyph.
 */
function Select({
  label,
  hint,
  error,
  options = [],
  // [{value, label}] or [string]
  size = 'md',
  full = true,
  placeholder,
  style = {},
  id,
  ...rest
}) {
  const heights = {
    sm: 'var(--control-h-sm)',
    md: 'var(--control-h-md)',
    lg: 'var(--control-h-lg)'
  };
  const [focus, setFocus] = React.useState(false);
  const selId = id || React.useId();
  const norm = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  const borderColor = error ? 'var(--clay-400)' : focus ? 'var(--teal-400)' : 'var(--line)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: full ? '100%' : 'auto',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selId,
    style: {
      display: 'block',
      marginBottom: '6px',
      font: `var(--fw-bold) var(--text-sm)/1.2 var(--font-display)`,
      color: 'var(--ink-2)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selId,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      height: heights[size],
      padding: '0 40px 0 14px',
      appearance: 'none',
      WebkitAppearance: 'none',
      background: 'var(--surface)',
      color: 'var(--ink)',
      border: `var(--bw-1) solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focus ? '0 0 0 3px var(--teal-100)' : 'none',
      font: `var(--fw-medium) var(--text-base)/1 var(--font-body)`,
      cursor: 'pointer',
      outline: 'none',
      transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)'
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), norm.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      right: '14px',
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--ink-3)',
      fontSize: '12px'
    }
  }, "\u25BE")), (hint || error) && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '5px',
      font: `var(--fw-medium) var(--text-xs)/1.3 var(--font-body)`,
      color: error ? 'var(--clay-500)' : 'var(--ink-3)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Кулыншақ — Switch
 * Chunky toggle. Track goes teal when on; knob slides with a soft bounce.
 */
function Switch({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  style = {},
  id,
  ...rest
}) {
  const swId = id || React.useId();
  const isControlled = checked !== undefined;
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : inner;
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInner(e.target.checked);
    onChange && onChange(e);
  };
  const W = 50,
    H = 28,
    pad = 3,
    knob = H - pad * 2;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: swId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: W,
      height: H,
      flex: '0 0 auto',
      background: on ? 'var(--teal-400)' : 'var(--ink-4)',
      borderRadius: 'var(--radius-pill)',
      transition: 'background var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    id: swId,
    checked: on,
    disabled: disabled,
    onChange: toggle,
    style: {
      position: 'absolute',
      opacity: 0,
      width: '100%',
      height: '100%',
      margin: 0,
      cursor: 'inherit'
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      top: pad,
      left: on ? W - knob - pad : pad,
      width: knob,
      height: knob,
      borderRadius: '50%',
      background: 'var(--paper-hi)',
      boxShadow: 'var(--shadow-sm)',
      transition: 'left var(--dur-base) var(--ease-bounce)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: `var(--fw-medium) var(--text-base)/1.3 var(--font-body)`,
      color: 'var(--ink)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/product/QRTag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Кулыншақ — QRTag
 * Every lesson carries a QR code that opens its YouTube video. This renders a styled QR
 * PLACEHOLDER (a deterministic faux-module grid) inside the brand's tag frame — swap the
 * grid for a real generated QR in production. Includes a play affordance + caption.
 */
function moduleGrid(seed, n = 21) {
  // Simple deterministic PRNG so the same `seed` always yields the same pattern.
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  const rand = () => {
    h += 0x6D2B79F5;
    let t = Math.imul(h ^ h >>> 15, 1 | h);
    t ^= t + Math.imul(t ^ t >>> 7, 61 | t);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
  const cells = [];
  const finder = (r, c) => r < 7 && c < 7 || r < 7 && c >= n - 7 || r >= n - 7 && c < 7;
  for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) {
    if (finder(r, c)) {
      const inCorner = (rr, cc, or, oc) => {
        const lr = rr - or,
          lc = cc - oc;
        return lr === 0 || lr === 6 || lc === 0 || lc === 6 || lr >= 2 && lr <= 4 && lc >= 2 && lc <= 4;
      };
      let on = false;
      if (r < 7 && c < 7) on = inCorner(r, c, 0, 0);else if (r < 7 && c >= n - 7) on = inCorner(r, c, 0, n - 7);else on = inCorner(r, c, n - 7, 0);
      cells.push(on);
    } else {
      cells.push(rand() > 0.55);
    }
  }
  return {
    cells,
    n
  };
}
function QRTag({
  seed = 'lesson-01',
  href,
  // real destination (YouTube) — used as title/aria only here
  caption = 'Сканерлеп видеоны қара',
  size = 120,
  play = true,
  style = {},
  ...rest
}) {
  const {
    cells,
    n
  } = React.useMemo(() => moduleGrid(seed), [seed]);
  const px = Math.floor(size / n);
  const grid = px * n;
  return /*#__PURE__*/React.createElement("div", _extends({
    title: href || seed,
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10,
      padding: 12,
      background: 'var(--surface)',
      border: 'var(--bw-2) solid var(--ink)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-sm)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${n}, ${px}px)`,
      gridAutoRows: `${px}px`,
      width: grid,
      height: grid,
      background: 'var(--paper-hi)'
    }
  }, cells.map((on, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      background: on ? 'var(--ink)' : 'transparent'
    }
  }))), play && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      width: grid * 0.3,
      height: grid * 0.3,
      borderRadius: '50%',
      background: 'var(--clay-400)',
      color: 'var(--paper-hi)',
      border: '3px solid var(--paper-hi)',
      boxShadow: 'var(--shadow-sm)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: grid * 0.13,
      paddingLeft: 2
    }
  }, "\u25B6")), caption && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-bold) var(--text-xs)/1.2 var(--font-display)',
      color: 'var(--ink-2)',
      textAlign: 'center',
      maxWidth: grid + 24
    }
  }, caption));
}
Object.assign(__ds_scope, { QRTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/QRTag.jsx", error: String((e && e.message) || e) }); }

// components/product/StepList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Кулыншақ — StepList
 * Numbered assembly / how-to steps for the booklet-on-screen. Each step is a paper row
 * with an amber number disc; optional fold-line divider evokes the buildable box.
 */
function StepList({
  steps = [],
  // [{ title, body }] or [string]
  start = 1,
  folds = true,
  // dashed fold-line dividers between steps
  style = {},
  ...rest
}) {
  const norm = steps.map(s => typeof s === 'string' ? {
    title: s
  } : s);
  return /*#__PURE__*/React.createElement("ol", _extends({
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }, rest), norm.map((s, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      padding: 'var(--space-4) 0',
      borderBottom: folds && i < norm.length - 1 ? '2px dashed var(--line)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: '0 0 auto',
      width: 38,
      height: 38,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--amber-400)',
      color: 'var(--ink)',
      border: '2px solid var(--ink)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: 'var(--fw-black) var(--text-lg)/1 var(--font-display)'
    }
  }, start + i), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      paddingTop: 3
    }
  }, s.title && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-bold) var(--text-lg)/1.3 var(--font-display)',
      color: 'var(--ink)'
    }
  }, s.title), s.body && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-regular) var(--text-sm)/1.55 var(--font-body)',
      color: 'var(--ink-2)',
      marginTop: 2
    }
  }, s.body)))));
}
Object.assign(__ds_scope, { StepList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/StepList.jsx", error: String((e && e.message) || e) }); }

// components/product/Sticker.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Кулыншақ — Sticker
 * The peel-and-stick look from the physical sticker pack: thick chalk border, drop shadow,
 * a playful tilt. Wrap any content (emoji, glyph, short label, image).
 */
function Sticker({
  children,
  shape = 'rounded',
  // rounded | circle | seal
  tone = 'amber',
  // amber | teal | clay | paper
  size = 96,
  tilt = -6,
  // degrees
  peel = true,
  // show the little curled corner shadow
  style = {},
  ...rest
}) {
  const tones = {
    amber: 'var(--amber-400)',
    teal: 'var(--teal-400)',
    clay: 'var(--clay-400)',
    paper: 'var(--paper-hi)'
  };
  const radius = shape === 'circle' || shape === 'seal' ? '50%' : 'var(--radius-lg)';
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onPointerEnter: () => setHover(true),
    onPointerLeave: () => setHover(false),
    style: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      background: tones[tone] || tones.amber,
      color: tone === 'paper' ? 'var(--ink)' : 'var(--paper-hi)',
      border: '4px solid var(--paper-hi)',
      borderRadius: radius,
      boxShadow: 'var(--shadow-sticker)',
      transform: `rotate(${hover ? 0 : tilt}deg) scale(${hover ? 1.05 : 1})`,
      transition: 'transform var(--dur-base) var(--ease-bounce)',
      textAlign: 'center',
      ...(shape === 'seal' ? {
        outline: '2px dashed var(--paper-hi)',
        outlineOffset: '-9px'
      } : null),
      ...style
    }
  }, rest), children, peel && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      bottom: -2,
      right: -2,
      width: 18,
      height: 18,
      background: 'linear-gradient(135deg, transparent 50%, rgba(33,29,26,0.18) 50%)',
      borderBottomRightRadius: shape === 'rounded' ? 'var(--radius-lg)' : radius
    }
  }));
}
Object.assign(__ds_scope, { Sticker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/Sticker.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/AssemblyScreen.jsx
try { (() => {
// Кулыншақ website — Assembly (how to build) + Order screens
const {
  Button,
  Badge,
  Card,
  Callout,
  StepList,
  Sticker,
  ChessPiece,
  Input,
  Select,
  RadioGroup,
  Checkbox
} = window.DesignSystem_d688da;
function AssemblyScreen({
  onNav,
  mobile
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-prose)',
      margin: '0 auto',
      padding: mobile ? '28px 16px 50px' : '48px 28px 70px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ku-eyebrow"
  }, "\u041A\u0456\u0442\u0430\u043F-\u043D\u04B1\u0441\u049B\u0430\u0443\u043B\u044B\u049B"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: mobile ? 34 : 46,
      margin: '8px 0 0'
    }
  }, "\u049A\u043E\u0440\u0430\u043F\u0442\u044B \u049B\u0430\u043B\u0430\u0439 \u049B\u04B1\u0440\u0430\u0441\u0442\u044B\u0440\u0443"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: 'var(--ink-2)',
      marginTop: 8,
      fontFamily: 'var(--font-serif)'
    }
  }, "\u049A\u043E\u0440\u0430\u043F \u0442\u0430\u049B\u0442\u0430\u0434\u0430\u0439 \u0430\u0448\u044B\u043B\u044B\u043F-\u0436\u0430\u0431\u044B\u043B\u0430\u0434\u044B. \u0406\u0448\u0456\u043D\u0434\u0435 \u2014 \u0431\u0430\u0440\u043B\u044B\u049B \u0444\u0438\u0433\u0443\u0440\u0430 \u043C\u0435\u043D \u0441\u0442\u0438\u043A\u0435\u0440. \u0416\u0435\u043B\u0456\u043C\u043D\u0456\u04A3 \u049B\u0430\u0436\u0435\u0442\u0456 \u0436\u043E\u049B."), /*#__PURE__*/React.createElement(Callout, {
    tone: "tip",
    title: "\u041A\u0435\u0440\u0435\u043A \u0431\u043E\u043B\u0430\u0434\u044B",
    style: {
      marginTop: 20
    }
  }, "\u049A\u0430\u0439\u0448\u044B (\u043D\u0435\u043C\u0435\u0441\u0435 \u0442\u0435\u0441\u0456\u043A\u0442\u0435\u0440 \u0431\u043E\u0439\u044B\u043D\u0448\u0430 \u049B\u043E\u043B\u043C\u0435\u043D), \u0441\u0442\u0438\u043A\u0435\u0440 \u043F\u0430\u043A, \u0448\u044B\u0434\u0430\u043C\u0434\u044B\u043B\u044B\u049B \uD83D\uDE42"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      background: 'var(--surface)',
      border: '2px solid var(--line)',
      borderRadius: 'var(--radius-xl)',
      padding: mobile ? 18 : 26
    }
  }, /*#__PURE__*/React.createElement(StepList, {
    steps: [{
      title: 'Парақтарды шығар',
      body: 'Қораптан қатырғаз парақтарын ал. Әр парақта фигура бөлшектері белгіленген.'
    }, {
      title: 'Бөлшектерді ажырат',
      body: 'Тесіктер (перфорация) бойынша бөлшектерді ақырын шығар. Асықпа!'
    }, {
      title: 'Фигураны жина',
      body: 'Бөлшектерді «А» ойығына «Б» тілін кигіз. Ат, тұра, піл — бәрі осылай.'
    }, {
      title: 'Стикерлерін жапсыр',
      body: 'Әр фигураға өз стикерін жапсыр. Ақ пен қараны шатастырма.'
    }, {
      title: 'Тақтаны жаз',
      body: 'Қорапты ашсаң — ішкі жағы шахмат тақтасы. Фигураларды орналастыр.'
    }, {
      title: 'Ойынды баста',
      body: 'Бірінші сабақтың QR-ын сканерле де, видеомен бірге ойна!'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 26,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Sticker, {
    tone: "teal",
    size: 92
  }, /*#__PURE__*/React.createElement(ChessPiece, {
    type: "knight",
    size: 44,
    color: "white"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 200
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-bold) 20px var(--font-display)'
    }
  }, "\u0414\u0430\u0439\u044B\u043D! \u0415\u043D\u0434\u0456 \u04AF\u0439\u0440\u0435\u043D\u0435\u043C\u0456\u0437."), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--ink-3)',
      fontSize: 15,
      marginTop: 4
    }
  }, "\u0424\u0438\u0433\u0443\u0440\u0430\u043B\u0430\u0440\u0434\u044B \u049B\u04B1\u0440\u0430\u0441\u0442\u044B\u0440\u0434\u044B\u04A3 \u0431\u0430? \u0421\u0430\u0431\u0430\u049B\u0442\u0430\u0440\u0493\u0430 \u04E9\u0442.")), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => onNav('learn'),
    iconRight: /*#__PURE__*/React.createElement("span", null, "\u2192")
  }, "\u0421\u0430\u0431\u0430\u049B\u0442\u0430\u0440\u0493\u0430 \u04E9\u0442\u0443")));
}
function OrderScreen({
  onNav,
  mobile
}) {
  const [done, setDone] = React.useState(false);
  const [level, setLevel] = React.useState('Бастауыш (4–6 жас)');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: mobile ? '28px 16px 50px' : '48px 28px 70px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: mobile ? '1fr' : '1fr 1fr',
      gap: 32,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "ku-eyebrow"
  }, "\u0422\u0430\u043F\u0441\u044B\u0440\u044B\u0441"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: mobile ? 32 : 44,
      margin: '8px 0 0'
    }
  }, "\u041A\u0443\u043B\u044B\u043D\u0448\u0430\u049B \u049B\u043E\u0440\u0430\u0431\u044B"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 10,
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-black) 40px var(--font-display)',
      color: 'var(--clay-500)'
    }
  }, "7 900 \u20B8"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-4)',
      textDecoration: 'line-through',
      fontWeight: 700
    }
  }, "9 900 \u20B8"), /*#__PURE__*/React.createElement(Badge, {
    tone: "clay",
    variant: "solid"
  }, "\u221220%")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, ['32 құрастырмалы фигура', 'Стикер пак (2 парақ)', 'Кітап-нұсқаулық', '6 QR видео сабақ', 'Құрастырмалы тақта-қорап'].map(t => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 24,
      borderRadius: '50%',
      background: 'var(--success-soft)',
      color: 'var(--olive-600)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 900,
      flex: '0 0 auto'
    }
  }, "\u2713"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16
    }
  }, t))))), /*#__PURE__*/React.createElement(Card, {
    variant: "paper",
    pad: "lg"
  }, done ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '20px 6px'
    }
  }, /*#__PURE__*/React.createElement(Sticker, {
    tone: "teal",
    shape: "seal",
    size: 104,
    tilt: -5,
    style: {
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 44
    }
  }, "\u265E")), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 28,
      marginTop: 18
    }
  }, "\u0420\u0430\u0445\u043C\u0435\u0442!"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ink-3)'
    }
  }, "\u0422\u0430\u043F\u0441\u044B\u0440\u044B\u0441\u044B\u04A3 \u049B\u0430\u0431\u044B\u043B\u0434\u0430\u043D\u0434\u044B. \u0416\u0430\u049B\u044B\u043D \u0430\u0440\u0430\u0434\u0430 \u0445\u0430\u0431\u0430\u0440\u043B\u0430\u0441\u0430\u043C\u044B\u0437."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => setDone(false),
    style: {
      marginTop: 6
    }
  }, "\u0422\u0430\u0493\u044B \u0442\u0430\u043F\u0441\u044B\u0440\u044B\u0441")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setDone(true);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-black) 22px var(--font-display)'
    }
  }, "\u0422\u0430\u043F\u0441\u044B\u0440\u044B\u0441 \u0431\u0435\u0440\u0443"), /*#__PURE__*/React.createElement(Input, {
    label: "\u0410\u0442\u0430-\u0430\u043D\u0430\u043D\u044B\u04A3 \u0430\u0442\u044B",
    placeholder: "\u041C\u044B\u0441\u0430\u043B\u044B: \u0410\u0439\u0433\u04AF\u043B",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
    placeholder: "+7 ___ ___ __ __",
    leading: /*#__PURE__*/React.createElement("span", null, "\u260E"),
    required: true
  }), /*#__PURE__*/React.createElement(Select, {
    label: "\u049A\u0430\u043B\u0430",
    placeholder: "\u0422\u0430\u04A3\u0434\u0430\u04A3\u044B\u0437",
    options: ['Алматы', 'Астана', 'Шымкент', 'Басқа қала'],
    required: true
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-bold) 15px var(--font-display)',
      color: 'var(--ink-2)',
      marginBottom: 8
    }
  }, "\u0411\u0430\u043B\u0430\u043D\u044B\u04A3 \u0434\u0435\u04A3\u0433\u0435\u0439\u0456"), /*#__PURE__*/React.createElement(RadioGroup, {
    value: level,
    onChange: setLevel,
    options: ['Бастауыш (4–6 жас)', 'Орта (7–9 жас)', 'Дайын (10+ жас)']
  })), /*#__PURE__*/React.createElement(Checkbox, {
    label: "WhatsApp-\u043F\u0435\u043D \u0445\u0430\u0431\u0430\u0440\u043B\u0430\u0441\u0443\u0493\u0430 \u0431\u043E\u043B\u0430\u0434\u044B",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "accent",
    size: "lg",
    full: true
  }, "\u0422\u0430\u043F\u0441\u044B\u0440\u044B\u0441\u0442\u044B \u0440\u0430\u0441\u0442\u0430\u0443 \xB7 7 900 \u20B8")))));
}
Object.assign(window, {
  AssemblyScreen,
  OrderScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/AssemblyScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
// Кулыншақ website — Header & Footer chrome
const {
  Button,
  Badge
} = window.DesignSystem_d688da;
function Header({
  route,
  onNav,
  mobile
}) {
  const links = [['home', 'Басты бет'], ['learn', 'Сабақтар'], ['assembly', 'Құрастыру']];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      padding: mobile ? '12px 16px' : '14px 28px',
      background: 'rgba(245,238,221,0.86)',
      backdropFilter: 'blur(8px)',
      borderBottom: '2px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('home'),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      border: 'none',
      background: 'none',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 26,
      lineHeight: 1
    }
  }, "\u265E"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-black) 24px var(--font-display)',
      letterSpacing: '-0.02em',
      color: 'var(--ink)'
    }
  }, "\u041A\u0443\u043B\u044B\u043D\u0448\u0430\u049B")), !mobile && /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 4
    }
  }, links.map(([k, label]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => onNav(k),
    style: {
      border: 'none',
      background: route === k ? 'var(--amber-100)' : 'transparent',
      color: route === k ? 'var(--amber-700)' : 'var(--ink-2)',
      font: 'var(--fw-bold) 15px var(--font-display)',
      padding: '9px 15px',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer'
    }
  }, label))), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: mobile ? 'sm' : 'md',
    onClick: () => onNav('order')
  }, "\u0422\u0430\u043F\u0441\u044B\u0440\u044B\u0441", mobile ? '' : ' беру'));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ink)',
      color: 'var(--paper)',
      padding: '40px 28px 30px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 24,
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 320
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 24
    }
  }, "\u265E"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-black) 22px var(--font-display)',
      color: 'var(--paper-hi)'
    }
  }, "\u041A\u0443\u043B\u044B\u043D\u0448\u0430\u049B")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ink-4)',
      fontSize: 14,
      marginTop: 10,
      lineHeight: 1.6
    }
  }, "\u0411\u0430\u043B\u0430\u0493\u0430 \u0448\u0430\u0445\u043C\u0430\u0442\u0442\u044B \u04AF\u0439\u0440\u0435\u0442\u0435\u0442\u0456\u043D \u049B\u04B1\u0440\u0430\u0441\u0442\u044B\u0440\u043C\u0430\u043B\u044B \u049B\u043E\u0440\u0430\u043F. \u04D8\u0440 \u0441\u0430\u0431\u0430\u049B\u0442\u0430 \u2014 QR \u0430\u0440\u049B\u044B\u043B\u044B \u0432\u0438\u0434\u0435\u043E.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 44,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(FooterCol, {
    title: "\u04E8\u043D\u0456\u043C",
    items: ['Не бар қорапта', 'Құрастыру', 'Стикер пак']
  }), /*#__PURE__*/React.createElement(FooterCol, {
    title: "\u041E\u049B\u0443",
    items: ['Барлық сабақ', 'Видео сабақтар', 'Ережелер']
  }), /*#__PURE__*/React.createElement(FooterCol, {
    title: "\u0411\u0430\u0439\u043B\u0430\u043D\u044B\u0441",
    items: ['WhatsApp', 'Instagram', 'YouTube']
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '26px auto 0',
      paddingTop: 16,
      borderTop: '1px solid rgba(255,255,255,0.12)',
      color: 'var(--ink-4)',
      fontSize: 13,
      fontFamily: 'var(--font-mono)'
    }
  }, "\xA9 2026 \u041A\u0443\u043B\u044B\u043D\u0448\u0430\u049B \xB7 \u049A\u0430\u0437\u0430\u049B\u0441\u0442\u0430\u043D\u0434\u0430 \u0436\u0430\u0441\u0430\u043B\u0493\u0430\u043D"));
}
function FooterCol({
  title,
  items
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-bold) 13px var(--font-display)',
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--amber-400)',
      marginBottom: 10
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7
    }
  }, items.map(t => /*#__PURE__*/React.createElement("a", {
    key: t,
    href: "#",
    style: {
      color: 'var(--paper)',
      textDecoration: 'none',
      fontSize: 14
    }
  }, t))));
}
Object.assign(window, {
  Header,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
// Кулыншақ website — Home screen
const {
  Button,
  Badge,
  Card,
  Sticker,
  ChessPiece,
  ChessBoard,
  Callout
} = window.DesignSystem_d688da;
function Hero({
  onNav,
  mobile
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'linear-gradient(180deg, var(--amber-100), var(--paper) 70%)',
      padding: mobile ? '30px 16px 40px' : '56px 28px 64px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: mobile ? '1fr' : '1.05fr 0.95fr',
      gap: mobile ? 28 : 40,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "ku-eyebrow"
  }, "\u049A\u04B1\u0440\u0430\u0441\u0442\u044B\u0440 \xB7 \u0416\u0430\u043F\u0441\u044B\u0440 \xB7 \u041E\u0439\u043D\u0430"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: mobile ? 40 : 62,
      margin: '10px 0 0',
      color: 'var(--ink)'
    }
  }, "\u0428\u0430\u0445\u043C\u0430\u0442\u0442\u044B", /*#__PURE__*/React.createElement("br", null), "\u043E\u0439\u043D\u0430\u043F \u04AF\u0439\u0440\u0435\u043D"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: mobile ? 17 : 20,
      color: 'var(--ink-2)',
      maxWidth: 460,
      marginTop: 14
    }
  }, "\u041A\u0443\u043B\u044B\u043D\u0448\u0430\u049B \u2014 \u04E9\u0437\u0456\u04A3 \u049B\u04B1\u0440\u0430\u0441\u0442\u044B\u0440\u0430\u0442\u044B\u043D \u0448\u0430\u0445\u043C\u0430\u0442 \u049B\u043E\u0440\u0430\u0431\u044B. \u0424\u0438\u0433\u0443\u0440\u0430\u043B\u0430\u0440\u0434\u044B \u0436\u0438\u043D\u0430, \u0441\u0442\u0438\u043A\u0435\u0440\u043B\u0435\u0440\u0456\u043D \u0436\u0430\u043F\u0441\u044B\u0440, \u04D9\u0440 \u0441\u0430\u0431\u0430\u049B\u0442\u044B\u04A3 QR-\u044B\u043D \u0441\u043A\u0430\u043D\u0435\u0440\u043B\u0435\u043F \u0432\u0438\u0434\u0435\u043E\u0434\u0430\u043D \u04AF\u0439\u0440\u0435\u043D."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onNav('order'),
    iconRight: /*#__PURE__*/React.createElement("span", null, "\u265E")
  }, "\u049A\u043E\u0440\u0430\u043F\u0442\u044B \u0430\u043B\u0443"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    onClick: () => onNav('learn')
  }, "\u0421\u0430\u0431\u0430\u049B\u0442\u0430\u0440\u0434\u044B \u043A\u04E9\u0440\u0443")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      marginTop: 26,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    n: "6",
    label: "\u0432\u0438\u0434\u0435\u043E \u0441\u0430\u0431\u0430\u049B"
  }), /*#__PURE__*/React.createElement(Stat, {
    n: "32",
    label: "\u049B\u04B1\u0440\u0430\u0441\u0442\u044B\u0440\u043C\u0430\u043B\u044B \u0444\u0438\u0433\u0443\u0440\u0430"
  }), /*#__PURE__*/React.createElement(Stat, {
    n: "4+",
    label: "\u0436\u0430\u0441"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(BoxArt, {
    mobile: mobile
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -6,
      right: mobile ? 10 : 30
    }
  }, /*#__PURE__*/React.createElement(Sticker, {
    tone: "clay",
    shape: "seal",
    size: mobile ? 82 : 104,
    tilt: 9
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-black) 14px var(--font-display)',
      lineHeight: 1.05
    }
  }, "QR", /*#__PURE__*/React.createElement("br", null), "\u0432\u0438\u0434\u0435\u043E"))))));
}
function Stat({
  n,
  label
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-black) 30px var(--font-display)',
      color: 'var(--clay-500)'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--ink-3)',
      fontWeight: 600
    }
  }, label));
}

// The foldable box "opened like a board" — built from CSS, not an image.
function BoxArt({
  mobile
}) {
  const S = mobile ? 30 : 40;
  const squares = [];
  for (let i = 0; i < 36; i++) {
    const r = Math.floor(i / 6),
      c = i % 6;
    squares.push(/*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        background: (r + c) % 2 ? 'var(--square-dark)' : 'var(--square-light)'
      }
    }));
  }
  const pieces = ['rook', 'knight', 'bishop', 'queen', 'king', 'pawn'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      transform: 'rotate(-3deg)',
      padding: 12,
      background: 'var(--ink)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-xl)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(6, ${S}px)`,
      gridAutoRows: `${S}px`,
      borderRadius: 'var(--radius-sm)',
      overflow: 'hidden'
    }
  }, squares), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      display: 'flex',
      justifyContent: 'space-around',
      background: 'var(--paper-deep)',
      borderRadius: 'var(--radius-sm)',
      padding: '8px 6px',
      border: '2px dashed var(--ink-4)'
    }
  }, pieces.map(p => /*#__PURE__*/React.createElement(ChessPiece, {
    key: p,
    type: p,
    size: S * 0.7
  }))));
}
function WhatsInside({
  mobile
}) {
  const items = [{
    icon: '♟',
    t: 'Құрастырмалы фигуралар',
    d: 'Қатырғаз бөлшектерді тесіктер бойынша шығарып жина.'
  }, {
    icon: '★',
    t: 'Стикер пак',
    d: 'Әр фигураға өз стикерін жапсыр — өзіңдікі болады.'
  }, {
    icon: '📖',
    t: 'Кітап-нұсқаулық',
    d: 'Қалай құрастыру, қалай ойнау — қадам-қадаммен.'
  }, {
    icon: '▶',
    t: 'QR видео сабақтар',
    d: 'Сканерле — YouTube-тағы видео сабақ ашылады.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: mobile ? '40px 16px' : '64px 28px',
      maxWidth: 'var(--container)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: mobile ? 30 : 38,
      textAlign: 'center'
    }
  }, "\u049A\u043E\u0440\u0430\u043F\u0442\u0430 \u043D\u0435 \u0431\u0430\u0440?"), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      color: 'var(--ink-3)',
      maxWidth: 520,
      margin: '6px auto 30px',
      fontSize: 17
    }
  }, "\u0411\u0456\u0440 \u049B\u043E\u0440\u0430\u043F \u2014 \u0442\u0430\u049B\u0442\u0430 \u0434\u0430, \u0444\u0438\u0433\u0443\u0440\u0430 \u0434\u0430, \u0441\u0430\u0431\u0430\u049B \u0442\u0430. \u049A\u043E\u0440\u0430\u043F \u0442\u0430\u049B\u0442\u0430\u0434\u0430\u0439 \u0430\u0448\u044B\u043B\u044B\u043F-\u0436\u0430\u0431\u044B\u043B\u0430\u0434\u044B."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: mobile ? '1fr' : 'repeat(4, 1fr)',
      gap: 16
    }
  }, items.map(it => /*#__PURE__*/React.createElement(Card, {
    key: it.t,
    variant: "paper",
    pad: "md",
    interactive: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 30,
      marginBottom: 8
    }
  }, it.icon), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-bold) 18px var(--font-display)',
      color: 'var(--ink)'
    }
  }, it.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--ink-3)',
      marginTop: 4,
      lineHeight: 1.5
    }
  }, it.d)))));
}
function HowItWorks({
  mobile
}) {
  const steps = [['Құрастыр', 'Бөлшектерді шығарып фигураларды жина.'], ['Жапсыр', 'Стикерлермен фигураларды безендір.'], ['Сканерле', 'Сабақтың QR-ын телефонмен оқы.'], ['Ойна', 'Видеомен бірге ойнап үйрен.']];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--teal-400)',
      padding: mobile ? '40px 16px' : '58px 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: mobile ? 30 : 38,
      color: 'var(--paper-hi)',
      textAlign: 'center'
    }
  }, "\u049A\u0430\u043B\u0430\u0439 \u0436\u04B1\u043C\u044B\u0441 \u0456\u0441\u0442\u0435\u0439\u0434\u0456"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: mobile ? '1fr 1fr' : 'repeat(4,1fr)',
      gap: 16,
      marginTop: 28
    }
  }, steps.map(([t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      background: 'var(--paper-hi)',
      borderRadius: 'var(--radius-xl)',
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: 'var(--amber-400)',
      border: '2px solid var(--ink)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: 'var(--fw-black) 20px var(--font-display)'
    }
  }, i + 1), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-bold) 19px var(--font-display)',
      marginTop: 12
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--ink-3)',
      marginTop: 4
    }
  }, d))))));
}
function PeekLesson({
  onNav,
  mobile
}) {
  const l = window.KU_DATA.lessons[2]; // knight
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: mobile ? '40px 16px' : '64px 28px',
      maxWidth: 'var(--container)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: mobile ? '1fr' : '0.9fr 1.1fr',
      gap: 32,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(ChessBoard, {
    cell: mobile ? 36 : 44,
    pieces: [{
      square: l.origin,
      type: l.piece,
      color: 'black'
    }],
    origin: l.origin,
    moves: l.moves
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "teal",
    variant: "solid"
  }, "\u0421\u0430\u0431\u0430\u049B 03 \xB7 \u0410\u0442"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: mobile ? 28 : 36,
      margin: '12px 0 0'
    }
  }, "\u0410\u0442 \u0442\u04B1\u043B\u043F\u0430\u0440\u0434\u0430\u0439 \u0441\u0435\u043A\u0456\u0440\u0435\u0434\u0456"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      color: 'var(--ink-2)',
      marginTop: 8
    }
  }, l.move), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Callout, {
    tone: "rule",
    title: "\u0415\u0440\u0435\u0436\u0435"
  }, l.rule)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => onNav('lesson'),
    iconRight: /*#__PURE__*/React.createElement("span", null, "\u2192")
  }, "\u0421\u0430\u0431\u0430\u049B\u049B\u0430 \u043A\u0456\u0440\u0443")))));
}
function HomeScreen({
  onNav,
  mobile
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, {
    onNav: onNav,
    mobile: mobile
  }), /*#__PURE__*/React.createElement(WhatsInside, {
    mobile: mobile
  }), /*#__PURE__*/React.createElement(HowItWorks, {
    mobile: mobile
  }), /*#__PURE__*/React.createElement(PeekLesson, {
    onNav: onNav,
    mobile: mobile
  }));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/LearnScreen.jsx
try { (() => {
// Кулыншақ website — Learn (all lessons) screen
const {
  Button,
  Badge,
  Card,
  ChessPiece,
  QRTag
} = window.DesignSystem_d688da;
function LessonCard({
  lesson,
  onOpen,
  mobile
}) {
  const l = lesson;
  return /*#__PURE__*/React.createElement(Card, {
    variant: "paper",
    pad: "none",
    interactive: true,
    onClick: () => onOpen(l),
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      padding: 18,
      alignItems: 'center',
      background: 'var(--amber-100)',
      borderBottom: '2px dashed var(--line)'
    }
  }, /*#__PURE__*/React.createElement(ChessPiece, {
    type: l.piece,
    size: 46,
    disc: true,
    tone: "paper"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral",
    size: "sm"
  }, "\u0421\u0430\u0431\u0430\u049B ", String(l.n).padStart(2, '0')), /*#__PURE__*/React.createElement(Badge, {
    tone: l.tone,
    size: "sm"
  }, l.level)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-black) 22px var(--font-display)',
      color: 'var(--ink)',
      marginTop: 5
    }
  }, l.kk))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 18
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: 'var(--ink-2)',
      margin: 0,
      minHeight: 44
    }
  }, l.move), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-bold) 13px var(--font-mono)',
      color: 'var(--ink-3)'
    }
  }, "\u25B6 ", l.mins, " \u043C\u0438\u043D \u0432\u0438\u0434\u0435\u043E"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: e => {
      e.stopPropagation();
      onOpen(l);
    }
  }, "\u0411\u0430\u0441\u0442\u0430\u0443"))));
}
function LearnScreen({
  onOpen,
  mobile
}) {
  const lessons = window.KU_DATA.lessons;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: mobile ? '28px 16px 50px' : '48px 28px 70px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "ku-eyebrow"
  }, "\u041E\u049B\u0443 \u0436\u043E\u043B\u044B"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: mobile ? 34 : 46,
      margin: '8px 0 0'
    }
  }, "\u0424\u0438\u0433\u0443\u0440\u0430\u043B\u0430\u0440 \u043C\u0435\u043A\u0442\u0435\u0431\u0456"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      color: 'var(--ink-3)',
      marginTop: 6,
      maxWidth: 520
    }
  }, "\u04D8\u0440 \u0444\u0438\u0433\u0443\u0440\u0430\u043D\u044B\u04A3 \u04E9\u0437 \u0441\u0430\u0431\u0430\u0493\u044B \u0431\u0430\u0440. \u0420\u0435\u0442\u0456\u043C\u0435\u043D \u0436\u04AF\u0440 \u2014 \u043E\u04A3\u0430\u0439\u0434\u0430\u043D \u043A\u04AF\u0440\u0434\u0435\u043B\u0456\u0433\u0435.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: mobile ? 'none' : 'block'
    }
  }, /*#__PURE__*/React.createElement(QRTag, {
    seed: "learn-index",
    caption: "\u0422\u043E\u043B\u044B\u049B \u043A\u0443\u0440\u0441 \xB7 YouTube",
    size: 96
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: mobile ? '1fr' : 'repeat(3, 1fr)',
      gap: 18,
      marginTop: 28
    }
  }, lessons.map(l => /*#__PURE__*/React.createElement(LessonCard, {
    key: l.slug,
    lesson: l,
    onOpen: onOpen,
    mobile: mobile
  }))));
}
Object.assign(window, {
  LearnScreen,
  LessonCard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/LearnScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/LessonScreen.jsx
try { (() => {
// Кулыншақ website — Lesson detail screen
const {
  Button,
  Badge,
  Card,
  Callout,
  ChessPiece,
  ChessBoard,
  QRTag,
  StepList
} = window.DesignSystem_d688da;
function VideoPlayer({
  lesson,
  mobile
}) {
  const [playing, setPlaying] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '16 / 9',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      background: 'linear-gradient(150deg, var(--teal-500), var(--teal-700))',
      border: '3px solid var(--ink)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0.16,
      backgroundImage: 'radial-gradient(var(--paper-hi) 1.5px, transparent 1.5px)',
      backgroundSize: '22px 22px'
    }
  }), /*#__PURE__*/React.createElement(ChessPiece, {
    type: lesson.piece,
    size: mobile ? 70 : 104,
    color: "white",
    style: {
      position: 'absolute',
      opacity: 0.9
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => setPlaying(!playing),
    style: {
      position: 'relative',
      width: mobile ? 62 : 78,
      height: mobile ? 62 : 78,
      borderRadius: '50%',
      background: 'var(--clay-400)',
      color: 'var(--paper-hi)',
      border: '4px solid var(--paper-hi)',
      boxShadow: 'var(--shadow-lg)',
      cursor: 'pointer',
      fontSize: mobile ? 24 : 30,
      paddingLeft: playing ? 0 : 5,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, playing ? '❚❚' : '▶'), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 12,
      left: 14,
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "ink"
  }, playing ? '0:12' : '0:00', " / ", lesson.mins, ":00"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--paper-hi)',
      font: 'var(--fw-bold) 13px var(--font-mono)',
      opacity: 0.8
    }
  }, "YouTube \xB7 \u041A\u0443\u043B\u044B\u043D\u0448\u0430\u049B")));
}
function LessonScreen({
  lesson,
  onNav,
  onOpen,
  mobile
}) {
  const lessons = window.KU_DATA.lessons;
  const l = lesson || lessons[2];
  const idx = lessons.findIndex(x => x.slug === l.slug);
  const prev = lessons[idx - 1],
    next = lessons[idx + 1];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: mobile ? '20px 16px 50px' : '34px 28px 70px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('learn'),
    style: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      color: 'var(--teal-500)',
      font: 'var(--fw-bold) 15px var(--font-display)',
      padding: 0,
      marginBottom: 16
    }
  }, "\u2190 \u0411\u0430\u0440\u043B\u044B\u049B \u0441\u0430\u0431\u0430\u049B"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(ChessPiece, {
    type: l.piece,
    size: 40,
    disc: true,
    tone: "brand"
  }), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, "\u0421\u0430\u0431\u0430\u049B ", String(l.n).padStart(2, '0')), /*#__PURE__*/React.createElement(Badge, {
    tone: l.tone,
    variant: "solid"
  }, l.level)), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: mobile ? 34 : 48,
      margin: '10px 0 0'
    }
  }, l.kk, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-4)',
      fontWeight: 700,
      fontSize: '0.6em'
    }
  }, "\xB7 ", l.ru)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: mobile ? 17 : 20,
      color: 'var(--ink-2)',
      maxWidth: 640,
      marginTop: 6
    }
  }, l.move), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: mobile ? '1fr' : '1.3fr 0.7fr',
      gap: 24,
      marginTop: 22,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(VideoPlayer, {
    lesson: l,
    mobile: mobile
  }), /*#__PURE__*/React.createElement(Card, {
    variant: "cut",
    pad: "md",
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-bold) 15px var(--font-display)',
      color: 'var(--ink-2)',
      textAlign: 'center'
    }
  }, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D\u043D\u0430\u043D \u049B\u0430\u0440\u0430"), /*#__PURE__*/React.createElement(QRTag, {
    seed: 'lesson-' + l.slug,
    caption: l.kk + ' — видео сабақ',
    size: mobile ? 130 : 150
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: mobile ? '1fr' : '0.85fr 1.15fr',
      gap: 26,
      marginTop: 34,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(ChessBoard, {
    cell: mobile ? 36 : 48,
    pieces: [{
      square: l.origin,
      type: l.piece,
      color: 'black'
    }],
    origin: l.origin,
    moves: l.moves
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: mobile ? 24 : 30
    }
  }, l.kk, " \u049B\u0430\u043B\u0430\u0439 \u0436\u04AF\u0440\u0435\u0434\u0456?"), /*#__PURE__*/React.createElement(Callout, {
    tone: "rule",
    title: "\u0415\u0440\u0435\u0436\u0435",
    style: {
      marginTop: 8
    }
  }, l.rule), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(StepList, {
    steps: [{
      title: 'Фигураны қой',
      body: l.origin.toUpperCase() + ' шаршысына ' + l.kk.toLowerCase() + 'ты орналастыр.'
    }, {
      title: 'Мүмкін жүрістер',
      body: 'Қызыл нүктелер — фигура жүре алатын шаршылар.'
    }, {
      title: 'Өзің сынап көр',
      body: 'Видеомен бірге тақтада қайтала.'
    }]
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 12,
      marginTop: 40,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    disabled: !prev,
    onClick: () => prev && onOpen(prev),
    iconLeft: /*#__PURE__*/React.createElement("span", null, "\u2190")
  }, prev ? prev.kk : 'Басы'), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    disabled: !next,
    onClick: () => next && onOpen(next),
    iconRight: /*#__PURE__*/React.createElement("span", null, "\u2192")
  }, "\u041A\u0435\u043B\u0435\u0441\u0456: ", next ? next.kk : 'Бітті!')));
}
Object.assign(window, {
  LessonScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/LessonScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
// Кулыншақ website — shared demo data (loaded before the screens)
window.KU_DATA = {
  lessons: [{
    n: 1,
    slug: 'rook',
    piece: 'rook',
    kk: 'Тұра',
    ru: 'Ладья',
    move: 'Тік және көлденең — қалаған қашықтыққа.',
    level: 'Оңай',
    tone: 'olive',
    mins: 4,
    origin: 'd4',
    moves: ['d1', 'd2', 'd3', 'd5', 'd6', 'd7', 'd8', 'a4', 'b4', 'c4', 'e4', 'f4', 'g4', 'h4'],
    rule: 'Тұра тек түзу сызықпен жүреді. Бұрышқа бұрыла алмайды.'
  }, {
    n: 2,
    slug: 'bishop',
    piece: 'bishop',
    kk: 'Піл',
    ru: 'Слон',
    move: 'Тек қиғаш (диагональ) бойынша жүреді.',
    level: 'Оңай',
    tone: 'olive',
    mins: 4,
    origin: 'd4',
    moves: ['a1', 'b2', 'c3', 'e5', 'f6', 'g7', 'h8', 'a7', 'b6', 'c5', 'e3', 'f2', 'g1'],
    rule: 'Піл басынан аяғына дейін бір түсті шаршыда қалады.'
  }, {
    n: 3,
    slug: 'knight',
    piece: 'knight',
    kk: 'Ат',
    ru: 'Конь',
    move: '«Г» әрпімен секіреді — басқа фигуралардан аттап өтеді.',
    level: 'Орта',
    tone: 'teal',
    mins: 6,
    origin: 'd4',
    moves: ['b3', 'b5', 'c2', 'c6', 'e2', 'e6', 'f3', 'f5'],
    rule: 'Ат — жалғыз секіретін фигура. Ол тұлпардай аттап өтеді!'
  }, {
    n: 4,
    slug: 'queen',
    piece: 'queen',
    kk: 'Уәзір',
    ru: 'Ферзь',
    move: 'Барлық бағытта — тұра мен пілді қосқандай.',
    level: 'Орта',
    tone: 'teal',
    mins: 6,
    origin: 'd4',
    moves: ['d1', 'd2', 'd3', 'd5', 'd6', 'd7', 'd8', 'a4', 'b4', 'c4', 'e4', 'f4', 'g4', 'h4', 'a1', 'b2', 'c3', 'e5', 'f6', 'g7', 'h8', 'a7', 'b6', 'c5', 'e3', 'f2', 'g1'],
    rule: 'Уәзір — ең күшті фигура. Оны абайлап қолдан!'
  }, {
    n: 5,
    slug: 'king',
    piece: 'king',
    kk: 'Патша',
    ru: 'Король',
    move: 'Кез келген бағытта, бірақ бір ғана қадам.',
    level: 'Күрделі',
    tone: 'clay',
    mins: 7,
    origin: 'd4',
    moves: ['c3', 'c4', 'c5', 'd3', 'd5', 'e3', 'e4', 'e5'],
    rule: 'Патшаны қорға! Оны жоғалтсаң — ойын бітеді.'
  }, {
    n: 6,
    slug: 'pawn',
    piece: 'pawn',
    kk: 'Сарбаз',
    ru: 'Пешка',
    move: 'Алға жүреді, қиғаш ұрады. Соңына жетсе — уәзірге айналады.',
    level: 'Күрделі',
    tone: 'clay',
    mins: 7,
    origin: 'd2',
    moves: ['d3', 'd4', 'c3', 'e3'],
    rule: 'Сарбаз артқа жүрмейді. Ол — болашақ тұлпар!'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.ChessBoard = __ds_scope.ChessBoard;

__ds_ns.ChessPiece = __ds_scope.ChessPiece;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.QRTag = __ds_scope.QRTag;

__ds_ns.StepList = __ds_scope.StepList;

__ds_ns.Sticker = __ds_scope.Sticker;

})();
