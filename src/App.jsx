import { useEffect, useState } from "react";
import DataImage from "./data";

function App() {
  const [data, setData] = useState(null);

  // Fetch data dari db.json
  useEffect(() => {
    fetch("/db.json")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error("Gagal memuat data:", error));
  }, []);

  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div>
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl ">
            <img
              src="/assets/WhatsApp Image 2025-11-13 at 13.54.32.jpeg"
              alt="Hero Image"
              className="w-10 rounded-md"
            />
            <q>Portfolio atau biodata dari mahasiswa UNKLAB.😁</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">Hi, Saya Alsa Alow</h1>
          <p className="text-base/loose mb-6 opacity-50">
            Mahasiswa Informatika yang memiliki minat besar dalam pengembangan
            web front-end dan database system. Terampil menggunakan React,
            Tailwind, dan Oracle Data Modeler untuk membuat sistem yang efisien
            dan user-friendly. Berfokus pada solusi digital yang kreatif dan
            fungsional.
          </p>
          <div className="Flex items-center sm:gap-4 gap-2">
            <a
              href="#"
              className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600 mr-2" 
            >
              Download CV <i className="ri-download-line ri-lg"></i>
            </a>
            <a
              href="#"
              className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600"
            >
              Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img
          src="/assets/WhatsApp Image 2025-11-13 at 13.54.32 (1).jpeg"
          alt="Hero Image"
          className="w-[500px] md:ml-auto rounded-md"
        />
      </div>

      {/* tentang */}
      <div className="tentang mt-32 py-10">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg">
          <img
            src={DataImage.HeroImage}
            alt="Image"
            className="w-12 rounded-md mb-10 sm:hidden"
          />
          <p className="text-base/loose mb-10">
            Saya adalah mahasiswa Informatika dari Universitas Klabat yang
            memiliki ketertarikan kuat pada pengembangan web dan sistem basis
            data. Saya juga sedang belajar menggunakan React, Tailwind CSS, dan
            Oracle Data Modeler untuk membangun antarmuka yang interaktif. Saya
            senang mempelajari hal-hal baru di dunia teknologi, AI dan juga
            bagian bahasa programming.
          </p>
          <div className="flex items-center justify-between">
            <img
              src={DataImage.HeroImage}
              alt="Image"
              className="w-12 rounded-md sm:block hidden"
            />
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  4<span className="text-violet-500">+</span>
                </h1>
                <p>Proyek Selesai</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">
                  1<span className="text-violet-500">+</span>
                </h1>
                <p>Tahun Pengalaman</p>
              </div>
            </div>
          </div>
        </div>

        

        {/* 🔽 tampilkan data dari db.json di bawah pantun */}
        <div className="projects mt-16">
          <h2 className="text-3xl font-bold mb-6">Daftar Proyek</h2>

          {!data ? (
            <p>Loading data...</p>
          ) : (
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
              {data.projects.map((item) => (
                <div
                  key={item.id}
                  className="bg-zinc-800 p-5 rounded-xl hover:bg-zinc-700 transition"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-md mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm opacity-70">{item.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="tools mt-32">
          <h1 className="text-4xl/snug font-bold mb-4">
            Terimakasih Tuhan memberkati
          </h1>
          <p className="w-2/5 text-base/loose opacity-50">
            jalan jalan ke pasar kisai, tak lupa membeli pakan. walau belum
            selesai, tetapi akan ku usahakan
          </p>
        </div>
      </div>
    </>
  );
}

export default App;