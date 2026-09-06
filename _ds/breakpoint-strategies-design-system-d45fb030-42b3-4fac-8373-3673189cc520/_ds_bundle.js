/* @ds-bundle: {"format":4,"namespace":"BreakpointStrategiesDesignSystem_d45fb0","components":[{"name":"Eyebrow","sourcePath":"components/brand/Eyebrow.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Quote","sourcePath":"components/brand/Quote.jsx"},{"name":"SectionHeading","sourcePath":"components/brand/SectionHeading.jsx"},{"name":"Stat","sourcePath":"components/brand/Stat.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"NavLink","sourcePath":"components/navigation/NavLink.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/brand/Eyebrow.jsx":"120bdc1408ee","components/brand/Logo.jsx":"8a86e9bef13b","components/brand/Quote.jsx":"3366ffb34d6a","components/brand/SectionHeading.jsx":"17c0c3d27241","components/brand/Stat.jsx":"5aba6ebfe14d","components/core/Badge.jsx":"1fafe2587cc4","components/core/Button.jsx":"8f888cae7621","components/core/Card.jsx":"6de95b244747","components/core/Icon.jsx":"53df1387c351","components/core/IconButton.jsx":"893960c3208e","components/core/Tag.jsx":"0f5a64f8062c","components/feedback/Dialog.jsx":"0b3eea9fa62c","components/feedback/Toast.jsx":"34ab0214baf9","components/feedback/Tooltip.jsx":"570db9e51429","components/forms/Checkbox.jsx":"4cb5bd8b0353","components/forms/Field.jsx":"992c962a4a85","components/forms/Input.jsx":"b224afb3aa25","components/forms/Radio.jsx":"3248b0e284c7","components/forms/Select.jsx":"12937aac4d29","components/forms/Switch.jsx":"e22818ecd5e7","components/forms/Textarea.jsx":"1956257eba2c","components/navigation/NavLink.jsx":"993e4942200b","components/navigation/Tabs.jsx":"ee60081fe863","ui_kits/website/About.jsx":"c0918ad16606","ui_kits/website/Capabilities.jsx":"27897ead580f","ui_kits/website/Chrome.jsx":"ac479403160d","ui_kits/website/Contact.jsx":"ee401a4419b2","ui_kits/website/Home.jsx":"ee5cf27af2e5","ui_kits/website/Work.jsx":"ad8fc040b36e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BreakpointStrategiesDesignSystem_d45fb0 = window.BreakpointStrategiesDesignSystem_d45fb0 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Eyebrow({
  children,
  tone = 'default',
  as = 'div',
  className = '',
  style = {},
  ...rest
}) {
  const color = tone === 'brand' ? 'var(--citrus)' : tone === 'inverse' ? 'var(--text-inverse-muted)' : 'var(--text-muted)';
  const El = as;
  return /*#__PURE__*/React.createElement(El, _extends({
    className: className,
    style: {
      fontFamily: 'var(--font-eyebrow)',
      fontSize: 'var(--text-2xs)',
      fontWeight: 'var(--weight-medium)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color,
      lineHeight: 1.4,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SRC = {
  'lockup-black': 'bp-logo-full-black.png',
  'lockup-white': 'bp-logo-full-white.png',
  'lockup-citrus': 'bp-logo-full-citrus.png',
  'wordmark-black': 'bp-wordmark-black.png',
  'wordmark-white': 'bp-wordmark-white.png',
  'wordmark-citrus': 'bp-wordmark-citrus.png',
  'mark-black': 'bp-mark-black.png',
  'mark-white': 'bp-mark-white.png',
  'mark-citrus': 'bp-mark-citrus.png'
};
function Logo({
  variant = 'lockup-black',
  height = 32,
  assetBase = 'assets/logo',
  className = '',
  style = {},
  ...rest
}) {
  const file = SRC[variant] || SRC['lockup-black'];
  const h = typeof height === 'string' && /^\d+(\.\d+)?$/.test(height) ? Number(height) : height;
  return /*#__PURE__*/React.createElement("img", _extends({
    src: `${assetBase}/${file}`,
    alt: "breakpoint strategies",
    className: className,
    style: {
      height: h,
      width: 'auto',
      display: 'block',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/Quote.jsx
try { (() => {
function Quote({
  children,
  attribution,
  role,
  tone = 'default',
  size = 'md',
  className = '',
  style = {}
}) {
  const inv = tone === 'inverse';
  return /*#__PURE__*/React.createElement("figure", {
    className: className,
    style: {
      margin: 0,
      display: 'grid',
      gap: 'var(--space-6)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontWeight: 'var(--weight-regular)',
      fontSize: size === 'lg' ? 'var(--text-d3)' : 'var(--text-h3)',
      lineHeight: 'var(--lh-heading)',
      letterSpacing: 'var(--ls-heading)',
      color: inv ? 'var(--text-inverse)' : 'var(--text-strong)',
      maxWidth: '34ch'
    }
  }, children), (attribution || role) && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'grid',
      gap: 2,
      paddingTop: 'var(--space-4)',
      borderTop: `1px solid ${inv ? 'var(--border-inverse)' : 'var(--border-default)'}`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-eyebrow)',
      fontSize: 'var(--text-2xs)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: inv ? 'var(--text-inverse)' : 'var(--text-strong)'
    }
  }, attribution), role && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: inv ? 'var(--text-inverse-muted)' : 'var(--text-muted)'
    }
  }, role)));
}
Object.assign(__ds_scope, { Quote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Quote.jsx", error: String((e && e.message) || e) }); }

// components/brand/SectionHeading.jsx
try { (() => {
function SectionHeading({
  eyebrow,
  title,
  lede,
  align = 'left',
  tone = 'default',
  rule = true,
  className = '',
  style = {}
}) {
  const inv = tone === 'inverse';
  return /*#__PURE__*/React.createElement("header", {
    className: className,
    style: {
      textAlign: align,
      display: 'grid',
      gap: 'var(--space-4)',
      maxWidth: align === 'center' ? '720px' : 'none',
      margin: align === 'center' ? '0 auto' : undefined,
      ...style
    }
  }, rule && /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: inv ? 'var(--border-inverse)' : 'var(--border-default)'
    }
  }), eyebrow && /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: inv ? 'inverse' : 'brand'
  }, eyebrow), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 'var(--text-d3)',
      lineHeight: 'var(--lh-tight)',
      letterSpacing: 'var(--ls-heading)',
      color: inv ? 'var(--text-inverse)' : 'var(--text-strong)'
    }
  }, title), lede && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-lead)',
      lineHeight: 'var(--lh-body)',
      color: inv ? 'var(--text-inverse-muted)' : 'var(--text-muted)',
      maxWidth: 'var(--measure)'
    }
  }, lede));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/brand/Stat.jsx
