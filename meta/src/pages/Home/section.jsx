const Section = ({ className = '', children }) => {
  return (
    <section className={`${className} py-[60px]`}>
      <div className="container">{children}</div>
    </section>
  );
};

export default Section;
