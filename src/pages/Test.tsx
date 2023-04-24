import { useAtom } from "jotai";
import { textAtom } from "@store/text";

const Test = () => {
  const [text] = useAtom(textAtom);

  return <div>{text}</div>;
};

export default Test;
