// Кулыншақ — тапсырыс қабылдағыш (Google Apps Script).
// Не істейді: сайттан келген тапсырысты Google Sheets кестесіне жазады
// және Telegram-ға хабарлама жібереді. Админ-панель осы скрипттен
// тапсырыстар тізімін алады.
// Орнату: setup/SETUP.md нұсқаулығын қараңыз.

// ======================= БАПТАУЛАР =======================
const ADMIN_KEY = 'OSYNY_MINDETTI_TURDE_OZGERT';   // админ-панельдің паролі
const TG_TOKEN  = '';   // @BotFather берген бот токені (мыс: '7123456:AAH...')
const TG_CHAT   = '';   // өз чатыңыздың ID-і (@userinfobot арқылы білуге болады)
const SHEET_NAME = 'Тапсырыстар';
// ==========================================================

const HEADERS = ['ID', 'Уақыты', 'Аты', 'Телефон', 'Қала', 'Мекенжай', 'Индекс', 'Деңгей', 'WhatsApp', 'Бағасы'];

function sheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) {
    sh = ss.insertSheet(SHEET_NAME);
    sh.appendRow(HEADERS);
    sh.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold').setBackground('#4C6653').setFontColor('#F5EEDA');
    sh.setFrozenRows(1);
  }
  return sh;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

// Сайттан жаңа тапсырыс келгенде
function doPost(e) {
  const o = JSON.parse(e.postData.contents);
  sheet_().appendRow([
    o.id, o.time, o.name, "'" + o.phone, o.city, o.address,
    "'" + o.postindex, o.level, o.wa, o.price,
  ]);
  if (TG_TOKEN && TG_CHAT) {
    const text = [
      '🛒 ЖАҢА ТАПСЫРЫС ' + o.id,
      '',
      '👤 Аты: ' + o.name,
      '📞 Телефон: ' + o.phone,
      '🏙 Қала: ' + o.city,
      '🏠 Мекенжай: ' + o.address,
      '📮 Индекс: ' + o.postindex,
      '👶 Деңгей: ' + o.level,
      '💬 WhatsApp: ' + o.wa,
      '💰 Бағасы: ' + Number(o.price).toLocaleString('ru-RU') + ' ₸',
      '',
      '🕐 ' + o.time,
    ].join('\n');
    UrlFetchApp.fetch('https://api.telegram.org/bot' + TG_TOKEN + '/sendMessage', {
      method: 'post',
      payload: { chat_id: TG_CHAT, text: text },
      muteHttpExceptions: true,
    });
  }
  return json_({ ok: true });
}

// Админ-панель тапсырыстар тізімін сұрағанда
function doGet(e) {
  const p = e.parameter || {};
  if ((p.key || '') !== ADMIN_KEY) return json_({ ok: false, error: 'auth' });
  if (p.action === 'list') {
    const sh = sheet_();
    const last = sh.getLastRow();
    const rows = last > 1 ? sh.getRange(2, 1, last - 1, HEADERS.length).getValues() : [];
    const orders = rows.map(function (r) {
      return {
        id: r[0], time: String(r[1]), name: r[2], phone: String(r[3]),
        city: r[4], address: r[5], postindex: String(r[6]),
        level: r[7], wa: r[8], price: r[9],
      };
    });
    return json_({ ok: true, orders: orders });
  }
  return json_({ ok: true });
}
