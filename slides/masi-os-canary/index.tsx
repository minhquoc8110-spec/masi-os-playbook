import type { CSSProperties } from 'react';
import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';

export const meta: SlideMeta = {
  title: 'MASI OS Canary',
  theme: 'masibio',
  createdAt: '2026-10-05T00:00:00.000Z',
};

export const design: DesignSystem = {
  palette: { bg: '#F5F9FC', text: '#102235', accent: '#047AC2' },
  fonts: {
    display: '"Be Vietnam Pro", Inter, system-ui, sans-serif',
    body: '"Be Vietnam Pro", Inter, system-ui, sans-serif',
  },
  typeScale: { hero: 112, body: 34 },
  radius: 28,
};

const C = {
  blue: '#047AC2',
  green: '#89C553',
  navy: '#102235',
  ink: '#1D3347',
  muted: '#5D7082',
  soft: '#E9F3FA',
  bg: '#F5F9FC',
  white: '#FFFFFF',
  line: 'rgba(16,34,53,.14)',
  red: '#D94A38',
};

const base: CSSProperties = {
  width: '100%',
  height: '100%',
  boxSizing: 'border-box',
  background: C.bg,
  color: C.navy,
  fontFamily: 'var(--osd-font-body)',
  padding: 96,
  position: 'relative',
  overflow: 'hidden',
};

const title: CSSProperties = {
  margin: 0,
  fontFamily: 'var(--osd-font-display)',
  fontSize: 82,
  lineHeight: 1.02,
  letterSpacing: '-0.045em',
  color: C.navy,
};

const kicker: CSSProperties = {
  margin: '0 0 28px',
  color: C.blue,
  fontSize: 22,
  fontWeight: 800,
  letterSpacing: '.18em',
  textTransform: 'uppercase',
};

const body: CSSProperties = { fontSize: 34, lineHeight: 1.32, color: C.ink, margin: 0 };
const small: CSSProperties = { fontSize: 22, lineHeight: 1.42, color: C.muted, margin: 0 };
const card: CSSProperties = {
  background: C.white,
  border: `1px solid ${C.line}`,
  borderRadius: 28,
  boxShadow: '0 22px 70px rgba(16,34,53,.08)',
  padding: 34,
};

function Mark() {
  return (
    <div style={{ position: 'absolute', right: 78, top: 58, display: 'flex', gap: 14, alignItems: 'center' }}>
      <div style={{ width: 34, height: 34, borderRadius: 10, background: C.blue }} />
      <div style={{ fontSize: 28, fontWeight: 900, color: C.navy, letterSpacing: '-.04em' }}>Masibio</div>
    </div>
  );
}

function Footer({ n }: { n: string }) {
  return (
    <div style={{ position: 'absolute', left: 96, right: 96, bottom: 54, display: 'flex', justifyContent: 'space-between', color: C.muted, fontSize: 18 }}>
      <span>MASI OS · Slides capability canary</span>
      <span>{n}</span>
    </div>
  );
}

function Pill({ children, tone = 'blue' }: { children: string; tone?: 'blue' | 'green' | 'red' }) {
  const bg = tone === 'green' ? 'rgba(137,197,83,.18)' : tone === 'red' ? 'rgba(217,74,56,.12)' : 'rgba(4,122,194,.12)';
  const color = tone === 'green' ? '#477A20' : tone === 'red' ? C.red : C.blue;
  return <span style={{ display: 'inline-block', borderRadius: 999, padding: '9px 16px', background: bg, color, fontSize: 20, fontWeight: 800 }}>{children}</span>;
}

const Cover: Page = () => (
  <div style={{ ...base, background: `radial-gradient(circle at 78% 18%, rgba(137,197,83,.28), transparent 28%), radial-gradient(circle at 5% 85%, rgba(4,122,194,.20), transparent 35%), ${C.bg}` }}>
    <Mark />
    <div style={{ marginTop: 142, maxWidth: 1180 }}>
      <p style={kicker}>Pilot deck · 80/20 build</p>
      <h1 style={{ ...title, fontSize: 116 }}>MASI OS</h1>
      <p style={{ ...body, marginTop: 32, maxWidth: 1010 }}>Corporate Brain & Execution Control Plane — biến tri thức, quyền hạn và bằng chứng thành một hệ điều hành vận hành doanh nghiệp.</p>
    </div>
    <div style={{ position: 'absolute', right: 96, bottom: 120, width: 460, ...card }}>
      <Pill>Canary scope</Pill>
      <p style={{ ...small, marginTop: 22 }}>Web deck trước. PDF/PPTX là gate kiểm chứng, không phải lời hứa production.</p>
    </div>
    <Footer n="01 / 08" />
  </div>
);

