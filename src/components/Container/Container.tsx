interface ContainerProps {
  type?: 'gifticon' | 'menu';
}

const Container: React.FC<ContainerProps> = ({ type = 'menu' }) => {
  return (
    <div
      className={`flex items-center text-coffee-400 px-2 py-4 ${
        type === 'menu' ? 'justify-between' : 'justify-end'
      }`}
    >
      {type === 'menu' ? (
        <select name="category" id="category" required defaultValue="category">
          <option value="category" disabled>
            카테고리
          </option>
          <option value="drinks">음료</option>
          <option value="food">푸드</option>
          {/* <option value="MD">MD</option> */}
        </select>
      ) : (
        ''
      )}
      <select name="name" id="name" required defaultValue="name">
        <option value="name" disabled>
          {type === 'menu' ? '메뉴명' : '기프티콘명'}
        </option>
        <option value="menu1">이름1</option>
      </select>
    </div>
  );
};

export default Container;
