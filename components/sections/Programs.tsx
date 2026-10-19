import { programs } from "@/lib/config";

export function Programs() {
  return (
    <section className="pn" id="programs">
      <header className="pn-h">
        <h2>Programs</h2>
        <span>funds reserved up front</span>
      </header>
      <div className="pn-b prog-grid">
        {programs.map((program) => (
          <article key={program.title} className={program.done ? "prog done" : "prog live"}>
            <header>
              <span className="tag">{program.tag}</span>
              <em>{program.meta}</em>
            </header>
            <h3>{program.title}</h3>
            <p>{program.body}</p>
            <footer>{program.foot}</footer>
          </article>
        ))}
      </div>
    </section>
  );
}
