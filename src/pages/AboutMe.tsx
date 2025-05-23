import type { FC } from 'react';

const AboutMe: FC = () => {
  return (
    <div className="relative mt-10">
      <h1 className="text-2xl font-bold">👋 Hi, I'm Percy Kuang 👨‍💻‍</h1>
      <p className="mt-4 text-base leading-10">
        一个专注于前端开发的工程师，喜欢研究技术，喜欢分享，喜欢学习，喜欢思考。大学毕业后在字节跳动的飞书部门工作了三年，对
        B
        端产品有深入的了解，对用户体验有深入的思考，享受将一个个想法落地成现实的过程。具体到技术方面，对工程化、组件化、
        框架原理、性能优化、代码规范等都有深入的了解和实践，我也喜欢将这些技术以及思考记录下来，如果你对我研究的东西感兴趣，可以关注我的博客内容。
      </p>
      <p className="mt-1 text-base leading-10">
        工作之外，我喜欢看电影、听音乐、打游戏，如果假期时间比较长，我也会出去旅游，看看外面的世界。
      </p>
    </div>
  );
};

export default AboutMe;
