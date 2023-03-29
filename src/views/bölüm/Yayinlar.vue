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
                fill-rule="evenodd"
                d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                clip-rule="evenodd"
              />
              <path
                class="fill-current text-gray-300 text-cyan-300"
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
      <div>
        <h2 class="text-3xl pb-4 font-bold underline decoration-solid">
          SCI, SSCI ve AHCI İndekslerine Giren Dergilerde Yayınlana Makaleler
        </h2>
        <a
          class="font-bold hover:underline"
          href="https://avesis.atauni.edu.tr/yayin/0f9ea041-9f96-4978-b63d-e24c058a192d/a-hybrid-imm-jpdaf-algorithm-for-tracking-multiple-sperm-targets-and-motility-analysis-accepted"
          >A Hybrid IMM-JPDAF Algorithm for Tracking Multiple Sperm Targets and Motility
          Analysis (Accepted)</a
        >
        <div class="flex flex-row">
          <div>
            <p class="text-sky-500 hover:underline pr-2">Tümüklü Özyer G.</p>
          </div>
          <div>
            <p class="text-sky-500 hover:underline pr-2">Özyer B.</p>
          </div>
          <div>
            <p class="text-sky-500 hover:underline pr-2">Negın F.</p>
          </div>
          <div>
            <p class="text-sky-500 hover:underline pr-2">Alarabı I.</p>
          </div>
          <div>
            <p class="text-sky-500 hover:underline pr-2">Agahıan S.</p>
          </div>
        </div>
        <p class="text-gray-400 pb-5">
          NEURAL COMPUTING AND APPLICATIONS, cilt.1, sa.1, ss.1-10, 2022 (SCI Expanded
          İndekslerine Giren Dergi)
        </p>

        <a
          class="font-bold hover:underline"
          href="https://avesis.atauni.edu.tr/yayin/6d227184-03fb-4f00-9172-a1f86de75167/the-effect-of-population-and-tourism-factors-on-covid-19-cases-in-italy-visual-data-analysis-and-forecasting-approach"
          >The effect of population and tourism factors on Covid-19 cases in Italy: Visual
          data analysis and forecasting approach</a
        >
        <div class="flex flex-row">
          <div>
            <p class="text-sky-500 hover:underline pr-2">Uguz S.</p>
          </div>
          <div>
            <p class="text-sky-500 hover:underline pr-2">Yağanoğlu M.</p>
          </div>
          <div>
            <p class="text-sky-500 hover:underline pr-2">Özyer B.</p>
          </div>
          <div>
            <p class="text-sky-500 hover:underline pr-2">Tümüklü Özyer G.</p>
          </div>
          <div>
            <p class="text-sky-500 hover:underline pr-2">Tokdemir G.</p>
          </div>
        </div>
        <p class="text-gray-400 pb-5">
          CONCURRENCY AND COMPUTATION-PRACTICE & EXPERIENCE, cilt.34, sa.6, 2022 (SCI
          İndekslerine Giren Dergi)
        </p>

        <a
          class="font-bold hover:underline"
          href="https://avesis.atauni.edu.tr/yayin/b0687e67-c402-4f30-95e9-39b69b05b760/vision-assisted-recognition-of-stereotype-behaviors-for-early-diagnosis-of-autism-spectrum-disorders"
          >Vision-assisted recognition of stereotype behaviors for early diagnosis of
          Autism Spectrum Disorders</a
        >
        <div class="flex flex-row">
          <div>
            <p class="text-sky-500 hover:underline pr-2">Negin F.</p>
          </div>
          <div>
            <p class="text-sky-500 hover:underline pr-2">ÖZYER B.</p>
          </div>
          <div>
            <p class="text-sky-500 hover:underline pr-2">Agahian S.</p>
          </div>
          <div>
            <p class="text-sky-500 hover:underline pr-2">Kacdioglu S.</p>
          </div>
          <div>
            <p class="text-sky-500 hover:underline pr-2">Ozyer G. T</p>
          </div>
        </div>
        <p class="text-gray-400 pb-5">
          NEUROCOMPUTING, cilt.446, ss.145-155, 2021 (SCI İndekslerine Giren Dergi)
        </p>

        <a
          class="font-bold hover:underline"
          href="https://avesis.atauni.edu.tr/yayin/eb8491f6-c542-4780-98b6-f963a1177238/determination-of-physical-properties-and-thermal-conductivity-of-graphite-foam-with-image-analysis"
          >Determination of Physical Properties and Thermal Conductivity of Graphite Foam
          with Image Analysis</a
        >
        <div class="flex flex-row">
          <div>
            <p class="text-sky-500 hover:underline pr-2">Mohammadimehr A.</p>
          </div>
          <div>
            <p class="text-sky-500 hover:underline pr-2">Solmus İ.</p>
          </div>
          <div>
            <p class="text-sky-500 hover:underline pr-2">ÖZYER B.</p>
          </div>
          <div>
            <p class="text-sky-500 hover:underline pr-2">Rees D. A. S.</p>
          </div>
        </div>
        <p class="text-gray-400 pb-5">
          INTERNATIONAL JOURNAL OF THERMOPHYSICS, cilt.41, sa.4, 2020 (SCI İndekslerine
          Giren Dergi)
        </p>

        <a
          class="font-bold hover:underline"
          href="https://avesis.atauni.edu.tr/yayin/fc1323a5-30f3-4c36-ab80-ffaeb1468ef9/adaptive-fast-sliding-neural-control-for-robot-manipulator"
          >Adaptive fast sliding neural control for robot manipulator</a
        >
        <div class="flex flex-row">
          <div>
            <p class="text-sky-500 hover:underline pr-2">Özyer B.</p>
          </div>
        </div>
        <p class="text-gray-400 pb-5">
          TURKISH JOURNAL OF ELECTRICAL ENGINEERING AND COMPUTER SCIENCES, cilt.28, sa.6,
          2020 (SCI İndekslerine Giren Dergi)
        </p>

        <a
          class="font-bold hover:underline"
          href="https://avesis.atauni.edu.tr/yayin/33ad1dbe-b7e1-457f-bfbb-80e748c9975e/vision-based-moving-uav-tracking-by-another-uav-on-low-cost-hardware-and-a-new-ground-control-station"
          >Vision-Based Moving UAV Tracking by Another UAV on Low-Cost Hardware and a New
          Ground Control Station</a
        >
        <div class="flex flex-row">
          <div>
            <p class="text-sky-500 hover:underline pr-2">Cintaş E.</p>
          </div>
          <div>
            <p class="text-sky-500 hover:underline pr-2">Özyer B.</p>
          </div>
          <div>
            <p class="text-sky-500 hover:underline pr-2">Şimşek E</p>
          </div>
        </div>
        <p class="text-gray-400 pb-5">
          IEEE ACCESS, cilt.8, ss.194601-194611, 2020 (SCI İndekslerine Giren Dergi)
        </p>

        <a
          class="font-bold hover:underline"
          href="https://avesis.atauni.edu.tr/yayin/75289d2c-6dfc-4149-9dc9-857e69dc0fd6/analysis-of-biometric-data-using-watermarking-techniques"
          >Analysis of biometric data using watermarking techniques</a
        >
        <div class="flex flex-row">
          <div>
            <p class="text-sky-500 hover:underline pr-2">Jorh F.</p>
          </div>
          <div>
            <p class="text-sky-500 hover:underline pr-2">Özyer B.</p>
          </div>
          <div>
            <p class="text-sky-500 hover:underline pr-2">Fachkha C.</p>
          </div>
        </div>
        <p class="text-gray-400 pb-5">
          TURKISH JOURNAL OF ELECTRICAL ENGINEERING AND COMPUTER SCIENCES, cilt.28, sa.6,
          ss.3235-3252, 2020 (SCI İndekslerine Giren Dergi)
        </p>

        <a
          class="font-bold hover:underline"
          href="https://avesis.atauni.edu.tr/yayin/e0983a53-976e-401a-a982-fef4f48703d9/momentum-transfer-from-preshape-to-grasping"
          >Momentum transfer from preshape to grasping</a
        >
        <div class="flex flex-row">
          <div>
            <p class="text-sky-500 hover:underline pr-2">Ozyer B.</p>
          </div>
          <div>
            <p class="text-sky-500 hover:underline pr-2">Erkmen İ.</p>
          </div>
          <div>
            <p class="text-sky-500 hover:underline pr-2">Erkmen A. M.</p>
          </div>
        </div>
        <p class="text-gray-400 pb-5">
          Journal of Intelligent and Robotic Systems: Theory and Applications, cilt.75,
          ss.173-191, 2014 (SCI İndekslerine Giren Dergi)
        </p>
      </div>
      <div>
        <h2 class="text-3xl pb-4 font-bold underline decoration-solid">
          Diğer Dergilerde Yayınlanan Makaleler
        </h2>
        <a
          class="font-bold hover:underline"
          href="https://avesis.atauni.edu.tr/yayin/0f9ea041-9f96-4978-b63d-e24c058a192d/a-hybrid-imm-jpdaf-algorithm-for-tracking-multiple-sperm-targets-and-motility-analysis-accepted"
          >A Hybrid IMM-JPDAF Algorithm for Tracking Multiple Sperm Targets and Motility
          Analysis (Accepted)</a
        >
        <div class="flex flex-row">
          <div>
            <p class="text-sky-500 hover:underline pr-2">Tümüklü Özyer G.</p>
          </div>
          <div>
            <p class="text-sky-500 hover:underline pr-2">Özyer B.</p>
          </div>
          <div>
            <p class="text-sky-500 hover:underline pr-2">Negın F.</p>
          </div>
          <div>
            <p class="text-sky-500 hover:underline pr-2">Alarabı I.</p>
          </div>
          <div>
            <p class="text-sky-500 hover:underline pr-2">Agahıan S.</p>
          </div>
        </div>
        <p class="text-gray-400 pb-5">
          NEURAL COMPUTING AND APPLICATIONS, cilt.1, sa.1, ss.1-10, 2022 (SCI Expanded
          İndekslerine Giren Dergi)
        </p>

        <a
          class="font-bold hover:underline"
          href="https://avesis.atauni.edu.tr/yayin/6d227184-03fb-4f00-9172-a1f86de75167/the-effect-of-population-and-tourism-factors-on-covid-19-cases-in-italy-visual-data-analysis-and-forecasting-approach"
          >The effect of population and tourism factors on Covid-19 cases in Italy: Visual
          data analysis and forecasting approach</a
        >
        <div class="flex flex-row">
          <div>
            <p class="text-sky-500 hover:underline pr-2">Uguz S.</p>
          </div>
          <div>
            <p class="text-sky-500 hover:underline pr-2">Yağanoğlu M.</p>
          </div>
          <div>
            <p class="text-sky-500 hover:underline pr-2">Özyer B.</p>
          </div>
          <div>
            <p class="text-sky-500 hover:underline pr-2">Tümüklü Özyer G.</p>
          </div>
          <div>
            <p class="text-sky-500 hover:underline pr-2">Tokdemir G.</p>
          </div>
        </div>
        <p class="text-gray-400 pb-5">
          CONCURRENCY AND COMPUTATION-PRACTICE & EXPERIENCE, cilt.34, sa.6, 2022 (SCI
          İndekslerine Giren Dergi)
        </p>

        <a
          class="font-bold hover:underline"
          href="https://avesis.atauni.edu.tr/yayin/b0687e67-c402-4f30-95e9-39b69b05b760/vision-assisted-recognition-of-stereotype-behaviors-for-early-diagnosis-of-autism-spectrum-disorders"
          >Vision-assisted recognition of stereotype behaviors for early diagnosis of
          Autism Spectrum Disorders</a
        >
        <div class="flex flex-row">
          <div>
            <p class="text-sky-500 hover:underline pr-2">Negin F.</p>
          </div>
          <div>
            <p class="text-sky-500 hover:underline pr-2">ÖZYER B.</p>
          </div>
          <div>
            <p class="text-sky-500 hover:underline pr-2">Agahian S.</p>
          </div>
          <div>
            <p class="text-sky-500 hover:underline pr-2">Kacdioglu S.</p>
          </div>
          <div>
            <p class="text-sky-500 hover:underline pr-2">Ozyer G. T</p>
          </div>
        </div>
        <p class="text-gray-400 pb-5">
          NEUROCOMPUTING, cilt.446, ss.145-155, 2021 (SCI İndekslerine Giren Dergi)
        </p>

        <a
          class="font-bold hover:underline"
          href="https://avesis.atauni.edu.tr/yayin/eb8491f6-c542-4780-98b6-f963a1177238/determination-of-physical-properties-and-thermal-conductivity-of-graphite-foam-with-image-analysis"
          >Determination of Physical Properties and Thermal Conductivity of Graphite Foam
          with Image Analysis</a
        >
        <div class="flex flex-row">
          <div>
            <p class="text-sky-500 hover:underline pr-2">Mohammadimehr A.</p>
          </div>
          <div>
            <p class="text-sky-500 hover:underline pr-2">Solmus İ.</p>
          </div>
          <div>
            <p class="text-sky-500 hover:underline pr-2">ÖZYER B.</p>
          </div>
          <div>
            <p class="text-sky-500 hover:underline pr-2">Rees D. A. S.</p>
          </div>
        </div>
        <p class="text-gray-400 pb-5">
          INTERNATIONAL JOURNAL OF THERMOPHYSICS, cilt.41, sa.4, 2020 (SCI İndekslerine
          Giren Dergi)
        </p>

        <a
          class="font-bold hover:underline"
          href="https://avesis.atauni.edu.tr/yayin/fc1323a5-30f3-4c36-ab80-ffaeb1468ef9/adaptive-fast-sliding-neural-control-for-robot-manipulator"
          >Adaptive fast sliding neural control for robot manipulator</a
        >
        <div class="flex flex-row">
          <div>
            <p class="text-sky-500 hover:underline pr-2">Özyer B.</p>
          </div>
        </div>
        <p class="text-gray-400 pb-5">
          TURKISH JOURNAL OF ELECTRICAL ENGINEERING AND COMPUTER SCIENCES, cilt.28, sa.6,
          2020 (SCI İndekslerine Giren Dergi)
        </p>

        <a
          class="font-bold hover:underline"
          href="https://avesis.atauni.edu.tr/yayin/33ad1dbe-b7e1-457f-bfbb-80e748c9975e/vision-based-moving-uav-tracking-by-another-uav-on-low-cost-hardware-and-a-new-ground-control-station"
          >Vision-Based Moving UAV Tracking by Another UAV on Low-Cost Hardware and a New
          Ground Control Station</a
        >
        <div class="flex flex-row">
          <div>
            <p class="text-sky-500 hover:underline pr-2">Cintaş E.</p>
          </div>
          <div>
            <p class="text-sky-500 hover:underline pr-2">Özyer B.</p>
          </div>
          <div>
            <p class="text-sky-500 hover:underline pr-2">Şimşek E</p>
          </div>
        </div>
        <p class="text-gray-400 pb-5">
          IEEE ACCESS, cilt.8, ss.194601-194611, 2020 (SCI İndekslerine Giren Dergi)
        </p>

        <a
          class="font-bold hover:underline"
          href="https://avesis.atauni.edu.tr/yayin/75289d2c-6dfc-4149-9dc9-857e69dc0fd6/analysis-of-biometric-data-using-watermarking-techniques"
          >Analysis of biometric data using watermarking techniques</a
        >
        <div class="flex flex-row">
          <div>
            <p class="text-sky-500 hover:underline pr-2">Jorh F.</p>
          </div>
          <div>
            <p class="text-sky-500 hover:underline pr-2">Özyer B.</p>
          </div>
          <div>
            <p class="text-sky-500 hover:underline pr-2">Fachkha C.</p>
          </div>
        </div>
        <p class="text-gray-400 pb-5">
          TURKISH JOURNAL OF ELECTRICAL ENGINEERING AND COMPUTER SCIENCES, cilt.28, sa.6,
          ss.3235-3252, 2020 (SCI İndekslerine Giren Dergi)
        </p>

        <a
          class="font-bold hover:underline"
          href="https://avesis.atauni.edu.tr/yayin/e0983a53-976e-401a-a982-fef4f48703d9/momentum-transfer-from-preshape-to-grasping"
          >Momentum transfer from preshape to grasping</a
        >
        <div class="flex flex-row">
          <div>
            <p class="text-sky-500 hover:underline pr-2">Ozyer B.</p>
          </div>
          <div>
            <p class="text-sky-500 hover:underline pr-2">Erkmen İ.</p>
          </div>
          <div>
            <p class="text-sky-500 hover:underline pr-2">Erkmen A. M.</p>
          </div>
        </div>
        <p class="text-gray-400 pb-5">
          Journal of Intelligent and Robotic Systems: Theory and Applications, cilt.75,
          ss.173-191, 2014 (SCI İndekslerine Giren Dergi)
        </p>
      </div>
      <div>
        <h2 class="text-3xl pb-4 font-bold underline decoration-solid">
          Hakemli Kongre / Sempoyzum Bildiri Kitaplarında Yer Alan Yayınlar
        </h2>
        <a
          class="font-bold hover:underline"
          href="https://avesis.atauni.edu.tr/yayin/0f9ea041-9f96-4978-b63d-e24c058a192d/a-hybrid-imm-jpdaf-algorithm-for-tracking-multiple-sperm-targets-and-motility-analysis-accepted"
          >A Hybrid IMM-JPDAF Algorithm for Tracking Multiple Sperm Targets and Motility
          Analysis (Accepted)</a
        >
        <div class="flex flex-row">
          <div>
            <p class="text-sky-500 hover:underline pr-2">Tümüklü Özyer G.</p>
          </div>
          <div>
            <p class="text-sky-500 hover:underline pr-2">Özyer B.</p>
          </div>
          <div>
            <p class="text-sky-500 hover:underline pr-2">Negın F.</p>
          </div>
          <div>
            <p class="text-sky-500 hover:underline pr-2">Alarabı I.</p>
          </div>
          <div>
            <p class="text-sky-500 hover:underline pr-2">Agahıan S.</p>
          </div>
        </div>
        <p class="text-gray-400 pb-5">
          NEURAL COMPUTING AND APPLICATIONS, cilt.1, sa.1, ss.1-10, 2022 (SCI Expanded
          İndekslerine Giren Dergi)
        </p>

        <a
          class="font-bold hover:underline"
          href="https://avesis.atauni.edu.tr/yayin/6d227184-03fb-4f00-9172-a1f86de75167/the-effect-of-population-and-tourism-factors-on-covid-19-cases-in-italy-visual-data-analysis-and-forecasting-approach"
          >The effect of population and tourism factors on Covid-19 cases in Italy: Visual
          data analysis and forecasting approach</a
        >
        <div class="flex flex-row">
          <div>
            <p class="text-sky-500 hover:underline pr-2">Uguz S.</p>
          </div>
          <div>
            <p class="text-sky-500 hover:underline pr-2">Yağanoğlu M.</p>
          </div>
          <div>
            <p class="text-sky-500 hover:underline pr-2">Özyer B.</p>
          </div>
          <div>
            <p class="text-sky-500 hover:underline pr-2">Tümüklü Özyer G.</p>
          </div>
          <div>
            <p class="text-sky-500 hover:underline pr-2">Tokdemir G.</p>
          </div>
        </div>
        <p class="text-gray-400 pb-5">
          CONCURRENCY AND COMPUTATION-PRACTICE & EXPERIENCE, cilt.34, sa.6, 2022 (SCI
          İndekslerine Giren Dergi)
        </p>

        <a
          class="font-bold hover:underline"
          href="https://avesis.atauni.edu.tr/yayin/b0687e67-c402-4f30-95e9-39b69b05b760/vision-assisted-recognition-of-stereotype-behaviors-for-early-diagnosis-of-autism-spectrum-disorders"
          >Vision-assisted recognition of stereotype behaviors for early diagnosis of
          Autism Spectrum Disorders</a
        >
        <div class="flex flex-row">
          <div>
            <p class="text-sky-500 hover:underline pr-2">Negin F.</p>
          </div>
          <div>
            <p class="text-sky-500 hover:underline pr-2">ÖZYER B.</p>
          </div>
          <div>
            <p class="text-sky-500 hover:underline pr-2">Agahian S.</p>
          </div>
          <div>
            <p class="text-sky-500 hover:underline pr-2">Kacdioglu S.</p>
          </div>
          <div>
            <p class="text-sky-500 hover:underline pr-2">Ozyer G. T</p>
          </div>
        </div>
        <p class="text-gray-400 pb-5">
          NEUROCOMPUTING, cilt.446, ss.145-155, 2021 (SCI İndekslerine Giren Dergi)
        </p>

        <a
          class="font-bold hover:underline"
          href="https://avesis.atauni.edu.tr/yayin/eb8491f6-c542-4780-98b6-f963a1177238/determination-of-physical-properties-and-thermal-conductivity-of-graphite-foam-with-image-analysis"
          >Determination of Physical Properties and Thermal Conductivity of Graphite Foam
          with Image Analysis</a
        >
        <div class="flex flex-row">
          <div>
            <p class="text-sky-500 hover:underline pr-2">Mohammadimehr A.</p>
          </div>
          <div>
            <p class="text-sky-500 hover:underline pr-2">Solmus İ.</p>
          </div>
          <div>
            <p class="text-sky-500 hover:underline pr-2">ÖZYER B.</p>
          </div>
          <div>
            <p class="text-sky-500 hover:underline pr-2">Rees D. A. S.</p>
          </div>
        </div>
        <p class="text-gray-400 pb-5">
          INTERNATIONAL JOURNAL OF THERMOPHYSICS, cilt.41, sa.4, 2020 (SCI İndekslerine
          Giren Dergi)
        </p>

        <a
          class="font-bold hover:underline"
          href="https://avesis.atauni.edu.tr/yayin/fc1323a5-30f3-4c36-ab80-ffaeb1468ef9/adaptive-fast-sliding-neural-control-for-robot-manipulator"
          >Adaptive fast sliding neural control for robot manipulator</a
        >
        <div class="flex flex-row">
          <div>
            <p class="text-sky-500 hover:underline pr-2">Özyer B.</p>
          </div>
        </div>
        <p class="text-gray-400 pb-5">
          TURKISH JOURNAL OF ELECTRICAL ENGINEERING AND COMPUTER SCIENCES, cilt.28, sa.6,
          2020 (SCI İndekslerine Giren Dergi)
        </p>

        <a
          class="font-bold hover:underline"
          href="https://avesis.atauni.edu.tr/yayin/33ad1dbe-b7e1-457f-bfbb-80e748c9975e/vision-based-moving-uav-tracking-by-another-uav-on-low-cost-hardware-and-a-new-ground-control-station"
          >Vision-Based Moving UAV Tracking by Another UAV on Low-Cost Hardware and a New
          Ground Control Station</a
        >
        <div class="flex flex-row">
          <div>
            <p class="text-sky-500 hover:underline pr-2">Cintaş E.</p>
          </div>
          <div>
            <p class="text-sky-500 hover:underline pr-2">Özyer B.</p>
          </div>
          <div>
            <p class="text-sky-500 hover:underline pr-2">Şimşek E</p>
          </div>
        </div>
        <p class="text-gray-400 pb-5">
          IEEE ACCESS, cilt.8, ss.194601-194611, 2020 (SCI İndekslerine Giren Dergi)
        </p>

        <a
          class="font-bold hover:underline"
          href="https://avesis.atauni.edu.tr/yayin/75289d2c-6dfc-4149-9dc9-857e69dc0fd6/analysis-of-biometric-data-using-watermarking-techniques"
          >Analysis of biometric data using watermarking techniques</a
        >
        <div class="flex flex-row">
          <div>
            <p class="text-sky-500 hover:underline pr-2">Jorh F.</p>
          </div>
          <div>
            <p class="text-sky-500 hover:underline pr-2">Özyer B.</p>
          </div>
          <div>
            <p class="text-sky-500 hover:underline pr-2">Fachkha C.</p>
          </div>
        </div>
        <p class="text-gray-400 pb-5">
          TURKISH JOURNAL OF ELECTRICAL ENGINEERING AND COMPUTER SCIENCES, cilt.28, sa.6,
          ss.3235-3252, 2020 (SCI İndekslerine Giren Dergi)
        </p>

        <a
          class="font-bold hover:underline"
          href="https://avesis.atauni.edu.tr/yayin/e0983a53-976e-401a-a982-fef4f48703d9/momentum-transfer-from-preshape-to-grasping"
          >Momentum transfer from preshape to grasping</a
        >
        <div class="flex flex-row">
          <div>
            <p class="text-sky-500 hover:underline pr-2">Ozyer B.</p>
          </div>
          <div>
            <p class="text-sky-500 hover:underline pr-2">Erkmen İ.</p>
          </div>
          <div>
            <p class="text-sky-500 hover:underline pr-2">Erkmen A. M.</p>
          </div>
        </div>
        <p class="text-gray-400 pb-5">
          Journal of Intelligent and Robotic Systems: Theory and Applications, cilt.75,
          ss.173-191, 2014 (SCI İndekslerine Giren Dergi)
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "main-Yayinlar",
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
