import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode && "dark"}`}>
      <main className="flex min-h-screen flex-col p-12 bg-neutral-100 dark:bg-neutral-900">
        <nav className="grid grid-cols-3 items-center">
          <h1 className="text-xl font-semibold dark:text-white">
            DesignConference
          </h1>
          <span className="justify-self-center text-blue-600 font-mono">
            September 2023 | San Francisco, CA
          </span>
          <button className="justify-self-end p-4 bg-blue-600 text-white rounded-xl font-semibold">
            Get your tickets
          </button>
        </nav>
        <section className="w-[90%] max-w-3xl mx-auto mt-40 flex flex-col gap-8">
          <h1 className="text-blue-600 dark:text-blue-600 text-7xl font-semibold">
            A design conference for the dark side.
          </h1>
          <p className="text-sky-800 dark:text-neutral-300 text-2xl tracking-wide leading-relaxed">
            The next generation of web users are tech-savvy and suspicious. They
            know how to use dev tools, they can detect a phishing scam from a
            mile away, and they certainly aren't accepting any checks from
            Western Union.
          </p>
          <p className="text-sky-800 dark:text-neutral-300 text-2xl tracking-wide leading-relaxed">
            At DesignConference you'll learn about the latest dark patterns
            being developed to trick even the smartest visitors, and you'll
            learn how to deploy them without ever being detected.
          </p>
          <div className="flex gap-12">
            <InfoView title="Speakers" info="18" />
            <InfoView title="People Attending" info="2,000+" />
            <InfoView title="Venue" info="Chase Center" />
            <InfoView title="Location" info="San Francisco" />
          </div>
        </section>
        <button
          className="absolute w-16 h-16 bottom-16 right-16 bg-neutral-900 dark:bg-white rounded-full text-white dark:text-black font-semibold"
          onClick={toggleDarkMode}
        >
          {darkMode ? "LHT" : "DRK"}
        </button>
      </main>
    </div>
  );
}

const InfoView: React.FC<{ title: string; info: string }> = ({
  title,
  info,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm font-mono text-blue-500">{title}</span>
      <span className="text-2xl font-medium dark:text-neutral-300">{info}</span>
    </div>
  );
};
