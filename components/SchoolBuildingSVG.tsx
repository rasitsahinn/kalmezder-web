export default function SchoolBuildingSVG() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 480" style="width:100%;height:auto;display:block;">
<defs>
  <!-- El çizimi titreme filtresi -->
  <filter id="hand" x="-3%" y="-3%" width="106%" height="106%">
    <feTurbulence type="fractalNoise" baseFrequency="0.018 0.025" numOctaves="4" seed="8" result="noise"/>
    <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.8" xChannelSelector="R" yChannelSelector="G"/>
  </filter>
  <filter id="handLight" x="-2%" y="-2%" width="104%" height="104%">
    <feTurbulence type="fractalNoise" baseFrequency="0.02 0.03" numOctaves="3" seed="3" result="noise"/>
    <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.6" xChannelSelector="R" yChannelSelector="G"/>
  </filter>

  <!-- Duvar gradyanı - turuncu kiremit -->
  <linearGradient id="wallGrad" x1="0" y1="0" x2="0.05" y2="1">
    <stop offset="0%" stop-color="#cf7e42"/>
    <stop offset="100%" stop-color="#b86830"/>
  </linearGradient>
  <linearGradient id="wallDark" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#c07038"/>
    <stop offset="100%" stop-color="#a85e28"/>
  </linearGradient>
  <linearGradient id="roofGrad" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#3a3848"/>
    <stop offset="100%" stop-color="#28263a"/>
  </linearGradient>
  <linearGradient id="winGrad" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0%" stop-color="#d8e8f8" stop-opacity="0.9"/>
    <stop offset="60%" stop-color="#b0c8e8" stop-opacity="0.8"/>
    <stop offset="100%" stop-color="#8aacd8" stop-opacity="0.7"/>
  </linearGradient>
  <linearGradient id="groundGrad" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#4a5878"/>
    <stop offset="100%" stop-color="#303850"/>
  </linearGradient>
</defs>

<!-- Zemin şeridi -->
<rect x="0" y="400" width="900" height="80" fill="url(#groundGrad)" filter="url(#handLight)"/>
<rect x="0" y="398" width="900" height="4" fill="rgba(255,255,255,0.07)"/>

<!-- Gölge -->
<ellipse cx="450" cy="406" rx="420" ry="10" fill="rgba(0,0,0,0.35)" filter="url(#handLight)"/>

<!-- ══════════════════════════════════════ -->
<!-- SOL UZUN KANAT — daha yüksek (4 kat) -->
<!-- ══════════════════════════════════════ -->

<!-- Bina gövdesi sol -->
<rect x="30" y="108" width="400" height="292" fill="url(#wallGrad)" filter="url(#hand)"/>

<!-- Çatı sol — daha yüksekte -->
<rect x="22" y="92" width="416" height="20" fill="url(#roofGrad)" filter="url(#hand)"/>
<rect x="26" y="108" width="408" height="8" fill="rgba(0,0,0,0.18)" filter="url(#handLight)"/>

<!-- Kat ayraçları sol -->
<rect x="30" y="178" width="400" height="5" fill="rgba(90,48,10,0.45)" filter="url(#handLight)"/>
<rect x="30" y="248" width="400" height="5" fill="rgba(90,48,10,0.45)" filter="url(#handLight)"/>
<rect x="30" y="318" width="400" height="5" fill="rgba(90,48,10,0.45)" filter="url(#handLight)"/>

<!-- Bodrum sol -->
<rect x="30" y="376" width="400" height="24" fill="url(#wallDark)" filter="url(#hand)"/>

<!-- SOL KANAT PENCERELER — 4 kat × 5 kolon -->
<!-- Pencere: 54×44, yatay boşluk 26, dikey boşluk 8 -->

<!-- KAT 1 (en üst) y=116 -->
<rect x="46"  y="118" width="54" height="50" fill="url(#winGrad)" filter="url(#handLight)"/>
<line x1="73"  y1="118" x2="73"  y2="168" stroke="#6080a8" stroke-width="1.5" filter="url(#handLight)"/>
<line x1="46"  y1="143" x2="100" y2="143" stroke="#6080a8" stroke-width="1.5" filter="url(#handLight)"/>
<rect x="46"  y="118" width="54" height="50" fill="none" stroke="#8a5828" stroke-width="2.2" filter="url(#hand)"/>

