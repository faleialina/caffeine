function Options({ option }) {
  return (
    <a>
      <p onClick={() => scroll(0, option.path)} >{option.label}</p>
    </a>
  );
}

export default Options;