function Options({ option }) {
  return (
    <a
      style={{
        transition: 'scroll-position 0.5s ease-in-out',
      }}
      onClick={() => scroll(0, option.path)}
    >
      <p>{option.label}</p>
    </a>
  );
}

export default Options;
