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
            class="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                class="fill-current text-gray-600 text-cyan-300"
                d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"
              />
              <path
                class="fill-current text-gray-300 text-cyan-300"
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
      <div class="grid grid-cols-2">
        <div>
          <h2 class="text-3xl pb-4 font-bold underline decoration-solid">
            Akademik Unvanlar
          </h2>
          <p class="text-gray-400">2014 - Devam Ediyor</p>
          <p class="font-bold">Dr.Öğr.Üyesi</p>
          <p>Atatürk Üniversitesi, Mühendislik Fakültesi, Bilgisayar Mühendisliği</p>

          <p class="text-gray-400 pt-10">2013 - 2014</p>
          <p class="font-bold">Araştırma Görevlisi Dr.</p>
          <p>
            Atatürk Üniversitesi, Mühendislik Fakültesi, Elektrik-Elektronik Mühendisliği
          </p>

          <p class="text-gray-400 pt-10">2002 - 2013</p>
          <p class="font-bold">Araştırma Görevlisi</p>
          <p>
            Orta Doğu Teknik Üniversitesi, Mühendislik Fakültesi, Elektrik Ve Elektronik
            Mühendisliği
          </p>
        </div>
        <div>
          <h2 class="text-3xl pb-4 font-bold underline decoration-solid">
            Yönetimsel Görevler
          </h2>
          <p class="text-gray-400">2021 - Devam Ediyor</p>
          <p class="font-bold">Bölüm Akademik Teşvik Değerlendirme Komisyonu Üyesi</p>
          <p>Atatürk Üniversitesi, Mühendislik Fakültesi, Bilgisayar Mühendisliği</p>

          <p class="text-gray-400 pt-10">2015 - 2019</p>
          <p class="font-bold">Bölüm Başkan Yardımcısı</p>
          <p>
            Atatürk Üniversitesi, Mühendislik Fakültesi, Bilgisayar Mühendisliği Bölümü
          </p>

          <p class="text-gray-400 pt-10">2014 - 2015</p>
          <p class="font-bold">Sınav Programı Hazırlama Komisyon Üyesi</p>
          <p>Atatürk Üniversitesi, Mühendislik Fakültesi, Bilgisayar Mühendisliği</p>
        </div>
        <div>
          <h2 class="text-3xl pb-4 pt-8 font-bold underline decoration-solid">
            Verdiği Dersler
          </h2>
          <p class="text-gray-400">Doktora</p>
          <p class="font-bold">Manipülatör Kontrol Teorisi ve Uygulaması</p>

          <p class="text-gray-400 pt-3">Lisans</p>
          <p class="font-bold">Kontrol Sistemleri</p>

          <p class="text-gray-400 pt-3">Lisans</p>
          <p class="font-bold">Signals and Systems</p>

          <p class="text-gray-400 pt-3">Lisans</p>
          <p class="font-bold">Bilgisayar Mühendisliğine Giriş</p>

          <p class="text-gray-400 pt-3">Lisans</p>
          <p class="font-bold">Mikrodenetleyiciler</p>

          <p class="text-gray-400 pt-3">Doktora</p>
          <p class="font-bold">Bilgisayarlı Görme</p>

          <p class="text-gray-400 pt-3">Yüksek Lisans</p>
          <p class="font-bold">Intelligent Robotics</p>

          <p class="text-gray-400 pt-3">Lisans</p>
          <p class="font-bold">Introduction to Computer Engineering</p>

          <p class="text-gray-400 pt-3">Lisans</p>
          <p class="font-bold">Nesneye Yönelik Programlama</p>

          <p class="text-gray-400 pt-3">Lisans</p>
          <p class="font-bold">Gömülü Sistemler</p>

          <p class="text-gray-400 pt-3">Lisans</p>
          <p class="font-bold">Programlamaya Giriş</p>

          <p class="text-gray-400 pt-3">Lisans</p>
          <p class="font-bold">İstatistik ve Olasılık</p>
        </div>
        <div class="pt-8">
          <h2 class="text-3xl pb-4 font-bold underline decoration-solid">
            Yönetilen Tezler
          </h2>
          <a
            class="font-bold hover:underline"
            href="https://avesis.atauni.edu.tr/yonetilen-tez/bb0bb17b-c3f5-444d-b1f3-d6d938c3bedf/yuz-goruntulerinden-geometrik-oznitelikler-cikarilarak-cocuklardaki-dikkat-eksikligi-ve-hiperaktivite-bozuklugunun-denetimli-ogrenme-algoritmalariyla-tespiti-ve-analizi"
            >Yüz görüntülerinden geometrik öznitelikler çıkarılarak çocuklardaki dikkat
            eksikliği ve hiperaktivite bozukluğunun denetimli öğrenme algoritmalarıyla
            tespiti ve analizi</a
          >
          <p class="text-sky-500 hover:underline">Özyer B. (Danışman)</p>
          <p class="text-gray-400 pb-5">S.BUĞRAHAN(Öğrenci), Yüksek Lisans, 2022</p>

          <a
            class="font-bold hover:underline"
            href="https://avesis.atauni.edu.tr/yonetilen-tez/2712d5ae-2704-4cc2-8d70-55256f0f2d7b/yapay-zeka-yontemleri-ile-ataturk-universitesi-acikogretim-fakultesi-sinav-sorularinin-zorluk-derecesinin-tespiti"
            >Yapay zeka yöntemleri ile Atatürk Üniversitesi Açıköğretim Fakültesi sınav
            sorularının zorluk derecesinin tespiti</a
          >
          <p class="text-sky-500 hover:underline">Özyer B. (Danışman)</p>
          <p class="text-gray-400 pb-5">A.CANPOLAT(Öğrenci), Yüksek Lisans, 2021</p>

          <a
            class="font-bold hover:underline"
            href="https://avesis.atauni.edu.tr/yonetilen-tez/8051a313-f827-4e0b-bdd0-60ab8a1a7ff9/otizm-spektrum-bozukluklarinda-kendini-uyarici-hareketlerin-gorsel-kelime-cantasi-yaklasimi-ve-derin-ogrenme-yontemleri-ile-taninmasi"
            >Otizm spektrum bozukluklarında kendini uyarıcı hareketlerin görsel kelime
            çantası yaklaşımı ve derin öğrenme yöntemleri ile tanınması</a
          >
          <p class="text-sky-500 hover:underline">Özyer B. (Danışman)</p>
          <p class="text-gray-400 pb-5">S.KAÇDIOĞLU(Öğrenci), Yüksek Lisans, 2020</p>

          <a
            class="font-bold hover:underline"
            href="https://avesis.atauni.edu.tr/yonetilen-tez/ba3fd669-df9f-4acd-95c7-00c51be38b7f/biyometrik-verilerde-kesikli-dalgacik-donusumune-dayali-filigran-tekniklerinin-analizi"
            >Biyometrik verilerde kesikli dalgacık dönüşümüne dayalı filigran
            tekniklerinin analizi</a
          >
          <p class="text-sky-500 hover:underline">Özyer B.</p>
          <p class="text-gray-400 pb-5">F.JORH(Öğrenci), Yüksek Lisans, 2020</p>

          <a
            class="font-bold hover:underline"
            href="https://avesis.atauni.edu.tr/yonetilen-tez/5f106a4d-6c9d-414a-82ec-dd397167f764/otonom-robotlar-araciligiyla-veri-merkezlerindeki-kabinet-ici-sicaklik-dagiliminin-bulanik-mantik-ile-kontrolu"
            >Otonom Robotlar Aracılığıyla Veri Merkezlerindeki Kabinet içi Sıcaklık
            Dağılımının Bulanık Mantık İle Kontrolü</a
          >
          <p class="text-sky-500 hover:underline">Özyer B.</p>
          <p class="text-gray-400 pb-5">M.Bayram(Öğrenci), Yüksek Lisans, 2019</p>

          <a
            class="font-bold hover:underline"
            href="https://avesis.atauni.edu.tr/yonetilen-tez/ba6d766a-78ea-461b-8a47-f50ce84aa65f/nesnelerin-internetinde-kenar-programlama-tabanli-akilli-algilama"
            >Nesnelerin İnterneti’nde Kenar Programlama Tabanlı Akıllı Algılama</a
          >
          <p class="text-sky-500 hover:underline">Özyer B.</p>
          <p class="text-gray-400 pb-5">E.Şimşek(Öğrenci), Yüksek Lisans, 2019</p>

          <a
            class="font-bold hover:underline"
            href="https://avesis.atauni.edu.tr/yonetilen-tez/8888e811-baed-4a96-8475-c136195a0521/anlamsal-ag-ve-hareketli-nesne-veri-tabani-kullanarak-savas-ucaklari-icin-anlik-rota-onerme-sistemi"
            >Anlamsal Ağ ve Hareketli Nesne Veri Tabanı Kullanarak Savaş Uçakları için
            Anlık Rota Önerme Sistemi</a
          >
          <p class="text-sky-500 hover:underline">Özyer B.</p>
          <p class="text-gray-400 pb-5">E.Cintaş(Öğrenci), Yüksek Lisans, 2018</p>

          <a
            class="font-bold hover:underline"
            href="https://avesis.atauni.edu.tr/yonetilen-tez/85a661e0-fcd2-4553-ab88-8b7c57557c5d/pekistirmeli-ogrenme-yontemiyle-farkli-gorevlerin-robotlara-ogretilmesi"
            >Pekiştirmeli Öğrenme Yöntemiyle Farklı Görevlerin Robotlara Öğretilmesi</a
          >
          <p class="text-sky-500 hover:underline">Özyer B.</p>
          <p class="text-gray-400 pb-5">R.Özakar(Öğrenci), Yüksek Lisans, 2016</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "main-idari",
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
  background: url(../img/bg-logo.png) center 20px;
}

h1 {
  text-align: center;
  text-decoration: solid;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 44px;
}
</style>
