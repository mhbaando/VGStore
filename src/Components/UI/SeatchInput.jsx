import images from "../../Constants/images";
const SearchInput = (props) => {
  return (
    <div className={props.className}>
      <input
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
      <img src={images.Search} alt="Search icon" />
    </div>
  );
};

export default SearchInput;