const Problem: Page = () => (
  <div style={base}>
    <Mark />
    <p style={kicker}>Vấn đề thật</p>
    <h2 style={title}>Doanh nghiệp không thiếu công cụ. Doanh nghiệp thiếu Operating Truth.</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28, marginTop: 64 }}>
      {[
        ['Chat', 'Quyết định trôi mất trong Zalo, email, thread.'],
        ['File', 'Tài liệu có nhiều bản, không biết đâu là canon.'],
        ['Task', 'Việc chạy nhưng bằng chứng và authority không nối vào nhau.'],
      ].map(([h, t]) => (
        <div key={h} style={card}>
          <div style={{ fontSize: 42, fontWeight: 900, color: C.blue }}>{h}</div>
          <p style={{ ...body, fontSize: 29, marginTop: 28 }}>{t}</p>
        </div>
      ))}
    </div>
    <Footer n="02 / 08" />
  </div>
);

const Doctrine: Page = () => (
  <div style={base}>
    <Mark />
    <p style={kicker}>Doctrine</p>
    <h2 style={title}>R1 làm thật. R2 chuẩn hóa. R3 hỗ trợ, không thay quyền con người.</h2>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 26, marginTop: 58 }}>
      {[
        ['R1 Manual', 'Con người giao việc, làm việc, để lại evidence.'],
        ['R2 Automation', 'Form, register, workflow, hệ thống hóa việc lặp lại.'],
        ['R3 AI', 'Agent đọc ngữ cảnh, đề xuất, dựng artifact, QA.'],
      ].map(([h, t], i) => (
        <div key={h} style={{ ...card, borderTop: `10px solid ${i === 0 ? C.navy : i === 1 ? C.blue : C.green}` }}>
          <div style={{ fontSize: 34, fontWeight: 900 }}>{h}</div>
          <p style={{ ...small, marginTop: 18, fontSize: 25 }}>{t}</p>
        </div>
      ))}
    </div>
    <div style={{ marginTop: 42 }}><Pill tone="green">Rule: R2 không phụ thuộc R3</Pill></div>
    <Footer n="03 / 08" />
  </div>
);

const Architecture: Page = () => (
  <div style={base}>
    <Mark />
    <p style={kicker}>Architecture</p>
    <h2 style={title}>Chuỗi tạo giá trị phải đi từ quyết định đến bằng chứng.</h2>
    <div style={{ display: 'flex', alignItems: 'stretch', gap: 18, marginTop: 74 }}>
      {['CEO', 'AI Control Tower', 'BA System', 'Forge', 'Runtime', 'Evidence'].map((x, i) => (
        <div key={x} style={{ flex: 1, minHeight: 230, ...card, padding: 26, background: i === 0 ? C.navy : i === 5 ? 'rgba(137,197,83,.16)' : C.white }}>
          <div style={{ color: i === 0 ? C.white : C.blue, fontSize: 48, fontWeight: 950 }}>{String(i + 1).padStart(2, '0')}</div>
          <div style={{ marginTop: 34, color: i === 0 ? C.white : C.navy, fontSize: 26, lineHeight: 1.1, fontWeight: 900 }}>{x}</div>
        </div>
      ))}
    </div>
    <p style={{ ...small, marginTop: 42 }}>Không để AI tự quyết ở nơi có hậu quả cao. Admission, authority và QA phải đứng trước execution.</p>
    <Footer n="04 / 08" />
  </div>
);

