const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-950 text-center text-white">

      <h2 className="text-3xl font-bold text-cyan-400 mb-4">
        Contact
      </h2>

      <p className="text-gray-400 mb-6">
        Open to Software Engineering Internship opportunities.
      </p>

      <div className="flex justify-center gap-4">

        <a
  href="mailto:rajmohit.iiitranchi@gmail.com"
  className="px-6 py-3 bg-cyan-500 rounded-lg hover:bg-cyan-600"
>
  Send Email
</a>

        <a className="border border-cyan-400 px-6 py-2 rounded">
          GitHub
        </a>

        <a className="border border-cyan-400 px-6 py-2 rounded">
          LinkedIn
        </a>

      </div>

    </section>
  );
};

export default Contact;