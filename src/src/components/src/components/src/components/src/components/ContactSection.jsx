export default function ContactSection() {
  return (
    <section id="contact" className="py-28 px-8 bg-obsidian">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-white text-4xl mb-8 font-dotgothic uppercase tracking-tighter">Let's Build Something <span className="text-blueprint-blue">Monumental</span></h2>
        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your Name" className="form-input-line" />
          <input type="email" placeholder="Email Address" className="form-input-line" />
          <textarea placeholder="Tell me about your project" rows={4} className="form-input-line resize-none" />
          <button type="submit" className="px-10 py-4 bg-blueprint-blue text-obsidian font-bold uppercase tracking-widest text-sm">Send Transmission</button>
        </form>
      </div>
    </section>
  );
}
