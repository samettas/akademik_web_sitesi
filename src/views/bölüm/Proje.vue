<template>
  <aside
    class="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-gradient-to-r from-sky-300 to-cyan-100 transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]"
  >
    <div>
      <div class="mt-8 text-center">
        <img
          src="https://www.gazetepusula.net/wp-content/uploads/etu-projesine-destek-820x440.jpg"
          alt=""
          class="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
        />
        <h5 class="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
          Barış ÖZYER
        </h5>
        <span class="hidden text-gray-400 lg:block">Dr.Öğr.Üyesi</span>
      </div>

      <ul class="space-y-2 tracking-wide mt-8">
        <li>
          <a
            href="/"
            aria-label="dashboard"
            class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
          >
            <svg class="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
                class="fill-current text-cyan-400 dark:fill-slate-600"
              ></path>
              <path
                d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
                class="fill-current text-cyan-200 group-hover:text-cyan-300"
              ></path>
              <path
                d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
                class="fill-current group-hover:text-sky-300"
              ></path>
            </svg>
            <span class="-mr-1 font-medium">Ana Sayfa</span>
          </a>
        </li>
        <li>
          <a
            href="/egitim"
            class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                class="fill-current text-gray-300 group-hover:text-cyan-300"
                fill-rule="evenodd"
                d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
                clip-rule="evenodd"
              />
              <path
                class="fill-current text-gray-600 group-hover:text-cyan-600"
                d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
              />
            </svg>
            <span class="group-hover:text-gray-700">Eğitim Bilgileri</span>
          </a>
        </li>
        <li>
          <a
            href="/Arastirma"
            class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                class="fill-current text-gray-600 group-hover:text-cyan-600"
                fill-rule="evenodd"
                d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                clip-rule="evenodd"
              />
              <path
                class="fill-current text-gray-300 group-hover:text-cyan-300"
                d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"
              />
            </svg>
            <span class="group-hover:text-gray-700">Araştırma Alanları</span>
          </a>
        </li>
        <li>
          <a
            href="/idari"
            class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                class="fill-current text-gray-600 group-hover:text-cyan-600"
                d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"
              />
              <path
                class="fill-current text-gray-300 group-hover:text-cyan-300"
                d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
              />
            </svg>
            <span class="group-hover:text-gray-700">İdari Bilgileri</span>
          </a>
        </li>
        <li>
          <a
            href="/Yayinlar"
            class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                class="fill-current text-gray-600 group-hover:text-cyan-600"
                fill-rule="evenodd"
                d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                clip-rule="evenodd"
              />
              <path
                class="fill-current text-gray-300 group-hover:text-cyan-300"
                d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"
              />
            </svg>
            <span class="group-hover:text-gray-700">Yayınlar&Eserler</span>
          </a>
        </li>
        <li>
          <a
            href="/Proje"
            class="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                class="fill-current text-gray-300 text-cyan-300"
                fill-rule="evenodd"
                d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
                clip-rule="evenodd"
              />
              <path
                class="fill-current text-gray-600 text-cyan-300"
                d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
              />
            </svg>
            <span class="group-hover:text-gray-700">Proje</span>
          </a>
        </li>
        <li>
          <a
            href="Basarilar"
            class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                class="fill-current text-gray-300 group-hover:text-cyan-300"
                d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"
              />
              <path
                class="fill-current text-gray-600 group-hover:text-cyan-600"
                fill-rule="evenodd"
                d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="group-hover:text-gray-700">Başarılar&Tanınırlık</span>
          </a>
        </li>
        <li>
          <a
            href="https://cdn.discordapp.com/attachments/784044928358416385/977238389193601054/sql.pdf"
            class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                class="fill-current text-gray-300 group-hover:text-cyan-300"
                fill-rule="evenodd"
                d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
                clip-rule="evenodd"
              />
              <path
                class="fill-current text-gray-600 group-hover:text-cyan-600"
                d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
              />
            </svg>
            <span class="group-hover:text-gray-700">Özgeçmiş Dosyası</span>
          </a>
        </li>
      </ul>
    </div>
  </aside>
  <!--/SAĞ KISIM -->
  <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
    <div class="sticky z-10 top-0 h-40 border-b bg-white lg:py-2.5">
      <div class="px-6 flex items-center space-x-4 2xl:container">
        <img
          class="logo"
          src="https://erzurum.edu.tr/Content/etugeneldosyalar/38d89f92-299b-4d64-b427-d2e0f1502be6.png"
        />
        <h1 class="font-sans">Erzurum Teknik Üniversitesi Akademik Profil Sayfası</h1>
      </div>
    </div>
    <div class="body text-left px-6 pt-6 2xl:container">
      <div>
        <h2 class="text-3xl pb-8 font-bold underline decoration-solid">
          Desteklenen Projeler
        </h2>
        <p class="text-gray-400">2021 - 2024</p>
        <a
          class="font-bold hover:underline"
          href="https://avesis.atauni.edu.tr/proje/166be702-03c1-434a-ab6c-494c5a9c067b/robonimbus"
          >Robonimbus</a
        >
        <p>Desteklenmiş Diğer Projeler</p>
        <div class="flex flex-row">
          <div>
            <p class="text-sky-500 hover:underline pr-2">Özyer B.</p>
          </div>
          <div>
            <p class="text-sky-500 hover:underline pr-2">Kaskatı T.(Yürütücü)</p>
          </div>
        </div>

        <p class="text-gray-400 pt-8">2020 - 2021</p>
        <a
          class="font-bold hover:underline"
          href="https://avesis.atauni.edu.tr/proje/8b2ea34f-606a-4f9c-bca1-7fd9e30f7fa6/yeni-bir-dikey-inis-kalkis-yapabilen-savasan-insansiz-hava-aracinin-siha-mekanik-aerodinamik-tasarimi-ve-bilgisayarli-gorme-tabanli-algilama"
          >Yeni Bir Dikey İniş-Kalkış Yapabilen Savaşan İnsansız Hava Aracının (SİHA)
          Mekanik Aerodinamik Tasarımı ve Bilgisayarlı Görme Tabanlı Algılama</a
        >
        <p>Yükseköğretim Kurumları Destekli Proje</p>
        <div class="flex flex-row">
          <div>
            <p class="text-sky-500 hover:underline pr-2">ÖZYER B. (Yürütücü)</p>
          </div>
          <div>
            <p class="text-sky-500 hover:underline pr-2">ÇİNTAŞ E.</p>
          </div>
          <div>
            <p class="text-sky-500 hover:underline pr-2">ŞİMŞEK E.</p>
          </div>
        </div>

        <p class="text-gray-400 pt-8">2019 - 2020</p>
        <a
          class="font-bold hover:underline"
          href="https://avesis.atauni.edu.tr/proje/6ff57f57-a633-4b71-acf3-aea53372abb7/otonom-hareket-edebilen-binek-arac"
          >Otonom hareket edebilen binek araç</a
        >
        <p>Yükseköğretim Kurumları Destekli Proje</p>
        <div class="flex flex-row">
          <div>
            <p class="text-sky-500 hover:underline pr-2">ÖZYER B. (Yürütücü)</p>
          </div>
          <div>
            <p class="text-sky-500 hover:underline pr-2">YERLİKAYA T.</p>
          </div>
        </div>

        <p class="text-gray-400 pt-8">2019 - 2019</p>
        <a
          class="font-bold hover:underline"
          href="https://avesis.atauni.edu.tr/proje/9bfb38ac-4fda-49cd-a174-f113912efff7/uc-boyutlu-yazici-ile-robot-manipulator-tasarimi-uretimi-ve-denetimi"
          >Üç boyutlu Yazıcı ile Robot Manipulator Tasarımı,Üretimi ve Denetimi</a
        >
        <p>Yükseköğretim Kurumları Destekli Proje</p>
        <div class="flex flex-row">
          <div>
            <p class="text-sky-500 hover:underline pr-2">ÖZYER B. (Yürütücü)</p>
          </div>
          <div>
            <p class="text-sky-500 hover:underline pr-2">KURTBAŞ Ş.</p>
          </div>
          <div>
            <p class="text-sky-500 hover:underline pr-2">ÖZTÜRK E.</p>
          </div>
        </div>

        <p class="text-gray-400 pt-8">2018 - 2019</p>
        <a
          class="font-bold hover:underline"
          href="https://avesis.atauni.edu.tr/proje/3c0795e0-8fb3-40df-9158-44cb782251dc/firmalarin-insan-kaynaklari-departmanlarinda-kullanilmak-uzere-bulut-tabanli-metin-isleme-yapabilen-360-derece-performans-degerlendirme-yazilimi-gelistirilmesi"
          >Firmaların İnsan Kaynakları Departmanlarında Kullanılmak Üzere, Bulut Tabanlı,
          Metin İşleme Yapabilen 360 Derece Performans Değerlendirme Yazılımı
          Geliştirilmesi</a
        >
        <p>TÜBİTAK Projesi</p>
        <div class="flex flex-row">
          <div>
            <p class="text-sky-500 hover:underline pr-2">ÖZYER B.</p>
          </div>
          <div>
            <p class="text-sky-500 hover:underline pr-2">Bulut B.(Yürütücü)</p>
          </div>
        </div>

        <p class="text-gray-400 pt-8">2018 - 2019</p>
        <a
          class="font-bold hover:underline"
          href="https://avesis.atauni.edu.tr/proje/77a35fd4-34ad-49d2-9640-30187e9853dd/nesnelerin-internetinde-sis-uc-programlama-tabanli-akilli-ve-is-birlikci-algilama-yontemlerinin-arastirilmasi"
          >Nesnelerin İnternetinde Sis/Uç Programlama Tabanlı Akıllı ve İş Birlikçi
          Algılama Yöntemlerinin Araştırılması</a
        >
        <p>Yükseköğretim Kurumları Destekli Proje</p>
        <div class="flex flex-row">
          <div>
            <p class="text-sky-500 hover:underline pr-2">ÖZYER B. (Yürütücü)</p>
          </div>
          <div>
            <p class="text-sky-500 hover:underline pr-2">ŞİMŞEK E.</p>
          </div>
        </div>

        <p class="text-gray-400 pt-8">2016 - 2017</p>
        <a
          class="font-bold hover:underline"
          href="https://avesis.atauni.edu.tr/proje/295bcd1b-c85b-4940-9d2d-e4803fdc151e/insansiz-hava-araci-tasarimi-imalati-ve-ogrenci-yarismalarina-katilimin-saglabnmasi"
          >"İNSANSIZ HAVA ARACI TASARIMI İMALATI VE ÖĞRENCİ YARIŞMALARINA KATILIMIN
          SAĞLABNMASI"</a
        >
        <p>Yükseköğretim Kurumları Destekli Proje</p>
        <div class="flex flex-row">
          <div>
            <p class="text-sky-500 hover:underline pr-2">ÖZYER B. (Yürütücü)</p>
          </div>
          <div>
            <p class="text-sky-500 hover:underline pr-2">KOVACI H.</p>
          </div>
          <div>
            <p class="text-sky-500 hover:underline pr-2">KELEŞ A.</p>
          </div>
        </div>

        <p class="text-gray-400 pt-8">2015 - 2015</p>
        <a
          class="font-bold hover:underline"
          href="https://avesis.atauni.edu.tr/proje/3eb02bd8-5914-4097-99ab-e67f09844627/six-legged-terrain-robot-design-and-control-undergraduate-senior-design-project"
          >Six-Legged Terrain Robot Design and Control, Undergraduate Senior Design
          Project</a
        >
        <p>TÜBİTAK Projesi</p>
        <div class="flex flex-row">
          <div>
            <p class="text-sky-500 hover:underline pr-2">ÖZYER B. (Yürütücü)</p>
          </div>
        </div>

        <p class="text-gray-400 pt-8">2015 - 2015</p>
        <a
          class="font-bold hover:underline"
          href="https://avesis.atauni.edu.tr/proje/8ed5a9a2-304b-4024-bf00-13fb21930edd/direction-and-location-protection-for-autonomous-mobile-robots"
          >Direction and Location Protection for Autonomous Mobile Robots</a
        >
        <p>TÜBİTAK Projesi</p>
        <div class="flex flex-row">
          <div>
            <p class="text-sky-500 hover:underline pr-2">ÖZYER B. (Yürütücü)</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "main-Proje",
  components: {},
};
</script>

<style>
.logo {
  width: 130px;
  height: 130px;
  margin-right: 5px;
}

.body {
  background: url(../img/bg-logo.png) center 20px no-repeat;
}

h1 {
  text-align: center;
  text-decoration: solid;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 44px;
}
</style>
