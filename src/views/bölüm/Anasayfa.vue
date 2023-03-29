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
            class="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400"
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
    <div class="sticky z-10 top-0 h-40 border-b bg-white position:relative lg:py-2.5">
      <div class="px-6 flex items-center space-x-4 2xl:container">
        <img
          class="logo"
          src="https://erzurum.edu.tr/Content/etugeneldosyalar/38d89f92-299b-4d64-b427-d2e0f1502be6.png"
          alt=""
        />
        <h1 class="font-sans">Erzurum Teknik Üniversitesi Akademik Profil Sayfası</h1>
      </div>
    </div>
    <div class="body px-6 pt-6">
      <div class="">
        <h2 class="text-3xl pb-8 font-bold underline">Genel Bilgiler</h2>
        <div class="flex flex-row">
          <div>
            <p class="text-xl text-left font-bold">Kurum Bilgileri:</p>
          </div>
          <div>
            <p class="text-xl pl-2">Atatürk Üniversitesi</p>
          </div>
        </div>
        <p class="pt-5 text-left">
          Barış Özyer 1978 yılında Ankara'da doğdu. İzmir Karşıyaka Anadolu Lisesinden
          mezun olduktan sonra 2002 yılında Erciyes Üniversitesi Elektronik Mühendisliği
          Bölümünde lisansını tamamladı. 2012 yılında ODTÜ Elektrik ve Elektronik
          Mühendisliği Bölümünde Prof. Dr. İsmet Erkmen ve Prof. Dr. Aydan Erkmen
          danışmanlığında doktorasını tamamladı ve 2002-2013 yılları arasında aynı bölümde
          araştırma görevlisi olarak görev yaptı. Doktora döneminde 2007-2008 yılları
          arasında Japonya’ da ATR Computational Neuroscience Laboratuvarında, Prof. Dr.
          Erhan Öztop danışmanlığında stajer (intern) araştırmacı olarak çalışmalar yaptı.
          2014 yılından itibaren Atatürk Üniversitesi Bilgisayar Mühendisliği Bölümünde
          Dr. Öğretim Üyesi olarak görev yapmaktadır. Mühendislik Fakültesi Sınav
          Koordinatörlüğü ve Bilgisayar Mühendisliği Bölüm Başkanı Yardımcılığı
          görevlerini yürüttü. BAP, Tubitak, Teydeb, Uluslarası projelerde yürütücü,
          araştırmacı ve danışman olarak görev yaptı. Son yıllarda araştırma konularının
          odak noktası yapay öğrenme ve görme algoritmalarını robotik, çocuk psikiyatrisi,
          doğal yaşamı izleme, insan davranışları algılama ve doğal dil işleme alanlarında
          çeşitli araştırma problemlerine uygulamak ve yeni yöntemler geliştirmektir.
          Ayrıca robotik manipülatör dinamiği, kinematiği ve kontrol teorisi ile
          ilgilenmektedir. Bilgisayarlı Görme ve Akıllı Sistemler Laboratuvarı (CogviLab)’
          nın ortak kurucusudur. Evli ve kızları İnci (6 yaş) , Elif (6 yaş) ve İrem (1.5
          yaş) ’in babasıdır.
        </p>

        <h2 class="text-3xl pt-16 font-bold underline">İletişim</h2>
        <div class="iletisim pt-12">
          <div class="flex flex-row h-10">
            <div>
              <span class="text-xl font-bold">Web Sayfası: </span>
            </div>
            <div>
              <p class="text-xl pl-2">
                <a class="hover:underline" href="https://avesis.atauni.edu.tr/baris.ozyer"
                  >Atatürk Üniversitesi, Mühendislik Fakültesi, Bilgisayar Mühendisliği
                  Bölümü</a
                >
              </p>
            </div>
          </div>
          <div class="flex flex-row h-10">
            <div>
              <span class="text-xl font-bold">Ofis: </span>
            </div>
            <div>
              <p class="text-xl pl-2">Mühendislik Fakültesi Ek Bina Oda No: 216</p>
            </div>
          </div>
        </div>
        <div class="flex flex-row">
          <div>
            <span class="text-xl font-bold">Posta Adresi: </span>
          </div>
          <div>
            <p class="text-xl pl-2">baris.ozyer@atauni.edu.tr</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "main-Anasayfa",
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
  height: 731px;
}

h1 {
  text-align: center;
  text-decoration: solid;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 44px;
}
</style>
