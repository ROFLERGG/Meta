const Section = ({ children }) => {
  return (
    <section className="py-[60px]">
      <div className="max-w-[1600px] mx-auto px-4">{children}</div>
    </section>
  );
};

export default Section;
