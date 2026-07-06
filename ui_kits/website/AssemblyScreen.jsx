// Құлыншақ website — Assembly (how to build) + Order screens
const { Button, Badge, Card, Callout, StepList, Sticker, ChessPiece, Input, Select, RadioGroup, Checkbox } = window.DesignSystem_d688da;

function AssemblyScreen({ onNav, mobile }) {
  return (
    <div style={{ maxWidth: 'var(--container-prose)', margin: '0 auto', padding: mobile ? '28px 16px 50px' : '48px 28px 70px' }}>
      <span className="ku-eyebrow">Кітап-нұсқаулық</span>
      <h1 style={{ fontSize: mobile ? 34 : 46, margin: '8px 0 0' }}>Қорапты қалай құрастыру</h1>
      <p style={{ fontSize: 18, color: 'var(--ink-2)', marginTop: 8, fontFamily: 'var(--font-serif)' }}>
        Қорап тақтадай ашылып-жабылады. Ішінде — барлық фигура мен стикер. Желімнің қажеті жоқ.
      </p>

      <Callout tone="tip" title="Керек болады" style={{ marginTop: 20 }}>
        Қайшы (немесе тесіктер бойынша қолмен), стикер пак, шыдамдылық 🙂
      </Callout>

      <div style={{ marginTop: 22, background: 'var(--surface)', border: '2px solid var(--line)', borderRadius: 'var(--radius-xl)', padding: mobile ? 18 : 26 }}>
        <StepList steps={[
          { title: 'Парақтарды шығар', body: 'Қораптан ағаш фанер қиындыларын ал. Әр қиындыда фигура бөлшектері белгіленген.' },
          { title: 'Бөлшектерді ажырат', body: 'Тесіктер (перфорация) бойынша бөлшектерді ақырын шығар. Асықпа!' },
          { title: 'Фигураны жина', body: 'Бөлшектерді «А» ойығына «Б» тілін кигіз. Ат, тұра, піл — бәрі осылай.' },
          { title: 'Стикерлерін жапсыр', body: 'Әр фигураға өз стикерін жапсыр. Ақ пен қараны шатастырма.' },
          { title: 'Тақтаны жаз', body: 'Қорапты ашсаң — ішкі жағы шахмат тақтасы. Фигураларды орналастыр.' },
          { title: 'Ойынды баста', body: 'Бірінші сабақтың QR-ын сканерле де, видеомен бірге ойна!' },
        ]} />
      </div>

      <div style={{ display: 'flex', gap: 14, marginTop: 26, alignItems: 'center', flexWrap: 'wrap' }}>
        <Sticker tone="teal" size={92}><ChessPiece type="knight" size={44} color="white" /></Sticker>
        <div style={{ flex: 1, minWidth: 200 }}>
          <div style={{ font: 'var(--fw-bold) 20px var(--font-display)' }}>Дайын! Енді үйренеміз.</div>
          <div style={{ color: 'var(--ink-3)', fontSize: 15, marginTop: 4 }}>Фигураларды құрастырдың ба? Сабақтарға өт.</div>
        </div>
        <Button variant="secondary" size="lg" onClick={() => onNav('learn')} iconRight={<span>→</span>}>Сабақтарға өту</Button>
      </div>
    </div>
  );
}

