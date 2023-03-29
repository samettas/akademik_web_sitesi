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
                d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"
              />
              <path
                class="fill-current text-gray-600 text-cyan-300"
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
        <div>
          <h2 class="text-3xl pb-8 font-extrabold underline decoration-solid">Üyelik</h2>
          <p class="text-gray-400">2020</p>
          <p class="font-bold">Yönenylem Araştırma Derneği</p>
          <p>Üye</p>
          <p class="text-gray-400">2015</p>
          <p class="font-bold">Institute of Undustrial and Systems Engineers</p>
          <p>Üye</p>
          <p class="text-gray-400">2015-2018</p>
          <p class="font-bold">
            Institute for Operations Research and the Management Sciences
          </p>
          <p>Üye</p>
          <p class="text-gray-400">2014</p>
          <p class="font-bold">Alpha Pi Mu</p>
          <p>Üye</p>
        </div>
        <div>
          <h2 class="text-3xl pb-8 font-extrabold underline decoration-solid pt-8">
            Ödül
          </h2>
          <p class="text-gray-400">2015</p>
          <p class="font-bold">ISERC Best Paper Award</p>
          <p>Industrial and Systems Engineering Research Conference</p>
          <p class="text-gray-400">2018</p>
          <p class="font-bold">Award for OUtstanding Service</p>
          <p>University of Arkansas</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "main-Basarilar",
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