<rect x="120" y="118" width="54" height="50" fill="url(#winGrad)" filter="url(#handLight)"/>
<line x1="147" y1="118" x2="147" y2="168" stroke="#6080a8" stroke-width="1.5" filter="url(#handLight)"/>
<line x1="120" y1="143" x2="174" y2="143" stroke="#6080a8" stroke-width="1.5" filter="url(#handLight)"/>
<rect x="120" y="118" width="54" height="50" fill="none" stroke="#8a5828" stroke-width="2.2" filter="url(#hand)"/>

<rect x="194" y="118" width="54" height="50" fill="url(#winGrad)" filter="url(#handLight)"/>
<line x1="221" y1="118" x2="221" y2="168" stroke="#6080a8" stroke-width="1.5" filter="url(#handLight)"/>
<line x1="194" y1="143" x2="248" y2="143" stroke="#6080a8" stroke-width="1.5" filter="url(#handLight)"/>
<rect x="194" y="118" width="54" height="50" fill="none" stroke="#8a5828" stroke-width="2.2" filter="url(#hand)"/>

<rect x="268" y="118" width="54" height="50" fill="url(#winGrad)" filter="url(#handLight)"/>
<line x1="295" y1="118" x2="295" y2="168" stroke="#6080a8" stroke-width="1.5" filter="url(#handLight)"/>
<line x1="268" y1="143" x2="322" y2="143" stroke="#6080a8" stroke-width="1.5" filter="url(#handLight)"/>
<rect x="268" y="118" width="54" height="50" fill="none" stroke="#8a5828" stroke-width="2.2" filter="url(#hand)"/>

<rect x="342" y="118" width="54" height="50" fill="url(#winGrad)" filter="url(#handLight)"/>
<line x1="369" y1="118" x2="369" y2="168" stroke="#6080a8" stroke-width="1.5" filter="url(#handLight)"/>
<line x1="342" y1="143" x2="396" y2="143" stroke="#6080a8" stroke-width="1.5" filter="url(#handLight)"/>
<rect x="342" y="118" width="54" height="50" fill="none" stroke="#8a5828" stroke-width="2.2" filter="url(#hand)"/>

<!-- KAT 2 y=188 -->
<rect x="46"  y="188" width="54" height="50" fill="url(#winGrad)" filter="url(#handLight)"/>
<line x1="73"  y1="188" x2="73"  y2="238" stroke="#6080a8" stroke-width="1.5" filter="url(#handLight)"/>
<line x1="46"  y1="213" x2="100" y2="213" stroke="#6080a8" stroke-width="1.5" filter="url(#handLight)"/>
<rect x="46"  y="188" width="54" height="50" fill="none" stroke="#8a5828" stroke-width="2.2" filter="url(#hand)"/>

<rect x="120" y="188" width="54" height="50" fill="url(#winGrad)" filter="url(#handLight)"/>
<line x1="147" y1="188" x2="147" y2="238" stroke="#6080a8" stroke-width="1.5" filter="url(#handLight)"/>
<line x1="120" y1="213" x2="174" y2="213" stroke="#6080a8" stroke-width="1.5" filter="url(#handLight)"/>
<rect x="120" y="188" width="54" height="50" fill="none" stroke="#8a5828" stroke-width="2.2" filter="url(#hand)"/>

<rect x="194" y="188" width="54" height="50" fill="url(#winGrad)" filter="url(#handLight)"/>
<line x1="221" y1="188" x2="221" y2="238" stroke="#6080a8" stroke-width="1.5" filter="url(#handLight)"/>
<line x1="194" y1="213" x2="248" y2="213" stroke="#6080a8" stroke-width="1.5" filter="url(#handLight)"/>
<rect x="194" y="188" width="54" height="50" fill="none" stroke="#8a5828" stroke-width="2.2" filter="url(#hand)"/>

