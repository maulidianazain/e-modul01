document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const moduleList = document.getElementById("moduleList");

  const modules = [
    {
      title: "Modul 1",
      image: "./assets/cover-ebook/1.png",
      pdf: "./assets/modul/modul1.pdf",
    },
    {
      title: "Modul 2",
      image: "./assets/cover-ebook/2.png",
      pdf: "./assets/modul/modul2.pdf",
    },
    {
      title: "Modul 3",
      image: "./assets/cover-ebook/3.png",
      pdf: "./assets/modul/modul3.pdf",
    },
    {
      title: "Modul 4",
      image: "./assets/cover-ebook/4.png",
      pdf: "./assets/modul/modul4.pdf",
    },
    {
      title: "Modul 5",
      image: "./assets/cover-ebook/5.png",
      pdf: "./assets/modul/modul5.pdf",
    },
    {
      title: "Modul 6",
      image: "./assets/cover-ebook/6.png",
      pdf: "./assets/modul/modul6.pdf",
    },
    {
      title: "Modul 7",
      image: "./assets/cover-ebook/7.png",
      pdf: "./assets/modul/modul7.pdf",
    },

    // Tambahkan data modul lainnya sesuai kebutuhan
  ];

  function displayModules(modules) {
    moduleList.innerHTML = "";
    modules.forEach((module) => {
      const moduleCard = document.createElement("div");
      moduleCard.classList.add("module-card");

      const title = document.createElement("h3");
      title.classList.add("module-title");
      title.textContent = module.title;
      moduleCard.appendChild(title);

      const img = document.createElement("img");
      img.src = module.image;
      img.alt = module.title;
      moduleCard.appendChild(img);

      const downloadLink = document.createElement("a");
      downloadLink.href = module.pdf;
      downloadLink.textContent = "Download PDF";
      downloadLink.classList.add("download-link");
      downloadLink.setAttribute("target", "_blank"); // Untuk membuka tautan unduhan di tab baru
      moduleCard.appendChild(downloadLink);

      moduleList.appendChild(moduleCard);
    });
  }

  function searchModules(query) {
    const filteredModules = modules.filter((module) =>
      module.title.toLowerCase().includes(query.toLowerCase())
    );
    displayModules(filteredModules);
  }

  displayModules(modules);

  searchInput.addEventListener("input", function () {
    searchModules(this.value);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const searchInputVideo = document.getElementById("searchInputVideo");
  const videoModuleList = document.getElementById("videoModuleList");

  const videosAndModules = [
    {
      title: "Video 1",
      videoUrl: "https://www.youtube.com/embed/cGjueCyKb5g?si=HJBYXSDyuadkHzRC",
      moduleTitle: "Kesiapan Menikah",
      pdf: "./assets/materi/materi 1.pdf",
    },

    {
      title: "Video 2",
      videoUrl: "https://www.youtube.com/embed/IyY71foRcSo?si=WhdfulBbcc4rNgbf",
      moduleTitle: "Intimate Relationship",
      pdf: "./assets/materi/materi 2.pdf",
    },

    {
      title: "Video 3",
      videoUrl: "https://www.youtube.com/embed/mxokVTWd7zQ?si=z_HwuLC0Dv7yZwFc",
      moduleTitle: "Membangun Landasan Keluarga",
      pdf: "./assets/materi/materi 3.pdf",
    },

    {
      title: "Video 4",
      videoUrl: "https://www.youtube.com/embed/O8--VVNUO7g?si=hAwf3WW3CcjIJr04",
      moduleTitle: "Peran dan Tanggung Jawab dalam Mendidik Anak",
      pdf: "./assets/materi/materi 4.pdf",
    },

    {
      title: "Video 5",
      videoUrl: "https://www.youtube.com/embed/jnwOBr7DtKA?si=4edvU_mtq5yX1wTS",
      moduleTitle:
        "Pentingnya Kematangan Emosi dalam Membangun Pernikahan dan Keluarga",
      pdf: "./assets/materi/materi 5.pdf",
    },

    {
      title: "Video 6",
      videoUrl: "https://www.youtube.com/embed/fLa8Uw04QaY?si=fBg-3toatQDHCz5f",
      moduleTitle: "Mengatasi Konflik Keluarga",
      pdf: "./assets/materi/materi 6.pdf",
    },

    {
      title: "Video 7",
      videoUrl: "https://www.youtube.com/embed/aCn8ERT7hLs?si=3aldG5ivBATXQgAE",
      moduleTitle: "Mengenal Pola Asuh Orangtua",
      pdf: "./assets/materi/materi 7.pdf",
    },
    {
      title: "Video 8",
      videoUrl: "https://www.youtube.com/embed/CA100lg7uSk?si=lftgt8LaXLjXIgqJ",
      moduleTitle: "Menyiapkan Strategi Komunikasi Keluarga",
      pdf: "./assets/materi/materi 8.pdf",
    },

    // Tambahkan data video dan modul lainnya sesuai kebutuhan
  ];

  function displayVideosAndModules(videosAndModules) {
    videoModuleList.innerHTML = "";
    videosAndModules.forEach((item) => {
      const card = document.createElement("div");
      card.classList.add("module-card");

      const title = document.createElement("h3");
      title.classList.add("module-title");
      title.textContent = item.title;
      card.appendChild(title);

      const videoEmbed = document.createElement("iframe");
      videoEmbed.src = item.videoUrl;
      videoEmbed.allowFullscreen = true;
      card.appendChild(videoEmbed);

      const moduleTitle = document.createElement("h4");
      moduleTitle.textContent = item.moduleTitle;
      card.appendChild(moduleTitle);

      const downloadLink = document.createElement("a");
      downloadLink.href = item.pdf;
      downloadLink.textContent = "Download PDF";
      downloadLink.classList.add("download-link");
      downloadLink.setAttribute("target", "_blank"); // Untuk membuka tautan unduhan di tab baru
      card.appendChild(downloadLink);

      videoModuleList.appendChild(card);
    });
  }

  function searchVideosAndModules(query) {
    const filteredVideosAndModules = videosAndModules.filter(
      (item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.moduleTitle.toLowerCase().includes(query.toLowerCase())
    );
    displayVideosAndModules(filteredVideosAndModules);
  }

  displayVideosAndModules(videosAndModules);

  searchInputVideo.addEventListener("input", function () {
    searchVideosAndModules(this.value);
  });
});