function OrderScreen({ onNav, mobile }) {
  const CFG = window.KU_CONFIG || {};
  const PRICE = CFG.PRICE || 12900;
  const priceStr = PRICE.toLocaleString('ru-RU') + ' ₸';
  const [done, setDone] = React.useState(null); // null | тапсырыс объектісі
  const [level, setLevel] = React.useState('Бастауыш (3–6 жас)');

  const submit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const order = {
      id: 'KU-' + Date.now().toString(36).toUpperCase(),
      time: new Date().toLocaleString('ru-RU'),
      name: (fd.get('name') || '').trim(),
      phone: (fd.get('phone') || '').trim(),
      city: fd.get('city') || '',
      address: (fd.get('address') || '').trim(),
      postindex: (fd.get('postindex') || '').trim(),
      level,
      wa: fd.get('waok') ? 'иә' : 'жоқ',
      price: PRICE,
    };
    // 1) Жергілікті сақтық көшірме (админ-панельдің демо режимі де осыны оқиды)
    try {
      const arr = JSON.parse(localStorage.getItem('ku_orders') || '[]');
      arr.push(order);
      localStorage.setItem('ku_orders', JSON.stringify(arr));
    } catch (err) {}
    // 2) Кестеге жазу + Telegram хабары (Apps Script вебхугы арқылы)
    if (CFG.WEBHOOK_URL) {
      fetch(CFG.WEBHOOK_URL, {
        method: 'POST', mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(order),
      }).catch(() => {});
    }
    // 3) WhatsApp: клиенттің WhatsApp-ы ашылып, тапсырыс мәтіні дайын тұрады
    if (CFG.WHATSAPP_PHONE) {
      const lines = [
        'Жаңа тапсырыс ' + order.id,
        'Аты: ' + order.name,
        'Телефон: ' + order.phone,
        'Қала: ' + order.city,
        'Мекенжай: ' + order.address,
        'Индекс: ' + order.postindex,
        'Деңгей: ' + order.level,
        'Бағасы: ' + priceStr,
      ];
      window.open('https://wa.me/' + CFG.WHATSAPP_PHONE + '?text=' + encodeURIComponent(lines.join('\n')), '_blank');
    }
    setDone(order);
  };

  return (
    <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: mobile ? '28px 16px 50px' : '48px 28px 70px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1fr 1fr', gap: 32, alignItems: 'start' }}>
        <div>
          <span className="ku-eyebrow">Тапсырыс</span>
          <h1 style={{ fontSize: mobile ? 32 : 44, margin: '8px 0 0' }}>Құлыншақ қорабы</h1>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginTop: 10 }}>
            <span style={{ font: 'var(--fw-black) 40px var(--font-display)', color: 'var(--clay-500)' }}>{priceStr}</span>
            <Badge tone="olive" variant="solid">жеткізумен келісіледі</Badge>
          </div>
          <div style={{ marginTop: 18, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {['32 құрастырмалы ағаш фигура', 'Әр фигурада: 3 ағаш деталь + 5 стикер', 'Тақта-стикер (қораптың үсті мен асты)', 'Кітап-нұсқаулық — әр тақырыпта QR', '13 видео сабақ (3-уі сайтта тегін)'].map((t) => (
              <div key={t} style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <span style={{ width: 24, height: 24, borderRadius: '50%', background: 'var(--success-soft)', color: 'var(--olive-600)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, flex: '0 0 auto' }}>✓</span>
                <span style={{ fontSize: 16 }}>{t}</span>
              </div>
            ))}
          </div>
        </div>

        <Card variant="paper" pad="lg">
          {done ? (
            <div style={{ textAlign: 'center', padding: '20px 6px' }}>
              <Sticker tone="teal" shape="seal" size={104} tilt={-5} style={{ margin: '0 auto' }}><span style={{ fontSize: 44 }}>♞</span></Sticker>
              <h2 style={{ fontSize: 28, marginTop: 18 }}>Рахмет!</h2>
              <p style={{ color: 'var(--ink-3)' }}>
                Тапсырысыңыз қабылданды (№ {done.id}). Жақын арада хабарласамыз.
                {CFG.WHATSAPP_PHONE ? ' WhatsApp ашылды — хабарламаны жіберуді ұмытпаңыз!' : ''}
              </p>
              <Button variant="outline" onClick={() => setDone(null)} style={{ marginTop: 6 }}>Тағы тапсырыс</Button>
            </div>
          ) : (
            <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ font: 'var(--fw-black) 22px var(--font-display)' }}>Тапсырыс беру</div>
              <Input label="Ата-ананың аты" name="name" placeholder="Мысалы: Айгүл" required />
              <Input label="Телефон" name="phone" type="tel" placeholder="+7 ___ ___ __ __" leading={<span>☎</span>} required />
              <Select label="Қала" name="city" placeholder="Таңдаңыз" options={['Алматы', 'Астана', 'Шымкент', 'Басқа қала']} required />
              <Input label="Мекенжай" name="address" placeholder="Көше, үй, пәтер" required />
              <Input label="Почта индексі" name="postindex" inputMode="numeric" placeholder="050000" required />
              <div>
                <div style={{ font: 'var(--fw-bold) 15px var(--font-display)', color: 'var(--ink-2)', marginBottom: 8 }}>Баланың деңгейі</div>
                <RadioGroup value={level} onChange={setLevel} options={['Бастауыш (3–6 жас)', 'Орта (7–9 жас)', 'Дайын (10–13 жас)']} />
              </div>
              <Checkbox label="WhatsApp-пен хабарласуға болады" name="waok" defaultChecked />
              <Button type="submit" variant="accent" size="lg" full>Тапсырысты растау · {priceStr}</Button>
            </form>
          )}
        </Card>
      </div>
    </div>
  );
}

Object.assign(window, { AssemblyScreen, OrderScreen });
