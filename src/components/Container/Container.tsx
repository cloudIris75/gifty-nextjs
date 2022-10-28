interface ContainerProps {}

const Container: React.FC<ContainerProps> = () => {
  return (
    <div className="flex items-center justify-between text-coffee-400 px-2 py-4">
      <select name="category" id="category" required defaultValue="category">
        <option value="category" disabled>
          카테고리
        </option>
        <option value="drinks">음료</option>
        <option value="food">푸드</option>
        <option value="MD">MD</option>
      </select>
      <select name="name" id="name" required defaultValue="name">
        <option value="name" disabled>
          메뉴명
        </option>
        <option value="menu1">메뉴1</option>
      </select>
    </div>
  );
};

export default Container;
