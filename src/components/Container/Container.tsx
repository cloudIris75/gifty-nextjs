import Button from '../Button';

interface ContainerProps {
  type?: 'gifticon' | 'menu';
}

const Container: React.FC<ContainerProps> = ({ type = 'menu' }) => {
  const onSubtractButtonClick = () => {};

  const onAddButtonClick = () => {};

  return (
    <div className="flex flex-col items-between justify-center">
      <div
        className={`flex items-center text-coffee-400 px-2 py-4 ${
          type === 'menu' ? 'justify-between' : 'justify-end'
        }`}
      >
        {type === 'menu' ? (
          <select
            name="category"
            id="category"
            required
            defaultValue="category"
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
        <select name="name" id="name" required defaultValue="name">
          <option value="name" disabled>
            {type === 'menu' ? '메뉴명' : '기프티콘명'}
          </option>
          <option value="menu1">이름1</option>
        </select>
      </div>
      <div className="flex justify-between px-4 py-2 rounded-xl bg-coffee-100">
        <div className="bg-white w-14 h-14 rounded-full"> </div>
        <div className="flex flex-col items-end justify-between w-1/2">
          <div className="text-coffee-400">메뉴1</div>
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
              <Button
                name="+"
                onclick={onAddButtonClick}
                classname="px-2 py-0"
              />
            </div>
            <div className="text-coffee-400">n원</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