<rect x="268" y="188" width="54" height="50" fill="url(#winGrad)" filter="url(#handLight)"/>
<line x1="295" y1="188" x2="295" y2="238" stroke="#6080a8" stroke-width="1.5" filter="url(#handLight)"/>
<line x1="268" y1="213" x2="322" y2="213" stroke="#6080a8" stroke-width="1.5" filter="url(#handLight)"/>
<rect x="268" y="188" width="54" height="50" fill="none" stroke="#8a5828" stroke-width="2.2" filter="url(#hand)"/>

<rect x="342" y="188" width="54" height="50" fill="url(#winGrad)" filter="url(#handLight)"/>
<line x1="369" y1="188" x2="369" y2="238" stroke="#6080a8" stroke-width="1.5" filter="url(#handLight)"/>
<line x1="342" y1="213" x2="396" y2="213" stroke="#6080a8" stroke-width="1.5" filter="url(#handLight)"/>
<rect x="342" y="188" width="54" height="50" fill="none" stroke="#8a5828" stroke-width="2.2" filter="url(#hand)"/>

<!-- KAT 3 y=258 -->
<rect x="46"  y="258" width="54" height="50" fill="url(#winGrad)" filter="url(#handLight)"/>
<line x1="73"  y1="258" x2="73"  y2="308" stroke="#6080a8" stroke-width="1.5" filter="url(#handLight)"/>
<line x1="46"  y1="283" x2="100" y2="283" stroke="#6080a8" stroke-width="1.5" filter="url(#handLight)"/>
<rect x="46"  y="258" width="54" height="50" fill="none" stroke="#8a5828" stroke-width="2.2" filter="url(#hand)"/>

<rect x="120" y="258" width="54" height="50" fill="url(#winGrad)" filter="url(#handLight)"/>
<line x1="147" y1="258" x2="147" y2="308" stroke="#6080a8" stroke-width="1.5" filter="url(#handLight)"/>
<line x1="120" y1="283" x2="174" y2="283" stroke="#6080a8" stroke-width="1.5" filter="url(#handLight)"/>
<rect x="120" y="258" width="54" height="50" fill="none" stroke="#8a5828" stroke-width="2.2" filter="url(#hand)"/>

<!-- Giriş kapısı — orta -->
<rect x="194" y="258" width="54" height="118" fill="#7a4a1a" filter="url(#hand)"/>
<rect x="198" y="262" width="22" height="90" fill="#5a3010" rx="2" filter="url(#handLight)"/>
<rect x="224" y="262" width="21" height="90" fill="#5a3010" rx="2" filter="url(#handLight)"/>
<rect x="194" y="254" width="54" height="10" fill="#9a6030" filter="url(#handLight)"/>
<!-- kapı topu -->
<circle cx="219" cy="312" r="3.5" fill="#c8a040" filter="url(#handLight)"/>
<circle cx="223" cy="312" r="3.5" fill="#c8a040" filter="url(#handLight)"/>

<rect x="268" y="258" width="54" height="50" fill="url(#winGrad)" filter="url(#handLight)"/>
<line x1="295" y1="258" x2="295" y2="308" stroke="#6080a8" stroke-width="1.5" filter="url(#handLight)"/>
<line x1="268" y1="283" x2="322" y2="283" stroke="#6080a8" stroke-width="1.5" filter="url(#handLight)"/>
<rect x="268" y="258" width="54" height="50" fill="none" stroke="#8a5828" stroke-width="2.2" filter="url(#hand)"/>

<rect x="342" y="258" width="54" height="50" fill="url(#winGrad)" filter="url(#handLight)"/>
<line x1="369" y1="258" x2="369" y2="308" stroke="#6080a8" stroke-width="1.5" filter="url(#handLight)"/>
<line x1="342" y1="283" x2="396" y2="283" stroke="#6080a8" stroke-width="1.5" filter="url(#handLight)"/>
<rect x="342" y="258" width="54" height="50" fill="none" stroke="#8a5828" stroke-width="2.2" filter="url(#hand)"/>

