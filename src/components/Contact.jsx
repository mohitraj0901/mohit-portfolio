const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-950 text-center text-white px-4">
      <h2 className="text-3xl font-bold text-cyan-400 mb-4">
        Contact
      </h2>

      <p className="text-gray-400 max-w-xl mx-auto mb-8">
        Open to AI/ML Engineering, Software Development (SDE), and Research opportunities.
      </p>

      <div className="flex justify-center gap-4 flex-wrap">
        <a
          href="mailto:rajmohit.iiitranchi@gmail.com"
          className="px-6 py-3 bg-cyan-500 text-black font-medium rounded-lg hover:bg-cyan-600 transition"
        >
          Send Email
        </a>

        <a
          href="https://github.com/mohitraj0901"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-cyan-400 px-6 py-3 rounded-lg hover:bg-cyan-400 hover:text-black transition"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/mohitraj0107/"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-cyan-400 px-6 py-3 rounded-lg hover:bg-cyan-400 hover:text-black transition"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Contact;
