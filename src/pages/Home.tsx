import { useAtom } from "jotai";
import { textAtom } from "@/store/text";

const Home = () => {
  const [text, setText] = useAtom(textAtom);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div>
      홈페이지입니다. <input value={text} onChange={handleChange} />
    </div>
  );
};

export default Home;