<!-- KAT 4 alt — pencereler (kapı hariç) -->
<rect x="46"  y="328" width="54" height="44" fill="url(#winGrad)" filter="url(#handLight)"/>
<line x1="73"  y1="328" x2="73"  y2="372" stroke="#6080a8" stroke-width="1.5" filter="url(#handLight)"/>
<line x1="46"  y1="350" x2="100" y2="350" stroke="#6080a8" stroke-width="1.5" filter="url(#handLight)"/>
<rect x="46"  y="328" width="54" height="44" fill="none" stroke="#8a5828" stroke-width="2.2" filter="url(#hand)"/>

<rect x="120" y="328" width="54" height="44" fill="url(#winGrad)" filter="url(#handLight)"/>
<line x1="147" y1="328" x2="147" y2="372" stroke="#6080a8" stroke-width="1.5" filter="url(#handLight)"/>
<line x1="120" y1="350" x2="174" y2="350" stroke="#6080a8" stroke-width="1.5" filter="url(#handLight)"/>
<rect x="120" y="328" width="54" height="44" fill="none" stroke="#8a5828" stroke-width="2.2" filter="url(#hand)"/>

<rect x="268" y="328" width="54" height="44" fill="url(#winGrad)" filter="url(#handLight)"/>
<line x1="295" y1="328" x2="295" y2="372" stroke="#6080a8" stroke-width="1.5" filter="url(#handLight)"/>
<line x1="268" y1="350" x2="322" y2="350" stroke="#6080a8" stroke-width="1.5" filter="url(#handLight)"/>
<rect x="268" y="328" width="54" height="44" fill="none" stroke="#8a5828" stroke-width="2.2" filter="url(#hand)"/>

<rect x="342" y="328" width="54" height="44" fill="url(#winGrad)" filter="url(#handLight)"/>
<line x1="369" y1="328" x2="369" y2="372" stroke="#6080a8" stroke-width="1.5" filter="url(#handLight)"/>
<line x1="342" y1="350" x2="396" y2="350" stroke="#6080a8" stroke-width="1.5" filter="url(#handLight)"/>
<rect x="342" y="328" width="54" height="44" fill="none" stroke="#8a5828" stroke-width="2.2" filter="url(#hand)"/>

<!-- Tabela -->
<rect x="54" y="310" width="120" height="28" fill="#f0e8d0" filter="url(#handLight)" rx="2"/>
<rect x="55" y="311" width="118" height="26" fill="#e8dcc0" rx="1" filter="url(#handLight)"/>
<text x="114" y="323" font-family="'Cormorant Garamond',serif" font-size="7.5" fill="#3a2800" text-anchor="middle" font-weight="700" filter="url(#handLight)">KOCAELİ ANADOLU</text>
<text x="114" y="333" font-family="'Cormorant Garamond',serif" font-size="7" fill="#3a2800" text-anchor="middle" filter="url(#handLight)">LİSESİ</text>

<!-- ════════════════════════════════ -->
<!-- BAĞLANTI BLOĞU (geri çekik)    -->
<!-- ════════════════════════════════ -->
<rect x="428" y="170" width="32" height="230" fill="#b86830" filter="url(#hand)"/>
<rect x="428" y="170" width="32" height="230" fill="rgba(0,0,0,0.15)" filter="url(#handLight)"/>

<!-- ════════════════════════════════════ -->
<!-- SAĞ KANAT — alçak (3 kat)           -->
<!-- ════════════════════════════════════ -->
<rect x="458" y="178" width="410" height="222" fill="url(#wallGrad)" filter="url(#hand)"/>

<!-- Çatı sağ — daha alçakta -->
<rect x="450" y="162" width="426" height="20" fill="url(#roofGrad)" filter="url(#hand)"/>
<rect x="454" y="178" width="418" height="8" fill="rgba(0,0,0,0.18)" filter="url(#handLight)"/>

<!-- Kat ayraçları sağ -->
<rect x="458" y="248" width="410" height="5" fill="rgba(90,48,10,0.45)" filter="url(#handLight)"/>
<rect x="458" y="318" width="410" height="5" fill="rgba(90,48,10,0.45)" filter="url(#handLight)"/>

