function Plus() {
  return (
    <>
      {/* Top Left + */}
      <span className="bg-primary absolute top-0 left-0 h-1.5 w-[50px] opacity-0 transition-all duration-600 group-hover:opacity-100" />
      <span className="bg-primary absolute top-0 left-0 h-[50px] w-1.5 opacity-0 transition-all duration-600 group-hover:opacity-100" />

      {/* Bottom Right + */}
      <span className="bg-primary absolute right-0 bottom-0 h-1.5 w-[50px] opacity-0 transition-all duration-600 group-hover:opacity-100" />
      <span className="bg-primary absolute right-0 bottom-0 h-[50px] w-1.5 opacity-0 transition-all duration-600 group-hover:opacity-100" />
    </>
  );
}

export default Plus;
