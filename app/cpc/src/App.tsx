import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-white text-stone-900">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <div className="rounded-xl border border-slate-200 p-6 shadow-sm">
            Hello World!
          </div>
          <div className="rounded-xl border border-slate-200 p-6 shadow-sm">
            Kolejna sekcja
          </div>
          <div className="rounded-xl border border-slate-200 p-6 shadow-sm">
            Trzecia sekcja
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