<!-- Bodrum sağ -->
<rect x="458" y="376" width="410" height="24" fill="url(#wallDark)" filter="url(#hand)"/>

<!-- SAĞ KANAT PENCERELER — 3 kat × 6 kolon -->
<!-- Pencere: 50×44, yatay boşluk 20 -->

<!-- KAT 1 y=186 -->
<rect x="472" y="186" width="50" height="50" fill="url(#winGrad)" filter="url(#handLight)"/>
<line x1="497" y1="186" x2="497" y2="236" stroke="#6080a8" stroke-width="1.5" filter="url(#handLight)"/>
<line x1="472" y1="211" x2="522" y2="211" stroke="#6080a8" stroke-width="1.5" filter="url(#handLight)"/>
<rect x="472" y="186" width="50" height="50" fill="none" stroke="#8a5828" stroke-width="2.2" filter="url(#hand)"/>

<rect x="542" y="186" width="50" height="50" fill="url(#winGrad)" filter="url(#handLight)"/>
<line x1="567" y1="186" x2="567" y2="236" stroke="#6080a8" stroke-width="1.5" filter="url(#handLight)"/>
<line x1="542" y1="211" x2="592" y2="211" stroke="#6080a8" stroke-width="1.5" filter="url(#handLight)"/>
<rect x="542" y="186" width="50" height="50" fill="none" stroke="#8a5828" stroke-width="2.2" filter="url(#hand)"/>

<rect x="612" y="186" width="50" height="50" fill="url(#winGrad)" filter="url(#handLight)"/>
<line x1="637" y1="186" x2="637" y2="236" stroke="#6080a8" stroke-width="1.5" filter="url(#handLight)"/>
<line x1="612" y1="211" x2="662" y2="211" stroke="#6080a8" stroke-width="1.5" filter="url(#handLight)"/>
<rect x="612" y="186" width="50" height="50" fill="none" stroke="#8a5828" stroke-width="2.2" filter="url(#hand)"/>

<rect x="682" y="186" width="50" height="50" fill="url(#winGrad)" filter="url(#handLight)"/>
<line x1="707" y1="186" x2="707" y2="236" stroke="#6080a8" stroke-width="1.5" filter="url(#handLight)"/>
<line x1="682" y1="211" x2="732" y2="211" stroke="#6080a8" stroke-width="1.5" filter="url(#handLight)"/>
<rect x="682" y="186" width="50" height="50" fill="none" stroke="#8a5828" stroke-width="2.2" filter="url(#hand)"/>

<rect x="752" y="186" width="50" height="50" fill="url(#winGrad)" filter="url(#handLight)"/>
<line x1="777" y1="186" x2="777" y2="236" stroke="#6080a8" stroke-width="1.5" filter="url(#handLight)"/>
<line x1="752" y1="211" x2="802" y2="211" stroke="#6080a8" stroke-width="1.5" filter="url(#handLight)"/>
<rect x="752" y="186" width="50" height="50" fill="none" stroke="#8a5828" stroke-width="2.2" filter="url(#hand)"/>

<rect x="822" y="186" width="50" height="50" fill="url(#winGrad)" filter="url(#handLight)"/>
<line x1="847" y1="186" x2="847" y2="236" stroke="#6080a8" stroke-width="1.5" filter="url(#handLight)"/>
<line x1="822" y1="211" x2="872" y2="211" stroke="#6080a8" stroke-width="1.5" filter="url(#handLight)"/>
<rect x="822" y="186" width="50" height="50" fill="none" stroke="#8a5828" stroke-width="2.2" filter="url(#hand)"/>

<!-- KAT 2 y=256 -->
<rect x="472" y="256" width="50" height="50" fill="url(#winGrad)" filter="url(#handLight)"/>
<line x1="497" y1="256" x2="497" y2="306" stroke="#6080a8" stroke-width="1.5" filter="url(#handLight)"/>
<line x1="472" y1="281" x2="522" y2="281" stroke="#6080a8" stroke-width="1.5" filter="url(#handLight)"/>
<rect x="472" y="256" width="50" height="50" fill="none" stroke="#8a5828" stroke-width="2.2" filter="url(#hand)"/>

