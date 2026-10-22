
"use client";

import { useState } from "react";
import { Search, Trophy, Shield, MapPin } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Hack the Future",
    type: "Hackathon",
    format: "Online",
    description: "Build innovative projects and collaborate with developers.",
    deadline: "Check official website",
    color: "border-violet-400",
  },
  {
    id: 2,
    title: "Cyber Security CTF",
    type: "CTF",
    format: "Online",
    description: "Test your skills in web security, forensics and cryptography.",
    deadline: "Check official website",
    color: "border-emerald-400",
  },
  {
    id: 3,
    title: "Campus Innovation Challenge",
    type: "Hackathon",
    format: "Delhi NCR",
    description: "Turn your ideas into projects with a team.",
    deadline: "Check official website",
    color: "border-sky-400",
  },
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(search.toLowerCase()) ||
      event.description.toLowerCase().includes(search.toLowerCase()) ||
      event.format.toLowerCase().includes(search.toLowerCase());

    const matchesFilter = filter === "All" || event.type === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <a href="#" className="text-2xl font-bold">
          compete<span className="text-violet-400">hub.</span>
        </a>
        <span className="flex items-center gap-2 text-sm text-slate-400">
          <MapPin size={16} /> Delhi NCR & Online
        </span>
      </nav>

      <section className="px-6 pb-16 pt-16 text-center sm:pt-24">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">
          One place. Every opportunity.
        </p>

        <h1 className="text-4xl font-bold leading-tight sm:text-6xl">
          Your next big opportunity
          <span className="block text-violet-400">starts here.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          Discover hackathons and CTF competitions without searching dozens
          of websites. Find your next challenge, all in one place.
        </p>

        <a
          href="#competitions"
          className="mt-8 inline-block rounded-xl bg-violet-500 px-7 py-3.5 font-semibold hover:bg-violet-400"
        >
          Explore competitions →
        </a>
      </section>

      <section id="competitions" className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-8">
          <p className="text-sm font-medium text-violet-300">
            YOUR NEXT CHALLENGE
          </p>
          <h2 className="mt-2 text-3xl font-bold">Explore competitions</h2>
        </div>

        <div className="mb-6 flex flex-col gap-4 sm:flex-row">
          <div className="flex flex-1 items-center gap-3 rounded-xl border border-slate-700 bg-slate-900 px-4">
            <Search size={20} className="text-slate-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search hackathons, CTFs..."
              className="w-full bg-transparent py-4 text-white outline-none placeholder:text-slate-500"
            />
          </div>

          <div className="flex gap-2">
            {["All", "Hackathon", "CTF"].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                  filter === type
                    ? "bg-violet-500 text-white"
                    : "border border-slate-700 text-slate-300 hover:bg-slate-800"
                }`}
              >
                {type === "All" ? "All" : type === "CTF" ? "CTFs" : "Hackathons"}
              </button>
            ))}
          </div>
        </div>

        <p className="mb-5 text-sm text-slate-400">
          {filteredEvents.length} competitions found
        </p>

        {filteredEvents.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-3">
            {filteredEvents.map((event) => (
              <article
                key={event.id}
                className={`rounded-2xl border border-slate-800 border-t-4 ${event.color} bg-slate-900 p-6 transition hover:-translate-y-1 hover:bg-slate-800`}
              >
                <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
                  {event.type}
                </span>

                <h3 className="mt-5 text-xl font-bold">{event.title}</h3>

                <p className="mt-3 flex items-center gap-2 text-sm text-slate-400">
                  {event.type === "CTF" ? <Shield size={16} /> : <Trophy size={16} />}
                  {event.format}
                </p>

                <p className="mt-4 text-sm leading-6 text-slate-400">
                  {event.description}
                </p>

                <div className="mt-6 border-t border-slate-800 pt-4">
                  <p className="text-xs text-slate-500">{event.deadline}</p>
                  <p className="mt-3 text-sm font-medium text-violet-300">
                    Sample listing · Registration link coming soon
                  </p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-slate-800 bg-slate-900 px-6 py-12 text-center">
            <Search className="mx-auto mb-3 text-slate-500" size={32} />
            <h3 className="text-lg font-semibold">No competitions found</h3>
            <p className="mt-2 text-sm text-slate-400">
              Try another search or select a different category.
            </p>
            <button
              onClick={() => {
                setSearch("");
                setFilter("All");
              }}
              className="mt-5 rounded-lg bg-violet-500 px-4 py-2 text-sm font-medium"
            >
              Clear filters
            </button>
          </div>
        )}

        <p className="mt-6 text-center text-xs text-slate-500">
          Demo data only. Real competition listings will be integrated next.
        </p>
      </section>

      <footer className="border-t border-slate-800 px-6 py-8 text-center text-sm text-slate-500">
        competehub · Discover. Compete. Grow.
      </footer>
    </main>
  );
}
