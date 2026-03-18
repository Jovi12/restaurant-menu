import { useState, useEffect } from "react";

function App() {
  const [open, setOpen] = useState(false);

  // Close on ESC
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  // Disable scroll
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const handleScroll = (id: string) => {
    setOpen(false);

    setTimeout(() => {
      const el = document.querySelector(id);
      if (el) {
        const offset = 20;
        const top =
          el.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
          top,
          behavior: "smooth",
        });
      }
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* HERO */}
      <section className="h-[60vh] bg-cover bg-center flex items-center justify-center text-white text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5')",
        }}
      >
        <div className="bg-black/50 p-6 rounded-xl">
          <h1 className="text-3xl font-bold">La Cucina Bella</h1>
          <p className="text-sm">Where Every Meal Tells a Story</p>
        </div>
      </section>

      {/* SECTIONS */}
      <div id="breakfast" className="p-10 h-screen">Breakfast Section</div>
      <div id="round-clock" className="p-10 h-screen">Round Clock</div>
      <div id="comfort" className="p-10 h-screen">Comfort</div>
      <div id="lunch-dinner" className="p-10 h-screen">Lunch Dinner</div>
      <div id="senior" className="p-10 h-screen">Senior</div>
      <div id="regional" className="p-10 h-screen">Regional</div>

      {/* FLOATING BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-5 right-5 bg-orange-500 text-white p-4 rounded-full z-50 shadow-lg"
      >
        ☰
      </button>

      {/* OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 z-40"
        />
      )}

      {/* MENU PANEL */}
      <div
        className={`fixed bottom-0 right-0 w-full max-w-sm bg-white p-4 rounded-t-2xl z-50 transition-transform duration-300 ${
          open ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <h3 className="text-lg font-semibold mb-4">Menu Categories</h3>

        <div className="space-y-3">
          <button onClick={() => handleScroll("#breakfast")}>Breakfast</button>
          <button onClick={() => handleScroll("#round-clock")}>Round the clock</button>
          <button onClick={() => handleScroll("#comfort")}>Comfort corner</button>
          <button onClick={() => handleScroll("#lunch-dinner")}>Lunch & Dinner</button>
          <button onClick={() => handleScroll("#senior")}>Senior Citizens</button>
          <button onClick={() => handleScroll("#regional")}>Regional Selection</button>
        </div>
      </div>
    </div>
  );
}

export default App;