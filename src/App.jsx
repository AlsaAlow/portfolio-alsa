import { useEffect, useState } from "react";
import DataImage from "./data";

function App() {
  const [profile, setProfile] = useState(null);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const BASE_URL = "http://localhost:3000";

    Promise.all([
      fetch(`${BASE_URL}/profile`).then((res) => res.json()),
      fetch(`${BASE_URL}/projects`).then((res) => res.json()),
    ])
      .then(([profileData, projectsData]) => {
        setProfile(profileData);
        setProjects(projectsData);
      })
      .catch((error) => {
        console.error("Gagal memuat data:", error);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading || !profile) {
    return <p className="text-center mt-10">Loading data...</p>;
  }

  return (
    <>
      {/* HERO */}
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div>
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img
              src={profile.photoMain}
              alt="Hero Image"
              className="w-10 rounded-md"
            />
            <q>Portfolio atau biodata dari mahasiswa UNKLAB.😁</q>
          </div>

          <h1 className="text-5xl/tight font-bold mb-6">
            Hi, Saya {profile.name}
          </h1>
          <p className="text-base/loose mb-6 opacity-50">
            {profile.description}
          </p>

          <div className="flex items-center sm:gap-4 gap-2">
            <a
              href="#"
              className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600 mr-2"
            >
              Download CV <i className="ri-download-line ri-lg"></i>
            </a>
            <a
              href="#projects"
              className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600"
            >
              Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>

        <img
          src={profile.photoSide}
          alt="Hero Image"
          className="w-[500px] md:ml-auto rounded-md"
        />
      </div>

      {/* TENTANG */}
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

        {/* PROYEK */}
        <div id="projects" className="projects mt-16">
          <h2 className="text-3xl font-bold mb-6">Daftar Proyek</h2>

          {projects.length === 0 ? (
            <p>Belum ada proyek.</p>
          ) : (
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
              {projects.map((item) => (
                <div
                  key={item.id}
                  className="bg-zinc-800 p-5 rounded-xl hover:bg-zinc-700 transition"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-md mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm opacity-70">{item.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* PANTUN */}
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