try { (() => {
function Stat({
  value,
  label,
  detail,
  tone = 'default',
  className = '',
  style = {}
}) {
  const inv = tone === 'inverse';
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      display: 'grid',
      gap: 'var(--space-2)',
      paddingTop: 'var(--space-4)',
      borderTop: `1px solid ${inv ? 'var(--border-inverse)' : 'var(--border-default)'}`,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h1)',
      lineHeight: 1,
      letterSpacing: 'var(--ls-heading)',
      color: tone === 'brand' ? 'var(--citrus)' : inv ? 'var(--text-inverse)' : 'var(--text-strong)'
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-eyebrow)',
      fontSize: 'var(--text-2xs)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: inv ? 'var(--text-inverse-muted)' : 'var(--text-muted)'
    }
  }, label), detail && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-sm)',
      color: inv ? 'var(--text-inverse-muted)' : 'var(--text-muted)',
      maxWidth: '32ch'
    }
  }, detail));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Stat.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONE = {
  neutral: ['var(--neutral-100)', 'var(--text-default)'],
  brand: ['var(--citrus-tint)', 'var(--citrus-press)'],
  success: ['var(--success-tint)', 'var(--success)'],
  warning: ['var(--warning-tint)', 'var(--warning)'],
  danger: ['var(--danger-tint)', 'var(--danger)'],
  info: ['var(--info-tint)', 'var(--info)'],
  inverse: ['var(--alpha-white-12)', '#fff']
};
function Badge({
  children,
  tone = 'neutral',
  variant = 'soft',
  className = '',
  style = {},
  ...rest
}) {
  const [bg, fg] = TONE[tone] || TONE.neutral;
  const solid = variant === 'solid';
  return /*#__PURE__*/React.createElement("span", _extends({
    className: className,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      height: 22,
      padding: '0 10px',
      borderRadius: 'var(--radius-pill)',
      background: solid ? fg : bg,
      color: solid ? '#fff' : fg,
      fontFamily: 'var(--font-eyebrow)',
      fontSize: 'var(--text-2xs)',
      fontWeight: 'var(--weight-medium)',
      letterSpacing: 'var(--ls-button)',
      textTransform: 'uppercase',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  children,
  variant = 'outline',
  interactive = false,
  padding = 'var(--space-7)',
  as = 'div',
  className = '',
  style = {},
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const on = interactive && h;
  const map = {
    outline: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      color: 'var(--text-default)'
    },
    muted: {
      background: 'var(--surface-muted)',
      border: '1px solid transparent',
      color: 'var(--text-default)'
    },
    sand: {
      background: 'var(--surface-sand)',
      border: '1px solid transparent',
      color: 'var(--text-default)'
    },
    inverse: {
      background: 'var(--surface-inverse)',
      border: '1px solid var(--border-inverse)',
      color: 'var(--text-inverse)'
    },
    brand: {
      background: 'var(--surface-brand)',
      border: '1px solid var(--citrus)',
      color: '#fff'
    },
    plain: {
      background: 'transparent',
      border: '1px solid transparent',
      color: 'var(--text-default)'
    }
  };
  const El = as;
  return /*#__PURE__*/React.createElement(El, _extends({
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    className: className,
    style: {
      borderRadius: 'var(--radius-2)',
      padding,
      transition: 'border-color var(--dur-base) var(--ease-standard),box-shadow var(--dur-base) var(--ease-standard),transform var(--dur-base) var(--ease-out)',
      ...(map[variant] || map.outline),
      ...(on ? {
        borderColor: variant === 'inverse' ? 'rgba(255,255,255,.32)' : 'var(--ink)',
        boxShadow: 'var(--shadow-pop)',
        transform: 'translateY(-2px)'
      } : null),
      cursor: interactive ? 'pointer' : undefined,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BASE = 'https://unpkg.com/lucide-static@0.446.0/icons/';
function Icon({
  name = 'arrow-right',
  size = 18,
  strokeWidth,
  color = 'currentColor',
  className = '',
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "img",
    "aria-hidden": "true",
    className: className,
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      flex: '0 0 auto',
      backgroundColor: color,
      WebkitMaskImage: `url(${BASE}${name}.svg)`,
      maskImage: `url(${BASE}${name}.svg)`,
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZE = {
  sm: {
    h: 'var(--control-h-sm)',
    px: 'var(--control-px-sm)',
    fs: 'var(--text-2xs)'
  },
  md: {
    h: 'var(--control-h-md)',
    px: 'var(--control-px-md)',
    fs: 'var(--text-xs)'
  },
  lg: {
    h: 'var(--control-h-lg)',
    px: 'var(--control-px-lg)',
    fs: 'var(--text-sm)'
  }
};
function look(variant, hover) {
  switch (variant) {
    case 'secondary':
      return hover ? {
        background: 'var(--ink)',
        color: '#fff',
        borderColor: 'var(--ink)'
      } : {
        background: 'transparent',
        color: 'var(--text-strong)',
        borderColor: 'var(--ink)'
      };
    case 'ghost':
      return hover ? {
        background: 'var(--alpha-ink-04)',
        color: 'var(--citrus)',
        borderColor: 'transparent'
      } : {
        background: 'transparent',
        color: 'var(--text-strong)',
        borderColor: 'transparent'
      };
    case 'inverse':
      return hover ? {
        background: 'var(--citrus)',
        color: '#fff',
        borderColor: 'var(--citrus)'
      } : {
        background: 'transparent',
        color: '#fff',
        borderColor: 'rgba(255,255,255,.4)'
      };
    case 'link':
      return hover ? {
        background: 'transparent',
        color: 'var(--citrus-press)',
        borderColor: 'transparent'
      } : {
        background: 'transparent',
        color: 'var(--citrus)',
        borderColor: 'transparent'
      };
    default:
      return hover ? {
        background: 'var(--citrus-press)',
        color: '#fff',
        borderColor: 'var(--citrus-press)'
      } : {
        background: 'var(--citrus)',
        color: '#fff',
        borderColor: 'var(--citrus)'
      };
  }
}
function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconAfter,
  disabled = false,
  fullWidth = false,
  href,
  onClick,
  type = 'button',
  className = '',
  style = {},
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const [p, setP] = React.useState(false);
  const s = SIZE[size] || SIZE.md;
  const v = look(variant, h && !disabled);
  const El = href ? 'a' : 'button';
  const link = variant === 'link';
  return /*#__PURE__*/React.createElement(El, _extends({
    href: href,
    type: href ? undefined : type,
    onClick: disabled ? undefined : onClick,
    disabled: El === 'button' ? disabled : undefined,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => {
      setH(false);
      setP(false);
    },
    onMouseDown: () => setP(true),
    onMouseUp: () => setP(false),
    className: className,
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-2)',
      height: link ? 'auto' : s.h,
      padding: link ? 0 : `0 ${s.px}`,
      border: '1px solid',
      borderRadius: link ? 0 : 'var(--radius-pill)',
      borderBottom: link ? '1px solid currentColor' : undefined,
      fontFamily: 'var(--font-eyebrow)',
      fontSize: s.fs,
      fontWeight: 'var(--weight-medium)',
      letterSpacing: 'var(--ls-button)',
      textTransform: 'uppercase',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .38 : 1,
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      transform: p && !disabled ? 'translateY(1px)' : 'none',
      transition: 'var(--transition-ui),transform var(--dur-instant) var(--ease-standard)',
      ...v,
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'lg' ? 18 : 16
  }), children, iconAfter && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconAfter,
    size: size === 'lg' ? 18 : 16
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const S = {
  sm: 34,
  md: 44,
  lg: 54
};
function IconButton({
  icon = 'x',
  label,
  variant = 'ghost',
  size = 'md',
  disabled = false,
  onClick,
  className = '',
  style = {},
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const d = S[size] || S.md;
  const solid = variant === 'solid',
    outline = variant === 'outline',
    inverse = variant === 'inverse';
  const bg = solid ? h ? 'var(--citrus-press)' : 'var(--citrus)' : h ? inverse ? 'var(--alpha-white-12)' : 'var(--alpha-ink-04)' : 'transparent';
  const fg = solid ? '#fff' : inverse ? '#fff' : h ? 'var(--citrus)' : 'var(--text-strong)';
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label || icon,
    onClick: disabled ? undefined : onClick,
    disabled: disabled,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    className: className,
    style: {
      width: d,
      height: d,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: bg,
      color: fg,
      border: outline ? '1px solid var(--border-emphasis)' : '1px solid transparent',
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .38 : 1,
      transition: 'var(--transition-ui)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'sm' ? 16 : size === 'lg' ? 22 : 18
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  children,
  selected = false,
  onClick,
  onRemove,
  className = '',
  style = {},
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const inter = !!onClick;
  return /*#__PURE__*/React.createElement("span", _extends({
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    className: className,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      height: 30,
      padding: '0 14px',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid',
      borderColor: selected ? 'var(--ink)' : inter && h ? 'var(--ink)' : 'var(--border-emphasis)',
      background: selected ? 'var(--ink)' : 'transparent',
      color: selected ? '#fff' : 'var(--text-default)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      letterSpacing: 'var(--ls-nav)',
      cursor: inter ? 'pointer' : 'default',
      transition: 'var(--transition-ui)',
      ...style
    }
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("button", {
    "aria-label": "Remove",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    style: {
      all: 'unset',
      cursor: 'pointer',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 13
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open = false,
  title,
  children,
  footer,
  onClose,
  width = 560,
  className = '',
  style = {}
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    role: "presentation",
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 60,
      background: 'var(--surface-overlay)',
      backdropFilter: 'blur(2px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    className: className,
    style: {
      width: '100%',
      maxWidth: width,
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-2)',
      boxShadow: 'var(--shadow-modal)',
      display: 'grid',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 'var(--space-4)',
      padding: 'var(--space-7) var(--space-7) var(--space-5)',
      borderBottom: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h3)',
      lineHeight: 'var(--lh-heading)',
      letterSpacing: 'var(--ls-heading)',
      color: 'var(--text-strong)'
    }
  }, title), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Close",
    size: "sm",
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-6) var(--space-7)',
      fontSize: 'var(--text-body)',
      color: 'var(--text-default)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 'var(--space-3)',
      padding: 'var(--space-5) var(--space-7) var(--space-7)'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const TONE = {
  neutral: ['var(--ink)', '#fff', 'info'],
  success: ['var(--success)', '#fff', 'check'],
  danger: ['var(--danger)', '#fff', 'triangle-alert'],
  brand: ['var(--citrus)', '#fff', 'info']
};
function Toast({
  children,
  tone = 'neutral',
  onClose,
  className = '',
  style = {}
}) {
  const [bg, fg, ic] = TONE[tone] || TONE.neutral;
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    className: className,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      background: bg,
      color: fg,
      padding: 'var(--space-3) var(--space-3) var(--space-3) var(--space-5)',
      borderRadius: 'var(--radius-pill)',
      boxShadow: 'var(--shadow-pop)',
      fontSize: 'var(--text-sm)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: ic,
    size: 16,
    color: fg
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      paddingRight: 'var(--space-2)'
    }
  }, children), onClose && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Dismiss",
    size: "sm",
    variant: "inverse",
    onClick: onClose
  }));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  label,
  children,
  placement = 'top',
  className = '',
  style = {}
}) {
  const [show, setShow] = React.useState(false);
  const pos = placement === 'bottom' ? {
    top: 'calc(100% + 8px)'
  } : placement === 'left' ? {
    right: 'calc(100% + 8px)',
    top: '50%',
    transform: 'translateY(-50%)'
  } : placement === 'right' ? {
    left: 'calc(100% + 8px)',
    top: '50%',
    transform: 'translateY(-50%)'
  } : {
    bottom: 'calc(100% + 8px)'
  };
  const centre = placement === 'top' || placement === 'bottom' ? {
    left: '50%',
    transform: 'translateX(-50%)'
  } : {};
  return /*#__PURE__*/React.createElement("span", {
    className: className,
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      ...pos,
      ...centre,
      zIndex: 40,
      pointerEvents: 'none',
      opacity: show ? 1 : 0,
      transition: 'opacity var(--dur-fast) var(--ease-standard)',
      background: 'var(--ink)',
      color: '#fff',
      padding: '6px 10px',
      borderRadius: 'var(--radius-2)',
      fontSize: 'var(--text-2xs)',
      lineHeight: 1.4,
      whiteSpace: 'nowrap'
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  checked,
  defaultChecked,
  onChange,
  label,
  disabled = false,
  className = '',
  style = {}
}) {
  const controlled = checked !== undefined;
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = controlled ? checked : inner;
  return /*#__PURE__*/React.createElement("label", {
    className: className,
    style: {
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: on,
    onChange: e => {
      if (!controlled) setInner(e.target.checked);
      onChange && onChange(e);
    },
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      flex: '0 0 auto',
      marginTop: 2,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid',
      borderColor: on ? 'var(--citrus)' : 'var(--border-emphasis)',
      background: on ? 'var(--citrus)' : 'var(--surface-page)',
      borderRadius: 'var(--radius-1)',
      transition: 'var(--transition-ui)'
    }
  }, on && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 13,
    color: "#fff"
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      lineHeight: 1.45,
      color: 'var(--text-default)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function Field({
  label,
  hint,
  error,
  required = false,
  htmlFor,
  children,
  className = '',
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      display: 'grid',
      gap: 'var(--space-2)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      fontFamily: 'var(--font-eyebrow)',
      fontSize: 'var(--text-2xs)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--citrus)',
      marginLeft: 4
    }
  }, "*")), children, (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: error ? 'var(--danger)' : 'var(--text-subtle)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  value,
  defaultValue,
  onChange,
  placeholder,
  type = 'text',
  disabled = false,
  error = false,
  id,
  name,
  className = '',
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    name: name,
    type: type,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    className: className,
    style: {
      ...{
        width: '100%',
        height: 'var(--control-h-md)',
        padding: '0 var(--space-4)',
        background: 'var(--surface-page)',
        border: '1px solid',
        borderColor: error ? 'var(--danger)' : focus ? 'var(--citrus)' : 'var(--border-emphasis)',
        borderRadius: 'var(--radius-2)',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-body)',
        color: 'var(--text-strong)',
        outline: 'none',
        boxShadow: focus ? '0 0 0 3px var(--citrus-tint)' : 'none',
        opacity: disabled ? .5 : 1,
        transition: 'var(--transition-ui),box-shadow var(--dur-fast) var(--ease-standard)'
      },
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  checked,
  onChange,
  label,
  name,
  value,
  disabled = false,
  className = '',
  style = {}
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: className,
    style: {
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      flex: '0 0 auto',
      marginTop: 2,
      borderRadius: 'var(--radius-pill)',
      border: '1px solid',
      borderColor: checked ? 'var(--citrus)' : 'var(--border-emphasis)',
      background: 'var(--surface-page)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'var(--transition-ui)'
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--citrus)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      lineHeight: 1.45,
      color: 'var(--text-default)'
    }
  }, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  value,
  defaultValue,
  onChange,
  options = [],
  placeholder,
  disabled = false,
  error = false,
  id,
  name,
  className = '',
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    className: className,
    style: {
      position: 'relative',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: id,
    name: name,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...{
        width: '100%',
        height: 'var(--control-h-md)',
        padding: '0 var(--space-4)',
        background: 'var(--surface-page)',
        border: '1px solid',
        borderColor: error ? 'var(--danger)' : focus ? 'var(--citrus)' : 'var(--border-emphasis)',
        borderRadius: 'var(--radius-2)',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-body)',
        color: 'var(--text-strong)',
        outline: 'none',
        boxShadow: focus ? '0 0 0 3px var(--citrus-tint)' : 'none',
        opacity: disabled ? .5 : 1,
        transition: 'var(--transition-ui),box-shadow var(--dur-fast) var(--ease-standard)'
      },
      appearance: 'none',
      paddingRight: 'var(--space-9)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      ...style
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => {
    const v = typeof o === 'string' ? o : o.value;
    const l = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16,
    style: {
      position: 'absolute',
      right: 'var(--space-4)',
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      backgroundColor: 'var(--text-muted)'
    }
  }));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked,
  defaultChecked,
  onChange,
  label,
  disabled = false,
  className = '',
  style = {}
}) {
  const controlled = checked !== undefined;
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = controlled ? checked : inner;
  return /*#__PURE__*/React.createElement("label", {
    className: className,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    role: "switch",
    checked: on,
    disabled: disabled,
    onChange: e => {
      if (!controlled) setInner(e.target.checked);
      onChange && onChange(e);
    },
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 42,
      height: 24,
      padding: 3,
      borderRadius: 'var(--radius-pill)',
      background: on ? 'var(--citrus)' : 'var(--neutral-300)',
      display: 'inline-flex',
      alignItems: 'center',
      transition: 'background-color var(--dur-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: 'var(--radius-pill)',
      background: '#fff',
      transform: on ? 'translateX(18px)' : 'translateX(0)',
      transition: 'transform var(--dur-base) var(--ease-out)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-default)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  value,
  defaultValue,
  onChange,
  placeholder,
  rows = 4,
  disabled = false,
  error = false,
  id,
  name,
  className = '',
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("textarea", _extends({
    id: id,
    name: name,
    rows: rows,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    className: className,
    style: {
      ...{
        width: '100%',
        height: 'var(--control-h-md)',
        padding: '0 var(--space-4)',
        background: 'var(--surface-page)',
        border: '1px solid',
        borderColor: error ? 'var(--danger)' : focus ? 'var(--citrus)' : 'var(--border-emphasis)',
        borderRadius: 'var(--radius-2)',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-body)',
        color: 'var(--text-strong)',
        outline: 'none',
        boxShadow: focus ? '0 0 0 3px var(--citrus-tint)' : 'none',
        opacity: disabled ? .5 : 1,
        transition: 'var(--transition-ui),box-shadow var(--dur-fast) var(--ease-standard)'
      },
      height: 'auto',
      padding: 'var(--space-3) var(--space-4)',
      lineHeight: 'var(--lh-body)',
      resize: 'vertical',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function NavLink({
  children,
  href = '#',
  active = false,
  tone = 'default',
  onClick,
  className = '',
  style = {},
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const inv = tone === 'inverse';
  const base = inv ? 'var(--text-inverse-muted)' : 'var(--text-muted)';
  const strong = inv ? '#fff' : 'var(--text-strong)';
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    className: className,
    style: {
      fontFamily: 'var(--font-eyebrow)',
      fontSize: 'var(--text-2xs)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: active || h ? strong : base,
      textDecoration: 'none',
      borderBottom: '1px solid',
      borderColor: active ? 'var(--citrus)' : 'transparent',
      paddingBottom: 4,
      transition: 'var(--transition-ui)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { NavLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavLink.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  variant = 'underline',
  className = '',
  style = {}
}) {
  const first = tabs[0] && (typeof tabs[0] === 'string' ? tabs[0] : tabs[0].value);
  const controlled = value !== undefined;
  const [inner, setInner] = React.useState(defaultValue !== undefined ? defaultValue : first);
  const active = controlled ? value : inner;
  const pick = v => {
    if (!controlled) setInner(v);
    onChange && onChange(v);
  };
  const pill = variant === 'pill';
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    className: className,
    style: {
      display: 'flex',
      gap: pill ? 'var(--space-2)' : 'var(--space-7)',
      borderBottom: pill ? 'none' : '1px solid var(--border-default)',
      ...style
    }
  }, tabs.map(t => {
    const v = typeof t === 'string' ? t : t.value;
    const l = typeof t === 'string' ? t : t.label;
    const on = v === active;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      role: "tab",
      "aria-selected": on,
      onClick: () => pick(v),
      style: {
        all: 'unset',
        cursor: 'pointer',
        fontFamily: 'var(--font-eyebrow)',
        fontSize: 'var(--text-2xs)',
        letterSpacing: 'var(--ls-eyebrow)',
        textTransform: 'uppercase',
        color: on ? pill ? '#fff' : 'var(--text-strong)' : 'var(--text-muted)',
        padding: pill ? '8px 16px' : '0 0 var(--space-4)',
        borderRadius: pill ? 'var(--radius-pill)' : 0,
        background: pill && on ? 'var(--ink)' : 'transparent',
        boxShadow: !pill && on ? 'inset 0 -2px 0 var(--citrus)' : 'none',
        transition: 'var(--transition-ui)'
      }
    }, l);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/About.jsx
try { (() => {
const {
  SectionHeading,
  Eyebrow,
  Card,
  Stat,
  Quote,
  Button,
  Badge,
  Logo
} = window.BPDS;
const TEAM = [['Dana Whitfield', 'Founder — Strategy', 'Ex-category buyer, top-4 US grocer.'], ['Marcus Ely', 'Partner — Shelf', 'Fifteen years running national resets.'], ['Priya Raghavan', 'Partner — Commerce', 'Built retail media for two CPG challengers.'], ['Tom Okafor', 'Director — Insights', 'Nielsen and Circana alumnus.']];
function About({
  go
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, {
    tight: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr .9fr',
      gap: 'var(--space-10)',
      alignItems: 'end'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    rule: false,
    eyebrow: "About",
    title: "We built the firm we wanted to hire.",
    lede: "breakpoint was founded by operators who had been on both sides of the buying desk \u2014 and had run out of agencies that understood either one."
  }), /*#__PURE__*/React.createElement(Placeholder, {
    ratio: "4 / 3",
    label: "Team photography \u2014 not supplied"
  }))), /*#__PURE__*/React.createElement(Section, {
    tone: "ink",
    tight: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement(Quote, {
    tone: "inverse",
    size: "lg",
    attribution: "Dana Whitfield",
    role: "Founder"
  }, "A brand doesn't need a bigger agency. It needs someone who has stood in the aisle at 6am on reset day."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    tone: "inverse",
    value: "2019",
    label: "Founded"
  }), /*#__PURE__*/React.createElement(Stat, {
    tone: "brand",
    value: "9",
    label: "Senior operators"
  }), /*#__PURE__*/React.createElement(Stat, {
    tone: "inverse",
    value: "0",
    label: "Layers between you and them"
  })))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "The team",
    title: "Nine people. No pyramid."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-7)'
    }
  }, TEAM.map(([n, r, d]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: 'grid',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Placeholder, {
    ratio: "1 / 1",
    label: "Portrait"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-2)',
      borderTop: '1px solid var(--border-default)',
      paddingTop: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h4)',
      color: 'var(--text-strong)'
    }
  }, n), /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "brand"
  }, r), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, d))))))));
}
window.About = About;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Capabilities.jsx
try { (() => {
const {
  Eyebrow,
  SectionHeading,
  Card,
  Icon,
  Button,
  Tabs,
  Badge,
  Tooltip,
  IconButton
} = window.BPDS;
const PILLARS = [{
  k: 'strategy',
  icon: 'chart-no-axes-column',
  name: 'Strategy',
  lede: 'Where to play and what to sell before a single pitch goes out.',
  items: ['Channel and account prioritisation', 'Assortment and price-pack architecture', 'Category story and buyer narrative', 'Trade investment modelling']
}, {
  k: 'shelf',
  icon: 'store',
  name: 'Shelf',
  lede: 'The unglamorous work that decides whether the plan survives contact with retail.',
  items: ['Planogram and reset execution', 'Broker and field management', 'Merchandising and display programmes', 'Compliance auditing']
}, {
  k: 'commerce',
  icon: 'package',
  name: 'Commerce',
  lede: 'Digital shelf and omni performance, run to the same velocity standard.',
  items: ['Retail media planning', 'Content and PDP optimisation', 'Marketplace operations', 'Omni measurement']
}];
function Capabilities({
  go
}) {
  const [k, setK] = React.useState('strategy');
  const p = PILLARS.find(x => x.k === k);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, {
    tight: true,
    style: {
      paddingBottom: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    rule: false,
    eyebrow: "Capabilities",
    title: "Three pillars, one accountable team.",
    lede: "We scope narrowly and stay long. Every engagement names one senior lead who owns the number."
  })), /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    tabs: PILLARS.map(x => ({
      value: x.k,
      label: x.name
    })),
    value: k,
    onChange: setK
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '.9fr 1.1fr',
      gap: 'var(--space-10)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: p.icon,
    size: 28,
    color: "var(--citrus)"
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-d3)',
      lineHeight: 'var(--lh-tight)',
      color: 'var(--text-strong)'
    }
  }, p.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-lead)',
      color: 'var(--text-muted)',
      maxWidth: 'var(--measure-narrow)'
    }
  }, p.lede), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    iconAfter: "arrow-right",
    onClick: () => go('contact')
  }, "Scope a ", p.name.toLowerCase(), " engagement")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 0
    }
  }, p.items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: it,
    style: {
      display: 'flex',
      gap: 'var(--space-5)',
      alignItems: 'baseline',
      padding: 'var(--space-5) 0',
      borderTop: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      color: 'var(--citrus)'
    }
  }, "0", i + 1), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-body)',
      color: 'var(--text-default)'
    }
  }, it))))))), /*#__PURE__*/React.createElement(Section, {
    tone: "muted"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "How we work",
    title: "A twelve-week ramp, then a standing rhythm."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-7)'
    }
  }, [['Weeks 1–2', 'Diagnose', 'Data pull, buyer interviews, shelf audit.'], ['Weeks 3–6', 'Decide', 'Assortment, pricing and channel calls made.'], ['Weeks 7–12', 'Deploy', 'Reset executed, field programme live.'], ['Ongoing', 'Defend', 'Velocity reporting and quarterly re-plan.']].map(([w, t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      borderTop: '1px solid var(--border-emphasis)',
      paddingTop: 'var(--space-4)',
      display: 'grid',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "brand"
  }, w), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h4)',
      color: 'var(--text-strong)'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, d)))))));
}
window.Capabilities = Capabilities;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Capabilities.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
const {
  Logo,
  NavLink,
  Button,
  Eyebrow,
  Icon,
  IconButton
} = window.BPDS;
function Header({
  route,
  go
}) {
  const items = [['work', 'Work'], ['capabilities', 'Capabilities'], ['about', 'About']];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 30,
      background: 'var(--alpha-white-70)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: '0 var(--space-7)',
      height: 76,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('home');
    },
    style: {
      border: 0,
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "lockup-black",
    height: 26,
    assetBase: "../../assets/logo"
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 'var(--space-7)',
      alignItems: 'center'
    }
  }, items.map(([k, l]) => /*#__PURE__*/React.createElement(NavLink, {
    key: k,
    href: "#",
    active: route === k,
    onClick: e => {
      e.preventDefault();
      go(k);
    }
  }, l))), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    iconAfter: "arrow-right",
    onClick: () => go('contact')
  }, "Book an intro")));
}
function Footer({
  go
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-inverse)',
      color: 'var(--text-inverse)',
      padding: 'var(--space-11) var(--space-7) var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      display: 'grid',
      gap: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr',
      gap: 'var(--space-9)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "lockup-white",
    height: 28,
    assetBase: "../../assets/logo"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-inverse-muted)',
      fontSize: 'var(--text-sm)',
      maxWidth: '34ch'
    }
  }, "Retail expertise with boutique attention. Chicago and Bentonville.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "inverse"
  }, "Company"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-3)',
      justifyItems: 'start'
    }
  }, ['Work', 'Capabilities', 'About', 'Careers'].map(l => /*#__PURE__*/React.createElement(NavLink, {
    key: l,
    tone: "inverse",
    href: "#",
    onClick: e => {
      e.preventDefault();
      go(l.toLowerCase() === 'work' ? 'work' : 'capabilities');
    }
  }, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "inverse"
  }, "Contact"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-3)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-inverse-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "hello@breakpointstrategies.com"), /*#__PURE__*/React.createElement("span", null, "+1 312 555 0142")))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-inverse)',
      paddingTop: 'var(--space-5)',
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 'var(--text-2xs)',
      fontFamily: 'var(--font-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-inverse-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 breakpoint strategies"), /*#__PURE__*/React.createElement("span", null, "Privacy \u2014 Terms"))));
}
function Section({
  children,
  tone = 'default',
  tight = false,
  style = {}
}) {
  const bg = tone === 'muted' ? 'var(--surface-muted)' : tone === 'ink' ? 'var(--surface-inverse)' : tone === 'sand' ? 'var(--surface-sand)' : 'var(--surface-page)';
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: bg,
      padding: `${tight ? 'var(--section-y-tight)' : 'var(--section-y)'} var(--space-7)`,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto'
    }
  }, children));
}
function Placeholder({
  ratio = '16 / 9',
  label = 'Brand photography — not supplied',
  tone = 'muted',
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: ratio,
      background: tone === 'ink' ? 'var(--neutral-800)' : 'var(--neutral-200)',
      borderRadius: 'var(--radius-2)',
      display: 'grid',
      placeItems: 'center',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-eyebrow)',
      fontSize: 'var(--text-2xs)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: tone === 'ink' ? 'rgba(255,255,255,.4)' : 'var(--text-subtle)',
      textAlign: 'center',
      padding: '0 var(--space-6)'
    }
  }, label));
}
Object.assign(window, {
  Header,
  Footer,
  Section,
  Placeholder
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Contact.jsx
try { (() => {
const {
  Field,
  Input,
  Textarea,
  Select,
  Checkbox,
  Radio,
  Button,
  Card,
  Eyebrow,
  SectionHeading,
  Toast,
  Dialog,
  Badge,
  Icon
} = window.BPDS;
function Contact() {
  const [sent, setSent] = React.useState(false);
  const [model, setModel] = React.useState('retainer');
  const [email, setEmail] = React.useState('');
  const [err, setErr] = React.useState('');
  const submit = e => {
    e.preventDefault();
    if (!/.+@.+\..+/.test(email)) {
      setErr("That email address didn't validate.");
      return;
    }
    setErr('');
    setSent(true);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, {
    tight: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '.85fr 1.15fr',
      gap: 'var(--space-10)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    rule: false,
    eyebrow: "Book an intro",
    title: "Thirty minutes, no deck.",
    lede: "Tell us the account, the category and what's stalling. We'll tell you whether we're the right team."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-4)',
      paddingTop: 'var(--space-4)',
      borderTop: '1px solid var(--border-default)'
    }
  }, [['mail', 'hello@breakpointstrategies.com'], ['calendar', 'Reply within one business day'], ['store', 'Chicago — Bentonville']].map(([ic, t]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'center',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 16,
    color: "var(--citrus)"
  }), t)))), /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-8)"
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      display: 'grid',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Name",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Jane Ruiz"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Work email",
    required: true,
    error: err
  }, /*#__PURE__*/React.createElement(Input, {
    type: "email",
    error: !!err,
    value: email,
    onChange: e => setEmail(e.target.value),
    placeholder: "jane@brand.com"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Brand"
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Northline Household"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Primary channel"
  }, /*#__PURE__*/React.createElement(Select, {
    placeholder: "Select a channel",
    options: ['Grocery', 'Club', 'Mass', 'Convenience', 'Specialty']
  }))), /*#__PURE__*/React.createElement(Field, {
    label: "What are you trying to fix?",
    hint: "Two or three sentences is plenty."
  }, /*#__PURE__*/React.createElement(Textarea, {
    rows: 4,
    placeholder: "We lost two facings in the spring reset and velocity hasn't recovered."
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Engagement model"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      paddingTop: 'var(--space-1)'
    }
  }, [['retainer', 'Retainer'], ['project', 'Project'], ['advisory', 'Advisory']].map(([v, l]) => /*#__PURE__*/React.createElement(Radio, {
    key: v,
    name: "model",
    value: v,
    checked: model === v,
    onChange: () => setModel(v),
    label: l
  })))), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Send me the quarterly retail read"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    iconAfter: "arrow-right"
  }, "Send brief"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-subtle)'
    }
  }, "No sales sequence. One human reply.")))))), sent && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      bottom: 'var(--space-7)',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "success",
    onClose: () => setSent(false)
  }, "Brief sent \u2014 we'll reply within a day.")));
}
window.Contact = Contact;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
const {
  Button,
  Card,
  Eyebrow,
  SectionHeading,
  Stat,
  Quote,
  Icon,
  Badge,
  Tag,
  Logo
} = window.BPDS;
const CASES = [{
  tag: 'Grocery',
  title: 'Category reset across 2,100 doors',
  metric: '+4.2× sell-through',
  detail: 'Household care brand, top-4 US grocer.'
}, {
  tag: 'Club',
  title: 'Club launch in a single buying cycle',
  metric: '92% ACV in 9 months',
  detail: 'Better-for-you snacking, national club channel.'
}, {
  tag: 'Mass',
  title: 'Assortment rebuild after a delist',
  metric: 'Reinstated in 3 markets',
  detail: 'Personal care, mass retail.'
}];
function Home({
  go
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingTop: 'var(--space-11)',
      paddingBottom: 'var(--space-11)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.15fr .85fr',
      gap: 'var(--space-10)',
      alignItems: 'end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "brand"
  }, "Retail strategy \u2014 boutique scale"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-d1)',
      lineHeight: 'var(--lh-display)',
      letterSpacing: 'var(--ls-display)',
      color: 'var(--text-strong)'
    }
  }, "Big agencies don't know retail.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic'
    }
  }, "Boutiques can't scale.")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-lead)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-muted)',
      maxWidth: 'var(--measure-narrow)'
    }
  }, "breakpoint is the bridge \u2014 one senior team accountable from strategy through shelf."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    iconAfter: "arrow-right",
    onClick: () => go('contact')
  }, "Book an intro"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    onClick: () => go('work')
  }, "See the work"))), /*#__PURE__*/React.createElement(Placeholder, {
    ratio: "4 / 5",
    label: "Hero photography \u2014 not supplied"
  }))), /*#__PURE__*/React.createElement(Section, {
    tone: "muted",
    tight: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Trusted by brands selling into"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5,1fr)',
      gap: 'var(--space-6)'
    }
  }, ['Grocery', 'Club', 'Mass', 'Convenience', 'Specialty'].map(t => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      borderTop: '1px solid var(--border-emphasis)',
      paddingTop: 'var(--space-4)',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h4)',
      color: 'var(--text-strong)'
    }
  }, t))))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "The gap",
    title: "Retail is won at the shelf, not in the deck.",
    lede: "Most brands are choosing between a partner with reach and a partner with care. That trade-off is the problem we exist to remove."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-7)'
    }
  }, [['store', 'Retail-native', "Buyers, brokers, planograms, resets — we've sat on the other side of the table."], ['users', 'One senior team', 'No pyramid. The people in the pitch are the people on the account.'], ['trending-up', 'Accountable to velocity', 'We report on units off shelf, not impressions.']].map(([ic, t, d]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    padding: "var(--space-7)"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 22,
    color: "var(--citrus)"
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 'var(--space-5) 0 var(--space-3)',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h3)',
      lineHeight: 'var(--lh-heading)',
      color: 'var(--text-strong)'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, d)))))), /*#__PURE__*/React.createElement(Section, {
    tone: "ink"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    tone: "inverse",
    eyebrow: "Proof",
    title: "What a breakpoint engagement moves."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    tone: "brand",
    value: "4.2\xD7",
    label: "Sell-through lift",
    detail: "Category reset, national grocery."
  }), /*#__PURE__*/React.createElement(Stat, {
    tone: "inverse",
    value: "92%",
    label: "ACV reached",
    detail: "Club launch, nine months."
  }), /*#__PURE__*/React.createElement(Stat, {
    tone: "inverse",
    value: "12 wks",
    label: "Strategy to shelf",
    detail: "Median engagement ramp."
  }), /*#__PURE__*/React.createElement(Stat, {
    tone: "inverse",
    value: "18",
    label: "Retail partners",
    detail: "Active buying relationships."
  })))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Selected work",
    title: "Three resets, three channels."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-7)'
    }
  }, CASES.map(c => /*#__PURE__*/React.createElement(Card, {
    key: c.title,
    interactive: true,
    padding: "0",
    onClick: () => go('work'),
    style: {
      overflow: 'hidden',
      display: 'grid'
    }
  }, /*#__PURE__*/React.createElement(Placeholder, {
    ratio: "16 / 10",
    label: "Case imagery \u2014 not supplied",
    style: {
      borderRadius: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-6)',
      display: 'grid',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, c.tag), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h4)',
      lineHeight: 'var(--lh-heading)',
      color: 'var(--text-strong)'
    }
  }, c.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      color: 'var(--citrus)'
    }
  }, c.metric), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, c.detail))))))), /*#__PURE__*/React.createElement(Section, {
    tone: "sand",
    tight: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-10)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Quote, {
    size: "lg",
    attribution: "VP Sales",
    role: "Household care brand, top-4 US retailer"
  }, "They ran the reset like an owner, not a vendor."), /*#__PURE__*/React.createElement(Placeholder, {
    ratio: "3 / 2",
    label: "Client portrait \u2014 not supplied"
  }))), /*#__PURE__*/React.createElement(Section, {
    tight: true,
    style: {
      background: 'var(--surface-brand)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 'var(--space-8)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-d3)',
      lineHeight: 'var(--lh-tight)',
      color: '#fff',
      maxWidth: '26ch'
    }
  }, "Tell us where the shelf is going wrong."), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "inverse",
    iconAfter: "arrow-right",
    onClick: () => go('contact')
  }, "Book an intro"))));
}
window.Home = Home;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Work.jsx
try { (() => {
const {
  Tabs,
  Tag,
  Card,
  Badge,
  Eyebrow,
  SectionHeading,
  Button,
  Icon,
  Stat,
  Quote
} = window.BPDS;
const ITEMS = [{
  ch: 'Grocery',
  title: 'Category reset across 2,100 doors',
  metric: '+4.2× sell-through',
  svc: 'Strategy · Shelf'
}, {
  ch: 'Club',
  title: 'Club launch in a single buying cycle',
  metric: '92% ACV in 9 months',
  svc: 'Strategy · Commerce'
}, {
  ch: 'Mass',
  title: 'Assortment rebuild after a delist',
  metric: 'Reinstated in 3 markets',
  svc: 'Shelf'
}, {
  ch: 'Specialty',
  title: 'Regional-to-national distribution plan',
  metric: '+640 doors',
  svc: 'Strategy'
}, {
  ch: 'Grocery',
  title: 'Price-pack architecture rework',
  metric: '+310 bps margin',
  svc: 'Commerce'
}, {
  ch: 'Club',
  title: 'Roadshow programme redesign',
  metric: '2.1× trial rate',
  svc: 'Shelf · Commerce'
}];
function Work({
  go
}) {
  const [ch, setCh] = React.useState('All');
  const [svc, setSvc] = React.useState('All');
  const list = ITEMS.filter(i => (ch === 'All' || i.ch === ch) && (svc === 'All' || i.svc.includes(svc)));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, {
    tight: true,
    style: {
      paddingBottom: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    rule: false,
    eyebrow: "Selected work",
    title: "Engagements, and what they moved.",
    lede: "Filter by channel or by the part of the problem we owned."
  })), /*#__PURE__*/React.createElement(Section, {
    tight: true,
    style: {
      paddingTop: 0,
      paddingBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    tabs: ['All', 'Strategy', 'Shelf', 'Commerce'],
    value: svc,
    onChange: setSvc
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      flexWrap: 'wrap'
    }
  }, ['All', 'Grocery', 'Club', 'Mass', 'Specialty'].map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    selected: ch === t,
    onClick: () => setCh(t)
  }, t))))), /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingTop: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-subtle)'
    }
  }, list.length, " engagement", list.length === 1 ? '' : 's'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: 'var(--space-7)'
    }
  }, list.map(i => /*#__PURE__*/React.createElement(Card, {
    key: i.title,
    interactive: true,
    padding: "0",
    style: {
      display: 'grid',
      gridTemplateColumns: '160px 1fr',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Placeholder, {
    ratio: "auto",
    label: "Imagery",
    style: {
      borderRadius: 0,
      height: '100%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-6)',
      display: 'grid',
      gap: 'var(--space-3)',
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, i.ch), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-eyebrow)',
      fontSize: 'var(--text-2xs)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-subtle)'
    }
  }, i.svc)), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h4)',
      lineHeight: 'var(--lh-heading)',
      color: 'var(--text-strong)'
    }
  }, i.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      color: 'var(--citrus)'
    }
  }, i.metric))))), !list.length && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, "Nothing in that combination yet."))), /*#__PURE__*/React.createElement(Section, {
    tone: "muted",
    tight: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-10)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Quote, {
    attribution: "Founder",
    role: "Better-for-you snacking"
  }, "Nine months from first call to full club distribution."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "92%",
    label: "ACV reached",
    tone: "brand"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "2.1\xD7",
    label: "Trial rate"
  })))));
}
window.Work = Work;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Work.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Quote = __ds_scope.Quote;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.NavLink = __ds_scope.NavLink;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
