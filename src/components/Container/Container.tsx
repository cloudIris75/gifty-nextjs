import Button from '../Button';

interface ContainerProps {
  type?: 'gifticon' | 'menu';
}

const Container: React.FC<ContainerProps> = ({ type = 'menu' }) => {
  const onSubtractButtonClick = () => {};

  const onAddButtonClick = () => {};

  return (
    <div className="flex flex-col items-between justify-center">
      <div className="flex items-center justify-end text-coffee-400 space-x-4">
        {type === 'menu' ? (
          <select
            name="category"
            id="category"
            required
            defaultValue="category"
            className="bg-coffee-100"
          >
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
        <select
          name="name"
          id="name"
          required
          defaultValue="name"
          className="bg-coffee-100"
        >
          <option value="name" disabled>
            {type === 'menu' ? '메뉴명' : '기프티콘명'}
          </option>
          <option value="menu1">이름1</option>
        </select>
      </div>
      <div className="flex justify-between px-2 pt-4">
        <div className="border border-coffee-400 w-16 h-16"> </div>
        <div className="flex flex-col items-end justify-between w-1/2">
          <div className="text-coffee-400 font-bold">menu name</div>
          <div
            className={`flex w-full ${
              type === 'menu' ? 'justify-between' : 'justify-end'
            }`}
          >
            <div className={`${type === 'menu' ? 'flex' : 'hidden'} space-x-2`}>
              <Button
                name="-"
                onclick={onSubtractButtonClick}
                classname="px-2"
              />
              <div className="text-coffee-400">n</div>
              <Button name="+" onclick={onAddButtonClick} classname="px-2" />
            </div>
            <div className="text-coffee-400">n,000원</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
