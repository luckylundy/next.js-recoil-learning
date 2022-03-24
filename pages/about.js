import Link from "next/link";
import { useRecoilValue } from "recoil";
import { countState, userState } from "../components/atoms";

const About = () => {
  //setCount,setUserを定義していないので値の読み取りのみ可能
  const count = useRecoilValue(countState);
  const user = useRecoilValue(userState);

  return (
    <>
      <h1>LuckyLundyについて</h1>
      <div>
        <p>count:{count}</p>
        <p>user.name:{user.name}</p>
        <p>user.age:{user.age}</p>
      </div>
      <hr />
      <div>
        <Link href="/">Home</Link>
      </div>
    </>
  );
};

export default About;
