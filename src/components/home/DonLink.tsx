

const DonLink = () => {
  const games = [
    {
      title: "Minecraft",
      img: "https://i.ibb.co/L0Zqk7c/2x1-NSwitch-Minecraft-image1600w.jpg",
      link: "https://www.minecraft.net/en-us/download",
    },
    {
      title: "Roblox",
      img: "https://i.ibb.co/ry9tyvg/Roblox-Key.png",
      link: "https://www.roblox.com/download",
    },
    {
      title: "Gta-5",
      img: "https://i.ibb.co/1816Csg/23-1024x576.webp",
      link: "https://www.rockstargames.com/gta-v",
    },
  ];

  return (
    <div className="flex flex-col items-center pb-24 overflow-x-hidden">
      {/* <h2 className="text-3xl sm:text-4xl mb-9 font-bold">Game Download link</h2> */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {games.map((game, idx) => (
          <div
            key={idx}
            className="relative w-[320px] sm:w-96 shadow-xl  overflow-hidden"
          >
            {/* Background image */}
            <div
              className="w-full h-64 sm:h-72 bg-cover bg-center"
              style={{ backgroundImage: `url(${game.img})` }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30" />
            {/* Card body */}
            <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
              <h2 className="text-xl sm:text-2xl font-bold mb-2">{game.title}</h2>
              <p className="mb-4">Go this link for download this game</p>
              <a
                href={game.link}
                className="btn-under-line underline decoration-blue-500 decoration-2 underline-offset-4"
              >
                Download link
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonLink;