<rect x="542" y="256" width="50" height="50" fill="url(#winGrad)" filter="url(#handLight)"/>
<line x1="567" y1="256" x2="567" y2="306" stroke="#6080a8" stroke-width="1.5" filter="url(#handLight)"/>
<line x1="542" y1="281" x2="592" y2="281" stroke="#6080a8" stroke-width="1.5" filter="url(#handLight)"/>
<rect x="542" y="256" width="50" height="50" fill="none" stroke="#8a5828" stroke-width="2.2" filter="url(#hand)"/>

<rect x="612" y="256" width="50" height="50" fill="url(#winGrad)" filter="url(#handLight)"/>
<line x1="637" y1="256" x2="637" y2="306" stroke="#6080a8" stroke-width="1.5" filter="url(#handLight)"/>
<line x1="612" y1="281" x2="662" y2="281" stroke="#6080a8" stroke-width="1.5" filter="url(#handLight)"/>
<rect x="612" y="256" width="50" height="50" fill="none" stroke="#8a5828" stroke-width="2.2" filter="url(#hand)"/>

<rect x="682" y="256" width="50" height="50" fill="url(#winGrad)" filter="url(#handLight)"/>
<line x1="707" y1="256" x2="707" y2="306" stroke="#6080a8" stroke-width="1.5" filter="url(#handLight)"/>
<line x1="682" y1="281" x2="732" y2="281" stroke="#6080a8" stroke-width="1.5" filter="url(#handLight)"/>
<rect x="682" y="256" width="50" height="50" fill="none" stroke="#8a5828" stroke-width="2.2" filter="url(#hand)"/>

<rect x="752" y="256" width="50" height="50" fill="url(#winGrad)" filter="url(#handLight)"/>
<line x1="777" y1="256" x2="777" y2="306" stroke="#6080a8" stroke-width="1.5" filter="url(#handLight)"/>
<line x1="752" y1="281" x2="802" y2="281" stroke="#6080a8" stroke-width="1.5" filter="url(#handLight)"/>
<rect x="752" y="256" width="50" height="50" fill="none" stroke="#8a5828" stroke-width="2.2" filter="url(#hand)"/>

<rect x="822" y="256" width="50" height="50" fill="url(#winGrad)" filter="url(#handLight)"/>
<line x1="847" y1="256" x2="847" y2="306" stroke="#6080a8" stroke-width="1.5" filter="url(#handLight)"/>
<line x1="822" y1="281" x2="872" y2="281" stroke="#6080a8" stroke-width="1.5" filter="url(#handLight)"/>
<rect x="822" y="256" width="50" height="50" fill="none" stroke="#8a5828" stroke-width="2.2" filter="url(#hand)"/>

<!-- KAT 3 y=326 -->
<rect x="472" y="326" width="50" height="44" fill="url(#winGrad)" filter="url(#handLight)"/>
<line x1="497" y1="326" x2="497" y2="370" stroke="#6080a8" stroke-width="1.5" filter="url(#handLight)"/>
<line x1="472" y1="348" x2="522" y2="348" stroke="#6080a8" stroke-width="1.5" filter="url(#handLight)"/>
<rect x="472" y="326" width="50" height="44" fill="none" stroke="#8a5828" stroke-width="2.2" filter="url(#hand)"/>

<rect x="542" y="326" width="50" height="44" fill="url(#winGrad)" filter="url(#handLight)"/>
<line x1="567" y1="326" x2="567" y2="370" stroke="#6080a8" stroke-width="1.5" filter="url(#handLight)"/>
<line x1="542" y1="348" x2="592" y2="348" stroke="#6080a8" stroke-width="1.5" filter="url(#handLight)"/>
<rect x="542" y="326" width="50" height="44" fill="none" stroke="#8a5828" stroke-width="2.2" filter="url(#hand)"/>

