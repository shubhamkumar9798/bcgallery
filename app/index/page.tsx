export default function MemoryGallery() {
  const memories = [
    {
      id: 1,
      title: "Hackathon Nights",
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    },
    {
      id: 2,
      title: "Build Club Moments",
      img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    },
    {
      id: 3,
      title: "Farewell Smiles",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
    {
      id: 4,
      title: "Team Memories",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    },
    {
      id: 5,
      title: "Late Night Coding",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    },
    {
      id: 6,
      title: "Unforgettable Days",
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
  ];

  return (
    <main className="min-h-screen bg-neutral-950 text-white px-6 py-10">
      {/* Header */}
      <section className="max-w-6xl mx-auto mb-12">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Farewell Memory Gallery
        </h1>
        <p className="text-neutral-400 mt-4 max-w-2xl">
          A small corner of memories, laughter, and moments we built together.
          Scan the QR, relive the journey, and never forget the stories behind
          these frames.
        </p>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {memories.map((memory) => (
          <div
            key={memory.id}
            className="group relative overflow-hidden rounded-2xl bg-neutral-900 shadow-lg"
          >
            <img
              src={`${memory.img}?auto=format&fit=crop&w=800&q=80`}
              alt={memory.title}
              className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
              <p className="p-4 text-lg font-medium">{memory.title}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="text-center text-neutral-500 mt-16 text-sm">
        Made with ❤️ for our amazing seniors · Build Club
      </footer>
    </main>
  );
}