const OperatingTruth: Page = () => (
  <div style={base}>
    <Mark />
    <p style={kicker}>Operating Truth</p>
    <h2 style={title}>Mỗi hệ thống giữ một vai trò. Không trộn chức năng.</h2>
    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 32, marginTop: 56 }}>
      <div style={{ ...card, minHeight: 470 }}>
        {[
          ['PostgreSQL', 'Operating Truth'],
          ['Notion', 'Canon / SOP'],
          ['GitHub', 'Evidence / Version'],
          ['Chat', 'Conversation, not canon'],
        ].map(([a, b]) => (
          <div key={a} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: `1px solid ${C.line}`, padding: '24px 0', fontSize: 30 }}>
            <b>{a}</b><span style={{ color: C.muted }}>{b}</span>
          </div>
        ))}
      </div>
      <div style={{ ...card, background: C.navy, color: C.white }}>
        <div style={{ fontSize: 40, fontWeight: 950 }}>80/20 principle</div>
        <p style={{ ...body, color: C.white, fontSize: 31, marginTop: 28 }}>Canary chỉ chứng minh đường găng: source → build → web link → presenter → export → QA evidence.</p>
      </div>
    </div>
    <Footer n="05 / 08" />
  </div>
);

const Governance: Page = () => (
  <div style={base}>
    <Mark />
    <p style={kicker}>Governance gate</p>
    <h2 style={title}>Không publish vì đẹp. Publish khi qua gate.</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 26, marginTop: 58 }}>
      {[
        ['Visual QA', 'Logo, font, màu, contrast, overflow.'],
        ['Interaction QA', 'Keyboard, swipe, presenter, refresh route.'],
        ['Export QA', 'PDF bằng Chromium, PPTX bằng PowerPoint Mac.'],
        ['Evidence', 'Commit SHA, screenshots, notes, defects.'],
      ].map(([h, t]) => (
        <div key={h} style={card}>
          <div style={{ fontSize: 34, fontWeight: 900 }}>{h}</div>
          <p style={{ ...small, fontSize: 26, marginTop: 18 }}>{t}</p>
        </div>
      ))}
    </div>
    <Footer n="06 / 08" />
  </div>
);

const Transformation: Page = () => (
  <div style={base}>
    <Mark />
    <p style={kicker}>Kết quả mong muốn</p>
    <h2 style={title}>Presentation trở thành sản phẩm số có lifecycle.</h2>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 34, marginTop: 70 }}>
      <div style={{ ...card, background: 'rgba(217,74,56,.07)' }}>
        <Pill tone="red">Old</Pill>
        <p style={{ ...body, marginTop: 28 }}>PowerPoint chết, nhiều bản FINAL, khó QA, không có bằng chứng build.</p>
      </div>
      <div style={{ ...card, background: 'rgba(137,197,83,.14)' }}>
        <Pill tone="green">New</Pill>
        <p style={{ ...body, marginTop: 28 }}>Source có version, web link dùng được, export kiểm chứng, QA trước publish.</p>
      </div>
    </div>
    <Footer n="07 / 08" />
  </div>
);

const Next: Page = () => (
  <div style={{ ...base, background: C.navy, color: C.white }}>
    <div style={{ maxWidth: 1220, marginTop: 140 }}>
      <p style={{ ...kicker, color: C.green }}>Next action</p>
      <h2 style={{ ...title, color: C.white }}>Nếu canary PASS, chuẩn hóa thành Masibio Slides Capability v1.0.</h2>
      <p style={{ ...body, color: 'rgba(255,255,255,.84)', marginTop: 42 }}>Không mở rộng trước khi có evidence. Không thay thế deck hiện hữu trước khi có rollback.</p>
      <div style={{ display: 'flex', gap: 18, marginTop: 54 }}>
        <Pill>Build</Pill><Pill tone="green">QA</Pill><Pill>Publish</Pill>
      </div>
    </div>
    <Footer n="08 / 08" />
  </div>
);

export const notes: (string | undefined)[] = [
  'Mở bằng thông điệp: đây là canary capability, không phải deck marketing cuối cùng.',
  'Nhấn vào nỗi đau vận hành: dữ liệu và quyết định rời rạc.',
  'Giải thích R1/R2/R3 để tránh ảo tưởng tự động hóa quá sớm.',
  'Đọc chuỗi architecture như một đường thẩm quyền, không phải sơ đồ IT.',
  'Khóa vai trò hệ thống: chat không phải nguồn sự thật.',
  'Gate này là khác biệt giữa làm slide và làm sản phẩm số.',
  'Đây là lý do Masibio cần web presentation có version và QA.',
  'Kết luận bằng nguyên tắc: pass evidence trước, standardize sau.',
];

export default [Cover, Problem, Doctrine, Architecture, OperatingTruth, Governance, Transformation, Next] satisfies Page[];
