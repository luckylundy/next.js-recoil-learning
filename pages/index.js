import Link from "next/link";
import { useRecoilState } from "recoil";
import { countState, userState } from "../components/atoms";

const Home = () => {
  //userとcountの値の操作を定義
  const [count, setCount] = useRecoilState(countState);
  const [user, setUser] = useRecoilState(userState);

  //countの値を1増やす
  const increment = (c) => {
    return c + 1;
  };

  //countの値を1減らす
  const decrement = (c) => {
    return c - 1;
  };

  //userの年齢を1増やす
  const updateUser = (u) => {
    return { ...u, ...{ age: u.age + 1 } };
  };

  //userの年齢を1減らす
  const downdateUser = (u) => {
    return { ...u, ...{ age: u.age - 1 } };
  };

  return (
    <>
      <h1>LuckyLundy's Home</h1>
      <div>
        <p>count:{count}</p>
        <button onClick={() => setCount(increment)}>カウントアップ</button>
        <button onClick={() => setCount(decrement)}>カウントダウン</button>
        <hr />
        <p>user.name:{user.name}</p>
        <p>user.age:{user.age}</p>
        <button onClick={() => setUser(updateUser)}>age increment</button>
        <button onClick={() => setUser(downdateUser)}>age decrement</button>
      </div>
      <hr />
      <div>
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
    </>
  );
};

export default Home;