<rect x="612" y="326" width="50" height="44" fill="url(#winGrad)" filter="url(#handLight)"/>
<line x1="637" y1="326" x2="637" y2="370" stroke="#6080a8" stroke-width="1.5" filter="url(#handLight)"/>
<line x1="612" y1="348" x2="662" y2="348" stroke="#6080a8" stroke-width="1.5" filter="url(#handLight)"/>
<rect x="612" y="326" width="50" height="44" fill="none" stroke="#8a5828" stroke-width="2.2" filter="url(#hand)"/>

<rect x="682" y="326" width="50" height="44" fill="url(#winGrad)" filter="url(#handLight)"/>
<line x1="707" y1="326" x2="707" y2="370" stroke="#6080a8" stroke-width="1.5" filter="url(#handLight)"/>
<line x1="682" y1="348" x2="732" y2="348" stroke="#6080a8" stroke-width="1.5" filter="url(#handLight)"/>
<rect x="682" y="326" width="50" height="44" fill="none" stroke="#8a5828" stroke-width="2.2" filter="url(#hand)"/>

<rect x="752" y="326" width="50" height="44" fill="url(#winGrad)" filter="url(#handLight)"/>
<line x1="777" y1="326" x2="777" y2="370" stroke="#6080a8" stroke-width="1.5" filter="url(#handLight)"/>
<line x1="752" y1="348" x2="802" y2="348" stroke="#6080a8" stroke-width="1.5" filter="url(#handLight)"/>
<rect x="752" y="326" width="50" height="44" fill="none" stroke="#8a5828" stroke-width="2.2" filter="url(#hand)"/>

<rect x="822" y="326" width="50" height="44" fill="url(#winGrad)" filter="url(#handLight)"/>
<line x1="847" y1="326" x2="847" y2="370" stroke="#6080a8" stroke-width="1.5" filter="url(#handLight)"/>
<line x1="822" y1="348" x2="872" y2="348" stroke="#6080a8" stroke-width="1.5" filter="url(#handLight)"/>
<rect x="822" y="326" width="50" height="44" fill="none" stroke="#8a5828" stroke-width="2.2" filter="url(#hand)"/>

<!-- ════════════════════════════════ -->
<!-- BAYRAK DİREĞİ                  -->
<!-- ════════════════════════════════ -->
<line x1="370" y1="30" x2="370" y2="400" stroke="#d8cfc0" stroke-width="2.5" filter="url(#handLight)"/>
<path d="M370,42 L412,54 L370,68 Z" fill="#e03030" filter="url(#handLight)"/>
<!-- Ay yıldız basit -->
<circle cx="390" cy="55" r="5" fill="white" opacity="0.85" filter="url(#handLight)"/>
<circle cx="393" cy="55" r="3.5" fill="#e03030" filter="url(#handLight)"/>
<!-- Direk tabanı -->
<rect x="365" y="397" width="10" height="5" fill="#b0a898" rx="1" filter="url(#handLight)"/>

<!-- ════════════════════════════════ -->
<!-- ÇALI / BİTKİLER                -->
<!-- ════════════════════════════════ -->
<ellipse cx="76"  cy="400" rx="32" ry="20" fill="#2a5828" filter="url(#hand)"/>
<ellipse cx="104" cy="394" rx="26" ry="17" fill="#368034" filter="url(#hand)"/>
<ellipse cx="56"  cy="396" rx="20" ry="14" fill="#2e6a2e" filter="url(#hand)"/>
<ellipse cx="86"  cy="388" rx="18" ry="14" fill="#428840" filter="url(#hand)"/>

<ellipse cx="290" cy="400" rx="22" ry="14" fill="#2a5828" filter="url(#hand)"/>
<ellipse cx="310" cy="396" rx="16" ry="11" fill="#368034" filter="url(#hand)"/>

<ellipse cx="860" cy="400" rx="26" ry="16" fill="#2a5828" filter="url(#hand)"/>
<ellipse cx="840" cy="396" rx="18" ry="12" fill="#368034" filter="url(#hand)"/>

<!-- Alt zemin yolu -->
<path d="M160,480 M0,480 L900,480" stroke="none"/>
</svg>`;
  return (
    <div
      className="school-building-svg"
      style={{ width: "100%", height: "auto" }}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
