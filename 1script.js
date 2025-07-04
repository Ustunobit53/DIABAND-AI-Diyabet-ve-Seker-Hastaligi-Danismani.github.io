const cevaplar = [
  { keys: ["diyabet", "şeker hastalığı", "nedir"], answer: "Diyabet, kandaki şeker seviyesinin uzun süre yüksek seyretmesi durumudur." },
  { keys: ["tip 1", "tip1"], answer: "Tip 1 diyabet, pankreasın insülin üretmediği, genellikle çocuklukta başlayan bir hastalıktır." },
  { keys: ["tip 2", "tip2"], answer: "Tip 2 diyabet, vücudun insüline karşı direnç geliştirmesi sonucu oluşur ve yetişkinlerde sık görülür." },
  { keys: ["belirti", "belirtiler"], answer: "Diyabet belirtileri; sık idrara çıkma, aşırı susama, yorgunluk ve bulanık görme gibi durumlardır." },
  { keys: ["tedavi", "nasıl tedavi edilir"], answer: "Diyabet tedavisi diyet, egzersiz, ilaçlar ve insülin enjeksiyonlarını içerebilir." },
  { keys: ["insülin"], answer: "İnsülin, kandaki şekeri hücrelere taşıyan ve kan şekeri seviyesini düzenleyen hormondur." },
  { keys: ["kan şekeri", "kan şekeri ölçümü"], answer: "Kan şekeri parmak ucu testi veya laboratuvar testleri ile ölçülür." },
  { keys: ["hipoglisemi"], answer: "Hipoglisemi, kan şekerinin çok düşük olmasıdır; titreme, terleme belirtilerindendir." },
  { keys: ["hiperglisemi"], answer: "Hiperglisemi, kan şekerinin çok yüksek olması durumudur." },
  { keys: ["komplikasyon"], answer: "Diyabet tedavi edilmezse kalp hastalığı, böbrek yetmezliği, görme kaybı ve sinir hasarları oluşabilir." },
  { keys: ["diyet", "beslenme"], answer: "Diyabetli bireyler dengeli, düşük şekerli, lif açısından zengin beslenmelidir." },
  { keys: ["egzersiz"], answer: "Düzenli egzersiz kan şekerinin kontrolüne yardımcı olur." },
  { keys: ["gebelikte diyabet"], answer: "Gebelik diyabeti, gebelikte ortaya çıkan geçici bir diyabet türüdür." },
  { keys: ["risk faktörleri", "risk"], answer: "Obezite, hareketsiz yaşam, genetik ve yaş diyabet riskini artırır." },
  { keys: ["kan şekeri yüksekliği", "yüksek kan şekeri"], answer: "Yüksek kan şekeri halsizlik, sık idrara çıkma ve susama yapar." },
  { keys: ["kan şekeri düşüklüğü", "düşük kan şekeri"], answer: "Düşük kan şekeri baş dönmesi, terleme, bilinç kaybına yol açabilir." },
  { keys: ["diyabet önlenir mi"], answer: "Tip 2 diyabet sağlıklı yaşam ve egzersizle önlenebilir." },
  { keys: ["insülin pompası"], answer: "İnsülin pompası, insülin dozunu otomatik veren cihazdır." },
  { keys: ["kan şekeri değeri", "normal kan şekeri"], answer: "Açlık kan şekeri normalde 70-100 mg/dL arasındadır." },
  { keys: ["şeker hastalığı"], answer: "Şeker hastalığı, diyabet anlamına gelir." },
  { keys: ["vücut kitle indeksi", "vki", "bmi"], answer: "VKİ = kilo (kg) / boy (m²) formülü ile hesaplanır." },
  { keys: ["diyabet ve stres"], answer: "Stres kan şekerini olumsuz etkiler, stres yönetimi önemlidir." },
  { keys: ["diyabetli ayak"], answer: "Diyabetli ayak yaraları erken tedavi gerektirir, düzenli kontrol şarttır." },
  { keys: ["diyabet ve böbrek"], answer: "Diyabet böbrek yetmezliği gibi komplikasyonlara neden olabilir." },
  { keys: ["diyabet ve kalp"], answer: "Diyabet kalp hastalıkları riskini artırır." },
  { keys: ["kan şekeri ölçümü ne zaman yapılır"], answer: "Genellikle açlıkta ve yemek sonrası 2 saat içinde yapılır." },
  { keys: ["diyabet tedavisinde ilaçlar"], answer: "Metformin ve diğer antidiyabetik ilaçlar kullanılır." },
  { keys: ["diyabet komplikasyonları nasıl önlenir"], answer: "Kan şekeri kontrolü ve sağlıklı yaşam komplikasyonları önler." },
  { keys: ["diyabetli hastaların egzersiz önerileri"], answer: "Yürüyüş, yüzme ve bisiklet gibi hafif egzersizler önerilir." },
  { keys: ["diyabet ve kilo kontrolü"], answer: "Sağlıklı kilo diyabet kontrolünde çok önemlidir." },
  { keys: ["diyabet hastaları için su tüketimi"], answer: "Yeterli ve düzenli su tüketimi kan şekerine yardımcı olur." },
  { keys: ["diyabetli çocuklar"], answer: "Tip 1 diyabet çocuklukta başlar ve özel bakım gerektirir." },
  { keys: ["diyabet ve uyku"], answer: "Düzensiz uyku kan şekeri kontrolünü zorlaştırabilir." },
  { keys: ["kan şekeri ölçüm cihazı"], answer: "Kan şekeri ölçüm cihazları evde kan şekeri kontrolü sağlar." },
  { keys: ["kan şekeri ölçümü nasıl yapılır"], answer: "Parmak ucu kan örneği alınarak ölçüm yapılır." },
  { keys: ["diyabet belirtileri nelerdir"], answer: "Sık idrara çıkma, aşırı susama, yorgunluk, bulanık görme." },
  { keys: ["diyabet tedavisinde yaşam tarzı değişiklikleri"], answer: "Diyet, egzersiz ve düzenli takip şarttır." },
  { keys: ["kan şekeri ölçümünde dikkat edilmesi gerekenler"], answer: "Temiz parmak, doğru cihaz kullanımı önemlidir." },
  { keys: ["hipoglisemi nasıl geçer"], answer: "Hızlı şeker alımı (meyve suyu, şeker) hipoglisemiyi geçirebilir." },
  { keys: ["kan şekeri hedef aralığı"], answer: "Genellikle açlıkta 70-130 mg/dL arası hedeflenir." },
  { keys: ["diyabet nedir"], answer: "Diyabet, pankreasın yeterince insülin üretememesi veya vücudun insüline karşı direnç geliştirmesidir." },
  { keys: ["şeker hastalığı nedir"], answer: "Şeker hastalığı, vücudun kan şekerini düzenleyememesi sonucu oluşan kronik bir hastalıktır." },
  { keys: ["kan şekeri nasıl düşürülür"], answer: "Düzenli egzersiz, sağlıklı beslenme ve ilaçlarla kan şekeri düşürülür." },
  { keys: ["diyabet belirtileri"], answer: "Aşırı susama, sık idrara çıkma, yorgunluk, kilo kaybı." },
  { keys: ["diyabet neden olur"], answer: "Genetik faktörler, yaşam tarzı ve obezite diyabete neden olabilir." },
  { keys: ["kan şekeri ölçümü"], answer: "Kan şekeri ölçümü parmak ucu testi ile yapılır." },
  { keys: ["diyabet komplikasyonları"], answer: "Görme kaybı, böbrek hastalığı, kalp hastalıkları, sinir hasarı." },
  { keys: ["şeker hastalığı tedavisi"], answer: "Diyet, egzersiz, ilaç ve insülin tedavisi." },
  { keys: ["diyabet yönetimi"], answer: "Kan şekeri takibi, sağlıklı yaşam, düzenli doktor kontrolü." },
  { keys: ["şeker hastalığı tipleri"], answer: "Tip 1, Tip 2 ve gestasyonel diyabet olmak üzere üç ana tipi vardır." },
  { keys: ["diyabet risk faktörleri"], answer: "Ailede diyabet öyküsü, obezite, hareketsiz yaşam." },
  { keys: ["kan şekeri neden yükselir"], answer: "Yetersiz insülin, aşırı karbonhidrat alımı, stres." },
  { keys: ["kan şekeri neden düşer"], answer: "Yetersiz beslenme, fazla egzersiz, insülin aşımı." },
  { keys: ["diyabet tedavisinde dikkat"], answer: "İlaç kullanımı, diyet, egzersiz ve düzenli takip önemli." },
  { keys: ["diyabet hastaları için egzersiz"], answer: "Günde en az 30 dakika orta şiddette egzersiz önerilir." },
  { keys: ["diyabet ve beslenme"], answer: "Düşük glisemik indeksli besinler tercih edilmelidir." },
  { keys: ["şeker hastalığı önlenir mi"], answer: "Sağlıklı yaşam tarzı ile tip 2 diyabet önlenebilir." },
  { keys: ["diyabet ve alkol"], answer: "Alkol kan şekeri dalgalanmalarına neden olabilir, dikkatli tüketilmeli." },
  { keys: ["diyabet ve sigara"], answer: "Sigara diyabet komplikasyonlarını artırır, bırakılması gerekir." }
];

function normalize(text) {
  return text.toLowerCase().replace(/[^\w\sığüşöçİĞÜŞÖÇ]/gi, '').trim();
}

let timeoutId;

function cevapla() {
  clearTimeout(timeoutId);

  const soruInput = document.getElementById("soru");
  const cevapDiv = document.getElementById("cevap");

  const soru = normalize(soruInput.value);

  if (!soru) {
    cevapDiv.textContent = "Lütfen bir soru yazınız.";
    return;
  }

  let cevapMetni = "Üzgünüm, bu konuda bilgi veremiyorum.";

  for (let c of cevaplar) {
    for (let key of c.keys) {
      if (soru.includes(normalize(key))) {
        cevapMetni = c.answer;
        break;
      }
    }
    if (cevapMetni !== "Üzgünüm, bu konuda bilgi veremiyorum.") break;
  }

  cevapDiv.textContent = cevapMetni;

  // 5 saniye sonra sıfırla
  timeoutId = setTimeout(() => {
    soruInput.value = "";
    cevapDiv.textContent = "";
  }, 5000);
}

document.getElementById("sorButton").addEventListener("click", cevapla);
