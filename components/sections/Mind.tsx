import Image from "next/image";
import { assets } from "@/lib/assets";
import { mind } from "@/lib/config";

export function Mind() {
  return (
    <section className="pn" id="mind">
      <header className="pn-h">
        <h2>{mind.heading}</h2>
        <span>{mind.machine}</span>
      </header>
      <div className="pn-b mind-grid">
        <div className="mind-card">
          <Image
            src={assets.logo}
            alt="CatGPT 7.0 portrait: black fur, amber eyes, red cape, gold chain, Ethereum pendant"
            width={520}
            height={520}
          />
          <div>
            <b>{mind.name}</b>
            <span>{mind.model}</span>
          </div>
        </div>
        <div className="mind-copy">
          <p>{mind.body}</p>
          <ul className="ms">
            {mind.notes.map((note) => (
              <li key={note.label} className={note.tone === "pending" ? "t-pending" : "t-planned"}>
                <span>{note.label}</span>
                {note.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
